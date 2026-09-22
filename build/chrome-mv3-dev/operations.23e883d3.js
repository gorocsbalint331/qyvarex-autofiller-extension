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
})({"4iLPC":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\phenom\\operations.js",
    "bundleId": "daf7885b23e883d3",
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
var j = z(require("eec29be78cbf7f62"));
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

},{"eec29be78cbf7f62":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"jcaJE":[function(require,module,exports) {
/**
 * Parcel module id: hv55d
 * Resolved path: src/contents/sites/phenom/operations.js
 * Dependencies:
 *   ./rules -> eZc7r  =>  src/contents/sites/phenom/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   dayjs/plugin/customParseFormat -> g94SE  =>  dayjs/plugin/customParseFormat.js
 *   ~contents/crawler/utils/select -> h22JB  =>  src/contents/crawler/utils/select.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/getTargetOrTimeout -> 1TBhF  =>  src/utils/getTargetOrTimeout.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "recordPhenomDateDebug", ()=>F), n.export(r, "getPhenomCoverLetterUploadPayload", ()=>I), n.export(r, "shouldSuppressPhenomUploadAlertMessage", ()=>P), n.export(r, "installPhenomUploadAlertSuppressor", ()=>_), n.export(r, "suppressPhenomUploadSuccessAlert", ()=>L), n.export(r, "hasPhenomAnswerForSnapshotField", ()=>Q), n.export(r, "isPhenomBlockingLoaderVisible", ()=>Z), n.export(r, "waitForPhenomLoaderIdle", ()=>et), n.export(r, "captureCiscoPhenomResumeParserBaseline", ()=>ei), n.export(r, "waitForCiscoPhenomResumeParserToSettle", ()=>ea), n.export(r, "fillPhoneCountryCodeSelectsFromRecord", ()=>ek), n.export(r, "findBestNativeSelectOption", ()=>eT), n.export(r, "fillRequiredConsentCheckboxes", ()=>e0), n.export(r, "waitForResumeFileInput", ()=>e1), n.export(r, "getCoverLetterFileInputSync", ()=>e9), n.export(r, "hasCoverLetterFieldPresence", ()=>ta), n.export(r, "getCoverLetterFieldStatus", ()=>tl), n.export(r, "hasResumeFieldPresence", ()=>tm), n.export(r, "preFillForm", ()=>tS), n.export(r, "fillInputTextField", ()=>tE), n.export(r, "capturePhenomSchoolCandidates", ()=>tW), n.export(r, "typePhenomSchoolProbe", ()=>tK), n.export(r, "clearPhenomSchoolProbe", ()=>tX), n.export(r, "fillResolvedPhenomSchoolField", ()=>tJ), n.export(r, "fillSearchField", ()=>tQ), n.export(r, "fillDateField", ()=>rc), n.export(r, "fillSelectField", ()=>rd), n.export(r, "fillRadioGroupField", ()=>rf), n.export(r, "fillCheckboxField", ()=>rp), n.export(r, "getContinueButton", ()=>rm), n.export(r, "uploadResume", ()=>rh), n.export(r, "uploadCoverLetter", ()=>rg), n.export(r, "countCompositeSections", ()=>rb), n.export(r, "ensureInitialCompositeSection", ()=>ry), n.export(r, "addCompositeSection", ()=>rv), n.export(r, "processCompositeBlocks", ()=>rw);
var o = e("~contents/methods/choice-match"), i = e("dayjs"), a = n.interopDefault(i), l = e("dayjs/plugin/customParseFormat"), s = n.interopDefault(l), u = e("@plasmohq/messaging"), c = e("~contents/crawler/utils/select"), d = e("~contents/methods/answer"), f = e("~contents/methods/dom"), p = e("~contents/methods/observer"), m = e("~core/enums"), h = e("~core/dom"), g = e("~utils/delay"), b = e("~utils/getTargetOrTimeout"), y = n.interopDefault(b), v = e("./rules");
(0, a.default).extend(s.default);
let w = "data-jobright-phenom-upload-alert-patch", S = "__jr_phenom_upload_alert_suppressor", E = /(?:(?:resume|file)\s+(?:has\s+been\s+)?(?:uploaded|attached)\s+successfully|uploaded\s+(?:your\s+)?(?:resume|file)\s+successfully|(?:resume|file)\s+has\s+been\s+successfully\s+attached)/i, x = "Cover_Letter", C = 12e3, A = 3e4, k = 800, T = 100;
function F(e1, t) {
    console.info(`[phenom][date-debug] ${e1} ${JSON.stringify(t)}`);
}
_c = F;
function I(e1) {
    return {
        ...e1,
        coverLetterName: D(e1.coverLetterName)
    };
}
_c1 = I;
function j(e1) {
    return e1.replace(/\.[^/.]+$/, "").replace(/[\\/:*?"<>|]+/g, " ").replace(/\s+/g, " ").trim();
}
function D(e1) {
    let t = j(e1), r1 = t.match(/^Cover_Letter_([^_]+)/i), n = j(r1?.[1] || "");
    if (n) return `${x}_${n}`;
    let o = t.replace(/\bcover\s+letter\b/gi, " ").replace(/\s+/g, " ").trim().split(/\s+/).slice(0, 2).join(" ");
    return o ? `${x}_${o}` : x;
}
_c2 = D;
function P(e1) {
    return E.test(String(e1 ?? ""));
}
_c3 = P;
async function _() {
    if (document.documentElement?.getAttribute(w) === "true") return !0;
    let e1 = await (0, u.sendToBackground)({
        name: "installMainWorldAlertSuppressor",
        body: {
            markerAttr: w,
            patternFlags: E.flags,
            patternSource: E.source,
            stateKey: S
        }
    });
    return e1?.success === !0;
}
async function L() {
    let e1 = await _();
    return e1 || console.warn("[phenom] upload alert suppressor is not installed"), e1;
}
_c4 = L;
function R(e1) {
    e1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("blur", {
        bubbles: !0
    }));
}
_c5 = R;
function O(e1) {
    e1?.blur();
}
_c6 = O;
function M(e1, t) {
    e1.dispatchEvent(new Event(t, {
        bubbles: !0,
        cancelable: !0,
        composed: !0
    }));
}
_c7 = M;
function N(e1, t) {
    e1.dispatchEvent(new MouseEvent(t, {
        bubbles: !0,
        cancelable: !0,
        view: window
    }));
}
_c8 = N;
function $(e1) {
    N(e1, "mousedown"), N(e1, "mouseup"), N(e1, "click");
}
function B(e1, t) {
    let r1 = Object.getPrototypeOf(e1), n = Object.getOwnPropertyDescriptor(r1, "value");
    n?.set?.call(e1, t), n?.set || (e1.value = t);
}
_c9 = B;
function q(e1, t) {
    let r1 = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, "value") || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e1), "value");
    r1?.set?.call(e1, t), r1?.set || (e1.value = t);
}
function U(e1) {
    return String(e1 ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}
_c10 = U;
function H(e1) {
    return U(e1).replace(/[^a-z0-9]/g, "");
}
_c11 = H;
function Y(e1) {
    return String(e1 ?? "").replace(/\D/g, "");
}
_c12 = Y;
function z(e1, t) {
    let r1 = U(e1), n = U(t);
    if (!r1 || !n) return !1;
    if (r1 === n) return !0;
    let o = H(e1), i = H(t);
    if (o && o === i) return !0;
    let a = Y(e1), l = Y(t);
    return !!a && !!l && a.replace(/^1(?=\d{10}$)/, "") === l.replace(/^1(?=\d{10}$)/, "") || r1.includes(n) || n.includes(r1);
}
function V(e1) {
    return String(e1 ?? "").trim().length > 0;
}
_c13 = V;
function W(e1) {
    return Array.isArray(e1) ? e1.some((e1)=>W(e1)) : "string" == typeof e1 ? e1.trim().length > 0 : null != e1;
}
_c14 = W;
function G(e1, t) {
    let r1 = H(e1);
    return !!r1 && Object.entries(t || {}).some(([e1, t])=>H(e1) === r1 && W(t));
}
_c15 = G;
function K(e1) {
    let t = H(e1);
    return "country" === t || "countryregion" === t || "countryorregion" === t || "placeofresidencecountry" === t || t.includes("phonecountrycode") || t.includes("countryphonecode") || t.includes("countryregionphonecode") || t.includes("country") && t.includes("phone") && t.includes("code");
}
_c16 = K;
function X(e1) {
    if (W(e1?.country)) return !0;
    let t = e1?.regular || {};
    return [
        "Country",
        "Country/Region",
        "Country or Region",
        "Place of Residence - Country"
    ].some((e1)=>W(t[e1]));
}
_c17 = X;
function J(e1, t) {
    let r1 = H(e1), n = t?.fillDataList || t?.fill_data_list || [];
    return Array.isArray(n) && n.some((e1)=>H(e1?.name) === r1 && !W(e1?.value));
}
_c18 = J;
function Q(e1, t) {
    return !!e1.trim() && (!!G(e1, t?.regular || {}) || K(e1) && J(e1, t) && X(t));
}
_c19 = Q;
function Z() {
    let e1 = document.querySelector(".overlaybg"), t = document.querySelector(".widget-loader");
    return (0, v.isActuallyVisible)(e1) || (0, v.isActuallyVisible)(t);
}
_c20 = Z;
async function ee(e1 = 12e3) {
    return await (0, p.waitForCondition)(()=>!Z(), {
        timeout: e1,
        interval: 50,
        observeTarget: document.body
    });
}
async function et(e1 = 0) {
    let t = await ee();
    if (!t) return console.warn("[phenom] loader did not become hidden before timeout"), !1;
    if (e1 <= 0) return !0;
    let r1 = Date.now() + e1;
    for(; Date.now() < r1;){
        if (Z()) {
            let e1 = await ee();
            if (!e1) return console.warn("[phenom] loader did not settle before timeout"), !1;
        }
        await (0, g.delay)(50);
    }
    return !0;
}
function er() {
    return "careers.cisco.com" === window.location.hostname && (0, v.isInitialApplicationStep)((0, v.getStepInfo)()) && !!(0, v.getFormRoot)();
}
function en(e1) {
    if (!(e1 instanceof HTMLElement) || !e1.isConnected || e1.disabled || !(0, v.isActuallyVisible)(e1) || e1.closest(".resume-upload-wrapper")) return !1;
    let t = e1.tagName.toLowerCase();
    if (![
        "input",
        "textarea",
        "select"
    ].includes(t)) return !1;
    let r1 = "input" === t ? (e1.getAttribute("type") || "text").toLowerCase() : "";
    if ([
        "file",
        "hidden",
        "checkbox",
        "radio"
    ].includes(r1)) return !1;
    let n = `${e1.getAttribute("id") || ""} ${e1.getAttribute("name") || ""}`.toLowerCase();
    return !/(resumepath|resumename|resumefilesize|resumebucketid|resumerelativepath|isresume)/.test(n);
}
function eo() {
    let e1 = Array.from(v.getFormRoot()?.querySelectorAll("input, textarea, select") ?? []).filter(en);
    return {
        fieldCount: e1.length,
        fieldSignature: e1.map((e1, t)=>[
                t,
                e1.tagName,
                e1.getAttribute("id") || "",
                e1.getAttribute("name") || "",
                e1.value || ""
            ].join(":")).join("|")
    };
}
function ei() {
    return er() ? eo() : null;
}
async function ea(e1, t = {}) {
    let r1 = t.startTimeoutMs ?? C, n = t.settleTimeoutMs ?? A, o = t.quietMs ?? k, i = t.intervalMs ?? T, a = document.documentElement || document.body, l = e1, s = Date.now(), u = !1, c = !1, d = ()=>{
        let e1 = eo();
        e1.fieldSignature !== l.fieldSignature && (l = e1, s = Date.now(), c = !0);
    }, f = await (0, p.waitForCondition)(()=>Z() ? (u = !0, s = Date.now(), !0) : (d(), c), {
        timeout: r1,
        interval: i,
        observeTarget: a
    });
    if (!f) return console.warn("[phenom] Cisco resume parser did not show activity after upload", {
        fieldCount: l.fieldCount,
        sawFieldRewrite: c
    }), !1;
    let m = await (0, p.waitForCondition)(()=>Z() ? (u = !0, s = Date.now(), !1) : (d(), Date.now() - s >= o), {
        timeout: n,
        interval: i,
        observeTarget: a
    });
    return m ? (console.log("[phenom] Cisco resume parser settled", {
        fieldCount: l.fieldCount,
        sawLoader: u,
        sawFieldRewrite: c
    }), !0) : (console.warn("[phenom] Cisco resume parser did not settle after upload", {
        fieldCount: l.fieldCount,
        sawLoader: u,
        sawFieldRewrite: c
    }), !1);
}
function el(e1) {
    return [
        "true",
        "yes",
        "1",
        "checked",
        "agree",
        "agreed",
        "current"
    ].includes(U(e1));
}
function es(e1) {
    return [
        "false",
        "no",
        "0",
        "unchecked",
        "disagree",
        "decline"
    ].includes(U(e1));
}
function eu(e1) {
    if (!e1) return "";
    let t = e1.cloneNode(!0);
    return t.querySelectorAll("input, .check, .checkmark, .required, [aria-hidden='true']").forEach((e1)=>{
        e1.remove();
    }), t.textContent?.replace(/\s+/g, " ").trim() || "";
}
function ec(e1) {
    let t = e1.id ? document.querySelector(`label[for="${CSS.escape(e1.id)}"]`) : null;
    return eu(t || e1.closest("label") || e1.parentElement);
}
function ed(e1) {
    let t = e1.closest("label"), r1 = e1.closest(".daterangepicker-checkbox"), n = eu(t?.querySelector(".checkboxText")) || eu(t) || eu(r1?.querySelector(".checkboxText")) || eu(r1) || ec(e1);
    return n.replace(/\*/g, " ").replace(/\s+/g, " ").trim();
}
function ef(e1) {
    return "undefined" != typeof CSS && "function" == typeof CSS.escape ? CSS.escape(e1) : e1.replace(/["\\]/g, "\\$&");
}
function ep(e1) {
    let t = e1.id ? document.querySelector(`label[for="${ef(e1.id)}"]`) : null;
    return (t?.textContent || e1.closest(".form-group.field")?.querySelector("label.control-label, legend, label")?.textContent || "").replace(/\*/g, " ").replace(/\s+/g, " ").trim();
}
function em(e1, t) {
    let r1 = e1.$input, n = r1?.id;
    if (n) {
        let e1 = document.getElementById(n);
        if (e1 instanceof HTMLSelectElement) return e1;
    }
    let o = e1.$label?.getAttribute?.("for");
    if (o) {
        let e1 = document.getElementById(o);
        if (e1 instanceof HTMLSelectElement) return e1;
    }
    let i = r1?.name;
    if (i) {
        let e1 = Array.from(document.querySelectorAll("select")).find((e1)=>e1.name === i);
        if (e1) return e1;
    }
    let a = U(e1.label);
    return a ? Array.from(document.querySelectorAll("select")).find((e1)=>U(ep(e1)) === a) || (t?.isConnected ? t : null) || (r1?.isConnected ? r1 : null) : null;
}
function eh(e1) {
    let t = U(e1.textContent);
    return !e1.value && ("" === t || "select" === t || "please select" === t || "please select..." === t);
}
function eg(e1) {
    let t = H(e1);
    return t.includes("phonecountrycode") || t.includes("countryphonecode") || t.includes("countryregionphonecode") || t.includes("country") && t.includes("phone") && t.includes("code");
}
function eb(e1) {
    return [
        "united states",
        "united states of america",
        "usa",
        "us"
    ].includes(U(e1));
}
function ey(e1) {
    let t = U(e1.textContent), r1 = U(e1.value);
    return [
        "usa",
        "us"
    ].includes(r1) || [
        "usa",
        "united states",
        "united states of america"
    ].includes(t) || t.startsWith("usa (") || t.startsWith("united states (") || t.startsWith("united states of america (");
}
function ev(e1) {
    let t = Array.isArray(e1) ? e1 : [
        e1
    ];
    for (let e1 of t){
        let t = String(e1 ?? "").trim();
        if (t) return t;
    }
    return "";
}
function ew(e1) {
    let t = Object.entries(e1 || {}), r1 = t.find(([e1])=>eg(e1));
    if (r1) return ev(r1[1]);
    let n = t.find(([e1])=>"countrycode" === H(e1));
    return n ? ev(n[1]) : "";
}
function eS(e1) {
    return Array.from(e1.options).some((e1)=>/\(\s*\+\s*\d/.test(e1.textContent || ""));
}
function eE(e1) {
    let t = [
        ep(e1),
        e1.id,
        e1.name,
        e1.getAttribute("aria-label"),
        e1.getAttribute("aria-labelledby")
    ].join(" "), r1 = H(t), n = eg(t) || r1.includes("countrycode") && r1.includes("phone");
    return n && eS(e1);
}
function ex(e1, t) {
    return !e1.disabled && (e1.required || "true" === e1.getAttribute("aria-required") || !!t?.querySelector(".required") || !!t?.querySelector(".error-detail, [role='alert'], .text-danger"));
}
function eC(e1) {
    let t = e1.closest(".form-group.field");
    return (0, v.isActuallyVisible)(e1) || ex(e1, t);
}
function eA(e1) {
    let t = e1.closest(".form-group.field"), r1 = ep(e1) || e1.getAttribute("aria-label") || e1.id || "Country/Region Phone Code";
    return {
        label: r1,
        required: e1.required || "true" === e1.getAttribute("aria-required") || !!t?.querySelector(".required, .error-detail, [role='alert']"),
        type: m.FIELD_TYPE.SELECT,
        options: Array.from(e1.options).map((e1)=>e1.textContent?.replace(/\s+/g, " ").trim() || "").filter(Boolean),
        $label: (e1.id ? document.querySelector(`label[for="${ef(e1.id)}"]`) : null) || t || e1,
        $input: e1
    };
}
async function ek(e1) {
    let t = ew(e1);
    if (!t) return [];
    let r1 = [], n = (0, v.getFormRoot)() ?? document, o = Array.from(n.querySelectorAll("select")).filter((e1)=>!e1.disabled && eC(e1) && eE(e1));
    for (let e1 of o){
        let n = e1.selectedOptions?.[0];
        if (e1.value && n && !eh(n)) continue;
        let o = eA(e1), i = await rd(o, t);
        i && r1.push(o.label);
    }
    return r1;
}
function eT(e1, t, r1) {
    let n = String(t ?? "").trim();
    if (!n) return null;
    let i = U(n), a = e1.filter((e1)=>!eh(e1)), l = a.find((e1)=>{
        let t = U(e1.textContent), r1 = U(e1.value);
        return t === i || r1 === i;
    });
    if (l) return l;
    let s = eg(r1), u = U(r1).includes("country") && !s;
    if ((u || s) && eb(n)) {
        let e1 = a.find(ey);
        if (e1) return e1;
    }
    let d = U(r1).includes("phone");
    if (d) {
        let e1 = [
            "mobile",
            "cell",
            "cellphone",
            "cell phone"
        ];
        if (e1.includes(i)) {
            let e1 = a.find((e1)=>(0, o.isExactChoiceMatch)(e1.textContent || e1.value, "mobile"));
            if (e1) return e1;
        }
    }
    return (0, c.findMatchOption)(a, n) || null;
}
function eF(e1, t) {
    if (!e1?.isConnected) return !1;
    let r1 = U(e1.value), n = U(t.value);
    return !!r1 && !!n && (e1.value === t.value || r1 === n);
}
async function eI(e1, t) {
    let r1 = Array.from(e1.options), n = r1.findIndex((e1)=>e1 === t);
    for (let o of (e1.focus(), $(e1), n >= 0 && (e1.selectedIndex = n), q(e1, t.value), r1))o.selected = o === t;
    t.selected = !0, e1.setAttribute("value", t.value), M(e1, "change"), M(e1, "input"), M(e1, "blur"), M(e1, "focusout"), O(e1), await (0, g.delay)(160);
}
async function ej(e1, t, r1) {
    let n = await (0, p.waitForCondition)(()=>{
        let n = em(e1, t);
        return eF(n, r1);
    }, {
        timeout: 900,
        interval: 50,
        observeTarget: document.body
    });
    return !!n && (await (0, g.delay)(150), eF(em(e1, t), r1));
}
function eD(e1) {
    let t = e1.closest("label"), r1 = t?.querySelector(".radio-text"), n = eu(r1);
    if (n) return n;
    let o = e1.id ? document.querySelector(`label[for="${ef(e1.id)}"]`) : null;
    return eu(o || t || e1.parentElement);
}
function eP(e1) {
    return e1.closest("label") || (e1.id ? document.querySelector(`label[for="${ef(e1.id)}"]`) : null) || e1;
}
function e_(e1) {
    if (e1.isConnected) return e1;
    if (e1.id) {
        let t = document.getElementById(e1.id);
        if (t instanceof HTMLInputElement && "radio" === t.type) return t;
    }
    let t = Array.from(document.querySelectorAll('input[type="radio"]'));
    if (e1.name) {
        let r1 = t.find((t)=>t.name === e1.name && t.value === e1.value);
        if (r1) return r1;
    }
    let r1 = U(eD(e1));
    return t.find((t)=>U(eD(t)) === r1 && U(t.value) === U(e1.value)) || null;
}
function eL(e1) {
    let t = e1.closest(".field-radio-group, .form-group.field") ?? document, r1 = Array.from(t.querySelectorAll('input[type="radio"]'));
    if (!e1.name) return r1;
    let n = r1.filter((t)=>t.name === e1.name);
    return n.length > 0 ? n : r1;
}
function eR(e1) {
    if (!e1?.isConnected) return !1;
    let t = e1.getAttribute("ischecked");
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    let r1 = e1.getAttribute("aria-checked");
    return "true" === r1 || "false" !== r1 && e1.checked;
}
function eO(e1, t) {
    let r1 = U(t);
    if (!r1) return !1;
    let n = U(eD(e1)), o = U(e1.value), i = U(e1.getAttribute("aria-label")), a = [
        n,
        o,
        i
    ].filter(Boolean), l = H(r1);
    return !!(a.some((e1)=>e1 === r1) || l && a.some((e1)=>H(e1) === l) || el(r1) && ("yes" === n || "true" === o || "true" === i) || es(r1) && ("no" === n || "false" === o || "false" === i));
}
async function eM(e1) {
    let t = eP(e1);
    if (e1.focus(), $(t), t.click(), await (0, g.delay)(80), eR(e1)) {
        O(e1);
        return;
    }
    for (let t of eL(e1))t.checked = t === e1, t.setAttribute("aria-checked", t === e1 ? "true" : "false"), t.setAttribute("ischecked", t === e1 ? "true" : "false");
    M(e1, "input"), M(e1, "change"), M(e1, "click"), eP(e1).click(), O(e1), await (0, g.delay)(120);
}
async function eN(e1) {
    let t = await (0, p.waitForCondition)(()=>eR(e_(e1)), {
        timeout: 900,
        interval: 50,
        observeTarget: document.body
    });
    return !!t && (await (0, g.delay)(150), eR(e_(e1)));
}
function e$(e1, t = {}) {
    if (e1.isConnected && (0, v.isActuallyVisible)(e1)) return e1;
    if (e1.id) {
        let t = document.getElementById(e1.id);
        if ((t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && t.tagName === e1.tagName) return t;
    }
    if (e1.name) {
        let t = Array.from(document.querySelectorAll("input, textarea")).find((t)=>t.name === e1.name && t.tagName === e1.tagName);
        if (t) return t;
    }
    let r1 = U(t.label);
    if (r1) {
        let t = Array.from(document.querySelectorAll("input, textarea")).find((t)=>{
            if ("hidden" === t.type || "radio" === t.type || "checkbox" === t.type || t.disabled || t.tagName !== e1.tagName || !(0, v.isActuallyVisible)(t)) return !1;
            let n = t.closest(".form-group.field"), o = n?.querySelector("label.control-label, legend, label")?.textContent?.replace(/\*/g, " ").replace(/\s+/g, " ").trim() || t.getAttribute("aria-label") || t.getAttribute("label") || "";
            return U(o) === r1;
        });
        if (t) return t;
    }
    return null;
}
async function eB(e1, t, r1 = {}) {
    let n = await (0, p.waitForCondition)(()=>{
        let n = e$(e1, r1);
        return z(n?.value, t);
    }, {
        timeout: 900,
        interval: 50,
        observeTarget: document.body
    });
    return !!n && (await (0, g.delay)(100), z(e$(e1, r1)?.value, t));
}
function eq(e1) {
    let t = e1.value.trim();
    if (t) return t;
    let r1 = e1.closest(".rbt, .async-typeahead-v3, .form-group.field") ?? e1.parentElement;
    return r1?.querySelector(".rbt-token, .rbt-token-label, .rbt-input-main, [class*='token'], [class*='selected']")?.textContent?.replace(/\s+/g, " ").trim() || "";
}
function eU(e1) {
    return "combobox" === e1.getAttribute("role") || "list" === e1.getAttribute("aria-autocomplete") || "asyncTypeahead" === e1.getAttribute("data-attribute") || !!e1.closest(".rbt, .async-typeahead-v3");
}
async function eH(e1, t, r1) {
    let n = [
        r1,
        t
    ].filter((e1)=>!!e1 && e1.trim().length > 0), o = ()=>{
        let t = e$(e1);
        if (!t) return !1;
        let r1 = eq(t);
        return n.some((e1)=>z(r1, e1));
    }, i = await (0, p.waitForCondition)(o, {
        timeout: 900,
        interval: 50,
        observeTarget: document.body
    });
    return !!i && (await (0, g.delay)(100), o());
}
function eY(e1) {
    return e1.closest("label") || (e1.id ? document.querySelector(`label[for="${ef(e1.id)}"]`) : null) || e1.closest(".daterangepicker-checkbox") || e1;
}
function ez(e1) {
    return [
        eY(e1),
        e1.closest("label"),
        e1.id ? document.querySelector(`label[for="${ef(e1.id)}"]`) : null,
        e1.closest(".checkbox, .daterangepicker-checkbox"),
        e1
    ].filter((e1, t, r1)=>!!e1 && r1.indexOf(e1) === t);
}
function eV(e1, t = {}) {
    if (e1.isConnected) return e1;
    if (e1.id) {
        let t = document.getElementById(e1.id);
        if (t instanceof HTMLInputElement && "checkbox" === t.type) return t;
    }
    let r1 = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    if (e1.name) {
        let t = r1.filter((t)=>t.name === e1.name), n = U(e1.value), o = t.find((e1)=>U(e1.value) === n);
        if (o) return o;
        if (1 === t.length) return t[0];
    }
    let n = [
        ed(e1),
        t.label
    ].map((e1)=>U(e1)).filter(Boolean);
    return r1.find((e1)=>n.includes(U(ed(e1)))) || null;
}
function eW(e1) {
    if (!e1) return !1;
    let t = [
        e1.getAttribute("ischecked"),
        e1.getAttribute("aria-checked"),
        e1.getAttribute("value")
    ].map((e1)=>U(e1)), r1 = t.includes("true"), n = t.includes("false");
    if (e1.checked && r1) return !0;
    if (!e1.checked && n) return !1;
    let o = U(e1.getAttribute("ischecked")), i = U(e1.getAttribute("aria-checked"));
    return o && o === i ? "true" === o : "true" === o || "false" !== o && ("true" === i || "false" !== i && e1.checked);
}
function eG(e1, t) {
    return eW(e1) === t;
}
function eK(e1) {
    return !0 === e1.required || null != e1.getAttribute("required") || "true" === e1.getAttribute("aria-required");
}
function eX(e1) {
    let t = [
        e1,
        e1.closest("label"),
        e1.closest(".checkbox"),
        e1.closest(".form-group.field"),
        e1.closest("fieldset")
    ].filter((e1)=>!!e1);
    return t.find((e1)=>(0, v.isActuallyVisible)(e1)) ?? null;
}
function eJ(e1) {
    let t = U([
        e1.id,
        e1.name,
        e1.getAttribute("aria-describedby"),
        e1.closest(".form-group.field")?.textContent,
        e1.closest("fieldset")?.id
    ].join(" "));
    return t.includes("consent") || t.includes("agreement") || t.includes("optin") || t.includes("opt-in") || t.includes("opt in") || t.includes("privacy") || t.includes("applicantcertification") || t.includes("usconsentobject");
}
function eQ(e1) {
    return ed(e1) || e1.getAttribute("aria-label") || e1.id || e1.name || "Required Consent";
}
async function eZ(e1, t, r1 = {}) {
    let n = eV(e1, r1);
    if (!n) return !1;
    let o = ez(n).length;
    for(let e1 = 0; e1 < o; e1 += 1){
        let o = eV(n, r1);
        if (!o) return !1;
        let i = ez(o)[e1];
        if (!i) continue;
        i.scrollIntoView?.({
            block: "center",
            inline: "nearest"
        }), o.focus(), N(i, "mousedown"), N(i, "mouseup"), i.click();
        let a = await (0, p.waitForCondition)(()=>{
            let e1 = eV(o, r1);
            return !!e1 && eG(e1, t);
        }, {
            timeout: 450,
            interval: 50,
            observeTarget: o.closest(".form-group.field") || document.body
        });
        if (a) return O(eV(o, r1)), !0;
    }
    return O(eV(n, r1)), !1;
}
async function e0() {
    let e1 = Array.from(document.querySelectorAll('input[type="checkbox"]')).filter((e1)=>!e1.disabled && eK(e1) && eJ(e1) && !!eX(e1) && !eW(e1)), t = [];
    for (let r1 of e1){
        let e1 = eQ(r1), n = await eZ(r1, !0, {
            label: e1
        });
        n ? t.push(e1) : console.warn("[phenom] required consent checkbox did not commit", {
            id: r1.id,
            label: e1
        });
    }
    return t;
}
function e2() {
    let e1 = document.querySelector(".resume-upload-wrapper"), t = e1?.querySelector('input[type="file"]') ?? null;
    if (t?.isConnected && !t.disabled) return t;
    let r1 = Array.from(document.querySelectorAll('input[type="file"]')).filter((e1)=>e1.isConnected && !e1.disabled);
    return r1.find((e1)=>!!e1.closest(".resume-upload-wrapper") && (0, v.isActuallyVisible)(e1.closest(".resume-upload-wrapper"))) || r1.find((e1)=>(0, v.isActuallyVisible)(e1)) || r1[0] || null;
}
async function e1() {
    return await (0, y.default)(()=>e2(), ()=>!1, 25);
}
function e3() {
    return document.querySelector(".resume-upload-wrapper");
}
function e4() {
    let e1 = document.querySelector("#cover-letter-files-div");
    if (e1) return e1;
    let t = document.querySelector("#coverLetter .attachment-files");
    return t || (e6()?.querySelector(".attachment-files") ?? document.querySelector(".row.form-group.additional-attachment-v2 .attachment-files"));
}
function e5(e1) {
    return !!e1.querySelector('input[type="file"]');
}
function e6() {
    let e1 = document.querySelector("#additionalAttachment");
    return e1 && e5(e1) ? e1 : Array.from(document.querySelectorAll(".row.form-group.additional-attachment-v2")).find(e5) ?? null;
}
function e8() {
    let e1 = e6();
    if (e1) return e1;
    let t = e4();
    if (t) {
        let e1 = t.parentElement;
        for(; e1 && e1 !== document.body;){
            if (e1.querySelector('input[type="file"]')) return e1;
            e1 = e1.parentElement;
        }
    }
    let r1 = Array.from(document.querySelectorAll("label, legend, h1, h2, h3, h4, h5, span, div")).find((e1)=>U(e1.textContent).includes("cover letter"));
    return r1?.closest(".form-group, .form-field, .field, .question-item, li, section, .row") ?? null;
}
function e9() {
    let e1 = e8();
    if (e1) {
        let t = e1.querySelector('input[type="file"]') ?? null;
        if (t?.isConnected && !t.disabled) return t;
    }
    let t = e4();
    if (t) {
        let e1 = t.parentElement;
        for(; e1 && e1 !== document.body;){
            let t = e1.querySelector('input[type="file"]');
            if (t?.isConnected && !t.disabled) return t;
            e1 = e1.parentElement;
        }
    }
    return null;
}
function e7() {
    return e4()?.querySelector(".delete-text, .icon-delete, .glyphicon-trash") ?? null;
}
function te() {
    return e4()?.querySelector("a.download-link") ?? null;
}
function tt(e1) {
    return String(e1 ?? "").replace(/\.(pdf|docx?|rtf|txt)\b/gi, "").replace(/\s+/g, " ").trim().toLowerCase().replace(/[^a-z0-9]/g, "");
}
function tr() {
    let e1 = te(), t = e4();
    return [
        e1?.textContent,
        e1?.getAttribute("title"),
        e1?.getAttribute("aria-label"),
        t?.textContent
    ].filter((e1)=>!!e1 && e1.trim().length > 0).join(" ");
}
function tn() {
    let e1 = !!(e4() && (te() || e7()));
    return {
        hasControls: e1,
        signature: tt(tr())
    };
}
function to(e1, t) {
    let r1 = tn();
    if (!r1.hasControls) return !1;
    if (!t.hasControls) return !0;
    let n = tt(e1);
    return !!(n && r1.signature.includes(n)) || r1.signature !== t.signature;
}
function ti(e1) {
    let t = e1.files?.[0];
    return "string" == typeof t?.name ? t.name : "";
}
function ta() {
    return !!e9();
}
function tl() {
    return e8() && e9() ? "required" : "";
}
async function ts() {
    return await (0, p.waitForCondition)(()=>!!e9(), {
        timeout: 4e3,
        interval: 100,
        observeTarget: document.body
    });
}
function tu() {
    return document.querySelector('.resume-upload-wrapper button.upload-resume-btn[atm-id="resume-button"]');
}
function tc() {
    return document.querySelector(".has-resume.resume-info .deleteFile, .has-resume.resume-info a[aria-label='Delete']");
}
function td() {
    return document.querySelector(".has-resume.resume-info .downloadFile, .has-resume.resume-info a[atm-id='uploadedresume-link']");
}
function tf() {
    return document.querySelector(".has-resume.resume-info");
}
function tp() {
    return !!(tf() && (td() || tc()));
}
function tm() {
    return !!(e3() && (0, v.isActuallyVisible)(e3()) || tu() && (0, v.isActuallyVisible)(tu()));
}
async function th() {
    return await (0, p.waitForCondition)(()=>!!e3() && !!e2() && !!tu(), {
        timeout: 4e3,
        interval: 100,
        observeTarget: document.body
    });
}
async function tg() {
    let e1 = tc(), t = 0;
    for(; e1 && t < 5;){
        e1.click();
        let r1 = await (0, p.waitForCondition)(()=>!tc(), {
            timeout: 2e3,
            interval: 100,
            observeTarget: document.body
        });
        if (!r1) break;
        await (0, p.waitForCondition)(()=>!!e2(), {
            timeout: 2e3,
            interval: 100,
            observeTarget: document.body
        }), await (0, g.delay)(150), e1 = tc(), t += 1;
    }
}
function tb(e1) {
    return Array.from(e1.querySelectorAll('button[id*="array-button-remove-"], input[id*="array-button-remove-"], [role="button"][id*="array-button-remove-"]')).filter((e1)=>(0, v.isActuallyVisible)(e1)).sort((e1, t)=>{
        let r1 = Number(e1.id.match(/(\d+)$/)?.[1] || "-1"), n = Number(t.id.match(/(\d+)$/)?.[1] || "-1");
        return n - r1;
    });
}
async function ty(e1) {
    let t = (0, v.getArrayContainer)(e1);
    if (!t) return;
    let r1 = (0, v.getCompositeItemFieldsets)(t).length;
    for(; r1 > 1;){
        let e1 = tb(t)[0];
        if (!e1) break;
        e1.click();
        let n = await (0, p.waitForCondition)(()=>(0, v.getCompositeItemFieldsets)(t).length < r1, {
            timeout: 1500,
            interval: 100,
            observeTarget: t
        });
        if (!n) break;
        r1 = (0, v.getCompositeItemFieldsets)(t).length, await (0, g.delay)(150);
    }
}
function tv(e1) {
    return e1 ? Array.from(e1.querySelectorAll(".form-group.field")).find((e1)=>{
        let t = e1.querySelector("label.control-label, legend")?.textContent?.replace(/\s+/g, " ").trim().toLowerCase() || "";
        return t.includes("end date") && (0, v.isActuallyVisible)(e1);
    }) ?? null : null;
}
async function tw() {
    let e1 = (0, v.getArrayContainer)(m.FIELD_TYPE.EMPLOYMENT), t = e1 ? (0, v.getCompositeItemFieldsets)(e1)[0] ?? null : null;
    if (!t) return;
    let r1 = t.querySelector('input[type="checkbox"][id*="currentlyWorkHere"], input[type="checkbox"][name*="currentlyWorkHere"], input[type="checkbox"][aria-describedby*="currentlyWorkHere"]');
    r1 && (eW(r1) && (await eZ(r1, !1), await (0, p.waitForCondition)(()=>!eW(r1), {
        timeout: 1e3,
        interval: 50,
        observeTarget: t
    })), O(r1), await (0, p.waitForCondition)(()=>!!tv(t), {
        timeout: 1500,
        interval: 100,
        observeTarget: t
    }));
}
async function tS() {
    let e1 = (0, v.getStepInfo)();
    console.log("[phenom] preFillForm entry", {
        step: e1.step,
        stepName: e1.stepName
    });
    let t = await (0, p.waitForCondition)(()=>!!(0, v.getFormRoot)(), {
        timeout: 3e3,
        interval: 100,
        observeTarget: document.body
    });
    t && ((0, v.isInitialApplicationStep)(e1) && (console.log("[phenom] preFillForm initial-step cleanup start"), await th(), await tg()), await ry(m.FIELD_TYPE.EDUCATION), await ry(m.FIELD_TYPE.EMPLOYMENT), await ty(m.FIELD_TYPE.EDUCATION), await ty(m.FIELD_TYPE.EMPLOYMENT), await tw());
}
async function tE(e1, t, r1) {
    let n = String(t ?? "").trim();
    if (!n) return !1;
    let o = {
        label: r1
    }, i = e$(e1, o) || e1;
    for(let e1 = 0; e1 < 2; e1 += 1){
        e1 > 0 && (await (0, g.delay)(250), i = e$(i, o) || i), i.focus(), B(i, n), R(i), O(i);
        let t = await eB(i, n, o);
        if (t) return !0;
    }
    let a = e$(i, o);
    return console.warn("[phenom] text input did not commit", {
        label: r1,
        value: n,
        inputId: e1.id,
        currentInputId: a?.id || "",
        currentValue: a?.value || ""
    }), !1;
}
function tx(e1) {
    return e1?.aborted === !0;
}
function tC(e1) {
    return e$(e1);
}
function tA(e1) {
    if ("false" === e1.getAttribute("aria-expanded")) return null;
    let t = (e1)=>{
        if (!(e1 instanceof HTMLElement)) return !1;
        let t = "listbox" === e1.getAttribute("role") || e1.classList?.contains("rbt-menu");
        return t && e1.isConnected && !e1.hidden && "true" !== e1.getAttribute("aria-hidden") && (0, v.isActuallyVisible)(e1);
    }, r1 = [
        e1.getAttribute("aria-controls"),
        e1.getAttribute("aria-owns")
    ].flatMap((e1)=>String(e1 ?? "").split(/\s+/)).filter((e1, t, r1)=>e1 && r1.indexOf(e1) === t);
    if (r1.length > 0) {
        let e1 = Array.from(new Set(r1.map((e1)=>document.getElementById(e1)).filter(t)));
        return 1 === e1.length ? e1[0] : null;
    }
    let n = '[role="listbox"], .rbt-menu', o = e1.closest(".rbt, .async-typeahead-v3"), i = Array.from(new Set(Array.from(o?.querySelectorAll(n) || []).filter(t)));
    if (1 === i.length) return i[0];
    if (i.length > 1) return null;
    let a = Array.from(new Set(Array.from(document.querySelectorAll(n)).filter(t)));
    return 1 === a.length ? a[0] : null;
}
let tk = /^(?:searching|loading|fetching|please\s+wait)(?:\s*(?:\.{3}|\u2026))?$/iu, tT = /^(?:no\s+(?:results?|matches?|options?)(?:\s+found)?|nothing\s+found)$/iu, tF = /^type(?:\s+\d+)?(?:\s+characters?)?\s+to\s+(?:search|see\s+(?:the\s+)?list)(?:\s*(?:\.{3}|\u2026))?$/iu;
function tI(e1) {
    return String(e1.textContent ?? "").replace(/\s+/g, " ").trim();
}
function tj(e1) {
    return Array.from(e1.querySelectorAll('[role="option"], .dropdown-item')).filter((e1)=>e1.isConnected && !e1.hidden && "true" !== e1.getAttribute("aria-hidden") && (0, v.isActuallyVisible)(e1) && tI(e1).length > 0);
}
function tD(e1, t) {
    if ("true" === e1.getAttribute("aria-busy")) return !0;
    let r1 = "function" == typeof e1.querySelector ? e1.querySelector('[aria-busy="true"], [aria-label*="loading" i], .loading, .loader, .spinner') : null;
    return !!(r1 && (0, v.isActuallyVisible)(r1)) || t.some((e1)=>{
        let t = tI(e1), r1 = String(e1.className ?? "");
        return tk.test(t) || /\b(?:loading|loader|spinner)\b/iu.test(r1);
    });
}
function tP(e1) {
    return tT.test(tI(e1));
}
function t_(e1) {
    let t = tI(e1);
    return /\brbt-menu-custom-option\b/iu.test(String(e1.className ?? "")) || /^add\s+new\s*:/iu.test(t) || /^other$/iu.test(t);
}
function tL(e1) {
    let t = tj(e1);
    return t.filter((e1)=>{
        let t = tI(e1), r1 = String(e1.className ?? "");
        return !tk.test(t) && !tT.test(t) && !tF.test(t) && !t_(e1) && !/\b(?:loading|loader|spinner)\b/iu.test(r1);
    });
}
function tR(e1, t) {
    let r1 = e1.getAttribute("data-value") || e1.getAttribute("value") || e1.getAttribute("data-id") || t;
    return r1.trim();
}
let tO = 4, tM = 6, tN = 50, t$ = 20, tB = 20;
function tq(e1) {
    let t = tj(e1);
    if (tD(e1, t)) return {
        status: "loading",
        candidates: []
    };
    let r1 = [], n = new Set;
    for (let t of tL(e1)){
        let e1 = tI(t), o = tR(t, e1), i = `${U(e1)}\u0000${U(o)}`;
        if (!(!e1 || !o || n.has(i)) && (n.add(i), r1.push({
            candidate_key: `phenom-school-${r1.length + 1}`,
            value: o,
            text: e1
        }), 25 === r1.length)) break;
    }
    return r1.length > 0 ? {
        status: "ready",
        candidates: r1
    } : {
        status: t.some(tP) ? "no-results" : "empty",
        candidates: []
    };
}
function tU(e1) {
    return JSON.stringify([
        e1.status,
        e1.candidates.map((e1)=>[
                e1.value,
                e1.text
            ])
    ]);
}
async function tH(e1) {
    try {
        let t = await (0, u.sendToBackground)({
            name: "preparePhenomSchoolCapture",
            body: {
                captureResponse: !0,
                expectedValue: e1
            }
        });
        return "string" == typeof t?.captureId ? t.captureId : "";
    } catch  {
        return console.warn("[Phenom][SchoolSearch] response capture unavailable", {
            stage: "prepare"
        }), "";
    }
}
async function tY(e1, t = t$) {
    if (!e1) return {
        captureStatus: "unavailable",
        responseEvidence: null
    };
    let r1 = "pending";
    for(let n = 0; n < t; n += 1){
        let t = null;
        try {
            t = await (0, u.sendToBackground)({
                name: "waitForPhenomSchoolCapture",
                body: {
                    captureId: e1,
                    responseMode: "peek"
                }
            });
        } catch  {
            return console.warn("[Phenom][SchoolSearch] response capture unavailable", {
                stage: "inspect"
            }), {
                captureStatus: "inspect-unavailable",
                responseEvidence: null
            };
        }
        let n = t?.captureStatus ?? "failed";
        if (r1 = n, t?.responseEvidence) return {
            captureStatus: n,
            responseEvidence: t.responseEvidence
        };
        if ("idle" !== n && "pending" !== n) return {
            captureStatus: n,
            responseEvidence: null
        };
        await (0, g.delay)(100);
    }
    return {
        captureStatus: r1,
        responseEvidence: null
    };
}
async function tz(e1, t) {
    if ("failed" === t.status) return {
        status: "failed",
        candidates: []
    };
    if ("no-results" === t.status) return {
        status: "no-results",
        candidates: []
    };
    let r1 = new Set(t.candidateTexts.map((e1)=>U(e1))), n = await (0, y.default)(()=>{
        let t = tC(e1), n = t ? tA(t) : null;
        if (!n) return null;
        let o = tq(n);
        if ("ready" !== o.status || 0 === o.candidates.length) return null;
        let i = o.candidates.filter((e1)=>r1.has(U(e1.text)));
        return 0 === i.length ? null : {
            status: "ready",
            candidates: i
        };
    }, ()=>!1, tB);
    return n ?? {
        status: "failed",
        candidates: []
    };
}
function tV(e1, t, r1 = "") {
    return tL(e1).filter((e1)=>U(e1.textContent) === t && (!r1 || U(tR(e1, tI(e1))) === U(r1)));
}
async function tW(e1, t) {
    let r1 = await tH(t), n = tA(e1), o = n ? tq(n) : null, i = o?.status === "ready" || o?.status === "no-results" ? tU(o) : "", a = o?.status ?? "listbox-not-found", l = await tK(e1, t);
    if (!l) return console.warn("[Phenom][SchoolSearch] probe did not commit", {
        reason: "input-not-confirmed"
    }), {
        status: "failed",
        candidates: []
    };
    let s = await tY(r1, tM);
    if ("idle" === s.captureStatus && !s.responseEvidence) {
        console.warn("[Phenom][SchoolSearch] request did not start; retrying probe " + JSON.stringify({
            inputId: tC(e1)?.id || e1.id || "",
            responseCaptureStatus: s.captureStatus
        }));
        let r1 = await tK(e1, t);
        if (!r1) return {
            status: "failed",
            candidates: []
        };
    }
    let u = !i && o?.status !== "loading", c = !1, d = n?.id ?? "", f = a, p = "", m = 0, h = await (0, y.default)(()=>{
        let t = tC(e1), r1 = t ? tA(t) : null;
        if (!r1) return d = "", f = "listbox-not-found", p = "", m = 0, null;
        let n = tq(r1);
        if (d = r1.id || "", f = n.status, "loading" === n.status) return c = !0, p = "", m = 0, null;
        c && (u = !0);
        let o = tU(n);
        return ("empty" !== n.status && i && o !== i && (u = !0), "empty" !== n.status && u) ? (o === p ? m += 1 : (p = o, m = 1), m < tO) ? null : {
            status: n.status,
            candidates: n.candidates
        } : (p = "", m = 0, null);
    }, ()=>!1, tN), g = s.responseEvidence ? s : await tY(r1), b = g.responseEvidence, v = b ? await tz(e1, b) : null;
    if (v && (h || "failed" !== v.status)) return console.info("[Phenom][SchoolSearch] response evidence " + JSON.stringify({
        captureStatus: b?.status,
        responseCandidateCount: b?.candidateTexts.length,
        resultStatus: v.status,
        resultCandidateCount: v.candidates.length
    })), v;
    if (!h) {
        let t = tC(e1);
        return console.warn("[Phenom][SchoolSearch] candidates did not settle " + JSON.stringify({
            reason: "loading-or-empty-results",
            inputId: t?.id || e1.id || "",
            ariaExpanded: t?.getAttribute("aria-expanded") ?? null,
            ariaControls: t?.getAttribute("aria-controls") ?? null,
            ariaOwns: t?.getAttribute("aria-owns") ?? null,
            initialSnapshotStatus: a,
            lastSnapshotStatus: f,
            lastListboxId: d,
            freshResultTransitionObserved: u,
            loadingCycleStarted: c,
            stableSamples: m,
            responseCaptureStatus: g.captureStatus,
            responseHttpStatus: b?.httpStatus ?? null,
            responseCandidateCount: b?.candidateTexts.length ?? 0,
            evidenceResultStatus: v?.status ?? null,
            evidenceResultCandidateCount: v?.candidates.length ?? 0
        })), {
            status: "failed",
            candidates: []
        };
    }
    if ("unavailable" !== g.captureStatus && "inspect-unavailable" !== g.captureStatus && "idle" !== g.captureStatus) return {
        status: "failed",
        candidates: []
    };
    let w = tC(e1), S = w ? tA(w) : null;
    return console.warn("[Phenom][SchoolSearch] candidates captured " + JSON.stringify({
        source: "visible-dom-listbox",
        inputId: w?.id || "",
        listboxId: S?.id || "",
        candidateCount: h.candidates.length,
        status: h.status,
        stableSamples: m,
        loadingCycleStarted: c,
        responseCaptureStatus: g.captureStatus
    })), h;
}
async function tG(e1, t, r1) {
    let n = e1, o = new WeakSet, i = await (0, y.default)(()=>{
        if (tx(r1)) return null;
        let e1 = tC(n);
        if (!e1) return null;
        if (n = e1, !o.has(e1) || e1.value !== t) {
            if (tx(r1) || (B(e1, t), tx(r1)) || (e1.dispatchEvent(new Event("input", {
                bubbles: !0
            })), tx(r1))) return null;
            e1.dispatchEvent(new Event("change", {
                bubbles: !0
            })), o.add(e1);
        }
        let i = tC(e1);
        return i && o.has(i) ? (n = i, i.value === t || null) : null;
    }, ()=>tx(r1), 10);
    return !0 === i;
}
async function tK(e1, t, r1) {
    let n = String(t ?? "");
    if (!U(n)) return !1;
    let o = tC(e1);
    if (!o || tx(r1) || tx(r1)) return !1;
    if (o.focus(), "" !== o.value) {
        let e1 = await tX(o, r1);
        if (!e1 || tx(r1) || !(o = tC(o))) return !1;
    }
    return !tx(r1) && (B(o, n), !tx(r1) && (o.dispatchEvent(new Event("input", {
        bubbles: !0
    })), !tx(r1) && (o.dispatchEvent(new Event("change", {
        bubbles: !0
    })), await (0, g.delay)(150), !tx(r1) && U(tC(o)?.value) === U(n))));
}
async function tX(e1, t) {
    let r1 = e1;
    for(let e1 = 0; e1 < 3 && !tx(t); e1 += 1){
        let e1 = tC(r1);
        if (!e1) break;
        if (r1 = e1, "" !== e1.value) {
            if (tx(t) || (B(e1, ""), tx(t)) || (e1.dispatchEvent(new Event("input", {
                bubbles: !0
            })), tx(t))) return !1;
            e1.dispatchEvent(new Event("change", {
                bubbles: !0
            }));
        }
        if (await (0, g.delay)(50), tx(t)) break;
        let n = tC(r1);
        if (n?.value === "") return !0;
    }
    return !1;
}
async function tJ(e1, t, r1 = "", n = "") {
    let o = String(t ?? ""), i = U(o);
    if (!i) return !1;
    let a = tC(e1);
    if (!a) return console.warn("[phenom] resolved school fill failed", {
        stage: "type",
        reason: "live-input-missing"
    }), !1;
    let l = a.value, s = async (e1, t, r1 = 0)=>{
        let n = await tG(a, l);
        return console.warn("[Phenom][SchoolSearch] exact commit failed " + JSON.stringify({
            stage: e1,
            optionCount: r1,
            reason: t,
            restored: n
        })), !1;
    };
    if (U(a.value) === i) return !0;
    let u = async (e1, t = !1)=>{
        t && B(e1.input, ""), $(e1.option);
        let r1 = await (0, y.default)(()=>{
            let t = tC(e1.input);
            return t && U(eq(t)) === i ? t : null;
        }, ()=>!1, 10);
        return null !== r1;
    }, c = tA(a);
    if (c && U(a.value)) {
        let e1 = tV(c, i, n);
        if (console.info("[Phenom][SchoolSearch] exact commit candidate " + JSON.stringify({
            source: "current-search-listbox",
            inputId: a.id || "",
            listboxId: c.id || "",
            optionCount: tL(c).length,
            exactOptionCount: e1.length,
            valueCheck: !!n
        })), 1 === e1.length) {
            let t = await u({
                input: a,
                option: e1[0]
            });
            return !!t || await s("commit", "exact-value-not-committed", tL(c).length);
        }
    }
    let d = [
        o,
        r1
    ].map((e1)=>String(e1 ?? "").trim()).filter((e1, t, r1)=>e1.length > 0 && r1.indexOf(e1) === t), f = 0;
    for (let e1 of d){
        let t = tC(a);
        if (!t) continue;
        let r1 = U(e1) === i ? "selected-value" : "selected-round-search";
        console.info("[Phenom][SchoolSearch] exact commit search " + JSON.stringify({
            source: r1,
            inputId: t.id || ""
        })), t.focus(), B(t, e1), t.dispatchEvent(new Event("input", {
            bubbles: !0
        })), t.dispatchEvent(new Event("change", {
            bubbles: !0
        })), await (0, g.delay)(150);
        let o = await (0, y.default)(()=>{
            let e1 = tC(t);
            if (!e1) return null;
            let r1 = tA(e1);
            if (!r1) return null;
            let o = tL(r1);
            f = o.length;
            let a = tV(r1, i, n);
            return 1 === a.length ? {
                input: e1,
                option: a[0],
                optionCount: o.length
            } : null;
        }, ()=>!1, 25);
        if (!o) {
            console.info("[Phenom][SchoolSearch] exact commit search result " + JSON.stringify({
                source: r1,
                inputId: t.id || "",
                optionCount: f,
                exactOptionCount: 0
            }));
            continue;
        }
        console.info("[Phenom][SchoolSearch] exact commit search result " + JSON.stringify({
            source: r1,
            inputId: o.input.id || "",
            optionCount: o.optionCount,
            exactOptionCount: 1
        }));
        let l = await u(o, !0);
        if (l) return !0;
        return await s("commit", "exact-value-not-committed", o.optionCount);
    }
    return await s("options", "unique-exact-missing", f);
}
async function tQ(e1, t, r1) {
    let n = String(t ?? "").trim();
    if (!n) return !1;
    let i = (e1, t, n)=>{
        console.warn(e1, r1?.redactValues === !0 ? n : t);
    };
    e1.focus(), B(e1, n), e1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    }));
    let a = await (0, y.default)(()=>{
        let t = e1.getAttribute("aria-owns");
        if (t) {
            let e1 = document.getElementById(t);
            if (e1 && "listbox" === e1.getAttribute("role")) return e1;
        }
        let r1 = e1.closest(".rbt");
        if (r1) {
            let e1 = r1.querySelector('[role="listbox"], .rbt-menu');
            if (e1) return e1;
        }
        return document.querySelector('[role="listbox"].show, .rbt-menu.dropdown-menu.show, [role="listbox"]');
    }, ()=>!1, 25);
    if (!a) {
        if (O(e1), eU(e1)) return i("[phenom] search input listbox not found", {
            value: n,
            currentValue: eq(e1)
        }, {
            stage: "options",
            reason: "listbox-not-found",
            optionCount: 0
        }), !1;
        let t = await eH(e1, n);
        return t || i("[phenom] search input did not commit without listbox", {
            value: n,
            currentValue: eq(e1)
        }, {
            stage: "commit",
            reason: "value-not-committed",
            optionCount: 0
        }), t;
    }
    await (0, g.delay)(150);
    let l = Array.from(a.querySelectorAll('[role="option"], .dropdown-item')).filter((e1)=>U(e1.textContent).length > 0);
    if (0 === l.length) return i("[phenom] search input has no options", {
        value: n
    }, {
        stage: "options",
        reason: "no-options",
        optionCount: 0
    }), !1;
    let s = (0, o.findExactChoice)(l, n, (e1)=>e1.textContent);
    if (!s) return i("[phenom] search option not matched", {
        value: n,
        options: l.map((e1)=>e1.textContent?.trim() || "")
    }, {
        stage: "options",
        reason: "option-not-matched",
        optionCount: l.length
    }), !1;
    let u = s.textContent?.trim() || "";
    s.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0,
        view: window
    })), await (0, g.delay)(30), s.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0,
        cancelable: !0,
        view: window
    })), s.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
    })), await (0, g.delay)(150), O(e1);
    let c = await eH(e1, n, u);
    return c || i("[phenom] search option did not commit", {
        value: n,
        matchedOption: u,
        currentValue: eq(e1)
    }, {
        stage: "commit",
        reason: "option-not-committed",
        optionCount: l.length
    }), c;
}
function tZ(e1) {
    if (!e1) return;
    let t = e1.match(/\b(?:YYYY-MM-DD|YYYY\/MM\/DD|MM\/DD\/YYYY|MM\/YYYY|YYYY)\b/i);
    return t?.[0]?.toUpperCase();
}
function t0(e1) {
    return "MM/YYYY" === tZ(e1);
}
function t2(e1) {
    return "YYYY" === tZ(e1);
}
function t1(e1) {
    let t = String(e1 ?? "").trim();
    if (!t) return null;
    let r1 = (0, a.default)(t, [
        "YYYY-MM-DD",
        "YYYY/MM/DD",
        "YYYY/M/D",
        "MM/DD/YYYY",
        "M/D/YYYY",
        "MM/YYYY",
        "M/YYYY",
        "YYYY-MM",
        "YYYY/M",
        "YYYY/MM",
        "MMM YYYY",
        "MMMM YYYY",
        "YYYY"
    ], !0);
    return r1.isValid() ? r1 : null;
}
function t3(e1, t) {
    let r1 = String(e1 ?? "").trim();
    if (!r1) return "";
    if ("current" === U(r1)) return "current";
    let n = t1(r1);
    return n ? t0(t) ? /^\d{4}$/.test(r1) ? `01/${r1}` : n.format("MM/YYYY") : "MM/DD/YYYY" === tZ(t) ? /^\d{4}$/.test(r1) ? `01/01/${r1}` : n.format("MM/DD/YYYY") : t2(t) ? n.format("YYYY") : /^\d{4}$/.test(r1) ? `${r1}-01-01` : /^\d{4}-\d{2}$/.test(r1) ? `${r1}-01` : n.format("YYYY-MM-DD") : r1;
}
function t4(e1) {
    let t = String(e1 ?? "").trim(), r1 = t1(t);
    return {
        present: "" !== t,
        length: t.length,
        parsed: r1 ? {
            year: r1.year(),
            month: r1.month() + 1,
            day: r1.date()
        } : null
    };
}
function t5(e1) {
    let t = e$(e1);
    return {
        inputId: e1.id,
        inputName: e1.name,
        connected: e1.isConnected,
        currentInputId: t?.id || "",
        currentInputName: t?.name || "",
        currentValue: t4(t?.value)
    };
}
async function t6(e1) {
    e1.focus(), e1.click();
    let t = e1.closest(".calendar-widget");
    return await (0, y.default)(()=>t?.querySelector(".react-datepicker-popper") || document.querySelector(".react-datepicker-popper"), ()=>!1, 25);
}
function t8(e1) {
    return e1.querySelector(".range-select, .react-datepicker__year-select");
}
function t9(e1) {
    return e1.querySelector(".react-datepicker__year-select") || Array.from(e1.querySelectorAll(".range-select")).find((e1)=>Array.from(e1.options).some((e1)=>/^\d{4}$/.test(e1.value))) || null;
}
function t7(e1) {
    return e1.querySelector(".react-datepicker__month-select") || Array.from(e1.querySelectorAll(".range-select")).find((e1)=>Array.from(e1.options).some((e1)=>/^(january|february|march|april|may|june|july|august|september|october|november|december)$/i.test(e1.value))) || null;
}
function re(e1, t) {
    let r1 = Array.from(e1.options).find((e1)=>e1.value === t);
    return !!r1 && (e1.value = r1.value, r1.selected = !0, e1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), !0);
}
function rt(e1) {
    let t = Array.from(e1.options).map((e1)=>Number(e1.value)).filter((e1)=>Number.isFinite(e1));
    return 0 === t.length ? null : {
        minYear: Math.min(...t),
        maxYear: Math.max(...t)
    };
}
async function rr(e1, t) {
    let r1 = "previous" === t ? /previous/i : /next/i, n = Array.from(e1.querySelectorAll("button")).filter((e1)=>!e1.disabled).find((e1)=>r1.test(e1.getAttribute("aria-label") || ""));
    return !!n && ($(n), n.click(), await (0, g.delay)(150), !0);
}
async function rn(e1, t) {
    let r1 = Number(t);
    for(let n = 0; n < 12; n += 1){
        let n = t8(e1);
        if (!n) return !0;
        let o = Array.from(n.options).find((e1)=>e1.value === t);
        if (o) return n.value = t, o.selected = !0, n.dispatchEvent(new Event("input", {
            bubbles: !0
        })), n.dispatchEvent(new Event("change", {
            bubbles: !0
        })), await (0, g.delay)(150), !0;
        let i = rt(n);
        if (!i || !Number.isFinite(r1)) break;
        let a = r1 < i.minYear ? await rr(e1, "previous") : r1 > i.maxYear && await rr(e1, "next");
        if (!a) break;
    }
    return !1;
}
async function ro(e1, t) {
    let r1 = t1(t);
    if (!r1) return console.warn("[phenom][date-debug] month-year parse failed", {
        ...t5(e1),
        target: t4(t)
    }), await tE(e1, t);
    let n = await t6(e1);
    if (!n) return console.warn("[phenom][date-debug] month-year popper missing", {
        ...t5(e1),
        target: t4(t)
    }), await tE(e1, t);
    let o = String(r1.year()), i = r1.month(), a = r1.format("MMMM"), l = r1.format("MMM");
    F("month-year picker opened", {
        ...t5(e1),
        target: t4(t),
        popperInSameWidget: e1.closest(".calendar-widget")?.contains(n) === !0
    });
    let s = await rn(n, o);
    if (!s) {
        let r1 = t8(n);
        return console.warn("[phenom] month-year datepicker year not available", {
            value: t,
            year: o,
            years: r1 ? Array.from(r1.options).map((e1)=>e1.value) : []
        }), await tE(e1, t);
    }
    let u = await (0, y.default)(()=>{
        let e1 = n.querySelector(`.react-datepicker__month-text.react-datepicker__month-${i}:not(.react-datepicker__month-text--disabled)`);
        return e1 || Array.from(n.querySelectorAll(".react-datepicker__month-text")).find((e1)=>{
            let t = U(e1.textContent), r1 = U(e1.getAttribute("aria-label"));
            return (t === U(l) || t === U(a)) && (!r1 || r1.includes(o));
        }) || null;
    }, ()=>!1, 20);
    if (!u) return console.warn("[phenom][date-debug] month option missing", {
        ...t5(e1),
        target: t4(t),
        monthIndex: i,
        monthName: a
    }), await tE(e1, t);
    $(u), u.click(), await (0, g.delay)(180), O(e1);
    let c = await (0, p.waitForCondition)(()=>V(e$(e1)?.value), {
        timeout: 900,
        interval: 50,
        observeTarget: document.body
    });
    return F("month-year selection readback", {
        ...t5(e1),
        target: t4(t),
        committed: c
    }), !!c || await tE(e1, t);
}
function ri(e1) {
    return Array.from(e1.querySelectorAll(".react-datepicker__year-text")).filter((e1)=>!e1.classList.contains("react-datepicker__year-text--disabled"));
}
function ra(e1) {
    let t = ri(e1).map((e1)=>Number(U(e1.textContent))).filter((e1)=>Number.isFinite(e1));
    return 0 === t.length ? null : {
        minYear: Math.min(...t),
        maxYear: Math.max(...t)
    };
}
async function rl(e1, t) {
    let r1 = "previous" === t ? /previous year/i : /next year/i, n = Array.from(e1.querySelectorAll("button")).filter((e1)=>!e1.disabled).find((e1)=>r1.test(e1.getAttribute("aria-label") || ""));
    if (!n) return !1;
    let o = ra(e1);
    return !!o && (n.click(), await (0, p.waitForCondition)(()=>{
        let t = ra(e1);
        return null != t && (t.minYear !== o.minYear || t.maxYear !== o.maxYear);
    }, {
        timeout: 450,
        interval: 20,
        observeTarget: e1
    }));
}
async function rs(e1, t) {
    let r1 = Number(t);
    for(let n = 0; n < 16; n += 1){
        let o = ri(e1).find((e1)=>U(e1.textContent) === t);
        if (o) return o;
        let i = ra(e1);
        if (!i || !Number.isFinite(r1)) break;
        let a = r1 < i.minYear ? "previous" : r1 > i.maxYear ? "next" : null;
        if (!a) break;
        let l = await rl(e1, a);
        if (F("year range navigation", {
            targetYear: t,
            direction: a,
            attempt: n + 1,
            visibleRange: i,
            moved: l
        }), !l) break;
    }
    return null;
}
async function ru(e1, t) {
    let r1 = t1(t);
    if (!r1) return await tE(e1, t);
    let n = String(r1.year()), o = await t6(e1);
    if (!o) return await tE(e1, n);
    F("year picker opened", {
        ...t5(e1),
        target: t4(n),
        popperInSameWidget: e1.closest(".calendar-widget")?.contains(o) === !0
    });
    let i = await rs(o, n);
    if (!i) {
        let t = Array.from(o.querySelectorAll(".react-datepicker__year-text")).map((e1)=>U(e1.textContent));
        return F("year option missing", {
            ...t5(e1),
            targetYear: n,
            visibleYears: t,
            previousButtonPresent: Array.from(o.querySelectorAll("button")).some((e1)=>/previous year/i.test(e1.getAttribute("aria-label") || "")),
            nextButtonPresent: Array.from(o.querySelectorAll("button")).some((e1)=>/next year/i.test(e1.getAttribute("aria-label") || ""))
        }), await tE(e1, n);
    }
    $(i), i.click(), O(e1);
    let a = await (0, p.waitForCondition)(()=>U(e$(e1)?.value) === n, {
        timeout: 900,
        interval: 50,
        observeTarget: document.body
    });
    return F("year selection readback", {
        ...t5(e1),
        target: t4(n),
        committed: a
    }), !!a || await tE(e1, n);
}
async function rc(e1, t, r1) {
    let n = e1, o = e$(n);
    if (!o) return console.warn("[phenom][date-debug] current date input missing", {
        inputId: n.id,
        inputName: n.name,
        previousInputConnected: n.isConnected
    }), !1;
    e1 = o;
    let i = t3(t, r1);
    if (F("fill start", {
        ...t5(e1),
        inputReacquired: e1 !== n,
        previousInputConnected: n.isConnected,
        preferredFormat: r1,
        mode: t0(r1) ? "month-year" : t2(r1) ? "year" : "date",
        source: t4(t),
        target: t4(i)
    }), !i) return console.warn("[phenom][date-debug] normalized value empty", {
        ...t5(e1),
        preferredFormat: r1
    }), !1;
    if ("current" === U(i)) {
        let t = e1.closest("fieldset[id]"), r1 = t?.querySelector('input[type="checkbox"][id*="currentlyWorkHere"]');
        return !!r1 && (await eZ(r1, !0), await (0, p.waitForCondition)(()=>eW(r1), {
            timeout: 900,
            interval: 50,
            observeTarget: t || document.body
        }));
    }
    if (t0(r1)) return await ro(e1, i);
    if (t2(r1)) return await ru(e1, i);
    let a = t1(i);
    if (!a) return await tE(e1, i);
    let l = String(a.year()), s = a.month(), u = a.date(), c = await t6(e1);
    if (!c) return await tE(e1, i);
    let d = t9(c);
    if (d) {
        let t = re(d, l);
        if (!t) return await tE(e1, i);
        await (0, g.delay)(120);
    }
    let f = t7(c);
    if (f) {
        let t = null != f.querySelector(`option[value="${s}"]`) ? String(s) : a.format("MMMM"), r1 = re(f, t);
        if (!r1) return await tE(e1, i);
        await (0, g.delay)(120);
    }
    let m = `react-datepicker__day--${String(u).padStart(3, "0")}`, h = await (0, y.default)(()=>c.querySelector(`.${m}:not(.react-datepicker__day--outside-month):not(.react-datepicker__day--disabled)`), ()=>!1, 20);
    if (h) {
        h.click(), await (0, g.delay)(150), e1.blur();
        let t = await (0, p.waitForCondition)(()=>V(e$(e1)?.value), {
            timeout: 900,
            interval: 50,
            observeTarget: document.body
        });
        if (t) return !0;
    }
    return await tE(e1, i);
}
async function rd(e1, t) {
    let r1 = String(t ?? "").trim();
    if (!r1) return !1;
    let n = em(e1, null);
    if (!n) return !1;
    let o = eT(Array.from(n.options), r1, e1.label);
    if (!o) return console.warn("[phenom] select option not matched", {
        label: e1.label,
        value: r1,
        options: Array.from(n.options).map((e1)=>({
                value: e1.value,
                text: e1.textContent?.trim() || ""
            }))
    }), !1;
    await eI(n, o);
    let i = await ej(e1, n, o);
    if (!i) {
        let t = em(e1, n);
        if (t) {
            let n = eT(Array.from(t.options), r1, e1.label);
            n && (await eI(t, n), i = await ej(e1, t, n));
        }
    }
    return i || console.warn("[phenom] select option did not commit", {
        label: e1.label,
        value: r1,
        matchedOption: {
            value: o.value,
            text: o.textContent?.trim() || ""
        },
        currentValue: em(e1, n)?.value || ""
    }), i;
}
async function rf(e1, t) {
    let r1 = e1.$radioParent;
    if (!r1) return !1;
    let n = String(t ?? "").trim();
    if (!n) return !1;
    let o = Array.from(r1.querySelectorAll('input[type="radio"]')).find((e1)=>!e1.disabled && eO(e1, n));
    if (!o) return console.warn("[phenom] radio option not matched", {
        label: e1.label,
        value: n,
        options: Array.from(r1.querySelectorAll('input[type="radio"]')).map((e1)=>({
                label: eD(e1),
                value: e1.value,
                ariaLabel: e1.getAttribute("aria-label") || ""
            }))
    }), !1;
    await eM(o);
    let i = await eN(o);
    if (!i) {
        let e1 = e_(o);
        e1 && (await eM(e1), i = await eN(e1));
    }
    return i || console.warn("[phenom] radio option did not commit", {
        label: e1.label,
        value: n,
        matchedOption: {
            label: eD(o),
            value: o.value,
            ariaLabel: o.getAttribute("aria-label") || ""
        }
    }), i;
}
async function rp(e1, t) {
    let r1 = new Set(t.map((e1)=>U(e1))), n = e1.$checkboxs?.filter((e1)=>e1 instanceof HTMLInputElement) ?? Array.from((e1.$input ?? document).querySelectorAll('input[type="checkbox"]'));
    if (0 === n.length || 0 === r1.size) return !1;
    let i = t.some((e1)=>el(e1)), a = t.some((e1)=>es(e1)), l = 1 === n.length ? n[0] : null;
    if (l) {
        let n = {
            label: e1.label
        }, s = U(ed(l)), u = U(e1.label), c = Array.from(r1).some((e1)=>{
            if (!e1) return !1;
            let t = [
                s,
                u
            ].filter(Boolean);
            return t.some((t)=>e1 === t || (0, o.isExactChoiceMatch)(t, e1));
        }), d = !!i || !a && null, f = d ?? (!!c || null);
        if (null === f) return console.warn("[phenom] single checkbox value not matched", {
            label: e1.label,
            value: t,
            option: s || u
        }), !1;
        let m = eV(l, n);
        if (!m) return !1;
        eW(m) !== f && await eZ(m, f, n);
        let h = await (0, p.waitForCondition)(()=>{
            let e1 = eV(m, n);
            return !!e1 && eW(e1) === f;
        }, {
            timeout: 900,
            interval: 50,
            observeTarget: document.body
        });
        return h || console.warn("[phenom] single checkbox did not commit", {
            label: e1.label,
            value: t,
            checked: eW(eV(m, n))
        }), h;
    }
    let s = 0, u = [];
    for (let e1 of n){
        let t = U(ed(e1)), n = {
            label: t
        }, i = U(e1.value), a = U(e1.getAttribute("aria-label")), l = [
            t,
            i,
            a
        ].filter(Boolean), c = l.some((e1)=>r1.has(e1)) || Array.from(r1).some((e1)=>l.some((t)=>(0, o.isExactChoiceMatch)(t, e1)));
        if (c) {
            s += 1, u.push(e1);
            let t = eV(e1, n);
            t && !eW(t) && await eZ(t, !0, n);
        }
        O(eV(e1, n));
    }
    if (0 === s) return console.warn("[phenom] checkbox options not matched", {
        label: e1.label,
        value: t,
        options: n.map((e1)=>({
                label: ed(e1),
                value: e1.value,
                ariaLabel: e1.getAttribute("aria-label") || ""
            }))
    }), !1;
    let c = await (0, p.waitForCondition)(()=>u.every((e1)=>{
            let t = eV(e1, {
                label: ed(e1)
            });
            return !!t && eW(t);
        }), {
        timeout: 900,
        interval: 50,
        observeTarget: document.body
    });
    return c || console.warn("[phenom] checkbox options did not commit", {
        label: e1.label,
        value: t,
        selected: u.map((e1)=>eV(e1, {
                label: ed(e1)
            })).filter((e1)=>!!e1 && eW(e1)).map((e1)=>ed(e1))
    }), c;
}
function rm() {
    let e1 = (0, v.getFormRoot)();
    if (!e1) return null;
    let t = Array.from(e1.querySelectorAll(v.CONTINUE_BUTTON_SELECTOR));
    return t.find((e1)=>{
        if (!(e1 instanceof HTMLElement) || e1.closest("#jobright-helper-id")) return !1;
        let t = U(e1.textContent || e1.getAttribute("value") || ""), r1 = U(e1.getAttribute("aria-label") || ""), n = U(e1.getAttribute("id") || "");
        return "next" === n || "continue" === r1 || "continue" === t || "submit" === t || "apply" === t;
    }) ?? null;
}
async function rh(e2, t, r1) {
    await th(), await tg();
    let n = await e1();
    if (!n || !t || !r1) return console.log("[phenom] resume upload aborted: missing input or callbacks", {
        hasFileInput: !!n,
        hasUpdateFieldRequiredStatus: !!t,
        hasUpdateFilledProgress: !!r1
    }), {
        uploaded: !1,
        parserReady: !1
    };
    let o = ei();
    console.log("[phenom] resume upload start", {
        inputConnected: n.isConnected,
        inputDisabled: n.disabled,
        inputDisplay: window.getComputedStyle(n).display,
        hasUploadedStateBefore: tp(),
        triggerButtonClick: !1
    }), n.focus(), await L(), await (0, f.uploadFiles)(n, await (0, d.fetchPdfAsBlob)(e2), t, r1, "Resume/CV"), n.dispatchEvent(new Event("input", {
        bubbles: !0
    })), n.dispatchEvent(new Event("blur", {
        bubbles: !0
    })), O(n);
    let i = await (0, p.waitForCondition)(()=>tp() || !!(n.files && n.files.length > 0), {
        timeout: 5e3,
        interval: 100,
        observeTarget: document.body
    }), a = !!(n.files && n.files.length > 0), l = tp() || a;
    if (console.log("[phenom] resume upload settled", {
        uploadSettled: i,
        uploadSucceeded: l,
        hasWrapper: !!e3(),
        hasButton: !!tu(),
        hasInput: !!n,
        inputFileCount: n.files?.length ?? 0,
        hasSelectedFile: a,
        hasUploadedLink: !!td(),
        hasDeleteButton: !!tc()
    }), !l) return console.log("[phenom] resume upload did not reach uploaded DOM state"), {
        uploaded: !1,
        parserReady: !1
    };
    let s = !o || await ea(o);
    return s || console.warn("[phenom] resume upload completed before Cisco parser was ready"), {
        uploaded: !0,
        parserReady: s
    };
}
async function rg(e1, t, r1) {
    await ts();
    let n = e9();
    if (!n || !t || !r1) return console.log("[phenom] cover letter upload aborted: missing input or callbacks", {
        hasFileInput: !!n,
        hasUpdateFieldRequiredStatus: !!t,
        hasUpdateFilledProgress: !!r1
    }), !1;
    let o = tn(), i = I(e1), a = await (0, d.fetchCoverLetterPdfAsBlob)(i), l = ti(a) || i.coverLetterName;
    n.focus(), await L(), await (0, f.uploadFiles)(n, a, ()=>void 0, ()=>void 0, "Cover Letter"), n.dispatchEvent(new Event("input", {
        bubbles: !0
    })), n.dispatchEvent(new Event("blur", {
        bubbles: !0
    })), O(n);
    let s = await (0, p.waitForCondition)(()=>to(l, o), {
        timeout: 5e3,
        interval: 100,
        observeTarget: document.body
    }), u = !!(n.files && n.files.length > 0), c = to(l, o);
    return (console.log("[phenom] cover letter upload settled", {
        uploadSettled: s,
        uploadSucceeded: c,
        hasInput: !!n,
        inputFileCount: n.files?.length ?? 0,
        hasSelectedFile: u,
        hasUploadedLink: !!te(),
        hasDeleteButton: !!e7()
    }), c) ? (t({
        label: "Cover Letter",
        required: !0
    }), r1("Cover Letter"), await (0, g.delay)(200), !0) : (console.log("[phenom] cover letter upload did not reach uploaded DOM state"), !1);
}
function rb(e1) {
    return (0, v.getCompositeItemFieldsets)(e1).length;
}
async function ry(e1) {
    let t = (0, v.getArrayContainer)(e1);
    if (!t || rb(t) > 0) return;
    let r1 = t.querySelector(".more-actions .array-button-add");
    r1 && await rv(t);
}
async function rv(e1) {
    let t = e1.querySelector(".more-actions .array-button-add");
    if (!t) return;
    let r1 = rb(e1);
    t.click();
    let n = 0;
    for(; n < 30;){
        await (0, g.delay)(100);
        let t = rb(e1);
        if (t > r1) break;
        n += 1;
    }
    await (0, g.delay)(200);
}
async function rw(e1, t, r1, n, o, i) {
    let a = (0, v.getArrayContainer)(t);
    if (!a || 0 === e1.length) return;
    let l = rb(a), s = Math.max(0, e1.length - l);
    for(let e1 = 0; e1 < s; e1 += 1)await rv(a);
    let u = await (0, v.getCompositeRules)(t);
    if ((0, h.setSectionResultFocusRules)(t, u), 0 === u.length) return;
    let c = t === m.FIELD_TYPE.EDUCATION ? (0, d.getEducationOperations)(u, e1, r1, o, i, o ? {
        wrapTransformedFieldWithSkip: !0
    } : void 0) : (0, d.getEmploymentOperations)(u, e1, r1, void 0, i);
    for (let e1 of c)n.add(e1);
    await n.run();
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20;
$RefreshReg$(_c, "F");
$RefreshReg$(_c1, "I");
$RefreshReg$(_c2, "D");
$RefreshReg$(_c3, "P");
$RefreshReg$(_c4, "L");
$RefreshReg$(_c5, "R");
$RefreshReg$(_c6, "O");
$RefreshReg$(_c7, "M");
$RefreshReg$(_c8, "N");
$RefreshReg$(_c9, "B");
$RefreshReg$(_c10, "U");
$RefreshReg$(_c11, "H");
$RefreshReg$(_c12, "Y");
$RefreshReg$(_c13, "V");
$RefreshReg$(_c14, "W");
$RefreshReg$(_c15, "G");
$RefreshReg$(_c16, "K");
$RefreshReg$(_c17, "X");
$RefreshReg$(_c18, "J");
$RefreshReg$(_c19, "Q");
$RefreshReg$(_c20, "Z");

},{}]},["4iLPC","jcaJE"], "jcaJE", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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UUFBTyxBQUFDLENBQUEsR0FBRSxLQUFHLFNBQVMsY0FBYyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUUsSUFBSSxFQUFFLENBQUMsSUFBRSxJQUFHLEtBQUksS0FBRztRQUFFLFFBQU87SUFBQztBQUFDO0FBQUMsZUFBZSxHQUFHLEVBQUM7SUFBRSxJQUFJLElBQUUsR0FBRztJQUFHLElBQUcsQ0FBQyxHQUFFLE9BQU0sRUFBRTtJQUFDLElBQUksS0FBRSxFQUFFLEVBQUMsSUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLFdBQVUsT0FBTSxVQUFTLElBQUUsTUFBTSxLQUFLLEVBQUUsaUJBQWlCLFdBQVcsT0FBTyxDQUFBLEtBQUcsQ0FBQyxHQUFFLFlBQVUsR0FBRyxPQUFJLEdBQUc7SUFBSSxLQUFJLElBQUksTUFBSyxFQUFFO1FBQUMsSUFBSSxJQUFFLEdBQUUsaUJBQWlCLENBQUMsRUFBRTtRQUFDLElBQUcsR0FBRSxTQUFPLEtBQUcsQ0FBQyxHQUFHLElBQUc7UUFBUyxJQUFJLElBQUUsR0FBRyxLQUFHLElBQUUsTUFBTSxHQUFHLEdBQUU7UUFBRyxLQUFHLEdBQUUsS0FBSyxFQUFFO0lBQU07SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEdBQUcsRUFBQyxFQUFDLENBQUMsRUFBQyxFQUFDO0lBQUUsSUFBSSxJQUFFLE9BQU8sS0FBRyxJQUFJO0lBQU8sSUFBRyxDQUFDLEdBQUUsT0FBTztJQUFLLElBQUksSUFBRSxFQUFFLElBQUcsSUFBRSxHQUFFLE9BQU8sQ0FBQSxLQUFHLENBQUMsR0FBRyxNQUFJLElBQUUsRUFBRSxLQUFLLENBQUE7UUFBSSxJQUFJLElBQUUsRUFBRSxHQUFFLGNBQWEsS0FBRSxFQUFFLEdBQUU7UUFBTyxPQUFPLE1BQUksS0FBRyxPQUFJO0lBQUM7SUFBRyxJQUFHLEdBQUUsT0FBTztJQUFFLElBQUksSUFBRSxHQUFHLEtBQUcsSUFBRSxFQUFFLElBQUcsU0FBUyxjQUFZLENBQUM7SUFBRSxJQUFHLEFBQUMsQ0FBQSxLQUFHLENBQUEsS0FBSSxHQUFHLElBQUc7UUFBQyxJ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USxDQUFDO1lBQUMsS0FBSSxHQUFHLEdBQUMsR0FBRyxPQUFPO1lBQUssR0FBRSxjQUFjLElBQUksTUFBTSxVQUFTO2dCQUFDLFNBQVEsQ0FBQztZQUFDLEtBQUksRUFBRSxJQUFJO1FBQUU7UUFBQyxJQUFJLElBQUUsR0FBRztRQUFHLE9BQU8sS0FBRyxFQUFFLElBQUksS0FBSSxDQUFBLElBQUUsR0FBRSxFQUFFLFVBQVEsS0FBRyxJQUFHLElBQUc7SUFBSSxHQUFFLElBQUksR0FBRyxLQUFHO0lBQUksT0FBTSxDQUFDLE1BQUk7QUFBQztBQUFDLGVBQWUsR0FBRyxFQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUM7SUFBRSxJQUFJLElBQUUsT0FBTyxLQUFHO0lBQUksSUFBRyxDQUFDLEVBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsR0FBRztJQUFHLElBQUcsQ0FBQyxLQUFHLEdBQUcsT0FBSSxHQUFHLEtBQUcsT0FBTSxDQUFDO0lBQUUsSUFBRyxFQUFFLFNBQVEsT0FBSyxFQUFFLE9BQU07UUFBQyxJQUFJLEtBQUUsTUFBTSxHQUFHLEdBQUU7UUFBRyxJQUFHLENBQUMsTUFBRyxHQUFHLE9BQUksQ0FBRSxDQUFBLElBQUUsR0FBRyxFQUFDLEdBQUcsT0FBTSxDQUFDO0lBQUM7SUFBQyxPQUFNLENBQUMsR0FBRyxPQUFLLENBQUEsRUFBRSxHQUFFLElBQUcsQ0FBQyxHQUFHLE9BQUssQ0FBQSxFQUFFLGNBQWMsSUFBSSxNQUFNLFNBQVE7UUFBQyxTQUFRLENBQUM7SUFBQyxLQUFJLENBQUMsR0FBRyxPQUFLLENBQUEsRUFBRSxjQUFjLElBQUksTUFBTSxVQUFTO1FBQUMsU0FBUSxDQUFDO0lBQUMsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLE1BQUssQ0FBQyxHQUFHLE9BQUksRUFBRSxHQUFHLElBQUksV0FBUyxFQUFFLEVBQUMsQ0FBQyxDQUFDO0FBQUU7QUFBQyxlQUFlLEdBQUcsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJLEtBQUU7SUFBRSxJQUFJLElBQUksS0FBRSxHQUFFLEtBQUUsS0FBRyxDQUFDLEdBQUcsSUFBRyxNQUFHLEVBQUU7UUFBQyxJQUFJLEtBQUUsR0FBRztRQUFHLElBQUcsQ0FBQyxJQUFFO1FBQU0sSUFBRyxLQUFFLElBQUUsT0FBSyxHQUFFLE9BQU07WUFBQyxJQUFHLEdBQUcsTUFBSyxDQUFBLEVBQUUsSUFBRSxLQUFJLEdBQUcsRUFBQyxLQUFLLENBQUEsR0FBRSxjQUFjLElBQUksTUFBTSxTQUFRO2dCQUFDLFNBQVEsQ0FBQztZQUFDLEtBQUksR0FBRyxFQUFDLEdBQUcsT0FBTSxDQUFDO1lBQUUsR0FBRSxjQUFjLElBQUksTUFBTSxVQUFTO2dCQUFDLFNBQVEsQ0FBQztZQUFDO1FBQUc7UUFBQyxJQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsS0FBSSxHQUFHLElBQUc7UUFBTSxJQUFJLElBQUUsR0FBRztRQUFHLElBQUcsR0FBRyxVQUFRLElBQUcsT0FBTSxDQUFDO0lBQUM7SUFBQyxPQUFNLENBQUM7QUFBQztBQUFDLGVBQWUsR0FBRyxFQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUUsRUFBRSxFQUFDLElBQUUsRUFBRTtJQUFFLElBQUksSUFBRSxPQUFPLEtBQUcsS0FBSSxJQUFFLEVBQUU7SUFBRyxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsR0FBRztJQUFHLElBQUcsQ0FBQyxHQUFFLE9BQU8sUUFBUSxLQUFLLHdDQUF1QztRQUFDLE9BQU07UUFBTyxRQUFPO0lBQW9CLElBQUcsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLE9BQU0sSUFBRSxPQUFNLElBQUUsR0FBRSxLQUFFLENBQUM7UUFBSSxJQUFJLElBQUUsTUFBTSxHQUFHLEdBQUU7UUFBRyxPQUFPLFFBQVEsS0FBSyxnREFBOEMsS0FBSyxVQUFVO1lBQUMsT0FBTTtZQUFFLGFBQVk7WUFBRSxRQUFPO1lBQUUsVUFBUztRQUFDLEtBQUksQ0FBQztJQUFDO0lBQUUsSUFBRyxFQUFFLEVBQUUsV0FBUyxHQUFFLE9BQU0s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QUFNLElBQUc7QUFBQztBQUFDLFNBQVMsR0FBRyxFQUFDO0lBQUUsSUFBRyxDQUFDLElBQUU7SUFBTyxJQUFJLElBQUUsR0FBRSxNQUFNO0lBQStELE9BQU8sR0FBRyxDQUFDLEVBQUUsRUFBRTtBQUFhO0FBQUMsU0FBUyxHQUFHLEVBQUM7SUFBRSxPQUFNLGNBQVksR0FBRztBQUFFO0FBQUMsU0FBUyxHQUFHLEVBQUM7SUFBRSxPQUFNLFdBQVMsR0FBRztBQUFFO0FBQUMsU0FBUyxHQUFHLEVBQUM7SUFBRSxJQUFJLElBQUUsT0FBTyxNQUFHLElBQUk7SUFBTyxJQUFHLENBQUMsR0FBRSxPQUFPO0lBQUssSUFBSSxLQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsT0FBTSxFQUFHLEdBQUU7UUFBQztRQUFhO1FBQWE7UUFBVztRQUFhO1FBQVc7UUFBVTtRQUFTO1FBQVU7UUFBUztRQUFVO1FBQVc7UUFBWTtLQUFPLEVBQUMsQ0FBQztJQUFHLE9BQU8sR0FBRSxZQUFVLEtBQUU7QUFBSTtBQUFDLFNBQVMsR0FBRyxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksS0FBRSxPQUFPLE1BQUcsSUFBSTtJQUFPLElBQUcsQ0FBQyxJQUFFLE9BQU07SUFBRyxJQUFHLGNBQVksRUFBRSxLQUFHLE9BQU07SUFBVSxJQUFJLElBQUUsR0FBRztJQUFHLE9BQU8sSUFBRSxHQUFHLEtBQUcsVUFBVSxLQUFLLE1BQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUMsRUFBRSxPQUFPLGFBQVcsaUJBQWUsR0FBRyxLQUFHLFVBQVUsS0FBSyxNQUFHLENBQUMsTUFBTSxFQUFFLEdBQUUsQ0FBQyxHQUFDLEVBQUUsT0FBTyxnQkFBYyxHQUFHLEtBQUcsRUFBRSxPQUFPLFVBQVEsVUFBVSxLQUFLLE1BQUcsQ0FBQyxFQUFFLEdBQUUsTUFBTSxDQUFDLEdBQUMsZ0JBQWdCLEtBQUssTUFBRyxDQUFDLEVBQUUsR0FBRSxHQUFHLENBQUMsR0FBQyxFQUFFLE9BQU8sZ0JBQWM7QUFBQztBQUFDLFNBQVMsR0FBRyxFQUFDO0lBQUUs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QkFBZSxFQUFHLElBQUksR0FBRyxLQUFHO1lBQUMsU0FBUTtZQUFJLFVBQVM7WUFBRyxlQUFjLEtBQUcsU0FBUztRQUFJLEVBQUM7SUFBRTtJQUFDLElBQUcsR0FBRyxLQUFHLE9BQU8sTUFBTSxHQUFHLElBQUU7SUFBRyxJQUFHLEdBQUcsS0FBRyxPQUFPLE1BQU0sR0FBRyxJQUFFO0lBQUcsSUFBSSxJQUFFLEdBQUc7SUFBRyxJQUFHLENBQUMsR0FBRSxPQUFPLE1BQU0sR0FBRyxJQUFFO0lBQUcsSUFBSSxJQUFFLE9BQU8sRUFBRSxTQUFRLElBQUUsRUFBRSxTQUFRLElBQUUsRUFBRSxRQUFPLElBQUUsTUFBTSxHQUFHO0lBQUcsSUFBRyxDQUFDLEdBQUUsT0FBTyxNQUFNLEdBQUcsSUFBRTtJQUFHLElBQUksSUFBRSxHQUFHO0lBQUcsSUFBRyxHQUFFO1FBQUMsSUFBSSxJQUFFLEdBQUcsR0FBRTtRQUFHLElBQUcsQ0FBQyxHQUFFLE9BQU8sTUFBTSxHQUFHLElBQUU7UUFBRyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHO0lBQUk7SUFBQyxJQUFJLElBQUUsR0FBRztJQUFHLElBQUcsR0FBRTtRQUFDLElBQUksSUFBRSxRQUFNLEVBQUUsY0FBYyxDQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFFLE9BQU8sS0FBRyxFQUFFLE9BQU8sU0FBUSxLQUFFLEdBQUcsR0FBRTtRQUFHLElBQUcsQ0FBQyxJQUFFLE9BQU8sTUFBTSxHQUFHLElBQUU7UUFBRyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHO0lBQUk7SUFBQyxJQUFJLElBQUUsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLEdBQUcsU0FBUyxHQUFFLEtBQUssQ0FBQyxFQUFDLElBQUUsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLE9BQU0sRUFBRyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBRSxFQUFFLGlGQUFpRixDQUFDLEdBQUUsSUFBSSxDQUFDLEdBQUU7SUFBSSxJQUFHLEdBQUU7UUFBQyxFQUFFLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxNQUFLLEdBQUU7UUFBTyxJQUFJLElBQUUsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLGdCQUFlLEVBQUcsSUFBSSxFQUFFLEdBQUcsS0FBSSxRQUFPO1lBQUMsU0FBUTtZQUFJLFVBQVM7WUFBRyxlQUFjLFNBQVM7UUFBSTtRQUFHLElBQUcsR0FBRSxPQUFNLENBQUM7SUFBQztJQUFDLE9BQU8sTUFBTSxHQUFHLElBQUU7QUFBRTtBQUFDLGVBQWUsR0FBRyxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksS0FBRSxPQUFPLEtBQUcsSUFBSTtJQUFPLElBQUcsQ0FBQyxJQUFFLE9BQU0sQ0FBQztJQUFFLElBQUksSUFBRSxHQUFHLElBQUU7SUFBTSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsR0FBRyxNQUFNLEtBQUssRUFBRSxVQUFTLElBQUUsR0FBRTtJQUFPLElBQUcsQ0FBQyxHQUFFLE9BQU8sUUFBUSxLQUFLLHNDQUFxQztRQUFDLE9BQU0sR0FBRTtRQUFNLE9BQU07UUFBRSxTQUFRLE1BQU0sS0FBSyxFQUFFLFNBQVMsSUFBSSxDQUFBLEtBQUksQ0FBQTtnQkFBQyxPQUFNLEdBQUU7Z0JBQU0sTUFBSyxHQUFFLGFBQWEsVUFBUTtZQUFFLENBQUE7SUFBRyxJQUFHLENBQUM7SUFBRSxNQUFNLEdBQUcsR0FBRTtJQUFHLElBQUksSUFBRSxNQUFNLEdBQUcsSUFBRSxHQUFFO0lBQUcsSUFBRyxDQUFDLEdBQUU7UUFBQyxJQUFJLElBQUUsR0FBRyxJQUFFO1FBQUcsSUFBRyxHQUFFO1lBQUMsSUFBSSxJQUFFLEdBQUcsTUFBTSxLQUFLLEVBQUUsVUFBUyxJQUFFLEdBQUU7WUFBTyxLQUFJLENBQUEsTUFBTSxHQUFHLEdBQUUsSUFBRyxJQUFFLE1BQU0sR0FBRyxJQUFFLEdBQUUsRUFBQztRQUFFO0lBQUM7SUFBQyxPQUFPLEtBQUcsUUFBUSxLQUFLLHlDQUF3QztRQUFDLE9BQU0sR0FBRTtRQUFN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QUcsSUFBRSxLQUFLLElBQUksR0FBRSxHQUFFLFNBQU87SUFBRyxJQUFJLElBQUksS0FBRSxHQUFFLEtBQUUsR0FBRSxNQUFHLEVBQUUsTUFBTSxHQUFHO0lBQUcsSUFBSSxJQUFFLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxpQkFBZ0IsRUFBRztJQUFHLElBQUcsQUFBQyxDQUFBLEdBQUUsRUFBRSwwQkFBeUIsRUFBRyxHQUFFLElBQUcsTUFBSSxFQUFFLFFBQU87SUFBTyxJQUFJLElBQUUsTUFBSSxFQUFFLFdBQVcsWUFBVSxBQUFDLENBQUEsR0FBRSxFQUFFLHNCQUFxQixFQUFHLEdBQUUsSUFBRSxJQUFFLEdBQUUsR0FBRSxJQUFFO1FBQUMsOEJBQTZCLENBQUM7SUFBQyxJQUFFLEtBQUssS0FBRyxBQUFDLENBQUEsR0FBRSxFQUFFLHVCQUFzQixFQUFHLEdBQUUsSUFBRSxJQUFFLEtBQUssR0FBRTtJQUFHLEtBQUksSUFBSSxNQUFLLEVBQUUsRUFBRSxJQUFJO0lBQUcsTUFBTSxFQUFFO0FBQUsiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTZiNzkwN2IzZDYxZDEyYmMuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvcGhlbm9tL29wZXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxccGhlbm9tXFxcXG9wZXJhdGlvbnMuanNcIixcImJ1bmRsZUlkXCI6XCJkYWY3ODg1YjIzZTg4M2QzXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogaHY1NWRcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL3BoZW5vbS9vcGVyYXRpb25zLmpzXHJcbiAqIERlcGVuZGVuY2llczpcclxuICogICAuL3J1bGVzIC0+IGVaYzdyICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3BoZW5vbS9ydWxlcy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgQHBsYXNtb2hxL21lc3NhZ2luZyAtPiA5Mkd5QiAgPT4gIEBwbGFzbW9ocS9tZXNzYWdpbmcuanNcclxuICogICBkYXlqcyAtPiBmbmhYcCAgPT4gIF90aWxkZV9ub2RlX21vZHVsZXMvZGF5anMuanNcclxuICogICBkYXlqcy9wbHVnaW4vY3VzdG9tUGFyc2VGb3JtYXQgLT4gZzk0U0UgID0+ICBkYXlqcy9wbHVnaW4vY3VzdG9tUGFyc2VGb3JtYXQuanNcclxuICogICB+Y29udGVudHMvY3Jhd2xlci91dGlscy9zZWxlY3QgLT4gaDIySkIgID0+ICBzcmMvY29udGVudHMvY3Jhd2xlci91dGlscy9zZWxlY3QuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2ggLT4gNm1rSTQgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2guanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9kb20gLT4gaEE1UWEgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9kb20uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9vYnNlcnZlciAtPiBlVHpVeCAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL29ic2VydmVyLmpzXHJcbiAqICAgfmNvcmUvZG9tIC0+IGhMTUpYICA9PiAgc3JjL2NvcmUvZG9tLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKiAgIH51dGlscy9nZXRUYXJnZXRPclRpbWVvdXQgLT4gMVRCaEYgID0+ICBzcmMvdXRpbHMvZ2V0VGFyZ2V0T3JUaW1lb3V0LmpzXHJcbiAqL1xyXG5cclxudmFyIG49ZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7bi5kZWZpbmVJbnRlcm9wRmxhZyhyKSxuLmV4cG9ydChyLFwicmVjb3JkUGhlbm9tRGF0ZURlYnVnXCIsKCk9PkYpLG4uZXhwb3J0KHIsXCJnZXRQaGVub21Db3ZlckxldHRlclVwbG9hZFBheWxvYWRcIiwoKT0+SSksbi5leHBvcnQocixcInNob3VsZFN1cHByZXNzUGhlbm9tVXBsb2FkQWxlcnRNZXNzYWdlXCIsKCk9PlApLG4uZXhwb3J0KHIsXCJpbnN0YWxsUGhlbm9tVXBsb2FkQWxlcnRTdXBwcmVzc29yXCIsKCk9Pl8pLG4uZXhwb3J0KHIsXCJzdXBwcmVzc1BoZW5vbVVwbG9hZFN1Y2Nlc3NBbGVydFwiLCgpPT5MKSxuLmV4cG9ydChyLFwiaGFzUGhlbm9tQW5zd2VyRm9yU25hcHNob3RGaWVsZFwiLCgpPT5RKSxuLmV4cG9ydChyLFwiaXNQaGVub21CbG9ja2luZ0xvYWRlclZpc2libGVcIiwoKT0+Wiksbi5leHBvcnQocixcIndhaXRGb3JQaGVub21Mb2FkZXJJZGxlXCIsKCk9PmV0KSxuLmV4cG9ydChyLFwiY2FwdHVyZUNpc2NvUGhlbm9tUmVzdW1lUGFyc2VyQmFzZWxpbmVcIiwoKT0+ZWkpLG4uZXhwb3J0KHIsXCJ3YWl0Rm9yQ2lzY29QaGVub21SZXN1bWVQYXJzZXJUb1NldHRsZVwiLCgpPT5lYSksbi5leHBvcnQocixcImZpbGxQaG9uZUNvdW50cnlDb2RlU2VsZWN0c0Zyb21SZWNvcmRcIiwoKT0+ZWspLG4uZXhwb3J0KHIsXCJmaW5kQmVzdE5hdGl2ZVNlbGVjdE9wdGlvblwiLCgpPT5lVCksbi5leHBvcnQocixcImZpbGxSZXF1aXJlZENvbnNlbnRDaGVja2JveGVzXCIsKCk9PmUwKSxuLmV4cG9ydChyLFwid2FpdEZvclJlc3VtZUZpbGVJbnB1dFwiLCgpPT5lMSksbi5leHBvcnQocixcImdldENvdmVyTGV0dGVyRmlsZUlucHV0U3luY1wiLCgpPT5lOSksbi5leHBvcnQocixcImhhc0NvdmVyTGV0dGVyRmllbGRQcmVzZW5jZVwiLCgpPT50YSksbi5leHBvcnQocixcImdldENvdmVyTGV0dGVyRmllbGRTdGF0dXNcIiwoKT0+dGwpLG4uZXhwb3J0KHIsXCJoYXNSZXN1bWVGaWVsZFByZXNlbmNlXCIsKCk9PnRtKSxuLmV4cG9ydChyLFwicHJlRmlsbEZvcm1cIiwoKT0+dFMpLG4uZXhwb3J0KHIsXCJmaWxsSW5wdXRUZXh0RmllbGRcIiwoKT0+dEUpLG4uZXhwb3J0KHIsXCJjYXB0dXJlUGhlbm9tU2Nob29sQ2FuZGlkYXRlc1wiLCgpPT50Vyksbi5leHBvcnQocixcInR5cGVQaGVub21TY2hvb2xQcm9iZVwiLCgpPT50Syksbi5leHBvcnQocixcImNsZWFyUGhlbm9tU2Nob29sUHJvYmVcIiwoKT0+dFgpLG4uZXhwb3J0KHIsXCJmaWxsUmVzb2x2ZWRQaGVub21TY2hvb2xGaWVsZFwiLCgpPT50Siksbi5leHBvcnQocixcImZpbGxTZWFyY2hGaWVsZFwiLCgpPT50USksbi5leHBvcnQocixcImZpbGxEYXRlRmllbGRcIiwoKT0+cmMpLG4uZXhwb3J0KHIsXCJmaWxsU2VsZWN0RmllbGRcIiwoKT0+cmQpLG4uZXhwb3J0KHIsXCJmaWxsUmFkaW9Hcm91cEZpZWxkXCIsKCk9PnJmKSxuLmV4cG9ydChyLFwiZmlsbENoZWNrYm94RmllbGRcIiwoKT0+cnApLG4uZXhwb3J0KHIsXCJnZXRDb250aW51ZUJ1dHRvblwiLCgpPT5ybSksbi5leHBvcnQocixcInVwbG9hZFJlc3VtZVwiLCgpPT5yaCksbi5leHBvcnQocixcInVwbG9hZENvdmVyTGV0dGVyXCIsKCk9PnJnKSxuLmV4cG9ydChyLFwiY291bnRDb21wb3NpdGVTZWN0aW9uc1wiLCgpPT5yYiksbi5leHBvcnQocixcImVuc3VyZUluaXRpYWxDb21wb3NpdGVTZWN0aW9uXCIsKCk9PnJ5KSxuLmV4cG9ydChyLFwiYWRkQ29tcG9zaXRlU2VjdGlvblwiLCgpPT5ydiksbi5leHBvcnQocixcInByb2Nlc3NDb21wb3NpdGVCbG9ja3NcIiwoKT0+cncpO3ZhciBvPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2hcIiksaT1lKFwiZGF5anNcIiksYT1uLmludGVyb3BEZWZhdWx0KGkpLGw9ZShcImRheWpzL3BsdWdpbi9jdXN0b21QYXJzZUZvcm1hdFwiKSxzPW4uaW50ZXJvcERlZmF1bHQobCksdT1lKFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiKSxjPWUoXCJ+Y29udGVudHMvY3Jhd2xlci91dGlscy9zZWxlY3RcIiksZD1lKFwifmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyXCIpLGY9ZShcIn5jb250ZW50cy9tZXRob2RzL2RvbVwiKSxwPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9vYnNlcnZlclwiKSxtPWUoXCJ+Y29yZS9lbnVtc1wiKSxoPWUoXCJ+Y29yZS9kb21cIiksZz1lKFwifnV0aWxzL2RlbGF5XCIpLGI9ZShcIn51dGlscy9nZXRUYXJnZXRPclRpbWVvdXRcIikseT1uLmludGVyb3BEZWZhdWx0KGIpLHY9ZShcIi4vcnVsZXNcIik7KDAsYS5kZWZhdWx0KS5leHRlbmQocy5kZWZhdWx0KTtsZXQgdz1cImRhdGEtam9icmlnaHQtcGhlbm9tLXVwbG9hZC1hbGVydC1wYXRjaFwiLFM9XCJfX2pyX3BoZW5vbV91cGxvYWRfYWxlcnRfc3VwcHJlc3NvclwiLEU9Lyg/Oig/OnJlc3VtZXxmaWxlKVxccysoPzpoYXNcXHMrYmVlblxccyspPyg/OnVwbG9hZGVkfGF0dGFjaGVkKVxccytzdWNjZXNzZnVsbHl8dXBsb2FkZWRcXHMrKD86eW91clxccyspPyg/OnJlc3VtZXxmaWxlKVxccytzdWNjZXNzZnVsbHl8KD86cmVzdW1lfGZpbGUpXFxzK2hhc1xccytiZWVuXFxzK3N1Y2Nlc3NmdWxseVxccythdHRhY2hlZCkvaSx4PVwiQ292ZXJfTGV0dGVyXCIsQz0xMmUzLEE9M2U0LGs9ODAwLFQ9MTAwO2Z1bmN0aW9uIEYoZSx0KXtjb25zb2xlLmluZm8oYFtwaGVub21dW2RhdGUtZGVidWddICR7ZX0gJHtKU09OLnN0cmluZ2lmeSh0KX1gKX1mdW5jdGlvbiBJKGUpe3JldHVybnsuLi5lLGNvdmVyTGV0dGVyTmFtZTpEKGUuY292ZXJMZXR0ZXJOYW1lKX19ZnVuY3Rpb24gaihlKXtyZXR1cm4gZS5yZXBsYWNlKC9cXC5bXi8uXSskLyxcIlwiKS5yZXBsYWNlKC9bXFxcXC86Kj9cIjw+fF0rL2csXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfWZ1bmN0aW9uIEQoZSl7bGV0IHQ9aihlKSxyPXQubWF0Y2goL15Db3Zlcl9MZXR0ZXJfKFteX10rKS9pKSxuPWoocj8uWzFdfHxcIlwiKTtpZihuKXJldHVybmAke3h9XyR7bn1gO2xldCBvPXQucmVwbGFjZSgvXFxiY292ZXJcXHMrbGV0dGVyXFxiL2dpLFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKS5zcGxpdCgvXFxzKy8pLnNsaWNlKDAsMikuam9pbihcIiBcIik7cmV0dXJuIG8/YCR7eH1fJHtvfWA6eH1mdW5jdGlvbiBQKGUpe3JldHVybiBFLnRlc3QoU3RyaW5nKGU/P1wiXCIpKX1hc3luYyBmdW5jdGlvbiBfKCl7aWYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUodyk9PT1cInRydWVcIilyZXR1cm4hMDtsZXQgZT1hd2FpdCAoMCx1LnNlbmRUb0JhY2tncm91bmQpKHtuYW1lOlwiaW5zdGFsbE1haW5Xb3JsZEFsZXJ0U3VwcHJlc3NvclwiLGJvZHk6e21hcmtlckF0dHI6dyxwYXR0ZXJuRmxhZ3M6RS5mbGFncyxwYXR0ZXJuU291cmNlOkUuc291cmNlLHN0YXRlS2V5OlN9fSk7cmV0dXJuIGU/LnN1Y2Nlc3M9PT0hMH1hc3luYyBmdW5jdGlvbiBMKCl7bGV0IGU9YXdhaXQgXygpO3JldHVybiBlfHxjb25zb2xlLndhcm4oXCJbcGhlbm9tXSB1cGxvYWQgYWxlcnQgc3VwcHJlc3NvciBpcyBub3QgaW5zdGFsbGVkXCIpLGV9ZnVuY3Rpb24gUihlKXtlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImJsdXJcIix7YnViYmxlczohMH0pKX1mdW5jdGlvbiBPKGUpe2U/LmJsdXIoKX1mdW5jdGlvbiBNKGUsdCl7ZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCh0LHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY29tcG9zZWQ6ITB9KSl9ZnVuY3Rpb24gTihlLHQpe2UuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudCh0LHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsdmlldzp3aW5kb3d9KSl9ZnVuY3Rpb24gJChlKXtOKGUsXCJtb3VzZWRvd25cIiksTihlLFwibW91c2V1cFwiKSxOKGUsXCJjbGlja1wiKX1mdW5jdGlvbiBCKGUsdCl7bGV0IHI9T2JqZWN0LmdldFByb3RvdHlwZU9mKGUpLG49T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLFwidmFsdWVcIik7bj8uc2V0Py5jYWxsKGUsdCksbj8uc2V0fHwoZS52YWx1ZT10KX1mdW5jdGlvbiBxKGUsdCl7bGV0IHI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MU2VsZWN0RWxlbWVudC5wcm90b3R5cGUsXCJ2YWx1ZVwiKXx8T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSksXCJ2YWx1ZVwiKTtyPy5zZXQ/LmNhbGwoZSx0KSxyPy5zZXR8fChlLnZhbHVlPXQpfWZ1bmN0aW9uIFUoZSl7cmV0dXJuIFN0cmluZyhlPz9cIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpfWZ1bmN0aW9uIEgoZSl7cmV0dXJuIFUoZSkucmVwbGFjZSgvW15hLXowLTldL2csXCJcIil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gU3RyaW5nKGU/P1wiXCIpLnJlcGxhY2UoL1xcRC9nLFwiXCIpfWZ1bmN0aW9uIHooZSx0KXtsZXQgcj1VKGUpLG49VSh0KTtpZighcnx8IW4pcmV0dXJuITE7aWYocj09PW4pcmV0dXJuITA7bGV0IG89SChlKSxpPUgodCk7aWYobyYmbz09PWkpcmV0dXJuITA7bGV0IGE9WShlKSxsPVkodCk7cmV0dXJuISFhJiYhIWwmJmEucmVwbGFjZSgvXjEoPz1cXGR7MTB9JCkvLFwiXCIpPT09bC5yZXBsYWNlKC9eMSg/PVxcZHsxMH0kKS8sXCJcIil8fHIuaW5jbHVkZXMobil8fG4uaW5jbHVkZXMocil9ZnVuY3Rpb24gVihlKXtyZXR1cm4gU3RyaW5nKGU/P1wiXCIpLnRyaW0oKS5sZW5ndGg+MH1mdW5jdGlvbiBXKGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpP2Uuc29tZShlPT5XKGUpKTpcInN0cmluZ1wiPT10eXBlb2YgZT9lLnRyaW0oKS5sZW5ndGg+MDpudWxsIT1lfWZ1bmN0aW9uIEcoZSx0KXtsZXQgcj1IKGUpO3JldHVybiEhciYmT2JqZWN0LmVudHJpZXModHx8e30pLnNvbWUoKFtlLHRdKT0+SChlKT09PXImJlcodCkpfWZ1bmN0aW9uIEsoZSl7bGV0IHQ9SChlKTtyZXR1cm5cImNvdW50cnlcIj09PXR8fFwiY291bnRyeXJlZ2lvblwiPT09dHx8XCJjb3VudHJ5b3JyZWdpb25cIj09PXR8fFwicGxhY2VvZnJlc2lkZW5jZWNvdW50cnlcIj09PXR8fHQuaW5jbHVkZXMoXCJwaG9uZWNvdW50cnljb2RlXCIpfHx0LmluY2x1ZGVzKFwiY291bnRyeXBob25lY29kZVwiKXx8dC5pbmNsdWRlcyhcImNvdW50cnlyZWdpb25waG9uZWNvZGVcIil8fHQuaW5jbHVkZXMoXCJjb3VudHJ5XCIpJiZ0LmluY2x1ZGVzKFwicGhvbmVcIikmJnQuaW5jbHVkZXMoXCJjb2RlXCIpfWZ1bmN0aW9uIFgoZSl7aWYoVyhlPy5jb3VudHJ5KSlyZXR1cm4hMDtsZXQgdD1lPy5yZWd1bGFyfHx7fTtyZXR1cm5bXCJDb3VudHJ5XCIsXCJDb3VudHJ5L1JlZ2lvblwiLFwiQ291bnRyeSBvciBSZWdpb25cIixcIlBsYWNlIG9mIFJlc2lkZW5jZSAtIENvdW50cnlcIl0uc29tZShlPT5XKHRbZV0pKX1mdW5jdGlvbiBKKGUsdCl7bGV0IHI9SChlKSxuPXQ/LmZpbGxEYXRhTGlzdHx8dD8uZmlsbF9kYXRhX2xpc3R8fFtdO3JldHVybiBBcnJheS5pc0FycmF5KG4pJiZuLnNvbWUoZT0+SChlPy5uYW1lKT09PXImJiFXKGU/LnZhbHVlKSl9ZnVuY3Rpb24gUShlLHQpe3JldHVybiEhZS50cmltKCkmJighIUcoZSx0Py5yZWd1bGFyfHx7fSl8fEsoZSkmJkooZSx0KSYmWCh0KSl9ZnVuY3Rpb24gWigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheWJnXCIpLHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aWRnZXQtbG9hZGVyXCIpO3JldHVybigwLHYuaXNBY3R1YWxseVZpc2libGUpKGUpfHwoMCx2LmlzQWN0dWFsbHlWaXNpYmxlKSh0KX1hc3luYyBmdW5jdGlvbiBlZShlPTEyZTMpe3JldHVybiBhd2FpdCAoMCxwLndhaXRGb3JDb25kaXRpb24pKCgpPT4hWigpLHt0aW1lb3V0OmUsaW50ZXJ2YWw6NTAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSl9YXN5bmMgZnVuY3Rpb24gZXQoZT0wKXtsZXQgdD1hd2FpdCBlZSgpO2lmKCF0KXJldHVybiBjb25zb2xlLndhcm4oXCJbcGhlbm9tXSBsb2FkZXIgZGlkIG5vdCBiZWNvbWUgaGlkZGVuIGJlZm9yZSB0aW1lb3V0XCIpLCExO2lmKGU8PTApcmV0dXJuITA7bGV0IHI9RGF0ZS5ub3coKStlO2Zvcig7RGF0ZS5ub3coKTxyOyl7aWYoWigpKXtsZXQgZT1hd2FpdCBlZSgpO2lmKCFlKXJldHVybiBjb25zb2xlLndhcm4oXCJbcGhlbm9tXSBsb2FkZXIgZGlkIG5vdCBzZXR0bGUgYmVmb3JlIHRpbWVvdXRcIiksITF9YXdhaXQgKDAsZy5kZWxheSkoNTApfXJldHVybiEwfWZ1bmN0aW9uIGVyKCl7cmV0dXJuXCJjYXJlZXJzLmNpc2NvLmNvbVwiPT09d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lJiYoMCx2LmlzSW5pdGlhbEFwcGxpY2F0aW9uU3RlcCkoKDAsdi5nZXRTdGVwSW5mbykoKSkmJiEhKDAsdi5nZXRGb3JtUm9vdCkoKX1mdW5jdGlvbiBlbihlKXtpZighKGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl8fCFlLmlzQ29ubmVjdGVkfHxlLmRpc2FibGVkfHwhKDAsdi5pc0FjdHVhbGx5VmlzaWJsZSkoZSl8fGUuY2xvc2VzdChcIi5yZXN1bWUtdXBsb2FkLXdyYXBwZXJcIikpcmV0dXJuITE7bGV0IHQ9ZS50YWdOYW1lLnRvTG93ZXJDYXNlKCk7aWYoIVtcImlucHV0XCIsXCJ0ZXh0YXJlYVwiLFwic2VsZWN0XCJdLmluY2x1ZGVzKHQpKXJldHVybiExO2xldCByPVwiaW5wdXRcIj09PXQ/KGUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKXx8XCJ0ZXh0XCIpLnRvTG93ZXJDYXNlKCk6XCJcIjtpZihbXCJmaWxlXCIsXCJoaWRkZW5cIixcImNoZWNrYm94XCIsXCJyYWRpb1wiXS5pbmNsdWRlcyhyKSlyZXR1cm4hMTtsZXQgbj1gJHtlLmdldEF0dHJpYnV0ZShcImlkXCIpfHxcIlwifSAke2UuZ2V0QXR0cmlidXRlKFwibmFtZVwiKXx8XCJcIn1gLnRvTG93ZXJDYXNlKCk7cmV0dXJuIS8ocmVzdW1lcGF0aHxyZXN1bWVuYW1lfHJlc3VtZWZpbGVzaXplfHJlc3VtZWJ1Y2tldGlkfHJlc3VtZXJlbGF0aXZlcGF0aHxpc3Jlc3VtZSkvLnRlc3Qobil9ZnVuY3Rpb24gZW8oKXtsZXQgZT1BcnJheS5mcm9tKHYuZ2V0Rm9ybVJvb3QoKT8ucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpPz9bXSkuZmlsdGVyKGVuKTtyZXR1cm57ZmllbGRDb3VudDplLmxlbmd0aCxmaWVsZFNpZ25hdHVyZTplLm1hcCgoZSx0KT0+W3QsZS50YWdOYW1lLGUuZ2V0QXR0cmlidXRlKFwiaWRcIil8fFwiXCIsZS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpfHxcIlwiLGUudmFsdWV8fFwiXCJdLmpvaW4oXCI6XCIpKS5qb2luKFwifFwiKX19ZnVuY3Rpb24gZWkoKXtyZXR1cm4gZXIoKT9lbygpOm51bGx9YXN5bmMgZnVuY3Rpb24gZWEoZSx0PXt9KXtsZXQgcj10LnN0YXJ0VGltZW91dE1zPz9DLG49dC5zZXR0bGVUaW1lb3V0TXM/P0Esbz10LnF1aWV0TXM/P2ssaT10LmludGVydmFsTXM/P1QsYT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnR8fGRvY3VtZW50LmJvZHksbD1lLHM9RGF0ZS5ub3coKSx1PSExLGM9ITEsZD0oKT0+e2xldCBlPWVvKCk7ZS5maWVsZFNpZ25hdHVyZSE9PWwuZmllbGRTaWduYXR1cmUmJihsPWUscz1EYXRlLm5vdygpLGM9ITApfSxmPWF3YWl0ICgwLHAud2FpdEZvckNvbmRpdGlvbikoKCk9PlooKT8odT0hMCxzPURhdGUubm93KCksITApOihkKCksYykse3RpbWVvdXQ6cixpbnRlcnZhbDppLG9ic2VydmVUYXJnZXQ6YX0pO2lmKCFmKXJldHVybiBjb25zb2xlLndhcm4oXCJbcGhlbm9tXSBDaXNjbyByZXN1bWUgcGFyc2VyIGRpZCBub3Qgc2hvdyBhY3Rpdml0eSBhZnRlciB1cGxvYWRcIix7ZmllbGRDb3VudDpsLmZpZWxkQ291bnQsc2F3RmllbGRSZXdyaXRlOmN9KSwhMTtsZXQgbT1hd2FpdCAoMCxwLndhaXRGb3JDb25kaXRpb24pKCgpPT5aKCk/KHU9ITAscz1EYXRlLm5vdygpLCExKTooZCgpLERhdGUubm93KCktcz49bykse3RpbWVvdXQ6bixpbnRlcnZhbDppLG9ic2VydmVUYXJnZXQ6YX0pO3JldHVybiBtPyhjb25zb2xlLmxvZyhcIltwaGVub21dIENpc2NvIHJlc3VtZSBwYXJzZXIgc2V0dGxlZFwiLHtmaWVsZENvdW50OmwuZmllbGRDb3VudCxzYXdMb2FkZXI6dSxzYXdGaWVsZFJld3JpdGU6Y30pLCEwKTooY29uc29sZS53YXJuKFwiW3BoZW5vbV0gQ2lzY28gcmVzdW1lIHBhcnNlciBkaWQgbm90IHNldHRsZSBhZnRlciB1cGxvYWRcIix7ZmllbGRDb3VudDpsLmZpZWxkQ291bnQsc2F3TG9hZGVyOnUsc2F3RmllbGRSZXdyaXRlOmN9KSwhMSl9ZnVuY3Rpb24gZWwoZSl7cmV0dXJuW1widHJ1ZVwiLFwieWVzXCIsXCIxXCIsXCJjaGVja2VkXCIsXCJhZ3JlZVwiLFwiYWdyZWVkXCIsXCJjdXJyZW50XCJdLmluY2x1ZGVzKFUoZSkpfWZ1bmN0aW9uIGVzKGUpe3JldHVybltcImZhbHNlXCIsXCJub1wiLFwiMFwiLFwidW5jaGVja2VkXCIsXCJkaXNhZ3JlZVwiLFwiZGVjbGluZVwiXS5pbmNsdWRlcyhVKGUpKX1mdW5jdGlvbiBldShlKXtpZighZSlyZXR1cm5cIlwiO2xldCB0PWUuY2xvbmVOb2RlKCEwKTtyZXR1cm4gdC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIC5jaGVjaywgLmNoZWNrbWFyaywgLnJlcXVpcmVkLCBbYXJpYS1oaWRkZW49J3RydWUnXVwiKS5mb3JFYWNoKGU9PntlLnJlbW92ZSgpfSksdC50ZXh0Q29udGVudD8ucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl8fFwiXCJ9ZnVuY3Rpb24gZWMoZSl7bGV0IHQ9ZS5pZD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke0NTUy5lc2NhcGUoZS5pZCl9XCJdYCk6bnVsbDtyZXR1cm4gZXUodHx8ZS5jbG9zZXN0KFwibGFiZWxcIil8fGUucGFyZW50RWxlbWVudCl9ZnVuY3Rpb24gZWQoZSl7bGV0IHQ9ZS5jbG9zZXN0KFwibGFiZWxcIikscj1lLmNsb3Nlc3QoXCIuZGF0ZXJhbmdlcGlja2VyLWNoZWNrYm94XCIpLG49ZXUodD8ucXVlcnlTZWxlY3RvcihcIi5jaGVja2JveFRleHRcIikpfHxldSh0KXx8ZXUocj8ucXVlcnlTZWxlY3RvcihcIi5jaGVja2JveFRleHRcIikpfHxldShyKXx8ZWMoZSk7cmV0dXJuIG4ucmVwbGFjZSgvXFwqL2csXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfWZ1bmN0aW9uIGVmKGUpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBDU1MmJlwiZnVuY3Rpb25cIj09dHlwZW9mIENTUy5lc2NhcGU/Q1NTLmVzY2FwZShlKTplLnJlcGxhY2UoL1tcIlxcXFxdL2csXCJcXFxcJCZcIil9ZnVuY3Rpb24gZXAoZSl7bGV0IHQ9ZS5pZD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke2VmKGUuaWQpfVwiXWApOm51bGw7cmV0dXJuKHQ/LnRleHRDb250ZW50fHxlLmNsb3Nlc3QoXCIuZm9ybS1ncm91cC5maWVsZFwiKT8ucXVlcnlTZWxlY3RvcihcImxhYmVsLmNvbnRyb2wtbGFiZWwsIGxlZ2VuZCwgbGFiZWxcIik/LnRleHRDb250ZW50fHxcIlwiKS5yZXBsYWNlKC9cXCovZyxcIiBcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl9ZnVuY3Rpb24gZW0oZSx0KXtsZXQgcj1lLiRpbnB1dCxuPXI/LmlkO2lmKG4pe2xldCBlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG4pO2lmKGUgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudClyZXR1cm4gZX1sZXQgbz1lLiRsYWJlbD8uZ2V0QXR0cmlidXRlPy4oXCJmb3JcIik7aWYobyl7bGV0IGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobyk7aWYoZSBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KXJldHVybiBlfWxldCBpPXI/Lm5hbWU7aWYoaSl7bGV0IGU9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0XCIpKS5maW5kKGU9PmUubmFtZT09PWkpO2lmKGUpcmV0dXJuIGV9bGV0IGE9VShlLmxhYmVsKTtyZXR1cm4gYT9BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RcIikpLmZpbmQoZT0+VShlcChlKSk9PT1hKXx8KHQ/LmlzQ29ubmVjdGVkP3Q6bnVsbCl8fChyPy5pc0Nvbm5lY3RlZD9yOm51bGwpOm51bGx9ZnVuY3Rpb24gZWgoZSl7bGV0IHQ9VShlLnRleHRDb250ZW50KTtyZXR1cm4hZS52YWx1ZSYmKFwiXCI9PT10fHxcInNlbGVjdFwiPT09dHx8XCJwbGVhc2Ugc2VsZWN0XCI9PT10fHxcInBsZWFzZSBzZWxlY3QuLi5cIj09PXQpfWZ1bmN0aW9uIGVnKGUpe2xldCB0PUgoZSk7cmV0dXJuIHQuaW5jbHVkZXMoXCJwaG9uZWNvdW50cnljb2RlXCIpfHx0LmluY2x1ZGVzKFwiY291bnRyeXBob25lY29kZVwiKXx8dC5pbmNsdWRlcyhcImNvdW50cnlyZWdpb25waG9uZWNvZGVcIil8fHQuaW5jbHVkZXMoXCJjb3VudHJ5XCIpJiZ0LmluY2x1ZGVzKFwicGhvbmVcIikmJnQuaW5jbHVkZXMoXCJjb2RlXCIpfWZ1bmN0aW9uIGViKGUpe3JldHVybltcInVuaXRlZCBzdGF0ZXNcIixcInVuaXRlZCBzdGF0ZXMgb2YgYW1lcmljYVwiLFwidXNhXCIsXCJ1c1wiXS5pbmNsdWRlcyhVKGUpKX1mdW5jdGlvbiBleShlKXtsZXQgdD1VKGUudGV4dENvbnRlbnQpLHI9VShlLnZhbHVlKTtyZXR1cm5bXCJ1c2FcIixcInVzXCJdLmluY2x1ZGVzKHIpfHxbXCJ1c2FcIixcInVuaXRlZCBzdGF0ZXNcIixcInVuaXRlZCBzdGF0ZXMgb2YgYW1lcmljYVwiXS5pbmNsdWRlcyh0KXx8dC5zdGFydHNXaXRoKFwidXNhIChcIil8fHQuc3RhcnRzV2l0aChcInVuaXRlZCBzdGF0ZXMgKFwiKXx8dC5zdGFydHNXaXRoKFwidW5pdGVkIHN0YXRlcyBvZiBhbWVyaWNhIChcIil9ZnVuY3Rpb24gZXYoZSl7bGV0IHQ9QXJyYXkuaXNBcnJheShlKT9lOltlXTtmb3IobGV0IGUgb2YgdCl7bGV0IHQ9U3RyaW5nKGU/P1wiXCIpLnRyaW0oKTtpZih0KXJldHVybiB0fXJldHVyblwiXCJ9ZnVuY3Rpb24gZXcoZSl7bGV0IHQ9T2JqZWN0LmVudHJpZXMoZXx8e30pLHI9dC5maW5kKChbZV0pPT5lZyhlKSk7aWYocilyZXR1cm4gZXYoclsxXSk7bGV0IG49dC5maW5kKChbZV0pPT5cImNvdW50cnljb2RlXCI9PT1IKGUpKTtyZXR1cm4gbj9ldihuWzFdKTpcIlwifWZ1bmN0aW9uIGVTKGUpe3JldHVybiBBcnJheS5mcm9tKGUub3B0aW9ucykuc29tZShlPT4vXFwoXFxzKlxcK1xccypcXGQvLnRlc3QoZS50ZXh0Q29udGVudHx8XCJcIikpfWZ1bmN0aW9uIGVFKGUpe2xldCB0PVtlcChlKSxlLmlkLGUubmFtZSxlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiksZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIildLmpvaW4oXCIgXCIpLHI9SCh0KSxuPWVnKHQpfHxyLmluY2x1ZGVzKFwiY291bnRyeWNvZGVcIikmJnIuaW5jbHVkZXMoXCJwaG9uZVwiKTtyZXR1cm4gbiYmZVMoZSl9ZnVuY3Rpb24gZXgoZSx0KXtyZXR1cm4hZS5kaXNhYmxlZCYmKGUucmVxdWlyZWR8fFwidHJ1ZVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLXJlcXVpcmVkXCIpfHwhIXQ/LnF1ZXJ5U2VsZWN0b3IoXCIucmVxdWlyZWRcIil8fCEhdD8ucXVlcnlTZWxlY3RvcihcIi5lcnJvci1kZXRhaWwsIFtyb2xlPSdhbGVydCddLCAudGV4dC1kYW5nZXJcIikpfWZ1bmN0aW9uIGVDKGUpe2xldCB0PWUuY2xvc2VzdChcIi5mb3JtLWdyb3VwLmZpZWxkXCIpO3JldHVybigwLHYuaXNBY3R1YWxseVZpc2libGUpKGUpfHxleChlLHQpfWZ1bmN0aW9uIGVBKGUpe2xldCB0PWUuY2xvc2VzdChcIi5mb3JtLWdyb3VwLmZpZWxkXCIpLHI9ZXAoZSl8fGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8ZS5pZHx8XCJDb3VudHJ5L1JlZ2lvbiBQaG9uZSBDb2RlXCI7cmV0dXJue2xhYmVsOnIscmVxdWlyZWQ6ZS5yZXF1aXJlZHx8XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIil8fCEhdD8ucXVlcnlTZWxlY3RvcihcIi5yZXF1aXJlZCwgLmVycm9yLWRldGFpbCwgW3JvbGU9J2FsZXJ0J11cIiksdHlwZTptLkZJRUxEX1RZUEUuU0VMRUNULG9wdGlvbnM6QXJyYXkuZnJvbShlLm9wdGlvbnMpLm1hcChlPT5lLnRleHRDb250ZW50Py5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKXx8XCJcIikuZmlsdGVyKEJvb2xlYW4pLCRsYWJlbDooZS5pZD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke2VmKGUuaWQpfVwiXWApOm51bGwpfHx0fHxlLCRpbnB1dDplfX1hc3luYyBmdW5jdGlvbiBlayhlKXtsZXQgdD1ldyhlKTtpZighdClyZXR1cm5bXTtsZXQgcj1bXSxuPSgwLHYuZ2V0Rm9ybVJvb3QpKCk/P2RvY3VtZW50LG89QXJyYXkuZnJvbShuLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RcIikpLmZpbHRlcihlPT4hZS5kaXNhYmxlZCYmZUMoZSkmJmVFKGUpKTtmb3IobGV0IGUgb2Ygbyl7bGV0IG49ZS5zZWxlY3RlZE9wdGlvbnM/LlswXTtpZihlLnZhbHVlJiZuJiYhZWgobikpY29udGludWU7bGV0IG89ZUEoZSksaT1hd2FpdCByZChvLHQpO2kmJnIucHVzaChvLmxhYmVsKX1yZXR1cm4gcn1mdW5jdGlvbiBlVChlLHQscil7bGV0IG49U3RyaW5nKHQ/P1wiXCIpLnRyaW0oKTtpZighbilyZXR1cm4gbnVsbDtsZXQgaT1VKG4pLGE9ZS5maWx0ZXIoZT0+IWVoKGUpKSxsPWEuZmluZChlPT57bGV0IHQ9VShlLnRleHRDb250ZW50KSxyPVUoZS52YWx1ZSk7cmV0dXJuIHQ9PT1pfHxyPT09aX0pO2lmKGwpcmV0dXJuIGw7bGV0IHM9ZWcociksdT1VKHIpLmluY2x1ZGVzKFwiY291bnRyeVwiKSYmIXM7aWYoKHV8fHMpJiZlYihuKSl7bGV0IGU9YS5maW5kKGV5KTtpZihlKXJldHVybiBlfWxldCBkPVUocikuaW5jbHVkZXMoXCJwaG9uZVwiKTtpZihkKXtsZXQgZT1bXCJtb2JpbGVcIixcImNlbGxcIixcImNlbGxwaG9uZVwiLFwiY2VsbCBwaG9uZVwiXTtpZihlLmluY2x1ZGVzKGkpKXtsZXQgZT1hLmZpbmQoZT0+KDAsby5pc0V4YWN0Q2hvaWNlTWF0Y2gpKGUudGV4dENvbnRlbnR8fGUudmFsdWUsXCJtb2JpbGVcIikpO2lmKGUpcmV0dXJuIGV9fXJldHVybigwLGMuZmluZE1hdGNoT3B0aW9uKShhLG4pfHxudWxsfWZ1bmN0aW9uIGVGKGUsdCl7aWYoIWU/LmlzQ29ubmVjdGVkKXJldHVybiExO2xldCByPVUoZS52YWx1ZSksbj1VKHQudmFsdWUpO3JldHVybiEhciYmISFuJiYoZS52YWx1ZT09PXQudmFsdWV8fHI9PT1uKX1hc3luYyBmdW5jdGlvbiBlSShlLHQpe2xldCByPUFycmF5LmZyb20oZS5vcHRpb25zKSxuPXIuZmluZEluZGV4KGU9PmU9PT10KTtmb3IobGV0IG8gb2YoZS5mb2N1cygpLCQoZSksbj49MCYmKGUuc2VsZWN0ZWRJbmRleD1uKSxxKGUsdC52YWx1ZSkscikpby5zZWxlY3RlZD1vPT09dDt0LnNlbGVjdGVkPSEwLGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIix0LnZhbHVlKSxNKGUsXCJjaGFuZ2VcIiksTShlLFwiaW5wdXRcIiksTShlLFwiYmx1clwiKSxNKGUsXCJmb2N1c291dFwiKSxPKGUpLGF3YWl0ICgwLGcuZGVsYXkpKDE2MCl9YXN5bmMgZnVuY3Rpb24gZWooZSx0LHIpe2xldCBuPWF3YWl0ICgwLHAud2FpdEZvckNvbmRpdGlvbikoKCk9PntsZXQgbj1lbShlLHQpO3JldHVybiBlRihuLHIpfSx7dGltZW91dDo5MDAsaW50ZXJ2YWw6NTAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSk7cmV0dXJuISFuJiYoYXdhaXQgKDAsZy5kZWxheSkoMTUwKSxlRihlbShlLHQpLHIpKX1mdW5jdGlvbiBlRChlKXtsZXQgdD1lLmNsb3Nlc3QoXCJsYWJlbFwiKSxyPXQ/LnF1ZXJ5U2VsZWN0b3IoXCIucmFkaW8tdGV4dFwiKSxuPWV1KHIpO2lmKG4pcmV0dXJuIG47bGV0IG89ZS5pZD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke2VmKGUuaWQpfVwiXWApOm51bGw7cmV0dXJuIGV1KG98fHR8fGUucGFyZW50RWxlbWVudCl9ZnVuY3Rpb24gZVAoZSl7cmV0dXJuIGUuY2xvc2VzdChcImxhYmVsXCIpfHwoZS5pZD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke2VmKGUuaWQpfVwiXWApOm51bGwpfHxlfWZ1bmN0aW9uIGVfKGUpe2lmKGUuaXNDb25uZWN0ZWQpcmV0dXJuIGU7aWYoZS5pZCl7bGV0IHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5pZCk7aWYodCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJlwicmFkaW9cIj09PXQudHlwZSlyZXR1cm4gdH1sZXQgdD1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpKTtpZihlLm5hbWUpe2xldCByPXQuZmluZCh0PT50Lm5hbWU9PT1lLm5hbWUmJnQudmFsdWU9PT1lLnZhbHVlKTtpZihyKXJldHVybiByfWxldCByPVUoZUQoZSkpO3JldHVybiB0LmZpbmQodD0+VShlRCh0KSk9PT1yJiZVKHQudmFsdWUpPT09VShlLnZhbHVlKSl8fG51bGx9ZnVuY3Rpb24gZUwoZSl7bGV0IHQ9ZS5jbG9zZXN0KFwiLmZpZWxkLXJhZGlvLWdyb3VwLCAuZm9ybS1ncm91cC5maWVsZFwiKT8/ZG9jdW1lbnQscj1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykpO2lmKCFlLm5hbWUpcmV0dXJuIHI7bGV0IG49ci5maWx0ZXIodD0+dC5uYW1lPT09ZS5uYW1lKTtyZXR1cm4gbi5sZW5ndGg+MD9uOnJ9ZnVuY3Rpb24gZVIoZSl7aWYoIWU/LmlzQ29ubmVjdGVkKXJldHVybiExO2xldCB0PWUuZ2V0QXR0cmlidXRlKFwiaXNjaGVja2VkXCIpO2lmKFwidHJ1ZVwiPT09dClyZXR1cm4hMDtpZihcImZhbHNlXCI9PT10KXJldHVybiExO2xldCByPWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIpO3JldHVyblwidHJ1ZVwiPT09cnx8XCJmYWxzZVwiIT09ciYmZS5jaGVja2VkfWZ1bmN0aW9uIGVPKGUsdCl7bGV0IHI9VSh0KTtpZighcilyZXR1cm4hMTtsZXQgbj1VKGVEKGUpKSxvPVUoZS52YWx1ZSksaT1VKGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSksYT1bbixvLGldLmZpbHRlcihCb29sZWFuKSxsPUgocik7cmV0dXJuISEoYS5zb21lKGU9PmU9PT1yKXx8bCYmYS5zb21lKGU9PkgoZSk9PT1sKXx8ZWwocikmJihcInllc1wiPT09bnx8XCJ0cnVlXCI9PT1vfHxcInRydWVcIj09PWkpfHxlcyhyKSYmKFwibm9cIj09PW58fFwiZmFsc2VcIj09PW98fFwiZmFsc2VcIj09PWkpKX1hc3luYyBmdW5jdGlvbiBlTShlKXtsZXQgdD1lUChlKTtpZihlLmZvY3VzKCksJCh0KSx0LmNsaWNrKCksYXdhaXQgKDAsZy5kZWxheSkoODApLGVSKGUpKXtPKGUpO3JldHVybn1mb3IobGV0IHQgb2YgZUwoZSkpdC5jaGVja2VkPXQ9PT1lLHQuc2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIsdD09PWU/XCJ0cnVlXCI6XCJmYWxzZVwiKSx0LnNldEF0dHJpYnV0ZShcImlzY2hlY2tlZFwiLHQ9PT1lP1widHJ1ZVwiOlwiZmFsc2VcIik7TShlLFwiaW5wdXRcIiksTShlLFwiY2hhbmdlXCIpLE0oZSxcImNsaWNrXCIpLGVQKGUpLmNsaWNrKCksTyhlKSxhd2FpdCAoMCxnLmRlbGF5KSgxMjApfWFzeW5jIGZ1bmN0aW9uIGVOKGUpe2xldCB0PWF3YWl0ICgwLHAud2FpdEZvckNvbmRpdGlvbikoKCk9PmVSKGVfKGUpKSx7dGltZW91dDo5MDAsaW50ZXJ2YWw6NTAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSk7cmV0dXJuISF0JiYoYXdhaXQgKDAsZy5kZWxheSkoMTUwKSxlUihlXyhlKSkpfWZ1bmN0aW9uIGUkKGUsdD17fSl7aWYoZS5pc0Nvbm5lY3RlZCYmKDAsdi5pc0FjdHVhbGx5VmlzaWJsZSkoZSkpcmV0dXJuIGU7aWYoZS5pZCl7bGV0IHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5pZCk7aWYoKHQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50fHx0IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkmJnQudGFnTmFtZT09PWUudGFnTmFtZSlyZXR1cm4gdH1pZihlLm5hbWUpe2xldCB0PUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYVwiKSkuZmluZCh0PT50Lm5hbWU9PT1lLm5hbWUmJnQudGFnTmFtZT09PWUudGFnTmFtZSk7aWYodClyZXR1cm4gdH1sZXQgcj1VKHQubGFiZWwpO2lmKHIpe2xldCB0PUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYVwiKSkuZmluZCh0PT57aWYoXCJoaWRkZW5cIj09PXQudHlwZXx8XCJyYWRpb1wiPT09dC50eXBlfHxcImNoZWNrYm94XCI9PT10LnR5cGV8fHQuZGlzYWJsZWR8fHQudGFnTmFtZSE9PWUudGFnTmFtZXx8ISgwLHYuaXNBY3R1YWxseVZpc2libGUpKHQpKXJldHVybiExO2xldCBuPXQuY2xvc2VzdChcIi5mb3JtLWdyb3VwLmZpZWxkXCIpLG89bj8ucXVlcnlTZWxlY3RvcihcImxhYmVsLmNvbnRyb2wtbGFiZWwsIGxlZ2VuZCwgbGFiZWxcIik/LnRleHRDb250ZW50Py5yZXBsYWNlKC9cXCovZyxcIiBcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl8fHQuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8dC5nZXRBdHRyaWJ1dGUoXCJsYWJlbFwiKXx8XCJcIjtyZXR1cm4gVShvKT09PXJ9KTtpZih0KXJldHVybiB0fXJldHVybiBudWxsfWFzeW5jIGZ1bmN0aW9uIGVCKGUsdCxyPXt9KXtsZXQgbj1hd2FpdCAoMCxwLndhaXRGb3JDb25kaXRpb24pKCgpPT57bGV0IG49ZSQoZSxyKTtyZXR1cm4geihuPy52YWx1ZSx0KX0se3RpbWVvdXQ6OTAwLGludGVydmFsOjUwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pO3JldHVybiEhbiYmKGF3YWl0ICgwLGcuZGVsYXkpKDEwMCkseihlJChlLHIpPy52YWx1ZSx0KSl9ZnVuY3Rpb24gZXEoZSl7bGV0IHQ9ZS52YWx1ZS50cmltKCk7aWYodClyZXR1cm4gdDtsZXQgcj1lLmNsb3Nlc3QoXCIucmJ0LCAuYXN5bmMtdHlwZWFoZWFkLXYzLCAuZm9ybS1ncm91cC5maWVsZFwiKT8/ZS5wYXJlbnRFbGVtZW50O3JldHVybiByPy5xdWVyeVNlbGVjdG9yKFwiLnJidC10b2tlbiwgLnJidC10b2tlbi1sYWJlbCwgLnJidC1pbnB1dC1tYWluLCBbY2xhc3MqPSd0b2tlbiddLCBbY2xhc3MqPSdzZWxlY3RlZCddXCIpPy50ZXh0Q29udGVudD8ucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl8fFwiXCJ9ZnVuY3Rpb24gZVUoZSl7cmV0dXJuXCJjb21ib2JveFwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpfHxcImxpc3RcIj09PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1hdXRvY29tcGxldGVcIil8fFwiYXN5bmNUeXBlYWhlYWRcIj09PWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hdHRyaWJ1dGVcIil8fCEhZS5jbG9zZXN0KFwiLnJidCwgLmFzeW5jLXR5cGVhaGVhZC12M1wiKX1hc3luYyBmdW5jdGlvbiBlSChlLHQscil7bGV0IG49W3IsdF0uZmlsdGVyKGU9PiEhZSYmZS50cmltKCkubGVuZ3RoPjApLG89KCk9PntsZXQgdD1lJChlKTtpZighdClyZXR1cm4hMTtsZXQgcj1lcSh0KTtyZXR1cm4gbi5zb21lKGU9PnoocixlKSl9LGk9YXdhaXQgKDAscC53YWl0Rm9yQ29uZGl0aW9uKShvLHt0aW1lb3V0OjkwMCxpbnRlcnZhbDo1MCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KTtyZXR1cm4hIWkmJihhd2FpdCAoMCxnLmRlbGF5KSgxMDApLG8oKSl9ZnVuY3Rpb24gZVkoZSl7cmV0dXJuIGUuY2xvc2VzdChcImxhYmVsXCIpfHwoZS5pZD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke2VmKGUuaWQpfVwiXWApOm51bGwpfHxlLmNsb3Nlc3QoXCIuZGF0ZXJhbmdlcGlja2VyLWNoZWNrYm94XCIpfHxlfWZ1bmN0aW9uIGV6KGUpe3JldHVybltlWShlKSxlLmNsb3Nlc3QoXCJsYWJlbFwiKSxlLmlkP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7ZWYoZS5pZCl9XCJdYCk6bnVsbCxlLmNsb3Nlc3QoXCIuY2hlY2tib3gsIC5kYXRlcmFuZ2VwaWNrZXItY2hlY2tib3hcIiksZV0uZmlsdGVyKChlLHQscik9PiEhZSYmci5pbmRleE9mKGUpPT09dCl9ZnVuY3Rpb24gZVYoZSx0PXt9KXtpZihlLmlzQ29ubmVjdGVkKXJldHVybiBlO2lmKGUuaWQpe2xldCB0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUuaWQpO2lmKHQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50JiZcImNoZWNrYm94XCI9PT10LnR5cGUpcmV0dXJuIHR9bGV0IHI9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSk7aWYoZS5uYW1lKXtsZXQgdD1yLmZpbHRlcih0PT50Lm5hbWU9PT1lLm5hbWUpLG49VShlLnZhbHVlKSxvPXQuZmluZChlPT5VKGUudmFsdWUpPT09bik7aWYobylyZXR1cm4gbztpZigxPT09dC5sZW5ndGgpcmV0dXJuIHRbMF19bGV0IG49W2VkKGUpLHQubGFiZWxdLm1hcChlPT5VKGUpKS5maWx0ZXIoQm9vbGVhbik7cmV0dXJuIHIuZmluZChlPT5uLmluY2x1ZGVzKFUoZWQoZSkpKSl8fG51bGx9ZnVuY3Rpb24gZVcoZSl7aWYoIWUpcmV0dXJuITE7bGV0IHQ9W2UuZ2V0QXR0cmlidXRlKFwiaXNjaGVja2VkXCIpLGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIpLGUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIildLm1hcChlPT5VKGUpKSxyPXQuaW5jbHVkZXMoXCJ0cnVlXCIpLG49dC5pbmNsdWRlcyhcImZhbHNlXCIpO2lmKGUuY2hlY2tlZCYmcilyZXR1cm4hMDtpZighZS5jaGVja2VkJiZuKXJldHVybiExO2xldCBvPVUoZS5nZXRBdHRyaWJ1dGUoXCJpc2NoZWNrZWRcIikpLGk9VShlLmdldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiKSk7cmV0dXJuIG8mJm89PT1pP1widHJ1ZVwiPT09bzpcInRydWVcIj09PW98fFwiZmFsc2VcIiE9PW8mJihcInRydWVcIj09PWl8fFwiZmFsc2VcIiE9PWkmJmUuY2hlY2tlZCl9ZnVuY3Rpb24gZUcoZSx0KXtyZXR1cm4gZVcoZSk9PT10fWZ1bmN0aW9uIGVLKGUpe3JldHVybiEwPT09ZS5yZXF1aXJlZHx8bnVsbCE9ZS5nZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiKXx8XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIil9ZnVuY3Rpb24gZVgoZSl7bGV0IHQ9W2UsZS5jbG9zZXN0KFwibGFiZWxcIiksZS5jbG9zZXN0KFwiLmNoZWNrYm94XCIpLGUuY2xvc2VzdChcIi5mb3JtLWdyb3VwLmZpZWxkXCIpLGUuY2xvc2VzdChcImZpZWxkc2V0XCIpXS5maWx0ZXIoZT0+ISFlKTtyZXR1cm4gdC5maW5kKGU9PigwLHYuaXNBY3R1YWxseVZpc2libGUpKGUpKT8/bnVsbH1mdW5jdGlvbiBlSihlKXtsZXQgdD1VKFtlLmlkLGUubmFtZSxlLmdldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIiksZS5jbG9zZXN0KFwiLmZvcm0tZ3JvdXAuZmllbGRcIik/LnRleHRDb250ZW50LGUuY2xvc2VzdChcImZpZWxkc2V0XCIpPy5pZF0uam9pbihcIiBcIikpO3JldHVybiB0LmluY2x1ZGVzKFwiY29uc2VudFwiKXx8dC5pbmNsdWRlcyhcImFncmVlbWVudFwiKXx8dC5pbmNsdWRlcyhcIm9wdGluXCIpfHx0LmluY2x1ZGVzKFwib3B0LWluXCIpfHx0LmluY2x1ZGVzKFwib3B0IGluXCIpfHx0LmluY2x1ZGVzKFwicHJpdmFjeVwiKXx8dC5pbmNsdWRlcyhcImFwcGxpY2FudGNlcnRpZmljYXRpb25cIil8fHQuaW5jbHVkZXMoXCJ1c2NvbnNlbnRvYmplY3RcIil9ZnVuY3Rpb24gZVEoZSl7cmV0dXJuIGVkKGUpfHxlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fGUuaWR8fGUubmFtZXx8XCJSZXF1aXJlZCBDb25zZW50XCJ9YXN5bmMgZnVuY3Rpb24gZVooZSx0LHI9e30pe2xldCBuPWVWKGUscik7aWYoIW4pcmV0dXJuITE7bGV0IG89ZXoobikubGVuZ3RoO2ZvcihsZXQgZT0wO2U8bztlKz0xKXtsZXQgbz1lVihuLHIpO2lmKCFvKXJldHVybiExO2xldCBpPWV6KG8pW2VdO2lmKCFpKWNvbnRpbnVlO2kuc2Nyb2xsSW50b1ZpZXc/Lih7YmxvY2s6XCJjZW50ZXJcIixpbmxpbmU6XCJuZWFyZXN0XCJ9KSxvLmZvY3VzKCksTihpLFwibW91c2Vkb3duXCIpLE4oaSxcIm1vdXNldXBcIiksaS5jbGljaygpO2xldCBhPWF3YWl0ICgwLHAud2FpdEZvckNvbmRpdGlvbikoKCk9PntsZXQgZT1lVihvLHIpO3JldHVybiEhZSYmZUcoZSx0KX0se3RpbWVvdXQ6NDUwLGludGVydmFsOjUwLG9ic2VydmVUYXJnZXQ6by5jbG9zZXN0KFwiLmZvcm0tZ3JvdXAuZmllbGRcIil8fGRvY3VtZW50LmJvZHl9KTtpZihhKXJldHVybiBPKGVWKG8scikpLCEwfXJldHVybiBPKGVWKG4scikpLCExfWFzeW5jIGZ1bmN0aW9uIGUwKCl7bGV0IGU9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSkuZmlsdGVyKGU9PiFlLmRpc2FibGVkJiZlSyhlKSYmZUooZSkmJiEhZVgoZSkmJiFlVyhlKSksdD1bXTtmb3IobGV0IHIgb2YgZSl7bGV0IGU9ZVEociksbj1hd2FpdCBlWihyLCEwLHtsYWJlbDplfSk7bj90LnB1c2goZSk6Y29uc29sZS53YXJuKFwiW3BoZW5vbV0gcmVxdWlyZWQgY29uc2VudCBjaGVja2JveCBkaWQgbm90IGNvbW1pdFwiLHtpZDpyLmlkLGxhYmVsOmV9KX1yZXR1cm4gdH1mdW5jdGlvbiBlMigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdW1lLXVwbG9hZC13cmFwcGVyXCIpLHQ9ZT8ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKT8/bnVsbDtpZih0Py5pc0Nvbm5lY3RlZCYmIXQuZGlzYWJsZWQpcmV0dXJuIHQ7bGV0IHI9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpKS5maWx0ZXIoZT0+ZS5pc0Nvbm5lY3RlZCYmIWUuZGlzYWJsZWQpO3JldHVybiByLmZpbmQoZT0+ISFlLmNsb3Nlc3QoXCIucmVzdW1lLXVwbG9hZC13cmFwcGVyXCIpJiYoMCx2LmlzQWN0dWFsbHlWaXNpYmxlKShlLmNsb3Nlc3QoXCIucmVzdW1lLXVwbG9hZC13cmFwcGVyXCIpKSl8fHIuZmluZChlPT4oMCx2LmlzQWN0dWFsbHlWaXNpYmxlKShlKSl8fHJbMF18fG51bGx9YXN5bmMgZnVuY3Rpb24gZTEoKXtyZXR1cm4gYXdhaXQgKDAseS5kZWZhdWx0KSgoKT0+ZTIoKSwoKT0+ITEsMjUpfWZ1bmN0aW9uIGUzKCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdW1lLXVwbG9hZC13cmFwcGVyXCIpfWZ1bmN0aW9uIGU0KCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3Zlci1sZXR0ZXItZmlsZXMtZGl2XCIpO2lmKGUpcmV0dXJuIGU7bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3ZlckxldHRlciAuYXR0YWNobWVudC1maWxlc1wiKTtyZXR1cm4gdHx8KGU2KCk/LnF1ZXJ5U2VsZWN0b3IoXCIuYXR0YWNobWVudC1maWxlc1wiKT8/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3cuZm9ybS1ncm91cC5hZGRpdGlvbmFsLWF0dGFjaG1lbnQtdjIgLmF0dGFjaG1lbnQtZmlsZXNcIikpfWZ1bmN0aW9uIGU1KGUpe3JldHVybiEhZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpfWZ1bmN0aW9uIGU2KCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRpdGlvbmFsQXR0YWNobWVudFwiKTtyZXR1cm4gZSYmZTUoZSk/ZTpBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucm93LmZvcm0tZ3JvdXAuYWRkaXRpb25hbC1hdHRhY2htZW50LXYyXCIpKS5maW5kKGU1KT8/bnVsbH1mdW5jdGlvbiBlOCgpe2xldCBlPWU2KCk7aWYoZSlyZXR1cm4gZTtsZXQgdD1lNCgpO2lmKHQpe2xldCBlPXQucGFyZW50RWxlbWVudDtmb3IoO2UmJmUhPT1kb2N1bWVudC5ib2R5Oyl7aWYoZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpKXJldHVybiBlO2U9ZS5wYXJlbnRFbGVtZW50fX1sZXQgcj1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsYWJlbCwgbGVnZW5kLCBoMSwgaDIsIGgzLCBoNCwgaDUsIHNwYW4sIGRpdlwiKSkuZmluZChlPT5VKGUudGV4dENvbnRlbnQpLmluY2x1ZGVzKFwiY292ZXIgbGV0dGVyXCIpKTtyZXR1cm4gcj8uY2xvc2VzdChcIi5mb3JtLWdyb3VwLCAuZm9ybS1maWVsZCwgLmZpZWxkLCAucXVlc3Rpb24taXRlbSwgbGksIHNlY3Rpb24sIC5yb3dcIik/P251bGx9ZnVuY3Rpb24gZTkoKXtsZXQgZT1lOCgpO2lmKGUpe2xldCB0PWUucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKT8/bnVsbDtpZih0Py5pc0Nvbm5lY3RlZCYmIXQuZGlzYWJsZWQpcmV0dXJuIHR9bGV0IHQ9ZTQoKTtpZih0KXtsZXQgZT10LnBhcmVudEVsZW1lbnQ7Zm9yKDtlJiZlIT09ZG9jdW1lbnQuYm9keTspe2xldCB0PWUucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKTtpZih0Py5pc0Nvbm5lY3RlZCYmIXQuZGlzYWJsZWQpcmV0dXJuIHQ7ZT1lLnBhcmVudEVsZW1lbnR9fXJldHVybiBudWxsfWZ1bmN0aW9uIGU3KCl7cmV0dXJuIGU0KCk/LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLXRleHQsIC5pY29uLWRlbGV0ZSwgLmdseXBoaWNvbi10cmFzaFwiKT8/bnVsbH1mdW5jdGlvbiB0ZSgpe3JldHVybiBlNCgpPy5xdWVyeVNlbGVjdG9yKFwiYS5kb3dubG9hZC1saW5rXCIpPz9udWxsfWZ1bmN0aW9uIHR0KGUpe3JldHVybiBTdHJpbmcoZT8/XCJcIikucmVwbGFjZSgvXFwuKHBkZnxkb2N4P3xydGZ8dHh0KVxcYi9naSxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16MC05XS9nLFwiXCIpfWZ1bmN0aW9uIHRyKCl7bGV0IGU9dGUoKSx0PWU0KCk7cmV0dXJuW2U/LnRleHRDb250ZW50LGU/LmdldEF0dHJpYnV0ZShcInRpdGxlXCIpLGU/LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiksdD8udGV4dENvbnRlbnRdLmZpbHRlcihlPT4hIWUmJmUudHJpbSgpLmxlbmd0aD4wKS5qb2luKFwiIFwiKX1mdW5jdGlvbiB0bigpe2xldCBlPSEhKGU0KCkmJih0ZSgpfHxlNygpKSk7cmV0dXJue2hhc0NvbnRyb2xzOmUsc2lnbmF0dXJlOnR0KHRyKCkpfX1mdW5jdGlvbiB0byhlLHQpe2xldCByPXRuKCk7aWYoIXIuaGFzQ29udHJvbHMpcmV0dXJuITE7aWYoIXQuaGFzQ29udHJvbHMpcmV0dXJuITA7bGV0IG49dHQoZSk7cmV0dXJuISEobiYmci5zaWduYXR1cmUuaW5jbHVkZXMobikpfHxyLnNpZ25hdHVyZSE9PXQuc2lnbmF0dXJlfWZ1bmN0aW9uIHRpKGUpe2xldCB0PWUuZmlsZXM/LlswXTtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD8ubmFtZT90Lm5hbWU6XCJcIn1mdW5jdGlvbiB0YSgpe3JldHVybiEhZTkoKX1mdW5jdGlvbiB0bCgpe3JldHVybiBlOCgpJiZlOSgpP1wicmVxdWlyZWRcIjpcIlwifWFzeW5jIGZ1bmN0aW9uIHRzKCl7cmV0dXJuIGF3YWl0ICgwLHAud2FpdEZvckNvbmRpdGlvbikoKCk9PiEhZTkoKSx7dGltZW91dDo0ZTMsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pfWZ1bmN0aW9uIHR1KCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bWUtdXBsb2FkLXdyYXBwZXIgYnV0dG9uLnVwbG9hZC1yZXN1bWUtYnRuW2F0bS1pZD1cInJlc3VtZS1idXR0b25cIl0nKX1mdW5jdGlvbiB0Yygpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhcy1yZXN1bWUucmVzdW1lLWluZm8gLmRlbGV0ZUZpbGUsIC5oYXMtcmVzdW1lLnJlc3VtZS1pbmZvIGFbYXJpYS1sYWJlbD0nRGVsZXRlJ11cIil9ZnVuY3Rpb24gdGQoKXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYXMtcmVzdW1lLnJlc3VtZS1pbmZvIC5kb3dubG9hZEZpbGUsIC5oYXMtcmVzdW1lLnJlc3VtZS1pbmZvIGFbYXRtLWlkPSd1cGxvYWRlZHJlc3VtZS1saW5rJ11cIil9ZnVuY3Rpb24gdGYoKXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYXMtcmVzdW1lLnJlc3VtZS1pbmZvXCIpfWZ1bmN0aW9uIHRwKCl7cmV0dXJuISEodGYoKSYmKHRkKCl8fHRjKCkpKX1mdW5jdGlvbiB0bSgpe3JldHVybiEhKGUzKCkmJigwLHYuaXNBY3R1YWxseVZpc2libGUpKGUzKCkpfHx0dSgpJiYoMCx2LmlzQWN0dWFsbHlWaXNpYmxlKSh0dSgpKSl9YXN5bmMgZnVuY3Rpb24gdGgoKXtyZXR1cm4gYXdhaXQgKDAscC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+ISFlMygpJiYhIWUyKCkmJiEhdHUoKSx7dGltZW91dDo0ZTMsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pfWFzeW5jIGZ1bmN0aW9uIHRnKCl7bGV0IGU9dGMoKSx0PTA7Zm9yKDtlJiZ0PDU7KXtlLmNsaWNrKCk7bGV0IHI9YXdhaXQgKDAscC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+IXRjKCkse3RpbWVvdXQ6MmUzLGludGVydmFsOjEwMCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KTtpZighcilicmVhazthd2FpdCAoMCxwLndhaXRGb3JDb25kaXRpb24pKCgpPT4hIWUyKCkse3RpbWVvdXQ6MmUzLGludGVydmFsOjEwMCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KSxhd2FpdCAoMCxnLmRlbGF5KSgxNTApLGU9dGMoKSx0Kz0xfX1mdW5jdGlvbiB0YihlKXtyZXR1cm4gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbltpZCo9XCJhcnJheS1idXR0b24tcmVtb3ZlLVwiXSwgaW5wdXRbaWQqPVwiYXJyYXktYnV0dG9uLXJlbW92ZS1cIl0sIFtyb2xlPVwiYnV0dG9uXCJdW2lkKj1cImFycmF5LWJ1dHRvbi1yZW1vdmUtXCJdJykpLmZpbHRlcihlPT4oMCx2LmlzQWN0dWFsbHlWaXNpYmxlKShlKSkuc29ydCgoZSx0KT0+e2xldCByPU51bWJlcihlLmlkLm1hdGNoKC8oXFxkKykkLyk/LlsxXXx8XCItMVwiKSxuPU51bWJlcih0LmlkLm1hdGNoKC8oXFxkKykkLyk/LlsxXXx8XCItMVwiKTtyZXR1cm4gbi1yfSl9YXN5bmMgZnVuY3Rpb24gdHkoZSl7bGV0IHQ9KDAsdi5nZXRBcnJheUNvbnRhaW5lcikoZSk7aWYoIXQpcmV0dXJuO2xldCByPSgwLHYuZ2V0Q29tcG9zaXRlSXRlbUZpZWxkc2V0cykodCkubGVuZ3RoO2Zvcig7cj4xOyl7bGV0IGU9dGIodClbMF07aWYoIWUpYnJlYWs7ZS5jbGljaygpO2xldCBuPWF3YWl0ICgwLHAud2FpdEZvckNvbmRpdGlvbikoKCk9PigwLHYuZ2V0Q29tcG9zaXRlSXRlbUZpZWxkc2V0cykodCkubGVuZ3RoPHIse3RpbWVvdXQ6MTUwMCxpbnRlcnZhbDoxMDAsb2JzZXJ2ZVRhcmdldDp0fSk7aWYoIW4pYnJlYWs7cj0oMCx2LmdldENvbXBvc2l0ZUl0ZW1GaWVsZHNldHMpKHQpLmxlbmd0aCxhd2FpdCAoMCxnLmRlbGF5KSgxNTApfX1mdW5jdGlvbiB0dihlKXtyZXR1cm4gZT9BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtLWdyb3VwLmZpZWxkXCIpKS5maW5kKGU9PntsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC5jb250cm9sLWxhYmVsLCBsZWdlbmRcIik/LnRleHRDb250ZW50Py5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpfHxcIlwiO3JldHVybiB0LmluY2x1ZGVzKFwiZW5kIGRhdGVcIikmJigwLHYuaXNBY3R1YWxseVZpc2libGUpKGUpfSk/P251bGw6bnVsbH1hc3luYyBmdW5jdGlvbiB0dygpe2xldCBlPSgwLHYuZ2V0QXJyYXlDb250YWluZXIpKG0uRklFTERfVFlQRS5FTVBMT1lNRU5UKSx0PWU/KDAsdi5nZXRDb21wb3NpdGVJdGVtRmllbGRzZXRzKShlKVswXT8/bnVsbDpudWxsO2lmKCF0KXJldHVybjtsZXQgcj10LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXVtpZCo9XCJjdXJyZW50bHlXb3JrSGVyZVwiXSwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW25hbWUqPVwiY3VycmVudGx5V29ya0hlcmVcIl0sIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXVthcmlhLWRlc2NyaWJlZGJ5Kj1cImN1cnJlbnRseVdvcmtIZXJlXCJdJyk7ciYmKGVXKHIpJiYoYXdhaXQgZVoociwhMSksYXdhaXQgKDAscC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+IWVXKHIpLHt0aW1lb3V0OjFlMyxpbnRlcnZhbDo1MCxvYnNlcnZlVGFyZ2V0OnR9KSksTyhyKSxhd2FpdCAoMCxwLndhaXRGb3JDb25kaXRpb24pKCgpPT4hIXR2KHQpLHt0aW1lb3V0OjE1MDAsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6dH0pKX1hc3luYyBmdW5jdGlvbiB0Uygpe2xldCBlPSgwLHYuZ2V0U3RlcEluZm8pKCk7Y29uc29sZS5sb2coXCJbcGhlbm9tXSBwcmVGaWxsRm9ybSBlbnRyeVwiLHtzdGVwOmUuc3RlcCxzdGVwTmFtZTplLnN0ZXBOYW1lfSk7bGV0IHQ9YXdhaXQgKDAscC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+ISEoMCx2LmdldEZvcm1Sb290KSgpLHt0aW1lb3V0OjNlMyxpbnRlcnZhbDoxMDAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSk7dCYmKCgwLHYuaXNJbml0aWFsQXBwbGljYXRpb25TdGVwKShlKSYmKGNvbnNvbGUubG9nKFwiW3BoZW5vbV0gcHJlRmlsbEZvcm0gaW5pdGlhbC1zdGVwIGNsZWFudXAgc3RhcnRcIiksYXdhaXQgdGgoKSxhd2FpdCB0ZygpKSxhd2FpdCByeShtLkZJRUxEX1RZUEUuRURVQ0FUSU9OKSxhd2FpdCByeShtLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCksYXdhaXQgdHkobS5GSUVMRF9UWVBFLkVEVUNBVElPTiksYXdhaXQgdHkobS5GSUVMRF9UWVBFLkVNUExPWU1FTlQpLGF3YWl0IHR3KCkpfWFzeW5jIGZ1bmN0aW9uIHRFKGUsdCxyKXtsZXQgbj1TdHJpbmcodD8/XCJcIikudHJpbSgpO2lmKCFuKXJldHVybiExO2xldCBvPXtsYWJlbDpyfSxpPWUkKGUsbyl8fGU7Zm9yKGxldCBlPTA7ZTwyO2UrPTEpe2U+MCYmKGF3YWl0ICgwLGcuZGVsYXkpKDI1MCksaT1lJChpLG8pfHxpKSxpLmZvY3VzKCksQihpLG4pLFIoaSksTyhpKTtsZXQgdD1hd2FpdCBlQihpLG4sbyk7aWYodClyZXR1cm4hMH1sZXQgYT1lJChpLG8pO3JldHVybiBjb25zb2xlLndhcm4oXCJbcGhlbm9tXSB0ZXh0IGlucHV0IGRpZCBub3QgY29tbWl0XCIse2xhYmVsOnIsdmFsdWU6bixpbnB1dElkOmUuaWQsY3VycmVudElucHV0SWQ6YT8uaWR8fFwiXCIsY3VycmVudFZhbHVlOmE/LnZhbHVlfHxcIlwifSksITF9ZnVuY3Rpb24gdHgoZSl7cmV0dXJuIGU/LmFib3J0ZWQ9PT0hMH1mdW5jdGlvbiB0QyhlKXtyZXR1cm4gZSQoZSl9ZnVuY3Rpb24gdEEoZSl7aWYoXCJmYWxzZVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpKXJldHVybiBudWxsO2xldCB0PWU9PntpZighKGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpcmV0dXJuITE7bGV0IHQ9XCJsaXN0Ym94XCI9PT1lLmdldEF0dHJpYnV0ZShcInJvbGVcIil8fGUuY2xhc3NMaXN0Py5jb250YWlucyhcInJidC1tZW51XCIpO3JldHVybiB0JiZlLmlzQ29ubmVjdGVkJiYhZS5oaWRkZW4mJlwidHJ1ZVwiIT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSYmKDAsdi5pc0FjdHVhbGx5VmlzaWJsZSkoZSl9LHI9W2UuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKSxlLmdldEF0dHJpYnV0ZShcImFyaWEtb3duc1wiKV0uZmxhdE1hcChlPT5TdHJpbmcoZT8/XCJcIikuc3BsaXQoL1xccysvKSkuZmlsdGVyKChlLHQscik9PmUmJnIuaW5kZXhPZihlKT09PXQpO2lmKHIubGVuZ3RoPjApe2xldCBlPUFycmF5LmZyb20obmV3IFNldChyLm1hcChlPT5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKSkuZmlsdGVyKHQpKSk7cmV0dXJuIDE9PT1lLmxlbmd0aD9lWzBdOm51bGx9bGV0IG49J1tyb2xlPVwibGlzdGJveFwiXSwgLnJidC1tZW51JyxvPWUuY2xvc2VzdChcIi5yYnQsIC5hc3luYy10eXBlYWhlYWQtdjNcIiksaT1BcnJheS5mcm9tKG5ldyBTZXQoQXJyYXkuZnJvbShvPy5xdWVyeVNlbGVjdG9yQWxsKG4pfHxbXSkuZmlsdGVyKHQpKSk7aWYoMT09PWkubGVuZ3RoKXJldHVybiBpWzBdO2lmKGkubGVuZ3RoPjEpcmV0dXJuIG51bGw7bGV0IGE9QXJyYXkuZnJvbShuZXcgU2V0KEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChuKSkuZmlsdGVyKHQpKSk7cmV0dXJuIDE9PT1hLmxlbmd0aD9hWzBdOm51bGx9bGV0IHRrPS9eKD86c2VhcmNoaW5nfGxvYWRpbmd8ZmV0Y2hpbmd8cGxlYXNlXFxzK3dhaXQpKD86XFxzKig/OlxcLnszfXxcXHUyMDI2KSk/JC9pdSx0VD0vXig/Om5vXFxzKyg/OnJlc3VsdHM/fG1hdGNoZXM/fG9wdGlvbnM/KSg/Olxccytmb3VuZCk/fG5vdGhpbmdcXHMrZm91bmQpJC9pdSx0Rj0vXnR5cGUoPzpcXHMrXFxkKyk/KD86XFxzK2NoYXJhY3RlcnM/KT9cXHMrdG9cXHMrKD86c2VhcmNofHNlZVxccysoPzp0aGVcXHMrKT9saXN0KSg/OlxccyooPzpcXC57M318XFx1MjAyNikpPyQvaXU7ZnVuY3Rpb24gdEkoZSl7cmV0dXJuIFN0cmluZyhlLnRleHRDb250ZW50Pz9cIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKX1mdW5jdGlvbiB0aihlKXtyZXR1cm4gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwib3B0aW9uXCJdLCAuZHJvcGRvd24taXRlbScpKS5maWx0ZXIoZT0+ZS5pc0Nvbm5lY3RlZCYmIWUuaGlkZGVuJiZcInRydWVcIiE9PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIikmJigwLHYuaXNBY3R1YWxseVZpc2libGUpKGUpJiZ0SShlKS5sZW5ndGg+MCl9ZnVuY3Rpb24gdEQoZSx0KXtpZihcInRydWVcIj09PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1idXN5XCIpKXJldHVybiEwO2xldCByPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUucXVlcnlTZWxlY3Rvcj9lLnF1ZXJ5U2VsZWN0b3IoJ1thcmlhLWJ1c3k9XCJ0cnVlXCJdLCBbYXJpYS1sYWJlbCo9XCJsb2FkaW5nXCIgaV0sIC5sb2FkaW5nLCAubG9hZGVyLCAuc3Bpbm5lcicpOm51bGw7cmV0dXJuISEociYmKDAsdi5pc0FjdHVhbGx5VmlzaWJsZSkocikpfHx0LnNvbWUoZT0+e2xldCB0PXRJKGUpLHI9U3RyaW5nKGUuY2xhc3NOYW1lPz9cIlwiKTtyZXR1cm4gdGsudGVzdCh0KXx8L1xcYig/OmxvYWRpbmd8bG9hZGVyfHNwaW5uZXIpXFxiL2l1LnRlc3Qocil9KX1mdW5jdGlvbiB0UChlKXtyZXR1cm4gdFQudGVzdCh0SShlKSl9ZnVuY3Rpb24gdF8oZSl7bGV0IHQ9dEkoZSk7cmV0dXJuL1xcYnJidC1tZW51LWN1c3RvbS1vcHRpb25cXGIvaXUudGVzdChTdHJpbmcoZS5jbGFzc05hbWU/P1wiXCIpKXx8L15hZGRcXHMrbmV3XFxzKjovaXUudGVzdCh0KXx8L15vdGhlciQvaXUudGVzdCh0KX1mdW5jdGlvbiB0TChlKXtsZXQgdD10aihlKTtyZXR1cm4gdC5maWx0ZXIoZT0+e2xldCB0PXRJKGUpLHI9U3RyaW5nKGUuY2xhc3NOYW1lPz9cIlwiKTtyZXR1cm4hdGsudGVzdCh0KSYmIXRULnRlc3QodCkmJiF0Ri50ZXN0KHQpJiYhdF8oZSkmJiEvXFxiKD86bG9hZGluZ3xsb2FkZXJ8c3Bpbm5lcilcXGIvaXUudGVzdChyKX0pfWZ1bmN0aW9uIHRSKGUsdCl7bGV0IHI9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpfHxlLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfHxlLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIil8fHQ7cmV0dXJuIHIudHJpbSgpfWxldCB0Tz00LHRNPTYsdE49NTAsdCQ9MjAsdEI9MjA7ZnVuY3Rpb24gdHEoZSl7bGV0IHQ9dGooZSk7aWYodEQoZSx0KSlyZXR1cm57c3RhdHVzOlwibG9hZGluZ1wiLGNhbmRpZGF0ZXM6W119O2xldCByPVtdLG49bmV3IFNldDtmb3IobGV0IHQgb2YgdEwoZSkpe2xldCBlPXRJKHQpLG89dFIodCxlKSxpPWAke1UoZSl9XFx1MDAwMCR7VShvKX1gO2lmKCEoIWV8fCFvfHxuLmhhcyhpKSkmJihuLmFkZChpKSxyLnB1c2goe2NhbmRpZGF0ZV9rZXk6YHBoZW5vbS1zY2hvb2wtJHtyLmxlbmd0aCsxfWAsdmFsdWU6byx0ZXh0OmV9KSwyNT09PXIubGVuZ3RoKSlicmVha31yZXR1cm4gci5sZW5ndGg+MD97c3RhdHVzOlwicmVhZHlcIixjYW5kaWRhdGVzOnJ9OntzdGF0dXM6dC5zb21lKHRQKT9cIm5vLXJlc3VsdHNcIjpcImVtcHR5XCIsY2FuZGlkYXRlczpbXX19ZnVuY3Rpb24gdFUoZSl7cmV0dXJuIEpTT04uc3RyaW5naWZ5KFtlLnN0YXR1cyxlLmNhbmRpZGF0ZXMubWFwKGU9PltlLnZhbHVlLGUudGV4dF0pXSl9YXN5bmMgZnVuY3Rpb24gdEgoZSl7dHJ5e2xldCB0PWF3YWl0ICgwLHUuc2VuZFRvQmFja2dyb3VuZCkoe25hbWU6XCJwcmVwYXJlUGhlbm9tU2Nob29sQ2FwdHVyZVwiLGJvZHk6e2NhcHR1cmVSZXNwb25zZTohMCxleHBlY3RlZFZhbHVlOmV9fSk7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/LmNhcHR1cmVJZD90LmNhcHR1cmVJZDpcIlwifWNhdGNoe3JldHVybiBjb25zb2xlLndhcm4oXCJbUGhlbm9tXVtTY2hvb2xTZWFyY2hdIHJlc3BvbnNlIGNhcHR1cmUgdW5hdmFpbGFibGVcIix7c3RhZ2U6XCJwcmVwYXJlXCJ9KSxcIlwifX1hc3luYyBmdW5jdGlvbiB0WShlLHQ9dCQpe2lmKCFlKXJldHVybntjYXB0dXJlU3RhdHVzOlwidW5hdmFpbGFibGVcIixyZXNwb25zZUV2aWRlbmNlOm51bGx9O2xldCByPVwicGVuZGluZ1wiO2ZvcihsZXQgbj0wO248dDtuKz0xKXtsZXQgdD1udWxsO3RyeXt0PWF3YWl0ICgwLHUuc2VuZFRvQmFja2dyb3VuZCkoe25hbWU6XCJ3YWl0Rm9yUGhlbm9tU2Nob29sQ2FwdHVyZVwiLGJvZHk6e2NhcHR1cmVJZDplLHJlc3BvbnNlTW9kZTpcInBlZWtcIn19KX1jYXRjaHtyZXR1cm4gY29uc29sZS53YXJuKFwiW1BoZW5vbV1bU2Nob29sU2VhcmNoXSByZXNwb25zZSBjYXB0dXJlIHVuYXZhaWxhYmxlXCIse3N0YWdlOlwiaW5zcGVjdFwifSkse2NhcHR1cmVTdGF0dXM6XCJpbnNwZWN0LXVuYXZhaWxhYmxlXCIscmVzcG9uc2VFdmlkZW5jZTpudWxsfX1sZXQgbj10Py5jYXB0dXJlU3RhdHVzPz9cImZhaWxlZFwiO2lmKHI9bix0Py5yZXNwb25zZUV2aWRlbmNlKXJldHVybntjYXB0dXJlU3RhdHVzOm4scmVzcG9uc2VFdmlkZW5jZTp0LnJlc3BvbnNlRXZpZGVuY2V9O2lmKFwiaWRsZVwiIT09biYmXCJwZW5kaW5nXCIhPT1uKXJldHVybntjYXB0dXJlU3RhdHVzOm4scmVzcG9uc2VFdmlkZW5jZTpudWxsfTthd2FpdCAoMCxnLmRlbGF5KSgxMDApfXJldHVybntjYXB0dXJlU3RhdHVzOnIscmVzcG9uc2VFdmlkZW5jZTpudWxsfX1hc3luYyBmdW5jdGlvbiB0eihlLHQpe2lmKFwiZmFpbGVkXCI9PT10LnN0YXR1cylyZXR1cm57c3RhdHVzOlwiZmFpbGVkXCIsY2FuZGlkYXRlczpbXX07aWYoXCJuby1yZXN1bHRzXCI9PT10LnN0YXR1cylyZXR1cm57c3RhdHVzOlwibm8tcmVzdWx0c1wiLGNhbmRpZGF0ZXM6W119O2xldCByPW5ldyBTZXQodC5jYW5kaWRhdGVUZXh0cy5tYXAoZT0+VShlKSkpLG49YXdhaXQgKDAseS5kZWZhdWx0KSgoKT0+e2xldCB0PXRDKGUpLG49dD90QSh0KTpudWxsO2lmKCFuKXJldHVybiBudWxsO2xldCBvPXRxKG4pO2lmKFwicmVhZHlcIiE9PW8uc3RhdHVzfHwwPT09by5jYW5kaWRhdGVzLmxlbmd0aClyZXR1cm4gbnVsbDtsZXQgaT1vLmNhbmRpZGF0ZXMuZmlsdGVyKGU9PnIuaGFzKFUoZS50ZXh0KSkpO3JldHVybiAwPT09aS5sZW5ndGg/bnVsbDp7c3RhdHVzOlwicmVhZHlcIixjYW5kaWRhdGVzOml9fSwoKT0+ITEsdEIpO3JldHVybiBuPz97c3RhdHVzOlwiZmFpbGVkXCIsY2FuZGlkYXRlczpbXX19ZnVuY3Rpb24gdFYoZSx0LHI9XCJcIil7cmV0dXJuIHRMKGUpLmZpbHRlcihlPT5VKGUudGV4dENvbnRlbnQpPT09dCYmKCFyfHxVKHRSKGUsdEkoZSkpKT09PVUocikpKX1hc3luYyBmdW5jdGlvbiB0VyhlLHQpe2xldCByPWF3YWl0IHRIKHQpLG49dEEoZSksbz1uP3RxKG4pOm51bGwsaT1vPy5zdGF0dXM9PT1cInJlYWR5XCJ8fG8/LnN0YXR1cz09PVwibm8tcmVzdWx0c1wiP3RVKG8pOlwiXCIsYT1vPy5zdGF0dXM/P1wibGlzdGJveC1ub3QtZm91bmRcIixsPWF3YWl0IHRLKGUsdCk7aWYoIWwpcmV0dXJuIGNvbnNvbGUud2FybihcIltQaGVub21dW1NjaG9vbFNlYXJjaF0gcHJvYmUgZGlkIG5vdCBjb21taXRcIix7cmVhc29uOlwiaW5wdXQtbm90LWNvbmZpcm1lZFwifSkse3N0YXR1czpcImZhaWxlZFwiLGNhbmRpZGF0ZXM6W119O2xldCBzPWF3YWl0IHRZKHIsdE0pO2lmKFwiaWRsZVwiPT09cy5jYXB0dXJlU3RhdHVzJiYhcy5yZXNwb25zZUV2aWRlbmNlKXtjb25zb2xlLndhcm4oXCJbUGhlbm9tXVtTY2hvb2xTZWFyY2hdIHJlcXVlc3QgZGlkIG5vdCBzdGFydDsgcmV0cnlpbmcgcHJvYmUgXCIrSlNPTi5zdHJpbmdpZnkoe2lucHV0SWQ6dEMoZSk/LmlkfHxlLmlkfHxcIlwiLHJlc3BvbnNlQ2FwdHVyZVN0YXR1czpzLmNhcHR1cmVTdGF0dXN9KSk7bGV0IHI9YXdhaXQgdEsoZSx0KTtpZighcilyZXR1cm57c3RhdHVzOlwiZmFpbGVkXCIsY2FuZGlkYXRlczpbXX19bGV0IHU9IWkmJm8/LnN0YXR1cyE9PVwibG9hZGluZ1wiLGM9ITEsZD1uPy5pZD8/XCJcIixmPWEscD1cIlwiLG09MCxoPWF3YWl0ICgwLHkuZGVmYXVsdCkoKCk9PntsZXQgdD10QyhlKSxyPXQ/dEEodCk6bnVsbDtpZighcilyZXR1cm4gZD1cIlwiLGY9XCJsaXN0Ym94LW5vdC1mb3VuZFwiLHA9XCJcIixtPTAsbnVsbDtsZXQgbj10cShyKTtpZihkPXIuaWR8fFwiXCIsZj1uLnN0YXR1cyxcImxvYWRpbmdcIj09PW4uc3RhdHVzKXJldHVybiBjPSEwLHA9XCJcIixtPTAsbnVsbDtjJiYodT0hMCk7bGV0IG89dFUobik7cmV0dXJuKFwiZW1wdHlcIiE9PW4uc3RhdHVzJiZpJiZvIT09aSYmKHU9ITApLFwiZW1wdHlcIiE9PW4uc3RhdHVzJiZ1KT8obz09PXA/bSs9MToocD1vLG09MSksbTx0Tyk/bnVsbDp7c3RhdHVzOm4uc3RhdHVzLGNhbmRpZGF0ZXM6bi5jYW5kaWRhdGVzfToocD1cIlwiLG09MCxudWxsKX0sKCk9PiExLHROKSxnPXMucmVzcG9uc2VFdmlkZW5jZT9zOmF3YWl0IHRZKHIpLGI9Zy5yZXNwb25zZUV2aWRlbmNlLHY9Yj9hd2FpdCB0eihlLGIpOm51bGw7aWYodiYmKGh8fFwiZmFpbGVkXCIhPT12LnN0YXR1cykpcmV0dXJuIGNvbnNvbGUuaW5mbyhcIltQaGVub21dW1NjaG9vbFNlYXJjaF0gcmVzcG9uc2UgZXZpZGVuY2UgXCIrSlNPTi5zdHJpbmdpZnkoe2NhcHR1cmVTdGF0dXM6Yj8uc3RhdHVzLHJlc3BvbnNlQ2FuZGlkYXRlQ291bnQ6Yj8uY2FuZGlkYXRlVGV4dHMubGVuZ3RoLHJlc3VsdFN0YXR1czp2LnN0YXR1cyxyZXN1bHRDYW5kaWRhdGVDb3VudDp2LmNhbmRpZGF0ZXMubGVuZ3RofSkpLHY7aWYoIWgpe2xldCB0PXRDKGUpO3JldHVybiBjb25zb2xlLndhcm4oXCJbUGhlbm9tXVtTY2hvb2xTZWFyY2hdIGNhbmRpZGF0ZXMgZGlkIG5vdCBzZXR0bGUgXCIrSlNPTi5zdHJpbmdpZnkoe3JlYXNvbjpcImxvYWRpbmctb3ItZW1wdHktcmVzdWx0c1wiLGlucHV0SWQ6dD8uaWR8fGUuaWR8fFwiXCIsYXJpYUV4cGFuZGVkOnQ/LmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIik/P251bGwsYXJpYUNvbnRyb2xzOnQ/LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIik/P251bGwsYXJpYU93bnM6dD8uZ2V0QXR0cmlidXRlKFwiYXJpYS1vd25zXCIpPz9udWxsLGluaXRpYWxTbmFwc2hvdFN0YXR1czphLGxhc3RTbmFwc2hvdFN0YXR1czpmLGxhc3RMaXN0Ym94SWQ6ZCxmcmVzaFJlc3VsdFRyYW5zaXRpb25PYnNlcnZlZDp1LGxvYWRpbmdDeWNsZVN0YXJ0ZWQ6YyxzdGFibGVTYW1wbGVzOm0scmVzcG9uc2VDYXB0dXJlU3RhdHVzOmcuY2FwdHVyZVN0YXR1cyxyZXNwb25zZUh0dHBTdGF0dXM6Yj8uaHR0cFN0YXR1cz8/bnVsbCxyZXNwb25zZUNhbmRpZGF0ZUNvdW50OmI/LmNhbmRpZGF0ZVRleHRzLmxlbmd0aD8/MCxldmlkZW5jZVJlc3VsdFN0YXR1czp2Py5zdGF0dXM/P251bGwsZXZpZGVuY2VSZXN1bHRDYW5kaWRhdGVDb3VudDp2Py5jYW5kaWRhdGVzLmxlbmd0aD8/MH0pKSx7c3RhdHVzOlwiZmFpbGVkXCIsY2FuZGlkYXRlczpbXX19aWYoXCJ1bmF2YWlsYWJsZVwiIT09Zy5jYXB0dXJlU3RhdHVzJiZcImluc3BlY3QtdW5hdmFpbGFibGVcIiE9PWcuY2FwdHVyZVN0YXR1cyYmXCJpZGxlXCIhPT1nLmNhcHR1cmVTdGF0dXMpcmV0dXJue3N0YXR1czpcImZhaWxlZFwiLGNhbmRpZGF0ZXM6W119O2xldCB3PXRDKGUpLFM9dz90QSh3KTpudWxsO3JldHVybiBjb25zb2xlLndhcm4oXCJbUGhlbm9tXVtTY2hvb2xTZWFyY2hdIGNhbmRpZGF0ZXMgY2FwdHVyZWQgXCIrSlNPTi5zdHJpbmdpZnkoe3NvdXJjZTpcInZpc2libGUtZG9tLWxpc3Rib3hcIixpbnB1dElkOnc/LmlkfHxcIlwiLGxpc3Rib3hJZDpTPy5pZHx8XCJcIixjYW5kaWRhdGVDb3VudDpoLmNhbmRpZGF0ZXMubGVuZ3RoLHN0YXR1czpoLnN0YXR1cyxzdGFibGVTYW1wbGVzOm0sbG9hZGluZ0N5Y2xlU3RhcnRlZDpjLHJlc3BvbnNlQ2FwdHVyZVN0YXR1czpnLmNhcHR1cmVTdGF0dXN9KSksaH1hc3luYyBmdW5jdGlvbiB0RyhlLHQscil7bGV0IG49ZSxvPW5ldyBXZWFrU2V0LGk9YXdhaXQgKDAseS5kZWZhdWx0KSgoKT0+e2lmKHR4KHIpKXJldHVybiBudWxsO2xldCBlPXRDKG4pO2lmKCFlKXJldHVybiBudWxsO2lmKG49ZSwhby5oYXMoZSl8fGUudmFsdWUhPT10KXtpZih0eChyKXx8KEIoZSx0KSx0eChyKSl8fChlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSx0eChyKSkpcmV0dXJuIG51bGw7ZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLG8uYWRkKGUpfWxldCBpPXRDKGUpO3JldHVybiBpJiZvLmhhcyhpKT8obj1pLGkudmFsdWU9PT10fHxudWxsKTpudWxsfSwoKT0+dHgociksMTApO3JldHVybiEwPT09aX1hc3luYyBmdW5jdGlvbiB0SyhlLHQscil7bGV0IG49U3RyaW5nKHQ/P1wiXCIpO2lmKCFVKG4pKXJldHVybiExO2xldCBvPXRDKGUpO2lmKCFvfHx0eChyKXx8dHgocikpcmV0dXJuITE7aWYoby5mb2N1cygpLFwiXCIhPT1vLnZhbHVlKXtsZXQgZT1hd2FpdCB0WChvLHIpO2lmKCFlfHx0eChyKXx8IShvPXRDKG8pKSlyZXR1cm4hMX1yZXR1cm4hdHgocikmJihCKG8sbiksIXR4KHIpJiYoby5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSksIXR4KHIpJiYoby5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGcuZGVsYXkpKDE1MCksIXR4KHIpJiZVKHRDKG8pPy52YWx1ZSk9PT1VKG4pKSkpfWFzeW5jIGZ1bmN0aW9uIHRYKGUsdCl7bGV0IHI9ZTtmb3IobGV0IGU9MDtlPDMmJiF0eCh0KTtlKz0xKXtsZXQgZT10QyhyKTtpZighZSlicmVhaztpZihyPWUsXCJcIiE9PWUudmFsdWUpe2lmKHR4KHQpfHwoQihlLFwiXCIpLHR4KHQpKXx8KGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLHR4KHQpKSlyZXR1cm4hMTtlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSl9aWYoYXdhaXQgKDAsZy5kZWxheSkoNTApLHR4KHQpKWJyZWFrO2xldCBuPXRDKHIpO2lmKG4/LnZhbHVlPT09XCJcIilyZXR1cm4hMH1yZXR1cm4hMX1hc3luYyBmdW5jdGlvbiB0SihlLHQscj1cIlwiLG49XCJcIil7bGV0IG89U3RyaW5nKHQ/P1wiXCIpLGk9VShvKTtpZighaSlyZXR1cm4hMTtsZXQgYT10QyhlKTtpZighYSlyZXR1cm4gY29uc29sZS53YXJuKFwiW3BoZW5vbV0gcmVzb2x2ZWQgc2Nob29sIGZpbGwgZmFpbGVkXCIse3N0YWdlOlwidHlwZVwiLHJlYXNvbjpcImxpdmUtaW5wdXQtbWlzc2luZ1wifSksITE7bGV0IGw9YS52YWx1ZSxzPWFzeW5jKGUsdCxyPTApPT57bGV0IG49YXdhaXQgdEcoYSxsKTtyZXR1cm4gY29uc29sZS53YXJuKFwiW1BoZW5vbV1bU2Nob29sU2VhcmNoXSBleGFjdCBjb21taXQgZmFpbGVkIFwiK0pTT04uc3RyaW5naWZ5KHtzdGFnZTplLG9wdGlvbkNvdW50OnIscmVhc29uOnQscmVzdG9yZWQ6bn0pKSwhMX07aWYoVShhLnZhbHVlKT09PWkpcmV0dXJuITA7bGV0IHU9YXN5bmMoZSx0PSExKT0+e3QmJkIoZS5pbnB1dCxcIlwiKSwkKGUub3B0aW9uKTtsZXQgcj1hd2FpdCAoMCx5LmRlZmF1bHQpKCgpPT57bGV0IHQ9dEMoZS5pbnB1dCk7cmV0dXJuIHQmJlUoZXEodCkpPT09aT90Om51bGx9LCgpPT4hMSwxMCk7cmV0dXJuIG51bGwhPT1yfSxjPXRBKGEpO2lmKGMmJlUoYS52YWx1ZSkpe2xldCBlPXRWKGMsaSxuKTtpZihjb25zb2xlLmluZm8oXCJbUGhlbm9tXVtTY2hvb2xTZWFyY2hdIGV4YWN0IGNvbW1pdCBjYW5kaWRhdGUgXCIrSlNPTi5zdHJpbmdpZnkoe3NvdXJjZTpcImN1cnJlbnQtc2VhcmNoLWxpc3Rib3hcIixpbnB1dElkOmEuaWR8fFwiXCIsbGlzdGJveElkOmMuaWR8fFwiXCIsb3B0aW9uQ291bnQ6dEwoYykubGVuZ3RoLGV4YWN0T3B0aW9uQ291bnQ6ZS5sZW5ndGgsdmFsdWVDaGVjazohIW59KSksMT09PWUubGVuZ3RoKXtsZXQgdD1hd2FpdCB1KHtpbnB1dDphLG9wdGlvbjplWzBdfSk7cmV0dXJuISF0fHxhd2FpdCBzKFwiY29tbWl0XCIsXCJleGFjdC12YWx1ZS1ub3QtY29tbWl0dGVkXCIsdEwoYykubGVuZ3RoKX19bGV0IGQ9W28scl0ubWFwKGU9PlN0cmluZyhlPz9cIlwiKS50cmltKCkpLmZpbHRlcigoZSx0LHIpPT5lLmxlbmd0aD4wJiZyLmluZGV4T2YoZSk9PT10KSxmPTA7Zm9yKGxldCBlIG9mIGQpe2xldCB0PXRDKGEpO2lmKCF0KWNvbnRpbnVlO2xldCByPVUoZSk9PT1pP1wic2VsZWN0ZWQtdmFsdWVcIjpcInNlbGVjdGVkLXJvdW5kLXNlYXJjaFwiO2NvbnNvbGUuaW5mbyhcIltQaGVub21dW1NjaG9vbFNlYXJjaF0gZXhhY3QgY29tbWl0IHNlYXJjaCBcIitKU09OLnN0cmluZ2lmeSh7c291cmNlOnIsaW5wdXRJZDp0LmlkfHxcIlwifSkpLHQuZm9jdXMoKSxCKHQsZSksdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSksdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGcuZGVsYXkpKDE1MCk7bGV0IG89YXdhaXQgKDAseS5kZWZhdWx0KSgoKT0+e2xldCBlPXRDKHQpO2lmKCFlKXJldHVybiBudWxsO2xldCByPXRBKGUpO2lmKCFyKXJldHVybiBudWxsO2xldCBvPXRMKHIpO2Y9by5sZW5ndGg7bGV0IGE9dFYocixpLG4pO3JldHVybiAxPT09YS5sZW5ndGg/e2lucHV0OmUsb3B0aW9uOmFbMF0sb3B0aW9uQ291bnQ6by5sZW5ndGh9Om51bGx9LCgpPT4hMSwyNSk7aWYoIW8pe2NvbnNvbGUuaW5mbyhcIltQaGVub21dW1NjaG9vbFNlYXJjaF0gZXhhY3QgY29tbWl0IHNlYXJjaCByZXN1bHQgXCIrSlNPTi5zdHJpbmdpZnkoe3NvdXJjZTpyLGlucHV0SWQ6dC5pZHx8XCJcIixvcHRpb25Db3VudDpmLGV4YWN0T3B0aW9uQ291bnQ6MH0pKTtjb250aW51ZX1jb25zb2xlLmluZm8oXCJbUGhlbm9tXVtTY2hvb2xTZWFyY2hdIGV4YWN0IGNvbW1pdCBzZWFyY2ggcmVzdWx0IFwiK0pTT04uc3RyaW5naWZ5KHtzb3VyY2U6cixpbnB1dElkOm8uaW5wdXQuaWR8fFwiXCIsb3B0aW9uQ291bnQ6by5vcHRpb25Db3VudCxleGFjdE9wdGlvbkNvdW50OjF9KSk7bGV0IGw9YXdhaXQgdShvLCEwKTtpZihsKXJldHVybiEwO3JldHVybiBhd2FpdCBzKFwiY29tbWl0XCIsXCJleGFjdC12YWx1ZS1ub3QtY29tbWl0dGVkXCIsby5vcHRpb25Db3VudCl9cmV0dXJuIGF3YWl0IHMoXCJvcHRpb25zXCIsXCJ1bmlxdWUtZXhhY3QtbWlzc2luZ1wiLGYpfWFzeW5jIGZ1bmN0aW9uIHRRKGUsdCxyKXtsZXQgbj1TdHJpbmcodD8/XCJcIikudHJpbSgpO2lmKCFuKXJldHVybiExO2xldCBpPShlLHQsbik9Pntjb25zb2xlLndhcm4oZSxyPy5yZWRhY3RWYWx1ZXM9PT0hMD9uOnQpfTtlLmZvY3VzKCksQihlLG4pLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKTtsZXQgYT1hd2FpdCAoMCx5LmRlZmF1bHQpKCgpPT57bGV0IHQ9ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLW93bnNcIik7aWYodCl7bGV0IGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCk7aWYoZSYmXCJsaXN0Ym94XCI9PT1lLmdldEF0dHJpYnV0ZShcInJvbGVcIikpcmV0dXJuIGV9bGV0IHI9ZS5jbG9zZXN0KFwiLnJidFwiKTtpZihyKXtsZXQgZT1yLnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwibGlzdGJveFwiXSwgLnJidC1tZW51Jyk7aWYoZSlyZXR1cm4gZX1yZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJsaXN0Ym94XCJdLnNob3csIC5yYnQtbWVudS5kcm9wZG93bi1tZW51LnNob3csIFtyb2xlPVwibGlzdGJveFwiXScpfSwoKT0+ITEsMjUpO2lmKCFhKXtpZihPKGUpLGVVKGUpKXJldHVybiBpKFwiW3BoZW5vbV0gc2VhcmNoIGlucHV0IGxpc3Rib3ggbm90IGZvdW5kXCIse3ZhbHVlOm4sY3VycmVudFZhbHVlOmVxKGUpfSx7c3RhZ2U6XCJvcHRpb25zXCIscmVhc29uOlwibGlzdGJveC1ub3QtZm91bmRcIixvcHRpb25Db3VudDowfSksITE7bGV0IHQ9YXdhaXQgZUgoZSxuKTtyZXR1cm4gdHx8aShcIltwaGVub21dIHNlYXJjaCBpbnB1dCBkaWQgbm90IGNvbW1pdCB3aXRob3V0IGxpc3Rib3hcIix7dmFsdWU6bixjdXJyZW50VmFsdWU6ZXEoZSl9LHtzdGFnZTpcImNvbW1pdFwiLHJlYXNvbjpcInZhbHVlLW5vdC1jb21taXR0ZWRcIixvcHRpb25Db3VudDowfSksdH1hd2FpdCAoMCxnLmRlbGF5KSgxNTApO2xldCBsPUFycmF5LmZyb20oYS5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cIm9wdGlvblwiXSwgLmRyb3Bkb3duLWl0ZW0nKSkuZmlsdGVyKGU9PlUoZS50ZXh0Q29udGVudCkubGVuZ3RoPjApO2lmKDA9PT1sLmxlbmd0aClyZXR1cm4gaShcIltwaGVub21dIHNlYXJjaCBpbnB1dCBoYXMgbm8gb3B0aW9uc1wiLHt2YWx1ZTpufSx7c3RhZ2U6XCJvcHRpb25zXCIscmVhc29uOlwibm8tb3B0aW9uc1wiLG9wdGlvbkNvdW50OjB9KSwhMTtsZXQgcz0oMCxvLmZpbmRFeGFjdENob2ljZSkobCxuLGU9PmUudGV4dENvbnRlbnQpO2lmKCFzKXJldHVybiBpKFwiW3BoZW5vbV0gc2VhcmNoIG9wdGlvbiBub3QgbWF0Y2hlZFwiLHt2YWx1ZTpuLG9wdGlvbnM6bC5tYXAoZT0+ZS50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiKX0se3N0YWdlOlwib3B0aW9uc1wiLHJlYXNvbjpcIm9wdGlvbi1ub3QtbWF0Y2hlZFwiLG9wdGlvbkNvdW50OmwubGVuZ3RofSksITE7bGV0IHU9cy50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiO3MuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsdmlldzp3aW5kb3d9KSksYXdhaXQgKDAsZy5kZWxheSkoMzApLHMuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNldXBcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLHZpZXc6d2luZG93fSkpLHMuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCx2aWV3OndpbmRvd30pKSxhd2FpdCAoMCxnLmRlbGF5KSgxNTApLE8oZSk7bGV0IGM9YXdhaXQgZUgoZSxuLHUpO3JldHVybiBjfHxpKFwiW3BoZW5vbV0gc2VhcmNoIG9wdGlvbiBkaWQgbm90IGNvbW1pdFwiLHt2YWx1ZTpuLG1hdGNoZWRPcHRpb246dSxjdXJyZW50VmFsdWU6ZXEoZSl9LHtzdGFnZTpcImNvbW1pdFwiLHJlYXNvbjpcIm9wdGlvbi1ub3QtY29tbWl0dGVkXCIsb3B0aW9uQ291bnQ6bC5sZW5ndGh9KSxjfWZ1bmN0aW9uIHRaKGUpe2lmKCFlKXJldHVybjtsZXQgdD1lLm1hdGNoKC9cXGIoPzpZWVlZLU1NLUREfFlZWVlcXC9NTVxcL0REfE1NXFwvRERcXC9ZWVlZfE1NXFwvWVlZWXxZWVlZKVxcYi9pKTtyZXR1cm4gdD8uWzBdPy50b1VwcGVyQ2FzZSgpfWZ1bmN0aW9uIHQwKGUpe3JldHVyblwiTU0vWVlZWVwiPT09dFooZSl9ZnVuY3Rpb24gdDIoZSl7cmV0dXJuXCJZWVlZXCI9PT10WihlKX1mdW5jdGlvbiB0MShlKXtsZXQgdD1TdHJpbmcoZT8/XCJcIikudHJpbSgpO2lmKCF0KXJldHVybiBudWxsO2xldCByPSgwLGEuZGVmYXVsdCkodCxbXCJZWVlZLU1NLUREXCIsXCJZWVlZL01NL0REXCIsXCJZWVlZL00vRFwiLFwiTU0vREQvWVlZWVwiLFwiTS9EL1lZWVlcIixcIk1NL1lZWVlcIixcIk0vWVlZWVwiLFwiWVlZWS1NTVwiLFwiWVlZWS9NXCIsXCJZWVlZL01NXCIsXCJNTU0gWVlZWVwiLFwiTU1NTSBZWVlZXCIsXCJZWVlZXCJdLCEwKTtyZXR1cm4gci5pc1ZhbGlkKCk/cjpudWxsfWZ1bmN0aW9uIHQzKGUsdCl7bGV0IHI9U3RyaW5nKGU/P1wiXCIpLnRyaW0oKTtpZighcilyZXR1cm5cIlwiO2lmKFwiY3VycmVudFwiPT09VShyKSlyZXR1cm5cImN1cnJlbnRcIjtsZXQgbj10MShyKTtyZXR1cm4gbj90MCh0KT8vXlxcZHs0fSQvLnRlc3Qocik/YDAxLyR7cn1gOm4uZm9ybWF0KFwiTU0vWVlZWVwiKTpcIk1NL0REL1lZWVlcIj09PXRaKHQpPy9eXFxkezR9JC8udGVzdChyKT9gMDEvMDEvJHtyfWA6bi5mb3JtYXQoXCJNTS9ERC9ZWVlZXCIpOnQyKHQpP24uZm9ybWF0KFwiWVlZWVwiKTovXlxcZHs0fSQvLnRlc3Qocik/YCR7cn0tMDEtMDFgOi9eXFxkezR9LVxcZHsyfSQvLnRlc3Qocik/YCR7cn0tMDFgOm4uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTpyfWZ1bmN0aW9uIHQ0KGUpe2xldCB0PVN0cmluZyhlPz9cIlwiKS50cmltKCkscj10MSh0KTtyZXR1cm57cHJlc2VudDpcIlwiIT09dCxsZW5ndGg6dC5sZW5ndGgscGFyc2VkOnI/e3llYXI6ci55ZWFyKCksbW9udGg6ci5tb250aCgpKzEsZGF5OnIuZGF0ZSgpfTpudWxsfX1mdW5jdGlvbiB0NShlKXtsZXQgdD1lJChlKTtyZXR1cm57aW5wdXRJZDplLmlkLGlucHV0TmFtZTplLm5hbWUsY29ubmVjdGVkOmUuaXNDb25uZWN0ZWQsY3VycmVudElucHV0SWQ6dD8uaWR8fFwiXCIsY3VycmVudElucHV0TmFtZTp0Py5uYW1lfHxcIlwiLGN1cnJlbnRWYWx1ZTp0NCh0Py52YWx1ZSl9fWFzeW5jIGZ1bmN0aW9uIHQ2KGUpe2UuZm9jdXMoKSxlLmNsaWNrKCk7bGV0IHQ9ZS5jbG9zZXN0KFwiLmNhbGVuZGFyLXdpZGdldFwiKTtyZXR1cm4gYXdhaXQgKDAseS5kZWZhdWx0KSgoKT0+dD8ucXVlcnlTZWxlY3RvcihcIi5yZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiKXx8ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiKSwoKT0+ITEsMjUpfWZ1bmN0aW9uIHQ4KGUpe3JldHVybiBlLnF1ZXJ5U2VsZWN0b3IoXCIucmFuZ2Utc2VsZWN0LCAucmVhY3QtZGF0ZXBpY2tlcl9feWVhci1zZWxlY3RcIil9ZnVuY3Rpb24gdDkoZSl7cmV0dXJuIGUucXVlcnlTZWxlY3RvcihcIi5yZWFjdC1kYXRlcGlja2VyX195ZWFyLXNlbGVjdFwiKXx8QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmFuZ2Utc2VsZWN0XCIpKS5maW5kKGU9PkFycmF5LmZyb20oZS5vcHRpb25zKS5zb21lKGU9Pi9eXFxkezR9JC8udGVzdChlLnZhbHVlKSkpfHxudWxsfWZ1bmN0aW9uIHQ3KGUpe3JldHVybiBlLnF1ZXJ5U2VsZWN0b3IoXCIucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtc2VsZWN0XCIpfHxBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcIi5yYW5nZS1zZWxlY3RcIikpLmZpbmQoZT0+QXJyYXkuZnJvbShlLm9wdGlvbnMpLnNvbWUoZT0+L14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikkL2kudGVzdChlLnZhbHVlKSkpfHxudWxsfWZ1bmN0aW9uIHJlKGUsdCl7bGV0IHI9QXJyYXkuZnJvbShlLm9wdGlvbnMpLmZpbmQoZT0+ZS52YWx1ZT09PXQpO3JldHVybiEhciYmKGUudmFsdWU9ci52YWx1ZSxyLnNlbGVjdGVkPSEwLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSwhMCl9ZnVuY3Rpb24gcnQoZSl7bGV0IHQ9QXJyYXkuZnJvbShlLm9wdGlvbnMpLm1hcChlPT5OdW1iZXIoZS52YWx1ZSkpLmZpbHRlcihlPT5OdW1iZXIuaXNGaW5pdGUoZSkpO3JldHVybiAwPT09dC5sZW5ndGg/bnVsbDp7bWluWWVhcjpNYXRoLm1pbiguLi50KSxtYXhZZWFyOk1hdGgubWF4KC4uLnQpfX1hc3luYyBmdW5jdGlvbiBycihlLHQpe2xldCByPVwicHJldmlvdXNcIj09PXQ/L3ByZXZpb3VzL2k6L25leHQvaSxuPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKS5maWx0ZXIoZT0+IWUuZGlzYWJsZWQpLmZpbmQoZT0+ci50ZXN0KGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJcIikpO3JldHVybiEhbiYmKCQobiksbi5jbGljaygpLGF3YWl0ICgwLGcuZGVsYXkpKDE1MCksITApfWFzeW5jIGZ1bmN0aW9uIHJuKGUsdCl7bGV0IHI9TnVtYmVyKHQpO2ZvcihsZXQgbj0wO248MTI7bis9MSl7bGV0IG49dDgoZSk7aWYoIW4pcmV0dXJuITA7bGV0IG89QXJyYXkuZnJvbShuLm9wdGlvbnMpLmZpbmQoZT0+ZS52YWx1ZT09PXQpO2lmKG8pcmV0dXJuIG4udmFsdWU9dCxvLnNlbGVjdGVkPSEwLG4uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLG4uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSxhd2FpdCAoMCxnLmRlbGF5KSgxNTApLCEwO2xldCBpPXJ0KG4pO2lmKCFpfHwhTnVtYmVyLmlzRmluaXRlKHIpKWJyZWFrO2xldCBhPXI8aS5taW5ZZWFyP2F3YWl0IHJyKGUsXCJwcmV2aW91c1wiKTpyPmkubWF4WWVhciYmYXdhaXQgcnIoZSxcIm5leHRcIik7aWYoIWEpYnJlYWt9cmV0dXJuITF9YXN5bmMgZnVuY3Rpb24gcm8oZSx0KXtsZXQgcj10MSh0KTtpZighcilyZXR1cm4gY29uc29sZS53YXJuKFwiW3BoZW5vbV1bZGF0ZS1kZWJ1Z10gbW9udGgteWVhciBwYXJzZSBmYWlsZWRcIix7Li4udDUoZSksdGFyZ2V0OnQ0KHQpfSksYXdhaXQgdEUoZSx0KTtsZXQgbj1hd2FpdCB0NihlKTtpZighbilyZXR1cm4gY29uc29sZS53YXJuKFwiW3BoZW5vbV1bZGF0ZS1kZWJ1Z10gbW9udGgteWVhciBwb3BwZXIgbWlzc2luZ1wiLHsuLi50NShlKSx0YXJnZXQ6dDQodCl9KSxhd2FpdCB0RShlLHQpO2xldCBvPVN0cmluZyhyLnllYXIoKSksaT1yLm1vbnRoKCksYT1yLmZvcm1hdChcIk1NTU1cIiksbD1yLmZvcm1hdChcIk1NTVwiKTtGKFwibW9udGgteWVhciBwaWNrZXIgb3BlbmVkXCIsey4uLnQ1KGUpLHRhcmdldDp0NCh0KSxwb3BwZXJJblNhbWVXaWRnZXQ6ZS5jbG9zZXN0KFwiLmNhbGVuZGFyLXdpZGdldFwiKT8uY29udGFpbnMobik9PT0hMH0pO2xldCBzPWF3YWl0IHJuKG4sbyk7aWYoIXMpe2xldCByPXQ4KG4pO3JldHVybiBjb25zb2xlLndhcm4oXCJbcGhlbm9tXSBtb250aC15ZWFyIGRhdGVwaWNrZXIgeWVhciBub3QgYXZhaWxhYmxlXCIse3ZhbHVlOnQseWVhcjpvLHllYXJzOnI/QXJyYXkuZnJvbShyLm9wdGlvbnMpLm1hcChlPT5lLnZhbHVlKTpbXX0pLGF3YWl0IHRFKGUsdCl9bGV0IHU9YXdhaXQgKDAseS5kZWZhdWx0KSgoKT0+e2xldCBlPW4ucXVlcnlTZWxlY3RvcihgLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXRleHQucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtJHtpfTpub3QoLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXRleHQtLWRpc2FibGVkKWApO3JldHVybiBlfHxBcnJheS5mcm9tKG4ucXVlcnlTZWxlY3RvckFsbChcIi5yZWFjdC1kYXRlcGlja2VyX19tb250aC10ZXh0XCIpKS5maW5kKGU9PntsZXQgdD1VKGUudGV4dENvbnRlbnQpLHI9VShlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikpO3JldHVybih0PT09VShsKXx8dD09PVUoYSkpJiYoIXJ8fHIuaW5jbHVkZXMobykpfSl8fG51bGx9LCgpPT4hMSwyMCk7aWYoIXUpcmV0dXJuIGNvbnNvbGUud2FybihcIltwaGVub21dW2RhdGUtZGVidWddIG1vbnRoIG9wdGlvbiBtaXNzaW5nXCIsey4uLnQ1KGUpLHRhcmdldDp0NCh0KSxtb250aEluZGV4OmksbW9udGhOYW1lOmF9KSxhd2FpdCB0RShlLHQpOyQodSksdS5jbGljaygpLGF3YWl0ICgwLGcuZGVsYXkpKDE4MCksTyhlKTtsZXQgYz1hd2FpdCAoMCxwLndhaXRGb3JDb25kaXRpb24pKCgpPT5WKGUkKGUpPy52YWx1ZSkse3RpbWVvdXQ6OTAwLGludGVydmFsOjUwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pO3JldHVybiBGKFwibW9udGgteWVhciBzZWxlY3Rpb24gcmVhZGJhY2tcIix7Li4udDUoZSksdGFyZ2V0OnQ0KHQpLGNvbW1pdHRlZDpjfSksISFjfHxhd2FpdCB0RShlLHQpfWZ1bmN0aW9uIHJpKGUpe3JldHVybiBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcIi5yZWFjdC1kYXRlcGlja2VyX195ZWFyLXRleHRcIikpLmZpbHRlcihlPT4hZS5jbGFzc0xpc3QuY29udGFpbnMoXCJyZWFjdC1kYXRlcGlja2VyX195ZWFyLXRleHQtLWRpc2FibGVkXCIpKX1mdW5jdGlvbiByYShlKXtsZXQgdD1yaShlKS5tYXAoZT0+TnVtYmVyKFUoZS50ZXh0Q29udGVudCkpKS5maWx0ZXIoZT0+TnVtYmVyLmlzRmluaXRlKGUpKTtyZXR1cm4gMD09PXQubGVuZ3RoP251bGw6e21pblllYXI6TWF0aC5taW4oLi4udCksbWF4WWVhcjpNYXRoLm1heCguLi50KX19YXN5bmMgZnVuY3Rpb24gcmwoZSx0KXtsZXQgcj1cInByZXZpb3VzXCI9PT10Py9wcmV2aW91cyB5ZWFyL2k6L25leHQgeWVhci9pLG49QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpLmZpbHRlcihlPT4hZS5kaXNhYmxlZCkuZmluZChlPT5yLnRlc3QoZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlwiKSk7aWYoIW4pcmV0dXJuITE7bGV0IG89cmEoZSk7cmV0dXJuISFvJiYobi5jbGljaygpLGF3YWl0ICgwLHAud2FpdEZvckNvbmRpdGlvbikoKCk9PntsZXQgdD1yYShlKTtyZXR1cm4gbnVsbCE9dCYmKHQubWluWWVhciE9PW8ubWluWWVhcnx8dC5tYXhZZWFyIT09by5tYXhZZWFyKX0se3RpbWVvdXQ6NDUwLGludGVydmFsOjIwLG9ic2VydmVUYXJnZXQ6ZX0pKX1hc3luYyBmdW5jdGlvbiBycyhlLHQpe2xldCByPU51bWJlcih0KTtmb3IobGV0IG49MDtuPDE2O24rPTEpe2xldCBvPXJpKGUpLmZpbmQoZT0+VShlLnRleHRDb250ZW50KT09PXQpO2lmKG8pcmV0dXJuIG87bGV0IGk9cmEoZSk7aWYoIWl8fCFOdW1iZXIuaXNGaW5pdGUocikpYnJlYWs7bGV0IGE9cjxpLm1pblllYXI/XCJwcmV2aW91c1wiOnI+aS5tYXhZZWFyP1wibmV4dFwiOm51bGw7aWYoIWEpYnJlYWs7bGV0IGw9YXdhaXQgcmwoZSxhKTtpZihGKFwieWVhciByYW5nZSBuYXZpZ2F0aW9uXCIse3RhcmdldFllYXI6dCxkaXJlY3Rpb246YSxhdHRlbXB0Om4rMSx2aXNpYmxlUmFuZ2U6aSxtb3ZlZDpsfSksIWwpYnJlYWt9cmV0dXJuIG51bGx9YXN5bmMgZnVuY3Rpb24gcnUoZSx0KXtsZXQgcj10MSh0KTtpZighcilyZXR1cm4gYXdhaXQgdEUoZSx0KTtsZXQgbj1TdHJpbmcoci55ZWFyKCkpLG89YXdhaXQgdDYoZSk7aWYoIW8pcmV0dXJuIGF3YWl0IHRFKGUsbik7RihcInllYXIgcGlja2VyIG9wZW5lZFwiLHsuLi50NShlKSx0YXJnZXQ6dDQobikscG9wcGVySW5TYW1lV2lkZ2V0OmUuY2xvc2VzdChcIi5jYWxlbmRhci13aWRnZXRcIik/LmNvbnRhaW5zKG8pPT09ITB9KTtsZXQgaT1hd2FpdCBycyhvLG4pO2lmKCFpKXtsZXQgdD1BcnJheS5mcm9tKG8ucXVlcnlTZWxlY3RvckFsbChcIi5yZWFjdC1kYXRlcGlja2VyX195ZWFyLXRleHRcIikpLm1hcChlPT5VKGUudGV4dENvbnRlbnQpKTtyZXR1cm4gRihcInllYXIgb3B0aW9uIG1pc3NpbmdcIix7Li4udDUoZSksdGFyZ2V0WWVhcjpuLHZpc2libGVZZWFyczp0LHByZXZpb3VzQnV0dG9uUHJlc2VudDpBcnJheS5mcm9tKG8ucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKSkuc29tZShlPT4vcHJldmlvdXMgeWVhci9pLnRlc3QoZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlwiKSksbmV4dEJ1dHRvblByZXNlbnQ6QXJyYXkuZnJvbShvLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpLnNvbWUoZT0+L25leHQgeWVhci9pLnRlc3QoZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlwiKSl9KSxhd2FpdCB0RShlLG4pfSQoaSksaS5jbGljaygpLE8oZSk7bGV0IGE9YXdhaXQgKDAscC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+VShlJChlKT8udmFsdWUpPT09bix7dGltZW91dDo5MDAsaW50ZXJ2YWw6NTAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSk7cmV0dXJuIEYoXCJ5ZWFyIHNlbGVjdGlvbiByZWFkYmFja1wiLHsuLi50NShlKSx0YXJnZXQ6dDQobiksY29tbWl0dGVkOmF9KSwhIWF8fGF3YWl0IHRFKGUsbil9YXN5bmMgZnVuY3Rpb24gcmMoZSx0LHIpe2xldCBuPWUsbz1lJChuKTtpZighbylyZXR1cm4gY29uc29sZS53YXJuKFwiW3BoZW5vbV1bZGF0ZS1kZWJ1Z10gY3VycmVudCBkYXRlIGlucHV0IG1pc3NpbmdcIix7aW5wdXRJZDpuLmlkLGlucHV0TmFtZTpuLm5hbWUscHJldmlvdXNJbnB1dENvbm5lY3RlZDpuLmlzQ29ubmVjdGVkfSksITE7ZT1vO2xldCBpPXQzKHQscik7aWYoRihcImZpbGwgc3RhcnRcIix7Li4udDUoZSksaW5wdXRSZWFjcXVpcmVkOmUhPT1uLHByZXZpb3VzSW5wdXRDb25uZWN0ZWQ6bi5pc0Nvbm5lY3RlZCxwcmVmZXJyZWRGb3JtYXQ6cixtb2RlOnQwKHIpP1wibW9udGgteWVhclwiOnQyKHIpP1wieWVhclwiOlwiZGF0ZVwiLHNvdXJjZTp0NCh0KSx0YXJnZXQ6dDQoaSl9KSwhaSlyZXR1cm4gY29uc29sZS53YXJuKFwiW3BoZW5vbV1bZGF0ZS1kZWJ1Z10gbm9ybWFsaXplZCB2YWx1ZSBlbXB0eVwiLHsuLi50NShlKSxwcmVmZXJyZWRGb3JtYXQ6cn0pLCExO2lmKFwiY3VycmVudFwiPT09VShpKSl7bGV0IHQ9ZS5jbG9zZXN0KFwiZmllbGRzZXRbaWRdXCIpLHI9dD8ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW2lkKj1cImN1cnJlbnRseVdvcmtIZXJlXCJdJyk7cmV0dXJuISFyJiYoYXdhaXQgZVoociwhMCksYXdhaXQgKDAscC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+ZVcocikse3RpbWVvdXQ6OTAwLGludGVydmFsOjUwLG9ic2VydmVUYXJnZXQ6dHx8ZG9jdW1lbnQuYm9keX0pKX1pZih0MChyKSlyZXR1cm4gYXdhaXQgcm8oZSxpKTtpZih0MihyKSlyZXR1cm4gYXdhaXQgcnUoZSxpKTtsZXQgYT10MShpKTtpZighYSlyZXR1cm4gYXdhaXQgdEUoZSxpKTtsZXQgbD1TdHJpbmcoYS55ZWFyKCkpLHM9YS5tb250aCgpLHU9YS5kYXRlKCksYz1hd2FpdCB0NihlKTtpZighYylyZXR1cm4gYXdhaXQgdEUoZSxpKTtsZXQgZD10OShjKTtpZihkKXtsZXQgdD1yZShkLGwpO2lmKCF0KXJldHVybiBhd2FpdCB0RShlLGkpO2F3YWl0ICgwLGcuZGVsYXkpKDEyMCl9bGV0IGY9dDcoYyk7aWYoZil7bGV0IHQ9bnVsbCE9Zi5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke3N9XCJdYCk/U3RyaW5nKHMpOmEuZm9ybWF0KFwiTU1NTVwiKSxyPXJlKGYsdCk7aWYoIXIpcmV0dXJuIGF3YWl0IHRFKGUsaSk7YXdhaXQgKDAsZy5kZWxheSkoMTIwKX1sZXQgbT1gcmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS0ke1N0cmluZyh1KS5wYWRTdGFydCgzLFwiMFwiKX1gLGg9YXdhaXQgKDAseS5kZWZhdWx0KSgoKT0+Yy5xdWVyeVNlbGVjdG9yKGAuJHttfTpub3QoLnJlYWN0LWRhdGVwaWNrZXJfX2RheS0tb3V0c2lkZS1tb250aCk6bm90KC5yZWFjdC1kYXRlcGlja2VyX19kYXktLWRpc2FibGVkKWApLCgpPT4hMSwyMCk7aWYoaCl7aC5jbGljaygpLGF3YWl0ICgwLGcuZGVsYXkpKDE1MCksZS5ibHVyKCk7bGV0IHQ9YXdhaXQgKDAscC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+VihlJChlKT8udmFsdWUpLHt0aW1lb3V0OjkwMCxpbnRlcnZhbDo1MCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KTtpZih0KXJldHVybiEwfXJldHVybiBhd2FpdCB0RShlLGkpfWFzeW5jIGZ1bmN0aW9uIHJkKGUsdCl7bGV0IHI9U3RyaW5nKHQ/P1wiXCIpLnRyaW0oKTtpZighcilyZXR1cm4hMTtsZXQgbj1lbShlLG51bGwpO2lmKCFuKXJldHVybiExO2xldCBvPWVUKEFycmF5LmZyb20obi5vcHRpb25zKSxyLGUubGFiZWwpO2lmKCFvKXJldHVybiBjb25zb2xlLndhcm4oXCJbcGhlbm9tXSBzZWxlY3Qgb3B0aW9uIG5vdCBtYXRjaGVkXCIse2xhYmVsOmUubGFiZWwsdmFsdWU6cixvcHRpb25zOkFycmF5LmZyb20obi5vcHRpb25zKS5tYXAoZT0+KHt2YWx1ZTplLnZhbHVlLHRleHQ6ZS50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwifSkpfSksITE7YXdhaXQgZUkobixvKTtsZXQgaT1hd2FpdCBlaihlLG4sbyk7aWYoIWkpe2xldCB0PWVtKGUsbik7aWYodCl7bGV0IG49ZVQoQXJyYXkuZnJvbSh0Lm9wdGlvbnMpLHIsZS5sYWJlbCk7biYmKGF3YWl0IGVJKHQsbiksaT1hd2FpdCBlaihlLHQsbikpfX1yZXR1cm4gaXx8Y29uc29sZS53YXJuKFwiW3BoZW5vbV0gc2VsZWN0IG9wdGlvbiBkaWQgbm90IGNvbW1pdFwiLHtsYWJlbDplLmxhYmVsLHZhbHVlOnIsbWF0Y2hlZE9wdGlvbjp7dmFsdWU6by52YWx1ZSx0ZXh0Om8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIn0sY3VycmVudFZhbHVlOmVtKGUsbik/LnZhbHVlfHxcIlwifSksaX1hc3luYyBmdW5jdGlvbiByZihlLHQpe2xldCByPWUuJHJhZGlvUGFyZW50O2lmKCFyKXJldHVybiExO2xldCBuPVN0cmluZyh0Pz9cIlwiKS50cmltKCk7aWYoIW4pcmV0dXJuITE7bGV0IG89QXJyYXkuZnJvbShyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpKS5maW5kKGU9PiFlLmRpc2FibGVkJiZlTyhlLG4pKTtpZighbylyZXR1cm4gY29uc29sZS53YXJuKFwiW3BoZW5vbV0gcmFkaW8gb3B0aW9uIG5vdCBtYXRjaGVkXCIse2xhYmVsOmUubGFiZWwsdmFsdWU6bixvcHRpb25zOkFycmF5LmZyb20oci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKSkubWFwKGU9Pih7bGFiZWw6ZUQoZSksdmFsdWU6ZS52YWx1ZSxhcmlhTGFiZWw6ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlwifSkpfSksITE7YXdhaXQgZU0obyk7bGV0IGk9YXdhaXQgZU4obyk7aWYoIWkpe2xldCBlPWVfKG8pO2UmJihhd2FpdCBlTShlKSxpPWF3YWl0IGVOKGUpKX1yZXR1cm4gaXx8Y29uc29sZS53YXJuKFwiW3BoZW5vbV0gcmFkaW8gb3B0aW9uIGRpZCBub3QgY29tbWl0XCIse2xhYmVsOmUubGFiZWwsdmFsdWU6bixtYXRjaGVkT3B0aW9uOntsYWJlbDplRChvKSx2YWx1ZTpvLnZhbHVlLGFyaWFMYWJlbDpvLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCJ9fSksaX1hc3luYyBmdW5jdGlvbiBycChlLHQpe2xldCByPW5ldyBTZXQodC5tYXAoZT0+VShlKSkpLG49ZS4kY2hlY2tib3hzPy5maWx0ZXIoZT0+ZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpPz9BcnJheS5mcm9tKChlLiRpbnB1dD8/ZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpKTtpZigwPT09bi5sZW5ndGh8fDA9PT1yLnNpemUpcmV0dXJuITE7bGV0IGk9dC5zb21lKGU9PmVsKGUpKSxhPXQuc29tZShlPT5lcyhlKSksbD0xPT09bi5sZW5ndGg/blswXTpudWxsO2lmKGwpe2xldCBuPXtsYWJlbDplLmxhYmVsfSxzPVUoZWQobCkpLHU9VShlLmxhYmVsKSxjPUFycmF5LmZyb20ocikuc29tZShlPT57aWYoIWUpcmV0dXJuITE7bGV0IHQ9W3MsdV0uZmlsdGVyKEJvb2xlYW4pO3JldHVybiB0LnNvbWUodD0+ZT09PXR8fCgwLG8uaXNFeGFjdENob2ljZU1hdGNoKSh0LGUpKX0pLGQ9ISFpfHwhYSYmbnVsbCxmPWQ/PyghIWN8fG51bGwpO2lmKG51bGw9PT1mKXJldHVybiBjb25zb2xlLndhcm4oXCJbcGhlbm9tXSBzaW5nbGUgY2hlY2tib3ggdmFsdWUgbm90IG1hdGNoZWRcIix7bGFiZWw6ZS5sYWJlbCx2YWx1ZTp0LG9wdGlvbjpzfHx1fSksITE7bGV0IG09ZVYobCxuKTtpZighbSlyZXR1cm4hMTtlVyhtKSE9PWYmJmF3YWl0IGVaKG0sZixuKTtsZXQgaD1hd2FpdCAoMCxwLndhaXRGb3JDb25kaXRpb24pKCgpPT57bGV0IGU9ZVYobSxuKTtyZXR1cm4hIWUmJmVXKGUpPT09Zn0se3RpbWVvdXQ6OTAwLGludGVydmFsOjUwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pO3JldHVybiBofHxjb25zb2xlLndhcm4oXCJbcGhlbm9tXSBzaW5nbGUgY2hlY2tib3ggZGlkIG5vdCBjb21taXRcIix7bGFiZWw6ZS5sYWJlbCx2YWx1ZTp0LGNoZWNrZWQ6ZVcoZVYobSxuKSl9KSxofWxldCBzPTAsdT1bXTtmb3IobGV0IGUgb2Ygbil7bGV0IHQ9VShlZChlKSksbj17bGFiZWw6dH0saT1VKGUudmFsdWUpLGE9VShlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikpLGw9W3QsaSxhXS5maWx0ZXIoQm9vbGVhbiksYz1sLnNvbWUoZT0+ci5oYXMoZSkpfHxBcnJheS5mcm9tKHIpLnNvbWUoZT0+bC5zb21lKHQ9PigwLG8uaXNFeGFjdENob2ljZU1hdGNoKSh0LGUpKSk7aWYoYyl7cys9MSx1LnB1c2goZSk7bGV0IHQ9ZVYoZSxuKTt0JiYhZVcodCkmJmF3YWl0IGVaKHQsITAsbil9TyhlVihlLG4pKX1pZigwPT09cylyZXR1cm4gY29uc29sZS53YXJuKFwiW3BoZW5vbV0gY2hlY2tib3ggb3B0aW9ucyBub3QgbWF0Y2hlZFwiLHtsYWJlbDplLmxhYmVsLHZhbHVlOnQsb3B0aW9uczpuLm1hcChlPT4oe2xhYmVsOmVkKGUpLHZhbHVlOmUudmFsdWUsYXJpYUxhYmVsOmUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJcIn0pKX0pLCExO2xldCBjPWF3YWl0ICgwLHAud2FpdEZvckNvbmRpdGlvbikoKCk9PnUuZXZlcnkoZT0+e2xldCB0PWVWKGUse2xhYmVsOmVkKGUpfSk7cmV0dXJuISF0JiZlVyh0KX0pLHt0aW1lb3V0OjkwMCxpbnRlcnZhbDo1MCxvYnNlcnZlVGFyZ2V0OmRvY3VtZW50LmJvZHl9KTtyZXR1cm4gY3x8Y29uc29sZS53YXJuKFwiW3BoZW5vbV0gY2hlY2tib3ggb3B0aW9ucyBkaWQgbm90IGNvbW1pdFwiLHtsYWJlbDplLmxhYmVsLHZhbHVlOnQsc2VsZWN0ZWQ6dS5tYXAoZT0+ZVYoZSx7bGFiZWw6ZWQoZSl9KSkuZmlsdGVyKGU9PiEhZSYmZVcoZSkpLm1hcChlPT5lZChlKSl9KSxjfWZ1bmN0aW9uIHJtKCl7bGV0IGU9KDAsdi5nZXRGb3JtUm9vdCkoKTtpZighZSlyZXR1cm4gbnVsbDtsZXQgdD1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCh2LkNPTlRJTlVFX0JVVFRPTl9TRUxFQ1RPUikpO3JldHVybiB0LmZpbmQoZT0+e2lmKCEoZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXx8ZS5jbG9zZXN0KFwiI2pvYnJpZ2h0LWhlbHBlci1pZFwiKSlyZXR1cm4hMTtsZXQgdD1VKGUudGV4dENvbnRlbnR8fGUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil8fFwiXCIpLHI9VShlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIpLG49VShlLmdldEF0dHJpYnV0ZShcImlkXCIpfHxcIlwiKTtyZXR1cm5cIm5leHRcIj09PW58fFwiY29udGludWVcIj09PXJ8fFwiY29udGludWVcIj09PXR8fFwic3VibWl0XCI9PT10fHxcImFwcGx5XCI9PT10fSk/P251bGx9YXN5bmMgZnVuY3Rpb24gcmgoZSx0LHIpe2F3YWl0IHRoKCksYXdhaXQgdGcoKTtsZXQgbj1hd2FpdCBlMSgpO2lmKCFufHwhdHx8IXIpcmV0dXJuIGNvbnNvbGUubG9nKFwiW3BoZW5vbV0gcmVzdW1lIHVwbG9hZCBhYm9ydGVkOiBtaXNzaW5nIGlucHV0IG9yIGNhbGxiYWNrc1wiLHtoYXNGaWxlSW5wdXQ6ISFuLGhhc1VwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXM6ISF0LGhhc1VwZGF0ZUZpbGxlZFByb2dyZXNzOiEhcn0pLHt1cGxvYWRlZDohMSxwYXJzZXJSZWFkeTohMX07bGV0IG89ZWkoKTtjb25zb2xlLmxvZyhcIltwaGVub21dIHJlc3VtZSB1cGxvYWQgc3RhcnRcIix7aW5wdXRDb25uZWN0ZWQ6bi5pc0Nvbm5lY3RlZCxpbnB1dERpc2FibGVkOm4uZGlzYWJsZWQsaW5wdXREaXNwbGF5OndpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG4pLmRpc3BsYXksaGFzVXBsb2FkZWRTdGF0ZUJlZm9yZTp0cCgpLHRyaWdnZXJCdXR0b25DbGljazohMX0pLG4uZm9jdXMoKSxhd2FpdCBMKCksYXdhaXQgKDAsZi51cGxvYWRGaWxlcykobixhd2FpdCAoMCxkLmZldGNoUGRmQXNCbG9iKShlKSx0LHIsXCJSZXN1bWUvQ1ZcIiksbi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSksbi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImJsdXJcIix7YnViYmxlczohMH0pKSxPKG4pO2xldCBpPWF3YWl0ICgwLHAud2FpdEZvckNvbmRpdGlvbikoKCk9PnRwKCl8fCEhKG4uZmlsZXMmJm4uZmlsZXMubGVuZ3RoPjApLHt0aW1lb3V0OjVlMyxpbnRlcnZhbDoxMDAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSksYT0hIShuLmZpbGVzJiZuLmZpbGVzLmxlbmd0aD4wKSxsPXRwKCl8fGE7aWYoY29uc29sZS5sb2coXCJbcGhlbm9tXSByZXN1bWUgdXBsb2FkIHNldHRsZWRcIix7dXBsb2FkU2V0dGxlZDppLHVwbG9hZFN1Y2NlZWRlZDpsLGhhc1dyYXBwZXI6ISFlMygpLGhhc0J1dHRvbjohIXR1KCksaGFzSW5wdXQ6ISFuLGlucHV0RmlsZUNvdW50Om4uZmlsZXM/Lmxlbmd0aD8/MCxoYXNTZWxlY3RlZEZpbGU6YSxoYXNVcGxvYWRlZExpbms6ISF0ZCgpLGhhc0RlbGV0ZUJ1dHRvbjohIXRjKCl9KSwhbClyZXR1cm4gY29uc29sZS5sb2coXCJbcGhlbm9tXSByZXN1bWUgdXBsb2FkIGRpZCBub3QgcmVhY2ggdXBsb2FkZWQgRE9NIHN0YXRlXCIpLHt1cGxvYWRlZDohMSxwYXJzZXJSZWFkeTohMX07bGV0IHM9IW98fGF3YWl0IGVhKG8pO3JldHVybiBzfHxjb25zb2xlLndhcm4oXCJbcGhlbm9tXSByZXN1bWUgdXBsb2FkIGNvbXBsZXRlZCBiZWZvcmUgQ2lzY28gcGFyc2VyIHdhcyByZWFkeVwiKSx7dXBsb2FkZWQ6ITAscGFyc2VyUmVhZHk6c319YXN5bmMgZnVuY3Rpb24gcmcoZSx0LHIpe2F3YWl0IHRzKCk7bGV0IG49ZTkoKTtpZighbnx8IXR8fCFyKXJldHVybiBjb25zb2xlLmxvZyhcIltwaGVub21dIGNvdmVyIGxldHRlciB1cGxvYWQgYWJvcnRlZDogbWlzc2luZyBpbnB1dCBvciBjYWxsYmFja3NcIix7aGFzRmlsZUlucHV0OiEhbixoYXNVcGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzOiEhdCxoYXNVcGRhdGVGaWxsZWRQcm9ncmVzczohIXJ9KSwhMTtsZXQgbz10bigpLGk9SShlKSxhPWF3YWl0ICgwLGQuZmV0Y2hDb3ZlckxldHRlclBkZkFzQmxvYikoaSksbD10aShhKXx8aS5jb3ZlckxldHRlck5hbWU7bi5mb2N1cygpLGF3YWl0IEwoKSxhd2FpdCAoMCxmLnVwbG9hZEZpbGVzKShuLGEsKCk9PnZvaWQgMCwoKT0+dm9pZCAwLFwiQ292ZXIgTGV0dGVyXCIpLG4uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLG4uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJibHVyXCIse2J1YmJsZXM6ITB9KSksTyhuKTtsZXQgcz1hd2FpdCAoMCxwLndhaXRGb3JDb25kaXRpb24pKCgpPT50byhsLG8pLHt0aW1lb3V0OjVlMyxpbnRlcnZhbDoxMDAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSksdT0hIShuLmZpbGVzJiZuLmZpbGVzLmxlbmd0aD4wKSxjPXRvKGwsbyk7cmV0dXJuKGNvbnNvbGUubG9nKFwiW3BoZW5vbV0gY292ZXIgbGV0dGVyIHVwbG9hZCBzZXR0bGVkXCIse3VwbG9hZFNldHRsZWQ6cyx1cGxvYWRTdWNjZWVkZWQ6YyxoYXNJbnB1dDohIW4saW5wdXRGaWxlQ291bnQ6bi5maWxlcz8ubGVuZ3RoPz8wLGhhc1NlbGVjdGVkRmlsZTp1LGhhc1VwbG9hZGVkTGluazohIXRlKCksaGFzRGVsZXRlQnV0dG9uOiEhZTcoKX0pLGMpPyh0KHtsYWJlbDpcIkNvdmVyIExldHRlclwiLHJlcXVpcmVkOiEwfSkscihcIkNvdmVyIExldHRlclwiKSxhd2FpdCAoMCxnLmRlbGF5KSgyMDApLCEwKTooY29uc29sZS5sb2coXCJbcGhlbm9tXSBjb3ZlciBsZXR0ZXIgdXBsb2FkIGRpZCBub3QgcmVhY2ggdXBsb2FkZWQgRE9NIHN0YXRlXCIpLCExKX1mdW5jdGlvbiByYihlKXtyZXR1cm4oMCx2LmdldENvbXBvc2l0ZUl0ZW1GaWVsZHNldHMpKGUpLmxlbmd0aH1hc3luYyBmdW5jdGlvbiByeShlKXtsZXQgdD0oMCx2LmdldEFycmF5Q29udGFpbmVyKShlKTtpZighdHx8cmIodCk+MClyZXR1cm47bGV0IHI9dC5xdWVyeVNlbGVjdG9yKFwiLm1vcmUtYWN0aW9ucyAuYXJyYXktYnV0dG9uLWFkZFwiKTtyJiZhd2FpdCBydih0KX1hc3luYyBmdW5jdGlvbiBydihlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCIubW9yZS1hY3Rpb25zIC5hcnJheS1idXR0b24tYWRkXCIpO2lmKCF0KXJldHVybjtsZXQgcj1yYihlKTt0LmNsaWNrKCk7bGV0IG49MDtmb3IoO248MzA7KXthd2FpdCAoMCxnLmRlbGF5KSgxMDApO2xldCB0PXJiKGUpO2lmKHQ+cilicmVhaztuKz0xfWF3YWl0ICgwLGcuZGVsYXkpKDIwMCl9YXN5bmMgZnVuY3Rpb24gcncoZSx0LHIsbixvLGkpe2xldCBhPSgwLHYuZ2V0QXJyYXlDb250YWluZXIpKHQpO2lmKCFhfHwwPT09ZS5sZW5ndGgpcmV0dXJuO2xldCBsPXJiKGEpLHM9TWF0aC5tYXgoMCxlLmxlbmd0aC1sKTtmb3IobGV0IGU9MDtlPHM7ZSs9MSlhd2FpdCBydihhKTtsZXQgdT1hd2FpdCAoMCx2LmdldENvbXBvc2l0ZVJ1bGVzKSh0KTtpZigoMCxoLnNldFNlY3Rpb25SZXN1bHRGb2N1c1J1bGVzKSh0LHUpLDA9PT11Lmxlbmd0aClyZXR1cm47bGV0IGM9dD09PW0uRklFTERfVFlQRS5FRFVDQVRJT04/KDAsZC5nZXRFZHVjYXRpb25PcGVyYXRpb25zKSh1LGUscixvLGksbz97d3JhcFRyYW5zZm9ybWVkRmllbGRXaXRoU2tpcDohMH06dm9pZCAwKTooMCxkLmdldEVtcGxveW1lbnRPcGVyYXRpb25zKSh1LGUscix2b2lkIDAsaSk7Zm9yKGxldCBlIG9mIGMpbi5hZGQoZSk7YXdhaXQgbi5ydW4oKX1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6Im9wZXJhdGlvbnMuMjNlODgzZDMuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);