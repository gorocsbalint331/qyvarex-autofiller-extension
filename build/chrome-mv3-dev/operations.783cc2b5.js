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
})({"ezPmS":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\paycomonline-v3\\operations.js",
    "bundleId": "bd0b1de3783cc2b5",
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
var j = z(require("4c66cd18a5a991c7"));
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

},{"4c66cd18a5a991c7":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"3waLR":[function(require,module,exports) {
/**
 * Parcel module id: kmsj6
 * Resolved path: src/contents/sites/paycomonline-v3/operations.js
 * Dependencies:
 *   ./file-upload -> 8prPo  =>  src/contents/sites/paycomonline-v3/file-upload.js
 *   ./geographic-country -> 2LoTq  =>  src/contents/sites/paycomonline-v3/geographic-country.js
 *   ./phone-country -> 8lplO  =>  src/contents/sites/paycomonline-v3/phone-country.js
 *   ./start-application-dialog -> dQRRK  =>  src/contents/sites/paycomonline-v3/start-application-dialog.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~contents/crawler/utils/checkbox -> 5MP6u  =>  src/contents/crawler/utils/checkbox.js
 *   ~contents/crawler/utils/input -> iPIvT  =>  src/contents/crawler/utils/input.js
 *   ~contents/crawler/utils/select -> h22JB  =>  src/contents/crawler/utils/select.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
  *
 * Deobfuscated (pretty + export/import rename). Parcel e()/r preserved.
 */ var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
helpers.defineInteropFlag(r), helpers.export(r, "fillCheckBoxesField", ()=>dom.fillCheckBoxesField), helpers.export(r, "fillSelectField", ()=>dom.fillSelectField), helpers.export(r, "getPaycomCoverLetterStatus", ()=>getPaycomCoverLetterStatus), helpers.export(r, "fillInputTextField", ()=>fillInputTextField), helpers.export(r, "fillPaycomDateGroup", ()=>fillPaycomDateGroup), helpers.export(r, "fillPaycomListbox", ()=>fillPaycomListbox), helpers.export(r, "isPaycomPhoneCountryCodeButton", ()=>isPaycomPhoneCountryCodeButton), helpers.export(r, "fillPaycomPhoneCountryCode", ()=>fillPaycomPhoneCountryCode), helpers.export(r, "clickCheckboxOuterIDButton", ()=>clickCheckboxOuterIDButton), helpers.export(r, "fillPaycomRadioGroup", ()=>fillPaycomRadioGroup), helpers.export(r, "fillPaycomSelect", ()=>fillPaycomSelect), helpers.export(r, "fillPaycomGeographicCountry", ()=>fillPaycomGeographicCountry), helpers.export(r, "waitForDOMStable", ()=>waitForDOMStable), helpers.export(r, "expandForm", ()=>expandForm), helpers.export(r, "fillEducation", ()=>fillEducation), helpers.export(r, "fillAgreementCheckbox", ()=>fillAgreementCheckbox), helpers.export(r, "uploadResume", ()=>uploadResume), helpers.export(r, "uploadCoverLetter", ()=>uploadCoverLetter);
var choiceMatch = e("~contents/methods/choice-match"), dayjs = e("dayjs"), a = helpers.interopDefault(dayjs), checkbox = e("~contents/crawler/utils/checkbox"), input = e("~contents/crawler/utils/input"), select = e("~contents/crawler/utils/select"), answer = e("~contents/methods/answer"), dom = e("~contents/methods/dom"), enums = e("~core/enums"), dom2 = e("~core/dom"), cancellation = e("~contents/methods/cancellation"), xpath = e("~core/xpath"), delay = e("~utils/delay"), geographicCountry = e("./geographic-country"), phoneCountry = e("./phone-country"), fileUpload = e("./file-upload"), startApplicationDialog = e("./start-application-dialog");
function getPaycomCoverLetterStatus() {
    return (0, fileUpload.getPaycomFileUploadInput)("coverLetter") ? "optional" : "";
}
async function fillInputTextField(e1, t) {
    if (e1) {
        if ("IFRAME" === e1.tagName) {
            try {
                let r1 = e1, _helpersLocal = r1.contentDocument || r1.contentWindow?.document;
                _helpersLocal && _helpersLocal.body && (await (0, delay.delay)(50), r1.contentWindow?.focus(), _helpersLocal.body.focus(), _helpersLocal.body.innerHTML = "", "on" === _helpersLocal.designMode || "true" === _helpersLocal.body.contentEditable ? _helpersLocal.execCommand("insertText", !1, t) : _helpersLocal.body.innerText = t, _helpersLocal.body.dispatchEvent(new Event("input", {
                    bubbles: !0
                })), _helpersLocal.body.dispatchEvent(new Event("change", {
                    bubbles: !0
                })), _helpersLocal.body.dispatchEvent(new Event("blur", {
                    bubbles: !0
                })), await (0, delay.delay)(50));
            } catch (e1) {
                console.error("Failed to fill iframe editor:", e1);
            }
            return;
        }
        await (0, delay.delay)(50), (0, dom.triggerEvents)(e1, [
            "focus",
            "click"
        ]), await (0, delay.delay)(50), await (0, input.fillDefaultInputField)(e1, t), e1.dispatchEvent(new Event("input", {
            bubbles: !0
        })), e1.dispatchEvent(new Event("change", {
            bubbles: !0
        })), e1.dispatchEvent(new Event("blur", {
            bubbles: !0
        })), await (0, delay.delay)(50);
    }
}
async function fillPaycomDateGroup(e1, t) {
    let r1 = e1.$input;
    if (!r1 || !t) return;
    let _helpersLocal2 = (0, a.default)(t);
    if (!_helpersLocal2.isValid()) return;
    let _choiceMatchLocal = (0, xpath.getOrderedNodesSafe)(".//input | .//select", r1), _dayjsLocal = null, _checkboxLocal = null, _inputLocal = null, _selectLocal = (e1, t)=>{
        let r1 = (e1.getAttribute("placeholder") || e1.getAttribute("aria-label") || e1.getAttribute("name") || "").toLowerCase();
        return r1.includes(t);
    };
    for (let e1 of _choiceMatchLocal)_selectLocal(e1, "month") ? _dayjsLocal = e1 : _selectLocal(e1, "day") ? _checkboxLocal = e1 : _selectLocal(e1, "year") && (_inputLocal = e1);
    _dayjsLocal && _checkboxLocal && _inputLocal || (3 === _choiceMatchLocal.length ? (_dayjsLocal || (_dayjsLocal = _choiceMatchLocal[0]), _checkboxLocal || (_checkboxLocal = _choiceMatchLocal[1]), _inputLocal || (_inputLocal = _choiceMatchLocal[2])) : 2 === _choiceMatchLocal.length ? (_dayjsLocal || (_dayjsLocal = _choiceMatchLocal[0]), _inputLocal || (_inputLocal = _choiceMatchLocal[1])) : 1 !== _choiceMatchLocal.length || _inputLocal || (_inputLocal = _choiceMatchLocal[0])), _dayjsLocal && await C(_dayjsLocal, _helpersLocal2.format("MM")), _checkboxLocal && await C(_checkboxLocal, _helpersLocal2.format("DD")), _inputLocal && await C(_inputLocal, _helpersLocal2.format("YYYY"));
    let _answerLocal = (e1, t, r1 = !1)=>{
        if (!e1) return !1;
        let _choiceMatchLocal2 = e1.value?.trim() || "", _dayjsLocal2 = "SELECT" === e1.tagName && e1.options[e1.selectedIndex]?.text?.trim() || "";
        return _choiceMatchLocal2 === t || /^\d+$/.test(_choiceMatchLocal2) && Number(_choiceMatchLocal2) === Number(t) || r1 && _dayjsLocal2.toLowerCase() === _helpersLocal2.format("MMMM").toLowerCase();
    };
    return _answerLocal(_dayjsLocal, _helpersLocal2.format("MM"), !0) && _answerLocal(_inputLocal, _helpersLocal2.format("YYYY")) && (!_checkboxLocal || _answerLocal(_checkboxLocal, _helpersLocal2.format("DD")));
}
async function C(e1, t) {
    if ("SELECT" === e1.tagName) {
        let r1 = e1.options, _helpersLocal3 = !1;
        for(let dayjs = 0; dayjs < r1.length; dayjs++){
            let _aLocal = r1[dayjs];
            if (_aLocal.value === t || (0, choiceMatch.isExactChoiceMatch)(_aLocal.text, t) || t.startsWith("0") && _aLocal.value === t.replace(/^0/, "")) {
                e1.value = _aLocal.value, _helpersLocal3 = !0;
                break;
            }
        }
        _helpersLocal3 || (e1.value = t), e1.dispatchEvent(new Event("change", {
            bubbles: !0
        }));
    } else await (0, input.fillDefaultInputField)(e1, t);
}
_c = C;
async function fillPaycomListbox(e1, t) {
    let r1 = e1.$input;
    if (!r1) return;
    (0, dom.triggerEvents)(r1, [
        "mousedown",
        "mouseup",
        "click"
    ]), await (0, delay.delay)(300);
    let _helpersLocal4 = r1.getAttribute("aria-controls"), _choiceMatchLocal3 = null;
    for(let e1 = 0; e1 < 3 && (!(_choiceMatchLocal3 = _helpersLocal4 ? document.getElementById(_helpersLocal4) : (0, xpath.getFirstOrderedNodeSafe)("//ul[@role='listbox'] | //div[@role='listbox']")) || null === _choiceMatchLocal3.offsetParent); e1++)await (0, delay.delay)(200);
    if (_choiceMatchLocal3) {
        let e1 = (0, xpath.getOrderedNodesSafe)(".//li[@role='option'] | .//div[@role='option']", _choiceMatchLocal3), r1 = (0, select.findMatchOption)(e1, t);
        r1 && (0, dom.triggerEvents)(r1, [
            "mousedown",
            "mouseup",
            "click"
        ]);
    }
    await (0, delay.delay)(100);
}
function isPaycomPhoneCountryCodeButton(e1) {
    return e1 instanceof HTMLButtonElement && "international-phone-button" === e1.getAttribute("data-testid");
}
function T(e1) {
    let t = e1.getBoundingClientRect(), r1 = window.getComputedStyle(e1);
    return t.width > 0 && t.height > 0 && "none" !== r1.display && "hidden" !== r1.visibility;
}
_c1 = T;
function F() {
    return Array.from(document.querySelectorAll('li[data-testid^="country-list-item-"]')).filter(T);
}
_c2 = F;
let I = 2e3, j = 50;
function D() {
    return Array.from(document.querySelectorAll('input[data-testid="searchsearchinput"], input[placeholder="Search"]')).find(T) || null;
}
_c3 = D;
async function P() {
    let e1 = Date.now() + I;
    for(;;){
        let t = D();
        if (t) return t;
        let r1 = e1 - Date.now();
        if (r1 <= 0) return null;
        await (0, delay.delay)(Math.min(j, r1));
    }
}
_c4 = P;
async function fillPaycomPhoneCountryCode(e1, t, r1) {
    let _helpersLocal5 = e1.$input;
    if (!isPaycomPhoneCountryCodeButton(_helpersLocal5) || !t) return !1;
    let _choiceMatchLocal4 = (0, phoneCountry.getPaycomPhoneCountryCodeSearchCandidates)(t, r1);
    if (0 === _choiceMatchLocal4.length) return !1;
    let _dayjsLocal3 = (0, phoneCountry.getPaycomPhoneCountryDialCode)(t);
    if ((0, phoneCountry.isPaycomPhoneCountrySelectionMatch)(_helpersLocal5, t, r1)) return !0;
    (0, dom.triggerEvents)(_helpersLocal5, [
        "mousedown",
        "mouseup",
        "click"
    ]);
    let _aLocal2 = await P();
    for (let e1 of (console.info("[Paycom-v3][phone-country] opened selector", {
        candidateCount: _choiceMatchLocal4.length,
        dialCode: _dayjsLocal3,
        searchReady: !!_aLocal2
    }), _choiceMatchLocal4)){
        let _choiceMatchLocal5 = _aLocal2 ? await P() : null;
        _choiceMatchLocal5 && await fillInputTextField(_choiceMatchLocal5, e1);
        let _checkboxLocal2 = await (0, phoneCountry.waitForPaycomPhoneCountryOption)({
            getOptions: F,
            value: t,
            profileCountry: r1,
            timeoutMs: _choiceMatchLocal5 ? void 0 : 0
        });
        if (_checkboxLocal2) {
            (0, dom.triggerEvents)(_checkboxLocal2, [
                "mousedown",
                "mouseup",
                "click"
            ]), await (0, delay.delay)(300);
            let _choiceMatchLocal6 = !_dayjsLocal3 || (0, phoneCountry.isPaycomPhoneCountrySelectionMatch)(_helpersLocal5, t, r1);
            return console.info("[Paycom-v3][phone-country] selection result", {
                candidate: e1,
                dialCode: _dayjsLocal3,
                selected: _choiceMatchLocal6
            }), _choiceMatchLocal6;
        }
        console.warn("[Paycom-v3][phone-country] exact option not ready", {
            candidate: e1,
            dialCode: _dayjsLocal3,
            searchReady: !!_choiceMatchLocal5
        });
    }
    return !1;
}
async function clickCheckboxOuterIDButton(e1) {
    e1 && ((0, dom.triggerEvents)(e1, [
        "mousedown",
        "mouseup",
        "click"
    ]), await (0, delay.delay)(100));
}
async function fillPaycomRadioGroup(e1, t) {
    let r1 = e1.$radioParent, _helpersLocal6 = (0, xpath.getOrderedNodesSafe)(".//input[@type='radio']", r1);
    if (!_helpersLocal6.length) return;
    let _dayjsLocal4 = (0, choiceMatch.findExactChoice)(_helpersLocal6.filter((e1)=>!e1.disabled), t, (e1)=>{
        let t = (0, xpath.getFirstOrderedNodeSafe)(`//label[@for='${e1.id}']`);
        return t?.textContent || e1.value;
    }, (e1)=>e1.value);
    !(!_dayjsLocal4 && e1.label.toLowerCase().includes("acknowledge")) && _dayjsLocal4 && (await (0, delay.delay)(50), (0, dom.triggerEvents)(_dayjsLocal4, [
        "focus",
        "click",
        "change",
        "input"
    ]), await (0, checkbox.fillCheckbox)(_dayjsLocal4, !0), await (0, delay.delay)(50));
}
async function fillPaycomSelect(e1, t) {
    let r1 = e1.$input;
    if (!r1 || !t) return;
    await (0, delay.delay)(50), (0, dom.triggerEvents)(r1, [
        "focus",
        "click"
    ]), await (0, delay.delay)(50);
    let _helpersLocal7 = Array.from(r1.options), _choiceMatchLocal7 = null;
    if (/^\d+$/.test(t)) {
        let e1 = parseInt(t, 10);
        e1 >= 0 && e1 < _helpersLocal7.length && (_choiceMatchLocal7 = _helpersLocal7[e1]);
    }
    if (_choiceMatchLocal7 || (_choiceMatchLocal7 = (0, select.findMatchOption)(_helpersLocal7, t)), _choiceMatchLocal7) {
        let e1 = Object.getPrototypeOf(r1), t = Object.getOwnPropertyDescriptor(e1, "value").set;
        t ? t.call(r1, _choiceMatchLocal7.value) : r1.value = _choiceMatchLocal7.value, (0, dom.triggerEvents)(r1, [
            "change",
            "input",
            "blur"
        ]), await (0, delay.delay)(50);
        return;
    }
    let _dayjsLocal5 = Array.isArray(t) ? t[0] : t;
    for (let e1 of _helpersLocal7)if (e1.value.toLowerCase() === _dayjsLocal5.toLowerCase() || e1.text.toLowerCase() === _dayjsLocal5.toLowerCase()) {
        let t = Object.getPrototypeOf(r1), _helpersLocal8 = Object.getOwnPropertyDescriptor(t, "value").set;
        _helpersLocal8 ? _helpersLocal8.call(r1, e1.value) : r1.value = e1.value, (0, dom.triggerEvents)(r1, [
            "change",
            "input",
            "blur"
        ]), await (0, delay.delay)(50);
        return;
    }
    (0, dom.fillSelectField)(r1, [
        _dayjsLocal5
    ]);
}
function M() {
    let e1 = Array.from(document.querySelectorAll('button[aria-label*="Country combo box"]')).filter(geographicCountry.isPaycomMainGeographicCountryButton);
    return 1 === e1.length ? e1[0] : null;
}
_c5 = M;
function N() {
    return Array.from(document.querySelectorAll('input[data-testid="searchsearchinput"], input[placeholder="Search"]')).find(T) ?? null;
}
_c6 = N;
function $() {
    return Array.from(document.querySelectorAll('li[data-testid^="country-list-item-"]')).filter(T);
}
function B(e1) {
    (0, dom.triggerEvents)(e1, [
        "mousedown",
        "mouseup",
        "click"
    ]);
}
_c7 = B;
async function q(e1, t) {
    if (!t) return !1;
    (0, dom.triggerEvents)(e1, [
        "mousedown",
        "mouseup",
        "click"
    ]), await (0, delay.delay)(300);
    let r1 = N();
    if (!r1) return !1;
    await fillInputTextField(r1, t), await (0, delay.delay)(300);
    let _helpersLocal9 = (0, geographicCountry.findPaycomGeographicCountryOption)($(), t);
    if (!_helpersLocal9) return !1;
    (0, dom.triggerEvents)(_helpersLocal9, [
        "mousedown",
        "mouseup",
        "click"
    ]), await (0, delay.delay)(400);
    let _choiceMatchLocal8 = M();
    return !!(_choiceMatchLocal8 && (0, geographicCountry.isPaycomGeographicCountrySelectionMatch)(_choiceMatchLocal8, t));
}
async function fillPaycomGeographicCountry(e1) {
    let t = (0, geographicCountry.formatPaycomGeographicCountrySearch)(e1);
    if (!t) return console.info("[Paycom-v3] Geographic Country prefill skipped", {
        reason: "country-empty"
    }), !1;
    let r1 = M();
    if (!r1) return console.warn("[Paycom-v3] Geographic Country prefill skipped", {
        reason: "control-missing-or-ambiguous"
    }), !1;
    if ((0, geographicCountry.isPaycomGeographicCountrySelectionMatch)(r1, e1)) return !0;
    let _helpersLocal0 = r1.textContent?.trim() || "";
    (0, dom.triggerEvents)(r1, [
        "mousedown",
        "mouseup",
        "click"
    ]), await (0, delay.delay)(300);
    let _choiceMatchLocal9 = N();
    if (!_choiceMatchLocal9) return B(r1), console.warn("[Paycom-v3] Geographic Country prefill failed", {
        reason: "search-unavailable"
    }), !1;
    await fillInputTextField(_choiceMatchLocal9, t), await (0, delay.delay)(300);
    let _dayjsLocal6 = (0, geographicCountry.findPaycomGeographicCountryOption)($(), e1);
    if (!_dayjsLocal6) return B(r1), console.warn("[Paycom-v3] Geographic Country prefill failed", {
        reason: "option-unmatched-or-ambiguous"
    }), !1;
    (0, dom.triggerEvents)(_dayjsLocal6, [
        "mousedown",
        "mouseup",
        "click"
    ]), await (0, delay.delay)(400);
    let _aLocal3 = M(), _checkboxLocal3 = !!(_aLocal3 && (0, geographicCountry.isPaycomGeographicCountrySelectionMatch)(_aLocal3, e1));
    if (!_checkboxLocal3) {
        let e1 = await q(_aLocal3 || r1, _helpersLocal0);
        console.warn("[Paycom-v3] Geographic Country prefill failed", {
            reason: e1 ? "commit-readback-mismatch-restored" : "commit-readback-mismatch-rollback-failed"
        });
    }
    return _checkboxLocal3;
}
async function waitForDOMStable() {
    let e1 = 30, t = 200;
    for(let r1 = 0; r1 < e1; r1++){
        await (0, delay.delay)(t);
        let e1 = document.getElementById("employment-city-field-1"), _helpersLocal1 = e1 && "INPUT" === e1.tagName && "text" === e1.type && !e1.disabled, _choiceMatchLocal0 = document.getElementById("employment-state-field-1");
        _choiceMatchLocal0 && "SELECT" !== _choiceMatchLocal0.tagName && (_choiceMatchLocal0 = _choiceMatchLocal0.querySelector("select"));
        let _dayjsLocal7 = _choiceMatchLocal0 && "SELECT" === _choiceMatchLocal0.tagName && _choiceMatchLocal0.options && _choiceMatchLocal0.options.length > 10 && !_choiceMatchLocal0.disabled;
        if (_helpersLocal1 && _dayjsLocal7) return !0;
        if ((!e1 || !_choiceMatchLocal0) && r1 > 10) {
            let e1 = document.getElementById("education-city-field-1"), t = document.getElementById("education-state-field-1");
            t && "SELECT" !== t.tagName && (t = t.querySelector("select"));
            let r1 = e1 && "INPUT" === e1.tagName && !e1.disabled, _helpersLocal10 = t && "SELECT" === t.tagName && t.options && t.options.length > 10 && !t.disabled;
            if (r1 && _helpersLocal10) return !0;
        }
    }
    return !1;
}
async function expandForm(e1) {
    if (e1.education && e1.education.length > 0) {
        let t = z(), r1 = e1.education.length;
        if (r1 > t) for(let e1 = 0; e1 < r1 - t; e1++)await W(), await (0, delay.delay)(300);
    }
    if (e1.workExperience && e1.workExperience.length > 0) {
        let t = V(), r1 = e1.workExperience.length;
        if (r1 > t) for(let e1 = 0; e1 < r1 - t; e1++)await G(), await (0, delay.delay)(300);
    }
    await (0, delay.delay)(500);
}
function z() {
    let e1 = document.getElementById("education-section");
    if (!e1) return 0;
    let t = (0, xpath.getOrderedNodesSafe)(".//h3[contains(text(), 'Institution #')]", e1);
    if (0 === t.length) {
        let t = (0, xpath.getFirstOrderedNodeSafe)(".//input", e1);
        return t ? 1 : 0;
    }
    return t.length;
}
function V() {
    let e1 = document.getElementById("employment-section");
    if (!e1) return 0;
    let t = (0, xpath.getOrderedNodesSafe)(".//h3[contains(text(), 'Employer #')]", e1);
    if (0 === t.length) {
        let t = (0, xpath.getFirstOrderedNodeSafe)(".//input", e1);
        return t ? 1 : 0;
    }
    return t.length;
}
_c8 = V;
async function W() {
    let e1 = document.getElementById("education-section");
    if (!e1) return;
    let t = (0, xpath.getFirstOrderedNodeSafe)(".//button[.//h4[contains(text(), 'Add Institution')]] | .//button[contains(., 'Add Institution')]", e1);
    t && (0, dom.triggerEvents)(t, [
        "mousedown",
        "mouseup",
        "click"
    ]);
}
_c9 = W;
async function G() {
    let e1 = document.getElementById("employment-section");
    if (!e1) return;
    let t = (0, xpath.getFirstOrderedNodeSafe)(".//button[.//h4[contains(text(), 'Add Employer')]] | .//button[contains(., 'Add Employer')]", e1);
    t && (0, dom.triggerEvents)(t, [
        "mousedown",
        "mouseup",
        "click"
    ]);
}
_c10 = G;
async function fillEducation(e1, t) {
    if (!e1.education || 0 === e1.education.length) return;
    let r1 = t ? (0, answer.createSectionResultReporter)("education", t) : void 0;
    r1?.setLabel("Education");
    let _helpersLocal11 = [];
    for(let t = 0; t < e1.education.length; t++){
        let _choiceMatchLocal1, _dayjsLocal8;
        let _aLocal4 = e1.education[t], _inputLocal2 = t + 1, _selectLocal2 = r1?.ensureRow(t, _aLocal4), _answerLocal2 = [];
        _helpersLocal11[t] = {
            type: enums.FIELD_TYPE.EDUCATION,
            label: "Education",
            children: _answerLocal2
        }, r1 && (0, dom2.setSectionResultFocusRules)("education", _helpersLocal11);
        let _domLocal = (e1, t, _helpersArg, _choiceMatchArg)=>{
            if (!r1 || !_selectLocal2) return;
            let _dayjsLocal9 = _answerLocal2.find((t)=>t.label === e1);
            _dayjsLocal9 ? _dayjsLocal9.$input = t : _answerLocal2.push({
                label: e1,
                type: enums.FIELD_TYPE.TEXT,
                $input: t
            });
            let _aLocal5 = String(Array.isArray(_helpersArg) ? _helpersArg[0] ?? "" : _helpersArg ?? "").trim(), _checkboxLocal4 = t, _inputLocal3 = t?.tagName === "SELECT" ? t.options[t.selectedIndex] : void 0, _domLocal2 = t?.getAttribute("type") === "radio" ? t.checked ? t.value : "" : String(_inputLocal3?.text || _checkboxLocal4?.value || "").trim(), _dom2Local = _domLocal2.toLowerCase() === _aLocal5.toLowerCase() || _inputLocal3?.value === _aLocal5;
            r1.updateField(_selectLocal2, e1, _domLocal2 || (!0 === _choiceMatchArg ? _aLocal5 : void 0), t && _aLocal5 && !1 !== _choiceMatchArg && (!0 === _choiceMatchArg || _dom2Local) ? "filled" : "missed"), r1.emit();
        };
        r1?.emit();
        let _delayLocal = async (e1, t, _helpersArg2, _choiceMatchArg2)=>{
            try {
                return await _choiceMatchArg2();
            } catch (_choiceMatchLocal10) {
                throw _domLocal(e1, t, _helpersArg2, !1), r1 && _selectLocal2 && _choiceMatchLocal10 instanceof cancellation.SkippedError && (r1.updateField(_selectLocal2, e1, _selectLocal2.fields.find((t)=>t.label === e1)?.value, "skipped"), r1.emit()), _choiceMatchLocal10;
            }
        }, _geographicCountryLocal = document.getElementById(`education-institution-name-field-${_inputLocal2}`);
        _geographicCountryLocal && _aLocal4["Institution Name"] && await _delayLocal("Institution Name", _geographicCountryLocal, _aLocal4["Institution Name"], ()=>fillInputTextField(_geographicCountryLocal, _aLocal4["Institution Name"])), _domLocal("Institution Name", _geographicCountryLocal, _aLocal4["Institution Name"]);
        let _phoneCountryLocal = document.getElementById(`education-institution-type-field-${_inputLocal2}`), _fileUploadLocal = _aLocal4["Institution Information"] || _aLocal4["Institution Type"];
        _phoneCountryLocal && _fileUploadLocal && (_choiceMatchLocal1 = await _delayLocal("Institution Type", _phoneCountryLocal, _fileUploadLocal, ()=>fillPaycomSelect({
                $input: _phoneCountryLocal
            }, Array.isArray(_fileUploadLocal) ? _fileUploadLocal[0] : _fileUploadLocal))), _domLocal("Institution Type", _phoneCountryLocal, _fileUploadLocal, _choiceMatchLocal1);
        let _startApplicationDialogLocal = document.getElementById(`education-degree-field-${_inputLocal2}`), _getPaycomCoverLetterStatusLocal = _aLocal4.Degree;
        _startApplicationDialogLocal && _getPaycomCoverLetterStatusLocal && (_dayjsLocal8 = await _delayLocal("Degree", _startApplicationDialogLocal, _getPaycomCoverLetterStatusLocal, ()=>fillPaycomSelect({
                $input: _startApplicationDialogLocal
            }, Array.isArray(_getPaycomCoverLetterStatusLocal) ? _getPaycomCoverLetterStatusLocal[0] : _getPaycomCoverLetterStatusLocal))), _domLocal("Degree", _startApplicationDialogLocal, _getPaycomCoverLetterStatusLocal, _dayjsLocal8);
        let _CLocal = document.getElementById(`education-major-field-${_inputLocal2}`), _fillPaycomListboxLocal = _aLocal4.Major;
        await _delayLocal("Major", _CLocal, _fillPaycomListboxLocal, ()=>fillInputTextField(_CLocal, _fillPaycomListboxLocal)), _domLocal("Major", _CLocal, _fillPaycomListboxLocal);
        let _isPaycomPhoneCountryCodeButtonLocal = _aLocal4.Graduated, _TLocal = null;
        if (_isPaycomPhoneCountryCodeButtonLocal) {
            let e1 = Array.isArray(_isPaycomPhoneCountryCodeButtonLocal) ? _isPaycomPhoneCountryCodeButtonLocal[0] : _isPaycomPhoneCountryCodeButtonLocal, t = (0, xpath.getFirstOrderedNodeSafe)(`//input[@name='education-graduated-field-${_inputLocal2}' and @value='${e1}']`);
            _TLocal = t, t && await _delayLocal("Graduated", t, _isPaycomPhoneCountryCodeButtonLocal, ()=>(0, checkbox.fillCheckbox)(t, !0));
        }
        _domLocal("Graduated", _TLocal, _isPaycomPhoneCountryCodeButtonLocal);
        let _FLocal = (0, xpath.getOrderedNodesSafe)(`//div[contains(@id, 'education-') and contains(@id, '-field-${_inputLocal2}') and @data-floating-error-notice-type='date']`, document.body);
        for (let e1 of _FLocal){
            let t;
            let r1 = e1.id?.toLowerCase() || "", _helpersLocal12 = e1.textContent?.toLowerCase() || "", _choiceMatchLocal11 = null;
            r1.includes("start") || _helpersLocal12.includes("start") ? _choiceMatchLocal11 = _aLocal4["Start Date"] : (r1.includes("end") || _helpersLocal12.includes("end") || _helpersLocal12.includes("graduated")) && (_choiceMatchLocal11 = _aLocal4["End Date"] || _aLocal4["Graduation Date"]), _choiceMatchLocal11 && (t = await _delayLocal(r1.includes("start") || _helpersLocal12.includes("start") ? "Start Date" : "End Date", e1, _choiceMatchLocal11, ()=>fillPaycomDateGroup({
                    $input: e1
                }, _choiceMatchLocal11))), _domLocal(r1.includes("start") || _helpersLocal12.includes("start") ? "Start Date" : "End Date", e1, _choiceMatchLocal11, t);
        }
    }
}
async function fillAgreementCheckbox() {
    let e1 = document.querySelector('[id*="CheckboxOuterID-authorization-acknowledge-disclosure-field"]');
    e1 && ((0, dom.triggerEvents)(e1, [
        "mousedown",
        "mouseup"
    ]), await (0, delay.delay)(200));
}
async function uploadResume(e1, t, r1) {
    let _helpersLocal13 = (0, fileUpload.getPaycomFileUploadInput)("resume");
    if (console.info("[PaycomFileUpload] resume slot resolved", {
        found: !!_helpersLocal13,
        id: _helpersLocal13?.id || "",
        name: _helpersLocal13?.name || ""
    }), _helpersLocal13) {
        await (0, dom.uploadFiles)(_helpersLocal13, await (0, answer.fetchPdfAsBlob)(e1), t, r1, "Resume/CV");
        let _choiceMatchLocal12 = await (0, startApplicationDialog.dismissPaycomResumeParserDialog)(document, {
            activateButton: (e1)=>(0, dom.triggerEvents)(e1, [
                    "mousedown",
                    "mouseup",
                    "click"
                ])
        });
        "button-missing" === _choiceMatchLocal12 || "still-open" === _choiceMatchLocal12 || "blocked" === _choiceMatchLocal12 ? console.warn("[Paycom-v3][resume-parser-dialog] upload result", {
            result: _choiceMatchLocal12,
            action: "attach-only"
        }) : console.info("[Paycom-v3][resume-parser-dialog] upload result", {
            result: _choiceMatchLocal12,
            action: "attach-only"
        });
    }
}
async function uploadCoverLetter(e1, t, r1) {
    let _helpersLocal14 = (0, fileUpload.getPaycomFileUploadInput)("coverLetter");
    return console.info("[PaycomFileUpload] cover letter slot resolved", {
        found: !!_helpersLocal14,
        id: _helpersLocal14?.id || "",
        name: _helpersLocal14?.name || ""
    }), !!_helpersLocal14 && (await (0, dom.uploadFiles)(_helpersLocal14, await (0, answer.fetchCoverLetterPdfAsBlob)(e1), t, r1, "Cover Letter", !1), !0);
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
$RefreshReg$(_c, "C");
$RefreshReg$(_c1, "T");
$RefreshReg$(_c2, "F");
$RefreshReg$(_c3, "D");
$RefreshReg$(_c4, "P");
$RefreshReg$(_c5, "M");
$RefreshReg$(_c6, "N");
$RefreshReg$(_c7, "B");
$RefreshReg$(_c8, "V");
$RefreshReg$(_c9, "W");
$RefreshReg$(_c10, "G");

},{}]},["ezPmS","3waLR"], "3waLR", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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RUFBRyxpQkFBaUIsTUFBTSxBQUFDLENBQUEsR0FBRyxPQUFPLHlCQUF3QixFQUFHLEtBQUksR0FBRyxJQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3BKIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS01YTljNzUxYzYwZmE2NTZjLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL3BheWNvbW9ubGluZS12My9vcGVyYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXHBheWNvbW9ubGluZS12M1xcXFxvcGVyYXRpb25zLmpzXCIsXCJidW5kbGVJZFwiOlwiYmQwYjFkZTM3ODNjYzJiNVwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IGttc2o2XHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9wYXljb21vbmxpbmUtdjMvb3BlcmF0aW9ucy5qc1xyXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9maWxlLXVwbG9hZCAtPiA4cHJQbyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9wYXljb21vbmxpbmUtdjMvZmlsZS11cGxvYWQuanNcclxuICogICAuL2dlb2dyYXBoaWMtY291bnRyeSAtPiAyTG9UcSAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9wYXljb21vbmxpbmUtdjMvZ2VvZ3JhcGhpYy1jb3VudHJ5LmpzXHJcbiAqICAgLi9waG9uZS1jb3VudHJ5IC0+IDhscGxPICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3BheWNvbW9ubGluZS12My9waG9uZS1jb3VudHJ5LmpzXHJcbiAqICAgLi9zdGFydC1hcHBsaWNhdGlvbi1kaWFsb2cgLT4gZFFSUksgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvcGF5Y29tb25saW5lLXYzL3N0YXJ0LWFwcGxpY2F0aW9uLWRpYWxvZy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgZGF5anMgLT4gZm5oWHAgID0+ICBfdGlsZGVfbm9kZV9tb2R1bGVzL2RheWpzLmpzXHJcbiAqICAgfmNvbnRlbnRzL2NyYXdsZXIvdXRpbHMvY2hlY2tib3ggLT4gNU1QNnUgID0+ICBzcmMvY29udGVudHMvY3Jhd2xlci91dGlscy9jaGVja2JveC5qc1xyXG4gKiAgIH5jb250ZW50cy9jcmF3bGVyL3V0aWxzL2lucHV0IC0+IGlQSXZUICA9PiAgc3JjL2NvbnRlbnRzL2NyYXdsZXIvdXRpbHMvaW5wdXQuanNcclxuICogICB+Y29udGVudHMvY3Jhd2xlci91dGlscy9zZWxlY3QgLT4gaDIySkIgID0+ICBzcmMvY29udGVudHMvY3Jhd2xlci91dGlscy9zZWxlY3QuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24gLT4gbHVKZnMgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2ggLT4gNm1rSTQgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2guanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9kb20gLT4gaEE1UWEgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9kb20uanNcclxuICogICB+Y29yZS9kb20gLT4gaExNSlggID0+ICBzcmMvY29yZS9kb20uanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gICpcbiAqIERlb2JmdXNjYXRlZCAocHJldHR5ICsgZXhwb3J0L2ltcG9ydCByZW5hbWUpLiBQYXJjZWwgZSgpL3IgcHJlc2VydmVkLlxuICovXG5cbnZhciBoZWxwZXJzID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XG5oZWxwZXJzLmRlZmluZUludGVyb3BGbGFnKHIpLCBoZWxwZXJzLmV4cG9ydChyLCBcImZpbGxDaGVja0JveGVzRmllbGRcIiwgKCkgPT4gZG9tLmZpbGxDaGVja0JveGVzRmllbGQpLCBoZWxwZXJzLmV4cG9ydChyLCBcImZpbGxTZWxlY3RGaWVsZFwiLCAoKSA9PiBkb20uZmlsbFNlbGVjdEZpZWxkKSwgaGVscGVycy5leHBvcnQociwgXCJnZXRQYXljb21Db3ZlckxldHRlclN0YXR1c1wiLCAoKSA9PiBnZXRQYXljb21Db3ZlckxldHRlclN0YXR1cyksIGhlbHBlcnMuZXhwb3J0KHIsIFwiZmlsbElucHV0VGV4dEZpZWxkXCIsICgpID0+IGZpbGxJbnB1dFRleHRGaWVsZCksIGhlbHBlcnMuZXhwb3J0KHIsIFwiZmlsbFBheWNvbURhdGVHcm91cFwiLCAoKSA9PiBmaWxsUGF5Y29tRGF0ZUdyb3VwKSwgaGVscGVycy5leHBvcnQociwgXCJmaWxsUGF5Y29tTGlzdGJveFwiLCAoKSA9PiBmaWxsUGF5Y29tTGlzdGJveCksIGhlbHBlcnMuZXhwb3J0KHIsIFwiaXNQYXljb21QaG9uZUNvdW50cnlDb2RlQnV0dG9uXCIsICgpID0+IGlzUGF5Y29tUGhvbmVDb3VudHJ5Q29kZUJ1dHRvbiksIGhlbHBlcnMuZXhwb3J0KHIsIFwiZmlsbFBheWNvbVBob25lQ291bnRyeUNvZGVcIiwgKCkgPT4gZmlsbFBheWNvbVBob25lQ291bnRyeUNvZGUpLCBoZWxwZXJzLmV4cG9ydChyLCBcImNsaWNrQ2hlY2tib3hPdXRlcklEQnV0dG9uXCIsICgpID0+IGNsaWNrQ2hlY2tib3hPdXRlcklEQnV0dG9uKSwgaGVscGVycy5leHBvcnQociwgXCJmaWxsUGF5Y29tUmFkaW9Hcm91cFwiLCAoKSA9PiBmaWxsUGF5Y29tUmFkaW9Hcm91cCksIGhlbHBlcnMuZXhwb3J0KHIsIFwiZmlsbFBheWNvbVNlbGVjdFwiLCAoKSA9PiBmaWxsUGF5Y29tU2VsZWN0KSwgaGVscGVycy5leHBvcnQociwgXCJmaWxsUGF5Y29tR2VvZ3JhcGhpY0NvdW50cnlcIiwgKCkgPT4gZmlsbFBheWNvbUdlb2dyYXBoaWNDb3VudHJ5KSwgaGVscGVycy5leHBvcnQociwgXCJ3YWl0Rm9yRE9NU3RhYmxlXCIsICgpID0+IHdhaXRGb3JET01TdGFibGUpLCBoZWxwZXJzLmV4cG9ydChyLCBcImV4cGFuZEZvcm1cIiwgKCkgPT4gZXhwYW5kRm9ybSksIGhlbHBlcnMuZXhwb3J0KHIsIFwiZmlsbEVkdWNhdGlvblwiLCAoKSA9PiBmaWxsRWR1Y2F0aW9uKSwgaGVscGVycy5leHBvcnQociwgXCJmaWxsQWdyZWVtZW50Q2hlY2tib3hcIiwgKCkgPT4gZmlsbEFncmVlbWVudENoZWNrYm94KSwgaGVscGVycy5leHBvcnQociwgXCJ1cGxvYWRSZXN1bWVcIiwgKCkgPT4gdXBsb2FkUmVzdW1lKSwgaGVscGVycy5leHBvcnQociwgXCJ1cGxvYWRDb3ZlckxldHRlclwiLCAoKSA9PiB1cGxvYWRDb3ZlckxldHRlcik7XG52YXIgY2hvaWNlTWF0Y2ggPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvY2hvaWNlLW1hdGNoXCIpLFxuICBkYXlqcyA9IGUoXCJkYXlqc1wiKSxcbiAgYSA9IGhlbHBlcnMuaW50ZXJvcERlZmF1bHQoZGF5anMpLFxuICBjaGVja2JveCA9IGUoXCJ+Y29udGVudHMvY3Jhd2xlci91dGlscy9jaGVja2JveFwiKSxcbiAgaW5wdXQgPSBlKFwifmNvbnRlbnRzL2NyYXdsZXIvdXRpbHMvaW5wdXRcIiksXG4gIHNlbGVjdCA9IGUoXCJ+Y29udGVudHMvY3Jhd2xlci91dGlscy9zZWxlY3RcIiksXG4gIGFuc3dlciA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXJcIiksXG4gIGRvbSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9kb21cIiksXG4gIGVudW1zID0gZShcIn5jb3JlL2VudW1zXCIpLFxuICBkb20yID0gZShcIn5jb3JlL2RvbVwiKSxcbiAgY2FuY2VsbGF0aW9uID0gZShcIn5jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvblwiKSxcbiAgeHBhdGggPSBlKFwifmNvcmUveHBhdGhcIiksXG4gIGRlbGF5ID0gZShcIn51dGlscy9kZWxheVwiKSxcbiAgZ2VvZ3JhcGhpY0NvdW50cnkgPSBlKFwiLi9nZW9ncmFwaGljLWNvdW50cnlcIiksXG4gIHBob25lQ291bnRyeSA9IGUoXCIuL3Bob25lLWNvdW50cnlcIiksXG4gIGZpbGVVcGxvYWQgPSBlKFwiLi9maWxlLXVwbG9hZFwiKSxcbiAgc3RhcnRBcHBsaWNhdGlvbkRpYWxvZyA9IGUoXCIuL3N0YXJ0LWFwcGxpY2F0aW9uLWRpYWxvZ1wiKTtcbmZ1bmN0aW9uIGdldFBheWNvbUNvdmVyTGV0dGVyU3RhdHVzKCkge1xuICByZXR1cm4gKDAsIGZpbGVVcGxvYWQuZ2V0UGF5Y29tRmlsZVVwbG9hZElucHV0KShcImNvdmVyTGV0dGVyXCIpID8gXCJvcHRpb25hbFwiIDogXCJcIjtcbn1cbmFzeW5jIGZ1bmN0aW9uIGZpbGxJbnB1dFRleHRGaWVsZChlLCB0KSB7XG4gIGlmIChlKSB7XG4gICAgaWYgKFwiSUZSQU1FXCIgPT09IGUudGFnTmFtZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHIgPSBlLFxuICAgICAgICAgIF9oZWxwZXJzTG9jYWwgPSByLmNvbnRlbnREb2N1bWVudCB8fCByLmNvbnRlbnRXaW5kb3c/LmRvY3VtZW50O1xuICAgICAgICBfaGVscGVyc0xvY2FsICYmIF9oZWxwZXJzTG9jYWwuYm9keSAmJiAoYXdhaXQgKDAsIGRlbGF5LmRlbGF5KSg1MCksIHIuY29udGVudFdpbmRvdz8uZm9jdXMoKSwgX2hlbHBlcnNMb2NhbC5ib2R5LmZvY3VzKCksIF9oZWxwZXJzTG9jYWwuYm9keS5pbm5lckhUTUwgPSBcIlwiLCBcIm9uXCIgPT09IF9oZWxwZXJzTG9jYWwuZGVzaWduTW9kZSB8fCBcInRydWVcIiA9PT0gX2hlbHBlcnNMb2NhbC5ib2R5LmNvbnRlbnRFZGl0YWJsZSA/IF9oZWxwZXJzTG9jYWwuZXhlY0NvbW1hbmQoXCJpbnNlcnRUZXh0XCIsICExLCB0KSA6IF9oZWxwZXJzTG9jYWwuYm9keS5pbm5lclRleHQgPSB0LCBfaGVscGVyc0xvY2FsLmJvZHkuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgYnViYmxlczogITBcbiAgICAgICAgfSkpLCBfaGVscGVyc0xvY2FsLmJvZHkuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xuICAgICAgICAgIGJ1YmJsZXM6ICEwXG4gICAgICAgIH0pKSwgX2hlbHBlcnNMb2NhbC5ib2R5LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYmx1clwiLCB7XG4gICAgICAgICAgYnViYmxlczogITBcbiAgICAgICAgfSkpLCBhd2FpdCAoMCwgZGVsYXkuZGVsYXkpKDUwKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmlsbCBpZnJhbWUgZWRpdG9yOlwiLCBlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgKDAsIGRlbGF5LmRlbGF5KSg1MCksICgwLCBkb20udHJpZ2dlckV2ZW50cykoZSwgW1wiZm9jdXNcIiwgXCJjbGlja1wiXSksIGF3YWl0ICgwLCBkZWxheS5kZWxheSkoNTApLCBhd2FpdCAoMCwgaW5wdXQuZmlsbERlZmF1bHRJbnB1dEZpZWxkKShlLCB0KSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHtcbiAgICAgIGJ1YmJsZXM6ICEwXG4gICAgfSkpLCBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcbiAgICAgIGJ1YmJsZXM6ICEwXG4gICAgfSkpLCBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYmx1clwiLCB7XG4gICAgICBidWJibGVzOiAhMFxuICAgIH0pKSwgYXdhaXQgKDAsIGRlbGF5LmRlbGF5KSg1MCk7XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIGZpbGxQYXljb21EYXRlR3JvdXAoZSwgdCkge1xuICBsZXQgciA9IGUuJGlucHV0O1xuICBpZiAoIXIgfHwgIXQpIHJldHVybjtcbiAgbGV0IF9oZWxwZXJzTG9jYWwyID0gKDAsIGEuZGVmYXVsdCkodCk7XG4gIGlmICghX2hlbHBlcnNMb2NhbDIuaXNWYWxpZCgpKSByZXR1cm47XG4gIGxldCBfY2hvaWNlTWF0Y2hMb2NhbCA9ICgwLCB4cGF0aC5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2lucHV0IHwgLi8vc2VsZWN0XCIsIHIpLFxuICAgIF9kYXlqc0xvY2FsID0gbnVsbCxcbiAgICBfY2hlY2tib3hMb2NhbCA9IG51bGwsXG4gICAgX2lucHV0TG9jYWwgPSBudWxsLFxuICAgIF9zZWxlY3RMb2NhbCA9IChlLCB0KSA9PiB7XG4gICAgICBsZXQgciA9IChlLmdldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpIHx8IGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSB8fCBlLmdldEF0dHJpYnV0ZShcIm5hbWVcIikgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgIHJldHVybiByLmluY2x1ZGVzKHQpO1xuICAgIH07XG4gIGZvciAobGV0IGUgb2YgX2Nob2ljZU1hdGNoTG9jYWwpIF9zZWxlY3RMb2NhbChlLCBcIm1vbnRoXCIpID8gX2RheWpzTG9jYWwgPSBlIDogX3NlbGVjdExvY2FsKGUsIFwiZGF5XCIpID8gX2NoZWNrYm94TG9jYWwgPSBlIDogX3NlbGVjdExvY2FsKGUsIFwieWVhclwiKSAmJiAoX2lucHV0TG9jYWwgPSBlKTtcbiAgX2RheWpzTG9jYWwgJiYgX2NoZWNrYm94TG9jYWwgJiYgX2lucHV0TG9jYWwgfHwgKDMgPT09IF9jaG9pY2VNYXRjaExvY2FsLmxlbmd0aCA/IChfZGF5anNMb2NhbCB8fCAoX2RheWpzTG9jYWwgPSBfY2hvaWNlTWF0Y2hMb2NhbFswXSksIF9jaGVja2JveExvY2FsIHx8IChfY2hlY2tib3hMb2NhbCA9IF9jaG9pY2VNYXRjaExvY2FsWzFdKSwgX2lucHV0TG9jYWwgfHwgKF9pbnB1dExvY2FsID0gX2Nob2ljZU1hdGNoTG9jYWxbMl0pKSA6IDIgPT09IF9jaG9pY2VNYXRjaExvY2FsLmxlbmd0aCA/IChfZGF5anNMb2NhbCB8fCAoX2RheWpzTG9jYWwgPSBfY2hvaWNlTWF0Y2hMb2NhbFswXSksIF9pbnB1dExvY2FsIHx8IChfaW5wdXRMb2NhbCA9IF9jaG9pY2VNYXRjaExvY2FsWzFdKSkgOiAxICE9PSBfY2hvaWNlTWF0Y2hMb2NhbC5sZW5ndGggfHwgX2lucHV0TG9jYWwgfHwgKF9pbnB1dExvY2FsID0gX2Nob2ljZU1hdGNoTG9jYWxbMF0pKSwgX2RheWpzTG9jYWwgJiYgKGF3YWl0IEMoX2RheWpzTG9jYWwsIF9oZWxwZXJzTG9jYWwyLmZvcm1hdChcIk1NXCIpKSksIF9jaGVja2JveExvY2FsICYmIChhd2FpdCBDKF9jaGVja2JveExvY2FsLCBfaGVscGVyc0xvY2FsMi5mb3JtYXQoXCJERFwiKSkpLCBfaW5wdXRMb2NhbCAmJiAoYXdhaXQgQyhfaW5wdXRMb2NhbCwgX2hlbHBlcnNMb2NhbDIuZm9ybWF0KFwiWVlZWVwiKSkpO1xuICBsZXQgX2Fuc3dlckxvY2FsID0gKGUsIHQsIHIgPSAhMSkgPT4ge1xuICAgIGlmICghZSkgcmV0dXJuICExO1xuICAgIGxldCBfY2hvaWNlTWF0Y2hMb2NhbDIgPSBlLnZhbHVlPy50cmltKCkgfHwgXCJcIixcbiAgICAgIF9kYXlqc0xvY2FsMiA9IFwiU0VMRUNUXCIgPT09IGUudGFnTmFtZSAmJiBlLm9wdGlvbnNbZS5zZWxlY3RlZEluZGV4XT8udGV4dD8udHJpbSgpIHx8IFwiXCI7XG4gICAgcmV0dXJuIF9jaG9pY2VNYXRjaExvY2FsMiA9PT0gdCB8fCAvXlxcZCskLy50ZXN0KF9jaG9pY2VNYXRjaExvY2FsMikgJiYgTnVtYmVyKF9jaG9pY2VNYXRjaExvY2FsMikgPT09IE51bWJlcih0KSB8fCByICYmIF9kYXlqc0xvY2FsMi50b0xvd2VyQ2FzZSgpID09PSBfaGVscGVyc0xvY2FsMi5mb3JtYXQoXCJNTU1NXCIpLnRvTG93ZXJDYXNlKCk7XG4gIH07XG4gIHJldHVybiBfYW5zd2VyTG9jYWwoX2RheWpzTG9jYWwsIF9oZWxwZXJzTG9jYWwyLmZvcm1hdChcIk1NXCIpLCAhMCkgJiYgX2Fuc3dlckxvY2FsKF9pbnB1dExvY2FsLCBfaGVscGVyc0xvY2FsMi5mb3JtYXQoXCJZWVlZXCIpKSAmJiAoIV9jaGVja2JveExvY2FsIHx8IF9hbnN3ZXJMb2NhbChfY2hlY2tib3hMb2NhbCwgX2hlbHBlcnNMb2NhbDIuZm9ybWF0KFwiRERcIikpKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIEMoZSwgdCkge1xuICBpZiAoXCJTRUxFQ1RcIiA9PT0gZS50YWdOYW1lKSB7XG4gICAgbGV0IHIgPSBlLm9wdGlvbnMsXG4gICAgICBfaGVscGVyc0xvY2FsMyA9ICExO1xuICAgIGZvciAobGV0IGRheWpzID0gMDsgZGF5anMgPCByLmxlbmd0aDsgZGF5anMrKykge1xuICAgICAgbGV0IF9hTG9jYWwgPSByW2RheWpzXTtcbiAgICAgIGlmIChfYUxvY2FsLnZhbHVlID09PSB0IHx8ICgwLCBjaG9pY2VNYXRjaC5pc0V4YWN0Q2hvaWNlTWF0Y2gpKF9hTG9jYWwudGV4dCwgdCkgfHwgdC5zdGFydHNXaXRoKFwiMFwiKSAmJiBfYUxvY2FsLnZhbHVlID09PSB0LnJlcGxhY2UoL14wLywgXCJcIikpIHtcbiAgICAgICAgZS52YWx1ZSA9IF9hTG9jYWwudmFsdWUsIF9oZWxwZXJzTG9jYWwzID0gITA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBfaGVscGVyc0xvY2FsMyB8fCAoZS52YWx1ZSA9IHQpLCBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcbiAgICAgIGJ1YmJsZXM6ICEwXG4gICAgfSkpO1xuICB9IGVsc2UgYXdhaXQgKDAsIGlucHV0LmZpbGxEZWZhdWx0SW5wdXRGaWVsZCkoZSwgdCk7XG59XG5hc3luYyBmdW5jdGlvbiBmaWxsUGF5Y29tTGlzdGJveChlLCB0KSB7XG4gIGxldCByID0gZS4kaW5wdXQ7XG4gIGlmICghcikgcmV0dXJuO1xuICAoMCwgZG9tLnRyaWdnZXJFdmVudHMpKHIsIFtcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXSksIGF3YWl0ICgwLCBkZWxheS5kZWxheSkoMzAwKTtcbiAgbGV0IF9oZWxwZXJzTG9jYWw0ID0gci5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpLFxuICAgIF9jaG9pY2VNYXRjaExvY2FsMyA9IG51bGw7XG4gIGZvciAobGV0IGUgPSAwOyBlIDwgMyAmJiAoIShfY2hvaWNlTWF0Y2hMb2NhbDMgPSBfaGVscGVyc0xvY2FsNCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKF9oZWxwZXJzTG9jYWw0KSA6ICgwLCB4cGF0aC5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIvL3VsW0Byb2xlPSdsaXN0Ym94J10gfCAvL2RpdltAcm9sZT0nbGlzdGJveCddXCIpKSB8fCBudWxsID09PSBfY2hvaWNlTWF0Y2hMb2NhbDMub2Zmc2V0UGFyZW50KTsgZSsrKSBhd2FpdCAoMCwgZGVsYXkuZGVsYXkpKDIwMCk7XG4gIGlmIChfY2hvaWNlTWF0Y2hMb2NhbDMpIHtcbiAgICBsZXQgZSA9ICgwLCB4cGF0aC5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2xpW0Byb2xlPSdvcHRpb24nXSB8IC4vL2RpdltAcm9sZT0nb3B0aW9uJ11cIiwgX2Nob2ljZU1hdGNoTG9jYWwzKSxcbiAgICAgIHIgPSAoMCwgc2VsZWN0LmZpbmRNYXRjaE9wdGlvbikoZSwgdCk7XG4gICAgciAmJiAoMCwgZG9tLnRyaWdnZXJFdmVudHMpKHIsIFtcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXSk7XG4gIH1cbiAgYXdhaXQgKDAsIGRlbGF5LmRlbGF5KSgxMDApO1xufVxuZnVuY3Rpb24gaXNQYXljb21QaG9uZUNvdW50cnlDb2RlQnV0dG9uKGUpIHtcbiAgcmV0dXJuIGUgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCAmJiBcImludGVybmF0aW9uYWwtcGhvbmUtYnV0dG9uXCIgPT09IGUuZ2V0QXR0cmlidXRlKFwiZGF0YS10ZXN0aWRcIik7XG59XG5mdW5jdGlvbiBUKGUpIHtcbiAgbGV0IHQgPSBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIHIgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlKTtcbiAgcmV0dXJuIHQud2lkdGggPiAwICYmIHQuaGVpZ2h0ID4gMCAmJiBcIm5vbmVcIiAhPT0gci5kaXNwbGF5ICYmIFwiaGlkZGVuXCIgIT09IHIudmlzaWJpbGl0eTtcbn1cbmZ1bmN0aW9uIEYoKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpW2RhdGEtdGVzdGlkXj1cImNvdW50cnktbGlzdC1pdGVtLVwiXScpKS5maWx0ZXIoVCk7XG59XG5sZXQgSSA9IDJlMyxcbiAgaiA9IDUwO1xuZnVuY3Rpb24gRCgpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbZGF0YS10ZXN0aWQ9XCJzZWFyY2hzZWFyY2hpbnB1dFwiXSwgaW5wdXRbcGxhY2Vob2xkZXI9XCJTZWFyY2hcIl0nKSkuZmluZChUKSB8fCBudWxsO1xufVxuYXN5bmMgZnVuY3Rpb24gUCgpIHtcbiAgbGV0IGUgPSBEYXRlLm5vdygpICsgSTtcbiAgZm9yICg7Oykge1xuICAgIGxldCB0ID0gRCgpO1xuICAgIGlmICh0KSByZXR1cm4gdDtcbiAgICBsZXQgciA9IGUgLSBEYXRlLm5vdygpO1xuICAgIGlmIChyIDw9IDApIHJldHVybiBudWxsO1xuICAgIGF3YWl0ICgwLCBkZWxheS5kZWxheSkoTWF0aC5taW4oaiwgcikpO1xuICB9XG59XG5hc3luYyBmdW5jdGlvbiBmaWxsUGF5Y29tUGhvbmVDb3VudHJ5Q29kZShlLCB0LCByKSB7XG4gIGxldCBfaGVscGVyc0xvY2FsNSA9IGUuJGlucHV0O1xuICBpZiAoIWlzUGF5Y29tUGhvbmVDb3VudHJ5Q29kZUJ1dHRvbihfaGVscGVyc0xvY2FsNSkgfHwgIXQpIHJldHVybiAhMTtcbiAgbGV0IF9jaG9pY2VNYXRjaExvY2FsNCA9ICgwLCBwaG9uZUNvdW50cnkuZ2V0UGF5Y29tUGhvbmVDb3VudHJ5Q29kZVNlYXJjaENhbmRpZGF0ZXMpKHQsIHIpO1xuICBpZiAoMCA9PT0gX2Nob2ljZU1hdGNoTG9jYWw0Lmxlbmd0aCkgcmV0dXJuICExO1xuICBsZXQgX2RheWpzTG9jYWwzID0gKDAsIHBob25lQ291bnRyeS5nZXRQYXljb21QaG9uZUNvdW50cnlEaWFsQ29kZSkodCk7XG4gIGlmICgoMCwgcGhvbmVDb3VudHJ5LmlzUGF5Y29tUGhvbmVDb3VudHJ5U2VsZWN0aW9uTWF0Y2gpKF9oZWxwZXJzTG9jYWw1LCB0LCByKSkgcmV0dXJuICEwO1xuICAoMCwgZG9tLnRyaWdnZXJFdmVudHMpKF9oZWxwZXJzTG9jYWw1LCBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl0pO1xuICBsZXQgX2FMb2NhbDIgPSBhd2FpdCBQKCk7XG4gIGZvciAobGV0IGUgb2YgKGNvbnNvbGUuaW5mbyhcIltQYXljb20tdjNdW3Bob25lLWNvdW50cnldIG9wZW5lZCBzZWxlY3RvclwiLCB7XG4gICAgY2FuZGlkYXRlQ291bnQ6IF9jaG9pY2VNYXRjaExvY2FsNC5sZW5ndGgsXG4gICAgZGlhbENvZGU6IF9kYXlqc0xvY2FsMyxcbiAgICBzZWFyY2hSZWFkeTogISFfYUxvY2FsMlxuICB9KSwgX2Nob2ljZU1hdGNoTG9jYWw0KSkge1xuICAgIGxldCBfY2hvaWNlTWF0Y2hMb2NhbDUgPSBfYUxvY2FsMiA/IGF3YWl0IFAoKSA6IG51bGw7XG4gICAgX2Nob2ljZU1hdGNoTG9jYWw1ICYmIChhd2FpdCBmaWxsSW5wdXRUZXh0RmllbGQoX2Nob2ljZU1hdGNoTG9jYWw1LCBlKSk7XG4gICAgbGV0IF9jaGVja2JveExvY2FsMiA9IGF3YWl0ICgwLCBwaG9uZUNvdW50cnkud2FpdEZvclBheWNvbVBob25lQ291bnRyeU9wdGlvbikoe1xuICAgICAgZ2V0T3B0aW9uczogRixcbiAgICAgIHZhbHVlOiB0LFxuICAgICAgcHJvZmlsZUNvdW50cnk6IHIsXG4gICAgICB0aW1lb3V0TXM6IF9jaG9pY2VNYXRjaExvY2FsNSA/IHZvaWQgMCA6IDBcbiAgICB9KTtcbiAgICBpZiAoX2NoZWNrYm94TG9jYWwyKSB7XG4gICAgICAoMCwgZG9tLnRyaWdnZXJFdmVudHMpKF9jaGVja2JveExvY2FsMiwgW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdKSwgYXdhaXQgKDAsIGRlbGF5LmRlbGF5KSgzMDApO1xuICAgICAgbGV0IF9jaG9pY2VNYXRjaExvY2FsNiA9ICFfZGF5anNMb2NhbDMgfHwgKDAsIHBob25lQ291bnRyeS5pc1BheWNvbVBob25lQ291bnRyeVNlbGVjdGlvbk1hdGNoKShfaGVscGVyc0xvY2FsNSwgdCwgcik7XG4gICAgICByZXR1cm4gY29uc29sZS5pbmZvKFwiW1BheWNvbS12M11bcGhvbmUtY291bnRyeV0gc2VsZWN0aW9uIHJlc3VsdFwiLCB7XG4gICAgICAgIGNhbmRpZGF0ZTogZSxcbiAgICAgICAgZGlhbENvZGU6IF9kYXlqc0xvY2FsMyxcbiAgICAgICAgc2VsZWN0ZWQ6IF9jaG9pY2VNYXRjaExvY2FsNlxuICAgICAgfSksIF9jaG9pY2VNYXRjaExvY2FsNjtcbiAgICB9XG4gICAgY29uc29sZS53YXJuKFwiW1BheWNvbS12M11bcGhvbmUtY291bnRyeV0gZXhhY3Qgb3B0aW9uIG5vdCByZWFkeVwiLCB7XG4gICAgICBjYW5kaWRhdGU6IGUsXG4gICAgICBkaWFsQ29kZTogX2RheWpzTG9jYWwzLFxuICAgICAgc2VhcmNoUmVhZHk6ICEhX2Nob2ljZU1hdGNoTG9jYWw1XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuICExO1xufVxuYXN5bmMgZnVuY3Rpb24gY2xpY2tDaGVja2JveE91dGVySURCdXR0b24oZSkge1xuICBlICYmICgoMCwgZG9tLnRyaWdnZXJFdmVudHMpKGUsIFtcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXSksIGF3YWl0ICgwLCBkZWxheS5kZWxheSkoMTAwKSk7XG59XG5hc3luYyBmdW5jdGlvbiBmaWxsUGF5Y29tUmFkaW9Hcm91cChlLCB0KSB7XG4gIGxldCByID0gZS4kcmFkaW9QYXJlbnQsXG4gICAgX2hlbHBlcnNMb2NhbDYgPSAoMCwgeHBhdGguZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXCIuLy9pbnB1dFtAdHlwZT0ncmFkaW8nXVwiLCByKTtcbiAgaWYgKCFfaGVscGVyc0xvY2FsNi5sZW5ndGgpIHJldHVybjtcbiAgbGV0IF9kYXlqc0xvY2FsNCA9ICgwLCBjaG9pY2VNYXRjaC5maW5kRXhhY3RDaG9pY2UpKF9oZWxwZXJzTG9jYWw2LmZpbHRlcihlID0+ICFlLmRpc2FibGVkKSwgdCwgZSA9PiB7XG4gICAgbGV0IHQgPSAoMCwgeHBhdGguZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKGAvL2xhYmVsW0Bmb3I9JyR7ZS5pZH0nXWApO1xuICAgIHJldHVybiB0Py50ZXh0Q29udGVudCB8fCBlLnZhbHVlO1xuICB9LCBlID0+IGUudmFsdWUpO1xuICAhKCFfZGF5anNMb2NhbDQgJiYgZS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiYWNrbm93bGVkZ2VcIikpICYmIF9kYXlqc0xvY2FsNCAmJiAoYXdhaXQgKDAsIGRlbGF5LmRlbGF5KSg1MCksICgwLCBkb20udHJpZ2dlckV2ZW50cykoX2RheWpzTG9jYWw0LCBbXCJmb2N1c1wiLCBcImNsaWNrXCIsIFwiY2hhbmdlXCIsIFwiaW5wdXRcIl0pLCBhd2FpdCAoMCwgY2hlY2tib3guZmlsbENoZWNrYm94KShfZGF5anNMb2NhbDQsICEwKSwgYXdhaXQgKDAsIGRlbGF5LmRlbGF5KSg1MCkpO1xufVxuYXN5bmMgZnVuY3Rpb24gZmlsbFBheWNvbVNlbGVjdChlLCB0KSB7XG4gIGxldCByID0gZS4kaW5wdXQ7XG4gIGlmICghciB8fCAhdCkgcmV0dXJuO1xuICBhd2FpdCAoMCwgZGVsYXkuZGVsYXkpKDUwKSwgKDAsIGRvbS50cmlnZ2VyRXZlbnRzKShyLCBbXCJmb2N1c1wiLCBcImNsaWNrXCJdKSwgYXdhaXQgKDAsIGRlbGF5LmRlbGF5KSg1MCk7XG4gIGxldCBfaGVscGVyc0xvY2FsNyA9IEFycmF5LmZyb20oci5vcHRpb25zKSxcbiAgICBfY2hvaWNlTWF0Y2hMb2NhbDcgPSBudWxsO1xuICBpZiAoL15cXGQrJC8udGVzdCh0KSkge1xuICAgIGxldCBlID0gcGFyc2VJbnQodCwgMTApO1xuICAgIGUgPj0gMCAmJiBlIDwgX2hlbHBlcnNMb2NhbDcubGVuZ3RoICYmIChfY2hvaWNlTWF0Y2hMb2NhbDcgPSBfaGVscGVyc0xvY2FsN1tlXSk7XG4gIH1cbiAgaWYgKF9jaG9pY2VNYXRjaExvY2FsNyB8fCAoX2Nob2ljZU1hdGNoTG9jYWw3ID0gKDAsIHNlbGVjdC5maW5kTWF0Y2hPcHRpb24pKF9oZWxwZXJzTG9jYWw3LCB0KSksIF9jaG9pY2VNYXRjaExvY2FsNykge1xuICAgIGxldCBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHIpLFxuICAgICAgdCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgXCJ2YWx1ZVwiKS5zZXQ7XG4gICAgdCA/IHQuY2FsbChyLCBfY2hvaWNlTWF0Y2hMb2NhbDcudmFsdWUpIDogci52YWx1ZSA9IF9jaG9pY2VNYXRjaExvY2FsNy52YWx1ZSwgKDAsIGRvbS50cmlnZ2VyRXZlbnRzKShyLCBbXCJjaGFuZ2VcIiwgXCJpbnB1dFwiLCBcImJsdXJcIl0pLCBhd2FpdCAoMCwgZGVsYXkuZGVsYXkpKDUwKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IF9kYXlqc0xvY2FsNSA9IEFycmF5LmlzQXJyYXkodCkgPyB0WzBdIDogdDtcbiAgZm9yIChsZXQgZSBvZiBfaGVscGVyc0xvY2FsNykgaWYgKGUudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gX2RheWpzTG9jYWw1LnRvTG93ZXJDYXNlKCkgfHwgZS50ZXh0LnRvTG93ZXJDYXNlKCkgPT09IF9kYXlqc0xvY2FsNS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgbGV0IHQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YociksXG4gICAgICBfaGVscGVyc0xvY2FsOCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgXCJ2YWx1ZVwiKS5zZXQ7XG4gICAgX2hlbHBlcnNMb2NhbDggPyBfaGVscGVyc0xvY2FsOC5jYWxsKHIsIGUudmFsdWUpIDogci52YWx1ZSA9IGUudmFsdWUsICgwLCBkb20udHJpZ2dlckV2ZW50cykociwgW1wiY2hhbmdlXCIsIFwiaW5wdXRcIiwgXCJibHVyXCJdKSwgYXdhaXQgKDAsIGRlbGF5LmRlbGF5KSg1MCk7XG4gICAgcmV0dXJuO1xuICB9XG4gICgwLCBkb20uZmlsbFNlbGVjdEZpZWxkKShyLCBbX2RheWpzTG9jYWw1XSk7XG59XG5mdW5jdGlvbiBNKCkge1xuICBsZXQgZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uW2FyaWEtbGFiZWwqPVwiQ291bnRyeSBjb21ibyBib3hcIl0nKSkuZmlsdGVyKGdlb2dyYXBoaWNDb3VudHJ5LmlzUGF5Y29tTWFpbkdlb2dyYXBoaWNDb3VudHJ5QnV0dG9uKTtcbiAgcmV0dXJuIDEgPT09IGUubGVuZ3RoID8gZVswXSA6IG51bGw7XG59XG5mdW5jdGlvbiBOKCkge1xuICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtkYXRhLXRlc3RpZD1cInNlYXJjaHNlYXJjaGlucHV0XCJdLCBpbnB1dFtwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXScpKS5maW5kKFQpID8/IG51bGw7XG59XG5mdW5jdGlvbiAkKCkge1xuICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaVtkYXRhLXRlc3RpZF49XCJjb3VudHJ5LWxpc3QtaXRlbS1cIl0nKSkuZmlsdGVyKFQpO1xufVxuZnVuY3Rpb24gQihlKSB7XG4gICgwLCBkb20udHJpZ2dlckV2ZW50cykoZSwgW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHEoZSwgdCkge1xuICBpZiAoIXQpIHJldHVybiAhMTtcbiAgKDAsIGRvbS50cmlnZ2VyRXZlbnRzKShlLCBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl0pLCBhd2FpdCAoMCwgZGVsYXkuZGVsYXkpKDMwMCk7XG4gIGxldCByID0gTigpO1xuICBpZiAoIXIpIHJldHVybiAhMTtcbiAgYXdhaXQgZmlsbElucHV0VGV4dEZpZWxkKHIsIHQpLCBhd2FpdCAoMCwgZGVsYXkuZGVsYXkpKDMwMCk7XG4gIGxldCBfaGVscGVyc0xvY2FsOSA9ICgwLCBnZW9ncmFwaGljQ291bnRyeS5maW5kUGF5Y29tR2VvZ3JhcGhpY0NvdW50cnlPcHRpb24pKCQoKSwgdCk7XG4gIGlmICghX2hlbHBlcnNMb2NhbDkpIHJldHVybiAhMTtcbiAgKDAsIGRvbS50cmlnZ2VyRXZlbnRzKShfaGVscGVyc0xvY2FsOSwgW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdKSwgYXdhaXQgKDAsIGRlbGF5LmRlbGF5KSg0MDApO1xuICBsZXQgX2Nob2ljZU1hdGNoTG9jYWw4ID0gTSgpO1xuICByZXR1cm4gISEoX2Nob2ljZU1hdGNoTG9jYWw4ICYmICgwLCBnZW9ncmFwaGljQ291bnRyeS5pc1BheWNvbUdlb2dyYXBoaWNDb3VudHJ5U2VsZWN0aW9uTWF0Y2gpKF9jaG9pY2VNYXRjaExvY2FsOCwgdCkpO1xufVxuYXN5bmMgZnVuY3Rpb24gZmlsbFBheWNvbUdlb2dyYXBoaWNDb3VudHJ5KGUpIHtcbiAgbGV0IHQgPSAoMCwgZ2VvZ3JhcGhpY0NvdW50cnkuZm9ybWF0UGF5Y29tR2VvZ3JhcGhpY0NvdW50cnlTZWFyY2gpKGUpO1xuICBpZiAoIXQpIHJldHVybiBjb25zb2xlLmluZm8oXCJbUGF5Y29tLXYzXSBHZW9ncmFwaGljIENvdW50cnkgcHJlZmlsbCBza2lwcGVkXCIsIHtcbiAgICByZWFzb246IFwiY291bnRyeS1lbXB0eVwiXG4gIH0pLCAhMTtcbiAgbGV0IHIgPSBNKCk7XG4gIGlmICghcikgcmV0dXJuIGNvbnNvbGUud2FybihcIltQYXljb20tdjNdIEdlb2dyYXBoaWMgQ291bnRyeSBwcmVmaWxsIHNraXBwZWRcIiwge1xuICAgIHJlYXNvbjogXCJjb250cm9sLW1pc3Npbmctb3ItYW1iaWd1b3VzXCJcbiAgfSksICExO1xuICBpZiAoKDAsIGdlb2dyYXBoaWNDb3VudHJ5LmlzUGF5Y29tR2VvZ3JhcGhpY0NvdW50cnlTZWxlY3Rpb25NYXRjaCkociwgZSkpIHJldHVybiAhMDtcbiAgbGV0IF9oZWxwZXJzTG9jYWwwID0gci50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCI7XG4gICgwLCBkb20udHJpZ2dlckV2ZW50cykociwgW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdKSwgYXdhaXQgKDAsIGRlbGF5LmRlbGF5KSgzMDApO1xuICBsZXQgX2Nob2ljZU1hdGNoTG9jYWw5ID0gTigpO1xuICBpZiAoIV9jaG9pY2VNYXRjaExvY2FsOSkgcmV0dXJuIEIociksIGNvbnNvbGUud2FybihcIltQYXljb20tdjNdIEdlb2dyYXBoaWMgQ291bnRyeSBwcmVmaWxsIGZhaWxlZFwiLCB7XG4gICAgcmVhc29uOiBcInNlYXJjaC11bmF2YWlsYWJsZVwiXG4gIH0pLCAhMTtcbiAgYXdhaXQgZmlsbElucHV0VGV4dEZpZWxkKF9jaG9pY2VNYXRjaExvY2FsOSwgdCksIGF3YWl0ICgwLCBkZWxheS5kZWxheSkoMzAwKTtcbiAgbGV0IF9kYXlqc0xvY2FsNiA9ICgwLCBnZW9ncmFwaGljQ291bnRyeS5maW5kUGF5Y29tR2VvZ3JhcGhpY0NvdW50cnlPcHRpb24pKCQoKSwgZSk7XG4gIGlmICghX2RheWpzTG9jYWw2KSByZXR1cm4gQihyKSwgY29uc29sZS53YXJuKFwiW1BheWNvbS12M10gR2VvZ3JhcGhpYyBDb3VudHJ5IHByZWZpbGwgZmFpbGVkXCIsIHtcbiAgICByZWFzb246IFwib3B0aW9uLXVubWF0Y2hlZC1vci1hbWJpZ3VvdXNcIlxuICB9KSwgITE7XG4gICgwLCBkb20udHJpZ2dlckV2ZW50cykoX2RheWpzTG9jYWw2LCBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl0pLCBhd2FpdCAoMCwgZGVsYXkuZGVsYXkpKDQwMCk7XG4gIGxldCBfYUxvY2FsMyA9IE0oKSxcbiAgICBfY2hlY2tib3hMb2NhbDMgPSAhIShfYUxvY2FsMyAmJiAoMCwgZ2VvZ3JhcGhpY0NvdW50cnkuaXNQYXljb21HZW9ncmFwaGljQ291bnRyeVNlbGVjdGlvbk1hdGNoKShfYUxvY2FsMywgZSkpO1xuICBpZiAoIV9jaGVja2JveExvY2FsMykge1xuICAgIGxldCBlID0gYXdhaXQgcShfYUxvY2FsMyB8fCByLCBfaGVscGVyc0xvY2FsMCk7XG4gICAgY29uc29sZS53YXJuKFwiW1BheWNvbS12M10gR2VvZ3JhcGhpYyBDb3VudHJ5IHByZWZpbGwgZmFpbGVkXCIsIHtcbiAgICAgIHJlYXNvbjogZSA/IFwiY29tbWl0LXJlYWRiYWNrLW1pc21hdGNoLXJlc3RvcmVkXCIgOiBcImNvbW1pdC1yZWFkYmFjay1taXNtYXRjaC1yb2xsYmFjay1mYWlsZWRcIlxuICAgIH0pO1xuICB9XG4gIHJldHVybiBfY2hlY2tib3hMb2NhbDM7XG59XG5hc3luYyBmdW5jdGlvbiB3YWl0Rm9yRE9NU3RhYmxlKCkge1xuICBsZXQgZSA9IDMwLFxuICAgIHQgPSAyMDA7XG4gIGZvciAobGV0IHIgPSAwOyByIDwgZTsgcisrKSB7XG4gICAgYXdhaXQgKDAsIGRlbGF5LmRlbGF5KSh0KTtcbiAgICBsZXQgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1wbG95bWVudC1jaXR5LWZpZWxkLTFcIiksXG4gICAgICBfaGVscGVyc0xvY2FsMSA9IGUgJiYgXCJJTlBVVFwiID09PSBlLnRhZ05hbWUgJiYgXCJ0ZXh0XCIgPT09IGUudHlwZSAmJiAhZS5kaXNhYmxlZCxcbiAgICAgIF9jaG9pY2VNYXRjaExvY2FsMCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1wbG95bWVudC1zdGF0ZS1maWVsZC0xXCIpO1xuICAgIF9jaG9pY2VNYXRjaExvY2FsMCAmJiBcIlNFTEVDVFwiICE9PSBfY2hvaWNlTWF0Y2hMb2NhbDAudGFnTmFtZSAmJiAoX2Nob2ljZU1hdGNoTG9jYWwwID0gX2Nob2ljZU1hdGNoTG9jYWwwLnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIikpO1xuICAgIGxldCBfZGF5anNMb2NhbDcgPSBfY2hvaWNlTWF0Y2hMb2NhbDAgJiYgXCJTRUxFQ1RcIiA9PT0gX2Nob2ljZU1hdGNoTG9jYWwwLnRhZ05hbWUgJiYgX2Nob2ljZU1hdGNoTG9jYWwwLm9wdGlvbnMgJiYgX2Nob2ljZU1hdGNoTG9jYWwwLm9wdGlvbnMubGVuZ3RoID4gMTAgJiYgIV9jaG9pY2VNYXRjaExvY2FsMC5kaXNhYmxlZDtcbiAgICBpZiAoX2hlbHBlcnNMb2NhbDEgJiYgX2RheWpzTG9jYWw3KSByZXR1cm4gITA7XG4gICAgaWYgKCghZSB8fCAhX2Nob2ljZU1hdGNoTG9jYWwwKSAmJiByID4gMTApIHtcbiAgICAgIGxldCBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZHVjYXRpb24tY2l0eS1maWVsZC0xXCIpLFxuICAgICAgICB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZHVjYXRpb24tc3RhdGUtZmllbGQtMVwiKTtcbiAgICAgIHQgJiYgXCJTRUxFQ1RcIiAhPT0gdC50YWdOYW1lICYmICh0ID0gdC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpKTtcbiAgICAgIGxldCByID0gZSAmJiBcIklOUFVUXCIgPT09IGUudGFnTmFtZSAmJiAhZS5kaXNhYmxlZCxcbiAgICAgICAgX2hlbHBlcnNMb2NhbDEwID0gdCAmJiBcIlNFTEVDVFwiID09PSB0LnRhZ05hbWUgJiYgdC5vcHRpb25zICYmIHQub3B0aW9ucy5sZW5ndGggPiAxMCAmJiAhdC5kaXNhYmxlZDtcbiAgICAgIGlmIChyICYmIF9oZWxwZXJzTG9jYWwxMCkgcmV0dXJuICEwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gITE7XG59XG5hc3luYyBmdW5jdGlvbiBleHBhbmRGb3JtKGUpIHtcbiAgaWYgKGUuZWR1Y2F0aW9uICYmIGUuZWR1Y2F0aW9uLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgdCA9IHooKSxcbiAgICAgIHIgPSBlLmVkdWNhdGlvbi5sZW5ndGg7XG4gICAgaWYgKHIgPiB0KSBmb3IgKGxldCBlID0gMDsgZSA8IHIgLSB0OyBlKyspIGF3YWl0IFcoKSwgYXdhaXQgKDAsIGRlbGF5LmRlbGF5KSgzMDApO1xuICB9XG4gIGlmIChlLndvcmtFeHBlcmllbmNlICYmIGUud29ya0V4cGVyaWVuY2UubGVuZ3RoID4gMCkge1xuICAgIGxldCB0ID0gVigpLFxuICAgICAgciA9IGUud29ya0V4cGVyaWVuY2UubGVuZ3RoO1xuICAgIGlmIChyID4gdCkgZm9yIChsZXQgZSA9IDA7IGUgPCByIC0gdDsgZSsrKSBhd2FpdCBHKCksIGF3YWl0ICgwLCBkZWxheS5kZWxheSkoMzAwKTtcbiAgfVxuICBhd2FpdCAoMCwgZGVsYXkuZGVsYXkpKDUwMCk7XG59XG5mdW5jdGlvbiB6KCkge1xuICBsZXQgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWR1Y2F0aW9uLXNlY3Rpb25cIik7XG4gIGlmICghZSkgcmV0dXJuIDA7XG4gIGxldCB0ID0gKDAsIHhwYXRoLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vaDNbY29udGFpbnModGV4dCgpLCAnSW5zdGl0dXRpb24gIycpXVwiLCBlKTtcbiAgaWYgKDAgPT09IHQubGVuZ3RoKSB7XG4gICAgbGV0IHQgPSAoMCwgeHBhdGguZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vaW5wdXRcIiwgZSk7XG4gICAgcmV0dXJuIHQgPyAxIDogMDtcbiAgfVxuICByZXR1cm4gdC5sZW5ndGg7XG59XG5mdW5jdGlvbiBWKCkge1xuICBsZXQgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1wbG95bWVudC1zZWN0aW9uXCIpO1xuICBpZiAoIWUpIHJldHVybiAwO1xuICBsZXQgdCA9ICgwLCB4cGF0aC5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2gzW2NvbnRhaW5zKHRleHQoKSwgJ0VtcGxveWVyICMnKV1cIiwgZSk7XG4gIGlmICgwID09PSB0Lmxlbmd0aCkge1xuICAgIGxldCB0ID0gKDAsIHhwYXRoLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4vL2lucHV0XCIsIGUpO1xuICAgIHJldHVybiB0ID8gMSA6IDA7XG4gIH1cbiAgcmV0dXJuIHQubGVuZ3RoO1xufVxuYXN5bmMgZnVuY3Rpb24gVygpIHtcbiAgbGV0IGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkdWNhdGlvbi1zZWN0aW9uXCIpO1xuICBpZiAoIWUpIHJldHVybjtcbiAgbGV0IHQgPSAoMCwgeHBhdGguZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vYnV0dG9uWy4vL2g0W2NvbnRhaW5zKHRleHQoKSwgJ0FkZCBJbnN0aXR1dGlvbicpXV0gfCAuLy9idXR0b25bY29udGFpbnMoLiwgJ0FkZCBJbnN0aXR1dGlvbicpXVwiLCBlKTtcbiAgdCAmJiAoMCwgZG9tLnRyaWdnZXJFdmVudHMpKHQsIFtcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXSk7XG59XG5hc3luYyBmdW5jdGlvbiBHKCkge1xuICBsZXQgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1wbG95bWVudC1zZWN0aW9uXCIpO1xuICBpZiAoIWUpIHJldHVybjtcbiAgbGV0IHQgPSAoMCwgeHBhdGguZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vYnV0dG9uWy4vL2g0W2NvbnRhaW5zKHRleHQoKSwgJ0FkZCBFbXBsb3llcicpXV0gfCAuLy9idXR0b25bY29udGFpbnMoLiwgJ0FkZCBFbXBsb3llcicpXVwiLCBlKTtcbiAgdCAmJiAoMCwgZG9tLnRyaWdnZXJFdmVudHMpKHQsIFtcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIiwgXCJjbGlja1wiXSk7XG59XG5hc3luYyBmdW5jdGlvbiBmaWxsRWR1Y2F0aW9uKGUsIHQpIHtcbiAgaWYgKCFlLmVkdWNhdGlvbiB8fCAwID09PSBlLmVkdWNhdGlvbi5sZW5ndGgpIHJldHVybjtcbiAgbGV0IHIgPSB0ID8gKDAsIGFuc3dlci5jcmVhdGVTZWN0aW9uUmVzdWx0UmVwb3J0ZXIpKFwiZWR1Y2F0aW9uXCIsIHQpIDogdm9pZCAwO1xuICByPy5zZXRMYWJlbChcIkVkdWNhdGlvblwiKTtcbiAgbGV0IF9oZWxwZXJzTG9jYWwxMSA9IFtdO1xuICBmb3IgKGxldCB0ID0gMDsgdCA8IGUuZWR1Y2F0aW9uLmxlbmd0aDsgdCsrKSB7XG4gICAgbGV0IF9jaG9pY2VNYXRjaExvY2FsMSwgX2RheWpzTG9jYWw4O1xuICAgIGxldCBfYUxvY2FsNCA9IGUuZWR1Y2F0aW9uW3RdLFxuICAgICAgX2lucHV0TG9jYWwyID0gdCArIDEsXG4gICAgICBfc2VsZWN0TG9jYWwyID0gcj8uZW5zdXJlUm93KHQsIF9hTG9jYWw0KSxcbiAgICAgIF9hbnN3ZXJMb2NhbDIgPSBbXTtcbiAgICBfaGVscGVyc0xvY2FsMTFbdF0gPSB7XG4gICAgICB0eXBlOiBlbnVtcy5GSUVMRF9UWVBFLkVEVUNBVElPTixcbiAgICAgIGxhYmVsOiBcIkVkdWNhdGlvblwiLFxuICAgICAgY2hpbGRyZW46IF9hbnN3ZXJMb2NhbDJcbiAgICB9LCByICYmICgwLCBkb20yLnNldFNlY3Rpb25SZXN1bHRGb2N1c1J1bGVzKShcImVkdWNhdGlvblwiLCBfaGVscGVyc0xvY2FsMTEpO1xuICAgIGxldCBfZG9tTG9jYWwgPSAoZSwgdCwgX2hlbHBlcnNBcmcsIF9jaG9pY2VNYXRjaEFyZykgPT4ge1xuICAgICAgaWYgKCFyIHx8ICFfc2VsZWN0TG9jYWwyKSByZXR1cm47XG4gICAgICBsZXQgX2RheWpzTG9jYWw5ID0gX2Fuc3dlckxvY2FsMi5maW5kKHQgPT4gdC5sYWJlbCA9PT0gZSk7XG4gICAgICBfZGF5anNMb2NhbDkgPyBfZGF5anNMb2NhbDkuJGlucHV0ID0gdCA6IF9hbnN3ZXJMb2NhbDIucHVzaCh7XG4gICAgICAgIGxhYmVsOiBlLFxuICAgICAgICB0eXBlOiBlbnVtcy5GSUVMRF9UWVBFLlRFWFQsXG4gICAgICAgICRpbnB1dDogdFxuICAgICAgfSk7XG4gICAgICBsZXQgX2FMb2NhbDUgPSBTdHJpbmcoQXJyYXkuaXNBcnJheShfaGVscGVyc0FyZykgPyBfaGVscGVyc0FyZ1swXSA/PyBcIlwiIDogX2hlbHBlcnNBcmcgPz8gXCJcIikudHJpbSgpLFxuICAgICAgICBfY2hlY2tib3hMb2NhbDQgPSB0LFxuICAgICAgICBfaW5wdXRMb2NhbDMgPSB0Py50YWdOYW1lID09PSBcIlNFTEVDVFwiID8gdC5vcHRpb25zW3Quc2VsZWN0ZWRJbmRleF0gOiB2b2lkIDAsXG4gICAgICAgIF9kb21Mb2NhbDIgPSB0Py5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcInJhZGlvXCIgPyB0LmNoZWNrZWQgPyB0LnZhbHVlIDogXCJcIiA6IFN0cmluZyhfaW5wdXRMb2NhbDM/LnRleHQgfHwgX2NoZWNrYm94TG9jYWw0Py52YWx1ZSB8fCBcIlwiKS50cmltKCksXG4gICAgICAgIF9kb20yTG9jYWwgPSBfZG9tTG9jYWwyLnRvTG93ZXJDYXNlKCkgPT09IF9hTG9jYWw1LnRvTG93ZXJDYXNlKCkgfHwgX2lucHV0TG9jYWwzPy52YWx1ZSA9PT0gX2FMb2NhbDU7XG4gICAgICByLnVwZGF0ZUZpZWxkKF9zZWxlY3RMb2NhbDIsIGUsIF9kb21Mb2NhbDIgfHwgKCEwID09PSBfY2hvaWNlTWF0Y2hBcmcgPyBfYUxvY2FsNSA6IHZvaWQgMCksIHQgJiYgX2FMb2NhbDUgJiYgITEgIT09IF9jaG9pY2VNYXRjaEFyZyAmJiAoITAgPT09IF9jaG9pY2VNYXRjaEFyZyB8fCBfZG9tMkxvY2FsKSA/IFwiZmlsbGVkXCIgOiBcIm1pc3NlZFwiKSwgci5lbWl0KCk7XG4gICAgfTtcbiAgICByPy5lbWl0KCk7XG4gICAgbGV0IF9kZWxheUxvY2FsID0gYXN5bmMgKGUsIHQsIF9oZWxwZXJzQXJnMiwgX2Nob2ljZU1hdGNoQXJnMikgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBhd2FpdCBfY2hvaWNlTWF0Y2hBcmcyKCk7XG4gICAgICAgIH0gY2F0Y2ggKF9jaG9pY2VNYXRjaExvY2FsMTApIHtcbiAgICAgICAgICB0aHJvdyBfZG9tTG9jYWwoZSwgdCwgX2hlbHBlcnNBcmcyLCAhMSksIHIgJiYgX3NlbGVjdExvY2FsMiAmJiBfY2hvaWNlTWF0Y2hMb2NhbDEwIGluc3RhbmNlb2YgY2FuY2VsbGF0aW9uLlNraXBwZWRFcnJvciAmJiAoci51cGRhdGVGaWVsZChfc2VsZWN0TG9jYWwyLCBlLCBfc2VsZWN0TG9jYWwyLmZpZWxkcy5maW5kKHQgPT4gdC5sYWJlbCA9PT0gZSk/LnZhbHVlLCBcInNraXBwZWRcIiksIHIuZW1pdCgpKSwgX2Nob2ljZU1hdGNoTG9jYWwxMDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9nZW9ncmFwaGljQ291bnRyeUxvY2FsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVkdWNhdGlvbi1pbnN0aXR1dGlvbi1uYW1lLWZpZWxkLSR7X2lucHV0TG9jYWwyfWApO1xuICAgIF9nZW9ncmFwaGljQ291bnRyeUxvY2FsICYmIF9hTG9jYWw0W1wiSW5zdGl0dXRpb24gTmFtZVwiXSAmJiAoYXdhaXQgX2RlbGF5TG9jYWwoXCJJbnN0aXR1dGlvbiBOYW1lXCIsIF9nZW9ncmFwaGljQ291bnRyeUxvY2FsLCBfYUxvY2FsNFtcIkluc3RpdHV0aW9uIE5hbWVcIl0sICgpID0+IGZpbGxJbnB1dFRleHRGaWVsZChfZ2VvZ3JhcGhpY0NvdW50cnlMb2NhbCwgX2FMb2NhbDRbXCJJbnN0aXR1dGlvbiBOYW1lXCJdKSkpLCBfZG9tTG9jYWwoXCJJbnN0aXR1dGlvbiBOYW1lXCIsIF9nZW9ncmFwaGljQ291bnRyeUxvY2FsLCBfYUxvY2FsNFtcIkluc3RpdHV0aW9uIE5hbWVcIl0pO1xuICAgIGxldCBfcGhvbmVDb3VudHJ5TG9jYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZWR1Y2F0aW9uLWluc3RpdHV0aW9uLXR5cGUtZmllbGQtJHtfaW5wdXRMb2NhbDJ9YCksXG4gICAgICBfZmlsZVVwbG9hZExvY2FsID0gX2FMb2NhbDRbXCJJbnN0aXR1dGlvbiBJbmZvcm1hdGlvblwiXSB8fCBfYUxvY2FsNFtcIkluc3RpdHV0aW9uIFR5cGVcIl07XG4gICAgX3Bob25lQ291bnRyeUxvY2FsICYmIF9maWxlVXBsb2FkTG9jYWwgJiYgKF9jaG9pY2VNYXRjaExvY2FsMSA9IGF3YWl0IF9kZWxheUxvY2FsKFwiSW5zdGl0dXRpb24gVHlwZVwiLCBfcGhvbmVDb3VudHJ5TG9jYWwsIF9maWxlVXBsb2FkTG9jYWwsICgpID0+IGZpbGxQYXljb21TZWxlY3Qoe1xuICAgICAgJGlucHV0OiBfcGhvbmVDb3VudHJ5TG9jYWxcbiAgICB9LCBBcnJheS5pc0FycmF5KF9maWxlVXBsb2FkTG9jYWwpID8gX2ZpbGVVcGxvYWRMb2NhbFswXSA6IF9maWxlVXBsb2FkTG9jYWwpKSksIF9kb21Mb2NhbChcIkluc3RpdHV0aW9uIFR5cGVcIiwgX3Bob25lQ291bnRyeUxvY2FsLCBfZmlsZVVwbG9hZExvY2FsLCBfY2hvaWNlTWF0Y2hMb2NhbDEpO1xuICAgIGxldCBfc3RhcnRBcHBsaWNhdGlvbkRpYWxvZ0xvY2FsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVkdWNhdGlvbi1kZWdyZWUtZmllbGQtJHtfaW5wdXRMb2NhbDJ9YCksXG4gICAgICBfZ2V0UGF5Y29tQ292ZXJMZXR0ZXJTdGF0dXNMb2NhbCA9IF9hTG9jYWw0LkRlZ3JlZTtcbiAgICBfc3RhcnRBcHBsaWNhdGlvbkRpYWxvZ0xvY2FsICYmIF9nZXRQYXljb21Db3ZlckxldHRlclN0YXR1c0xvY2FsICYmIChfZGF5anNMb2NhbDggPSBhd2FpdCBfZGVsYXlMb2NhbChcIkRlZ3JlZVwiLCBfc3RhcnRBcHBsaWNhdGlvbkRpYWxvZ0xvY2FsLCBfZ2V0UGF5Y29tQ292ZXJMZXR0ZXJTdGF0dXNMb2NhbCwgKCkgPT4gZmlsbFBheWNvbVNlbGVjdCh7XG4gICAgICAkaW5wdXQ6IF9zdGFydEFwcGxpY2F0aW9uRGlhbG9nTG9jYWxcbiAgICB9LCBBcnJheS5pc0FycmF5KF9nZXRQYXljb21Db3ZlckxldHRlclN0YXR1c0xvY2FsKSA/IF9nZXRQYXljb21Db3ZlckxldHRlclN0YXR1c0xvY2FsWzBdIDogX2dldFBheWNvbUNvdmVyTGV0dGVyU3RhdHVzTG9jYWwpKSksIF9kb21Mb2NhbChcIkRlZ3JlZVwiLCBfc3RhcnRBcHBsaWNhdGlvbkRpYWxvZ0xvY2FsLCBfZ2V0UGF5Y29tQ292ZXJMZXR0ZXJTdGF0dXNMb2NhbCwgX2RheWpzTG9jYWw4KTtcbiAgICBsZXQgX0NMb2NhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlZHVjYXRpb24tbWFqb3ItZmllbGQtJHtfaW5wdXRMb2NhbDJ9YCksXG4gICAgICBfZmlsbFBheWNvbUxpc3Rib3hMb2NhbCA9IF9hTG9jYWw0Lk1ham9yO1xuICAgIGF3YWl0IF9kZWxheUxvY2FsKFwiTWFqb3JcIiwgX0NMb2NhbCwgX2ZpbGxQYXljb21MaXN0Ym94TG9jYWwsICgpID0+IGZpbGxJbnB1dFRleHRGaWVsZChfQ0xvY2FsLCBfZmlsbFBheWNvbUxpc3Rib3hMb2NhbCkpLCBfZG9tTG9jYWwoXCJNYWpvclwiLCBfQ0xvY2FsLCBfZmlsbFBheWNvbUxpc3Rib3hMb2NhbCk7XG4gICAgbGV0IF9pc1BheWNvbVBob25lQ291bnRyeUNvZGVCdXR0b25Mb2NhbCA9IF9hTG9jYWw0LkdyYWR1YXRlZCxcbiAgICAgIF9UTG9jYWwgPSBudWxsO1xuICAgIGlmIChfaXNQYXljb21QaG9uZUNvdW50cnlDb2RlQnV0dG9uTG9jYWwpIHtcbiAgICAgIGxldCBlID0gQXJyYXkuaXNBcnJheShfaXNQYXljb21QaG9uZUNvdW50cnlDb2RlQnV0dG9uTG9jYWwpID8gX2lzUGF5Y29tUGhvbmVDb3VudHJ5Q29kZUJ1dHRvbkxvY2FsWzBdIDogX2lzUGF5Y29tUGhvbmVDb3VudHJ5Q29kZUJ1dHRvbkxvY2FsLFxuICAgICAgICB0ID0gKDAsIHhwYXRoLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShgLy9pbnB1dFtAbmFtZT0nZWR1Y2F0aW9uLWdyYWR1YXRlZC1maWVsZC0ke19pbnB1dExvY2FsMn0nIGFuZCBAdmFsdWU9JyR7ZX0nXWApO1xuICAgICAgX1RMb2NhbCA9IHQsIHQgJiYgKGF3YWl0IF9kZWxheUxvY2FsKFwiR3JhZHVhdGVkXCIsIHQsIF9pc1BheWNvbVBob25lQ291bnRyeUNvZGVCdXR0b25Mb2NhbCwgKCkgPT4gKDAsIGNoZWNrYm94LmZpbGxDaGVja2JveCkodCwgITApKSk7XG4gICAgfVxuICAgIF9kb21Mb2NhbChcIkdyYWR1YXRlZFwiLCBfVExvY2FsLCBfaXNQYXljb21QaG9uZUNvdW50cnlDb2RlQnV0dG9uTG9jYWwpO1xuICAgIGxldCBfRkxvY2FsID0gKDAsIHhwYXRoLmdldE9yZGVyZWROb2Rlc1NhZmUpKGAvL2Rpdltjb250YWlucyhAaWQsICdlZHVjYXRpb24tJykgYW5kIGNvbnRhaW5zKEBpZCwgJy1maWVsZC0ke19pbnB1dExvY2FsMn0nKSBhbmQgQGRhdGEtZmxvYXRpbmctZXJyb3Itbm90aWNlLXR5cGU9J2RhdGUnXWAsIGRvY3VtZW50LmJvZHkpO1xuICAgIGZvciAobGV0IGUgb2YgX0ZMb2NhbCkge1xuICAgICAgbGV0IHQ7XG4gICAgICBsZXQgciA9IGUuaWQ/LnRvTG93ZXJDYXNlKCkgfHwgXCJcIixcbiAgICAgICAgX2hlbHBlcnNMb2NhbDEyID0gZS50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKSB8fCBcIlwiLFxuICAgICAgICBfY2hvaWNlTWF0Y2hMb2NhbDExID0gbnVsbDtcbiAgICAgIHIuaW5jbHVkZXMoXCJzdGFydFwiKSB8fCBfaGVscGVyc0xvY2FsMTIuaW5jbHVkZXMoXCJzdGFydFwiKSA/IF9jaG9pY2VNYXRjaExvY2FsMTEgPSBfYUxvY2FsNFtcIlN0YXJ0IERhdGVcIl0gOiAoci5pbmNsdWRlcyhcImVuZFwiKSB8fCBfaGVscGVyc0xvY2FsMTIuaW5jbHVkZXMoXCJlbmRcIikgfHwgX2hlbHBlcnNMb2NhbDEyLmluY2x1ZGVzKFwiZ3JhZHVhdGVkXCIpKSAmJiAoX2Nob2ljZU1hdGNoTG9jYWwxMSA9IF9hTG9jYWw0W1wiRW5kIERhdGVcIl0gfHwgX2FMb2NhbDRbXCJHcmFkdWF0aW9uIERhdGVcIl0pLCBfY2hvaWNlTWF0Y2hMb2NhbDExICYmICh0ID0gYXdhaXQgX2RlbGF5TG9jYWwoci5pbmNsdWRlcyhcInN0YXJ0XCIpIHx8IF9oZWxwZXJzTG9jYWwxMi5pbmNsdWRlcyhcInN0YXJ0XCIpID8gXCJTdGFydCBEYXRlXCIgOiBcIkVuZCBEYXRlXCIsIGUsIF9jaG9pY2VNYXRjaExvY2FsMTEsICgpID0+IGZpbGxQYXljb21EYXRlR3JvdXAoe1xuICAgICAgICAkaW5wdXQ6IGVcbiAgICAgIH0sIF9jaG9pY2VNYXRjaExvY2FsMTEpKSksIF9kb21Mb2NhbChyLmluY2x1ZGVzKFwic3RhcnRcIikgfHwgX2hlbHBlcnNMb2NhbDEyLmluY2x1ZGVzKFwic3RhcnRcIikgPyBcIlN0YXJ0IERhdGVcIiA6IFwiRW5kIERhdGVcIiwgZSwgX2Nob2ljZU1hdGNoTG9jYWwxMSwgdCk7XG4gICAgfVxuICB9XG59XG5hc3luYyBmdW5jdGlvbiBmaWxsQWdyZWVtZW50Q2hlY2tib3goKSB7XG4gIGxldCBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkKj1cIkNoZWNrYm94T3V0ZXJJRC1hdXRob3JpemF0aW9uLWFja25vd2xlZGdlLWRpc2Nsb3N1cmUtZmllbGRcIl0nKTtcbiAgZSAmJiAoKDAsIGRvbS50cmlnZ2VyRXZlbnRzKShlLCBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCJdKSwgYXdhaXQgKDAsIGRlbGF5LmRlbGF5KSgyMDApKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHVwbG9hZFJlc3VtZShlLCB0LCByKSB7XG4gIGxldCBfaGVscGVyc0xvY2FsMTMgPSAoMCwgZmlsZVVwbG9hZC5nZXRQYXljb21GaWxlVXBsb2FkSW5wdXQpKFwicmVzdW1lXCIpO1xuICBpZiAoY29uc29sZS5pbmZvKFwiW1BheWNvbUZpbGVVcGxvYWRdIHJlc3VtZSBzbG90IHJlc29sdmVkXCIsIHtcbiAgICBmb3VuZDogISFfaGVscGVyc0xvY2FsMTMsXG4gICAgaWQ6IF9oZWxwZXJzTG9jYWwxMz8uaWQgfHwgXCJcIixcbiAgICBuYW1lOiBfaGVscGVyc0xvY2FsMTM/Lm5hbWUgfHwgXCJcIlxuICB9KSwgX2hlbHBlcnNMb2NhbDEzKSB7XG4gICAgYXdhaXQgKDAsIGRvbS51cGxvYWRGaWxlcykoX2hlbHBlcnNMb2NhbDEzLCBhd2FpdCAoMCwgYW5zd2VyLmZldGNoUGRmQXNCbG9iKShlKSwgdCwgciwgXCJSZXN1bWUvQ1ZcIik7XG4gICAgbGV0IF9jaG9pY2VNYXRjaExvY2FsMTIgPSBhd2FpdCAoMCwgc3RhcnRBcHBsaWNhdGlvbkRpYWxvZy5kaXNtaXNzUGF5Y29tUmVzdW1lUGFyc2VyRGlhbG9nKShkb2N1bWVudCwge1xuICAgICAgYWN0aXZhdGVCdXR0b246IGUgPT4gKDAsIGRvbS50cmlnZ2VyRXZlbnRzKShlLCBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl0pXG4gICAgfSk7XG4gICAgXCJidXR0b24tbWlzc2luZ1wiID09PSBfY2hvaWNlTWF0Y2hMb2NhbDEyIHx8IFwic3RpbGwtb3BlblwiID09PSBfY2hvaWNlTWF0Y2hMb2NhbDEyIHx8IFwiYmxvY2tlZFwiID09PSBfY2hvaWNlTWF0Y2hMb2NhbDEyID8gY29uc29sZS53YXJuKFwiW1BheWNvbS12M11bcmVzdW1lLXBhcnNlci1kaWFsb2ddIHVwbG9hZCByZXN1bHRcIiwge1xuICAgICAgcmVzdWx0OiBfY2hvaWNlTWF0Y2hMb2NhbDEyLFxuICAgICAgYWN0aW9uOiBcImF0dGFjaC1vbmx5XCJcbiAgICB9KSA6IGNvbnNvbGUuaW5mbyhcIltQYXljb20tdjNdW3Jlc3VtZS1wYXJzZXItZGlhbG9nXSB1cGxvYWQgcmVzdWx0XCIsIHtcbiAgICAgIHJlc3VsdDogX2Nob2ljZU1hdGNoTG9jYWwxMixcbiAgICAgIGFjdGlvbjogXCJhdHRhY2gtb25seVwiXG4gICAgfSk7XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIHVwbG9hZENvdmVyTGV0dGVyKGUsIHQsIHIpIHtcbiAgbGV0IF9oZWxwZXJzTG9jYWwxNCA9ICgwLCBmaWxlVXBsb2FkLmdldFBheWNvbUZpbGVVcGxvYWRJbnB1dCkoXCJjb3ZlckxldHRlclwiKTtcbiAgcmV0dXJuIGNvbnNvbGUuaW5mbyhcIltQYXljb21GaWxlVXBsb2FkXSBjb3ZlciBsZXR0ZXIgc2xvdCByZXNvbHZlZFwiLCB7XG4gICAgZm91bmQ6ICEhX2hlbHBlcnNMb2NhbDE0LFxuICAgIGlkOiBfaGVscGVyc0xvY2FsMTQ/LmlkIHx8IFwiXCIsXG4gICAgbmFtZTogX2hlbHBlcnNMb2NhbDE0Py5uYW1lIHx8IFwiXCJcbiAgfSksICEhX2hlbHBlcnNMb2NhbDE0ICYmIChhd2FpdCAoMCwgZG9tLnVwbG9hZEZpbGVzKShfaGVscGVyc0xvY2FsMTQsIGF3YWl0ICgwLCBhbnN3ZXIuZmV0Y2hDb3ZlckxldHRlclBkZkFzQmxvYikoZSksIHQsIHIsIFwiQ292ZXIgTGV0dGVyXCIsICExKSwgITApO1xufVxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6Im9wZXJhdGlvbnMuNzgzY2MyYjUuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);