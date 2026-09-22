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
})({"5cBMn":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\successfactors.js",
    "bundleId": "06936367f0f66f01",
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
var j = z(require("efdaf8a72a512e91"));
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

},{"efdaf8a72a512e91":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"7ohGg":[function(require,module,exports) {
/**
 * Parcel module id: gzsfs
 * Resolved path: src/contents/sites/successfactors.js
 * Dependencies:
 *   ./answer -> lBZzA  =>  src/contents/sites/successfactors/answer.js
 *   ./operations -> eGv5O  =>  src/contents/sites/successfactors/operations.js
 *   ./registration-credentials -> kjnz7  =>  src/contents/sites/successfactors/registration-credentials.js
 *   ./registration-privacy -> a7WCJ  =>  src/contents/sites/successfactors/registration-privacy.js
 *   ./rules -> 6S3gu  =>  src/contents/sites/successfactors/rules.js
 *   ./signin-credentials -> bCEw5  =>  src/contents/sites/successfactors/signin-credentials.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~api/autofill-signup-information -> 52vOt  =>  src/api/autofill-signup-information.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/rules -> 3cWKC  =>  src/contents/methods/rules.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "SuccessFactors", ()=>C);
var o = e("@plasmohq/messaging"), i = e("~api/autofill-signup-information"), a = e("~contents/methods/answer"), l = e("~contents/methods/cancellation"), s = e("~contents/methods/rules"), u = e("~contents/methods/track"), c = e("~contents/sites/base-filler"), d = e("~core/enums"), f = e("~core/dom"), p = e("~core/xpath"), m = e("~utils/delay"), h = e("./answer"), g = e("./operations"), b = e("~contents/methods/dom"), y = e("./registration-credentials"), v = e("./registration-privacy"), w = e("./rules"), S = e("./signin-credentials");
let E = "successfactors";
function x(e1) {
    return e1.label?.replace(/[*:]/g, " ").replace(/\s+/g, " ").trim().toLowerCase() === "country";
}
class C extends c.BaseFiller {
    constructor(){
        super(), this.cachedRules = null, this.cachedRulesPageSignature = null, this.nextButtonHandler = null;
    }
    async doFillForm(e1 = !1) {
        if ((0, S.findSuccessFactorsSignInFields)()) {
            this.resetFalconResponseAccumulator(), this.answer = {
                education: [],
                workExperience: [],
                skills: [],
                regular: {}
            }, this.cachedRules = null, this.cachedRulesPageSignature = null, this.timeTrace = {
                rulesParseStartTime: Date.now(),
                requestStartTime: 0,
                fillStartTime: 0
            }, this.progressTracker.clear(), this.taskQueue.clear();
            let [e1, t] = await Promise.all([
                (0, o.sendToBackground)({
                    name: "getAutofillInfo",
                    body: {
                        forceRefresh: !0
                    }
                }).catch(()=>null),
                (0, y.loadSuccessFactorsRegistrationPassword)()
            ]);
            (0, l.checkpoint)();
            let r1 = await (0, S.fillSuccessFactorsSignInCredentials)({
                email: (0, i.resolveSignupRegistrationEmail)(e1),
                password: t
            });
            for (let e1 of (this.progressTracker.setFieldsRequiredStatus([
                {
                    label: "Email",
                    required: !0
                },
                {
                    label: "Password",
                    required: !0
                }
            ]), [
                "email",
                "password"
            ])){
                let t = "email" === e1 ? "Email" : "Password";
                r1.filledRoles.includes(e1) || r1.skippedExistingRoles.includes(e1) ? this.progressTracker.updateFilledProgress(t) : this.progressTracker.updateMissedProgress(t);
            }
            return super.finalizeFillForm();
        }
        await this.initializeFillForm(), await this.handleResumeUpload(), await this.runPreFillForm();
        let t = null;
        if ((0, y.findSuccessFactorsRegistrationEmailFields)().section) {
            let e1 = await (0, o.sendToBackground)({
                name: "getAutofillInfo",
                body: {
                    forceRefresh: !0
                }
            }).catch(()=>null);
            (0, l.checkpoint)(), t = await (0, y.fillSuccessFactorsRegistrationEmails)({
                email: (0, i.resolveSignupRegistrationEmail)(e1)
            });
        }
        let r1 = (0, y.findSuccessFactorsRegistrationPasswordFields)();
        if (r1.section) {
            let e1 = await (0, y.loadSuccessFactorsRegistrationPassword)(), t = await (0, y.fillSuccessFactorsRegistrationPasswords)({
                password: e1
            });
            console.info("[SuccessFactorsRegistrationCredentials]", JSON.stringify({
                foundSection: t.foundSection,
                foundRoleCount: t.foundRoles.length,
                filledRoleCount: t.filledRoles.length,
                skippedExistingRoleCount: t.skippedExistingRoles.length,
                rejectedRoleCount: t.rejectedRoles.length
            }));
        }
        let n = await this.extractFormRules();
        if (this.progressTracker.setFieldsRequiredStatus(n), this.restoreResumeProgressAfterRulesRefresh(), t?.foundSection) for (let e1 of t.foundRoles){
            let r1 = "email" === e1 ? "Email Address:" : "Retype Email Address:";
            this.progressTracker.updateFieldRequiredStatus({
                label: r1,
                required: !0
            }), t.filledRoles.includes(e1) ? this.progressTracker.updateFilledProgress(r1) : this.progressTracker.updateMissedProgress(r1);
        }
        let a = this.preprocessRulesForAnswer(n), s = await this.fetchFormAnswers(a, e1);
        if ("string" == typeof s) return s;
        let u = await this.fillCountryFromProfile();
        await this.fillEducationAndEmployment(n), await this.fillRegularFields(this.cachedRules ?? n, {
            skipProfileCountry: u
        }), await this.executeSiteSpecificSteps(n);
        let c = await (0, v.acceptSuccessFactorsRegistrationPrivacy)();
        return c.foundRegistrationForm && console.info("[SuccessFactorsRegistrationPrivacy]", JSON.stringify(c)), await this.finalizeFillForm();
    }
    getFieldHandlers() {
        return {
            [d.FIELD_TYPE.TEXT]: (e1, t)=>{
                let r1 = t?.[0];
                if (r1) return (0, g.fillInputTextField)(e1.$input, String(r1 ?? ""));
            },
            [d.FIELD_TYPE.SELECT]: (e1, t)=>(0, g.fillSelectField)(e1, t),
            [d.FIELD_TYPE.CHECKBOX]: (e1, t)=>(0, g.fillCheckboxField)(e1, t),
            [d.FIELD_TYPE.RADIOGROUP]: (e1, t)=>(0, g.fillRadioGroupFiled)(e1, t),
            [d.FIELD_TYPE.EDUCATION]: (e1, t)=>(0, g.fillSelectField)(e1, t),
            [d.FIELD_TYPE.EMPLOYMENT]: (e1, t)=>(0, g.fillSelectField)(e1, t)
        };
    }
    async runPreFillForm() {
        await (0, g.preclickAddButtons)(), await (0, m.delay)(500);
    }
    async extractFormRules() {
        let e1 = this.getCurrentPageSignature();
        return this.cachedRulesPageSignature !== e1 && (this.cachedRules = null, this.cachedRulesPageSignature = e1), this.cachedRules || (this.cachedRules = await (0, w.extractRules)()), this.cachedRules;
    }
    getCurrentPageSignature() {
        let e1 = "undefined" == typeof window ? "" : window.location?.href || "", t = !!document.querySelector(".profileUpperLayout"), r1 = !!document.querySelector("#questions"), n = document.querySelector("#apply-profileInformation-form, #questions, .profileUpperLayout, .profileLowerLayout, form, main"), o = [
            n?.id,
            n?.getAttribute("aria-label"),
            n?.className
        ].filter(Boolean).join("|");
        return [
            e1,
            t ? "profile" : "",
            r1 ? "questions" : "",
            o
        ].join("::");
    }
    preprocessRulesForAnswer(e1) {
        return (0, w.prepareSuccessFactorsRulesForAnswer)(e1);
    }
    restoreResumeProgressAfterRulesRefresh() {
        let e1 = this.progressTracker.fieldStatus.filledFields.includes("Resume/CV") || this.progressTracker.fieldStatus.missingFields.includes("Resume/CV");
        e1 && this.progressTracker.updateFieldRequiredStatus({
            label: "Resume/CV",
            required: !0,
            type: "file"
        });
    }
    async fetchFormAnswers(e1, t) {
        try {
            this.token || (this.token = await (0, a.getSiteToken)());
            let r1 = (0, s.filterRulesByLabel)(e1, []), n = this.captureFalconResponseRun(), o = await (0, a.getElementRules)(r1, E, this.token, t, this.resumeInfo?.id, this.resumeInfo?.tailorId);
            this.recordFalconResponse(o, n), this.answer = (0, h.formatAnswer)(o), this.timeTrace.fillStartTime = Date.now();
        } catch (e1) {
            if (e1 instanceof a.HTTPError || e1 instanceof a.ResumeMissingCodeError) return (0, u.sendHttpStatusMessage)(e1.message), e1.message;
        }
        (0, l.checkpoint)();
    }
    async fillRegularFields(e1, t = {}) {
        let r1 = e1.filter((e1)=>e1.type !== d.FIELD_TYPE.EDUCATION && e1.type !== d.FIELD_TYPE.EMPLOYMENT && !(t.skipProfileCountry && x(e1))), n = (0, a.getRegularOperations)(r1, this.answer.regular, this.operationConfig).map((e1)=>async ()=>{
                try {
                    await e1();
                } catch (e1) {
                    console.warn("Error filling field:", e1);
                }
            });
        for (let e1 of n)this.taskQueue.add(e1);
        await this.taskQueue.run();
    }
    async fillCountryFromProfile() {
        let e1 = this.answer?.country;
        if (null == e1 || "" === String(e1).trim()) return !1;
        let t = (0, p.getFirstOrderedNode)("//input[@aria-label='Country' or @aria-label='Country:']", document);
        if (!t) return !1;
        let r1 = await (0, g.fillCountryCombobox)(t, String(e1).trim());
        return r1 ? (this.progressTracker.updateFilledProgress("Country"), !0) : (this.progressTracker.updateMissedProgress("Country"), !1);
    }
    async fillEducationAndEmployment(e1) {
        this.answer && (await (0, g.expandForm)(this.answer), await (0, m.delay)(500), this.cachedRules = await (0, w.extractRules)());
        let t = this.cachedRules || e1, r1 = t.filter((e1)=>e1.type === d.FIELD_TYPE.EDUCATION), n = t.filter((e1)=>e1.type === d.FIELD_TYPE.EMPLOYMENT), o = this.getSectionProgressLabel(n, "Employment"), i = this.getSectionProgressLabel(r1, "Education");
        if (this.answer && (r1.length > 0 || n.length > 0)) {
            (0, f.setSectionResultFocusRules)("employment", n);
            let e1 = (0, a.getEmploymentOperations)(n, this.answer.workExperience, this.operationConfig, void 0, {
                onSectionResultChanged: this.progressTracker.updateSectionResult,
                onCompleted: ()=>{
                    n.length > 0 && this.progressTracker.updateFilledProgress(o);
                },
                onSkipped: ()=>this.progressTracker.updateMissedProgress(o)
            });
            (0, f.setSectionResultFocusRules)("education", r1);
            let t = (0, a.getEducationOperations)(r1, this.answer.education, this.operationConfig, void 0, {
                onSectionResultChanged: this.progressTracker.updateSectionResult,
                onCompleted: ()=>{
                    r1.length > 0 && this.progressTracker.updateFilledProgress(i);
                },
                onSkipped: ()=>this.progressTracker.updateMissedProgress(i)
            }), l = [
                ...e1,
                ...t
            ];
            for (let e1 of l)this.taskQueue.add(e1);
            await this.taskQueue.run();
        }
    }
    getSectionProgressLabel(e1, t) {
        return e1.find((e1)=>e1.label?.trim())?.label?.trim() || t;
    }
    async handleResumeUpload() {
        if (this.resumeInfo && (0, g.hasSuccessFactorsResumeUploadSurface)()) {
            let e1 = (0, g.captureSuccessFactorsExperienceRows)();
            try {
                await (0, g.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress), await (0, g.cleanupSuccessFactorsParsedExperienceRows)(e1);
            } catch  {
                this.progressTracker.updateMissedProgress("Resume/CV");
            }
        }
    }
    async checkCoverLetter() {
        (0, b.postCoverLetterStatus)((0, g.getSuccessFactorsCoverLetterStatus)());
    }
    async executeSiteSpecificSteps(e1) {
        await (0, g.fillSkills)(this.answer);
        let t = (0, g.getSuccessFactorsCoverLetterStatus)();
        if (t && this.progressTracker.updateFieldRequiredStatus({
            label: "Cover Letter",
            required: "required" === t
        }), this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName) {
            let e1 = await (0, g.uploadCoverLetter)({
                coverLetterId: this.coverLetter.coverLetterId,
                coverLetterName: this.coverLetter.coverLetterName,
                markdown: this.coverLetter.markdown,
                useLegacyDownload: this.coverLetter.useLegacyDownload
            }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
            e1 || "required" !== t || this.progressTracker.updateMissedProgress("Cover Letter");
        } else "required" === t && this.progressTracker.updateMissedProgress("Cover Letter");
        [
            "mousedown",
            "mouseup",
            "click"
        ].forEach((e1)=>{
            document.dispatchEvent(new MouseEvent(e1, {
                bubbles: !0
            }));
        }), await super.executeSiteSpecificSteps(e1);
    }
    getSubmitTrackingDelegationRoot() {
        return document;
    }
    resolveDelegatedSubmitButton(e1) {
        let t = "BUTTON" === e1.tagName ? e1 : e1.closest("button");
        if (t) {
            let e1 = t.textContent?.trim().toLowerCase() || "", r1 = "Next" === t.getAttribute("title") && "Next" === t.getAttribute("name") && "button" === t.getAttribute("type") || "submit" === t.getAttribute("type") && "apply" === t.getAttribute("value") || e1.includes("apply");
            return r1 ? t : null;
        }
        let r1 = "button" === e1.getAttribute("role") && e1.getAttribute("id")?.includes("submitBtn") && (e1.textContent?.toLowerCase().includes("apply") ?? !1);
        return r1 ? e1 : null;
    }
    getSiteName() {
        return "successfactors";
    }
    async getAutofillSnapshot(e1) {
        return await (0, w.getFormSnapshot)();
    }
    async getSubmitSnapshot() {
        return (0, w.getFormSnapshot)();
    }
    getAdditionalAutofillSnapshotData(e1) {
        return (0, w.getAdditionalFormSnapshotData)();
    }
    getAdditionalSubmitSnapshotData() {
        return (0, w.getAdditionalFormSnapshotData)();
    }
    submitApplication() {
        let e1 = './/button[@type="submit" or contains(@class, "submit")]', t = (0, p.getFirstOrderedNode)(e1);
        t && t?.click();
    }
    finalizeFillForm() {
        let e1 = (0, w.getFormSnapshot)(), t = (0, w.getAdditionalFormSnapshotData)(), r1 = document.querySelector('button[title="Next"][name="Next"][type="button"]');
        return r1 && (this.nextButtonHandler && r1.removeEventListener("click", this.nextButtonHandler), this.nextButtonHandler = (0, g.submitHandler).bind(null, e1, t), r1.addEventListener("click", this.nextButtonHandler)), super.finalizeFillForm();
    }
}

},{}]},["5cBMn","7ohGg"], "7ohGg", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUcsRUFBRSxlQUFjLEtBQzFCLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSw2QkFBNEIsS0FDdEMsS0FBSSxTQUFTLGNBQWM7UUFDN0IsT0FBTyxNQUFNLENBQUEsSUFBSSxDQUFDLHFCQUFxQixHQUFFLG9CQUFvQixTQUFTLElBQUksQ0FDckUsb0JBQW9CLElBQUksQ0FBQyxvQkFBb0IsQUFBQyxDQUFBLEdBQUcsRUFBRSxhQUFZLEVBQUcsS0FBSyxNQUFNLElBQUcsSUFBSSxHQUN0RixpQkFBaUIsU0FBUyxJQUFJLENBQUMsa0JBQWlCLEdBQUksS0FBSyxDQUFDO0lBQy9EO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLWZjNGQwMGQ1OTM3MzE2ZGEuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvc3VjY2Vzc2ZhY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcc3VjY2Vzc2ZhY3RvcnMuanNcIixcImJ1bmRsZUlkXCI6XCIwNjkzNjM2N2YwZjY2ZjAxXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogZ3pzZnNcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL3N1Y2Nlc3NmYWN0b3JzLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9hbnN3ZXIgLT4gbEJaekEgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvc3VjY2Vzc2ZhY3RvcnMvYW5zd2VyLmpzXHJcbiAqICAgLi9vcGVyYXRpb25zIC0+IGVHdjVPICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3N1Y2Nlc3NmYWN0b3JzL29wZXJhdGlvbnMuanNcclxuICogICAuL3JlZ2lzdHJhdGlvbi1jcmVkZW50aWFscyAtPiBram56NyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9zdWNjZXNzZmFjdG9ycy9yZWdpc3RyYXRpb24tY3JlZGVudGlhbHMuanNcclxuICogICAuL3JlZ2lzdHJhdGlvbi1wcml2YWN5IC0+IGE3V0NKICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3N1Y2Nlc3NmYWN0b3JzL3JlZ2lzdHJhdGlvbi1wcml2YWN5LmpzXHJcbiAqICAgLi9ydWxlcyAtPiA2UzNndSAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9zdWNjZXNzZmFjdG9ycy9ydWxlcy5qc1xyXG4gKiAgIC4vc2lnbmluLWNyZWRlbnRpYWxzIC0+IGJDRXc1ICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3N1Y2Nlc3NmYWN0b3JzL3NpZ25pbi1jcmVkZW50aWFscy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgQHBsYXNtb2hxL21lc3NhZ2luZyAtPiA5Mkd5QiAgPT4gIEBwbGFzbW9ocS9tZXNzYWdpbmcuanNcclxuICogICB+YXBpL2F1dG9maWxsLXNpZ251cC1pbmZvcm1hdGlvbiAtPiA1MnZPdCAgPT4gIHNyYy9hcGkvYXV0b2ZpbGwtc2lnbnVwLWluZm9ybWF0aW9uLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyIC0+IDdUNWVXICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvYW5zd2VyLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uIC0+IGx1SmZzICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvZG9tIC0+IGhBNVFhICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvZG9tLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvcnVsZXMgLT4gM2NXS0MgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9ydWxlcy5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL3RyYWNrIC0+IGg0NzliICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvdHJhY2suanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIgLT4gOHhqNkYgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIuanNcclxuICogICB+Y29yZS9kb20gLT4gaExNSlggID0+ICBzcmMvY29yZS9kb20uanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiU3VjY2Vzc0ZhY3RvcnNcIiwgKCkgPT4gQyk7XHJcbnZhciBvID0gZShcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIiksXHJcbiAgaSA9IGUoXCJ+YXBpL2F1dG9maWxsLXNpZ251cC1pbmZvcm1hdGlvblwiKSxcclxuICBhID0gZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxcclxuICBsID0gZShcIn5jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvblwiKSxcclxuICBzID0gZShcIn5jb250ZW50cy9tZXRob2RzL3J1bGVzXCIpLFxyXG4gIHUgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvdHJhY2tcIiksXHJcbiAgYyA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXJcIiksXHJcbiAgZCA9IGUoXCJ+Y29yZS9lbnVtc1wiKSxcclxuICBmID0gZShcIn5jb3JlL2RvbVwiKSxcclxuICBwID0gZShcIn5jb3JlL3hwYXRoXCIpLFxyXG4gIG0gPSBlKFwifnV0aWxzL2RlbGF5XCIpLFxyXG4gIGggPSBlKFwiLi9hbnN3ZXJcIiksXHJcbiAgZyA9IGUoXCIuL29wZXJhdGlvbnNcIiksXHJcbiAgYiA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9kb21cIiksXHJcbiAgeSA9IGUoXCIuL3JlZ2lzdHJhdGlvbi1jcmVkZW50aWFsc1wiKSxcclxuICB2ID0gZShcIi4vcmVnaXN0cmF0aW9uLXByaXZhY3lcIiksXHJcbiAgdyA9IGUoXCIuL3J1bGVzXCIpLFxyXG4gIFMgPSBlKFwiLi9zaWduaW4tY3JlZGVudGlhbHNcIik7XHJcbmxldCBFID0gXCJzdWNjZXNzZmFjdG9yc1wiO1xyXG5cclxuZnVuY3Rpb24geChlKSB7XHJcbiAgcmV0dXJuIGUubGFiZWw/LnJlcGxhY2UoL1sqOl0vZywgXCIgXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBcImNvdW50cnlcIlxyXG59XHJcbmNsYXNzIEMgZXh0ZW5kcyBjLkJhc2VGaWxsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKSwgdGhpcy5jYWNoZWRSdWxlcyA9IG51bGwsIHRoaXMuY2FjaGVkUnVsZXNQYWdlU2lnbmF0dXJlID0gbnVsbCwgdGhpc1xyXG4gICAgICAubmV4dEJ1dHRvbkhhbmRsZXIgPSBudWxsXHJcbiAgfVxyXG4gIGFzeW5jIGRvRmlsbEZvcm0oZSA9ICExKSB7XHJcbiAgICBpZiAoKDAsIFMuZmluZFN1Y2Nlc3NGYWN0b3JzU2lnbkluRmllbGRzKSgpKSB7XHJcbiAgICAgIHRoaXMucmVzZXRGYWxjb25SZXNwb25zZUFjY3VtdWxhdG9yKCksIHRoaXMuYW5zd2VyID0ge1xyXG4gICAgICAgIGVkdWNhdGlvbjogW10sXHJcbiAgICAgICAgd29ya0V4cGVyaWVuY2U6IFtdLFxyXG4gICAgICAgIHNraWxsczogW10sXHJcbiAgICAgICAgcmVndWxhcjoge31cclxuICAgICAgfSwgdGhpcy5jYWNoZWRSdWxlcyA9IG51bGwsIHRoaXMuY2FjaGVkUnVsZXNQYWdlU2lnbmF0dXJlID0gbnVsbCwgdGhpcy50aW1lVHJhY2UgPSB7XHJcbiAgICAgICAgcnVsZXNQYXJzZVN0YXJ0VGltZTogRGF0ZS5ub3coKSxcclxuICAgICAgICByZXF1ZXN0U3RhcnRUaW1lOiAwLFxyXG4gICAgICAgIGZpbGxTdGFydFRpbWU6IDBcclxuICAgICAgfSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIuY2xlYXIoKSwgdGhpcy50YXNrUXVldWUuY2xlYXIoKTtcclxuICAgICAgbGV0IFtlLCB0XSA9IGF3YWl0IFByb21pc2UuYWxsKFsoMCwgby5zZW5kVG9CYWNrZ3JvdW5kKSh7XHJcbiAgICAgICAgbmFtZTogXCJnZXRBdXRvZmlsbEluZm9cIixcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICBmb3JjZVJlZnJlc2g6ICEwXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaCgoKSA9PiBudWxsKSwgKDAsIHkubG9hZFN1Y2Nlc3NGYWN0b3JzUmVnaXN0cmF0aW9uUGFzc3dvcmQpKCldKTtcclxuICAgICAgKDAsIGwuY2hlY2twb2ludCkoKTtcclxuICAgICAgbGV0IHIgPSBhd2FpdCAoMCwgUy5maWxsU3VjY2Vzc0ZhY3RvcnNTaWduSW5DcmVkZW50aWFscykoe1xyXG4gICAgICAgIGVtYWlsOiAoMCwgaS5yZXNvbHZlU2lnbnVwUmVnaXN0cmF0aW9uRW1haWwpKGUpLFxyXG4gICAgICAgIHBhc3N3b3JkOiB0XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IgKGxldCBlIG9mICh0aGlzLnByb2dyZXNzVHJhY2tlci5zZXRGaWVsZHNSZXF1aXJlZFN0YXR1cyhbe1xyXG4gICAgICAgICAgbGFiZWw6IFwiRW1haWxcIixcclxuICAgICAgICAgIHJlcXVpcmVkOiAhMFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGxhYmVsOiBcIlBhc3N3b3JkXCIsXHJcbiAgICAgICAgICByZXF1aXJlZDogITBcclxuICAgICAgICB9XSksIFtcImVtYWlsXCIsIFwicGFzc3dvcmRcIl0pKSB7XHJcbiAgICAgICAgbGV0IHQgPSBcImVtYWlsXCIgPT09IGUgPyBcIkVtYWlsXCIgOiBcIlBhc3N3b3JkXCI7XHJcbiAgICAgICAgci5maWxsZWRSb2xlcy5pbmNsdWRlcyhlKSB8fCByLnNraXBwZWRFeGlzdGluZ1JvbGVzLmluY2x1ZGVzKGUpID8gdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAgIC51cGRhdGVGaWxsZWRQcm9ncmVzcyh0KSA6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKHQpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN1cGVyLmZpbmFsaXplRmlsbEZvcm0oKVxyXG4gICAgfVxyXG4gICAgYXdhaXQgdGhpcy5pbml0aWFsaXplRmlsbEZvcm0oKSwgYXdhaXQgdGhpcy5oYW5kbGVSZXN1bWVVcGxvYWQoKSwgYXdhaXQgdGhpc1xyXG4gICAgLnJ1blByZUZpbGxGb3JtKCk7XHJcbiAgICBsZXQgdCA9IG51bGw7XHJcbiAgICBpZiAoKDAsIHkuZmluZFN1Y2Nlc3NGYWN0b3JzUmVnaXN0cmF0aW9uRW1haWxGaWVsZHMpKCkuc2VjdGlvbikge1xyXG4gICAgICBsZXQgZSA9IGF3YWl0ICgwLCBvLnNlbmRUb0JhY2tncm91bmQpKHtcclxuICAgICAgICBuYW1lOiBcImdldEF1dG9maWxsSW5mb1wiLFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgIGZvcmNlUmVmcmVzaDogITBcclxuICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKCgpID0+IG51bGwpO1xyXG4gICAgICAoMCwgbC5jaGVja3BvaW50KSgpLCB0ID0gYXdhaXQgKDAsIHkuZmlsbFN1Y2Nlc3NGYWN0b3JzUmVnaXN0cmF0aW9uRW1haWxzKSh7XHJcbiAgICAgICAgZW1haWw6ICgwLCBpLnJlc29sdmVTaWdudXBSZWdpc3RyYXRpb25FbWFpbCkoZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGxldCByID0gKDAsIHkuZmluZFN1Y2Nlc3NGYWN0b3JzUmVnaXN0cmF0aW9uUGFzc3dvcmRGaWVsZHMpKCk7XHJcbiAgICBpZiAoci5zZWN0aW9uKSB7XHJcbiAgICAgIGxldCBlID0gYXdhaXQgKDAsIHkubG9hZFN1Y2Nlc3NGYWN0b3JzUmVnaXN0cmF0aW9uUGFzc3dvcmQpKCksXHJcbiAgICAgICAgdCA9IGF3YWl0ICgwLCB5LmZpbGxTdWNjZXNzRmFjdG9yc1JlZ2lzdHJhdGlvblBhc3N3b3Jkcykoe1xyXG4gICAgICAgICAgcGFzc3dvcmQ6IGVcclxuICAgICAgICB9KTtcclxuICAgICAgY29uc29sZS5pbmZvKFwiW1N1Y2Nlc3NGYWN0b3JzUmVnaXN0cmF0aW9uQ3JlZGVudGlhbHNdXCIsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBmb3VuZFNlY3Rpb246IHQuZm91bmRTZWN0aW9uLFxyXG4gICAgICAgIGZvdW5kUm9sZUNvdW50OiB0LmZvdW5kUm9sZXMubGVuZ3RoLFxyXG4gICAgICAgIGZpbGxlZFJvbGVDb3VudDogdC5maWxsZWRSb2xlcy5sZW5ndGgsXHJcbiAgICAgICAgc2tpcHBlZEV4aXN0aW5nUm9sZUNvdW50OiB0LnNraXBwZWRFeGlzdGluZ1JvbGVzLmxlbmd0aCxcclxuICAgICAgICByZWplY3RlZFJvbGVDb3VudDogdC5yZWplY3RlZFJvbGVzLmxlbmd0aFxyXG4gICAgICB9KSlcclxuICAgIH1cclxuICAgIGxldCBuID0gYXdhaXQgdGhpcy5leHRyYWN0Rm9ybVJ1bGVzKCk7XHJcbiAgICBpZiAodGhpcy5wcm9ncmVzc1RyYWNrZXIuc2V0RmllbGRzUmVxdWlyZWRTdGF0dXMobiksIHRoaXNcclxuICAgICAgLnJlc3RvcmVSZXN1bWVQcm9ncmVzc0FmdGVyUnVsZXNSZWZyZXNoKCksIHQ/LmZvdW5kU2VjdGlvbilcclxuICAgICAgZm9yIChsZXQgZSBvZiB0LmZvdW5kUm9sZXMpIHtcclxuICAgICAgICBsZXQgciA9IFwiZW1haWxcIiA9PT0gZSA/IFwiRW1haWwgQWRkcmVzczpcIiA6IFwiUmV0eXBlIEVtYWlsIEFkZHJlc3M6XCI7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cyh7XHJcbiAgICAgICAgICAgIGxhYmVsOiByLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogITBcclxuICAgICAgICAgIH0pLCB0LmZpbGxlZFJvbGVzLmluY2x1ZGVzKGUpID8gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MocikgOiB0aGlzXHJcbiAgICAgICAgICAucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKHIpXHJcbiAgICAgIH1cclxuICAgIGxldCBhID0gdGhpcy5wcmVwcm9jZXNzUnVsZXNGb3JBbnN3ZXIobiksXHJcbiAgICAgIHMgPSBhd2FpdCB0aGlzLmZldGNoRm9ybUFuc3dlcnMoYSwgZSk7XHJcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgcykgcmV0dXJuIHM7XHJcbiAgICBsZXQgdSA9IGF3YWl0IHRoaXMuZmlsbENvdW50cnlGcm9tUHJvZmlsZSgpO1xyXG4gICAgYXdhaXQgdGhpcy5maWxsRWR1Y2F0aW9uQW5kRW1wbG95bWVudChuKSwgYXdhaXQgdGhpcy5maWxsUmVndWxhckZpZWxkcyh0aGlzLmNhY2hlZFJ1bGVzID8/XHJcbiAgICAgIG4sIHtcclxuICAgICAgICBza2lwUHJvZmlsZUNvdW50cnk6IHVcclxuICAgICAgfSksIGF3YWl0IHRoaXMuZXhlY3V0ZVNpdGVTcGVjaWZpY1N0ZXBzKG4pO1xyXG4gICAgbGV0IGMgPSBhd2FpdCAoMCwgdi5hY2NlcHRTdWNjZXNzRmFjdG9yc1JlZ2lzdHJhdGlvblByaXZhY3kpKCk7XHJcbiAgICByZXR1cm4gYy5mb3VuZFJlZ2lzdHJhdGlvbkZvcm0gJiYgY29uc29sZS5pbmZvKFwiW1N1Y2Nlc3NGYWN0b3JzUmVnaXN0cmF0aW9uUHJpdmFjeV1cIiwgSlNPTlxyXG4gICAgICAuc3RyaW5naWZ5KGMpKSwgYXdhaXQgdGhpcy5maW5hbGl6ZUZpbGxGb3JtKClcclxuICB9XHJcbiAgZ2V0RmllbGRIYW5kbGVycygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFtkLkZJRUxEX1RZUEUuVEVYVF06IChlLCB0KSA9PiB7XHJcbiAgICAgICAgbGV0IHIgPSB0Py5bMF07XHJcbiAgICAgICAgaWYgKHIpIHJldHVybiAoMCwgZy5maWxsSW5wdXRUZXh0RmllbGQpKGUuJGlucHV0LCBTdHJpbmcociA/PyBcIlwiKSlcclxuICAgICAgfSxcclxuICAgICAgW2QuRklFTERfVFlQRS5TRUxFQ1RdOiAoZSwgdCkgPT4gKDAsIGcuZmlsbFNlbGVjdEZpZWxkKShlLCB0KSxcclxuICAgICAgW2QuRklFTERfVFlQRS5DSEVDS0JPWF06IChlLCB0KSA9PiAoMCwgZy5maWxsQ2hlY2tib3hGaWVsZCkoZSwgdCksXHJcbiAgICAgIFtkLkZJRUxEX1RZUEUuUkFESU9HUk9VUF06IChlLCB0KSA9PiAoMCwgZy5maWxsUmFkaW9Hcm91cEZpbGVkKShlLCB0KSxcclxuICAgICAgW2QuRklFTERfVFlQRS5FRFVDQVRJT05dOiAoZSwgdCkgPT4gKDAsIGcuZmlsbFNlbGVjdEZpZWxkKShlLCB0KSxcclxuICAgICAgW2QuRklFTERfVFlQRS5FTVBMT1lNRU5UXTogKGUsIHQpID0+ICgwLCBnLmZpbGxTZWxlY3RGaWVsZCkoZSwgdClcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgcnVuUHJlRmlsbEZvcm0oKSB7XHJcbiAgICBhd2FpdCAoMCwgZy5wcmVjbGlja0FkZEJ1dHRvbnMpKCksIGF3YWl0ICgwLCBtLmRlbGF5KSg1MDApXHJcbiAgfVxyXG4gIGFzeW5jIGV4dHJhY3RGb3JtUnVsZXMoKSB7XHJcbiAgICBsZXQgZSA9IHRoaXMuZ2V0Q3VycmVudFBhZ2VTaWduYXR1cmUoKTtcclxuICAgIHJldHVybiB0aGlzLmNhY2hlZFJ1bGVzUGFnZVNpZ25hdHVyZSAhPT0gZSAmJiAodGhpcy5jYWNoZWRSdWxlcyA9IG51bGwsIHRoaXNcclxuICAgICAgLmNhY2hlZFJ1bGVzUGFnZVNpZ25hdHVyZSA9IGUpLCB0aGlzLmNhY2hlZFJ1bGVzIHx8ICh0aGlzLmNhY2hlZFJ1bGVzID0gYXdhaXQgKDAsIHdcclxuICAgICAgLmV4dHJhY3RSdWxlcykoKSksIHRoaXMuY2FjaGVkUnVsZXNcclxuICB9XHJcbiAgZ2V0Q3VycmVudFBhZ2VTaWduYXR1cmUoKSB7XHJcbiAgICBsZXQgZSA9IFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIHdpbmRvdyA/IFwiXCIgOiB3aW5kb3cubG9jYXRpb24/LmhyZWYgfHwgXCJcIixcclxuICAgICAgdCA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlVXBwZXJMYXlvdXRcIiksXHJcbiAgICAgIHIgPSAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVlc3Rpb25zXCIpLFxyXG4gICAgICBuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIiNhcHBseS1wcm9maWxlSW5mb3JtYXRpb24tZm9ybSwgI3F1ZXN0aW9ucywgLnByb2ZpbGVVcHBlckxheW91dCwgLnByb2ZpbGVMb3dlckxheW91dCwgZm9ybSwgbWFpblwiXHJcbiAgICAgICAgKSxcclxuICAgICAgbyA9IFtuPy5pZCwgbj8uZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSwgbj8uY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbihcInxcIik7XHJcbiAgICByZXR1cm4gW2UsIHQgPyBcInByb2ZpbGVcIiA6IFwiXCIsIHIgPyBcInF1ZXN0aW9uc1wiIDogXCJcIiwgb10uam9pbihcIjo6XCIpXHJcbiAgfVxyXG4gIHByZXByb2Nlc3NSdWxlc0ZvckFuc3dlcihlKSB7XHJcbiAgICByZXR1cm4gKDAsIHcucHJlcGFyZVN1Y2Nlc3NGYWN0b3JzUnVsZXNGb3JBbnN3ZXIpKGUpXHJcbiAgfVxyXG4gIHJlc3RvcmVSZXN1bWVQcm9ncmVzc0FmdGVyUnVsZXNSZWZyZXNoKCkge1xyXG4gICAgbGV0IGUgPSB0aGlzLnByb2dyZXNzVHJhY2tlci5maWVsZFN0YXR1cy5maWxsZWRGaWVsZHMuaW5jbHVkZXMoXCJSZXN1bWUvQ1ZcIikgfHwgdGhpc1xyXG4gICAgICAucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzLm1pc3NpbmdGaWVsZHMuaW5jbHVkZXMoXCJSZXN1bWUvQ1ZcIik7XHJcbiAgICBlICYmIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMoe1xyXG4gICAgICBsYWJlbDogXCJSZXN1bWUvQ1ZcIixcclxuICAgICAgcmVxdWlyZWQ6ICEwLFxyXG4gICAgICB0eXBlOiBcImZpbGVcIlxyXG4gICAgfSlcclxuICB9XHJcbiAgYXN5bmMgZmV0Y2hGb3JtQW5zd2VycyhlLCB0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnRva2VuIHx8ICh0aGlzLnRva2VuID0gYXdhaXQgKDAsIGEuZ2V0U2l0ZVRva2VuKSgpKTtcclxuICAgICAgbGV0IHIgPSAoMCwgcy5maWx0ZXJSdWxlc0J5TGFiZWwpKGUsIFtdKSxcclxuICAgICAgICBuID0gdGhpcy5jYXB0dXJlRmFsY29uUmVzcG9uc2VSdW4oKSxcclxuICAgICAgICBvID0gYXdhaXQgKDAsIGEuZ2V0RWxlbWVudFJ1bGVzKShyLCBFLCB0aGlzLnRva2VuLCB0LCB0aGlzLnJlc3VtZUluZm8/LmlkLCB0aGlzXHJcbiAgICAgICAgICAucmVzdW1lSW5mbz8udGFpbG9ySWQpO1xyXG4gICAgICB0aGlzLnJlY29yZEZhbGNvblJlc3BvbnNlKG8sIG4pLCB0aGlzLmFuc3dlciA9ICgwLCBoLmZvcm1hdEFuc3dlcikobyksIHRoaXMudGltZVRyYWNlXHJcbiAgICAgICAgLmZpbGxTdGFydFRpbWUgPSBEYXRlLm5vdygpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgYS5IVFRQRXJyb3IgfHwgZSBpbnN0YW5jZW9mIGEuUmVzdW1lTWlzc2luZ0NvZGVFcnJvcikgcmV0dXJuICgwLCB1XHJcbiAgICAgICAgLnNlbmRIdHRwU3RhdHVzTWVzc2FnZSkoZS5tZXNzYWdlKSwgZS5tZXNzYWdlXHJcbiAgICB9KDAsIGwuY2hlY2twb2ludCkoKVxyXG4gIH1cclxuICBhc3luYyBmaWxsUmVndWxhckZpZWxkcyhlLCB0ID0ge30pIHtcclxuICAgIGxldCByID0gZS5maWx0ZXIoZSA9PiBlLnR5cGUgIT09IGQuRklFTERfVFlQRS5FRFVDQVRJT04gJiYgZS50eXBlICE9PSBkLkZJRUxEX1RZUEVcclxuICAgICAgICAuRU1QTE9ZTUVOVCAmJiAhKHQuc2tpcFByb2ZpbGVDb3VudHJ5ICYmIHgoZSkpKSxcclxuICAgICAgbiA9ICgwLCBhLmdldFJlZ3VsYXJPcGVyYXRpb25zKShyLCB0aGlzLmFuc3dlci5yZWd1bGFyLCB0aGlzLm9wZXJhdGlvbkNvbmZpZykubWFwKGUgPT5cclxuICAgICAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBlKClcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRXJyb3IgZmlsbGluZyBmaWVsZDpcIiwgZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIGZvciAobGV0IGUgb2YgbikgdGhpcy50YXNrUXVldWUuYWRkKGUpO1xyXG4gICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICB9XHJcbiAgYXN5bmMgZmlsbENvdW50cnlGcm9tUHJvZmlsZSgpIHtcclxuICAgIGxldCBlID0gdGhpcy5hbnN3ZXI/LmNvdW50cnk7XHJcbiAgICBpZiAobnVsbCA9PSBlIHx8IFwiXCIgPT09IFN0cmluZyhlKS50cmltKCkpIHJldHVybiAhMTtcclxuICAgIGxldCB0ID0gKDAsIHAuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXHJcbiAgICAgIFwiLy9pbnB1dFtAYXJpYS1sYWJlbD0nQ291bnRyeScgb3IgQGFyaWEtbGFiZWw9J0NvdW50cnk6J11cIiwgZG9jdW1lbnQpO1xyXG4gICAgaWYgKCF0KSByZXR1cm4gITE7XHJcbiAgICBsZXQgciA9IGF3YWl0ICgwLCBnLmZpbGxDb3VudHJ5Q29tYm9ib3gpKHQsIFN0cmluZyhlKS50cmltKCkpO1xyXG4gICAgcmV0dXJuIHIgPyAodGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoXCJDb3VudHJ5XCIpLCAhMCkgOiAodGhpc1xyXG4gICAgICAucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiQ291bnRyeVwiKSwgITEpXHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxFZHVjYXRpb25BbmRFbXBsb3ltZW50KGUpIHtcclxuICAgIHRoaXMuYW5zd2VyICYmIChhd2FpdCAoMCwgZy5leHBhbmRGb3JtKSh0aGlzLmFuc3dlciksIGF3YWl0ICgwLCBtLmRlbGF5KSg1MDApLCB0aGlzXHJcbiAgICAgIC5jYWNoZWRSdWxlcyA9IGF3YWl0ICgwLCB3LmV4dHJhY3RSdWxlcykoKSk7XHJcbiAgICBsZXQgdCA9IHRoaXMuY2FjaGVkUnVsZXMgfHwgZSxcclxuICAgICAgciA9IHQuZmlsdGVyKGUgPT4gZS50eXBlID09PSBkLkZJRUxEX1RZUEUuRURVQ0FUSU9OKSxcclxuICAgICAgbiA9IHQuZmlsdGVyKGUgPT4gZS50eXBlID09PSBkLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCksXHJcbiAgICAgIG8gPSB0aGlzLmdldFNlY3Rpb25Qcm9ncmVzc0xhYmVsKG4sIFwiRW1wbG95bWVudFwiKSxcclxuICAgICAgaSA9IHRoaXMuZ2V0U2VjdGlvblByb2dyZXNzTGFiZWwociwgXCJFZHVjYXRpb25cIik7XHJcbiAgICBpZiAodGhpcy5hbnN3ZXIgJiYgKHIubGVuZ3RoID4gMCB8fCBuLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICgwLCBmLnNldFNlY3Rpb25SZXN1bHRGb2N1c1J1bGVzKShcImVtcGxveW1lbnRcIiwgbik7XHJcbiAgICAgIGxldCBlID0gKDAsIGEuZ2V0RW1wbG95bWVudE9wZXJhdGlvbnMpKG4sIHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlLCB0aGlzXHJcbiAgICAgICAgLm9wZXJhdGlvbkNvbmZpZywgdm9pZCAwLCB7XHJcbiAgICAgICAgICBvblNlY3Rpb25SZXN1bHRDaGFuZ2VkOiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVTZWN0aW9uUmVzdWx0LFxyXG4gICAgICAgICAgb25Db21wbGV0ZWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgbi5sZW5ndGggPiAwICYmIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKG8pXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgb25Ta2lwcGVkOiAoKSA9PiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhvKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAoMCwgZi5zZXRTZWN0aW9uUmVzdWx0Rm9jdXNSdWxlcykoXCJlZHVjYXRpb25cIiwgcik7XHJcbiAgICAgIGxldCB0ID0gKDAsIGEuZ2V0RWR1Y2F0aW9uT3BlcmF0aW9ucykociwgdGhpcy5hbnN3ZXIuZWR1Y2F0aW9uLCB0aGlzLm9wZXJhdGlvbkNvbmZpZyxcclxuICAgICAgICAgIHZvaWQgMCwge1xyXG4gICAgICAgICAgICBvblNlY3Rpb25SZXN1bHRDaGFuZ2VkOiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVTZWN0aW9uUmVzdWx0LFxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHIubGVuZ3RoID4gMCAmJiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhpKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblNraXBwZWQ6ICgpID0+IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKGkpXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBsID0gWy4uLmUsIC4uLnRdO1xyXG4gICAgICBmb3IgKGxldCBlIG9mIGwpIHRoaXMudGFza1F1ZXVlLmFkZChlKTtcclxuICAgICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0U2VjdGlvblByb2dyZXNzTGFiZWwoZSwgdCkge1xyXG4gICAgcmV0dXJuIGUuZmluZChlID0+IGUubGFiZWw/LnRyaW0oKSk/LmxhYmVsPy50cmltKCkgfHwgdFxyXG4gIH1cclxuICBhc3luYyBoYW5kbGVSZXN1bWVVcGxvYWQoKSB7XHJcbiAgICBpZiAodGhpcy5yZXN1bWVJbmZvICYmICgwLCBnLmhhc1N1Y2Nlc3NGYWN0b3JzUmVzdW1lVXBsb2FkU3VyZmFjZSkoKSkge1xyXG4gICAgICBsZXQgZSA9ICgwLCBnLmNhcHR1cmVTdWNjZXNzRmFjdG9yc0V4cGVyaWVuY2VSb3dzKSgpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0ICgwLCBnLnVwbG9hZFJlc3VtZSkodGhpcy5yZXN1bWVJbmZvLCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgICAgLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKSwgYXdhaXQgKDAsIGdcclxuICAgICAgICAgIC5jbGVhbnVwU3VjY2Vzc0ZhY3RvcnNQYXJzZWRFeHBlcmllbmNlUm93cykoZSlcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJSZXN1bWUvQ1ZcIilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBjaGVja0NvdmVyTGV0dGVyKCkge1xyXG4gICAgKDAsIGIucG9zdENvdmVyTGV0dGVyU3RhdHVzKSgoMCwgZy5nZXRTdWNjZXNzRmFjdG9yc0NvdmVyTGV0dGVyU3RhdHVzKSgpKVxyXG4gIH1cclxuICBhc3luYyBleGVjdXRlU2l0ZVNwZWNpZmljU3RlcHMoZSkge1xyXG4gICAgYXdhaXQgKDAsIGcuZmlsbFNraWxscykodGhpcy5hbnN3ZXIpO1xyXG4gICAgbGV0IHQgPSAoMCwgZy5nZXRTdWNjZXNzRmFjdG9yc0NvdmVyTGV0dGVyU3RhdHVzKSgpO1xyXG4gICAgaWYgKHQgJiYgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cyh7XHJcbiAgICAgICAgbGFiZWw6IFwiQ292ZXIgTGV0dGVyXCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFwicmVxdWlyZWRcIiA9PT0gdFxyXG4gICAgICB9KSwgdGhpcy5jb3ZlckxldHRlcj8uY292ZXJMZXR0ZXJJZCAmJiB0aGlzLmNvdmVyTGV0dGVyPy5jb3ZlckxldHRlck5hbWUpIHtcclxuICAgICAgbGV0IGUgPSBhd2FpdCAoMCwgZy51cGxvYWRDb3ZlckxldHRlcikoe1xyXG4gICAgICAgICAgY292ZXJMZXR0ZXJJZDogdGhpcy5jb3ZlckxldHRlci5jb3ZlckxldHRlcklkLFxyXG4gICAgICAgICAgY292ZXJMZXR0ZXJOYW1lOiB0aGlzLmNvdmVyTGV0dGVyLmNvdmVyTGV0dGVyTmFtZSxcclxuICAgICAgICAgIG1hcmtkb3duOiB0aGlzLmNvdmVyTGV0dGVyLm1hcmtkb3duLFxyXG4gICAgICAgICAgdXNlTGVnYWN5RG93bmxvYWQ6IHRoaXMuY292ZXJMZXR0ZXIudXNlTGVnYWN5RG93bmxvYWRcclxuICAgICAgICB9LCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzLCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgIC51cGRhdGVGaWxsZWRQcm9ncmVzcyk7XHJcbiAgICAgIGUgfHwgXCJyZXF1aXJlZFwiICE9PSB0IHx8IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiQ292ZXIgTGV0dGVyXCIpXHJcbiAgICB9IGVsc2UgXCJyZXF1aXJlZFwiID09PSB0ICYmIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiQ292ZXIgTGV0dGVyXCIpO1xyXG4gICAgW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdLmZvckVhY2goZSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoZSwge1xyXG4gICAgICAgIGJ1YmJsZXM6ICEwXHJcbiAgICAgIH0pKVxyXG4gICAgfSksIGF3YWl0IHN1cGVyLmV4ZWN1dGVTaXRlU3BlY2lmaWNTdGVwcyhlKVxyXG4gIH1cclxuICBnZXRTdWJtaXRUcmFja2luZ0RlbGVnYXRpb25Sb290KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50XHJcbiAgfVxyXG4gIHJlc29sdmVEZWxlZ2F0ZWRTdWJtaXRCdXR0b24oZSkge1xyXG4gICAgbGV0IHQgPSBcIkJVVFRPTlwiID09PSBlLnRhZ05hbWUgPyBlIDogZS5jbG9zZXN0KFwiYnV0dG9uXCIpO1xyXG4gICAgaWYgKHQpIHtcclxuICAgICAgbGV0IGUgPSB0LnRleHRDb250ZW50Py50cmltKCkudG9Mb3dlckNhc2UoKSB8fCBcIlwiLFxyXG4gICAgICAgIHIgPSBcIk5leHRcIiA9PT0gdC5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKSAmJiBcIk5leHRcIiA9PT0gdC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpICYmXHJcbiAgICAgICAgXCJidXR0b25cIiA9PT0gdC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpIHx8IFwic3VibWl0XCIgPT09IHQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSAmJlxyXG4gICAgICAgIFwiYXBwbHlcIiA9PT0gdC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSB8fCBlLmluY2x1ZGVzKFwiYXBwbHlcIik7XHJcbiAgICAgIHJldHVybiByID8gdCA6IG51bGxcclxuICAgIH1cclxuICAgIGxldCByID0gXCJidXR0b25cIiA9PT0gZS5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpICYmIGUuZ2V0QXR0cmlidXRlKFwiaWRcIik/LmluY2x1ZGVzKFxyXG4gICAgICBcInN1Ym1pdEJ0blwiKSAmJiAoZS50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImFwcGx5XCIpID8/ICExKTtcclxuICAgIHJldHVybiByID8gZSA6IG51bGxcclxuICB9XHJcbiAgZ2V0U2l0ZU5hbWUoKSB7XHJcbiAgICByZXR1cm4gXCJzdWNjZXNzZmFjdG9yc1wiXHJcbiAgfVxyXG4gIGFzeW5jIGdldEF1dG9maWxsU25hcHNob3QoZSkge1xyXG4gICAgcmV0dXJuIGF3YWl0ICgwLCB3LmdldEZvcm1TbmFwc2hvdCkoKVxyXG4gIH1cclxuICBhc3luYyBnZXRTdWJtaXRTbmFwc2hvdCgpIHtcclxuICAgIHJldHVybiAoMCwgdy5nZXRGb3JtU25hcHNob3QpKClcclxuICB9XHJcbiAgZ2V0QWRkaXRpb25hbEF1dG9maWxsU25hcHNob3REYXRhKGUpIHtcclxuICAgIHJldHVybiAoMCwgdy5nZXRBZGRpdGlvbmFsRm9ybVNuYXBzaG90RGF0YSkoKVxyXG4gIH1cclxuICBnZXRBZGRpdGlvbmFsU3VibWl0U25hcHNob3REYXRhKCkge1xyXG4gICAgcmV0dXJuICgwLCB3LmdldEFkZGl0aW9uYWxGb3JtU25hcHNob3REYXRhKSgpXHJcbiAgfVxyXG4gIHN1Ym1pdEFwcGxpY2F0aW9uKCkge1xyXG4gICAgbGV0IGUgPSAnLi8vYnV0dG9uW0B0eXBlPVwic3VibWl0XCIgb3IgY29udGFpbnMoQGNsYXNzLCBcInN1Ym1pdFwiKV0nLFxyXG4gICAgICB0ID0gKDAsIHAuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoZSk7XHJcbiAgICB0ICYmIHQ/LmNsaWNrKClcclxuICB9XHJcbiAgZmluYWxpemVGaWxsRm9ybSgpIHtcclxuICAgIGxldCBlID0gKDAsIHcuZ2V0Rm9ybVNuYXBzaG90KSgpLFxyXG4gICAgICB0ID0gKDAsIHcuZ2V0QWRkaXRpb25hbEZvcm1TbmFwc2hvdERhdGEpKCksXHJcbiAgICAgIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdGl0bGU9XCJOZXh0XCJdW25hbWU9XCJOZXh0XCJdW3R5cGU9XCJidXR0b25cIl0nKTtcclxuICAgIHJldHVybiByICYmICh0aGlzLm5leHRCdXR0b25IYW5kbGVyICYmIHIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXNcclxuICAgICAgICAubmV4dEJ1dHRvbkhhbmRsZXIpLCB0aGlzLm5leHRCdXR0b25IYW5kbGVyID0gKDAsIGcuc3VibWl0SGFuZGxlcikuYmluZChudWxsLCBlLCB0KSwgclxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMubmV4dEJ1dHRvbkhhbmRsZXIpKSwgc3VwZXIuZmluYWxpemVGaWxsRm9ybSgpXHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoic3VjY2Vzc2ZhY3RvcnMuZjBmNjZmMDEuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);