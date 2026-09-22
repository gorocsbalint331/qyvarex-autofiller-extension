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
})({"efXxO":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\phenom.js",
    "bundleId": "f7a1bda0e5ae8845",
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
var j = z(require("eb0524ddec70ccfb"));
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

},{"eb0524ddec70ccfb":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"b84NI":[function(require,module,exports) {
/**
 * Parcel module id: 2Q4En
 * Resolved path: src/contents/sites/phenom.js
 * Dependencies:
 *   ../option-resolve-rollout -> kwH9q  =>  src/contents/option-resolve-rollout.js
 *   ./answer -> hTzPb  =>  src/contents/sites/phenom/answer.js
 *   ./cover-letter-detection -> i4Y9d  =>  src/contents/sites/phenom/cover-letter-detection.js
 *   ./education-operation -> 7eN6s  =>  src/contents/sites/phenom/education-operation.js
 *   ./operations -> hv55d  =>  src/contents/sites/phenom/operations.js
 *   ./rules -> eZc7r  =>  src/contents/sites/phenom/rules.js
 *   ./style -> 2T0sW  =>  src/contents/sites/phenom/style.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~enums/http -> eJFqj  =>  src/enums/http.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Phenom", ()=>w);
var o = e("@plasmohq/messaging"), i = e("~contents/methods/dom"), a = e("~contents/methods/track"), l = e("~contents/sites/base-filler"), s = e("~core/enums"), u = e("~enums/http"), c = e("./answer"), d = e("./cover-letter-detection"), f = e("./education-operation"), p = e("../option-resolve-rollout"), m = e("./operations"), h = e("./rules"), g = e("./style");
let b = {
    requestStep: async (e1)=>await (0, o.sendToBackground)({
            name: "resolveAutofillClientSearchStep",
            body: e1
        }),
    captureCandidates: m.capturePhenomSchoolCandidates,
    commitCandidate: async (e1, t, r1, n)=>(0, m.fillResolvedPhenomSchoolField)(e1, t.text, r1, n)
};
function y(e1) {
    return [
        "school",
        "school name",
        "schoolname",
        "school or university"
    ].includes(e1.trim().replace(/\s+/g, " ").toLowerCase());
}
function v(e1) {
    return Array.isArray(e1) ? e1.some((e1)=>String(e1 ?? "").trim().length > 0) : String(e1 ?? "").trim().length > 0;
}
class w extends l.BaseFiller {
    constructor(){
        if (super(), this.hasComboQuestions = !0, this.didUploadResumeSuccessfully = !1, this.resumeParserReady = !0, this.didUploadCoverLetterSuccessfully = !1, this.didMissResolvedSchool = !1, this.coverLetterCheckVersion = 0, this.coverLetterCheckTimer = null, this.checkCoverLetterEventHandler = ()=>{
            this.checkCoverLetter();
        }, this.checkCoverLetterAfterContinueHandler = (e1)=>{
            let t = e1.target instanceof Element ? e1.target.closest("button, input[type='submit'], a, [role='button']") : null;
            t && (0, d.shouldScheduleCoverLetterCheckForAction)({
                text: t.textContent,
                id: t.id,
                ariaLabel: t.getAttribute("aria-label")
            }) && this.scheduleCoverLetterCheck();
        }, this.formatAnswer = c.formatAnswer, "undefined" == typeof document) return;
        (0, g.injectPhenomApplyPageLayoutFix)(), document.addEventListener("CheckAgentCoverLetter", this.checkCoverLetterEventHandler), document.addEventListener("click", this.checkCoverLetterAfterContinueHandler, !0), this.scheduleCoverLetterCheck();
    }
    async runWithLoaderGuard(e1, t = 200) {
        let r1 = await (0, m.waitForPhenomLoaderIdle)();
        if (!r1) return !1;
        let n = await e1(), o = await (0, m.waitForPhenomLoaderIdle)(t);
        return !!o && n;
    }
    isInitialStep() {
        return (0, h.isInitialApplicationStep)((0, h.getStepInfo)());
    }
    hasResumeInput() {
        return (0, m.hasResumeFieldPresence)();
    }
    isSnapshotFieldFilled(e1) {
        let t = e1.value;
        if (e1.type === s.FIELD_TYPE.SELECT) return "string" == typeof t && t.trim().length > 0;
        if (Array.isArray(t)) return t.some((e1)=>String(e1 ?? "").trim().length > 0);
        if ("string" == typeof t) return t.trim().length > 0;
        if (null != t) return !0;
        let r1 = e1.text;
        return "string" == typeof r1 && r1.trim().length > 0;
    }
    reconcileFilledProgressFromSnapshot() {
        let e1 = (0, h.getFormSnapshot)(), t = Array.isArray(e1.fields) ? e1.fields : [];
        for (let e1 of t){
            let t = "string" == typeof e1.label ? e1.label.trim() : "";
            if (!t || !this.isSnapshotFieldFilled(e1) || !(0, m.hasPhenomAnswerForSnapshotField)(t, this.answer)) continue;
            let r1 = this.progressTracker.fieldStatus.missingFields.includes(t), n = this.progressTracker.fieldStatus.filledFields.includes(t);
            (r1 || !n) && this.progressTracker.updateFilledProgress(t);
        }
    }
    hasCiscoEducationSchoolReadback() {
        let e1 = (0, h.getFormSnapshot)(), t = Array.isArray(this.answer?.education) ? this.answer.education.length : 0, r1 = Array.isArray(e1.education) ? e1.education : [], n = !1;
        if ("string" == typeof e1.url) try {
            n = "careers.cisco.com" === new URL(e1.url).hostname;
        } catch  {
            n = !1;
        }
        let o = n && t > 0 && r1.length >= t && r1.slice(0, t).every((e1)=>!!e1 && "object" == typeof e1 && Object.entries(e1).some(([e1, t])=>y(e1) && v(t)));
        return n && console.info("[phenom] Cisco Education progress readback", {
            expectedRows: t,
            visibleRows: r1.length,
            complete: o
        }), o;
    }
    hasCoverLetterInput() {
        return (0, m.hasCoverLetterFieldPresence)();
    }
    scheduleCoverLetterCheck(e1 = 300) {
        this.coverLetterCheckTimer && clearTimeout(this.coverLetterCheckTimer), this.coverLetterCheckTimer = setTimeout(()=>{
            this.coverLetterCheckTimer = null, this.checkCoverLetter();
        }, e1);
    }
    syncResumeTrackingField() {
        this.isInitialStep() && this.progressTracker.updateFieldRequiredStatus({
            label: "Resume/CV",
            required: !0
        });
    }
    syncCoverLetterTrackingField() {
        this.hasCoverLetterInput() && this.progressTracker.updateFieldRequiredStatus({
            label: "Cover Letter",
            required: !0
        });
    }
    getFieldHandlers() {
        return {
            [s.FIELD_TYPE.TEXT]: (e1, t)=>{
                let r1 = t?.[0];
                if (null != r1) return this.runWithLoaderGuard(()=>(0, m.fillInputTextField)(e1.$input, String(r1), e1.label));
            },
            [s.FIELD_TYPE.DATE]: (e1, t)=>{
                let r1 = t?.[0], n = e1.$input;
                if ((0, m.recordPhenomDateDebug)("handler input", {
                    label: e1.label,
                    inputId: n.id,
                    inputName: n.name,
                    preferredFormat: e1.description,
                    answerPresent: null != r1 && "" !== String(r1).trim()
                }), null != r1) return this.runWithLoaderGuard(async ()=>{
                    let t = await (0, m.fillDateField)(e1.$input, String(r1), e1.description), o = n.isConnected ? n : n.id ? document.getElementById(n.id) : null;
                    return (0, m.recordPhenomDateDebug)("handler result", {
                        label: e1.label,
                        inputId: n.id,
                        inputName: n.name,
                        filled: t,
                        inputReacquired: o !== n,
                        domValuePresent: "" !== String(o?.value ?? "").trim()
                    }), t;
                }, 0);
            },
            [s.FIELD_TYPE.SEARCH]: (e1, t)=>{
                let r1 = (0, f.isPhenomSchoolRule)(e1), n = (0, f.takeResolvedPhenomSchoolValue)(e1);
                if (r1 && n) return this.runWithLoaderGuard(()=>(0, m.fillResolvedPhenomSchoolField)(e1.$input, n)).then((e1)=>(!0 !== e1 && (this.didMissResolvedSchool = !0), e1)).catch((e1)=>{
                    throw this.didMissResolvedSchool = !0, e1;
                });
                let o = t?.[0];
                if (null == o) {
                    r1 && (this.didMissResolvedSchool = !0);
                    return;
                }
                let i = this.runWithLoaderGuard(()=>r1 ? (0, m.fillSearchField)(e1.$input, String(o), {
                        redactValues: !0
                    }) : (0, m.fillSearchField)(e1.$input, String(o)));
                return r1 ? i.then((e1)=>(!1 === e1 && (this.didMissResolvedSchool = !0), e1)).catch((e1)=>{
                    throw this.didMissResolvedSchool = !0, e1;
                }) : i;
            },
            [s.FIELD_TYPE.SELECT]: (e1, t)=>this.runWithLoaderGuard(()=>(0, m.fillSelectField)(e1, Array.isArray(t) ? t[0] : t)),
            [s.FIELD_TYPE.RADIOGROUP]: (e1, t)=>this.runWithLoaderGuard(()=>(0, m.fillRadioGroupField)(e1, Array.isArray(t) ? t[0] : t)),
            [s.FIELD_TYPE.CHECKBOX]: (e1, t)=>this.runWithLoaderGuard(()=>(0, m.fillCheckboxField)(e1, Array.isArray(t) ? t.map((e1)=>String(e1)) : [
                        String(t)
                    ]))
        };
    }
    async runPreFillForm() {
        this.taskQueue.add(m.preFillForm), await this.taskQueue.run();
    }
    async extractFormRules() {
        return await (0, h.extractRules)();
    }
    getSiteName() {
        return "phenom";
    }
    getElementRulesRequestUrl() {
        return (0, h.getPhenomFillRequestUrl)();
    }
    async checkCoverLetter() {
        let e1 = ++this.coverLetterCheckVersion;
        await (0, m.waitForPhenomLoaderIdle)(150);
        for(let t = 0; t < 12; t += 1){
            if (e1 !== this.coverLetterCheckVersion) return;
            let t = (0, m.getCoverLetterFieldStatus)();
            if ("required" === t) {
                (0, i.postCoverLetterStatus)(t);
                return;
            }
            await new Promise((e1)=>setTimeout(e1, 250));
        }
        e1 === this.coverLetterCheckVersion && (0, i.postCoverLetterStatus)("");
    }
    async handleResumeUpload() {
        let e1 = (0, h.getStepInfo)();
        if (console.log("[phenom] handleResumeUpload entry", {
            step: e1.step,
            stepName: e1.stepName,
            disableUploadResume: this.disableUploadResume
        }), this.didUploadResumeSuccessfully = !1, this.resumeParserReady = !0, !this.isInitialStep()) return;
        let t = await (0, m.waitForResumeFileInput)();
        if (!t) {
            console.log("[phenom] handleResumeUpload skip: no resume input found");
            return;
        }
        if (this.disableUploadResume) {
            console.log("[phenom] handleResumeUpload skip: upload disabled"), this.syncResumeTrackingField(), this.progressTracker.updateMissedProgress("Resume/CV");
            return;
        }
        this.taskQueue.add(async ()=>{
            console.log("[phenom] handleResumeUpload task start");
            let e1 = await (0, m.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
            e1.uploaded ? (this.didUploadResumeSuccessfully = !0, this.resumeParserReady = e1.parserReady, console.log("[phenom] handleResumeUpload task result: upload succeeded", {
                parserReady: e1.parserReady
            })) : (console.log("[phenom] handleResumeUpload task result: upload failed"), this.syncResumeTrackingField(), this.progressTracker.updateMissedProgress("Resume/CV"));
        }), await this.taskQueue.run();
    }
    async doFillForm(e1 = !1) {
        await this.initializeFillForm();
        let t = this.isInitialStep(), r1 = t && this.hasResumeInput();
        if (await this.handleResumeUpload(), t && this.didUploadResumeSuccessfully && !this.resumeParserReady) return console.warn("[phenom] skip initial-step form fill because Cisco resume parser did not settle"), this.syncResumeTrackingField(), this.progressTracker.fieldStatus;
        let n = await this.extractFormRules();
        if (this.progressTracker.setFieldsRequiredStatus(n), 0 === n.length) return (console.warn("[phenom] skip fill-v2: no extracted rules", {
            initialStep: t,
            hasResumeInput: r1
        }), r1) ? (this.syncResumeTrackingField(), this.didUploadResumeSuccessfully && !this.progressTracker.fieldStatus.filledFields.includes("Resume/CV") && this.progressTracker.updateFilledProgress("Resume/CV"), await this.finalizeFillForm()) : ((0, a.sendHttpStatusMessage)(u.CUSTOM_ERROR_CODES.NO_ELEMENTS), u.CUSTOM_ERROR_CODES.NO_ELEMENTS);
        r1 && (this.syncResumeTrackingField(), this.didUploadResumeSuccessfully && !this.progressTracker.fieldStatus.filledFields.includes("Resume/CV") && this.progressTracker.updateFilledProgress("Resume/CV")), t && this.hasCoverLetterInput() && this.syncCoverLetterTrackingField();
        let o = await this.fetchFormAnswers(n, e1);
        if ("string" == typeof o) return o;
        let i = n.filter((e1)=>e1.type !== s.FIELD_TYPE.EDUCATION && e1.type !== s.FIELD_TYPE.EMPLOYMENT);
        await this.fillRegularFields(i);
        let l = await this.runWithLoaderGuard(()=>(0, m.fillPhoneCountryCodeSelectsFromRecord)(this.answer.regular));
        if (Array.isArray(l)) for (let e1 of l)this.progressTracker.updateFilledProgress(e1);
        this.reconcileFilledProgressFromSnapshot();
        let c = await this.runComboQuestionAutofillIfNeeded(n, e1);
        if ("string" == typeof c) return c;
        n = c, this.reconcileFilledProgressFromSnapshot(), await this.fillEducationAndEmployment(n);
        let d = await this.runWithLoaderGuard(()=>(0, m.fillRequiredConsentCheckboxes)());
        for (let e1 of d)this.progressTracker.updateFilledProgress(e1);
        return await this.executeSiteSpecificSteps(n), this.reconcileFilledProgressFromSnapshot(), await this.finalizeFillForm();
    }
    async fillEducationAndEmployment(e1) {
        let t = (0, h.getArrayContainer)(s.FIELD_TYPE.EDUCATION), r1 = (0, h.getArrayContainer)(s.FIELD_TYPE.EMPLOYMENT);
        t && Array.isArray(this.answer?.education) && this.answer.education.length > 0 && (this.didMissResolvedSchool = !1, await (0, m.processCompositeBlocks)(this.answer.education, s.FIELD_TYPE.EDUCATION, this.operationConfig, this.taskQueue, async (e1, t, r1)=>{
            e1.type === s.FIELD_TYPE.DATE && (0, m.recordPhenomDateDebug)("education answer match", {
                recordIndex: r1,
                label: e1.label,
                exactLabelPresent: Object.prototype.hasOwnProperty.call(t, e1.label),
                recordKeys: Object.keys(t)
            });
            let n = (0, f.isPhenomSchoolRule)(e1), o = n ? (0, f.getPhenomSchoolRecordKey)(e1, t) : null, i = n ? (0, f.getPhenomSchoolOriginalAnswer)(e1, t) : "";
            n && !i && (this.didMissResolvedSchool = !0);
            let a = "function" == typeof f.resolvePhenomEducationClientSearchRecordForRule ? await (0, f.resolvePhenomEducationClientSearchRecordForRule)(e1, t, r1, {
                ...b,
                enabled: p.V119_OPTION_RESOLVE_ROLLOUT.phenomEducationSchool
            }) : await (0, f.resolvePhenomEducationRecordForRule)(e1, t, r1, {
                enabled: p.V119_OPTION_RESOLVE_ROLLOUT.phenomEducationSchool,
                typeProbe: async (e1, t, r1)=>{
                    let n = await (0, m.typePhenomSchoolProbe)(e1, t, r1);
                    if (!0 !== n) throw Error("Phenom school probe was not confirmed");
                },
                clearProbe: async (e1, t)=>{
                    let r1 = await (0, m.clearPhenomSchoolProbe)(e1, t);
                    if (!0 !== r1) throw Error("Phenom school clear was not confirmed");
                }
            }), l = (0, f.getFirstNonblankPhenomSchoolValue)(o ? a[o] : void 0);
            return n && i && o && !l ? {
                ...a,
                [o]: i
            } : a;
        }, {
            onSectionResultChanged: this.progressTracker.updateSectionResult,
            onSkipped: ()=>{
                this.progressTracker.updateMissedProgress("Education");
            },
            onCompleted: ()=>{
                this.didMissResolvedSchool && !this.hasCiscoEducationSchoolReadback() ? this.progressTracker.updateMissedProgress("Education") : this.progressTracker.updateFilledProgress("Education");
            }
        })), r1 && Array.isArray(this.answer?.workExperience) && this.answer.workExperience.length > 0 && (await (0, m.processCompositeBlocks)(this.answer.workExperience, s.FIELD_TYPE.EMPLOYMENT, this.operationConfig, this.taskQueue, void 0, {
            onSectionResultChanged: this.progressTracker.updateSectionResult
        }), this.progressTracker.updateFilledProgress("Employment"));
    }
    async executeSiteSpecificSteps(e1) {
        let t = this.hasCoverLetterInput();
        t && this.syncCoverLetterTrackingField(), this.didUploadCoverLetterSuccessfully = !1, t && this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName && (this.taskQueue.add(async ()=>{
            let e1 = await (0, m.uploadCoverLetter)({
                coverLetterId: this.coverLetter.coverLetterId,
                coverLetterName: this.coverLetter.coverLetterName,
                markdown: this.coverLetter.markdown,
                useLegacyDownload: this.coverLetter.useLegacyDownload
            }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
            if (!e1) {
                this.progressTracker.updateMissedProgress("Cover Letter");
                return;
            }
            this.didUploadCoverLetterSuccessfully = !0;
        }), await this.taskQueue.run()), !t || (this.didUploadCoverLetterSuccessfully ? this.progressTracker.fieldStatus.filledFields.includes("Cover Letter") || this.progressTracker.updateFilledProgress("Cover Letter") : this.progressTracker.fieldStatus.missingFields.includes("Cover Letter") || this.progressTracker.updateMissedProgress("Cover Letter")), await super.executeSiteSpecificSteps(e1);
    }
    async getAutofillSnapshot(e1) {
        return (0, h.getTrackingFormSnapshot)();
    }
    async getSubmitSnapshot() {
        return (0, h.getTrackingFormSnapshot)();
    }
    getSubmitButtonSelector() {
        return './/form[contains(@class, "rjsf")]//button[@type="submit"] | .//form[contains(@class, "rjsf")]//input[@type="submit"]';
    }
    submitApplication() {
        m.getContinueButton()?.click();
    }
}

},{}]},["efXxO","b84NI"], "b84NI", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUMsbUNBQW1DLENBQUM7UUFDM0MsSUFBSSxNQUFNLElBQUksQ0FBQyxVQUFVLEtBQUksR0FBSSxDQUFDLEtBQU0sQ0FBQSxJQUFJLENBQUMsbUNBQW1DLElBQUksQ0FDbkYsZ0JBQWdCLFlBQVksYUFBYSxTQUFTLG1CQUFtQixJQUFJLENBQ3pFLGdCQUFnQixxQkFBcUIsa0JBQWtCLElBQUksQ0FBQyxnQkFBZ0IsWUFDNUUsY0FBYyxTQUFTLG1CQUFtQixJQUFJLENBQUMsZ0JBQWdCLHFCQUM5RCxlQUFjLEdBQUksTUFBTSxLQUFLLENBQUMseUJBQXlCO0lBQy9EO0lBQ0EsTUFBTSxvQkFBb0IsRUFBQyxFQUFFO1FBQzNCLE9BQU8sQUFBQyxDQUFBLEdBQUcsRUFBRSx1QkFBc0I7SUFDckM7SUFDQSxNQUFNLG9CQUFvQjtRQUN4QixPQUFPLEFBQUMsQ0FBQSxHQUFHLEVBQUUsdUJBQXNCO0lBQ3JDO0lBQ0EsMEJBQTBCO1FBQ3hCLE9BQU87SUFDVDtJQUNBLG9CQUFvQjtRQUNsQixFQUFFLHFCQUFxQjtJQUN6QjtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS01MmY4NjVkYTkyMjgyYjczLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL3BoZW5vbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxwaGVub20uanNcIixcImJ1bmRsZUlkXCI6XCJmN2ExYmRhMGU1YWU4ODQ1XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogMlE0RW5cclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL3BoZW5vbS5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4uL29wdGlvbi1yZXNvbHZlLXJvbGxvdXQgLT4ga3dIOXEgID0+ICBzcmMvY29udGVudHMvb3B0aW9uLXJlc29sdmUtcm9sbG91dC5qc1xyXG4gKiAgIC4vYW5zd2VyIC0+IGhUelBiICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3BoZW5vbS9hbnN3ZXIuanNcclxuICogICAuL2NvdmVyLWxldHRlci1kZXRlY3Rpb24gLT4gaTRZOWQgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvcGhlbm9tL2NvdmVyLWxldHRlci1kZXRlY3Rpb24uanNcclxuICogICAuL2VkdWNhdGlvbi1vcGVyYXRpb24gLT4gN2VONnMgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvcGhlbm9tL2VkdWNhdGlvbi1vcGVyYXRpb24uanNcclxuICogICAuL29wZXJhdGlvbnMgLT4gaHY1NWQgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvcGhlbm9tL29wZXJhdGlvbnMuanNcclxuICogICAuL3J1bGVzIC0+IGVaYzdyICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3BoZW5vbS9ydWxlcy5qc1xyXG4gKiAgIC4vc3R5bGUgLT4gMlQwc1cgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvcGhlbm9tL3N0eWxlLmpzXHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICBAcGxhc21vaHEvbWVzc2FnaW5nIC0+IDkyR3lCICA9PiAgQHBsYXNtb2hxL21lc3NhZ2luZy5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2RvbSAtPiBoQTVRYSAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2RvbS5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL3RyYWNrIC0+IGg0NzliICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvdHJhY2suanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIgLT4gOHhqNkYgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmVudW1zL2h0dHAgLT4gZUpGcWogID0+ICBzcmMvZW51bXMvaHR0cC5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiUGhlbm9tXCIsICgpID0+IHcpO1xyXG52YXIgbyA9IGUoXCJAcGxhc21vaHEvbWVzc2FnaW5nXCIpLFxyXG4gIGkgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvZG9tXCIpLFxyXG4gIGEgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvdHJhY2tcIiksXHJcbiAgbCA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXJcIiksXHJcbiAgcyA9IGUoXCJ+Y29yZS9lbnVtc1wiKSxcclxuICB1ID0gZShcIn5lbnVtcy9odHRwXCIpLFxyXG4gIGMgPSBlKFwiLi9hbnN3ZXJcIiksXHJcbiAgZCA9IGUoXCIuL2NvdmVyLWxldHRlci1kZXRlY3Rpb25cIiksXHJcbiAgZiA9IGUoXCIuL2VkdWNhdGlvbi1vcGVyYXRpb25cIiksXHJcbiAgcCA9IGUoXCIuLi9vcHRpb24tcmVzb2x2ZS1yb2xsb3V0XCIpLFxyXG4gIG0gPSBlKFwiLi9vcGVyYXRpb25zXCIpLFxyXG4gIGggPSBlKFwiLi9ydWxlc1wiKSxcclxuICBnID0gZShcIi4vc3R5bGVcIik7XHJcbmxldCBiID0ge1xyXG4gIHJlcXVlc3RTdGVwOiBhc3luYyBlID0+IGF3YWl0ICgwLCBvLnNlbmRUb0JhY2tncm91bmQpKHtcclxuICAgIG5hbWU6IFwicmVzb2x2ZUF1dG9maWxsQ2xpZW50U2VhcmNoU3RlcFwiLFxyXG4gICAgYm9keTogZVxyXG4gIH0pLFxyXG4gIGNhcHR1cmVDYW5kaWRhdGVzOiBtLmNhcHR1cmVQaGVub21TY2hvb2xDYW5kaWRhdGVzLFxyXG4gIGNvbW1pdENhbmRpZGF0ZTogYXN5bmMgKGUsIHQsIHIsIG4pID0+ICgwLCBtLmZpbGxSZXNvbHZlZFBoZW5vbVNjaG9vbEZpZWxkKShlLCB0LnRleHQsIHIsIG4pXHJcbn07XHJcblxyXG5mdW5jdGlvbiB5KGUpIHtcclxuICByZXR1cm4gW1wic2Nob29sXCIsIFwic2Nob29sIG5hbWVcIiwgXCJzY2hvb2xuYW1lXCIsIFwic2Nob29sIG9yIHVuaXZlcnNpdHlcIl0uaW5jbHVkZXMoZS50cmltKCkucmVwbGFjZShcclxuICAgIC9cXHMrL2csIFwiIFwiKS50b0xvd2VyQ2FzZSgpKVxyXG59XHJcblxyXG5mdW5jdGlvbiB2KGUpIHtcclxuICByZXR1cm4gQXJyYXkuaXNBcnJheShlKSA/IGUuc29tZShlID0+IFN0cmluZyhlID8/IFwiXCIpLnRyaW0oKS5sZW5ndGggPiAwKSA6IFN0cmluZyhlID8/IFwiXCIpLnRyaW0oKVxyXG4gICAgLmxlbmd0aCA+IDBcclxufVxyXG5jbGFzcyB3IGV4dGVuZHMgbC5CYXNlRmlsbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmIChzdXBlcigpLCB0aGlzLmhhc0NvbWJvUXVlc3Rpb25zID0gITAsIHRoaXMuZGlkVXBsb2FkUmVzdW1lU3VjY2Vzc2Z1bGx5ID0gITEsIHRoaXNcclxuICAgICAgLnJlc3VtZVBhcnNlclJlYWR5ID0gITAsIHRoaXMuZGlkVXBsb2FkQ292ZXJMZXR0ZXJTdWNjZXNzZnVsbHkgPSAhMSwgdGhpc1xyXG4gICAgICAuZGlkTWlzc1Jlc29sdmVkU2Nob29sID0gITEsIHRoaXMuY292ZXJMZXR0ZXJDaGVja1ZlcnNpb24gPSAwLCB0aGlzXHJcbiAgICAgIC5jb3ZlckxldHRlckNoZWNrVGltZXIgPSBudWxsLCB0aGlzLmNoZWNrQ292ZXJMZXR0ZXJFdmVudEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jaGVja0NvdmVyTGV0dGVyKClcclxuICAgICAgfSwgdGhpcy5jaGVja0NvdmVyTGV0dGVyQWZ0ZXJDb250aW51ZUhhbmRsZXIgPSBlID0+IHtcclxuICAgICAgICBsZXQgdCA9IGUudGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCA/IGUudGFyZ2V0LmNsb3Nlc3QoXHJcbiAgICAgICAgICBcImJ1dHRvbiwgaW5wdXRbdHlwZT0nc3VibWl0J10sIGEsIFtyb2xlPSdidXR0b24nXVwiKSA6IG51bGw7XHJcbiAgICAgICAgdCAmJiAoMCwgZC5zaG91bGRTY2hlZHVsZUNvdmVyTGV0dGVyQ2hlY2tGb3JBY3Rpb24pKHtcclxuICAgICAgICAgIHRleHQ6IHQudGV4dENvbnRlbnQsXHJcbiAgICAgICAgICBpZDogdC5pZCxcclxuICAgICAgICAgIGFyaWFMYWJlbDogdC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpXHJcbiAgICAgICAgfSkgJiYgdGhpcy5zY2hlZHVsZUNvdmVyTGV0dGVyQ2hlY2soKVxyXG4gICAgICB9LCB0aGlzLmZvcm1hdEFuc3dlciA9IGMuZm9ybWF0QW5zd2VyLCBcInVuZGVmaW5lZFwiID09IHR5cGVvZiBkb2N1bWVudCkgcmV0dXJuO1xyXG4gICAgKDAsIGcuaW5qZWN0UGhlbm9tQXBwbHlQYWdlTGF5b3V0Rml4KSgpLCBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiQ2hlY2tBZ2VudENvdmVyTGV0dGVyXCIsXHJcbiAgICAgIHRoaXMuY2hlY2tDb3ZlckxldHRlckV2ZW50SGFuZGxlciksIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzXHJcbiAgICAgIC5jaGVja0NvdmVyTGV0dGVyQWZ0ZXJDb250aW51ZUhhbmRsZXIsICEwKSwgdGhpcy5zY2hlZHVsZUNvdmVyTGV0dGVyQ2hlY2soKVxyXG4gIH1cclxuICBhc3luYyBydW5XaXRoTG9hZGVyR3VhcmQoZSwgdCA9IDIwMCkge1xyXG4gICAgbGV0IHIgPSBhd2FpdCAoMCwgbS53YWl0Rm9yUGhlbm9tTG9hZGVySWRsZSkoKTtcclxuICAgIGlmICghcikgcmV0dXJuICExO1xyXG4gICAgbGV0IG4gPSBhd2FpdCBlKCksXHJcbiAgICAgIG8gPSBhd2FpdCAoMCwgbS53YWl0Rm9yUGhlbm9tTG9hZGVySWRsZSkodCk7XHJcbiAgICByZXR1cm4gISFvICYmIG5cclxuICB9XHJcbiAgaXNJbml0aWFsU3RlcCgpIHtcclxuICAgIHJldHVybiAoMCwgaC5pc0luaXRpYWxBcHBsaWNhdGlvblN0ZXApKCgwLCBoLmdldFN0ZXBJbmZvKSgpKVxyXG4gIH1cclxuICBoYXNSZXN1bWVJbnB1dCgpIHtcclxuICAgIHJldHVybiAoMCwgbS5oYXNSZXN1bWVGaWVsZFByZXNlbmNlKSgpXHJcbiAgfVxyXG4gIGlzU25hcHNob3RGaWVsZEZpbGxlZChlKSB7XHJcbiAgICBsZXQgdCA9IGUudmFsdWU7XHJcbiAgICBpZiAoZS50eXBlID09PSBzLkZJRUxEX1RZUEUuU0VMRUNUKSByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCAmJiB0LnRyaW0oKS5sZW5ndGggPiAwO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodCkpIHJldHVybiB0LnNvbWUoZSA9PiBTdHJpbmcoZSA/PyBcIlwiKS50cmltKCkubGVuZ3RoID4gMCk7XHJcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCkgcmV0dXJuIHQudHJpbSgpLmxlbmd0aCA+IDA7XHJcbiAgICBpZiAobnVsbCAhPSB0KSByZXR1cm4gITA7XHJcbiAgICBsZXQgciA9IGUudGV4dDtcclxuICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiByICYmIHIudHJpbSgpLmxlbmd0aCA+IDBcclxuICB9XHJcbiAgcmVjb25jaWxlRmlsbGVkUHJvZ3Jlc3NGcm9tU25hcHNob3QoKSB7XHJcbiAgICBsZXQgZSA9ICgwLCBoLmdldEZvcm1TbmFwc2hvdCkoKSxcclxuICAgICAgdCA9IEFycmF5LmlzQXJyYXkoZS5maWVsZHMpID8gZS5maWVsZHMgOiBbXTtcclxuICAgIGZvciAobGV0IGUgb2YgdCkge1xyXG4gICAgICBsZXQgdCA9IFwic3RyaW5nXCIgPT0gdHlwZW9mIGUubGFiZWwgPyBlLmxhYmVsLnRyaW0oKSA6IFwiXCI7XHJcbiAgICAgIGlmICghdCB8fCAhdGhpcy5pc1NuYXBzaG90RmllbGRGaWxsZWQoZSkgfHwgISgwLCBtLmhhc1BoZW5vbUFuc3dlckZvclNuYXBzaG90RmllbGQpKHQsXHJcbiAgICAgICAgICB0aGlzLmFuc3dlcikpIGNvbnRpbnVlO1xyXG4gICAgICBsZXQgciA9IHRoaXMucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzLm1pc3NpbmdGaWVsZHMuaW5jbHVkZXModCksXHJcbiAgICAgICAgbiA9IHRoaXMucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzLmZpbGxlZEZpZWxkcy5pbmNsdWRlcyh0KTtcclxuICAgICAgKHIgfHwgIW4pICYmIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKHQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhc0Npc2NvRWR1Y2F0aW9uU2Nob29sUmVhZGJhY2soKSB7XHJcbiAgICBsZXQgZSA9ICgwLCBoLmdldEZvcm1TbmFwc2hvdCkoKSxcclxuICAgICAgdCA9IEFycmF5LmlzQXJyYXkodGhpcy5hbnN3ZXI/LmVkdWNhdGlvbikgPyB0aGlzLmFuc3dlci5lZHVjYXRpb24ubGVuZ3RoIDogMCxcclxuICAgICAgciA9IEFycmF5LmlzQXJyYXkoZS5lZHVjYXRpb24pID8gZS5lZHVjYXRpb24gOiBbXSxcclxuICAgICAgbiA9ICExO1xyXG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUudXJsKSB0cnkge1xyXG4gICAgICBuID0gXCJjYXJlZXJzLmNpc2NvLmNvbVwiID09PSBuZXcgVVJMKGUudXJsKS5ob3N0bmFtZVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIG4gPSAhMVxyXG4gICAgfVxyXG4gICAgbGV0IG8gPSBuICYmIHQgPiAwICYmIHIubGVuZ3RoID49IHQgJiYgci5zbGljZSgwLCB0KS5ldmVyeShlID0+ICEhZSAmJiBcIm9iamVjdFwiID09XHJcbiAgICAgIHR5cGVvZiBlICYmIE9iamVjdC5lbnRyaWVzKGUpLnNvbWUoKFtlLCB0XSkgPT4geShlKSAmJiB2KHQpKSk7XHJcbiAgICByZXR1cm4gbiAmJiBjb25zb2xlLmluZm8oXCJbcGhlbm9tXSBDaXNjbyBFZHVjYXRpb24gcHJvZ3Jlc3MgcmVhZGJhY2tcIiwge1xyXG4gICAgICBleHBlY3RlZFJvd3M6IHQsXHJcbiAgICAgIHZpc2libGVSb3dzOiByLmxlbmd0aCxcclxuICAgICAgY29tcGxldGU6IG9cclxuICAgIH0pLCBvXHJcbiAgfVxyXG4gIGhhc0NvdmVyTGV0dGVySW5wdXQoKSB7XHJcbiAgICByZXR1cm4gKDAsIG0uaGFzQ292ZXJMZXR0ZXJGaWVsZFByZXNlbmNlKSgpXHJcbiAgfVxyXG4gIHNjaGVkdWxlQ292ZXJMZXR0ZXJDaGVjayhlID0gMzAwKSB7XHJcbiAgICB0aGlzLmNvdmVyTGV0dGVyQ2hlY2tUaW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy5jb3ZlckxldHRlckNoZWNrVGltZXIpLCB0aGlzXHJcbiAgICAgIC5jb3ZlckxldHRlckNoZWNrVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmNvdmVyTGV0dGVyQ2hlY2tUaW1lciA9IG51bGwsIHRoaXMuY2hlY2tDb3ZlckxldHRlcigpXHJcbiAgICAgIH0sIGUpXHJcbiAgfVxyXG4gIHN5bmNSZXN1bWVUcmFja2luZ0ZpZWxkKCkge1xyXG4gICAgdGhpcy5pc0luaXRpYWxTdGVwKCkgJiYgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cyh7XHJcbiAgICAgIGxhYmVsOiBcIlJlc3VtZS9DVlwiLFxyXG4gICAgICByZXF1aXJlZDogITBcclxuICAgIH0pXHJcbiAgfVxyXG4gIHN5bmNDb3ZlckxldHRlclRyYWNraW5nRmllbGQoKSB7XHJcbiAgICB0aGlzLmhhc0NvdmVyTGV0dGVySW5wdXQoKSAmJiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzKHtcclxuICAgICAgbGFiZWw6IFwiQ292ZXIgTGV0dGVyXCIsXHJcbiAgICAgIHJlcXVpcmVkOiAhMFxyXG4gICAgfSlcclxuICB9XHJcbiAgZ2V0RmllbGRIYW5kbGVycygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFtzLkZJRUxEX1RZUEUuVEVYVF06IChlLCB0KSA9PiB7XHJcbiAgICAgICAgbGV0IHIgPSB0Py5bMF07XHJcbiAgICAgICAgaWYgKG51bGwgIT0gcikgcmV0dXJuIHRoaXMucnVuV2l0aExvYWRlckd1YXJkKCgpID0+ICgwLCBtLmZpbGxJbnB1dFRleHRGaWVsZCkoZVxyXG4gICAgICAgICAgLiRpbnB1dCwgU3RyaW5nKHIpLCBlLmxhYmVsKSlcclxuICAgICAgfSxcclxuICAgICAgW3MuRklFTERfVFlQRS5EQVRFXTogKGUsIHQpID0+IHtcclxuICAgICAgICBsZXQgciA9IHQ/LlswXSxcclxuICAgICAgICAgIG4gPSBlLiRpbnB1dDtcclxuICAgICAgICBpZiAoKDAsIG0ucmVjb3JkUGhlbm9tRGF0ZURlYnVnKShcImhhbmRsZXIgaW5wdXRcIiwge1xyXG4gICAgICAgICAgICBsYWJlbDogZS5sYWJlbCxcclxuICAgICAgICAgICAgaW5wdXRJZDogbi5pZCxcclxuICAgICAgICAgICAgaW5wdXROYW1lOiBuLm5hbWUsXHJcbiAgICAgICAgICAgIHByZWZlcnJlZEZvcm1hdDogZS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgYW5zd2VyUHJlc2VudDogbnVsbCAhPSByICYmIFwiXCIgIT09IFN0cmluZyhyKS50cmltKClcclxuICAgICAgICAgIH0pLCBudWxsICE9IHIpIHJldHVybiB0aGlzLnJ1bldpdGhMb2FkZXJHdWFyZChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBsZXQgdCA9IGF3YWl0ICgwLCBtLmZpbGxEYXRlRmllbGQpKGUuJGlucHV0LCBTdHJpbmcociksIGUuZGVzY3JpcHRpb24pLFxyXG4gICAgICAgICAgICBvID0gbi5pc0Nvbm5lY3RlZCA/IG4gOiBuLmlkID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobi5pZCkgOiBudWxsO1xyXG4gICAgICAgICAgcmV0dXJuICgwLCBtLnJlY29yZFBoZW5vbURhdGVEZWJ1ZykoXCJoYW5kbGVyIHJlc3VsdFwiLCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBlLmxhYmVsLFxyXG4gICAgICAgICAgICBpbnB1dElkOiBuLmlkLFxyXG4gICAgICAgICAgICBpbnB1dE5hbWU6IG4ubmFtZSxcclxuICAgICAgICAgICAgZmlsbGVkOiB0LFxyXG4gICAgICAgICAgICBpbnB1dFJlYWNxdWlyZWQ6IG8gIT09IG4sXHJcbiAgICAgICAgICAgIGRvbVZhbHVlUHJlc2VudDogXCJcIiAhPT0gU3RyaW5nKG8/LnZhbHVlID8/IFwiXCIpLnRyaW0oKVxyXG4gICAgICAgICAgfSksIHRcclxuICAgICAgICB9LCAwKVxyXG4gICAgICB9LFxyXG4gICAgICBbcy5GSUVMRF9UWVBFLlNFQVJDSF06IChlLCB0KSA9PiB7XHJcbiAgICAgICAgbGV0IHIgPSAoMCwgZi5pc1BoZW5vbVNjaG9vbFJ1bGUpKGUpLFxyXG4gICAgICAgICAgbiA9ICgwLCBmLnRha2VSZXNvbHZlZFBoZW5vbVNjaG9vbFZhbHVlKShlKTtcclxuICAgICAgICBpZiAociAmJiBuKSByZXR1cm4gdGhpcy5ydW5XaXRoTG9hZGVyR3VhcmQoKCkgPT4gKDAsIG0uZmlsbFJlc29sdmVkUGhlbm9tU2Nob29sRmllbGQpKFxyXG4gICAgICAgICAgICBlLiRpbnB1dCwgbikpLnRoZW4oZSA9PiAoITAgIT09IGUgJiYgKHRoaXMuZGlkTWlzc1Jlc29sdmVkU2Nob29sID0gITApLCBlKSlcclxuICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgdGhyb3cgdGhpcy5kaWRNaXNzUmVzb2x2ZWRTY2hvb2wgPSAhMCwgZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IG8gPSB0Py5bMF07XHJcbiAgICAgICAgaWYgKG51bGwgPT0gbykge1xyXG4gICAgICAgICAgciAmJiAodGhpcy5kaWRNaXNzUmVzb2x2ZWRTY2hvb2wgPSAhMCk7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGkgPSB0aGlzLnJ1bldpdGhMb2FkZXJHdWFyZCgoKSA9PiByID8gKDAsIG0uZmlsbFNlYXJjaEZpZWxkKShlLiRpbnB1dCwgU3RyaW5nKFxyXG4gICAgICAgIG8pLCB7XHJcbiAgICAgICAgICByZWRhY3RWYWx1ZXM6ICEwXHJcbiAgICAgICAgfSkgOiAoMCwgbS5maWxsU2VhcmNoRmllbGQpKGUuJGlucHV0LCBTdHJpbmcobykpKTtcclxuICAgICAgICByZXR1cm4gciA/IGkudGhlbihlID0+ICghMSA9PT0gZSAmJiAodGhpcy5kaWRNaXNzUmVzb2x2ZWRTY2hvb2wgPSAhMCksIGUpKS5jYXRjaChcclxuICAgICAgICBlID0+IHtcclxuICAgICAgICAgIHRocm93IHRoaXMuZGlkTWlzc1Jlc29sdmVkU2Nob29sID0gITAsIGVcclxuICAgICAgICB9KSA6IGlcclxuICAgICAgfSxcclxuICAgICAgW3MuRklFTERfVFlQRS5TRUxFQ1RdOiAoZSwgdCkgPT4gdGhpcy5ydW5XaXRoTG9hZGVyR3VhcmQoKCkgPT4gKDAsIG0uZmlsbFNlbGVjdEZpZWxkKShlLFxyXG4gICAgICAgIEFycmF5LmlzQXJyYXkodCkgPyB0WzBdIDogdCkpLFxyXG4gICAgICBbcy5GSUVMRF9UWVBFLlJBRElPR1JPVVBdOiAoZSwgdCkgPT4gdGhpcy5ydW5XaXRoTG9hZGVyR3VhcmQoKCkgPT4gKDAsIG1cclxuICAgICAgICAuZmlsbFJhZGlvR3JvdXBGaWVsZCkoZSwgQXJyYXkuaXNBcnJheSh0KSA/IHRbMF0gOiB0KSksXHJcbiAgICAgIFtzLkZJRUxEX1RZUEUuQ0hFQ0tCT1hdOiAoZSwgdCkgPT4gdGhpcy5ydW5XaXRoTG9hZGVyR3VhcmQoKCkgPT4gKDAsIG0uZmlsbENoZWNrYm94RmllbGQpKFxyXG4gICAgICAgIGUsIEFycmF5LmlzQXJyYXkodCkgPyB0Lm1hcChlID0+IFN0cmluZyhlKSkgOiBbU3RyaW5nKHQpXSkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIHJ1blByZUZpbGxGb3JtKCkge1xyXG4gICAgdGhpcy50YXNrUXVldWUuYWRkKG0ucHJlRmlsbEZvcm0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKVxyXG4gIH1cclxuICBhc3luYyBleHRyYWN0Rm9ybVJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIGF3YWl0ICgwLCBoLmV4dHJhY3RSdWxlcykoKVxyXG4gIH1cclxuICBnZXRTaXRlTmFtZSgpIHtcclxuICAgIHJldHVybiBcInBoZW5vbVwiXHJcbiAgfVxyXG4gIGdldEVsZW1lbnRSdWxlc1JlcXVlc3RVcmwoKSB7XHJcbiAgICByZXR1cm4gKDAsIGguZ2V0UGhlbm9tRmlsbFJlcXVlc3RVcmwpKClcclxuICB9XHJcbiAgYXN5bmMgY2hlY2tDb3ZlckxldHRlcigpIHtcclxuICAgIGxldCBlID0gKyt0aGlzLmNvdmVyTGV0dGVyQ2hlY2tWZXJzaW9uO1xyXG4gICAgYXdhaXQgKDAsIG0ud2FpdEZvclBoZW5vbUxvYWRlcklkbGUpKDE1MCk7XHJcbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDEyOyB0ICs9IDEpIHtcclxuICAgICAgaWYgKGUgIT09IHRoaXMuY292ZXJMZXR0ZXJDaGVja1ZlcnNpb24pIHJldHVybjtcclxuICAgICAgbGV0IHQgPSAoMCwgbS5nZXRDb3ZlckxldHRlckZpZWxkU3RhdHVzKSgpO1xyXG4gICAgICBpZiAoXCJyZXF1aXJlZFwiID09PSB0KSB7XHJcbiAgICAgICAgKDAsIGkucG9zdENvdmVyTGV0dGVyU3RhdHVzKSh0KTtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShlID0+IHNldFRpbWVvdXQoZSwgMjUwKSlcclxuICAgIH1cclxuICAgIGUgPT09IHRoaXMuY292ZXJMZXR0ZXJDaGVja1ZlcnNpb24gJiYgKDAsIGkucG9zdENvdmVyTGV0dGVyU3RhdHVzKShcIlwiKVxyXG4gIH1cclxuICBhc3luYyBoYW5kbGVSZXN1bWVVcGxvYWQoKSB7XHJcbiAgICBsZXQgZSA9ICgwLCBoLmdldFN0ZXBJbmZvKSgpO1xyXG4gICAgaWYgKGNvbnNvbGUubG9nKFwiW3BoZW5vbV0gaGFuZGxlUmVzdW1lVXBsb2FkIGVudHJ5XCIsIHtcclxuICAgICAgICBzdGVwOiBlLnN0ZXAsXHJcbiAgICAgICAgc3RlcE5hbWU6IGUuc3RlcE5hbWUsXHJcbiAgICAgICAgZGlzYWJsZVVwbG9hZFJlc3VtZTogdGhpcy5kaXNhYmxlVXBsb2FkUmVzdW1lXHJcbiAgICAgIH0pLCB0aGlzLmRpZFVwbG9hZFJlc3VtZVN1Y2Nlc3NmdWxseSA9ICExLCB0aGlzLnJlc3VtZVBhcnNlclJlYWR5ID0gITAsICF0aGlzXHJcbiAgICAgIC5pc0luaXRpYWxTdGVwKCkpIHJldHVybjtcclxuICAgIGxldCB0ID0gYXdhaXQgKDAsIG0ud2FpdEZvclJlc3VtZUZpbGVJbnB1dCkoKTtcclxuICAgIGlmICghdCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIltwaGVub21dIGhhbmRsZVJlc3VtZVVwbG9hZCBza2lwOiBubyByZXN1bWUgaW5wdXQgZm91bmRcIik7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIltwaGVub21dIGhhbmRsZVJlc3VtZVVwbG9hZCBza2lwOiB1cGxvYWQgZGlzYWJsZWRcIiksIHRoaXNcclxuICAgICAgICAuc3luY1Jlc3VtZVRyYWNraW5nRmllbGQoKSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJSZXN1bWUvQ1ZcIik7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJbcGhlbm9tXSBoYW5kbGVSZXN1bWVVcGxvYWQgdGFzayBzdGFydFwiKTtcclxuICAgICAgbGV0IGUgPSBhd2FpdCAoMCwgbS51cGxvYWRSZXN1bWUpKHRoaXMucmVzdW1lSW5mbywgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cywgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpO1xyXG4gICAgICBlLnVwbG9hZGVkID8gKHRoaXMuZGlkVXBsb2FkUmVzdW1lU3VjY2Vzc2Z1bGx5ID0gITAsIHRoaXMucmVzdW1lUGFyc2VyUmVhZHkgPSBlXHJcbiAgICAgICAgLnBhcnNlclJlYWR5LCBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIFwiW3BoZW5vbV0gaGFuZGxlUmVzdW1lVXBsb2FkIHRhc2sgcmVzdWx0OiB1cGxvYWQgc3VjY2VlZGVkXCIsIHtcclxuICAgICAgICAgICAgcGFyc2VyUmVhZHk6IGUucGFyc2VyUmVhZHlcclxuICAgICAgICAgIH0pKSA6IChjb25zb2xlLmxvZyhcIltwaGVub21dIGhhbmRsZVJlc3VtZVVwbG9hZCB0YXNrIHJlc3VsdDogdXBsb2FkIGZhaWxlZFwiKSxcclxuICAgICAgICB0aGlzLnN5bmNSZXN1bWVUcmFja2luZ0ZpZWxkKCksIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFxyXG4gICAgICAgICAgXCJSZXN1bWUvQ1ZcIikpXHJcbiAgICB9KSwgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICB9XHJcbiAgYXN5bmMgZG9GaWxsRm9ybShlID0gITEpIHtcclxuICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZUZpbGxGb3JtKCk7XHJcbiAgICBsZXQgdCA9IHRoaXMuaXNJbml0aWFsU3RlcCgpLFxyXG4gICAgICByID0gdCAmJiB0aGlzLmhhc1Jlc3VtZUlucHV0KCk7XHJcbiAgICBpZiAoYXdhaXQgdGhpcy5oYW5kbGVSZXN1bWVVcGxvYWQoKSwgdCAmJiB0aGlzLmRpZFVwbG9hZFJlc3VtZVN1Y2Nlc3NmdWxseSAmJiAhdGhpc1xyXG4gICAgICAucmVzdW1lUGFyc2VyUmVhZHkpIHJldHVybiBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCJbcGhlbm9tXSBza2lwIGluaXRpYWwtc3RlcCBmb3JtIGZpbGwgYmVjYXVzZSBDaXNjbyByZXN1bWUgcGFyc2VyIGRpZCBub3Qgc2V0dGxlXCIpLFxyXG4gICAgICB0aGlzLnN5bmNSZXN1bWVUcmFja2luZ0ZpZWxkKCksIHRoaXMucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzO1xyXG4gICAgbGV0IG4gPSBhd2FpdCB0aGlzLmV4dHJhY3RGb3JtUnVsZXMoKTtcclxuICAgIGlmICh0aGlzLnByb2dyZXNzVHJhY2tlci5zZXRGaWVsZHNSZXF1aXJlZFN0YXR1cyhuKSwgMCA9PT0gbi5sZW5ndGgpIHJldHVybiAoY29uc29sZS53YXJuKFxyXG4gICAgICBcIltwaGVub21dIHNraXAgZmlsbC12Mjogbm8gZXh0cmFjdGVkIHJ1bGVzXCIsIHtcclxuICAgICAgICBpbml0aWFsU3RlcDogdCxcclxuICAgICAgICBoYXNSZXN1bWVJbnB1dDogclxyXG4gICAgICB9KSwgcikgPyAodGhpcy5zeW5jUmVzdW1lVHJhY2tpbmdGaWVsZCgpLCB0aGlzLmRpZFVwbG9hZFJlc3VtZVN1Y2Nlc3NmdWxseSAmJiAhdGhpc1xyXG4gICAgICAucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzLmZpbGxlZEZpZWxkcy5pbmNsdWRlcyhcIlJlc3VtZS9DVlwiKSAmJiB0aGlzXHJcbiAgICAgIC5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoXCJSZXN1bWUvQ1ZcIiksIGF3YWl0IHRoaXMuZmluYWxpemVGaWxsRm9ybSgpKSA6IChcclxuICAgICAgKDAsIGEuc2VuZEh0dHBTdGF0dXNNZXNzYWdlKSh1LkNVU1RPTV9FUlJPUl9DT0RFUy5OT19FTEVNRU5UUyksIHUuQ1VTVE9NX0VSUk9SX0NPREVTXHJcbiAgICAgIC5OT19FTEVNRU5UUyk7XHJcbiAgICByICYmICh0aGlzLnN5bmNSZXN1bWVUcmFja2luZ0ZpZWxkKCksIHRoaXMuZGlkVXBsb2FkUmVzdW1lU3VjY2Vzc2Z1bGx5ICYmICF0aGlzXHJcbiAgICAgICAgLnByb2dyZXNzVHJhY2tlci5maWVsZFN0YXR1cy5maWxsZWRGaWVsZHMuaW5jbHVkZXMoXCJSZXN1bWUvQ1ZcIikgJiYgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoXCJSZXN1bWUvQ1ZcIikpLCB0ICYmIHRoaXMuaGFzQ292ZXJMZXR0ZXJJbnB1dCgpICYmIHRoaXNcclxuICAgICAgLnN5bmNDb3ZlckxldHRlclRyYWNraW5nRmllbGQoKTtcclxuICAgIGxldCBvID0gYXdhaXQgdGhpcy5mZXRjaEZvcm1BbnN3ZXJzKG4sIGUpO1xyXG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIG8pIHJldHVybiBvO1xyXG4gICAgbGV0IGkgPSBuLmZpbHRlcihlID0+IGUudHlwZSAhPT0gcy5GSUVMRF9UWVBFLkVEVUNBVElPTiAmJiBlLnR5cGUgIT09IHMuRklFTERfVFlQRVxyXG4gICAgICAuRU1QTE9ZTUVOVCk7XHJcbiAgICBhd2FpdCB0aGlzLmZpbGxSZWd1bGFyRmllbGRzKGkpO1xyXG4gICAgbGV0IGwgPSBhd2FpdCB0aGlzLnJ1bldpdGhMb2FkZXJHdWFyZCgoKSA9PiAoMCwgbS5maWxsUGhvbmVDb3VudHJ5Q29kZVNlbGVjdHNGcm9tUmVjb3JkKShcclxuICAgICAgdGhpcy5hbnN3ZXIucmVndWxhcikpO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobCkpXHJcbiAgICAgIGZvciAobGV0IGUgb2YgbCkgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoZSk7XHJcbiAgICB0aGlzLnJlY29uY2lsZUZpbGxlZFByb2dyZXNzRnJvbVNuYXBzaG90KCk7XHJcbiAgICBsZXQgYyA9IGF3YWl0IHRoaXMucnVuQ29tYm9RdWVzdGlvbkF1dG9maWxsSWZOZWVkZWQobiwgZSk7XHJcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYykgcmV0dXJuIGM7XHJcbiAgICBuID0gYywgdGhpcy5yZWNvbmNpbGVGaWxsZWRQcm9ncmVzc0Zyb21TbmFwc2hvdCgpLCBhd2FpdCB0aGlzLmZpbGxFZHVjYXRpb25BbmRFbXBsb3ltZW50KG4pO1xyXG4gICAgbGV0IGQgPSBhd2FpdCB0aGlzLnJ1bldpdGhMb2FkZXJHdWFyZCgoKSA9PiAoMCwgbS5maWxsUmVxdWlyZWRDb25zZW50Q2hlY2tib3hlcykoKSk7XHJcbiAgICBmb3IgKGxldCBlIG9mIGQpIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKGUpO1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZXhlY3V0ZVNpdGVTcGVjaWZpY1N0ZXBzKG4pLCB0aGlzLnJlY29uY2lsZUZpbGxlZFByb2dyZXNzRnJvbVNuYXBzaG90KCksXHJcbiAgICAgIGF3YWl0IHRoaXMuZmluYWxpemVGaWxsRm9ybSgpXHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxFZHVjYXRpb25BbmRFbXBsb3ltZW50KGUpIHtcclxuICAgIGxldCB0ID0gKDAsIGguZ2V0QXJyYXlDb250YWluZXIpKHMuRklFTERfVFlQRS5FRFVDQVRJT04pLFxyXG4gICAgICByID0gKDAsIGguZ2V0QXJyYXlDb250YWluZXIpKHMuRklFTERfVFlQRS5FTVBMT1lNRU5UKTtcclxuICAgIHQgJiYgQXJyYXkuaXNBcnJheSh0aGlzLmFuc3dlcj8uZWR1Y2F0aW9uKSAmJiB0aGlzLmFuc3dlci5lZHVjYXRpb24ubGVuZ3RoID4gMCAmJiAodGhpc1xyXG4gICAgICAgIC5kaWRNaXNzUmVzb2x2ZWRTY2hvb2wgPSAhMSwgYXdhaXQgKDAsIG0ucHJvY2Vzc0NvbXBvc2l0ZUJsb2NrcykodGhpcy5hbnN3ZXIuZWR1Y2F0aW9uLFxyXG4gICAgICAgICAgcy5GSUVMRF9UWVBFLkVEVUNBVElPTiwgdGhpcy5vcGVyYXRpb25Db25maWcsIHRoaXMudGFza1F1ZXVlLCBhc3luYyAoZSwgdCwgcikgPT4ge1xyXG4gICAgICAgICAgICBlLnR5cGUgPT09IHMuRklFTERfVFlQRS5EQVRFICYmICgwLCBtLnJlY29yZFBoZW5vbURhdGVEZWJ1ZykoXHJcbiAgICAgICAgICAgICAgXCJlZHVjYXRpb24gYW5zd2VyIG1hdGNoXCIsIHtcclxuICAgICAgICAgICAgICAgIHJlY29yZEluZGV4OiByLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGUubGFiZWwsXHJcbiAgICAgICAgICAgICAgICBleGFjdExhYmVsUHJlc2VudDogT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIGUubGFiZWwpLFxyXG4gICAgICAgICAgICAgICAgcmVjb3JkS2V5czogT2JqZWN0LmtleXModClcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IG4gPSAoMCwgZi5pc1BoZW5vbVNjaG9vbFJ1bGUpKGUpLFxyXG4gICAgICAgICAgICAgIG8gPSBuID8gKDAsIGYuZ2V0UGhlbm9tU2Nob29sUmVjb3JkS2V5KShlLCB0KSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgaSA9IG4gPyAoMCwgZi5nZXRQaGVub21TY2hvb2xPcmlnaW5hbEFuc3dlcikoZSwgdCkgOiBcIlwiO1xyXG4gICAgICAgICAgICBuICYmICFpICYmICh0aGlzLmRpZE1pc3NSZXNvbHZlZFNjaG9vbCA9ICEwKTtcclxuICAgICAgICAgICAgbGV0IGEgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGYucmVzb2x2ZVBoZW5vbUVkdWNhdGlvbkNsaWVudFNlYXJjaFJlY29yZEZvclJ1bGUgP1xyXG4gICAgICAgICAgICAgIGF3YWl0ICgwLCBmLnJlc29sdmVQaGVub21FZHVjYXRpb25DbGllbnRTZWFyY2hSZWNvcmRGb3JSdWxlKShlLCB0LCByLCB7XHJcbiAgICAgICAgICAgICAgICAuLi5iLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogcC5WMTE5X09QVElPTl9SRVNPTFZFX1JPTExPVVQucGhlbm9tRWR1Y2F0aW9uU2Nob29sXHJcbiAgICAgICAgICAgICAgfSkgOiBhd2FpdCAoMCwgZi5yZXNvbHZlUGhlbm9tRWR1Y2F0aW9uUmVjb3JkRm9yUnVsZSkoZSwgdCwgciwge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogcC5WMTE5X09QVElPTl9SRVNPTFZFX1JPTExPVVQucGhlbm9tRWR1Y2F0aW9uU2Nob29sLFxyXG4gICAgICAgICAgICAgICAgdHlwZVByb2JlOiBhc3luYyAoZSwgdCwgcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgbiA9IGF3YWl0ICgwLCBtLnR5cGVQaGVub21TY2hvb2xQcm9iZSkoZSwgdCwgcik7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghMCAhPT0gbikgdGhyb3cgRXJyb3IoXCJQaGVub20gc2Nob29sIHByb2JlIHdhcyBub3QgY29uZmlybWVkXCIpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2xlYXJQcm9iZTogYXN5bmMgKGUsIHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgbGV0IHIgPSBhd2FpdCAoMCwgbS5jbGVhclBoZW5vbVNjaG9vbFByb2JlKShlLCB0KTtcclxuICAgICAgICAgICAgICAgICAgaWYgKCEwICE9PSByKSB0aHJvdyBFcnJvcihcIlBoZW5vbSBzY2hvb2wgY2xlYXIgd2FzIG5vdCBjb25maXJtZWRcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICBsID0gKDAsIGYuZ2V0Rmlyc3ROb25ibGFua1BoZW5vbVNjaG9vbFZhbHVlKShvID8gYVtvXSA6IHZvaWQgMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuICYmIGkgJiYgbyAmJiAhbCA/IHtcclxuICAgICAgICAgICAgICAuLi5hLFxyXG4gICAgICAgICAgICAgIFtvXTogaVxyXG4gICAgICAgICAgICB9IDogYVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBvblNlY3Rpb25SZXN1bHRDaGFuZ2VkOiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVTZWN0aW9uUmVzdWx0LFxyXG4gICAgICAgICAgICBvblNraXBwZWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIkVkdWNhdGlvblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGlkTWlzc1Jlc29sdmVkU2Nob29sICYmICF0aGlzLmhhc0Npc2NvRWR1Y2F0aW9uU2Nob29sUmVhZGJhY2soKSA/IHRoaXNcclxuICAgICAgICAgICAgICAgIC5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFZHVjYXRpb25cIikgOiB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgICAgICAgICAgLnVwZGF0ZUZpbGxlZFByb2dyZXNzKFwiRWR1Y2F0aW9uXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pKSwgciAmJiBBcnJheS5pc0FycmF5KHRoaXMuYW5zd2VyPy53b3JrRXhwZXJpZW5jZSkgJiYgdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2VcclxuICAgICAgLmxlbmd0aCA+IDAgJiYgKGF3YWl0ICgwLCBtLnByb2Nlc3NDb21wb3NpdGVCbG9ja3MpKHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlLCBzXHJcbiAgICAgICAgLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCwgdGhpcy5vcGVyYXRpb25Db25maWcsIHRoaXMudGFza1F1ZXVlLCB2b2lkIDAsIHtcclxuICAgICAgICAgIG9uU2VjdGlvblJlc3VsdENoYW5nZWQ6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVNlY3Rpb25SZXN1bHRcclxuICAgICAgICB9KSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoXCJFbXBsb3ltZW50XCIpKVxyXG4gIH1cclxuICBhc3luYyBleGVjdXRlU2l0ZVNwZWNpZmljU3RlcHMoZSkge1xyXG4gICAgbGV0IHQgPSB0aGlzLmhhc0NvdmVyTGV0dGVySW5wdXQoKTtcclxuICAgIHQgJiYgdGhpcy5zeW5jQ292ZXJMZXR0ZXJUcmFja2luZ0ZpZWxkKCksIHRoaXMuZGlkVXBsb2FkQ292ZXJMZXR0ZXJTdWNjZXNzZnVsbHkgPSAhMSwgdCAmJlxyXG4gICAgICB0aGlzLmNvdmVyTGV0dGVyPy5jb3ZlckxldHRlcklkICYmIHRoaXMuY292ZXJMZXR0ZXI/LmNvdmVyTGV0dGVyTmFtZSAmJiAodGhpcy50YXNrUXVldWVcclxuICAgICAgICAuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGxldCBlID0gYXdhaXQgKDAsIG0udXBsb2FkQ292ZXJMZXR0ZXIpKHtcclxuICAgICAgICAgICAgICBjb3ZlckxldHRlcklkOiB0aGlzLmNvdmVyTGV0dGVyLmNvdmVyTGV0dGVySWQsXHJcbiAgICAgICAgICAgICAgY292ZXJMZXR0ZXJOYW1lOiB0aGlzLmNvdmVyTGV0dGVyLmNvdmVyTGV0dGVyTmFtZSxcclxuICAgICAgICAgICAgICBtYXJrZG93bjogdGhpcy5jb3ZlckxldHRlci5tYXJrZG93bixcclxuICAgICAgICAgICAgICB1c2VMZWdhY3lEb3dubG9hZDogdGhpcy5jb3ZlckxldHRlci51c2VMZWdhY3lEb3dubG9hZFxyXG4gICAgICAgICAgICB9LCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzLCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgICAgICAudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgaWYgKCFlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiQ292ZXIgTGV0dGVyXCIpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuZGlkVXBsb2FkQ292ZXJMZXR0ZXJTdWNjZXNzZnVsbHkgPSAhMFxyXG4gICAgICAgIH0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKSksICF0IHx8ICh0aGlzLmRpZFVwbG9hZENvdmVyTGV0dGVyU3VjY2Vzc2Z1bGx5ID8gdGhpc1xyXG4gICAgICAgIC5wcm9ncmVzc1RyYWNrZXIuZmllbGRTdGF0dXMuZmlsbGVkRmllbGRzLmluY2x1ZGVzKFwiQ292ZXIgTGV0dGVyXCIpIHx8IHRoaXNcclxuICAgICAgICAucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKFwiQ292ZXIgTGV0dGVyXCIpIDogdGhpcy5wcm9ncmVzc1RyYWNrZXIuZmllbGRTdGF0dXNcclxuICAgICAgICAubWlzc2luZ0ZpZWxkcy5pbmNsdWRlcyhcIkNvdmVyIExldHRlclwiKSB8fCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcclxuICAgICAgICAgIFwiQ292ZXIgTGV0dGVyXCIpKSwgYXdhaXQgc3VwZXIuZXhlY3V0ZVNpdGVTcGVjaWZpY1N0ZXBzKGUpXHJcbiAgfVxyXG4gIGFzeW5jIGdldEF1dG9maWxsU25hcHNob3QoZSkge1xyXG4gICAgcmV0dXJuICgwLCBoLmdldFRyYWNraW5nRm9ybVNuYXBzaG90KSgpXHJcbiAgfVxyXG4gIGFzeW5jIGdldFN1Ym1pdFNuYXBzaG90KCkge1xyXG4gICAgcmV0dXJuICgwLCBoLmdldFRyYWNraW5nRm9ybVNuYXBzaG90KSgpXHJcbiAgfVxyXG4gIGdldFN1Ym1pdEJ1dHRvblNlbGVjdG9yKCkge1xyXG4gICAgcmV0dXJuICcuLy9mb3JtW2NvbnRhaW5zKEBjbGFzcywgXCJyanNmXCIpXS8vYnV0dG9uW0B0eXBlPVwic3VibWl0XCJdIHwgLi8vZm9ybVtjb250YWlucyhAY2xhc3MsIFwicmpzZlwiKV0vL2lucHV0W0B0eXBlPVwic3VibWl0XCJdJ1xyXG4gIH1cclxuICBzdWJtaXRBcHBsaWNhdGlvbigpIHtcclxuICAgIG0uZ2V0Q29udGludWVCdXR0b24oKT8uY2xpY2soKVxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6InBoZW5vbS5lNWFlODg0NS5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);