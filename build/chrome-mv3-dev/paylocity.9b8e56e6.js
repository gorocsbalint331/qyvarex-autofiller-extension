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
})({"76puy":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\paylocity.js",
    "bundleId": "d21685139b8e56e6",
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
var j = z(require("a9e6eacde93add25"));
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

},{"a9e6eacde93add25":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"5nGtq":[function(require,module,exports) {
/**
 * Parcel module id: 4Wyl0
 * Resolved path: src/contents/sites/paylocity.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/rules -> 3cWKC  =>  src/contents/methods/rules.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/shared/filler -> 2aGsX  =>  src/contents/shared/filler.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~contents/sites/paylocity/answer -> eiV7s  =>  src/contents/sites/paylocity/answer.js
 *   ~contents/sites/paylocity/operations -> bmU1E  =>  src/contents/sites/paylocity/operations.js
 *   ~contents/sites/paylocity/rules -> 5BvUQ  =>  src/contents/sites/paylocity/rules.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Paylocity", ()=>x);
var o = e("~contents/shared/filler"), i = e("~contents/methods/cancellation"), a = e("~contents/sites/base-filler"), l = e("~contents/methods/answer"), s = e("~contents/methods/dom"), u = e("~contents/methods/rules"), c = e("~contents/methods/track"), d = e("~contents/sites/paylocity/answer"), f = e("~contents/sites/paylocity/operations"), p = e("~contents/sites/paylocity/rules"), m = e("~core/enums"), h = e("~core/dom"), g = e("~store/autofillInfo"), b = e("~utils/delay");
let y = (e1)=>(0, l.removeSpecialCharacters)(e1).toLowerCase().trim(), v = (e1, t)=>{
    let r1 = y(e1), n = Object.keys(t || {}).filter((e1)=>e1 && void 0 !== t[e1] && null !== t[e1]).map((e1)=>({
            key: e1,
            normalizedKey: y(e1)
        })).filter(({ normalizedKey: e1 })=>e1), o = n.find(({ normalizedKey: e1 })=>e1 === r1 || r1.includes(e1) || e1.includes(r1));
    if (o) return t[o.key];
    if (/degreeobtained/i.test(r1)) {
        let e1 = n.find(({ normalizedKey: e1 })=>e1.includes("degree"));
        if (e1) return t[e1.key];
    }
}, w = (e1)=>{
    try {
        let t;
        let r1 = [
            "Did you graduate?",
            "Did you Graduate?",
            "didGraduate",
            "Did You Graduate?",
            "graduated",
            "Graduated",
            "Did you graduate",
            "didYouGraduate"
        ], n = "";
        for (let o of r1)try {
            if (null != (t = (0, l.findValueInRecord)(o, e1)) && "" !== t) {
                n = o;
                break;
            }
        } catch  {
            continue;
        }
        if (null == t || "" === t) {
            for (let [r1, o] of Object.entries(e1))if (/did.*graduate/i.test(r1) || /graduate/i.test(r1)) {
                t = o, n = r1;
                break;
            }
        }
        let o = Array.isArray(t) ? t[0] : t, i = String(o).trim().toLowerCase(), a = "yes" === i || "y" === i || "true" === i || "1" === i;
        return a;
    } catch (e1) {
        return !0;
    }
};
function S(e1) {
    let t = e1?.$container ?? e1?.$input;
    return t instanceof HTMLElement ? t : null;
}
_c = S;
function E(e1, t) {
    return t ? (0, l.ensureArray)(e1) : Array.isArray(e1) ? e1[0] : e1;
}
_c1 = E;
class x extends a.BaseFiller {
    doFillForm(e1 = !1) {
        return this.runDoFillFormSingleFlight(e1);
    }
    getSiteName() {
        return "paylocity";
    }
    async runPreFillForm() {
        this.currentRunCountryFilled = !1, this.taskQueue.add(f.waitPageClean), await this.taskQueue.run();
        let e1 = await (0, g.useAutofillInfoStore).getState().fetchAutofillInfo();
        this.taskQueue.add(async ()=>{
            this.currentRunCountryFilled = await (0, f.fillCountry)(e1?.location?.country);
        }), await this.taskQueue.run(), this.taskQueue.add(async ()=>{
            await (0, f.preclickAddButtons)();
        }), await this.taskQueue.run(), this.taskQueue.add(async ()=>{
            await (0, f.expandFormFromProfile)({
                expandEmployment: !1
            });
        }), await this.taskQueue.run();
    }
    async extractFormRules() {
        let e1 = await (0, p.getRules)();
        return this.taskQueue.add(f.blurPage), await this.taskQueue.run(), e1;
    }
    formatAnswer(e1) {
        return (0, d.formatAnswer)(e1);
    }
    async checkCoverLetter() {
        (0, s.postCoverLetterStatus)(await (0, f.getPaylocityCoverLetterStatus)());
    }
    async fetchFormAnswers(e1, t) {
        try {
            this.token || (this.token = await (0, l.getSiteToken)()), this.timeTrace.requestStartTime = Date.now();
            let r1 = (0, u.filterRulesByLabel)(e1, [
                "Security Code",
                "Country",
                "Country / Territory",
                "United States of America",
                "Date",
                "Employee ID (if applicable)",
                "What is your desired start date?",
                "What is your date of availability?"
            ]), n = this.captureFalconResponseRun(), o = await (0, l.getElementRules)(r1, this.getSiteName(), this.token, t, this.resumeInfo.id, this.resumeInfo.tailorId);
            this.recordFalconResponse(o, n), this.answer = this.formatAnswer(o), this.timeTrace.fillStartTime = Date.now();
        } catch (e1) {
            if (e1 instanceof l.HTTPError || e1 instanceof l.ResumeMissingCodeError) return (0, c.sendHttpStatusMessage)(e1.message), e1.message;
            console.error("Unknown error occurred:", e1);
        }
        (0, i.checkpoint)();
    }
    getFieldHandlers() {
        return {
            [m.FIELD_TYPE.NUMBER]: {
                handler: (e1, t)=>(console.info("[Paylocity][SalaryRange] filling field", {
                        id: e1.$input?.id,
                        label: e1.label,
                        hasValue: null != t && "" !== t
                    }), (0, s.fillInputTextField)(e1.$input, t)),
                options: {
                    expectArray: !1
                }
            },
            [m.FIELD_TYPE.CHECKBOX]: (e1, t)=>(0, s.fillCheckBoxesField)(e1, t),
            [m.FIELD_TYPE.MULTI_SELECT]: (e1, t)=>(0, f.fillSearchBoxInputField)(e1.$input, t),
            [m.FIELD_TYPE.SEARCH]: (e1, t)=>(0, f.fillSearchBoxInputField)(e1.$input, t),
            [m.FIELD_TYPE.LISTBOX]: (e1, t)=>(0, f.fillListboxButtonField)(e1.$input, t)
        };
    }
    buildOperationConfig() {
        let e1 = super.buildOperationConfig(), t = this.createOperationHandler(async (e1, t)=>(0, f.isPaylocityPersonalAddressInput)(e1.$input) ? await (0, f.fillPaylocityPersonalAddressField)(e1.$input, String(t)) : (await (0, s.fillInputTextField)(e1.$input, t), await (0, b.delay)(f.PAYLOCITY_PERSONAL_ADDRESS_SETTLE_DELAY_MS), !0), {
            expectArray: !0
        }), r1 = this.createOperationHandler((e1, t)=>(0, f.fillListboxSelectButtonField)(e1.$input, t), {
            expectArray: !0
        });
        return e1[m.FIELD_TYPE.TEXT] = async (e1, r1, n = !0)=>{
            if (/^Graduation Date$/i.test(e1.label)) {
                if (!w(r1)) return;
                let t = S(e1);
                await this.runCustomHandler(e1, r1, async (e1)=>{
                    if (!t) return !1;
                    let r1 = await (0, f.fillPaylocityEducationGraduationDate)(t, String(e1));
                    return r1;
                }, {
                    expectArray: !1
                }, n);
                return;
            }
            await t(e1, r1, n);
        }, e1[m.FIELD_TYPE.SELECT] = async (e1, t, n = !0)=>{
            if (/^Degree Obtained$/i.test(e1.label)) {
                if (!w(t)) return;
                let r1 = S(e1);
                await this.runCustomHandler(e1, t, async (e1)=>{
                    if (!r1) return !1;
                    let t = await (0, f.fillPaylocityEducationDegreeObtained)(r1, e1);
                    return t;
                }, {
                    expectArray: !0
                }, n);
                return;
            }
            await r1(e1, t, n);
        }, e1[m.FIELD_TYPE.DATE] = async (e1, t, r1 = !0)=>{
            if (/^Available to Start$/i.test(e1.label)) {
                await this.runCustomHandler(e1, t, async (t)=>{
                    let r1 = e1.$input;
                    return !!r1 && (await (0, f.fillAvailableToStartField)(r1, String(t)), !0);
                }, {
                    expectArray: !1
                }, r1);
                return;
            }
            let n = this.createOperationHandler((e1, t)=>(0, f.fillPaylocityDateField)(e1.$input, t));
            await n(e1, t, r1);
        }, e1;
    }
    async runCustomHandler(e1, t, r1, n = {}, i = !0) {
        try {
            let a;
            try {
                a = (0, l.findValueInRecord)(e1.label, t);
            } catch (r1) {
                if (r1 instanceof o.ValueError && /^Degree Obtained$/i.test(e1.label)) {
                    let n = v(e1.label, t);
                    if (void 0 === n) throw r1;
                    a = n;
                } else throw r1;
            }
            let s = E(a, n.expectArray), u = await r1(s);
            if (!1 === u) throw new o.ValueError(`No target found for label: ${e1.label}`);
            i && this.progressTracker.updateFilledProgress(e1.label);
        } catch (t) {
            o.ValueError, i && this.progressTracker.updateMissedProgress(e1.label);
        }
    }
    async fillRegularFields(e1) {
        let t = e1.filter((e1)=>"skills" !== y(e1.label)), r1 = (0, f.orderPaylocityPersonalAddressRules)(t.filter(f.isPaylocityPersonalAddressRule)), n = t.filter((e1)=>!(0, f.isPaylocityPersonalAddressRule)(e1));
        for (let e1 of (await super.fillRegularFields(n), r1)){
            await super.fillRegularFields([
                e1
            ]);
            let t = e1.$input, r1 = t?.id || t?.querySelector("input")?.id;
            if ("public-site-address-address-1" === r1) {
                let e1 = document.querySelector('[data-automation-id="public-site-address"]');
                if (e1) {
                    let t = await (0, f.waitForPaylocityPersonalAddressQuiet)(e1);
                    console.info("[Paylocity][PersonalAddress] native update settled", {
                        quiet: t
                    });
                }
            }
        }
    }
    async fillEducationAndEmployment(e1) {
        await (0, f.expandForm)(this.answer);
        let t = await (0, p.getEduRules)(), r1 = await (0, p.getExpRules)(), n = t.length > 0 ? t : e1.filter((e1)=>e1.type === m.FIELD_TYPE.EDUCATION), o = r1.length > 0 ? r1 : e1.filter((e1)=>e1.type === m.FIELD_TYPE.EMPLOYMENT);
        (0, h.setSectionResultFocusRules)("employment", o);
        let i = (0, l.getEmploymentOperations)(o, this.answer.workExperience, this.operationConfig, void 0, {
            onSectionResultChanged: this.progressTracker.updateSectionResult,
            onCompleted: ()=>{
                o.length > 0 && this.progressTracker.updateFilledProgress("Employment");
            },
            onSkipped: ()=>this.progressTracker.updateMissedProgress("Employment")
        });
        (0, h.setSectionResultFocusRules)("education", n);
        let a = (0, l.getEducationOperations)(n, this.answer.education, this.operationConfig, void 0, {
            onSectionResultChanged: this.progressTracker.updateSectionResult,
            onCompleted: ()=>{
                n.length > 0 && this.progressTracker.updateFilledProgress("Education");
            },
            onSkipped: ()=>this.progressTracker.updateMissedProgress("Education")
        }), s = [
            ...i,
            ...a
        ];
        for (let e1 of s)this.taskQueue.add(e1);
        await this.taskQueue.run();
    }
    async handleResumeUpload() {
        let e1 = document.querySelector("#remove-resume");
        e1 ? this.progressTracker.updateFilledProgress("Resume/CV") : this.disableUploadResume ? this.progressTracker.updateMissedProgress("Resume/CV") : this.taskQueue.add(async ()=>{
            let e1 = document.querySelector("#useAttachedResumeToFillOutApplication"), t = e1?.hasAttribute("checked") || e1?.checked;
            t && e1.click(), await (0, f.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
        }), this.taskQueue.add(async ()=>{
            let e1 = await (0, f.fillSkills)(this.answer.skills);
            e1 ? this.progressTracker.updateFilledProgress("Skills") : this.progressTracker.updateMissedProgress("Skills");
        });
    }
    async executeSiteSpecificSteps(e1) {
        let t = await (0, f.reconcilePaylocityPersonalAddress)({
            rules: e1,
            record: this.answer.regular,
            fillRule: async (e1, t)=>{
                let r1 = e1.$input;
                if (!r1) return !1;
                let n = r1.id || r1.querySelector("input")?.id || "";
                return (0, f.isPaylocityPersonalStateControlId)(n) ? await (0, f.fillPaylocityPersonalStateField)(n, (0, l.ensureArray)(t)) : (0, f.isPaylocityPersonalAddressInput)(r1) ? await (0, f.fillPaylocityPersonalAddressField)(r1, String(t ?? "")) : await (0, f.fillListboxSelectButtonField)(r1, (0, l.ensureArray)(t));
            },
            waitForQuiet: async ()=>{
                let e1 = document.querySelector('[data-automation-id="public-site-address"]');
                return !!e1 && await (0, f.waitForPaylocityPersonalAddressQuiet)(e1);
            }
        });
        for (let r1 of e1.filter(f.isPaylocityPersonalAddressRule)){
            let e1 = r1.$input, n = e1?.id || e1?.querySelector("input")?.id;
            n && t.filledControlIds.includes(n) ? this.progressTracker.updateFilledProgress(r1.label) : n && t.missingControlIds.includes(n) && this.progressTracker.updateMissedProgress(r1.label);
        }
        console.info("[Paylocity][PersonalAddress] final validation", {
            attemptedControlIds: t.attemptedControlIds,
            filledControlIds: t.filledControlIds,
            missingControlIds: t.missingControlIds
        }), this.currentRunCountryFilled && this.progressTracker.updateFilledProgress("Country"), (0, f.hasPaylocityCoverLetterSlot)() && (this.progressTracker.updateFieldRequiredStatus({
            label: "Cover Letter",
            required: !0
        }), this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName ? this.taskQueue.add(async ()=>{
            let e1 = await (0, f.uploadCoverLetter)({
                coverLetterId: this.coverLetter.coverLetterId,
                coverLetterName: this.coverLetter.coverLetterName,
                markdown: this.coverLetter.markdown,
                useLegacyDownload: this.coverLetter.useLegacyDownload
            }, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
            e1 || this.progressTracker.updateMissedProgress("Cover Letter");
        }) : (0, f.hasUploadedPaylocityCoverLetter)() ? this.progressTracker.updateFilledProgress("Cover Letter") : this.progressTracker.updateMissedProgress("Cover Letter")), this.taskQueue.add(async ()=>{
            await (0, f.blurPage)();
        }), await this.taskQueue.run();
        let r1 = (0, p.getSubmitButtonText)();
        (0, c.bindSubmitButton)(r1, this.progressTracker.fieldStatus, this.timeTrace);
        let n = document.querySelector('button[data-automation-id="pageFooterNextButton"], button[data-automation-id="bottom-navigation-next-button"], button#btn-submit[data-automation-id="btnNext"]');
        if (n && "Submit" !== n.innerText) {
            this.continueButtonHandler && n.removeEventListener("click", this.continueButtonHandler);
            let t = await this.getAutofillSnapshot(e1);
            this.continueButtonHandler = (0, f.submitHandler).bind(null, t, e1, this.answer), n.addEventListener("click", this.continueButtonHandler);
        }
    }
    async getAutofillSnapshot(e1) {
        return (0, p.getFormSnapshot)(e1);
    }
    async getSubmitSnapshot() {
        return (0, p.getFormSnapshot)();
    }
    submitApplication() {
        let e1 = (0, p.getFormSnapshot)();
        (0, f.submitHandler)(e1, [], this.answer);
    }
    constructor(...e1){
        super(...e1), this.continueButtonHandler = null, this.currentRunCountryFilled = !1, this.runDoFillFormSingleFlight = (0, f.createPaylocitySingleFlight)((e1 = !1)=>super.doFillForm(e1));
    }
}
var _c, _c1;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");

},{}]},["76puy","5nGtq"], "5nGtq", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLElBQUUsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxJQUFFLE9BQU87QUFBeUIsSUFBSSxJQUFFLE9BQU87QUFBb0IsSUFBSSxJQUFFLE9BQU8sZ0JBQWUsSUFBRSxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRTtJQUFLLElBQUcsS0FBRyxPQUFPLEtBQUcsWUFBVSxPQUFPLEtBQUcsWUFBVyxLQUFJLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRSxNQUFJLE1BQUksS0FBRyxFQUFFLEdBQUUsR0FBRTtRQUFDLEtBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBRSxDQUFBLElBQUUsRUFBRSxHQUFFLEVBQUMsS0FBSSxFQUFFO0lBQVU7SUFBRyxPQUFPO0FBQUM7QUFBRSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBSyxDQUFBLElBQUUsS0FBRyxPQUFLLEVBQUUsRUFBRSxNQUFJLENBQUMsR0FBRSxFQUFFLEtBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxhQUFXLEVBQUUsR0FBRSxXQUFVO1FBQUMsT0FBTTtRQUFFLFlBQVcsQ0FBQztJQUFDLEtBQUcsR0FBRSxFQUFDO0FBQUcsSUFBSSxJQUFFLFdBQVcsU0FBUyxRQUFNLEVBQUU7QUFBQyxJQUFJLElBQUUsSUFBSSxXQUFXLFNBQVMsT0FBSyxDQUFDO0FBQUUsSUFBSSxJQUFFLElBQUksSUFBSSxJQUFHLElBQUUsQ0FBQSxJQUFHLEVBQUUsSUFBSSxJQUFHLEtBQUcsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFdBQVcsU0FBTyxFQUFFLFNBQVMsTUFBTSxJQUFJLENBQUEsSUFBRyxFQUFFLE1BQU0sTUFBTSxPQUFPLENBQUMsR0FBRSxDQUFDLEdBQUUsRUFBRSxHQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFFLENBQUEsR0FBRyxDQUFDO0FBQUcsSUFBSSxLQUFHLEVBQUUsY0FBYSxJQUFFLElBQUksRUFBRSxnQkFBYyxJQUFJLFlBQVUsUUFBTyxLQUFHO0FBQUksSUFBSSxJQUFFLENBQUMsSUFBRSxFQUFFLEVBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxFQUFFLE9BQU8sSUFBRyxRQUFPO0FBQUcsSUFBSSxJQUFFLENBQUMsR0FBRyxJQUFJLFFBQVEsTUFBTSxxQkFBa0IsT0FBTyxJQUFHLFFBQU8sSUFBRyxJQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsd0JBQW9CLElBQUcsSUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUFvQixJQUFHLElBQUUsR0FBRSxJQUFFLENBQUMsR0FBRyxJQUFJLE9BQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSTtBQUFHLElBQUksSUFBRTtJQUFDLG1CQUFrQjtJQUFNLGdCQUFlO0lBQU0sV0FBVTtJQUFNLFlBQVc7UUFBQztLQUFlO0lBQUMsUUFBTztJQUFZLFFBQU87SUFBSyxpQkFBZ0I7SUFBeUYsWUFBVztJQUFtQixXQUFVO0lBQW1CLFdBQVU7SUFBUSxVQUFTO0lBQU0sY0FBYTtBQUFJO0FBQUUsT0FBTyxPQUFPLGdCQUFjLEVBQUU7QUFBUyxXQUFXLFVBQVE7SUFBQyxNQUFLLEVBQUU7SUFBQyxLQUFJO1FBQUMsU0FBUSxFQUFFO0lBQU87QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE9BQU87QUFBTyxTQUFTLEVBQUUsQ0FBQztJQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsTUFBSTtRQUFDLE1BQUssT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUcsWUFBVztRQUFFO1FBQUUsU0FBUSxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEtBQUs7UUFBRTtJQUFDLEdBQUUsT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFLEdBQUMsS0FBSztBQUFDO0FBQUMsT0FBTyxPQUFPLFNBQU87QUFBRSxPQUFPLE9BQU8sVUFBUSxDQUFDO0FBQUUsSUFBSSxJQUFFLFdBQVcsV0FBUyxXQUFXLFVBQVE7QUFBSyxlQUFlLEVBQUUsSUFBRSxDQUFDLENBQUM7SUFBRSxJQUFHLENBQUEsRUFBRSwyQkFBMEIsRUFBRSxRQUFRLFlBQVk7UUFBQyx3QkFBdUIsQ0FBQztJQUFDLEVBQUMsSUFBRyxXQUFXLFVBQVU7QUFBVTtBQUFDLFNBQVM7SUFBSSxPQUFNLENBQUMsRUFBRSxRQUFNLEVBQUUsU0FBTyxZQUFVLFNBQVMsU0FBUyxRQUFRLFlBQVUsSUFBRSxTQUFTLFdBQVMsY0FBWSxFQUFFO0FBQUk7QUFBQyxTQUFTO0lBQUksT0FBTSxDQUFDLEVBQUUsUUFBTSxFQUFFLFNBQU8sWUFBVSxjQUFZLEVBQUU7QUFBSTtBQUFDLFNBQVM7SUFBSSxPQUFPLEVBQUUsUUFBTSxTQUFTO0FBQUk7QUFBQyxJQUFJLElBQUU7QUFBeUIsSUFBSSxJQUFFO0lBQUMsZUFBYyxDQUFDO0lBQUUsaUJBQWdCLEVBQUU7SUFBQyxnQkFBZSxFQUFFO0FBQUEsR0FBRSxJQUFFO0lBQUssRUFBRSxnQkFBYyxDQUFDLEdBQUUsRUFBRSxrQkFBZ0IsRUFBRSxFQUFDLEVBQUUsaUJBQWUsRUFBRTtBQUFBO0FBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLEVBQUU7SUFBQyxJQUFJLElBQUUsRUFBRSxFQUFDLEdBQUUsR0FBRTtJQUFFLElBQUksS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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YUFBYSxJQUFJLENBQUM7UUFDbEUsSUFBSSxJQUFJLFNBQVMsY0FDZjtRQUVGLElBQUksS0FBSyxhQUFhLEVBQUUsV0FBVztZQUNqQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsb0JBQW9CLFNBQVMsSUFBSSxDQUFDO1lBQ2xFLElBQUksSUFBSSxNQUFNLElBQUksQ0FBQyxvQkFBb0I7WUFDdkMsSUFBSSxDQUFDLHdCQUF3QixBQUFDLENBQUEsR0FBRyxFQUFFLGFBQVksRUFBRyxLQUFLLE1BQU0sR0FBRyxJQUFHLElBQUksQ0FBQyxTQUFTLEVBQzlFLGlCQUFpQixTQUFTLElBQUksQ0FBQztRQUNwQztJQUNGO0lBQ0EsTUFBTSxvQkFBb0IsRUFBQyxFQUFFO1FBQzNCLE9BQU8sQUFBQyxDQUFBLEdBQUcsRUFBRSxlQUFjLEVBQUc7SUFDaEM7SUFDQSxNQUFNLG9CQUFvQjtRQUN4QixPQUFPLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZUFBYztJQUM3QjtJQUNBLG9CQUFvQjtRQUNsQixJQUFJLEtBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxlQUFjO1FBQzNCLENBQUEsR0FBRyxFQUFFLGFBQVksRUFBRyxJQUFHLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDbkM7SUFDQSxZQUFZLEdBQUcsRUFBQyxDQUFFO1FBQ2hCLEtBQUssSUFBSSxLQUFJLElBQUksQ0FBQyx3QkFBd0IsTUFBTSxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxJQUFJLENBQ3BGLDRCQUE0QixBQUFDLENBQUEsR0FBRyxFQUFFLDJCQUEwQixFQUFHLENBQUMsS0FBSSxDQUFDLENBQUMsR0FBSyxLQUFLLENBQzlFLFdBQVc7SUFDbEI7QUFDRiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtZGUwMzg1OTIzNzMxOTQ3Ni5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9wYXlsb2NpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxccGF5bG9jaXR5LmpzXCIsXCJidW5kbGVJZFwiOlwiZDIxNjg1MTM5YjhlNTZlNlwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IDRXeWwwXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9wYXlsb2NpdHkuanNcbiAqIERlcGVuZGVuY2llczpcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Fuc3dlciAtPiA3VDVlVyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvbiAtPiBsdUpmcyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvbi5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2RvbSAtPiBoQTVRYSAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2RvbS5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL3J1bGVzIC0+IDNjV0tDICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvcnVsZXMuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy90cmFjayAtPiBoNDc5YiAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL3RyYWNrLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NoYXJlZC9maWxsZXIgLT4gMmFHc1ggID0+ICBzcmMvY29udGVudHMvc2hhcmVkL2ZpbGxlci5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlciAtPiA4eGo2RiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlci5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9wYXlsb2NpdHkvYW5zd2VyIC0+IGVpVjdzICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3BheWxvY2l0eS9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvcGF5bG9jaXR5L29wZXJhdGlvbnMgLT4gYm1VMUUgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvcGF5bG9jaXR5L29wZXJhdGlvbnMuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvcGF5bG9jaXR5L3J1bGVzIC0+IDVCdlVRICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3BheWxvY2l0eS9ydWxlcy5qc1xyXG4gKiAgIH5jb3JlL2RvbSAtPiBoTE1KWCAgPT4gIHNyYy9jb3JlL2RvbS5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+c3RvcmUvYXV0b2ZpbGxJbmZvIC0+IDc5Vk5QICA9PiAgc3JjL3N0b3JlL2F1dG9maWxsSW5mby5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiUGF5bG9jaXR5XCIsICgpID0+IHgpO1xyXG52YXIgbyA9IGUoXCJ+Y29udGVudHMvc2hhcmVkL2ZpbGxlclwiKSxcclxuICBpID0gZShcIn5jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvblwiKSxcclxuICBhID0gZShcIn5jb250ZW50cy9zaXRlcy9iYXNlLWZpbGxlclwiKSxcclxuICBsID0gZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxcclxuICBzID0gZShcIn5jb250ZW50cy9tZXRob2RzL2RvbVwiKSxcclxuICB1ID0gZShcIn5jb250ZW50cy9tZXRob2RzL3J1bGVzXCIpLFxyXG4gIGMgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvdHJhY2tcIiksXHJcbiAgZCA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvcGF5bG9jaXR5L2Fuc3dlclwiKSxcclxuICBmID0gZShcIn5jb250ZW50cy9zaXRlcy9wYXlsb2NpdHkvb3BlcmF0aW9uc1wiKSxcclxuICBwID0gZShcIn5jb250ZW50cy9zaXRlcy9wYXlsb2NpdHkvcnVsZXNcIiksXHJcbiAgbSA9IGUoXCJ+Y29yZS9lbnVtc1wiKSxcclxuICBoID0gZShcIn5jb3JlL2RvbVwiKSxcclxuICBnID0gZShcIn5zdG9yZS9hdXRvZmlsbEluZm9cIiksXHJcbiAgYiA9IGUoXCJ+dXRpbHMvZGVsYXlcIik7XHJcbmxldCB5ID0gZSA9PiAoMCwgbC5yZW1vdmVTcGVjaWFsQ2hhcmFjdGVycykoZSkudG9Mb3dlckNhc2UoKS50cmltKCksXHJcbiAgdiA9IChlLCB0KSA9PiB7XHJcbiAgICBsZXQgciA9IHkoZSksXHJcbiAgICAgIG4gPSBPYmplY3Qua2V5cyh0IHx8IHt9KS5maWx0ZXIoZSA9PiBlICYmIHZvaWQgMCAhPT0gdFtlXSAmJiBudWxsICE9PSB0W2VdKS5tYXAoZSA9PiAoe1xyXG4gICAgICAgIGtleTogZSxcclxuICAgICAgICBub3JtYWxpemVkS2V5OiB5KGUpXHJcbiAgICAgIH0pKS5maWx0ZXIoKHtcclxuICAgICAgICBub3JtYWxpemVkS2V5OiBlXHJcbiAgICAgIH0pID0+IGUpLFxyXG4gICAgICBvID0gbi5maW5kKCh7XHJcbiAgICAgICAgbm9ybWFsaXplZEtleTogZVxyXG4gICAgICB9KSA9PiBlID09PSByIHx8IHIuaW5jbHVkZXMoZSkgfHwgZS5pbmNsdWRlcyhyKSk7XHJcbiAgICBpZiAobykgcmV0dXJuIHRbby5rZXldO1xyXG4gICAgaWYgKC9kZWdyZWVvYnRhaW5lZC9pLnRlc3QocikpIHtcclxuICAgICAgbGV0IGUgPSBuLmZpbmQoKHtcclxuICAgICAgICBub3JtYWxpemVkS2V5OiBlXHJcbiAgICAgIH0pID0+IGUuaW5jbHVkZXMoXCJkZWdyZWVcIikpO1xyXG4gICAgICBpZiAoZSkgcmV0dXJuIHRbZS5rZXldXHJcbiAgICB9XHJcbiAgfSxcclxuICB3ID0gZSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdDtcclxuICAgICAgbGV0IHIgPSBbXCJEaWQgeW91IGdyYWR1YXRlP1wiLCBcIkRpZCB5b3UgR3JhZHVhdGU/XCIsIFwiZGlkR3JhZHVhdGVcIiwgXCJEaWQgWW91IEdyYWR1YXRlP1wiLFxyXG4gICAgICAgICAgXCJncmFkdWF0ZWRcIiwgXCJHcmFkdWF0ZWRcIiwgXCJEaWQgeW91IGdyYWR1YXRlXCIsIFwiZGlkWW91R3JhZHVhdGVcIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbiA9IFwiXCI7XHJcbiAgICAgIGZvciAobGV0IG8gb2YgcikgdHJ5IHtcclxuICAgICAgICBpZiAobnVsbCAhPSAodCA9ICgwLCBsLmZpbmRWYWx1ZUluUmVjb3JkKShvLCBlKSkgJiYgXCJcIiAhPT0gdCkge1xyXG4gICAgICAgICAgbiA9IG87XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVsbCA9PSB0IHx8IFwiXCIgPT09IHQpIHtcclxuICAgICAgICBmb3IgKGxldCBbciwgb10gb2YgT2JqZWN0LmVudHJpZXMoZSkpXHJcbiAgICAgICAgICBpZiAoL2RpZC4qZ3JhZHVhdGUvaS50ZXN0KHIpIHx8IC9ncmFkdWF0ZS9pLnRlc3QocikpIHtcclxuICAgICAgICAgICAgdCA9IG8sIG4gPSByO1xyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBvID0gQXJyYXkuaXNBcnJheSh0KSA/IHRbMF0gOiB0LFxyXG4gICAgICAgIGkgPSBTdHJpbmcobykudHJpbSgpLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgYSA9IFwieWVzXCIgPT09IGkgfHwgXCJ5XCIgPT09IGkgfHwgXCJ0cnVlXCIgPT09IGkgfHwgXCIxXCIgPT09IGk7XHJcbiAgICAgIHJldHVybiBhXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiAhMFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG5mdW5jdGlvbiBTKGUpIHtcclxuICBsZXQgdCA9IGU/LiRjb250YWluZXIgPz8gZT8uJGlucHV0O1xyXG4gIHJldHVybiB0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyB0IDogbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBFKGUsIHQpIHtcclxuICByZXR1cm4gdCA/ICgwLCBsLmVuc3VyZUFycmF5KShlKSA6IEFycmF5LmlzQXJyYXkoZSkgPyBlWzBdIDogZVxyXG59XHJcbmNsYXNzIHggZXh0ZW5kcyBhLkJhc2VGaWxsZXIge1xyXG4gIGRvRmlsbEZvcm0oZSA9ICExKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydW5Eb0ZpbGxGb3JtU2luZ2xlRmxpZ2h0KGUpXHJcbiAgfVxyXG4gIGdldFNpdGVOYW1lKCkge1xyXG4gICAgcmV0dXJuIFwicGF5bG9jaXR5XCJcclxuICB9XHJcbiAgYXN5bmMgcnVuUHJlRmlsbEZvcm0oKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRSdW5Db3VudHJ5RmlsbGVkID0gITEsIHRoaXMudGFza1F1ZXVlLmFkZChmLndhaXRQYWdlQ2xlYW4pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZVxyXG4gICAgICAucnVuKCk7XHJcbiAgICBsZXQgZSA9IGF3YWl0ICgwLCBnLnVzZUF1dG9maWxsSW5mb1N0b3JlKS5nZXRTdGF0ZSgpLmZldGNoQXV0b2ZpbGxJbmZvKCk7XHJcbiAgICB0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJlbnRSdW5Db3VudHJ5RmlsbGVkID0gYXdhaXQgKDAsIGYuZmlsbENvdW50cnkpKGU/LmxvY2F0aW9uPy5jb3VudHJ5KVxyXG4gICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpLCB0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCAoMCwgZi5wcmVjbGlja0FkZEJ1dHRvbnMpKClcclxuICAgIH0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKSwgdGhpcy50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgKDAsIGYuZXhwYW5kRm9ybUZyb21Qcm9maWxlKSh7XHJcbiAgICAgICAgZXhwYW5kRW1wbG95bWVudDogITFcclxuICAgICAgfSlcclxuICAgIH0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKVxyXG4gIH1cclxuICBhc3luYyBleHRyYWN0Rm9ybVJ1bGVzKCkge1xyXG4gICAgbGV0IGUgPSBhd2FpdCAoMCwgcC5nZXRSdWxlcykoKTtcclxuICAgIHJldHVybiB0aGlzLnRhc2tRdWV1ZS5hZGQoZi5ibHVyUGFnZSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpLCBlXHJcbiAgfVxyXG4gIGZvcm1hdEFuc3dlcihlKSB7XHJcbiAgICByZXR1cm4gKDAsIGQuZm9ybWF0QW5zd2VyKShlKVxyXG4gIH1cclxuICBhc3luYyBjaGVja0NvdmVyTGV0dGVyKCkge1xyXG4gICAgKDAsIHMucG9zdENvdmVyTGV0dGVyU3RhdHVzKShhd2FpdCAoMCwgZi5nZXRQYXlsb2NpdHlDb3ZlckxldHRlclN0YXR1cykoKSlcclxuICB9XHJcbiAgYXN5bmMgZmV0Y2hGb3JtQW5zd2VycyhlLCB0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnRva2VuIHx8ICh0aGlzLnRva2VuID0gYXdhaXQgKDAsIGwuZ2V0U2l0ZVRva2VuKSgpKSwgdGhpcy50aW1lVHJhY2VcclxuICAgICAgICAucmVxdWVzdFN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgIGxldCByID0gKDAsIHUuZmlsdGVyUnVsZXNCeUxhYmVsKShlLCBbXCJTZWN1cml0eSBDb2RlXCIsIFwiQ291bnRyeVwiLCBcIkNvdW50cnkgLyBUZXJyaXRvcnlcIixcclxuICAgICAgICAgIFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsIFwiRGF0ZVwiLCBcIkVtcGxveWVlIElEIChpZiBhcHBsaWNhYmxlKVwiLFxyXG4gICAgICAgICAgXCJXaGF0IGlzIHlvdXIgZGVzaXJlZCBzdGFydCBkYXRlP1wiLCBcIldoYXQgaXMgeW91ciBkYXRlIG9mIGF2YWlsYWJpbGl0eT9cIlxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIG4gPSB0aGlzLmNhcHR1cmVGYWxjb25SZXNwb25zZVJ1bigpLFxyXG4gICAgICAgIG8gPSBhd2FpdCAoMCwgbC5nZXRFbGVtZW50UnVsZXMpKHIsIHRoaXMuZ2V0U2l0ZU5hbWUoKSwgdGhpcy50b2tlbiwgdCwgdGhpcy5yZXN1bWVJbmZvXHJcbiAgICAgICAgICAuaWQsIHRoaXMucmVzdW1lSW5mby50YWlsb3JJZCk7XHJcbiAgICAgIHRoaXMucmVjb3JkRmFsY29uUmVzcG9uc2UobywgbiksIHRoaXMuYW5zd2VyID0gdGhpcy5mb3JtYXRBbnN3ZXIobyksIHRoaXMudGltZVRyYWNlXHJcbiAgICAgICAgLmZpbGxTdGFydFRpbWUgPSBEYXRlLm5vdygpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgbC5IVFRQRXJyb3IgfHwgZSBpbnN0YW5jZW9mIGwuUmVzdW1lTWlzc2luZ0NvZGVFcnJvcikgcmV0dXJuICgwLCBjXHJcbiAgICAgICAgLnNlbmRIdHRwU3RhdHVzTWVzc2FnZSkoZS5tZXNzYWdlKSwgZS5tZXNzYWdlO1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiVW5rbm93biBlcnJvciBvY2N1cnJlZDpcIiwgZSlcclxuICAgIH0oMCwgaS5jaGVja3BvaW50KSgpXHJcbiAgfVxyXG4gIGdldEZpZWxkSGFuZGxlcnMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbbS5GSUVMRF9UWVBFLk5VTUJFUl06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4gKGNvbnNvbGUuaW5mbyhcIltQYXlsb2NpdHldW1NhbGFyeVJhbmdlXSBmaWxsaW5nIGZpZWxkXCIsIHtcclxuICAgICAgICAgIGlkOiBlLiRpbnB1dD8uaWQsXHJcbiAgICAgICAgICBsYWJlbDogZS5sYWJlbCxcclxuICAgICAgICAgIGhhc1ZhbHVlOiBudWxsICE9IHQgJiYgXCJcIiAhPT0gdFxyXG4gICAgICAgIH0pLCAoMCwgcy5maWxsSW5wdXRUZXh0RmllbGQpKGUuJGlucHV0LCB0KSksXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICExXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbbS5GSUVMRF9UWVBFLkNIRUNLQk9YXTogKGUsIHQpID0+ICgwLCBzLmZpbGxDaGVja0JveGVzRmllbGQpKGUsIHQpLFxyXG4gICAgICBbbS5GSUVMRF9UWVBFLk1VTFRJX1NFTEVDVF06IChlLCB0KSA9PiAoMCwgZi5maWxsU2VhcmNoQm94SW5wdXRGaWVsZCkoZS4kaW5wdXQsIHQpLFxyXG4gICAgICBbbS5GSUVMRF9UWVBFLlNFQVJDSF06IChlLCB0KSA9PiAoMCwgZi5maWxsU2VhcmNoQm94SW5wdXRGaWVsZCkoZS4kaW5wdXQsIHQpLFxyXG4gICAgICBbbS5GSUVMRF9UWVBFLkxJU1RCT1hdOiAoZSwgdCkgPT4gKDAsIGYuZmlsbExpc3Rib3hCdXR0b25GaWVsZCkoZS4kaW5wdXQsIHQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGJ1aWxkT3BlcmF0aW9uQ29uZmlnKCkge1xyXG4gICAgbGV0IGUgPSBzdXBlci5idWlsZE9wZXJhdGlvbkNvbmZpZygpLFxyXG4gICAgICB0ID0gdGhpcy5jcmVhdGVPcGVyYXRpb25IYW5kbGVyKGFzeW5jIChlLCB0KSA9PiAoMCwgZi5pc1BheWxvY2l0eVBlcnNvbmFsQWRkcmVzc0lucHV0KShlXHJcbiAgICAgICAgLiRpbnB1dCkgPyBhd2FpdCAoMCwgZi5maWxsUGF5bG9jaXR5UGVyc29uYWxBZGRyZXNzRmllbGQpKGUuJGlucHV0LCBTdHJpbmcodCkpIDogKFxyXG4gICAgICAgIGF3YWl0ICgwLCBzLmZpbGxJbnB1dFRleHRGaWVsZCkoZS4kaW5wdXQsIHQpLCBhd2FpdCAoMCwgYi5kZWxheSkoZlxyXG4gICAgICAgICAgLlBBWUxPQ0lUWV9QRVJTT05BTF9BRERSRVNTX1NFVFRMRV9ERUxBWV9NUyksICEwKSwge1xyXG4gICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICB9KSxcclxuICAgICAgciA9IHRoaXMuY3JlYXRlT3BlcmF0aW9uSGFuZGxlcigoZSwgdCkgPT4gKDAsIGYuZmlsbExpc3Rib3hTZWxlY3RCdXR0b25GaWVsZCkoZS4kaW5wdXQsXHJcbiAgICAgICAgdCksIHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH0pO1xyXG4gICAgcmV0dXJuIGVbbS5GSUVMRF9UWVBFLlRFWFRdID0gYXN5bmMgKGUsIHIsIG4gPSAhMCkgPT4ge1xyXG4gICAgICBpZiAoL15HcmFkdWF0aW9uIERhdGUkL2kudGVzdChlLmxhYmVsKSkge1xyXG4gICAgICAgIGlmICghdyhyKSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB0ID0gUyhlKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnJ1bkN1c3RvbUhhbmRsZXIoZSwgciwgYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXQpIHJldHVybiAhMTtcclxuICAgICAgICAgIGxldCByID0gYXdhaXQgKDAsIGYuZmlsbFBheWxvY2l0eUVkdWNhdGlvbkdyYWR1YXRpb25EYXRlKSh0LCBTdHJpbmcoZSkpO1xyXG4gICAgICAgICAgcmV0dXJuIHJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITFcclxuICAgICAgICB9LCBuKTtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBhd2FpdCB0KGUsIHIsIG4pXHJcbiAgICB9LCBlW20uRklFTERfVFlQRS5TRUxFQ1RdID0gYXN5bmMgKGUsIHQsIG4gPSAhMCkgPT4ge1xyXG4gICAgICBpZiAoL15EZWdyZWUgT2J0YWluZWQkL2kudGVzdChlLmxhYmVsKSkge1xyXG4gICAgICAgIGlmICghdyh0KSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCByID0gUyhlKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnJ1bkN1c3RvbUhhbmRsZXIoZSwgdCwgYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXIpIHJldHVybiAhMTtcclxuICAgICAgICAgIGxldCB0ID0gYXdhaXQgKDAsIGYuZmlsbFBheWxvY2l0eUVkdWNhdGlvbkRlZ3JlZU9idGFpbmVkKShyLCBlKTtcclxuICAgICAgICAgIHJldHVybiB0XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICEwXHJcbiAgICAgICAgfSwgbik7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgcihlLCB0LCBuKVxyXG4gICAgfSwgZVttLkZJRUxEX1RZUEUuREFURV0gPSBhc3luYyAoZSwgdCwgciA9ICEwKSA9PiB7XHJcbiAgICAgIGlmICgvXkF2YWlsYWJsZSB0byBTdGFydCQvaS50ZXN0KGUubGFiZWwpKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5ydW5DdXN0b21IYW5kbGVyKGUsIHQsIGFzeW5jIHQgPT4ge1xyXG4gICAgICAgICAgbGV0IHIgPSBlLiRpbnB1dDtcclxuICAgICAgICAgIHJldHVybiAhIXIgJiYgKGF3YWl0ICgwLCBmLmZpbGxBdmFpbGFibGVUb1N0YXJ0RmllbGQpKHIsIFN0cmluZyh0KSksICEwKVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMVxyXG4gICAgICAgIH0sIHIpO1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuID0gdGhpcy5jcmVhdGVPcGVyYXRpb25IYW5kbGVyKChlLCB0KSA9PiAoMCwgZi5maWxsUGF5bG9jaXR5RGF0ZUZpZWxkKShlXHJcbiAgICAgICAgLiRpbnB1dCwgdCkpO1xyXG4gICAgICBhd2FpdCBuKGUsIHQsIHIpXHJcbiAgICB9LCBlXHJcbiAgfVxyXG4gIGFzeW5jIHJ1bkN1c3RvbUhhbmRsZXIoZSwgdCwgciwgbiA9IHt9LCBpID0gITApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBhO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGEgPSAoMCwgbC5maW5kVmFsdWVJblJlY29yZCkoZS5sYWJlbCwgdClcclxuICAgICAgfSBjYXRjaCAocikge1xyXG4gICAgICAgIGlmIChyIGluc3RhbmNlb2Ygby5WYWx1ZUVycm9yICYmIC9eRGVncmVlIE9idGFpbmVkJC9pLnRlc3QoZS5sYWJlbCkpIHtcclxuICAgICAgICAgIGxldCBuID0gdihlLmxhYmVsLCB0KTtcclxuICAgICAgICAgIGlmICh2b2lkIDAgPT09IG4pIHRocm93IHI7XHJcbiAgICAgICAgICBhID0gblxyXG4gICAgICAgIH0gZWxzZSB0aHJvdyByXHJcbiAgICAgIH1cclxuICAgICAgbGV0IHMgPSBFKGEsIG4uZXhwZWN0QXJyYXkpLFxyXG4gICAgICAgIHUgPSBhd2FpdCByKHMpO1xyXG4gICAgICBpZiAoITEgPT09IHUpIHRocm93IG5ldyBvLlZhbHVlRXJyb3IoYE5vIHRhcmdldCBmb3VuZCBmb3IgbGFiZWw6ICR7ZS5sYWJlbH1gKTtcclxuICAgICAgaSAmJiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhlLmxhYmVsKVxyXG4gICAgfSBjYXRjaCAodCkge1xyXG4gICAgICBvLlZhbHVlRXJyb3IsIGkgJiYgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoZS5sYWJlbClcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgZmlsbFJlZ3VsYXJGaWVsZHMoZSkge1xyXG4gICAgbGV0IHQgPSBlLmZpbHRlcihlID0+IFwic2tpbGxzXCIgIT09IHkoZS5sYWJlbCkpLFxyXG4gICAgICByID0gKDAsIGYub3JkZXJQYXlsb2NpdHlQZXJzb25hbEFkZHJlc3NSdWxlcykodC5maWx0ZXIoZi5pc1BheWxvY2l0eVBlcnNvbmFsQWRkcmVzc1J1bGUpKSxcclxuICAgICAgbiA9IHQuZmlsdGVyKGUgPT4gISgwLCBmLmlzUGF5bG9jaXR5UGVyc29uYWxBZGRyZXNzUnVsZSkoZSkpO1xyXG4gICAgZm9yIChsZXQgZSBvZiAoYXdhaXQgc3VwZXIuZmlsbFJlZ3VsYXJGaWVsZHMobiksIHIpKSB7XHJcbiAgICAgIGF3YWl0IHN1cGVyLmZpbGxSZWd1bGFyRmllbGRzKFtlXSk7XHJcbiAgICAgIGxldCB0ID0gZS4kaW5wdXQsXHJcbiAgICAgICAgciA9IHQ/LmlkIHx8IHQ/LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKT8uaWQ7XHJcbiAgICAgIGlmIChcInB1YmxpYy1zaXRlLWFkZHJlc3MtYWRkcmVzcy0xXCIgPT09IHIpIHtcclxuICAgICAgICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJwdWJsaWMtc2l0ZS1hZGRyZXNzXCJdJyk7XHJcbiAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgIGxldCB0ID0gYXdhaXQgKDAsIGYud2FpdEZvclBheWxvY2l0eVBlcnNvbmFsQWRkcmVzc1F1aWV0KShlKTtcclxuICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIltQYXlsb2NpdHldW1BlcnNvbmFsQWRkcmVzc10gbmF0aXZlIHVwZGF0ZSBzZXR0bGVkXCIsIHtcclxuICAgICAgICAgICAgcXVpZXQ6IHRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGZpbGxFZHVjYXRpb25BbmRFbXBsb3ltZW50KGUpIHtcclxuICAgIGF3YWl0ICgwLCBmLmV4cGFuZEZvcm0pKHRoaXMuYW5zd2VyKTtcclxuICAgIGxldCB0ID0gYXdhaXQgKDAsIHAuZ2V0RWR1UnVsZXMpKCksXHJcbiAgICAgIHIgPSBhd2FpdCAoMCwgcC5nZXRFeHBSdWxlcykoKSxcclxuICAgICAgbiA9IHQubGVuZ3RoID4gMCA/IHQgOiBlLmZpbHRlcihlID0+IGUudHlwZSA9PT0gbS5GSUVMRF9UWVBFLkVEVUNBVElPTiksXHJcbiAgICAgIG8gPSByLmxlbmd0aCA+IDAgPyByIDogZS5maWx0ZXIoZSA9PiBlLnR5cGUgPT09IG0uRklFTERfVFlQRS5FTVBMT1lNRU5UKTtcclxuICAgICgwLCBoLnNldFNlY3Rpb25SZXN1bHRGb2N1c1J1bGVzKShcImVtcGxveW1lbnRcIiwgbyk7XHJcbiAgICBsZXQgaSA9ICgwLCBsLmdldEVtcGxveW1lbnRPcGVyYXRpb25zKShvLCB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZSwgdGhpcy5vcGVyYXRpb25Db25maWcsXHJcbiAgICAgIHZvaWQgMCwge1xyXG4gICAgICAgIG9uU2VjdGlvblJlc3VsdENoYW5nZWQ6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVNlY3Rpb25SZXN1bHQsXHJcbiAgICAgICAgb25Db21wbGV0ZWQ6ICgpID0+IHtcclxuICAgICAgICAgIG8ubGVuZ3RoID4gMCAmJiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhcIkVtcGxveW1lbnRcIilcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU2tpcHBlZDogKCkgPT4gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFbXBsb3ltZW50XCIpXHJcbiAgICAgIH0pO1xyXG4gICAgKDAsIGguc2V0U2VjdGlvblJlc3VsdEZvY3VzUnVsZXMpKFwiZWR1Y2F0aW9uXCIsIG4pO1xyXG4gICAgbGV0IGEgPSAoMCwgbC5nZXRFZHVjYXRpb25PcGVyYXRpb25zKShuLCB0aGlzLmFuc3dlci5lZHVjYXRpb24sIHRoaXMub3BlcmF0aW9uQ29uZmlnLFxyXG4gICAgICAgIHZvaWQgMCwge1xyXG4gICAgICAgICAgb25TZWN0aW9uUmVzdWx0Q2hhbmdlZDogdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlU2VjdGlvblJlc3VsdCxcclxuICAgICAgICAgIG9uQ29tcGxldGVkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIG4ubGVuZ3RoID4gMCAmJiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhcIkVkdWNhdGlvblwiKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG9uU2tpcHBlZDogKCkgPT4gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFZHVjYXRpb25cIilcclxuICAgICAgICB9KSxcclxuICAgICAgcyA9IFsuLi5pLCAuLi5hXTtcclxuICAgIGZvciAobGV0IGUgb2YgcykgdGhpcy50YXNrUXVldWUuYWRkKGUpO1xyXG4gICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKClcclxuICB9XHJcbiAgYXN5bmMgaGFuZGxlUmVzdW1lVXBsb2FkKCkge1xyXG4gICAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlbW92ZS1yZXN1bWVcIik7XHJcbiAgICBlID8gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoXCJSZXN1bWUvQ1ZcIikgOiB0aGlzLmRpc2FibGVVcGxvYWRSZXN1bWUgPyB0aGlzXHJcbiAgICAgIC5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJSZXN1bWUvQ1ZcIikgOiB0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VBdHRhY2hlZFJlc3VtZVRvRmlsbE91dEFwcGxpY2F0aW9uXCIpLFxyXG4gICAgICAgICAgdCA9IGU/Lmhhc0F0dHJpYnV0ZShcImNoZWNrZWRcIikgfHwgZT8uY2hlY2tlZDtcclxuICAgICAgICB0ICYmIGUuY2xpY2soKSwgYXdhaXQgKDAsIGYudXBsb2FkUmVzdW1lKSh0aGlzLnJlc3VtZUluZm8sIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgICAudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cywgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpXHJcbiAgICAgIH0pLCB0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBlID0gYXdhaXQgKDAsIGYuZmlsbFNraWxscykodGhpcy5hbnN3ZXIuc2tpbGxzKTtcclxuICAgICAgICBlID8gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoXCJTa2lsbHNcIikgOiB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgICAgLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiU2tpbGxzXCIpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIGFzeW5jIGV4ZWN1dGVTaXRlU3BlY2lmaWNTdGVwcyhlKSB7XHJcbiAgICBsZXQgdCA9IGF3YWl0ICgwLCBmLnJlY29uY2lsZVBheWxvY2l0eVBlcnNvbmFsQWRkcmVzcykoe1xyXG4gICAgICBydWxlczogZSxcclxuICAgICAgcmVjb3JkOiB0aGlzLmFuc3dlci5yZWd1bGFyLFxyXG4gICAgICBmaWxsUnVsZTogYXN5bmMgKGUsIHQpID0+IHtcclxuICAgICAgICBsZXQgciA9IGUuJGlucHV0O1xyXG4gICAgICAgIGlmICghcikgcmV0dXJuICExO1xyXG4gICAgICAgIGxldCBuID0gci5pZCB8fCByLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKT8uaWQgfHwgXCJcIjtcclxuICAgICAgICByZXR1cm4gKDAsIGYuaXNQYXlsb2NpdHlQZXJzb25hbFN0YXRlQ29udHJvbElkKShuKSA/IGF3YWl0ICgwLCBmXHJcbiAgICAgICAgICAuZmlsbFBheWxvY2l0eVBlcnNvbmFsU3RhdGVGaWVsZCkobiwgKDAsIGwuZW5zdXJlQXJyYXkpKHQpKSA6ICgwLCBmXHJcbiAgICAgICAgICAuaXNQYXlsb2NpdHlQZXJzb25hbEFkZHJlc3NJbnB1dCkocikgPyBhd2FpdCAoMCwgZlxyXG4gICAgICAgICAgLmZpbGxQYXlsb2NpdHlQZXJzb25hbEFkZHJlc3NGaWVsZCkociwgU3RyaW5nKHQgPz8gXCJcIikpIDogYXdhaXQgKDAsIGZcclxuICAgICAgICAgIC5maWxsTGlzdGJveFNlbGVjdEJ1dHRvbkZpZWxkKShyLCAoMCwgbC5lbnN1cmVBcnJheSkodCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHdhaXRGb3JRdWlldDogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYXV0b21hdGlvbi1pZD1cInB1YmxpYy1zaXRlLWFkZHJlc3NcIl0nKTtcclxuICAgICAgICByZXR1cm4gISFlICYmIGF3YWl0ICgwLCBmLndhaXRGb3JQYXlsb2NpdHlQZXJzb25hbEFkZHJlc3NRdWlldCkoZSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBmb3IgKGxldCByIG9mIGUuZmlsdGVyKGYuaXNQYXlsb2NpdHlQZXJzb25hbEFkZHJlc3NSdWxlKSkge1xyXG4gICAgICBsZXQgZSA9IHIuJGlucHV0LFxyXG4gICAgICAgIG4gPSBlPy5pZCB8fCBlPy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik/LmlkO1xyXG4gICAgICBuICYmIHQuZmlsbGVkQ29udHJvbElkcy5pbmNsdWRlcyhuKSA/IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKHIubGFiZWwpIDpcclxuICAgICAgICBuICYmIHQubWlzc2luZ0NvbnRyb2xJZHMuaW5jbHVkZXMobikgJiYgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoclxyXG4gICAgICAgICAgLmxhYmVsKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5pbmZvKFwiW1BheWxvY2l0eV1bUGVyc29uYWxBZGRyZXNzXSBmaW5hbCB2YWxpZGF0aW9uXCIsIHtcclxuICAgICAgICBhdHRlbXB0ZWRDb250cm9sSWRzOiB0LmF0dGVtcHRlZENvbnRyb2xJZHMsXHJcbiAgICAgICAgZmlsbGVkQ29udHJvbElkczogdC5maWxsZWRDb250cm9sSWRzLFxyXG4gICAgICAgIG1pc3NpbmdDb250cm9sSWRzOiB0Lm1pc3NpbmdDb250cm9sSWRzXHJcbiAgICAgIH0pLCB0aGlzLmN1cnJlbnRSdW5Db3VudHJ5RmlsbGVkICYmIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKFwiQ291bnRyeVwiKSxcclxuICAgICAgKDAsIGYuaGFzUGF5bG9jaXR5Q292ZXJMZXR0ZXJTbG90KSgpICYmICh0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzKHtcclxuICAgICAgICAgIGxhYmVsOiBcIkNvdmVyIExldHRlclwiLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6ICEwXHJcbiAgICAgICAgfSksIHRoaXMuY292ZXJMZXR0ZXI/LmNvdmVyTGV0dGVySWQgJiYgdGhpcy5jb3ZlckxldHRlcj8uY292ZXJMZXR0ZXJOYW1lID8gdGhpc1xyXG4gICAgICAgIC50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGxldCBlID0gYXdhaXQgKDAsIGYudXBsb2FkQ292ZXJMZXR0ZXIpKHtcclxuICAgICAgICAgICAgICBjb3ZlckxldHRlcklkOiB0aGlzLmNvdmVyTGV0dGVyLmNvdmVyTGV0dGVySWQsXHJcbiAgICAgICAgICAgICAgY292ZXJMZXR0ZXJOYW1lOiB0aGlzLmNvdmVyTGV0dGVyLmNvdmVyTGV0dGVyTmFtZSxcclxuICAgICAgICAgICAgICBtYXJrZG93bjogdGhpcy5jb3ZlckxldHRlci5tYXJrZG93bixcclxuICAgICAgICAgICAgICB1c2VMZWdhY3lEb3dubG9hZDogdGhpcy5jb3ZlckxldHRlci51c2VMZWdhY3lEb3dubG9hZFxyXG4gICAgICAgICAgICB9LCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzLCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgICAgICAudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgZSB8fCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIkNvdmVyIExldHRlclwiKVxyXG4gICAgICAgIH0pIDogKDAsIGYuaGFzVXBsb2FkZWRQYXlsb2NpdHlDb3ZlckxldHRlcikoKSA/IHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgLnVwZGF0ZUZpbGxlZFByb2dyZXNzKFwiQ292ZXIgTGV0dGVyXCIpIDogdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXHJcbiAgICAgICAgICBcIkNvdmVyIExldHRlclwiKSksIHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgKDAsIGYuYmx1clBhZ2UpKClcclxuICAgICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpO1xyXG4gICAgbGV0IHIgPSAoMCwgcC5nZXRTdWJtaXRCdXR0b25UZXh0KSgpO1xyXG4gICAgKDAsIGMuYmluZFN1Ym1pdEJ1dHRvbikociwgdGhpcy5wcm9ncmVzc1RyYWNrZXIuZmllbGRTdGF0dXMsIHRoaXMudGltZVRyYWNlKTtcclxuICAgIGxldCBuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgJ2J1dHRvbltkYXRhLWF1dG9tYXRpb24taWQ9XCJwYWdlRm9vdGVyTmV4dEJ1dHRvblwiXSwgYnV0dG9uW2RhdGEtYXV0b21hdGlvbi1pZD1cImJvdHRvbS1uYXZpZ2F0aW9uLW5leHQtYnV0dG9uXCJdLCBidXR0b24jYnRuLXN1Ym1pdFtkYXRhLWF1dG9tYXRpb24taWQ9XCJidG5OZXh0XCJdJ1xyXG4gICAgICApO1xyXG4gICAgaWYgKG4gJiYgXCJTdWJtaXRcIiAhPT0gbi5pbm5lclRleHQpIHtcclxuICAgICAgdGhpcy5jb250aW51ZUJ1dHRvbkhhbmRsZXIgJiYgbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jb250aW51ZUJ1dHRvbkhhbmRsZXIpO1xyXG4gICAgICBsZXQgdCA9IGF3YWl0IHRoaXMuZ2V0QXV0b2ZpbGxTbmFwc2hvdChlKTtcclxuICAgICAgdGhpcy5jb250aW51ZUJ1dHRvbkhhbmRsZXIgPSAoMCwgZi5zdWJtaXRIYW5kbGVyKS5iaW5kKG51bGwsIHQsIGUsIHRoaXMuYW5zd2VyKSwgblxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jb250aW51ZUJ1dHRvbkhhbmRsZXIpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGdldEF1dG9maWxsU25hcHNob3QoZSkge1xyXG4gICAgcmV0dXJuICgwLCBwLmdldEZvcm1TbmFwc2hvdCkoZSlcclxuICB9XHJcbiAgYXN5bmMgZ2V0U3VibWl0U25hcHNob3QoKSB7XHJcbiAgICByZXR1cm4gKDAsIHAuZ2V0Rm9ybVNuYXBzaG90KSgpXHJcbiAgfVxyXG4gIHN1Ym1pdEFwcGxpY2F0aW9uKCkge1xyXG4gICAgbGV0IGUgPSAoMCwgcC5nZXRGb3JtU25hcHNob3QpKCk7XHJcbiAgICAoMCwgZi5zdWJtaXRIYW5kbGVyKShlLCBbXSwgdGhpcy5hbnN3ZXIpXHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKC4uLmUpIHtcclxuICAgIHN1cGVyKC4uLmUpLCB0aGlzLmNvbnRpbnVlQnV0dG9uSGFuZGxlciA9IG51bGwsIHRoaXMuY3VycmVudFJ1bkNvdW50cnlGaWxsZWQgPSAhMSwgdGhpc1xyXG4gICAgICAucnVuRG9GaWxsRm9ybVNpbmdsZUZsaWdodCA9ICgwLCBmLmNyZWF0ZVBheWxvY2l0eVNpbmdsZUZsaWdodCkoKGUgPSAhMSkgPT4gc3VwZXJcclxuICAgICAgICAuZG9GaWxsRm9ybShlKSlcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJwYXlsb2NpdHkuOWI4ZTU2ZTYuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);