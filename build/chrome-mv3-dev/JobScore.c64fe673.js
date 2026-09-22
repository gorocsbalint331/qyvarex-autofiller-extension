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
})({"khWov":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\JobScore.js",
    "bundleId": "7011f3a0c64fe673",
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
var j = z(require("30f3762b7c1c28e4"));
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

},{"30f3762b7c1c28e4":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"4zyXT":[function(require,module,exports) {
/**
 * Parcel module id: d9UPP
 * Resolved path: src/contents/sites/JobScore.js
 * Dependencies:
 *   ./answers -> hq3DQ  =>  src/contents/sites/JobScore/answers.js
 *   ./contact-rule-order -> iZ6Kd  =>  src/contents/sites/JobScore/contact-rule-order.js
 *   ./country -> iH7NT  =>  src/contents/sites/JobScore/country.js
 *   ./operations -> jdxtK  =>  src/contents/sites/JobScore/operations.js
 *   ./rules -> 4QaIN  =>  src/contents/sites/JobScore/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   da3ae0c8d8acafe1 -> 4QaIN  =>  src/contents/sites/JobScore/rules.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cover-letter -> 7VR5i  =>  src/contents/methods/cover-letter.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~enums -> drZvv  =>  src/enums.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "JobScore", ()=>S);
var o = e("~contents/methods/answer"), i = e("~contents/methods/cover-letter"), a = e("~contents/methods/dom"), l = e("~contents/methods/track"), s = e("~contents/sites/base-filler"), u = e("~core/dom"), c = e("~core/enums"), d = e("~core/xpath"), f = e("~enums"), p = e("~store/autofillInfo"), m = e("~utils/delay"), h = e("~utils/string"), g = e("./answers"), b = e("./contact-rule-order"), y = e("./country"), v = e("./operations"), w = e("./rules");
class S extends s.BaseFiller {
    async extractComboQuestionRules() {
        return (0, i.markTextCoverLetterRules)(await this.extractFormRules(!0));
    }
    async checkCoverLetter() {
        await (0, v.preFillForm)();
        let e1 = await (0, w.extractRules)("div.js-section-cover-letter"), t = e1.find((e1)=>{
            let t = e1.$input, r1 = e1.label?.toLowerCase().replace(/[^a-z]+/g, " ").trim();
            return t?.name === "cover_letter" || t?.id === "cover_letter" || "cover letter" === r1;
        });
        if (!t) {
            (0, a.postCoverLetterStatus)("");
            return;
        }
        (0, a.postCoverLetterStatus)(t.required ? "required" : "optional");
    }
    getFieldHandlers() {
        return {
            [c.FIELD_TYPE.TEXT]: (e1, t)=>{
                let r1 = t?.[0];
                if (e1.label, e1.$input.id, e1.$input.name, e1.$input.closest(".js-section-questions"), !r1) return;
                let n = "cover_letter" === e1.$input.name || "cover_letter" === e1.$input.id || e1.label?.toLowerCase().includes("cover letter") || null !== e1.$input.closest(".js-section-cover-letter");
                return n ? (0, v.fillCoverLetterField)(String(r1 ?? "")) : (0, v.fillInputTextField)(e1.$input, String(r1 ?? ""));
            },
            [c.FIELD_TYPE.NUMBER]: (e1, t)=>(0, v.fillInputTextField)(e1.$input, String(t?.[0] ?? "")),
            [c.FIELD_TYPE.SELECT]: (e1, t)=>{
                let r1 = e1.$input;
                return e1.label, r1?.id, r1?.name, r1?.closest(".js-section-questions"), (0, v.fillSelectField)(e1, t);
            },
            [c.FIELD_TYPE.CHECKBOX]: (e1, t)=>{
                let r1 = e1.$input;
                return e1.label, r1?.id, r1?.name, r1?.closest(".js-section-questions"), (0, v.fillCheckboxField)(e1, t);
            },
            [c.FIELD_TYPE.RADIOGROUP]: (e1, t)=>{
                let r1 = e1.$input;
                return e1.label, r1?.id, r1?.name, r1?.closest(".js-section-questions"), (0, v.fillRadioGroupFiled)(e1, t);
            }
        };
    }
    async fillIframeForm(e1 = !1) {
        await this.initializeFillForm(), (0, v.resetFilledElementsForNewRun)();
        let t = await this.extractFormRules();
        this.progressTracker.setFieldsRequiredStatus(t);
        let r1 = await this.fetchFormAnswers(t, e1);
        return "string" == typeof r1 ? r1 : (await this.fillRegularFields(t), await this.executeSiteSpecificSteps(t), (0, l.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace), window.top?.postMessage(h.cleanObject({
            type: c.MESSAGE_EVENTS.autoFillResultFromIframe,
            data: this.progressTracker.fieldStatus
        }), {
            targetOrigin: "*"
        }), this.progressTracker.generateFinalProgress());
    }
    async extractFormRules(e1 = !1) {
        if (this.isRunningInJobScoreIframe()) return await (0, w.extractIframeFormRules)();
        e1 || (await Promise.all([
            (0, v.clickSeeButton)('.js-area-container.experience[data-display="preview"] .js-link-edit-area-toggler[data-context="edit-area-data"]'),
            (0, v.clickSeeButton)('.js-area-container.education[data-display="preview"] .js-link-edit-area-toggler[data-context="edit-area-data"]')
        ]), await (0, m.delay)(500));
        let t = [], r1 = await (0, w.extractRules)("div.js-area-container.contact");
        t.push(...r1);
        let n = await (0, w.extractRules)("div.js-section-cover-letter");
        t.push(...n);
        let o = await (0, w.extractEmploymentRules)(".js-area-container.experience[data-display='form']");
        t.push(...o);
        let i = await (0, w.extractEducationRules)('.js-area-container.education[data-display="form"]');
        t.push(...i);
        let a = await (0, w.extractRules)("div.js-section-questions");
        t.push(...a);
        let l = (0, v.cleanRules)(t);
        return l;
    }
    getSiteName() {
        return "jobscore";
    }
    isRunningInIframe() {
        return window.top !== window.self;
    }
    isRunningInJobScoreIframe() {
        if (!this.isRunningInIframe()) return !1;
        let e1 = window.location.href;
        if (e1.startsWith("about:blank") || e1.startsWith("about:")) return !1;
        let t = e1.includes("jobscore.com") || e1.includes("jobscore.co"), r1 = null !== document.querySelector(".js-section-container") || null !== document.querySelector("form") || null !== document.querySelector(".js-area-container");
        return t && r1;
    }
    hasOFCCPIframe() {
        if (this.isRunningInIframe()) return !1;
        let e1 = document.getElementsByTagName("iframe");
        for (let t of e1){
            if (!t.src) continue;
            let e1 = t.src.includes("ofccp/form?job_id=") && t.src.includes("&internal_board=");
            if (e1) return !0;
        }
        return !1;
    }
    hasCrossOriginJobScoreIframe() {
        if (this.isRunningInIframe()) return !1;
        let e1 = document.getElementsByTagName("iframe");
        for (let t of e1){
            if (!t.src) continue;
            let e1 = t.src.includes("jobscore.com") || t.src.includes("jobscore.co");
            if (e1) try {
                let e1 = t.contentDocument || t.contentWindow?.document;
                if (!e1) return !0;
            } catch (e1) {
                return !0;
            }
        }
        return !1;
    }
    triggerJobScoreIframeFill(e1 = !1) {
        if (!this.hasCrossOriginJobScoreIframe()) return;
        let t = document.getElementsByTagName("iframe");
        for (let r1 of t){
            if (!r1.src) continue;
            let t = r1.src.includes("jobscore.com") || r1.src.includes("jobscore.co");
            if (!t) continue;
            let n = setInterval(()=>{
                window.iframeLoaded && (r1.contentWindow?.postMessage({
                    type: f.IFRAME_EVENTS.EXECUTE_IFRAME_FUNCTION,
                    data: {
                        timestamp: Date.now(),
                        fromAgent: e1
                    },
                    url: r1.src
                }, "*"), clearInterval(n));
            }, 500);
            setTimeout(()=>{
                clearInterval(n);
            }, 1e4);
        }
    }
    async getAutofillSnapshot(e1) {
        let t = await (0, w.getFormSnapshot)() || {};
        this.lastFullAutofillSnapshot = t;
        let { education: r1, employment: n, ...o } = t;
        return o;
    }
    async getSubmitSnapshot() {
        let e1 = await (0, w.getFormSnapshot)() || {};
        this.lastFullSubmitSnapshot = e1;
        let { education: t, employment: r1, ...n } = e1;
        return n;
    }
    extractEducationEmploymentAdditional(e1) {
        let { education: t, employment: r1 } = e1 || {};
        return {
            education: t || [],
            employment: r1 || []
        };
    }
    getAdditionalAutofillSnapshotData(e1) {
        return this.extractEducationEmploymentAdditional(this.lastFullAutofillSnapshot);
    }
    getAdditionalSubmitSnapshotData() {
        return this.extractEducationEmploymentAdditional(this.lastFullSubmitSnapshot);
    }
    submitApplication() {
        let e1 = this.getSubmitButtonSelector();
        if (!e1) return;
        let t = (0, d.getFirstOrderedNode)(e1);
        t && t?.click();
    }
    async doFillForm(t = !1) {
        if (this.isRunningInJobScoreIframe()) return await this.fillIframeForm(t);
        if (this.hasOFCCPIframe()) return new Promise((e1)=>{
            let t = (r1)=>{
                r1.data.type === c.MESSAGE_EVENTS.autoFillResultFromIframe && (window.removeEventListener("message", t), e1(r1.data.data));
            };
            window.addEventListener("message", t), setTimeout(()=>{
                window.removeEventListener("message", t), this.progressTracker.clear(), e1(this.progressTracker.generateFinalProgress());
            }, 6e4);
        });
        await this.initializeFillForm(), (0, v.resetFilledElementsForNewRun)();
        let r1 = this.prepareCoverLetterRules(await this.extractFormRules());
        if ((0, v.isResumeOnlyPage)()) return this.progressTracker.setFieldsRequiredStatus((0, v.getResumeOnlyPageRequiredFields)(r1)), await this.handleResumeUpload(), this.finalizeFillForm();
        await this.handleResumeUpload();
        let n = await this.fetchFormAnswers(r1, t);
        if ("string" == typeof n) return n;
        this.answer.education && Array.isArray(this.answer.education) && await (0, v.addEducationFormElements)(this.answer.education), this.answer.workExperience && Array.isArray(this.answer.workExperience) && (this.answer.workExperience = (0, v.normalizeWorkExperienceRecords)(this.answer.workExperience), await (0, v.addEmploymentFormElements)(this.answer.workExperience));
        let a = (0, i.markTextCoverLetterRules)(await this.extractFormRules(!0)), l = this.progressTracker.fieldStatus.fieldRequiredStatus.find((e1)=>"Resume/CV" === e1.label), s = this.progressTracker.fieldStatus.filledFields.includes("Resume/CV");
        this.progressTracker.setFieldsRequiredStatus(a), (0, v.restoreResumeProgressAfterRulesUpdate)({
            resumeStatusBefore: l ?? void 0,
            wasResumeFilled: s,
            updateFieldRequiredStatus: this.progressTracker.updateFieldRequiredStatus,
            updateFilledProgress: this.progressTracker.updateFilledProgress
        });
        let d = a.filter((e1)=>e1.type !== c.FIELD_TYPE.EDUCATION && e1.type !== c.FIELD_TYPE.EMPLOYMENT && "$input" in e1 && e1.$input?.closest(".js-area-container.contact") !== null);
        if (d.length > 0) {
            let { mainCountryRules: e1, regularRules: r1 } = (0, y.partitionJobScoreContactRules)(d);
            if (this.currentRunCountryPrefilled) for (let t of e1)this.progressTracker.updateFilledProgress(t.label);
            await this.fillRegularFields((0, b.orderJobScoreContactRules)(r1));
            let n = (0, b.getJobScoreLocationRetryRules)(await (0, w.extractRules)("div.js-area-container.contact"));
            if (n.length > 0) {
                let e1 = await this.requestFormAnswers(n, t, {
                    updateTimeTrace: !1
                });
                if ("string" == typeof e1) return e1;
                e1 && this.mergeComboQuestionAnswer(e1, n), (0, v.resetFilledElementsForNewRun)(), this.answer.regular = (0, b.applyJobScoreLocationFallbacks)(this.answer.regular, this.currentRunAutofillInfo), await this.fillRegularFields(n);
            }
        }
        if (this.answer.workExperience && Array.isArray(this.answer.workExperience)) {
            let { extractEmploymentRules: t } = await e("da3ae0c8d8acafe1"), r1 = await t(".js-area-container.experience[data-display='form']");
            (0, u.setSectionResultFocusRules)("employment", r1);
            let n = (0, v.orderWorkExperienceByDom)(r1, this.answer.workExperience, v.normalizeWorkExperienceRecords), i = (0, o.getEmploymentOperations)(r1, n, this.operationConfig, void 0, {
                onCompleted: ()=>{
                    r1.length > 0 && this.progressTracker.updateFilledProgress("Employment");
                },
                onSkipped: ()=>this.progressTracker.updateMissedProgress("Employment"),
                onSectionResultChanged: this.progressTracker.updateSectionResult
            });
            for (let e1 of i)this.taskQueue.add(e1);
            await this.taskQueue.run();
        }
        if (this.answer.education && Array.isArray(this.answer.education)) {
            let t = (0, v.normalizeEducationRecords)(this.answer.education), { extractEducationRules: r1 } = await e("da3ae0c8d8acafe1"), n = await r1('.js-area-container.education[data-display="form"]');
            (0, u.setSectionResultFocusRules)("education", n);
            let i = (0, o.getEducationOperations)(n, t, this.operationConfig, void 0, {
                onCompleted: ()=>{
                    n.length > 0 && this.progressTracker.updateFilledProgress("Education");
                },
                onSkipped: ()=>this.progressTracker.updateMissedProgress("Education"),
                onSectionResultChanged: this.progressTracker.updateSectionResult
            });
            for (let e1 of i)this.taskQueue.add(e1);
            await this.taskQueue.run();
        }
        let f = a.filter((e1)=>e1.type !== c.FIELD_TYPE.EDUCATION && e1.type !== c.FIELD_TYPE.EMPLOYMENT && "$input" in e1 && e1.$input?.closest(".js-section-questions") !== null);
        f.length > 0 && await this.fillRegularFields(f), await this.fillCoverLetterFields();
        let p = await this.runComboQuestionAutofillIfNeeded(a, t);
        if ("string" == typeof p) return p;
        let m = p;
        return await this.executeSiteSpecificSteps(m), this.disableUploadResume || (0, v.syncResumeFilledProgress)(this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress), this.finalizeFillForm();
    }
    async handleResumeUpload() {
        this.disableUploadResume ? (await (0, v.removeResume)(), this.progressTracker.updateMissedProgress("Resume/CV")) : this.taskQueue.add(async ()=>{
            await (0, v.removeResume)(), await (0, v.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        }), await this.taskQueue.run();
    }
    async runPreFillForm() {
        this.currentRunCountry = null, this.currentRunCountryPrefilled = !1, this.currentRunAutofillInfo = null;
        let e1 = await (0, y.runJobScoreCountryPrefill)({
            preFillForm: v.preFillForm,
            fetchAutofillInfo: async ()=>{
                let e1 = await (0, p.useAutofillInfoStore).getState().fetchAutofillInfo();
                return this.currentRunAutofillInfo = e1, e1;
            },
            prefillCountry: (e1)=>(0, y.prefillJobScoreCountry)(e1),
            waitForStateProvince: async (e1)=>{
                await (0, y.waitForJobScoreStateProvinceControl)(e1);
            }
        });
        this.currentRunCountry = e1.country, this.currentRunCountryPrefilled = e1.prefilled;
    }
    getSubmitButtonSelector() {
        return './/button[@id="apply-button" or (@type="submit" and (contains(@class, "js-btn-apply") or contains(@class, "js-btn")))]';
    }
    constructor(...e1){
        super(...e1), this.hasComboQuestions = !0, this.lastFullAutofillSnapshot = null, this.lastFullSubmitSnapshot = null, this.currentRunCountry = null, this.currentRunCountryPrefilled = !1, this.currentRunAutofillInfo = null, this.formatAnswer = (e1)=>(0, g.formatAnswer)(e1);
    }
}

},{}]},["khWov","4zyXT"], "4zyXT", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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dW50aW1lLTRjNWZmY2Y0M2UzNWE5MzUuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvSm9iU2NvcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcSm9iU2NvcmUuanNcIixcImJ1bmRsZUlkXCI6XCI3MDExZjNhMGM2NGZlNjczXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogZDlVUFBcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL0pvYlNjb3JlLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9hbnN3ZXJzIC0+IGhxM0RRICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL0pvYlNjb3JlL2Fuc3dlcnMuanNcclxuICogICAuL2NvbnRhY3QtcnVsZS1vcmRlciAtPiBpWjZLZCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9Kb2JTY29yZS9jb250YWN0LXJ1bGUtb3JkZXIuanNcclxuICogICAuL2NvdW50cnkgLT4gaUg3TlQgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvSm9iU2NvcmUvY291bnRyeS5qc1xyXG4gKiAgIC4vb3BlcmF0aW9ucyAtPiBqZHh0SyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9Kb2JTY29yZS9vcGVyYXRpb25zLmpzXHJcbiAqICAgLi9ydWxlcyAtPiA0UWFJTiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9Kb2JTY29yZS9ydWxlcy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgZGEzYWUwYzhkOGFjYWZlMSAtPiA0UWFJTiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9Kb2JTY29yZS9ydWxlcy5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Fuc3dlciAtPiA3VDVlVyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2NvdmVyLWxldHRlciAtPiA3VlI1aSAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2NvdmVyLWxldHRlci5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2RvbSAtPiBoQTVRYSAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2RvbS5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL3RyYWNrIC0+IGg0NzliICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvdHJhY2suanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIgLT4gOHhqNkYgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIuanNcclxuICogICB+Y29yZS9kb20gLT4gaExNSlggID0+ICBzcmMvY29yZS9kb20uanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH5lbnVtcyAtPiBkclp2diAgPT4gIHNyYy9lbnVtcy5qc1xyXG4gKiAgIH5zdG9yZS9hdXRvZmlsbEluZm8gLT4gNzlWTlAgID0+ICBzcmMvc3RvcmUvYXV0b2ZpbGxJbmZvLmpzXHJcbiAqICAgfnV0aWxzL2RlbGF5IC0+IGFtNjE0ICA9PiAgc3JjL3V0aWxzL2RlbGF5LmpzXHJcbiAqICAgfnV0aWxzL3N0cmluZyAtPiBpakVGaSAgPT4gIHNyYy91dGlscy9zdHJpbmcuanNcclxuICovXHJcblxyXG52YXIgbiA9IGUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO1xyXG5uLmRlZmluZUludGVyb3BGbGFnKHIpLCBuLmV4cG9ydChyLCBcIkpvYlNjb3JlXCIsICgpID0+IFMpO1xyXG52YXIgbyA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXJcIiksXHJcbiAgaSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9jb3Zlci1sZXR0ZXJcIiksXHJcbiAgYSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9kb21cIiksXHJcbiAgbCA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy90cmFja1wiKSxcclxuICBzID0gZShcIn5jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlclwiKSxcclxuICB1ID0gZShcIn5jb3JlL2RvbVwiKSxcclxuICBjID0gZShcIn5jb3JlL2VudW1zXCIpLFxyXG4gIGQgPSBlKFwifmNvcmUveHBhdGhcIiksXHJcbiAgZiA9IGUoXCJ+ZW51bXNcIiksXHJcbiAgcCA9IGUoXCJ+c3RvcmUvYXV0b2ZpbGxJbmZvXCIpLFxyXG4gIG0gPSBlKFwifnV0aWxzL2RlbGF5XCIpLFxyXG4gIGggPSBlKFwifnV0aWxzL3N0cmluZ1wiKSxcclxuICBnID0gZShcIi4vYW5zd2Vyc1wiKSxcclxuICBiID0gZShcIi4vY29udGFjdC1ydWxlLW9yZGVyXCIpLFxyXG4gIHkgPSBlKFwiLi9jb3VudHJ5XCIpLFxyXG4gIHYgPSBlKFwiLi9vcGVyYXRpb25zXCIpLFxyXG4gIHcgPSBlKFwiLi9ydWxlc1wiKTtcclxuY2xhc3MgUyBleHRlbmRzIHMuQmFzZUZpbGxlciB7XHJcbiAgYXN5bmMgZXh0cmFjdENvbWJvUXVlc3Rpb25SdWxlcygpIHtcclxuICAgIHJldHVybiAoMCwgaS5tYXJrVGV4dENvdmVyTGV0dGVyUnVsZXMpKGF3YWl0IHRoaXMuZXh0cmFjdEZvcm1SdWxlcyghMCkpXHJcbiAgfVxyXG4gIGFzeW5jIGNoZWNrQ292ZXJMZXR0ZXIoKSB7XHJcbiAgICBhd2FpdCAoMCwgdi5wcmVGaWxsRm9ybSkoKTtcclxuICAgIGxldCBlID0gYXdhaXQgKDAsIHcuZXh0cmFjdFJ1bGVzKShcImRpdi5qcy1zZWN0aW9uLWNvdmVyLWxldHRlclwiKSxcclxuICAgICAgdCA9IGUuZmluZChlID0+IHtcclxuICAgICAgICBsZXQgdCA9IGUuJGlucHV0LFxyXG4gICAgICAgICAgciA9IGUubGFiZWw/LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXpdKy9nLCBcIiBcIikudHJpbSgpO1xyXG4gICAgICAgIHJldHVybiB0Py5uYW1lID09PSBcImNvdmVyX2xldHRlclwiIHx8IHQ/LmlkID09PSBcImNvdmVyX2xldHRlclwiIHx8IFwiY292ZXIgbGV0dGVyXCIgPT09IHJcclxuICAgICAgfSk7XHJcbiAgICBpZiAoIXQpIHtcclxuICAgICAgKDAsIGEucG9zdENvdmVyTGV0dGVyU3RhdHVzKShcIlwiKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9KDAsIGEucG9zdENvdmVyTGV0dGVyU3RhdHVzKSh0LnJlcXVpcmVkID8gXCJyZXF1aXJlZFwiIDogXCJvcHRpb25hbFwiKVxyXG4gIH1cclxuICBnZXRGaWVsZEhhbmRsZXJzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW2MuRklFTERfVFlQRS5URVhUXTogKGUsIHQpID0+IHtcclxuICAgICAgICBsZXQgciA9IHQ/LlswXTtcclxuICAgICAgICBpZiAoZS5sYWJlbCwgZS4kaW5wdXQuaWQsIGUuJGlucHV0Lm5hbWUsIGUuJGlucHV0LmNsb3Nlc3QoXCIuanMtc2VjdGlvbi1xdWVzdGlvbnNcIiksICFcclxuICAgICAgICAgIHIpIHJldHVybjtcclxuICAgICAgICBsZXQgbiA9IFwiY292ZXJfbGV0dGVyXCIgPT09IGUuJGlucHV0Lm5hbWUgfHwgXCJjb3Zlcl9sZXR0ZXJcIiA9PT0gZS4kaW5wdXQuaWQgfHwgZS5sYWJlbFxyXG4gICAgICAgICAgPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiY292ZXIgbGV0dGVyXCIpIHx8IG51bGwgIT09IGUuJGlucHV0LmNsb3Nlc3QoXHJcbiAgICAgICAgICAgIFwiLmpzLXNlY3Rpb24tY292ZXItbGV0dGVyXCIpO1xyXG4gICAgICAgIHJldHVybiBuID8gKDAsIHYuZmlsbENvdmVyTGV0dGVyRmllbGQpKFN0cmluZyhyID8/IFwiXCIpKSA6ICgwLCB2LmZpbGxJbnB1dFRleHRGaWVsZCkoZVxyXG4gICAgICAgICAgLiRpbnB1dCwgU3RyaW5nKHIgPz8gXCJcIikpXHJcbiAgICAgIH0sXHJcbiAgICAgIFtjLkZJRUxEX1RZUEUuTlVNQkVSXTogKGUsIHQpID0+ICgwLCB2LmZpbGxJbnB1dFRleHRGaWVsZCkoZS4kaW5wdXQsIFN0cmluZyh0Py5bMF0gPz9cclxuICAgICAgICBcIlwiKSksXHJcbiAgICAgIFtjLkZJRUxEX1RZUEUuU0VMRUNUXTogKGUsIHQpID0+IHtcclxuICAgICAgICBsZXQgciA9IGUuJGlucHV0O1xyXG4gICAgICAgIHJldHVybiBlLmxhYmVsLCByPy5pZCwgcj8ubmFtZSwgcj8uY2xvc2VzdChcIi5qcy1zZWN0aW9uLXF1ZXN0aW9uc1wiKSwgKDAsIHZcclxuICAgICAgICAgIC5maWxsU2VsZWN0RmllbGQpKGUsIHQpXHJcbiAgICAgIH0sXHJcbiAgICAgIFtjLkZJRUxEX1RZUEUuQ0hFQ0tCT1hdOiAoZSwgdCkgPT4ge1xyXG4gICAgICAgIGxldCByID0gZS4kaW5wdXQ7XHJcbiAgICAgICAgcmV0dXJuIGUubGFiZWwsIHI/LmlkLCByPy5uYW1lLCByPy5jbG9zZXN0KFwiLmpzLXNlY3Rpb24tcXVlc3Rpb25zXCIpLCAoMCwgdlxyXG4gICAgICAgICAgLmZpbGxDaGVja2JveEZpZWxkKShlLCB0KVxyXG4gICAgICB9LFxyXG4gICAgICBbYy5GSUVMRF9UWVBFLlJBRElPR1JPVVBdOiAoZSwgdCkgPT4ge1xyXG4gICAgICAgIGxldCByID0gZS4kaW5wdXQ7XHJcbiAgICAgICAgcmV0dXJuIGUubGFiZWwsIHI/LmlkLCByPy5uYW1lLCByPy5jbG9zZXN0KFwiLmpzLXNlY3Rpb24tcXVlc3Rpb25zXCIpLCAoMCwgdlxyXG4gICAgICAgICAgLmZpbGxSYWRpb0dyb3VwRmlsZWQpKGUsIHQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgZmlsbElmcmFtZUZvcm0oZSA9ICExKSB7XHJcbiAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVGaWxsRm9ybSgpLCAoMCwgdi5yZXNldEZpbGxlZEVsZW1lbnRzRm9yTmV3UnVuKSgpO1xyXG4gICAgbGV0IHQgPSBhd2FpdCB0aGlzLmV4dHJhY3RGb3JtUnVsZXMoKTtcclxuICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnNldEZpZWxkc1JlcXVpcmVkU3RhdHVzKHQpO1xyXG4gICAgbGV0IHIgPSBhd2FpdCB0aGlzLmZldGNoRm9ybUFuc3dlcnModCwgZSk7XHJcbiAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgciA/IHIgOiAoYXdhaXQgdGhpcy5maWxsUmVndWxhckZpZWxkcyh0KSwgYXdhaXQgdGhpc1xyXG4gICAgICAuZXhlY3V0ZVNpdGVTcGVjaWZpY1N0ZXBzKHQpLCAoMCwgbC5wb3N0U3RhdHVzKShcImZpbGxpbmdcIiwgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAuZmllbGRTdGF0dXMsIHRoaXMudGltZVRyYWNlKSwgd2luZG93LnRvcD8ucG9zdE1lc3NhZ2UoaC5jbGVhbk9iamVjdCh7XHJcbiAgICAgICAgdHlwZTogYy5NRVNTQUdFX0VWRU5UUy5hdXRvRmlsbFJlc3VsdEZyb21JZnJhbWUsXHJcbiAgICAgICAgZGF0YTogdGhpcy5wcm9ncmVzc1RyYWNrZXIuZmllbGRTdGF0dXNcclxuICAgICAgfSksIHtcclxuICAgICAgICB0YXJnZXRPcmlnaW46IFwiKlwiXHJcbiAgICAgIH0pLCB0aGlzLnByb2dyZXNzVHJhY2tlci5nZW5lcmF0ZUZpbmFsUHJvZ3Jlc3MoKSlcclxuICB9XHJcbiAgYXN5bmMgZXh0cmFjdEZvcm1SdWxlcyhlID0gITEpIHtcclxuICAgIGlmICh0aGlzLmlzUnVubmluZ0luSm9iU2NvcmVJZnJhbWUoKSkgcmV0dXJuIGF3YWl0ICgwLCB3LmV4dHJhY3RJZnJhbWVGb3JtUnVsZXMpKCk7XHJcbiAgICBlIHx8IChhd2FpdCBQcm9taXNlLmFsbChbKDAsIHYuY2xpY2tTZWVCdXR0b24pKFxyXG4gICAgICAnLmpzLWFyZWEtY29udGFpbmVyLmV4cGVyaWVuY2VbZGF0YS1kaXNwbGF5PVwicHJldmlld1wiXSAuanMtbGluay1lZGl0LWFyZWEtdG9nZ2xlcltkYXRhLWNvbnRleHQ9XCJlZGl0LWFyZWEtZGF0YVwiXSdcclxuICAgICAgKSwgKDAsIHYuY2xpY2tTZWVCdXR0b24pKFxyXG4gICAgICAnLmpzLWFyZWEtY29udGFpbmVyLmVkdWNhdGlvbltkYXRhLWRpc3BsYXk9XCJwcmV2aWV3XCJdIC5qcy1saW5rLWVkaXQtYXJlYS10b2dnbGVyW2RhdGEtY29udGV4dD1cImVkaXQtYXJlYS1kYXRhXCJdJ1xyXG4gICAgICApXSksIGF3YWl0ICgwLCBtLmRlbGF5KSg1MDApKTtcclxuICAgIGxldCB0ID0gW10sXHJcbiAgICAgIHIgPSBhd2FpdCAoMCwgdy5leHRyYWN0UnVsZXMpKFwiZGl2LmpzLWFyZWEtY29udGFpbmVyLmNvbnRhY3RcIik7XHJcbiAgICB0LnB1c2goLi4ucik7XHJcbiAgICBsZXQgbiA9IGF3YWl0ICgwLCB3LmV4dHJhY3RSdWxlcykoXCJkaXYuanMtc2VjdGlvbi1jb3Zlci1sZXR0ZXJcIik7XHJcbiAgICB0LnB1c2goLi4ubik7XHJcbiAgICBsZXQgbyA9IGF3YWl0ICgwLCB3LmV4dHJhY3RFbXBsb3ltZW50UnVsZXMpKFxyXG4gICAgICBcIi5qcy1hcmVhLWNvbnRhaW5lci5leHBlcmllbmNlW2RhdGEtZGlzcGxheT0nZm9ybSddXCIpO1xyXG4gICAgdC5wdXNoKC4uLm8pO1xyXG4gICAgbGV0IGkgPSBhd2FpdCAoMCwgdy5leHRyYWN0RWR1Y2F0aW9uUnVsZXMpKFxyXG4gICAgICAnLmpzLWFyZWEtY29udGFpbmVyLmVkdWNhdGlvbltkYXRhLWRpc3BsYXk9XCJmb3JtXCJdJyk7XHJcbiAgICB0LnB1c2goLi4uaSk7XHJcbiAgICBsZXQgYSA9IGF3YWl0ICgwLCB3LmV4dHJhY3RSdWxlcykoXCJkaXYuanMtc2VjdGlvbi1xdWVzdGlvbnNcIik7XHJcbiAgICB0LnB1c2goLi4uYSk7XHJcbiAgICBsZXQgbCA9ICgwLCB2LmNsZWFuUnVsZXMpKHQpO1xyXG4gICAgcmV0dXJuIGxcclxuICB9XHJcbiAgZ2V0U2l0ZU5hbWUoKSB7XHJcbiAgICByZXR1cm4gXCJqb2JzY29yZVwiXHJcbiAgfVxyXG4gIGlzUnVubmluZ0luSWZyYW1lKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy50b3AgIT09IHdpbmRvdy5zZWxmXHJcbiAgfVxyXG4gIGlzUnVubmluZ0luSm9iU2NvcmVJZnJhbWUoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNSdW5uaW5nSW5JZnJhbWUoKSkgcmV0dXJuICExO1xyXG4gICAgbGV0IGUgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIGlmIChlLnN0YXJ0c1dpdGgoXCJhYm91dDpibGFua1wiKSB8fCBlLnN0YXJ0c1dpdGgoXCJhYm91dDpcIikpIHJldHVybiAhMTtcclxuICAgIGxldCB0ID0gZS5pbmNsdWRlcyhcImpvYnNjb3JlLmNvbVwiKSB8fCBlLmluY2x1ZGVzKFwiam9ic2NvcmUuY29cIiksXHJcbiAgICAgIHIgPSBudWxsICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXNlY3Rpb24tY29udGFpbmVyXCIpIHx8IG51bGwgIT09IGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKSB8fCBudWxsICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWFyZWEtY29udGFpbmVyXCIpO1xyXG4gICAgcmV0dXJuIHQgJiYgclxyXG4gIH1cclxuICBoYXNPRkNDUElmcmFtZSgpIHtcclxuICAgIGlmICh0aGlzLmlzUnVubmluZ0luSWZyYW1lKCkpIHJldHVybiAhMTtcclxuICAgIGxldCBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpZnJhbWVcIik7XHJcbiAgICBmb3IgKGxldCB0IG9mIGUpIHtcclxuICAgICAgaWYgKCF0LnNyYykgY29udGludWU7XHJcbiAgICAgIGxldCBlID0gdC5zcmMuaW5jbHVkZXMoXCJvZmNjcC9mb3JtP2pvYl9pZD1cIikgJiYgdC5zcmMuaW5jbHVkZXMoXCImaW50ZXJuYWxfYm9hcmQ9XCIpO1xyXG4gICAgICBpZiAoZSkgcmV0dXJuICEwXHJcbiAgICB9XHJcbiAgICByZXR1cm4gITFcclxuICB9XHJcbiAgaGFzQ3Jvc3NPcmlnaW5Kb2JTY29yZUlmcmFtZSgpIHtcclxuICAgIGlmICh0aGlzLmlzUnVubmluZ0luSWZyYW1lKCkpIHJldHVybiAhMTtcclxuICAgIGxldCBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpZnJhbWVcIik7XHJcbiAgICBmb3IgKGxldCB0IG9mIGUpIHtcclxuICAgICAgaWYgKCF0LnNyYykgY29udGludWU7XHJcbiAgICAgIGxldCBlID0gdC5zcmMuaW5jbHVkZXMoXCJqb2JzY29yZS5jb21cIikgfHwgdC5zcmMuaW5jbHVkZXMoXCJqb2JzY29yZS5jb1wiKTtcclxuICAgICAgaWYgKGUpIHRyeSB7XHJcbiAgICAgICAgbGV0IGUgPSB0LmNvbnRlbnREb2N1bWVudCB8fCB0LmNvbnRlbnRXaW5kb3c/LmRvY3VtZW50O1xyXG4gICAgICAgIGlmICghZSkgcmV0dXJuICEwXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gITBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICExXHJcbiAgfVxyXG4gIHRyaWdnZXJKb2JTY29yZUlmcmFtZUZpbGwoZSA9ICExKSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzQ3Jvc3NPcmlnaW5Kb2JTY29yZUlmcmFtZSgpKSByZXR1cm47XHJcbiAgICBsZXQgdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaWZyYW1lXCIpO1xyXG4gICAgZm9yIChsZXQgciBvZiB0KSB7XHJcbiAgICAgIGlmICghci5zcmMpIGNvbnRpbnVlO1xyXG4gICAgICBsZXQgdCA9IHIuc3JjLmluY2x1ZGVzKFwiam9ic2NvcmUuY29tXCIpIHx8IHIuc3JjLmluY2x1ZGVzKFwiam9ic2NvcmUuY29cIik7XHJcbiAgICAgIGlmICghdCkgY29udGludWU7XHJcbiAgICAgIGxldCBuID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5pZnJhbWVMb2FkZWQgJiYgKHIuY29udGVudFdpbmRvdz8ucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgdHlwZTogZi5JRlJBTUVfRVZFTlRTLkVYRUNVVEVfSUZSQU1FX0ZVTkNUSU9OLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIGZyb21BZ2VudDogZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHVybDogci5zcmNcclxuICAgICAgICB9LCBcIipcIiksIGNsZWFySW50ZXJ2YWwobikpXHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwobilcclxuICAgICAgfSwgMWU0KVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBnZXRBdXRvZmlsbFNuYXBzaG90KGUpIHtcclxuICAgIGxldCB0ID0gYXdhaXQgKDAsIHcuZ2V0Rm9ybVNuYXBzaG90KSgpIHx8IHt9O1xyXG4gICAgdGhpcy5sYXN0RnVsbEF1dG9maWxsU25hcHNob3QgPSB0O1xyXG4gICAgbGV0IHtcclxuICAgICAgZWR1Y2F0aW9uOiByLFxyXG4gICAgICBlbXBsb3ltZW50OiBuLFxyXG4gICAgICAuLi5vXHJcbiAgICB9ID0gdDtcclxuICAgIHJldHVybiBvXHJcbiAgfVxyXG4gIGFzeW5jIGdldFN1Ym1pdFNuYXBzaG90KCkge1xyXG4gICAgbGV0IGUgPSBhd2FpdCAoMCwgdy5nZXRGb3JtU25hcHNob3QpKCkgfHwge307XHJcbiAgICB0aGlzLmxhc3RGdWxsU3VibWl0U25hcHNob3QgPSBlO1xyXG4gICAgbGV0IHtcclxuICAgICAgZWR1Y2F0aW9uOiB0LFxyXG4gICAgICBlbXBsb3ltZW50OiByLFxyXG4gICAgICAuLi5uXHJcbiAgICB9ID0gZTtcclxuICAgIHJldHVybiBuXHJcbiAgfVxyXG4gIGV4dHJhY3RFZHVjYXRpb25FbXBsb3ltZW50QWRkaXRpb25hbChlKSB7XHJcbiAgICBsZXQge1xyXG4gICAgICBlZHVjYXRpb246IHQsXHJcbiAgICAgIGVtcGxveW1lbnQ6IHJcclxuICAgIH0gPSBlIHx8IHt9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZWR1Y2F0aW9uOiB0IHx8IFtdLFxyXG4gICAgICBlbXBsb3ltZW50OiByIHx8IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEFkZGl0aW9uYWxBdXRvZmlsbFNuYXBzaG90RGF0YShlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5leHRyYWN0RWR1Y2F0aW9uRW1wbG95bWVudEFkZGl0aW9uYWwodGhpcy5sYXN0RnVsbEF1dG9maWxsU25hcHNob3QpXHJcbiAgfVxyXG4gIGdldEFkZGl0aW9uYWxTdWJtaXRTbmFwc2hvdERhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5leHRyYWN0RWR1Y2F0aW9uRW1wbG95bWVudEFkZGl0aW9uYWwodGhpcy5sYXN0RnVsbFN1Ym1pdFNuYXBzaG90KVxyXG4gIH1cclxuICBzdWJtaXRBcHBsaWNhdGlvbigpIHtcclxuICAgIGxldCBlID0gdGhpcy5nZXRTdWJtaXRCdXR0b25TZWxlY3RvcigpO1xyXG4gICAgaWYgKCFlKSByZXR1cm47XHJcbiAgICBsZXQgdCA9ICgwLCBkLmdldEZpcnN0T3JkZXJlZE5vZGUpKGUpO1xyXG4gICAgdCAmJiB0Py5jbGljaygpXHJcbiAgfVxyXG4gIGFzeW5jIGRvRmlsbEZvcm0odCA9ICExKSB7XHJcbiAgICBpZiAodGhpcy5pc1J1bm5pbmdJbkpvYlNjb3JlSWZyYW1lKCkpIHJldHVybiBhd2FpdCB0aGlzLmZpbGxJZnJhbWVGb3JtKHQpO1xyXG4gICAgaWYgKHRoaXMuaGFzT0ZDQ1BJZnJhbWUoKSkgcmV0dXJuIG5ldyBQcm9taXNlKGUgPT4ge1xyXG4gICAgICBsZXQgdCA9IHIgPT4ge1xyXG4gICAgICAgIHIuZGF0YS50eXBlID09PSBjLk1FU1NBR0VfRVZFTlRTLmF1dG9GaWxsUmVzdWx0RnJvbUlmcmFtZSAmJiAod2luZG93XHJcbiAgICAgICAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdCksIGUoci5kYXRhLmRhdGEpKVxyXG4gICAgICB9O1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdCksIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0KSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIuY2xlYXIoKSwgZSh0aGlzXHJcbiAgICAgICAgICAucHJvZ3Jlc3NUcmFja2VyLmdlbmVyYXRlRmluYWxQcm9ncmVzcygpKVxyXG4gICAgICB9LCA2ZTQpXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZUZpbGxGb3JtKCksICgwLCB2LnJlc2V0RmlsbGVkRWxlbWVudHNGb3JOZXdSdW4pKCk7XHJcbiAgICBsZXQgciA9IHRoaXMucHJlcGFyZUNvdmVyTGV0dGVyUnVsZXMoYXdhaXQgdGhpcy5leHRyYWN0Rm9ybVJ1bGVzKCkpO1xyXG4gICAgaWYgKCgwLCB2LmlzUmVzdW1lT25seVBhZ2UpKCkpIHJldHVybiB0aGlzLnByb2dyZXNzVHJhY2tlci5zZXRGaWVsZHNSZXF1aXJlZFN0YXR1cygoMCwgdlxyXG4gICAgICAgIC5nZXRSZXN1bWVPbmx5UGFnZVJlcXVpcmVkRmllbGRzKShyKSksIGF3YWl0IHRoaXMuaGFuZGxlUmVzdW1lVXBsb2FkKCksIHRoaXNcclxuICAgICAgLmZpbmFsaXplRmlsbEZvcm0oKTtcclxuICAgIGF3YWl0IHRoaXMuaGFuZGxlUmVzdW1lVXBsb2FkKCk7XHJcbiAgICBsZXQgbiA9IGF3YWl0IHRoaXMuZmV0Y2hGb3JtQW5zd2VycyhyLCB0KTtcclxuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBuKSByZXR1cm4gbjtcclxuICAgIHRoaXMuYW5zd2VyLmVkdWNhdGlvbiAmJiBBcnJheS5pc0FycmF5KHRoaXMuYW5zd2VyLmVkdWNhdGlvbikgJiYgYXdhaXQgKDAsIHZcclxuICAgICAgICAuYWRkRWR1Y2F0aW9uRm9ybUVsZW1lbnRzKSh0aGlzLmFuc3dlci5lZHVjYXRpb24pLCB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZSAmJiBBcnJheVxyXG4gICAgICAuaXNBcnJheSh0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZSkgJiYgKHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlID0gKDAsIHZcclxuICAgICAgICAubm9ybWFsaXplV29ya0V4cGVyaWVuY2VSZWNvcmRzKSh0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZSksIGF3YWl0ICgwLCB2XHJcbiAgICAgICAgLmFkZEVtcGxveW1lbnRGb3JtRWxlbWVudHMpKHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlKSk7XHJcbiAgICBsZXQgYSA9ICgwLCBpLm1hcmtUZXh0Q292ZXJMZXR0ZXJSdWxlcykoYXdhaXQgdGhpcy5leHRyYWN0Rm9ybVJ1bGVzKCEwKSksXHJcbiAgICAgIGwgPSB0aGlzLnByb2dyZXNzVHJhY2tlci5maWVsZFN0YXR1cy5maWVsZFJlcXVpcmVkU3RhdHVzLmZpbmQoZSA9PiBcIlJlc3VtZS9DVlwiID09PSBlXHJcbiAgICAgICAgLmxhYmVsKSxcclxuICAgICAgcyA9IHRoaXMucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzLmZpbGxlZEZpZWxkcy5pbmNsdWRlcyhcIlJlc3VtZS9DVlwiKTtcclxuICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnNldEZpZWxkc1JlcXVpcmVkU3RhdHVzKGEpLCAoMCwgdlxyXG4gICAgICAucmVzdG9yZVJlc3VtZVByb2dyZXNzQWZ0ZXJSdWxlc1VwZGF0ZSkoe1xyXG4gICAgICByZXN1bWVTdGF0dXNCZWZvcmU6IGwgPz8gdm9pZCAwLFxyXG4gICAgICB3YXNSZXN1bWVGaWxsZWQ6IHMsXHJcbiAgICAgIHVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXM6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMsXHJcbiAgICAgIHVwZGF0ZUZpbGxlZFByb2dyZXNzOiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzc1xyXG4gICAgfSk7XHJcbiAgICBsZXQgZCA9IGEuZmlsdGVyKGUgPT4gZS50eXBlICE9PSBjLkZJRUxEX1RZUEUuRURVQ0FUSU9OICYmIGUudHlwZSAhPT0gYy5GSUVMRF9UWVBFXHJcbiAgICAgIC5FTVBMT1lNRU5UICYmIFwiJGlucHV0XCIgaW4gZSAmJiBlLiRpbnB1dD8uY2xvc2VzdChcIi5qcy1hcmVhLWNvbnRhaW5lci5jb250YWN0XCIpICE9PSBudWxsXHJcbiAgICAgICk7XHJcbiAgICBpZiAoZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCB7XHJcbiAgICAgICAgbWFpbkNvdW50cnlSdWxlczogZSxcclxuICAgICAgICByZWd1bGFyUnVsZXM6IHJcclxuICAgICAgfSA9ICgwLCB5LnBhcnRpdGlvbkpvYlNjb3JlQ29udGFjdFJ1bGVzKShkKTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFJ1bkNvdW50cnlQcmVmaWxsZWQpXHJcbiAgICAgICAgZm9yIChsZXQgdCBvZiBlKSB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyh0LmxhYmVsKTtcclxuICAgICAgYXdhaXQgdGhpcy5maWxsUmVndWxhckZpZWxkcygoMCwgYi5vcmRlckpvYlNjb3JlQ29udGFjdFJ1bGVzKShyKSk7XHJcbiAgICAgIGxldCBuID0gKDAsIGIuZ2V0Sm9iU2NvcmVMb2NhdGlvblJldHJ5UnVsZXMpKGF3YWl0ICgwLCB3LmV4dHJhY3RSdWxlcykoXHJcbiAgICAgICAgXCJkaXYuanMtYXJlYS1jb250YWluZXIuY29udGFjdFwiKSk7XHJcbiAgICAgIGlmIChuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgZSA9IGF3YWl0IHRoaXMucmVxdWVzdEZvcm1BbnN3ZXJzKG4sIHQsIHtcclxuICAgICAgICAgIHVwZGF0ZVRpbWVUcmFjZTogITFcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkgcmV0dXJuIGU7XHJcbiAgICAgICAgZSAmJiB0aGlzLm1lcmdlQ29tYm9RdWVzdGlvbkFuc3dlcihlLCBuKSwgKDAsIHYucmVzZXRGaWxsZWRFbGVtZW50c0Zvck5ld1J1bikoKSwgdGhpc1xyXG4gICAgICAgICAgLmFuc3dlci5yZWd1bGFyID0gKDAsIGIuYXBwbHlKb2JTY29yZUxvY2F0aW9uRmFsbGJhY2tzKSh0aGlzLmFuc3dlci5yZWd1bGFyLCB0aGlzXHJcbiAgICAgICAgICAgIC5jdXJyZW50UnVuQXV0b2ZpbGxJbmZvKSwgYXdhaXQgdGhpcy5maWxsUmVndWxhckZpZWxkcyhuKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2UgJiYgQXJyYXkuaXNBcnJheSh0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZSkpIHtcclxuICAgICAgbGV0IHtcclxuICAgICAgICBleHRyYWN0RW1wbG95bWVudFJ1bGVzOiB0XHJcbiAgICAgIH0gPSBhd2FpdCBlKFwiZGEzYWUwYzhkOGFjYWZlMVwiKSwgciA9IGF3YWl0IHQoXHJcbiAgICAgICAgXCIuanMtYXJlYS1jb250YWluZXIuZXhwZXJpZW5jZVtkYXRhLWRpc3BsYXk9J2Zvcm0nXVwiKTtcclxuICAgICAgKDAsIHUuc2V0U2VjdGlvblJlc3VsdEZvY3VzUnVsZXMpKFwiZW1wbG95bWVudFwiLCByKTtcclxuICAgICAgbGV0IG4gPSAoMCwgdi5vcmRlcldvcmtFeHBlcmllbmNlQnlEb20pKHIsIHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlLCB2XHJcbiAgICAgICAgICAubm9ybWFsaXplV29ya0V4cGVyaWVuY2VSZWNvcmRzKSxcclxuICAgICAgICBpID0gKDAsIG8uZ2V0RW1wbG95bWVudE9wZXJhdGlvbnMpKHIsIG4sIHRoaXMub3BlcmF0aW9uQ29uZmlnLCB2b2lkIDAsIHtcclxuICAgICAgICAgIG9uQ29tcGxldGVkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHIubGVuZ3RoID4gMCAmJiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhcIkVtcGxveW1lbnRcIilcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvblNraXBwZWQ6ICgpID0+IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiRW1wbG95bWVudFwiKSxcclxuICAgICAgICAgIG9uU2VjdGlvblJlc3VsdENoYW5nZWQ6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVNlY3Rpb25SZXN1bHRcclxuICAgICAgICB9KTtcclxuICAgICAgZm9yIChsZXQgZSBvZiBpKSB0aGlzLnRhc2tRdWV1ZS5hZGQoZSk7XHJcbiAgICAgIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hbnN3ZXIuZWR1Y2F0aW9uICYmIEFycmF5LmlzQXJyYXkodGhpcy5hbnN3ZXIuZWR1Y2F0aW9uKSkge1xyXG4gICAgICBsZXQgdCA9ICgwLCB2Lm5vcm1hbGl6ZUVkdWNhdGlvblJlY29yZHMpKHRoaXMuYW5zd2VyLmVkdWNhdGlvbiksXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZXh0cmFjdEVkdWNhdGlvblJ1bGVzOiByXHJcbiAgICAgICAgfSA9IGF3YWl0IGUoXCJkYTNhZTBjOGQ4YWNhZmUxXCIpLFxyXG4gICAgICAgIG4gPSBhd2FpdCByKCcuanMtYXJlYS1jb250YWluZXIuZWR1Y2F0aW9uW2RhdGEtZGlzcGxheT1cImZvcm1cIl0nKTtcclxuICAgICAgKDAsIHUuc2V0U2VjdGlvblJlc3VsdEZvY3VzUnVsZXMpKFwiZWR1Y2F0aW9uXCIsIG4pO1xyXG4gICAgICBsZXQgaSA9ICgwLCBvLmdldEVkdWNhdGlvbk9wZXJhdGlvbnMpKG4sIHQsIHRoaXMub3BlcmF0aW9uQ29uZmlnLCB2b2lkIDAsIHtcclxuICAgICAgICBvbkNvbXBsZXRlZDogKCkgPT4ge1xyXG4gICAgICAgICAgbi5sZW5ndGggPiAwICYmIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKFwiRWR1Y2F0aW9uXCIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblNraXBwZWQ6ICgpID0+IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiRWR1Y2F0aW9uXCIpLFxyXG4gICAgICAgIG9uU2VjdGlvblJlc3VsdENoYW5nZWQ6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVNlY3Rpb25SZXN1bHRcclxuICAgICAgfSk7XHJcbiAgICAgIGZvciAobGV0IGUgb2YgaSkgdGhpcy50YXNrUXVldWUuYWRkKGUpO1xyXG4gICAgICBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKVxyXG4gICAgfVxyXG4gICAgbGV0IGYgPSBhLmZpbHRlcihlID0+IGUudHlwZSAhPT0gYy5GSUVMRF9UWVBFLkVEVUNBVElPTiAmJiBlLnR5cGUgIT09IGMuRklFTERfVFlQRVxyXG4gICAgICAuRU1QTE9ZTUVOVCAmJiBcIiRpbnB1dFwiIGluIGUgJiYgZS4kaW5wdXQ/LmNsb3Nlc3QoXCIuanMtc2VjdGlvbi1xdWVzdGlvbnNcIikgIT09IG51bGwpO1xyXG4gICAgZi5sZW5ndGggPiAwICYmIGF3YWl0IHRoaXMuZmlsbFJlZ3VsYXJGaWVsZHMoZiksIGF3YWl0IHRoaXMuZmlsbENvdmVyTGV0dGVyRmllbGRzKCk7XHJcbiAgICBsZXQgcCA9IGF3YWl0IHRoaXMucnVuQ29tYm9RdWVzdGlvbkF1dG9maWxsSWZOZWVkZWQoYSwgdCk7XHJcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgcCkgcmV0dXJuIHA7XHJcbiAgICBsZXQgbSA9IHA7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5leGVjdXRlU2l0ZVNwZWNpZmljU3RlcHMobSksIHRoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZSB8fCAoMCwgdlxyXG4gICAgICAuc3luY1Jlc3VtZUZpbGxlZFByb2dyZXNzKSh0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzLCB0aGlzXHJcbiAgICAgIC5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpLCB0aGlzLmZpbmFsaXplRmlsbEZvcm0oKVxyXG4gIH1cclxuICBhc3luYyBoYW5kbGVSZXN1bWVVcGxvYWQoKSB7XHJcbiAgICB0aGlzLmRpc2FibGVVcGxvYWRSZXN1bWUgPyAoYXdhaXQgKDAsIHYucmVtb3ZlUmVzdW1lKSgpLCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJSZXN1bWUvQ1ZcIikpIDogdGhpcy50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgKDAsIHYucmVtb3ZlUmVzdW1lKSgpLCBhd2FpdCAoMCwgdi51cGxvYWRSZXN1bWUpKHRoaXMucmVzdW1lSW5mbywgdGhpc1xyXG4gICAgICAgIC5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cywgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpXHJcbiAgICB9KSwgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICB9XHJcbiAgYXN5bmMgcnVuUHJlRmlsbEZvcm0oKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRSdW5Db3VudHJ5ID0gbnVsbCwgdGhpcy5jdXJyZW50UnVuQ291bnRyeVByZWZpbGxlZCA9ICExLCB0aGlzXHJcbiAgICAgIC5jdXJyZW50UnVuQXV0b2ZpbGxJbmZvID0gbnVsbDtcclxuICAgIGxldCBlID0gYXdhaXQgKDAsIHkucnVuSm9iU2NvcmVDb3VudHJ5UHJlZmlsbCkoe1xyXG4gICAgICBwcmVGaWxsRm9ybTogdi5wcmVGaWxsRm9ybSxcclxuICAgICAgZmV0Y2hBdXRvZmlsbEluZm86IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgZSA9IGF3YWl0ICgwLCBwLnVzZUF1dG9maWxsSW5mb1N0b3JlKS5nZXRTdGF0ZSgpLmZldGNoQXV0b2ZpbGxJbmZvKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFJ1bkF1dG9maWxsSW5mbyA9IGUsIGVcclxuICAgICAgfSxcclxuICAgICAgcHJlZmlsbENvdW50cnk6IGUgPT4gKDAsIHkucHJlZmlsbEpvYlNjb3JlQ291bnRyeSkoZSksXHJcbiAgICAgIHdhaXRGb3JTdGF0ZVByb3ZpbmNlOiBhc3luYyBlID0+IHtcclxuICAgICAgICBhd2FpdCAoMCwgeS53YWl0Rm9ySm9iU2NvcmVTdGF0ZVByb3ZpbmNlQ29udHJvbCkoZSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmN1cnJlbnRSdW5Db3VudHJ5ID0gZS5jb3VudHJ5LCB0aGlzLmN1cnJlbnRSdW5Db3VudHJ5UHJlZmlsbGVkID0gZS5wcmVmaWxsZWRcclxuICB9XHJcbiAgZ2V0U3VibWl0QnV0dG9uU2VsZWN0b3IoKSB7XHJcbiAgICByZXR1cm4gJy4vL2J1dHRvbltAaWQ9XCJhcHBseS1idXR0b25cIiBvciAoQHR5cGU9XCJzdWJtaXRcIiBhbmQgKGNvbnRhaW5zKEBjbGFzcywgXCJqcy1idG4tYXBwbHlcIikgb3IgY29udGFpbnMoQGNsYXNzLCBcImpzLWJ0blwiKSkpXSdcclxuICB9XHJcbiAgY29uc3RydWN0b3IoLi4uZSkge1xyXG4gICAgc3VwZXIoLi4uZSksIHRoaXMuaGFzQ29tYm9RdWVzdGlvbnMgPSAhMCwgdGhpcy5sYXN0RnVsbEF1dG9maWxsU25hcHNob3QgPSBudWxsLCB0aGlzXHJcbiAgICAgIC5sYXN0RnVsbFN1Ym1pdFNuYXBzaG90ID0gbnVsbCwgdGhpcy5jdXJyZW50UnVuQ291bnRyeSA9IG51bGwsIHRoaXNcclxuICAgICAgLmN1cnJlbnRSdW5Db3VudHJ5UHJlZmlsbGVkID0gITEsIHRoaXMuY3VycmVudFJ1bkF1dG9maWxsSW5mbyA9IG51bGwsIHRoaXMuZm9ybWF0QW5zd2VyID1cclxuICAgICAgZSA9PiAoMCwgZy5mb3JtYXRBbnN3ZXIpKGUpXHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iU2NvcmUuYzY0ZmU2NzMuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);