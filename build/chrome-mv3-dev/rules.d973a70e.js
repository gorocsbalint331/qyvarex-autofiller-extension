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
})({"6Fwwu":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\oraclecloud\\rules.js",
    "bundleId": "02e2c2f2d973a70e",
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
var j = z(require("928c9283a9ce9f0c"));
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

},{"928c9283a9ce9f0c":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"7sbmR":[function(require,module,exports) {
/**
 * Parcel module id: j2pat
 * Resolved path: src/contents/sites/oraclecloud/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   lodash-es -> p4RBe  =>  lodash-es.js
 *   ~constants -> 6VEjR  =>  src/constants.js
 *   ~contents/sites/oraclecloud/answer -> 9Ki4d  =>  src/contents/sites/oraclecloud/answer.js
 *   ~contents/sites/oraclecloud/operations -> gduo7  =>  src/contents/sites/oraclecloud/operations.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "isOracleEmploymentSectionHeader", ()=>L), n.export(r, "isOracleSkillsRule", ()=>B), n.export(r, "isOracleLanguagesRule", ()=>q), n.export(r, "getRules", ()=>V), n.export(r, "getSubmitButtonText", ()=>J), n.export(r, "getFormSnapshot", ()=>ea), n.export(r, "getSectionRowSnapshot", ()=>el), n.export(r, "addAndGetEduRules", ()=>es), n.export(r, "addAndGetWorkRules", ()=>eu);
var o = e("lodash-es"), i = e("~constants"), a = e("~contents/sites/oraclecloud/answer"), l = e("~contents/sites/oraclecloud/operations"), s = e("~core/enums"), u = e("~core/xpath"), c = e("~utils/delay");
let d = ".//div[contains(@class, 'input-row--radiogroup')]", f = ".//input[not(@type='submit') and not(@type='hidden') and not(ancestor::*[contains(@class, 'input-row--radiogroup')]) and not(ancestor::*[contains(@class, 'quick-apply-flow-datepicker-row')]) and not(ancestor::*[contains(@class, 'datepicker-row')])  and not(contains(@class, 'oj-component-initnode'))]", p = ".//textarea[not(contains(@class, 'input-row__control--helper'))]", m = ".//select", h = ".//ul[(@role='list' or @role='radiogroup') and contains(@class, 'cx-select-pills-container')]", g = ".//div[contains(@class, 'quick-apply-flow-datepicker-row')] | .//div[contains(@class, 'datepicker-row')]", b = `${g} | ${d} | ${f} | ${p} | ${m} | ${h}`, y = "__oracleCloudSkillsRule", v = "__oracleCloudLanguagesRule", w = "Phone Country Code", S = "Return only the phone number without the country calling code. Do not include the phone country code because it is provided separately.", E = 24, x = 250, C = [
    "High School",
    "None",
    "GED",
    "Associate",
    "Master",
    "Bachelor",
    "Doctor",
    "J.D.",
    "Other",
    "Trade"
];
function A(e1) {
    return "string" == typeof e1 ? e1.replace(/\s+/g, " ").trim() : "";
}
_c = A;
function k() {
    if ("undefined" == typeof window) return !1;
    try {
        let e1 = "jobright_oraclecloud_combobox_debug";
        return "1" === new URLSearchParams(window.location?.search ?? "").get(e1) || window.localStorage?.getItem(e1) === "1";
    } catch  {
        return !1;
    }
}
function T(e1) {
    return e1.className.includes("cx-select-pills-container");
}
_c1 = T;
function F(e1) {
    let t = e1.checkVisibility();
    return !!t || !!T(e1) && (k() && console.debug("[OracleCloud][Rules] pills-visibility-bypass", {
        tagName: e1.tagName,
        role: e1.getAttribute("role")
    }), !0);
}
_c2 = F;
function I(e1, t, r1, n, o) {
    k() && console.debug("[OracleCloud][Rules] static-combobox-options", {
        label: t,
        id: e1.id,
        name: e1.getAttribute("name"),
        probed: n,
        skipReason: o,
        optionCount: r1.length,
        included: r1.length > 0
    });
}
_c3 = I;
function j(e1, t, r1) {
    k() && console.debug("[OracleCloud][Rules] degree-options", {
        id: e1.id,
        name: e1.getAttribute("name"),
        source: t,
        optionCount: r1.length
    });
}
function D(e1) {
    if ("true" === e1.getAttribute("aria-expanded") || "undefined" == typeof document || "function" != typeof document.getElementById) return "expanded-or-unavailable";
    if ("true" === e1.getAttribute("aria-invalid")) return "invalid-search";
    let t = e1.className || "";
    if (t.includes("cx-select-input--auto-suggest") || t.includes("oj-searchselect-input")) return "remote-search-class";
    let r1 = e1.closest?.("[data-bind]"), n = r1?.getAttribute("data-bind") || "";
    if (/\b(?:searchCriteria|isAutoSuggest|getOptions)\b/.test(n)) return "remote-search-binding";
    let o = document.getElementById(`${e1.id}-toggle-button`);
    return o ? "true" === o.getAttribute("aria-expanded") ? "expanded-toggle" : null : "missing-toggle";
}
_c4 = D;
function P(e1) {
    let t = A(e1).replace(/[.\u3002]+$/g, "").toLowerCase();
    return "select the races you identify with" === t;
}
_c5 = P;
function _(e1) {
    return "ethnicity" === A(e1).toLowerCase();
}
function L(e1) {
    let t = A(e1).toLowerCase();
    return !(!t || /\bcriminal\s+history\b/.test(t)) && (/\bcurrent\s+employment\b/.test(t) || "experience" === t || "employment" === t || /\bwork\s+and\s+education\s+history\b/.test(t) || /\b(?:professional|work|employment)\s+(?:experience|history)\b/.test(t));
}
_c6 = L;
function R(e1) {
    let t = A(e1).toLowerCase();
    return /\blanguages?\b/.test(t);
}
_c7 = R;
function O(e1) {
    let t = A(e1).toLowerCase();
    return /\bskills?\b/.test(t) && !R(t);
}
_c8 = O;
function M(e1) {
    return (0, u.getOrderedNodes)(".//label[contains(@class, 'apply-flow-input-checkbox') or contains(@class, 'apply-flow-input-radio')]", e1);
}
_c9 = M;
function N(e1, t) {
    let r1 = (0, u.getOrderedNodes)(".//input[@type='checkbox' or @type='radio']", e1);
    if (r1.length === t.length) return r1;
    let n = t.map((e1)=>{
        let t = e1.getAttribute("for");
        if (t && "undefined" != typeof document) {
            let e1 = document.getElementById(t);
            if (e1) return e1;
        }
        return (0, u.getFirstOrderedNode)(".//input[@type='checkbox' or @type='radio']", e1);
    }).filter((e1)=>!!e1);
    return n.length > 0 ? n : r1;
}
_c10 = N;
function $(e1) {
    return e1.map((e1)=>A(e1.textContent)).filter(Boolean);
}
function B(e1) {
    return !!e1?.[y];
}
_c11 = B;
function q(e1) {
    return !!e1?.[v];
}
function U(e1, t) {
    return (0, u.getFirstOrderedNode)(`.//button[contains(@class, 'apply-flow-profile-item-tile__new-tile') and contains(translate(normalize-space(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'add ${t}')]`, e1);
}
_c12 = U;
function H(e1) {
    let t = (0, u.getOrderedNodes)(".//button[contains(@class, 'skill__recommendation-button')]", e1), r1 = [];
    for (let e1 of t){
        let t = A(e1.textContent);
        t && !r1.includes(t) && r1.push(t);
    }
    return r1;
}
_c13 = H;
function Y(e1, t) {
    let r1 = U(e1, "skill");
    return {
        type: s.FIELD_TYPE.LISTBOX,
        label: "Skills",
        required: !0,
        $label: t || e1,
        $input: e1,
        $skillSection: e1,
        $skillAddButton: r1,
        options: H(e1),
        [y]: !0
    };
}
_c14 = Y;
function z(e1, t) {
    let r1 = U(e1, "language");
    return {
        type: s.FIELD_TYPE.LISTBOX,
        label: "Languages",
        required: !1,
        $label: t || e1,
        $input: e1,
        $languageSection: e1,
        $languageAddButton: r1,
        options: [],
        [v]: !0
    };
}
async function V() {
    let e1 = (0, u.getOrderedNodes)("//apply-flow-block | .//section[contains(@class, 'email-verification')]", document), t = Array.from(e1).filter((e1)=>{
        let t = e1.getBoundingClientRect(), r1 = window.getComputedStyle(e1);
        return t.width > 0 && t.height > 0 && "none" !== r1.display && "hidden" !== r1.visibility && "0" !== r1.opacity;
    }), r1 = [];
    for (let e1 of t){
        if (e1.matches?.("section[class*='email-verification']")) {
            let t = (0, u.getOrderedNodes)(b, e1), n = [];
            for (let e1 of t){
                let t = await W(e1);
                t && n.push(t);
            }
            console.info("[OracleCloud][Rules] email-section", {
                inputCount: t.length,
                ruleCount: n.length,
                types: n.map((e1)=>e1.type)
            }), r1.push(...n);
            continue;
        }
        let t = (0, u.getFirstOrderedNode)(".//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h3 | .//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h2", e1), n = (0, u.getFirstOrderedNode)(".//*[contains(@class, 'apply-flow-agreements__row')]", e1), i = t?.textContent?.trim();
        if ((0, o.isEmpty)(i) && !n) continue;
        let a = (0, u.getFirstOrderedNode)(".//div[contains(@class, 'apply-flow-block--work-and-education-timeline')]", e1);
        if (a) {
            let e1 = await eu(!0);
            r1.push(e1);
            let t = await es(!0);
            t && r1.push(t);
            continue;
        }
        if (/education/i.test(i)) {
            let e1 = await es(!0);
            e1 && r1.push(e1);
            continue;
        }
        if (L(i)) {
            let e1 = await eu(!0);
            r1.push(e1);
            continue;
        }
        if (R(i)) {
            r1.push(z(e1, t));
            continue;
        }
        if (O(i)) {
            r1.push(Y(e1, t));
            continue;
        } else {
            let t = (0, u.getOrderedNodes)(b, e1);
            for (let e1 of t){
                let t = await W(e1);
                t && r1.push(t);
            }
        }
    }
    let n = r1.filter((e1, t, r1)=>e1.label && t === r1.findIndex((t)=>t.label === e1.label)), i = n.some((e1)=>e1.label === w);
    return n.map((e1)=>i && e1.type === s.FIELD_TYPE.TEXT && "phone number" === A(e1.label).replace(/\*/g, "").toLowerCase() ? {
            ...e1,
            description: S
        } : e1);
}
_c15 = V;
async function W(e1) {
    let t;
    let r1 = (0, u.getFirstOrderedNode)('./ancestor-or-self::div[contains(@class, "input-row")]', e1), n = (0, u.getFirstOrderedNode)(`.//label[contains(@class, "input-row__label")]//span[contains(@class, "input-row__linebreak")] |
       .//label[contains(@class, "input-row__label")]//span[contains(@class, "input-row__label-text")] |
       .//label[contains(@class, "apply-flow-input-checkbox")]//span[contains(@class, "apply-flow-input-checkbox__label")]`, r1), l = (0, u.getFirstOrderedNode)('./ancestor::div[contains(@class, "cx-select-container")]', e1), c = l ? (0, u.getFirstOrderedNode)('.//span[contains(@class, "input-field__label")]', l) : null, d = (0, u.getFirstOrderedNode)(`./form-element-label/label/span[contains(@class, "input-row__label--required-star")] |
       .//span[contains(@class, "cx-select__label--required")]`, r1);
    if (!F(e1)) return null;
    let f = (0, a.isOraclePhoneCountryCodeField)(e1.id || e1.getAttribute("id") || e1.getAttribute("name")) || "country code" === A(c?.textContent).toLowerCase();
    if (f) return {
        type: s.FIELD_TYPE.SELECT,
        label: w,
        required: !!d,
        $input: e1,
        $label: c || n || e1,
        options: await ec(e1, !0)
    };
    if (!n) return null;
    let p = n?.textContent?.replace(/[\n\r*]/g, "").trim();
    if (c && c?.textContent?.trim() === "Country code") return null;
    if (T(e1) && (t = s.FIELD_TYPE.LISTBOX), "TEXTAREA" === e1.tagName && (t = s.FIELD_TYPE.TEXT), "INPUT" === e1.tagName) {
        if ("file" === e1.getAttribute("type")) return null;
        t = [
            "checkbox",
            "radio"
        ].includes(e1.getAttribute("type")) ? s.FIELD_TYPE.CHECKBOX : s.FIELD_TYPE.TEXT;
    }
    ("combobox" === e1.getAttribute("role") || e1.className.includes("cx-select-input") || e1.className.includes("oj-searchselect-input")) && (t = s.FIELD_TYPE.SELECT), e1.className.includes("input-row--radiogroup") && (t = s.FIELD_TYPE.RADIOGROUP), e1.className.includes("datepicker-row") && (t = s.FIELD_TYPE.DATE);
    let m = (0, u.getFirstOrderedNode)(`./following-sibling::label[contains(@class, "apply-flow-input-checkbox")] |
      ./following-sibling::span[contains(@class, "apply-flow-input-checkbox")]`, e1);
    if (m?.textContent?.trim()) {
        let e1 = m.textContent.trim();
        _(p || "") || (p = e1);
    }
    if ((0, o.isEmpty)(p)) return null;
    if (t == s.FIELD_TYPE.DATE) return {
        type: s.FIELD_TYPE.DATE,
        label: p,
        required: !!d || (0, a.isOracleLinkRule)({
            label: p
        }),
        $input: e1,
        $label: n,
        description: "Month / Day / Year"
    };
    if (t == s.FIELD_TYPE.RADIOGROUP) {
        let t = M(e1), r1 = $(t);
        return P(p) ? {
            type: s.FIELD_TYPE.CHECKBOX,
            label: p,
            required: !!d || (0, a.isOracleLinkRule)({
                label: p
            }),
            $input: e1,
            $label: n,
            $checkboxs: N(e1, t),
            options: r1
        } : {
            type: s.FIELD_TYPE.RADIOGROUP,
            label: p,
            required: !!d || (0, a.isOracleLinkRule)({
                label: p
            }),
            $input: e1,
            $label: n,
            options: r1
        };
    }
    if (t == s.FIELD_TYPE.CHECKBOX) {
        let t = m?.textContent?.replace(/[\n\r*]/g, "").trim() || p;
        return {
            type: s.FIELD_TYPE.CHECKBOX,
            label: p,
            required: !!d || (0, a.isOracleLinkRule)({
                label: p
            }),
            $checkboxs: [
                e1
            ],
            $input: e1,
            $label: n,
            options: t ? [
                t
            ] : []
        };
    }
    if (t === s.FIELD_TYPE.TEXT) return {
        type: s.FIELD_TYPE.TEXT,
        label: p,
        required: !!d || (0, a.isOracleLinkRule)({
            label: p
        }),
        $input: e1,
        $label: n
    };
    if (t == s.FIELD_TYPE.SELECT) {
        let t;
        if (("US-STANDARD-ORA_GENDER-STANDARD" == e1.getAttribute("name") || "US-STANDARD-ORA_VETERAN_STATUS-STANDARD" == e1.getAttribute("name")) && (t = await ec(e1)), void 0 === t && "combobox" === e1.getAttribute("role")) {
            let r1 = e1, n = D(r1), o = null === n, i = o ? await ec(r1, !1, 1, !0) : [];
            I(r1, p, i, o, n), i.length > 0 && (t = i);
        }
        if ("Degree" === p) {
            let r1 = t?.length ? t : C;
            t = r1, j(e1, r1 === C ? "fallback" : "live-menu", r1);
        }
        return {
            type: s.FIELD_TYPE.SELECT,
            label: p,
            required: !!d || (0, a.isOracleLinkRule)({
                label: p
            }),
            $input: e1,
            $label: n,
            options: t
        };
    }
    if ("SELECT" === e1.tagName) {
        let t = (0, u.getOrderedNodes)('./following-sibling::div[contains(@class, "dropdown-container")]//ul[@role="listbox"]/li', e1);
        0 === t.length && (t = (0, u.getOrderedNodes)("./option", e1));
        let r1 = t.reduce((e1, t)=>{
            let r1 = t.textContent?.trim();
            return (0, o.isEmpty)(r1) || "\u2014 Make a Selection \u2014" === r1 || "No Results" === r1 || e1.push(r1), e1;
        }, []);
        return "State/Province" === p && 0 === r1.length && (r1 = Object.values(i.STATE_MAP)), {
            type: s.FIELD_TYPE.SELECT,
            label: p,
            required: !!d || (0, a.isOracleLinkRule)({
                label: p
            }),
            $label: n,
            $input: e1,
            options: r1
        };
    }
    if (t === s.FIELD_TYPE.LISTBOX) {
        let t = e1.querySelectorAll(".cx-select-pill-name"), r1 = [];
        return t.forEach((e1, t)=>{
            r1.push(e1.textContent?.trim());
        }, []), {
            type: s.FIELD_TYPE.LISTBOX,
            label: p,
            required: !!d || (0, a.isOracleLinkRule)({
                label: p
            }),
            $label: n,
            $input: e1,
            options: r1
        };
    }
    return null;
}
_c16 = W;
async function G(e1, t, r1) {
    let n = (0, u.getOrderedNodes)(b, e1), o = [];
    if (n && n.length > 0) for (let e1 of n)try {
        let t = await W(e1);
        t && 0 > o.findIndex((e1)=>e1.label === t.label) && o.push(t);
    } catch (e1) {
        console.error("Error extracting input:", e1);
    }
    else console.warn(`No input elements found for ${r1} section`);
    return {
        type: t,
        label: r1,
        required: !0,
        children: o,
        options: [
            ...o.map((e1)=>({
                    type: e1.type,
                    label: e1.label,
                    options: e1.options
                }))
        ]
    };
}
_c17 = G;
function K(e1) {
    let t = new Set((e1.children || []).map((e1)=>A(e1.label).toLowerCase()));
    return t.has("employer name") && t.has("job title");
}
_c18 = K;
function X(e1) {
    let t = new Set((e1.children || []).map((e1)=>A(e1.label).toLowerCase())), r1 = [
        "school",
        "school name",
        "school or university",
        "university",
        "university name",
        "institution",
        "educator",
        "college",
        "educational establishment"
    ], n = [
        "degree",
        "degree type",
        "education level",
        "highest degree",
        "accreditation",
        "major",
        "major or area of concentration",
        "field of study",
        "study",
        "discipline"
    ];
    return r1.some((e1)=>t.has(e1)) && n.some((e1)=>t.has(e1));
}
_c19 = X;
function J() {
    let e1 = (0, u.getFirstOrderedNode)('//button[@data-automation-id="pageFooterNextButton"] | //button[@data-automation-id="bottom-navigation-next-button"]'), t = e1 ? e1.textContent?.trim() : "";
    return t;
}
_c20 = J;
function Q(e1) {
    return "string" == typeof e1 ? e1.replace(/\s+/g, " ").trim() : "";
}
_c21 = Q;
function Z(e1) {
    if (!e1) return "";
    if (e1.selectedOptions?.length) {
        let t = Q(e1.selectedOptions[0]?.textContent);
        if (t) return t;
    }
    let t = Q(e1.value);
    if (t) return t;
    let r1 = Q(e1.getAttribute?.("aria-valuetext") || e1.getAttribute?.("aria-label"));
    return r1 || Q(e1.textContent);
}
_c22 = Z;
function ee(e1) {
    return e1?.checked === !0 || e1?.getAttribute?.("aria-checked") === "true" || e1?.classList?.contains?.("oj-selected") === !0;
}
function et(e1) {
    let t = e1.$checkboxs || [
        e1.$input
    ], r1 = e1.options || [], n = t.map((e1, t)=>ee(e1) ? Q(r1[t]) || Q(e1.closest?.("label")?.textContent) || Z(e1) : "").filter(Boolean);
    return n.length > 0 ? n.join(", ") : "No";
}
function er(e1) {
    let t = e1.$radioParent || e1.$input, r1 = Array.from(t?.querySelectorAll?.('input[type="radio"]') || []), n = e1.options || [], o = r1.findIndex(ee);
    return o >= 0 ? Q(n[o]) || Q(r1[o].closest?.("label")?.textContent) || Z(r1[o]) : ee(e1.$input) ? Z(e1.$input) : "";
}
function en(e1) {
    let t = Array.from(e1.$input?.querySelectorAll?.(".cx-select-pill-name") || []), r1 = t.map((e1)=>Q(e1.textContent)).filter(Boolean).join(", ");
    return r1 || Z(e1.$input);
}
function eo(e1) {
    let t = Array.from(e1.$input?.querySelectorAll?.("input, select") || []), r1 = t.map(Z).filter(Boolean);
    return r1.length > 0 ? r1.join(" / ") : Z(e1.$input);
}
function ei(e1) {
    return e1.type === s.FIELD_TYPE.CHECKBOX ? et(e1) : e1.type === s.FIELD_TYPE.RADIOGROUP ? er(e1) : e1.type === s.FIELD_TYPE.LISTBOX ? en(e1) : e1.type === s.FIELD_TYPE.DATE ? eo(e1) : Z(e1.$input);
}
function ea(e1 = []) {
    let t = {};
    for (let r1 of e1)r1?.label && r1.type !== s.FIELD_TYPE.EDUCATION && r1.type !== s.FIELD_TYPE.EMPLOYMENT && (t[r1.label] = ei(r1));
    return t;
}
function el(e1) {
    let t = {};
    for (let r1 of e1?.children || [])r1?.label && (t[r1.label] = ei(r1));
    return t;
}
async function es(e1 = !1) {
    await (0, l.addEducation)();
    let t = null;
    for(let e1 = 0; e1 < E; e1++){
        let r1 = (0, u.getOrderedNodes)("//apply-flow-block | .//section[contains(@class, 'email-verification')]", document), n = null, i = Array.from(r1).filter((e1)=>{
            let t = e1.getBoundingClientRect(), r1 = window.getComputedStyle(e1);
            return t.width > 0 && t.height > 0 && "none" !== r1.display && "hidden" !== r1.visibility && "0" !== r1.opacity;
        });
        for (let e1 of i){
            let t = (0, u.getFirstOrderedNode)(".//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h3 | .//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h2 | .//quick-email-verification-form", e1), r1 = (0, u.getFirstOrderedNode)(".//*[contains(@class, 'apply-flow-agreements__row')]", e1), i = t?.textContent?.trim();
            (!(0, o.isEmpty)(i) || r1) && /education/i.test(i) && (n = e1);
        }
        if (X(t = await G(n, s.FIELD_TYPE.EDUCATION, "Education"))) break;
        e1 < E - 1 && await (0, c.delay)(x);
    }
    let r1 = !!t && X(t);
    if (console.info("[OracleCloud][Education] identity-check", JSON.stringify({
        autoClose: e1,
        ready: r1,
        fieldLabels: t?.children?.map((e1)=>e1.label) || []
    })), r1 || console.warn("[OracleCloud][Education] timeline rules not ready", {
        autoClose: e1
    }), e1) {
        let e1 = await (0, l.cancelEducation)();
        if (!e1) throw Error("OracleCloud Education dialog did not close");
    }
    return r1 ? t : null;
}
async function eu(e1 = !1) {
    await (0, l.addExperience)();
    let t = null;
    for(let e1 = 0; e1 < E; e1++){
        let r1 = (0, u.getOrderedNodes)("//apply-flow-block | .//section[contains(@class, 'email-verification')]", document), n = null, i = Array.from(r1).filter((e1)=>{
            let t = e1.getBoundingClientRect(), r1 = window.getComputedStyle(e1);
            return t.width > 0 && t.height > 0 && "none" !== r1.display && "hidden" !== r1.visibility && "0" !== r1.opacity;
        });
        for (let e1 of i){
            let t = (0, u.getFirstOrderedNode)(".//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h3 | .//*[contains(@class, 'apply-flow-block__header')]/apply-flow-block-title/h2 | .//quick-email-verification-form", e1), r1 = (0, u.getFirstOrderedNode)(".//*[contains(@class, 'apply-flow-agreements__row')]", e1), i = t?.textContent?.trim();
            (!(0, o.isEmpty)(i) || r1) && L(i) && (n = e1);
        }
        if (K(t = await G(n, s.FIELD_TYPE.EMPLOYMENT, "Experience"))) break;
        e1 < E - 1 && await (0, c.delay)(x);
    }
    return e1 && await (0, l.cancelExperience)(), t || {
        type: s.FIELD_TYPE.EMPLOYMENT,
        label: "Experience",
        required: !0,
        children: [],
        options: []
    };
}
async function ec(e1, t = !1, r1 = 10, n = !1) {
    if ("undefined" == typeof document || "function" != typeof document.getElementById) return [];
    let o = document.getElementById(`${e1.id}-toggle-button`);
    if (!o) return [];
    let i = "true" === e1.getAttribute("aria-expanded") || "true" === o.getAttribute("aria-expanded");
    if (n && (i || "true" === e1.getAttribute("aria-invalid"))) return [];
    i || (o.click(), await new Promise((e1)=>setTimeout(e1, n ? 50 : 350)));
    try {
        let i = e1.getAttribute("aria-controls") || o.getAttribute("aria-controls");
        if (!i) return [];
        let a = [
            "[role='gridcell']",
            "[role='option']",
            "[role='listitem']",
            "li"
        ], l = new Set, s = (e1)=>{
            for (let t of a){
                let r1 = e1.querySelectorAll(t);
                if (0 !== r1.length) {
                    for (let e1 of r1){
                        let t = A(e1.textContent);
                        t && "No Results" !== t && "\u2014 Make a Selection \u2014" !== t && l.add(t);
                    }
                    break;
                }
            }
        }, u = null;
        for(let e1 = 0; e1 < r1 && ((u = document.getElementById(i)) && "true" !== u.getAttribute("aria-busy") && s(u), !(l.size > 0)); e1++)e1 + 1 < r1 && await (0, c.delay)(n ? 50 : 100);
        if (t && u && l.size < 200) for (let e1 of ed(u)){
            let t = e1.scrollTop, r1 = Math.max(0, e1.scrollHeight - e1.clientHeight), n = Math.max(100, Math.floor(.8 * e1.clientHeight));
            for(let t = 0; t <= r1; t += n)e1.scrollTop = Math.min(t, r1), e1.dispatchEvent(new Event("scroll", {
                bubbles: !0
            })), await (0, c.delay)(100), s(u);
            r1 > 0 && e1.scrollTop !== r1 && (e1.scrollTop = r1, e1.dispatchEvent(new Event("scroll", {
                bubbles: !0
            })), await (0, c.delay)(100), s(u)), e1.scrollTop = t, e1.dispatchEvent(new Event("scroll", {
                bubbles: !0
            }));
        }
        return [
            ...l
        ];
    } finally{
        i || o.click();
    }
}
function ed(e1) {
    let t = [
        e1,
        ...Array.from(e1.querySelectorAll("*"))
    ];
    return t.filter((e1, r1)=>t.indexOf(e1) === r1 && "number" == typeof e1.scrollTop && "number" == typeof e1.scrollHeight && "number" == typeof e1.clientHeight && e1.scrollHeight > e1.clientHeight + 20);
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22;
$RefreshReg$(_c, "A");
$RefreshReg$(_c1, "T");
$RefreshReg$(_c2, "F");
$RefreshReg$(_c3, "I");
$RefreshReg$(_c4, "D");
$RefreshReg$(_c5, "P");
$RefreshReg$(_c6, "L");
$RefreshReg$(_c7, "R");
$RefreshReg$(_c8, "O");
$RefreshReg$(_c9, "M");
$RefreshReg$(_c10, "N");
$RefreshReg$(_c11, "B");
$RefreshReg$(_c12, "U");
$RefreshReg$(_c13, "H");
$RefreshReg$(_c14, "Y");
$RefreshReg$(_c15, "V");
$RefreshReg$(_c16, "W");
$RefreshReg$(_c17, "G");
$RefreshReg$(_c18, "K");
$RefreshReg$(_c19, "X");
$RefreshReg$(_c20, "J");
$RefreshReg$(_c21, "Q");
$RefreshReg$(_c22, "Z");

},{}]},["6Fwwu","7sbmR"], "7sbmR", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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cmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS04NTdiNTMyZGI0NmMxOGEyLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL29yYWNsZWNsb3VkL3J1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXG9yYWNsZWNsb3VkXFxcXHJ1bGVzLmpzXCIsXCJidW5kbGVJZFwiOlwiMDJlMmMyZjJkOTczYTcwZVwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IGoycGF0XHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9vcmFjbGVjbG91ZC9ydWxlcy5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgbG9kYXNoLWVzIC0+IHA0UkJlICA9PiAgbG9kYXNoLWVzLmpzXHJcbiAqICAgfmNvbnN0YW50cyAtPiA2VkVqUiAgPT4gIHNyYy9jb25zdGFudHMuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvYW5zd2VyIC0+IDlLaTRkICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL29yYWNsZWNsb3VkL2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9vcmFjbGVjbG91ZC9vcGVyYXRpb25zIC0+IGdkdW83ICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL29yYWNsZWNsb3VkL29wZXJhdGlvbnMuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiaXNPcmFjbGVFbXBsb3ltZW50U2VjdGlvbkhlYWRlclwiLCAoKSA9PiBMKSwgbi5leHBvcnQocixcclxuICBcImlzT3JhY2xlU2tpbGxzUnVsZVwiLCAoKSA9PiBCKSwgbi5leHBvcnQociwgXCJpc09yYWNsZUxhbmd1YWdlc1J1bGVcIiwgKCkgPT4gcSksIG4uZXhwb3J0KHIsXHJcbiAgXCJnZXRSdWxlc1wiLCAoKSA9PiBWKSwgbi5leHBvcnQociwgXCJnZXRTdWJtaXRCdXR0b25UZXh0XCIsICgpID0+IEopLCBuLmV4cG9ydChyLFxyXG4gIFwiZ2V0Rm9ybVNuYXBzaG90XCIsICgpID0+IGVhKSwgbi5leHBvcnQociwgXCJnZXRTZWN0aW9uUm93U25hcHNob3RcIiwgKCkgPT4gZWwpLCBuLmV4cG9ydChyLFxyXG4gIFwiYWRkQW5kR2V0RWR1UnVsZXNcIiwgKCkgPT4gZXMpLCBuLmV4cG9ydChyLCBcImFkZEFuZEdldFdvcmtSdWxlc1wiLCAoKSA9PiBldSk7XHJcbnZhciBvID0gZShcImxvZGFzaC1lc1wiKSxcclxuICBpID0gZShcIn5jb25zdGFudHNcIiksXHJcbiAgYSA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvb3JhY2xlY2xvdWQvYW5zd2VyXCIpLFxyXG4gIGwgPSBlKFwifmNvbnRlbnRzL3NpdGVzL29yYWNsZWNsb3VkL29wZXJhdGlvbnNcIiksXHJcbiAgcyA9IGUoXCJ+Y29yZS9lbnVtc1wiKSxcclxuICB1ID0gZShcIn5jb3JlL3hwYXRoXCIpLFxyXG4gIGMgPSBlKFwifnV0aWxzL2RlbGF5XCIpO1xyXG5sZXQgZCA9IFwiLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2lucHV0LXJvdy0tcmFkaW9ncm91cCcpXVwiLFxyXG4gIGYgPVxyXG4gIFwiLi8vaW5wdXRbbm90KEB0eXBlPSdzdWJtaXQnKSBhbmQgbm90KEB0eXBlPSdoaWRkZW4nKSBhbmQgbm90KGFuY2VzdG9yOjoqW2NvbnRhaW5zKEBjbGFzcywgJ2lucHV0LXJvdy0tcmFkaW9ncm91cCcpXSkgYW5kIG5vdChhbmNlc3Rvcjo6Kltjb250YWlucyhAY2xhc3MsICdxdWljay1hcHBseS1mbG93LWRhdGVwaWNrZXItcm93JyldKSBhbmQgbm90KGFuY2VzdG9yOjoqW2NvbnRhaW5zKEBjbGFzcywgJ2RhdGVwaWNrZXItcm93JyldKSAgYW5kIG5vdChjb250YWlucyhAY2xhc3MsICdvai1jb21wb25lbnQtaW5pdG5vZGUnKSldXCIsXHJcbiAgcCA9IFwiLi8vdGV4dGFyZWFbbm90KGNvbnRhaW5zKEBjbGFzcywgJ2lucHV0LXJvd19fY29udHJvbC0taGVscGVyJykpXVwiLFxyXG4gIG0gPSBcIi4vL3NlbGVjdFwiLFxyXG4gIGggPVxyXG4gIFwiLi8vdWxbKEByb2xlPSdsaXN0JyBvciBAcm9sZT0ncmFkaW9ncm91cCcpIGFuZCBjb250YWlucyhAY2xhc3MsICdjeC1zZWxlY3QtcGlsbHMtY29udGFpbmVyJyldXCIsXHJcbiAgZyA9XHJcbiAgXCIuLy9kaXZbY29udGFpbnMoQGNsYXNzLCAncXVpY2stYXBwbHktZmxvdy1kYXRlcGlja2VyLXJvdycpXSB8IC4vL2Rpdltjb250YWlucyhAY2xhc3MsICdkYXRlcGlja2VyLXJvdycpXVwiLFxyXG4gIGIgPSBgJHtnfSB8ICR7ZH0gfCAke2Z9IHwgJHtwfSB8ICR7bX0gfCAke2h9YCxcclxuICB5ID0gXCJfX29yYWNsZUNsb3VkU2tpbGxzUnVsZVwiLFxyXG4gIHYgPSBcIl9fb3JhY2xlQ2xvdWRMYW5ndWFnZXNSdWxlXCIsXHJcbiAgdyA9IFwiUGhvbmUgQ291bnRyeSBDb2RlXCIsXHJcbiAgUyA9XHJcbiAgXCJSZXR1cm4gb25seSB0aGUgcGhvbmUgbnVtYmVyIHdpdGhvdXQgdGhlIGNvdW50cnkgY2FsbGluZyBjb2RlLiBEbyBub3QgaW5jbHVkZSB0aGUgcGhvbmUgY291bnRyeSBjb2RlIGJlY2F1c2UgaXQgaXMgcHJvdmlkZWQgc2VwYXJhdGVseS5cIixcclxuICBFID0gMjQsXHJcbiAgeCA9IDI1MCxcclxuICBDID0gW1wiSGlnaCBTY2hvb2xcIiwgXCJOb25lXCIsIFwiR0VEXCIsIFwiQXNzb2NpYXRlXCIsIFwiTWFzdGVyXCIsIFwiQmFjaGVsb3JcIiwgXCJEb2N0b3JcIiwgXCJKLkQuXCIsIFwiT3RoZXJcIixcclxuICAgIFwiVHJhZGVcIlxyXG4gIF07XHJcblxyXG5mdW5jdGlvbiBBKGUpIHtcclxuICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSA/IGUucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpIDogXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBrKCkge1xyXG4gIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiB3aW5kb3cpIHJldHVybiAhMTtcclxuICB0cnkge1xyXG4gICAgbGV0IGUgPSBcImpvYnJpZ2h0X29yYWNsZWNsb3VkX2NvbWJvYm94X2RlYnVnXCI7XHJcbiAgICByZXR1cm4gXCIxXCIgPT09IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uPy5zZWFyY2ggPz8gXCJcIikuZ2V0KGUpIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2VcclxuICAgICAgPy5nZXRJdGVtKGUpID09PSBcIjFcIlxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuICExXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBUKGUpIHtcclxuICByZXR1cm4gZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJjeC1zZWxlY3QtcGlsbHMtY29udGFpbmVyXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEYoZSkge1xyXG4gIGxldCB0ID0gZS5jaGVja1Zpc2liaWxpdHkoKTtcclxuICByZXR1cm4gISF0IHx8ICEhVChlKSAmJiAoaygpICYmIGNvbnNvbGUuZGVidWcoXCJbT3JhY2xlQ2xvdWRdW1J1bGVzXSBwaWxscy12aXNpYmlsaXR5LWJ5cGFzc1wiLCB7XHJcbiAgICB0YWdOYW1lOiBlLnRhZ05hbWUsXHJcbiAgICByb2xlOiBlLmdldEF0dHJpYnV0ZShcInJvbGVcIilcclxuICB9KSwgITApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEkoZSwgdCwgciwgbiwgbykge1xyXG4gIGsoKSAmJiBjb25zb2xlLmRlYnVnKFwiW09yYWNsZUNsb3VkXVtSdWxlc10gc3RhdGljLWNvbWJvYm94LW9wdGlvbnNcIiwge1xyXG4gICAgbGFiZWw6IHQsXHJcbiAgICBpZDogZS5pZCxcclxuICAgIG5hbWU6IGUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSxcclxuICAgIHByb2JlZDogbixcclxuICAgIHNraXBSZWFzb246IG8sXHJcbiAgICBvcHRpb25Db3VudDogci5sZW5ndGgsXHJcbiAgICBpbmNsdWRlZDogci5sZW5ndGggPiAwXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gaihlLCB0LCByKSB7XHJcbiAgaygpICYmIGNvbnNvbGUuZGVidWcoXCJbT3JhY2xlQ2xvdWRdW1J1bGVzXSBkZWdyZWUtb3B0aW9uc1wiLCB7XHJcbiAgICBpZDogZS5pZCxcclxuICAgIG5hbWU6IGUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSxcclxuICAgIHNvdXJjZTogdCxcclxuICAgIG9wdGlvbkNvdW50OiByLmxlbmd0aFxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEQoZSkge1xyXG4gIGlmIChcInRydWVcIiA9PT0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpIHx8IFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIGRvY3VtZW50IHx8IFwiZnVuY3Rpb25cIiAhPVxyXG4gICAgdHlwZW9mIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKSByZXR1cm4gXCJleHBhbmRlZC1vci11bmF2YWlsYWJsZVwiO1xyXG4gIGlmIChcInRydWVcIiA9PT0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWludmFsaWRcIikpIHJldHVybiBcImludmFsaWQtc2VhcmNoXCI7XHJcbiAgbGV0IHQgPSBlLmNsYXNzTmFtZSB8fCBcIlwiO1xyXG4gIGlmICh0LmluY2x1ZGVzKFwiY3gtc2VsZWN0LWlucHV0LS1hdXRvLXN1Z2dlc3RcIikgfHwgdC5pbmNsdWRlcyhcIm9qLXNlYXJjaHNlbGVjdC1pbnB1dFwiKSlcclxuICByZXR1cm4gXCJyZW1vdGUtc2VhcmNoLWNsYXNzXCI7XHJcbiAgbGV0IHIgPSBlLmNsb3Nlc3Q/LihcIltkYXRhLWJpbmRdXCIpLFxyXG4gICAgbiA9IHI/LmdldEF0dHJpYnV0ZShcImRhdGEtYmluZFwiKSB8fCBcIlwiO1xyXG4gIGlmICgvXFxiKD86c2VhcmNoQ3JpdGVyaWF8aXNBdXRvU3VnZ2VzdHxnZXRPcHRpb25zKVxcYi8udGVzdChuKSkgcmV0dXJuIFwicmVtb3RlLXNlYXJjaC1iaW5kaW5nXCI7XHJcbiAgbGV0IG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtlLmlkfS10b2dnbGUtYnV0dG9uYCk7XHJcbiAgcmV0dXJuIG8gPyBcInRydWVcIiA9PT0gby5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpID8gXCJleHBhbmRlZC10b2dnbGVcIiA6IG51bGwgOlxyXG4gICAgXCJtaXNzaW5nLXRvZ2dsZVwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFAoZSkge1xyXG4gIGxldCB0ID0gQShlKS5yZXBsYWNlKC9bLlxcdTMwMDJdKyQvZywgXCJcIikudG9Mb3dlckNhc2UoKTtcclxuICByZXR1cm4gXCJzZWxlY3QgdGhlIHJhY2VzIHlvdSBpZGVudGlmeSB3aXRoXCIgPT09IHRcclxufVxyXG5cclxuZnVuY3Rpb24gXyhlKSB7XHJcbiAgcmV0dXJuIFwiZXRobmljaXR5XCIgPT09IEEoZSkudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBMKGUpIHtcclxuICBsZXQgdCA9IEEoZSkudG9Mb3dlckNhc2UoKTtcclxuICByZXR1cm4gISghdCB8fCAvXFxiY3JpbWluYWxcXHMraGlzdG9yeVxcYi8udGVzdCh0KSkgJiYgKC9cXGJjdXJyZW50XFxzK2VtcGxveW1lbnRcXGIvLnRlc3QodCkgfHxcclxuICAgIFwiZXhwZXJpZW5jZVwiID09PSB0IHx8IFwiZW1wbG95bWVudFwiID09PSB0IHx8IC9cXGJ3b3JrXFxzK2FuZFxccytlZHVjYXRpb25cXHMraGlzdG9yeVxcYi8udGVzdCh0KSB8fFxyXG4gICAgL1xcYig/OnByb2Zlc3Npb25hbHx3b3JrfGVtcGxveW1lbnQpXFxzKyg/OmV4cGVyaWVuY2V8aGlzdG9yeSlcXGIvLnRlc3QodCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFIoZSkge1xyXG4gIGxldCB0ID0gQShlKS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiAvXFxibGFuZ3VhZ2VzP1xcYi8udGVzdCh0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBPKGUpIHtcclxuICBsZXQgdCA9IEEoZSkudG9Mb3dlckNhc2UoKTtcclxuICByZXR1cm4gL1xcYnNraWxscz9cXGIvLnRlc3QodCkgJiYgIVIodClcclxufVxyXG5cclxuZnVuY3Rpb24gTShlKSB7XHJcbiAgcmV0dXJuICgwLCB1LmdldE9yZGVyZWROb2RlcykoXHJcbiAgICBcIi4vL2xhYmVsW2NvbnRhaW5zKEBjbGFzcywgJ2FwcGx5LWZsb3ctaW5wdXQtY2hlY2tib3gnKSBvciBjb250YWlucyhAY2xhc3MsICdhcHBseS1mbG93LWlucHV0LXJhZGlvJyldXCIsXHJcbiAgICBlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBOKGUsIHQpIHtcclxuICBsZXQgciA9ICgwLCB1LmdldE9yZGVyZWROb2RlcykoXCIuLy9pbnB1dFtAdHlwZT0nY2hlY2tib3gnIG9yIEB0eXBlPSdyYWRpbyddXCIsIGUpO1xyXG4gIGlmIChyLmxlbmd0aCA9PT0gdC5sZW5ndGgpIHJldHVybiByO1xyXG4gIGxldCBuID0gdC5tYXAoZSA9PiB7XHJcbiAgICBsZXQgdCA9IGUuZ2V0QXR0cmlidXRlKFwiZm9yXCIpO1xyXG4gICAgaWYgKHQgJiYgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZG9jdW1lbnQpIHtcclxuICAgICAgbGV0IGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KTtcclxuICAgICAgaWYgKGUpIHJldHVybiBlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKDAsIHUuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXCIuLy9pbnB1dFtAdHlwZT0nY2hlY2tib3gnIG9yIEB0eXBlPSdyYWRpbyddXCIsIGUpXHJcbiAgfSkuZmlsdGVyKGUgPT4gISFlKTtcclxuICByZXR1cm4gbi5sZW5ndGggPiAwID8gbiA6IHJcclxufVxyXG5cclxuZnVuY3Rpb24gJChlKSB7XHJcbiAgcmV0dXJuIGUubWFwKGUgPT4gQShlLnRleHRDb250ZW50KSkuZmlsdGVyKEJvb2xlYW4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEIoZSkge1xyXG4gIHJldHVybiAhIWU/Llt5XVxyXG59XHJcblxyXG5mdW5jdGlvbiBxKGUpIHtcclxuICByZXR1cm4gISFlPy5bdl1cclxufVxyXG5cclxuZnVuY3Rpb24gVShlLCB0KSB7XHJcbiAgcmV0dXJuICgwLCB1LmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgYC4vL2J1dHRvbltjb250YWlucyhAY2xhc3MsICdhcHBseS1mbG93LXByb2ZpbGUtaXRlbS10aWxlX19uZXctdGlsZScpIGFuZCBjb250YWlucyh0cmFuc2xhdGUobm9ybWFsaXplLXNwYWNlKCksICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicsICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpLCAnYWRkICR7dH0nKV1gLFxyXG4gICAgZSlcclxufVxyXG5cclxuZnVuY3Rpb24gSChlKSB7XHJcbiAgbGV0IHQgPSAoMCwgdS5nZXRPcmRlcmVkTm9kZXMpKFwiLi8vYnV0dG9uW2NvbnRhaW5zKEBjbGFzcywgJ3NraWxsX19yZWNvbW1lbmRhdGlvbi1idXR0b24nKV1cIiwgZSksXHJcbiAgICByID0gW107XHJcbiAgZm9yIChsZXQgZSBvZiB0KSB7XHJcbiAgICBsZXQgdCA9IEEoZS50ZXh0Q29udGVudCk7XHJcbiAgICB0ICYmICFyLmluY2x1ZGVzKHQpICYmIHIucHVzaCh0KVxyXG4gIH1cclxuICByZXR1cm4gclxyXG59XHJcblxyXG5mdW5jdGlvbiBZKGUsIHQpIHtcclxuICBsZXQgciA9IFUoZSwgXCJza2lsbFwiKTtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogcy5GSUVMRF9UWVBFLkxJU1RCT1gsXHJcbiAgICBsYWJlbDogXCJTa2lsbHNcIixcclxuICAgIHJlcXVpcmVkOiAhMCxcclxuICAgICRsYWJlbDogdCB8fCBlLFxyXG4gICAgJGlucHV0OiBlLFxyXG4gICAgJHNraWxsU2VjdGlvbjogZSxcclxuICAgICRza2lsbEFkZEJ1dHRvbjogcixcclxuICAgIG9wdGlvbnM6IEgoZSksXHJcbiAgICBbeV06ICEwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB6KGUsIHQpIHtcclxuICBsZXQgciA9IFUoZSwgXCJsYW5ndWFnZVwiKTtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogcy5GSUVMRF9UWVBFLkxJU1RCT1gsXHJcbiAgICBsYWJlbDogXCJMYW5ndWFnZXNcIixcclxuICAgIHJlcXVpcmVkOiAhMSxcclxuICAgICRsYWJlbDogdCB8fCBlLFxyXG4gICAgJGlucHV0OiBlLFxyXG4gICAgJGxhbmd1YWdlU2VjdGlvbjogZSxcclxuICAgICRsYW5ndWFnZUFkZEJ1dHRvbjogcixcclxuICAgIG9wdGlvbnM6IFtdLFxyXG4gICAgW3ZdOiAhMFxyXG4gIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBWKCkge1xyXG4gIGxldCBlID0gKDAsIHUuZ2V0T3JkZXJlZE5vZGVzKShcclxuICAgICAgXCIvL2FwcGx5LWZsb3ctYmxvY2sgfCAuLy9zZWN0aW9uW2NvbnRhaW5zKEBjbGFzcywgJ2VtYWlsLXZlcmlmaWNhdGlvbicpXVwiLCBkb2N1bWVudCksXHJcbiAgICB0ID0gQXJyYXkuZnJvbShlKS5maWx0ZXIoZSA9PiB7XHJcbiAgICAgIGxldCB0ID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICByID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZSk7XHJcbiAgICAgIHJldHVybiB0LndpZHRoID4gMCAmJiB0LmhlaWdodCA+IDAgJiYgXCJub25lXCIgIT09IHIuZGlzcGxheSAmJiBcImhpZGRlblwiICE9PSByLnZpc2liaWxpdHkgJiZcclxuICAgICAgICBcIjBcIiAhPT0gci5vcGFjaXR5XHJcbiAgICB9KSxcclxuICAgIHIgPSBbXTtcclxuICBmb3IgKGxldCBlIG9mIHQpIHtcclxuICAgIGlmIChlLm1hdGNoZXM/LihcInNlY3Rpb25bY2xhc3MqPSdlbWFpbC12ZXJpZmljYXRpb24nXVwiKSkge1xyXG4gICAgICBsZXQgdCA9ICgwLCB1LmdldE9yZGVyZWROb2RlcykoYiwgZSksXHJcbiAgICAgICAgbiA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBlIG9mIHQpIHtcclxuICAgICAgICBsZXQgdCA9IGF3YWl0IFcoZSk7XHJcbiAgICAgICAgdCAmJiBuLnB1c2godClcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmluZm8oXCJbT3JhY2xlQ2xvdWRdW1J1bGVzXSBlbWFpbC1zZWN0aW9uXCIsIHtcclxuICAgICAgICBpbnB1dENvdW50OiB0Lmxlbmd0aCxcclxuICAgICAgICBydWxlQ291bnQ6IG4ubGVuZ3RoLFxyXG4gICAgICAgIHR5cGVzOiBuLm1hcChlID0+IGUudHlwZSlcclxuICAgICAgfSksIHIucHVzaCguLi5uKTtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGxldCB0ID0gKDAsIHUuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXHJcbiAgICAgICAgXCIuLy8qW2NvbnRhaW5zKEBjbGFzcywgJ2FwcGx5LWZsb3ctYmxvY2tfX2hlYWRlcicpXS9hcHBseS1mbG93LWJsb2NrLXRpdGxlL2gzIHwgLi8vKltjb250YWlucyhAY2xhc3MsICdhcHBseS1mbG93LWJsb2NrX19oZWFkZXInKV0vYXBwbHktZmxvdy1ibG9jay10aXRsZS9oMlwiLFxyXG4gICAgICAgIGUpLFxyXG4gICAgICBuID0gKDAsIHUuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXCIuLy8qW2NvbnRhaW5zKEBjbGFzcywgJ2FwcGx5LWZsb3ctYWdyZWVtZW50c19fcm93JyldXCIsIGUpLFxyXG4gICAgICBpID0gdD8udGV4dENvbnRlbnQ/LnRyaW0oKTtcclxuICAgIGlmICgoMCwgby5pc0VtcHR5KShpKSAmJiAhbikgY29udGludWU7XHJcbiAgICBsZXQgYSA9ICgwLCB1LmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgICBcIi4vL2Rpdltjb250YWlucyhAY2xhc3MsICdhcHBseS1mbG93LWJsb2NrLS13b3JrLWFuZC1lZHVjYXRpb24tdGltZWxpbmUnKV1cIiwgZSk7XHJcbiAgICBpZiAoYSkge1xyXG4gICAgICBsZXQgZSA9IGF3YWl0IGV1KCEwKTtcclxuICAgICAgci5wdXNoKGUpO1xyXG4gICAgICBsZXQgdCA9IGF3YWl0IGVzKCEwKTtcclxuICAgICAgdCAmJiByLnB1c2godCk7XHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcbiAgICBpZiAoL2VkdWNhdGlvbi9pLnRlc3QoaSkpIHtcclxuICAgICAgbGV0IGUgPSBhd2FpdCBlcyghMCk7XHJcbiAgICAgIGUgJiYgci5wdXNoKGUpO1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG4gICAgaWYgKEwoaSkpIHtcclxuICAgICAgbGV0IGUgPSBhd2FpdCBldSghMCk7XHJcbiAgICAgIHIucHVzaChlKTtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGlmIChSKGkpKSB7XHJcbiAgICAgIHIucHVzaCh6KGUsIHQpKTtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGlmIChPKGkpKSB7XHJcbiAgICAgIHIucHVzaChZKGUsIHQpKTtcclxuICAgICAgY29udGludWVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCB0ID0gKDAsIHUuZ2V0T3JkZXJlZE5vZGVzKShiLCBlKTtcclxuICAgICAgZm9yIChsZXQgZSBvZiB0KSB7XHJcbiAgICAgICAgbGV0IHQgPSBhd2FpdCBXKGUpO1xyXG4gICAgICAgIHQgJiYgci5wdXNoKHQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IG4gPSByLmZpbHRlcigoZSwgdCwgcikgPT4gZS5sYWJlbCAmJiB0ID09PSByLmZpbmRJbmRleCh0ID0+IHQubGFiZWwgPT09IGUubGFiZWwpKSxcclxuICAgIGkgPSBuLnNvbWUoZSA9PiBlLmxhYmVsID09PSB3KTtcclxuICByZXR1cm4gbi5tYXAoZSA9PiBpICYmIGUudHlwZSA9PT0gcy5GSUVMRF9UWVBFLlRFWFQgJiYgXCJwaG9uZSBudW1iZXJcIiA9PT0gQShlLmxhYmVsKS5yZXBsYWNlKFxyXG4gICAgL1xcKi9nLCBcIlwiKS50b0xvd2VyQ2FzZSgpID8ge1xyXG4gICAgLi4uZSxcclxuICAgIGRlc2NyaXB0aW9uOiBTXHJcbiAgfSA6IGUpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gVyhlKSB7XHJcbiAgbGV0IHQ7XHJcbiAgbGV0IHIgPSAoMCwgdS5nZXRGaXJzdE9yZGVyZWROb2RlKSgnLi9hbmNlc3Rvci1vci1zZWxmOjpkaXZbY29udGFpbnMoQGNsYXNzLCBcImlucHV0LXJvd1wiKV0nLCBlKSxcclxuICAgIG4gPSAoMCwgdS5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgICAgYC4vL2xhYmVsW2NvbnRhaW5zKEBjbGFzcywgXCJpbnB1dC1yb3dfX2xhYmVsXCIpXS8vc3Bhbltjb250YWlucyhAY2xhc3MsIFwiaW5wdXQtcm93X19saW5lYnJlYWtcIildIHxcclxuICAgICAgIC4vL2xhYmVsW2NvbnRhaW5zKEBjbGFzcywgXCJpbnB1dC1yb3dfX2xhYmVsXCIpXS8vc3Bhbltjb250YWlucyhAY2xhc3MsIFwiaW5wdXQtcm93X19sYWJlbC10ZXh0XCIpXSB8XHJcbiAgICAgICAuLy9sYWJlbFtjb250YWlucyhAY2xhc3MsIFwiYXBwbHktZmxvdy1pbnB1dC1jaGVja2JveFwiKV0vL3NwYW5bY29udGFpbnMoQGNsYXNzLCBcImFwcGx5LWZsb3ctaW5wdXQtY2hlY2tib3hfX2xhYmVsXCIpXWAsIHIpLFxyXG4gICAgbCA9ICgwLCB1LmdldEZpcnN0T3JkZXJlZE5vZGUpKCcuL2FuY2VzdG9yOjpkaXZbY29udGFpbnMoQGNsYXNzLCBcImN4LXNlbGVjdC1jb250YWluZXJcIildJywgZSksXHJcbiAgICBjID0gbCA/ICgwLCB1LmdldEZpcnN0T3JkZXJlZE5vZGUpKCcuLy9zcGFuW2NvbnRhaW5zKEBjbGFzcywgXCJpbnB1dC1maWVsZF9fbGFiZWxcIildJywgbCkgOlxyXG4gICAgbnVsbCxcclxuICAgIGQgPSAoMCwgdS5nZXRGaXJzdE9yZGVyZWROb2RlKShgLi9mb3JtLWVsZW1lbnQtbGFiZWwvbGFiZWwvc3Bhbltjb250YWlucyhAY2xhc3MsIFwiaW5wdXQtcm93X19sYWJlbC0tcmVxdWlyZWQtc3RhclwiKV0gfFxyXG4gICAgICAgLi8vc3Bhbltjb250YWlucyhAY2xhc3MsIFwiY3gtc2VsZWN0X19sYWJlbC0tcmVxdWlyZWRcIildYCwgcik7XHJcbiAgaWYgKCFGKGUpKSByZXR1cm4gbnVsbDtcclxuICBsZXQgZiA9ICgwLCBhLmlzT3JhY2xlUGhvbmVDb3VudHJ5Q29kZUZpZWxkKShlLmlkIHx8IGUuZ2V0QXR0cmlidXRlKFwiaWRcIikgfHwgZS5nZXRBdHRyaWJ1dGUoXHJcbiAgICBcIm5hbWVcIikpIHx8IFwiY291bnRyeSBjb2RlXCIgPT09IEEoYz8udGV4dENvbnRlbnQpLnRvTG93ZXJDYXNlKCk7XHJcbiAgaWYgKGYpIHJldHVybiB7XHJcbiAgICB0eXBlOiBzLkZJRUxEX1RZUEUuU0VMRUNULFxyXG4gICAgbGFiZWw6IHcsXHJcbiAgICByZXF1aXJlZDogISFkLFxyXG4gICAgJGlucHV0OiBlLFxyXG4gICAgJGxhYmVsOiBjIHx8IG4gfHwgZSxcclxuICAgIG9wdGlvbnM6IGF3YWl0IGVjKGUsICEwKVxyXG4gIH07XHJcbiAgaWYgKCFuKSByZXR1cm4gbnVsbDtcclxuICBsZXQgcCA9IG4/LnRleHRDb250ZW50Py5yZXBsYWNlKC9bXFxuXFxyKl0vZywgXCJcIikudHJpbSgpO1xyXG4gIGlmIChjICYmIGM/LnRleHRDb250ZW50Py50cmltKCkgPT09IFwiQ291bnRyeSBjb2RlXCIpIHJldHVybiBudWxsO1xyXG4gIGlmIChUKGUpICYmICh0ID0gcy5GSUVMRF9UWVBFLkxJU1RCT1gpLCBcIlRFWFRBUkVBXCIgPT09IGUudGFnTmFtZSAmJiAodCA9IHMuRklFTERfVFlQRS5URVhUKSxcclxuICAgIFwiSU5QVVRcIiA9PT0gZS50YWdOYW1lKSB7XHJcbiAgICBpZiAoXCJmaWxlXCIgPT09IGUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkgcmV0dXJuIG51bGw7XHJcbiAgICB0ID0gW1wiY2hlY2tib3hcIiwgXCJyYWRpb1wiXS5pbmNsdWRlcyhlLmdldEF0dHJpYnV0ZShcInR5cGVcIikpID8gcy5GSUVMRF9UWVBFLkNIRUNLQk9YIDogc1xyXG4gICAgICAuRklFTERfVFlQRS5URVhUXHJcbiAgfShcImNvbWJvYm94XCIgPT09IGUuZ2V0QXR0cmlidXRlKFwicm9sZVwiKSB8fCBlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImN4LXNlbGVjdC1pbnB1dFwiKSB8fCBlXHJcbiAgICAuY2xhc3NOYW1lLmluY2x1ZGVzKFwib2otc2VhcmNoc2VsZWN0LWlucHV0XCIpKSAmJiAodCA9IHMuRklFTERfVFlQRS5TRUxFQ1QpLCBlLmNsYXNzTmFtZVxyXG4gICAgLmluY2x1ZGVzKFwiaW5wdXQtcm93LS1yYWRpb2dyb3VwXCIpICYmICh0ID0gcy5GSUVMRF9UWVBFLlJBRElPR1JPVVApLCBlLmNsYXNzTmFtZS5pbmNsdWRlcyhcclxuICAgICAgXCJkYXRlcGlja2VyLXJvd1wiKSAmJiAodCA9IHMuRklFTERfVFlQRS5EQVRFKTtcclxuICBsZXQgbSA9ICgwLCB1LmdldEZpcnN0T3JkZXJlZE5vZGUpKGAuL2ZvbGxvd2luZy1zaWJsaW5nOjpsYWJlbFtjb250YWlucyhAY2xhc3MsIFwiYXBwbHktZmxvdy1pbnB1dC1jaGVja2JveFwiKV0gfFxyXG4gICAgICAuL2ZvbGxvd2luZy1zaWJsaW5nOjpzcGFuW2NvbnRhaW5zKEBjbGFzcywgXCJhcHBseS1mbG93LWlucHV0LWNoZWNrYm94XCIpXWAsIGUpO1xyXG4gIGlmIChtPy50ZXh0Q29udGVudD8udHJpbSgpKSB7XHJcbiAgICBsZXQgZSA9IG0udGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgXyhwIHx8IFwiXCIpIHx8IChwID0gZSlcclxuICB9XHJcbiAgaWYgKCgwLCBvLmlzRW1wdHkpKHApKSByZXR1cm4gbnVsbDtcclxuICBpZiAodCA9PSBzLkZJRUxEX1RZUEUuREFURSkgcmV0dXJuIHtcclxuICAgIHR5cGU6IHMuRklFTERfVFlQRS5EQVRFLFxyXG4gICAgbGFiZWw6IHAsXHJcbiAgICByZXF1aXJlZDogISFkIHx8ICgwLCBhLmlzT3JhY2xlTGlua1J1bGUpKHtcclxuICAgICAgbGFiZWw6IHBcclxuICAgIH0pLFxyXG4gICAgJGlucHV0OiBlLFxyXG4gICAgJGxhYmVsOiBuLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTW9udGggLyBEYXkgLyBZZWFyXCJcclxuICB9O1xyXG4gIGlmICh0ID09IHMuRklFTERfVFlQRS5SQURJT0dST1VQKSB7XHJcbiAgICBsZXQgdCA9IE0oZSksXHJcbiAgICAgIHIgPSAkKHQpO1xyXG4gICAgcmV0dXJuIFAocCkgPyB7XHJcbiAgICAgIHR5cGU6IHMuRklFTERfVFlQRS5DSEVDS0JPWCxcclxuICAgICAgbGFiZWw6IHAsXHJcbiAgICAgIHJlcXVpcmVkOiAhIWQgfHwgKDAsIGEuaXNPcmFjbGVMaW5rUnVsZSkoe1xyXG4gICAgICAgIGxhYmVsOiBwXHJcbiAgICAgIH0pLFxyXG4gICAgICAkaW5wdXQ6IGUsXHJcbiAgICAgICRsYWJlbDogbixcclxuICAgICAgJGNoZWNrYm94czogTihlLCB0KSxcclxuICAgICAgb3B0aW9uczogclxyXG4gICAgfSA6IHtcclxuICAgICAgdHlwZTogcy5GSUVMRF9UWVBFLlJBRElPR1JPVVAsXHJcbiAgICAgIGxhYmVsOiBwLFxyXG4gICAgICByZXF1aXJlZDogISFkIHx8ICgwLCBhLmlzT3JhY2xlTGlua1J1bGUpKHtcclxuICAgICAgICBsYWJlbDogcFxyXG4gICAgICB9KSxcclxuICAgICAgJGlucHV0OiBlLFxyXG4gICAgICAkbGFiZWw6IG4sXHJcbiAgICAgIG9wdGlvbnM6IHJcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHQgPT0gcy5GSUVMRF9UWVBFLkNIRUNLQk9YKSB7XHJcbiAgICBsZXQgdCA9IG0/LnRleHRDb250ZW50Py5yZXBsYWNlKC9bXFxuXFxyKl0vZywgXCJcIikudHJpbSgpIHx8IHA7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBzLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsXHJcbiAgICAgIGxhYmVsOiBwLFxyXG4gICAgICByZXF1aXJlZDogISFkIHx8ICgwLCBhLmlzT3JhY2xlTGlua1J1bGUpKHtcclxuICAgICAgICBsYWJlbDogcFxyXG4gICAgICB9KSxcclxuICAgICAgJGNoZWNrYm94czogW2VdLFxyXG4gICAgICAkaW5wdXQ6IGUsXHJcbiAgICAgICRsYWJlbDogbixcclxuICAgICAgb3B0aW9uczogdCA/IFt0XSA6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICh0ID09PSBzLkZJRUxEX1RZUEUuVEVYVCkgcmV0dXJuIHtcclxuICAgIHR5cGU6IHMuRklFTERfVFlQRS5URVhULFxyXG4gICAgbGFiZWw6IHAsXHJcbiAgICByZXF1aXJlZDogISFkIHx8ICgwLCBhLmlzT3JhY2xlTGlua1J1bGUpKHtcclxuICAgICAgbGFiZWw6IHBcclxuICAgIH0pLFxyXG4gICAgJGlucHV0OiBlLFxyXG4gICAgJGxhYmVsOiBuXHJcbiAgfTtcclxuICBpZiAodCA9PSBzLkZJRUxEX1RZUEUuU0VMRUNUKSB7XHJcbiAgICBsZXQgdDtcclxuICAgIGlmICgoXCJVUy1TVEFOREFSRC1PUkFfR0VOREVSLVNUQU5EQVJEXCIgPT0gZS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpIHx8XHJcbiAgICAgICAgXCJVUy1TVEFOREFSRC1PUkFfVkVURVJBTl9TVEFUVVMtU1RBTkRBUkRcIiA9PSBlLmdldEF0dHJpYnV0ZShcIm5hbWVcIikpICYmICh0ID0gYXdhaXQgZWMoZSkpLFxyXG4gICAgICB2b2lkIDAgPT09IHQgJiYgXCJjb21ib2JveFwiID09PSBlLmdldEF0dHJpYnV0ZShcInJvbGVcIikpIHtcclxuICAgICAgbGV0IHIgPSBlLFxyXG4gICAgICAgIG4gPSBEKHIpLFxyXG4gICAgICAgIG8gPSBudWxsID09PSBuLFxyXG4gICAgICAgIGkgPSBvID8gYXdhaXQgZWMociwgITEsIDEsICEwKSA6IFtdO1xyXG4gICAgICBJKHIsIHAsIGksIG8sIG4pLCBpLmxlbmd0aCA+IDAgJiYgKHQgPSBpKVxyXG4gICAgfVxyXG4gICAgaWYgKFwiRGVncmVlXCIgPT09IHApIHtcclxuICAgICAgbGV0IHIgPSB0Py5sZW5ndGggPyB0IDogQztcclxuICAgICAgdCA9IHIsIGooZSwgciA9PT0gQyA/IFwiZmFsbGJhY2tcIiA6IFwibGl2ZS1tZW51XCIsIHIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBzLkZJRUxEX1RZUEUuU0VMRUNULFxyXG4gICAgICBsYWJlbDogcCxcclxuICAgICAgcmVxdWlyZWQ6ICEhZCB8fCAoMCwgYS5pc09yYWNsZUxpbmtSdWxlKSh7XHJcbiAgICAgICAgbGFiZWw6IHBcclxuICAgICAgfSksXHJcbiAgICAgICRpbnB1dDogZSxcclxuICAgICAgJGxhYmVsOiBuLFxyXG4gICAgICBvcHRpb25zOiB0XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChcIlNFTEVDVFwiID09PSBlLnRhZ05hbWUpIHtcclxuICAgIGxldCB0ID0gKDAsIHUuZ2V0T3JkZXJlZE5vZGVzKShcclxuICAgICAgJy4vZm9sbG93aW5nLXNpYmxpbmc6OmRpdltjb250YWlucyhAY2xhc3MsIFwiZHJvcGRvd24tY29udGFpbmVyXCIpXS8vdWxbQHJvbGU9XCJsaXN0Ym94XCJdL2xpJyxcclxuICAgICAgZSk7XHJcbiAgICAwID09PSB0Lmxlbmd0aCAmJiAodCA9ICgwLCB1LmdldE9yZGVyZWROb2RlcykoXCIuL29wdGlvblwiLCBlKSk7XHJcbiAgICBsZXQgciA9IHQucmVkdWNlKChlLCB0KSA9PiB7XHJcbiAgICAgIGxldCByID0gdC50ZXh0Q29udGVudD8udHJpbSgpO1xyXG4gICAgICByZXR1cm4gKDAsIG8uaXNFbXB0eSkocikgfHwgXCJcXHUyMDE0IE1ha2UgYSBTZWxlY3Rpb24gXFx1MjAxNFwiID09PSByIHx8IFwiTm8gUmVzdWx0c1wiID09PVxyXG4gICAgICAgIHIgfHwgZS5wdXNoKHIpLCBlXHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gXCJTdGF0ZS9Qcm92aW5jZVwiID09PSBwICYmIDAgPT09IHIubGVuZ3RoICYmIChyID0gT2JqZWN0LnZhbHVlcyhpLlNUQVRFX01BUCkpLCB7XHJcbiAgICAgIHR5cGU6IHMuRklFTERfVFlQRS5TRUxFQ1QsXHJcbiAgICAgIGxhYmVsOiBwLFxyXG4gICAgICByZXF1aXJlZDogISFkIHx8ICgwLCBhLmlzT3JhY2xlTGlua1J1bGUpKHtcclxuICAgICAgICBsYWJlbDogcFxyXG4gICAgICB9KSxcclxuICAgICAgJGxhYmVsOiBuLFxyXG4gICAgICAkaW5wdXQ6IGUsXHJcbiAgICAgIG9wdGlvbnM6IHJcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHQgPT09IHMuRklFTERfVFlQRS5MSVNUQk9YKSB7XHJcbiAgICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvckFsbChcIi5jeC1zZWxlY3QtcGlsbC1uYW1lXCIpLFxyXG4gICAgICByID0gW107XHJcbiAgICByZXR1cm4gdC5mb3JFYWNoKChlLCB0KSA9PiB7XHJcbiAgICAgIHIucHVzaChlLnRleHRDb250ZW50Py50cmltKCkpXHJcbiAgICB9LCBbXSksIHtcclxuICAgICAgdHlwZTogcy5GSUVMRF9UWVBFLkxJU1RCT1gsXHJcbiAgICAgIGxhYmVsOiBwLFxyXG4gICAgICByZXF1aXJlZDogISFkIHx8ICgwLCBhLmlzT3JhY2xlTGlua1J1bGUpKHtcclxuICAgICAgICBsYWJlbDogcFxyXG4gICAgICB9KSxcclxuICAgICAgJGxhYmVsOiBuLFxyXG4gICAgICAkaW5wdXQ6IGUsXHJcbiAgICAgIG9wdGlvbnM6IHJcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5hc3luYyBmdW5jdGlvbiBHKGUsIHQsIHIpIHtcclxuICBsZXQgbiA9ICgwLCB1LmdldE9yZGVyZWROb2RlcykoYiwgZSksXHJcbiAgICBvID0gW107XHJcbiAgaWYgKG4gJiYgbi5sZW5ndGggPiAwKVxyXG4gICAgZm9yIChsZXQgZSBvZiBuKSB0cnkge1xyXG4gICAgICBsZXQgdCA9IGF3YWl0IFcoZSk7XHJcbiAgICAgIHQgJiYgMCA+IG8uZmluZEluZGV4KGUgPT4gZS5sYWJlbCA9PT0gdC5sYWJlbCkgJiYgby5wdXNoKHQpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBleHRyYWN0aW5nIGlucHV0OlwiLCBlKVxyXG4gICAgfSBlbHNlIGNvbnNvbGUud2FybihgTm8gaW5wdXQgZWxlbWVudHMgZm91bmQgZm9yICR7cn0gc2VjdGlvbmApO1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiB0LFxyXG4gICAgbGFiZWw6IHIsXHJcbiAgICByZXF1aXJlZDogITAsXHJcbiAgICBjaGlsZHJlbjogbyxcclxuICAgIG9wdGlvbnM6IFsuLi5vLm1hcChlID0+ICh7XHJcbiAgICAgIHR5cGU6IGUudHlwZSxcclxuICAgICAgbGFiZWw6IGUubGFiZWwsXHJcbiAgICAgIG9wdGlvbnM6IGUub3B0aW9uc1xyXG4gICAgfSkpXVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSyhlKSB7XHJcbiAgbGV0IHQgPSBuZXcgU2V0KChlLmNoaWxkcmVuIHx8IFtdKS5tYXAoZSA9PiBBKGUubGFiZWwpLnRvTG93ZXJDYXNlKCkpKTtcclxuICByZXR1cm4gdC5oYXMoXCJlbXBsb3llciBuYW1lXCIpICYmIHQuaGFzKFwiam9iIHRpdGxlXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFgoZSkge1xyXG4gIGxldCB0ID0gbmV3IFNldCgoZS5jaGlsZHJlbiB8fCBbXSkubWFwKGUgPT4gQShlLmxhYmVsKS50b0xvd2VyQ2FzZSgpKSksXHJcbiAgICByID0gW1wic2Nob29sXCIsIFwic2Nob29sIG5hbWVcIiwgXCJzY2hvb2wgb3IgdW5pdmVyc2l0eVwiLCBcInVuaXZlcnNpdHlcIiwgXCJ1bml2ZXJzaXR5IG5hbWVcIixcclxuICAgICAgXCJpbnN0aXR1dGlvblwiLCBcImVkdWNhdG9yXCIsIFwiY29sbGVnZVwiLCBcImVkdWNhdGlvbmFsIGVzdGFibGlzaG1lbnRcIlxyXG4gICAgXSxcclxuICAgIG4gPSBbXCJkZWdyZWVcIiwgXCJkZWdyZWUgdHlwZVwiLCBcImVkdWNhdGlvbiBsZXZlbFwiLCBcImhpZ2hlc3QgZGVncmVlXCIsIFwiYWNjcmVkaXRhdGlvblwiLCBcIm1ham9yXCIsXHJcbiAgICAgIFwibWFqb3Igb3IgYXJlYSBvZiBjb25jZW50cmF0aW9uXCIsIFwiZmllbGQgb2Ygc3R1ZHlcIiwgXCJzdHVkeVwiLCBcImRpc2NpcGxpbmVcIlxyXG4gICAgXTtcclxuICByZXR1cm4gci5zb21lKGUgPT4gdC5oYXMoZSkpICYmIG4uc29tZShlID0+IHQuaGFzKGUpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBKKCkge1xyXG4gIGxldCBlID0gKDAsIHUuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXHJcbiAgICAgICcvL2J1dHRvbltAZGF0YS1hdXRvbWF0aW9uLWlkPVwicGFnZUZvb3Rlck5leHRCdXR0b25cIl0gfCAvL2J1dHRvbltAZGF0YS1hdXRvbWF0aW9uLWlkPVwiYm90dG9tLW5hdmlnYXRpb24tbmV4dC1idXR0b25cIl0nXHJcbiAgICAgICksXHJcbiAgICB0ID0gZSA/IGUudGV4dENvbnRlbnQ/LnRyaW0oKSA6IFwiXCI7XHJcbiAgcmV0dXJuIHRcclxufVxyXG5cclxuZnVuY3Rpb24gUShlKSB7XHJcbiAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgPyBlLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKSA6IFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gWihlKSB7XHJcbiAgaWYgKCFlKSByZXR1cm4gXCJcIjtcclxuICBpZiAoZS5zZWxlY3RlZE9wdGlvbnM/Lmxlbmd0aCkge1xyXG4gICAgbGV0IHQgPSBRKGUuc2VsZWN0ZWRPcHRpb25zWzBdPy50ZXh0Q29udGVudCk7XHJcbiAgICBpZiAodCkgcmV0dXJuIHRcclxuICB9XHJcbiAgbGV0IHQgPSBRKGUudmFsdWUpO1xyXG4gIGlmICh0KSByZXR1cm4gdDtcclxuICBsZXQgciA9IFEoZS5nZXRBdHRyaWJ1dGU/LihcImFyaWEtdmFsdWV0ZXh0XCIpIHx8IGUuZ2V0QXR0cmlidXRlPy4oXCJhcmlhLWxhYmVsXCIpKTtcclxuICByZXR1cm4gciB8fCBRKGUudGV4dENvbnRlbnQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVlKGUpIHtcclxuICByZXR1cm4gZT8uY2hlY2tlZCA9PT0gITAgfHwgZT8uZ2V0QXR0cmlidXRlPy4oXCJhcmlhLWNoZWNrZWRcIikgPT09IFwidHJ1ZVwiIHx8IGU/LmNsYXNzTGlzdD8uY29udGFpbnNcclxuICAgID8uKFwib2otc2VsZWN0ZWRcIikgPT09ICEwXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV0KGUpIHtcclxuICBsZXQgdCA9IGUuJGNoZWNrYm94cyB8fCBbZS4kaW5wdXRdLFxyXG4gICAgciA9IGUub3B0aW9ucyB8fCBbXSxcclxuICAgIG4gPSB0Lm1hcCgoZSwgdCkgPT4gZWUoZSkgPyBRKHJbdF0pIHx8IFEoZS5jbG9zZXN0Py4oXCJsYWJlbFwiKT8udGV4dENvbnRlbnQpIHx8IFooZSkgOiBcIlwiKVxyXG4gICAgLmZpbHRlcihCb29sZWFuKTtcclxuICByZXR1cm4gbi5sZW5ndGggPiAwID8gbi5qb2luKFwiLCBcIikgOiBcIk5vXCJcclxufVxyXG5cclxuZnVuY3Rpb24gZXIoZSkge1xyXG4gIGxldCB0ID0gZS4kcmFkaW9QYXJlbnQgfHwgZS4kaW5wdXQsXHJcbiAgICByID0gQXJyYXkuZnJvbSh0Py5xdWVyeVNlbGVjdG9yQWxsPy4oJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpIHx8IFtdKSxcclxuICAgIG4gPSBlLm9wdGlvbnMgfHwgW10sXHJcbiAgICBvID0gci5maW5kSW5kZXgoZWUpO1xyXG4gIHJldHVybiBvID49IDAgPyBRKG5bb10pIHx8IFEocltvXS5jbG9zZXN0Py4oXCJsYWJlbFwiKT8udGV4dENvbnRlbnQpIHx8IFoocltvXSkgOiBlZShlLiRpbnB1dCkgPyBaKGVcclxuICAgIC4kaW5wdXQpIDogXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBlbihlKSB7XHJcbiAgbGV0IHQgPSBBcnJheS5mcm9tKGUuJGlucHV0Py5xdWVyeVNlbGVjdG9yQWxsPy4oXCIuY3gtc2VsZWN0LXBpbGwtbmFtZVwiKSB8fCBbXSksXHJcbiAgICByID0gdC5tYXAoZSA9PiBRKGUudGV4dENvbnRlbnQpKS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiwgXCIpO1xyXG4gIHJldHVybiByIHx8IFooZS4kaW5wdXQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVvKGUpIHtcclxuICBsZXQgdCA9IEFycmF5LmZyb20oZS4kaW5wdXQ/LnF1ZXJ5U2VsZWN0b3JBbGw/LihcImlucHV0LCBzZWxlY3RcIikgfHwgW10pLFxyXG4gICAgciA9IHQubWFwKFopLmZpbHRlcihCb29sZWFuKTtcclxuICByZXR1cm4gci5sZW5ndGggPiAwID8gci5qb2luKFwiIC8gXCIpIDogWihlLiRpbnB1dClcclxufVxyXG5cclxuZnVuY3Rpb24gZWkoZSkge1xyXG4gIHJldHVybiBlLnR5cGUgPT09IHMuRklFTERfVFlQRS5DSEVDS0JPWCA/IGV0KGUpIDogZS50eXBlID09PSBzLkZJRUxEX1RZUEUuUkFESU9HUk9VUCA/IGVyKGUpIDogZVxyXG4gICAgLnR5cGUgPT09IHMuRklFTERfVFlQRS5MSVNUQk9YID8gZW4oZSkgOiBlLnR5cGUgPT09IHMuRklFTERfVFlQRS5EQVRFID8gZW8oZSkgOiBaKGUuJGlucHV0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBlYShlID0gW10pIHtcclxuICBsZXQgdCA9IHt9O1xyXG4gIGZvciAobGV0IHIgb2YgZSkgcj8ubGFiZWwgJiYgci50eXBlICE9PSBzLkZJRUxEX1RZUEUuRURVQ0FUSU9OICYmIHIudHlwZSAhPT0gcy5GSUVMRF9UWVBFXHJcbiAgICAuRU1QTE9ZTUVOVCAmJiAodFtyLmxhYmVsXSA9IGVpKHIpKTtcclxuICByZXR1cm4gdFxyXG59XHJcblxyXG5mdW5jdGlvbiBlbChlKSB7XHJcbiAgbGV0IHQgPSB7fTtcclxuICBmb3IgKGxldCByIG9mIGU/LmNoaWxkcmVuIHx8IFtdKSByPy5sYWJlbCAmJiAodFtyLmxhYmVsXSA9IGVpKHIpKTtcclxuICByZXR1cm4gdFxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVzKGUgPSAhMSkge1xyXG4gIGF3YWl0ICgwLCBsLmFkZEVkdWNhdGlvbikoKTtcclxuICBsZXQgdCA9IG51bGw7XHJcbiAgZm9yIChsZXQgZSA9IDA7IGUgPCBFOyBlKyspIHtcclxuICAgIGxldCByID0gKDAsIHUuZ2V0T3JkZXJlZE5vZGVzKShcclxuICAgICAgICBcIi8vYXBwbHktZmxvdy1ibG9jayB8IC4vL3NlY3Rpb25bY29udGFpbnMoQGNsYXNzLCAnZW1haWwtdmVyaWZpY2F0aW9uJyldXCIsIGRvY3VtZW50KSxcclxuICAgICAgbiA9IG51bGwsXHJcbiAgICAgIGkgPSBBcnJheS5mcm9tKHIpLmZpbHRlcihlID0+IHtcclxuICAgICAgICBsZXQgdCA9IGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgICByID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZSk7XHJcbiAgICAgICAgcmV0dXJuIHQud2lkdGggPiAwICYmIHQuaGVpZ2h0ID4gMCAmJiBcIm5vbmVcIiAhPT0gci5kaXNwbGF5ICYmIFwiaGlkZGVuXCIgIT09IHJcclxuICAgICAgICAgIC52aXNpYmlsaXR5ICYmIFwiMFwiICE9PSByLm9wYWNpdHlcclxuICAgICAgfSk7XHJcbiAgICBmb3IgKGxldCBlIG9mIGkpIHtcclxuICAgICAgbGV0IHQgPSAoMCwgdS5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgICAgICAgIFwiLi8vKltjb250YWlucyhAY2xhc3MsICdhcHBseS1mbG93LWJsb2NrX19oZWFkZXInKV0vYXBwbHktZmxvdy1ibG9jay10aXRsZS9oMyB8IC4vLypbY29udGFpbnMoQGNsYXNzLCAnYXBwbHktZmxvdy1ibG9ja19faGVhZGVyJyldL2FwcGx5LWZsb3ctYmxvY2stdGl0bGUvaDIgfCAuLy9xdWljay1lbWFpbC12ZXJpZmljYXRpb24tZm9ybVwiLFxyXG4gICAgICAgICAgZSksXHJcbiAgICAgICAgciA9ICgwLCB1LmdldEZpcnN0T3JkZXJlZE5vZGUpKFwiLi8vKltjb250YWlucyhAY2xhc3MsICdhcHBseS1mbG93LWFncmVlbWVudHNfX3JvdycpXVwiLCBlKSxcclxuICAgICAgICBpID0gdD8udGV4dENvbnRlbnQ/LnRyaW0oKTtcclxuICAgICAgKCEoMCwgby5pc0VtcHR5KShpKSB8fCByKSAmJiAvZWR1Y2F0aW9uL2kudGVzdChpKSAmJiAobiA9IGUpXHJcbiAgICB9XHJcbiAgICBpZiAoWCh0ID0gYXdhaXQgRyhuLCBzLkZJRUxEX1RZUEUuRURVQ0FUSU9OLCBcIkVkdWNhdGlvblwiKSkpIGJyZWFrO1xyXG4gICAgZSA8IEUgLSAxICYmIGF3YWl0ICgwLCBjLmRlbGF5KSh4KVxyXG4gIH1cclxuICBsZXQgciA9ICEhdCAmJiBYKHQpO1xyXG4gIGlmIChjb25zb2xlLmluZm8oXCJbT3JhY2xlQ2xvdWRdW0VkdWNhdGlvbl0gaWRlbnRpdHktY2hlY2tcIiwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBhdXRvQ2xvc2U6IGUsXHJcbiAgICAgIHJlYWR5OiByLFxyXG4gICAgICBmaWVsZExhYmVsczogdD8uY2hpbGRyZW4/Lm1hcChlID0+IGUubGFiZWwpIHx8IFtdXHJcbiAgICB9KSksIHIgfHwgY29uc29sZS53YXJuKFwiW09yYWNsZUNsb3VkXVtFZHVjYXRpb25dIHRpbWVsaW5lIHJ1bGVzIG5vdCByZWFkeVwiLCB7XHJcbiAgICAgIGF1dG9DbG9zZTogZVxyXG4gICAgfSksIGUpIHtcclxuICAgIGxldCBlID0gYXdhaXQgKDAsIGwuY2FuY2VsRWR1Y2F0aW9uKSgpO1xyXG4gICAgaWYgKCFlKSB0aHJvdyBFcnJvcihcIk9yYWNsZUNsb3VkIEVkdWNhdGlvbiBkaWFsb2cgZGlkIG5vdCBjbG9zZVwiKVxyXG4gIH1cclxuICByZXR1cm4gciA/IHQgOiBudWxsXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZXUoZSA9ICExKSB7XHJcbiAgYXdhaXQgKDAsIGwuYWRkRXhwZXJpZW5jZSkoKTtcclxuICBsZXQgdCA9IG51bGw7XHJcbiAgZm9yIChsZXQgZSA9IDA7IGUgPCBFOyBlKyspIHtcclxuICAgIGxldCByID0gKDAsIHUuZ2V0T3JkZXJlZE5vZGVzKShcclxuICAgICAgICBcIi8vYXBwbHktZmxvdy1ibG9jayB8IC4vL3NlY3Rpb25bY29udGFpbnMoQGNsYXNzLCAnZW1haWwtdmVyaWZpY2F0aW9uJyldXCIsIGRvY3VtZW50KSxcclxuICAgICAgbiA9IG51bGwsXHJcbiAgICAgIGkgPSBBcnJheS5mcm9tKHIpLmZpbHRlcihlID0+IHtcclxuICAgICAgICBsZXQgdCA9IGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgICByID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZSk7XHJcbiAgICAgICAgcmV0dXJuIHQud2lkdGggPiAwICYmIHQuaGVpZ2h0ID4gMCAmJiBcIm5vbmVcIiAhPT0gci5kaXNwbGF5ICYmIFwiaGlkZGVuXCIgIT09IHJcclxuICAgICAgICAgIC52aXNpYmlsaXR5ICYmIFwiMFwiICE9PSByLm9wYWNpdHlcclxuICAgICAgfSk7XHJcbiAgICBmb3IgKGxldCBlIG9mIGkpIHtcclxuICAgICAgbGV0IHQgPSAoMCwgdS5nZXRGaXJzdE9yZGVyZWROb2RlKShcclxuICAgICAgICAgIFwiLi8vKltjb250YWlucyhAY2xhc3MsICdhcHBseS1mbG93LWJsb2NrX19oZWFkZXInKV0vYXBwbHktZmxvdy1ibG9jay10aXRsZS9oMyB8IC4vLypbY29udGFpbnMoQGNsYXNzLCAnYXBwbHktZmxvdy1ibG9ja19faGVhZGVyJyldL2FwcGx5LWZsb3ctYmxvY2stdGl0bGUvaDIgfCAuLy9xdWljay1lbWFpbC12ZXJpZmljYXRpb24tZm9ybVwiLFxyXG4gICAgICAgICAgZSksXHJcbiAgICAgICAgciA9ICgwLCB1LmdldEZpcnN0T3JkZXJlZE5vZGUpKFwiLi8vKltjb250YWlucyhAY2xhc3MsICdhcHBseS1mbG93LWFncmVlbWVudHNfX3JvdycpXVwiLCBlKSxcclxuICAgICAgICBpID0gdD8udGV4dENvbnRlbnQ/LnRyaW0oKTtcclxuICAgICAgKCEoMCwgby5pc0VtcHR5KShpKSB8fCByKSAmJiBMKGkpICYmIChuID0gZSlcclxuICAgIH1cclxuICAgIGlmIChLKHQgPSBhd2FpdCBHKG4sIHMuRklFTERfVFlQRS5FTVBMT1lNRU5ULCBcIkV4cGVyaWVuY2VcIikpKSBicmVhaztcclxuICAgIGUgPCBFIC0gMSAmJiBhd2FpdCAoMCwgYy5kZWxheSkoeClcclxuICB9XHJcbiAgcmV0dXJuIGUgJiYgYXdhaXQgKDAsIGwuY2FuY2VsRXhwZXJpZW5jZSkoKSwgdCB8fCB7XHJcbiAgICB0eXBlOiBzLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCxcclxuICAgIGxhYmVsOiBcIkV4cGVyaWVuY2VcIixcclxuICAgIHJlcXVpcmVkOiAhMCxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIG9wdGlvbnM6IFtdXHJcbiAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVjKGUsIHQgPSAhMSwgciA9IDEwLCBuID0gITEpIHtcclxuICBpZiAoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgZG9jdW1lbnQgfHwgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCkgcmV0dXJuIFtdO1xyXG4gIGxldCBvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZS5pZH0tdG9nZ2xlLWJ1dHRvbmApO1xyXG4gIGlmICghbykgcmV0dXJuIFtdO1xyXG4gIGxldCBpID0gXCJ0cnVlXCIgPT09IGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKSB8fCBcInRydWVcIiA9PT0gby5nZXRBdHRyaWJ1dGUoXHJcbiAgXCJhcmlhLWV4cGFuZGVkXCIpO1xyXG4gIGlmIChuICYmIChpIHx8IFwidHJ1ZVwiID09PSBlLmdldEF0dHJpYnV0ZShcImFyaWEtaW52YWxpZFwiKSkpIHJldHVybiBbXTtcclxuICBpIHx8IChvLmNsaWNrKCksIGF3YWl0IG5ldyBQcm9taXNlKGUgPT4gc2V0VGltZW91dChlLCBuID8gNTAgOiAzNTApKSk7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBpID0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpIHx8IG8uZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKTtcclxuICAgIGlmICghaSkgcmV0dXJuIFtdO1xyXG4gICAgbGV0IGEgPSBbXCJbcm9sZT0nZ3JpZGNlbGwnXVwiLCBcIltyb2xlPSdvcHRpb24nXVwiLCBcIltyb2xlPSdsaXN0aXRlbSddXCIsIFwibGlcIl0sXHJcbiAgICAgIGwgPSBuZXcgU2V0LFxyXG4gICAgICBzID0gZSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgdCBvZiBhKSB7XHJcbiAgICAgICAgICBsZXQgciA9IGUucXVlcnlTZWxlY3RvckFsbCh0KTtcclxuICAgICAgICAgIGlmICgwICE9PSByLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlIG9mIHIpIHtcclxuICAgICAgICAgICAgICBsZXQgdCA9IEEoZS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgdCAmJiBcIk5vIFJlc3VsdHNcIiAhPT0gdCAmJiBcIlxcdTIwMTQgTWFrZSBhIFNlbGVjdGlvbiBcXHUyMDE0XCIgIT09IHQgJiYgbC5hZGQodClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdSA9IG51bGw7XHJcbiAgICBmb3IgKGxldCBlID0gMDsgZSA8IHIgJiYgKCh1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSkpICYmIFwidHJ1ZVwiICE9PSB1LmdldEF0dHJpYnV0ZShcclxuICAgICAgICBcImFyaWEtYnVzeVwiKSAmJiBzKHUpLCAhKGwuc2l6ZSA+IDApKTsgZSsrKSBlICsgMSA8IHIgJiYgYXdhaXQgKDAsIGMuZGVsYXkpKG4gPyA1MCA6IDEwMCk7XHJcbiAgICBpZiAodCAmJiB1ICYmIGwuc2l6ZSA8IDIwMClcclxuICAgICAgZm9yIChsZXQgZSBvZiBlZCh1KSkge1xyXG4gICAgICAgIGxldCB0ID0gZS5zY3JvbGxUb3AsXHJcbiAgICAgICAgICByID0gTWF0aC5tYXgoMCwgZS5zY3JvbGxIZWlnaHQgLSBlLmNsaWVudEhlaWdodCksXHJcbiAgICAgICAgICBuID0gTWF0aC5tYXgoMTAwLCBNYXRoLmZsb29yKC44ICogZS5jbGllbnRIZWlnaHQpKTtcclxuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8PSByOyB0ICs9IG4pIGUuc2Nyb2xsVG9wID0gTWF0aC5taW4odCwgciksIGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXHJcbiAgICAgICAgICBcInNjcm9sbFwiLCB7XHJcbiAgICAgICAgICAgIGJ1YmJsZXM6ICEwXHJcbiAgICAgICAgICB9KSksIGF3YWl0ICgwLCBjLmRlbGF5KSgxMDApLCBzKHUpO1xyXG4gICAgICAgIHIgPiAwICYmIGUuc2Nyb2xsVG9wICE9PSByICYmIChlLnNjcm9sbFRvcCA9IHIsIGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzY3JvbGxcIiwge1xyXG4gICAgICAgICAgYnViYmxlczogITBcclxuICAgICAgICB9KSksIGF3YWl0ICgwLCBjLmRlbGF5KSgxMDApLCBzKHUpKSwgZS5zY3JvbGxUb3AgPSB0LCBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFxyXG4gICAgICAgICAgXCJzY3JvbGxcIiwge1xyXG4gICAgICAgICAgICBidWJibGVzOiAhMFxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgIH1cclxuICAgIHJldHVybiBbLi4ubF1cclxuICB9IGZpbmFsbHkge1xyXG4gICAgaSB8fCBvLmNsaWNrKClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkKGUpIHtcclxuICBsZXQgdCA9IFtlLCAuLi5BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcIipcIikpXTtcclxuICByZXR1cm4gdC5maWx0ZXIoKGUsIHIpID0+IHQuaW5kZXhPZihlKSA9PT0gciAmJiBcIm51bWJlclwiID09IHR5cGVvZiBlLnNjcm9sbFRvcCAmJiBcIm51bWJlclwiID09XHJcbiAgICB0eXBlb2YgZS5zY3JvbGxIZWlnaHQgJiYgXCJudW1iZXJcIiA9PSB0eXBlb2YgZS5jbGllbnRIZWlnaHQgJiYgZS5zY3JvbGxIZWlnaHQgPiBlXHJcbiAgICAuY2xpZW50SGVpZ2h0ICsgMjApXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJydWxlcy5kOTczYTcwZS5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);