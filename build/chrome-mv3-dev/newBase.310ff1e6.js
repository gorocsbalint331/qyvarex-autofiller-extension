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
})({"a61k3":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\crawler\\newBase.js",
    "bundleId": "6ba5475d310ff1e6",
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
var j = z(require("b99d9ca40181b121"));
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

},{"b99d9ca40181b121":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"6KXRH":[function(require,module,exports) {
/**
 * Parcel module id: ifrOd
 * Resolved path: src/contents/crawler/newBase.js
 * Dependencies:
 *   ./utils -> dMQWN  =>  src/contents/crawler/utils.js
 *   ./utils/checkbox -> 5MP6u  =>  src/contents/crawler/utils/checkbox.js
 *   ./utils/executor -> iAZMN  =>  src/contents/crawler/utils/executor.js
 *   ./utils/input -> iPIvT  =>  src/contents/crawler/utils/input.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   @plasmohq/storage -> 9RCRe  =>  @plasmohq/storage.js
 *   dataurl-to-blob -> dqjvN  =>  dataurl-to-blob.js
 *   lodash-es -> p4RBe  =>  lodash-es.js
 *   ~constants -> 6VEjR  =>  src/constants.js
 *   ~contents -> d4tj7  =>  src/contents.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~core/autofill-progress-protocol -> 2aELO  =>  src/core/autofill-progress-protocol.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~enums/http -> eJFqj  =>  src/enums/http.js
 *   ~enums/storage -> e2WM4  =>  src/enums/storage.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */ var n, o = e("@parcel/transformer-js/src/esmodule-helpers.js");
o.defineInteropFlag(r), o.export(r, "HARDCODE_KEY", ()=>n), o.export(r, "config", ()=>T), o.export(r, "isMatched", ()=>F), o.export(r, "AutoFillBase", ()=>I);
var i = e("~contents/methods/choice-match"), a = e("dataurl-to-blob"), l = o.interopDefault(a), s = e("lodash-es"), u = e("@plasmohq/messaging"), c = e("@plasmohq/storage"), d = e("~constants"), f = e("~contents"), p = e("~contents/methods/track"), m = e("~core/autofill-progress-protocol"), h = e("~core/enums"), g = e("~core/utils"), b = e("~core/xpath"), y = e("~enums/http"), v = e("~enums/storage"), w = e("~utils/string"), S = e("./utils"), E = e("./utils/checkbox"), x = e("./utils/executor"), C = e("./utils/input");
let A = new c.Storage, k = [
    "$input",
    "$label",
    "$fieldRow",
    "children",
    "$checkboxs",
    "$radioParent",
    "$radios",
    "__zohoClusterRoot",
    "__zohoSemanticType"
];
!function(e1) {
    e1.education = "education", e1.workExperience = "workExperience";
}(n || (n = {}));
let T = {
    matches: [
        "<all_urls>"
    ],
    all_frames: !0
};
function F(e1, t) {
    if (!e1 || !t || "string" != typeof e1 || "string" != typeof t) return !1;
    let r1 = S.removeSpecialCharacters(e1)?.replace(/\s*\*\s*/g, "")?.toLowerCase().trim(), n = S.removeSpecialCharacters(t)?.replace(/\s*\*\s*/g, "")?.toLowerCase().trim();
    return !!r1 && !!n && r1 === n;
}
_c = F;
class I {
    constructor(){
        this.userInfo = {}, this.education = [], this.workExperience = [], this.skills = [], this.userInput = [], this.submitButtonText = "", this.fieldCanbeFill = [], this.fieldRequiredStatus = [], this.fieldAPIResponse = [], this.missingFields = [], this.filledFields = [], this.progressSessionId = (0, m.createAutofillProgressSessionId)(), this.hasSentProgressSnapshot = !1, this.hardCodeKeys = [], this.disableUploadResume = !1, this.formRules = [], this.resumeInput = null, this.source = "autoFill", this.initFields = ()=>{
            this.progressSessionId = (0, m.createAutofillProgressSessionId)(), this.hasSentProgressSnapshot = !1;
            let e1 = (e1)=>({
                    set: (t, r1, n)=>{
                        if (t[r1] = n, "length" === r1 || !/^\d+$/.test(r1)) return !0;
                        if (!this.hasSentProgressSnapshot) {
                            let { missingFields: e1, filledField: t } = this.dedup_fields();
                            return (0, p.sendProgressMessage)({
                                missingFields: e1,
                                filledFields: t,
                                fieldRequiredStatus: this.fieldRequiredStatus,
                                currentField: null
                            }, this.progressSessionId, this.userInfo), this.hasSentProgressSnapshot = !0, !0;
                        }
                        let o = String(n ?? "").replace("*", "").trim();
                        if (!o) return !0;
                        let i = this.fieldRequiredStatus.find((e1)=>F(e1.label, o));
                        if ("function" == typeof p.sendProgressPatchMessage) (0, p.sendProgressPatchMessage)({
                            sessionId: this.progressSessionId,
                            fieldResult: {
                                label: o,
                                status: e1
                            },
                            requiredField: i ? {
                                label: i.label,
                                required: i.required
                            } : void 0
                        });
                        else {
                            let { missingFields: e1, filledField: t } = this.dedup_fields();
                            (0, p.sendProgressMessage)({
                                missingFields: e1,
                                filledFields: t,
                                fieldRequiredStatus: this.fieldRequiredStatus,
                                currentField: null
                            }, this.progressSessionId, this.userInfo);
                        }
                        return !0;
                    }
                });
            this.missingFields = new Proxy([], e1("missing")), this.filledFields = new Proxy([], e1("filled"));
        }, this.dedup_fields = ()=>{
            let e1 = [], t = [], r1 = new Set([]);
            for (let t of this.missingFields)t && (t = t.replace("*", "").trim(), r1.has(t) || (e1.push(t), r1.add(t)));
            for (let e1 of (r1 = new Set([]), this.filledFields))e1 && (e1 = e1.replace("*", "").trim(), r1.has(e1) || (t.push(e1), r1.add(e1)));
            return {
                missingFields: e1,
                filledField: t
            };
        }, this.generateSubmitStatus = (e1)=>{
            let { missingFields: t, filledField: r1 } = this.dedup_fields(), n = this.fieldRequiredStatus.map((e1)=>e1.label), o = this.fieldRequiredStatus.filter((e1)=>e1.required).map((e1)=>e1.label), i = (0, s.intersection)(o, r1), a = {
                status: e1,
                url: window.location.href,
                version: (0, g.getExtensionVersion)(),
                requiredFields: o,
                missingFields: t,
                filledFields: r1,
                filledCount: r1.length,
                requiredCount: o.length,
                filledRequiredCount: i.length,
                filledRequiredFields: i,
                totalCount: n.length,
                totalFields: n,
                userInput: [],
                requestTime: Number(((this.requestTime - this.startTime) / 1e3).toFixed(2)),
                fillTime: Number(((Date.now() - this.requestTime) / 1e3).toFixed(2)),
                formData: (0, g.collectFormDataWithRepeatingGroups)()
            };
            return a;
        }, this.postStatus = async (e1)=>{
            let t = this.generateSubmitStatus(e1);
            await (0, u.sendToBackground)({
                name: "saveSubmitStatus",
                body: {
                    submitStatus: t,
                    status: "filling"
                }
            });
        }, this.findMatchKeyField = (e1)=>{
            for(let t in this.userInfo)if (F(e1, t)) return t;
            return null;
        }, this.fillInputTextField = async (e1, t, r1)=>{
            let n = this.findMatchKeyField(t);
            if (void 0 === r1 && (!n || this.userInfo?.[n] === "")) {
                this.missingFields.push(t);
                return;
            }
            await (0, C.fillDefaultInputField)(e1, r1 || (this.userInfo?.[n] ?? "")), this.filledFields.push(t);
        }, this.fillRadioCheckField = async (e1, t)=>{
            let r1 = this.findMatchKeyField(t);
            if (!r1 || this.userInfo?.[r1] === "") {
                this.missingFields.push(t);
                return;
            }
            let n = this.userInfo[r1], o = (e1.parentNode.innerText || e1.parentNode.parentNode.innerText || (0, b.getFirstOrderedNode)("./preceding::label[1]", e1).innerText).toLowerCase().trim().replace("*", "");
            if ("" === o || (Array.isArray(n) ? n : [
                n
            ]).some((e1)=>"" === e1)) {
                this.missingFields.push(t);
                return;
            }
            if ((Array.isArray(n) ? n : [
                n
            ]).some((e1)=>(0, i.isExactChoiceMatch)(o, e1)) || this.checkYesNo(Array.isArray(n) ? n[0] : n, o, t)) {
                await (0, E.fillCheckbox)(e1, !0), this.filledFields.push(t), await (0, x.delay)(200);
                return;
            }
            this.missingFields.includes(t) || this.missingFields.push(t);
        }, this.fillSelectField = async (e1, t)=>{
            let r1 = this.findMatchKeyField(t);
            if (this.userInfo?.domains?.includes("greenhouse") && (e1.classList?.contains("degree") || e1.classList?.contains("discipline"))) return;
            if (!r1 || this.userInfo?.[r1] === "") {
                e1.blur(), this.missingFields.push(t);
                return;
            }
            let n = Array.isArray(this.userInfo[r1]) ? this.userInfo[r1] : [
                this.userInfo[r1]
            ], o = new FocusEvent("focus", {
                bubbles: !0,
                cancelable: !0,
                view: window
            });
            if (e1.dispatchEvent(o), e1.focus(), e1.options && e1.options.length > 0) for(let r1 = 0; r1 < e1.options.length; r1++){
                let o = e1.options[r1];
                if (o && o?.value && o?.text && n.some((e1)=>F(e1, o.text))) {
                    o?.click(), o.dispatchEvent(new MouseEvent("mousedown", {
                        bubbles: !0,
                        cancelable: !0
                    })), o.dispatchEvent(new MouseEvent("mouseup", {
                        bubbles: !0,
                        cancelable: !0
                    })), o.selected = !0;
                    let r1 = new Event("change", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    e1.dispatchEvent(r1), e1.blur(), this.filledFields.push(t);
                    return;
                }
            }
            e1.blur(), this.missingFields.push(t);
        }, this.fillOriginSelectField = (e1, t, r1)=>{
            let n = e1.options;
            if (!n) {
                console.error("No options found for select element", r1);
                return;
            }
            for(let t = 0; t < n.length; t++)if (n[t].text === r1 || n[t].title === r1) {
                n[t].selected = !0, e1.dispatchEvent(new Event("change", {
                    bubbles: !0
                }));
                return;
            }
        }, this.fillUnstandardForm = async ()=>{}, this.fetchPdfAsBlob = async ()=>{
            let e1;
            let t = "";
            if (this.resumeInfo.useOriginalResume || f.agentOriginalResume && !f.agentTailorId ? t = (e1 = await (0, u.sendToBackground)({
                name: "getResumeBlob",
                body: {
                    resumeId: this.resumeInfo.id || f.agentResumeId
                }
            })).extension : this.resumeInfo.tailor ? (e1 = await (0, u.sendToBackground)({
                name: "getTailorResumeBlob",
                body: {
                    tailorResume: this.resumeInfo.tailorResume,
                    template: this.resumeInfo.template
                }
            }), t = "pdf") : this.resumeInfo.diagnoseId ? (e1 = await (0, u.sendToBackground)({
                name: "getBaseResumeBlob",
                body: {
                    diagnoseId: this.resumeInfo.diagnoseId,
                    template: this.resumeInfo.template
                }
            }), t = "pdf") : this.resumeInfo.id && (t = (e1 = await (0, u.sendToBackground)({
                name: "getResumeBlob",
                body: {
                    resumeId: this.resumeInfo.id
                }
            })).extension), !e1) throw Error("No resume found");
            let r1 = e1.base64URL, n = (0, l.default)(r1), o = new Blob([
                n
            ]), i = new DataTransfer, a = this.resumeInfo.resumeName.replace(/\.[^/.]+$/, "");
            return i.items.add(new File([
                o
            ], `${a}.${t}`, {
                type: h.MIME_TYPE[t] || h.MIME_TYPE.pdf,
                lastModified: Date.now()
            })), i;
        }, this.fillForm = async (e1 = !1)=>{
            if (this.startTime = Date.now(), this.beforeFillForm && await this.beforeFillForm(), this.formRules?.length > 0) {
                let t = await this.getElementRules(this.formRules.map((e1)=>(0, s.omit)(e1, ...k)), e1);
                if (window.top?.postMessage(w.cleanObject({
                    type: h.MESSAGE_EVENTS.agentStartFillingFields
                }), {
                    targetOrigin: "*"
                }), t && [
                    (0, y.HTTP_STATUS_CODES).BAD_REQUEST,
                    (0, y.HTTP_STATUS_CODES).PAYMENT_REQUIRED,
                    (0, y.HTTP_STATUS_CODES).INTERNAL_SERVER_ERROR,
                    (0, y.HTTP_STATUS_CODES).CLIENT_REQUEST_TIMEOUT
                ].includes(t)) return window !== window.top && window.top?.postMessage(w.cleanObject({
                    type: h.MESSAGE_EVENTS.sendHttpStatusIframe,
                    httpStatus: t
                }), {
                    targetOrigin: "*"
                }), t;
                if (t === y.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY) return window.top != window.top && window.top?.postMessage(w.cleanObject({
                    type: h.MESSAGE_EVENTS.sendHttpStatusIframe,
                    httpStatus: t
                }), {
                    targetOrigin: "*"
                }), t;
            } else if (0 === this.formRules.length) return;
            "taleo" !== this.source && await this.clickAddAction(), this.fieldCanbeFill?.length > 0 && await this.fillUnstandardForm(), this.requestTime = Date.now();
            let t = await this.doFill();
            return t;
        }, this.uploadFiles = async ()=>{
            if (!this.disableUploadResume && this.resumeInput) try {
                let e1 = await this.fetchPdfAsBlob();
                this.resumeInput?.files && (this.resumeInput.files = e1.files, this.resumeInput.dispatchEvent(new Event("change", {
                    bubbles: !0,
                    cancelable: !1
                })), this.fieldRequiredStatus.some((e1)=>"Resume/CV" === e1.label) || this.fieldRequiredStatus.push({
                    label: "Resume/CV",
                    required: !1
                }), this.filledFields.push("Resume/CV"));
            } catch (e1) {
                console.error("Error uploading resume:", e1);
            }
        }, this.init();
    }
    async init() {
        let e1 = window.location.href, t = new URL(e1).hostname;
        this.userInfo.domain = t;
        let r1 = await A.get(v.STORAGE_KEY.DISABLE_RESUME_UPLOAD);
        this.disableUploadResume = r1;
    }
    async getSiteToken() {
        if (this.token) return this.token;
        let e1 = await (0, u.sendToBackground)({
            name: "getSiteToken",
            body: {
                url: (0, g.removeEndStrings)(window.location.href)
            }
        });
        return this.token = e1, e1;
    }
    async getElementRules(e1, t) {
        let r1 = await this.getSiteToken(), n = await (0, u.sendToBackground)({
            name: "getGptResults",
            body: {
                params: {
                    token: r1,
                    url: (0, g.removeEndStrings)(window.location.href),
                    elements: e1,
                    parser: "internal",
                    source: this.source ?? "autoFill",
                    fromAgent: !!(t || f.agentTailorId || f.agentResumeId),
                    ...this.resumeInfo?.id && {
                        resumeId: this.resumeInfo?.id
                    },
                    ...this.resumeInfo?.tailorId && {
                        tailorId: this.resumeInfo?.tailorId
                    }
                }
            }
        });
        return n?.data?.data === y.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY ? y.CUSTOM_ERROR_CODES.RESUME_MISSING_KEY : n?.data?.HTTP_STATUS ? n?.data?.HTTP_STATUS : void this.initUserData(n);
    }
    async initUserData(e1) {
        this.fieldRequiredStatus = this.formRules, this.fieldAPIResponse = e1.data?.fill_data_list, this.education = e1.data?.profile_data?.Education ?? e1.data?.profile_data?.education ?? e1.data?.profile_data?.EDUCATION ?? [], this.workExperience = e1.data?.profile_data?.Employment ?? e1.data?.profile_data?.employment ?? e1.data?.profile_data?.EMPLOYMENT ?? [], this.skills = e1.data?.profile_data?.skills;
        let t = e1.data?.profile_data?.state;
        this.fieldAPIResponse?.forEach((e1)=>{
            if (e1?.name) {
                let r1 = /^.*state.*reside\sin.*$/i;
                e1.name.match(r1) ? this.userInfo[e1?.name] = d.STATE_MAP[t] : this.userInfo[e1?.name] = e1?.value;
            }
            this.fieldCanbeFill.push(e1);
        }), this.formatUserInfo(e1.data), this.submitButtonText = this.submitButtonText ?? e1.data.submit_button, this.bindSubmitButton();
    }
    async bindSubmitButton() {
        let e1 = `//*[contains(text(), ${(0, b.escapeXPath)(this.submitButtonText)}) or contains(@value, ${(0, b.escapeXPath)(this.submitButtonText)})]`, t = (0, b.getFirstOrderedNode)(e1);
        t && t.addEventListener("click", this.handleFormSubmit.bind(this));
    }
    async handleFormSubmit(e1) {
        let t = e1.target, r1 = this.generateSubmitStatus("submit"), n = [
            "field-error-msg",
            "helper-text--error"
        ], o = n.map((e1)=>`.${e1}`).join(","), i = document.querySelectorAll(o);
        (0, s.isEmpty)(i) && await (0, u.sendToBackground)({
            name: "saveSubmitStatus",
            body: {
                submitStatus: r1,
                status: "submit",
                submittedForm: t
            }
        });
    }
    generateResult() {
        let { missingFields: e1, filledField: t } = this.dedup_fields(), r1 = {
            missingFields: e1,
            filledFields: t,
            fieldRequiredStatus: this.fieldRequiredStatus.map((e1)=>(0, s.omit)(e1, ...k)),
            userAutoFillResponse: this.userInfo
        };
        return window.top?.postMessage(w.cleanObject({
            type: h.MESSAGE_EVENTS.autoFillResultFromIframe,
            data: r1
        }), {
            targetOrigin: "*"
        }), r1;
    }
    checkYesNo(e1, t, r1) {
        return "true" === e1.toLowerCase() && "yes" === t.toLowerCase() || "false" === e1.toLowerCase() && "no" === t.toLowerCase() || t.includes("have read") && "true" === e1.toLowerCase() || F(t, r1) && "true" === e1.toLowerCase();
    }
    triggerEvents(e1, t) {
        t.forEach((t)=>{
            let r1 = new Event(t, {
                bubbles: !0,
                cancelable: !0
            });
            r1 = [
                "mousedown",
                "mouseup",
                "click"
            ].includes(t) ? new MouseEvent(t, {
                bubbles: !0,
                cancelable: !0
            }) : [
                "keydown",
                "keyup",
                "keypress"
            ].includes(t) ? new KeyboardEvent(t, {
                bubbles: !0,
                cancelable: !0,
                keyCode: 13
            }) : new Event(t, {
                bubbles: !0,
                cancelable: !0
            }), e1 && e1.dispatchEvent(r1);
        });
    }
    initTypeIndex() {}
    async doFill() {
        return this.initFields(), await this.fillBasicInfo(), await this.executeAdditionalTasks(), await this.postStatus("filling"), this.generateResult();
    }
    async fillBasicInfo() {
        let e1 = [];
        for (let t of this.formRules){
            let r1 = this.getFormElementExecutor(t), n = Array.isArray(r1) ? r1 : [
                r1
            ];
            e1.push(...n);
        }
        (0, s.isEmpty)(e1) || await (0, x.executeSequentially)(...e1);
    }
    getFormElementExecutor(e1, t) {
        try {
            t = (0, s.isEmpty)(t) ? this.userInfo : t;
            let { label: r1 } = e1, o = [], i = this.findMatchKeyField(r1);
            if (e1.type === h.FIELD_TYPE.EDUCATION || e1.type === h.FIELD_TYPE.EMPLOYMENT) {
                let t = {
                    [h.FIELD_TYPE.EDUCATION]: n.education,
                    [h.FIELD_TYPE.EMPLOYMENT]: n.workExperience
                };
                if (!this.hardCodeConfig[t[e1.type]]) return console.error(`Hardcode config for ${e1.type} is missing`), [];
                let r1 = this.fillHardCodeSection(this.hardCodeConfig[t[e1.type]]);
                if (r1 && r1.length > 0) return this.filledFields.push(this.hardCodeConfig[t[e1.type]].key === n.education ? "Education" : "Employment"), r1;
                return this.missingFields.push(this.hardCodeConfig[t[e1.type]].key === n.education ? "Education" : "Employment"), [];
            }
            if (!i || (0, s.isEmpty)(t?.[i])) return this.missingFields.push(r1), [];
            let a = this.executeMap[e1.type];
            if (e1.type === h.FIELD_TYPE.CHECKBOX) {
                let t = e1;
                return t?.$checkboxs?.map((e1)=>{
                    o.push({
                        func: this[a].bind(this, e1, r1),
                        delay: 0
                    });
                }), o;
            }
            let l = e1;
            if (this.shouldSkipElement(l.$input)) return o;
            return o.push({
                func: this[a].bind(this, l.$input, r1),
                delay: 0
            }), o;
        } catch (e1) {
            console.error("Error in getFormElementExecutor:", e1);
        }
    }
    async clickAddAction() {
        for(let e1 in this.hardCodeConfig){
            let t = this.hardCodeConfig[e1], r1 = (0, b.getFirstOrderedNode)(t.container);
            if (!r1) continue;
            let o = (0, b.getOrderedNodes)(t.snapshot, r1), i = t.key === n.education ? this.education : this.workExperience;
            await this.clickAddItemButton(r1, this.hardCodeConfig[t.key].addButton, i.length - o.length);
        }
    }
    async clickAddItemButton(e1, t, r1) {
        let n = (0, b.getFirstOrderedNode)(t, e1);
        if (n) {
            for(let e1 = 0; e1 < r1; e1++)n.click(), await (0, x.delay)(500);
            await (0, x.delay)(500);
        }
    }
    fillHardCodeSection(e1) {
        let t = (0, b.getFirstOrderedNode)(e1.container);
        if (!t) return;
        let r1 = (0, b.getOrderedNodes)(e1.snapshot, t), o = e1.key === n.education ? this.education : this.workExperience, i = o?.flatMap((t, n)=>{
            let o = r1[n];
            if (o) return this.fillHardCodeItem(e1.fields, t, o);
        });
        return i.filter((e1)=>!(0, s.isNil)(e1));
    }
    fillHardCodeItem(e1, t, r1) {
        return e1.map(({ key: e1, alternateKey: n, format: o, isCheckbox: i, type: a, xpath: l, delay: s = 2 })=>{
            let u = (0, b.getFirstOrderedNode)(l, r1), c = t[e1] ?? t[n];
            o && (c = o(c, t));
            let d = this.executeMap[a];
            return u ? d ? {
                func: async ()=>{
                    await this[d](u, e1, c);
                },
                delay: s
            } : {
                func: async ()=>{
                    c && await (0, C.fillDefaultInputField)(u, c);
                },
                delay: s
            } : null;
        });
    }
    async beforeFillForm() {}
}
var _c;
$RefreshReg$(_c, "F");

},{}]},["a61k3","6KXRH"], "6KXRH", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUMsRUFBRSxDQUFDLEdBQUUsSUFBRTtnQkFBRTtnQkFBRSxPQUFNO1lBQUMsSUFBRTtnQkFBQyxNQUFLO29CQUFVLEtBQUcsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLHFCQUFvQixFQUFHLEdBQUU7Z0JBQUU7Z0JBQUUsT0FBTTtZQUFDLElBQUU7UUFBSTtJQUFFO0lBQUMsTUFBTSxpQkFBZ0IsQ0FBQztBQUFDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1hZGU1ZjIxYmU2OWQzZmViLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL2NyYXdsZXIvbmV3QmFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxjcmF3bGVyXFxcXG5ld0Jhc2UuanNcIixcImJ1bmRsZUlkXCI6XCI2YmE1NDc1ZDMxMGZmMWU2XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogaWZyT2RcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL2NyYXdsZXIvbmV3QmFzZS5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vdXRpbHMgLT4gZE1RV04gID0+ICBzcmMvY29udGVudHMvY3Jhd2xlci91dGlscy5qc1xyXG4gKiAgIC4vdXRpbHMvY2hlY2tib3ggLT4gNU1QNnUgID0+ICBzcmMvY29udGVudHMvY3Jhd2xlci91dGlscy9jaGVja2JveC5qc1xyXG4gKiAgIC4vdXRpbHMvZXhlY3V0b3IgLT4gaUFaTU4gID0+ICBzcmMvY29udGVudHMvY3Jhd2xlci91dGlscy9leGVjdXRvci5qc1xyXG4gKiAgIC4vdXRpbHMvaW5wdXQgLT4gaVBJdlQgID0+ICBzcmMvY29udGVudHMvY3Jhd2xlci91dGlscy9pbnB1dC5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgQHBsYXNtb2hxL21lc3NhZ2luZyAtPiA5Mkd5QiAgPT4gIEBwbGFzbW9ocS9tZXNzYWdpbmcuanNcclxuICogICBAcGxhc21vaHEvc3RvcmFnZSAtPiA5UkNSZSAgPT4gIEBwbGFzbW9ocS9zdG9yYWdlLmpzXHJcbiAqICAgZGF0YXVybC10by1ibG9iIC0+IGRxanZOICA9PiAgZGF0YXVybC10by1ibG9iLmpzXHJcbiAqICAgbG9kYXNoLWVzIC0+IHA0UkJlICA9PiAgbG9kYXNoLWVzLmpzXHJcbiAqICAgfmNvbnN0YW50cyAtPiA2VkVqUiAgPT4gIHNyYy9jb25zdGFudHMuanNcclxuICogICB+Y29udGVudHMgLT4gZDR0ajcgID0+ICBzcmMvY29udGVudHMuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2ggLT4gNm1rSTQgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2guanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy90cmFjayAtPiBoNDc5YiAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL3RyYWNrLmpzXHJcbiAqICAgfmNvcmUvYXV0b2ZpbGwtcHJvZ3Jlc3MtcHJvdG9jb2wgLT4gMmFFTE8gID0+ICBzcmMvY29yZS9hdXRvZmlsbC1wcm9ncmVzcy1wcm90b2NvbC5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+Y29yZS91dGlscyAtPiBhVERoNSAgPT4gIHNyYy9jb3JlL3V0aWxzLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH5lbnVtcy9odHRwIC0+IGVKRnFqICA9PiAgc3JjL2VudW1zL2h0dHAuanNcclxuICogICB+ZW51bXMvc3RvcmFnZSAtPiBlMldNNCAgPT4gIHNyYy9lbnVtcy9zdG9yYWdlLmpzXHJcbiAqICAgfnV0aWxzL3N0cmluZyAtPiBpakVGaSAgPT4gIHNyYy91dGlscy9zdHJpbmcuanNcclxuICovXHJcblxyXG52YXIgbixvPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO28uZGVmaW5lSW50ZXJvcEZsYWcociksby5leHBvcnQocixcIkhBUkRDT0RFX0tFWVwiLCgpPT5uKSxvLmV4cG9ydChyLFwiY29uZmlnXCIsKCk9PlQpLG8uZXhwb3J0KHIsXCJpc01hdGNoZWRcIiwoKT0+Riksby5leHBvcnQocixcIkF1dG9GaWxsQmFzZVwiLCgpPT5JKTt2YXIgaT1lKFwifmNvbnRlbnRzL21ldGhvZHMvY2hvaWNlLW1hdGNoXCIpLGE9ZShcImRhdGF1cmwtdG8tYmxvYlwiKSxsPW8uaW50ZXJvcERlZmF1bHQoYSkscz1lKFwibG9kYXNoLWVzXCIpLHU9ZShcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIiksYz1lKFwiQHBsYXNtb2hxL3N0b3JhZ2VcIiksZD1lKFwifmNvbnN0YW50c1wiKSxmPWUoXCJ+Y29udGVudHNcIikscD1lKFwifmNvbnRlbnRzL21ldGhvZHMvdHJhY2tcIiksbT1lKFwifmNvcmUvYXV0b2ZpbGwtcHJvZ3Jlc3MtcHJvdG9jb2xcIiksaD1lKFwifmNvcmUvZW51bXNcIiksZz1lKFwifmNvcmUvdXRpbHNcIiksYj1lKFwifmNvcmUveHBhdGhcIikseT1lKFwifmVudW1zL2h0dHBcIiksdj1lKFwifmVudW1zL3N0b3JhZ2VcIiksdz1lKFwifnV0aWxzL3N0cmluZ1wiKSxTPWUoXCIuL3V0aWxzXCIpLEU9ZShcIi4vdXRpbHMvY2hlY2tib3hcIikseD1lKFwiLi91dGlscy9leGVjdXRvclwiKSxDPWUoXCIuL3V0aWxzL2lucHV0XCIpO2xldCBBPW5ldyBjLlN0b3JhZ2Usaz1bXCIkaW5wdXRcIixcIiRsYWJlbFwiLFwiJGZpZWxkUm93XCIsXCJjaGlsZHJlblwiLFwiJGNoZWNrYm94c1wiLFwiJHJhZGlvUGFyZW50XCIsXCIkcmFkaW9zXCIsXCJfX3pvaG9DbHVzdGVyUm9vdFwiLFwiX196b2hvU2VtYW50aWNUeXBlXCJdOyFmdW5jdGlvbihlKXtlLmVkdWNhdGlvbj1cImVkdWNhdGlvblwiLGUud29ya0V4cGVyaWVuY2U9XCJ3b3JrRXhwZXJpZW5jZVwifShufHwobj17fSkpO2xldCBUPXttYXRjaGVzOltcIjxhbGxfdXJscz5cIl0sYWxsX2ZyYW1lczohMH07ZnVuY3Rpb24gRihlLHQpe2lmKCFlfHwhdHx8XCJzdHJpbmdcIiE9dHlwZW9mIGV8fFwic3RyaW5nXCIhPXR5cGVvZiB0KXJldHVybiExO2xldCByPVMucmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMoZSk/LnJlcGxhY2UoL1xccypcXCpcXHMqL2csXCJcIik/LnRvTG93ZXJDYXNlKCkudHJpbSgpLG49Uy5yZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyh0KT8ucmVwbGFjZSgvXFxzKlxcKlxccyovZyxcIlwiKT8udG9Mb3dlckNhc2UoKS50cmltKCk7cmV0dXJuISFyJiYhIW4mJnI9PT1ufWNsYXNzIEl7Y29uc3RydWN0b3IoKXt0aGlzLnVzZXJJbmZvPXt9LHRoaXMuZWR1Y2F0aW9uPVtdLHRoaXMud29ya0V4cGVyaWVuY2U9W10sdGhpcy5za2lsbHM9W10sdGhpcy51c2VySW5wdXQ9W10sdGhpcy5zdWJtaXRCdXR0b25UZXh0PVwiXCIsdGhpcy5maWVsZENhbmJlRmlsbD1bXSx0aGlzLmZpZWxkUmVxdWlyZWRTdGF0dXM9W10sdGhpcy5maWVsZEFQSVJlc3BvbnNlPVtdLHRoaXMubWlzc2luZ0ZpZWxkcz1bXSx0aGlzLmZpbGxlZEZpZWxkcz1bXSx0aGlzLnByb2dyZXNzU2Vzc2lvbklkPSgwLG0uY3JlYXRlQXV0b2ZpbGxQcm9ncmVzc1Nlc3Npb25JZCkoKSx0aGlzLmhhc1NlbnRQcm9ncmVzc1NuYXBzaG90PSExLHRoaXMuaGFyZENvZGVLZXlzPVtdLHRoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZT0hMSx0aGlzLmZvcm1SdWxlcz1bXSx0aGlzLnJlc3VtZUlucHV0PW51bGwsdGhpcy5zb3VyY2U9XCJhdXRvRmlsbFwiLHRoaXMuaW5pdEZpZWxkcz0oKT0+e3RoaXMucHJvZ3Jlc3NTZXNzaW9uSWQ9KDAsbS5jcmVhdGVBdXRvZmlsbFByb2dyZXNzU2Vzc2lvbklkKSgpLHRoaXMuaGFzU2VudFByb2dyZXNzU25hcHNob3Q9ITE7bGV0IGU9ZT0+KHtzZXQ6KHQscixuKT0+e2lmKHRbcl09bixcImxlbmd0aFwiPT09cnx8IS9eXFxkKyQvLnRlc3QocikpcmV0dXJuITA7aWYoIXRoaXMuaGFzU2VudFByb2dyZXNzU25hcHNob3Qpe2xldHttaXNzaW5nRmllbGRzOmUsZmlsbGVkRmllbGQ6dH09dGhpcy5kZWR1cF9maWVsZHMoKTtyZXR1cm4oMCxwLnNlbmRQcm9ncmVzc01lc3NhZ2UpKHttaXNzaW5nRmllbGRzOmUsZmlsbGVkRmllbGRzOnQsZmllbGRSZXF1aXJlZFN0YXR1czp0aGlzLmZpZWxkUmVxdWlyZWRTdGF0dXMsY3VycmVudEZpZWxkOm51bGx9LHRoaXMucHJvZ3Jlc3NTZXNzaW9uSWQsdGhpcy51c2VySW5mbyksdGhpcy5oYXNTZW50UHJvZ3Jlc3NTbmFwc2hvdD0hMCwhMH1sZXQgbz1TdHJpbmcobj8/XCJcIikucmVwbGFjZShcIipcIixcIlwiKS50cmltKCk7aWYoIW8pcmV0dXJuITA7bGV0IGk9dGhpcy5maWVsZFJlcXVpcmVkU3RhdHVzLmZpbmQoZT0+RihlLmxhYmVsLG8pKTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBwLnNlbmRQcm9ncmVzc1BhdGNoTWVzc2FnZSkoMCxwLnNlbmRQcm9ncmVzc1BhdGNoTWVzc2FnZSkoe3Nlc3Npb25JZDp0aGlzLnByb2dyZXNzU2Vzc2lvbklkLGZpZWxkUmVzdWx0OntsYWJlbDpvLHN0YXR1czplfSxyZXF1aXJlZEZpZWxkOmk/e2xhYmVsOmkubGFiZWwscmVxdWlyZWQ6aS5yZXF1aXJlZH06dm9pZCAwfSk7ZWxzZXtsZXR7bWlzc2luZ0ZpZWxkczplLGZpbGxlZEZpZWxkOnR9PXRoaXMuZGVkdXBfZmllbGRzKCk7KDAscC5zZW5kUHJvZ3Jlc3NNZXNzYWdlKSh7bWlzc2luZ0ZpZWxkczplLGZpbGxlZEZpZWxkczp0LGZpZWxkUmVxdWlyZWRTdGF0dXM6dGhpcy5maWVsZFJlcXVpcmVkU3RhdHVzLGN1cnJlbnRGaWVsZDpudWxsfSx0aGlzLnByb2dyZXNzU2Vzc2lvbklkLHRoaXMudXNlckluZm8pfXJldHVybiEwfX0pO3RoaXMubWlzc2luZ0ZpZWxkcz1uZXcgUHJveHkoW10sZShcIm1pc3NpbmdcIikpLHRoaXMuZmlsbGVkRmllbGRzPW5ldyBQcm94eShbXSxlKFwiZmlsbGVkXCIpKX0sdGhpcy5kZWR1cF9maWVsZHM9KCk9PntsZXQgZT1bXSx0PVtdLHI9bmV3IFNldChbXSk7Zm9yKGxldCB0IG9mIHRoaXMubWlzc2luZ0ZpZWxkcyl0JiYodD10LnJlcGxhY2UoXCIqXCIsXCJcIikudHJpbSgpLHIuaGFzKHQpfHwoZS5wdXNoKHQpLHIuYWRkKHQpKSk7Zm9yKGxldCBlIG9mKHI9bmV3IFNldChbXSksdGhpcy5maWxsZWRGaWVsZHMpKWUmJihlPWUucmVwbGFjZShcIipcIixcIlwiKS50cmltKCksci5oYXMoZSl8fCh0LnB1c2goZSksci5hZGQoZSkpKTtyZXR1cm57bWlzc2luZ0ZpZWxkczplLGZpbGxlZEZpZWxkOnR9fSx0aGlzLmdlbmVyYXRlU3VibWl0U3RhdHVzPWU9PntsZXR7bWlzc2luZ0ZpZWxkczp0LGZpbGxlZEZpZWxkOnJ9PXRoaXMuZGVkdXBfZmllbGRzKCksbj10aGlzLmZpZWxkUmVxdWlyZWRTdGF0dXMubWFwKGU9PmUubGFiZWwpLG89dGhpcy5maWVsZFJlcXVpcmVkU3RhdHVzLmZpbHRlcihlPT5lLnJlcXVpcmVkKS5tYXAoZT0+ZS5sYWJlbCksaT0oMCxzLmludGVyc2VjdGlvbikobyxyKSxhPXtzdGF0dXM6ZSx1cmw6d2luZG93LmxvY2F0aW9uLmhyZWYsdmVyc2lvbjooMCxnLmdldEV4dGVuc2lvblZlcnNpb24pKCkscmVxdWlyZWRGaWVsZHM6byxtaXNzaW5nRmllbGRzOnQsZmlsbGVkRmllbGRzOnIsZmlsbGVkQ291bnQ6ci5sZW5ndGgscmVxdWlyZWRDb3VudDpvLmxlbmd0aCxmaWxsZWRSZXF1aXJlZENvdW50OmkubGVuZ3RoLGZpbGxlZFJlcXVpcmVkRmllbGRzOmksdG90YWxDb3VudDpuLmxlbmd0aCx0b3RhbEZpZWxkczpuLHVzZXJJbnB1dDpbXSxyZXF1ZXN0VGltZTpOdW1iZXIoKCh0aGlzLnJlcXVlc3RUaW1lLXRoaXMuc3RhcnRUaW1lKS8xZTMpLnRvRml4ZWQoMikpLGZpbGxUaW1lOk51bWJlcigoKERhdGUubm93KCktdGhpcy5yZXF1ZXN0VGltZSkvMWUzKS50b0ZpeGVkKDIpKSxmb3JtRGF0YTooMCxnLmNvbGxlY3RGb3JtRGF0YVdpdGhSZXBlYXRpbmdHcm91cHMpKCl9O3JldHVybiBhfSx0aGlzLnBvc3RTdGF0dXM9YXN5bmMgZT0+e2xldCB0PXRoaXMuZ2VuZXJhdGVTdWJtaXRTdGF0dXMoZSk7YXdhaXQgKDAsdS5zZW5kVG9CYWNrZ3JvdW5kKSh7bmFtZTpcInNhdmVTdWJtaXRTdGF0dXNcIixib2R5OntzdWJtaXRTdGF0dXM6dCxzdGF0dXM6XCJmaWxsaW5nXCJ9fSl9LHRoaXMuZmluZE1hdGNoS2V5RmllbGQ9ZT0+e2ZvcihsZXQgdCBpbiB0aGlzLnVzZXJJbmZvKWlmKEYoZSx0KSlyZXR1cm4gdDtyZXR1cm4gbnVsbH0sdGhpcy5maWxsSW5wdXRUZXh0RmllbGQ9YXN5bmMoZSx0LHIpPT57bGV0IG49dGhpcy5maW5kTWF0Y2hLZXlGaWVsZCh0KTtpZih2b2lkIDA9PT1yJiYoIW58fHRoaXMudXNlckluZm8/LltuXT09PVwiXCIpKXt0aGlzLm1pc3NpbmdGaWVsZHMucHVzaCh0KTtyZXR1cm59YXdhaXQgKDAsQy5maWxsRGVmYXVsdElucHV0RmllbGQpKGUscnx8KHRoaXMudXNlckluZm8/LltuXT8/XCJcIikpLHRoaXMuZmlsbGVkRmllbGRzLnB1c2godCl9LHRoaXMuZmlsbFJhZGlvQ2hlY2tGaWVsZD1hc3luYyhlLHQpPT57bGV0IHI9dGhpcy5maW5kTWF0Y2hLZXlGaWVsZCh0KTtpZighcnx8dGhpcy51c2VySW5mbz8uW3JdPT09XCJcIil7dGhpcy5taXNzaW5nRmllbGRzLnB1c2godCk7cmV0dXJufWxldCBuPXRoaXMudXNlckluZm9bcl0sbz0oZS5wYXJlbnROb2RlLmlubmVyVGV4dHx8ZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaW5uZXJUZXh0fHwoMCxiLmdldEZpcnN0T3JkZXJlZE5vZGUpKFwiLi9wcmVjZWRpbmc6OmxhYmVsWzFdXCIsZSkuaW5uZXJUZXh0KS50b0xvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKFwiKlwiLFwiXCIpO2lmKFwiXCI9PT1vfHwoQXJyYXkuaXNBcnJheShuKT9uOltuXSkuc29tZShlPT5cIlwiPT09ZSkpe3RoaXMubWlzc2luZ0ZpZWxkcy5wdXNoKHQpO3JldHVybn1pZigoQXJyYXkuaXNBcnJheShuKT9uOltuXSkuc29tZShlPT4oMCxpLmlzRXhhY3RDaG9pY2VNYXRjaCkobyxlKSl8fHRoaXMuY2hlY2tZZXNObyhBcnJheS5pc0FycmF5KG4pP25bMF06bixvLHQpKXthd2FpdCAoMCxFLmZpbGxDaGVja2JveCkoZSwhMCksdGhpcy5maWxsZWRGaWVsZHMucHVzaCh0KSxhd2FpdCAoMCx4LmRlbGF5KSgyMDApO3JldHVybn10aGlzLm1pc3NpbmdGaWVsZHMuaW5jbHVkZXModCl8fHRoaXMubWlzc2luZ0ZpZWxkcy5wdXNoKHQpfSx0aGlzLmZpbGxTZWxlY3RGaWVsZD1hc3luYyhlLHQpPT57bGV0IHI9dGhpcy5maW5kTWF0Y2hLZXlGaWVsZCh0KTtpZih0aGlzLnVzZXJJbmZvPy5kb21haW5zPy5pbmNsdWRlcyhcImdyZWVuaG91c2VcIikmJihlLmNsYXNzTGlzdD8uY29udGFpbnMoXCJkZWdyZWVcIil8fGUuY2xhc3NMaXN0Py5jb250YWlucyhcImRpc2NpcGxpbmVcIikpKXJldHVybjtpZighcnx8dGhpcy51c2VySW5mbz8uW3JdPT09XCJcIil7ZS5ibHVyKCksdGhpcy5taXNzaW5nRmllbGRzLnB1c2godCk7cmV0dXJufWxldCBuPUFycmF5LmlzQXJyYXkodGhpcy51c2VySW5mb1tyXSk/dGhpcy51c2VySW5mb1tyXTpbdGhpcy51c2VySW5mb1tyXV0sbz1uZXcgRm9jdXNFdmVudChcImZvY3VzXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCx2aWV3OndpbmRvd30pO2lmKGUuZGlzcGF0Y2hFdmVudChvKSxlLmZvY3VzKCksZS5vcHRpb25zJiZlLm9wdGlvbnMubGVuZ3RoPjApZm9yKGxldCByPTA7cjxlLm9wdGlvbnMubGVuZ3RoO3IrKyl7bGV0IG89ZS5vcHRpb25zW3JdO2lmKG8mJm8/LnZhbHVlJiZvPy50ZXh0JiZuLnNvbWUoZT0+RihlLG8udGV4dCkpKXtvPy5jbGljaygpLG8uZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksby5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2V1cFwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksby5zZWxlY3RlZD0hMDtsZXQgcj1uZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSk7ZS5kaXNwYXRjaEV2ZW50KHIpLGUuYmx1cigpLHRoaXMuZmlsbGVkRmllbGRzLnB1c2godCk7cmV0dXJufX1lLmJsdXIoKSx0aGlzLm1pc3NpbmdGaWVsZHMucHVzaCh0KX0sdGhpcy5maWxsT3JpZ2luU2VsZWN0RmllbGQ9KGUsdCxyKT0+e2xldCBuPWUub3B0aW9ucztpZighbil7Y29uc29sZS5lcnJvcihcIk5vIG9wdGlvbnMgZm91bmQgZm9yIHNlbGVjdCBlbGVtZW50XCIscik7cmV0dXJufWZvcihsZXQgdD0wO3Q8bi5sZW5ndGg7dCsrKWlmKG5bdF0udGV4dD09PXJ8fG5bdF0udGl0bGU9PT1yKXtuW3RdLnNlbGVjdGVkPSEwLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKTtyZXR1cm59fSx0aGlzLmZpbGxVbnN0YW5kYXJkRm9ybT1hc3luYygpPT57fSx0aGlzLmZldGNoUGRmQXNCbG9iPWFzeW5jKCk9PntsZXQgZTtsZXQgdD1cIlwiO2lmKHRoaXMucmVzdW1lSW5mby51c2VPcmlnaW5hbFJlc3VtZXx8Zi5hZ2VudE9yaWdpbmFsUmVzdW1lJiYhZi5hZ2VudFRhaWxvcklkP3Q9KGU9YXdhaXQgKDAsdS5zZW5kVG9CYWNrZ3JvdW5kKSh7bmFtZTpcImdldFJlc3VtZUJsb2JcIixib2R5OntyZXN1bWVJZDp0aGlzLnJlc3VtZUluZm8uaWR8fGYuYWdlbnRSZXN1bWVJZH19KSkuZXh0ZW5zaW9uOnRoaXMucmVzdW1lSW5mby50YWlsb3I/KGU9YXdhaXQgKDAsdS5zZW5kVG9CYWNrZ3JvdW5kKSh7bmFtZTpcImdldFRhaWxvclJlc3VtZUJsb2JcIixib2R5Ont0YWlsb3JSZXN1bWU6dGhpcy5yZXN1bWVJbmZvLnRhaWxvclJlc3VtZSx0ZW1wbGF0ZTp0aGlzLnJlc3VtZUluZm8udGVtcGxhdGV9fSksdD1cInBkZlwiKTp0aGlzLnJlc3VtZUluZm8uZGlhZ25vc2VJZD8oZT1hd2FpdCAoMCx1LnNlbmRUb0JhY2tncm91bmQpKHtuYW1lOlwiZ2V0QmFzZVJlc3VtZUJsb2JcIixib2R5OntkaWFnbm9zZUlkOnRoaXMucmVzdW1lSW5mby5kaWFnbm9zZUlkLHRlbXBsYXRlOnRoaXMucmVzdW1lSW5mby50ZW1wbGF0ZX19KSx0PVwicGRmXCIpOnRoaXMucmVzdW1lSW5mby5pZCYmKHQ9KGU9YXdhaXQgKDAsdS5zZW5kVG9CYWNrZ3JvdW5kKSh7bmFtZTpcImdldFJlc3VtZUJsb2JcIixib2R5OntyZXN1bWVJZDp0aGlzLnJlc3VtZUluZm8uaWR9fSkpLmV4dGVuc2lvbiksIWUpdGhyb3cgRXJyb3IoXCJObyByZXN1bWUgZm91bmRcIik7bGV0IHI9ZS5iYXNlNjRVUkwsbj0oMCxsLmRlZmF1bHQpKHIpLG89bmV3IEJsb2IoW25dKSxpPW5ldyBEYXRhVHJhbnNmZXIsYT10aGlzLnJlc3VtZUluZm8ucmVzdW1lTmFtZS5yZXBsYWNlKC9cXC5bXi8uXSskLyxcIlwiKTtyZXR1cm4gaS5pdGVtcy5hZGQobmV3IEZpbGUoW29dLGAke2F9LiR7dH1gLHt0eXBlOmguTUlNRV9UWVBFW3RdfHxoLk1JTUVfVFlQRS5wZGYsbGFzdE1vZGlmaWVkOkRhdGUubm93KCl9KSksaX0sdGhpcy5maWxsRm9ybT1hc3luYyhlPSExKT0+e2lmKHRoaXMuc3RhcnRUaW1lPURhdGUubm93KCksdGhpcy5iZWZvcmVGaWxsRm9ybSYmYXdhaXQgdGhpcy5iZWZvcmVGaWxsRm9ybSgpLHRoaXMuZm9ybVJ1bGVzPy5sZW5ndGg+MCl7bGV0IHQ9YXdhaXQgdGhpcy5nZXRFbGVtZW50UnVsZXModGhpcy5mb3JtUnVsZXMubWFwKGU9PigwLHMub21pdCkoZSwuLi5rKSksZSk7aWYod2luZG93LnRvcD8ucG9zdE1lc3NhZ2Uody5jbGVhbk9iamVjdCh7dHlwZTpoLk1FU1NBR0VfRVZFTlRTLmFnZW50U3RhcnRGaWxsaW5nRmllbGRzfSkse3RhcmdldE9yaWdpbjpcIipcIn0pLHQmJlsoMCx5LkhUVFBfU1RBVFVTX0NPREVTKS5CQURfUkVRVUVTVCwoMCx5LkhUVFBfU1RBVFVTX0NPREVTKS5QQVlNRU5UX1JFUVVJUkVELCgwLHkuSFRUUF9TVEFUVVNfQ09ERVMpLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwoMCx5LkhUVFBfU1RBVFVTX0NPREVTKS5DTElFTlRfUkVRVUVTVF9USU1FT1VUXS5pbmNsdWRlcyh0KSlyZXR1cm4gd2luZG93IT09d2luZG93LnRvcCYmd2luZG93LnRvcD8ucG9zdE1lc3NhZ2Uody5jbGVhbk9iamVjdCh7dHlwZTpoLk1FU1NBR0VfRVZFTlRTLnNlbmRIdHRwU3RhdHVzSWZyYW1lLGh0dHBTdGF0dXM6dH0pLHt0YXJnZXRPcmlnaW46XCIqXCJ9KSx0O2lmKHQ9PT15LkNVU1RPTV9FUlJPUl9DT0RFUy5SRVNVTUVfTUlTU0lOR19LRVkpcmV0dXJuIHdpbmRvdy50b3AhPXdpbmRvdy50b3AmJndpbmRvdy50b3A/LnBvc3RNZXNzYWdlKHcuY2xlYW5PYmplY3Qoe3R5cGU6aC5NRVNTQUdFX0VWRU5UUy5zZW5kSHR0cFN0YXR1c0lmcmFtZSxodHRwU3RhdHVzOnR9KSx7dGFyZ2V0T3JpZ2luOlwiKlwifSksdH1lbHNlIGlmKDA9PT10aGlzLmZvcm1SdWxlcy5sZW5ndGgpcmV0dXJuO1widGFsZW9cIiE9PXRoaXMuc291cmNlJiZhd2FpdCB0aGlzLmNsaWNrQWRkQWN0aW9uKCksdGhpcy5maWVsZENhbmJlRmlsbD8ubGVuZ3RoPjAmJmF3YWl0IHRoaXMuZmlsbFVuc3RhbmRhcmRGb3JtKCksdGhpcy5yZXF1ZXN0VGltZT1EYXRlLm5vdygpO2xldCB0PWF3YWl0IHRoaXMuZG9GaWxsKCk7cmV0dXJuIHR9LHRoaXMudXBsb2FkRmlsZXM9YXN5bmMoKT0+e2lmKCF0aGlzLmRpc2FibGVVcGxvYWRSZXN1bWUmJnRoaXMucmVzdW1lSW5wdXQpdHJ5e2xldCBlPWF3YWl0IHRoaXMuZmV0Y2hQZGZBc0Jsb2IoKTt0aGlzLnJlc3VtZUlucHV0Py5maWxlcyYmKHRoaXMucmVzdW1lSW5wdXQuZmlsZXM9ZS5maWxlcyx0aGlzLnJlc3VtZUlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMX0pKSx0aGlzLmZpZWxkUmVxdWlyZWRTdGF0dXMuc29tZShlPT5cIlJlc3VtZS9DVlwiPT09ZS5sYWJlbCl8fHRoaXMuZmllbGRSZXF1aXJlZFN0YXR1cy5wdXNoKHtsYWJlbDpcIlJlc3VtZS9DVlwiLHJlcXVpcmVkOiExfSksdGhpcy5maWxsZWRGaWVsZHMucHVzaChcIlJlc3VtZS9DVlwiKSl9Y2F0Y2goZSl7Y29uc29sZS5lcnJvcihcIkVycm9yIHVwbG9hZGluZyByZXN1bWU6XCIsZSl9fSx0aGlzLmluaXQoKX1hc3luYyBpbml0KCl7bGV0IGU9d2luZG93LmxvY2F0aW9uLmhyZWYsdD1uZXcgVVJMKGUpLmhvc3RuYW1lO3RoaXMudXNlckluZm8uZG9tYWluPXQ7bGV0IHI9YXdhaXQgQS5nZXQodi5TVE9SQUdFX0tFWS5ESVNBQkxFX1JFU1VNRV9VUExPQUQpO3RoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZT1yfWFzeW5jIGdldFNpdGVUb2tlbigpe2lmKHRoaXMudG9rZW4pcmV0dXJuIHRoaXMudG9rZW47bGV0IGU9YXdhaXQgKDAsdS5zZW5kVG9CYWNrZ3JvdW5kKSh7bmFtZTpcImdldFNpdGVUb2tlblwiLGJvZHk6e3VybDooMCxnLnJlbW92ZUVuZFN0cmluZ3MpKHdpbmRvdy5sb2NhdGlvbi5ocmVmKX19KTtyZXR1cm4gdGhpcy50b2tlbj1lLGV9YXN5bmMgZ2V0RWxlbWVudFJ1bGVzKGUsdCl7bGV0IHI9YXdhaXQgdGhpcy5nZXRTaXRlVG9rZW4oKSxuPWF3YWl0ICgwLHUuc2VuZFRvQmFja2dyb3VuZCkoe25hbWU6XCJnZXRHcHRSZXN1bHRzXCIsYm9keTp7cGFyYW1zOnt0b2tlbjpyLHVybDooMCxnLnJlbW92ZUVuZFN0cmluZ3MpKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSxlbGVtZW50czplLHBhcnNlcjpcImludGVybmFsXCIsc291cmNlOnRoaXMuc291cmNlPz9cImF1dG9GaWxsXCIsZnJvbUFnZW50OiEhKHR8fGYuYWdlbnRUYWlsb3JJZHx8Zi5hZ2VudFJlc3VtZUlkKSwuLi50aGlzLnJlc3VtZUluZm8/LmlkJiZ7cmVzdW1lSWQ6dGhpcy5yZXN1bWVJbmZvPy5pZH0sLi4udGhpcy5yZXN1bWVJbmZvPy50YWlsb3JJZCYme3RhaWxvcklkOnRoaXMucmVzdW1lSW5mbz8udGFpbG9ySWR9fX19KTtyZXR1cm4gbj8uZGF0YT8uZGF0YT09PXkuQ1VTVE9NX0VSUk9SX0NPREVTLlJFU1VNRV9NSVNTSU5HX0tFWT95LkNVU1RPTV9FUlJPUl9DT0RFUy5SRVNVTUVfTUlTU0lOR19LRVk6bj8uZGF0YT8uSFRUUF9TVEFUVVM/bj8uZGF0YT8uSFRUUF9TVEFUVVM6dm9pZCB0aGlzLmluaXRVc2VyRGF0YShuKX1hc3luYyBpbml0VXNlckRhdGEoZSl7dGhpcy5maWVsZFJlcXVpcmVkU3RhdHVzPXRoaXMuZm9ybVJ1bGVzLHRoaXMuZmllbGRBUElSZXNwb25zZT1lLmRhdGE/LmZpbGxfZGF0YV9saXN0LHRoaXMuZWR1Y2F0aW9uPWUuZGF0YT8ucHJvZmlsZV9kYXRhPy5FZHVjYXRpb24/P2UuZGF0YT8ucHJvZmlsZV9kYXRhPy5lZHVjYXRpb24/P2UuZGF0YT8ucHJvZmlsZV9kYXRhPy5FRFVDQVRJT04/P1tdLHRoaXMud29ya0V4cGVyaWVuY2U9ZS5kYXRhPy5wcm9maWxlX2RhdGE/LkVtcGxveW1lbnQ/P2UuZGF0YT8ucHJvZmlsZV9kYXRhPy5lbXBsb3ltZW50Pz9lLmRhdGE/LnByb2ZpbGVfZGF0YT8uRU1QTE9ZTUVOVD8/W10sdGhpcy5za2lsbHM9ZS5kYXRhPy5wcm9maWxlX2RhdGE/LnNraWxscztsZXQgdD1lLmRhdGE/LnByb2ZpbGVfZGF0YT8uc3RhdGU7dGhpcy5maWVsZEFQSVJlc3BvbnNlPy5mb3JFYWNoKGU9PntpZihlPy5uYW1lKXtsZXQgcj0vXi4qc3RhdGUuKnJlc2lkZVxcc2luLiokL2k7ZS5uYW1lLm1hdGNoKHIpP3RoaXMudXNlckluZm9bZT8ubmFtZV09ZC5TVEFURV9NQVBbdF06dGhpcy51c2VySW5mb1tlPy5uYW1lXT1lPy52YWx1ZX10aGlzLmZpZWxkQ2FuYmVGaWxsLnB1c2goZSl9KSx0aGlzLmZvcm1hdFVzZXJJbmZvKGUuZGF0YSksdGhpcy5zdWJtaXRCdXR0b25UZXh0PXRoaXMuc3VibWl0QnV0dG9uVGV4dD8/ZS5kYXRhLnN1Ym1pdF9idXR0b24sdGhpcy5iaW5kU3VibWl0QnV0dG9uKCl9YXN5bmMgYmluZFN1Ym1pdEJ1dHRvbigpe2xldCBlPWAvLypbY29udGFpbnModGV4dCgpLCAkeygwLGIuZXNjYXBlWFBhdGgpKHRoaXMuc3VibWl0QnV0dG9uVGV4dCl9KSBvciBjb250YWlucyhAdmFsdWUsICR7KDAsYi5lc2NhcGVYUGF0aCkodGhpcy5zdWJtaXRCdXR0b25UZXh0KX0pXWAsdD0oMCxiLmdldEZpcnN0T3JkZXJlZE5vZGUpKGUpO3QmJnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5oYW5kbGVGb3JtU3VibWl0LmJpbmQodGhpcykpfWFzeW5jIGhhbmRsZUZvcm1TdWJtaXQoZSl7bGV0IHQ9ZS50YXJnZXQscj10aGlzLmdlbmVyYXRlU3VibWl0U3RhdHVzKFwic3VibWl0XCIpLG49W1wiZmllbGQtZXJyb3ItbXNnXCIsXCJoZWxwZXItdGV4dC0tZXJyb3JcIl0sbz1uLm1hcChlPT5gLiR7ZX1gKS5qb2luKFwiLFwiKSxpPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobyk7KDAscy5pc0VtcHR5KShpKSYmYXdhaXQgKDAsdS5zZW5kVG9CYWNrZ3JvdW5kKSh7bmFtZTpcInNhdmVTdWJtaXRTdGF0dXNcIixib2R5OntzdWJtaXRTdGF0dXM6cixzdGF0dXM6XCJzdWJtaXRcIixzdWJtaXR0ZWRGb3JtOnR9fSl9Z2VuZXJhdGVSZXN1bHQoKXtsZXR7bWlzc2luZ0ZpZWxkczplLGZpbGxlZEZpZWxkOnR9PXRoaXMuZGVkdXBfZmllbGRzKCkscj17bWlzc2luZ0ZpZWxkczplLGZpbGxlZEZpZWxkczp0LGZpZWxkUmVxdWlyZWRTdGF0dXM6dGhpcy5maWVsZFJlcXVpcmVkU3RhdHVzLm1hcChlPT4oMCxzLm9taXQpKGUsLi4uaykpLHVzZXJBdXRvRmlsbFJlc3BvbnNlOnRoaXMudXNlckluZm99O3JldHVybiB3aW5kb3cudG9wPy5wb3N0TWVzc2FnZSh3LmNsZWFuT2JqZWN0KHt0eXBlOmguTUVTU0FHRV9FVkVOVFMuYXV0b0ZpbGxSZXN1bHRGcm9tSWZyYW1lLGRhdGE6cn0pLHt0YXJnZXRPcmlnaW46XCIqXCJ9KSxyfWNoZWNrWWVzTm8oZSx0LHIpe3JldHVyblwidHJ1ZVwiPT09ZS50b0xvd2VyQ2FzZSgpJiZcInllc1wiPT09dC50b0xvd2VyQ2FzZSgpfHxcImZhbHNlXCI9PT1lLnRvTG93ZXJDYXNlKCkmJlwibm9cIj09PXQudG9Mb3dlckNhc2UoKXx8dC5pbmNsdWRlcyhcImhhdmUgcmVhZFwiKSYmXCJ0cnVlXCI9PT1lLnRvTG93ZXJDYXNlKCl8fEYodCxyKSYmXCJ0cnVlXCI9PT1lLnRvTG93ZXJDYXNlKCl9dHJpZ2dlckV2ZW50cyhlLHQpe3QuZm9yRWFjaCh0PT57bGV0IHI9bmV3IEV2ZW50KHQse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pO3I9W1wibW91c2Vkb3duXCIsXCJtb3VzZXVwXCIsXCJjbGlja1wiXS5pbmNsdWRlcyh0KT9uZXcgTW91c2VFdmVudCh0LHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KTpbXCJrZXlkb3duXCIsXCJrZXl1cFwiLFwia2V5cHJlc3NcIl0uaW5jbHVkZXModCk/bmV3IEtleWJvYXJkRXZlbnQodCx7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGtleUNvZGU6MTN9KTpuZXcgRXZlbnQodCx7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSksZSYmZS5kaXNwYXRjaEV2ZW50KHIpfSl9aW5pdFR5cGVJbmRleCgpe31hc3luYyBkb0ZpbGwoKXtyZXR1cm4gdGhpcy5pbml0RmllbGRzKCksYXdhaXQgdGhpcy5maWxsQmFzaWNJbmZvKCksYXdhaXQgdGhpcy5leGVjdXRlQWRkaXRpb25hbFRhc2tzKCksYXdhaXQgdGhpcy5wb3N0U3RhdHVzKFwiZmlsbGluZ1wiKSx0aGlzLmdlbmVyYXRlUmVzdWx0KCl9YXN5bmMgZmlsbEJhc2ljSW5mbygpe2xldCBlPVtdO2ZvcihsZXQgdCBvZiB0aGlzLmZvcm1SdWxlcyl7bGV0IHI9dGhpcy5nZXRGb3JtRWxlbWVudEV4ZWN1dG9yKHQpLG49QXJyYXkuaXNBcnJheShyKT9yOltyXTtlLnB1c2goLi4ubil9KDAscy5pc0VtcHR5KShlKXx8YXdhaXQgKDAseC5leGVjdXRlU2VxdWVudGlhbGx5KSguLi5lKX1nZXRGb3JtRWxlbWVudEV4ZWN1dG9yKGUsdCl7dHJ5e3Q9KDAscy5pc0VtcHR5KSh0KT90aGlzLnVzZXJJbmZvOnQ7bGV0e2xhYmVsOnJ9PWUsbz1bXSxpPXRoaXMuZmluZE1hdGNoS2V5RmllbGQocik7aWYoZS50eXBlPT09aC5GSUVMRF9UWVBFLkVEVUNBVElPTnx8ZS50eXBlPT09aC5GSUVMRF9UWVBFLkVNUExPWU1FTlQpe2xldCB0PXtbaC5GSUVMRF9UWVBFLkVEVUNBVElPTl06bi5lZHVjYXRpb24sW2guRklFTERfVFlQRS5FTVBMT1lNRU5UXTpuLndvcmtFeHBlcmllbmNlfTtpZighdGhpcy5oYXJkQ29kZUNvbmZpZ1t0W2UudHlwZV1dKXJldHVybiBjb25zb2xlLmVycm9yKGBIYXJkY29kZSBjb25maWcgZm9yICR7ZS50eXBlfSBpcyBtaXNzaW5nYCksW107bGV0IHI9dGhpcy5maWxsSGFyZENvZGVTZWN0aW9uKHRoaXMuaGFyZENvZGVDb25maWdbdFtlLnR5cGVdXSk7aWYociYmci5sZW5ndGg+MClyZXR1cm4gdGhpcy5maWxsZWRGaWVsZHMucHVzaCh0aGlzLmhhcmRDb2RlQ29uZmlnW3RbZS50eXBlXV0ua2V5PT09bi5lZHVjYXRpb24/XCJFZHVjYXRpb25cIjpcIkVtcGxveW1lbnRcIikscjtyZXR1cm4gdGhpcy5taXNzaW5nRmllbGRzLnB1c2godGhpcy5oYXJkQ29kZUNvbmZpZ1t0W2UudHlwZV1dLmtleT09PW4uZWR1Y2F0aW9uP1wiRWR1Y2F0aW9uXCI6XCJFbXBsb3ltZW50XCIpLFtdfWlmKCFpfHwoMCxzLmlzRW1wdHkpKHQ/LltpXSkpcmV0dXJuIHRoaXMubWlzc2luZ0ZpZWxkcy5wdXNoKHIpLFtdO2xldCBhPXRoaXMuZXhlY3V0ZU1hcFtlLnR5cGVdO2lmKGUudHlwZT09PWguRklFTERfVFlQRS5DSEVDS0JPWCl7bGV0IHQ9ZTtyZXR1cm4gdD8uJGNoZWNrYm94cz8ubWFwKGU9PntvLnB1c2goe2Z1bmM6dGhpc1thXS5iaW5kKHRoaXMsZSxyKSxkZWxheTowfSl9KSxvfWxldCBsPWU7aWYodGhpcy5zaG91bGRTa2lwRWxlbWVudChsLiRpbnB1dCkpcmV0dXJuIG87cmV0dXJuIG8ucHVzaCh7ZnVuYzp0aGlzW2FdLmJpbmQodGhpcyxsLiRpbnB1dCxyKSxkZWxheTowfSksb31jYXRjaChlKXtjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZ2V0Rm9ybUVsZW1lbnRFeGVjdXRvcjpcIixlKX19YXN5bmMgY2xpY2tBZGRBY3Rpb24oKXtmb3IobGV0IGUgaW4gdGhpcy5oYXJkQ29kZUNvbmZpZyl7bGV0IHQ9dGhpcy5oYXJkQ29kZUNvbmZpZ1tlXSxyPSgwLGIuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkodC5jb250YWluZXIpO2lmKCFyKWNvbnRpbnVlO2xldCBvPSgwLGIuZ2V0T3JkZXJlZE5vZGVzKSh0LnNuYXBzaG90LHIpLGk9dC5rZXk9PT1uLmVkdWNhdGlvbj90aGlzLmVkdWNhdGlvbjp0aGlzLndvcmtFeHBlcmllbmNlO2F3YWl0IHRoaXMuY2xpY2tBZGRJdGVtQnV0dG9uKHIsdGhpcy5oYXJkQ29kZUNvbmZpZ1t0LmtleV0uYWRkQnV0dG9uLGkubGVuZ3RoLW8ubGVuZ3RoKX19YXN5bmMgY2xpY2tBZGRJdGVtQnV0dG9uKGUsdCxyKXtsZXQgbj0oMCxiLmdldEZpcnN0T3JkZXJlZE5vZGUpKHQsZSk7aWYobil7Zm9yKGxldCBlPTA7ZTxyO2UrKyluLmNsaWNrKCksYXdhaXQgKDAseC5kZWxheSkoNTAwKTthd2FpdCAoMCx4LmRlbGF5KSg1MDApfX1maWxsSGFyZENvZGVTZWN0aW9uKGUpe2xldCB0PSgwLGIuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoZS5jb250YWluZXIpO2lmKCF0KXJldHVybjtsZXQgcj0oMCxiLmdldE9yZGVyZWROb2RlcykoZS5zbmFwc2hvdCx0KSxvPWUua2V5PT09bi5lZHVjYXRpb24/dGhpcy5lZHVjYXRpb246dGhpcy53b3JrRXhwZXJpZW5jZSxpPW8/LmZsYXRNYXAoKHQsbik9PntsZXQgbz1yW25dO2lmKG8pcmV0dXJuIHRoaXMuZmlsbEhhcmRDb2RlSXRlbShlLmZpZWxkcyx0LG8pfSk7cmV0dXJuIGkuZmlsdGVyKGU9PiEoMCxzLmlzTmlsKShlKSl9ZmlsbEhhcmRDb2RlSXRlbShlLHQscil7cmV0dXJuIGUubWFwKCh7a2V5OmUsYWx0ZXJuYXRlS2V5Om4sZm9ybWF0Om8saXNDaGVja2JveDppLHR5cGU6YSx4cGF0aDpsLGRlbGF5OnM9Mn0pPT57bGV0IHU9KDAsYi5nZXRGaXJzdE9yZGVyZWROb2RlKShsLHIpLGM9dFtlXT8/dFtuXTtvJiYoYz1vKGMsdCkpO2xldCBkPXRoaXMuZXhlY3V0ZU1hcFthXTtyZXR1cm4gdT9kP3tmdW5jOmFzeW5jKCk9Pnthd2FpdCB0aGlzW2RdKHUsZSxjKX0sZGVsYXk6c306e2Z1bmM6YXN5bmMoKT0+e2MmJmF3YWl0ICgwLEMuZmlsbERlZmF1bHRJbnB1dEZpZWxkKSh1LGMpfSxkZWxheTpzfTpudWxsfSl9YXN5bmMgYmVmb3JlRmlsbEZvcm0oKXt9fVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3QmFzZS4zMTBmZjFlNi5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);