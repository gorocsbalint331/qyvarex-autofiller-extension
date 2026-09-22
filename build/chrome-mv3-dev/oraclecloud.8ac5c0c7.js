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
})({"fbP2l":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\oraclecloud.js",
    "bundleId": "5363f28c8ac5c0c7",
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
var j = z(require("b18e4b4c931d195e"));
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

},{"b18e4b4c931d195e":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"31jyS":[function(require,module,exports) {
/**
 * Parcel module id: 8A5ca
 * Resolved path: src/contents/sites/oraclecloud.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~contents/sites/oraclecloud/address-operation -> cEpli  =>  src/contents/sites/oraclecloud/address-operation.js
 *   ~contents/sites/oraclecloud/answer -> 9Ki4d  =>  src/contents/sites/oraclecloud/answer.js
 *   ~contents/sites/oraclecloud/education-raw-values -> lJw3h  =>  src/contents/sites/oraclecloud/education-raw-values.js
 *   ~contents/sites/oraclecloud/operations -> gduo7  =>  src/contents/sites/oraclecloud/operations.js
 *   ~contents/sites/oraclecloud/rules -> j2pat  =>  src/contents/sites/oraclecloud/rules.js
 *   ~contents/sites/oraclecloud/section-results -> 9JNPk  =>  src/contents/sites/oraclecloud/section-results.js
 *   ~contents/sites/oraclecloud/url -> 7oftP  =>  src/contents/sites/oraclecloud/url.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~enums/http -> eJFqj  =>  src/enums/http.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/fieldLabel -> 1RmGw  =>  src/utils/fieldLabel.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "OracleCloud", ()=>P);
var o = e("@plasmohq/messaging"), i = e("~contents/methods/answer"), a = e("~contents/methods/cancellation"), l = e("~contents/methods/dom"), s = e("~contents/methods/observer"), u = e("~contents/methods/track"), c = e("~enums/http"), d = e("~contents/sites/base-filler"), f = e("~contents/sites/oraclecloud/address-operation"), p = e("~contents/sites/oraclecloud/education-raw-values"), m = e("~contents/sites/oraclecloud/answer"), h = e("~contents/sites/oraclecloud/operations"), g = e("~contents/sites/oraclecloud/rules"), b = e("~contents/sites/oraclecloud/url"), y = e("~contents/sites/oraclecloud/section-results"), v = e("~core/enums"), w = e("~store/autofillInfo"), S = e("~utils/delay"), E = e("~utils/fieldLabel");
function x() {
    if ("undefined" == typeof window) return !1;
    try {
        let e1 = "jobright_oraclecloud_combobox_debug";
        return "1" === new URLSearchParams(window.location?.search ?? "").get(e1) || window.localStorage?.getItem(e1) === "1";
    } catch  {
        return !1;
    }
}
function C(e1, t = {}) {
    let r1 = e1.startsWith("education-major-text:") || "education:record-route" === e1 || "education:pre-save-state" === e1 || "education:save-result" === e1 || "employment:record-route" === e1 || "employment:save-result" === e1, n = x();
    if (n || r1) try {
        let r1 = n ? console.warn : console.info;
        r1(`[OracleCloud][Flow] ${e1} ${JSON.stringify({
            t: Date.now(),
            ...t
        })}`);
    } catch  {}
}
_c = C;
function A(e1) {
    if (!e1 || "object" != typeof e1) return {
        errorType: typeof e1
    };
    let t = e1;
    return {
        errorType: "string" == typeof t.name && t.name ? t.name : e1.constructor?.name ?? "object",
        code: "string" == typeof t.code ? t.code : void 0,
        status: "number" == typeof t.status ? t.status : "number" == typeof t.statusCode ? t.statusCode : void 0,
        hasMessage: "string" == typeof t.message && t.message.length > 0
    };
}
_c1 = A;
function k(e1) {
    let t = e1?.result?.action === "SELECT_OPTIONS" ? e1.result.selected_values : [];
    return {
        action: e1?.result?.action ?? null,
        selectedValueCount: t.length,
        selectedValueLengths: t.map((e1)=>String(e1 ?? "").trim().length)
    };
}
let T = new Set([
    "pageFooterNextButton",
    "bottom-navigation-next-button"
]);
function F(e1) {
    return (e1.textContent || e1.getAttribute("value") || e1.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim();
}
_c2 = F;
function I(e1) {
    return e1.classList?.contains("apply-flow-pagination__button") || String(e1.className || "").includes("apply-flow-pagination__button");
}
_c3 = I;
function j(e1) {
    let t = e1.$input?.getAttribute?.("name"), r1 = String(t || e1.label || "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return "major" === r1;
}
function D(e1) {
    let t = e1.getAttribute("data-automation-id");
    if (t && T.has(t)) return !0;
    if (!I(e1)) return !1;
    let r1 = F(e1).toLowerCase();
    return "next" === r1 || "continue" === r1 || "submit" === r1 || "apply" === r1 || r1.includes("next") || r1.includes("continue") || r1.includes("submit");
}
_c4 = D;
class P extends d.BaseFiller {
    mergeSectionResult(e1, t, r1) {
        let n = (0, y.mergeOracleSectionResult)(this.sectionResults[e1], t, r1);
        this.sectionResults[e1] = n, this.progressTracker.updateSectionResult(n);
    }
    markSectionResultRowMissed(e1, t) {
        let r1 = this.sectionResults[e1];
        if (!r1) return;
        let n = (0, y.markOracleSectionResultRowMissed)(r1, t);
        this.sectionResults[e1] = n, this.progressTracker.updateSectionResult(n);
    }
    getFieldHandlers() {
        return {
            [v.FIELD_TYPE.TEXT]: {
                handler: async (e1, t, r1)=>{
                    let n = j(e1), o = n ? (0, p.getOracleEducationRawValues)(r1 ?? {}).rawMajor : void 0, i = o || t, a = o ? "raw-major" : "answer";
                    n && C("education-major-text:source", {
                        answerLength: String(t ?? "").trim().length,
                        rawMajorLength: o?.length || 0,
                        source: a
                    });
                    let s = await (0, l.fillInputTextField)(e1.$input, i);
                    return n && C("education-major-text:done", {
                        source: a,
                        filled: !1 !== s,
                        readbackLength: String(e1.$input?.value ?? "").trim().length
                    }), s;
                },
                options: {
                    expectArray: !1
                }
            },
            [v.FIELD_TYPE.SELECT]: {
                handler: async (e1, t, r1)=>{
                    let n = Array.isArray(t) ? t[0] : t, o = (0, f.isOracleAddressLine1Rule)(e1), i = (0, f.isOracleAddressLine1PlainInputRule)(e1);
                    if (o && C("address:fill-start", {
                        route: i ? "plain-input" : "combobox",
                        rule: (0, f.describeOracleAddressLine1Rule)(e1),
                        hasAnswer: !!n,
                        answerLength: String(n ?? "").trim().length
                    }), i) {
                        let t = await (0, l.fillInputTextField)(e1.$input, n);
                        return o && C("address:fill-done", {
                            route: "plain-input",
                            filled: t,
                            readbackLength: this.getRuleCurrentInputValue(e1).length
                        }), t;
                    }
                    if (!(0, m.canFillOracleSelectRule)(e1, n)) return o && C("address:fill-skip", {
                        reason: "invalid-select-answer",
                        route: "combobox"
                    }), !1;
                    let a = await (0, h.fillSelectField)(this.getRuleInputElement(e1) ?? e1.$input, n, e1.label, (0, p.getOracleEducationRawValues)(r1 ?? {}));
                    return o && C("address:fill-done", {
                        route: "combobox",
                        filled: a,
                        readbackLength: this.getRuleCurrentInputValue(e1).length
                    }), a;
                },
                options: {
                    expectArray: !0
                }
            },
            [v.FIELD_TYPE.LISTBOX]: {
                handler: (e1, t)=>(0, h.fillListboxField)(e1.$input, t),
                options: {
                    expectArray: !0
                }
            },
            [v.FIELD_TYPE.CHECKBOX]: {
                handler: (e1, t)=>(0, h.fillCheckBoxesField)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [v.FIELD_TYPE.RADIOGROUP]: {
                handler: (e1, t)=>(0, h.fillRadioGroupField)(e1.$input, t),
                options: {
                    expectArray: !0
                }
            },
            [v.FIELD_TYPE.DATE]: {
                handler: (e1, t)=>(0, h.fillDateField)(e1, t),
                options: {
                    expectArray: !1
                }
            }
        };
    }
    getEmploymentOperationConfig(e1) {
        let t = {};
        for (let [r1, n] of Object.entries(this.operationConfig))n && (t[r1] = async (t, r1, o)=>{
            C("employment:field-start", {
                recordIndex: e1,
                label: t.label,
                type: t.type
            });
            try {
                let i = await n(t, r1, o);
                return C("employment:field-result", {
                    recordIndex: e1,
                    label: t.label,
                    type: t.type,
                    filled: !1 !== i
                }), i;
            } catch (r1) {
                throw C("employment:field-error", {
                    recordIndex: e1,
                    label: t.label,
                    type: t.type,
                    ...A(r1)
                }), r1;
            }
        });
        return t;
    }
    async extractFormRules() {
        return (0, g.getRules)();
    }
    getSiteName() {
        return "oraclecloud";
    }
    getSubmitButtonSelector() {
        return '//button[@data-automation-id="pageFooterNextButton" or @data-automation-id="bottom-navigation-next-button"]';
    }
    getSubmitTrackingDelegationRoot() {
        return document;
    }
    resolveDelegatedSubmitButton(e1) {
        let t = e1.closest("button");
        return !t || t.disabled || "true" === t.getAttribute("aria-disabled") ? null : D(t) ? t : null;
    }
    async getAutofillSnapshot(e1 = []) {
        return this.submitTrackingRules = e1, (0, g.getFormSnapshot)(e1);
    }
    async getSubmitSnapshot() {
        return (0, g.getFormSnapshot)(this.submitTrackingRules);
    }
    getAdditionalAutofillSnapshotData(e1) {
        return this.getSavedSectionSnapshots();
    }
    getAdditionalSubmitSnapshotData() {
        return this.getSavedSectionSnapshots();
    }
    getSavedSectionSnapshots() {
        return {
            education: [
                ...this.savedEducationSnapshots
            ],
            employment: [
                ...this.savedExperienceSnapshots
            ]
        };
    }
    submitApplication() {}
    postCoverLetterStatusIfChanged(e1, t = !1) {
        (t || this.lastCoverLetterStatus !== e1) && (this.lastCoverLetterStatus = e1, (0, l.postCoverLetterStatus)(e1));
    }
    syncCoverLetterStatusFromDom(e1 = !1) {
        let t = (0, h.hasOracleCoverLetterSlot)();
        return this.postCoverLetterStatusIfChanged(t ? "required" : "", e1), t;
    }
    isCoverLetterSlotMutation(e1) {
        let t = (e1)=>e1.matches("cover-letter-upload-button") || !!e1.closest("cover-letter-upload-button") || !!e1.querySelector("cover-letter-upload-button");
        return e1.some((e1)=>!!(e1.target instanceof Element && t(e1.target)) || [
                ...e1.addedNodes,
                ...e1.removedNodes
            ].some((e1)=>e1 instanceof Element && t(e1)));
    }
    watchCoverLetterSlot() {
        if (this.coverLetterSlotObserver) return;
        let e1 = document.body || document.documentElement;
        e1 && (this.coverLetterSlotObserver = new MutationObserver((e1)=>{
            this.isCoverLetterSlotMutation(e1) && this.syncCoverLetterStatusFromDom();
        }), this.coverLetterSlotObserver.observe(e1, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: [
                "class",
                "style",
                "hidden",
                "aria-hidden"
            ]
        }));
    }
    async checkCoverLetter() {
        this.syncCoverLetterStatusFromDom(!0), this.watchCoverLetterSlot();
    }
    isOracleEmailGatePage() {
        return window.location.href.includes("/apply/email");
    }
    isOraclePinPage() {
        let e1 = Array.from(document.querySelectorAll("h1, h2, h3")).find((e1)=>e1.textContent?.trim().toLowerCase() === "confirm your identity"), t = Array.from(document.querySelectorAll("button")).find((e1)=>e1.textContent?.trim().toLowerCase() === "verify"), r1 = Array.from(document.querySelectorAll("a, button, div, span")).find((e1)=>e1.textContent?.trim().toLowerCase() === "send new code"), n = Array.from(document.querySelectorAll("input")).filter((e1)=>{
            let t = e1, r1 = Number(t.maxLength || 0);
            return "text" === t.type && 1 === r1 && !t.disabled;
        });
        return !!e1 && !!t && !!r1 && n.length >= 4;
    }
    isOracleVerificationStep() {
        return this.isOraclePinPage();
    }
    isOracleApplyFlowPage() {
        return (0, b.isOracleApplyPath)(window.location.pathname);
    }
    async ensureToken() {
        if (this.token) return;
        let e1 = (0, b.normalizeOracleApplyTokenUrl)(window.location.href);
        this.token = await (0, o.sendToBackground)({
            name: "getSiteToken",
            body: {
                url: e1
            }
        });
    }
    hasCountryDependentAddressFields() {
        return !!document.querySelector('input[name="city"], input[name="region2"], input[name="postalCode"], input[name="region1"]');
    }
    async prefillCountryBeforeRules() {
        this.latestAutofillInfo = null, this.currentRunCountry = null, this.currentRunCountryCommitted = !1;
        let e1 = await (0, w.useAutofillInfoStore).getState().fetchAutofillInfo().catch(()=>null);
        this.latestAutofillInfo = e1;
        let t = e1?.location?.country;
        if (this.currentRunCountry = "string" == typeof t && t.trim() ? t.trim() : null, C("country:prefill:prepared", {
            hasFreshCountry: !!this.currentRunCountry,
            freshCountryLength: this.currentRunCountry?.length ?? 0,
            countryInputPresent: !!document.querySelector('input[name="country"], input[id="country-12"]'),
            refreshDependentAddress: !0
        }), !this.currentRunCountry || (this.currentRunCountryCommitted = await (0, h.fillCountry)(this.currentRunCountry, void 0, {
            refreshDependentAddress: !0
        }), C("country:prefill:result", {
            committed: this.currentRunCountryCommitted,
            dependentAddressFieldsPresent: this.hasCountryDependentAddressFields()
        }), !this.currentRunCountryCommitted)) return;
        let r1 = await (0, s.waitForCondition)(()=>this.hasCountryDependentAddressFields(), {
            timeout: 8e3,
            interval: 200,
            observeTarget: document.body
        });
        C("country:prefill:dependent-address-ready", {
            committed: this.currentRunCountryCommitted,
            dependentAddressFieldsReady: r1
        }), await (0, S.delay)(300);
    }
    async requestFormAnswers(e1, t, r1 = {}) {
        C("answer:prepare", {
            ruleCount: e1.length,
            fromAgent: t,
            updateTimeTrace: !1 !== r1.updateTimeTrace
        }), await this.ensureToken(), C("answer:token-ready", {
            hasToken: !!this.token
        }), !1 !== r1.updateTimeTrace && (this.timeTrace.requestStartTime = Date.now()), C("answer:request-send", {
            ruleCount: e1.length
        });
        let n = this.captureFalconResponseRun(), o = await (0, i.getElementRules)(e1, "oraclecloud", this.token, t, this.resumeInfo.id, this.resumeInfo.tailorId);
        this.recordFalconResponse(o, n);
        let l = (0, m.formatAnswer)(o), s = (0, m.applyOracleAutofillLocationFallbacks)(l, this.latestAutofillInfo);
        return C("answer:request-settled", {
            regularCount: Object.keys(l.regular ?? {}).length,
            educationCount: l.education?.length ?? 0,
            workExperienceCount: l.workExperience?.length ?? 0,
            profileLocationFallbackFields: s
        }), (0, a.checkpoint)(), !1 !== r1.updateTimeTrace && (this.timeTrace.fillStartTime = Date.now()), l;
    }
    getCurrentPageUrl() {
        return window.location.href;
    }
    async resolveAutofillOperation(e1, t) {
        let r1;
        let n = Date.now();
        C("resolve:send", {
            fieldType: e1.field_type,
            hasOriginalAnswer: !!e1.original_answer,
            originalAnswerLength: e1.original_answer.length,
            endpoint: e1.search_request_schema.url
        });
        let i = !1, a = new Promise((e1)=>{
            r1 = setTimeout(()=>{
                i = !0, e1(null);
            }, this.addressResolveTimeoutMs);
        }), l = Promise.resolve().then(()=>(0, o.sendToBackground)({
                name: "resolveAutofillOperation",
                body: {
                    operation: e1,
                    source: "oraclecloud"
                }
            })).catch((e1)=>(C("resolve:error", {
                ms: Date.now() - n,
                message: String(e1)
            }), null));
        try {
            let e1 = await Promise.race([
                l,
                a
            ]);
            return C("resolve:settled", {
                ms: Date.now() - n,
                timedOut: i,
                hasResult: !!e1,
                ...k(e1)
            }), i && t?.(l), e1 ?? null;
        } catch (e1) {
            return C("resolve:error", {
                ms: Date.now() - n,
                message: String(e1)
            }), null;
        } finally{
            void 0 !== r1 && clearTimeout(r1);
        }
    }
    async resolveAddressLine1Record(e1, t) {
        let r1 = e1.find(f.isOracleAddressLine1SearchRule);
        if (!r1) return C("address:resolve-skip", {
            reason: "no-searchable-address-rule",
            addressRules: e1.filter(f.isOracleAddressLine1Rule).map(f.describeOracleAddressLine1Rule)
        }), t;
        C("address:resolve-candidate", {
            rule: (0, f.describeOracleAddressLine1Rule)(r1)
        });
        let n = this.activeOracleAddressResolveRun;
        return await (0, f.resolveOracleAddressLine1Record)({
            currentUrl: this.getCurrentPageUrl(),
            rule: r1,
            record: t,
            resolveOperation: (e1)=>this.resolveAutofillOperation(e1, (o)=>{
                    n && this.applyLateAddressLine1Resolution({
                        resolveRun: n,
                        rule: r1,
                        record: t,
                        fallbackSearchValue: e1.original_answer,
                        lateResolution: o
                    });
                })
        });
    }
    beginOracleAddressResolveRun() {
        let e1 = ()=>{}, t = {
            id: ++this.oracleAddressResolveRunId,
            signal: this.fillCancel.signal ?? null,
            pageUrl: this.getCurrentPageUrl(),
            normalFillDone: new Promise((t)=>{
                e1 = t;
            }),
            allowLateApply: !1,
            finished: !1,
            finishNormalFill: (r1)=>{
                t.finished || (t.finished = !0, t.allowLateApply = r1, e1());
            }
        };
        return this.activeOracleAddressResolveRun = t, t;
    }
    applyLateAddressLine1Resolution({ resolveRun: e1, rule: t, record: r1, fallbackSearchValue: n, lateResolution: o }) {
        let a = String(r1[t.label] ?? "").trim();
        o.then(async (o)=>{
            let l = (0, f.getOracleResolvedAddressLine1Value)(o);
            if (C("resolve:late-settled", {
                action: o?.result?.action ?? null,
                resolvedValueLength: l.length
            }), !l) return;
            await e1.normalFillDone;
            let s = e1.id === this.oracleAddressResolveRunId, c = this.getCurrentPageUrl() === e1.pageUrl;
            if (!e1.allowLateApply || !s || e1.signal?.aborted || !c) {
                C("resolve:late-discard", {
                    reason: e1.allowLateApply ? s ? e1.signal?.aborted ? "cancelled" : "page-changed" : "stale-run" : "normal-fill-not-complete"
                });
                return;
            }
            let d = this.getRuleCurrentInputValue(t), p = (e1)=>e1.replace(/\s+/g, " ").trim().toLowerCase(), m = p(d), h = new Set([
                p(a),
                p(n)
            ]);
            if (d && !h.has(m)) {
                C("resolve:late-discard", {
                    reason: "address-value-changed",
                    currentValueLength: d.length,
                    originalValueLength: a.length,
                    fallbackSearchValueLength: n.length
                });
                return;
            }
            let g = this.getRuleInputElement(t);
            if (!g) {
                C("resolve:late-discard", {
                    reason: "address-input-missing"
                });
                return;
            }
            let b = {
                ...t,
                $input: g
            }, y = {
                ...r1,
                [t.label]: l
            };
            for (let e1 of (0, i.getRegularOperations)([
                b
            ], y, this.operationConfig))this.taskQueue.add(e1);
            await this.taskQueue.run(), C("resolve:late-apply", {
                resolvedValueLength: l.length
            }), (0, u.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace);
        }).catch((e1)=>{
            C("resolve:late-error", {
                errorType: e1 instanceof Error ? e1.name : typeof e1
            });
        });
    }
    getRuleInputElement(e1) {
        let t = e1.$input;
        if (!t) return null;
        if (!1 === t.isConnected && "undefined" != typeof document && "function" == typeof t.getAttribute) {
            let e1 = t.getAttribute("name"), r1 = e1 ? document.querySelector(`input[name="${e1}"], textarea[name="${e1}"], select[name="${e1}"]`) : null;
            if (r1) return r1;
        }
        return t;
    }
    getRuleCurrentInputValue(e1) {
        let t = (e1)=>{
            let t = e1?.classList?.contains("cx-select-input--invalid") || e1?.getAttribute?.("aria-invalid") === "true" || e1?.closest?.(".input-row")?.classList?.contains("input-row--invalid");
            if (t) return "";
            let r1 = e1 && "value" in e1 ? e1.value : "";
            return "string" == typeof r1 ? r1.trim() : "";
        };
        return t(this.getRuleInputElement(e1));
    }
    async clearSkippedOracleAddressDependentRules(e1) {
        let t = e1.filter(m.shouldSkipOracleAddressDependentFill);
        if (0 !== t.length) for (let e1 of (C("deps:skip-clear", {
            labels: t.map((e1)=>e1.label)
        }), t)){
            let t = this.getRuleInputElement(e1), r1 = t && "value" in t && "string" == typeof t.value ? t.value.trim() : "";
            r1 && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ? await (0, l.fillInputTextField)(t, "") : t instanceof HTMLSelectElement && (t.value = "", t.dispatchEvent(new Event("input", {
                bubbles: !0
            })), t.dispatchEvent(new Event("change", {
                bubbles: !0
            })))), this.progressTracker.updateMissedProgress(e1.label);
        }
    }
    async waitForOracleAddressDependentAutofill(e1) {
        0 !== e1.length && await (0, s.waitForCondition)(()=>e1.every((e1)=>!!this.getRuleCurrentInputValue(e1)), {
            timeout: 1500,
            interval: 150,
            observeTarget: document.body
        });
    }
    markFilledOracleAddressDependentRules(e1, t = new Set, r1 = new Set) {
        for (let n of e1)!t.has(n.label) && !r1.has(n.label) && this.getRuleCurrentInputValue(n) && (this.progressTracker.updateFilledProgress(n.label), r1.add(n.label));
    }
    getUnfilledOracleAddressDependentRules(e1) {
        return e1.filter((e1)=>!this.getRuleCurrentInputValue(e1));
    }
    hasOracleRegularAnswer(e1) {
        try {
            return (0, i.findValueInRecord)(e1.label, this.answer.regular), !0;
        } catch  {
            return !1;
        }
    }
    async fillOracleAddressDependentRules(e1, t = !0) {
        if (0 !== e1.length) {
            for (let r1 of e1)this.taskQueue.add(async ()=>{
                let e1 = this.getRuleInputElement(r1), n = e1 ? {
                    ...r1,
                    $input: e1
                } : r1, [o] = (0, i.getRegularOperations)([
                    n
                ], this.answer.regular, this.operationConfig, t);
                await o?.();
            });
            await this.taskQueue.run();
        }
    }
    reconcileOracleDependentProgress(e1) {
        for (let t of e1){
            let e1 = (0, E.normalizeFieldLabel)(t.label), r1 = !!this.getRuleCurrentInputValue(t), n = this.progressTracker.fieldStatus.filledFields.some((t)=>(0, E.normalizeFieldLabel)(t) === e1), o = this.progressTracker.fieldStatus.missingFields.some((t)=>(0, E.normalizeFieldLabel)(t) === e1);
            r1 && !n ? this.progressTracker.updateFilledProgress(t.label) : r1 || o || this.progressTracker.updateMissedProgress(t.label);
        }
    }
    async resolveOracleAddressDependentRules(e1) {
        if (0 === e1.length) return;
        let t = e1.filter((e1)=>!(0, m.shouldSkipOracleAddressDependentFill)(e1)), r1 = ()=>e1.map((e1)=>({
                    label: e1.label,
                    value: this.getRuleCurrentInputValue(e1)
                }));
        C("deps:start", {
            values: r1()
        }), await this.waitForOracleAddressDependentAutofill(t), C("deps:wait-done", {
            values: r1()
        }), await this.clearSkippedOracleAddressDependentRules(e1);
        let n = new Set;
        this.markFilledOracleAddressDependentRules(t, new Set, n);
        let o = t.filter(m.isOraclePostalCodeDependentRule), i = this.getUnfilledOracleAddressDependentRules(o), a = new Set;
        if (i.length > 0) {
            for (let e1 of (C("deps:postal-first", {
                labels: i.map((e1)=>e1.label)
            }), await this.fillOracleAddressDependentRules(i), i))a.add(e1.label);
            await this.waitForOracleAddressDependentAutofill(t), C("deps:postal-wait-done", {
                values: r1()
            }), this.markFilledOracleAddressDependentRules(t, new Set(i.map((e1)=>e1.label)), n);
        }
        let l = this.getUnfilledOracleAddressDependentRules(t).filter(m.isOracleCityDependentRule);
        if (l.length > 0) {
            for (let e1 of (C("deps:city-second", {
                labels: l.map((e1)=>e1.label)
            }), await this.fillOracleAddressDependentRules(l), l))a.add(e1.label);
            await this.waitForOracleAddressDependentAutofill(t), C("deps:city-wait-done", {
                values: r1()
            }), this.markFilledOracleAddressDependentRules(t, new Set(l.map((e1)=>e1.label)), n);
        }
        let s = this.getUnfilledOracleAddressDependentRules(t).filter((e1)=>!a.has(e1.label));
        C("deps:unfilled", {
            labels: s.map((e1)=>e1.label)
        }), s.length > 0 && await this.fillOracleAddressDependentRules(s), await (0, d.waitForComboQuestionsToSettle)(this.comboQuestionSettleDelayMs);
        let u = this.getUnfilledOracleAddressDependentRules(o).filter((e1)=>this.hasOracleRegularAnswer(e1));
        u.length > 0 && (C("deps:postal-final", {
            labels: u.map((e1)=>e1.label)
        }), await this.fillOracleAddressDependentRules(u, !1), this.reconcileOracleDependentProgress(u), C("deps:postal-final-done", {
            values: r1()
        })), C("deps:done", {
            fallback: s.length > 0,
            postalRefilled: u.length > 0
        });
    }
    getOracleSkillValues() {
        let e1 = this.answer, t = (e1)=>"string" == typeof e1 || Array.isArray(e1), r1 = e1?.regular ?? {}, n = r1.Skills ?? r1.Skill ?? r1.skills ?? r1.skill;
        if (t(n)) return n;
        let o = e1?.profileData ?? e1?.profile_data ?? {}, i = o.Skills ?? o.Skill ?? o.skills ?? o.skill;
        return t(i) ? i : e1?.skills ?? [];
    }
    getOracleLanguageValues() {
        let e1 = this.answer, t = e1?.regular ?? {}, r1 = t.Languages ?? t.Language ?? t.languages ?? t.language;
        if (null != r1) return r1;
        let n = e1?.profileData ?? e1?.profile_data ?? {}, o = n.Languages ?? n.Language ?? n.languages ?? n.language;
        if (null != o) return o;
        let i = Array.isArray(n.skillList) ? n.skillList : [], a = i.flatMap((e1)=>{
            let t = "string" == typeof e1?.category ? e1.category.toLowerCase() : "";
            return t.includes("language") && Array.isArray(e1?.skills) ? e1.skills : [];
        });
        if (a.length > 0) return a;
        let l = n.skills;
        return l && "object" == typeof l && !Array.isArray(l) ? l.Language ?? l.Languages ?? l.language ?? l.languages ?? [] : [];
    }
    async getRulesAndAnswer(e1) {
        C("rules:start", {
            fromAgent: e1
        }), await this.prefillCountryBeforeRules(), C("rules:country-prefill-done", {
            hasCountry: !!this.currentRunCountry,
            committed: this.currentRunCountryCommitted
        });
        let t = await (0, g.getRules)(), r1 = this.isOracleEmailGatePage(), n = this.isOracleVerificationStep(), o = !!document.querySelector("apply-flow-block");
        if (C("rules:extracted", {
            ruleCount: t.length,
            isEmailGate: r1,
            isVerificationStep: n,
            hasApplySurface: o,
            addressRules: t.filter(f.isOracleAddressLine1Rule).map(f.describeOracleAddressLine1Rule)
        }), 0 === t.length) return C("rules:empty-local-failure", {
            ruleCount: t.length,
            isEmailGate: r1,
            isVerificationStep: n,
            hasApplySurface: o
        }), (0, u.sendHttpStatusMessage)(c.CUSTOM_ERROR_CODES.NO_ELEMENTS), c.CUSTOM_ERROR_CODES.NO_ELEMENTS;
        this.progressTracker.setFieldsRequiredStatus(t), await this.fillCountryRulesAndUpdateProgress(t.filter(m.isOracleProfileCountryRule)), C("rules:country-fill-done");
        let i = (0, m.excludeOracleProfileCountryRules)(t);
        return 0 === i.length ? (C("rules:local-only-country", {
            ruleCount: t.length,
            countryRuleCount: t.length,
            countryCommitted: this.currentRunCountryCommitted
        }), this.answer = {
            education: [],
            workExperience: [],
            skills: [],
            regular: {}
        }) : (this.answer = await this.requestFormAnswers(i, e1), C("rules:answer-ready", {
            regularCount: Object.keys(this.answer.regular ?? {}).length
        })), t;
    }
    async fillCountryRulesAndUpdateProgress(e1) {
        if (0 === e1.length) return;
        let t = [];
        for (let r1 of e1)t.push(await (0, h.fillCountry)(this.currentRunCountry, r1.$input));
        let r1 = e1[0].label;
        t.every(Boolean) ? this.progressTracker.updateFilledProgress(r1) : this.progressTracker.updateMissedProgress(r1);
    }
    async prepareOracleLinkRules(e1) {
        let t = e1.filter(m.isOracleLinkRule);
        if (0 === t.length) return e1;
        let r1 = (0, m.applyOracleProfileLinkAnswers)(this.answer, this.latestAutofillInfo);
        if (0 === r1.length || (await (0, h.ensureOracleLinkRows)(r1.length), r1.length <= t.length)) return e1;
        let n = await (0, g.getRules)(), o = n.filter(m.isOracleLinkRule), i = new Set(t.map((e1)=>e1.label));
        for (let e1 of o)i.has(e1.label) || this.progressTracker.updateFieldRequiredStatus(e1);
        return [
            ...e1.filter((e1)=>!(0, m.isOracleLinkRule)(e1)),
            ...o
        ];
    }
    async fillRegularRules(e1) {
        let t = await this.prepareOracleLinkRules(e1), r1 = (0, m.excludeOracleProfileCountryRules)((0, m.orderOracleRegularRules)(t)).filter((e1)=>!(0, g.isOracleSkillsRule)(e1) && !(0, g.isOracleLanguagesRule)(e1)), n = r1.filter(f.isOracleAddressLine1Rule), o = n.filter(f.isOracleAddressLine1SearchRule), a = n.length > 0, l = o.length > 0, s = l && o.some((e1)=>(0, f.hasOracleAddressLine1Value)(e1, this.answer.regular)), u = n.some((e1)=>(0, f.isOracleAddressLine1PlainInputRule)(e1) && (0, f.hasOracleAddressLine1Value)(e1, this.answer.regular)), c = r1.filter(m.isOracleAddressDependentRule), d = s ? c : [];
        C("regular:plan", {
            hasAddressLine1: a,
            hasAddressLine1Search: l,
            hasAddressLine1Answer: s,
            hasPlainAddressLine1Answer: u,
            addressRules: n.map((e1)=>({
                    ...(0, f.describeOracleAddressLine1Rule)(e1),
                    hasAnswer: (0, f.hasOracleAddressLine1Value)(e1, this.answer.regular)
                })),
            dependents: d.map((e1)=>e1.label)
        });
        let p = l ? this.resolveAddressLine1Record(r1, this.answer.regular) : Promise.resolve(this.answer.regular), h = r1.filter((e1)=>!(0, m.shouldSkipOracleAddressDependentFill)(e1) && !(0, f.isOracleAddressLine1Rule)(e1) && !((s || u) && (0, m.isOracleAddressDependentRule)(e1)));
        for (let e1 of (C("regular:immediate", {
            labels: h.map((e1)=>e1.label)
        }), (0, i.getRegularOperations)(h, this.answer.regular, this.operationConfig)))this.taskQueue.add(e1);
        await this.taskQueue.run(), C("regular:immediate-done"), C("regular:resolve-await"), this.answer.regular = await p;
        let b = l && o.some((e1)=>(0, f.hasOracleAddressLine1Value)(e1, this.answer.regular));
        if (C("regular:resolve-await-done", {
            hasResolvedAddressLine1Answer: b,
            addressRules: n.map((e1)=>({
                    ...(0, f.describeOracleAddressLine1Rule)(e1),
                    hasAnswer: (0, f.hasOracleAddressLine1Value)(e1, this.answer.regular)
                }))
        }), n.length > 0) {
            let e1 = n.every((e1)=>this.getRuleCurrentInputValue(e1)) && d.length > 0 && d.every((e1)=>this.getRuleCurrentInputValue(e1));
            if (e1) for (let e1 of (C("regular:addressline-skip", {
                reason: "already-filled"
            }), n))this.progressTracker.updateFilledProgress(e1.label);
            else {
                for (let e1 of (C("regular:addressline", {
                    addressRules: n.map((e1)=>({
                            ...(0, f.describeOracleAddressLine1Rule)(e1),
                            hasAnswer: (0, f.hasOracleAddressLine1Value)(e1, this.answer.regular)
                        }))
                }), (0, i.getRegularOperations)(n, this.answer.regular, this.operationConfig)))this.taskQueue.add(e1);
                await this.taskQueue.run(), C("regular:addressline-done");
            }
        }
        C("regular:dependents"), b ? await this.resolveOracleAddressDependentRules(d) : u ? await this.fillOracleAddressDependentRules(c.filter((e1)=>!(0, m.shouldSkipOracleAddressDependentFill)(e1))) : await this.fillOracleAddressDependentRules(d.filter((e1)=>!(0, m.shouldSkipOracleAddressDependentFill)(e1))), C("regular:done");
    }
    async runComboQuestionAutofillIfNeeded(e1, t) {
        if (!this.hasComboQuestions) return e1;
        await (0, d.waitForComboQuestionsToSettle)(this.comboQuestionSettleDelayMs);
        let r1 = await (0, g.getRules)(), n = (0, d.getNewComboQuestionRules)(e1, r1);
        if (0 === n.length) return e1;
        for (let e1 of n)this.progressTracker.updateFieldRequiredStatus(e1);
        let o = n.filter(m.isOracleProfileCountryRule), i = (0, m.excludeOracleProfileCountryRules)(n);
        if (i.length > 0) {
            let e1 = await this.requestFormAnswers(i, t, {
                updateTimeTrace: !1
            });
            this.answer = (0, d.mergeComboQuestionAnswer)(this.answer, e1, i);
        }
        return await this.fillCountryRulesAndUpdateProgress(o), await this.fillRegularRules(i), [
            ...e1,
            ...n
        ];
    }
    async handleOracleEmailGate(e1) {
        this.timeTrace.rulesParseStartTime = Date.now(), this.progressTracker.clear(), this.taskQueue.clear();
        try {
            let t = await this.getRulesAndAnswer(e1);
            if ("string" == typeof t) return t;
            let r1 = [
                ...(0, i.getRegularOperations)((0, m.orderOracleRegularRules)((0, m.excludeOracleProfileCountryRules)(t)).filter((e1)=>!(0, m.shouldSkipOracleAddressDependentFill)(e1) && !(0, g.isOracleSkillsRule)(e1) && !(0, g.isOracleLanguagesRule)(e1)), this.answer.regular, this.operationConfig)
            ];
            for (let e1 of r1)this.taskQueue.add(e1);
            await this.taskQueue.run();
            let n = await (0, h.proceedOracleEmailGateStep)();
            if (!n) return this.progressTracker.generateFinalProgress();
            let o = await (0, s.waitForCondition)(()=>this.isOracleApplyFlowPage() && !this.isOracleEmailGatePage() && !!document.querySelector("apply-flow-block") || this.isOracleVerificationStep(), {
                timeout: 2e4,
                interval: 200,
                observeTarget: document.body
            });
            if (!o) return console.warn("[oraclecloud] email-gate: no apply form or verification step detected after next"), this.progressTracker.generateFinalProgress();
            if (this.isOracleVerificationStep()) return this.progressTracker.generateFinalProgress();
            return this.fillForm(e1);
        } catch (e1) {
            if (e1 instanceof i.HTTPError || e1 instanceof i.ResumeMissingCodeError) return (0, u.sendHttpStatusMessage)(e1.message), e1.message;
            return console.error("Unknown error occurred:", e1), this.progressTracker.generateFinalProgress();
        }
    }
    async doFillForm(e1 = !1) {
        let t = this.beginOracleAddressResolveRun();
        this.resetFalconResponseAccumulator(), C("fill:entry", {
            fromAgent: e1,
            isApplyFlow: this.isOracleApplyFlowPage(),
            isEmailGate: this.isOracleEmailGatePage(),
            isPinPage: this.isOraclePinPage()
        });
        let r1 = await (0, h.proceedOracleJobDetailToApply)();
        if (C("fill:apply-flow-check", {
            enteredApplyFlow: r1,
            isEmailGate: this.isOracleEmailGatePage()
        }), r1 && this.isOracleEmailGatePage() || this.isOracleEmailGatePage()) return t.finishNormalFill(!1), this.handleOracleEmailGate(e1);
        if (this.isOraclePinPage()) return t.finishNormalFill(!1), this.progressTracker.generateFinalProgress();
        this.timeTrace.rulesParseStartTime = Date.now(), this.progressTracker.clear(), this.savedEducationSnapshots = [], this.savedExperienceSnapshots = [], this.sectionResults = {}, this.taskQueue.clear(), this.taskQueue.add(async ()=>{
            await (0, h.cleanEduAndExp)();
        }), C("fill:cleanup-start"), await this.taskQueue.run(), C("fill:cleanup-done");
        try {
            let r1 = await this.getRulesAndAnswer(e1);
            if ("string" == typeof r1) return r1;
            let n = (0, h.hasOracleCoverLetterSlot)(), o = (0, g.getSubmitButtonText)();
            (0, u.bindSubmitButton)(o, this.progressTracker.fieldStatus, this.timeTrace), await this.fillRegularRules(r1), r1 = await this.runComboQuestionAutofillIfNeeded(r1, e1);
            let l = !1, s = !1, c = async (e1)=>{
                s = !0;
                let t = await (0, h.cancelEducation)();
                return C("education:failed-row-close-result", {
                    recordIndex: e1,
                    closed: t
                }), t || (l = !0), t;
            };
            for(let e1 = 0; e1 < this.answer.education.length; e1++){
                let t = this.answer.education[e1], r1 = await (0, g.addAndGetEduRules)();
                if (!r1) {
                    if (C("education:rules-not-ready", {
                        recordIndex: e1
                    }), !await c(e1)) break;
                    continue;
                }
                let n = (0, p.getOracleEducationRawValues)(t, this.latestAutofillInfo?.education?.[e1]), o = {
                    ...t,
                    ...n
                }, a = r1.children || [];
                C("education:record-route", {
                    recordIndex: e1,
                    recordKeys: Object.keys(t),
                    rawSchoolLength: n.rawSchool?.length || 0,
                    rawMajorLength: n.rawMajor?.length || 0,
                    fields: a.map((e1)=>({
                            label: e1.label,
                            fieldName: e1.$input?.getAttribute?.("name") || "",
                            type: e1.type,
                            isMajorText: j(e1)
                        }))
                });
                let s = (0, i.getEducationOperations)([
                    r1
                ], [
                    o
                ], this.operationConfig, void 0, {
                    onSkipped: ()=>{
                        l = !0;
                    },
                    onSectionResultChanged: (t)=>this.mergeSectionResult("education", t, e1)
                }, {
                    keepCurrentFieldOnExit: !0
                });
                for (let e1 of s)this.taskQueue.add(e1);
                if (await this.taskQueue.run(), l) break;
                C("education:pre-save-state", {
                    recordIndex: e1,
                    fields: a.map((e1)=>({
                            label: e1.label,
                            valueLength: e1.$input?.value?.length || 0,
                            ariaInvalid: e1.$input?.getAttribute?.("aria-invalid") || null,
                            connected: e1.$input?.isConnected !== !1
                        }))
                });
                let u = (0, g.getSectionRowSnapshot)(r1), d = await (0, h.saveEducation)();
                if (C("education:save-result", {
                    recordIndex: e1,
                    saved: d
                }), !d) {
                    if (this.markSectionResultRowMissed("education", e1), !await c(e1)) break;
                    continue;
                }
                this.savedEducationSnapshots.push(u);
            }
            this.answer.education.length > 0 && (0, a.updateCurrentField)(null), l || s ? this.progressTracker.updateMissedProgress("Education") : this.answer.education.length > 0 && this.progressTracker.updateFilledProgress("Education");
            let d = !1, f = !1;
            for(let e1 = 0; e1 < this.answer.workExperience.length; e1++){
                let t = this.answer.workExperience[e1], r1 = await (0, g.addAndGetWorkRules)(), n = r1.children || [];
                C("employment:record-route", {
                    recordIndex: e1,
                    recordKeys: Object.keys(t),
                    fields: n.map((e1)=>({
                            label: e1.label,
                            fieldName: e1.$input?.getAttribute?.("name") || "",
                            type: e1.type,
                            isDate: e1.type === v.FIELD_TYPE.DATE
                        }))
                });
                let o = (0, i.getEmploymentOperations)([
                    r1
                ], [
                    t
                ], this.getEmploymentOperationConfig(e1), void 0, {
                    onSkipped: ()=>{
                        d = !0;
                    },
                    onSectionResultChanged: (t)=>this.mergeSectionResult("employment", t, e1)
                }, {
                    keepCurrentFieldOnExit: !0
                });
                for (let e1 of o)this.taskQueue.add(e1);
                if (await this.taskQueue.run(), d) break;
                let a = (0, g.getSectionRowSnapshot)(r1), l = await (0, h.saveExperience)();
                if (C("employment:save-result", {
                    recordIndex: e1,
                    saved: l
                }), !l) {
                    f = !0, this.markSectionResultRowMissed("employment", e1);
                    continue;
                }
                this.savedExperienceSnapshots.push(a);
            }
            this.answer.workExperience.length > 0 && (0, a.updateCurrentField)(null), d || f ? this.progressTracker.updateMissedProgress("Employment") : this.answer.workExperience.length > 0 && this.progressTracker.updateFilledProgress("Employment");
            let m = r1.find(g.isOracleSkillsRule);
            m && (this.taskQueue.add(async ()=>{
                (0, a.updateCurrentField)(m.label);
                try {
                    let e1 = await (0, h.fillSkills)(this.getOracleSkillValues());
                    e1 ? this.progressTracker.updateFilledProgress(m.label) : this.progressTracker.updateMissedProgress(m.label);
                } finally{
                    (0, a.updateCurrentField)(null);
                }
            }), await this.taskQueue.run());
            let b = r1.find(g.isOracleLanguagesRule);
            return b && (this.taskQueue.add(async ()=>{
                (0, a.updateCurrentField)(b.label);
                try {
                    let e1 = await (0, h.fillLanguages)(this.getOracleLanguageValues());
                    e1 ? this.progressTracker.updateFilledProgress(b.label) : this.progressTracker.updateMissedProgress(b.label);
                } finally{
                    (0, a.updateCurrentField)(null);
                }
            }), await this.taskQueue.run()), this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this.taskQueue.add(async ()=>{
                let e1 = await (0, h.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
                e1 || this.progressTracker.updateMissedProgress("Resume/CV");
            }), n && this.coverLetter?.coverLetterId && this.taskQueue.add(async ()=>{
                let e1 = await (0, h.uploadCoverLetter)(this.coverLetter, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
                e1 || this.progressTracker.updateMissedProgress("Cover Letter");
            }), await this.taskQueue.run(), await this.bindSubmitButtonTracking(r1), (0, u.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace), t.finishNormalFill(!0), this.progressTracker.generateFinalProgress();
        } catch (e1) {
            if (t.finishNormalFill(!1), C("fill:error", A(e1)), e1 instanceof i.HTTPError || e1 instanceof i.ResumeMissingCodeError) return (0, u.sendHttpStatusMessage)(e1.message), e1.message;
            return console.error("Unknown error occurred:", e1), this.progressTracker.generateFinalProgress();
        }
    }
    constructor(...e1){
        super(...e1), this.coverLetterSlotObserver = null, this.lastCoverLetterStatus = null, this.latestAutofillInfo = null, this.currentRunCountry = null, this.currentRunCountryCommitted = !1, this.submitTrackingRules = [], this.savedEducationSnapshots = [], this.savedExperienceSnapshots = [], this.sectionResults = {}, this.hasComboQuestions = !0, this.addressResolveTimeoutMs = 1e4, this.oracleAddressResolveRunId = 0, this.activeOracleAddressResolveRun = null;
    }
}
var _c, _c1, _c2, _c3, _c4;
$RefreshReg$(_c, "C");
$RefreshReg$(_c1, "A");
$RefreshReg$(_c2, "F");
$RefreshReg$(_c3, "I");
$RefreshReg$(_c4, "D");

},{}]},["fbP2l","31jyS"], "31jyS", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFBQVcsVUFBUSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxHQUFFLElBQUUsSUFBSSxHQUFFLElBQUUsSUFBSSxHQUFFLElBQUUsRUFBRSxFQUFDLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsT0FBTyxXQUFTLGFBQVcsSUFBSSxVQUFRLE1BQUssSUFBRSxDQUFDO1FBQUUsU0FBUyxFQUFFLENBQUM7WUFBRSxJQUFHLEVBQUUsWUFBVSxNQUFLLE9BQU8sRUFBRTtZQUFRLElBQUksSUFBRSxFQUFFLFFBQU87WUFBRSxJQUFHO2dCQUFDLElBQUUsRUFBRTtZQUFnQixFQUFDLE9BQU0sR0FBRTtnQkFBQyxPQUFPLEVBQUUsYUFBVyxDQUFDLEdBQUUsRUFBRSxVQUFRLEdBQUU7WUFBQztZQUFDLElBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSTtnQkFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQUMsSUFBRyxPQUFPLEtBQUcsWUFBVyxPQUFPLEVBQUUsYUFBVyxDQUFDLEdBQUUsRUFBRSxVQUFRLEdBQUU7Z0JBQUUsSUFBSSxJQUFFLEVBQUUsSUFBSTtnQkFBRyxJQUFHLE1BQUksS0FBSyxHQUFFO29CQUFDLElBQUksSUFBRSxFQUFFO29CQUFHLEVBQUUsY0FBYSxDQUFBLEVBQUUsYUFBVyxDQUFDLENBQUEsR0FBRyxLQUFHLFlBQVU7Z0JBQUM7WUFBQztZQUFDLE9BQU8sRUFBRSxVQUFRLEdBQUU7UUFBQztRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxFQUFFLElBQUksSUFBRyxJQUFFLEVBQUUsSUFBSTtZQUFHLE9BQU8sTUFBSSxLQUFLLEtBQUcsTUFBSSxLQUFLLElBQUUsQ0FBQyxJQUFFLENBQUUsQ0FBQSxNQUFJLEtBQUssS0FBRyxNQUFJLEtBQUssS0FBRyxFQUFFLE9BQUssRUFBRSxNQUFJLEVBQUUsVUFBUztRQUFFO1FBQUMsU0FBUyxFQUFFLENBQUM7WUFBRSxPQUFPLEVBQUUsYUFBVyxFQUFFLFVBQVU7UUFBZ0I7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRSxPQUFPLEVBQUUsTUFBSSxFQUFFLEtBQUcsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUU7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDO1lBQUUsT0FBTyxFQUFFLElBQUk7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDO1lBQUUsSUFBSSxJQUFFLElBQUk7WUFBSSxPQUFPLEVBQUUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLEVBQUUsSUFBSSxHQUFFO1lBQUUsSUFBRztRQUFDO1FBQUMsU0FBUyxFQUFFLENBQUM7WUFBRSxJQUFJLElBQUUsSUFBSTtZQUFJLE9BQU8sRUFBRSxRQUFRLFNBQVMsQ0FBQztnQkFBRSxFQUFFLElBQUk7WUFBRSxJQUFHO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRSxJQUFHO2dCQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFBQSxFQUFDLE9BQU0sR0FBRTtnQkFBQztZQUFNO1FBQUM7UUFBQyxTQUFTO1lBQUksSUFBRyxFQUFFLFdBQVMsS0FBRyxHQUFFLE9BQU87WUFBSyxJQUFFLENBQUM7WUFBRSxJQUFHO2dCQUFDLElBQUksSUFBRSxJQUFJLEtBQUksSUFBRSxJQUFJLEtBQUksSUFBRTtnQkFBRSxJQUFFLEVBQUUsRUFBQyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxJQUFFLEVBQUU7b0JBQVEsRUFBRSxJQUFJLEdBQUUsSUFBRyxFQUFFLElBQUksR0FBRSxJQUFHLEVBQUUsVUFBUSxHQUFFLEVBQUUsR0FBRSxLQUFHLEVBQUUsSUFBSSxLQUFHLEVBQUUsSUFBSTtnQkFBRTtnQkFBRyxJQUFJLElBQUU7b0JBQUMsaUJBQWdCO29CQUFFLGVBQWM7Z0JBQUM7Z0JBQUUsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLGtCQUFrQjtnQkFBRTtnQkFBRyxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUUsTUFBSyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUU7Z0JBQUcsSUFBRyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxFQUFFLElBQUk7b0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtvQkFBc0UsSUFBRyxFQUFFLElBQUksSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLElBQUc7d0JBQUMsSUFBSSxJQUFFLEVBQUUsSUFBSTt3QkFBRyxJQUFHOzRCQUFDLEVBQUUsYUFBYSxHQUFFO3dCQUFFLEVBQUMsT0FBTSxHQUFFOzRCQUFDLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUE7d0JBQUU7b0JBQUM7Z0JBQUMsSUFBRyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxFQUFFLElBQUk7b0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtvQkFBc0UsRUFBRSxJQUFJO29CQUFHLElBQUc7d0JBQUMsRUFBRSxnQkFBZ0IsR0FBRTtvQkFBRSxFQUFDLE9BQU0sR0FBRTt3QkFBQyxLQUFJLENBQUEsSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFBO29CQUFFO2dCQUFDLElBQUcsR0FBRSxNQUFNO2dCQUFFLE9BQU87WUFBQyxTQUFRO2dCQUFDLElBQUUsQ0FBQztZQUFDO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRyxJQUFHLE1BQUksUUFBTSxPQUFPLEtBQUcsY0FBWSxPQUFPLEtBQUcsWUFBVSxFQUFFLElBQUksSUFBRztZQUFPLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxJQUFHLE1BQUksS0FBSyxJQUFHLENBQUEsSUFBRTtnQkFBQyxTQUFRO1lBQUMsR0FBRSxFQUFFLElBQUksR0FBRSxFQUFDLElBQUcsRUFBRSxLQUFLO2dCQUFDO2dCQUFFO2FBQUUsR0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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LEdBQUcsRUFDekUsVUFBUyxFQUFHLFdBQVcsSUFBSSxDQUFDLGdCQUFnQixhQUFhLElBQUksQ0FBQyxZQUFZLEVBQzVFLGlCQUFpQixDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQjtRQUNoRCxFQUFFLE9BQU8sSUFBRztZQUNWLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQUssY0FBYSxFQUFFLGFBQ2hFLGNBQWEsRUFBRSx3QkFBd0IsT0FBTyxBQUFDLENBQUEsR0FBRyxFQUFFLHFCQUFvQixFQUFHLEdBQUUsVUFBVSxHQUN0RjtZQUNILE9BQU8sUUFBUSxNQUFNLDJCQUEyQixLQUFJLElBQUksQ0FBQyxnQkFDdEQ7UUFDTDtJQUNGO0lBQ0EsWUFBWSxHQUFHLEVBQUMsQ0FBRTtRQUNoQixLQUFLLElBQUksS0FBSSxJQUFJLENBQUMsMEJBQTBCLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixNQUFNLElBQUksQ0FDdEYscUJBQXFCLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixNQUFNLElBQUksQ0FDOUQsNkJBQTZCLENBQUMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxJQUFJLENBQ3BFLDBCQUEwQixFQUFFLEVBQUUsSUFBSSxDQUFDLDJCQUEyQixFQUFFLEVBQUUsSUFBSSxDQUN0RSxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLElBQUksQ0FBQywwQkFBMEIsS0FDbEYsSUFBSSxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQyxnQ0FBZ0M7SUFDN0U7QUFDRiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtMTI4Zjk5MmI1MTM0ZGFkOS5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9vcmFjbGVjbG91ZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxvcmFjbGVjbG91ZC5qc1wiLFwiYnVuZGxlSWRcIjpcIjUzNjNmMjhjOGFjNWMwYzdcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA4QTVjYVxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQuanNcbiAqIERlcGVuZGVuY2llczpcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIEBwbGFzbW9ocS9tZXNzYWdpbmcgLT4gOTJHeUIgID0+ICBAcGxhc21vaHEvbWVzc2FnaW5nLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyIC0+IDdUNWVXICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvYW5zd2VyLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uIC0+IGx1SmZzICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvZG9tIC0+IGhBNVFhICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvZG9tLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXIgLT4gZVR6VXggID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9vYnNlcnZlci5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL3RyYWNrIC0+IGg0NzliICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvdHJhY2suanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIgLT4gOHhqNkYgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvYWRkcmVzcy1vcGVyYXRpb24gLT4gY0VwbGkgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvYWRkcmVzcy1vcGVyYXRpb24uanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvYW5zd2VyIC0+IDlLaTRkICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL29yYWNsZWNsb3VkL2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9vcmFjbGVjbG91ZC9lZHVjYXRpb24tcmF3LXZhbHVlcyAtPiBsSnczaCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9vcmFjbGVjbG91ZC9lZHVjYXRpb24tcmF3LXZhbHVlcy5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9vcmFjbGVjbG91ZC9vcGVyYXRpb25zIC0+IGdkdW83ICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL29yYWNsZWNsb3VkL29wZXJhdGlvbnMuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvcnVsZXMgLT4gajJwYXQgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvcnVsZXMuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvc2VjdGlvbi1yZXN1bHRzIC0+IDlKTlBrICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL29yYWNsZWNsb3VkL3NlY3Rpb24tcmVzdWx0cy5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9vcmFjbGVjbG91ZC91cmwgLT4gN29mdFAgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvdXJsLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH5lbnVtcy9odHRwIC0+IGVKRnFqICA9PiAgc3JjL2VudW1zL2h0dHAuanNcclxuICogICB+c3RvcmUvYXV0b2ZpbGxJbmZvIC0+IDc5Vk5QICA9PiAgc3JjL3N0b3JlL2F1dG9maWxsSW5mby5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKiAgIH51dGlscy9maWVsZExhYmVsIC0+IDFSbUd3ICA9PiAgc3JjL3V0aWxzL2ZpZWxkTGFiZWwuanNcclxuICovXHJcblxyXG52YXIgbiA9IGUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO1xyXG5uLmRlZmluZUludGVyb3BGbGFnKHIpLCBuLmV4cG9ydChyLCBcIk9yYWNsZUNsb3VkXCIsICgpID0+IFApO1xyXG52YXIgbyA9IGUoXCJAcGxhc21vaHEvbWVzc2FnaW5nXCIpLFxyXG4gIGkgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyXCIpLFxyXG4gIGEgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uXCIpLFxyXG4gIGwgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvZG9tXCIpLFxyXG4gIHMgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXJcIiksXHJcbiAgdSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy90cmFja1wiKSxcclxuICBjID0gZShcIn5lbnVtcy9odHRwXCIpLFxyXG4gIGQgPSBlKFwifmNvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyXCIpLFxyXG4gIGYgPSBlKFwifmNvbnRlbnRzL3NpdGVzL29yYWNsZWNsb3VkL2FkZHJlc3Mtb3BlcmF0aW9uXCIpLFxyXG4gIHAgPSBlKFwifmNvbnRlbnRzL3NpdGVzL29yYWNsZWNsb3VkL2VkdWNhdGlvbi1yYXctdmFsdWVzXCIpLFxyXG4gIG0gPSBlKFwifmNvbnRlbnRzL3NpdGVzL29yYWNsZWNsb3VkL2Fuc3dlclwiKSxcclxuICBoID0gZShcIn5jb250ZW50cy9zaXRlcy9vcmFjbGVjbG91ZC9vcGVyYXRpb25zXCIpLFxyXG4gIGcgPSBlKFwifmNvbnRlbnRzL3NpdGVzL29yYWNsZWNsb3VkL3J1bGVzXCIpLFxyXG4gIGIgPSBlKFwifmNvbnRlbnRzL3NpdGVzL29yYWNsZWNsb3VkL3VybFwiKSxcclxuICB5ID0gZShcIn5jb250ZW50cy9zaXRlcy9vcmFjbGVjbG91ZC9zZWN0aW9uLXJlc3VsdHNcIiksXHJcbiAgdiA9IGUoXCJ+Y29yZS9lbnVtc1wiKSxcclxuICB3ID0gZShcIn5zdG9yZS9hdXRvZmlsbEluZm9cIiksXHJcbiAgUyA9IGUoXCJ+dXRpbHMvZGVsYXlcIiksXHJcbiAgRSA9IGUoXCJ+dXRpbHMvZmllbGRMYWJlbFwiKTtcclxuXHJcbmZ1bmN0aW9uIHgoKSB7XHJcbiAgaWYgKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIHdpbmRvdykgcmV0dXJuICExO1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgZSA9IFwiam9icmlnaHRfb3JhY2xlY2xvdWRfY29tYm9ib3hfZGVidWdcIjtcclxuICAgIHJldHVybiBcIjFcIiA9PT0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24/LnNlYXJjaCA/PyBcIlwiKS5nZXQoZSkgfHwgd2luZG93LmxvY2FsU3RvcmFnZVxyXG4gICAgICA/LmdldEl0ZW0oZSkgPT09IFwiMVwiXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gITFcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEMoZSwgdCA9IHt9KSB7XHJcbiAgbGV0IHIgPSBlLnN0YXJ0c1dpdGgoXCJlZHVjYXRpb24tbWFqb3ItdGV4dDpcIikgfHwgXCJlZHVjYXRpb246cmVjb3JkLXJvdXRlXCIgPT09IGUgfHxcclxuICAgIFwiZWR1Y2F0aW9uOnByZS1zYXZlLXN0YXRlXCIgPT09IGUgfHwgXCJlZHVjYXRpb246c2F2ZS1yZXN1bHRcIiA9PT0gZSB8fFxyXG4gICAgXCJlbXBsb3ltZW50OnJlY29yZC1yb3V0ZVwiID09PSBlIHx8IFwiZW1wbG95bWVudDpzYXZlLXJlc3VsdFwiID09PSBlLFxyXG4gICAgbiA9IHgoKTtcclxuICBpZiAobiB8fCByKSB0cnkge1xyXG4gICAgbGV0IHIgPSBuID8gY29uc29sZS53YXJuIDogY29uc29sZS5pbmZvO1xyXG4gICAgcihgW09yYWNsZUNsb3VkXVtGbG93XSAke2V9ICR7SlNPTi5zdHJpbmdpZnkoe3Q6RGF0ZS5ub3coKSwuLi50fSl9YClcclxuICB9IGNhdGNoIHt9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEEoZSkge1xyXG4gIGlmICghZSB8fCBcIm9iamVjdFwiICE9IHR5cGVvZiBlKSByZXR1cm4ge1xyXG4gICAgZXJyb3JUeXBlOiB0eXBlb2YgZVxyXG4gIH07XHJcbiAgbGV0IHQgPSBlO1xyXG4gIHJldHVybiB7XHJcbiAgICBlcnJvclR5cGU6IFwic3RyaW5nXCIgPT0gdHlwZW9mIHQubmFtZSAmJiB0Lm5hbWUgPyB0Lm5hbWUgOiBlLmNvbnN0cnVjdG9yPy5uYW1lID8/IFwib2JqZWN0XCIsXHJcbiAgICBjb2RlOiBcInN0cmluZ1wiID09IHR5cGVvZiB0LmNvZGUgPyB0LmNvZGUgOiB2b2lkIDAsXHJcbiAgICBzdGF0dXM6IFwibnVtYmVyXCIgPT0gdHlwZW9mIHQuc3RhdHVzID8gdC5zdGF0dXMgOiBcIm51bWJlclwiID09IHR5cGVvZiB0LnN0YXR1c0NvZGUgPyB0XHJcbiAgICAgIC5zdGF0dXNDb2RlIDogdm9pZCAwLFxyXG4gICAgaGFzTWVzc2FnZTogXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC5tZXNzYWdlICYmIHQubWVzc2FnZS5sZW5ndGggPiAwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBrKGUpIHtcclxuICBsZXQgdCA9IGU/LnJlc3VsdD8uYWN0aW9uID09PSBcIlNFTEVDVF9PUFRJT05TXCIgPyBlLnJlc3VsdC5zZWxlY3RlZF92YWx1ZXMgOiBbXTtcclxuICByZXR1cm4ge1xyXG4gICAgYWN0aW9uOiBlPy5yZXN1bHQ/LmFjdGlvbiA/PyBudWxsLFxyXG4gICAgc2VsZWN0ZWRWYWx1ZUNvdW50OiB0Lmxlbmd0aCxcclxuICAgIHNlbGVjdGVkVmFsdWVMZW5ndGhzOiB0Lm1hcChlID0+IFN0cmluZyhlID8/IFwiXCIpLnRyaW0oKS5sZW5ndGgpXHJcbiAgfVxyXG59XHJcbmxldCBUID0gbmV3IFNldChbXCJwYWdlRm9vdGVyTmV4dEJ1dHRvblwiLCBcImJvdHRvbS1uYXZpZ2F0aW9uLW5leHQtYnV0dG9uXCJdKTtcclxuXHJcbmZ1bmN0aW9uIEYoZSkge1xyXG4gIHJldHVybiAoZS50ZXh0Q29udGVudCB8fCBlLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpIHx8IGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSB8fCBcIlwiKS5yZXBsYWNlKFxyXG4gICAgL1xccysvZywgXCIgXCIpLnRyaW0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBJKGUpIHtcclxuICByZXR1cm4gZS5jbGFzc0xpc3Q/LmNvbnRhaW5zKFwiYXBwbHktZmxvdy1wYWdpbmF0aW9uX19idXR0b25cIikgfHwgU3RyaW5nKGUuY2xhc3NOYW1lIHx8IFwiXCIpXHJcbiAgICAuaW5jbHVkZXMoXCJhcHBseS1mbG93LXBhZ2luYXRpb25fX2J1dHRvblwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBqKGUpIHtcclxuICBsZXQgdCA9IGUuJGlucHV0Py5nZXRBdHRyaWJ1dGU/LihcIm5hbWVcIiksXHJcbiAgICByID0gU3RyaW5nKHQgfHwgZS5sYWJlbCB8fCBcIlwiKS5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgXCJcIikudG9Mb3dlckNhc2UoKTtcclxuICByZXR1cm4gXCJtYWpvclwiID09PSByXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEQoZSkge1xyXG4gIGxldCB0ID0gZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWF1dG9tYXRpb24taWRcIik7XHJcbiAgaWYgKHQgJiYgVC5oYXModCkpIHJldHVybiAhMDtcclxuICBpZiAoIUkoZSkpIHJldHVybiAhMTtcclxuICBsZXQgciA9IEYoZSkudG9Mb3dlckNhc2UoKTtcclxuICByZXR1cm4gXCJuZXh0XCIgPT09IHIgfHwgXCJjb250aW51ZVwiID09PSByIHx8IFwic3VibWl0XCIgPT09IHIgfHwgXCJhcHBseVwiID09PSByIHx8IHIuaW5jbHVkZXMoXHJcbiAgICBcIm5leHRcIikgfHwgci5pbmNsdWRlcyhcImNvbnRpbnVlXCIpIHx8IHIuaW5jbHVkZXMoXCJzdWJtaXRcIilcclxufVxyXG5jbGFzcyBQIGV4dGVuZHMgZC5CYXNlRmlsbGVyIHtcclxuICBtZXJnZVNlY3Rpb25SZXN1bHQoZSwgdCwgcikge1xyXG4gICAgbGV0IG4gPSAoMCwgeS5tZXJnZU9yYWNsZVNlY3Rpb25SZXN1bHQpKHRoaXMuc2VjdGlvblJlc3VsdHNbZV0sIHQsIHIpO1xyXG4gICAgdGhpcy5zZWN0aW9uUmVzdWx0c1tlXSA9IG4sIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVNlY3Rpb25SZXN1bHQobilcclxuICB9XHJcbiAgbWFya1NlY3Rpb25SZXN1bHRSb3dNaXNzZWQoZSwgdCkge1xyXG4gICAgbGV0IHIgPSB0aGlzLnNlY3Rpb25SZXN1bHRzW2VdO1xyXG4gICAgaWYgKCFyKSByZXR1cm47XHJcbiAgICBsZXQgbiA9ICgwLCB5Lm1hcmtPcmFjbGVTZWN0aW9uUmVzdWx0Um93TWlzc2VkKShyLCB0KTtcclxuICAgIHRoaXMuc2VjdGlvblJlc3VsdHNbZV0gPSBuLCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVTZWN0aW9uUmVzdWx0KG4pXHJcbiAgfVxyXG4gIGdldEZpZWxkSGFuZGxlcnMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbdi5GSUVMRF9UWVBFLlRFWFRdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogYXN5bmMgKGUsIHQsIHIpID0+IHtcclxuICAgICAgICAgIGxldCBuID0gaihlKSxcclxuICAgICAgICAgICAgbyA9IG4gPyAoMCwgcC5nZXRPcmFjbGVFZHVjYXRpb25SYXdWYWx1ZXMpKHIgPz8ge30pLnJhd01ham9yIDogdm9pZCAwLFxyXG4gICAgICAgICAgICBpID0gbyB8fCB0LFxyXG4gICAgICAgICAgICBhID0gbyA/IFwicmF3LW1ham9yXCIgOiBcImFuc3dlclwiO1xyXG4gICAgICAgICAgbiAmJiBDKFwiZWR1Y2F0aW9uLW1ham9yLXRleHQ6c291cmNlXCIsIHtcclxuICAgICAgICAgICAgYW5zd2VyTGVuZ3RoOiBTdHJpbmcodCA/PyBcIlwiKS50cmltKCkubGVuZ3RoLFxyXG4gICAgICAgICAgICByYXdNYWpvckxlbmd0aDogbz8ubGVuZ3RoIHx8IDAsXHJcbiAgICAgICAgICAgIHNvdXJjZTogYVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBsZXQgcyA9IGF3YWl0ICgwLCBsLmZpbGxJbnB1dFRleHRGaWVsZCkoZS4kaW5wdXQsIGkpO1xyXG4gICAgICAgICAgcmV0dXJuIG4gJiYgQyhcImVkdWNhdGlvbi1tYWpvci10ZXh0OmRvbmVcIiwge1xyXG4gICAgICAgICAgICBzb3VyY2U6IGEsXHJcbiAgICAgICAgICAgIGZpbGxlZDogITEgIT09IHMsXHJcbiAgICAgICAgICAgIHJlYWRiYWNrTGVuZ3RoOiBTdHJpbmcoZS4kaW5wdXQ/LnZhbHVlID8/IFwiXCIpLnRyaW0oKS5sZW5ndGhcclxuICAgICAgICAgIH0pLCBzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt2LkZJRUxEX1RZUEUuU0VMRUNUXToge1xyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jIChlLCB0LCByKSA9PiB7XHJcbiAgICAgICAgICBsZXQgbiA9IEFycmF5LmlzQXJyYXkodCkgPyB0WzBdIDogdCxcclxuICAgICAgICAgICAgbyA9ICgwLCBmLmlzT3JhY2xlQWRkcmVzc0xpbmUxUnVsZSkoZSksXHJcbiAgICAgICAgICAgIGkgPSAoMCwgZi5pc09yYWNsZUFkZHJlc3NMaW5lMVBsYWluSW5wdXRSdWxlKShlKTtcclxuICAgICAgICAgIGlmIChvICYmIEMoXCJhZGRyZXNzOmZpbGwtc3RhcnRcIiwge1xyXG4gICAgICAgICAgICAgIHJvdXRlOiBpID8gXCJwbGFpbi1pbnB1dFwiIDogXCJjb21ib2JveFwiLFxyXG4gICAgICAgICAgICAgIHJ1bGU6ICgwLCBmLmRlc2NyaWJlT3JhY2xlQWRkcmVzc0xpbmUxUnVsZSkoZSksXHJcbiAgICAgICAgICAgICAgaGFzQW5zd2VyOiAhIW4sXHJcbiAgICAgICAgICAgICAgYW5zd2VyTGVuZ3RoOiBTdHJpbmcobiA/PyBcIlwiKS50cmltKCkubGVuZ3RoXHJcbiAgICAgICAgICAgIH0pLCBpKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gYXdhaXQgKDAsIGwuZmlsbElucHV0VGV4dEZpZWxkKShlLiRpbnB1dCwgbik7XHJcbiAgICAgICAgICAgIHJldHVybiBvICYmIEMoXCJhZGRyZXNzOmZpbGwtZG9uZVwiLCB7XHJcbiAgICAgICAgICAgICAgcm91dGU6IFwicGxhaW4taW5wdXRcIixcclxuICAgICAgICAgICAgICBmaWxsZWQ6IHQsXHJcbiAgICAgICAgICAgICAgcmVhZGJhY2tMZW5ndGg6IHRoaXMuZ2V0UnVsZUN1cnJlbnRJbnB1dFZhbHVlKGUpLmxlbmd0aFxyXG4gICAgICAgICAgICB9KSwgdFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCEoMCwgbS5jYW5GaWxsT3JhY2xlU2VsZWN0UnVsZSkoZSwgbikpIHJldHVybiBvICYmIEMoXCJhZGRyZXNzOmZpbGwtc2tpcFwiLCB7XHJcbiAgICAgICAgICAgIHJlYXNvbjogXCJpbnZhbGlkLXNlbGVjdC1hbnN3ZXJcIixcclxuICAgICAgICAgICAgcm91dGU6IFwiY29tYm9ib3hcIlxyXG4gICAgICAgICAgfSksICExO1xyXG4gICAgICAgICAgbGV0IGEgPSBhd2FpdCAoMCwgaC5maWxsU2VsZWN0RmllbGQpKHRoaXMuZ2V0UnVsZUlucHV0RWxlbWVudChlKSA/PyBlLiRpbnB1dCwgbiwgZVxyXG4gICAgICAgICAgICAubGFiZWwsICgwLCBwLmdldE9yYWNsZUVkdWNhdGlvblJhd1ZhbHVlcykociA/PyB7fSkpO1xyXG4gICAgICAgICAgcmV0dXJuIG8gJiYgQyhcImFkZHJlc3M6ZmlsbC1kb25lXCIsIHtcclxuICAgICAgICAgICAgcm91dGU6IFwiY29tYm9ib3hcIixcclxuICAgICAgICAgICAgZmlsbGVkOiBhLFxyXG4gICAgICAgICAgICByZWFkYmFja0xlbmd0aDogdGhpcy5nZXRSdWxlQ3VycmVudElucHV0VmFsdWUoZSkubGVuZ3RoXHJcbiAgICAgICAgICB9KSwgYVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICEwXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbdi5GSUVMRF9UWVBFLkxJU1RCT1hdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBoLmZpbGxMaXN0Ym94RmllbGQpKGUuJGlucHV0LCB0KSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt2LkZJRUxEX1RZUEUuQ0hFQ0tCT1hdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBoLmZpbGxDaGVja0JveGVzRmllbGQpKGUsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW3YuRklFTERfVFlQRS5SQURJT0dST1VQXToge1xyXG4gICAgICAgIGhhbmRsZXI6IChlLCB0KSA9PiAoMCwgaC5maWxsUmFkaW9Hcm91cEZpZWxkKShlLiRpbnB1dCwgdCksXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICEwXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbdi5GSUVMRF9UWVBFLkRBVEVdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBoLmZpbGxEYXRlRmllbGQpKGUsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBnZXRFbXBsb3ltZW50T3BlcmF0aW9uQ29uZmlnKGUpIHtcclxuICAgIGxldCB0ID0ge307XHJcbiAgICBmb3IgKGxldCBbciwgbl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5vcGVyYXRpb25Db25maWcpKSBuICYmICh0W3JdID0gYXN5bmMgKHQsIHIsIG8pID0+IHtcclxuICAgICAgQyhcImVtcGxveW1lbnQ6ZmllbGQtc3RhcnRcIiwge1xyXG4gICAgICAgIHJlY29yZEluZGV4OiBlLFxyXG4gICAgICAgIGxhYmVsOiB0LmxhYmVsLFxyXG4gICAgICAgIHR5cGU6IHQudHlwZVxyXG4gICAgICB9KTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgaSA9IGF3YWl0IG4odCwgciwgbyk7XHJcbiAgICAgICAgcmV0dXJuIEMoXCJlbXBsb3ltZW50OmZpZWxkLXJlc3VsdFwiLCB7XHJcbiAgICAgICAgICByZWNvcmRJbmRleDogZSxcclxuICAgICAgICAgIGxhYmVsOiB0LmxhYmVsLFxyXG4gICAgICAgICAgdHlwZTogdC50eXBlLFxyXG4gICAgICAgICAgZmlsbGVkOiAhMSAhPT0gaVxyXG4gICAgICAgIH0pLCBpXHJcbiAgICAgIH0gY2F0Y2ggKHIpIHtcclxuICAgICAgICB0aHJvdyBDKFwiZW1wbG95bWVudDpmaWVsZC1lcnJvclwiLCB7XHJcbiAgICAgICAgICByZWNvcmRJbmRleDogZSxcclxuICAgICAgICAgIGxhYmVsOiB0LmxhYmVsLFxyXG4gICAgICAgICAgdHlwZTogdC50eXBlLFxyXG4gICAgICAgICAgLi4uQShyKVxyXG4gICAgICAgIH0pLCByXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRcclxuICB9XHJcbiAgYXN5bmMgZXh0cmFjdEZvcm1SdWxlcygpIHtcclxuICAgIHJldHVybiAoMCwgZy5nZXRSdWxlcykoKVxyXG4gIH1cclxuICBnZXRTaXRlTmFtZSgpIHtcclxuICAgIHJldHVybiBcIm9yYWNsZWNsb3VkXCJcclxuICB9XHJcbiAgZ2V0U3VibWl0QnV0dG9uU2VsZWN0b3IoKSB7XHJcbiAgICByZXR1cm4gJy8vYnV0dG9uW0BkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlRm9vdGVyTmV4dEJ1dHRvblwiIG9yIEBkYXRhLWF1dG9tYXRpb24taWQ9XCJib3R0b20tbmF2aWdhdGlvbi1uZXh0LWJ1dHRvblwiXSdcclxuICB9XHJcbiAgZ2V0U3VibWl0VHJhY2tpbmdEZWxlZ2F0aW9uUm9vdCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudFxyXG4gIH1cclxuICByZXNvbHZlRGVsZWdhdGVkU3VibWl0QnV0dG9uKGUpIHtcclxuICAgIGxldCB0ID0gZS5jbG9zZXN0KFwiYnV0dG9uXCIpO1xyXG4gICAgcmV0dXJuICF0IHx8IHQuZGlzYWJsZWQgfHwgXCJ0cnVlXCIgPT09IHQuZ2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKSA/IG51bGwgOiBEKHQpID8gdCA6XHJcbiAgICAgIG51bGxcclxuICB9XHJcbiAgYXN5bmMgZ2V0QXV0b2ZpbGxTbmFwc2hvdChlID0gW10pIHtcclxuICAgIHJldHVybiB0aGlzLnN1Ym1pdFRyYWNraW5nUnVsZXMgPSBlLCAoMCwgZy5nZXRGb3JtU25hcHNob3QpKGUpXHJcbiAgfVxyXG4gIGFzeW5jIGdldFN1Ym1pdFNuYXBzaG90KCkge1xyXG4gICAgcmV0dXJuICgwLCBnLmdldEZvcm1TbmFwc2hvdCkodGhpcy5zdWJtaXRUcmFja2luZ1J1bGVzKVxyXG4gIH1cclxuICBnZXRBZGRpdGlvbmFsQXV0b2ZpbGxTbmFwc2hvdERhdGEoZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0U2F2ZWRTZWN0aW9uU25hcHNob3RzKClcclxuICB9XHJcbiAgZ2V0QWRkaXRpb25hbFN1Ym1pdFNuYXBzaG90RGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFNhdmVkU2VjdGlvblNuYXBzaG90cygpXHJcbiAgfVxyXG4gIGdldFNhdmVkU2VjdGlvblNuYXBzaG90cygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVkdWNhdGlvbjogWy4uLnRoaXMuc2F2ZWRFZHVjYXRpb25TbmFwc2hvdHNdLFxyXG4gICAgICBlbXBsb3ltZW50OiBbLi4udGhpcy5zYXZlZEV4cGVyaWVuY2VTbmFwc2hvdHNdXHJcbiAgICB9XHJcbiAgfVxyXG4gIHN1Ym1pdEFwcGxpY2F0aW9uKCkge31cclxuICBwb3N0Q292ZXJMZXR0ZXJTdGF0dXNJZkNoYW5nZWQoZSwgdCA9ICExKSB7XHJcbiAgICAodCB8fCB0aGlzLmxhc3RDb3ZlckxldHRlclN0YXR1cyAhPT0gZSkgJiYgKHRoaXMubGFzdENvdmVyTGV0dGVyU3RhdHVzID0gZSwgKDAsIGxcclxuICAgICAgLnBvc3RDb3ZlckxldHRlclN0YXR1cykoZSkpXHJcbiAgfVxyXG4gIHN5bmNDb3ZlckxldHRlclN0YXR1c0Zyb21Eb20oZSA9ICExKSB7XHJcbiAgICBsZXQgdCA9ICgwLCBoLmhhc09yYWNsZUNvdmVyTGV0dGVyU2xvdCkoKTtcclxuICAgIHJldHVybiB0aGlzLnBvc3RDb3ZlckxldHRlclN0YXR1c0lmQ2hhbmdlZCh0ID8gXCJyZXF1aXJlZFwiIDogXCJcIiwgZSksIHRcclxuICB9XHJcbiAgaXNDb3ZlckxldHRlclNsb3RNdXRhdGlvbihlKSB7XHJcbiAgICBsZXQgdCA9IGUgPT4gZS5tYXRjaGVzKFwiY292ZXItbGV0dGVyLXVwbG9hZC1idXR0b25cIikgfHwgISFlLmNsb3Nlc3QoXHJcbiAgICAgIFwiY292ZXItbGV0dGVyLXVwbG9hZC1idXR0b25cIikgfHwgISFlLnF1ZXJ5U2VsZWN0b3IoXCJjb3Zlci1sZXR0ZXItdXBsb2FkLWJ1dHRvblwiKTtcclxuICAgIHJldHVybiBlLnNvbWUoZSA9PiAhIShlLnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgdChlLnRhcmdldCkpIHx8IFsuLi5lLmFkZGVkTm9kZXMsIC4uLmVcclxuICAgICAgLnJlbW92ZWROb2Rlc1xyXG4gICAgXS5zb21lKGUgPT4gZSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgdChlKSkpXHJcbiAgfVxyXG4gIHdhdGNoQ292ZXJMZXR0ZXJTbG90KCkge1xyXG4gICAgaWYgKHRoaXMuY292ZXJMZXR0ZXJTbG90T2JzZXJ2ZXIpIHJldHVybjtcclxuICAgIGxldCBlID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICBlICYmICh0aGlzLmNvdmVyTGV0dGVyU2xvdE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZSA9PiB7XHJcbiAgICAgIHRoaXMuaXNDb3ZlckxldHRlclNsb3RNdXRhdGlvbihlKSAmJiB0aGlzLnN5bmNDb3ZlckxldHRlclN0YXR1c0Zyb21Eb20oKVxyXG4gICAgfSksIHRoaXMuY292ZXJMZXR0ZXJTbG90T2JzZXJ2ZXIub2JzZXJ2ZShlLCB7XHJcbiAgICAgIGNoaWxkTGlzdDogITAsXHJcbiAgICAgIHN1YnRyZWU6ICEwLFxyXG4gICAgICBhdHRyaWJ1dGVzOiAhMCxcclxuICAgICAgYXR0cmlidXRlRmlsdGVyOiBbXCJjbGFzc1wiLCBcInN0eWxlXCIsIFwiaGlkZGVuXCIsIFwiYXJpYS1oaWRkZW5cIl1cclxuICAgIH0pKVxyXG4gIH1cclxuICBhc3luYyBjaGVja0NvdmVyTGV0dGVyKCkge1xyXG4gICAgdGhpcy5zeW5jQ292ZXJMZXR0ZXJTdGF0dXNGcm9tRG9tKCEwKSwgdGhpcy53YXRjaENvdmVyTGV0dGVyU2xvdCgpXHJcbiAgfVxyXG4gIGlzT3JhY2xlRW1haWxHYXRlUGFnZSgpIHtcclxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIi9hcHBseS9lbWFpbFwiKVxyXG4gIH1cclxuICBpc09yYWNsZVBpblBhZ2UoKSB7XHJcbiAgICBsZXQgZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImgxLCBoMiwgaDNcIikpLmZpbmQoZSA9PiBlLnRleHRDb250ZW50Py50cmltKClcclxuICAgICAgICAudG9Mb3dlckNhc2UoKSA9PT0gXCJjb25maXJtIHlvdXIgaWRlbnRpdHlcIiksXHJcbiAgICAgIHQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpLmZpbmQoZSA9PiBlLnRleHRDb250ZW50Py50cmltKClcclxuICAgICAgICAudG9Mb3dlckNhc2UoKSA9PT0gXCJ2ZXJpZnlcIiksXHJcbiAgICAgIHIgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLCBidXR0b24sIGRpdiwgc3BhblwiKSkuZmluZChlID0+IGUudGV4dENvbnRlbnRcclxuICAgICAgICA/LnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBcInNlbmQgbmV3IGNvZGVcIiksXHJcbiAgICAgIG4gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSkuZmlsdGVyKGUgPT4ge1xyXG4gICAgICAgIGxldCB0ID0gZSxcclxuICAgICAgICAgIHIgPSBOdW1iZXIodC5tYXhMZW5ndGggfHwgMCk7XHJcbiAgICAgICAgcmV0dXJuIFwidGV4dFwiID09PSB0LnR5cGUgJiYgMSA9PT0gciAmJiAhdC5kaXNhYmxlZFxyXG4gICAgICB9KTtcclxuICAgIHJldHVybiAhIWUgJiYgISF0ICYmICEhciAmJiBuLmxlbmd0aCA+PSA0XHJcbiAgfVxyXG4gIGlzT3JhY2xlVmVyaWZpY2F0aW9uU3RlcCgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzT3JhY2xlUGluUGFnZSgpXHJcbiAgfVxyXG4gIGlzT3JhY2xlQXBwbHlGbG93UGFnZSgpIHtcclxuICAgIHJldHVybiAoMCwgYi5pc09yYWNsZUFwcGx5UGF0aCkod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxyXG4gIH1cclxuICBhc3luYyBlbnN1cmVUb2tlbigpIHtcclxuICAgIGlmICh0aGlzLnRva2VuKSByZXR1cm47XHJcbiAgICBsZXQgZSA9ICgwLCBiLm5vcm1hbGl6ZU9yYWNsZUFwcGx5VG9rZW5VcmwpKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIHRoaXMudG9rZW4gPSBhd2FpdCAoMCwgby5zZW5kVG9CYWNrZ3JvdW5kKSh7XHJcbiAgICAgIG5hbWU6IFwiZ2V0U2l0ZVRva2VuXCIsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICB1cmw6IGVcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgaGFzQ291bnRyeURlcGVuZGVudEFkZHJlc3NGaWVsZHMoKSB7XHJcbiAgICByZXR1cm4gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnaW5wdXRbbmFtZT1cImNpdHlcIl0sIGlucHV0W25hbWU9XCJyZWdpb24yXCJdLCBpbnB1dFtuYW1lPVwicG9zdGFsQ29kZVwiXSwgaW5wdXRbbmFtZT1cInJlZ2lvbjFcIl0nXHJcbiAgICAgIClcclxuICB9XHJcbiAgYXN5bmMgcHJlZmlsbENvdW50cnlCZWZvcmVSdWxlcygpIHtcclxuICAgIHRoaXMubGF0ZXN0QXV0b2ZpbGxJbmZvID0gbnVsbCwgdGhpcy5jdXJyZW50UnVuQ291bnRyeSA9IG51bGwsIHRoaXNcclxuICAgICAgLmN1cnJlbnRSdW5Db3VudHJ5Q29tbWl0dGVkID0gITE7XHJcbiAgICBsZXQgZSA9IGF3YWl0ICgwLCB3LnVzZUF1dG9maWxsSW5mb1N0b3JlKS5nZXRTdGF0ZSgpLmZldGNoQXV0b2ZpbGxJbmZvKCkuY2F0Y2goKCkgPT4gbnVsbCk7XHJcbiAgICB0aGlzLmxhdGVzdEF1dG9maWxsSW5mbyA9IGU7XHJcbiAgICBsZXQgdCA9IGU/LmxvY2F0aW9uPy5jb3VudHJ5O1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFJ1bkNvdW50cnkgPSBcInN0cmluZ1wiID09IHR5cGVvZiB0ICYmIHQudHJpbSgpID8gdC50cmltKCkgOiBudWxsLCBDKFxyXG4gICAgICAgIFwiY291bnRyeTpwcmVmaWxsOnByZXBhcmVkXCIsIHtcclxuICAgICAgICAgIGhhc0ZyZXNoQ291bnRyeTogISF0aGlzLmN1cnJlbnRSdW5Db3VudHJ5LFxyXG4gICAgICAgICAgZnJlc2hDb3VudHJ5TGVuZ3RoOiB0aGlzLmN1cnJlbnRSdW5Db3VudHJ5Py5sZW5ndGggPz8gMCxcclxuICAgICAgICAgIGNvdW50cnlJbnB1dFByZXNlbnQ6ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgJ2lucHV0W25hbWU9XCJjb3VudHJ5XCJdLCBpbnB1dFtpZD1cImNvdW50cnktMTJcIl0nKSxcclxuICAgICAgICAgIHJlZnJlc2hEZXBlbmRlbnRBZGRyZXNzOiAhMFxyXG4gICAgICAgIH0pLCAhdGhpcy5jdXJyZW50UnVuQ291bnRyeSB8fCAodGhpcy5jdXJyZW50UnVuQ291bnRyeUNvbW1pdHRlZCA9IGF3YWl0ICgwLCBoXHJcbiAgICAgICAgLmZpbGxDb3VudHJ5KSh0aGlzLmN1cnJlbnRSdW5Db3VudHJ5LCB2b2lkIDAsIHtcclxuICAgICAgICByZWZyZXNoRGVwZW5kZW50QWRkcmVzczogITBcclxuICAgICAgfSksIEMoXCJjb3VudHJ5OnByZWZpbGw6cmVzdWx0XCIsIHtcclxuICAgICAgICBjb21taXR0ZWQ6IHRoaXMuY3VycmVudFJ1bkNvdW50cnlDb21taXR0ZWQsXHJcbiAgICAgICAgZGVwZW5kZW50QWRkcmVzc0ZpZWxkc1ByZXNlbnQ6IHRoaXMuaGFzQ291bnRyeURlcGVuZGVudEFkZHJlc3NGaWVsZHMoKVxyXG4gICAgICB9KSwgIXRoaXMuY3VycmVudFJ1bkNvdW50cnlDb21taXR0ZWQpKSByZXR1cm47XHJcbiAgICBsZXQgciA9IGF3YWl0ICgwLCBzLndhaXRGb3JDb25kaXRpb24pKCgpID0+IHRoaXMuaGFzQ291bnRyeURlcGVuZGVudEFkZHJlc3NGaWVsZHMoKSwge1xyXG4gICAgICB0aW1lb3V0OiA4ZTMsXHJcbiAgICAgIGludGVydmFsOiAyMDAsXHJcbiAgICAgIG9ic2VydmVUYXJnZXQ6IGRvY3VtZW50LmJvZHlcclxuICAgIH0pO1xyXG4gICAgQyhcImNvdW50cnk6cHJlZmlsbDpkZXBlbmRlbnQtYWRkcmVzcy1yZWFkeVwiLCB7XHJcbiAgICAgIGNvbW1pdHRlZDogdGhpcy5jdXJyZW50UnVuQ291bnRyeUNvbW1pdHRlZCxcclxuICAgICAgZGVwZW5kZW50QWRkcmVzc0ZpZWxkc1JlYWR5OiByXHJcbiAgICB9KSwgYXdhaXQgKDAsIFMuZGVsYXkpKDMwMClcclxuICB9XHJcbiAgYXN5bmMgcmVxdWVzdEZvcm1BbnN3ZXJzKGUsIHQsIHIgPSB7fSkge1xyXG4gICAgQyhcImFuc3dlcjpwcmVwYXJlXCIsIHtcclxuICAgICAgcnVsZUNvdW50OiBlLmxlbmd0aCxcclxuICAgICAgZnJvbUFnZW50OiB0LFxyXG4gICAgICB1cGRhdGVUaW1lVHJhY2U6ICExICE9PSByLnVwZGF0ZVRpbWVUcmFjZVxyXG4gICAgfSksIGF3YWl0IHRoaXMuZW5zdXJlVG9rZW4oKSwgQyhcImFuc3dlcjp0b2tlbi1yZWFkeVwiLCB7XHJcbiAgICAgIGhhc1Rva2VuOiAhIXRoaXMudG9rZW5cclxuICAgIH0pLCAhMSAhPT0gci51cGRhdGVUaW1lVHJhY2UgJiYgKHRoaXMudGltZVRyYWNlLnJlcXVlc3RTdGFydFRpbWUgPSBEYXRlLm5vdygpKSwgQyhcclxuICAgICAgXCJhbnN3ZXI6cmVxdWVzdC1zZW5kXCIsIHtcclxuICAgICAgICBydWxlQ291bnQ6IGUubGVuZ3RoXHJcbiAgICAgIH0pO1xyXG4gICAgbGV0IG4gPSB0aGlzLmNhcHR1cmVGYWxjb25SZXNwb25zZVJ1bigpLFxyXG4gICAgICBvID0gYXdhaXQgKDAsIGkuZ2V0RWxlbWVudFJ1bGVzKShlLCBcIm9yYWNsZWNsb3VkXCIsIHRoaXMudG9rZW4sIHQsIHRoaXMucmVzdW1lSW5mby5pZCwgdGhpc1xyXG4gICAgICAgIC5yZXN1bWVJbmZvLnRhaWxvcklkKTtcclxuICAgIHRoaXMucmVjb3JkRmFsY29uUmVzcG9uc2Uobywgbik7XHJcbiAgICBsZXQgbCA9ICgwLCBtLmZvcm1hdEFuc3dlcikobyksXHJcbiAgICAgIHMgPSAoMCwgbS5hcHBseU9yYWNsZUF1dG9maWxsTG9jYXRpb25GYWxsYmFja3MpKGwsIHRoaXMubGF0ZXN0QXV0b2ZpbGxJbmZvKTtcclxuICAgIHJldHVybiBDKFwiYW5zd2VyOnJlcXVlc3Qtc2V0dGxlZFwiLCB7XHJcbiAgICAgIHJlZ3VsYXJDb3VudDogT2JqZWN0LmtleXMobC5yZWd1bGFyID8/IHt9KS5sZW5ndGgsXHJcbiAgICAgIGVkdWNhdGlvbkNvdW50OiBsLmVkdWNhdGlvbj8ubGVuZ3RoID8/IDAsXHJcbiAgICAgIHdvcmtFeHBlcmllbmNlQ291bnQ6IGwud29ya0V4cGVyaWVuY2U/Lmxlbmd0aCA/PyAwLFxyXG4gICAgICBwcm9maWxlTG9jYXRpb25GYWxsYmFja0ZpZWxkczogc1xyXG4gICAgfSksICgwLCBhLmNoZWNrcG9pbnQpKCksICExICE9PSByLnVwZGF0ZVRpbWVUcmFjZSAmJiAodGhpcy50aW1lVHJhY2UuZmlsbFN0YXJ0VGltZSA9IERhdGVcclxuICAgICAgLm5vdygpKSwgbFxyXG4gIH1cclxuICBnZXRDdXJyZW50UGFnZVVybCgpIHtcclxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG4gIH1cclxuICBhc3luYyByZXNvbHZlQXV0b2ZpbGxPcGVyYXRpb24oZSwgdCkge1xyXG4gICAgbGV0IHI7XHJcbiAgICBsZXQgbiA9IERhdGUubm93KCk7XHJcbiAgICBDKFwicmVzb2x2ZTpzZW5kXCIsIHtcclxuICAgICAgZmllbGRUeXBlOiBlLmZpZWxkX3R5cGUsXHJcbiAgICAgIGhhc09yaWdpbmFsQW5zd2VyOiAhIWUub3JpZ2luYWxfYW5zd2VyLFxyXG4gICAgICBvcmlnaW5hbEFuc3dlckxlbmd0aDogZS5vcmlnaW5hbF9hbnN3ZXIubGVuZ3RoLFxyXG4gICAgICBlbmRwb2ludDogZS5zZWFyY2hfcmVxdWVzdF9zY2hlbWEudXJsXHJcbiAgICB9KTtcclxuICAgIGxldCBpID0gITEsXHJcbiAgICAgIGEgPSBuZXcgUHJvbWlzZShlID0+IHtcclxuICAgICAgICByID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBpID0gITAsIGUobnVsbClcclxuICAgICAgICB9LCB0aGlzLmFkZHJlc3NSZXNvbHZlVGltZW91dE1zKVxyXG4gICAgICB9KSxcclxuICAgICAgbCA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gKDAsIG8uc2VuZFRvQmFja2dyb3VuZCkoe1xyXG4gICAgICAgIG5hbWU6IFwicmVzb2x2ZUF1dG9maWxsT3BlcmF0aW9uXCIsXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgb3BlcmF0aW9uOiBlLFxyXG4gICAgICAgICAgc291cmNlOiBcIm9yYWNsZWNsb3VkXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pKS5jYXRjaChlID0+IChDKFwicmVzb2x2ZTplcnJvclwiLCB7XHJcbiAgICAgICAgbXM6IERhdGUubm93KCkgLSBuLFxyXG4gICAgICAgIG1lc3NhZ2U6IFN0cmluZyhlKVxyXG4gICAgICB9KSwgbnVsbCkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGUgPSBhd2FpdCBQcm9taXNlLnJhY2UoW2wsIGFdKTtcclxuICAgICAgcmV0dXJuIEMoXCJyZXNvbHZlOnNldHRsZWRcIiwge1xyXG4gICAgICAgIG1zOiBEYXRlLm5vdygpIC0gbixcclxuICAgICAgICB0aW1lZE91dDogaSxcclxuICAgICAgICBoYXNSZXN1bHQ6ICEhZSxcclxuICAgICAgICAuLi5rKGUpXHJcbiAgICAgIH0pLCBpICYmIHQ/LihsKSwgZSA/PyBudWxsXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBDKFwicmVzb2x2ZTplcnJvclwiLCB7XHJcbiAgICAgICAgbXM6IERhdGUubm93KCkgLSBuLFxyXG4gICAgICAgIG1lc3NhZ2U6IFN0cmluZyhlKVxyXG4gICAgICB9KSwgbnVsbFxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgdm9pZCAwICE9PSByICYmIGNsZWFyVGltZW91dChyKVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyByZXNvbHZlQWRkcmVzc0xpbmUxUmVjb3JkKGUsIHQpIHtcclxuICAgIGxldCByID0gZS5maW5kKGYuaXNPcmFjbGVBZGRyZXNzTGluZTFTZWFyY2hSdWxlKTtcclxuICAgIGlmICghcikgcmV0dXJuIEMoXCJhZGRyZXNzOnJlc29sdmUtc2tpcFwiLCB7XHJcbiAgICAgIHJlYXNvbjogXCJuby1zZWFyY2hhYmxlLWFkZHJlc3MtcnVsZVwiLFxyXG4gICAgICBhZGRyZXNzUnVsZXM6IGUuZmlsdGVyKGYuaXNPcmFjbGVBZGRyZXNzTGluZTFSdWxlKS5tYXAoZlxyXG4gICAgICAgIC5kZXNjcmliZU9yYWNsZUFkZHJlc3NMaW5lMVJ1bGUpXHJcbiAgICB9KSwgdDtcclxuICAgIEMoXCJhZGRyZXNzOnJlc29sdmUtY2FuZGlkYXRlXCIsIHtcclxuICAgICAgcnVsZTogKDAsIGYuZGVzY3JpYmVPcmFjbGVBZGRyZXNzTGluZTFSdWxlKShyKVxyXG4gICAgfSk7XHJcbiAgICBsZXQgbiA9IHRoaXMuYWN0aXZlT3JhY2xlQWRkcmVzc1Jlc29sdmVSdW47XHJcbiAgICByZXR1cm4gYXdhaXQgKDAsIGYucmVzb2x2ZU9yYWNsZUFkZHJlc3NMaW5lMVJlY29yZCkoe1xyXG4gICAgICBjdXJyZW50VXJsOiB0aGlzLmdldEN1cnJlbnRQYWdlVXJsKCksXHJcbiAgICAgIHJ1bGU6IHIsXHJcbiAgICAgIHJlY29yZDogdCxcclxuICAgICAgcmVzb2x2ZU9wZXJhdGlvbjogZSA9PiB0aGlzLnJlc29sdmVBdXRvZmlsbE9wZXJhdGlvbihlLCBvID0+IHtcclxuICAgICAgICBuICYmIHRoaXMuYXBwbHlMYXRlQWRkcmVzc0xpbmUxUmVzb2x1dGlvbih7XHJcbiAgICAgICAgICByZXNvbHZlUnVuOiBuLFxyXG4gICAgICAgICAgcnVsZTogcixcclxuICAgICAgICAgIHJlY29yZDogdCxcclxuICAgICAgICAgIGZhbGxiYWNrU2VhcmNoVmFsdWU6IGUub3JpZ2luYWxfYW5zd2VyLFxyXG4gICAgICAgICAgbGF0ZVJlc29sdXRpb246IG9cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbiAgYmVnaW5PcmFjbGVBZGRyZXNzUmVzb2x2ZVJ1bigpIHtcclxuICAgIGxldCBlID0gKCkgPT4ge30sXHJcbiAgICAgIHQgPSB7XHJcbiAgICAgICAgaWQ6ICsrdGhpcy5vcmFjbGVBZGRyZXNzUmVzb2x2ZVJ1bklkLFxyXG4gICAgICAgIHNpZ25hbDogdGhpcy5maWxsQ2FuY2VsLnNpZ25hbCA/PyBudWxsLFxyXG4gICAgICAgIHBhZ2VVcmw6IHRoaXMuZ2V0Q3VycmVudFBhZ2VVcmwoKSxcclxuICAgICAgICBub3JtYWxGaWxsRG9uZTogbmV3IFByb21pc2UodCA9PiB7XHJcbiAgICAgICAgICBlID0gdFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGFsbG93TGF0ZUFwcGx5OiAhMSxcclxuICAgICAgICBmaW5pc2hlZDogITEsXHJcbiAgICAgICAgZmluaXNoTm9ybWFsRmlsbDogciA9PiB7XHJcbiAgICAgICAgICB0LmZpbmlzaGVkIHx8ICh0LmZpbmlzaGVkID0gITAsIHQuYWxsb3dMYXRlQXBwbHkgPSByLCBlKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlT3JhY2xlQWRkcmVzc1Jlc29sdmVSdW4gPSB0LCB0XHJcbiAgfVxyXG4gIGFwcGx5TGF0ZUFkZHJlc3NMaW5lMVJlc29sdXRpb24oe1xyXG4gICAgcmVzb2x2ZVJ1bjogZSxcclxuICAgIHJ1bGU6IHQsXHJcbiAgICByZWNvcmQ6IHIsXHJcbiAgICBmYWxsYmFja1NlYXJjaFZhbHVlOiBuLFxyXG4gICAgbGF0ZVJlc29sdXRpb246IG9cclxuICB9KSB7XHJcbiAgICBsZXQgYSA9IFN0cmluZyhyW3QubGFiZWxdID8/IFwiXCIpLnRyaW0oKTtcclxuICAgIG8udGhlbihhc3luYyBvID0+IHtcclxuICAgICAgbGV0IGwgPSAoMCwgZi5nZXRPcmFjbGVSZXNvbHZlZEFkZHJlc3NMaW5lMVZhbHVlKShvKTtcclxuICAgICAgaWYgKEMoXCJyZXNvbHZlOmxhdGUtc2V0dGxlZFwiLCB7XHJcbiAgICAgICAgICBhY3Rpb246IG8/LnJlc3VsdD8uYWN0aW9uID8/IG51bGwsXHJcbiAgICAgICAgICByZXNvbHZlZFZhbHVlTGVuZ3RoOiBsLmxlbmd0aFxyXG4gICAgICAgIH0pLCAhbCkgcmV0dXJuO1xyXG4gICAgICBhd2FpdCBlLm5vcm1hbEZpbGxEb25lO1xyXG4gICAgICBsZXQgcyA9IGUuaWQgPT09IHRoaXMub3JhY2xlQWRkcmVzc1Jlc29sdmVSdW5JZCxcclxuICAgICAgICBjID0gdGhpcy5nZXRDdXJyZW50UGFnZVVybCgpID09PSBlLnBhZ2VVcmw7XHJcbiAgICAgIGlmICghZS5hbGxvd0xhdGVBcHBseSB8fCAhcyB8fCBlLnNpZ25hbD8uYWJvcnRlZCB8fCAhYykge1xyXG4gICAgICAgIEMoXCJyZXNvbHZlOmxhdGUtZGlzY2FyZFwiLCB7XHJcbiAgICAgICAgICByZWFzb246IGUuYWxsb3dMYXRlQXBwbHkgPyBzID8gZS5zaWduYWw/LmFib3J0ZWQgPyBcImNhbmNlbGxlZFwiIDpcclxuICAgICAgICAgICAgXCJwYWdlLWNoYW5nZWRcIiA6IFwic3RhbGUtcnVuXCIgOiBcIm5vcm1hbC1maWxsLW5vdC1jb21wbGV0ZVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgbGV0IGQgPSB0aGlzLmdldFJ1bGVDdXJyZW50SW5wdXRWYWx1ZSh0KSxcclxuICAgICAgICBwID0gZSA9PiBlLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgIG0gPSBwKGQpLFxyXG4gICAgICAgIGggPSBuZXcgU2V0KFtwKGEpLCBwKG4pXSk7XHJcbiAgICAgIGlmIChkICYmICFoLmhhcyhtKSkge1xyXG4gICAgICAgIEMoXCJyZXNvbHZlOmxhdGUtZGlzY2FyZFwiLCB7XHJcbiAgICAgICAgICByZWFzb246IFwiYWRkcmVzcy12YWx1ZS1jaGFuZ2VkXCIsXHJcbiAgICAgICAgICBjdXJyZW50VmFsdWVMZW5ndGg6IGQubGVuZ3RoLFxyXG4gICAgICAgICAgb3JpZ2luYWxWYWx1ZUxlbmd0aDogYS5sZW5ndGgsXHJcbiAgICAgICAgICBmYWxsYmFja1NlYXJjaFZhbHVlTGVuZ3RoOiBuLmxlbmd0aFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGxldCBnID0gdGhpcy5nZXRSdWxlSW5wdXRFbGVtZW50KHQpO1xyXG4gICAgICBpZiAoIWcpIHtcclxuICAgICAgICBDKFwicmVzb2x2ZTpsYXRlLWRpc2NhcmRcIiwge1xyXG4gICAgICAgICAgcmVhc29uOiBcImFkZHJlc3MtaW5wdXQtbWlzc2luZ1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgbGV0IGIgPSB7XHJcbiAgICAgICAgICAuLi50LFxyXG4gICAgICAgICAgJGlucHV0OiBnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5ID0ge1xyXG4gICAgICAgICAgLi4ucixcclxuICAgICAgICAgIFt0LmxhYmVsXTogbFxyXG4gICAgICAgIH07XHJcbiAgICAgIGZvciAobGV0IGUgb2YgKDAsIGkuZ2V0UmVndWxhck9wZXJhdGlvbnMpKFtiXSwgeSwgdGhpcy5vcGVyYXRpb25Db25maWcpKSB0aGlzXHJcbiAgICAgICAgLnRhc2tRdWV1ZS5hZGQoZSk7XHJcbiAgICAgIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpLCBDKFwicmVzb2x2ZTpsYXRlLWFwcGx5XCIsIHtcclxuICAgICAgICByZXNvbHZlZFZhbHVlTGVuZ3RoOiBsLmxlbmd0aFxyXG4gICAgICB9KSwgKDAsIHUucG9zdFN0YXR1cykoXCJmaWxsaW5nXCIsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzLCB0aGlzLnRpbWVUcmFjZSlcclxuICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICBDKFwicmVzb2x2ZTpsYXRlLWVycm9yXCIsIHtcclxuICAgICAgICBlcnJvclR5cGU6IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubmFtZSA6IHR5cGVvZiBlXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuICBnZXRSdWxlSW5wdXRFbGVtZW50KGUpIHtcclxuICAgIGxldCB0ID0gZS4kaW5wdXQ7XHJcbiAgICBpZiAoIXQpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKCExID09PSB0LmlzQ29ubmVjdGVkICYmIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50ICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdFxyXG4gICAgICAuZ2V0QXR0cmlidXRlKSB7XHJcbiAgICAgIGxldCBlID0gdC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpLFxyXG4gICAgICAgIHIgPSBlID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIGBpbnB1dFtuYW1lPVwiJHtlfVwiXSwgdGV4dGFyZWFbbmFtZT1cIiR7ZX1cIl0sIHNlbGVjdFtuYW1lPVwiJHtlfVwiXWApIDogbnVsbDtcclxuICAgICAgaWYgKHIpIHJldHVybiByXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdFxyXG4gIH1cclxuICBnZXRSdWxlQ3VycmVudElucHV0VmFsdWUoZSkge1xyXG4gICAgbGV0IHQgPSBlID0+IHtcclxuICAgICAgbGV0IHQgPSBlPy5jbGFzc0xpc3Q/LmNvbnRhaW5zKFwiY3gtc2VsZWN0LWlucHV0LS1pbnZhbGlkXCIpIHx8IGU/LmdldEF0dHJpYnV0ZT8uKFxyXG4gICAgICAgIFwiYXJpYS1pbnZhbGlkXCIpID09PSBcInRydWVcIiB8fCBlPy5jbG9zZXN0Py4oXCIuaW5wdXQtcm93XCIpPy5jbGFzc0xpc3Q/LmNvbnRhaW5zKFxyXG4gICAgICAgIFwiaW5wdXQtcm93LS1pbnZhbGlkXCIpO1xyXG4gICAgICBpZiAodCkgcmV0dXJuIFwiXCI7XHJcbiAgICAgIGxldCByID0gZSAmJiBcInZhbHVlXCIgaW4gZSA/IGUudmFsdWUgOiBcIlwiO1xyXG4gICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgciA/IHIudHJpbSgpIDogXCJcIlxyXG4gICAgfTtcclxuICAgIHJldHVybiB0KHRoaXMuZ2V0UnVsZUlucHV0RWxlbWVudChlKSlcclxuICB9XHJcbiAgYXN5bmMgY2xlYXJTa2lwcGVkT3JhY2xlQWRkcmVzc0RlcGVuZGVudFJ1bGVzKGUpIHtcclxuICAgIGxldCB0ID0gZS5maWx0ZXIobS5zaG91bGRTa2lwT3JhY2xlQWRkcmVzc0RlcGVuZGVudEZpbGwpO1xyXG4gICAgaWYgKDAgIT09IHQubGVuZ3RoKVxyXG4gICAgICBmb3IgKGxldCBlIG9mIChDKFwiZGVwczpza2lwLWNsZWFyXCIsIHtcclxuICAgICAgICAgIGxhYmVsczogdC5tYXAoZSA9PiBlLmxhYmVsKVxyXG4gICAgICAgIH0pLCB0KSkge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcy5nZXRSdWxlSW5wdXRFbGVtZW50KGUpLFxyXG4gICAgICAgICAgciA9IHQgJiYgXCJ2YWx1ZVwiIGluIHQgJiYgXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC52YWx1ZSA/IHQudmFsdWUudHJpbSgpIDogXCJcIjtcclxuICAgICAgICByICYmICh0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCB0IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCA/IGF3YWl0ICgwLCBsXHJcbiAgICAgICAgICAuZmlsbElucHV0VGV4dEZpZWxkKSh0LCBcIlwiKSA6IHQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiAodC52YWx1ZSA9IFwiXCIsIHRcclxuICAgICAgICAgIC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHtcclxuICAgICAgICAgICAgYnViYmxlczogITBcclxuICAgICAgICAgIH0pKSwgdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLCB7XHJcbiAgICAgICAgICAgIGJ1YmJsZXM6ICEwXHJcbiAgICAgICAgICB9KSkpKSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoZS5sYWJlbClcclxuICAgICAgfVxyXG4gIH1cclxuICBhc3luYyB3YWl0Rm9yT3JhY2xlQWRkcmVzc0RlcGVuZGVudEF1dG9maWxsKGUpIHtcclxuICAgIDAgIT09IGUubGVuZ3RoICYmIGF3YWl0ICgwLCBzLndhaXRGb3JDb25kaXRpb24pKCgpID0+IGUuZXZlcnkoZSA9PiAhIXRoaXNcclxuICAgICAgLmdldFJ1bGVDdXJyZW50SW5wdXRWYWx1ZShlKSksIHtcclxuICAgICAgdGltZW91dDogMTUwMCxcclxuICAgICAgaW50ZXJ2YWw6IDE1MCxcclxuICAgICAgb2JzZXJ2ZVRhcmdldDogZG9jdW1lbnQuYm9keVxyXG4gICAgfSlcclxuICB9XHJcbiAgbWFya0ZpbGxlZE9yYWNsZUFkZHJlc3NEZXBlbmRlbnRSdWxlcyhlLCB0ID0gbmV3IFNldCwgciA9IG5ldyBTZXQpIHtcclxuICAgIGZvciAobGV0IG4gb2YgZSkgIXQuaGFzKG4ubGFiZWwpICYmICFyLmhhcyhuLmxhYmVsKSAmJiB0aGlzLmdldFJ1bGVDdXJyZW50SW5wdXRWYWx1ZShuKSAmJiAoXHJcbiAgICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKG4ubGFiZWwpLCByLmFkZChuLmxhYmVsKSlcclxuICB9XHJcbiAgZ2V0VW5maWxsZWRPcmFjbGVBZGRyZXNzRGVwZW5kZW50UnVsZXMoZSkge1xyXG4gICAgcmV0dXJuIGUuZmlsdGVyKGUgPT4gIXRoaXMuZ2V0UnVsZUN1cnJlbnRJbnB1dFZhbHVlKGUpKVxyXG4gIH1cclxuICBoYXNPcmFjbGVSZWd1bGFyQW5zd2VyKGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiAoMCwgaS5maW5kVmFsdWVJblJlY29yZCkoZS5sYWJlbCwgdGhpcy5hbnN3ZXIucmVndWxhciksICEwXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgcmV0dXJuICExXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxPcmFjbGVBZGRyZXNzRGVwZW5kZW50UnVsZXMoZSwgdCA9ICEwKSB7XHJcbiAgICBpZiAoMCAhPT0gZS5sZW5ndGgpIHtcclxuICAgICAgZm9yIChsZXQgciBvZiBlKSB0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBlID0gdGhpcy5nZXRSdWxlSW5wdXRFbGVtZW50KHIpLFxyXG4gICAgICAgICAgbiA9IGUgPyB7XHJcbiAgICAgICAgICAgIC4uLnIsXHJcbiAgICAgICAgICAgICRpbnB1dDogZVxyXG4gICAgICAgICAgfSA6IHIsXHJcbiAgICAgICAgICBbb10gPSAoMCwgaS5nZXRSZWd1bGFyT3BlcmF0aW9ucykoW25dLCB0aGlzLmFuc3dlci5yZWd1bGFyLCB0aGlzXHJcbiAgICAgICAgICAgIC5vcGVyYXRpb25Db25maWcsIHQpO1xyXG4gICAgICAgIGF3YWl0IG8/LigpXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKVxyXG4gICAgfVxyXG4gIH1cclxuICByZWNvbmNpbGVPcmFjbGVEZXBlbmRlbnRQcm9ncmVzcyhlKSB7XHJcbiAgICBmb3IgKGxldCB0IG9mIGUpIHtcclxuICAgICAgbGV0IGUgPSAoMCwgRS5ub3JtYWxpemVGaWVsZExhYmVsKSh0LmxhYmVsKSxcclxuICAgICAgICByID0gISF0aGlzLmdldFJ1bGVDdXJyZW50SW5wdXRWYWx1ZSh0KSxcclxuICAgICAgICBuID0gdGhpcy5wcm9ncmVzc1RyYWNrZXIuZmllbGRTdGF0dXMuZmlsbGVkRmllbGRzLnNvbWUodCA9PiAoMCwgRS5ub3JtYWxpemVGaWVsZExhYmVsKShcclxuICAgICAgICAgIHQpID09PSBlKSxcclxuICAgICAgICBvID0gdGhpcy5wcm9ncmVzc1RyYWNrZXIuZmllbGRTdGF0dXMubWlzc2luZ0ZpZWxkcy5zb21lKHQgPT4gKDAsIEUubm9ybWFsaXplRmllbGRMYWJlbCkoXHJcbiAgICAgICAgICB0KSA9PT0gZSk7XHJcbiAgICAgIHIgJiYgIW4gPyB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyh0LmxhYmVsKSA6IHIgfHwgbyB8fCB0aGlzXHJcbiAgICAgICAgLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyh0LmxhYmVsKVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyByZXNvbHZlT3JhY2xlQWRkcmVzc0RlcGVuZGVudFJ1bGVzKGUpIHtcclxuICAgIGlmICgwID09PSBlLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgbGV0IHQgPSBlLmZpbHRlcihlID0+ICEoMCwgbS5zaG91bGRTa2lwT3JhY2xlQWRkcmVzc0RlcGVuZGVudEZpbGwpKGUpKSxcclxuICAgICAgciA9ICgpID0+IGUubWFwKGUgPT4gKHtcclxuICAgICAgICBsYWJlbDogZS5sYWJlbCxcclxuICAgICAgICB2YWx1ZTogdGhpcy5nZXRSdWxlQ3VycmVudElucHV0VmFsdWUoZSlcclxuICAgICAgfSkpO1xyXG4gICAgQyhcImRlcHM6c3RhcnRcIiwge1xyXG4gICAgICB2YWx1ZXM6IHIoKVxyXG4gICAgfSksIGF3YWl0IHRoaXMud2FpdEZvck9yYWNsZUFkZHJlc3NEZXBlbmRlbnRBdXRvZmlsbCh0KSwgQyhcImRlcHM6d2FpdC1kb25lXCIsIHtcclxuICAgICAgdmFsdWVzOiByKClcclxuICAgIH0pLCBhd2FpdCB0aGlzLmNsZWFyU2tpcHBlZE9yYWNsZUFkZHJlc3NEZXBlbmRlbnRSdWxlcyhlKTtcclxuICAgIGxldCBuID0gbmV3IFNldDtcclxuICAgIHRoaXMubWFya0ZpbGxlZE9yYWNsZUFkZHJlc3NEZXBlbmRlbnRSdWxlcyh0LCBuZXcgU2V0LCBuKTtcclxuICAgIGxldCBvID0gdC5maWx0ZXIobS5pc09yYWNsZVBvc3RhbENvZGVEZXBlbmRlbnRSdWxlKSxcclxuICAgICAgaSA9IHRoaXMuZ2V0VW5maWxsZWRPcmFjbGVBZGRyZXNzRGVwZW5kZW50UnVsZXMobyksXHJcbiAgICAgIGEgPSBuZXcgU2V0O1xyXG4gICAgaWYgKGkubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBlIG9mIChDKFwiZGVwczpwb3N0YWwtZmlyc3RcIiwge1xyXG4gICAgICAgICAgbGFiZWxzOiBpLm1hcChlID0+IGUubGFiZWwpXHJcbiAgICAgICAgfSksIGF3YWl0IHRoaXMuZmlsbE9yYWNsZUFkZHJlc3NEZXBlbmRlbnRSdWxlcyhpKSwgaSkpIGEuYWRkKGUubGFiZWwpO1xyXG4gICAgICBhd2FpdCB0aGlzLndhaXRGb3JPcmFjbGVBZGRyZXNzRGVwZW5kZW50QXV0b2ZpbGwodCksIEMoXCJkZXBzOnBvc3RhbC13YWl0LWRvbmVcIiwge1xyXG4gICAgICAgIHZhbHVlczogcigpXHJcbiAgICAgIH0pLCB0aGlzLm1hcmtGaWxsZWRPcmFjbGVBZGRyZXNzRGVwZW5kZW50UnVsZXModCwgbmV3IFNldChpLm1hcChlID0+IGUubGFiZWwpKSwgbilcclxuICAgIH1cclxuICAgIGxldCBsID0gdGhpcy5nZXRVbmZpbGxlZE9yYWNsZUFkZHJlc3NEZXBlbmRlbnRSdWxlcyh0KS5maWx0ZXIobS5pc09yYWNsZUNpdHlEZXBlbmRlbnRSdWxlKTtcclxuICAgIGlmIChsLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgZSBvZiAoQyhcImRlcHM6Y2l0eS1zZWNvbmRcIiwge1xyXG4gICAgICAgICAgbGFiZWxzOiBsLm1hcChlID0+IGUubGFiZWwpXHJcbiAgICAgICAgfSksIGF3YWl0IHRoaXMuZmlsbE9yYWNsZUFkZHJlc3NEZXBlbmRlbnRSdWxlcyhsKSwgbCkpIGEuYWRkKGUubGFiZWwpO1xyXG4gICAgICBhd2FpdCB0aGlzLndhaXRGb3JPcmFjbGVBZGRyZXNzRGVwZW5kZW50QXV0b2ZpbGwodCksIEMoXCJkZXBzOmNpdHktd2FpdC1kb25lXCIsIHtcclxuICAgICAgICB2YWx1ZXM6IHIoKVxyXG4gICAgICB9KSwgdGhpcy5tYXJrRmlsbGVkT3JhY2xlQWRkcmVzc0RlcGVuZGVudFJ1bGVzKHQsIG5ldyBTZXQobC5tYXAoZSA9PiBlLmxhYmVsKSksIG4pXHJcbiAgICB9XHJcbiAgICBsZXQgcyA9IHRoaXMuZ2V0VW5maWxsZWRPcmFjbGVBZGRyZXNzRGVwZW5kZW50UnVsZXModCkuZmlsdGVyKGUgPT4gIWEuaGFzKGUubGFiZWwpKTtcclxuICAgIEMoXCJkZXBzOnVuZmlsbGVkXCIsIHtcclxuICAgICAgbGFiZWxzOiBzLm1hcChlID0+IGUubGFiZWwpXHJcbiAgICB9KSwgcy5sZW5ndGggPiAwICYmIGF3YWl0IHRoaXMuZmlsbE9yYWNsZUFkZHJlc3NEZXBlbmRlbnRSdWxlcyhzKSwgYXdhaXQgKDAsIGRcclxuICAgICAgLndhaXRGb3JDb21ib1F1ZXN0aW9uc1RvU2V0dGxlKSh0aGlzLmNvbWJvUXVlc3Rpb25TZXR0bGVEZWxheU1zKTtcclxuICAgIGxldCB1ID0gdGhpcy5nZXRVbmZpbGxlZE9yYWNsZUFkZHJlc3NEZXBlbmRlbnRSdWxlcyhvKS5maWx0ZXIoZSA9PiB0aGlzXHJcbiAgICAgIC5oYXNPcmFjbGVSZWd1bGFyQW5zd2VyKGUpKTtcclxuICAgIHUubGVuZ3RoID4gMCAmJiAoQyhcImRlcHM6cG9zdGFsLWZpbmFsXCIsIHtcclxuICAgICAgICBsYWJlbHM6IHUubWFwKGUgPT4gZS5sYWJlbClcclxuICAgICAgfSksIGF3YWl0IHRoaXMuZmlsbE9yYWNsZUFkZHJlc3NEZXBlbmRlbnRSdWxlcyh1LCAhMSksIHRoaXNcclxuICAgICAgLnJlY29uY2lsZU9yYWNsZURlcGVuZGVudFByb2dyZXNzKHUpLCBDKFwiZGVwczpwb3N0YWwtZmluYWwtZG9uZVwiLCB7XHJcbiAgICAgICAgdmFsdWVzOiByKClcclxuICAgICAgfSkpLCBDKFwiZGVwczpkb25lXCIsIHtcclxuICAgICAgZmFsbGJhY2s6IHMubGVuZ3RoID4gMCxcclxuICAgICAgcG9zdGFsUmVmaWxsZWQ6IHUubGVuZ3RoID4gMFxyXG4gICAgfSlcclxuICB9XHJcbiAgZ2V0T3JhY2xlU2tpbGxWYWx1ZXMoKSB7XHJcbiAgICBsZXQgZSA9IHRoaXMuYW5zd2VyLFxyXG4gICAgICB0ID0gZSA9PiBcInN0cmluZ1wiID09IHR5cGVvZiBlIHx8IEFycmF5LmlzQXJyYXkoZSksXHJcbiAgICAgIHIgPSBlPy5yZWd1bGFyID8/IHt9LFxyXG4gICAgICBuID0gci5Ta2lsbHMgPz8gci5Ta2lsbCA/PyByLnNraWxscyA/PyByLnNraWxsO1xyXG4gICAgaWYgKHQobikpIHJldHVybiBuO1xyXG4gICAgbGV0IG8gPSBlPy5wcm9maWxlRGF0YSA/PyBlPy5wcm9maWxlX2RhdGEgPz8ge30sXHJcbiAgICAgIGkgPSBvLlNraWxscyA/PyBvLlNraWxsID8/IG8uc2tpbGxzID8/IG8uc2tpbGw7XHJcbiAgICByZXR1cm4gdChpKSA/IGkgOiBlPy5za2lsbHMgPz8gW11cclxuICB9XHJcbiAgZ2V0T3JhY2xlTGFuZ3VhZ2VWYWx1ZXMoKSB7XHJcbiAgICBsZXQgZSA9IHRoaXMuYW5zd2VyLFxyXG4gICAgICB0ID0gZT8ucmVndWxhciA/PyB7fSxcclxuICAgICAgciA9IHQuTGFuZ3VhZ2VzID8/IHQuTGFuZ3VhZ2UgPz8gdC5sYW5ndWFnZXMgPz8gdC5sYW5ndWFnZTtcclxuICAgIGlmIChudWxsICE9IHIpIHJldHVybiByO1xyXG4gICAgbGV0IG4gPSBlPy5wcm9maWxlRGF0YSA/PyBlPy5wcm9maWxlX2RhdGEgPz8ge30sXHJcbiAgICAgIG8gPSBuLkxhbmd1YWdlcyA/PyBuLkxhbmd1YWdlID8/IG4ubGFuZ3VhZ2VzID8/IG4ubGFuZ3VhZ2U7XHJcbiAgICBpZiAobnVsbCAhPSBvKSByZXR1cm4gbztcclxuICAgIGxldCBpID0gQXJyYXkuaXNBcnJheShuLnNraWxsTGlzdCkgPyBuLnNraWxsTGlzdCA6IFtdLFxyXG4gICAgICBhID0gaS5mbGF0TWFwKGUgPT4ge1xyXG4gICAgICAgIGxldCB0ID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZT8uY2F0ZWdvcnkgPyBlLmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgOiBcIlwiO1xyXG4gICAgICAgIHJldHVybiB0LmluY2x1ZGVzKFwibGFuZ3VhZ2VcIikgJiYgQXJyYXkuaXNBcnJheShlPy5za2lsbHMpID8gZS5za2lsbHMgOiBbXVxyXG4gICAgICB9KTtcclxuICAgIGlmIChhLmxlbmd0aCA+IDApIHJldHVybiBhO1xyXG4gICAgbGV0IGwgPSBuLnNraWxscztcclxuICAgIHJldHVybiBsICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIGwgJiYgIUFycmF5LmlzQXJyYXkobCkgPyBsLkxhbmd1YWdlID8/IGwuTGFuZ3VhZ2VzID8/IGxcclxuICAgICAgLmxhbmd1YWdlID8/IGwubGFuZ3VhZ2VzID8/IFtdIDogW11cclxuICB9XHJcbiAgYXN5bmMgZ2V0UnVsZXNBbmRBbnN3ZXIoZSkge1xyXG4gICAgQyhcInJ1bGVzOnN0YXJ0XCIsIHtcclxuICAgICAgZnJvbUFnZW50OiBlXHJcbiAgICB9KSwgYXdhaXQgdGhpcy5wcmVmaWxsQ291bnRyeUJlZm9yZVJ1bGVzKCksIEMoXCJydWxlczpjb3VudHJ5LXByZWZpbGwtZG9uZVwiLCB7XHJcbiAgICAgIGhhc0NvdW50cnk6ICEhdGhpcy5jdXJyZW50UnVuQ291bnRyeSxcclxuICAgICAgY29tbWl0dGVkOiB0aGlzLmN1cnJlbnRSdW5Db3VudHJ5Q29tbWl0dGVkXHJcbiAgICB9KTtcclxuICAgIGxldCB0ID0gYXdhaXQgKDAsIGcuZ2V0UnVsZXMpKCksXHJcbiAgICAgIHIgPSB0aGlzLmlzT3JhY2xlRW1haWxHYXRlUGFnZSgpLFxyXG4gICAgICBuID0gdGhpcy5pc09yYWNsZVZlcmlmaWNhdGlvblN0ZXAoKSxcclxuICAgICAgbyA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFwcGx5LWZsb3ctYmxvY2tcIik7XHJcbiAgICBpZiAoQyhcInJ1bGVzOmV4dHJhY3RlZFwiLCB7XHJcbiAgICAgICAgcnVsZUNvdW50OiB0Lmxlbmd0aCxcclxuICAgICAgICBpc0VtYWlsR2F0ZTogcixcclxuICAgICAgICBpc1ZlcmlmaWNhdGlvblN0ZXA6IG4sXHJcbiAgICAgICAgaGFzQXBwbHlTdXJmYWNlOiBvLFxyXG4gICAgICAgIGFkZHJlc3NSdWxlczogdC5maWx0ZXIoZi5pc09yYWNsZUFkZHJlc3NMaW5lMVJ1bGUpLm1hcChmXHJcbiAgICAgICAgICAuZGVzY3JpYmVPcmFjbGVBZGRyZXNzTGluZTFSdWxlKVxyXG4gICAgICB9KSwgMCA9PT0gdC5sZW5ndGgpIHJldHVybiBDKFwicnVsZXM6ZW1wdHktbG9jYWwtZmFpbHVyZVwiLCB7XHJcbiAgICAgICAgcnVsZUNvdW50OiB0Lmxlbmd0aCxcclxuICAgICAgICBpc0VtYWlsR2F0ZTogcixcclxuICAgICAgICBpc1ZlcmlmaWNhdGlvblN0ZXA6IG4sXHJcbiAgICAgICAgaGFzQXBwbHlTdXJmYWNlOiBvXHJcbiAgICAgIH0pLCAoMCwgdS5zZW5kSHR0cFN0YXR1c01lc3NhZ2UpKGMuQ1VTVE9NX0VSUk9SX0NPREVTLk5PX0VMRU1FTlRTKSwgYy5DVVNUT01fRVJST1JfQ09ERVNcclxuICAgICAgLk5PX0VMRU1FTlRTO1xyXG4gICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIuc2V0RmllbGRzUmVxdWlyZWRTdGF0dXModCksIGF3YWl0IHRoaXNcclxuICAgICAgLmZpbGxDb3VudHJ5UnVsZXNBbmRVcGRhdGVQcm9ncmVzcyh0LmZpbHRlcihtLmlzT3JhY2xlUHJvZmlsZUNvdW50cnlSdWxlKSksIEMoXHJcbiAgICAgICAgXCJydWxlczpjb3VudHJ5LWZpbGwtZG9uZVwiKTtcclxuICAgIGxldCBpID0gKDAsIG0uZXhjbHVkZU9yYWNsZVByb2ZpbGVDb3VudHJ5UnVsZXMpKHQpO1xyXG4gICAgcmV0dXJuIDAgPT09IGkubGVuZ3RoID8gKEMoXCJydWxlczpsb2NhbC1vbmx5LWNvdW50cnlcIiwge1xyXG4gICAgICBydWxlQ291bnQ6IHQubGVuZ3RoLFxyXG4gICAgICBjb3VudHJ5UnVsZUNvdW50OiB0Lmxlbmd0aCxcclxuICAgICAgY291bnRyeUNvbW1pdHRlZDogdGhpcy5jdXJyZW50UnVuQ291bnRyeUNvbW1pdHRlZFxyXG4gICAgfSksIHRoaXMuYW5zd2VyID0ge1xyXG4gICAgICBlZHVjYXRpb246IFtdLFxyXG4gICAgICB3b3JrRXhwZXJpZW5jZTogW10sXHJcbiAgICAgIHNraWxsczogW10sXHJcbiAgICAgIHJlZ3VsYXI6IHt9XHJcbiAgICB9KSA6ICh0aGlzLmFuc3dlciA9IGF3YWl0IHRoaXMucmVxdWVzdEZvcm1BbnN3ZXJzKGksIGUpLCBDKFwicnVsZXM6YW5zd2VyLXJlYWR5XCIsIHtcclxuICAgICAgcmVndWxhckNvdW50OiBPYmplY3Qua2V5cyh0aGlzLmFuc3dlci5yZWd1bGFyID8/IHt9KS5sZW5ndGhcclxuICAgIH0pKSwgdFxyXG4gIH1cclxuICBhc3luYyBmaWxsQ291bnRyeVJ1bGVzQW5kVXBkYXRlUHJvZ3Jlc3MoZSkge1xyXG4gICAgaWYgKDAgPT09IGUubGVuZ3RoKSByZXR1cm47XHJcbiAgICBsZXQgdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgciBvZiBlKSB0LnB1c2goYXdhaXQgKDAsIGguZmlsbENvdW50cnkpKHRoaXMuY3VycmVudFJ1bkNvdW50cnksIHIuJGlucHV0KSk7XHJcbiAgICBsZXQgciA9IGVbMF0ubGFiZWw7XHJcbiAgICB0LmV2ZXJ5KEJvb2xlYW4pID8gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MocikgOiB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAudXBkYXRlTWlzc2VkUHJvZ3Jlc3MocilcclxuICB9XHJcbiAgYXN5bmMgcHJlcGFyZU9yYWNsZUxpbmtSdWxlcyhlKSB7XHJcbiAgICBsZXQgdCA9IGUuZmlsdGVyKG0uaXNPcmFjbGVMaW5rUnVsZSk7XHJcbiAgICBpZiAoMCA9PT0gdC5sZW5ndGgpIHJldHVybiBlO1xyXG4gICAgbGV0IHIgPSAoMCwgbS5hcHBseU9yYWNsZVByb2ZpbGVMaW5rQW5zd2VycykodGhpcy5hbnN3ZXIsIHRoaXMubGF0ZXN0QXV0b2ZpbGxJbmZvKTtcclxuICAgIGlmICgwID09PSByLmxlbmd0aCB8fCAoYXdhaXQgKDAsIGguZW5zdXJlT3JhY2xlTGlua1Jvd3MpKHIubGVuZ3RoKSwgci5sZW5ndGggPD0gdC5sZW5ndGgpKVxyXG4gICAgICByZXR1cm4gZTtcclxuICAgIGxldCBuID0gYXdhaXQgKDAsIGcuZ2V0UnVsZXMpKCksXHJcbiAgICAgIG8gPSBuLmZpbHRlcihtLmlzT3JhY2xlTGlua1J1bGUpLFxyXG4gICAgICBpID0gbmV3IFNldCh0Lm1hcChlID0+IGUubGFiZWwpKTtcclxuICAgIGZvciAobGV0IGUgb2YgbykgaS5oYXMoZS5sYWJlbCkgfHwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cyhlKTtcclxuICAgIHJldHVybiBbLi4uZS5maWx0ZXIoZSA9PiAhKDAsIG0uaXNPcmFjbGVMaW5rUnVsZSkoZSkpLCAuLi5vXVxyXG4gIH1cclxuICBhc3luYyBmaWxsUmVndWxhclJ1bGVzKGUpIHtcclxuICAgIGxldCB0ID0gYXdhaXQgdGhpcy5wcmVwYXJlT3JhY2xlTGlua1J1bGVzKGUpLFxyXG4gICAgICByID0gKDAsIG0uZXhjbHVkZU9yYWNsZVByb2ZpbGVDb3VudHJ5UnVsZXMpKCgwLCBtLm9yZGVyT3JhY2xlUmVndWxhclJ1bGVzKSh0KSkuZmlsdGVyKGUgPT5cclxuICAgICAgICAhKDAsIGcuaXNPcmFjbGVTa2lsbHNSdWxlKShlKSAmJiAhKDAsIGcuaXNPcmFjbGVMYW5ndWFnZXNSdWxlKShlKSksXHJcbiAgICAgIG4gPSByLmZpbHRlcihmLmlzT3JhY2xlQWRkcmVzc0xpbmUxUnVsZSksXHJcbiAgICAgIG8gPSBuLmZpbHRlcihmLmlzT3JhY2xlQWRkcmVzc0xpbmUxU2VhcmNoUnVsZSksXHJcbiAgICAgIGEgPSBuLmxlbmd0aCA+IDAsXHJcbiAgICAgIGwgPSBvLmxlbmd0aCA+IDAsXHJcbiAgICAgIHMgPSBsICYmIG8uc29tZShlID0+ICgwLCBmLmhhc09yYWNsZUFkZHJlc3NMaW5lMVZhbHVlKShlLCB0aGlzLmFuc3dlci5yZWd1bGFyKSksXHJcbiAgICAgIHUgPSBuLnNvbWUoZSA9PiAoMCwgZi5pc09yYWNsZUFkZHJlc3NMaW5lMVBsYWluSW5wdXRSdWxlKShlKSAmJiAoMCwgZlxyXG4gICAgICAgIC5oYXNPcmFjbGVBZGRyZXNzTGluZTFWYWx1ZSkoZSwgdGhpcy5hbnN3ZXIucmVndWxhcikpLFxyXG4gICAgICBjID0gci5maWx0ZXIobS5pc09yYWNsZUFkZHJlc3NEZXBlbmRlbnRSdWxlKSxcclxuICAgICAgZCA9IHMgPyBjIDogW107XHJcbiAgICBDKFwicmVndWxhcjpwbGFuXCIsIHtcclxuICAgICAgaGFzQWRkcmVzc0xpbmUxOiBhLFxyXG4gICAgICBoYXNBZGRyZXNzTGluZTFTZWFyY2g6IGwsXHJcbiAgICAgIGhhc0FkZHJlc3NMaW5lMUFuc3dlcjogcyxcclxuICAgICAgaGFzUGxhaW5BZGRyZXNzTGluZTFBbnN3ZXI6IHUsXHJcbiAgICAgIGFkZHJlc3NSdWxlczogbi5tYXAoZSA9PiAoe1xyXG4gICAgICAgIC4uLigwLCBmLmRlc2NyaWJlT3JhY2xlQWRkcmVzc0xpbmUxUnVsZSkoZSksXHJcbiAgICAgICAgaGFzQW5zd2VyOiAoMCwgZi5oYXNPcmFjbGVBZGRyZXNzTGluZTFWYWx1ZSkoZSwgdGhpcy5hbnN3ZXIucmVndWxhcilcclxuICAgICAgfSkpLFxyXG4gICAgICBkZXBlbmRlbnRzOiBkLm1hcChlID0+IGUubGFiZWwpXHJcbiAgICB9KTtcclxuICAgIGxldCBwID0gbCA/IHRoaXMucmVzb2x2ZUFkZHJlc3NMaW5lMVJlY29yZChyLCB0aGlzLmFuc3dlci5yZWd1bGFyKSA6IFByb21pc2UucmVzb2x2ZSh0aGlzXHJcbiAgICAgICAgLmFuc3dlci5yZWd1bGFyKSxcclxuICAgICAgaCA9IHIuZmlsdGVyKGUgPT4gISgwLCBtLnNob3VsZFNraXBPcmFjbGVBZGRyZXNzRGVwZW5kZW50RmlsbCkoZSkgJiYgISgwLCBmXHJcbiAgICAgICAgICAuaXNPcmFjbGVBZGRyZXNzTGluZTFSdWxlKShlKSAmJiAhKChzIHx8IHUpICYmICgwLCBtLmlzT3JhY2xlQWRkcmVzc0RlcGVuZGVudFJ1bGUpKFxyXG4gICAgICAgIGUpKSk7XHJcbiAgICBmb3IgKGxldCBlIG9mIChDKFwicmVndWxhcjppbW1lZGlhdGVcIiwge1xyXG4gICAgICAgIGxhYmVsczogaC5tYXAoZSA9PiBlLmxhYmVsKVxyXG4gICAgICB9KSwgKDAsIGkuZ2V0UmVndWxhck9wZXJhdGlvbnMpKGgsIHRoaXMuYW5zd2VyLnJlZ3VsYXIsIHRoaXMub3BlcmF0aW9uQ29uZmlnKSkpIHRoaXNcclxuICAgICAgLnRhc2tRdWV1ZS5hZGQoZSk7XHJcbiAgICBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKSwgQyhcInJlZ3VsYXI6aW1tZWRpYXRlLWRvbmVcIiksIEMoXCJyZWd1bGFyOnJlc29sdmUtYXdhaXRcIiksIHRoaXNcclxuICAgICAgLmFuc3dlci5yZWd1bGFyID0gYXdhaXQgcDtcclxuICAgIGxldCBiID0gbCAmJiBvLnNvbWUoZSA9PiAoMCwgZi5oYXNPcmFjbGVBZGRyZXNzTGluZTFWYWx1ZSkoZSwgdGhpcy5hbnN3ZXIucmVndWxhcikpO1xyXG4gICAgaWYgKEMoXCJyZWd1bGFyOnJlc29sdmUtYXdhaXQtZG9uZVwiLCB7XHJcbiAgICAgICAgaGFzUmVzb2x2ZWRBZGRyZXNzTGluZTFBbnN3ZXI6IGIsXHJcbiAgICAgICAgYWRkcmVzc1J1bGVzOiBuLm1hcChlID0+ICh7XHJcbiAgICAgICAgICAuLi4oMCwgZi5kZXNjcmliZU9yYWNsZUFkZHJlc3NMaW5lMVJ1bGUpKGUpLFxyXG4gICAgICAgICAgaGFzQW5zd2VyOiAoMCwgZi5oYXNPcmFjbGVBZGRyZXNzTGluZTFWYWx1ZSkoZSwgdGhpcy5hbnN3ZXIucmVndWxhcilcclxuICAgICAgICB9KSlcclxuICAgICAgfSksIG4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgZSA9IG4uZXZlcnkoZSA9PiB0aGlzLmdldFJ1bGVDdXJyZW50SW5wdXRWYWx1ZShlKSkgJiYgZC5sZW5ndGggPiAwICYmIGQuZXZlcnkoZSA9PlxyXG4gICAgICAgIHRoaXMuZ2V0UnVsZUN1cnJlbnRJbnB1dFZhbHVlKGUpKTtcclxuICAgICAgaWYgKGUpXHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiAoQyhcInJlZ3VsYXI6YWRkcmVzc2xpbmUtc2tpcFwiLCB7XHJcbiAgICAgICAgICAgIHJlYXNvbjogXCJhbHJlYWR5LWZpbGxlZFwiXHJcbiAgICAgICAgICB9KSwgbikpIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKGUubGFiZWwpO1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIChDKFwicmVndWxhcjphZGRyZXNzbGluZVwiLCB7XHJcbiAgICAgICAgICAgIGFkZHJlc3NSdWxlczogbi5tYXAoZSA9PiAoe1xyXG4gICAgICAgICAgICAgIC4uLigwLCBmLmRlc2NyaWJlT3JhY2xlQWRkcmVzc0xpbmUxUnVsZSkoZSksXHJcbiAgICAgICAgICAgICAgaGFzQW5zd2VyOiAoMCwgZi5oYXNPcmFjbGVBZGRyZXNzTGluZTFWYWx1ZSkoZSwgdGhpcy5hbnN3ZXIucmVndWxhcilcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICB9KSwgKDAsIGkuZ2V0UmVndWxhck9wZXJhdGlvbnMpKG4sIHRoaXMuYW5zd2VyLnJlZ3VsYXIsIHRoaXMub3BlcmF0aW9uQ29uZmlnKSkpIHRoaXNcclxuICAgICAgICAgIC50YXNrUXVldWUuYWRkKGUpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpLCBDKFwicmVndWxhcjphZGRyZXNzbGluZS1kb25lXCIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEMoXCJyZWd1bGFyOmRlcGVuZGVudHNcIiksIGIgPyBhd2FpdCB0aGlzLnJlc29sdmVPcmFjbGVBZGRyZXNzRGVwZW5kZW50UnVsZXMoZCkgOiB1ID9cclxuICAgICAgYXdhaXQgdGhpcy5maWxsT3JhY2xlQWRkcmVzc0RlcGVuZGVudFJ1bGVzKGMuZmlsdGVyKGUgPT4gISgwLCBtXHJcbiAgICAgICAgLnNob3VsZFNraXBPcmFjbGVBZGRyZXNzRGVwZW5kZW50RmlsbCkoZSkpKSA6IGF3YWl0IHRoaXNcclxuICAgICAgLmZpbGxPcmFjbGVBZGRyZXNzRGVwZW5kZW50UnVsZXMoZC5maWx0ZXIoZSA9PiAhKDAsIG1cclxuICAgICAgICAuc2hvdWxkU2tpcE9yYWNsZUFkZHJlc3NEZXBlbmRlbnRGaWxsKShlKSkpLCBDKFwicmVndWxhcjpkb25lXCIpXHJcbiAgfVxyXG4gIGFzeW5jIHJ1bkNvbWJvUXVlc3Rpb25BdXRvZmlsbElmTmVlZGVkKGUsIHQpIHtcclxuICAgIGlmICghdGhpcy5oYXNDb21ib1F1ZXN0aW9ucykgcmV0dXJuIGU7XHJcbiAgICBhd2FpdCAoMCwgZC53YWl0Rm9yQ29tYm9RdWVzdGlvbnNUb1NldHRsZSkodGhpcy5jb21ib1F1ZXN0aW9uU2V0dGxlRGVsYXlNcyk7XHJcbiAgICBsZXQgciA9IGF3YWl0ICgwLCBnLmdldFJ1bGVzKSgpLFxyXG4gICAgICBuID0gKDAsIGQuZ2V0TmV3Q29tYm9RdWVzdGlvblJ1bGVzKShlLCByKTtcclxuICAgIGlmICgwID09PSBuLmxlbmd0aCkgcmV0dXJuIGU7XHJcbiAgICBmb3IgKGxldCBlIG9mIG4pIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMoZSk7XHJcbiAgICBsZXQgbyA9IG4uZmlsdGVyKG0uaXNPcmFjbGVQcm9maWxlQ291bnRyeVJ1bGUpLFxyXG4gICAgICBpID0gKDAsIG0uZXhjbHVkZU9yYWNsZVByb2ZpbGVDb3VudHJ5UnVsZXMpKG4pO1xyXG4gICAgaWYgKGkubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgZSA9IGF3YWl0IHRoaXMucmVxdWVzdEZvcm1BbnN3ZXJzKGksIHQsIHtcclxuICAgICAgICB1cGRhdGVUaW1lVHJhY2U6ICExXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmFuc3dlciA9ICgwLCBkLm1lcmdlQ29tYm9RdWVzdGlvbkFuc3dlcikodGhpcy5hbnN3ZXIsIGUsIGkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5maWxsQ291bnRyeVJ1bGVzQW5kVXBkYXRlUHJvZ3Jlc3MobyksIGF3YWl0IHRoaXMuZmlsbFJlZ3VsYXJSdWxlcyhpKSwgWy4uLlxyXG4gICAgICBlLCAuLi5uXHJcbiAgICBdXHJcbiAgfVxyXG4gIGFzeW5jIGhhbmRsZU9yYWNsZUVtYWlsR2F0ZShlKSB7XHJcbiAgICB0aGlzLnRpbWVUcmFjZS5ydWxlc1BhcnNlU3RhcnRUaW1lID0gRGF0ZS5ub3coKSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIuY2xlYXIoKSwgdGhpc1xyXG4gICAgICAudGFza1F1ZXVlLmNsZWFyKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdCA9IGF3YWl0IHRoaXMuZ2V0UnVsZXNBbmRBbnN3ZXIoZSk7XHJcbiAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiB0KSByZXR1cm4gdDtcclxuICAgICAgbGV0IHIgPSBbLi4uKDAsIGkuZ2V0UmVndWxhck9wZXJhdGlvbnMpKCgwLCBtLm9yZGVyT3JhY2xlUmVndWxhclJ1bGVzKSgoMCwgbVxyXG4gICAgICAgIC5leGNsdWRlT3JhY2xlUHJvZmlsZUNvdW50cnlSdWxlcykodCkpLmZpbHRlcihlID0+ICEoMCwgbVxyXG4gICAgICAgIC5zaG91bGRTa2lwT3JhY2xlQWRkcmVzc0RlcGVuZGVudEZpbGwpKGUpICYmICEoMCwgZy5pc09yYWNsZVNraWxsc1J1bGUpKGUpICYmICEoXHJcbiAgICAgICAgMCwgZy5pc09yYWNsZUxhbmd1YWdlc1J1bGUpKGUpKSwgdGhpcy5hbnN3ZXIucmVndWxhciwgdGhpcy5vcGVyYXRpb25Db25maWcpXTtcclxuICAgICAgZm9yIChsZXQgZSBvZiByKSB0aGlzLnRhc2tRdWV1ZS5hZGQoZSk7XHJcbiAgICAgIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpO1xyXG4gICAgICBsZXQgbiA9IGF3YWl0ICgwLCBoLnByb2NlZWRPcmFjbGVFbWFpbEdhdGVTdGVwKSgpO1xyXG4gICAgICBpZiAoIW4pIHJldHVybiB0aGlzLnByb2dyZXNzVHJhY2tlci5nZW5lcmF0ZUZpbmFsUHJvZ3Jlc3MoKTtcclxuICAgICAgbGV0IG8gPSBhd2FpdCAoMCwgcy53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiB0aGlzLmlzT3JhY2xlQXBwbHlGbG93UGFnZSgpICYmICF0aGlzXHJcbiAgICAgICAgLmlzT3JhY2xlRW1haWxHYXRlUGFnZSgpICYmICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFwcGx5LWZsb3ctYmxvY2tcIikgfHwgdGhpc1xyXG4gICAgICAgIC5pc09yYWNsZVZlcmlmaWNhdGlvblN0ZXAoKSwge1xyXG4gICAgICAgICAgdGltZW91dDogMmU0LFxyXG4gICAgICAgICAgaW50ZXJ2YWw6IDIwMCxcclxuICAgICAgICAgIG9ic2VydmVUYXJnZXQ6IGRvY3VtZW50LmJvZHlcclxuICAgICAgICB9KTtcclxuICAgICAgaWYgKCFvKSByZXR1cm4gY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgXCJbb3JhY2xlY2xvdWRdIGVtYWlsLWdhdGU6IG5vIGFwcGx5IGZvcm0gb3IgdmVyaWZpY2F0aW9uIHN0ZXAgZGV0ZWN0ZWQgYWZ0ZXIgbmV4dFwiKSxcclxuICAgICAgICB0aGlzLnByb2dyZXNzVHJhY2tlci5nZW5lcmF0ZUZpbmFsUHJvZ3Jlc3MoKTtcclxuICAgICAgaWYgKHRoaXMuaXNPcmFjbGVWZXJpZmljYXRpb25TdGVwKCkpIHJldHVybiB0aGlzLnByb2dyZXNzVHJhY2tlci5nZW5lcmF0ZUZpbmFsUHJvZ3Jlc3MoKTtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlsbEZvcm0oZSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBpLkhUVFBFcnJvciB8fCBlIGluc3RhbmNlb2YgaS5SZXN1bWVNaXNzaW5nQ29kZUVycm9yKSByZXR1cm4gKDAsIHVcclxuICAgICAgICAuc2VuZEh0dHBTdGF0dXNNZXNzYWdlKShlLm1lc3NhZ2UpLCBlLm1lc3NhZ2U7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiVW5rbm93biBlcnJvciBvY2N1cnJlZDpcIiwgZSksIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgLmdlbmVyYXRlRmluYWxQcm9ncmVzcygpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGRvRmlsbEZvcm0oZSA9ICExKSB7XHJcbiAgICBsZXQgdCA9IHRoaXMuYmVnaW5PcmFjbGVBZGRyZXNzUmVzb2x2ZVJ1bigpO1xyXG4gICAgdGhpcy5yZXNldEZhbGNvblJlc3BvbnNlQWNjdW11bGF0b3IoKSwgQyhcImZpbGw6ZW50cnlcIiwge1xyXG4gICAgICBmcm9tQWdlbnQ6IGUsXHJcbiAgICAgIGlzQXBwbHlGbG93OiB0aGlzLmlzT3JhY2xlQXBwbHlGbG93UGFnZSgpLFxyXG4gICAgICBpc0VtYWlsR2F0ZTogdGhpcy5pc09yYWNsZUVtYWlsR2F0ZVBhZ2UoKSxcclxuICAgICAgaXNQaW5QYWdlOiB0aGlzLmlzT3JhY2xlUGluUGFnZSgpXHJcbiAgICB9KTtcclxuICAgIGxldCByID0gYXdhaXQgKDAsIGgucHJvY2VlZE9yYWNsZUpvYkRldGFpbFRvQXBwbHkpKCk7XHJcbiAgICBpZiAoQyhcImZpbGw6YXBwbHktZmxvdy1jaGVja1wiLCB7XHJcbiAgICAgICAgZW50ZXJlZEFwcGx5RmxvdzogcixcclxuICAgICAgICBpc0VtYWlsR2F0ZTogdGhpcy5pc09yYWNsZUVtYWlsR2F0ZVBhZ2UoKVxyXG4gICAgICB9KSwgciAmJiB0aGlzLmlzT3JhY2xlRW1haWxHYXRlUGFnZSgpIHx8IHRoaXMuaXNPcmFjbGVFbWFpbEdhdGVQYWdlKCkpIHJldHVybiB0XHJcbiAgICAgIC5maW5pc2hOb3JtYWxGaWxsKCExKSwgdGhpcy5oYW5kbGVPcmFjbGVFbWFpbEdhdGUoZSk7XHJcbiAgICBpZiAodGhpcy5pc09yYWNsZVBpblBhZ2UoKSkgcmV0dXJuIHQuZmluaXNoTm9ybWFsRmlsbCghMSksIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgIC5nZW5lcmF0ZUZpbmFsUHJvZ3Jlc3MoKTtcclxuICAgIHRoaXMudGltZVRyYWNlLnJ1bGVzUGFyc2VTdGFydFRpbWUgPSBEYXRlLm5vdygpLCB0aGlzLnByb2dyZXNzVHJhY2tlci5jbGVhcigpLCB0aGlzXHJcbiAgICAgIC5zYXZlZEVkdWNhdGlvblNuYXBzaG90cyA9IFtdLCB0aGlzLnNhdmVkRXhwZXJpZW5jZVNuYXBzaG90cyA9IFtdLCB0aGlzXHJcbiAgICAgIC5zZWN0aW9uUmVzdWx0cyA9IHt9LCB0aGlzLnRhc2tRdWV1ZS5jbGVhcigpLCB0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0ICgwLCBoLmNsZWFuRWR1QW5kRXhwKSgpXHJcbiAgICAgIH0pLCBDKFwiZmlsbDpjbGVhbnVwLXN0YXJ0XCIpLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKSwgQyhcImZpbGw6Y2xlYW51cC1kb25lXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHIgPSBhd2FpdCB0aGlzLmdldFJ1bGVzQW5kQW5zd2VyKGUpO1xyXG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgcikgcmV0dXJuIHI7XHJcbiAgICAgIGxldCBuID0gKDAsIGguaGFzT3JhY2xlQ292ZXJMZXR0ZXJTbG90KSgpLFxyXG4gICAgICAgIG8gPSAoMCwgZy5nZXRTdWJtaXRCdXR0b25UZXh0KSgpO1xyXG4gICAgICAoMCwgdS5iaW5kU3VibWl0QnV0dG9uKShvLCB0aGlzLnByb2dyZXNzVHJhY2tlci5maWVsZFN0YXR1cywgdGhpcy50aW1lVHJhY2UpLCBhd2FpdCB0aGlzXHJcbiAgICAgICAgLmZpbGxSZWd1bGFyUnVsZXMociksIHIgPSBhd2FpdCB0aGlzLnJ1bkNvbWJvUXVlc3Rpb25BdXRvZmlsbElmTmVlZGVkKHIsIGUpO1xyXG4gICAgICBsZXQgbCA9ICExLFxyXG4gICAgICAgIHMgPSAhMSxcclxuICAgICAgICBjID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgICBzID0gITA7XHJcbiAgICAgICAgICBsZXQgdCA9IGF3YWl0ICgwLCBoLmNhbmNlbEVkdWNhdGlvbikoKTtcclxuICAgICAgICAgIHJldHVybiBDKFwiZWR1Y2F0aW9uOmZhaWxlZC1yb3ctY2xvc2UtcmVzdWx0XCIsIHtcclxuICAgICAgICAgICAgcmVjb3JkSW5kZXg6IGUsXHJcbiAgICAgICAgICAgIGNsb3NlZDogdFxyXG4gICAgICAgICAgfSksIHQgfHwgKGwgPSAhMCksIHRcclxuICAgICAgICB9O1xyXG4gICAgICBmb3IgKGxldCBlID0gMDsgZSA8IHRoaXMuYW5zd2VyLmVkdWNhdGlvbi5sZW5ndGg7IGUrKykge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcy5hbnN3ZXIuZWR1Y2F0aW9uW2VdLFxyXG4gICAgICAgICAgciA9IGF3YWl0ICgwLCBnLmFkZEFuZEdldEVkdVJ1bGVzKSgpO1xyXG4gICAgICAgIGlmICghcikge1xyXG4gICAgICAgICAgaWYgKEMoXCJlZHVjYXRpb246cnVsZXMtbm90LXJlYWR5XCIsIHtcclxuICAgICAgICAgICAgICByZWNvcmRJbmRleDogZVxyXG4gICAgICAgICAgICB9KSwgIWF3YWl0IGMoZSkpIGJyZWFrO1xyXG4gICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG4gPSAoMCwgcC5nZXRPcmFjbGVFZHVjYXRpb25SYXdWYWx1ZXMpKHQsIHRoaXMubGF0ZXN0QXV0b2ZpbGxJbmZvPy5lZHVjYXRpb24/LltlXSksXHJcbiAgICAgICAgICBvID0ge1xyXG4gICAgICAgICAgICAuLi50LFxyXG4gICAgICAgICAgICAuLi5uXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYSA9IHIuY2hpbGRyZW4gfHwgW107XHJcbiAgICAgICAgQyhcImVkdWNhdGlvbjpyZWNvcmQtcm91dGVcIiwge1xyXG4gICAgICAgICAgcmVjb3JkSW5kZXg6IGUsXHJcbiAgICAgICAgICByZWNvcmRLZXlzOiBPYmplY3Qua2V5cyh0KSxcclxuICAgICAgICAgIHJhd1NjaG9vbExlbmd0aDogbi5yYXdTY2hvb2w/Lmxlbmd0aCB8fCAwLFxyXG4gICAgICAgICAgcmF3TWFqb3JMZW5ndGg6IG4ucmF3TWFqb3I/Lmxlbmd0aCB8fCAwLFxyXG4gICAgICAgICAgZmllbGRzOiBhLm1hcChlID0+ICh7XHJcbiAgICAgICAgICAgIGxhYmVsOiBlLmxhYmVsLFxyXG4gICAgICAgICAgICBmaWVsZE5hbWU6IGUuJGlucHV0Py5nZXRBdHRyaWJ1dGU/LihcIm5hbWVcIikgfHwgXCJcIixcclxuICAgICAgICAgICAgdHlwZTogZS50eXBlLFxyXG4gICAgICAgICAgICBpc01ham9yVGV4dDogaihlKVxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHMgPSAoMCwgaS5nZXRFZHVjYXRpb25PcGVyYXRpb25zKShbcl0sIFtvXSwgdGhpcy5vcGVyYXRpb25Db25maWcsIHZvaWQgMCwge1xyXG4gICAgICAgICAgb25Ta2lwcGVkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGwgPSAhMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG9uU2VjdGlvblJlc3VsdENoYW5nZWQ6IHQgPT4gdGhpcy5tZXJnZVNlY3Rpb25SZXN1bHQoXCJlZHVjYXRpb25cIiwgdCwgZSlcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBrZWVwQ3VycmVudEZpZWxkT25FeGl0OiAhMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvciAobGV0IGUgb2YgcykgdGhpcy50YXNrUXVldWUuYWRkKGUpO1xyXG4gICAgICAgIGlmIChhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKSwgbCkgYnJlYWs7XHJcbiAgICAgICAgQyhcImVkdWNhdGlvbjpwcmUtc2F2ZS1zdGF0ZVwiLCB7XHJcbiAgICAgICAgICByZWNvcmRJbmRleDogZSxcclxuICAgICAgICAgIGZpZWxkczogYS5tYXAoZSA9PiAoe1xyXG4gICAgICAgICAgICBsYWJlbDogZS5sYWJlbCxcclxuICAgICAgICAgICAgdmFsdWVMZW5ndGg6IGUuJGlucHV0Py52YWx1ZT8ubGVuZ3RoIHx8IDAsXHJcbiAgICAgICAgICAgIGFyaWFJbnZhbGlkOiBlLiRpbnB1dD8uZ2V0QXR0cmlidXRlPy4oXCJhcmlhLWludmFsaWRcIikgfHwgbnVsbCxcclxuICAgICAgICAgICAgY29ubmVjdGVkOiBlLiRpbnB1dD8uaXNDb25uZWN0ZWQgIT09ICExXHJcbiAgICAgICAgICB9KSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgdSA9ICgwLCBnLmdldFNlY3Rpb25Sb3dTbmFwc2hvdCkociksXHJcbiAgICAgICAgICBkID0gYXdhaXQgKDAsIGguc2F2ZUVkdWNhdGlvbikoKTtcclxuICAgICAgICBpZiAoQyhcImVkdWNhdGlvbjpzYXZlLXJlc3VsdFwiLCB7XHJcbiAgICAgICAgICAgIHJlY29yZEluZGV4OiBlLFxyXG4gICAgICAgICAgICBzYXZlZDogZFxyXG4gICAgICAgICAgfSksICFkKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5tYXJrU2VjdGlvblJlc3VsdFJvd01pc3NlZChcImVkdWNhdGlvblwiLCBlKSwgIWF3YWl0IGMoZSkpIGJyZWFrO1xyXG4gICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zYXZlZEVkdWNhdGlvblNuYXBzaG90cy5wdXNoKHUpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbnN3ZXIuZWR1Y2F0aW9uLmxlbmd0aCA+IDAgJiYgKDAsIGEudXBkYXRlQ3VycmVudEZpZWxkKShudWxsKSwgbCB8fCBzID8gdGhpc1xyXG4gICAgICAgIC5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFZHVjYXRpb25cIikgOiB0aGlzLmFuc3dlci5lZHVjYXRpb24ubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKFwiRWR1Y2F0aW9uXCIpO1xyXG4gICAgICBsZXQgZCA9ICExLFxyXG4gICAgICAgIGYgPSAhMTtcclxuICAgICAgZm9yIChsZXQgZSA9IDA7IGUgPCB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZS5sZW5ndGg7IGUrKykge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2VbZV0sXHJcbiAgICAgICAgICByID0gYXdhaXQgKDAsIGcuYWRkQW5kR2V0V29ya1J1bGVzKSgpLFxyXG4gICAgICAgICAgbiA9IHIuY2hpbGRyZW4gfHwgW107XHJcbiAgICAgICAgQyhcImVtcGxveW1lbnQ6cmVjb3JkLXJvdXRlXCIsIHtcclxuICAgICAgICAgIHJlY29yZEluZGV4OiBlLFxyXG4gICAgICAgICAgcmVjb3JkS2V5czogT2JqZWN0LmtleXModCksXHJcbiAgICAgICAgICBmaWVsZHM6IG4ubWFwKGUgPT4gKHtcclxuICAgICAgICAgICAgbGFiZWw6IGUubGFiZWwsXHJcbiAgICAgICAgICAgIGZpZWxkTmFtZTogZS4kaW5wdXQ/LmdldEF0dHJpYnV0ZT8uKFwibmFtZVwiKSB8fCBcIlwiLFxyXG4gICAgICAgICAgICB0eXBlOiBlLnR5cGUsXHJcbiAgICAgICAgICAgIGlzRGF0ZTogZS50eXBlID09PSB2LkZJRUxEX1RZUEUuREFURVxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IG8gPSAoMCwgaS5nZXRFbXBsb3ltZW50T3BlcmF0aW9ucykoW3JdLCBbdF0sIHRoaXMuZ2V0RW1wbG95bWVudE9wZXJhdGlvbkNvbmZpZyhlKSxcclxuICAgICAgICAgIHZvaWQgMCwge1xyXG4gICAgICAgICAgICBvblNraXBwZWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICBkID0gITBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25TZWN0aW9uUmVzdWx0Q2hhbmdlZDogdCA9PiB0aGlzLm1lcmdlU2VjdGlvblJlc3VsdChcImVtcGxveW1lbnRcIiwgdCwgZSlcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAga2VlcEN1cnJlbnRGaWVsZE9uRXhpdDogITBcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGZvciAobGV0IGUgb2YgbykgdGhpcy50YXNrUXVldWUuYWRkKGUpO1xyXG4gICAgICAgIGlmIChhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKSwgZCkgYnJlYWs7XHJcbiAgICAgICAgbGV0IGEgPSAoMCwgZy5nZXRTZWN0aW9uUm93U25hcHNob3QpKHIpLFxyXG4gICAgICAgICAgbCA9IGF3YWl0ICgwLCBoLnNhdmVFeHBlcmllbmNlKSgpO1xyXG4gICAgICAgIGlmIChDKFwiZW1wbG95bWVudDpzYXZlLXJlc3VsdFwiLCB7XHJcbiAgICAgICAgICAgIHJlY29yZEluZGV4OiBlLFxyXG4gICAgICAgICAgICBzYXZlZDogbFxyXG4gICAgICAgICAgfSksICFsKSB7XHJcbiAgICAgICAgICBmID0gITAsIHRoaXMubWFya1NlY3Rpb25SZXN1bHRSb3dNaXNzZWQoXCJlbXBsb3ltZW50XCIsIGUpO1xyXG4gICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zYXZlZEV4cGVyaWVuY2VTbmFwc2hvdHMucHVzaChhKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlLmxlbmd0aCA+IDAgJiYgKDAsIGEudXBkYXRlQ3VycmVudEZpZWxkKShudWxsKSwgZCB8fCBmID8gdGhpc1xyXG4gICAgICAgIC5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFbXBsb3ltZW50XCIpIDogdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2VcclxuICAgICAgICAubGVuZ3RoID4gMCAmJiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhcIkVtcGxveW1lbnRcIik7XHJcbiAgICAgIGxldCBtID0gci5maW5kKGcuaXNPcmFjbGVTa2lsbHNSdWxlKTtcclxuICAgICAgbSAmJiAodGhpcy50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgICAoMCwgYS51cGRhdGVDdXJyZW50RmllbGQpKG0ubGFiZWwpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBsZXQgZSA9IGF3YWl0ICgwLCBoLmZpbGxTa2lsbHMpKHRoaXMuZ2V0T3JhY2xlU2tpbGxWYWx1ZXMoKSk7XHJcbiAgICAgICAgICBlID8gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MobS5sYWJlbCkgOiB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgICAgICAudXBkYXRlTWlzc2VkUHJvZ3Jlc3MobS5sYWJlbClcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgKDAsIGEudXBkYXRlQ3VycmVudEZpZWxkKShudWxsKVxyXG4gICAgICAgIH1cclxuICAgICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpKTtcclxuICAgICAgbGV0IGIgPSByLmZpbmQoZy5pc09yYWNsZUxhbmd1YWdlc1J1bGUpO1xyXG4gICAgICByZXR1cm4gYiAmJiAodGhpcy50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICgwLCBhLnVwZGF0ZUN1cnJlbnRGaWVsZCkoYi5sYWJlbCk7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZSA9IGF3YWl0ICgwLCBoLmZpbGxMYW5ndWFnZXMpKHRoaXMuZ2V0T3JhY2xlTGFuZ3VhZ2VWYWx1ZXMoKSk7XHJcbiAgICAgICAgICAgIGUgPyB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhiLmxhYmVsKSA6IHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgICAgICAgLnVwZGF0ZU1pc3NlZFByb2dyZXNzKGIubGFiZWwpXHJcbiAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAoMCwgYS51cGRhdGVDdXJyZW50RmllbGQpKG51bGwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpKSwgdGhpcy5kaXNhYmxlVXBsb2FkUmVzdW1lID8gdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJSZXN1bWUvQ1ZcIikgOiB0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IGUgPSBhd2FpdCAoMCwgaC51cGxvYWRSZXN1bWUpKHRoaXMucmVzdW1lSW5mbywgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAgICAgLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKTtcclxuICAgICAgICAgIGUgfHwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJSZXN1bWUvQ1ZcIilcclxuICAgICAgICB9KSwgbiAmJiB0aGlzLmNvdmVyTGV0dGVyPy5jb3ZlckxldHRlcklkICYmIHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBsZXQgZSA9IGF3YWl0ICgwLCBoLnVwbG9hZENvdmVyTGV0dGVyKSh0aGlzLmNvdmVyTGV0dGVyLCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgICAgICAudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cywgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgZSB8fCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIkNvdmVyIExldHRlclwiKVxyXG4gICAgICAgIH0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKSwgYXdhaXQgdGhpcy5iaW5kU3VibWl0QnV0dG9uVHJhY2tpbmcociksICgwLCB1XHJcbiAgICAgICAgICAucG9zdFN0YXR1cykoXCJmaWxsaW5nXCIsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzLCB0aGlzLnRpbWVUcmFjZSksIHRcclxuICAgICAgICAuZmluaXNoTm9ybWFsRmlsbCghMCksIHRoaXMucHJvZ3Jlc3NUcmFja2VyLmdlbmVyYXRlRmluYWxQcm9ncmVzcygpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmICh0LmZpbmlzaE5vcm1hbEZpbGwoITEpLCBDKFwiZmlsbDplcnJvclwiLCBBKGUpKSwgZSBpbnN0YW5jZW9mIGkuSFRUUEVycm9yIHx8XHJcbiAgICAgICAgZSBpbnN0YW5jZW9mIGkuUmVzdW1lTWlzc2luZ0NvZGVFcnJvcikgcmV0dXJuICgwLCB1LnNlbmRIdHRwU3RhdHVzTWVzc2FnZSkoZS5tZXNzYWdlKSwgZVxyXG4gICAgICAgIC5tZXNzYWdlO1xyXG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcIlVua25vd24gZXJyb3Igb2NjdXJyZWQ6XCIsIGUpLCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgIC5nZW5lcmF0ZUZpbmFsUHJvZ3Jlc3MoKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvciguLi5lKSB7XHJcbiAgICBzdXBlciguLi5lKSwgdGhpcy5jb3ZlckxldHRlclNsb3RPYnNlcnZlciA9IG51bGwsIHRoaXMubGFzdENvdmVyTGV0dGVyU3RhdHVzID0gbnVsbCwgdGhpc1xyXG4gICAgICAubGF0ZXN0QXV0b2ZpbGxJbmZvID0gbnVsbCwgdGhpcy5jdXJyZW50UnVuQ291bnRyeSA9IG51bGwsIHRoaXNcclxuICAgICAgLmN1cnJlbnRSdW5Db3VudHJ5Q29tbWl0dGVkID0gITEsIHRoaXMuc3VibWl0VHJhY2tpbmdSdWxlcyA9IFtdLCB0aGlzXHJcbiAgICAgIC5zYXZlZEVkdWNhdGlvblNuYXBzaG90cyA9IFtdLCB0aGlzLnNhdmVkRXhwZXJpZW5jZVNuYXBzaG90cyA9IFtdLCB0aGlzXHJcbiAgICAgIC5zZWN0aW9uUmVzdWx0cyA9IHt9LCB0aGlzLmhhc0NvbWJvUXVlc3Rpb25zID0gITAsIHRoaXMuYWRkcmVzc1Jlc29sdmVUaW1lb3V0TXMgPSAxZTQsXHJcbiAgICAgIHRoaXMub3JhY2xlQWRkcmVzc1Jlc29sdmVSdW5JZCA9IDAsIHRoaXMuYWN0aXZlT3JhY2xlQWRkcmVzc1Jlc29sdmVSdW4gPSBudWxsXHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoib3JhY2xlY2xvdWQuOGFjNWMwYzcuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);