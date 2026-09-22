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
})({"3YZaT":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\oraclecloud\\answer.js",
    "bundleId": "7a624480dbfadbc9",
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
var j = z(require("6224dc8ef0b54ad7"));
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

},{"6224dc8ef0b54ad7":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"dOo4n":[function(require,module,exports) {
/**
 * Parcel module id: 9Ki4d
 * Resolved path: src/contents/sites/oraclecloud/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~constants -> 6VEjR  =>  src/constants.js
 *   ~constants/phone-country-code -> 3iM7P  =>  src/constants/phone-country-code.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 *   ~utils/gpa -> l4T7j  =>  src/utils/gpa.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "normalizeOracleProfileLinkUrl", ()=>y), n.export(r, "getOracleProfileLinkValues", ()=>w), n.export(r, "applyOracleProfileLinkAnswers", ()=>S), n.export(r, "isOraclePhoneCountryCodeField", ()=>F), n.export(r, "getOracleLinkRuleIndex", ()=>I), n.export(r, "isOracleLinkRule", ()=>j), n.export(r, "orderOracleRegularRules", ()=>z), n.export(r, "shouldSkipOracleAddressDependentFill", ()=>G), n.export(r, "isOraclePostalCodeDependentRule", ()=>Q), n.export(r, "isOracleCityDependentRule", ()=>Z), n.export(r, "isOracleAddressDependentRule", ()=>ee), n.export(r, "isOracleAddressSelectField", ()=>eo), n.export(r, "findOracleSelectOptionIndex", ()=>ed), n.export(r, "canFillOracleSelectRule", ()=>ef), n.export(r, "resolveOracleCountryValue", ()=>ep), n.export(r, "isOracleProfileCountryRule", ()=>em), n.export(r, "excludeOracleProfileCountryRules", ()=>eh), n.export(r, "shouldSkipOraclePrefilledCountryFill", ()=>eg), n.export(r, "getOracleProfileCountryRule", ()=>eb), n.export(r, "applyOracleAutofillLocationFallbacks", ()=>eS), n.export(r, "formatAnswer", ()=>eE);
var o = e("dayjs"), i = n.interopDefault(o), a = e("~constants"), l = e("~constants/phone-country-code"), s = e("~core/utils"), u = e("~utils/gpa");
let c = new Set([
    "country",
    "address1",
    "addressLine1",
    "city",
    "region2",
    "postalCode",
    "region1"
]), d = new Map([
    [
        "country",
        0
    ],
    [
        "address1",
        1
    ],
    [
        "addressline1",
        1
    ],
    [
        "address2",
        2
    ],
    [
        "addressline2",
        2
    ],
    [
        "address3",
        3
    ],
    [
        "addressline3",
        3
    ],
    [
        "state",
        4
    ],
    [
        "region2",
        4
    ],
    [
        "city",
        5
    ],
    [
        "postalcode",
        6
    ],
    [
        "zipcode",
        6
    ],
    [
        "zip",
        6
    ],
    [
        "county",
        7
    ],
    [
        "region1",
        7
    ]
]);
function f(e1) {
    if ("string" != typeof e1) return;
    let t = e1.trim();
    if (!t) return;
    if (/^\d{4}-\d{2}$/.test(t)) return t;
    if (/^\d{4}-\d{2}-\d{2}$/.test(t)) return t.slice(0, 7);
    let r1 = (0, i.default)(t);
    return r1.isValid() ? r1.format("YYYY-MM") : t;
}
function p(e1) {
    if (!0 === e1 || 1 === e1) return !0;
    if ("string" == typeof e1) {
        let t = e1.trim().toLowerCase();
        return "true" === t || "1" === t || "yes" === t;
    }
    return !1;
}
function m(e1) {
    let t = Array.isArray(e1) ? e1[0] : e1;
    return "string" == typeof t ? t.trim() : "";
}
function h(e1, t) {
    for (let r1 of t){
        let t = e1?.[r1], n = m(t);
        if (n) return n;
        if (null != t && "object" != typeof t && String(t).trim()) return String(t).trim();
    }
}
function g(e1, t) {
    for (let r1 of e1){
        if (!r1) continue;
        let e1 = h(r1, t), n = m(e1);
        if (n) return n;
    }
    return "";
}
function b(e1, t) {
    let r1 = m(t);
    !r1 || e1.includes(r1) || e1.push(r1);
}
function y(e1) {
    let t = m(e1);
    if (!t || /\s/.test(t)) return "";
    let r1 = /^[a-z][a-z0-9+.-]*:\/\//i.test(t), n = r1 ? t : `https://${t}`;
    try {
        let e1 = new URL(n);
        if ("http:" !== e1.protocol && "https:" !== e1.protocol || !e1.hostname.includes(".")) return "";
        return n;
    } catch  {
        return "";
    }
}
function v(e1, t) {
    b(e1, y(t));
}
function w(e1, t) {
    let r1 = e1?.regular ?? {}, n = e1?.profileData ?? {}, o = e1?.profile_data ?? {}, i = t?.personalInfo ?? {}, a = [
        i,
        t,
        n,
        o,
        r1
    ], l = [];
    return v(l, g(a, [
        "linkedin_link",
        "linkedin_url",
        "linkedinUrl",
        "linkedin",
        "LinkedIn URL",
        "LinkedIn"
    ])), v(l, g(a, [
        "github_link",
        "github_url",
        "githubUrl",
        "github",
        "GitHub URL",
        "Github URL",
        "GitHub",
        "Github"
    ])), v(l, g(a, [
        "personal_site_link",
        "personal_site",
        "personalSite",
        "websiteUrl",
        "website_url",
        "website",
        "portfolioUrl",
        "portfolio_url",
        "Portfolio URL",
        "Website URL",
        "Personal Website",
        "Website"
    ])), l;
}
function S(e1, t) {
    e1.regular || (e1.regular = {});
    let r1 = w(e1, t);
    return r1.forEach((t, r1)=>{
        e1.regular[`Link ${r1 + 1}`] = t;
    }), r1;
}
_c = S;
function E(e1, t, r1) {
    if (m(e1[t])) return;
    let n = h(e1, r1);
    void 0 !== n && (e1[t] = n);
}
_c1 = E;
function x(e1) {
    let t = m(e1);
    if (!t) return;
    let r1 = t.match(/\b(?:associate|bachelor|master|doctor(?:ate)?|ph\.?\s*d\.?|juris\s+doctor|j\.?\s*d\.?)\b[\s\S]*?\bin\s+(.+)$/i), n = r1?.[1]?.replace(/\s*\([^)]*\)\s*$/g, "").replace(/\s+/g, " ").trim();
    return n || void 0;
}
function C(e1) {
    return m(e1).replace(/[\u2010-\u2015]/g, "-").replace(/\s+/g, " ").replace(/\s*,\s*/g, ", ").trim().toLowerCase();
}
_c2 = C;
function A(e1) {
    return m(e1).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}
_c3 = A;
function k(e1) {
    let t = A(e1);
    return "address1" === t || "addressline1" === t;
}
function T(e1) {
    return "country" === A(e1);
}
_c4 = T;
function F(e1) {
    return [
        "countrycodesdropdownphonenumber",
        "phonecountrycode",
        "countryphonecode"
    ].includes(A(e1));
}
_c5 = F;
function I(e1) {
    let t = m(e1).match(/^link\s+(\d+)$/i);
    if (!t) return null;
    let r1 = Number(t[1]);
    return Number.isInteger(r1) && r1 > 0 ? r1 : null;
}
_c6 = I;
function j(e1) {
    return null !== I(e1.label);
}
function D(e1) {
    let t = C(e1), r1 = t.split(",").map((e1)=>e1.trim()).filter(Boolean).length;
    if (r1 >= 3) return !0;
    let n = t.split(/[^a-z0-9]+/).filter(Boolean), o = n.some((e1)=>!!et(e1)), i = n.some((e1)=>/^\d{5}(?:\d{4})?$/.test(e1));
    return o && i;
}
_c7 = D;
function P(e1) {
    return [
        "canada",
        "united states",
        "united states of america",
        "us",
        "usa",
        "u.s.",
        "u.s.a."
    ].includes(e1);
}
_c8 = P;
let _ = new Map([
    [
        "aly",
        "alley"
    ],
    [
        "ave",
        "avenue"
    ],
    [
        "av",
        "avenue"
    ],
    [
        "blvd",
        "boulevard"
    ],
    [
        "cir",
        "circle"
    ],
    [
        "ct",
        "court"
    ],
    [
        "dr",
        "drive"
    ],
    [
        "hwy",
        "highway"
    ],
    [
        "ln",
        "lane"
    ],
    [
        "pkwy",
        "parkway"
    ],
    [
        "pl",
        "place"
    ],
    [
        "rd",
        "road"
    ],
    [
        "sq",
        "square"
    ],
    [
        "st",
        "street"
    ],
    [
        "ter",
        "terrace"
    ]
]), L = new Set([
    "alley",
    "avenue",
    "boulevard",
    "circle",
    "court",
    "drive",
    "highway",
    "lane",
    "parkway",
    "place",
    "road",
    "square",
    "street",
    "terrace"
]), R = "I am Hispanic or Latino.", O = new Set([
    "canada",
    "us",
    "usa",
    "united",
    "states",
    "america"
]);
function M(e1, t) {
    let r1 = ep(e1), n = ep(t);
    if (!r1 || !n) return !1;
    let o = N(r1), i = N(n);
    return !!o && !!i && o === i;
}
_c9 = M;
function N(e1) {
    return m(e1).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\p{L}\p{N}]+/gu, " ").trim().replace(/\s+/g, " ").toLowerCase();
}
_c10 = N;
function $(e1) {
    return m(e1).match(/\+(\d{1,4})\b/)?.[1] ?? "";
}
function B(e1) {
    let t = C(e1).replace(/\+\d{1,4}\b/g, " ").replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g, " ");
    return [
        "us",
        "usa",
        "u s",
        "u s a",
        "united states of america"
    ].includes(t) ? "united states" : "ca" === t ? "canada" : t;
}
_c11 = B;
function q(e1) {
    if (!e1) return "";
    let t = (0, l.PHONE_COUNTRY_CODE_OPTIONS).find((t)=>t.value === `+${e1}`), r1 = t?.label.replace(t.value, "").split("/")[0].trim();
    return B(r1);
}
function U(e1, t) {
    let r1 = $(e1), n = B(e1), o = t.map((e1, t)=>({
            option: e1,
            index: t,
            dialCode: $(e1),
            country: B(e1)
        })).filter((e1)=>n ? e1.country === n && (!r1 || e1.dialCode === r1) : !!r1 && e1.dialCode === r1);
    if (0 === o.length) return -1;
    if (1 === o.length) return o[0].index;
    if (!n) {
        let e1 = q(r1);
        if (!e1) return -1;
        let t = o.filter((t)=>t.country === e1);
        return 1 === t.length ? t[0].index : -1;
    }
    let i = (0, s.findClosestStringId)(m(e1), o.map(({ option: e1 })=>e1));
    return o[i]?.index ?? o[0].index;
}
_c12 = U;
function H(e1) {
    let t = e1.$input;
    return A(t?.getAttribute?.("name"));
}
_c13 = H;
function Y(e1) {
    let t = d.get(H(e1));
    if (void 0 !== t) return t;
    let r1 = d.get(A(e1.label));
    return r1 ?? null;
}
_c14 = Y;
function z(e1) {
    let t = [], r1 = [];
    e1.forEach((e1, n)=>{
        let o = Y(e1);
        if (null === o) {
            r1.push(e1);
            return;
        }
        t.push({
            rule: e1,
            order: o,
            index: n
        });
    }), t.sort((e1, t)=>e1.order - t.order || e1.index - t.index);
    let n = r1.filter((e1)=>{
        let t = e1.$input;
        return "phonecountrycode" === A(e1.label) || F(t?.id || t?.getAttribute?.("id") || void 0);
    }), o = r1.filter((e1)=>!n.includes(e1));
    for (let e1 of n){
        let t = o.findLastIndex((e1)=>"phonenumber" === A(e1.label));
        o.splice(t + 1, 0, e1);
    }
    return [
        ...t.map(({ rule: e1 })=>e1),
        ...o
    ];
}
let V = new Set([
    "address2",
    "addressline2",
    "address3",
    "addressline3"
]);
function W(e1) {
    return V.has(H(e1)) || V.has(A(e1.label));
}
_c15 = W;
function G(e1) {
    return W(e1);
}
_c16 = G;
let K = new Set([
    "city",
    "townorcity",
    "state",
    "stateprovince",
    "province",
    "region2",
    "postalcode",
    "zipcode",
    "zip",
    "county",
    "region1"
]), X = new Set([
    "postalcode",
    "zipcode",
    "zip"
]), J = new Set([
    "city",
    "townorcity"
]);
function Q(e1) {
    return X.has(H(e1)) || X.has(A(e1.label));
}
_c17 = Q;
function Z(e1) {
    return J.has(H(e1)) || J.has(A(e1.label));
}
_c18 = Z;
function ee(e1) {
    return K.has(H(e1)) || K.has(A(e1.label)) || W(e1);
}
function et(e1) {
    let t = e1.trim().toLowerCase(), r1 = e1.trim().toUpperCase();
    if (a.STATE_MAP[r1]) return r1;
    let n = Object.entries(a.STATE_MAP).find(([, e1])=>e1.toLowerCase() === t);
    return n?.[0] ?? "";
}
function er(e1) {
    let t = m(e1);
    if (!t.includes(",")) return {};
    let [r1, n] = t.split(",").map((e1)=>e1.trim());
    if (!r1 || !n) return {};
    let o = et(n);
    return o ? {
        city: r1,
        state: o
    } : {};
}
function en(e1, t) {
    let r1 = m(e1);
    if (!r1) return [];
    let n = [
        r1
    ];
    if (k(t)) {
        let e1 = r1.split(",")[0]?.trim();
        e1 && n.push(e1);
    }
    if ("city" === t) {
        let e1 = er(r1).city;
        e1 && n.push(e1);
    }
    if ("region2" === t) {
        let e1 = et(r1);
        e1 && n.push(e1, a.STATE_MAP[e1]);
    }
    if ("postalCode" === t) {
        let e1 = r1.match(/^\d{5}/)?.[0];
        e1 && n.push(e1);
    }
    return [
        ...new Set(n.map((e1)=>e1.trim()).filter(Boolean))
    ];
}
function eo(e1) {
    return !!e1 && (c.has(e1) || k(e1));
}
function ei(e1, t, r1) {
    let n = C(e1), o = C(t);
    if (!n || !o) return !1;
    if (n === o) return !0;
    if (T(r1)) return M(n, o);
    if ("city" === r1) return o.startsWith(`${n},`);
    if ("postalCode" === r1) return o.startsWith(n);
    if (k(r1)) {
        let e1 = n.split(",").map((e1)=>e1.trim()).filter(Boolean);
        if (e1.length >= 3) {
            let [t, ...r1] = e1, n = r1.filter((e1)=>!P(e1));
            return (o.startsWith(`${t},`) || o.startsWith(`${t} `)) && n.every((e1)=>o.includes(e1));
        }
        return o.startsWith(`${n},`) || o.startsWith(`${n} `);
    }
    return !1;
}
function ea(e1) {
    let t = e1.toLowerCase(), r1 = et(t);
    return r1 ? (0, a.STATE_MAP)[r1].toLowerCase() : _.get(t) ?? t;
}
function el(e1) {
    return m(e1).replace(/\bu\.?\s*s\.?\s*a\.?\b/gi, " usa ").replace(/\bu\.?\s*s\.?\b/gi, " us ").split(/[^a-zA-Z0-9]+/).map((e1)=>e1.trim()).filter(Boolean).map(ea).filter((e1)=>!O.has(e1));
}
function es(e1, t) {
    let r1 = new Map;
    for (let e1 of t)r1.set(e1, (r1.get(e1) ?? 0) + 1);
    let n = 0;
    for (let t of e1){
        let e1 = r1.get(t) ?? 0;
        0 !== e1 && (n += 1, r1.set(t, e1 - 1));
    }
    return n;
}
function eu(e1) {
    return e1.find((e1)=>/^\d+[a-z]?$/.test(e1)) ?? "";
}
function ec(e1, t) {
    let r1 = el(e1);
    if (r1.length < 3) return -1;
    let n = eu(r1);
    if (!n) return -1;
    let o = r1.filter((e1)=>L.has(e1)), i = r1.length <= 3 ? 1 : .75, a = -1, l = 0, s = 0;
    for(let e1 = 0; e1 < t.length; e1++){
        let i = el(t[e1]);
        if (!i.includes(n) || o.length > 0 && !o.some((e1)=>i.includes(e1))) continue;
        let u = es(r1, i);
        if (u < Math.min(3, r1.length)) continue;
        let c = u / r1.length;
        (c > l || c === l && u > s) && (a = e1, l = c, s = u);
    }
    return l >= i ? a : -1;
}
function ed(e1, t, r1) {
    let n = t.map(m);
    if (!n.length) return -1;
    if (F(r1)) return U(e1, n);
    if ("major" === A(r1)) {
        let t = C(e1);
        return t ? n.findIndex((e1)=>C(e1) === t) : -1;
    }
    if (T(r1)) {
        let t = ep(e1);
        if (!t) return -1;
        let r1 = n.map((e1, t)=>({
                option: e1,
                index: t
            })).filter(({ option: e1 })=>M(t, e1));
        return 1 === r1.length ? r1[0].index : -1;
    }
    if (!eo(r1)) return (0, s.findClosestStringId)(m(e1), n);
    if (k(r1) && 1 === n.length && n[0] && D(e1)) return 0;
    if (k(r1) && n.length > 1 && !D(e1)) return -1;
    let o = en(e1, r1);
    for (let e1 of o){
        let t = n.findIndex((t)=>ei(e1, t, r1));
        if (t >= 0) return t;
    }
    if (k(r1)) {
        let t = ec(e1, n);
        if (t >= 0) return t;
    }
    return -1;
}
function ef(e1, t) {
    let r1 = e1.$input, n = F(e1.label) ? e1.label : r1?.getAttribute?.("name") || r1?.id || r1?.getAttribute?.("id") || e1.label;
    if (!F(n)) return !0;
    let o = Array.isArray(e1.options) ? e1.options : [];
    return o.length > 0 && ed(t, o, n) >= 0;
}
function ep(e1) {
    let t = m(e1);
    if (!t) return null;
    let r1 = N(t);
    return [
        "canada",
        "ca"
    ].includes(r1) ? "Canada" : [
        "united states",
        "united states of america",
        "us",
        "usa",
        "u s",
        "u s a"
    ].includes(r1) ? "United States" : [
        "united kingdom",
        "great britain",
        "uk",
        "gb",
        "u k",
        "g b"
    ].includes(r1) ? "United Kingdom" : t;
}
function em(e1) {
    if (e1.label?.replace(/\*/g, "").trim().toLowerCase() !== "country") return !1;
    let t = e1.$input?.getAttribute?.("name"), r1 = e1.$input?.id || e1.$input?.getAttribute?.("id");
    return "country" === t || "country-12" === r1;
}
function eh(e1) {
    return e1.filter((e1)=>!em(e1));
}
function eg(e1, t) {
    return em(e1) && !!m(t);
}
function eb(e1) {
    return e1.find(em) ?? null;
}
function ey(e1) {
    let t = [
        "Earliest Available Date",
        "earliestAvailableDate",
        "earliest_available_date",
        "Available Date",
        "availableDate",
        "available_date",
        "Desired Start Date",
        "desiredStartDate",
        "desired_start_date",
        "Hiring Date",
        "hiringDate",
        "hiring_date",
        "Start Date",
        "startDate",
        "start_date"
    ];
    return h(e1.regular ?? {}, t) ?? h(e1.profileData ?? {}, t) ?? h(e1.profile_data ?? {}, t);
}
function ev(e1) {
    if (Array.isArray(e1)) return e1.some(ev);
    let t = m(e1).replace(/[./_-]+/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
    return !!t && ("yes" === t || "true" === t || "1" === t || t.includes("hispanic") || t.includes("latino"));
}
function ew(e1) {
    let t = [
        "Hispanic",
        "hispanic",
        "Hispanic or Latino",
        "hispanicOrLatino",
        "hispanic_or_latino"
    ], r1 = [
        "Ethnicity",
        "ethnicity",
        "race",
        "Race"
    ], n = h(e1.regular ?? {}, t) ?? h(e1.profileData ?? {}, t) ?? h(e1.profile_data ?? {}, t) ?? h(e1.regular ?? {}, r1) ?? h(e1.profileData ?? {}, r1) ?? h(e1.profile_data ?? {}, r1);
    return ev(n) ? [
        R
    ] : void 0;
}
function eS(e1, t) {
    let r1 = t?.location;
    if (!r1 || "object" != typeof r1) return [];
    e1.regular = e1.regular || {};
    let n = e1.regular, o = [
        {
            regularKey: "City",
            existingKeys: [
                "City",
                "city",
                "Town or City",
                "townOrCity"
            ],
            locationKeys: [
                "city"
            ]
        },
        {
            regularKey: "Postal Code",
            existingKeys: [
                "Postal Code",
                "Post Code",
                "postalCode",
                "postCode",
                "ZIP Code",
                "Zip Code",
                "zipCode",
                "zipcode",
                "zip"
            ],
            locationKeys: [
                "postCode",
                "postalCode",
                "postal_code",
                "zipCode",
                "zipcode",
                "zip"
            ]
        }
    ], i = [];
    for (let e1 of o){
        if (h(n, e1.existingKeys)) continue;
        let t = h(r1, e1.locationKeys);
        m(t) && (n[e1.regularKey] = t, i.push(e1.regularKey));
    }
    return i;
}
function eE(e1) {
    if (e1.regular || (e1.regular = {}), !m(e1.regular["Earliest Available Date"])) {
        let t = ey(e1);
        void 0 !== t && (e1.regular["Earliest Available Date"] = t);
    }
    if (!m(e1.regular.Ethnicity)) {
        let t = ew(e1);
        t && (e1.regular.Ethnicity = t);
    }
    if (e1.regular) {
        let t = er(e1.regular.City);
        t.city && (e1.regular.City = t.city), t.state && (e1.regular.State = t.state);
    }
    if (e1.workExperience && e1.workExperience.length > 0) for (let t of e1.workExperience){
        if (!t) continue;
        t["Employer Name"] || (t["Employer Name"] = t.Employer ?? t.Company ?? t["Company Name"] ?? t.Organization ?? t.organization), t["Job Title"] || (t["Job Title"] = t.Title ?? t["Your Last Position Title"] ?? t.Position ?? t.Role ?? t.job_title ?? t.jobTitle);
        let e1 = t.dates ?? t.Dates, r1 = p(t.isCurrent ?? t["Current Job"] ?? e1?.is_current ?? e1?.isCurrent);
        r1 && (t["Current Job"] = [
            "true"
        ]);
        let n = f(t.Start ?? t["Start Date"] ?? t.start_date ?? t.startDate ?? e1?.start_date ?? e1?.startDate);
        if (n && (t["Start Date"] = n), r1) delete t.End, delete t["End Date"];
        else {
            let r1 = f(t.End ?? t["End Date"] ?? t.completion_date ?? t.completionDate ?? e1?.completion_date ?? e1?.completionDate);
            r1 && (t["End Date"] = r1);
        }
    }
    if (e1.education && e1.education.length > 0) for (let t of e1.education){
        if (!t) continue;
        let e1 = t.dates ?? t.Dates;
        if (E(t, "School", [
            "School",
            "School Name",
            "School or University",
            "University",
            "University Name",
            "Institution",
            "College",
            "organization"
        ]), E(t, "School or University", [
            "School",
            "School Name",
            "University",
            "University Name",
            "Institution",
            "College",
            "organization"
        ]), E(t, "Degree", [
            "Degree",
            "Degree Type",
            "Education Level",
            "Highest Degree",
            "Accreditation",
            "accreditation"
        ]), E(t, "Major", [
            "Major",
            "Major or Area of Concentration",
            "Field of Study",
            "Study",
            "Discipline",
            "rawMajor"
        ]), !m(t.Major)) {
            let e1 = x(h(t, [
                "accreditation",
                "Accreditation",
                "Degree",
                "Degree Type"
            ]));
            e1 && (t.Major = e1);
        }
        if (E(t, "GPA", [
            "GPA",
            "gpa"
        ]), m(t.GPA) && (t.GPA = (0, u.normalizeGpaValue)(t.GPA)), t?.Start && (t.From = t.Start), t?.End && (t.To = t.End), t?.School && (t["School or University"] = t.School), t?.Study && (t["Field of Study"] = t.Study), t.From || (t.From = t["Start Date"] ?? t.start_date ?? t.startDate ?? e1?.start_date ?? e1?.startDate), t.To || (t.To = t["End Date"] ?? t.completion_date ?? t.completionDate ?? e1?.completion_date ?? e1?.completionDate), !m(t["Start Date"])) {
            let r1 = h(t, [
                "From",
                "Start",
                "start_date",
                "startDate"
            ]), n = f(r1 ?? e1?.start_date ?? e1?.startDate);
            n && (t["Start Date"] = n);
        }
        if (!m(t["End Date"])) {
            let r1 = h(t, [
                "To",
                "End",
                "completion_date",
                "completionDate"
            ]), n = f(r1 ?? e1?.completion_date ?? e1?.completionDate);
            n && (t["End Date"] = n);
        }
    }
    return e1;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");
$RefreshReg$(_c5, "F");
$RefreshReg$(_c6, "I");
$RefreshReg$(_c7, "D");
$RefreshReg$(_c8, "P");
$RefreshReg$(_c9, "M");
$RefreshReg$(_c10, "N");
$RefreshReg$(_c11, "B");
$RefreshReg$(_c12, "U");
$RefreshReg$(_c13, "H");
$RefreshReg$(_c14, "Y");
$RefreshReg$(_c15, "W");
$RefreshReg$(_c16, "G");
$RefreshReg$(_c17, "Q");
$RefreshReg$(_c18, "Z");

},{}]},["3YZaT","dOo4n"], "dOo4n", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUFHLEVBQUUsTUFBSyxHQUFJLEdBQUcsU0FBVSxDQUFBLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLEtBQUksR0FBSSxFQUNuRixRQUFTLENBQUEsRUFBRSxPQUFPLENBQUMsQ0FBQyxhQUFhLElBQUksRUFBRSxjQUFjLEVBQUUsYUFBYSxJQUFHLGNBQWMsSUFDbEYsU0FBUSxHQUFJLEVBQUUsTUFBTyxDQUFBLEVBQUUsS0FBSyxDQUFDLENBQUMsV0FBVyxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLElBQ3RGLG1CQUFtQixJQUFHLGNBQWEsR0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsR0FBRztZQUNoRSxJQUFJLEtBQUksRUFBRSxHQUFHO2dCQUFDO2dCQUFRO2dCQUFTO2dCQUFjO2FBQVksR0FDdkQsSUFBSSxFQUFFLE1BQUssSUFBRyxjQUFjLElBQUc7WUFDakMsS0FBTSxDQUFBLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQTtRQUMxQjtRQUNBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUc7WUFDckIsSUFBSSxLQUFJLEVBQUUsR0FBRztnQkFBQztnQkFBTTtnQkFBTztnQkFBbUI7YUFBaUIsR0FDN0QsSUFBSSxFQUFFLE1BQUssSUFBRyxtQkFBbUIsSUFBRztZQUN0QyxLQUFNLENBQUEsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFBO1FBQ3hCO0lBQ0Y7SUFDRixPQUFPO0FBQ1QiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLWY3NWRiMjc3NmNlMTcwYzYuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvYW5zd2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXG9yYWNsZWNsb3VkXFxcXGFuc3dlci5qc1wiLFwiYnVuZGxlSWRcIjpcIjdhNjI0NDgwZGJmYWRiYzlcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA5S2k0ZFxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvYW5zd2VyLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICBkYXlqcyAtPiBmbmhYcCAgPT4gIF90aWxkZV9ub2RlX21vZHVsZXMvZGF5anMuanNcclxuICogICB+Y29uc3RhbnRzIC0+IDZWRWpSICA9PiAgc3JjL2NvbnN0YW50cy5qc1xyXG4gKiAgIH5jb25zdGFudHMvcGhvbmUtY291bnRyeS1jb2RlIC0+IDNpTTdQICA9PiAgc3JjL2NvbnN0YW50cy9waG9uZS1jb3VudHJ5LWNvZGUuanNcclxuICogICB+Y29yZS91dGlscyAtPiBhVERoNSAgPT4gIHNyYy9jb3JlL3V0aWxzLmpzXHJcbiAqICAgfnV0aWxzL2dwYSAtPiBsNFQ3aiAgPT4gIHNyYy91dGlscy9ncGEuanNcclxuICovXHJcblxyXG52YXIgbiA9IGUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO1xyXG5uLmRlZmluZUludGVyb3BGbGFnKHIpLCBuLmV4cG9ydChyLCBcIm5vcm1hbGl6ZU9yYWNsZVByb2ZpbGVMaW5rVXJsXCIsICgpID0+IHkpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJnZXRPcmFjbGVQcm9maWxlTGlua1ZhbHVlc1wiLCAoKSA9PiB3KSwgbi5leHBvcnQociwgXCJhcHBseU9yYWNsZVByb2ZpbGVMaW5rQW5zd2Vyc1wiLCAoKSA9PiBTKSwgblxyXG4gIC5leHBvcnQociwgXCJpc09yYWNsZVBob25lQ291bnRyeUNvZGVGaWVsZFwiLCAoKSA9PiBGKSwgbi5leHBvcnQociwgXCJnZXRPcmFjbGVMaW5rUnVsZUluZGV4XCIsICgpID0+XHJcbiAgICBJKSwgbi5leHBvcnQociwgXCJpc09yYWNsZUxpbmtSdWxlXCIsICgpID0+IGopLCBuLmV4cG9ydChyLCBcIm9yZGVyT3JhY2xlUmVndWxhclJ1bGVzXCIsICgpID0+IHopLCBuXHJcbiAgLmV4cG9ydChyLCBcInNob3VsZFNraXBPcmFjbGVBZGRyZXNzRGVwZW5kZW50RmlsbFwiLCAoKSA9PiBHKSwgbi5leHBvcnQocixcclxuICAgIFwiaXNPcmFjbGVQb3N0YWxDb2RlRGVwZW5kZW50UnVsZVwiLCAoKSA9PiBRKSwgbi5leHBvcnQociwgXCJpc09yYWNsZUNpdHlEZXBlbmRlbnRSdWxlXCIsICgpID0+IFopLFxyXG4gIG4uZXhwb3J0KHIsIFwiaXNPcmFjbGVBZGRyZXNzRGVwZW5kZW50UnVsZVwiLCAoKSA9PiBlZSksIG4uZXhwb3J0KHIsIFwiaXNPcmFjbGVBZGRyZXNzU2VsZWN0RmllbGRcIixcclxuICAoKSA9PiBlbyksIG4uZXhwb3J0KHIsIFwiZmluZE9yYWNsZVNlbGVjdE9wdGlvbkluZGV4XCIsICgpID0+IGVkKSwgbi5leHBvcnQocixcclxuICAgIFwiY2FuRmlsbE9yYWNsZVNlbGVjdFJ1bGVcIiwgKCkgPT4gZWYpLCBuLmV4cG9ydChyLCBcInJlc29sdmVPcmFjbGVDb3VudHJ5VmFsdWVcIiwgKCkgPT4gZXApLCBuXHJcbiAgLmV4cG9ydChyLCBcImlzT3JhY2xlUHJvZmlsZUNvdW50cnlSdWxlXCIsICgpID0+IGVtKSwgbi5leHBvcnQocixcclxuICAgIFwiZXhjbHVkZU9yYWNsZVByb2ZpbGVDb3VudHJ5UnVsZXNcIiwgKCkgPT4gZWgpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJzaG91bGRTa2lwT3JhY2xlUHJlZmlsbGVkQ291bnRyeUZpbGxcIiwgKCkgPT4gZWcpLCBuLmV4cG9ydChyLCBcImdldE9yYWNsZVByb2ZpbGVDb3VudHJ5UnVsZVwiLFxyXG4gICgpID0+IGViKSwgbi5leHBvcnQociwgXCJhcHBseU9yYWNsZUF1dG9maWxsTG9jYXRpb25GYWxsYmFja3NcIiwgKCkgPT4gZVMpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJmb3JtYXRBbnN3ZXJcIiwgKCkgPT4gZUUpO1xyXG52YXIgbyA9IGUoXCJkYXlqc1wiKSxcclxuICBpID0gbi5pbnRlcm9wRGVmYXVsdChvKSxcclxuICBhID0gZShcIn5jb25zdGFudHNcIiksXHJcbiAgbCA9IGUoXCJ+Y29uc3RhbnRzL3Bob25lLWNvdW50cnktY29kZVwiKSxcclxuICBzID0gZShcIn5jb3JlL3V0aWxzXCIpLFxyXG4gIHUgPSBlKFwifnV0aWxzL2dwYVwiKTtcclxubGV0IGMgPSBuZXcgU2V0KFtcImNvdW50cnlcIiwgXCJhZGRyZXNzMVwiLCBcImFkZHJlc3NMaW5lMVwiLCBcImNpdHlcIiwgXCJyZWdpb24yXCIsIFwicG9zdGFsQ29kZVwiLFxyXG4gIFwicmVnaW9uMVwiXSksXHJcbiAgZCA9IG5ldyBNYXAoW1xyXG4gICAgW1wiY291bnRyeVwiLCAwXSxcclxuICAgIFtcImFkZHJlc3MxXCIsIDFdLFxyXG4gICAgW1wiYWRkcmVzc2xpbmUxXCIsIDFdLFxyXG4gICAgW1wiYWRkcmVzczJcIiwgMl0sXHJcbiAgICBbXCJhZGRyZXNzbGluZTJcIiwgMl0sXHJcbiAgICBbXCJhZGRyZXNzM1wiLCAzXSxcclxuICAgIFtcImFkZHJlc3NsaW5lM1wiLCAzXSxcclxuICAgIFtcInN0YXRlXCIsIDRdLFxyXG4gICAgW1wicmVnaW9uMlwiLCA0XSxcclxuICAgIFtcImNpdHlcIiwgNV0sXHJcbiAgICBbXCJwb3N0YWxjb2RlXCIsIDZdLFxyXG4gICAgW1wiemlwY29kZVwiLCA2XSxcclxuICAgIFtcInppcFwiLCA2XSxcclxuICAgIFtcImNvdW50eVwiLCA3XSxcclxuICAgIFtcInJlZ2lvbjFcIiwgN11cclxuICBdKTtcclxuXHJcbmZ1bmN0aW9uIGYoZSkge1xyXG4gIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBlKSByZXR1cm47XHJcbiAgbGV0IHQgPSBlLnRyaW0oKTtcclxuICBpZiAoIXQpIHJldHVybjtcclxuICBpZiAoL15cXGR7NH0tXFxkezJ9JC8udGVzdCh0KSkgcmV0dXJuIHQ7XHJcbiAgaWYgKC9eXFxkezR9LVxcZHsyfS1cXGR7Mn0kLy50ZXN0KHQpKSByZXR1cm4gdC5zbGljZSgwLCA3KTtcclxuICBsZXQgciA9ICgwLCBpLmRlZmF1bHQpKHQpO1xyXG4gIHJldHVybiByLmlzVmFsaWQoKSA/IHIuZm9ybWF0KFwiWVlZWS1NTVwiKSA6IHRcclxufVxyXG5cclxuZnVuY3Rpb24gcChlKSB7XHJcbiAgaWYgKCEwID09PSBlIHx8IDEgPT09IGUpIHJldHVybiAhMDtcclxuICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkge1xyXG4gICAgbGV0IHQgPSBlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIFwidHJ1ZVwiID09PSB0IHx8IFwiMVwiID09PSB0IHx8IFwieWVzXCIgPT09IHRcclxuICB9XHJcbiAgcmV0dXJuICExXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG0oZSkge1xyXG4gIGxldCB0ID0gQXJyYXkuaXNBcnJheShlKSA/IGVbMF0gOiBlO1xyXG4gIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiB0ID8gdC50cmltKCkgOiBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGgoZSwgdCkge1xyXG4gIGZvciAobGV0IHIgb2YgdCkge1xyXG4gICAgbGV0IHQgPSBlPy5bcl0sXHJcbiAgICAgIG4gPSBtKHQpO1xyXG4gICAgaWYgKG4pIHJldHVybiBuO1xyXG4gICAgaWYgKG51bGwgIT0gdCAmJiBcIm9iamVjdFwiICE9IHR5cGVvZiB0ICYmIFN0cmluZyh0KS50cmltKCkpIHJldHVybiBTdHJpbmcodCkudHJpbSgpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnKGUsIHQpIHtcclxuICBmb3IgKGxldCByIG9mIGUpIHtcclxuICAgIGlmICghcikgY29udGludWU7XHJcbiAgICBsZXQgZSA9IGgociwgdCksXHJcbiAgICAgIG4gPSBtKGUpO1xyXG4gICAgaWYgKG4pIHJldHVybiBuXHJcbiAgfVxyXG4gIHJldHVybiBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGIoZSwgdCkge1xyXG4gIGxldCByID0gbSh0KTtcclxuICAhciB8fCBlLmluY2x1ZGVzKHIpIHx8IGUucHVzaChyKVxyXG59XHJcblxyXG5mdW5jdGlvbiB5KGUpIHtcclxuICBsZXQgdCA9IG0oZSk7XHJcbiAgaWYgKCF0IHx8IC9cXHMvLnRlc3QodCkpIHJldHVybiBcIlwiO1xyXG4gIGxldCByID0gL15bYS16XVthLXowLTkrLi1dKjpcXC9cXC8vaS50ZXN0KHQpLFxyXG4gICAgbiA9IHIgPyB0IDogYGh0dHBzOi8vJHt0fWA7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBlID0gbmV3IFVSTChuKTtcclxuICAgIGlmIChcImh0dHA6XCIgIT09IGUucHJvdG9jb2wgJiYgXCJodHRwczpcIiAhPT0gZS5wcm90b2NvbCB8fCAhZS5ob3N0bmFtZS5pbmNsdWRlcyhcIi5cIikpIHJldHVybiBcIlwiO1xyXG4gICAgcmV0dXJuIG5cclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBcIlwiXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2KGUsIHQpIHtcclxuICBiKGUsIHkodCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHcoZSwgdCkge1xyXG4gIGxldCByID0gZT8ucmVndWxhciA/PyB7fSxcclxuICAgIG4gPSBlPy5wcm9maWxlRGF0YSA/PyB7fSxcclxuICAgIG8gPSBlPy5wcm9maWxlX2RhdGEgPz8ge30sXHJcbiAgICBpID0gdD8ucGVyc29uYWxJbmZvID8/IHt9LFxyXG4gICAgYSA9IFtpLCB0LCBuLCBvLCByXSxcclxuICAgIGwgPSBbXTtcclxuICByZXR1cm4gdihsLCBnKGEsIFtcImxpbmtlZGluX2xpbmtcIiwgXCJsaW5rZWRpbl91cmxcIiwgXCJsaW5rZWRpblVybFwiLCBcImxpbmtlZGluXCIsIFwiTGlua2VkSW4gVVJMXCIsXHJcbiAgICBcIkxpbmtlZEluXCJcclxuICBdKSksIHYobCwgZyhhLCBbXCJnaXRodWJfbGlua1wiLCBcImdpdGh1Yl91cmxcIiwgXCJnaXRodWJVcmxcIiwgXCJnaXRodWJcIiwgXCJHaXRIdWIgVVJMXCIsIFwiR2l0aHViIFVSTFwiLFxyXG4gICAgXCJHaXRIdWJcIiwgXCJHaXRodWJcIlxyXG4gIF0pKSwgdihsLCBnKGEsIFtcInBlcnNvbmFsX3NpdGVfbGlua1wiLCBcInBlcnNvbmFsX3NpdGVcIiwgXCJwZXJzb25hbFNpdGVcIiwgXCJ3ZWJzaXRlVXJsXCIsXHJcbiAgICBcIndlYnNpdGVfdXJsXCIsIFwid2Vic2l0ZVwiLCBcInBvcnRmb2xpb1VybFwiLCBcInBvcnRmb2xpb191cmxcIiwgXCJQb3J0Zm9saW8gVVJMXCIsIFwiV2Vic2l0ZSBVUkxcIixcclxuICAgIFwiUGVyc29uYWwgV2Vic2l0ZVwiLCBcIldlYnNpdGVcIlxyXG4gIF0pKSwgbFxyXG59XHJcblxyXG5mdW5jdGlvbiBTKGUsIHQpIHtcclxuICBlLnJlZ3VsYXIgfHwgKGUucmVndWxhciA9IHt9KTtcclxuICBsZXQgciA9IHcoZSwgdCk7XHJcbiAgcmV0dXJuIHIuZm9yRWFjaCgodCwgcikgPT4ge1xyXG4gICAgZS5yZWd1bGFyW2BMaW5rICR7cisxfWBdID0gdFxyXG4gIH0pLCByXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEUoZSwgdCwgcikge1xyXG4gIGlmIChtKGVbdF0pKSByZXR1cm47XHJcbiAgbGV0IG4gPSBoKGUsIHIpO1xyXG4gIHZvaWQgMCAhPT0gbiAmJiAoZVt0XSA9IG4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHgoZSkge1xyXG4gIGxldCB0ID0gbShlKTtcclxuICBpZiAoIXQpIHJldHVybjtcclxuICBsZXQgciA9IHQubWF0Y2goXHJcbiAgICAgIC9cXGIoPzphc3NvY2lhdGV8YmFjaGVsb3J8bWFzdGVyfGRvY3Rvcig/OmF0ZSk/fHBoXFwuP1xccypkXFwuP3xqdXJpc1xccytkb2N0b3J8alxcLj9cXHMqZFxcLj8pXFxiW1xcc1xcU10qP1xcYmluXFxzKyguKykkL2lcclxuICAgICAgKSxcclxuICAgIG4gPSByPy5bMV0/LnJlcGxhY2UoL1xccypcXChbXildKlxcKVxccyokL2csIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKTtcclxuICByZXR1cm4gbiB8fCB2b2lkIDBcclxufVxyXG5cclxuZnVuY3Rpb24gQyhlKSB7XHJcbiAgcmV0dXJuIG0oZSkucmVwbGFjZSgvW1xcdTIwMTAtXFx1MjAxNV0vZywgXCItXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnJlcGxhY2UoL1xccyosXFxzKi9nLCBcIiwgXCIpLnRyaW0oKVxyXG4gICAgLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuZnVuY3Rpb24gQShlKSB7XHJcbiAgcmV0dXJuIG0oZSkucmVwbGFjZSgvW15hLXpBLVowLTldL2csIFwiXCIpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuZnVuY3Rpb24gayhlKSB7XHJcbiAgbGV0IHQgPSBBKGUpO1xyXG4gIHJldHVybiBcImFkZHJlc3MxXCIgPT09IHQgfHwgXCJhZGRyZXNzbGluZTFcIiA9PT0gdFxyXG59XHJcblxyXG5mdW5jdGlvbiBUKGUpIHtcclxuICByZXR1cm4gXCJjb3VudHJ5XCIgPT09IEEoZSlcclxufVxyXG5cclxuZnVuY3Rpb24gRihlKSB7XHJcbiAgcmV0dXJuIFtcImNvdW50cnljb2Rlc2Ryb3Bkb3ducGhvbmVudW1iZXJcIiwgXCJwaG9uZWNvdW50cnljb2RlXCIsIFwiY291bnRyeXBob25lY29kZVwiXS5pbmNsdWRlcyhBKGUpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBJKGUpIHtcclxuICBsZXQgdCA9IG0oZSkubWF0Y2goL15saW5rXFxzKyhcXGQrKSQvaSk7XHJcbiAgaWYgKCF0KSByZXR1cm4gbnVsbDtcclxuICBsZXQgciA9IE51bWJlcih0WzFdKTtcclxuICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcihyKSAmJiByID4gMCA/IHIgOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGooZSkge1xyXG4gIHJldHVybiBudWxsICE9PSBJKGUubGFiZWwpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEQoZSkge1xyXG4gIGxldCB0ID0gQyhlKSxcclxuICAgIHIgPSB0LnNwbGl0KFwiLFwiKS5tYXAoZSA9PiBlLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pLmxlbmd0aDtcclxuICBpZiAociA+PSAzKSByZXR1cm4gITA7XHJcbiAgbGV0IG4gPSB0LnNwbGl0KC9bXmEtejAtOV0rLykuZmlsdGVyKEJvb2xlYW4pLFxyXG4gICAgbyA9IG4uc29tZShlID0+ICEhZXQoZSkpLFxyXG4gICAgaSA9IG4uc29tZShlID0+IC9eXFxkezV9KD86XFxkezR9KT8kLy50ZXN0KGUpKTtcclxuICByZXR1cm4gbyAmJiBpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFAoZSkge1xyXG4gIHJldHVybiBbXCJjYW5hZGFcIiwgXCJ1bml0ZWQgc3RhdGVzXCIsIFwidW5pdGVkIHN0YXRlcyBvZiBhbWVyaWNhXCIsIFwidXNcIiwgXCJ1c2FcIiwgXCJ1LnMuXCIsIFwidS5zLmEuXCJdXHJcbiAgICAuaW5jbHVkZXMoZSlcclxufVxyXG5sZXQgXyA9IG5ldyBNYXAoW1xyXG4gICAgW1wiYWx5XCIsIFwiYWxsZXlcIl0sXHJcbiAgICBbXCJhdmVcIiwgXCJhdmVudWVcIl0sXHJcbiAgICBbXCJhdlwiLCBcImF2ZW51ZVwiXSxcclxuICAgIFtcImJsdmRcIiwgXCJib3VsZXZhcmRcIl0sXHJcbiAgICBbXCJjaXJcIiwgXCJjaXJjbGVcIl0sXHJcbiAgICBbXCJjdFwiLCBcImNvdXJ0XCJdLFxyXG4gICAgW1wiZHJcIiwgXCJkcml2ZVwiXSxcclxuICAgIFtcImh3eVwiLCBcImhpZ2h3YXlcIl0sXHJcbiAgICBbXCJsblwiLCBcImxhbmVcIl0sXHJcbiAgICBbXCJwa3d5XCIsIFwicGFya3dheVwiXSxcclxuICAgIFtcInBsXCIsIFwicGxhY2VcIl0sXHJcbiAgICBbXCJyZFwiLCBcInJvYWRcIl0sXHJcbiAgICBbXCJzcVwiLCBcInNxdWFyZVwiXSxcclxuICAgIFtcInN0XCIsIFwic3RyZWV0XCJdLFxyXG4gICAgW1widGVyXCIsIFwidGVycmFjZVwiXVxyXG4gIF0pLFxyXG4gIEwgPSBuZXcgU2V0KFtcImFsbGV5XCIsIFwiYXZlbnVlXCIsIFwiYm91bGV2YXJkXCIsIFwiY2lyY2xlXCIsIFwiY291cnRcIiwgXCJkcml2ZVwiLCBcImhpZ2h3YXlcIiwgXCJsYW5lXCIsXHJcbiAgICBcInBhcmt3YXlcIiwgXCJwbGFjZVwiLCBcInJvYWRcIiwgXCJzcXVhcmVcIiwgXCJzdHJlZXRcIiwgXCJ0ZXJyYWNlXCJcclxuICBdKSxcclxuICBSID0gXCJJIGFtIEhpc3BhbmljIG9yIExhdGluby5cIixcclxuICBPID0gbmV3IFNldChbXCJjYW5hZGFcIiwgXCJ1c1wiLCBcInVzYVwiLCBcInVuaXRlZFwiLCBcInN0YXRlc1wiLCBcImFtZXJpY2FcIl0pO1xyXG5cclxuZnVuY3Rpb24gTShlLCB0KSB7XHJcbiAgbGV0IHIgPSBlcChlKSxcclxuICAgIG4gPSBlcCh0KTtcclxuICBpZiAoIXIgfHwgIW4pIHJldHVybiAhMTtcclxuICBsZXQgbyA9IE4ociksXHJcbiAgICBpID0gTihuKTtcclxuICByZXR1cm4gISFvICYmICEhaSAmJiBvID09PSBpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE4oZSkge1xyXG4gIHJldHVybiBtKGUpLm5vcm1hbGl6ZShcIk5GRFwiKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKS5yZXBsYWNlKC9bXlxccHtMfVxccHtOfV0rL2d1LCBcIiBcIilcclxuICAgIC50cmltKCkucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG5mdW5jdGlvbiAkKGUpIHtcclxuICByZXR1cm4gbShlKS5tYXRjaCgvXFwrKFxcZHsxLDR9KVxcYi8pPy5bMV0gPz8gXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBCKGUpIHtcclxuICBsZXQgdCA9IEMoZSkucmVwbGFjZSgvXFwrXFxkezEsNH1cXGIvZywgXCIgXCIpLnJlcGxhY2UoL1teYS16MC05XSsvZywgXCIgXCIpLnRyaW0oKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKTtcclxuICByZXR1cm4gW1widXNcIiwgXCJ1c2FcIiwgXCJ1IHNcIiwgXCJ1IHMgYVwiLCBcInVuaXRlZCBzdGF0ZXMgb2YgYW1lcmljYVwiXS5pbmNsdWRlcyh0KSA/IFwidW5pdGVkIHN0YXRlc1wiIDpcclxuICAgIFwiY2FcIiA9PT0gdCA/IFwiY2FuYWRhXCIgOiB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHEoZSkge1xyXG4gIGlmICghZSkgcmV0dXJuIFwiXCI7XHJcbiAgbGV0IHQgPSAoMCwgbC5QSE9ORV9DT1VOVFJZX0NPREVfT1BUSU9OUykuZmluZCh0ID0+IHQudmFsdWUgPT09IGArJHtlfWApLFxyXG4gICAgciA9IHQ/LmxhYmVsLnJlcGxhY2UodC52YWx1ZSwgXCJcIikuc3BsaXQoXCIvXCIpWzBdLnRyaW0oKTtcclxuICByZXR1cm4gQihyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBVKGUsIHQpIHtcclxuICBsZXQgciA9ICQoZSksXHJcbiAgICBuID0gQihlKSxcclxuICAgIG8gPSB0Lm1hcCgoZSwgdCkgPT4gKHtcclxuICAgICAgb3B0aW9uOiBlLFxyXG4gICAgICBpbmRleDogdCxcclxuICAgICAgZGlhbENvZGU6ICQoZSksXHJcbiAgICAgIGNvdW50cnk6IEIoZSlcclxuICAgIH0pKS5maWx0ZXIoZSA9PiBuID8gZS5jb3VudHJ5ID09PSBuICYmICghciB8fCBlLmRpYWxDb2RlID09PSByKSA6ICEhciAmJiBlLmRpYWxDb2RlID09PSByKTtcclxuICBpZiAoMCA9PT0gby5sZW5ndGgpIHJldHVybiAtMTtcclxuICBpZiAoMSA9PT0gby5sZW5ndGgpIHJldHVybiBvWzBdLmluZGV4O1xyXG4gIGlmICghbikge1xyXG4gICAgbGV0IGUgPSBxKHIpO1xyXG4gICAgaWYgKCFlKSByZXR1cm4gLTE7XHJcbiAgICBsZXQgdCA9IG8uZmlsdGVyKHQgPT4gdC5jb3VudHJ5ID09PSBlKTtcclxuICAgIHJldHVybiAxID09PSB0Lmxlbmd0aCA/IHRbMF0uaW5kZXggOiAtMVxyXG4gIH1cclxuICBsZXQgaSA9ICgwLCBzLmZpbmRDbG9zZXN0U3RyaW5nSWQpKG0oZSksIG8ubWFwKCh7XHJcbiAgICBvcHRpb246IGVcclxuICB9KSA9PiBlKSk7XHJcbiAgcmV0dXJuIG9baV0/LmluZGV4ID8/IG9bMF0uaW5kZXhcclxufVxyXG5cclxuZnVuY3Rpb24gSChlKSB7XHJcbiAgbGV0IHQgPSBlLiRpbnB1dDtcclxuICByZXR1cm4gQSh0Py5nZXRBdHRyaWJ1dGU/LihcIm5hbWVcIikpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFkoZSkge1xyXG4gIGxldCB0ID0gZC5nZXQoSChlKSk7XHJcbiAgaWYgKHZvaWQgMCAhPT0gdCkgcmV0dXJuIHQ7XHJcbiAgbGV0IHIgPSBkLmdldChBKGUubGFiZWwpKTtcclxuICByZXR1cm4gciA/PyBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHooZSkge1xyXG4gIGxldCB0ID0gW10sXHJcbiAgICByID0gW107XHJcbiAgZS5mb3JFYWNoKChlLCBuKSA9PiB7XHJcbiAgICBsZXQgbyA9IFkoZSk7XHJcbiAgICBpZiAobnVsbCA9PT0gbykge1xyXG4gICAgICByLnB1c2goZSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdC5wdXNoKHtcclxuICAgICAgcnVsZTogZSxcclxuICAgICAgb3JkZXI6IG8sXHJcbiAgICAgIGluZGV4OiBuXHJcbiAgICB9KVxyXG4gIH0pLCB0LnNvcnQoKGUsIHQpID0+IGUub3JkZXIgLSB0Lm9yZGVyIHx8IGUuaW5kZXggLSB0LmluZGV4KTtcclxuICBsZXQgbiA9IHIuZmlsdGVyKGUgPT4ge1xyXG4gICAgICBsZXQgdCA9IGUuJGlucHV0O1xyXG4gICAgICByZXR1cm4gXCJwaG9uZWNvdW50cnljb2RlXCIgPT09IEEoZS5sYWJlbCkgfHwgRih0Py5pZCB8fCB0Py5nZXRBdHRyaWJ1dGU/LihcImlkXCIpIHx8IHZvaWQgMClcclxuICAgIH0pLFxyXG4gICAgbyA9IHIuZmlsdGVyKGUgPT4gIW4uaW5jbHVkZXMoZSkpO1xyXG4gIGZvciAobGV0IGUgb2Ygbikge1xyXG4gICAgbGV0IHQgPSBvLmZpbmRMYXN0SW5kZXgoZSA9PiBcInBob25lbnVtYmVyXCIgPT09IEEoZS5sYWJlbCkpO1xyXG4gICAgby5zcGxpY2UodCArIDEsIDAsIGUpXHJcbiAgfVxyXG4gIHJldHVybiBbLi4udC5tYXAoKHtcclxuICAgIHJ1bGU6IGVcclxuICB9KSA9PiBlKSwgLi4ub11cclxufVxyXG5sZXQgViA9IG5ldyBTZXQoW1wiYWRkcmVzczJcIiwgXCJhZGRyZXNzbGluZTJcIiwgXCJhZGRyZXNzM1wiLCBcImFkZHJlc3NsaW5lM1wiXSk7XHJcblxyXG5mdW5jdGlvbiBXKGUpIHtcclxuICByZXR1cm4gVi5oYXMoSChlKSkgfHwgVi5oYXMoQShlLmxhYmVsKSlcclxufVxyXG5cclxuZnVuY3Rpb24gRyhlKSB7XHJcbiAgcmV0dXJuIFcoZSlcclxufVxyXG5sZXQgSyA9IG5ldyBTZXQoW1wiY2l0eVwiLCBcInRvd25vcmNpdHlcIiwgXCJzdGF0ZVwiLCBcInN0YXRlcHJvdmluY2VcIiwgXCJwcm92aW5jZVwiLCBcInJlZ2lvbjJcIixcclxuICAgIFwicG9zdGFsY29kZVwiLCBcInppcGNvZGVcIiwgXCJ6aXBcIiwgXCJjb3VudHlcIiwgXCJyZWdpb24xXCJcclxuICBdKSxcclxuICBYID0gbmV3IFNldChbXCJwb3N0YWxjb2RlXCIsIFwiemlwY29kZVwiLCBcInppcFwiXSksXHJcbiAgSiA9IG5ldyBTZXQoW1wiY2l0eVwiLCBcInRvd25vcmNpdHlcIl0pO1xyXG5cclxuZnVuY3Rpb24gUShlKSB7XHJcbiAgcmV0dXJuIFguaGFzKEgoZSkpIHx8IFguaGFzKEEoZS5sYWJlbCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFooZSkge1xyXG4gIHJldHVybiBKLmhhcyhIKGUpKSB8fCBKLmhhcyhBKGUubGFiZWwpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZShlKSB7XHJcbiAgcmV0dXJuIEsuaGFzKEgoZSkpIHx8IEsuaGFzKEEoZS5sYWJlbCkpIHx8IFcoZSlcclxufVxyXG5cclxuZnVuY3Rpb24gZXQoZSkge1xyXG4gIGxldCB0ID0gZS50cmltKCkudG9Mb3dlckNhc2UoKSxcclxuICAgIHIgPSBlLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xyXG4gIGlmIChhLlNUQVRFX01BUFtyXSkgcmV0dXJuIHI7XHJcbiAgbGV0IG4gPSBPYmplY3QuZW50cmllcyhhLlNUQVRFX01BUCkuZmluZCgoWywgZV0pID0+IGUudG9Mb3dlckNhc2UoKSA9PT0gdCk7XHJcbiAgcmV0dXJuIG4/LlswXSA/PyBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVyKGUpIHtcclxuICBsZXQgdCA9IG0oZSk7XHJcbiAgaWYgKCF0LmluY2x1ZGVzKFwiLFwiKSkgcmV0dXJuIHt9O1xyXG4gIGxldCBbciwgbl0gPSB0LnNwbGl0KFwiLFwiKS5tYXAoZSA9PiBlLnRyaW0oKSk7XHJcbiAgaWYgKCFyIHx8ICFuKSByZXR1cm4ge307XHJcbiAgbGV0IG8gPSBldChuKTtcclxuICByZXR1cm4gbyA/IHtcclxuICAgIGNpdHk6IHIsXHJcbiAgICBzdGF0ZTogb1xyXG4gIH0gOiB7fVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbihlLCB0KSB7XHJcbiAgbGV0IHIgPSBtKGUpO1xyXG4gIGlmICghcikgcmV0dXJuIFtdO1xyXG4gIGxldCBuID0gW3JdO1xyXG4gIGlmIChrKHQpKSB7XHJcbiAgICBsZXQgZSA9IHIuc3BsaXQoXCIsXCIpWzBdPy50cmltKCk7XHJcbiAgICBlICYmIG4ucHVzaChlKVxyXG4gIH1cclxuICBpZiAoXCJjaXR5XCIgPT09IHQpIHtcclxuICAgIGxldCBlID0gZXIocikuY2l0eTtcclxuICAgIGUgJiYgbi5wdXNoKGUpXHJcbiAgfVxyXG4gIGlmIChcInJlZ2lvbjJcIiA9PT0gdCkge1xyXG4gICAgbGV0IGUgPSBldChyKTtcclxuICAgIGUgJiYgbi5wdXNoKGUsIGEuU1RBVEVfTUFQW2VdKVxyXG4gIH1cclxuICBpZiAoXCJwb3N0YWxDb2RlXCIgPT09IHQpIHtcclxuICAgIGxldCBlID0gci5tYXRjaCgvXlxcZHs1fS8pPy5bMF07XHJcbiAgICBlICYmIG4ucHVzaChlKVxyXG4gIH1cclxuICByZXR1cm4gWy4uLm5ldyBTZXQobi5tYXAoZSA9PiBlLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pKV1cclxufVxyXG5cclxuZnVuY3Rpb24gZW8oZSkge1xyXG4gIHJldHVybiAhIWUgJiYgKGMuaGFzKGUpIHx8IGsoZSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVpKGUsIHQsIHIpIHtcclxuICBsZXQgbiA9IEMoZSksXHJcbiAgICBvID0gQyh0KTtcclxuICBpZiAoIW4gfHwgIW8pIHJldHVybiAhMTtcclxuICBpZiAobiA9PT0gbykgcmV0dXJuICEwO1xyXG4gIGlmIChUKHIpKSByZXR1cm4gTShuLCBvKTtcclxuICBpZiAoXCJjaXR5XCIgPT09IHIpIHJldHVybiBvLnN0YXJ0c1dpdGgoYCR7bn0sYCk7XHJcbiAgaWYgKFwicG9zdGFsQ29kZVwiID09PSByKSByZXR1cm4gby5zdGFydHNXaXRoKG4pO1xyXG4gIGlmIChrKHIpKSB7XHJcbiAgICBsZXQgZSA9IG4uc3BsaXQoXCIsXCIpLm1hcChlID0+IGUudHJpbSgpKS5maWx0ZXIoQm9vbGVhbik7XHJcbiAgICBpZiAoZS5sZW5ndGggPj0gMykge1xyXG4gICAgICBsZXQgW3QsIC4uLnJdID0gZSwgbiA9IHIuZmlsdGVyKGUgPT4gIVAoZSkpO1xyXG4gICAgICByZXR1cm4gKG8uc3RhcnRzV2l0aChgJHt0fSxgKSB8fCBvLnN0YXJ0c1dpdGgoYCR7dH0gYCkpICYmIG4uZXZlcnkoZSA9PiBvLmluY2x1ZGVzKGUpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG8uc3RhcnRzV2l0aChgJHtufSxgKSB8fCBvLnN0YXJ0c1dpdGgoYCR7bn0gYClcclxuICB9XHJcbiAgcmV0dXJuICExXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVhKGUpIHtcclxuICBsZXQgdCA9IGUudG9Mb3dlckNhc2UoKSxcclxuICAgIHIgPSBldCh0KTtcclxuICByZXR1cm4gciA/ICgwLCBhLlNUQVRFX01BUClbcl0udG9Mb3dlckNhc2UoKSA6IF8uZ2V0KHQpID8/IHRcclxufVxyXG5cclxuZnVuY3Rpb24gZWwoZSkge1xyXG4gIHJldHVybiBtKGUpLnJlcGxhY2UoL1xcYnVcXC4/XFxzKnNcXC4/XFxzKmFcXC4/XFxiL2dpLCBcIiB1c2EgXCIpLnJlcGxhY2UoL1xcYnVcXC4/XFxzKnNcXC4/XFxiL2dpLCBcIiB1cyBcIilcclxuICAgIC5zcGxpdCgvW15hLXpBLVowLTldKy8pLm1hcChlID0+IGUudHJpbSgpKS5maWx0ZXIoQm9vbGVhbikubWFwKGVhKS5maWx0ZXIoZSA9PiAhTy5oYXMoZSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVzKGUsIHQpIHtcclxuICBsZXQgciA9IG5ldyBNYXA7XHJcbiAgZm9yIChsZXQgZSBvZiB0KSByLnNldChlLCAoci5nZXQoZSkgPz8gMCkgKyAxKTtcclxuICBsZXQgbiA9IDA7XHJcbiAgZm9yIChsZXQgdCBvZiBlKSB7XHJcbiAgICBsZXQgZSA9IHIuZ2V0KHQpID8/IDA7XHJcbiAgICAwICE9PSBlICYmIChuICs9IDEsIHIuc2V0KHQsIGUgLSAxKSlcclxuICB9XHJcbiAgcmV0dXJuIG5cclxufVxyXG5cclxuZnVuY3Rpb24gZXUoZSkge1xyXG4gIHJldHVybiBlLmZpbmQoZSA9PiAvXlxcZCtbYS16XT8kLy50ZXN0KGUpKSA/PyBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVjKGUsIHQpIHtcclxuICBsZXQgciA9IGVsKGUpO1xyXG4gIGlmIChyLmxlbmd0aCA8IDMpIHJldHVybiAtMTtcclxuICBsZXQgbiA9IGV1KHIpO1xyXG4gIGlmICghbikgcmV0dXJuIC0xO1xyXG4gIGxldCBvID0gci5maWx0ZXIoZSA9PiBMLmhhcyhlKSksXHJcbiAgICBpID0gci5sZW5ndGggPD0gMyA/IDEgOiAuNzUsXHJcbiAgICBhID0gLTEsXHJcbiAgICBsID0gMCxcclxuICAgIHMgPSAwO1xyXG4gIGZvciAobGV0IGUgPSAwOyBlIDwgdC5sZW5ndGg7IGUrKykge1xyXG4gICAgbGV0IGkgPSBlbCh0W2VdKTtcclxuICAgIGlmICghaS5pbmNsdWRlcyhuKSB8fCBvLmxlbmd0aCA+IDAgJiYgIW8uc29tZShlID0+IGkuaW5jbHVkZXMoZSkpKSBjb250aW51ZTtcclxuICAgIGxldCB1ID0gZXMociwgaSk7XHJcbiAgICBpZiAodSA8IE1hdGgubWluKDMsIHIubGVuZ3RoKSkgY29udGludWU7XHJcbiAgICBsZXQgYyA9IHUgLyByLmxlbmd0aDtcclxuICAgIChjID4gbCB8fCBjID09PSBsICYmIHUgPiBzKSAmJiAoYSA9IGUsIGwgPSBjLCBzID0gdSlcclxuICB9XHJcbiAgcmV0dXJuIGwgPj0gaSA/IGEgOiAtMVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZChlLCB0LCByKSB7XHJcbiAgbGV0IG4gPSB0Lm1hcChtKTtcclxuICBpZiAoIW4ubGVuZ3RoKSByZXR1cm4gLTE7XHJcbiAgaWYgKEYocikpIHJldHVybiBVKGUsIG4pO1xyXG4gIGlmIChcIm1ham9yXCIgPT09IEEocikpIHtcclxuICAgIGxldCB0ID0gQyhlKTtcclxuICAgIHJldHVybiB0ID8gbi5maW5kSW5kZXgoZSA9PiBDKGUpID09PSB0KSA6IC0xXHJcbiAgfVxyXG4gIGlmIChUKHIpKSB7XHJcbiAgICBsZXQgdCA9IGVwKGUpO1xyXG4gICAgaWYgKCF0KSByZXR1cm4gLTE7XHJcbiAgICBsZXQgciA9IG4ubWFwKChlLCB0KSA9PiAoe1xyXG4gICAgICBvcHRpb246IGUsXHJcbiAgICAgIGluZGV4OiB0XHJcbiAgICB9KSkuZmlsdGVyKCh7XHJcbiAgICAgIG9wdGlvbjogZVxyXG4gICAgfSkgPT4gTSh0LCBlKSk7XHJcbiAgICByZXR1cm4gMSA9PT0gci5sZW5ndGggPyByWzBdLmluZGV4IDogLTFcclxuICB9XHJcbiAgaWYgKCFlbyhyKSkgcmV0dXJuICgwLCBzLmZpbmRDbG9zZXN0U3RyaW5nSWQpKG0oZSksIG4pO1xyXG4gIGlmIChrKHIpICYmIDEgPT09IG4ubGVuZ3RoICYmIG5bMF0gJiYgRChlKSkgcmV0dXJuIDA7XHJcbiAgaWYgKGsocikgJiYgbi5sZW5ndGggPiAxICYmICFEKGUpKSByZXR1cm4gLTE7XHJcbiAgbGV0IG8gPSBlbihlLCByKTtcclxuICBmb3IgKGxldCBlIG9mIG8pIHtcclxuICAgIGxldCB0ID0gbi5maW5kSW5kZXgodCA9PiBlaShlLCB0LCByKSk7XHJcbiAgICBpZiAodCA+PSAwKSByZXR1cm4gdFxyXG4gIH1cclxuICBpZiAoayhyKSkge1xyXG4gICAgbGV0IHQgPSBlYyhlLCBuKTtcclxuICAgIGlmICh0ID49IDApIHJldHVybiB0XHJcbiAgfVxyXG4gIHJldHVybiAtMVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZihlLCB0KSB7XHJcbiAgbGV0IHIgPSBlLiRpbnB1dCxcclxuICAgIG4gPSBGKGUubGFiZWwpID8gZS5sYWJlbCA6IHI/LmdldEF0dHJpYnV0ZT8uKFwibmFtZVwiKSB8fCByPy5pZCB8fCByPy5nZXRBdHRyaWJ1dGU/LihcImlkXCIpIHx8IGVcclxuICAgIC5sYWJlbDtcclxuICBpZiAoIUYobikpIHJldHVybiAhMDtcclxuICBsZXQgbyA9IEFycmF5LmlzQXJyYXkoZS5vcHRpb25zKSA/IGUub3B0aW9ucyA6IFtdO1xyXG4gIHJldHVybiBvLmxlbmd0aCA+IDAgJiYgZWQodCwgbywgbikgPj0gMFxyXG59XHJcblxyXG5mdW5jdGlvbiBlcChlKSB7XHJcbiAgbGV0IHQgPSBtKGUpO1xyXG4gIGlmICghdCkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IHIgPSBOKHQpO1xyXG4gIHJldHVybiBbXCJjYW5hZGFcIiwgXCJjYVwiXS5pbmNsdWRlcyhyKSA/IFwiQ2FuYWRhXCIgOiBbXCJ1bml0ZWQgc3RhdGVzXCIsIFwidW5pdGVkIHN0YXRlcyBvZiBhbWVyaWNhXCIsXHJcbiAgICAgIFwidXNcIiwgXCJ1c2FcIiwgXCJ1IHNcIiwgXCJ1IHMgYVwiXHJcbiAgICBdLmluY2x1ZGVzKHIpID8gXCJVbml0ZWQgU3RhdGVzXCIgOiBbXCJ1bml0ZWQga2luZ2RvbVwiLCBcImdyZWF0IGJyaXRhaW5cIiwgXCJ1a1wiLCBcImdiXCIsIFwidSBrXCIsIFwiZyBiXCJdXHJcbiAgICAuaW5jbHVkZXMocikgPyBcIlVuaXRlZCBLaW5nZG9tXCIgOiB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVtKGUpIHtcclxuICBpZiAoZS5sYWJlbD8ucmVwbGFjZSgvXFwqL2csIFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpICE9PSBcImNvdW50cnlcIikgcmV0dXJuICExO1xyXG4gIGxldCB0ID0gZS4kaW5wdXQ/LmdldEF0dHJpYnV0ZT8uKFwibmFtZVwiKSxcclxuICAgIHIgPSBlLiRpbnB1dD8uaWQgfHwgZS4kaW5wdXQ/LmdldEF0dHJpYnV0ZT8uKFwiaWRcIik7XHJcbiAgcmV0dXJuIFwiY291bnRyeVwiID09PSB0IHx8IFwiY291bnRyeS0xMlwiID09PSByXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVoKGUpIHtcclxuICByZXR1cm4gZS5maWx0ZXIoZSA9PiAhZW0oZSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVnKGUsIHQpIHtcclxuICByZXR1cm4gZW0oZSkgJiYgISFtKHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGViKGUpIHtcclxuICByZXR1cm4gZS5maW5kKGVtKSA/PyBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV5KGUpIHtcclxuICBsZXQgdCA9IFtcIkVhcmxpZXN0IEF2YWlsYWJsZSBEYXRlXCIsIFwiZWFybGllc3RBdmFpbGFibGVEYXRlXCIsIFwiZWFybGllc3RfYXZhaWxhYmxlX2RhdGVcIixcclxuICAgIFwiQXZhaWxhYmxlIERhdGVcIiwgXCJhdmFpbGFibGVEYXRlXCIsIFwiYXZhaWxhYmxlX2RhdGVcIiwgXCJEZXNpcmVkIFN0YXJ0IERhdGVcIiwgXCJkZXNpcmVkU3RhcnREYXRlXCIsXHJcbiAgICBcImRlc2lyZWRfc3RhcnRfZGF0ZVwiLCBcIkhpcmluZyBEYXRlXCIsIFwiaGlyaW5nRGF0ZVwiLCBcImhpcmluZ19kYXRlXCIsIFwiU3RhcnQgRGF0ZVwiLCBcInN0YXJ0RGF0ZVwiLFxyXG4gICAgXCJzdGFydF9kYXRlXCJcclxuICBdO1xyXG4gIHJldHVybiBoKGUucmVndWxhciA/PyB7fSwgdCkgPz8gaChlLnByb2ZpbGVEYXRhID8/IHt9LCB0KSA/PyBoKGUucHJvZmlsZV9kYXRhID8/IHt9LCB0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBldihlKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHJldHVybiBlLnNvbWUoZXYpO1xyXG4gIGxldCB0ID0gbShlKS5yZXBsYWNlKC9bLi9fLV0rL2csIFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICByZXR1cm4gISF0ICYmIChcInllc1wiID09PSB0IHx8IFwidHJ1ZVwiID09PSB0IHx8IFwiMVwiID09PSB0IHx8IHQuaW5jbHVkZXMoXCJoaXNwYW5pY1wiKSB8fCB0LmluY2x1ZGVzKFxyXG4gICAgXCJsYXRpbm9cIikpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV3KGUpIHtcclxuICBsZXQgdCA9IFtcIkhpc3BhbmljXCIsIFwiaGlzcGFuaWNcIiwgXCJIaXNwYW5pYyBvciBMYXRpbm9cIiwgXCJoaXNwYW5pY09yTGF0aW5vXCIsIFwiaGlzcGFuaWNfb3JfbGF0aW5vXCJdLFxyXG4gICAgciA9IFtcIkV0aG5pY2l0eVwiLCBcImV0aG5pY2l0eVwiLCBcInJhY2VcIiwgXCJSYWNlXCJdLFxyXG4gICAgbiA9IGgoZS5yZWd1bGFyID8/IHt9LCB0KSA/PyBoKGUucHJvZmlsZURhdGEgPz8ge30sIHQpID8/IGgoZS5wcm9maWxlX2RhdGEgPz8ge30sIHQpID8/IGgoZVxyXG4gICAgICAucmVndWxhciA/PyB7fSwgcikgPz8gaChlLnByb2ZpbGVEYXRhID8/IHt9LCByKSA/PyBoKGUucHJvZmlsZV9kYXRhID8/IHt9LCByKTtcclxuICByZXR1cm4gZXYobikgPyBbUl0gOiB2b2lkIDBcclxufVxyXG5cclxuZnVuY3Rpb24gZVMoZSwgdCkge1xyXG4gIGxldCByID0gdD8ubG9jYXRpb247XHJcbiAgaWYgKCFyIHx8IFwib2JqZWN0XCIgIT0gdHlwZW9mIHIpIHJldHVybiBbXTtcclxuICBlLnJlZ3VsYXIgPSBlLnJlZ3VsYXIgfHwge307XHJcbiAgbGV0IG4gPSBlLnJlZ3VsYXIsXHJcbiAgICBvID0gW3tcclxuICAgICAgcmVndWxhcktleTogXCJDaXR5XCIsXHJcbiAgICAgIGV4aXN0aW5nS2V5czogW1wiQ2l0eVwiLCBcImNpdHlcIiwgXCJUb3duIG9yIENpdHlcIiwgXCJ0b3duT3JDaXR5XCJdLFxyXG4gICAgICBsb2NhdGlvbktleXM6IFtcImNpdHlcIl1cclxuICAgIH0sIHtcclxuICAgICAgcmVndWxhcktleTogXCJQb3N0YWwgQ29kZVwiLFxyXG4gICAgICBleGlzdGluZ0tleXM6IFtcIlBvc3RhbCBDb2RlXCIsIFwiUG9zdCBDb2RlXCIsIFwicG9zdGFsQ29kZVwiLCBcInBvc3RDb2RlXCIsIFwiWklQIENvZGVcIiwgXCJaaXAgQ29kZVwiLFxyXG4gICAgICAgIFwiemlwQ29kZVwiLCBcInppcGNvZGVcIiwgXCJ6aXBcIlxyXG4gICAgICBdLFxyXG4gICAgICBsb2NhdGlvbktleXM6IFtcInBvc3RDb2RlXCIsIFwicG9zdGFsQ29kZVwiLCBcInBvc3RhbF9jb2RlXCIsIFwiemlwQ29kZVwiLCBcInppcGNvZGVcIiwgXCJ6aXBcIl1cclxuICAgIH1dLFxyXG4gICAgaSA9IFtdO1xyXG4gIGZvciAobGV0IGUgb2Ygbykge1xyXG4gICAgaWYgKGgobiwgZS5leGlzdGluZ0tleXMpKSBjb250aW51ZTtcclxuICAgIGxldCB0ID0gaChyLCBlLmxvY2F0aW9uS2V5cyk7XHJcbiAgICBtKHQpICYmIChuW2UucmVndWxhcktleV0gPSB0LCBpLnB1c2goZS5yZWd1bGFyS2V5KSlcclxuICB9XHJcbiAgcmV0dXJuIGlcclxufVxyXG5cclxuZnVuY3Rpb24gZUUoZSkge1xyXG4gIGlmIChlLnJlZ3VsYXIgfHwgKGUucmVndWxhciA9IHt9KSwgIW0oZS5yZWd1bGFyW1wiRWFybGllc3QgQXZhaWxhYmxlIERhdGVcIl0pKSB7XHJcbiAgICBsZXQgdCA9IGV5KGUpO1xyXG4gICAgdm9pZCAwICE9PSB0ICYmIChlLnJlZ3VsYXJbXCJFYXJsaWVzdCBBdmFpbGFibGUgRGF0ZVwiXSA9IHQpXHJcbiAgfVxyXG4gIGlmICghbShlLnJlZ3VsYXIuRXRobmljaXR5KSkge1xyXG4gICAgbGV0IHQgPSBldyhlKTtcclxuICAgIHQgJiYgKGUucmVndWxhci5FdGhuaWNpdHkgPSB0KVxyXG4gIH1cclxuICBpZiAoZS5yZWd1bGFyKSB7XHJcbiAgICBsZXQgdCA9IGVyKGUucmVndWxhci5DaXR5KTtcclxuICAgIHQuY2l0eSAmJiAoZS5yZWd1bGFyLkNpdHkgPSB0LmNpdHkpLCB0LnN0YXRlICYmIChlLnJlZ3VsYXIuU3RhdGUgPSB0LnN0YXRlKVxyXG4gIH1cclxuICBpZiAoZS53b3JrRXhwZXJpZW5jZSAmJiBlLndvcmtFeHBlcmllbmNlLmxlbmd0aCA+IDApXHJcbiAgICBmb3IgKGxldCB0IG9mIGUud29ya0V4cGVyaWVuY2UpIHtcclxuICAgICAgaWYgKCF0KSBjb250aW51ZTtcclxuICAgICAgdFtcIkVtcGxveWVyIE5hbWVcIl0gfHwgKHRbXCJFbXBsb3llciBOYW1lXCJdID0gdC5FbXBsb3llciA/PyB0LkNvbXBhbnkgPz8gdFtcIkNvbXBhbnkgTmFtZVwiXSA/PyB0XHJcbiAgICAgICAgLk9yZ2FuaXphdGlvbiA/PyB0Lm9yZ2FuaXphdGlvbiksIHRbXCJKb2IgVGl0bGVcIl0gfHwgKHRbXCJKb2IgVGl0bGVcIl0gPSB0LlRpdGxlID8/IHRbXHJcbiAgICAgICAgXCJZb3VyIExhc3QgUG9zaXRpb24gVGl0bGVcIl0gPz8gdC5Qb3NpdGlvbiA/PyB0LlJvbGUgPz8gdC5qb2JfdGl0bGUgPz8gdC5qb2JUaXRsZSk7XHJcbiAgICAgIGxldCBlID0gdC5kYXRlcyA/PyB0LkRhdGVzLFxyXG4gICAgICAgIHIgPSBwKHQuaXNDdXJyZW50ID8/IHRbXCJDdXJyZW50IEpvYlwiXSA/PyBlPy5pc19jdXJyZW50ID8/IGU/LmlzQ3VycmVudCk7XHJcbiAgICAgIHIgJiYgKHRbXCJDdXJyZW50IEpvYlwiXSA9IFtcInRydWVcIl0pO1xyXG4gICAgICBsZXQgbiA9IGYodC5TdGFydCA/PyB0W1wiU3RhcnQgRGF0ZVwiXSA/PyB0LnN0YXJ0X2RhdGUgPz8gdC5zdGFydERhdGUgPz8gZT8uc3RhcnRfZGF0ZSA/PyBlXHJcbiAgICAgICAgPy5zdGFydERhdGUpO1xyXG4gICAgICBpZiAobiAmJiAodFtcIlN0YXJ0IERhdGVcIl0gPSBuKSwgcikgZGVsZXRlIHQuRW5kLCBkZWxldGUgdFtcIkVuZCBEYXRlXCJdO1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBsZXQgciA9IGYodC5FbmQgPz8gdFtcIkVuZCBEYXRlXCJdID8/IHQuY29tcGxldGlvbl9kYXRlID8/IHQuY29tcGxldGlvbkRhdGUgPz8gZVxyXG4gICAgICAgICAgPy5jb21wbGV0aW9uX2RhdGUgPz8gZT8uY29tcGxldGlvbkRhdGUpO1xyXG4gICAgICAgIHIgJiYgKHRbXCJFbmQgRGF0ZVwiXSA9IHIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBpZiAoZS5lZHVjYXRpb24gJiYgZS5lZHVjYXRpb24ubGVuZ3RoID4gMClcclxuICAgIGZvciAobGV0IHQgb2YgZS5lZHVjYXRpb24pIHtcclxuICAgICAgaWYgKCF0KSBjb250aW51ZTtcclxuICAgICAgbGV0IGUgPSB0LmRhdGVzID8/IHQuRGF0ZXM7XHJcbiAgICAgIGlmIChFKHQsIFwiU2Nob29sXCIsIFtcIlNjaG9vbFwiLCBcIlNjaG9vbCBOYW1lXCIsIFwiU2Nob29sIG9yIFVuaXZlcnNpdHlcIiwgXCJVbml2ZXJzaXR5XCIsXHJcbiAgICAgICAgICBcIlVuaXZlcnNpdHkgTmFtZVwiLCBcIkluc3RpdHV0aW9uXCIsIFwiQ29sbGVnZVwiLCBcIm9yZ2FuaXphdGlvblwiXHJcbiAgICAgICAgXSksIEUodCwgXCJTY2hvb2wgb3IgVW5pdmVyc2l0eVwiLCBbXCJTY2hvb2xcIiwgXCJTY2hvb2wgTmFtZVwiLCBcIlVuaXZlcnNpdHlcIiwgXCJVbml2ZXJzaXR5IE5hbWVcIixcclxuICAgICAgICAgIFwiSW5zdGl0dXRpb25cIiwgXCJDb2xsZWdlXCIsIFwib3JnYW5pemF0aW9uXCJcclxuICAgICAgICBdKSwgRSh0LCBcIkRlZ3JlZVwiLCBbXCJEZWdyZWVcIiwgXCJEZWdyZWUgVHlwZVwiLCBcIkVkdWNhdGlvbiBMZXZlbFwiLCBcIkhpZ2hlc3QgRGVncmVlXCIsXHJcbiAgICAgICAgICBcIkFjY3JlZGl0YXRpb25cIiwgXCJhY2NyZWRpdGF0aW9uXCJcclxuICAgICAgICBdKSwgRSh0LCBcIk1ham9yXCIsIFtcIk1ham9yXCIsIFwiTWFqb3Igb3IgQXJlYSBvZiBDb25jZW50cmF0aW9uXCIsIFwiRmllbGQgb2YgU3R1ZHlcIiwgXCJTdHVkeVwiLFxyXG4gICAgICAgICAgXCJEaXNjaXBsaW5lXCIsIFwicmF3TWFqb3JcIlxyXG4gICAgICAgIF0pLCAhbSh0Lk1ham9yKSkge1xyXG4gICAgICAgIGxldCBlID0geChoKHQsIFtcImFjY3JlZGl0YXRpb25cIiwgXCJBY2NyZWRpdGF0aW9uXCIsIFwiRGVncmVlXCIsIFwiRGVncmVlIFR5cGVcIl0pKTtcclxuICAgICAgICBlICYmICh0Lk1ham9yID0gZSlcclxuICAgICAgfVxyXG4gICAgICBpZiAoRSh0LCBcIkdQQVwiLCBbXCJHUEFcIiwgXCJncGFcIl0pLCBtKHQuR1BBKSAmJiAodC5HUEEgPSAoMCwgdS5ub3JtYWxpemVHcGFWYWx1ZSkodC5HUEEpKSwgdFxyXG4gICAgICAgID8uU3RhcnQgJiYgKHQuRnJvbSA9IHQuU3RhcnQpLCB0Py5FbmQgJiYgKHQuVG8gPSB0LkVuZCksIHQ/LlNjaG9vbCAmJiAodFtcclxuICAgICAgICAgIFwiU2Nob29sIG9yIFVuaXZlcnNpdHlcIl0gPSB0LlNjaG9vbCksIHQ/LlN0dWR5ICYmICh0W1wiRmllbGQgb2YgU3R1ZHlcIl0gPSB0LlN0dWR5KSwgdFxyXG4gICAgICAgIC5Gcm9tIHx8ICh0LkZyb20gPSB0W1wiU3RhcnQgRGF0ZVwiXSA/PyB0LnN0YXJ0X2RhdGUgPz8gdC5zdGFydERhdGUgPz8gZT8uc3RhcnRfZGF0ZSA/PyBlXHJcbiAgICAgICAgICA/LnN0YXJ0RGF0ZSksIHQuVG8gfHwgKHQuVG8gPSB0W1wiRW5kIERhdGVcIl0gPz8gdC5jb21wbGV0aW9uX2RhdGUgPz8gdC5jb21wbGV0aW9uRGF0ZSA/PyBlXHJcbiAgICAgICAgICA/LmNvbXBsZXRpb25fZGF0ZSA/PyBlPy5jb21wbGV0aW9uRGF0ZSksICFtKHRbXCJTdGFydCBEYXRlXCJdKSkge1xyXG4gICAgICAgIGxldCByID0gaCh0LCBbXCJGcm9tXCIsIFwiU3RhcnRcIiwgXCJzdGFydF9kYXRlXCIsIFwic3RhcnREYXRlXCJdKSxcclxuICAgICAgICAgIG4gPSBmKHIgPz8gZT8uc3RhcnRfZGF0ZSA/PyBlPy5zdGFydERhdGUpO1xyXG4gICAgICAgIG4gJiYgKHRbXCJTdGFydCBEYXRlXCJdID0gbilcclxuICAgICAgfVxyXG4gICAgICBpZiAoIW0odFtcIkVuZCBEYXRlXCJdKSkge1xyXG4gICAgICAgIGxldCByID0gaCh0LCBbXCJUb1wiLCBcIkVuZFwiLCBcImNvbXBsZXRpb25fZGF0ZVwiLCBcImNvbXBsZXRpb25EYXRlXCJdKSxcclxuICAgICAgICAgIG4gPSBmKHIgPz8gZT8uY29tcGxldGlvbl9kYXRlID8/IGU/LmNvbXBsZXRpb25EYXRlKTtcclxuICAgICAgICBuICYmICh0W1wiRW5kIERhdGVcIl0gPSBuKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgcmV0dXJuIGVcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImFuc3dlci5kYmZhZGJjOS5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);