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
})({"559S8":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\greenhouse\\rules.js",
    "bundleId": "3fa1f04f687299a5",
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
var j = z(require("48b09d0e05b833e5"));
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

},{"48b09d0e05b833e5":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"fp7A1":[function(require,module,exports) {
/**
 * Parcel module id: jly3y
 * Resolved path: src/contents/sites/greenhouse/rules.js
 * Dependencies:
 *   ../education-item-trace -> j7UGI  =>  src/contents/sites/education-item-trace.js
 *   ./field-labels -> awNtS  =>  src/contents/sites/greenhouse/field-labels.js
 *   ./race -> cQ4Jg  =>  src/contents/sites/greenhouse/race.js
 *   ./rule-options -> k315S  =>  src/contents/sites/greenhouse/rule-options.js
 *   ./select-labels -> dy7Jk  =>  src/contents/sites/greenhouse/select-labels.js
 *   ./snapshot-alignment -> ewjev  =>  src/contents/sites/greenhouse/snapshot-alignment.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~contents/shared/constants -> ayCbq  =>  src/contents/shared/constants.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getRules", ()=>g), n.export(r, "getEducationRules", ()=>y), n.export(r, "getExperienceRules", ()=>v), n.export(r, "getAutocompleteRule", ()=>A), n.export(r, "getEduRule", ()=>j), n.export(r, "getEmploymentRule", ()=>D), n.export(r, "getFormSnapshot", ()=>L), n.export(r, "getEduSnapshot", ()=>M), n.export(r, "getEmploymentSnapshot", ()=>N), n.export(r, "getEduAndEmploymentSnapshot", ()=>$);
var o = e("~contents/methods/dom"), i = e("~contents/methods/observer"), a = e("~contents/shared/constants"), l = e("~core/enums"), s = e("~core/xpath"), u = e("~utils/delay"), c = e("../education-item-trace"), d = e("./field-labels"), f = e("./race"), p = e("./rule-options"), m = e("./select-labels"), h = e("./snapshot-alignment");
async function g() {
    let e1 = new URL(window.location.href), t = e1.hostname;
    if (!t.startsWith("job-boards.")) return await b();
    {
        let e1 = await F(document.body);
        return e1;
    }
}
async function b() {
    let e1 = [], t = (0, s.getOrderedNodesSafe)(`//div[contains(concat(' ', normalize-space(@class), ' '), ' field ') and not(contains(@class, 'hidden'))]/descendant::label[
      not(ancestor::label)
      and not(contains(@class, 'offscreen'))
      and normalize-space(.) != ''
      and not(contains(translate(parent::*/@style, ' ', ''), 'display:none'))
      and not((following-sibling::input | preceding-sibling::input)[@disabled])
      and not(ancestor::div[contains(concat(' ', normalize-space(@class), ' '), ' hidden ')])
      and not(ancestor::div[starts-with(@class, "field demographic_question")])
      and not(ancestor::*[@id='education_section' or contains(@class, 'education--container')])
      and not(ancestor::*[@id='employment_section' or contains(@class, 'employment--container')])
    ][1]`);
    for (let r1 of t){
        let t = w(r1);
        t && e1.push(t);
    }
    let r1 = (0, s.getOrderedNodesSafe)('//div[starts-with(@class, "field demographic_question")]');
    for (let t of r1){
        let r1 = k(t);
        r1 && e1.push(r1);
    }
    let n = e1.some((e1)=>e1.type === l.FIELD_TYPE.SELECT && e1.label.toLowerCase().includes("hispanic"));
    if (n) {
        let t = e1.some((e1)=>(0, f.isGreenhouseRaceLabel)(e1.label));
        if (!t) {
            let t = (0, s.getFirstOrderedNodeSafe)("//div[@id='race_dropdown_container'] | //div[contains(@class, 'field')][.//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'race')]]", document);
            if (t) {
                let r1 = (0, s.getFirstOrderedNodeSafe)(".//label[not(contains(@class, 'offscreen'))]", t), n = (0, s.getFirstOrderedNodeSafe)(".//select", t);
                if (r1 && n) {
                    let t = (0, s.getOrderedNodesSafe)("./option", n);
                    e1.push({
                        label: T(r1),
                        $label: r1,
                        required: "true" === n.getAttribute("aria-required"),
                        type: l.FIELD_TYPE.SELECT,
                        $input: n,
                        options: t.map((e1)=>e1.textContent?.trim() ?? "").filter((e1)=>![
                                "",
                                "--",
                                "please select"
                            ].includes(e1.toLowerCase()))
                    });
                }
            }
        }
    }
    let o = await y();
    e1.push(...o);
    let i = await v();
    return e1.push(...i), e1;
}
function y() {
    let e1 = (0, s.getFirstOrderedNodeSafe)(".//div[(@id='education_section' or contains(@class, 'education--container'))]", document), t = [];
    if (!e1) return t;
    let r1 = (0, s.getOrderedNodesSafe)(`.//div[
      (
        (contains(@class, 'education') and not(contains(@class, 'container')))
        or contains(@class, 'education--form')
      )
      and not(ancestor::div[
        (contains(@class, 'education') and not(contains(@class, 'container')))
        or contains(@class, 'education--form')
      ])
    ]`, e1), n = r1 && r1.length > 0 ? r1 : [
        e1
    ];
    for(let e1 = 0; e1 < n.length; e1++){
        let r1 = n[e1], o = (0, s.getOrderedNodesSafe)(".//label[not(ancestor::label) and not(contains(@class, 'offscreen')) and normalize-space(.) != '' and not(contains(translate(parent::*/@style, ' ', ''), 'display:none')) and not((following-sibling::input | preceding-sibling::input)[@disabled])]", r1), i = [];
        if (o.length > 0) for (let e1 of o){
            let t = w(e1);
            t && i.push(t);
        }
        let a = (0, s.getFirstOrderedNodeSafe)(".//input[contains(@class, 'start-date-month')] | .//input[contains(@class, 'start-date') and contains(@class, 'month')]", r1), u = null;
        if (a) {
            let e1 = a.closest("fieldset");
            e1 && (u = (0, s.getFirstOrderedNodeSafe)(".//legend//label | .//label", e1)), u || (u = (0, s.getFirstOrderedNodeSafe)("preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')]", a));
        }
        if (a && !i.some((e1)=>e1.label.toLowerCase().includes("start date month"))) {
            let e1 = a.closest(".select__container");
            e1 ? i.push({
                type: l.FIELD_TYPE.SEARCH,
                label: "Start date month",
                $label: u || a,
                $input: e1,
                required: "true" === a.getAttribute("aria-required")
            }) : i.push({
                type: l.FIELD_TYPE.TEXT,
                label: "Start date month",
                $label: u || a,
                $input: a,
                required: "true" === a.getAttribute("aria-required")
            });
        }
        let c = (0, s.getFirstOrderedNodeSafe)(".//input[contains(@class, 'start-date-year')] | .//input[contains(@class, 'start-date') and contains(@class, 'year')]", r1), d = null;
        if (c) {
            let e1 = c.closest("fieldset");
            e1 && (d = (0, s.getFirstOrderedNodeSafe)(".//legend//label | .//label", e1)), d || (d = (0, s.getFirstOrderedNodeSafe)("preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')]", c));
        }
        c && !i.some((e1)=>e1.label.toLowerCase().includes("start date year")) && i.push({
            type: l.FIELD_TYPE.TEXT,
            label: "Start date year",
            $label: d || c,
            $input: c,
            required: "true" === c.getAttribute("aria-required")
        });
        let f = (0, s.getFirstOrderedNodeSafe)(".//input[contains(@class, 'end-date-month')] | .//input[contains(@class, 'end-date') and contains(@class, 'month')]", r1), m = null;
        if (f) {
            let e1 = f.closest("fieldset");
            e1 && (m = (0, s.getFirstOrderedNodeSafe)(".//legend//label | .//label", e1)), m || (m = (0, s.getFirstOrderedNodeSafe)("preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')]", f));
        }
        if (f && !i.some((e1)=>e1.label.toLowerCase().includes("end date month"))) {
            let e1 = f.closest(".select__container");
            e1 ? i.push({
                type: l.FIELD_TYPE.SEARCH,
                label: "End date month",
                $label: m || f,
                $input: e1,
                required: "true" === f.getAttribute("aria-required")
            }) : i.push({
                type: l.FIELD_TYPE.TEXT,
                label: "End date month",
                $label: m || f,
                $input: f,
                required: "true" === f.getAttribute("aria-required")
            });
        }
        let h = (0, s.getFirstOrderedNodeSafe)(".//input[contains(@class, 'end-date-year')] | .//input[contains(@class, 'end-date') and contains(@class, 'year')]", r1), g = null;
        if (h) {
            let e1 = h.closest("fieldset");
            e1 && (g = (0, s.getFirstOrderedNodeSafe)(".//legend//label | .//label", e1)), g || (g = (0, s.getFirstOrderedNodeSafe)("preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')]", h));
        }
        if (h && !i.some((e1)=>e1.label.toLowerCase().includes("end date year")) && i.push({
            type: l.FIELD_TYPE.TEXT,
            label: "End date year",
            $label: g || h,
            $input: h,
            required: "true" === h.getAttribute("aria-required")
        }), i.length > 0) {
            let e1 = {
                type: l.FIELD_TYPE.EDUCATION,
                label: "Education",
                children: i,
                options: (0, p.buildGreenhouseEducationOptionDescriptors)(i),
                required: !1
            };
            t.push(e1);
        }
    }
    return t;
}
function v() {
    let e1 = (0, s.getFirstOrderedNodeSafe)(".//div[(@id='employment_section' or contains(@class, 'employment--container'))]", document), t = [];
    if (!e1) return t;
    let r1 = (0, s.getOrderedNodesSafe)(`.//div[
      (contains(@class, 'employment') and not(contains(@class, 'container')))
      or contains(@class, 'employment-form')
    ]`, e1), n = r1 && r1.length > 0 ? r1 : [
        e1
    ];
    for (let e1 of n){
        let r1 = (0, s.getOrderedNodesSafe)(".//label[not(ancestor::label) and not(contains(@class, 'offscreen')) and normalize-space(.) != '' and not(contains(translate(parent::*/@style, ' ', ''), 'display:none')) and not((following-sibling::input | preceding-sibling::input)[@disabled])]", e1), n = [];
        if (r1.length > 0) for (let e1 of r1){
            let t = w(e1);
            t && n.push(t);
        }
        let o = (0, s.getFirstOrderedNodeSafe)(".//input[contains(@class, 'start-date-month')] | .//input[contains(@class, 'start-date') and contains(@class, 'month')]", e1), i = null;
        if (o) {
            let e1 = o.closest("fieldset");
            e1 && (i = (0, s.getFirstOrderedNodeSafe)(".//legend//label | .//label", e1)), i || (i = (0, s.getFirstOrderedNodeSafe)("preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')]", o));
        }
        o && !n.some((e1)=>e1.label.toLowerCase().includes("start date month")) && n.push({
            type: l.FIELD_TYPE.TEXT,
            label: "Start date month",
            $label: i || o,
            $input: o,
            required: !0
        });
        let a = (0, s.getFirstOrderedNodeSafe)(".//input[contains(@class, 'start-date-year')] | .//input[contains(@class, 'start-date') and contains(@class, 'year')]", e1), u = null;
        if (a) {
            let e1 = a.closest("fieldset");
            e1 && (u = (0, s.getFirstOrderedNodeSafe)(".//legend//label | .//label", e1)), u || (u = (0, s.getFirstOrderedNodeSafe)("preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'start')]", a));
        }
        a && !n.some((e1)=>e1.label.toLowerCase().includes("start date year")) && n.push({
            type: l.FIELD_TYPE.TEXT,
            label: "Start date year",
            $label: u || a,
            $input: a,
            required: !0
        });
        let c = (0, s.getFirstOrderedNodeSafe)(".//input[contains(@class, 'end-date-month')] | .//input[contains(@class, 'end-date') and contains(@class, 'month')]", e1), d = null;
        if (c) {
            let e1 = c.closest("fieldset");
            e1 && (d = (0, s.getFirstOrderedNodeSafe)(".//legend//label | .//label", e1)), d || (d = (0, s.getFirstOrderedNodeSafe)("preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')]", c));
        }
        c && !n.some((e1)=>e1.label.toLowerCase().includes("end date month")) && n.push({
            type: l.FIELD_TYPE.TEXT,
            label: "End date month",
            $label: d || c,
            $input: c,
            required: !0
        });
        let f = (0, s.getFirstOrderedNodeSafe)(".//input[contains(@class, 'end-date-year')] | .//input[contains(@class, 'end-date') and contains(@class, 'year')]", e1), p = null;
        if (f) {
            let e1 = f.closest("fieldset");
            e1 && (p = (0, s.getFirstOrderedNodeSafe)(".//legend//label | .//label", e1)), p || (p = (0, s.getFirstOrderedNodeSafe)("preceding::label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')] | ancestor::*[contains(@class, 'field')]//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'end')]", f));
        }
        f && !n.some((e1)=>e1.label.toLowerCase().includes("end date year")) && n.push({
            type: l.FIELD_TYPE.TEXT,
            label: "End date year",
            $label: p || f,
            $input: f,
            required: !0
        });
        let m = (0, s.getFirstOrderedNodeSafe)(".//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'current')]", e1), h = null;
        if (m && (h = (0, s.getFirstOrderedNodeSafe)(".//input[@type='checkbox']", m)), h || (h = (0, s.getFirstOrderedNodeSafe)(".//input[@type='checkbox' and (contains(@id, 'current') or contains(@id, 'employment_current') or contains(@name, 'current'))]", e1)), h && !n.some((e1)=>e1.label.toLowerCase().includes("current")) && n.push({
            type: l.FIELD_TYPE.CHECKBOX,
            label: "Current role",
            $label: m || h,
            $input: h,
            $checkboxs: [
                h
            ],
            options: [
                "True",
                "False"
            ],
            required: !1
        }), n.length > 0) {
            let e1 = {
                type: l.FIELD_TYPE.EMPLOYMENT,
                label: "employment",
                children: n,
                options: [
                    ...n.map((e1)=>({
                            type: e1.type,
                            label: e1.label,
                            options: e1.options || []
                        }))
                ],
                required: !1
            };
            t.push(e1);
        }
    }
    return t;
}
function w(e1) {
    let t = [
        E,
        x,
        A,
        C
    ];
    for (let r1 of t){
        let t = r1(e1);
        if (t) return t;
    }
    return null;
}
function S(e1) {
    return null != (0, s.getFirstOrderedNodeSafe)(".//*[text()='*'] | .//*[@class='asterisk']", e1);
}
_c = S;
function E(e1) {
    let t = "LEGEND" === e1.tagName ? e1.parentElement : e1.closest("fieldset, div.field") || e1.parentElement;
    if (!t) return null;
    let r1 = (0, s.getOrderedNodesSafe)(".//input[@type='checkbox']", t), n = t.contains(e1) && r1.length > 1;
    if (n) {
        let t = [], n = [];
        for (let e1 of r1){
            let r1 = (0, s.getFirstOrderedNodeSafe)(`parent::label | //label[@for='${e1.id}']`, e1);
            r1 && r1.textContent && (t.push(r1.textContent.trim()), n.push(e1));
        }
        if (t.length > 0) return {
            label: T(e1),
            $label: e1,
            type: l.FIELD_TYPE.CHECKBOX,
            required: S(e1),
            $checkboxs: n,
            options: t,
            $input: n[0]
        };
    }
    let o = (0, s.getFirstOrderedNodeSafe)(".//input[@type='checkbox']", e1);
    if (o) {
        let t = T(e1), r1 = (0, s.getFirstOrderedNodeSafe)(`parent::label | //label[@for='${o.id}']`, o);
        return r1 && r1.textContent && (t = r1.textContent.trim()), {
            label: T(e1),
            $label: e1,
            type: l.FIELD_TYPE.CHECKBOX,
            required: S(e1),
            $checkboxs: [
                o
            ],
            options: [
                t
            ],
            $input: o
        };
    }
    return null;
}
_c1 = E;
function x(e1) {
    let t = (0, s.getFirstOrderedNodeSafe)(".//select[not(ancestor::select)] | following-sibling::select", e1);
    if (!t) {
        let r1 = e1.closest("div.field") || e1.parentElement;
        r1 && (t = (0, s.getFirstOrderedNodeSafe)(".//select[not(ancestor::select)]", r1));
    }
    if (t || (t = (0, s.getFirstOrderedNodeSafe)("descendant::select | following-sibling::select | ancestor::div[@class='field']//select", e1)), t) {
        let r1 = (0, s.getOrderedNodesSafe)("./option", t);
        return {
            label: T(e1),
            $label: e1,
            required: S(e1),
            type: l.FIELD_TYPE.SELECT,
            $input: t,
            options: r1.map((e1)=>e1.textContent?.trim() ?? "").filter((e1)=>![
                    "",
                    "--",
                    "please select"
                ].includes(e1.toLowerCase()))
        };
    }
    let r1 = e1.closest("fieldset, div.field, div.demographic_question") || e1.parentElement, n = (0, s.getOrderedNodesSafe)(".//input[@type='radio']", r1);
    if (r1.contains(e1) && n.length > 1) {
        let t = [], r1 = [];
        for (let e1 of n){
            let n = (0, s.getFirstOrderedNodeSafe)(`parent::label | //label[@for='${e1.id}']`, e1);
            n && n.textContent && (t.push(n.textContent.trim()), r1.push(e1));
        }
        if (t.length > 0) return {
            label: T(e1),
            $label: e1,
            required: S(e1),
            type: l.FIELD_TYPE.SELECT,
            $input: r1[0],
            $radios: r1,
            options: t
        };
    }
    let o = (0, s.getFirstOrderedNodeSafe)("following-sibling::*[contains(@class, 'select2-container')] | .//*[contains(@class, 'select2-container')]", e1);
    if (o) {
        let t = (0, s.getFirstOrderedNodeSafe)("following-sibling::select", o);
        if (t || (t = (0, s.getFirstOrderedNodeSafe)(".//select", e1)), !t) {
            let r1 = e1.closest("div.field") || e1.parentElement;
            r1 && (t = (0, s.getFirstOrderedNodeSafe)(".//select", r1));
        }
        if (t) {
            let r1 = (0, s.getOrderedNodesSafe)("./option", t);
            return {
                label: T(e1),
                $label: e1,
                required: S(e1),
                type: l.FIELD_TYPE.SELECT,
                $input: t,
                options: r1.map((e1)=>e1.textContent?.trim() ?? "").filter((e1)=>![
                        "",
                        "--",
                        "please select"
                    ].includes(e1.toLowerCase()))
            };
        }
        return {
            label: T(e1),
            $label: e1,
            required: S(e1),
            type: l.FIELD_TYPE.SELECT,
            $input: o,
            options: []
        };
    }
    return null;
}
function C(e1) {
    let t = `
    following-sibling::input[not(@type='hidden' or @type='checkbox' or @type='radio' or @type='file' or @type='submit' or @type='button')] |
    following-sibling::textarea |
    .//input[not(@type='hidden' or @type='checkbox' or @type='radio' or @type='file' or @type='submit' or @type='button')] |
    .//textarea
  `, r1 = (0, s.getFirstOrderedNodeSafe)(t, e1);
    return r1 ? {
        label: T(e1),
        $label: e1,
        required: S(e1),
        type: l.FIELD_TYPE.TEXT,
        $input: r1
    } : null;
}
_c2 = C;
function A(e1) {
    let t = e1.innerText.trim().toLowerCase(), r1 = [
        "where is your permanent (city, state) work location?"
    ];
    if (r1.includes(T(e1).toLowerCase())) return null;
    let n = t.includes("location");
    if (n) {
        let t = (0, s.getFirstOrderedNodeSafe)("following-sibling::*", e1), r1 = t && (t.querySelector('.select__container, .select2-container, [role="combobox"], [role="listbox"]') || t.classList.contains("select__container") || t.classList.contains("select2-container") || "combobox" === t.getAttribute("role"));
        return r1 ? {
            label: T(e1),
            $label: e1,
            type: l.FIELD_TYPE.SEARCH,
            required: S(e1),
            $input: t
        } : null;
    }
    return null;
}
_c3 = A;
function k(e1) {
    let t = Array.from(e1.childNodes).filter((e1)=>e1.nodeType === Node.TEXT_NODE && e1.textContent?.trim()).map((e1)=>e1.textContent?.trim()).join(" ").replace(/\*$/, "").trim();
    if (!t) return null;
    let r1 = (0, s.getOrderedNodesSafe)(".//label", e1), n = r1.map((e1)=>e1.innerText.trim()).filter(Boolean);
    if (0 === n.length) return null;
    let o = (0, s.getFirstOrderedNodeSafe)(".//input[@type='radio' or @type='checkbox']", e1);
    if (!o) return null;
    let i = "radio" === o.type ? l.FIELD_TYPE.SELECT : l.FIELD_TYPE.CHECKBOX;
    return {
        label: t,
        $label: e1,
        type: i,
        required: S(e1),
        options: n,
        $checkboxs: r1.map((e1)=>(0, s.getFirstOrderedNodeSafe)(".//input[@type='checkbox']", e1)) || [],
        $input: o
    };
}
function T(e1) {
    let t = "";
    for (let r1 of e1.childNodes)r1.nodeType === Node.TEXT_NODE && (t += r1.textContent?.trim() ?? "");
    return t || e1.innerText.trim();
}
_c4 = T;
async function F(e1) {
    let t = [], r1 = (0, s.getOrderedNodesSafe)(`.//div[contains(@class, 'text-input-wrapper')
     and not(ancestor::div[contains(@class, 'education--container')])
     and not(ancestor::div[contains(@class, 'employment--container')])]`, e1), n = P(r1);
    t.push(...n);
    let o = I(e1);
    t.push(...o);
    let i = (0, s.getOrderedNodesSafe)(`.//div[contains(@class, 'select__container')
    and not(ancestor::div[contains(@class, 'education--container')])
    and not(ancestor::div[contains(@class, 'employment--container')])]`, e1), a = await _(i, !1, !0);
    t.push(...a);
    let u = (0, s.getFirstOrderedNodeSafe)(".//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'hispanic')]", e1);
    if (u) {
        let e1 = t.find((e1)=>(0, f.isGreenhouseRaceLabel)(e1.label));
        if (e1) {
            let t = e1;
            t.options && 0 !== t.options.length || (e1.options = f.RACE_FALLBACK_OPTIONS);
        } else t.push({
            label: "Please identify your race",
            required: !1,
            type: l.FIELD_TYPE.SEARCH,
            options: f.RACE_FALLBACK_OPTIONS
        });
    }
    let c = await j(!1, !0);
    c.length > 0 && t.push(...c);
    let d = await D(!1, !0);
    return d.length > 0 && t.push(...d), t;
}
_c5 = F;
function I(e1) {
    let t = [], r1 = new Set, n = (0, s.getOrderedNodesSafe)(`.//label[
      not(ancestor::div[contains(@class, 'education--container')])
      and not(ancestor::div[contains(@class, 'employment--container')])
      and not(ancestor::div[contains(@class, 'text-input-wrapper')])
      and not(ancestor::div[contains(@class, 'select__container')])
      and (
        following-sibling::input[@type='checkbox']
        or parent::div//input[@type='checkbox']
        or parent::label//input[@type='checkbox']
        or .//input[@type='checkbox']
      )
    ] | .//fieldset[contains(@class, 'checkbox')]/legend`, e1);
    for (let e1 of n){
        let n = E(e1);
        if (n) {
            let e1 = (n.$checkboxs || []).map((e1)=>e1.id).filter(Boolean), o = e1.some((e1)=>r1.has(e1));
            o || t.some((e1)=>e1.label === n.label) || (t.push(n), e1.forEach((e1)=>r1.add(e1)));
        }
    }
    return t;
}
_c6 = I;
async function j(e1 = !1, t = !1) {
    let r1 = (0, s.getFirstOrderedNodeSafe)(".//div[contains(@class, 'education--container')]", document);
    if (r1) {
        let n = (0, s.getOrderedNodesSafe)(".//div[contains(@class, 'education--form')]", r1);
        t && (n = n?.slice(0, 1) || []);
        let o = [];
        for (let r1 of n){
            let n = [], i = (0, s.getOrderedNodesSafe)(".//div[contains(@class, 'text-input-wrapper')]", r1), a = P(i);
            a.length > 0 && n.push(...a);
            let u = (0, s.getOrderedNodesSafe)(".//div[contains(@class, 'select__container')]", r1), c = await _(u, e1, t);
            if (c.length > 0 && n.push(...c), n.length > 0) {
                let e1 = {
                    type: l.FIELD_TYPE.EDUCATION,
                    label: "Education",
                    children: n,
                    options: (0, p.buildGreenhouseEducationOptionDescriptors)(n),
                    required: !1
                };
                o.push(e1);
            }
        }
        return o;
    }
    return [];
}
async function D(e1 = !1, t = !1) {
    let r1 = (0, s.getFirstOrderedNodeSafe)(".//div[contains(@class, 'employment--container')]", document);
    if (r1) {
        let n = (0, s.getOrderedNodesSafe)(".//div[contains(@class, 'employment-form')]", r1);
        t && (n = n?.slice(0, 1) || []);
        let o = [];
        for (let r1 of n){
            let n = [], i = (0, s.getOrderedNodesSafe)(".//div[contains(@class, 'text-input-wrapper')]", r1), a = P(i);
            a.length > 0 && n.push(...a);
            let u = (0, s.getOrderedNodesSafe)(".//div[contains(@class, 'select__container')]", r1), c = await _(u, e1, t);
            c.length > 0 && n.push(...c);
            let d = (0, s.getFirstOrderedNodeSafe)(".//label[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'current')]", r1), f = null;
            d && (f = (0, s.getFirstOrderedNodeSafe)(".//input[@type='checkbox']", d)), f || (f = (0, s.getFirstOrderedNodeSafe)(".//input[@type='checkbox' and (contains(@id, 'current') or contains(@id, 'employment_current') or contains(@name, 'current'))]", r1)), f && !n.some((e1)=>e1.label.toLowerCase().includes("current")) && n.push({
                type: l.FIELD_TYPE.CHECKBOX,
                label: "Current role",
                $label: d || f,
                $input: f,
                $checkboxs: [
                    f
                ],
                options: [
                    "True",
                    "False"
                ],
                required: !1
            });
            let p = (0, s.getOrderedNodesSafe)(".//div[contains(@class, 'checkbox')]", r1);
            if (p && p.length > 0) for (let e1 of p){
                let t = (0, s.getFirstOrderedNodeSafe)(".//label", e1);
                if (t) {
                    let e1 = t.textContent?.toLowerCase().trim() || "";
                    if (e1.includes("current")) continue;
                    let r1 = E(t);
                    r1 && n.push(r1);
                }
            }
            if (n.length > 0) {
                let e1 = {
                    type: l.FIELD_TYPE.EMPLOYMENT,
                    label: "Employment",
                    children: n,
                    options: [
                        ...n.map((e1)=>({
                                type: e1.type,
                                label: e1.label,
                                options: e1.options || []
                            }))
                    ],
                    required: !1
                };
                o.push(e1);
            }
        }
        return o;
    }
    return [];
}
_c7 = D;
function P(e1) {
    let t = [];
    for (let r1 of e1){
        let e1 = (0, s.getFirstOrderedNodeSafe)(".//label", r1), n = e1?.textContent?.trim() ?? "", o = /[*\uff0a]\s*$/.test(n);
        n.replace(/[*\uff0a]\s*$/, "").trim();
        let i = (0, s.getFirstOrderedNodeSafe)(".//input | .//textarea", r1);
        if (i) {
            let r1 = (0, d.normalizeGreenhouseFieldLabel)({
                rawLabel: n,
                inputId: i.getAttribute("id"),
                inputAriaLabel: i.getAttribute("aria-label")
            });
            t.push({
                label: r1 || "",
                $label: e1,
                required: o,
                type: l.FIELD_TYPE.TEXT,
                $input: i
            });
        }
    }
    return t;
}
_c8 = P;
async function _(e1, t = !1, r1 = !0) {
    let n = [];
    for (let c of e1){
        let e1 = (0, s.getFirstOrderedNodeSafe)(".//label", c), d = e1?.getAttribute("for"), f = e1?.textContent?.trim() ?? "", p = /[*\uff0a]\s*$/.test(f), h = f.replace(/[*\uff0a]\s*$/, "").trim(), g = (0, m.normalizeGreenhouseSelectRuleLabel)(h, c);
        if (null === g) continue;
        if (!r1) {
            n.push({
                label: g || "",
                $label: e1,
                required: p,
                type: l.FIELD_TYPE.SEARCH,
                $input: c,
                options: []
            });
            continue;
        }
        let b = d ? `react-select-${d}-listbox` : "", y = (0, s.getFirstOrderedNodeSafe)(".//input[contains(@class, 'select__input')]", c), v = "school" === g.toLowerCase() || "discipline" === g.toLowerCase();
        if (y && !v) {
            (0, o.triggerEvents)(y, [
                "focus",
                "mousedown",
                "mouseup"
            ]);
            let r1 = null;
            if (t) await (0, u.delay)(3e3);
            else {
                let e1 = await (0, i.waitForCondition)(()=>null !== (r1 = b ? document.getElementById(b) : (0, s.getFirstOrderedNodeSafe)(".//div[contains(@class, 'select__menu-list')]", document)), {
                    timeout: 1e3,
                    interval: 50,
                    observeTarget: document.body
                });
                e1 || (await (0, u.delay)(200), r1 = b ? document.getElementById(b) : (0, s.getFirstOrderedNodeSafe)(".//div[contains(@class, 'select__menu-list')]", document));
            }
            if (!r1 && b && (r1 = document.getElementById(b)), r1 || (r1 = (0, s.getFirstOrderedNodeSafe)(".//div[contains(@class, 'select__menu-list')]", document)), r1) {
                let e1 = r1;
                await (0, i.waitForCondition)(()=>e1.querySelectorAll(`.${a.GREENHOUSE_V2_REACT_SELECT_OPTION_CLASS}`).length > 0, {
                    timeout: 2e3,
                    interval: 100,
                    observeTarget: e1
                });
            }
            let d = (0, s.getOrderedNodesSafe)(`.//div[contains(@class, '${a.GREENHOUSE_V2_REACT_SELECT_OPTION_CLASS}')]`, r1), f = d.map((e1)=>e1.textContent?.trim() ?? ""), m = new KeyboardEvent("keydown", {
                key: "Escape",
                code: "Escape",
                keyCode: 27,
                bubbles: !0,
                cancelable: !0
            });
            if (y.dispatchEvent(m), await (0, u.delay)(50), document.querySelector(".select__menu")) {
                let e1 = c.querySelector(".select__indicators");
                e1 && ((0, o.triggerEvents)(e1, [
                    "mousedown",
                    "click"
                ]), await (0, u.delay)(50));
            }
            document.querySelector(".select__menu") && (y.blur(), await (0, u.delay)(50)), n.push({
                label: g || "",
                $label: e1,
                required: p,
                type: l.FIELD_TYPE.SEARCH,
                $input: c,
                options: f
            });
        } else y && n.push({
            label: g || "",
            $label: e1,
            required: p,
            type: l.FIELD_TYPE.SEARCH,
            $input: c,
            options: []
        });
    }
    return n;
}
async function L(e1, t) {
    let r1 = {};
    for (let t of e1)if (t && t.type) {
        if (t.type === l.FIELD_TYPE.TEXT) {
            let e1 = t.$input;
            if (!e1) continue;
            if (e1.classList.contains("iti__search-input")) {
                let t = e1.closest(".iti"), r1 = t?.querySelector("input[type='tel']");
                r1 && (e1 = r1);
            }
            r1[t.label] = e1.value.trim();
        }
        if (t.type === l.FIELD_TYPE.SELECT) {
            let e1 = t.$input;
            if (!e1) continue;
            if ("SELECT" === e1.tagName) {
                let n = e1;
                r1[t.label] = n.options[n.selectedIndex]?.text?.trim() || "";
            } else {
                let n = e1.querySelector(".select__single-value")?.textContent, o = e1.querySelector(".select2-chosen")?.textContent;
                r1[t.label] = (n || o || "").trim();
            }
        }
        if (t.type === l.FIELD_TYPE.CHECKBOX) {
            let e1 = t;
            if (!e1.$checkboxs || 0 === e1.$checkboxs.length) continue;
            let n = [];
            for (let t of e1.$checkboxs)if (t.checked) {
                let e1 = (0, s.getFirstOrderedNodeSafe)(`parent::label | //label[@for='${t.id}']`, t);
                e1 && e1.textContent && n.push(e1.textContent.trim());
            }
            r1[t.label] = n;
        }
        if (t.type === l.FIELD_TYPE.SEARCH) {
            let e1 = t;
            if (!e1.$input) continue;
            let n = (0, s.getFirstOrderedNodeSafe)(".//div[contains(@class, 'select__single-value')]", e1.$input);
            if (n) {
                r1[t.label] = (n?.textContent?.trim() || "").replace(/\s+/g, " ");
                continue;
            }
            let o = (0, s.getOrderedNodesSafe)(".//div[contains(@class, 'select__multi-value__label')]", e1.$input);
            if (o && o.length > 0) {
                r1[t.label] = o.map((e1)=>e1?.textContent?.trim()).filter((e1)=>!!e1);
                continue;
            }
        }
    }
    return r1;
}
_c9 = L;
function R(e1) {
    return e1 ? e1.replace(/\*/g, "").trim().replace(/\s+/g, " ") : "";
}
_c10 = R;
function O(e1, t, r1) {
    if (!r1.markEducationRows && !r1.includeEducationSnapshotIndex) return null;
    let n = e1.getAttribute(h.GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE);
    if (r1.markEducationRows && (n = String(t), e1.setAttribute(h.GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_ATTRIBUTE, n)), !r1.includeEducationSnapshotIndex || !n) return null;
    let o = Number(n);
    return Number.isInteger(o) && o >= 0 ? o : null;
}
_c11 = O;
function M(e1 = {}) {
    let t = [], r1 = document.querySelector("#education_section");
    if (r1) {
        let n = r1.querySelectorAll(".education");
        n.forEach((r1, n)=>{
            let o = {}, i = O(r1, n, e1), a = (0, c.getEducationTraceForRow)(r1, {
                attributes: h.GREENHOUSE_EDUCATION_TRACE_ATTRIBUTES,
                includeEducationTrace: e1.includeEducationTrace,
                markEducationRows: e1.markEducationRows,
                runId: e1.educationTraceRunId,
                snapshotIndex: n
            }), l = (e1)=>{
                let t = r1.querySelector(e1);
                if (t) {
                    let e1 = t.getAttribute("id") || "";
                    e1.startsWith("s2id_") && (e1 = e1.replace(/^s2id_/, ""));
                    let n = r1.querySelector(`label[for="${e1}"]`), i = R(n?.textContent);
                    if (i) {
                        let e1 = t.querySelector(".select2-chosen"), r1 = "";
                        e1 ? (r1 = e1.textContent?.trim() || "").startsWith("Select a") && (r1 = "") : t instanceof HTMLInputElement && (r1 = t.value), o[i] = r1;
                    }
                }
            };
            l(".school-name"), l(".degree"), l(".discipline");
            let s = r1.querySelector(".field:has(.start-date-month) legend label");
            if (s) {
                let e1 = R(s.textContent);
                if (e1) {
                    let t = r1.querySelector(".start-date-month"), n = r1.querySelector(".start-date-year"), i = "";
                    (t || n) && "/" == (i = `${t?.value || ""}/${n?.value || ""}`) && (i = ""), o[e1] = i;
                }
            }
            let u = r1.querySelector(".field:has(.end-date-month) legend label");
            if (u) {
                let e1 = R(u.textContent);
                if (e1) {
                    let t = r1.querySelector(".end-date-month"), n = r1.querySelector(".end-date-year"), i = "";
                    (t || n) && "/" == (i = `${t?.value || ""}/${n?.value || ""}`) && (i = ""), o[e1] = i;
                }
            }
            Object.keys(o).length > 0 && (null !== i && (o[h.GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_KEY] = i), a && (o[c.EDUCATION_TRACE_KEY] = a), t.push(o));
        });
    }
    let n = document.querySelector(".education--container");
    if (n) {
        let r1 = n.querySelectorAll(".education--form");
        r1.forEach((r1, n)=>{
            let o = {}, i = O(r1, n, e1), a = (0, c.getEducationTraceForRow)(r1, {
                attributes: h.GREENHOUSE_EDUCATION_TRACE_ATTRIBUTES,
                includeEducationTrace: e1.includeEducationTrace,
                markEducationRows: e1.markEducationRows,
                runId: e1.educationTraceRunId,
                snapshotIndex: n
            }), l = (e1)=>{
                let t = r1.querySelector(`label[id^="${e1}"]`);
                if (!t) return;
                let n = R(t?.textContent);
                if (!n) return;
                let i = "", a = t.closest(".select__container");
                if (a) i = a.querySelector(".select__single-value")?.textContent?.trim() || "";
                else {
                    let e1 = t.getAttribute("for");
                    if (e1) {
                        let t = r1.querySelector(`#${CSS.escape(e1)}`);
                        t && (i = t.value || "");
                    }
                }
                n && (o[n] = i);
            };
            l("school"), l("degree"), l("discipline"), l("start-month"), l("start-year"), l("end-month"), l("end-year"), Object.keys(o).length > 0 && (null !== i && (o[h.GREENHOUSE_EDUCATION_SNAPSHOT_INDEX_KEY] = i), a && (o[c.EDUCATION_TRACE_KEY] = a), t.push(o));
        });
    }
    return t;
}
_c12 = M;
function N() {
    let e1 = [], t = document.querySelector("#employment_section");
    if (t) {
        let r1 = t.querySelectorAll(".employment");
        r1.forEach((t)=>{
            let r1 = {}, n = (e1, n)=>{
                let o = t.querySelector(`input[id*="${e1}"]`);
                if (o) {
                    let e1 = o.id, i = t.querySelector(`label[for="${e1}"]`), a = R(i?.textContent) || n;
                    r1[a] = o.value;
                }
            };
            n("company_name", "Company Name"), n("title", "Title");
            let o = t.querySelector(".start-date-month"), i = t.querySelector(".start-date-year");
            if (o || i) {
                let e1 = "Start Date", t = o?.parentElement?.querySelector("legend label") || i?.parentElement?.querySelector("legend label");
                t && (e1 = R(t.textContent) || e1), r1[e1] = `${o?.value || ""}/${i?.value || ""}`;
            }
            let a = t.querySelector(".end-date-month"), l = t.querySelector(".end-date-year");
            if (a || l) {
                let e1 = "End Date", t = a?.parentElement?.querySelector("legend label") || l?.parentElement?.querySelector("legend label");
                t && (e1 = R(t.textContent) || e1), r1[e1] = `${a?.value || ""}/${l?.value || ""}`;
            }
            let s = t.querySelector('input[id*="employment_current"]');
            if (s) {
                let e1 = s.id, n = t.querySelector(`label.current[for="${e1}"]`) || t.querySelector(`label[for="${e1}"]`), o = R(n?.textContent) || "Current Role", i = "End Date" === o ? "Current Role" : o;
                r1[i] = s.checked;
            }
            Object.keys(r1).length > 0 && e1.push(r1);
        });
    }
    let r1 = document.querySelector(".employment--container");
    if (r1) {
        let t = r1.querySelectorAll(".employment-form");
        t.forEach((t)=>{
            let r1 = {}, n = (e1, n)=>{
                let o = t.querySelector(`label[id^="${e1}"]`), i = R(o?.textContent) || n;
                if (o || n) {
                    let a = "";
                    if (e1.includes("current-role")) {
                        let i = t.querySelector(`input[id^="${e1}"]`);
                        if (i && (a = i.checked, !o)) {
                            let e1 = t.querySelector(`label[for="${i.id}"]`);
                            if (e1) {
                                r1[R(e1.textContent) || n] = a;
                                return;
                            }
                        }
                    } else if (o) {
                        let e1 = o.closest(".select__container");
                        if (e1) (a = e1.querySelector(".select__single-value")?.textContent?.trim() || "").startsWith("Select a") && (a = "");
                        else {
                            let e1 = o.getAttribute("for");
                            if (e1) {
                                let r1 = t.querySelector(`#${e1}`);
                                a = r1?.value || "";
                            }
                        }
                    }
                    r1[i] = a;
                }
            };
            n("company-name", "Company Name"), n("title", "Title");
            let o = t.querySelector('label[id^="start-date-month"]'), i = o?.closest(".select__container")?.querySelector(".select__single-value")?.textContent?.trim() || "", a = t.querySelector('label[id^="start-date-year"]'), l = a ? t.querySelector(`#${a.getAttribute("for")}`) : null, s = l?.value || "";
            (o || a) && (r1["Start Date"] = `${i}/${s}`);
            let u = t.querySelector('label[id^="end-date-month"]'), c = u?.closest(".select__container")?.querySelector(".select__single-value")?.textContent?.trim() || "", d = t.querySelector('label[id^="end-date-year"]'), f = d ? t.querySelector(`#${d.getAttribute("for")}`) : null, p = f?.value || "";
            (u || d) && (r1["End Date"] = `${c}/${p}`);
            let m = t.querySelector('input[type="checkbox"][id^="current-role"]');
            if (m) {
                let e1 = R(t.querySelector(`label[for="${m.id}"]`)?.textContent) || "Current Role";
                r1[e1] = m.checked;
            }
            Object.keys(r1).length > 0 && e1.push(r1);
        });
    }
    return e1;
}
_c13 = N;
function $(e1 = {}) {
    let t = M(e1), r1 = N(), n = {};
    return (t && t.length > 0 && (n.education = t), r1 && r1.length > 0 && (n.employment = r1), 0 === Object.keys(n).length) ? null : n;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
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

},{}]},["559S8","fp7A1"], "fp7A1", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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SSxFQUFFLGNBQWMsK0JBQ3BCLElBQUksSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxhQUFhLE9BQU8sQ0FBQyxJQUFJLE1BQ3ZELElBQUksR0FBRyxTQUFTO1lBQ2pCLENBQUEsS0FBSyxDQUFBLEtBQU8sQ0FBQSxFQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQUFBRDtZQUN2QyxJQUFJLElBQUksRUFBRSxjQUFjO1lBQ3hCLElBQUksR0FBRztnQkFDTCxJQUFJLEtBQUksRUFBRSxFQUFFLGNBQWMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQjtnQkFDbkUsRUFBQyxDQUFDLEdBQUUsR0FBRyxFQUFFO1lBQ1g7WUFDQSxPQUFPLEtBQUssSUFBRyxTQUFTLEtBQUssR0FBRSxLQUFLO1FBQ3RDO0lBQ0Y7SUFDQSxPQUFPO0FBQ1Q7T0F2R1M7QUF5R1QsU0FBUyxFQUFFLEtBQUksQ0FBQyxDQUFDO0lBQ2YsSUFBSSxJQUFJLEVBQUUsS0FDUixLQUFJLEtBQ0osSUFBSSxDQUFDO0lBQ1AsT0FBTyxBQUFDLENBQUEsS0FBSyxFQUFFLFNBQVMsS0FBTSxDQUFBLEVBQUUsWUFBWSxDQUFBLEdBQUksTUFBSyxHQUFFLFNBQVMsS0FBTSxDQUFBLEVBQUUsYUFBYSxFQUFBLEdBQUksTUFDdkYsT0FBTyxLQUFLLEdBQUcsTUFBSyxJQUFLLE9BQU87QUFDcEMiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTBlZmQ2ZmYwNjkwZDk3NDUuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvZ3JlZW5ob3VzZS9ydWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxncmVlbmhvdXNlXFxcXHJ1bGVzLmpzXCIsXCJidW5kbGVJZFwiOlwiM2ZhMWYwNGY2ODcyOTlhNVwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IGpseTN5XHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9ncmVlbmhvdXNlL3J1bGVzLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi4vZWR1Y2F0aW9uLWl0ZW0tdHJhY2UgLT4gajdVR0kgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvZWR1Y2F0aW9uLWl0ZW0tdHJhY2UuanNcclxuICogICAuL2ZpZWxkLWxhYmVscyAtPiBhd050UyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9ncmVlbmhvdXNlL2ZpZWxkLWxhYmVscy5qc1xyXG4gKiAgIC4vcmFjZSAtPiBjUTRKZyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9ncmVlbmhvdXNlL3JhY2UuanNcclxuICogICAuL3J1bGUtb3B0aW9ucyAtPiBrMzE1UyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9ncmVlbmhvdXNlL3J1bGUtb3B0aW9ucy5qc1xyXG4gKiAgIC4vc2VsZWN0LWxhYmVscyAtPiBkeTdKayAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9ncmVlbmhvdXNlL3NlbGVjdC1sYWJlbHMuanNcclxuICogICAuL3NuYXBzaG90LWFsaWdubWVudCAtPiBld2pldiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9ncmVlbmhvdXNlL3NuYXBzaG90LWFsaWdubWVudC5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvZG9tIC0+IGhBNVFhICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvZG9tLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXIgLT4gZVR6VXggID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9vYnNlcnZlci5qc1xyXG4gKiAgIH5jb250ZW50cy9zaGFyZWQvY29uc3RhbnRzIC0+IGF5Q2JxICA9PiAgc3JjL2NvbnRlbnRzL3NoYXJlZC9jb25zdGFudHMuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiZ2V0UnVsZXNcIiwgKCkgPT4gZyksIG4uZXhwb3J0KHIsIFwiZ2V0RWR1Y2F0aW9uUnVsZXNcIiwgKCkgPT4geSksXHJcbiAgbi5leHBvcnQociwgXCJnZXRFeHBlcmllbmNlUnVsZXNcIiwgKCkgPT4gdiksIG4uZXhwb3J0KHIsIFwiZ2V0QXV0b2NvbXBsZXRlUnVsZVwiLCAoKSA9PiBBKSwgbi5leHBvcnQoXHJcbiAgICByLCBcImdldEVkdVJ1bGVcIiwgKCkgPT4gaiksIG4uZXhwb3J0KHIsIFwiZ2V0RW1wbG95bWVudFJ1bGVcIiwgKCkgPT4gRCksIG4uZXhwb3J0KHIsXHJcbiAgICBcImdldEZvcm1TbmFwc2hvdFwiLCAoKSA9PiBMKSwgbi5leHBvcnQociwgXCJnZXRFZHVTbmFwc2hvdFwiLCAoKSA9PiBNKSwgbi5leHBvcnQocixcclxuICAgIFwiZ2V0RW1wbG95bWVudFNuYXBzaG90XCIsICgpID0+IE4pLCBuLmV4cG9ydChyLCBcImdldEVkdUFuZEVtcGxveW1lbnRTbmFwc2hvdFwiLCAoKSA9PiAkKTtcclxudmFyIG8gPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvZG9tXCIpLFxyXG4gIGkgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXJcIiksXHJcbiAgYSA9IGUoXCJ+Y29udGVudHMvc2hhcmVkL2NvbnN0YW50c1wiKSxcclxuICBsID0gZShcIn5jb3JlL2VudW1zXCIpLFxyXG4gIHMgPSBlKFwifmNvcmUveHBhdGhcIiksXHJcbiAgdSA9IGUoXCJ+dXRpbHMvZGVsYXlcIiksXHJcbiAgYyA9IGUoXCIuLi9lZHVjYXRpb24taXRlbS10cmFjZVwiKSxcclxuICBkID0gZShcIi4vZmllbGQtbGFiZWxzXCIpLFxyXG4gIGYgPSBlKFwiLi9yYWNlXCIpLFxyXG4gIHAgPSBlKFwiLi9ydWxlLW9wdGlvbnNcIiksXHJcbiAgbSA9IGUoXCIuL3NlbGVjdC1sYWJlbHNcIiksXHJcbiAgaCA9IGUoXCIuL3NuYXBzaG90LWFsaWdubWVudFwiKTtcclxuYXN5bmMgZnVuY3Rpb24gZygpIHtcclxuICBsZXQgZSA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLFxyXG4gICAgdCA9IGUuaG9zdG5hbWU7XHJcbiAgaWYgKCF0LnN0YXJ0c1dpdGgoXCJqb2ItYm9hcmRzLlwiKSkgcmV0dXJuIGF3YWl0IGIoKTtcclxuICB7XHJcbiAgICBsZXQgZSA9IGF3YWl0IEYoZG9jdW1lbnQuYm9keSk7XHJcbiAgICByZXR1cm4gZVxyXG4gIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBiKCkge1xyXG4gIGxldCBlID0gW10sXHJcbiAgICB0ID0gKDAsIHMuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoYC8vZGl2W2NvbnRhaW5zKGNvbmNhdCgnICcsIG5vcm1hbGl6ZS1zcGFjZShAY2xhc3MpLCAnICcpLCAnIGZpZWxkICcpIGFuZCBub3QoY29udGFpbnMoQGNsYXNzLCAnaGlkZGVuJykpXS9kZXNjZW5kYW50OjpsYWJlbFtcclxuICAgICAgbm90KGFuY2VzdG9yOjpsYWJlbClcclxuICAgICAgYW5kIG5vdChjb250YWlucyhAY2xhc3MsICdvZmZzY3JlZW4nKSlcclxuICAgICAgYW5kIG5vcm1hbGl6ZS1zcGFjZSguKSAhPSAnJ1xyXG4gICAgICBhbmQgbm90KGNvbnRhaW5zKHRyYW5zbGF0ZShwYXJlbnQ6OiovQHN0eWxlLCAnICcsICcnKSwgJ2Rpc3BsYXk6bm9uZScpKVxyXG4gICAgICBhbmQgbm90KChmb2xsb3dpbmctc2libGluZzo6aW5wdXQgfCBwcmVjZWRpbmctc2libGluZzo6aW5wdXQpW0BkaXNhYmxlZF0pXHJcbiAgICAgIGFuZCBub3QoYW5jZXN0b3I6OmRpdltjb250YWlucyhjb25jYXQoJyAnLCBub3JtYWxpemUtc3BhY2UoQGNsYXNzKSwgJyAnKSwgJyBoaWRkZW4gJyldKVxyXG4gICAgICBhbmQgbm90KGFuY2VzdG9yOjpkaXZbc3RhcnRzLXdpdGgoQGNsYXNzLCBcImZpZWxkIGRlbW9ncmFwaGljX3F1ZXN0aW9uXCIpXSlcclxuICAgICAgYW5kIG5vdChhbmNlc3Rvcjo6KltAaWQ9J2VkdWNhdGlvbl9zZWN0aW9uJyBvciBjb250YWlucyhAY2xhc3MsICdlZHVjYXRpb24tLWNvbnRhaW5lcicpXSlcclxuICAgICAgYW5kIG5vdChhbmNlc3Rvcjo6KltAaWQ9J2VtcGxveW1lbnRfc2VjdGlvbicgb3IgY29udGFpbnMoQGNsYXNzLCAnZW1wbG95bWVudC0tY29udGFpbmVyJyldKVxyXG4gICAgXVsxXWApO1xyXG4gIGZvciAobGV0IHIgb2YgdCkge1xyXG4gICAgbGV0IHQgPSB3KHIpO1xyXG4gICAgdCAmJiBlLnB1c2godClcclxuICB9XHJcbiAgbGV0IHIgPSAoMCwgcy5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLy9kaXZbc3RhcnRzLXdpdGgoQGNsYXNzLCBcImZpZWxkIGRlbW9ncmFwaGljX3F1ZXN0aW9uXCIpXScpO1xyXG4gIGZvciAobGV0IHQgb2Ygcikge1xyXG4gICAgbGV0IHIgPSBrKHQpO1xyXG4gICAgciAmJiBlLnB1c2gocilcclxuICB9XHJcbiAgbGV0IG4gPSBlLnNvbWUoZSA9PiBlLnR5cGUgPT09IGwuRklFTERfVFlQRS5TRUxFQ1QgJiYgZS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFxyXG4gICAgXCJoaXNwYW5pY1wiKSk7XHJcbiAgaWYgKG4pIHtcclxuICAgIGxldCB0ID0gZS5zb21lKGUgPT4gKDAsIGYuaXNHcmVlbmhvdXNlUmFjZUxhYmVsKShlLmxhYmVsKSk7XHJcbiAgICBpZiAoIXQpIHtcclxuICAgICAgbGV0IHQgPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXHJcbiAgICAgICAgXCIvL2RpdltAaWQ9J3JhY2VfZHJvcGRvd25fY29udGFpbmVyJ10gfCAvL2Rpdltjb250YWlucyhAY2xhc3MsICdmaWVsZCcpXVsuLy9sYWJlbFtjb250YWlucyh0cmFuc2xhdGUodGV4dCgpLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSwgJ3JhY2UnKV1dXCIsXHJcbiAgICAgICAgZG9jdW1lbnQpO1xyXG4gICAgICBpZiAodCkge1xyXG4gICAgICAgIGxldCByID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vbGFiZWxbbm90KGNvbnRhaW5zKEBjbGFzcywgJ29mZnNjcmVlbicpKV1cIiwgdCksXHJcbiAgICAgICAgICBuID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vc2VsZWN0XCIsIHQpO1xyXG4gICAgICAgIGlmIChyICYmIG4pIHtcclxuICAgICAgICAgIGxldCB0ID0gKDAsIHMuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXCIuL29wdGlvblwiLCBuKTtcclxuICAgICAgICAgIGUucHVzaCh7XHJcbiAgICAgICAgICAgIGxhYmVsOiBUKHIpLFxyXG4gICAgICAgICAgICAkbGFiZWw6IHIsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcInRydWVcIiA9PT0gbi5nZXRBdHRyaWJ1dGUoXCJhcmlhLXJlcXVpcmVkXCIpLFxyXG4gICAgICAgICAgICB0eXBlOiBsLkZJRUxEX1RZUEUuU0VMRUNULFxyXG4gICAgICAgICAgICAkaW5wdXQ6IG4sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHQubWFwKGUgPT4gZS50ZXh0Q29udGVudD8udHJpbSgpID8/IFwiXCIpLmZpbHRlcihlID0+ICFbXCJcIiwgXCItLVwiLFxyXG4gICAgICAgICAgICAgIFwicGxlYXNlIHNlbGVjdFwiXHJcbiAgICAgICAgICAgIF0uaW5jbHVkZXMoZS50b0xvd2VyQ2FzZSgpKSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBvID0gYXdhaXQgeSgpO1xyXG4gIGUucHVzaCguLi5vKTtcclxuICBsZXQgaSA9IGF3YWl0IHYoKTtcclxuICByZXR1cm4gZS5wdXNoKC4uLmkpLCBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHkoKSB7XHJcbiAgbGV0IGUgPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXHJcbiAgICAgIFwiLi8vZGl2WyhAaWQ9J2VkdWNhdGlvbl9zZWN0aW9uJyBvciBjb250YWlucyhAY2xhc3MsICdlZHVjYXRpb24tLWNvbnRhaW5lcicpKV1cIiwgZG9jdW1lbnQpLFxyXG4gICAgdCA9IFtdO1xyXG4gIGlmICghZSkgcmV0dXJuIHQ7XHJcbiAgbGV0IHIgPSAoMCwgcy5nZXRPcmRlcmVkTm9kZXNTYWZlKShgLi8vZGl2W1xyXG4gICAgICAoXHJcbiAgICAgICAgKGNvbnRhaW5zKEBjbGFzcywgJ2VkdWNhdGlvbicpIGFuZCBub3QoY29udGFpbnMoQGNsYXNzLCAnY29udGFpbmVyJykpKVxyXG4gICAgICAgIG9yIGNvbnRhaW5zKEBjbGFzcywgJ2VkdWNhdGlvbi0tZm9ybScpXHJcbiAgICAgIClcclxuICAgICAgYW5kIG5vdChhbmNlc3Rvcjo6ZGl2W1xyXG4gICAgICAgIChjb250YWlucyhAY2xhc3MsICdlZHVjYXRpb24nKSBhbmQgbm90KGNvbnRhaW5zKEBjbGFzcywgJ2NvbnRhaW5lcicpKSlcclxuICAgICAgICBvciBjb250YWlucyhAY2xhc3MsICdlZHVjYXRpb24tLWZvcm0nKVxyXG4gICAgICBdKVxyXG4gICAgXWAsIGUpLFxyXG4gICAgbiA9IHIgJiYgci5sZW5ndGggPiAwID8gciA6IFtlXTtcclxuICBmb3IgKGxldCBlID0gMDsgZSA8IG4ubGVuZ3RoOyBlKyspIHtcclxuICAgIGxldCByID0gbltlXSxcclxuICAgICAgbyA9ICgwLCBzLmdldE9yZGVyZWROb2Rlc1NhZmUpKFxyXG4gICAgICAgIFwiLi8vbGFiZWxbbm90KGFuY2VzdG9yOjpsYWJlbCkgYW5kIG5vdChjb250YWlucyhAY2xhc3MsICdvZmZzY3JlZW4nKSkgYW5kIG5vcm1hbGl6ZS1zcGFjZSguKSAhPSAnJyBhbmQgbm90KGNvbnRhaW5zKHRyYW5zbGF0ZShwYXJlbnQ6OiovQHN0eWxlLCAnICcsICcnKSwgJ2Rpc3BsYXk6bm9uZScpKSBhbmQgbm90KChmb2xsb3dpbmctc2libGluZzo6aW5wdXQgfCBwcmVjZWRpbmctc2libGluZzo6aW5wdXQpW0BkaXNhYmxlZF0pXVwiLFxyXG4gICAgICAgIHIpLFxyXG4gICAgICBpID0gW107XHJcbiAgICBpZiAoby5sZW5ndGggPiAwKVxyXG4gICAgICBmb3IgKGxldCBlIG9mIG8pIHtcclxuICAgICAgICBsZXQgdCA9IHcoZSk7XHJcbiAgICAgICAgdCAmJiBpLnB1c2godClcclxuICAgICAgfVxyXG4gICAgbGV0IGEgPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXHJcbiAgICAgICAgXCIuLy9pbnB1dFtjb250YWlucyhAY2xhc3MsICdzdGFydC1kYXRlLW1vbnRoJyldIHwgLi8vaW5wdXRbY29udGFpbnMoQGNsYXNzLCAnc3RhcnQtZGF0ZScpIGFuZCBjb250YWlucyhAY2xhc3MsICdtb250aCcpXVwiLFxyXG4gICAgICAgIHIpLFxyXG4gICAgICB1ID0gbnVsbDtcclxuICAgIGlmIChhKSB7XHJcbiAgICAgIGxldCBlID0gYS5jbG9zZXN0KFwiZmllbGRzZXRcIik7XHJcbiAgICAgIGUgJiYgKHUgPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy9sZWdlbmQvL2xhYmVsIHwgLi8vbGFiZWxcIiwgZSkpLCB1IHx8ICh1ID0gKDAsIHNcclxuICAgICAgICAuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFxyXG4gICAgICAgIFwicHJlY2VkaW5nOjpsYWJlbFtjb250YWlucyh0cmFuc2xhdGUodGV4dCgpLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSwgJ3N0YXJ0JyldIHwgYW5jZXN0b3I6OipbY29udGFpbnMoQGNsYXNzLCAnZmllbGQnKV0vL2xhYmVsW2NvbnRhaW5zKHRyYW5zbGF0ZSh0ZXh0KCksICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicsICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpLCAnc3RhcnQnKV1cIixcclxuICAgICAgICBhKSlcclxuICAgIH1cclxuICAgIGlmIChhICYmICFpLnNvbWUoZSA9PiBlLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJzdGFydCBkYXRlIG1vbnRoXCIpKSkge1xyXG4gICAgICBsZXQgZSA9IGEuY2xvc2VzdChcIi5zZWxlY3RfX2NvbnRhaW5lclwiKTtcclxuICAgICAgZSA/IGkucHVzaCh7XHJcbiAgICAgICAgdHlwZTogbC5GSUVMRF9UWVBFLlNFQVJDSCxcclxuICAgICAgICBsYWJlbDogXCJTdGFydCBkYXRlIG1vbnRoXCIsXHJcbiAgICAgICAgJGxhYmVsOiB1IHx8IGEsXHJcbiAgICAgICAgJGlucHV0OiBlLFxyXG4gICAgICAgIHJlcXVpcmVkOiBcInRydWVcIiA9PT0gYS5nZXRBdHRyaWJ1dGUoXCJhcmlhLXJlcXVpcmVkXCIpXHJcbiAgICAgIH0pIDogaS5wdXNoKHtcclxuICAgICAgICB0eXBlOiBsLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgICBsYWJlbDogXCJTdGFydCBkYXRlIG1vbnRoXCIsXHJcbiAgICAgICAgJGxhYmVsOiB1IHx8IGEsXHJcbiAgICAgICAgJGlucHV0OiBhLFxyXG4gICAgICAgIHJlcXVpcmVkOiBcInRydWVcIiA9PT0gYS5nZXRBdHRyaWJ1dGUoXCJhcmlhLXJlcXVpcmVkXCIpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBsZXQgYyA9ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcclxuICAgICAgICBcIi4vL2lucHV0W2NvbnRhaW5zKEBjbGFzcywgJ3N0YXJ0LWRhdGUteWVhcicpXSB8IC4vL2lucHV0W2NvbnRhaW5zKEBjbGFzcywgJ3N0YXJ0LWRhdGUnKSBhbmQgY29udGFpbnMoQGNsYXNzLCAneWVhcicpXVwiLFxyXG4gICAgICAgIHIpLFxyXG4gICAgICBkID0gbnVsbDtcclxuICAgIGlmIChjKSB7XHJcbiAgICAgIGxldCBlID0gYy5jbG9zZXN0KFwiZmllbGRzZXRcIik7XHJcbiAgICAgIGUgJiYgKGQgPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy9sZWdlbmQvL2xhYmVsIHwgLi8vbGFiZWxcIiwgZSkpLCBkIHx8IChkID0gKDAsIHNcclxuICAgICAgICAuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFxyXG4gICAgICAgIFwicHJlY2VkaW5nOjpsYWJlbFtjb250YWlucyh0cmFuc2xhdGUodGV4dCgpLCAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonLCAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonKSwgJ3N0YXJ0JyldIHwgYW5jZXN0b3I6OipbY29udGFpbnMoQGNsYXNzLCAnZmllbGQnKV0vL2xhYmVsW2NvbnRhaW5zKHRyYW5zbGF0ZSh0ZXh0KCksICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicsICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpLCAnc3RhcnQnKV1cIixcclxuICAgICAgICBjKSlcclxuICAgIH1cclxuICAgIGMgJiYgIWkuc29tZShlID0+IGUubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInN0YXJ0IGRhdGUgeWVhclwiKSkgJiYgaS5wdXNoKHtcclxuICAgICAgdHlwZTogbC5GSUVMRF9UWVBFLlRFWFQsXHJcbiAgICAgIGxhYmVsOiBcIlN0YXJ0IGRhdGUgeWVhclwiLFxyXG4gICAgICAkbGFiZWw6IGQgfHwgYyxcclxuICAgICAgJGlucHV0OiBjLFxyXG4gICAgICByZXF1aXJlZDogXCJ0cnVlXCIgPT09IGMuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKVxyXG4gICAgfSk7XHJcbiAgICBsZXQgZiA9ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcclxuICAgICAgICBcIi4vL2lucHV0W2NvbnRhaW5zKEBjbGFzcywgJ2VuZC1kYXRlLW1vbnRoJyldIHwgLi8vaW5wdXRbY29udGFpbnMoQGNsYXNzLCAnZW5kLWRhdGUnKSBhbmQgY29udGFpbnMoQGNsYXNzLCAnbW9udGgnKV1cIixcclxuICAgICAgICByKSxcclxuICAgICAgbSA9IG51bGw7XHJcbiAgICBpZiAoZikge1xyXG4gICAgICBsZXQgZSA9IGYuY2xvc2VzdChcImZpZWxkc2V0XCIpO1xyXG4gICAgICBlICYmIChtID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vbGVnZW5kLy9sYWJlbCB8IC4vL2xhYmVsXCIsIGUpKSwgbSB8fCAobSA9ICgwLCBzXHJcbiAgICAgICAgLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcclxuICAgICAgICBcInByZWNlZGluZzo6bGFiZWxbY29udGFpbnModHJhbnNsYXRlKHRleHQoKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyksICdlbmQnKV0gfCBhbmNlc3Rvcjo6Kltjb250YWlucyhAY2xhc3MsICdmaWVsZCcpXS8vbGFiZWxbY29udGFpbnModHJhbnNsYXRlKHRleHQoKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyksICdlbmQnKV1cIixcclxuICAgICAgICBmKSlcclxuICAgIH1cclxuICAgIGlmIChmICYmICFpLnNvbWUoZSA9PiBlLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJlbmQgZGF0ZSBtb250aFwiKSkpIHtcclxuICAgICAgbGV0IGUgPSBmLmNsb3Nlc3QoXCIuc2VsZWN0X19jb250YWluZXJcIik7XHJcbiAgICAgIGUgPyBpLnB1c2goe1xyXG4gICAgICAgIHR5cGU6IGwuRklFTERfVFlQRS5TRUFSQ0gsXHJcbiAgICAgICAgbGFiZWw6IFwiRW5kIGRhdGUgbW9udGhcIixcclxuICAgICAgICAkbGFiZWw6IG0gfHwgZixcclxuICAgICAgICAkaW5wdXQ6IGUsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFwidHJ1ZVwiID09PSBmLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIilcclxuICAgICAgfSkgOiBpLnB1c2goe1xyXG4gICAgICAgIHR5cGU6IGwuRklFTERfVFlQRS5URVhULFxyXG4gICAgICAgIGxhYmVsOiBcIkVuZCBkYXRlIG1vbnRoXCIsXHJcbiAgICAgICAgJGxhYmVsOiBtIHx8IGYsXHJcbiAgICAgICAgJGlucHV0OiBmLFxyXG4gICAgICAgIHJlcXVpcmVkOiBcInRydWVcIiA9PT0gZi5nZXRBdHRyaWJ1dGUoXCJhcmlhLXJlcXVpcmVkXCIpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBsZXQgaCA9ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcclxuICAgICAgICBcIi4vL2lucHV0W2NvbnRhaW5zKEBjbGFzcywgJ2VuZC1kYXRlLXllYXInKV0gfCAuLy9pbnB1dFtjb250YWlucyhAY2xhc3MsICdlbmQtZGF0ZScpIGFuZCBjb250YWlucyhAY2xhc3MsICd5ZWFyJyldXCIsXHJcbiAgICAgICAgciksXHJcbiAgICAgIGcgPSBudWxsO1xyXG4gICAgaWYgKGgpIHtcclxuICAgICAgbGV0IGUgPSBoLmNsb3Nlc3QoXCJmaWVsZHNldFwiKTtcclxuICAgICAgZSAmJiAoZyA9ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4vL2xlZ2VuZC8vbGFiZWwgfCAuLy9sYWJlbFwiLCBlKSksIGcgfHwgKGcgPSAoMCwgc1xyXG4gICAgICAgIC5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXHJcbiAgICAgICAgXCJwcmVjZWRpbmc6OmxhYmVsW2NvbnRhaW5zKHRyYW5zbGF0ZSh0ZXh0KCksICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicsICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpLCAnZW5kJyldIHwgYW5jZXN0b3I6OipbY29udGFpbnMoQGNsYXNzLCAnZmllbGQnKV0vL2xhYmVsW2NvbnRhaW5zKHRyYW5zbGF0ZSh0ZXh0KCksICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicsICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpLCAnZW5kJyldXCIsXHJcbiAgICAgICAgaCkpXHJcbiAgICB9XHJcbiAgICBpZiAoaCAmJiAhaS5zb21lKGUgPT4gZS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiZW5kIGRhdGUgeWVhclwiKSkgJiYgaS5wdXNoKHtcclxuICAgICAgICB0eXBlOiBsLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgICBsYWJlbDogXCJFbmQgZGF0ZSB5ZWFyXCIsXHJcbiAgICAgICAgJGxhYmVsOiBnIHx8IGgsXHJcbiAgICAgICAgJGlucHV0OiBoLFxyXG4gICAgICAgIHJlcXVpcmVkOiBcInRydWVcIiA9PT0gaC5nZXRBdHRyaWJ1dGUoXCJhcmlhLXJlcXVpcmVkXCIpXHJcbiAgICAgIH0pLCBpLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGUgPSB7XHJcbiAgICAgICAgdHlwZTogbC5GSUVMRF9UWVBFLkVEVUNBVElPTixcclxuICAgICAgICBsYWJlbDogXCJFZHVjYXRpb25cIixcclxuICAgICAgICBjaGlsZHJlbjogaSxcclxuICAgICAgICBvcHRpb25zOiAoMCwgcC5idWlsZEdyZWVuaG91c2VFZHVjYXRpb25PcHRpb25EZXNjcmlwdG9ycykoaSksXHJcbiAgICAgICAgcmVxdWlyZWQ6ICExXHJcbiAgICAgIH07XHJcbiAgICAgIHQucHVzaChlKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdFxyXG59XHJcblxyXG5mdW5jdGlvbiB2KCkge1xyXG4gIGxldCBlID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFxyXG4gICAgICBcIi4vL2RpdlsoQGlkPSdlbXBsb3ltZW50X3NlY3Rpb24nIG9yIGNvbnRhaW5zKEBjbGFzcywgJ2VtcGxveW1lbnQtLWNvbnRhaW5lcicpKV1cIiwgZG9jdW1lbnQpLFxyXG4gICAgdCA9IFtdO1xyXG4gIGlmICghZSkgcmV0dXJuIHQ7XHJcbiAgbGV0IHIgPSAoMCwgcy5nZXRPcmRlcmVkTm9kZXNTYWZlKShgLi8vZGl2W1xyXG4gICAgICAoY29udGFpbnMoQGNsYXNzLCAnZW1wbG95bWVudCcpIGFuZCBub3QoY29udGFpbnMoQGNsYXNzLCAnY29udGFpbmVyJykpKVxyXG4gICAgICBvciBjb250YWlucyhAY2xhc3MsICdlbXBsb3ltZW50LWZvcm0nKVxyXG4gICAgXWAsIGUpLFxyXG4gICAgbiA9IHIgJiYgci5sZW5ndGggPiAwID8gciA6IFtlXTtcclxuICBmb3IgKGxldCBlIG9mIG4pIHtcclxuICAgIGxldCByID0gKDAsIHMuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXHJcbiAgICAgICAgXCIuLy9sYWJlbFtub3QoYW5jZXN0b3I6OmxhYmVsKSBhbmQgbm90KGNvbnRhaW5zKEBjbGFzcywgJ29mZnNjcmVlbicpKSBhbmQgbm9ybWFsaXplLXNwYWNlKC4pICE9ICcnIGFuZCBub3QoY29udGFpbnModHJhbnNsYXRlKHBhcmVudDo6Ki9Ac3R5bGUsICcgJywgJycpLCAnZGlzcGxheTpub25lJykpIGFuZCBub3QoKGZvbGxvd2luZy1zaWJsaW5nOjppbnB1dCB8IHByZWNlZGluZy1zaWJsaW5nOjppbnB1dClbQGRpc2FibGVkXSldXCIsXHJcbiAgICAgICAgZSksXHJcbiAgICAgIG4gPSBbXTtcclxuICAgIGlmIChyLmxlbmd0aCA+IDApXHJcbiAgICAgIGZvciAobGV0IGUgb2Ygcikge1xyXG4gICAgICAgIGxldCB0ID0gdyhlKTtcclxuICAgICAgICB0ICYmIG4ucHVzaCh0KVxyXG4gICAgICB9XHJcbiAgICBsZXQgbyA9ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcclxuICAgICAgICBcIi4vL2lucHV0W2NvbnRhaW5zKEBjbGFzcywgJ3N0YXJ0LWRhdGUtbW9udGgnKV0gfCAuLy9pbnB1dFtjb250YWlucyhAY2xhc3MsICdzdGFydC1kYXRlJykgYW5kIGNvbnRhaW5zKEBjbGFzcywgJ21vbnRoJyldXCIsXHJcbiAgICAgICAgZSksXHJcbiAgICAgIGkgPSBudWxsO1xyXG4gICAgaWYgKG8pIHtcclxuICAgICAgbGV0IGUgPSBvLmNsb3Nlc3QoXCJmaWVsZHNldFwiKTtcclxuICAgICAgZSAmJiAoaSA9ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4vL2xlZ2VuZC8vbGFiZWwgfCAuLy9sYWJlbFwiLCBlKSksIGkgfHwgKGkgPSAoMCwgc1xyXG4gICAgICAgIC5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXHJcbiAgICAgICAgXCJwcmVjZWRpbmc6OmxhYmVsW2NvbnRhaW5zKHRyYW5zbGF0ZSh0ZXh0KCksICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicsICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpLCAnc3RhcnQnKV0gfCBhbmNlc3Rvcjo6Kltjb250YWlucyhAY2xhc3MsICdmaWVsZCcpXS8vbGFiZWxbY29udGFpbnModHJhbnNsYXRlKHRleHQoKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyksICdzdGFydCcpXVwiLFxyXG4gICAgICAgIG8pKVxyXG4gICAgfVxyXG4gICAgbyAmJiAhbi5zb21lKGUgPT4gZS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwic3RhcnQgZGF0ZSBtb250aFwiKSkgJiYgbi5wdXNoKHtcclxuICAgICAgdHlwZTogbC5GSUVMRF9UWVBFLlRFWFQsXHJcbiAgICAgIGxhYmVsOiBcIlN0YXJ0IGRhdGUgbW9udGhcIixcclxuICAgICAgJGxhYmVsOiBpIHx8IG8sXHJcbiAgICAgICRpbnB1dDogbyxcclxuICAgICAgcmVxdWlyZWQ6ICEwXHJcbiAgICB9KTtcclxuICAgIGxldCBhID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFxyXG4gICAgICAgIFwiLi8vaW5wdXRbY29udGFpbnMoQGNsYXNzLCAnc3RhcnQtZGF0ZS15ZWFyJyldIHwgLi8vaW5wdXRbY29udGFpbnMoQGNsYXNzLCAnc3RhcnQtZGF0ZScpIGFuZCBjb250YWlucyhAY2xhc3MsICd5ZWFyJyldXCIsXHJcbiAgICAgICAgZSksXHJcbiAgICAgIHUgPSBudWxsO1xyXG4gICAgaWYgKGEpIHtcclxuICAgICAgbGV0IGUgPSBhLmNsb3Nlc3QoXCJmaWVsZHNldFwiKTtcclxuICAgICAgZSAmJiAodSA9ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4vL2xlZ2VuZC8vbGFiZWwgfCAuLy9sYWJlbFwiLCBlKSksIHUgfHwgKHUgPSAoMCwgc1xyXG4gICAgICAgIC5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXHJcbiAgICAgICAgXCJwcmVjZWRpbmc6OmxhYmVsW2NvbnRhaW5zKHRyYW5zbGF0ZSh0ZXh0KCksICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicsICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpLCAnc3RhcnQnKV0gfCBhbmNlc3Rvcjo6Kltjb250YWlucyhAY2xhc3MsICdmaWVsZCcpXS8vbGFiZWxbY29udGFpbnModHJhbnNsYXRlKHRleHQoKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyksICdzdGFydCcpXVwiLFxyXG4gICAgICAgIGEpKVxyXG4gICAgfVxyXG4gICAgYSAmJiAhbi5zb21lKGUgPT4gZS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwic3RhcnQgZGF0ZSB5ZWFyXCIpKSAmJiBuLnB1c2goe1xyXG4gICAgICB0eXBlOiBsLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgbGFiZWw6IFwiU3RhcnQgZGF0ZSB5ZWFyXCIsXHJcbiAgICAgICRsYWJlbDogdSB8fCBhLFxyXG4gICAgICAkaW5wdXQ6IGEsXHJcbiAgICAgIHJlcXVpcmVkOiAhMFxyXG4gICAgfSk7XHJcbiAgICBsZXQgYyA9ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcclxuICAgICAgICBcIi4vL2lucHV0W2NvbnRhaW5zKEBjbGFzcywgJ2VuZC1kYXRlLW1vbnRoJyldIHwgLi8vaW5wdXRbY29udGFpbnMoQGNsYXNzLCAnZW5kLWRhdGUnKSBhbmQgY29udGFpbnMoQGNsYXNzLCAnbW9udGgnKV1cIixcclxuICAgICAgICBlKSxcclxuICAgICAgZCA9IG51bGw7XHJcbiAgICBpZiAoYykge1xyXG4gICAgICBsZXQgZSA9IGMuY2xvc2VzdChcImZpZWxkc2V0XCIpO1xyXG4gICAgICBlICYmIChkID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vbGVnZW5kLy9sYWJlbCB8IC4vL2xhYmVsXCIsIGUpKSwgZCB8fCAoZCA9ICgwLCBzXHJcbiAgICAgICAgLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcclxuICAgICAgICBcInByZWNlZGluZzo6bGFiZWxbY29udGFpbnModHJhbnNsYXRlKHRleHQoKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyksICdlbmQnKV0gfCBhbmNlc3Rvcjo6Kltjb250YWlucyhAY2xhc3MsICdmaWVsZCcpXS8vbGFiZWxbY29udGFpbnModHJhbnNsYXRlKHRleHQoKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyksICdlbmQnKV1cIixcclxuICAgICAgICBjKSlcclxuICAgIH1cclxuICAgIGMgJiYgIW4uc29tZShlID0+IGUubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImVuZCBkYXRlIG1vbnRoXCIpKSAmJiBuLnB1c2goe1xyXG4gICAgICB0eXBlOiBsLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgbGFiZWw6IFwiRW5kIGRhdGUgbW9udGhcIixcclxuICAgICAgJGxhYmVsOiBkIHx8IGMsXHJcbiAgICAgICRpbnB1dDogYyxcclxuICAgICAgcmVxdWlyZWQ6ICEwXHJcbiAgICB9KTtcclxuICAgIGxldCBmID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFxyXG4gICAgICAgIFwiLi8vaW5wdXRbY29udGFpbnMoQGNsYXNzLCAnZW5kLWRhdGUteWVhcicpXSB8IC4vL2lucHV0W2NvbnRhaW5zKEBjbGFzcywgJ2VuZC1kYXRlJykgYW5kIGNvbnRhaW5zKEBjbGFzcywgJ3llYXInKV1cIixcclxuICAgICAgICBlKSxcclxuICAgICAgcCA9IG51bGw7XHJcbiAgICBpZiAoZikge1xyXG4gICAgICBsZXQgZSA9IGYuY2xvc2VzdChcImZpZWxkc2V0XCIpO1xyXG4gICAgICBlICYmIChwID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vbGVnZW5kLy9sYWJlbCB8IC4vL2xhYmVsXCIsIGUpKSwgcCB8fCAocCA9ICgwLCBzXHJcbiAgICAgICAgLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcclxuICAgICAgICBcInByZWNlZGluZzo6bGFiZWxbY29udGFpbnModHJhbnNsYXRlKHRleHQoKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyksICdlbmQnKV0gfCBhbmNlc3Rvcjo6Kltjb250YWlucyhAY2xhc3MsICdmaWVsZCcpXS8vbGFiZWxbY29udGFpbnModHJhbnNsYXRlKHRleHQoKSwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJywgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyksICdlbmQnKV1cIixcclxuICAgICAgICBmKSlcclxuICAgIH1cclxuICAgIGYgJiYgIW4uc29tZShlID0+IGUubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImVuZCBkYXRlIHllYXJcIikpICYmIG4ucHVzaCh7XHJcbiAgICAgIHR5cGU6IGwuRklFTERfVFlQRS5URVhULFxyXG4gICAgICBsYWJlbDogXCJFbmQgZGF0ZSB5ZWFyXCIsXHJcbiAgICAgICRsYWJlbDogcCB8fCBmLFxyXG4gICAgICAkaW5wdXQ6IGYsXHJcbiAgICAgIHJlcXVpcmVkOiAhMFxyXG4gICAgfSk7XHJcbiAgICBsZXQgbSA9ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcclxuICAgICAgICBcIi4vL2xhYmVsW2NvbnRhaW5zKHRyYW5zbGF0ZSh0ZXh0KCksICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicsICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpLCAnY3VycmVudCcpXVwiLFxyXG4gICAgICAgIGUpLFxyXG4gICAgICBoID0gbnVsbDtcclxuICAgIGlmIChtICYmIChoID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vaW5wdXRbQHR5cGU9J2NoZWNrYm94J11cIiwgbSkpLCBoIHx8IChoID0gKDAsIHNcclxuICAgICAgICAuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFxyXG4gICAgICAgIFwiLi8vaW5wdXRbQHR5cGU9J2NoZWNrYm94JyBhbmQgKGNvbnRhaW5zKEBpZCwgJ2N1cnJlbnQnKSBvciBjb250YWlucyhAaWQsICdlbXBsb3ltZW50X2N1cnJlbnQnKSBvciBjb250YWlucyhAbmFtZSwgJ2N1cnJlbnQnKSldXCIsXHJcbiAgICAgICAgZSkpLCBoICYmICFuLnNvbWUoZSA9PiBlLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJjdXJyZW50XCIpKSAmJiBuLnB1c2goe1xyXG4gICAgICAgIHR5cGU6IGwuRklFTERfVFlQRS5DSEVDS0JPWCxcclxuICAgICAgICBsYWJlbDogXCJDdXJyZW50IHJvbGVcIixcclxuICAgICAgICAkbGFiZWw6IG0gfHwgaCxcclxuICAgICAgICAkaW5wdXQ6IGgsXHJcbiAgICAgICAgJGNoZWNrYm94czogW2hdLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcIlRydWVcIiwgXCJGYWxzZVwiXSxcclxuICAgICAgICByZXF1aXJlZDogITFcclxuICAgICAgfSksIG4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgZSA9IHtcclxuICAgICAgICB0eXBlOiBsLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCxcclxuICAgICAgICBsYWJlbDogXCJlbXBsb3ltZW50XCIsXHJcbiAgICAgICAgY2hpbGRyZW46IG4sXHJcbiAgICAgICAgb3B0aW9uczogWy4uLm4ubWFwKGUgPT4gKHtcclxuICAgICAgICAgIHR5cGU6IGUudHlwZSxcclxuICAgICAgICAgIGxhYmVsOiBlLmxhYmVsLFxyXG4gICAgICAgICAgb3B0aW9uczogZS5vcHRpb25zIHx8IFtdXHJcbiAgICAgICAgfSkpXSxcclxuICAgICAgICByZXF1aXJlZDogITFcclxuICAgICAgfTtcclxuICAgICAgdC5wdXNoKGUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHcoZSkge1xyXG4gIGxldCB0ID0gW0UsIHgsIEEsIENdO1xyXG4gIGZvciAobGV0IHIgb2YgdCkge1xyXG4gICAgbGV0IHQgPSByKGUpO1xyXG4gICAgaWYgKHQpIHJldHVybiB0XHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFMoZSkge1xyXG4gIHJldHVybiBudWxsICE9ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4vLypbdGV4dCgpPScqJ10gfCAuLy8qW0BjbGFzcz0nYXN0ZXJpc2snXVwiLCBlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBFKGUpIHtcclxuICBsZXQgdCA9IFwiTEVHRU5EXCIgPT09IGUudGFnTmFtZSA/IGUucGFyZW50RWxlbWVudCA6IGUuY2xvc2VzdChcImZpZWxkc2V0LCBkaXYuZmllbGRcIikgfHwgZVxyXG4gICAgLnBhcmVudEVsZW1lbnQ7XHJcbiAgaWYgKCF0KSByZXR1cm4gbnVsbDtcclxuICBsZXQgciA9ICgwLCBzLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vaW5wdXRbQHR5cGU9J2NoZWNrYm94J11cIiwgdCksXHJcbiAgICBuID0gdC5jb250YWlucyhlKSAmJiByLmxlbmd0aCA+IDE7XHJcbiAgaWYgKG4pIHtcclxuICAgIGxldCB0ID0gW10sXHJcbiAgICAgIG4gPSBbXTtcclxuICAgIGZvciAobGV0IGUgb2Ygcikge1xyXG4gICAgICBsZXQgciA9ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShgcGFyZW50OjpsYWJlbCB8IC8vbGFiZWxbQGZvcj0nJHtlLmlkfSddYCwgZSk7XHJcbiAgICAgIHIgJiYgci50ZXh0Q29udGVudCAmJiAodC5wdXNoKHIudGV4dENvbnRlbnQudHJpbSgpKSwgbi5wdXNoKGUpKVxyXG4gICAgfVxyXG4gICAgaWYgKHQubGVuZ3RoID4gMCkgcmV0dXJuIHtcclxuICAgICAgbGFiZWw6IFQoZSksXHJcbiAgICAgICRsYWJlbDogZSxcclxuICAgICAgdHlwZTogbC5GSUVMRF9UWVBFLkNIRUNLQk9YLFxyXG4gICAgICByZXF1aXJlZDogUyhlKSxcclxuICAgICAgJGNoZWNrYm94czogbixcclxuICAgICAgb3B0aW9uczogdCxcclxuICAgICAgJGlucHV0OiBuWzBdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBvID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vaW5wdXRbQHR5cGU9J2NoZWNrYm94J11cIiwgZSk7XHJcbiAgaWYgKG8pIHtcclxuICAgIGxldCB0ID0gVChlKSxcclxuICAgICAgciA9ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShgcGFyZW50OjpsYWJlbCB8IC8vbGFiZWxbQGZvcj0nJHtvLmlkfSddYCwgbyk7XHJcbiAgICByZXR1cm4gciAmJiByLnRleHRDb250ZW50ICYmICh0ID0gci50ZXh0Q29udGVudC50cmltKCkpLCB7XHJcbiAgICAgIGxhYmVsOiBUKGUpLFxyXG4gICAgICAkbGFiZWw6IGUsXHJcbiAgICAgIHR5cGU6IGwuRklFTERfVFlQRS5DSEVDS0JPWCxcclxuICAgICAgcmVxdWlyZWQ6IFMoZSksXHJcbiAgICAgICRjaGVja2JveHM6IFtvXSxcclxuICAgICAgb3B0aW9uczogW3RdLFxyXG4gICAgICAkaW5wdXQ6IG9cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24geChlKSB7XHJcbiAgbGV0IHQgPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXHJcbiAgICBcIi4vL3NlbGVjdFtub3QoYW5jZXN0b3I6OnNlbGVjdCldIHwgZm9sbG93aW5nLXNpYmxpbmc6OnNlbGVjdFwiLCBlKTtcclxuICBpZiAoIXQpIHtcclxuICAgIGxldCByID0gZS5jbG9zZXN0KFwiZGl2LmZpZWxkXCIpIHx8IGUucGFyZW50RWxlbWVudDtcclxuICAgIHIgJiYgKHQgPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy9zZWxlY3Rbbm90KGFuY2VzdG9yOjpzZWxlY3QpXVwiLCByKSlcclxuICB9XHJcbiAgaWYgKHQgfHwgKHQgPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXHJcbiAgICAgICAgXCJkZXNjZW5kYW50OjpzZWxlY3QgfCBmb2xsb3dpbmctc2libGluZzo6c2VsZWN0IHwgYW5jZXN0b3I6OmRpdltAY2xhc3M9J2ZpZWxkJ10vL3NlbGVjdFwiLCBlXHJcbiAgICAgICAgKSksIHQpIHtcclxuICAgIGxldCByID0gKDAsIHMuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXCIuL29wdGlvblwiLCB0KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxhYmVsOiBUKGUpLFxyXG4gICAgICAkbGFiZWw6IGUsXHJcbiAgICAgIHJlcXVpcmVkOiBTKGUpLFxyXG4gICAgICB0eXBlOiBsLkZJRUxEX1RZUEUuU0VMRUNULFxyXG4gICAgICAkaW5wdXQ6IHQsXHJcbiAgICAgIG9wdGlvbnM6IHIubWFwKGUgPT4gZS50ZXh0Q29udGVudD8udHJpbSgpID8/IFwiXCIpLmZpbHRlcihlID0+ICFbXCJcIiwgXCItLVwiLCBcInBsZWFzZSBzZWxlY3RcIl1cclxuICAgICAgICAuaW5jbHVkZXMoZS50b0xvd2VyQ2FzZSgpKSlcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHIgPSBlLmNsb3Nlc3QoXCJmaWVsZHNldCwgZGl2LmZpZWxkLCBkaXYuZGVtb2dyYXBoaWNfcXVlc3Rpb25cIikgfHwgZS5wYXJlbnRFbGVtZW50LFxyXG4gICAgbiA9ICgwLCBzLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vaW5wdXRbQHR5cGU9J3JhZGlvJ11cIiwgcik7XHJcbiAgaWYgKHIuY29udGFpbnMoZSkgJiYgbi5sZW5ndGggPiAxKSB7XHJcbiAgICBsZXQgdCA9IFtdLFxyXG4gICAgICByID0gW107XHJcbiAgICBmb3IgKGxldCBlIG9mIG4pIHtcclxuICAgICAgbGV0IG4gPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoYHBhcmVudDo6bGFiZWwgfCAvL2xhYmVsW0Bmb3I9JyR7ZS5pZH0nXWAsIGUpO1xyXG4gICAgICBuICYmIG4udGV4dENvbnRlbnQgJiYgKHQucHVzaChuLnRleHRDb250ZW50LnRyaW0oKSksIHIucHVzaChlKSlcclxuICAgIH1cclxuICAgIGlmICh0Lmxlbmd0aCA+IDApIHJldHVybiB7XHJcbiAgICAgIGxhYmVsOiBUKGUpLFxyXG4gICAgICAkbGFiZWw6IGUsXHJcbiAgICAgIHJlcXVpcmVkOiBTKGUpLFxyXG4gICAgICB0eXBlOiBsLkZJRUxEX1RZUEUuU0VMRUNULFxyXG4gICAgICAkaW5wdXQ6IHJbMF0sXHJcbiAgICAgICRyYWRpb3M6IHIsXHJcbiAgICAgIG9wdGlvbnM6IHRcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IG8gPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXHJcbiAgICBcImZvbGxvd2luZy1zaWJsaW5nOjoqW2NvbnRhaW5zKEBjbGFzcywgJ3NlbGVjdDItY29udGFpbmVyJyldIHwgLi8vKltjb250YWlucyhAY2xhc3MsICdzZWxlY3QyLWNvbnRhaW5lcicpXVwiLFxyXG4gICAgZSk7XHJcbiAgaWYgKG8pIHtcclxuICAgIGxldCB0ID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiZm9sbG93aW5nLXNpYmxpbmc6OnNlbGVjdFwiLCBvKTtcclxuICAgIGlmICh0IHx8ICh0ID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vc2VsZWN0XCIsIGUpKSwgIXQpIHtcclxuICAgICAgbGV0IHIgPSBlLmNsb3Nlc3QoXCJkaXYuZmllbGRcIikgfHwgZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICByICYmICh0ID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vc2VsZWN0XCIsIHIpKVxyXG4gICAgfVxyXG4gICAgaWYgKHQpIHtcclxuICAgICAgbGV0IHIgPSAoMCwgcy5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vb3B0aW9uXCIsIHQpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhYmVsOiBUKGUpLFxyXG4gICAgICAgICRsYWJlbDogZSxcclxuICAgICAgICByZXF1aXJlZDogUyhlKSxcclxuICAgICAgICB0eXBlOiBsLkZJRUxEX1RZUEUuU0VMRUNULFxyXG4gICAgICAgICRpbnB1dDogdCxcclxuICAgICAgICBvcHRpb25zOiByLm1hcChlID0+IGUudGV4dENvbnRlbnQ/LnRyaW0oKSA/PyBcIlwiKS5maWx0ZXIoZSA9PiAhW1wiXCIsIFwiLS1cIiwgXCJwbGVhc2Ugc2VsZWN0XCJdXHJcbiAgICAgICAgICAuaW5jbHVkZXMoZS50b0xvd2VyQ2FzZSgpKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGFiZWw6IFQoZSksXHJcbiAgICAgICRsYWJlbDogZSxcclxuICAgICAgcmVxdWlyZWQ6IFMoZSksXHJcbiAgICAgIHR5cGU6IGwuRklFTERfVFlQRS5TRUxFQ1QsXHJcbiAgICAgICRpbnB1dDogbyxcclxuICAgICAgb3B0aW9uczogW11cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gQyhlKSB7XHJcbiAgbGV0IHQgPSBgXHJcbiAgICBmb2xsb3dpbmctc2libGluZzo6aW5wdXRbbm90KEB0eXBlPSdoaWRkZW4nIG9yIEB0eXBlPSdjaGVja2JveCcgb3IgQHR5cGU9J3JhZGlvJyBvciBAdHlwZT0nZmlsZScgb3IgQHR5cGU9J3N1Ym1pdCcgb3IgQHR5cGU9J2J1dHRvbicpXSB8XHJcbiAgICBmb2xsb3dpbmctc2libGluZzo6dGV4dGFyZWEgfFxyXG4gICAgLi8vaW5wdXRbbm90KEB0eXBlPSdoaWRkZW4nIG9yIEB0eXBlPSdjaGVja2JveCcgb3IgQHR5cGU9J3JhZGlvJyBvciBAdHlwZT0nZmlsZScgb3IgQHR5cGU9J3N1Ym1pdCcgb3IgQHR5cGU9J2J1dHRvbicpXSB8XHJcbiAgICAuLy90ZXh0YXJlYVxyXG4gIGAsXHJcbiAgICByID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKHQsIGUpO1xyXG4gIHJldHVybiByID8ge1xyXG4gICAgbGFiZWw6IFQoZSksXHJcbiAgICAkbGFiZWw6IGUsXHJcbiAgICByZXF1aXJlZDogUyhlKSxcclxuICAgIHR5cGU6IGwuRklFTERfVFlQRS5URVhULFxyXG4gICAgJGlucHV0OiByXHJcbiAgfSA6IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gQShlKSB7XHJcbiAgbGV0IHQgPSBlLmlubmVyVGV4dC50cmltKCkudG9Mb3dlckNhc2UoKSxcclxuICAgIHIgPSBbXCJ3aGVyZSBpcyB5b3VyIHBlcm1hbmVudCAoY2l0eSwgc3RhdGUpIHdvcmsgbG9jYXRpb24/XCJdO1xyXG4gIGlmIChyLmluY2x1ZGVzKFQoZSkudG9Mb3dlckNhc2UoKSkpIHJldHVybiBudWxsO1xyXG4gIGxldCBuID0gdC5pbmNsdWRlcyhcImxvY2F0aW9uXCIpO1xyXG4gIGlmIChuKSB7XHJcbiAgICBsZXQgdCA9ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcImZvbGxvd2luZy1zaWJsaW5nOjoqXCIsIGUpLFxyXG4gICAgICByID0gdCAmJiAodC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgJy5zZWxlY3RfX2NvbnRhaW5lciwgLnNlbGVjdDItY29udGFpbmVyLCBbcm9sZT1cImNvbWJvYm94XCJdLCBbcm9sZT1cImxpc3Rib3hcIl0nKSB8fCB0XHJcbiAgICAgICAgLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdF9fY29udGFpbmVyXCIpIHx8IHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0Mi1jb250YWluZXJcIikgfHxcclxuICAgICAgICBcImNvbWJvYm94XCIgPT09IHQuZ2V0QXR0cmlidXRlKFwicm9sZVwiKSk7XHJcbiAgICByZXR1cm4gciA/IHtcclxuICAgICAgbGFiZWw6IFQoZSksXHJcbiAgICAgICRsYWJlbDogZSxcclxuICAgICAgdHlwZTogbC5GSUVMRF9UWVBFLlNFQVJDSCxcclxuICAgICAgcmVxdWlyZWQ6IFMoZSksXHJcbiAgICAgICRpbnB1dDogdFxyXG4gICAgfSA6IG51bGxcclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gayhlKSB7XHJcbiAgbGV0IHQgPSBBcnJheS5mcm9tKGUuY2hpbGROb2RlcykuZmlsdGVyKGUgPT4gZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgJiYgZS50ZXh0Q29udGVudFxyXG4gID8udHJpbSgpKS5tYXAoZSA9PiBlLnRleHRDb250ZW50Py50cmltKCkpLmpvaW4oXCIgXCIpLnJlcGxhY2UoL1xcKiQvLCBcIlwiKS50cmltKCk7XHJcbiAgaWYgKCF0KSByZXR1cm4gbnVsbDtcclxuICBsZXQgciA9ICgwLCBzLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vbGFiZWxcIiwgZSksXHJcbiAgICBuID0gci5tYXAoZSA9PiBlLmlubmVyVGV4dC50cmltKCkpLmZpbHRlcihCb29sZWFuKTtcclxuICBpZiAoMCA9PT0gbi5sZW5ndGgpIHJldHVybiBudWxsO1xyXG4gIGxldCBvID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vaW5wdXRbQHR5cGU9J3JhZGlvJyBvciBAdHlwZT0nY2hlY2tib3gnXVwiLCBlKTtcclxuICBpZiAoIW8pIHJldHVybiBudWxsO1xyXG4gIGxldCBpID0gXCJyYWRpb1wiID09PSBvLnR5cGUgPyBsLkZJRUxEX1RZUEUuU0VMRUNUIDogbC5GSUVMRF9UWVBFLkNIRUNLQk9YO1xyXG4gIHJldHVybiB7XHJcbiAgICBsYWJlbDogdCxcclxuICAgICRsYWJlbDogZSxcclxuICAgIHR5cGU6IGksXHJcbiAgICByZXF1aXJlZDogUyhlKSxcclxuICAgIG9wdGlvbnM6IG4sXHJcbiAgICAkY2hlY2tib3hzOiByLm1hcChlID0+ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4vL2lucHV0W0B0eXBlPSdjaGVja2JveCddXCIsIGUpKSB8fCBbXSxcclxuICAgICRpbnB1dDogb1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gVChlKSB7XHJcbiAgbGV0IHQgPSBcIlwiO1xyXG4gIGZvciAobGV0IHIgb2YgZS5jaGlsZE5vZGVzKSByLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSAmJiAodCArPSByLnRleHRDb250ZW50Py50cmltKCkgPz8gXCJcIik7XHJcbiAgcmV0dXJuIHQgfHwgZS5pbm5lclRleHQudHJpbSgpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gRihlKSB7XHJcbiAgbGV0IHQgPSBbXSxcclxuICAgIHIgPSAoMCwgcy5nZXRPcmRlcmVkTm9kZXNTYWZlKShgLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ3RleHQtaW5wdXQtd3JhcHBlcicpXHJcbiAgICAgYW5kIG5vdChhbmNlc3Rvcjo6ZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2VkdWNhdGlvbi0tY29udGFpbmVyJyldKVxyXG4gICAgIGFuZCBub3QoYW5jZXN0b3I6OmRpdltjb250YWlucyhAY2xhc3MsICdlbXBsb3ltZW50LS1jb250YWluZXInKV0pXWAsIGUpLFxyXG4gICAgbiA9IFAocik7XHJcbiAgdC5wdXNoKC4uLm4pO1xyXG4gIGxldCBvID0gSShlKTtcclxuICB0LnB1c2goLi4ubyk7XHJcbiAgbGV0IGkgPSAoMCwgcy5nZXRPcmRlcmVkTm9kZXNTYWZlKShgLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ3NlbGVjdF9fY29udGFpbmVyJylcclxuICAgIGFuZCBub3QoYW5jZXN0b3I6OmRpdltjb250YWlucyhAY2xhc3MsICdlZHVjYXRpb24tLWNvbnRhaW5lcicpXSlcclxuICAgIGFuZCBub3QoYW5jZXN0b3I6OmRpdltjb250YWlucyhAY2xhc3MsICdlbXBsb3ltZW50LS1jb250YWluZXInKV0pXWAsIGUpLFxyXG4gICAgYSA9IGF3YWl0IF8oaSwgITEsICEwKTtcclxuICB0LnB1c2goLi4uYSk7XHJcbiAgbGV0IHUgPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXHJcbiAgICBcIi4vL2xhYmVsW2NvbnRhaW5zKHRyYW5zbGF0ZSh0ZXh0KCksICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicsICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpLCAnaGlzcGFuaWMnKV1cIixcclxuICAgIGUpO1xyXG4gIGlmICh1KSB7XHJcbiAgICBsZXQgZSA9IHQuZmluZChlID0+ICgwLCBmLmlzR3JlZW5ob3VzZVJhY2VMYWJlbCkoZS5sYWJlbCkpO1xyXG4gICAgaWYgKGUpIHtcclxuICAgICAgbGV0IHQgPSBlO1xyXG4gICAgICB0Lm9wdGlvbnMgJiYgMCAhPT0gdC5vcHRpb25zLmxlbmd0aCB8fCAoZS5vcHRpb25zID0gZi5SQUNFX0ZBTExCQUNLX09QVElPTlMpXHJcbiAgICB9IGVsc2UgdC5wdXNoKHtcclxuICAgICAgbGFiZWw6IFwiUGxlYXNlIGlkZW50aWZ5IHlvdXIgcmFjZVwiLFxyXG4gICAgICByZXF1aXJlZDogITEsXHJcbiAgICAgIHR5cGU6IGwuRklFTERfVFlQRS5TRUFSQ0gsXHJcbiAgICAgIG9wdGlvbnM6IGYuUkFDRV9GQUxMQkFDS19PUFRJT05TXHJcbiAgICB9KVxyXG4gIH1cclxuICBsZXQgYyA9IGF3YWl0IGooITEsICEwKTtcclxuICBjLmxlbmd0aCA+IDAgJiYgdC5wdXNoKC4uLmMpO1xyXG4gIGxldCBkID0gYXdhaXQgRCghMSwgITApO1xyXG4gIHJldHVybiBkLmxlbmd0aCA+IDAgJiYgdC5wdXNoKC4uLmQpLCB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEkoZSkge1xyXG4gIGxldCB0ID0gW10sXHJcbiAgICByID0gbmV3IFNldCxcclxuICAgIG4gPSAoMCwgcy5nZXRPcmRlcmVkTm9kZXNTYWZlKShgLi8vbGFiZWxbXHJcbiAgICAgIG5vdChhbmNlc3Rvcjo6ZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2VkdWNhdGlvbi0tY29udGFpbmVyJyldKVxyXG4gICAgICBhbmQgbm90KGFuY2VzdG9yOjpkaXZbY29udGFpbnMoQGNsYXNzLCAnZW1wbG95bWVudC0tY29udGFpbmVyJyldKVxyXG4gICAgICBhbmQgbm90KGFuY2VzdG9yOjpkaXZbY29udGFpbnMoQGNsYXNzLCAndGV4dC1pbnB1dC13cmFwcGVyJyldKVxyXG4gICAgICBhbmQgbm90KGFuY2VzdG9yOjpkaXZbY29udGFpbnMoQGNsYXNzLCAnc2VsZWN0X19jb250YWluZXInKV0pXHJcbiAgICAgIGFuZCAoXHJcbiAgICAgICAgZm9sbG93aW5nLXNpYmxpbmc6OmlucHV0W0B0eXBlPSdjaGVja2JveCddXHJcbiAgICAgICAgb3IgcGFyZW50OjpkaXYvL2lucHV0W0B0eXBlPSdjaGVja2JveCddXHJcbiAgICAgICAgb3IgcGFyZW50OjpsYWJlbC8vaW5wdXRbQHR5cGU9J2NoZWNrYm94J11cclxuICAgICAgICBvciAuLy9pbnB1dFtAdHlwZT0nY2hlY2tib3gnXVxyXG4gICAgICApXHJcbiAgICBdIHwgLi8vZmllbGRzZXRbY29udGFpbnMoQGNsYXNzLCAnY2hlY2tib3gnKV0vbGVnZW5kYCwgZSk7XHJcbiAgZm9yIChsZXQgZSBvZiBuKSB7XHJcbiAgICBsZXQgbiA9IEUoZSk7XHJcbiAgICBpZiAobikge1xyXG4gICAgICBsZXQgZSA9IChuLiRjaGVja2JveHMgfHwgW10pLm1hcChlID0+IGUuaWQpLmZpbHRlcihCb29sZWFuKSxcclxuICAgICAgICBvID0gZS5zb21lKGUgPT4gci5oYXMoZSkpO1xyXG4gICAgICBvIHx8IHQuc29tZShlID0+IGUubGFiZWwgPT09IG4ubGFiZWwpIHx8ICh0LnB1c2gobiksIGUuZm9yRWFjaChlID0+IHIuYWRkKGUpKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRcclxufVxyXG5hc3luYyBmdW5jdGlvbiBqKGUgPSAhMSwgdCA9ICExKSB7XHJcbiAgbGV0IHIgPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnZWR1Y2F0aW9uLS1jb250YWluZXInKV1cIixcclxuICAgIGRvY3VtZW50KTtcclxuICBpZiAocikge1xyXG4gICAgbGV0IG4gPSAoMCwgcy5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2Rpdltjb250YWlucyhAY2xhc3MsICdlZHVjYXRpb24tLWZvcm0nKV1cIiwgcik7XHJcbiAgICB0ICYmIChuID0gbj8uc2xpY2UoMCwgMSkgfHwgW10pO1xyXG4gICAgbGV0IG8gPSBbXTtcclxuICAgIGZvciAobGV0IHIgb2Ygbikge1xyXG4gICAgICBsZXQgbiA9IFtdLFxyXG4gICAgICAgIGkgPSAoMCwgcy5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2Rpdltjb250YWlucyhAY2xhc3MsICd0ZXh0LWlucHV0LXdyYXBwZXInKV1cIiwgciksXHJcbiAgICAgICAgYSA9IFAoaSk7XHJcbiAgICAgIGEubGVuZ3RoID4gMCAmJiBuLnB1c2goLi4uYSk7XHJcbiAgICAgIGxldCB1ID0gKDAsIHMuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXCIuLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnc2VsZWN0X19jb250YWluZXInKV1cIiwgciksXHJcbiAgICAgICAgYyA9IGF3YWl0IF8odSwgZSwgdCk7XHJcbiAgICAgIGlmIChjLmxlbmd0aCA+IDAgJiYgbi5wdXNoKC4uLmMpLCBuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgZSA9IHtcclxuICAgICAgICAgIHR5cGU6IGwuRklFTERfVFlQRS5FRFVDQVRJT04sXHJcbiAgICAgICAgICBsYWJlbDogXCJFZHVjYXRpb25cIixcclxuICAgICAgICAgIGNoaWxkcmVuOiBuLFxyXG4gICAgICAgICAgb3B0aW9uczogKDAsIHAuYnVpbGRHcmVlbmhvdXNlRWR1Y2F0aW9uT3B0aW9uRGVzY3JpcHRvcnMpKG4pLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6ICExXHJcbiAgICAgICAgfTtcclxuICAgICAgICBvLnB1c2goZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9cclxuICB9XHJcbiAgcmV0dXJuIFtdXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gRChlID0gITEsIHQgPSAhMSkge1xyXG4gIGxldCByID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2VtcGxveW1lbnQtLWNvbnRhaW5lcicpXVwiLFxyXG4gICAgZG9jdW1lbnQpO1xyXG4gIGlmIChyKSB7XHJcbiAgICBsZXQgbiA9ICgwLCBzLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2VtcGxveW1lbnQtZm9ybScpXVwiLCByKTtcclxuICAgIHQgJiYgKG4gPSBuPy5zbGljZSgwLCAxKSB8fCBbXSk7XHJcbiAgICBsZXQgbyA9IFtdO1xyXG4gICAgZm9yIChsZXQgciBvZiBuKSB7XHJcbiAgICAgIGxldCBuID0gW10sXHJcbiAgICAgICAgaSA9ICgwLCBzLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ3RleHQtaW5wdXQtd3JhcHBlcicpXVwiLCByKSxcclxuICAgICAgICBhID0gUChpKTtcclxuICAgICAgYS5sZW5ndGggPiAwICYmIG4ucHVzaCguLi5hKTtcclxuICAgICAgbGV0IHUgPSAoMCwgcy5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2Rpdltjb250YWlucyhAY2xhc3MsICdzZWxlY3RfX2NvbnRhaW5lcicpXVwiLCByKSxcclxuICAgICAgICBjID0gYXdhaXQgXyh1LCBlLCB0KTtcclxuICAgICAgYy5sZW5ndGggPiAwICYmIG4ucHVzaCguLi5jKTtcclxuICAgICAgbGV0IGQgPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXHJcbiAgICAgICAgICBcIi4vL2xhYmVsW2NvbnRhaW5zKHRyYW5zbGF0ZSh0ZXh0KCksICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicsICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpLCAnY3VycmVudCcpXVwiLFxyXG4gICAgICAgICAgciksXHJcbiAgICAgICAgZiA9IG51bGw7XHJcbiAgICAgIGQgJiYgKGYgPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy9pbnB1dFtAdHlwZT0nY2hlY2tib3gnXVwiLCBkKSksIGYgfHwgKGYgPSAoMCwgc1xyXG4gICAgICAgIC5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXHJcbiAgICAgICAgXCIuLy9pbnB1dFtAdHlwZT0nY2hlY2tib3gnIGFuZCAoY29udGFpbnMoQGlkLCAnY3VycmVudCcpIG9yIGNvbnRhaW5zKEBpZCwgJ2VtcGxveW1lbnRfY3VycmVudCcpIG9yIGNvbnRhaW5zKEBuYW1lLCAnY3VycmVudCcpKV1cIixcclxuICAgICAgICByKSksIGYgJiYgIW4uc29tZShlID0+IGUubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImN1cnJlbnRcIikpICYmIG4ucHVzaCh7XHJcbiAgICAgICAgdHlwZTogbC5GSUVMRF9UWVBFLkNIRUNLQk9YLFxyXG4gICAgICAgIGxhYmVsOiBcIkN1cnJlbnQgcm9sZVwiLFxyXG4gICAgICAgICRsYWJlbDogZCB8fCBmLFxyXG4gICAgICAgICRpbnB1dDogZixcclxuICAgICAgICAkY2hlY2tib3hzOiBbZl0sXHJcbiAgICAgICAgb3B0aW9uczogW1wiVHJ1ZVwiLCBcIkZhbHNlXCJdLFxyXG4gICAgICAgIHJlcXVpcmVkOiAhMVxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IHAgPSAoMCwgcy5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi4vL2Rpdltjb250YWlucyhAY2xhc3MsICdjaGVja2JveCcpXVwiLCByKTtcclxuICAgICAgaWYgKHAgJiYgcC5sZW5ndGggPiAwKVxyXG4gICAgICAgIGZvciAobGV0IGUgb2YgcCkge1xyXG4gICAgICAgICAgbGV0IHQgPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy9sYWJlbFwiLCBlKTtcclxuICAgICAgICAgIGlmICh0KSB7XHJcbiAgICAgICAgICAgIGxldCBlID0gdC50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKS50cmltKCkgfHwgXCJcIjtcclxuICAgICAgICAgICAgaWYgKGUuaW5jbHVkZXMoXCJjdXJyZW50XCIpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IHIgPSBFKHQpO1xyXG4gICAgICAgICAgICByICYmIG4ucHVzaChyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgaWYgKG4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBlID0ge1xyXG4gICAgICAgICAgdHlwZTogbC5GSUVMRF9UWVBFLkVNUExPWU1FTlQsXHJcbiAgICAgICAgICBsYWJlbDogXCJFbXBsb3ltZW50XCIsXHJcbiAgICAgICAgICBjaGlsZHJlbjogbixcclxuICAgICAgICAgIG9wdGlvbnM6IFsuLi5uLm1hcChlID0+ICh7XHJcbiAgICAgICAgICAgIHR5cGU6IGUudHlwZSxcclxuICAgICAgICAgICAgbGFiZWw6IGUubGFiZWwsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IGUub3B0aW9ucyB8fCBbXVxyXG4gICAgICAgICAgfSkpXSxcclxuICAgICAgICAgIHJlcXVpcmVkOiAhMVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgby5wdXNoKGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvXHJcbiAgfVxyXG4gIHJldHVybiBbXVxyXG59XHJcblxyXG5mdW5jdGlvbiBQKGUpIHtcclxuICBsZXQgdCA9IFtdO1xyXG4gIGZvciAobGV0IHIgb2YgZSkge1xyXG4gICAgbGV0IGUgPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy9sYWJlbFwiLCByKSxcclxuICAgICAgbiA9IGU/LnRleHRDb250ZW50Py50cmltKCkgPz8gXCJcIixcclxuICAgICAgbyA9IC9bKlxcdWZmMGFdXFxzKiQvLnRlc3Qobik7XHJcbiAgICBuLnJlcGxhY2UoL1sqXFx1ZmYwYV1cXHMqJC8sIFwiXCIpLnRyaW0oKTtcclxuICAgIGxldCBpID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vaW5wdXQgfCAuLy90ZXh0YXJlYVwiLCByKTtcclxuICAgIGlmIChpKSB7XHJcbiAgICAgIGxldCByID0gKDAsIGQubm9ybWFsaXplR3JlZW5ob3VzZUZpZWxkTGFiZWwpKHtcclxuICAgICAgICByYXdMYWJlbDogbixcclxuICAgICAgICBpbnB1dElkOiBpLmdldEF0dHJpYnV0ZShcImlkXCIpLFxyXG4gICAgICAgIGlucHV0QXJpYUxhYmVsOiBpLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIilcclxuICAgICAgfSk7XHJcbiAgICAgIHQucHVzaCh7XHJcbiAgICAgICAgbGFiZWw6IHIgfHwgXCJcIixcclxuICAgICAgICAkbGFiZWw6IGUsXHJcbiAgICAgICAgcmVxdWlyZWQ6IG8sXHJcbiAgICAgICAgdHlwZTogbC5GSUVMRF9UWVBFLlRFWFQsXHJcbiAgICAgICAgJGlucHV0OiBpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gXyhlLCB0ID0gITEsIHIgPSAhMCkge1xyXG4gIGxldCBuID0gW107XHJcbiAgZm9yIChsZXQgYyBvZiBlKSB7XHJcbiAgICBsZXQgZSA9ICgwLCBzLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4vL2xhYmVsXCIsIGMpLFxyXG4gICAgICBkID0gZT8uZ2V0QXR0cmlidXRlKFwiZm9yXCIpLFxyXG4gICAgICBmID0gZT8udGV4dENvbnRlbnQ/LnRyaW0oKSA/PyBcIlwiLFxyXG4gICAgICBwID0gL1sqXFx1ZmYwYV1cXHMqJC8udGVzdChmKSxcclxuICAgICAgaCA9IGYucmVwbGFjZSgvWypcXHVmZjBhXVxccyokLywgXCJcIikudHJpbSgpLFxyXG4gICAgICBnID0gKDAsIG0ubm9ybWFsaXplR3JlZW5ob3VzZVNlbGVjdFJ1bGVMYWJlbCkoaCwgYyk7XHJcbiAgICBpZiAobnVsbCA9PT0gZykgY29udGludWU7XHJcbiAgICBpZiAoIXIpIHtcclxuICAgICAgbi5wdXNoKHtcclxuICAgICAgICBsYWJlbDogZyB8fCBcIlwiLFxyXG4gICAgICAgICRsYWJlbDogZSxcclxuICAgICAgICByZXF1aXJlZDogcCxcclxuICAgICAgICB0eXBlOiBsLkZJRUxEX1RZUEUuU0VBUkNILFxyXG4gICAgICAgICRpbnB1dDogYyxcclxuICAgICAgICBvcHRpb25zOiBbXVxyXG4gICAgICB9KTtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGxldCBiID0gZCA/IGByZWFjdC1zZWxlY3QtJHtkfS1saXN0Ym94YCA6IFwiXCIsXHJcbiAgICAgIHkgPSAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy9pbnB1dFtjb250YWlucyhAY2xhc3MsICdzZWxlY3RfX2lucHV0JyldXCIsIGMpLFxyXG4gICAgICB2ID0gXCJzY2hvb2xcIiA9PT0gZy50b0xvd2VyQ2FzZSgpIHx8IFwiZGlzY2lwbGluZVwiID09PSBnLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBpZiAoeSAmJiAhdikge1xyXG4gICAgICAoMCwgby50cmlnZ2VyRXZlbnRzKSh5LCBbXCJmb2N1c1wiLCBcIm1vdXNlZG93blwiLCBcIm1vdXNldXBcIl0pO1xyXG4gICAgICBsZXQgciA9IG51bGw7XHJcbiAgICAgIGlmICh0KSBhd2FpdCAoMCwgdS5kZWxheSkoM2UzKTtcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IGUgPSBhd2FpdCAoMCwgaS53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiBudWxsICE9PSAociA9IGIgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiKSA6XHJcbiAgICAgICAgICAoMCwgcy5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnc2VsZWN0X19tZW51LWxpc3QnKV1cIixcclxuICAgICAgICAgICAgZG9jdW1lbnQpKSwge1xyXG4gICAgICAgICAgdGltZW91dDogMWUzLFxyXG4gICAgICAgICAgaW50ZXJ2YWw6IDUwLFxyXG4gICAgICAgICAgb2JzZXJ2ZVRhcmdldDogZG9jdW1lbnQuYm9keVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGUgfHwgKGF3YWl0ICgwLCB1LmRlbGF5KSgyMDApLCByID0gYiA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGIpIDogKDAsIHNcclxuICAgICAgICAgICAgLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcIi4vL2Rpdltjb250YWlucyhAY2xhc3MsICdzZWxlY3RfX21lbnUtbGlzdCcpXVwiLFxyXG4gICAgICAgICAgZG9jdW1lbnQpKVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghciAmJiBiICYmIChyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYikpLCByIHx8IChyID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFxyXG4gICAgICAgICAgXCIuLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnc2VsZWN0X19tZW51LWxpc3QnKV1cIiwgZG9jdW1lbnQpKSwgcikge1xyXG4gICAgICAgIGxldCBlID0gcjtcclxuICAgICAgICBhd2FpdCAoMCwgaS53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiBlLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICBgLiR7YS5HUkVFTkhPVVNFX1YyX1JFQUNUX1NFTEVDVF9PUFRJT05fQ0xBU1N9YCkubGVuZ3RoID4gMCwge1xyXG4gICAgICAgICAgdGltZW91dDogMmUzLFxyXG4gICAgICAgICAgaW50ZXJ2YWw6IDEwMCxcclxuICAgICAgICAgIG9ic2VydmVUYXJnZXQ6IGVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBkID0gKDAsIHMuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXHJcbiAgICAgICAgICBgLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJyR7YS5HUkVFTkhPVVNFX1YyX1JFQUNUX1NFTEVDVF9PUFRJT05fQ0xBU1N9JyldYCwgciksXHJcbiAgICAgICAgZiA9IGQubWFwKGUgPT4gZS50ZXh0Q29udGVudD8udHJpbSgpID8/IFwiXCIpLFxyXG4gICAgICAgIG0gPSBuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIiwge1xyXG4gICAgICAgICAga2V5OiBcIkVzY2FwZVwiLFxyXG4gICAgICAgICAgY29kZTogXCJFc2NhcGVcIixcclxuICAgICAgICAgIGtleUNvZGU6IDI3LFxyXG4gICAgICAgICAgYnViYmxlczogITAsXHJcbiAgICAgICAgICBjYW5jZWxhYmxlOiAhMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICBpZiAoeS5kaXNwYXRjaEV2ZW50KG0pLCBhd2FpdCAoMCwgdS5kZWxheSkoNTApLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdF9fbWVudVwiKSkge1xyXG4gICAgICAgIGxldCBlID0gYy5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdF9faW5kaWNhdG9yc1wiKTtcclxuICAgICAgICBlICYmICgoMCwgby50cmlnZ2VyRXZlbnRzKShlLCBbXCJtb3VzZWRvd25cIiwgXCJjbGlja1wiXSksIGF3YWl0ICgwLCB1LmRlbGF5KSg1MCkpXHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RfX21lbnVcIikgJiYgKHkuYmx1cigpLCBhd2FpdCAoMCwgdS5kZWxheSkoNTApKSwgbi5wdXNoKHtcclxuICAgICAgICBsYWJlbDogZyB8fCBcIlwiLFxyXG4gICAgICAgICRsYWJlbDogZSxcclxuICAgICAgICByZXF1aXJlZDogcCxcclxuICAgICAgICB0eXBlOiBsLkZJRUxEX1RZUEUuU0VBUkNILFxyXG4gICAgICAgICRpbnB1dDogYyxcclxuICAgICAgICBvcHRpb25zOiBmXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2UgeSAmJiBuLnB1c2goe1xyXG4gICAgICBsYWJlbDogZyB8fCBcIlwiLFxyXG4gICAgICAkbGFiZWw6IGUsXHJcbiAgICAgIHJlcXVpcmVkOiBwLFxyXG4gICAgICB0eXBlOiBsLkZJRUxEX1RZUEUuU0VBUkNILFxyXG4gICAgICAkaW5wdXQ6IGMsXHJcbiAgICAgIG9wdGlvbnM6IFtdXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gblxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIEwoZSwgdCkge1xyXG4gIGxldCByID0ge307XHJcbiAgZm9yIChsZXQgdCBvZiBlKVxyXG4gICAgaWYgKHQgJiYgdC50eXBlKSB7XHJcbiAgICAgIGlmICh0LnR5cGUgPT09IGwuRklFTERfVFlQRS5URVhUKSB7XHJcbiAgICAgICAgbGV0IGUgPSB0LiRpbnB1dDtcclxuICAgICAgICBpZiAoIWUpIGNvbnRpbnVlO1xyXG4gICAgICAgIGlmIChlLmNsYXNzTGlzdC5jb250YWlucyhcIml0aV9fc2VhcmNoLWlucHV0XCIpKSB7XHJcbiAgICAgICAgICBsZXQgdCA9IGUuY2xvc2VzdChcIi5pdGlcIiksXHJcbiAgICAgICAgICAgIHIgPSB0Py5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGVsJ11cIik7XHJcbiAgICAgICAgICByICYmIChlID0gcilcclxuICAgICAgICB9XHJcbiAgICAgICAgclt0LmxhYmVsXSA9IGUudmFsdWUudHJpbSgpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHQudHlwZSA9PT0gbC5GSUVMRF9UWVBFLlNFTEVDVCkge1xyXG4gICAgICAgIGxldCBlID0gdC4kaW5wdXQ7XHJcbiAgICAgICAgaWYgKCFlKSBjb250aW51ZTtcclxuICAgICAgICBpZiAoXCJTRUxFQ1RcIiA9PT0gZS50YWdOYW1lKSB7XHJcbiAgICAgICAgICBsZXQgbiA9IGU7XHJcbiAgICAgICAgICByW3QubGFiZWxdID0gbi5vcHRpb25zW24uc2VsZWN0ZWRJbmRleF0/LnRleHQ/LnRyaW0oKSB8fCBcIlwiXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBuID0gZS5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdF9fc2luZ2xlLXZhbHVlXCIpPy50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgbyA9IGUucXVlcnlTZWxlY3RvcihcIi5zZWxlY3QyLWNob3NlblwiKT8udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICByW3QubGFiZWxdID0gKG4gfHwgbyB8fCBcIlwiKS50cmltKClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHQudHlwZSA9PT0gbC5GSUVMRF9UWVBFLkNIRUNLQk9YKSB7XHJcbiAgICAgICAgbGV0IGUgPSB0O1xyXG4gICAgICAgIGlmICghZS4kY2hlY2tib3hzIHx8IDAgPT09IGUuJGNoZWNrYm94cy5sZW5ndGgpIGNvbnRpbnVlO1xyXG4gICAgICAgIGxldCBuID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgdCBvZiBlLiRjaGVja2JveHMpXHJcbiAgICAgICAgICBpZiAodC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGxldCBlID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKGBwYXJlbnQ6OmxhYmVsIHwgLy9sYWJlbFtAZm9yPScke3QuaWR9J11gLCB0KTtcclxuICAgICAgICAgICAgZSAmJiBlLnRleHRDb250ZW50ICYmIG4ucHVzaChlLnRleHRDb250ZW50LnRyaW0oKSlcclxuICAgICAgICAgIH0gclt0LmxhYmVsXSA9IG5cclxuICAgICAgfVxyXG4gICAgICBpZiAodC50eXBlID09PSBsLkZJRUxEX1RZUEUuU0VBUkNIKSB7XHJcbiAgICAgICAgbGV0IGUgPSB0O1xyXG4gICAgICAgIGlmICghZS4kaW5wdXQpIGNvbnRpbnVlO1xyXG4gICAgICAgIGxldCBuID0gKDAsIHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ3NlbGVjdF9fc2luZ2xlLXZhbHVlJyldXCIsXHJcbiAgICAgICAgICBlLiRpbnB1dCk7XHJcbiAgICAgICAgaWYgKG4pIHtcclxuICAgICAgICAgIHJbdC5sYWJlbF0gPSAobj8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKTtcclxuICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvID0gKDAsIHMuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoXHJcbiAgICAgICAgICBcIi4vL2Rpdltjb250YWlucyhAY2xhc3MsICdzZWxlY3RfX211bHRpLXZhbHVlX19sYWJlbCcpXVwiLCBlLiRpbnB1dCk7XHJcbiAgICAgICAgaWYgKG8gJiYgby5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICByW3QubGFiZWxdID0gby5tYXAoZSA9PiBlPy50ZXh0Q29udGVudD8udHJpbSgpKS5maWx0ZXIoZSA9PiAhIWUpO1xyXG4gICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gcmV0dXJuIHJcclxufVxyXG5cclxuZnVuY3Rpb24gUihlKSB7XHJcbiAgcmV0dXJuIGUgPyBlLnJlcGxhY2UoL1xcKi9nLCBcIlwiKS50cmltKCkucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikgOiBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE8oZSwgdCwgcikge1xyXG4gIGlmICghci5tYXJrRWR1Y2F0aW9uUm93cyAmJiAhci5pbmNsdWRlRWR1Y2F0aW9uU25hcHNob3RJbmRleCkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IG4gPSBlLmdldEF0dHJpYnV0ZShoLkdSRUVOSE9VU0VfRURVQ0FUSU9OX1NOQVBTSE9UX0lOREVYX0FUVFJJQlVURSk7XHJcbiAgaWYgKHIubWFya0VkdWNhdGlvblJvd3MgJiYgKG4gPSBTdHJpbmcodCksIGUuc2V0QXR0cmlidXRlKGhcclxuICAgICAgLkdSRUVOSE9VU0VfRURVQ0FUSU9OX1NOQVBTSE9UX0lOREVYX0FUVFJJQlVURSwgbikpLCAhci5pbmNsdWRlRWR1Y2F0aW9uU25hcHNob3RJbmRleCB8fCAhbilcclxuICAgIHJldHVybiBudWxsO1xyXG4gIGxldCBvID0gTnVtYmVyKG4pO1xyXG4gIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKG8pICYmIG8gPj0gMCA/IG8gOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE0oZSA9IHt9KSB7XHJcbiAgbGV0IHQgPSBbXSxcclxuICAgIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkdWNhdGlvbl9zZWN0aW9uXCIpO1xyXG4gIGlmIChyKSB7XHJcbiAgICBsZXQgbiA9IHIucXVlcnlTZWxlY3RvckFsbChcIi5lZHVjYXRpb25cIik7XHJcbiAgICBuLmZvckVhY2goKHIsIG4pID0+IHtcclxuICAgICAgbGV0IG8gPSB7fSxcclxuICAgICAgICBpID0gTyhyLCBuLCBlKSxcclxuICAgICAgICBhID0gKDAsIGMuZ2V0RWR1Y2F0aW9uVHJhY2VGb3JSb3cpKHIsIHtcclxuICAgICAgICAgIGF0dHJpYnV0ZXM6IGguR1JFRU5IT1VTRV9FRFVDQVRJT05fVFJBQ0VfQVRUUklCVVRFUyxcclxuICAgICAgICAgIGluY2x1ZGVFZHVjYXRpb25UcmFjZTogZS5pbmNsdWRlRWR1Y2F0aW9uVHJhY2UsXHJcbiAgICAgICAgICBtYXJrRWR1Y2F0aW9uUm93czogZS5tYXJrRWR1Y2F0aW9uUm93cyxcclxuICAgICAgICAgIHJ1bklkOiBlLmVkdWNhdGlvblRyYWNlUnVuSWQsXHJcbiAgICAgICAgICBzbmFwc2hvdEluZGV4OiBuXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbCA9IGUgPT4ge1xyXG4gICAgICAgICAgbGV0IHQgPSByLnF1ZXJ5U2VsZWN0b3IoZSk7XHJcbiAgICAgICAgICBpZiAodCkge1xyXG4gICAgICAgICAgICBsZXQgZSA9IHQuZ2V0QXR0cmlidXRlKFwiaWRcIikgfHwgXCJcIjtcclxuICAgICAgICAgICAgZS5zdGFydHNXaXRoKFwiczJpZF9cIikgJiYgKGUgPSBlLnJlcGxhY2UoL15zMmlkXy8sIFwiXCIpKTtcclxuICAgICAgICAgICAgbGV0IG4gPSByLnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7ZX1cIl1gKSxcclxuICAgICAgICAgICAgICBpID0gUihuPy50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIGlmIChpKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGUgPSB0LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0Mi1jaG9zZW5cIiksXHJcbiAgICAgICAgICAgICAgICByID0gXCJcIjtcclxuICAgICAgICAgICAgICBlID8gKHIgPSBlLnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIikuc3RhcnRzV2l0aChcIlNlbGVjdCBhXCIpICYmIChyID0gXCJcIikgOlxyXG4gICAgICAgICAgICAgICAgdCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgKHIgPSB0LnZhbHVlKSwgb1tpXSA9IHJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIGwoXCIuc2Nob29sLW5hbWVcIiksIGwoXCIuZGVncmVlXCIpLCBsKFwiLmRpc2NpcGxpbmVcIik7XHJcbiAgICAgIGxldCBzID0gci5xdWVyeVNlbGVjdG9yKFwiLmZpZWxkOmhhcyguc3RhcnQtZGF0ZS1tb250aCkgbGVnZW5kIGxhYmVsXCIpO1xyXG4gICAgICBpZiAocykge1xyXG4gICAgICAgIGxldCBlID0gUihzLnRleHRDb250ZW50KTtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgbGV0IHQgPSByLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZGF0ZS1tb250aFwiKSxcclxuICAgICAgICAgICAgbiA9IHIucXVlcnlTZWxlY3RvcihcIi5zdGFydC1kYXRlLXllYXJcIiksXHJcbiAgICAgICAgICAgIGkgPSBcIlwiO1xyXG4gICAgICAgICAgKHQgfHwgbikgJiYgXCIvXCIgPT0gKGkgPSBgJHt0Py52YWx1ZXx8XCJcIn0vJHtuPy52YWx1ZXx8XCJcIn1gKSAmJiAoaSA9IFwiXCIpLCBvW2VdID0gaVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgdSA9IHIucXVlcnlTZWxlY3RvcihcIi5maWVsZDpoYXMoLmVuZC1kYXRlLW1vbnRoKSBsZWdlbmQgbGFiZWxcIik7XHJcbiAgICAgIGlmICh1KSB7XHJcbiAgICAgICAgbGV0IGUgPSBSKHUudGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICBsZXQgdCA9IHIucXVlcnlTZWxlY3RvcihcIi5lbmQtZGF0ZS1tb250aFwiKSxcclxuICAgICAgICAgICAgbiA9IHIucXVlcnlTZWxlY3RvcihcIi5lbmQtZGF0ZS15ZWFyXCIpLFxyXG4gICAgICAgICAgICBpID0gXCJcIjtcclxuICAgICAgICAgICh0IHx8IG4pICYmIFwiL1wiID09IChpID0gYCR7dD8udmFsdWV8fFwiXCJ9LyR7bj8udmFsdWV8fFwiXCJ9YCkgJiYgKGkgPSBcIlwiKSwgb1tlXSA9IGlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgT2JqZWN0LmtleXMobykubGVuZ3RoID4gMCAmJiAobnVsbCAhPT0gaSAmJiAob1toXHJcbiAgICAgICAgICAuR1JFRU5IT1VTRV9FRFVDQVRJT05fU05BUFNIT1RfSU5ERVhfS0VZXSA9IGkpLCBhICYmIChvW2MuRURVQ0FUSU9OX1RSQUNFX0tFWV0gPSBhKSxcclxuICAgICAgICB0LnB1c2gobykpXHJcbiAgICB9KVxyXG4gIH1cclxuICBsZXQgbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWR1Y2F0aW9uLS1jb250YWluZXJcIik7XHJcbiAgaWYgKG4pIHtcclxuICAgIGxldCByID0gbi5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkdWNhdGlvbi0tZm9ybVwiKTtcclxuICAgIHIuZm9yRWFjaCgociwgbikgPT4ge1xyXG4gICAgICBsZXQgbyA9IHt9LFxyXG4gICAgICAgIGkgPSBPKHIsIG4sIGUpLFxyXG4gICAgICAgIGEgPSAoMCwgYy5nZXRFZHVjYXRpb25UcmFjZUZvclJvdykociwge1xyXG4gICAgICAgICAgYXR0cmlidXRlczogaC5HUkVFTkhPVVNFX0VEVUNBVElPTl9UUkFDRV9BVFRSSUJVVEVTLFxyXG4gICAgICAgICAgaW5jbHVkZUVkdWNhdGlvblRyYWNlOiBlLmluY2x1ZGVFZHVjYXRpb25UcmFjZSxcclxuICAgICAgICAgIG1hcmtFZHVjYXRpb25Sb3dzOiBlLm1hcmtFZHVjYXRpb25Sb3dzLFxyXG4gICAgICAgICAgcnVuSWQ6IGUuZWR1Y2F0aW9uVHJhY2VSdW5JZCxcclxuICAgICAgICAgIHNuYXBzaG90SW5kZXg6IG5cclxuICAgICAgICB9KSxcclxuICAgICAgICBsID0gZSA9PiB7XHJcbiAgICAgICAgICBsZXQgdCA9IHIucXVlcnlTZWxlY3RvcihgbGFiZWxbaWRePVwiJHtlfVwiXWApO1xyXG4gICAgICAgICAgaWYgKCF0KSByZXR1cm47XHJcbiAgICAgICAgICBsZXQgbiA9IFIodD8udGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgaWYgKCFuKSByZXR1cm47XHJcbiAgICAgICAgICBsZXQgaSA9IFwiXCIsXHJcbiAgICAgICAgICAgIGEgPSB0LmNsb3Nlc3QoXCIuc2VsZWN0X19jb250YWluZXJcIik7XHJcbiAgICAgICAgICBpZiAoYSkgaSA9IGEucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RfX3NpbmdsZS12YWx1ZVwiKT8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBcIlwiO1xyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBlID0gdC5nZXRBdHRyaWJ1dGUoXCJmb3JcIik7XHJcbiAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHQgPSByLnF1ZXJ5U2VsZWN0b3IoYCMke0NTUy5lc2NhcGUoZSl9YCk7XHJcbiAgICAgICAgICAgICAgdCAmJiAoaSA9IHQudmFsdWUgfHwgXCJcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbiAmJiAob1tuXSA9IGkpXHJcbiAgICAgICAgfTtcclxuICAgICAgbChcInNjaG9vbFwiKSwgbChcImRlZ3JlZVwiKSwgbChcImRpc2NpcGxpbmVcIiksIGwoXCJzdGFydC1tb250aFwiKSwgbChcInN0YXJ0LXllYXJcIiksIGwoXHJcbiAgICAgICAgXCJlbmQtbW9udGhcIiksIGwoXCJlbmQteWVhclwiKSwgT2JqZWN0LmtleXMobykubGVuZ3RoID4gMCAmJiAobnVsbCAhPT0gaSAmJiAob1toXHJcbiAgICAgICAgICAuR1JFRU5IT1VTRV9FRFVDQVRJT05fU05BUFNIT1RfSU5ERVhfS0VZXSA9IGkpLCBhICYmIChvW2MuRURVQ0FUSU9OX1RSQUNFX0tFWV0gPSBhKSxcclxuICAgICAgICB0LnB1c2gobykpXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gdFxyXG59XHJcblxyXG5mdW5jdGlvbiBOKCkge1xyXG4gIGxldCBlID0gW10sXHJcbiAgICB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBsb3ltZW50X3NlY3Rpb25cIik7XHJcbiAgaWYgKHQpIHtcclxuICAgIGxldCByID0gdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVtcGxveW1lbnRcIik7XHJcbiAgICByLmZvckVhY2godCA9PiB7XHJcbiAgICAgIGxldCByID0ge30sXHJcbiAgICAgICAgbiA9IChlLCBuKSA9PiB7XHJcbiAgICAgICAgICBsZXQgbyA9IHQucXVlcnlTZWxlY3RvcihgaW5wdXRbaWQqPVwiJHtlfVwiXWApO1xyXG4gICAgICAgICAgaWYgKG8pIHtcclxuICAgICAgICAgICAgbGV0IGUgPSBvLmlkLFxyXG4gICAgICAgICAgICAgIGkgPSB0LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7ZX1cIl1gKSxcclxuICAgICAgICAgICAgICBhID0gUihpPy50ZXh0Q29udGVudCkgfHwgbjtcclxuICAgICAgICAgICAgclthXSA9IG8udmFsdWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICBuKFwiY29tcGFueV9uYW1lXCIsIFwiQ29tcGFueSBOYW1lXCIpLCBuKFwidGl0bGVcIiwgXCJUaXRsZVwiKTtcclxuICAgICAgbGV0IG8gPSB0LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZGF0ZS1tb250aFwiKSxcclxuICAgICAgICBpID0gdC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWRhdGUteWVhclwiKTtcclxuICAgICAgaWYgKG8gfHwgaSkge1xyXG4gICAgICAgIGxldCBlID0gXCJTdGFydCBEYXRlXCIsXHJcbiAgICAgICAgICB0ID0gbz8ucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcImxlZ2VuZCBsYWJlbFwiKSB8fCBpPy5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoXCJsZWdlbmQgbGFiZWxcIik7XHJcbiAgICAgICAgdCAmJiAoZSA9IFIodC50ZXh0Q29udGVudCkgfHwgZSksIHJbZV0gPSBgJHtvPy52YWx1ZXx8XCJcIn0vJHtpPy52YWx1ZXx8XCJcIn1gXHJcbiAgICAgIH1cclxuICAgICAgbGV0IGEgPSB0LnF1ZXJ5U2VsZWN0b3IoXCIuZW5kLWRhdGUtbW9udGhcIiksXHJcbiAgICAgICAgbCA9IHQucXVlcnlTZWxlY3RvcihcIi5lbmQtZGF0ZS15ZWFyXCIpO1xyXG4gICAgICBpZiAoYSB8fCBsKSB7XHJcbiAgICAgICAgbGV0IGUgPSBcIkVuZCBEYXRlXCIsXHJcbiAgICAgICAgICB0ID0gYT8ucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcImxlZ2VuZCBsYWJlbFwiKSB8fCBsPy5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoXCJsZWdlbmQgbGFiZWxcIik7XHJcbiAgICAgICAgdCAmJiAoZSA9IFIodC50ZXh0Q29udGVudCkgfHwgZSksIHJbZV0gPSBgJHthPy52YWx1ZXx8XCJcIn0vJHtsPy52YWx1ZXx8XCJcIn1gXHJcbiAgICAgIH1cclxuICAgICAgbGV0IHMgPSB0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkKj1cImVtcGxveW1lbnRfY3VycmVudFwiXScpO1xyXG4gICAgICBpZiAocykge1xyXG4gICAgICAgIGxldCBlID0gcy5pZCxcclxuICAgICAgICAgIG4gPSB0LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsLmN1cnJlbnRbZm9yPVwiJHtlfVwiXWApIHx8IHQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgYGxhYmVsW2Zvcj1cIiR7ZX1cIl1gKSxcclxuICAgICAgICAgIG8gPSBSKG4/LnRleHRDb250ZW50KSB8fCBcIkN1cnJlbnQgUm9sZVwiLFxyXG4gICAgICAgICAgaSA9IFwiRW5kIERhdGVcIiA9PT0gbyA/IFwiQ3VycmVudCBSb2xlXCIgOiBvO1xyXG4gICAgICAgIHJbaV0gPSBzLmNoZWNrZWRcclxuICAgICAgfVxyXG4gICAgICBPYmplY3Qua2V5cyhyKS5sZW5ndGggPiAwICYmIGUucHVzaChyKVxyXG4gICAgfSlcclxuICB9XHJcbiAgbGV0IHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVtcGxveW1lbnQtLWNvbnRhaW5lclwiKTtcclxuICBpZiAocikge1xyXG4gICAgbGV0IHQgPSByLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZW1wbG95bWVudC1mb3JtXCIpO1xyXG4gICAgdC5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICBsZXQgciA9IHt9LFxyXG4gICAgICAgIG4gPSAoZSwgbikgPT4ge1xyXG4gICAgICAgICAgbGV0IG8gPSB0LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2lkXj1cIiR7ZX1cIl1gKSxcclxuICAgICAgICAgICAgaSA9IFIobz8udGV4dENvbnRlbnQpIHx8IG47XHJcbiAgICAgICAgICBpZiAobyB8fCBuKSB7XHJcbiAgICAgICAgICAgIGxldCBhID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKGUuaW5jbHVkZXMoXCJjdXJyZW50LXJvbGVcIikpIHtcclxuICAgICAgICAgICAgICBsZXQgaSA9IHQucXVlcnlTZWxlY3RvcihgaW5wdXRbaWRePVwiJHtlfVwiXWApO1xyXG4gICAgICAgICAgICAgIGlmIChpICYmIChhID0gaS5jaGVja2VkLCAhbykpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlID0gdC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke2kuaWR9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICByW1IoZS50ZXh0Q29udGVudCkgfHwgbl0gPSBhO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobykge1xyXG4gICAgICAgICAgICAgIGxldCBlID0gby5jbG9zZXN0KFwiLnNlbGVjdF9fY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICAgIGlmIChlKShhID0gZS5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdF9fc2luZ2xlLXZhbHVlXCIpPy50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnRzV2l0aChcIlNlbGVjdCBhXCIpICYmIChhID0gXCJcIik7XHJcbiAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZSA9IG8uZ2V0QXR0cmlidXRlKFwiZm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IHIgPSB0LnF1ZXJ5U2VsZWN0b3IoYCMke2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgIGEgPSByPy52YWx1ZSB8fCBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJbaV0gPSBhXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgbihcImNvbXBhbnktbmFtZVwiLCBcIkNvbXBhbnkgTmFtZVwiKSwgbihcInRpdGxlXCIsIFwiVGl0bGVcIik7XHJcbiAgICAgIGxldCBvID0gdC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtpZF49XCJzdGFydC1kYXRlLW1vbnRoXCJdJyksXHJcbiAgICAgICAgaSA9IG8/LmNsb3Nlc3QoXCIuc2VsZWN0X19jb250YWluZXJcIik/LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0X19zaW5nbGUtdmFsdWVcIilcclxuICAgICAgICA/LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIixcclxuICAgICAgICBhID0gdC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtpZF49XCJzdGFydC1kYXRlLXllYXJcIl0nKSxcclxuICAgICAgICBsID0gYSA/IHQucXVlcnlTZWxlY3RvcihgIyR7YS5nZXRBdHRyaWJ1dGUoXCJmb3JcIil9YCkgOiBudWxsLFxyXG4gICAgICAgIHMgPSBsPy52YWx1ZSB8fCBcIlwiO1xyXG4gICAgICAobyB8fCBhKSAmJiAocltcIlN0YXJ0IERhdGVcIl0gPSBgJHtpfS8ke3N9YCk7XHJcbiAgICAgIGxldCB1ID0gdC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtpZF49XCJlbmQtZGF0ZS1tb250aFwiXScpLFxyXG4gICAgICAgIGMgPSB1Py5jbG9zZXN0KFwiLnNlbGVjdF9fY29udGFpbmVyXCIpPy5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdF9fc2luZ2xlLXZhbHVlXCIpXHJcbiAgICAgICAgPy50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCIsXHJcbiAgICAgICAgZCA9IHQucXVlcnlTZWxlY3RvcignbGFiZWxbaWRePVwiZW5kLWRhdGUteWVhclwiXScpLFxyXG4gICAgICAgIGYgPSBkID8gdC5xdWVyeVNlbGVjdG9yKGAjJHtkLmdldEF0dHJpYnV0ZShcImZvclwiKX1gKSA6IG51bGwsXHJcbiAgICAgICAgcCA9IGY/LnZhbHVlIHx8IFwiXCI7XHJcbiAgICAgICh1IHx8IGQpICYmIChyW1wiRW5kIERhdGVcIl0gPSBgJHtjfS8ke3B9YCk7XHJcbiAgICAgIGxldCBtID0gdC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1baWRePVwiY3VycmVudC1yb2xlXCJdJyk7XHJcbiAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgbGV0IGUgPSBSKHQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHttLmlkfVwiXWApPy50ZXh0Q29udGVudCkgfHwgXCJDdXJyZW50IFJvbGVcIjtcclxuICAgICAgICByW2VdID0gbS5jaGVja2VkXHJcbiAgICAgIH1cclxuICAgICAgT2JqZWN0LmtleXMocikubGVuZ3RoID4gMCAmJiBlLnB1c2gocilcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uICQoZSA9IHt9KSB7XHJcbiAgbGV0IHQgPSBNKGUpLFxyXG4gICAgciA9IE4oKSxcclxuICAgIG4gPSB7fTtcclxuICByZXR1cm4gKHQgJiYgdC5sZW5ndGggPiAwICYmIChuLmVkdWNhdGlvbiA9IHQpLCByICYmIHIubGVuZ3RoID4gMCAmJiAobi5lbXBsb3ltZW50ID0gciksIDAgPT09XHJcbiAgICBPYmplY3Qua2V5cyhuKS5sZW5ndGgpID8gbnVsbCA6IG5cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6InJ1bGVzLjY4NzI5OWE1LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);