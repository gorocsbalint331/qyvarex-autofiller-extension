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
})({"6HogU":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\ripplehire.js",
    "bundleId": "85b9138f89fbf97b",
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
var j = z(require("943d39a5d402dd28"));
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

},{"943d39a5d402dd28":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"iILaG":[function(require,module,exports) {
/**
 * Parcel module id: f8QJv
 * Resolved path: src/contents/sites/ripplehire.js
 * Dependencies:
 *   ./entry-navigation -> hz1tR  =>  src/contents/sites/ripplehire/entry-navigation.js
 *   ./location-client-search -> 5C5cJ  =>  src/contents/sites/ripplehire/location-client-search.js
 *   ./location-typeahead -> gU0Zg  =>  src/contents/sites/ripplehire/location-typeahead.js
 *   ./operations -> d6wH2  =>  src/contents/sites/ripplehire/operations.js
 *   ./phone-country-code -> eL1jL  =>  src/contents/sites/ripplehire/phone-country-code.js
 *   ./rules -> fGIK4  =>  src/contents/sites/ripplehire/rules.js
 *   ./skills-operation -> 2PtGF  =>  src/contents/sites/ripplehire/skills-operation.js
 *   ./submit-tracking -> d5UKD  =>  src/contents/sites/ripplehire/submit-tracking.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/shared/filler -> 2aGsX  =>  src/contents/shared/filler.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Ripplehire", ()=>L);
var o = e("@plasmohq/messaging"), i = e("~contents/methods/answer"), a = e("~contents/methods/cancellation"), l = e("~contents/shared/filler"), s = e("~contents/sites/base-filler"), u = e("~core/enums"), c = e("./entry-navigation"), d = e("./location-client-search"), f = e("./location-typeahead"), p = e("./operations"), m = e("./phone-country-code"), h = e("./rules"), g = e("./skills-operation"), b = e("./submit-tracking");
let y = "[RippleHire][locationClientSearch]", v = "[RippleHire][locationClientSearchStep]", w = 5, S = 25, E = 6e4, x = 128;
function C(e1, t = {}) {
    console.debug(`[RippleHire][fill] ${JSON.stringify({
        stage: e1,
        ...t
    })}`);
}
_c = C;
function A() {
    if ("undefined" == typeof document || "function" != typeof document.getElementById) return {
        contactEmailLength: 0,
        contactPhoneLength: 0
    };
    let e1 = document.getElementById("emailAddr"), t = document.getElementById("phoneNo");
    return {
        contactEmailLength: e1?.value?.length || 0,
        contactPhoneLength: t?.value?.length || 0
    };
}
_c1 = A;
function k() {
    if ("undefined" == typeof document || "function" != typeof document.getElementById) return {
        cityValueLength: 0,
        cityConnected: !1,
        cityFocused: !1
    };
    let e1 = document.getElementById("currentLocation");
    return {
        cityValueLength: e1?.value?.length || 0,
        cityConnected: e1?.isConnected === !0,
        cityFocused: document.activeElement === e1
    };
}
function T(e1) {
    let t = e1.$input;
    return t?.id === "currentLocation" ? "city" : t?.id === "custom16" ? "postal-code" : t?.id === "currentCTC" ? "current-salary" : "other";
}
_c2 = T;
function F(e1) {
    let t = e1.$input;
    return e1.type === u.FIELD_TYPE.MULTI_SELECT && (t?.id === "secondarySkills" || "skills" === e1.label.replace(/\s+/g, " ").trim().toLowerCase());
}
_c3 = F;
function I(e1) {
    let t = [], r1 = [], n = [], o = new Set;
    for (let i of e1){
        let e1 = i.$input;
        if (F(i)) {
            let t = e1?.id ? `id:${e1.id}` : `label:${i.label.replace(/\s+/g, " ").trim().toLowerCase()}`;
            o.has(t) || (o.add(t), n.push(i));
        } else (0, d.isRipplehireLocationClientSearchRule)(i) ? r1.push(i) : t.push(i);
    }
    return {
        regularRules: t,
        locationRules: r1,
        skillsRules: n
    };
}
_c4 = I;
let j = {
    requestStep: async (e1)=>await (0, o.sendToBackground)({
            name: "resolveAutofillClientSearchStep",
            body: e1
        }),
    captureCandidates: f.captureRipplehireLocationCandidates,
    commitCandidate: f.commitRipplehireLocationCandidate,
    clearTemporaryValue: f.clearRipplehireLocationTemporaryValue,
    onDiagnostic: (e1)=>console.debug(`${v} ${JSON.stringify(e1)}`)
}, D = new Set([
    "missing-original-answer",
    "request-error",
    "invalid-response",
    "round-limit",
    "invalid-search-request",
    "changed-resolve-session-id",
    "repeated-search",
    "capture-error",
    "invalid-capture-result",
    "capture-failed",
    "candidate-limit",
    "invalid-candidates",
    "invalid-candidate",
    "duplicate-candidate",
    "invalid-selection",
    "commit-failed",
    "commit-error",
    "empty",
    "retryable-failure",
    "resolver-exception"
]);
function P(e1, t) {
    return "number" == typeof e1 && Number.isFinite(e1) ? Math.min(t, Math.max(0, Math.floor(e1))) : 0;
}
_c5 = P;
function _(e1, t) {
    let r1 = Array.isArray(e1.rounds) ? e1.rounds.slice(0, w) : [], n = {
        action: e1.success ? "committed" : "failed",
        roundCount: r1.length,
        candidateCounts: r1.map((e1)=>P(e1?.options?.length, S)),
        elapsedMs: P(Date.now() - t, E)
    };
    if (!("failureReason" in e1)) return n;
    let o = D.has(e1.failureReason) ? e1.failureReason : "resolver-failed";
    return {
        ...n,
        failureReason: o.slice(0, x)
    };
}
class L extends s.BaseFiller {
    buildOperationConfig() {
        let e1 = super.buildOperationConfig();
        return {
            ...e1,
            [u.FIELD_TYPE.MULTI_SELECT]: async (e1, t, r1 = !0)=>{
                r1 && (0, a.updateCurrentField)(e1.label);
                let n = !1;
                try {
                    await (0, a.withSkip)(async ()=>{
                        let o = (0, g.normalizeRipplehireSkillItems)(this.answer?.skills), s = [];
                        try {
                            s = (0, g.normalizeRipplehireSkillItems)((0, i.findValueInRecord)(e1.label, t));
                        } catch (e1) {
                            if (!(e1 instanceof l.ValueError)) throw e1;
                        }
                        let u = o.length > 0 ? o : s, c = o.length > 0 ? "profile" : "falcon", d = (0, g.createRipplehireSkillsDomAdapter)(e1.$input), f = new Set(o.map((e1)=>e1.toLowerCase())), p = new Set(s.map((e1)=>e1.toLowerCase())), m = f.size === p.size && [
                            ...f
                        ].every((e1)=>p.has(e1));
                        console.debug(`[RipplehireSkills] ${JSON.stringify({
                            reason: "source-selected",
                            source: c,
                            requestedCount: u.length,
                            profileCount: o.length,
                            falconCount: s.length,
                            sameSet: m
                        })}`);
                        let h = await (0, g.fillRipplehireSkillItems)(u, d, {
                            isInterruption: (e1)=>e1 instanceof a.CancelledError || e1 instanceof a.SkippedError,
                            onInterruptedResult: (t)=>{
                                r1 && (this.progressTracker.updateFieldItemProgress(e1.label, t), n = !0);
                            }
                        });
                        r1 && (this.progressTracker.updateFieldItemProgress(e1.label, h), n = !0);
                    });
                } catch (t) {
                    if (t instanceof a.CancelledError) throw t;
                    if (t instanceof a.SkippedError) {
                        if (!r1) throw t;
                        n || this.progressTracker.updateMissedProgress(e1.label);
                        return;
                    }
                    console.error("[RipplehireSkills] operation failed", {
                        fieldLabel: e1.label,
                        errorName: t instanceof Error ? t.name : typeof t
                    }), r1 && this.progressTracker.updateMissedProgress(e1.label);
                }
            }
        };
    }
    getFieldHandlers() {
        return {
            [u.FIELD_TYPE.TEXT]: {
                handler: async (e1, t)=>{
                    if ((0, d.isRipplehireLocationClientSearchRule)(e1)) {
                        let r1;
                        let n = Date.now(), o = (0, d.getRipplehireLocationOriginalAnswer)(this.answer, t).value;
                        try {
                            r1 = await (0, d.resolveRipplehireLocationClientSearch)(e1.$input, o, j);
                        } catch (e1) {
                            if (e1 instanceof a.CancelledError || e1 instanceof a.SkippedError) throw e1;
                            r1 = {
                                success: !1,
                                rounds: [],
                                failureReason: "resolver-exception"
                            };
                        }
                        return console.info(y, {
                            surface: (0, d.getRipplehireLocationClientSearchSurface)(e1.$input),
                            ..._(r1, n)
                        }), C("location-field-complete", {
                            committed: r1.success,
                            ...k()
                        }), r1.success;
                    }
                    let r1 = T(e1);
                    C("text-field-start", {
                        fieldKind: r1,
                        ...k()
                    });
                    let n = await (0, p.fillInputTextField)(e1, t, (0, m.resolveRipplehirePhoneCountryCode)(this.answer));
                    return C("text-field-complete", {
                        fieldKind: r1,
                        ...k()
                    }), n;
                },
                options: {
                    expectArray: !1
                }
            },
            [u.FIELD_TYPE.NUMBER]: {
                handler: (e1, t)=>(0, p.fillInputTextField)(e1, t),
                options: {
                    expectArray: !1
                }
            },
            [u.FIELD_TYPE.SELECT]: {
                handler: async (e1, t)=>{
                    if (e1.label !== m.RIPPLEHIRE_PHONE_COUNTRY_CODE_LABEL) return (0, p.fillSelectField)(e1, t);
                    let r1 = A(), n = await (0, p.fillPhoneCountryCode)(e1, t);
                    return C("phone-country", {
                        ...r1,
                        afterEmailLength: A().contactEmailLength,
                        afterPhoneLength: A().contactPhoneLength,
                        committed: n
                    }), n;
                },
                options: {
                    expectArray: !0
                }
            },
            [u.FIELD_TYPE.CHECKBOX]: {
                handler: (e1, t)=>(0, p.fillCheckboxField)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [u.FIELD_TYPE.RADIOGROUP]: {
                handler: (e1, t)=>(0, p.fillRadioGroupField)(e1, t),
                options: {
                    expectArray: !0
                }
            }
        };
    }
    async doFillForm(e1 = !1) {
        if (await this.initializeFillForm(), C("initialized"), this.entryAbortReason) return this.entryAbortReason;
        let t = await this.extractFormRules();
        C("rules-extracted", {
            ruleCount: t.length,
            requiredCount: t.filter((e1)=>e1.required).length
        }), this.progressTracker.setFieldsRequiredStatus(t);
        let r1 = t.filter((e1)=>!F(e1));
        C("answers-requested", {
            ruleCount: r1.length,
            filteredSkillsCount: t.length - r1.length
        });
        let n = await this.requestFormAnswers(r1, e1);
        if (C("answers-resolved", {
            resultType: null === n ? "null" : typeof n
        }), "string" == typeof n) return n;
        n && (this.answer = n), await this.handleResumeUpload(), C("resume-complete");
        let { regularRules: o, locationRules: i, skillsRules: a } = I(t);
        C("skills-deferred", {
            extractedCount: t.filter((e1)=>e1.type === u.FIELD_TYPE.MULTI_SELECT).length,
            uniqueCount: a.length
        }), await this.fillRegularFields(o), C("ordinary-fields-complete", {
            ruleCount: o.length,
            locationRuleCount: i.length,
            ...k()
        });
        let l = this.answer?.country || this.answer?.profileData?.country || this.answer?.profile_data?.country;
        await (0, p.fillCountryFromStateFallback)(l) && this.progressTracker.updateFilledProgress("Country"), C("country-fallback-complete", k()), (0, p.agreementCheckboxField)(), C("agreement-complete", k()), await this.fillRegularFields(a), C("skills-complete", {
            executedCount: a.length,
            ...k()
        }), await this.fillRegularFields(i), C("regular-fields-complete", {
            ruleCount: t.length,
            ...A(),
            ...k()
        }), await this.bindSubmitButtonTracking(t);
        let s = await this.finalizeFillForm();
        return C("finalized", {
            resultType: null === s ? "null" : typeof s,
            ...A(),
            ...k()
        }), s;
    }
    async runPreFillForm() {
        this.entryAbortReason = null, this.entryAbortReason = await (0, c.prepareRipplehireApplication)(), this.entryAbortReason || (0, p.preselectExpectedSalaryCurrencyToUsd)();
    }
    async extractFormRules() {
        return await (0, h.extractRules)();
    }
    getSiteName() {
        return "ripplehire";
    }
    async handleResumeUpload() {
        this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this.taskQueue.add(async ()=>{
            await (0, p.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        }), await this.taskQueue.run();
    }
    async getAutofillSnapshot(e1) {
        return (0, h.getFormSnapshot)(e1);
    }
    async getSubmitSnapshot() {
        return (0, h.getFormSnapshot)();
    }
    getSubmitTrackingDelegationRoot() {
        return document;
    }
    resolveDelegatedSubmitButton(e1) {
        return (0, b.resolveRipplehireSubmitButton)(e1);
    }
    submitApplication() {
        b.getRipplehireSubmitButton()?.click();
    }
    cancelAutoFill() {
        this.taskQueue.clear();
    }
    constructor(...e1){
        super(...e1), this.entryAbortReason = null;
    }
}
var _c, _c1, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "C");
$RefreshReg$(_c1, "A");
$RefreshReg$(_c2, "T");
$RefreshReg$(_c3, "F");
$RefreshReg$(_c4, "I");
$RefreshReg$(_c5, "P");

},{}]},["6HogU","iILaG"], "iILaG", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFBQVcsVUFBUSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxHQUFFLElBQUUsSUFBSSxHQUFFLElBQUUsSUFBSSxHQUFFLElBQUUsRUFBRSxFQUFDLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSSxLQUFJLElBQUUsT0FBTyxXQUFTLGFBQVcsSUFBSSxVQUFRLE1BQUssSUFBRSxDQUFDO1FBQUUsU0FBUyxFQUFFLENBQUM7WUFBRSxJQUFHLEVBQUUsWUFBVSxNQUFLLE9BQU8sRUFBRTtZQUFRLElBQUksSUFBRSxFQUFFLFFBQU87WUFBRSxJQUFHO2dCQUFDLElBQUUsRUFBRTtZQUFnQixFQUFDLE9BQU0sR0FBRTtnQkFBQyxPQUFPLEVBQUUsYUFBVyxDQUFDLEdBQUUsRUFBRSxVQUFRLEdBQUU7WUFBQztZQUFDLElBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSTtnQkFBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQUMsSUFBRyxPQUFPLEtBQUcsWUFBVyxPQUFPLEVBQUUsYUFBVyxDQUFDLEdBQUUsRUFBRSxVQUFRLEdBQUU7Z0JBQUUsSUFBSSxJQUFFLEVBQUUsSUFBSTtnQkFBRyxJQUFHLE1BQUksS0FBSyxHQUFFO29CQUFDLElBQUksSUFBRSxFQUFFO29CQUFHLEVBQUUsY0FBYSxDQUFBLEVBQUUsYUFBVyxDQUFDLENBQUEsR0FBRyxLQUFHLFlBQVU7Z0JBQUM7WUFBQztZQUFDLE9BQU8sRUFBRSxVQUFRLEdBQUU7UUFBQztRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxFQUFFLElBQUksSUFBRyxJQUFFLEVBQUUsSUFBSTtZQUFHLE9BQU8sTUFBSSxLQUFLLEtBQUcsTUFBSSxLQUFLLElBQUUsQ0FBQyxJQUFFLENBQUUsQ0FBQSxNQUFJLEtBQUssS0FBRyxNQUFJLEtBQUssS0FBRyxFQUFFLE9BQUssRUFBRSxNQUFJLEVBQUUsVUFBUztRQUFFO1FBQUMsU0FBUyxFQUFFLENBQUM7WUFBRSxPQUFPLEVBQUUsYUFBVyxFQUFFLFVBQVU7UUFBZ0I7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRSxPQUFPLEVBQUUsTUFBSSxFQUFFLEtBQUcsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUU7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDO1lBQUUsT0FBTyxFQUFFLElBQUk7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDO1lBQUUsSUFBSSxJQUFFLElBQUk7WUFBSSxPQUFPLEVBQUUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLEVBQUUsSUFBSSxHQUFFO1lBQUUsSUFBRztRQUFDO1FBQUMsU0FBUyxFQUFFLENBQUM7WUFBRSxJQUFJLElBQUUsSUFBSTtZQUFJLE9BQU8sRUFBRSxRQUFRLFNBQVMsQ0FBQztnQkFBRSxFQUFFLElBQUk7WUFBRSxJQUFHO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRSxJQUFHO2dCQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFBQSxFQUFDLE9BQU0sR0FBRTtnQkFBQztZQUFNO1FBQUM7UUFBQyxTQUFTO1lBQUksSUFBRyxFQUFFLFdBQVMsS0FBRyxHQUFFLE9BQU87WUFBSyxJQUFFLENBQUM7WUFBRSxJQUFHO2dCQUFDLElBQUksSUFBRSxJQUFJLEtBQUksSUFBRSxJQUFJLEtBQUksSUFBRTtnQkFBRSxJQUFFLEVBQUUsRUFBQyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxJQUFFLEVBQUU7b0JBQVEsRUFBRSxJQUFJLEdBQUUsSUFBRyxFQUFFLElBQUksR0FBRSxJQUFHLEVBQUUsVUFBUSxHQUFFLEVBQUUsR0FBRSxLQUFHLEVBQUUsSUFBSSxLQUFHLEVBQUUsSUFBSTtnQkFBRTtnQkFBRyxJQUFJLElBQUU7b0JBQUMsaUJBQWdCO29CQUFFLGVBQWM7Z0JBQUM7Z0JBQUUsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLGtCQUFrQjtnQkFBRTtnQkFBRyxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUUsTUFBSyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUU7Z0JBQUcsSUFBRyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxFQUFFLElBQUk7b0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtvQkFBc0UsSUFBRyxFQUFFLElBQUksSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLElBQUc7d0JBQUMsSUFBSSxJQUFFLEVBQUUsSUFBSTt3QkFBRyxJQUFHOzRCQUFDLEVBQUUsYUFBYSxHQUFFO3dCQUFFLEVBQUMsT0FBTSxHQUFFOzRCQUFDLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUE7d0JBQUU7b0JBQUM7Z0JBQUMsSUFBRyxFQUFFLFFBQVEsU0FBUyxDQUFDO29CQUFFLElBQUksSUFBRSxFQUFFLElBQUk7b0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtvQkFBc0UsRUFBRSxJQUFJO29CQUFHLElBQUc7d0JBQUMsRUFBRSxnQkFBZ0IsR0FBRTtvQkFBRSxFQUFDLE9BQU0sR0FBRTt3QkFBQyxLQUFJLENBQUEsSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFBO29CQUFFO2dCQUFDLElBQUcsR0FBRSxNQUFNO2dCQUFFLE9BQU87WUFBQyxTQUFRO2dCQUFDLElBQUUsQ0FBQztZQUFDO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFBRyxJQUFHLE1BQUksUUFBTSxPQUFPLEtBQUcsY0FBWSxPQUFPLEtBQUcsWUFBVSxFQUFFLElBQUksSUFBRztZQUFPLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxJQUFHLE1BQUksS0FBSyxJQUFHLENBQUEsSUFBRTtnQkFBQyxTQUFRO1lBQUMsR0FBRSxFQUFFLElBQUksR0FBRSxFQUFDLElBQUcsRUFBRSxLQUFLO2dCQUFDO2dCQUFFO2FBQUUsR0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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LXJ1bnRpbWUvZGlzdC9ydW50aW1lLTljMTQ2ZmVmN2IxOTg4MmQuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvcmlwcGxlaGlyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxyaXBwbGVoaXJlLmpzXCIsXCJidW5kbGVJZFwiOlwiODViOTEzOGY4OWZiZjk3YlwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IGY4UUp2XHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9yaXBwbGVoaXJlLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9lbnRyeS1uYXZpZ2F0aW9uIC0+IGh6MXRSICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3JpcHBsZWhpcmUvZW50cnktbmF2aWdhdGlvbi5qc1xyXG4gKiAgIC4vbG9jYXRpb24tY2xpZW50LXNlYXJjaCAtPiA1QzVjSiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9yaXBwbGVoaXJlL2xvY2F0aW9uLWNsaWVudC1zZWFyY2guanNcclxuICogICAuL2xvY2F0aW9uLXR5cGVhaGVhZCAtPiBnVTBaZyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9yaXBwbGVoaXJlL2xvY2F0aW9uLXR5cGVhaGVhZC5qc1xyXG4gKiAgIC4vb3BlcmF0aW9ucyAtPiBkNndIMiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9yaXBwbGVoaXJlL29wZXJhdGlvbnMuanNcclxuICogICAuL3Bob25lLWNvdW50cnktY29kZSAtPiBlTDFqTCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9yaXBwbGVoaXJlL3Bob25lLWNvdW50cnktY29kZS5qc1xyXG4gKiAgIC4vcnVsZXMgLT4gZkdJSzQgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvcmlwcGxlaGlyZS9ydWxlcy5qc1xyXG4gKiAgIC4vc2tpbGxzLW9wZXJhdGlvbiAtPiAyUHRHRiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9yaXBwbGVoaXJlL3NraWxscy1vcGVyYXRpb24uanNcclxuICogICAuL3N1Ym1pdC10cmFja2luZyAtPiBkNVVLRCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9yaXBwbGVoaXJlL3N1Ym1pdC10cmFja2luZy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgQHBsYXNtb2hxL21lc3NhZ2luZyAtPiA5Mkd5QiAgPT4gIEBwbGFzbW9ocS9tZXNzYWdpbmcuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24gLT4gbHVKZnMgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24uanNcclxuICogICB+Y29udGVudHMvc2hhcmVkL2ZpbGxlciAtPiAyYUdzWCAgPT4gIHNyYy9jb250ZW50cy9zaGFyZWQvZmlsbGVyLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyIC0+IDh4ajZGICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiUmlwcGxlaGlyZVwiLCAoKSA9PiBMKTtcclxudmFyIG8gPSBlKFwiQHBsYXNtb2hxL21lc3NhZ2luZ1wiKSxcclxuICBpID0gZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxcclxuICBhID0gZShcIn5jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvblwiKSxcclxuICBsID0gZShcIn5jb250ZW50cy9zaGFyZWQvZmlsbGVyXCIpLFxyXG4gIHMgPSBlKFwifmNvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyXCIpLFxyXG4gIHUgPSBlKFwifmNvcmUvZW51bXNcIiksXHJcbiAgYyA9IGUoXCIuL2VudHJ5LW5hdmlnYXRpb25cIiksXHJcbiAgZCA9IGUoXCIuL2xvY2F0aW9uLWNsaWVudC1zZWFyY2hcIiksXHJcbiAgZiA9IGUoXCIuL2xvY2F0aW9uLXR5cGVhaGVhZFwiKSxcclxuICBwID0gZShcIi4vb3BlcmF0aW9uc1wiKSxcclxuICBtID0gZShcIi4vcGhvbmUtY291bnRyeS1jb2RlXCIpLFxyXG4gIGggPSBlKFwiLi9ydWxlc1wiKSxcclxuICBnID0gZShcIi4vc2tpbGxzLW9wZXJhdGlvblwiKSxcclxuICBiID0gZShcIi4vc3VibWl0LXRyYWNraW5nXCIpO1xyXG5sZXQgeSA9IFwiW1JpcHBsZUhpcmVdW2xvY2F0aW9uQ2xpZW50U2VhcmNoXVwiLFxyXG4gIHYgPSBcIltSaXBwbGVIaXJlXVtsb2NhdGlvbkNsaWVudFNlYXJjaFN0ZXBdXCIsXHJcbiAgdyA9IDUsXHJcbiAgUyA9IDI1LFxyXG4gIEUgPSA2ZTQsXHJcbiAgeCA9IDEyODtcclxuXHJcbmZ1bmN0aW9uIEMoZSwgdCA9IHt9KSB7XHJcbiAgY29uc29sZS5kZWJ1ZyhgW1JpcHBsZUhpcmVdW2ZpbGxdICR7SlNPTi5zdHJpbmdpZnkoe3N0YWdlOmUsLi4udH0pfWApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEEoKSB7XHJcbiAgaWYgKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIGRvY3VtZW50IHx8IFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQpIHJldHVybiB7XHJcbiAgICBjb250YWN0RW1haWxMZW5ndGg6IDAsXHJcbiAgICBjb250YWN0UGhvbmVMZW5ndGg6IDBcclxuICB9O1xyXG4gIGxldCBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbEFkZHJcIiksXHJcbiAgICB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG9uZU5vXCIpO1xyXG4gIHJldHVybiB7XHJcbiAgICBjb250YWN0RW1haWxMZW5ndGg6IGU/LnZhbHVlPy5sZW5ndGggfHwgMCxcclxuICAgIGNvbnRhY3RQaG9uZUxlbmd0aDogdD8udmFsdWU/Lmxlbmd0aCB8fCAwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBrKCkge1xyXG4gIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBkb2N1bWVudCB8fCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKSByZXR1cm4ge1xyXG4gICAgY2l0eVZhbHVlTGVuZ3RoOiAwLFxyXG4gICAgY2l0eUNvbm5lY3RlZDogITEsXHJcbiAgICBjaXR5Rm9jdXNlZDogITFcclxuICB9O1xyXG4gIGxldCBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50TG9jYXRpb25cIik7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNpdHlWYWx1ZUxlbmd0aDogZT8udmFsdWU/Lmxlbmd0aCB8fCAwLFxyXG4gICAgY2l0eUNvbm5lY3RlZDogZT8uaXNDb25uZWN0ZWQgPT09ICEwLFxyXG4gICAgY2l0eUZvY3VzZWQ6IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGVcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFQoZSkge1xyXG4gIGxldCB0ID0gZS4kaW5wdXQ7XHJcbiAgcmV0dXJuIHQ/LmlkID09PSBcImN1cnJlbnRMb2NhdGlvblwiID8gXCJjaXR5XCIgOiB0Py5pZCA9PT0gXCJjdXN0b20xNlwiID8gXCJwb3N0YWwtY29kZVwiIDogdD8uaWQgPT09XHJcbiAgICBcImN1cnJlbnRDVENcIiA/IFwiY3VycmVudC1zYWxhcnlcIiA6IFwib3RoZXJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBGKGUpIHtcclxuICBsZXQgdCA9IGUuJGlucHV0O1xyXG4gIHJldHVybiBlLnR5cGUgPT09IHUuRklFTERfVFlQRS5NVUxUSV9TRUxFQ1QgJiYgKHQ/LmlkID09PSBcInNlY29uZGFyeVNraWxsc1wiIHx8IFwic2tpbGxzXCIgPT09IGVcclxuICAgIC5sYWJlbC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKSlcclxufVxyXG5cclxuZnVuY3Rpb24gSShlKSB7XHJcbiAgbGV0IHQgPSBbXSxcclxuICAgIHIgPSBbXSxcclxuICAgIG4gPSBbXSxcclxuICAgIG8gPSBuZXcgU2V0O1xyXG4gIGZvciAobGV0IGkgb2YgZSkge1xyXG4gICAgbGV0IGUgPSBpLiRpbnB1dDtcclxuICAgIGlmIChGKGkpKSB7XHJcbiAgICAgIGxldCB0ID0gZT8uaWQgPyBgaWQ6JHtlLmlkfWAgOiBgbGFiZWw6JHtpLmxhYmVsLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKCl9YDtcclxuICAgICAgby5oYXModCkgfHwgKG8uYWRkKHQpLCBuLnB1c2goaSkpXHJcbiAgICB9IGVsc2UoMCwgZC5pc1JpcHBsZWhpcmVMb2NhdGlvbkNsaWVudFNlYXJjaFJ1bGUpKGkpID8gci5wdXNoKGkpIDogdC5wdXNoKGkpXHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICByZWd1bGFyUnVsZXM6IHQsXHJcbiAgICBsb2NhdGlvblJ1bGVzOiByLFxyXG4gICAgc2tpbGxzUnVsZXM6IG5cclxuICB9XHJcbn1cclxubGV0IGogPSB7XHJcbiAgICByZXF1ZXN0U3RlcDogYXN5bmMgZSA9PiBhd2FpdCAoMCwgby5zZW5kVG9CYWNrZ3JvdW5kKSh7XHJcbiAgICAgIG5hbWU6IFwicmVzb2x2ZUF1dG9maWxsQ2xpZW50U2VhcmNoU3RlcFwiLFxyXG4gICAgICBib2R5OiBlXHJcbiAgICB9KSxcclxuICAgIGNhcHR1cmVDYW5kaWRhdGVzOiBmLmNhcHR1cmVSaXBwbGVoaXJlTG9jYXRpb25DYW5kaWRhdGVzLFxyXG4gICAgY29tbWl0Q2FuZGlkYXRlOiBmLmNvbW1pdFJpcHBsZWhpcmVMb2NhdGlvbkNhbmRpZGF0ZSxcclxuICAgIGNsZWFyVGVtcG9yYXJ5VmFsdWU6IGYuY2xlYXJSaXBwbGVoaXJlTG9jYXRpb25UZW1wb3JhcnlWYWx1ZSxcclxuICAgIG9uRGlhZ25vc3RpYzogZSA9PiBjb25zb2xlLmRlYnVnKGAke3Z9ICR7SlNPTi5zdHJpbmdpZnkoZSl9YClcclxuICB9LFxyXG4gIEQgPSBuZXcgU2V0KFtcIm1pc3Npbmctb3JpZ2luYWwtYW5zd2VyXCIsIFwicmVxdWVzdC1lcnJvclwiLCBcImludmFsaWQtcmVzcG9uc2VcIiwgXCJyb3VuZC1saW1pdFwiLFxyXG4gICAgXCJpbnZhbGlkLXNlYXJjaC1yZXF1ZXN0XCIsIFwiY2hhbmdlZC1yZXNvbHZlLXNlc3Npb24taWRcIiwgXCJyZXBlYXRlZC1zZWFyY2hcIiwgXCJjYXB0dXJlLWVycm9yXCIsXHJcbiAgICBcImludmFsaWQtY2FwdHVyZS1yZXN1bHRcIiwgXCJjYXB0dXJlLWZhaWxlZFwiLCBcImNhbmRpZGF0ZS1saW1pdFwiLCBcImludmFsaWQtY2FuZGlkYXRlc1wiLFxyXG4gICAgXCJpbnZhbGlkLWNhbmRpZGF0ZVwiLCBcImR1cGxpY2F0ZS1jYW5kaWRhdGVcIiwgXCJpbnZhbGlkLXNlbGVjdGlvblwiLCBcImNvbW1pdC1mYWlsZWRcIixcclxuICAgIFwiY29tbWl0LWVycm9yXCIsIFwiZW1wdHlcIiwgXCJyZXRyeWFibGUtZmFpbHVyZVwiLCBcInJlc29sdmVyLWV4Y2VwdGlvblwiXHJcbiAgXSk7XHJcblxyXG5mdW5jdGlvbiBQKGUsIHQpIHtcclxuICByZXR1cm4gXCJudW1iZXJcIiA9PSB0eXBlb2YgZSAmJiBOdW1iZXIuaXNGaW5pdGUoZSkgPyBNYXRoLm1pbih0LCBNYXRoLm1heCgwLCBNYXRoLmZsb29yKGUpKSkgOiAwXHJcbn1cclxuXHJcbmZ1bmN0aW9uIF8oZSwgdCkge1xyXG4gIGxldCByID0gQXJyYXkuaXNBcnJheShlLnJvdW5kcykgPyBlLnJvdW5kcy5zbGljZSgwLCB3KSA6IFtdLFxyXG4gICAgbiA9IHtcclxuICAgICAgYWN0aW9uOiBlLnN1Y2Nlc3MgPyBcImNvbW1pdHRlZFwiIDogXCJmYWlsZWRcIixcclxuICAgICAgcm91bmRDb3VudDogci5sZW5ndGgsXHJcbiAgICAgIGNhbmRpZGF0ZUNvdW50czogci5tYXAoZSA9PiBQKGU/Lm9wdGlvbnM/Lmxlbmd0aCwgUykpLFxyXG4gICAgICBlbGFwc2VkTXM6IFAoRGF0ZS5ub3coKSAtIHQsIEUpXHJcbiAgICB9O1xyXG4gIGlmICghKFwiZmFpbHVyZVJlYXNvblwiIGluIGUpKSByZXR1cm4gbjtcclxuICBsZXQgbyA9IEQuaGFzKGUuZmFpbHVyZVJlYXNvbikgPyBlLmZhaWx1cmVSZWFzb24gOiBcInJlc29sdmVyLWZhaWxlZFwiO1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5uLFxyXG4gICAgZmFpbHVyZVJlYXNvbjogby5zbGljZSgwLCB4KVxyXG4gIH1cclxufVxyXG5jbGFzcyBMIGV4dGVuZHMgcy5CYXNlRmlsbGVyIHtcclxuICBidWlsZE9wZXJhdGlvbkNvbmZpZygpIHtcclxuICAgIGxldCBlID0gc3VwZXIuYnVpbGRPcGVyYXRpb25Db25maWcoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmUsXHJcbiAgICAgIFt1LkZJRUxEX1RZUEUuTVVMVElfU0VMRUNUXTogYXN5bmMgKGUsIHQsIHIgPSAhMCkgPT4ge1xyXG4gICAgICAgIHIgJiYgKDAsIGEudXBkYXRlQ3VycmVudEZpZWxkKShlLmxhYmVsKTtcclxuICAgICAgICBsZXQgbiA9ICExO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCAoMCwgYS53aXRoU2tpcCkoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbyA9ICgwLCBnLm5vcm1hbGl6ZVJpcHBsZWhpcmVTa2lsbEl0ZW1zKSh0aGlzLmFuc3dlcj8uc2tpbGxzKSxcclxuICAgICAgICAgICAgICBzID0gW107XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgcyA9ICgwLCBnLm5vcm1hbGl6ZVJpcHBsZWhpcmVTa2lsbEl0ZW1zKSgoMCwgaS5maW5kVmFsdWVJblJlY29yZCkoZS5sYWJlbCxcclxuICAgICAgICAgICAgICAgIHQpKVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIGwuVmFsdWVFcnJvcikpIHRocm93IGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdSA9IG8ubGVuZ3RoID4gMCA/IG8gOiBzLFxyXG4gICAgICAgICAgICAgIGMgPSBvLmxlbmd0aCA+IDAgPyBcInByb2ZpbGVcIiA6IFwiZmFsY29uXCIsXHJcbiAgICAgICAgICAgICAgZCA9ICgwLCBnLmNyZWF0ZVJpcHBsZWhpcmVTa2lsbHNEb21BZGFwdGVyKShlLiRpbnB1dCksXHJcbiAgICAgICAgICAgICAgZiA9IG5ldyBTZXQoby5tYXAoZSA9PiBlLnRvTG93ZXJDYXNlKCkpKSxcclxuICAgICAgICAgICAgICBwID0gbmV3IFNldChzLm1hcChlID0+IGUudG9Mb3dlckNhc2UoKSkpLFxyXG4gICAgICAgICAgICAgIG0gPSBmLnNpemUgPT09IHAuc2l6ZSAmJiBbLi4uZl0uZXZlcnkoZSA9PiBwLmhhcyhlKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXHJcbiAgICAgICAgICAgICAgYFtSaXBwbGVoaXJlU2tpbGxzXSAke0pTT04uc3RyaW5naWZ5KHtyZWFzb246XCJzb3VyY2Utc2VsZWN0ZWRcIixzb3VyY2U6YyxyZXF1ZXN0ZWRDb3VudDp1Lmxlbmd0aCxwcm9maWxlQ291bnQ6by5sZW5ndGgsZmFsY29uQ291bnQ6cy5sZW5ndGgsc2FtZVNldDptfSl9YFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxldCBoID0gYXdhaXQgKDAsIGcuZmlsbFJpcHBsZWhpcmVTa2lsbEl0ZW1zKSh1LCBkLCB7XHJcbiAgICAgICAgICAgICAgaXNJbnRlcnJ1cHRpb246IGUgPT4gZSBpbnN0YW5jZW9mIGEuQ2FuY2VsbGVkRXJyb3IgfHwgZSBpbnN0YW5jZW9mIGFcclxuICAgICAgICAgICAgICAgIC5Ta2lwcGVkRXJyb3IsXHJcbiAgICAgICAgICAgICAgb25JbnRlcnJ1cHRlZFJlc3VsdDogdCA9PiB7XHJcbiAgICAgICAgICAgICAgICByICYmICh0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZEl0ZW1Qcm9ncmVzcyhlLmxhYmVsLCB0KSxcclxuICAgICAgICAgICAgICAgICAgbiA9ICEwKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHIgJiYgKHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpZWxkSXRlbVByb2dyZXNzKGUubGFiZWwsIGgpLCBuID0gITApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcclxuICAgICAgICAgIGlmICh0IGluc3RhbmNlb2YgYS5DYW5jZWxsZWRFcnJvcikgdGhyb3cgdDtcclxuICAgICAgICAgIGlmICh0IGluc3RhbmNlb2YgYS5Ta2lwcGVkRXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKCFyKSB0aHJvdyB0O1xyXG4gICAgICAgICAgICBuIHx8IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKGUubGFiZWwpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbUmlwcGxlaGlyZVNraWxsc10gb3BlcmF0aW9uIGZhaWxlZFwiLCB7XHJcbiAgICAgICAgICAgIGZpZWxkTGFiZWw6IGUubGFiZWwsXHJcbiAgICAgICAgICAgIGVycm9yTmFtZTogdCBpbnN0YW5jZW9mIEVycm9yID8gdC5uYW1lIDogdHlwZW9mIHRcclxuICAgICAgICAgIH0pLCByICYmIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKGUubGFiZWwpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEZpZWxkSGFuZGxlcnMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbdS5GSUVMRF9UWVBFLlRFWFRdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogYXN5bmMgKGUsIHQpID0+IHtcclxuICAgICAgICAgIGlmICgoMCwgZC5pc1JpcHBsZWhpcmVMb2NhdGlvbkNsaWVudFNlYXJjaFJ1bGUpKGUpKSB7XHJcbiAgICAgICAgICAgIGxldCByO1xyXG4gICAgICAgICAgICBsZXQgbiA9IERhdGUubm93KCksXHJcbiAgICAgICAgICAgICAgbyA9ICgwLCBkLmdldFJpcHBsZWhpcmVMb2NhdGlvbk9yaWdpbmFsQW5zd2VyKSh0aGlzLmFuc3dlciwgdCkudmFsdWU7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgciA9IGF3YWl0ICgwLCBkLnJlc29sdmVSaXBwbGVoaXJlTG9jYXRpb25DbGllbnRTZWFyY2gpKGUuJGlucHV0LCBvLCBqKVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBhLkNhbmNlbGxlZEVycm9yIHx8IGUgaW5zdGFuY2VvZiBhLlNraXBwZWRFcnJvcikgdGhyb3cgZTtcclxuICAgICAgICAgICAgICByID0ge1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogITEsXHJcbiAgICAgICAgICAgICAgICByb3VuZHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZmFpbHVyZVJlYXNvbjogXCJyZXNvbHZlci1leGNlcHRpb25cIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5pbmZvKHksIHtcclxuICAgICAgICAgICAgICBzdXJmYWNlOiAoMCwgZC5nZXRSaXBwbGVoaXJlTG9jYXRpb25DbGllbnRTZWFyY2hTdXJmYWNlKShlLiRpbnB1dCksXHJcbiAgICAgICAgICAgICAgLi4uXyhyLCBuKVxyXG4gICAgICAgICAgICB9KSwgQyhcImxvY2F0aW9uLWZpZWxkLWNvbXBsZXRlXCIsIHtcclxuICAgICAgICAgICAgICBjb21taXR0ZWQ6IHIuc3VjY2VzcyxcclxuICAgICAgICAgICAgICAuLi5rKClcclxuICAgICAgICAgICAgfSksIHIuc3VjY2Vzc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IHIgPSBUKGUpO1xyXG4gICAgICAgICAgQyhcInRleHQtZmllbGQtc3RhcnRcIiwge1xyXG4gICAgICAgICAgICBmaWVsZEtpbmQ6IHIsXHJcbiAgICAgICAgICAgIC4uLmsoKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBsZXQgbiA9IGF3YWl0ICgwLCBwLmZpbGxJbnB1dFRleHRGaWVsZCkoZSwgdCwgKDAsIG1cclxuICAgICAgICAgICAgLnJlc29sdmVSaXBwbGVoaXJlUGhvbmVDb3VudHJ5Q29kZSkodGhpcy5hbnN3ZXIpKTtcclxuICAgICAgICAgIHJldHVybiBDKFwidGV4dC1maWVsZC1jb21wbGV0ZVwiLCB7XHJcbiAgICAgICAgICAgIGZpZWxkS2luZDogcixcclxuICAgICAgICAgICAgLi4uaygpXHJcbiAgICAgICAgICB9KSwgblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICExXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbdS5GSUVMRF9UWVBFLk5VTUJFUl06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4gKDAsIHAuZmlsbElucHV0VGV4dEZpZWxkKShlLCB0KSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt1LkZJRUxEX1RZUEUuU0VMRUNUXToge1xyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jIChlLCB0KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZS5sYWJlbCAhPT0gbS5SSVBQTEVISVJFX1BIT05FX0NPVU5UUllfQ09ERV9MQUJFTCkgcmV0dXJuICgwLCBwLmZpbGxTZWxlY3RGaWVsZClcclxuICAgICAgICAgICAgKGUsIHQpO1xyXG4gICAgICAgICAgbGV0IHIgPSBBKCksXHJcbiAgICAgICAgICAgIG4gPSBhd2FpdCAoMCwgcC5maWxsUGhvbmVDb3VudHJ5Q29kZSkoZSwgdCk7XHJcbiAgICAgICAgICByZXR1cm4gQyhcInBob25lLWNvdW50cnlcIiwge1xyXG4gICAgICAgICAgICAuLi5yLFxyXG4gICAgICAgICAgICBhZnRlckVtYWlsTGVuZ3RoOiBBKCkuY29udGFjdEVtYWlsTGVuZ3RoLFxyXG4gICAgICAgICAgICBhZnRlclBob25lTGVuZ3RoOiBBKCkuY29udGFjdFBob25lTGVuZ3RoLFxyXG4gICAgICAgICAgICBjb21taXR0ZWQ6IG5cclxuICAgICAgICAgIH0pLCBuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt1LkZJRUxEX1RZUEUuQ0hFQ0tCT1hdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBwLmZpbGxDaGVja2JveEZpZWxkKShlLCB0KSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt1LkZJRUxEX1RZUEUuUkFESU9HUk9VUF06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4gKDAsIHAuZmlsbFJhZGlvR3JvdXBGaWVsZCkoZSwgdCksXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICEwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGRvRmlsbEZvcm0oZSA9ICExKSB7XHJcbiAgICBpZiAoYXdhaXQgdGhpcy5pbml0aWFsaXplRmlsbEZvcm0oKSwgQyhcImluaXRpYWxpemVkXCIpLCB0aGlzLmVudHJ5QWJvcnRSZWFzb24pIHJldHVybiB0aGlzXHJcbiAgICAgIC5lbnRyeUFib3J0UmVhc29uO1xyXG4gICAgbGV0IHQgPSBhd2FpdCB0aGlzLmV4dHJhY3RGb3JtUnVsZXMoKTtcclxuICAgIEMoXCJydWxlcy1leHRyYWN0ZWRcIiwge1xyXG4gICAgICBydWxlQ291bnQ6IHQubGVuZ3RoLFxyXG4gICAgICByZXF1aXJlZENvdW50OiB0LmZpbHRlcihlID0+IGUucmVxdWlyZWQpLmxlbmd0aFxyXG4gICAgfSksIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnNldEZpZWxkc1JlcXVpcmVkU3RhdHVzKHQpO1xyXG4gICAgbGV0IHIgPSB0LmZpbHRlcihlID0+ICFGKGUpKTtcclxuICAgIEMoXCJhbnN3ZXJzLXJlcXVlc3RlZFwiLCB7XHJcbiAgICAgIHJ1bGVDb3VudDogci5sZW5ndGgsXHJcbiAgICAgIGZpbHRlcmVkU2tpbGxzQ291bnQ6IHQubGVuZ3RoIC0gci5sZW5ndGhcclxuICAgIH0pO1xyXG4gICAgbGV0IG4gPSBhd2FpdCB0aGlzLnJlcXVlc3RGb3JtQW5zd2VycyhyLCBlKTtcclxuICAgIGlmIChDKFwiYW5zd2Vycy1yZXNvbHZlZFwiLCB7XHJcbiAgICAgICAgcmVzdWx0VHlwZTogbnVsbCA9PT0gbiA/IFwibnVsbFwiIDogdHlwZW9mIG5cclxuICAgICAgfSksIFwic3RyaW5nXCIgPT0gdHlwZW9mIG4pIHJldHVybiBuO1xyXG4gICAgbiAmJiAodGhpcy5hbnN3ZXIgPSBuKSwgYXdhaXQgdGhpcy5oYW5kbGVSZXN1bWVVcGxvYWQoKSwgQyhcInJlc3VtZS1jb21wbGV0ZVwiKTtcclxuICAgIGxldCB7XHJcbiAgICAgIHJlZ3VsYXJSdWxlczogbyxcclxuICAgICAgbG9jYXRpb25SdWxlczogaSxcclxuICAgICAgc2tpbGxzUnVsZXM6IGFcclxuICAgIH0gPSBJKHQpO1xyXG4gICAgQyhcInNraWxscy1kZWZlcnJlZFwiLCB7XHJcbiAgICAgIGV4dHJhY3RlZENvdW50OiB0LmZpbHRlcihlID0+IGUudHlwZSA9PT0gdS5GSUVMRF9UWVBFLk1VTFRJX1NFTEVDVCkubGVuZ3RoLFxyXG4gICAgICB1bmlxdWVDb3VudDogYS5sZW5ndGhcclxuICAgIH0pLCBhd2FpdCB0aGlzLmZpbGxSZWd1bGFyRmllbGRzKG8pLCBDKFwib3JkaW5hcnktZmllbGRzLWNvbXBsZXRlXCIsIHtcclxuICAgICAgcnVsZUNvdW50OiBvLmxlbmd0aCxcclxuICAgICAgbG9jYXRpb25SdWxlQ291bnQ6IGkubGVuZ3RoLFxyXG4gICAgICAuLi5rKClcclxuICAgIH0pO1xyXG4gICAgbGV0IGwgPSB0aGlzLmFuc3dlcj8uY291bnRyeSB8fCB0aGlzLmFuc3dlcj8ucHJvZmlsZURhdGE/LmNvdW50cnkgfHwgdGhpcy5hbnN3ZXJcclxuICAgICAgPy5wcm9maWxlX2RhdGE/LmNvdW50cnk7XHJcbiAgICBhd2FpdCAoMCwgcC5maWxsQ291bnRyeUZyb21TdGF0ZUZhbGxiYWNrKShsKSAmJiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhcclxuICAgICAgXCJDb3VudHJ5XCIpLCBDKFwiY291bnRyeS1mYWxsYmFjay1jb21wbGV0ZVwiLCBrKCkpLCAoMCwgcC5hZ3JlZW1lbnRDaGVja2JveEZpZWxkKSgpLCBDKFxyXG4gICAgICBcImFncmVlbWVudC1jb21wbGV0ZVwiLCBrKCkpLCBhd2FpdCB0aGlzLmZpbGxSZWd1bGFyRmllbGRzKGEpLCBDKFwic2tpbGxzLWNvbXBsZXRlXCIsIHtcclxuICAgICAgZXhlY3V0ZWRDb3VudDogYS5sZW5ndGgsXHJcbiAgICAgIC4uLmsoKVxyXG4gICAgfSksIGF3YWl0IHRoaXMuZmlsbFJlZ3VsYXJGaWVsZHMoaSksIEMoXCJyZWd1bGFyLWZpZWxkcy1jb21wbGV0ZVwiLCB7XHJcbiAgICAgIHJ1bGVDb3VudDogdC5sZW5ndGgsXHJcbiAgICAgIC4uLkEoKSxcclxuICAgICAgLi4uaygpXHJcbiAgICB9KSwgYXdhaXQgdGhpcy5iaW5kU3VibWl0QnV0dG9uVHJhY2tpbmcodCk7XHJcbiAgICBsZXQgcyA9IGF3YWl0IHRoaXMuZmluYWxpemVGaWxsRm9ybSgpO1xyXG4gICAgcmV0dXJuIEMoXCJmaW5hbGl6ZWRcIiwge1xyXG4gICAgICByZXN1bHRUeXBlOiBudWxsID09PSBzID8gXCJudWxsXCIgOiB0eXBlb2YgcyxcclxuICAgICAgLi4uQSgpLFxyXG4gICAgICAuLi5rKClcclxuICAgIH0pLCBzXHJcbiAgfVxyXG4gIGFzeW5jIHJ1blByZUZpbGxGb3JtKCkge1xyXG4gICAgdGhpcy5lbnRyeUFib3J0UmVhc29uID0gbnVsbCwgdGhpcy5lbnRyeUFib3J0UmVhc29uID0gYXdhaXQgKDAsIGNcclxuICAgICAgLnByZXBhcmVSaXBwbGVoaXJlQXBwbGljYXRpb24pKCksIHRoaXMuZW50cnlBYm9ydFJlYXNvbiB8fCAoMCwgcFxyXG4gICAgICAucHJlc2VsZWN0RXhwZWN0ZWRTYWxhcnlDdXJyZW5jeVRvVXNkKSgpXHJcbiAgfVxyXG4gIGFzeW5jIGV4dHJhY3RGb3JtUnVsZXMoKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgKDAsIGguZXh0cmFjdFJ1bGVzKSgpXHJcbiAgfVxyXG4gIGdldFNpdGVOYW1lKCkge1xyXG4gICAgcmV0dXJuIFwicmlwcGxlaGlyZVwiXHJcbiAgfVxyXG4gIGFzeW5jIGhhbmRsZVJlc3VtZVVwbG9hZCgpIHtcclxuICAgIHRoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZSA/IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiUmVzdW1lL0NWXCIpIDogdGhpc1xyXG4gICAgICAudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgKDAsIHAudXBsb2FkUmVzdW1lKSh0aGlzLnJlc3VtZUluZm8sIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgICAudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cywgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpXHJcbiAgICAgIH0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKVxyXG4gIH1cclxuICBhc3luYyBnZXRBdXRvZmlsbFNuYXBzaG90KGUpIHtcclxuICAgIHJldHVybiAoMCwgaC5nZXRGb3JtU25hcHNob3QpKGUpXHJcbiAgfVxyXG4gIGFzeW5jIGdldFN1Ym1pdFNuYXBzaG90KCkge1xyXG4gICAgcmV0dXJuICgwLCBoLmdldEZvcm1TbmFwc2hvdCkoKVxyXG4gIH1cclxuICBnZXRTdWJtaXRUcmFja2luZ0RlbGVnYXRpb25Sb290KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50XHJcbiAgfVxyXG4gIHJlc29sdmVEZWxlZ2F0ZWRTdWJtaXRCdXR0b24oZSkge1xyXG4gICAgcmV0dXJuICgwLCBiLnJlc29sdmVSaXBwbGVoaXJlU3VibWl0QnV0dG9uKShlKVxyXG4gIH1cclxuICBzdWJtaXRBcHBsaWNhdGlvbigpIHtcclxuICAgIGIuZ2V0UmlwcGxlaGlyZVN1Ym1pdEJ1dHRvbigpPy5jbGljaygpXHJcbiAgfVxyXG4gIGNhbmNlbEF1dG9GaWxsKCkge1xyXG4gICAgdGhpcy50YXNrUXVldWUuY2xlYXIoKVxyXG4gIH1cclxuICBjb25zdHJ1Y3RvciguLi5lKSB7XHJcbiAgICBzdXBlciguLi5lKSwgdGhpcy5lbnRyeUFib3J0UmVhc29uID0gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6InJpcHBsZWhpcmUuODlmYmY5N2IuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);