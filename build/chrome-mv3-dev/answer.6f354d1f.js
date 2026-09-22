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
})({"icDha":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\rippling\\answer.js",
    "bundleId": "8f1637156f354d1f",
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
var j = z(require("d48b3d23b5cddcdc"));
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

},{"d48b3d23b5cddcdc":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"46Ubs":[function(require,module,exports) {
/**
 * Parcel module id: ULrZj
 * Resolved path: src/contents/sites/rippling/answer.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/shared/filler -> 2aGsX  =>  src/contents/shared/filler.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "createOperationHandlerFactory", ()=>u), n.export(r, "getEducationOperations", ()=>d), n.export(r, "getEmploymentOperations", ()=>f);
var o = e("~contents/shared/filler"), i = e("~contents/methods/answer"), a = e("~contents/methods/cancellation"), l = e("~core/dom"), s = e("~core/enums");
function u(e1, t) {
    return function(r1, n = {
        expectArray: !1
    }) {
        return async (a, l, s = !0)=>{
            try {
                let t = (0, i.findValueInRecord)(a.label, l), o = n.expectArray ? (0, i.ensureArray)(t) : t;
                await r1(a, o), s && e1(a.label);
            } catch (e1) {
                o.ValueError, s && t(a.label);
            }
        };
    };
}
function c(e1, t, r1, n) {
    let o = (0, i.createSectionResultReporter)(e1, n);
    o.setLabel(t.label);
    let s = [];
    return (n, u, c)=>(s[c] = {
            ...t,
            children: n
        }, (0, l.setSectionResultFocusRules)(e1, s.slice()), n.map((e1)=>async ()=>{
                let t;
                let n = o.ensureRow(c, u);
                try {
                    let r1 = (0, i.findValueInRecord)(e1.label, u);
                    t = Array.isArray(r1) ? r1.join(", ") : r1;
                } catch  {}
                o.updateField(n, e1.label, t, "pending"), o.emit();
                try {
                    let i = r1[e1.type], a = await i?.(e1, u, !1);
                    o.updateField(n, e1.label, t, i && !1 !== a && void 0 !== t ? "filled" : "missed"), o.emit();
                } catch (r1) {
                    throw o.updateField(n, e1.label, t, r1 instanceof a.SkippedError ? "skipped" : "missed"), o.emit(), r1;
                }
            }));
}
function d(e1, t, r1, n) {
    let o = [], i = e1.filter((e1)=>e1.type === s.FIELD_TYPE.EDUCATION);
    if (0 === i.length) return o;
    let a = i[0], l = c("education", a, r1, n), u = a.children || [], d = new Map, f = [];
    for (let e1 of u){
        let t = e1.$input;
        if (!t) {
            f.push(e1);
            continue;
        }
        let r1 = t.id || "", n = t.name || "", o = (r1 + n).match(/\.response\.(\d+)\./) || (r1 + n).match(/response\.(\d+)\./) || (r1 + n).match(/\[(\d+)\]/) || (r1 + n).match(/--(\d+)/) || (r1 + n).match(/-(\d+)-/);
        if (o) {
            let t = parseInt(o[1], 10);
            d.has(t) || d.set(t, []), d.get(t).push(e1);
        } else f.push(e1);
    }
    if (0 === d.size && f.length > 0) {
        let e1 = new Map;
        for (let t of u){
            let r1 = t.label;
            e1.set(r1, (e1.get(r1) || 0) + 1);
        }
        let r1 = Math.max(...Array.from(e1.values()), 1), n = Math.ceil(u.length / r1);
        for(let e1 = 0; e1 < t.length; e1++){
            let r1 = e1 * n, i = Math.min(r1 + n, u.length), a = u.slice(r1, i), s = t[e1];
            s && a.length > 0 && o.push(...l(a, s, e1));
        }
    } else if (Array.from(d.keys()).sort((e1, t)=>e1 - t), 1 === d.size && t.length > 1) {
        let e1 = t.length, r1 = Math.floor(u.length / e1);
        for(let e1 = 0; e1 < t.length; e1++){
            let n = t[e1];
            if (!n) continue;
            let i = [], a = document.querySelector("form#job-application-form");
            if (a) {
                let t = Array.from(document.querySelectorAll("h3")), r1 = t.find((e1)=>e1.textContent?.trim() === "Education"), n = Array.from(document.querySelectorAll("button")).find((e1)=>{
                    let t = e1.textContent?.trim() || "", r1 = e1.getAttribute("aria-label") || "";
                    return t.includes("Add More Education History") || r1.includes("Add More Education History");
                });
                if (r1 && n) {
                    let t = Array.from(a.querySelectorAll("input, textarea, select"));
                    for (let o of t){
                        let t = r1.compareDocumentPosition(o), a = (t & Node.DOCUMENT_POSITION_FOLLOWING) != 0, l = o.compareDocumentPosition(n), s = (l & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
                        if (a && s) {
                            let t = o.id || "", r1 = o.name || "", n = (t + r1).match(/\.response\.(\d+)\./) || (t + r1).match(/response\.(\d+)\./) || (t + r1).match(/\[(\d+)\]/) || (t + r1).match(/--(\d+)/) || (t + r1).match(/-(\d+)-/);
                            if (n) {
                                let t = parseInt(n[1], 10);
                                if (t === e1) {
                                    let e1 = o.getAttribute("aria-labelledby") && document.getElementById(o.getAttribute("aria-labelledby") || "") || o.id && document.querySelector(`label[for="${o.id}"]`) || o.closest("label");
                                    if (e1) {
                                        let t = (e1.textContent || "").trim().replace(/\s*\(required\)\s*/gi, "").trim(), r1 = u.find((e1)=>e1.label === t);
                                        if (r1) {
                                            let t = {
                                                ...r1,
                                                $input: o,
                                                $label: e1
                                            };
                                            i.push(t);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (0 === i.length) {
                let n = e1 * r1, o = e1 === t.length - 1 ? u.length : n + r1;
                i.push(...u.slice(n, o));
            }
            i.length > 0 && o.push(...l(i, n, e1));
        }
    } else for(let e1 = 0; e1 < t.length; e1++){
        let r1 = t[e1], n = d.get(e1) || [];
        r1 && n.length > 0 && o.push(...l(n, r1, e1));
    }
    return o;
}
function f(e1, t, r1, n) {
    let o = [], i = e1.filter((e1)=>e1.type === s.FIELD_TYPE.EMPLOYMENT);
    if (0 === i.length) return o;
    let a = i[0], l = c("employment", a, r1, n), u = a.children || [], d = new Map, f = [];
    for (let e1 of u){
        let t = e1.$input;
        if (!t) {
            f.push(e1);
            continue;
        }
        let r1 = t.id || "", n = t.name || "", o = (r1 + n).match(/\.response\.(\d+)\./) || (r1 + n).match(/response\.(\d+)\./) || (r1 + n).match(/\[(\d+)\]/) || (r1 + n).match(/--(\d+)/) || (r1 + n).match(/-(\d+)-/);
        if (o) {
            let t = parseInt(o[1], 10);
            d.has(t) || d.set(t, []), d.get(t).push(e1);
        } else f.push(e1);
    }
    if (0 === d.size && f.length > 0) {
        let e1 = new Map;
        for (let t of u){
            let r1 = t.label;
            e1.set(r1, (e1.get(r1) || 0) + 1);
        }
        let r1 = Math.max(...Array.from(e1.values()), 1), n = Math.ceil(u.length / r1);
        for(let e1 = 0; e1 < t.length; e1++){
            let r1 = e1 * n, i = Math.min(r1 + n, u.length), a = u.slice(r1, i), s = t[e1];
            s && a.length > 0 && o.push(...l(a, s, e1));
        }
    } else if (Array.from(d.keys()).sort((e1, t)=>e1 - t), 1 === d.size && t.length > 1) {
        let e1 = t.length, r1 = Math.floor(u.length / e1);
        for(let e1 = 0; e1 < t.length; e1++){
            let n = t[e1];
            if (!n) continue;
            let i = [], a = document.querySelector("form#job-application-form");
            if (a) {
                let t = Array.from(document.querySelectorAll("h3")), r1 = t.find((e1)=>e1.textContent?.trim() === "Employment History"), n = Array.from(document.querySelectorAll("button")).find((e1)=>{
                    let t = e1.textContent?.trim() || "", r1 = e1.getAttribute("aria-label") || "";
                    return t.includes("Add Another Position") || r1.includes("Add Another Position");
                });
                if (r1 && n) {
                    let t = Array.from(a.querySelectorAll("input, textarea, select"));
                    for (let o of t){
                        let t = r1.compareDocumentPosition(o), a = (t & Node.DOCUMENT_POSITION_FOLLOWING) != 0, l = o.compareDocumentPosition(n), s = (l & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
                        if (a && s) {
                            let t = o.id || "", r1 = o.name || "", n = (t + r1).match(/\.response\.(\d+)\./) || (t + r1).match(/response\.(\d+)\./) || (t + r1).match(/\[(\d+)\]/) || (t + r1).match(/--(\d+)/) || (t + r1).match(/-(\d+)-/);
                            if (n) {
                                let t = parseInt(n[1], 10);
                                if (t === e1) {
                                    let e1 = o.getAttribute("aria-labelledby") && document.getElementById(o.getAttribute("aria-labelledby") || "") || o.id && document.querySelector(`label[for="${o.id}"]`) || o.closest("label");
                                    if (e1) {
                                        let t = (e1.textContent || "").trim().replace(/\s*\(required\)\s*/gi, "").trim(), r1 = u.find((e1)=>e1.label === t);
                                        if (r1) {
                                            let t = {
                                                ...r1,
                                                $input: o,
                                                $label: e1
                                            };
                                            i.push(t);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (0 === i.length) {
                let n = e1 * r1, o = e1 === t.length - 1 ? u.length : n + r1, a = u.slice(n, o), l = document.querySelector("form#job-application-form");
                if (l) {
                    let t = Array.from(document.querySelectorAll("h3")), r1 = t.find((e1)=>e1.textContent?.trim() === "Employment History"), n = Array.from(document.querySelectorAll("button")).find((e1)=>{
                        let t = e1.textContent?.trim() || "", r1 = e1.getAttribute("aria-label") || "";
                        return t.includes("Add Another Position") || r1.includes("Add Another Position");
                    });
                    if (r1 && n) {
                        let t = Array.from(l.querySelectorAll("input, textarea, select"));
                        for (let o of a){
                            let a = o.label, l = null, s = 0;
                            for (let o of t){
                                let t = r1.compareDocumentPosition(o), i = (t & Node.DOCUMENT_POSITION_FOLLOWING) != 0, u = o.compareDocumentPosition(n), c = (u & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
                                if (i && c) {
                                    let t = o.getAttribute("aria-labelledby") && document.getElementById(o.getAttribute("aria-labelledby") || "") || o.id && document.querySelector(`label[for="${o.id}"]`) || o.closest("label");
                                    if (t) {
                                        let r1 = (t.textContent || "").trim().replace(/\s*\(required\)\s*/gi, "").trim();
                                        if (r1 === a && ++s === e1 + 1) {
                                            l = o;
                                            break;
                                        }
                                    }
                                }
                            }
                            if (l) {
                                let e1 = l.getAttribute("aria-labelledby") && document.getElementById(l.getAttribute("aria-labelledby") || "") || l.id && document.querySelector(`label[for="${l.id}"]`) || l.closest("label"), t = {
                                    ...o,
                                    $input: l,
                                    $label: e1
                                };
                                i.push(t);
                            } else i.push(o);
                        }
                    } else i.push(...a);
                } else i.push(...a);
            }
            i.length > 0 && o.push(...l(i, n, e1));
        }
    } else for(let e1 = 0; e1 < t.length; e1++){
        let r1 = t[e1], n = d.get(e1) || [];
        r1 && n.length > 0 && o.push(...l(n, r1, e1));
    }
    return o;
}

},{}]},["icDha","46Ubs"], "46Ubs", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFnQixLQUFLO1FBQUM7UUFBRTtLQUFFLEdBQUUsQ0FBQyxLQUFHLEVBQUUsT0FBSyxFQUFFLElBQUksaUJBQWlCLFNBQVEsQ0FBQSxFQUFFLGVBQWUsS0FBSztRQUFDO1FBQUU7S0FBRSxHQUFFLENBQUMsQ0FBQSxJQUFHLENBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBQyxTQUFRLENBQUMsRUFBQyxHQUFDO0lBQUUsT0FBTyxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsSUFBRyxFQUFFLFNBQU8sUUFBTSxPQUFPLFdBQVMsS0FBSSxPQUFPLElBQUksUUFBUSxDQUFDLEdBQUU7UUFBSyxJQUFJLElBQUUsU0FBUyxjQUFjO1FBQVUsRUFBRSxNQUFJLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLEtBQUssTUFBTSxDQUFDLEVBQUMsRUFBRSxpQkFBZSxjQUFhLENBQUEsRUFBRSxPQUFLLFFBQU8sR0FBRyxFQUFFLGlCQUFpQixRQUFPLElBQUksRUFBRSxLQUFJLEVBQUUsaUJBQWlCLFNBQVEsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLDBCQUEwQixFQUFFLEVBQUUsR0FBRyxDQUFDLEtBQUksU0FBUyxNQUFNLFlBQVk7SUFBRTtBQUFFO0FBQUMsZUFBZSxFQUFFLENBQUM7SUFBRSxPQUFPLGtCQUFnQixPQUFPLE9BQU8sT0FBTSxFQUFFLFFBQVEsQ0FBQTtRQUFJLEVBQUUsTUFBSSxFQUFFLFFBQVEsT0FBTywrQkFBNkIsbUJBQW1CLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLEtBQUssTUFBTSxDQUFDO0lBQUU7SUFBRyxJQUFJLElBQUUsTUFBTSxRQUFRLElBQUksRUFBRSxJQUFJO0lBQUssSUFBRztRQUFDLEVBQUUsUUFBUSxTQUFTLENBQUM7WUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1FBQUU7SUFBRSxTQUFRO1FBQUMsT0FBTyxPQUFPLGlCQUFnQixLQUFHLEVBQUUsUUFBUSxDQUFBO1lBQUksS0FBRyxTQUFTLE1BQU0sWUFBWTtRQUFFO0lBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUU7SUFBWSxFQUFFLFNBQU87UUFBVyxFQUFFLGVBQWEsUUFBTSxFQUFFLFdBQVcsWUFBWTtJQUFFLEdBQUUsRUFBRSxhQUFhLFFBQU8sRUFBRSxhQUFhLFFBQVEsTUFBTSxJQUFJLENBQUMsRUFBRSxHQUFDLE1BQUksS0FBSyxRQUFPLEVBQUUsV0FBVyxhQUFhLEdBQUUsRUFBRTtBQUFZO0FBQUMsSUFBSSxJQUFFO0FBQUssU0FBUztJQUFLLEtBQUksQ0FBQSxJQUFFLFdBQVc7UUFBVyxJQUFJLElBQUUsU0FBUyxpQkFBaUI7UUFBMEIsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJO1lBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxTQUFRLElBQUUsS0FBSSxJQUFFLE1BQUksY0FBWSxJQUFJLE9BQU8sbURBQWlELEtBQUssS0FBSyxLQUFHLEVBQUUsUUFBUSxJQUFFLE1BQUk7WUFBSyxnQkFBZ0IsS0FBSyxNQUFJLEVBQUUsUUFBUSxTQUFTLFlBQVUsS0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUFDO1FBQUMsSUFBRTtJQUFJLEdBQUUsR0FBRTtBQUFFO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLEdBQUU7UUFBQyxJQUFHLEVBQUUsU0FBTyxPQUFNO2FBQVUsSUFBRyxFQUFFLFNBQU8sTUFBSztZQUFDLElBQUksSUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFLGNBQWM7WUFBQyxJQUFHLEdBQUU7Z0JBQUMsSUFBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUM7b0JBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO29CQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBRyxDQUFDLENBQUMsRUFBRSxFQUFDO3dCQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRTt3QkFBQyxFQUFFLE9BQU8sT0FBTyxNQUFLLEdBQUcsV0FBUyxLQUFHLEVBQUUsT0FBTyxPQUFPLE1BQUs7b0JBQUU7Z0JBQUM7Z0JBQUMsSUFBSSxJQUFFLE9BQU8sZUFBZSxDQUFDLEVBQUUsR0FBRztnQkFBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUM7b0JBQUM7b0JBQUU7aUJBQUU7WUFBQSxPQUFNLEVBQUUsVUFBUSxFQUFFLEVBQUUsUUFBTztRQUFFO0lBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFO0lBQVEsSUFBRztRQUFFLElBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBQztZQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxJQUFFLEVBQUU7WUFBQyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsT0FBTyxPQUFPLE1BQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFTLEtBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsUUFBUSxDQUFBO2dCQUFJLEVBQUUsT0FBTyxPQUFPLE1BQUs7WUFBRTtRQUFFLE9BQU0sRUFBRSxVQUFRLEVBQUUsRUFBRSxRQUFPOztBQUFFO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7SUFBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFFLEtBQUcsRUFBRSxPQUFNLENBQUEsRUFBRSxJQUFJLE9BQUssRUFBRSxPQUFPLENBQUMsRUFBRSxBQUFELEdBQUcsS0FBRyxFQUFFLE9BQUssRUFBRSxJQUFJLGtCQUFrQixVQUFRLEVBQUUsSUFBSSxrQkFBa0IsUUFBUSxTQUFTLENBQUM7UUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7SUFBQyxJQUFHLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsRUFBRTtJQUFHLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsSUFBRyxLQUFHLEVBQUUsT0FBSyxFQUFFLElBQUksaUJBQWlCLFFBQU87UUFBQyxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSztRQUFHLEVBQUUsSUFBSSxpQkFBaUIsUUFBUSxTQUFTLENBQUM7WUFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO1lBQUcsS0FBRyxFQUFFLFVBQVMsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUUsRUFBRTtnQkFBSSxFQUFFLEdBQUU7WUFBRSxJQUFHLEVBQUUsZUFBZSxLQUFLLE1BQU0sRUFBRSxnQkFBZSxFQUFDO1FBQUU7SUFBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLElBQUUsR0FBRztJQUFFLElBQUksSUFBRTtJQUFJLE9BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBUSxTQUFTLGFBQVcsWUFBVSxDQUFDLDhCQUE4QixLQUFLLEtBQUcsUUFBTSxLQUFLLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUFBO0FBQUMsU0FBUyxHQUFHLENBQUM7SUFBRSxPQUFPLEVBQUUsV0FBUyxZQUFVLEVBQUUsOEJBQTRCLEVBQUU7QUFBUTtBQUFDLFNBQVMsRUFBRSxDQUFDO0lBQUUsSUFBRyxPQUFPLFdBQVcsWUFBVSxLQUFJO0lBQU8sSUFBSSxJQUFFLElBQUksVUFBVTtJQUFNLE9BQU8sRUFBRSxpQkFBaUIsV0FBVSxlQUFlLENBQUM7UUFBRSxJQUFJLElBQUUsS0FBSyxNQUFNLEVBQUU7UUFBTSxJQUFHLEVBQUUsU0FBTyxZQUFVLE1BQU0sRUFBRSxFQUFFLFNBQVEsRUFBRSxTQUFPLFNBQVEsS0FBSSxJQUFJLEtBQUssRUFBRSxZQUFZLEtBQUs7WUFBQyxJQUFJLElBQUUsRUFBRSxhQUFXLEVBQUU7WUFBTSxFQUFFLDhCQUE0QixFQUFFLFVBQVEsQ0FBQztBQUNyM0wsQ0FBQyxHQUFDLElBQUUsQ0FBQzs7QUFFTCxDQUFDLEdBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNoQixDQUFDO1FBQUU7SUFBQyxJQUFHLEVBQUUsaUJBQWlCLFNBQVEsS0FBSSxFQUFFLGlCQUFpQixRQUFPO1FBQUssRUFBRSxDQUFDLHFEQUFxRCxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRyxFQUFFLGlCQUFpQixTQUFRO1FBQUssRUFBRSxDQUFDLG9FQUFvRSxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRztBQUFDO0FBQUMsSUFBSSxJQUFFLEVBQUUsUUFBUTtBQUEwQixlQUFlO0lBQUksRUFBRSxRQUFRLHFCQUFxQixTQUFRLE9BQU8sZUFBYSxZQUFXLEdBQUUsT0FBTyxlQUFhO1FBQVcsT0FBTyxTQUFTLENBQUM7WUFBRSxPQUFPO1FBQUM7SUFBQztBQUFDO0FBQUMsSUFBSSxLQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFDLEdBQUUsSUFBRSxPQUFPLE9BQU87QUFBTyxJQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsaUJBQWdCO0lBQUMsSUFBRztRQUFDLElBQUUsR0FBRyxRQUFRLFFBQVE7WUFBQyxNQUFLO1FBQUUsSUFBRyxFQUFFLGFBQWEsWUFBWTtZQUFLO1FBQUcsSUFBRyxFQUFFLFdBQVMsRUFBRSxVQUFVLFlBQVk7WUFBSztRQUFHO0lBQUUsRUFBQyxPQUFNLEdBQUU7UUFBQyxFQUFFO0lBQUU7SUFBQyxFQUFFLE9BQU07UUFBSSxJQUFHLEVBQUUsaUNBQWdDLEVBQUUsU0FBUTtZQUFDO1lBQUksSUFBSSxJQUFFLEVBQUUsT0FBTyxDQUFBLElBQUcsRUFBRSxZQUFVLEVBQUU7WUFBUyxJQUFHLEVBQUUsS0FBSyxDQUFBLElBQUcsRUFBRSxTQUFPLFNBQU8sRUFBRSxTQUFPLFFBQU0sRUFBRSxPQUFPLE9BQU8sTUFBSyxFQUFFLElBQUcsRUFBRSxnQkFBZSxJQUFHO2dCQUFDLE1BQU0sRUFBRTtnQkFBRyxJQUFJLElBQUUsQ0FBQztnQkFBRSxLQUFJLElBQUcsQ0FBQyxHQUFFLEVBQUUsSUFBRyxFQUFFLGdCQUFnQixDQUFDLENBQUMsRUFBRSxJQUFHLENBQUEsRUFBRSxHQUFFLElBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUE7Z0JBQUcsSUFBSSxJQUFFLENBQUM7Z0JBQUUsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsZUFBZSxRQUFPLElBQUk7b0JBQUMsSUFBRyxDQUFDLEdBQUUsRUFBRSxHQUFDLEVBQUUsY0FBYyxDQUFDLEVBQUU7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBRyxDQUFBLEVBQUUsR0FBRSxJQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFBO2dCQUFFO1lBQUMsRUFBQyxPQUFNLEdBQUU7Z0JBQUMsRUFBRSxZQUFVLFVBQVMsQ0FBQSxRQUFRLE1BQU0sSUFBRyxNQUFNLEtBQUssVUFBVSxHQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7WUFBRTtRQUFDLE9BQUs7WUFBQyxJQUFJLElBQUUsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFlBQVUsRUFBRSxTQUFTLEtBQUssQ0FBQSxJQUFHLEVBQUUsT0FBTyxRQUFPLEVBQUU7WUFBSyxFQUFFLGtCQUFpQjtnQkFBQyxlQUFjO1lBQUMsSUFBRyxLQUFHLEVBQUUsWUFBWTtnQkFBQyx5QkFBd0IsQ0FBQztZQUFDO1FBQUU7SUFBQztBQUFFO0FBQUMsRUFBRSxXQUFVLENBQUEsRUFBRSw0QkFBMkIsR0FBRTs7O0FDSjMwQyxJQUFJLEtBQUcsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxLQUFHLE9BQU87QUFBeUIsSUFBSSxLQUFHLE9BQU87QUFBb0IsSUFBSSxLQUFHLE9BQU8sZ0JBQWUsS0FBRyxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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LEVBQUUsTUFBSSxJQUFHLElBQUUsRUFBRSxRQUFNLElBQUcsSUFBRSxBQUFDLENBQUEsS0FBRSxDQUFBLEVBQUcsTUFBTSwwQkFBd0IsQUFBQyxDQUFBLEtBQUUsQ0FBQSxFQUFHLE1BQU0sd0JBQXNCLEFBQUMsQ0FBQSxLQUFFLENBQUEsRUFBRyxNQUFNLGdCQUFjLEFBQUMsQ0FBQSxLQUFFLENBQUEsRUFBRyxNQUFNLGNBQVksQUFBQyxDQUFBLEtBQUUsQ0FBQSxFQUFHLE1BQU07UUFBVyxJQUFHLEdBQUU7WUFBQyxJQUFJLElBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFDO1lBQUksRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUUsRUFBRSxHQUFFLEVBQUUsSUFBSSxHQUFHLEtBQUs7UUFBRSxPQUFNLEVBQUUsS0FBSztJQUFFO0lBQUMsSUFBRyxNQUFJLEVBQUUsUUFBTSxFQUFFLFNBQU8sR0FBRTtRQUFDLElBQUksS0FBRSxJQUFJO1FBQUksS0FBSSxJQUFJLEtBQUssRUFBRTtZQUFDLElBQUksS0FBRSxFQUFFO1lBQU0sR0FBRSxJQUFJLElBQUUsQUFBQyxDQUFBLEdBQUUsSUFBSSxPQUFJLENBQUEsSUFBRztRQUFFO1FBQUMsSUFBSSxLQUFFLEtBQUssT0FBTyxNQUFNLEtBQUssR0FBRSxXQUFVLElBQUcsSUFBRSxLQUFLLEtBQUssRUFBRSxTQUFPO1FBQUcsSUFBSSxJQUFJLEtBQUUsR0FBRSxLQUFFLEVBQUUsUUFBTyxLQUFJO1lBQUMsSUFBSSxLQUFFLEtBQUUsR0FBRSxJQUFFLEtBQUssSUFBSSxLQUFFLEdBQUUsRUFBRSxTQUFRLElBQUUsRUFBRSxNQUFNLElBQUUsSUFBRyxJQUFFLENBQUMsQ0FBQyxHQUFFO1lBQUMsS0FBRyxFQUFFLFNBQU8sS0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFFLEdBQUU7UUFBRztJQUFDLE9BQU0sSUFBRyxNQUFNLEtBQUssRUFBRSxRQUFRLEtBQUssQ0FBQyxJQUFFLElBQUksS0FBRSxJQUFHLE1BQUksRUFBRSxRQUFNLEVBQUUsU0FBTyxHQUFF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QUFFO2dDQUFDLElBQUksS0FBRSxFQUFFLGFBQWEsc0JBQW9CLFNBQVMsZUFBZSxFQUFFLGFBQWEsc0JBQW9CLE9BQUssRUFBRSxNQUFJLFNBQVMsY0FBYyxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUcsRUFBRSxRQUFRLFVBQVMsSUFBRTtvQ0FBQyxHQUFHLENBQUM7b0NBQUMsUUFBTztvQ0FBRSxRQUFPO2dDQUFDO2dDQUFFLEVBQUUsS0FBSzs0QkFBRSxPQUFNLEVBQUUsS0FBSzt3QkFBRTtvQkFBQyxPQUFNLEVBQUUsUUFBUTtnQkFBRSxPQUFNLEVBQUUsUUFBUTtZQUFFO1lBQUMsRUFBRSxTQUFPLEtBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRSxHQUFFO1FBQUc7SUFBQyxPQUFNLElBQUksSUFBSSxLQUFFLEdBQUUsS0FBRSxFQUFFLFFBQU8sS0FBSTtRQUFDLElBQUksS0FBRSxDQUFDLENBQUMsR0FBRSxFQUFDLElBQUUsRUFBRSxJQUFJLE9BQUksRUFBRTtRQUFDLE1BQUcsRUFBRSxTQUFPLEtBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRSxJQUFFO0lBQUc7SUFBQyxPQUFPO0FBQUMiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTE4MGQ2Yjk0NDE4MzJmZjUuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvcmlwcGxpbmcvYW5zd2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXHJpcHBsaW5nXFxcXGFuc3dlci5qc1wiLFwiYnVuZGxlSWRcIjpcIjhmMTYzNzE1NmYzNTRkMWZcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiBVTHJaalxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvcmlwcGxpbmcvYW5zd2VyLmpzXHJcbiAqIERlcGVuZGVuY2llczpcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Fuc3dlciAtPiA3VDVlVyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvbiAtPiBsdUpmcyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvbi5qc1xyXG4gKiAgIH5jb250ZW50cy9zaGFyZWQvZmlsbGVyIC0+IDJhR3NYICA9PiAgc3JjL2NvbnRlbnRzL3NoYXJlZC9maWxsZXIuanNcclxuICogICB+Y29yZS9kb20gLT4gaExNSlggID0+ICBzcmMvY29yZS9kb20uanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqL1xyXG5cclxudmFyIG49ZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7bi5kZWZpbmVJbnRlcm9wRmxhZyhyKSxuLmV4cG9ydChyLFwiY3JlYXRlT3BlcmF0aW9uSGFuZGxlckZhY3RvcnlcIiwoKT0+dSksbi5leHBvcnQocixcImdldEVkdWNhdGlvbk9wZXJhdGlvbnNcIiwoKT0+ZCksbi5leHBvcnQocixcImdldEVtcGxveW1lbnRPcGVyYXRpb25zXCIsKCk9PmYpO3ZhciBvPWUoXCJ+Y29udGVudHMvc2hhcmVkL2ZpbGxlclwiKSxpPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXJcIiksYT1lKFwifmNvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uXCIpLGw9ZShcIn5jb3JlL2RvbVwiKSxzPWUoXCJ+Y29yZS9lbnVtc1wiKTtmdW5jdGlvbiB1KGUsdCl7cmV0dXJuIGZ1bmN0aW9uKHIsbj17ZXhwZWN0QXJyYXk6ITF9KXtyZXR1cm4gYXN5bmMoYSxsLHM9ITApPT57dHJ5e2xldCB0PSgwLGkuZmluZFZhbHVlSW5SZWNvcmQpKGEubGFiZWwsbCksbz1uLmV4cGVjdEFycmF5PygwLGkuZW5zdXJlQXJyYXkpKHQpOnQ7YXdhaXQgcihhLG8pLHMmJmUoYS5sYWJlbCl9Y2F0Y2goZSl7by5WYWx1ZUVycm9yLHMmJnQoYS5sYWJlbCl9fX19ZnVuY3Rpb24gYyhlLHQscixuKXtsZXQgbz0oMCxpLmNyZWF0ZVNlY3Rpb25SZXN1bHRSZXBvcnRlcikoZSxuKTtvLnNldExhYmVsKHQubGFiZWwpO2xldCBzPVtdO3JldHVybihuLHUsYyk9PihzW2NdPXsuLi50LGNoaWxkcmVuOm59LCgwLGwuc2V0U2VjdGlvblJlc3VsdEZvY3VzUnVsZXMpKGUscy5zbGljZSgpKSxuLm1hcChlPT5hc3luYygpPT57bGV0IHQ7bGV0IG49by5lbnN1cmVSb3coYyx1KTt0cnl7bGV0IHI9KDAsaS5maW5kVmFsdWVJblJlY29yZCkoZS5sYWJlbCx1KTt0PUFycmF5LmlzQXJyYXkocik/ci5qb2luKFwiLCBcIik6cn1jYXRjaHt9by51cGRhdGVGaWVsZChuLGUubGFiZWwsdCxcInBlbmRpbmdcIiksby5lbWl0KCk7dHJ5e2xldCBpPXJbZS50eXBlXSxhPWF3YWl0IGk/LihlLHUsITEpO28udXBkYXRlRmllbGQobixlLmxhYmVsLHQsaSYmITEhPT1hJiZ2b2lkIDAhPT10P1wiZmlsbGVkXCI6XCJtaXNzZWRcIiksby5lbWl0KCl9Y2F0Y2gocil7dGhyb3cgby51cGRhdGVGaWVsZChuLGUubGFiZWwsdCxyIGluc3RhbmNlb2YgYS5Ta2lwcGVkRXJyb3I/XCJza2lwcGVkXCI6XCJtaXNzZWRcIiksby5lbWl0KCkscn19KSl9ZnVuY3Rpb24gZChlLHQscixuKXtsZXQgbz1bXSxpPWUuZmlsdGVyKGU9PmUudHlwZT09PXMuRklFTERfVFlQRS5FRFVDQVRJT04pO2lmKDA9PT1pLmxlbmd0aClyZXR1cm4gbztsZXQgYT1pWzBdLGw9YyhcImVkdWNhdGlvblwiLGEscixuKSx1PWEuY2hpbGRyZW58fFtdLGQ9bmV3IE1hcCxmPVtdO2ZvcihsZXQgZSBvZiB1KXtsZXQgdD1lLiRpbnB1dDtpZighdCl7Zi5wdXNoKGUpO2NvbnRpbnVlfWxldCByPXQuaWR8fFwiXCIsbj10Lm5hbWV8fFwiXCIsbz0ocituKS5tYXRjaCgvXFwucmVzcG9uc2VcXC4oXFxkKylcXC4vKXx8KHIrbikubWF0Y2goL3Jlc3BvbnNlXFwuKFxcZCspXFwuLyl8fChyK24pLm1hdGNoKC9cXFsoXFxkKylcXF0vKXx8KHIrbikubWF0Y2goLy0tKFxcZCspLyl8fChyK24pLm1hdGNoKC8tKFxcZCspLS8pO2lmKG8pe2xldCB0PXBhcnNlSW50KG9bMV0sMTApO2QuaGFzKHQpfHxkLnNldCh0LFtdKSxkLmdldCh0KS5wdXNoKGUpfWVsc2UgZi5wdXNoKGUpfWlmKDA9PT1kLnNpemUmJmYubGVuZ3RoPjApe2xldCBlPW5ldyBNYXA7Zm9yKGxldCB0IG9mIHUpe2xldCByPXQubGFiZWw7ZS5zZXQociwoZS5nZXQocil8fDApKzEpfWxldCByPU1hdGgubWF4KC4uLkFycmF5LmZyb20oZS52YWx1ZXMoKSksMSksbj1NYXRoLmNlaWwodS5sZW5ndGgvcik7Zm9yKGxldCBlPTA7ZTx0Lmxlbmd0aDtlKyspe2xldCByPWUqbixpPU1hdGgubWluKHIrbix1Lmxlbmd0aCksYT11LnNsaWNlKHIsaSkscz10W2VdO3MmJmEubGVuZ3RoPjAmJm8ucHVzaCguLi5sKGEscyxlKSl9fWVsc2UgaWYoQXJyYXkuZnJvbShkLmtleXMoKSkuc29ydCgoZSx0KT0+ZS10KSwxPT09ZC5zaXplJiZ0Lmxlbmd0aD4xKXtsZXQgZT10Lmxlbmd0aCxyPU1hdGguZmxvb3IodS5sZW5ndGgvZSk7Zm9yKGxldCBlPTA7ZTx0Lmxlbmd0aDtlKyspe2xldCBuPXRbZV07aWYoIW4pY29udGludWU7bGV0IGk9W10sYT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSNqb2ItYXBwbGljYXRpb24tZm9ybVwiKTtpZihhKXtsZXQgdD1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoM1wiKSkscj10LmZpbmQoZT0+ZS50ZXh0Q29udGVudD8udHJpbSgpPT09XCJFZHVjYXRpb25cIiksbj1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpLmZpbmQoZT0+e2xldCB0PWUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIixyPWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJcIjtyZXR1cm4gdC5pbmNsdWRlcyhcIkFkZCBNb3JlIEVkdWNhdGlvbiBIaXN0b3J5XCIpfHxyLmluY2x1ZGVzKFwiQWRkIE1vcmUgRWR1Y2F0aW9uIEhpc3RvcnlcIil9KTtpZihyJiZuKXtsZXQgdD1BcnJheS5mcm9tKGEucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKTtmb3IobGV0IG8gb2YgdCl7bGV0IHQ9ci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihvKSxhPSh0Jk5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HKSE9MCxsPW8uY29tcGFyZURvY3VtZW50UG9zaXRpb24obikscz0obCZOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORykhPTA7aWYoYSYmcyl7bGV0IHQ9by5pZHx8XCJcIixyPW8ubmFtZXx8XCJcIixuPSh0K3IpLm1hdGNoKC9cXC5yZXNwb25zZVxcLihcXGQrKVxcLi8pfHwodCtyKS5tYXRjaCgvcmVzcG9uc2VcXC4oXFxkKylcXC4vKXx8KHQrcikubWF0Y2goL1xcWyhcXGQrKVxcXS8pfHwodCtyKS5tYXRjaCgvLS0oXFxkKykvKXx8KHQrcikubWF0Y2goLy0oXFxkKyktLyk7aWYobil7bGV0IHQ9cGFyc2VJbnQoblsxXSwxMCk7aWYodD09PWUpe2xldCBlPW8uZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIpJiZkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiKXx8XCJcIil8fG8uaWQmJmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7by5pZH1cIl1gKXx8by5jbG9zZXN0KFwibGFiZWxcIik7aWYoZSl7bGV0IHQ9KGUudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKS5yZXBsYWNlKC9cXHMqXFwocmVxdWlyZWRcXClcXHMqL2dpLFwiXCIpLnRyaW0oKSxyPXUuZmluZChlPT5lLmxhYmVsPT09dCk7aWYocil7bGV0IHQ9ey4uLnIsJGlucHV0Om8sJGxhYmVsOmV9O2kucHVzaCh0KX19fX19fX19aWYoMD09PWkubGVuZ3RoKXtsZXQgbj1lKnIsbz1lPT09dC5sZW5ndGgtMT91Lmxlbmd0aDpuK3I7aS5wdXNoKC4uLnUuc2xpY2UobixvKSl9aS5sZW5ndGg+MCYmby5wdXNoKC4uLmwoaSxuLGUpKX19ZWxzZSBmb3IobGV0IGU9MDtlPHQubGVuZ3RoO2UrKyl7bGV0IHI9dFtlXSxuPWQuZ2V0KGUpfHxbXTtyJiZuLmxlbmd0aD4wJiZvLnB1c2goLi4ubChuLHIsZSkpfXJldHVybiBvfWZ1bmN0aW9uIGYoZSx0LHIsbil7bGV0IG89W10saT1lLmZpbHRlcihlPT5lLnR5cGU9PT1zLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCk7aWYoMD09PWkubGVuZ3RoKXJldHVybiBvO2xldCBhPWlbMF0sbD1jKFwiZW1wbG95bWVudFwiLGEscixuKSx1PWEuY2hpbGRyZW58fFtdLGQ9bmV3IE1hcCxmPVtdO2ZvcihsZXQgZSBvZiB1KXtsZXQgdD1lLiRpbnB1dDtpZighdCl7Zi5wdXNoKGUpO2NvbnRpbnVlfWxldCByPXQuaWR8fFwiXCIsbj10Lm5hbWV8fFwiXCIsbz0ocituKS5tYXRjaCgvXFwucmVzcG9uc2VcXC4oXFxkKylcXC4vKXx8KHIrbikubWF0Y2goL3Jlc3BvbnNlXFwuKFxcZCspXFwuLyl8fChyK24pLm1hdGNoKC9cXFsoXFxkKylcXF0vKXx8KHIrbikubWF0Y2goLy0tKFxcZCspLyl8fChyK24pLm1hdGNoKC8tKFxcZCspLS8pO2lmKG8pe2xldCB0PXBhcnNlSW50KG9bMV0sMTApO2QuaGFzKHQpfHxkLnNldCh0LFtdKSxkLmdldCh0KS5wdXNoKGUpfWVsc2UgZi5wdXNoKGUpfWlmKDA9PT1kLnNpemUmJmYubGVuZ3RoPjApe2xldCBlPW5ldyBNYXA7Zm9yKGxldCB0IG9mIHUpe2xldCByPXQubGFiZWw7ZS5zZXQociwoZS5nZXQocil8fDApKzEpfWxldCByPU1hdGgubWF4KC4uLkFycmF5LmZyb20oZS52YWx1ZXMoKSksMSksbj1NYXRoLmNlaWwodS5sZW5ndGgvcik7Zm9yKGxldCBlPTA7ZTx0Lmxlbmd0aDtlKyspe2xldCByPWUqbixpPU1hdGgubWluKHIrbix1Lmxlbmd0aCksYT11LnNsaWNlKHIsaSkscz10W2VdO3MmJmEubGVuZ3RoPjAmJm8ucHVzaCguLi5sKGEscyxlKSl9fWVsc2UgaWYoQXJyYXkuZnJvbShkLmtleXMoKSkuc29ydCgoZSx0KT0+ZS10KSwxPT09ZC5zaXplJiZ0Lmxlbmd0aD4xKXtsZXQgZT10Lmxlbmd0aCxyPU1hdGguZmxvb3IodS5sZW5ndGgvZSk7Zm9yKGxldCBlPTA7ZTx0Lmxlbmd0aDtlKyspe2xldCBuPXRbZV07aWYoIW4pY29udGludWU7bGV0IGk9W10sYT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSNqb2ItYXBwbGljYXRpb24tZm9ybVwiKTtpZihhKXtsZXQgdD1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoM1wiKSkscj10LmZpbmQoZT0+ZS50ZXh0Q29udGVudD8udHJpbSgpPT09XCJFbXBsb3ltZW50IEhpc3RvcnlcIiksbj1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpLmZpbmQoZT0+e2xldCB0PWUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIixyPWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJcIjtyZXR1cm4gdC5pbmNsdWRlcyhcIkFkZCBBbm90aGVyIFBvc2l0aW9uXCIpfHxyLmluY2x1ZGVzKFwiQWRkIEFub3RoZXIgUG9zaXRpb25cIil9KTtpZihyJiZuKXtsZXQgdD1BcnJheS5mcm9tKGEucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKTtmb3IobGV0IG8gb2YgdCl7bGV0IHQ9ci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihvKSxhPSh0Jk5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HKSE9MCxsPW8uY29tcGFyZURvY3VtZW50UG9zaXRpb24obikscz0obCZOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORykhPTA7aWYoYSYmcyl7bGV0IHQ9by5pZHx8XCJcIixyPW8ubmFtZXx8XCJcIixuPSh0K3IpLm1hdGNoKC9cXC5yZXNwb25zZVxcLihcXGQrKVxcLi8pfHwodCtyKS5tYXRjaCgvcmVzcG9uc2VcXC4oXFxkKylcXC4vKXx8KHQrcikubWF0Y2goL1xcWyhcXGQrKVxcXS8pfHwodCtyKS5tYXRjaCgvLS0oXFxkKykvKXx8KHQrcikubWF0Y2goLy0oXFxkKyktLyk7aWYobil7bGV0IHQ9cGFyc2VJbnQoblsxXSwxMCk7aWYodD09PWUpe2xldCBlPW8uZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIpJiZkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiKXx8XCJcIil8fG8uaWQmJmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7by5pZH1cIl1gKXx8by5jbG9zZXN0KFwibGFiZWxcIik7aWYoZSl7bGV0IHQ9KGUudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKS5yZXBsYWNlKC9cXHMqXFwocmVxdWlyZWRcXClcXHMqL2dpLFwiXCIpLnRyaW0oKSxyPXUuZmluZChlPT5lLmxhYmVsPT09dCk7aWYocil7bGV0IHQ9ey4uLnIsJGlucHV0Om8sJGxhYmVsOmV9O2kucHVzaCh0KX19fX19fX19aWYoMD09PWkubGVuZ3RoKXtsZXQgbj1lKnIsbz1lPT09dC5sZW5ndGgtMT91Lmxlbmd0aDpuK3IsYT11LnNsaWNlKG4sbyksbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSNqb2ItYXBwbGljYXRpb24tZm9ybVwiKTtpZihsKXtsZXQgdD1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoM1wiKSkscj10LmZpbmQoZT0+ZS50ZXh0Q29udGVudD8udHJpbSgpPT09XCJFbXBsb3ltZW50IEhpc3RvcnlcIiksbj1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpLmZpbmQoZT0+e2xldCB0PWUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIixyPWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJcIjtyZXR1cm4gdC5pbmNsdWRlcyhcIkFkZCBBbm90aGVyIFBvc2l0aW9uXCIpfHxyLmluY2x1ZGVzKFwiQWRkIEFub3RoZXIgUG9zaXRpb25cIil9KTtpZihyJiZuKXtsZXQgdD1BcnJheS5mcm9tKGwucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKTtmb3IobGV0IG8gb2YgYSl7bGV0IGE9by5sYWJlbCxsPW51bGwscz0wO2ZvcihsZXQgbyBvZiB0KXtsZXQgdD1yLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG8pLGk9KHQmTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkcpIT0wLHU9by5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuKSxjPSh1Jk5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HKSE9MDtpZihpJiZjKXtsZXQgdD1vLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiKSYmZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoby5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIil8fFwiXCIpfHxvLmlkJiZkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke28uaWR9XCJdYCl8fG8uY2xvc2VzdChcImxhYmVsXCIpO2lmKHQpe2xldCByPSh0LnRleHRDb250ZW50fHxcIlwiKS50cmltKCkucmVwbGFjZSgvXFxzKlxcKHJlcXVpcmVkXFwpXFxzKi9naSxcIlwiKS50cmltKCk7aWYocj09PWEmJisrcz09PWUrMSl7bD1vO2JyZWFrfX19fWlmKGwpe2xldCBlPWwuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIpJiZkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiKXx8XCJcIil8fGwuaWQmJmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7bC5pZH1cIl1gKXx8bC5jbG9zZXN0KFwibGFiZWxcIiksdD17Li4ubywkaW5wdXQ6bCwkbGFiZWw6ZX07aS5wdXNoKHQpfWVsc2UgaS5wdXNoKG8pfX1lbHNlIGkucHVzaCguLi5hKX1lbHNlIGkucHVzaCguLi5hKX1pLmxlbmd0aD4wJiZvLnB1c2goLi4ubChpLG4sZSkpfX1lbHNlIGZvcihsZXQgZT0wO2U8dC5sZW5ndGg7ZSsrKXtsZXQgcj10W2VdLG49ZC5nZXQoZSl8fFtdO3ImJm4ubGVuZ3RoPjAmJm8ucHVzaCguLi5sKG4scixlKSl9cmV0dXJuIG99XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJhbnN3ZXIuNmYzNTRkMWYuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);