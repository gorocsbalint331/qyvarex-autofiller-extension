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
})({"5Zz9J":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\apple\\country.js",
    "bundleId": "727d2e1543142829",
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
var j = z(require("ba81817b828205ae"));
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

},{"ba81817b828205ae":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"8L8mG":[function(require,module,exports) {
/**
 * Parcel module id: g9Qd1
 * Resolved path: src/contents/sites/apple/country.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~constants/country -> 7z2Rw  =>  src/constants/country.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "normalizeAppleCountry", ()=>m), n.export(r, "resolveAppleCountryDefinition", ()=>g), n.export(r, "resolveAppleCountryOption", ()=>y), n.export(r, "isMainAppleCountrySelect", ()=>S), n.export(r, "findMainAppleCountrySelect", ()=>C), n.export(r, "isMainAppleCountryRule", ()=>A), n.export(r, "isAppleCountryDependentRule", ()=>F), n.export(r, "captureAppleDependentSnapshot", ()=>P), n.export(r, "waitForAppleCountryDependents", ()=>$), n.export(r, "prefillAppleCountry", ()=>W);
var o = e("~constants/country"), i = e("~utils/delay");
let a = {
    us: [
        "usa",
        "united states of america"
    ],
    ca: [],
    gb: [
        "uk",
        "gbr",
        "great britain"
    ]
}, l = (0, o.COUNTRY_OPTIONS).map(({ code: e1, label: t, value: r1 })=>({
        code: e1.toLowerCase(),
        label: t,
        value: r1,
        aliases: a[e1.toLowerCase()] ?? []
    })), s = 'select[name="Country/Region"]', u = "select[name], select[id], input[name], input[id], textarea[name], textarea[id]", c = /(^|[\s[\]_.:/-])(state|province|region|city|postal(?:code)?|zip(?:code)?)(?=$|[\s[\]_.:/-])/i, d = /(phone|mobile|citizen|nationality|work.?authorization|education|school)/i, f = new WeakMap, p = 1;
function m(e1) {
    return String(e1 ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\p{P}\p{S}]+/gu, " ").replace(/\s+/g, " ").trim().toLowerCase();
}
function h(e1) {
    return new Set([
        e1.code,
        e1.label,
        e1.value,
        ...e1.aliases
    ].map(m).filter(Boolean));
}
function g(e1) {
    let t = m(e1);
    if (!t) return null;
    let r1 = l.filter((e1)=>h(e1).has(t));
    return 1 === r1.length ? r1[0] : null;
}
function b(e1) {
    let t = g(e1);
    return t ? h(t) : new Set;
}
function y(e1, t) {
    let r1 = b(t);
    if (0 === r1.size) return null;
    let n = Array.from(e1).filter((e1)=>{
        let t = m(e1.text || e1.textContent), n = m(e1.value);
        return r1.has(t) || r1.has(n);
    });
    return 1 === n.length ? n[0] : null;
}
function v(e1, t) {
    let r1 = b(t);
    return 0 === r1.size ? [] : Array.from(e1).filter((e1)=>{
        let t = m(e1.text || e1.textContent), n = m(e1.value);
        return r1.has(t) || r1.has(n);
    });
}
function w(e1) {
    let t = e1.getAttribute("aria-label");
    if (t) return t;
    let r1 = e1.getAttribute("aria-labelledby");
    if (r1) {
        let e1 = r1.split(/\s+/).map((e1)=>document.getElementById(e1)?.textContent ?? "").join(" ").trim();
        if (e1) return e1;
    }
    let n = Array.from(e1.labels ?? []).map((e1)=>e1.textContent ?? "").join(" ").trim();
    return n || (e1.closest(".form-dropdown, .form-textbox")?.querySelector(".form-dropdown-label, .form-textbox-label, label")?.textContent?.trim() ?? "");
}
function S(e1) {
    if (!e1 || "SELECT" !== e1.tagName) return !1;
    let t = e1;
    return "Country/Region" === t.getAttribute("name") && "country region" === m(w(t));
}
_c = S;
function E(e1) {
    let t = e1.querySelector?.("#apply-profileInformation-form");
    return Array.from(e1.querySelectorAll(s)).filter((e1)=>S(e1) && x(e1) && (!t || t.contains(e1)));
}
_c1 = E;
function x(e1) {
    if (!1 === e1.isConnected) return !1;
    let t = e1;
    for(; t;){
        let e1 = t;
        if (e1.hidden || e1.inert || null !== t.getAttribute("hidden") || "true" === t.getAttribute("aria-hidden") || null !== t.getAttribute("inert")) return !1;
        let r1 = "undefined" != typeof window && "function" == typeof window.getComputedStyle ? window.getComputedStyle(t) : null;
        if (r1?.display === "none" || r1?.visibility === "hidden" || e1.style?.display === "none" || e1.style?.visibility === "hidden") return !1;
        t = t.parentElement;
    }
    return !0;
}
function C(e1 = document) {
    let t = E(e1);
    return 1 === t.length ? t[0] : null;
}
_c2 = C;
function A(e1) {
    return S(e1?.$input);
}
_c3 = A;
function k(e1) {
    let t = e1.getAttribute("name") ?? "", r1 = e1.getAttribute("id") ?? "", n = e1.closest?.("[data-address-type], [id*='address'], [class*='address']")?.getAttribute("id") ?? "";
    return [
        e1.tagName,
        t,
        r1,
        n
    ].join(":");
}
function T(e1) {
    if (!e1 || "function" != typeof e1.getAttribute) return !1;
    let t = [
        e1.getAttribute("name") ?? "",
        e1.getAttribute("id") ?? ""
    ].join(" ");
    return !d.test(t) && c.test(t);
}
_c4 = T;
function F(e1) {
    return T(e1?.$input);
}
_c5 = F;
function I(e1) {
    let t = f.get(e1);
    if (t) return t;
    let r1 = p++;
    return f.set(e1, r1), r1;
}
_c6 = I;
function j(e1) {
    return !(e1.hidden || "true" === e1.getAttribute("aria-hidden") || e1.style?.display === "none" || e1.style?.visibility === "hidden");
}
function D(e1) {
    let t = e1;
    if (t.getAttribute?.("data-country-no-dependents") === "true") return !0;
    let r1 = C(e1);
    return !(r1?.getAttribute("data-country-no-dependents") !== "true" && r1?.closest?.("form, [data-country-no-dependents]")?.getAttribute("data-country-no-dependents") !== "true");
}
_c7 = D;
function P(e1 = document) {
    let t = Array.from(e1.querySelectorAll(u)).filter(T).map((e1)=>{
        let t = e1, r1 = "SELECT" === e1.tagName ? Array.from(e1.options).map((e1)=>({
                value: e1.value,
                normalizedText: m(e1.text || e1.textContent),
                selected: e1.selected
            })) : [];
        return {
            identity: k(e1),
            nodeIdentity: I(e1),
            tagName: e1.tagName,
            visible: j(e1),
            disabled: !!t.disabled,
            options: r1
        };
    }).sort((e1, t)=>e1.identity.localeCompare(t.identity));
    return {
        controls: t,
        noDependentTerminal: 0 === t.length && D(e1)
    };
}
_c8 = P;
function _(e1) {
    return JSON.stringify(e1.controls.map(({ identity: e1, tagName: t, visible: r1, disabled: n, options: o })=>({
            identity: e1,
            tagName: t,
            visible: r1,
            disabled: n,
            options: o
        })));
}
function L(e1) {
    return JSON.stringify(e1.controls.map(({ identity: e1, tagName: t, visible: r1, disabled: n, options: o })=>({
            identity: e1,
            tagName: t,
            visible: r1,
            disabled: n,
            options: o.map(({ value: e1, normalizedText: t })=>({
                    value: e1,
                    normalizedText: t
                }))
        })));
}
_c9 = L;
function R(e1) {
    return JSON.stringify(e1);
}
_c10 = R;
function O(e1, t) {
    return e1.controls.length !== t.controls.length || t.controls.some((t, r1)=>t.nodeIdentity !== e1.controls[r1]?.nodeIdentity);
}
_c11 = O;
function M(e1) {
    return JSON.stringify(e1.options.map(({ value: e1, normalizedText: t })=>({
            value: e1,
            normalizedText: t
        })));
}
_c12 = M;
function N(e1, t) {
    let r1 = e1.controls.filter((e1)=>"SELECT" === e1.tagName);
    return 0 === r1.length ? L(t) !== L(e1) || O(e1, t) : r1.every((e1)=>{
        let r1 = t.controls.filter((t)=>t.identity === e1.identity);
        if (1 !== r1.length) return !1;
        let n = r1[0];
        return M(n) !== M(e1);
    });
}
_c13 = N;
async function $(e1, t, r1 = document, n = {}) {
    let o = Math.max(1, n.maxAttempts ?? 10), a = Math.max(0, n.pollMs ?? 50), l = _(e1), s = null, u = 0;
    for(let c = 0; c < o; c++){
        (c > 0 || a > 0) && await (0, i.delay)(a), n.checkpoint?.();
        let o = P(r1), d = _(o), f = 0 === e1.controls.length && 0 === o.controls.length && o.noDependentTerminal, p = f || o.controls.length > 0 && ("changed" === t ? N(e1, o) : d === l);
        if (!p) {
            s = null, u = 0;
            continue;
        }
        let m = R(o);
        if (m === s) {
            if (++u >= 1) return !0;
        } else s = m, u = 0;
    }
    return !1;
}
function B(e1, t) {
    let r1 = Array.from(e1.options), n = y(r1, t);
    if (!n) return !1;
    let o = r1.indexOf(n);
    return o >= 0 && e1.selectedIndex === o && e1.value === r1[o].value && r1[o].selected;
}
_c14 = B;
function q(e1, t) {
    let r1 = Array.from(e1.options);
    e1.value = r1[t].value, e1.selectedIndex = t, r1.forEach((e1, r1)=>{
        e1.selected = r1 === t;
    }), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("input", {
        bubbles: !0
    }));
}
function U(e1) {
    let t = e1.options[e1.selectedIndex];
    return t ? {
        value: t.value,
        normalizedText: m(t.text || t.textContent)
    } : null;
}
_c15 = U;
function H(e1, t) {
    let r1 = Array.from(e1.options);
    if (t.value) {
        let e1 = r1.reduce((e1, r1, n)=>(r1.value === t.value && e1.push(n), e1), []);
        if (1 === e1.length) return e1[0];
    }
    let n = r1.reduce((e1, r1, n)=>(m(r1.text || r1.textContent) === t.normalizedText && e1.push(n), e1), []);
    return 1 === n.length ? n[0] : -1;
}
_c16 = H;
function Y(e1, t) {
    let r1 = H(e1, t);
    return !(r1 < 0) && e1.selectedIndex === r1 && e1.value === e1.options[r1].value && e1.options[r1].selected;
}
_c17 = Y;
async function z(e1, t, r1, n, o, a) {
    if (!e1) return !1;
    let l = C(t) ?? r1, s = H(l, e1);
    if (s < 0) return !1;
    q(l, s);
    let u = 0;
    for(let r1 = 0; r1 < n; r1++){
        (r1 > 0 || o > 0) && await (0, i.delay)(o), a?.();
        let l = C(t);
        if (l && Y(l, e1)) {
            if (++u >= Math.min(2, n)) return !0;
        } else u = 0;
    }
    return !1;
}
function V(e1, t, r1 = {}) {
    return {
        discovery: e1,
        committed: !1,
        dependentsSettled: !1,
        dependentBaseline: t,
        dependentExpectation: "current",
        changed: !1,
        ...r1
    };
}
_c18 = V;
async function W(e1, t = document, r1 = {}) {
    let n = E(t), o = 0 === n.length ? "missing" : 1 === n.length ? "unique" : "ambiguous", a = r1.dependentBaseline ?? P(t), l = Math.max(1, r1.maxAttempts ?? 10), s = Math.max(0, r1.pollMs ?? 50);
    if ("unique" !== o) return console.warn("missing" === o ? "[Apple][Country] skipped: main geographic Country select is missing" : "[Apple][Country] skipped: main geographic Country select is ambiguous"), V(o, a);
    let u = n[0], c = g(e1);
    if (!m(e1)) return console.warn("[Apple][Country] skipped: fresh AFI country is empty"), V(o, a, {
        failureReason: "country-empty",
        dependentsSettled: await $(a, "current", t, {
            maxAttempts: l,
            pollMs: s,
            checkpoint: r1.checkpoint
        })
    });
    if (!c) return console.warn("[Apple][Country] skipped: fresh AFI country is unresolved"), V(o, a, {
        failureReason: "country-unresolved",
        dependentsSettled: await $(a, "current", t, {
            maxAttempts: l,
            pollMs: s,
            checkpoint: r1.checkpoint
        })
    });
    let d = Array.from(u.options), f = v(d, c.code);
    if (1 !== f.length) {
        let e1 = f.length > 1;
        return console.warn(e1 ? "[Apple][Country] skipped: live option match is ambiguous" : "[Apple][Country] skipped: no exact live option match"), V(o, a, {
            failureReason: e1 ? "option-ambiguous" : "option-unmatched",
            dependentsSettled: await $(a, "current", t, {
                maxAttempts: l,
                pollMs: s,
                checkpoint: r1.checkpoint
            })
        });
    }
    let p = f[0];
    if (B(u, c.code)) return V(o, a, {
        committed: !0,
        dependentsSettled: await $(a, "current", t, {
            maxAttempts: l,
            pollMs: s,
            checkpoint: r1.checkpoint
        })
    });
    let h = d.indexOf(p), b = U(u);
    if (h < 0 || !b) return V(o, a, {
        failureReason: "option-unmatched"
    });
    r1.checkpoint?.(), q(u, h);
    let y = 0;
    for(let e1 = 0; e1 < l; e1++){
        (e1 > 0 || s > 0) && await (0, i.delay)(s), r1.checkpoint?.();
        let n = C(t);
        if (n && B(n, c.code)) {
            if (++y >= Math.min(2, l)) return V(o, a, {
                committed: !0,
                changed: !0,
                dependentExpectation: "changed",
                dependentsSettled: await $(a, "changed", t, {
                    maxAttempts: l,
                    pollMs: s,
                    checkpoint: r1.checkpoint
                })
            });
        } else y = 0;
    }
    r1.checkpoint?.();
    let w = await z(b, t, u, l, s, r1.checkpoint);
    if (!w) return console.warn("[Apple][Country] failed: committed state did not stabilize; rollback failed"), V(o, a, {
        changed: !0,
        failureReason: "rollback-failed",
        rollbackSucceeded: !1
    });
    let S = await $(a, "rollback", t, {
        maxAttempts: l,
        pollMs: s,
        checkpoint: r1.checkpoint
    });
    return console.warn("[Apple][Country] failed: committed state did not stabilize; selection restored"), V(o, a, {
        changed: !0,
        dependentExpectation: "rollback",
        dependentsSettled: S,
        failureReason: "commit-rejected",
        rollbackSucceeded: !0
    });
}
_c19 = W;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19;
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
$RefreshReg$(_c14, "B");
$RefreshReg$(_c15, "U");
$RefreshReg$(_c16, "H");
$RefreshReg$(_c17, "Y");
$RefreshReg$(_c18, "V");
$RefreshReg$(_c19, "W");

},{}]},["5Zz9J","8L8mG"], "8L8mG", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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SSxJQUFJLE1BQU0sRUFBRSxHQUFHLFlBQVksR0FBRztRQUNoQyxhQUFhO1FBQ2IsUUFBUTtRQUNSLFlBQVksR0FBRTtJQUNoQjtJQUNBLE9BQU8sUUFBUSxLQUNiLG1GQUFtRixFQUFFLEdBQUcsR0FBRztRQUMzRixTQUFTLENBQUM7UUFDVixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixtQkFBbUIsQ0FBQztJQUN0QjtBQUNGO09BaEdlIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0yNDhkZmRlOTlkN2ZjNWQxLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2FwcGxlL2NvdW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcYXBwbGVcXFxcY291bnRyeS5qc1wiLFwiYnVuZGxlSWRcIjpcIjcyN2QyZTE1NDMxNDI4MjlcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiBnOVFkMVxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvYXBwbGUvY291bnRyeS5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvbnN0YW50cy9jb3VudHJ5IC0+IDd6MlJ3ICA9PiAgc3JjL2NvbnN0YW50cy9jb3VudHJ5LmpzXHJcbiAqICAgfnV0aWxzL2RlbGF5IC0+IGFtNjE0ICA9PiAgc3JjL3V0aWxzL2RlbGF5LmpzXHJcbiAqL1xyXG5cclxudmFyIG4gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxubi5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgbi5leHBvcnQociwgXCJub3JtYWxpemVBcHBsZUNvdW50cnlcIiwgKCkgPT4gbSksIG4uZXhwb3J0KHIsXHJcbiAgICBcInJlc29sdmVBcHBsZUNvdW50cnlEZWZpbml0aW9uXCIsICgpID0+IGcpLCBuLmV4cG9ydChyLCBcInJlc29sdmVBcHBsZUNvdW50cnlPcHRpb25cIiwgKCkgPT4geSksIG5cclxuICAuZXhwb3J0KHIsIFwiaXNNYWluQXBwbGVDb3VudHJ5U2VsZWN0XCIsICgpID0+IFMpLCBuLmV4cG9ydChyLCBcImZpbmRNYWluQXBwbGVDb3VudHJ5U2VsZWN0XCIsICgpID0+XHJcbiAgICBDKSwgbi5leHBvcnQociwgXCJpc01haW5BcHBsZUNvdW50cnlSdWxlXCIsICgpID0+IEEpLCBuLmV4cG9ydChyLCBcImlzQXBwbGVDb3VudHJ5RGVwZW5kZW50UnVsZVwiLFxyXG4gICgpID0+IEYpLCBuLmV4cG9ydChyLCBcImNhcHR1cmVBcHBsZURlcGVuZGVudFNuYXBzaG90XCIsICgpID0+IFApLCBuLmV4cG9ydChyLFxyXG4gICAgXCJ3YWl0Rm9yQXBwbGVDb3VudHJ5RGVwZW5kZW50c1wiLCAoKSA9PiAkKSwgbi5leHBvcnQociwgXCJwcmVmaWxsQXBwbGVDb3VudHJ5XCIsICgpID0+IFcpO1xyXG52YXIgbyA9IGUoXCJ+Y29uc3RhbnRzL2NvdW50cnlcIiksXHJcbiAgaSA9IGUoXCJ+dXRpbHMvZGVsYXlcIik7XHJcbmxldCBhID0ge1xyXG4gICAgdXM6IFtcInVzYVwiLCBcInVuaXRlZCBzdGF0ZXMgb2YgYW1lcmljYVwiXSxcclxuICAgIGNhOiBbXSxcclxuICAgIGdiOiBbXCJ1a1wiLCBcImdiclwiLCBcImdyZWF0IGJyaXRhaW5cIl1cclxuICB9LFxyXG4gIGwgPSAoMCwgby5DT1VOVFJZX09QVElPTlMpLm1hcCgoe1xyXG4gICAgY29kZTogZSxcclxuICAgIGxhYmVsOiB0LFxyXG4gICAgdmFsdWU6IHJcclxuICB9KSA9PiAoe1xyXG4gICAgY29kZTogZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgbGFiZWw6IHQsXHJcbiAgICB2YWx1ZTogcixcclxuICAgIGFsaWFzZXM6IGFbZS50b0xvd2VyQ2FzZSgpXSA/PyBbXVxyXG4gIH0pKSxcclxuICBzID0gJ3NlbGVjdFtuYW1lPVwiQ291bnRyeS9SZWdpb25cIl0nLFxyXG4gIHUgPSBcInNlbGVjdFtuYW1lXSwgc2VsZWN0W2lkXSwgaW5wdXRbbmFtZV0sIGlucHV0W2lkXSwgdGV4dGFyZWFbbmFtZV0sIHRleHRhcmVhW2lkXVwiLFxyXG4gIGMgPVxyXG4gIC8oXnxbXFxzW1xcXV8uOi8tXSkoc3RhdGV8cHJvdmluY2V8cmVnaW9ufGNpdHl8cG9zdGFsKD86Y29kZSk/fHppcCg/OmNvZGUpPykoPz0kfFtcXHNbXFxdXy46Ly1dKS9pLFxyXG4gIGQgPSAvKHBob25lfG1vYmlsZXxjaXRpemVufG5hdGlvbmFsaXR5fHdvcmsuP2F1dGhvcml6YXRpb258ZWR1Y2F0aW9ufHNjaG9vbCkvaSxcclxuICBmID0gbmV3IFdlYWtNYXAsXHJcbiAgcCA9IDE7XHJcblxyXG5mdW5jdGlvbiBtKGUpIHtcclxuICByZXR1cm4gU3RyaW5nKGUgPz8gXCJcIikubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpLnJlcGxhY2UoL1tcXHB7UH1cXHB7U31dKy9ndSxcclxuICAgIFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoKGUpIHtcclxuICByZXR1cm4gbmV3IFNldChbZS5jb2RlLCBlLmxhYmVsLCBlLnZhbHVlLCAuLi5lLmFsaWFzZXNdLm1hcChtKS5maWx0ZXIoQm9vbGVhbikpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGcoZSkge1xyXG4gIGxldCB0ID0gbShlKTtcclxuICBpZiAoIXQpIHJldHVybiBudWxsO1xyXG4gIGxldCByID0gbC5maWx0ZXIoZSA9PiBoKGUpLmhhcyh0KSk7XHJcbiAgcmV0dXJuIDEgPT09IHIubGVuZ3RoID8gclswXSA6IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gYihlKSB7XHJcbiAgbGV0IHQgPSBnKGUpO1xyXG4gIHJldHVybiB0ID8gaCh0KSA6IG5ldyBTZXRcclxufVxyXG5cclxuZnVuY3Rpb24geShlLCB0KSB7XHJcbiAgbGV0IHIgPSBiKHQpO1xyXG4gIGlmICgwID09PSByLnNpemUpIHJldHVybiBudWxsO1xyXG4gIGxldCBuID0gQXJyYXkuZnJvbShlKS5maWx0ZXIoZSA9PiB7XHJcbiAgICBsZXQgdCA9IG0oZS50ZXh0IHx8IGUudGV4dENvbnRlbnQpLFxyXG4gICAgICBuID0gbShlLnZhbHVlKTtcclxuICAgIHJldHVybiByLmhhcyh0KSB8fCByLmhhcyhuKVxyXG4gIH0pO1xyXG4gIHJldHVybiAxID09PSBuLmxlbmd0aCA/IG5bMF0gOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHYoZSwgdCkge1xyXG4gIGxldCByID0gYih0KTtcclxuICByZXR1cm4gMCA9PT0gci5zaXplID8gW10gOiBBcnJheS5mcm9tKGUpLmZpbHRlcihlID0+IHtcclxuICAgIGxldCB0ID0gbShlLnRleHQgfHwgZS50ZXh0Q29udGVudCksXHJcbiAgICAgIG4gPSBtKGUudmFsdWUpO1xyXG4gICAgcmV0dXJuIHIuaGFzKHQpIHx8IHIuaGFzKG4pXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gdyhlKSB7XHJcbiAgbGV0IHQgPSBlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIik7XHJcbiAgaWYgKHQpIHJldHVybiB0O1xyXG4gIGxldCByID0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIik7XHJcbiAgaWYgKHIpIHtcclxuICAgIGxldCBlID0gci5zcGxpdCgvXFxzKy8pLm1hcChlID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpPy50ZXh0Q29udGVudCA/PyBcIlwiKS5qb2luKFwiIFwiKS50cmltKCk7XHJcbiAgICBpZiAoZSkgcmV0dXJuIGVcclxuICB9XHJcbiAgbGV0IG4gPSBBcnJheS5mcm9tKGUubGFiZWxzID8/IFtdKS5tYXAoZSA9PiBlLnRleHRDb250ZW50ID8/IFwiXCIpLmpvaW4oXCIgXCIpLnRyaW0oKTtcclxuICByZXR1cm4gbiB8fCAoZS5jbG9zZXN0KFwiLmZvcm0tZHJvcGRvd24sIC5mb3JtLXRleHRib3hcIik/LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5mb3JtLWRyb3Bkb3duLWxhYmVsLCAuZm9ybS10ZXh0Ym94LWxhYmVsLCBsYWJlbFwiKT8udGV4dENvbnRlbnQ/LnRyaW0oKSA/PyBcIlwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBTKGUpIHtcclxuICBpZiAoIWUgfHwgXCJTRUxFQ1RcIiAhPT0gZS50YWdOYW1lKSByZXR1cm4gITE7XHJcbiAgbGV0IHQgPSBlO1xyXG4gIHJldHVybiBcIkNvdW50cnkvUmVnaW9uXCIgPT09IHQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSAmJiBcImNvdW50cnkgcmVnaW9uXCIgPT09IG0odyh0KSlcclxufVxyXG5cclxuZnVuY3Rpb24gRShlKSB7XHJcbiAgbGV0IHQgPSBlLnF1ZXJ5U2VsZWN0b3I/LihcIiNhcHBseS1wcm9maWxlSW5mb3JtYXRpb24tZm9ybVwiKTtcclxuICByZXR1cm4gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwocykpLmZpbHRlcihlID0+IFMoZSkgJiYgeChlKSAmJiAoIXQgfHwgdC5jb250YWlucyhlKSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHgoZSkge1xyXG4gIGlmICghMSA9PT0gZS5pc0Nvbm5lY3RlZCkgcmV0dXJuICExO1xyXG4gIGxldCB0ID0gZTtcclxuICBmb3IgKDsgdDspIHtcclxuICAgIGxldCBlID0gdDtcclxuICAgIGlmIChlLmhpZGRlbiB8fCBlLmluZXJ0IHx8IG51bGwgIT09IHQuZ2V0QXR0cmlidXRlKFwiaGlkZGVuXCIpIHx8IFwidHJ1ZVwiID09PSB0LmdldEF0dHJpYnV0ZShcclxuICAgICAgICBcImFyaWEtaGlkZGVuXCIpIHx8IG51bGwgIT09IHQuZ2V0QXR0cmlidXRlKFwiaW5lcnRcIikpIHJldHVybiAhMTtcclxuICAgIGxldCByID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyB3aW5kb3dcclxuICAgICAgLmdldENvbXB1dGVkU3R5bGUodCkgOiBudWxsO1xyXG4gICAgaWYgKHI/LmRpc3BsYXkgPT09IFwibm9uZVwiIHx8IHI/LnZpc2liaWxpdHkgPT09IFwiaGlkZGVuXCIgfHwgZS5zdHlsZT8uZGlzcGxheSA9PT0gXCJub25lXCIgfHwgZVxyXG4gICAgICAuc3R5bGU/LnZpc2liaWxpdHkgPT09IFwiaGlkZGVuXCIpIHJldHVybiAhMTtcclxuICAgIHQgPSB0LnBhcmVudEVsZW1lbnRcclxuICB9XHJcbiAgcmV0dXJuICEwXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEMoZSA9IGRvY3VtZW50KSB7XHJcbiAgbGV0IHQgPSBFKGUpO1xyXG4gIHJldHVybiAxID09PSB0Lmxlbmd0aCA/IHRbMF0gOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEEoZSkge1xyXG4gIHJldHVybiBTKGU/LiRpbnB1dClcclxufVxyXG5cclxuZnVuY3Rpb24gayhlKSB7XHJcbiAgbGV0IHQgPSBlLmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPz8gXCJcIixcclxuICAgIHIgPSBlLmdldEF0dHJpYnV0ZShcImlkXCIpID8/IFwiXCIsXHJcbiAgICBuID0gZS5jbG9zZXN0Py4oXCJbZGF0YS1hZGRyZXNzLXR5cGVdLCBbaWQqPSdhZGRyZXNzJ10sIFtjbGFzcyo9J2FkZHJlc3MnXVwiKT8uZ2V0QXR0cmlidXRlKFxyXG4gICAgXCJpZFwiKSA/PyBcIlwiO1xyXG4gIHJldHVybiBbZS50YWdOYW1lLCB0LCByLCBuXS5qb2luKFwiOlwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBUKGUpIHtcclxuICBpZiAoIWUgfHwgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlLmdldEF0dHJpYnV0ZSkgcmV0dXJuICExO1xyXG4gIGxldCB0ID0gW2UuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSA/PyBcIlwiLCBlLmdldEF0dHJpYnV0ZShcImlkXCIpID8/IFwiXCJdLmpvaW4oXCIgXCIpO1xyXG4gIHJldHVybiAhZC50ZXN0KHQpICYmIGMudGVzdCh0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBGKGUpIHtcclxuICByZXR1cm4gVChlPy4kaW5wdXQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEkoZSkge1xyXG4gIGxldCB0ID0gZi5nZXQoZSk7XHJcbiAgaWYgKHQpIHJldHVybiB0O1xyXG4gIGxldCByID0gcCsrO1xyXG4gIHJldHVybiBmLnNldChlLCByKSwgclxyXG59XHJcblxyXG5mdW5jdGlvbiBqKGUpIHtcclxuICByZXR1cm4gIShlLmhpZGRlbiB8fCBcInRydWVcIiA9PT0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSB8fCBlLnN0eWxlPy5kaXNwbGF5ID09PSBcIm5vbmVcIiB8fCBlXHJcbiAgICAuc3R5bGU/LnZpc2liaWxpdHkgPT09IFwiaGlkZGVuXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEQoZSkge1xyXG4gIGxldCB0ID0gZTtcclxuICBpZiAodC5nZXRBdHRyaWJ1dGU/LihcImRhdGEtY291bnRyeS1uby1kZXBlbmRlbnRzXCIpID09PSBcInRydWVcIikgcmV0dXJuICEwO1xyXG4gIGxldCByID0gQyhlKTtcclxuICByZXR1cm4gIShyPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvdW50cnktbm8tZGVwZW5kZW50c1wiKSAhPT0gXCJ0cnVlXCIgJiYgcj8uY2xvc2VzdD8uKFxyXG4gICAgICBcImZvcm0sIFtkYXRhLWNvdW50cnktbm8tZGVwZW5kZW50c11cIik/LmdldEF0dHJpYnV0ZShcImRhdGEtY291bnRyeS1uby1kZXBlbmRlbnRzXCIpICE9PVxyXG4gICAgXCJ0cnVlXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFAoZSA9IGRvY3VtZW50KSB7XHJcbiAgbGV0IHQgPSBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCh1KSkuZmlsdGVyKFQpLm1hcChlID0+IHtcclxuICAgIGxldCB0ID0gZSxcclxuICAgICAgciA9IFwiU0VMRUNUXCIgPT09IGUudGFnTmFtZSA/IEFycmF5LmZyb20oZS5vcHRpb25zKS5tYXAoZSA9PiAoe1xyXG4gICAgICAgIHZhbHVlOiBlLnZhbHVlLFxyXG4gICAgICAgIG5vcm1hbGl6ZWRUZXh0OiBtKGUudGV4dCB8fCBlLnRleHRDb250ZW50KSxcclxuICAgICAgICBzZWxlY3RlZDogZS5zZWxlY3RlZFxyXG4gICAgICB9KSkgOiBbXTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkZW50aXR5OiBrKGUpLFxyXG4gICAgICBub2RlSWRlbnRpdHk6IEkoZSksXHJcbiAgICAgIHRhZ05hbWU6IGUudGFnTmFtZSxcclxuICAgICAgdmlzaWJsZTogaihlKSxcclxuICAgICAgZGlzYWJsZWQ6ICEhdC5kaXNhYmxlZCxcclxuICAgICAgb3B0aW9uczogclxyXG4gICAgfVxyXG4gIH0pLnNvcnQoKGUsIHQpID0+IGUuaWRlbnRpdHkubG9jYWxlQ29tcGFyZSh0LmlkZW50aXR5KSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbnRyb2xzOiB0LFxyXG4gICAgbm9EZXBlbmRlbnRUZXJtaW5hbDogMCA9PT0gdC5sZW5ndGggJiYgRChlKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gXyhlKSB7XHJcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGUuY29udHJvbHMubWFwKCh7XHJcbiAgICBpZGVudGl0eTogZSxcclxuICAgIHRhZ05hbWU6IHQsXHJcbiAgICB2aXNpYmxlOiByLFxyXG4gICAgZGlzYWJsZWQ6IG4sXHJcbiAgICBvcHRpb25zOiBvXHJcbiAgfSkgPT4gKHtcclxuICAgIGlkZW50aXR5OiBlLFxyXG4gICAgdGFnTmFtZTogdCxcclxuICAgIHZpc2libGU6IHIsXHJcbiAgICBkaXNhYmxlZDogbixcclxuICAgIG9wdGlvbnM6IG9cclxuICB9KSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEwoZSkge1xyXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShlLmNvbnRyb2xzLm1hcCgoe1xyXG4gICAgaWRlbnRpdHk6IGUsXHJcbiAgICB0YWdOYW1lOiB0LFxyXG4gICAgdmlzaWJsZTogcixcclxuICAgIGRpc2FibGVkOiBuLFxyXG4gICAgb3B0aW9uczogb1xyXG4gIH0pID0+ICh7XHJcbiAgICBpZGVudGl0eTogZSxcclxuICAgIHRhZ05hbWU6IHQsXHJcbiAgICB2aXNpYmxlOiByLFxyXG4gICAgZGlzYWJsZWQ6IG4sXHJcbiAgICBvcHRpb25zOiBvLm1hcCgoe1xyXG4gICAgICB2YWx1ZTogZSxcclxuICAgICAgbm9ybWFsaXplZFRleHQ6IHRcclxuICAgIH0pID0+ICh7XHJcbiAgICAgIHZhbHVlOiBlLFxyXG4gICAgICBub3JtYWxpemVkVGV4dDogdFxyXG4gICAgfSkpXHJcbiAgfSkpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBSKGUpIHtcclxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZSlcclxufVxyXG5cclxuZnVuY3Rpb24gTyhlLCB0KSB7XHJcbiAgcmV0dXJuIGUuY29udHJvbHMubGVuZ3RoICE9PSB0LmNvbnRyb2xzLmxlbmd0aCB8fCB0LmNvbnRyb2xzLnNvbWUoKHQsIHIpID0+IHQubm9kZUlkZW50aXR5ICE9PSBlXHJcbiAgICAuY29udHJvbHNbcl0/Lm5vZGVJZGVudGl0eSlcclxufVxyXG5cclxuZnVuY3Rpb24gTShlKSB7XHJcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGUub3B0aW9ucy5tYXAoKHtcclxuICAgIHZhbHVlOiBlLFxyXG4gICAgbm9ybWFsaXplZFRleHQ6IHRcclxuICB9KSA9PiAoe1xyXG4gICAgdmFsdWU6IGUsXHJcbiAgICBub3JtYWxpemVkVGV4dDogdFxyXG4gIH0pKSlcclxufVxyXG5cclxuZnVuY3Rpb24gTihlLCB0KSB7XHJcbiAgbGV0IHIgPSBlLmNvbnRyb2xzLmZpbHRlcihlID0+IFwiU0VMRUNUXCIgPT09IGUudGFnTmFtZSk7XHJcbiAgcmV0dXJuIDAgPT09IHIubGVuZ3RoID8gTCh0KSAhPT0gTChlKSB8fCBPKGUsIHQpIDogci5ldmVyeShlID0+IHtcclxuICAgIGxldCByID0gdC5jb250cm9scy5maWx0ZXIodCA9PiB0LmlkZW50aXR5ID09PSBlLmlkZW50aXR5KTtcclxuICAgIGlmICgxICE9PSByLmxlbmd0aCkgcmV0dXJuICExO1xyXG4gICAgbGV0IG4gPSByWzBdO1xyXG4gICAgcmV0dXJuIE0obikgIT09IE0oZSlcclxuICB9KVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uICQoZSwgdCwgciA9IGRvY3VtZW50LCBuID0ge30pIHtcclxuICBsZXQgbyA9IE1hdGgubWF4KDEsIG4ubWF4QXR0ZW1wdHMgPz8gMTApLFxyXG4gICAgYSA9IE1hdGgubWF4KDAsIG4ucG9sbE1zID8/IDUwKSxcclxuICAgIGwgPSBfKGUpLFxyXG4gICAgcyA9IG51bGwsXHJcbiAgICB1ID0gMDtcclxuICBmb3IgKGxldCBjID0gMDsgYyA8IG87IGMrKykge1xyXG4gICAgKGMgPiAwIHx8IGEgPiAwKSAmJiBhd2FpdCAoMCwgaS5kZWxheSkoYSksIG4uY2hlY2twb2ludD8uKCk7XHJcbiAgICBsZXQgbyA9IFAociksXHJcbiAgICAgIGQgPSBfKG8pLFxyXG4gICAgICBmID0gMCA9PT0gZS5jb250cm9scy5sZW5ndGggJiYgMCA9PT0gby5jb250cm9scy5sZW5ndGggJiYgby5ub0RlcGVuZGVudFRlcm1pbmFsLFxyXG4gICAgICBwID0gZiB8fCBvLmNvbnRyb2xzLmxlbmd0aCA+IDAgJiYgKFwiY2hhbmdlZFwiID09PSB0ID8gTihlLCBvKSA6IGQgPT09IGwpO1xyXG4gICAgaWYgKCFwKSB7XHJcbiAgICAgIHMgPSBudWxsLCB1ID0gMDtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGxldCBtID0gUihvKTtcclxuICAgIGlmIChtID09PSBzKSB7XHJcbiAgICAgIGlmICgrK3UgPj0gMSkgcmV0dXJuICEwXHJcbiAgICB9IGVsc2UgcyA9IG0sIHUgPSAwXHJcbiAgfVxyXG4gIHJldHVybiAhMVxyXG59XHJcblxyXG5mdW5jdGlvbiBCKGUsIHQpIHtcclxuICBsZXQgciA9IEFycmF5LmZyb20oZS5vcHRpb25zKSxcclxuICAgIG4gPSB5KHIsIHQpO1xyXG4gIGlmICghbikgcmV0dXJuICExO1xyXG4gIGxldCBvID0gci5pbmRleE9mKG4pO1xyXG4gIHJldHVybiBvID49IDAgJiYgZS5zZWxlY3RlZEluZGV4ID09PSBvICYmIGUudmFsdWUgPT09IHJbb10udmFsdWUgJiYgcltvXS5zZWxlY3RlZFxyXG59XHJcblxyXG5mdW5jdGlvbiBxKGUsIHQpIHtcclxuICBsZXQgciA9IEFycmF5LmZyb20oZS5vcHRpb25zKTtcclxuICBlLnZhbHVlID0gclt0XS52YWx1ZSwgZS5zZWxlY3RlZEluZGV4ID0gdCwgci5mb3JFYWNoKChlLCByKSA9PiB7XHJcbiAgICBlLnNlbGVjdGVkID0gciA9PT0gdFxyXG4gIH0pLCBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwXHJcbiAgfSkpLCBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIiwge1xyXG4gICAgYnViYmxlczogITBcclxuICB9KSlcclxufVxyXG5cclxuZnVuY3Rpb24gVShlKSB7XHJcbiAgbGV0IHQgPSBlLm9wdGlvbnNbZS5zZWxlY3RlZEluZGV4XTtcclxuICByZXR1cm4gdCA/IHtcclxuICAgIHZhbHVlOiB0LnZhbHVlLFxyXG4gICAgbm9ybWFsaXplZFRleHQ6IG0odC50ZXh0IHx8IHQudGV4dENvbnRlbnQpXHJcbiAgfSA6IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gSChlLCB0KSB7XHJcbiAgbGV0IHIgPSBBcnJheS5mcm9tKGUub3B0aW9ucyk7XHJcbiAgaWYgKHQudmFsdWUpIHtcclxuICAgIGxldCBlID0gci5yZWR1Y2UoKGUsIHIsIG4pID0+IChyLnZhbHVlID09PSB0LnZhbHVlICYmIGUucHVzaChuKSwgZSksIFtdKTtcclxuICAgIGlmICgxID09PSBlLmxlbmd0aCkgcmV0dXJuIGVbMF1cclxuICB9XHJcbiAgbGV0IG4gPSByLnJlZHVjZSgoZSwgciwgbikgPT4gKG0oci50ZXh0IHx8IHIudGV4dENvbnRlbnQpID09PSB0Lm5vcm1hbGl6ZWRUZXh0ICYmIGUucHVzaChuKSwgZSksXHJcbiAgW10pO1xyXG4gIHJldHVybiAxID09PSBuLmxlbmd0aCA/IG5bMF0gOiAtMVxyXG59XHJcblxyXG5mdW5jdGlvbiBZKGUsIHQpIHtcclxuICBsZXQgciA9IEgoZSwgdCk7XHJcbiAgcmV0dXJuICEociA8IDApICYmIGUuc2VsZWN0ZWRJbmRleCA9PT0gciAmJiBlLnZhbHVlID09PSBlLm9wdGlvbnNbcl0udmFsdWUgJiYgZS5vcHRpb25zW3JdXHJcbiAgICAuc2VsZWN0ZWRcclxufVxyXG5hc3luYyBmdW5jdGlvbiB6KGUsIHQsIHIsIG4sIG8sIGEpIHtcclxuICBpZiAoIWUpIHJldHVybiAhMTtcclxuICBsZXQgbCA9IEModCkgPz8gcixcclxuICAgIHMgPSBIKGwsIGUpO1xyXG4gIGlmIChzIDwgMCkgcmV0dXJuICExO1xyXG4gIHEobCwgcyk7XHJcbiAgbGV0IHUgPSAwO1xyXG4gIGZvciAobGV0IHIgPSAwOyByIDwgbjsgcisrKSB7XHJcbiAgICAociA+IDAgfHwgbyA+IDApICYmIGF3YWl0ICgwLCBpLmRlbGF5KShvKSwgYT8uKCk7XHJcbiAgICBsZXQgbCA9IEModCk7XHJcbiAgICBpZiAobCAmJiBZKGwsIGUpKSB7XHJcbiAgICAgIGlmICgrK3UgPj0gTWF0aC5taW4oMiwgbikpIHJldHVybiAhMFxyXG4gICAgfSBlbHNlIHUgPSAwXHJcbiAgfVxyXG4gIHJldHVybiAhMVxyXG59XHJcblxyXG5mdW5jdGlvbiBWKGUsIHQsIHIgPSB7fSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBkaXNjb3Zlcnk6IGUsXHJcbiAgICBjb21taXR0ZWQ6ICExLFxyXG4gICAgZGVwZW5kZW50c1NldHRsZWQ6ICExLFxyXG4gICAgZGVwZW5kZW50QmFzZWxpbmU6IHQsXHJcbiAgICBkZXBlbmRlbnRFeHBlY3RhdGlvbjogXCJjdXJyZW50XCIsXHJcbiAgICBjaGFuZ2VkOiAhMSxcclxuICAgIC4uLnJcclxuICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gVyhlLCB0ID0gZG9jdW1lbnQsIHIgPSB7fSkge1xyXG4gIGxldCBuID0gRSh0KSxcclxuICAgIG8gPSAwID09PSBuLmxlbmd0aCA/IFwibWlzc2luZ1wiIDogMSA9PT0gbi5sZW5ndGggPyBcInVuaXF1ZVwiIDogXCJhbWJpZ3VvdXNcIixcclxuICAgIGEgPSByLmRlcGVuZGVudEJhc2VsaW5lID8/IFAodCksXHJcbiAgICBsID0gTWF0aC5tYXgoMSwgci5tYXhBdHRlbXB0cyA/PyAxMCksXHJcbiAgICBzID0gTWF0aC5tYXgoMCwgci5wb2xsTXMgPz8gNTApO1xyXG4gIGlmIChcInVuaXF1ZVwiICE9PSBvKSByZXR1cm4gY29uc29sZS53YXJuKFwibWlzc2luZ1wiID09PSBvID9cclxuICAgIFwiW0FwcGxlXVtDb3VudHJ5XSBza2lwcGVkOiBtYWluIGdlb2dyYXBoaWMgQ291bnRyeSBzZWxlY3QgaXMgbWlzc2luZ1wiIDpcclxuICAgIFwiW0FwcGxlXVtDb3VudHJ5XSBza2lwcGVkOiBtYWluIGdlb2dyYXBoaWMgQ291bnRyeSBzZWxlY3QgaXMgYW1iaWd1b3VzXCIpLCBWKG8sIGEpO1xyXG4gIGxldCB1ID0gblswXSxcclxuICAgIGMgPSBnKGUpO1xyXG4gIGlmICghbShlKSkgcmV0dXJuIGNvbnNvbGUud2FybihcIltBcHBsZV1bQ291bnRyeV0gc2tpcHBlZDogZnJlc2ggQUZJIGNvdW50cnkgaXMgZW1wdHlcIiksIFYobyxcclxuICBhLCB7XHJcbiAgICBmYWlsdXJlUmVhc29uOiBcImNvdW50cnktZW1wdHlcIixcclxuICAgIGRlcGVuZGVudHNTZXR0bGVkOiBhd2FpdCAkKGEsIFwiY3VycmVudFwiLCB0LCB7XHJcbiAgICAgIG1heEF0dGVtcHRzOiBsLFxyXG4gICAgICBwb2xsTXM6IHMsXHJcbiAgICAgIGNoZWNrcG9pbnQ6IHIuY2hlY2twb2ludFxyXG4gICAgfSlcclxuICB9KTtcclxuICBpZiAoIWMpIHJldHVybiBjb25zb2xlLndhcm4oXCJbQXBwbGVdW0NvdW50cnldIHNraXBwZWQ6IGZyZXNoIEFGSSBjb3VudHJ5IGlzIHVucmVzb2x2ZWRcIiksIFYobyxcclxuICAgIGEsIHtcclxuICAgICAgZmFpbHVyZVJlYXNvbjogXCJjb3VudHJ5LXVucmVzb2x2ZWRcIixcclxuICAgICAgZGVwZW5kZW50c1NldHRsZWQ6IGF3YWl0ICQoYSwgXCJjdXJyZW50XCIsIHQsIHtcclxuICAgICAgICBtYXhBdHRlbXB0czogbCxcclxuICAgICAgICBwb2xsTXM6IHMsXHJcbiAgICAgICAgY2hlY2twb2ludDogci5jaGVja3BvaW50XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICBsZXQgZCA9IEFycmF5LmZyb20odS5vcHRpb25zKSxcclxuICAgIGYgPSB2KGQsIGMuY29kZSk7XHJcbiAgaWYgKDEgIT09IGYubGVuZ3RoKSB7XHJcbiAgICBsZXQgZSA9IGYubGVuZ3RoID4gMTtcclxuICAgIHJldHVybiBjb25zb2xlLndhcm4oZSA/IFwiW0FwcGxlXVtDb3VudHJ5XSBza2lwcGVkOiBsaXZlIG9wdGlvbiBtYXRjaCBpcyBhbWJpZ3VvdXNcIiA6XHJcbiAgICAgIFwiW0FwcGxlXVtDb3VudHJ5XSBza2lwcGVkOiBubyBleGFjdCBsaXZlIG9wdGlvbiBtYXRjaFwiKSwgVihvLCBhLCB7XHJcbiAgICAgIGZhaWx1cmVSZWFzb246IGUgPyBcIm9wdGlvbi1hbWJpZ3VvdXNcIiA6IFwib3B0aW9uLXVubWF0Y2hlZFwiLFxyXG4gICAgICBkZXBlbmRlbnRzU2V0dGxlZDogYXdhaXQgJChhLCBcImN1cnJlbnRcIiwgdCwge1xyXG4gICAgICAgIG1heEF0dGVtcHRzOiBsLFxyXG4gICAgICAgIHBvbGxNczogcyxcclxuICAgICAgICBjaGVja3BvaW50OiByLmNoZWNrcG9pbnRcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGxldCBwID0gZlswXTtcclxuICBpZiAoQih1LCBjLmNvZGUpKSByZXR1cm4gVihvLCBhLCB7XHJcbiAgICBjb21taXR0ZWQ6ICEwLFxyXG4gICAgZGVwZW5kZW50c1NldHRsZWQ6IGF3YWl0ICQoYSwgXCJjdXJyZW50XCIsIHQsIHtcclxuICAgICAgbWF4QXR0ZW1wdHM6IGwsXHJcbiAgICAgIHBvbGxNczogcyxcclxuICAgICAgY2hlY2twb2ludDogci5jaGVja3BvaW50XHJcbiAgICB9KVxyXG4gIH0pO1xyXG4gIGxldCBoID0gZC5pbmRleE9mKHApLFxyXG4gICAgYiA9IFUodSk7XHJcbiAgaWYgKGggPCAwIHx8ICFiKSByZXR1cm4gVihvLCBhLCB7XHJcbiAgICBmYWlsdXJlUmVhc29uOiBcIm9wdGlvbi11bm1hdGNoZWRcIlxyXG4gIH0pO1xyXG4gIHIuY2hlY2twb2ludD8uKCksIHEodSwgaCk7XHJcbiAgbGV0IHkgPSAwO1xyXG4gIGZvciAobGV0IGUgPSAwOyBlIDwgbDsgZSsrKSB7XHJcbiAgICAoZSA+IDAgfHwgcyA+IDApICYmIGF3YWl0ICgwLCBpLmRlbGF5KShzKSwgci5jaGVja3BvaW50Py4oKTtcclxuICAgIGxldCBuID0gQyh0KTtcclxuICAgIGlmIChuICYmIEIobiwgYy5jb2RlKSkge1xyXG4gICAgICBpZiAoKyt5ID49IE1hdGgubWluKDIsIGwpKSByZXR1cm4gVihvLCBhLCB7XHJcbiAgICAgICAgY29tbWl0dGVkOiAhMCxcclxuICAgICAgICBjaGFuZ2VkOiAhMCxcclxuICAgICAgICBkZXBlbmRlbnRFeHBlY3RhdGlvbjogXCJjaGFuZ2VkXCIsXHJcbiAgICAgICAgZGVwZW5kZW50c1NldHRsZWQ6IGF3YWl0ICQoYSwgXCJjaGFuZ2VkXCIsIHQsIHtcclxuICAgICAgICAgIG1heEF0dGVtcHRzOiBsLFxyXG4gICAgICAgICAgcG9sbE1zOiBzLFxyXG4gICAgICAgICAgY2hlY2twb2ludDogci5jaGVja3BvaW50XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB5ID0gMFxyXG4gIH1cclxuICByLmNoZWNrcG9pbnQ/LigpO1xyXG4gIGxldCB3ID0gYXdhaXQgeihiLCB0LCB1LCBsLCBzLCByLmNoZWNrcG9pbnQpO1xyXG4gIGlmICghdykgcmV0dXJuIGNvbnNvbGUud2FybihcclxuICAgIFwiW0FwcGxlXVtDb3VudHJ5XSBmYWlsZWQ6IGNvbW1pdHRlZCBzdGF0ZSBkaWQgbm90IHN0YWJpbGl6ZTsgcm9sbGJhY2sgZmFpbGVkXCIpLCBWKG8sIGEsIHtcclxuICAgIGNoYW5nZWQ6ICEwLFxyXG4gICAgZmFpbHVyZVJlYXNvbjogXCJyb2xsYmFjay1mYWlsZWRcIixcclxuICAgIHJvbGxiYWNrU3VjY2VlZGVkOiAhMVxyXG4gIH0pO1xyXG4gIGxldCBTID0gYXdhaXQgJChhLCBcInJvbGxiYWNrXCIsIHQsIHtcclxuICAgIG1heEF0dGVtcHRzOiBsLFxyXG4gICAgcG9sbE1zOiBzLFxyXG4gICAgY2hlY2twb2ludDogci5jaGVja3BvaW50XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNvbnNvbGUud2FybihcclxuICAgIFwiW0FwcGxlXVtDb3VudHJ5XSBmYWlsZWQ6IGNvbW1pdHRlZCBzdGF0ZSBkaWQgbm90IHN0YWJpbGl6ZTsgc2VsZWN0aW9uIHJlc3RvcmVkXCIpLCBWKG8sIGEsIHtcclxuICAgIGNoYW5nZWQ6ICEwLFxyXG4gICAgZGVwZW5kZW50RXhwZWN0YXRpb246IFwicm9sbGJhY2tcIixcclxuICAgIGRlcGVuZGVudHNTZXR0bGVkOiBTLFxyXG4gICAgZmFpbHVyZVJlYXNvbjogXCJjb21taXQtcmVqZWN0ZWRcIixcclxuICAgIHJvbGxiYWNrU3VjY2VlZGVkOiAhMFxyXG4gIH0pXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJjb3VudHJ5LjQzMTQyODI5LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);