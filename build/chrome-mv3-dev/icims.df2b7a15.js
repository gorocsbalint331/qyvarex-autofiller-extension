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
})({"gKBoy":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\icims.js",
    "bundleId": "3e803979df2b7a15",
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
var j = z(require("b342052b68678858"));
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

},{"b342052b68678858":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"3Fnej":[function(require,module,exports) {
/**
 * Parcel module id: j70hj
 * Resolved path: src/contents/sites/icims.js
 * Dependencies:
 *   ../autofill-answer-pair-tracking -> aCElZ  =>  src/contents/sites/autofill-answer-pair-tracking.js
 *   ../base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ../education-item-trace -> j7UGI  =>  src/contents/sites/education-item-trace.js
 *   ./answer -> 9Ic4b  =>  src/contents/sites/icims/answer.js
 *   ./client-search-widget -> exkSa  =>  src/contents/sites/icims/client-search-widget.js
 *   ./continue-autofill -> eqgAt  =>  src/contents/sites/icims/continue-autofill.js
 *   ./create-login -> 5BheW  =>  src/contents/sites/icims/create-login.js
 *   ./education-client-search -> cov4x  =>  src/contents/sites/icims/education-client-search.js
 *   ./job-detail-continuation -> a5F89  =>  src/contents/sites/icims/job-detail-continuation.js
 *   ./job-detail-entry -> 3Lplz  =>  src/contents/sites/icims/job-detail-entry.js
 *   ./operations -> lYqnX  =>  src/contents/sites/icims/operations.js
 *   ./rules -> 9LvSK  =>  src/contents/sites/icims/rules.js
 *   ./submit-tracking -> 5kesW  =>  src/contents/sites/icims/submit-tracking.js
 *   ./utils -> DQtoj  =>  src/contents/sites/icims/utils.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~enums -> drZvv  =>  src/enums.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/starRating -> imWVP  =>  src/utils/starRating.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "fillIcimsEducationRows", ()=>B), n.export(r, "Icims", ()=>q);
var o = e("@plasmohq/messaging"), i = e("~contents/methods/answer"), a = e("~contents/methods/cancellation"), l = e("~contents/methods/observer"), s = e("~core/dom"), u = e("~core/enums"), c = e("~core/utils"), d = e("~core/xpath"), f = e("~enums"), p = e("~store/autofillInfo"), m = e("~store/url"), h = e("~utils/delay"), g = e("~utils/starRating"), b = e("~utils/string"), y = e("../autofill-answer-pair-tracking"), v = e("../base-filler"), w = e("../education-item-trace"), S = e("./job-detail-entry"), E = e("./job-detail-continuation"), x = e("./continue-autofill"), C = e("./education-client-search"), A = e("./answer"), k = e("./client-search-widget"), T = e("./create-login"), F = e("./operations"), I = e("./rules"), j = e("./submit-tracking"), D = e("./utils");
let P = "jobright:icims:upload-pending-autofill", _ = 3e4, L = "jobright:icims:continue-request", R = /(?:address|city|zip|postal|country|state|province|county)/i;
function O() {
    let e1 = Array.from(document.querySelectorAll("fieldset.iCIMS_CollectionGroup")).filter((e1)=>/^addresses?\b/i.test(e1.querySelector("legend")?.textContent?.replace(/\s+/g, " ").trim() ?? "")), t = e1.flatMap((e1)=>Array.from(e1.querySelectorAll("input, textarea, select")).filter((e1)=>e1.id.includes("Address") && !(e1 instanceof HTMLInputElement && "hidden" === e1.type)));
    return {
        collectionCount: e1.length,
        rowCount: e1.reduce((e1, t)=>e1 + t.querySelectorAll(".iCIMS_TableRow").length, 0),
        controlCount: t.length,
        emptyControlCount: t.filter((e1)=>!e1.value.trim()).length
    };
}
_c = O;
function M(e1) {
    return Object.keys(e1?.regular ?? {}).filter((e1)=>R.test(e1)).length;
}
_c1 = M;
let N = {
    requestStep: async (e1)=>await (0, o.sendToBackground)({
            name: "resolveAutofillClientSearchStep",
            body: e1
        }),
    captureCandidates: k.captureIcimsProfileOptionsCandidates,
    commitCandidate: k.commitExactIcimsProfileOptionCandidate,
    clearSelect: k.clearIcimsSearchSelectAndVerify,
    resolveSchoolCompanionInput: F.resolveIcimsSchoolCompanionInput,
    fillCompanionInput: F.fillInputTextField
};
function $(e1, t) {
    try {
        let r1 = (0, i.findValueInRecord)(e1, t);
        return Array.isArray(r1) ? r1.join(", ") : r1;
    } catch  {
        return;
    }
}
async function B(e1, t) {
    let r1 = [], n = 0, o = 0, l = [], u = !1, c = !1, d = (0, i.createSectionResultReporter)("education", {
        onSectionResultChanged: t.onSectionResultChanged
    });
    d.setLabel("Education"), (0, a.updateCurrentField)("Education");
    try {
        await (0, a.withSkip)(async ()=>{
            (0, a.checkpoint)(), await t.syncEducationSections(e1.length), (0, a.checkpoint)();
        }), r1 = t.getEducationRules(), (0, s.setSectionResultFocusRules)("education", r1), n = t.getVisibleEducationSectionCount(), o = Math.min(e1.length, r1.length), await (0, a.withSkip)(async ()=>{
            (0, a.checkpoint)(), await t.clearRuleValues(r1.slice(0, o)), (0, a.checkpoint)();
        });
        n: for(let n = 0; n < o; n += 1){
            let o = r1[n], i = e1[n];
            if (!o || !i) continue;
            let s = d.ensureRow(n, i);
            d.emit();
            let f = [
                ...o.children ?? []
            ].sort((e1, t)=>{
                let r1 = (e1)=>{
                    let t = (0, C.classifyIcimsEducationClientSearchRule)(e1);
                    return "school" === t ? 0 : "major" === t ? 1 : 2;
                };
                return r1(e1) - r1(t);
            });
            for (let e1 of f){
                (0, a.checkpoint)();
                let r1 = (0, C.classifyIcimsEducationClientSearchRule)(e1);
                if (r1) {
                    let o = (0, C.getIcimsEducationOriginalAnswer)(r1, i);
                    if (!o) {
                        d.updateField(s, e1.label, void 0, "missed"), d.emit();
                        continue;
                    }
                    try {
                        let u = await (0, a.withSkip)(()=>t.fillClientSearchField(e1, i, n, t.clientSearchDeps));
                        l.push(u), d.updateRow(s, i), d.updateField(s, e1.label, o, u.success ? "filled" : "missed"), d.emit(), u.success || console.warn("[AutofillClientSearch] Education field outcome", JSON.stringify({
                            rowIndex: n,
                            fieldType: r1,
                            actions: u.actions,
                            roundCandidateCounts: u.rounds.map((e1)=>e1.candidateCount),
                            failureReason: u.failureReason ?? null
                        }));
                    } catch (t) {
                        if (t instanceof a.CancelledError) throw t;
                        if (t instanceof a.SkippedError) {
                            d.updateRow(s, i), d.updateField(s, e1.label, o, "skipped"), d.emit(), c = !0;
                            break n;
                        }
                        l.push({
                            rowIndex: n,
                            fieldType: r1,
                            attempted: !0,
                            success: !1,
                            actions: [],
                            rounds: [],
                            failureReason: "orchestration-error"
                        }), d.updateRow(s, i), d.updateField(s, e1.label, o, "missed"), d.emit();
                    }
                    continue;
                }
                try {
                    let r1 = await (0, a.withSkip)(async ()=>{
                        let r1 = await t.transformRecordByRule(e1, i);
                        return i = r1, (0, a.checkpoint)(), await t.operationConfig[e1.type]?.(e1, r1, !1);
                    }), n = $(e1.label, i);
                    d.updateRow(s, i), d.updateField(s, e1.label, n, !1 !== r1 && n ? "filled" : "missed"), d.emit(), !1 === r1 && (u = !0);
                } catch (t) {
                    if (t instanceof a.CancelledError) throw t;
                    if (t instanceof a.SkippedError) {
                        d.updateRow(s, i), d.updateField(s, e1.label, $(e1.label, i), "skipped"), d.emit(), c = !0;
                        break n;
                    }
                    u = !0, d.updateRow(s, i), d.updateField(s, e1.label, $(e1.label, i), "missed"), d.emit();
                }
            }
        }
    } catch (e1) {
        if (e1 instanceof a.CancelledError) throw e1;
        if (e1 instanceof a.SkippedError) c = !0;
        else throw e1;
    } finally{
        (0, a.updateCurrentField)(null);
    }
    let f = n >= e1.length && r1.length >= e1.length && !c && !u && l.every((e1)=>e1.success);
    return f ? t.updateFilledProgress("Education") : t.updateMissedProgress("Education"), {
        filled: f,
        skipped: c,
        ledger: l
    };
}
_c2 = B;
class q extends v.BaseFiller {
    constructor(){
        super(), this.hasComboQuestions = !0, this.comboQuestionSettleDelayMs = 500, this.lastFullAutofillSnapshot = {}, this.lastFullSubmitSnapshot = {}, this.educationClientSearchLedger = [], this.educationTraceRunId = null, this.continueAutofillContext = null, this.navigationTracking = new j.IcimsNavigationTrackingController;
        let e1 = this.cancel;
        this.cancel = async ()=>{
            this.continueAutofillContext = null;
            try {
                (0, E.clearIcimsJobDetailAutofill)(window.sessionStorage);
            } catch  {}
            await e1();
        }, (0, x.bindIcimsContinueAutofill)(document, ()=>null !== this.continueAutofillContext, ()=>{
            let e1 = (0, x.getIcimsContinuationSignature)(document);
            if (null !== e1 && this.continueAutofillContext) try {
                (0, E.saveIcimsJobDetailAutofill)(window.sessionStorage, window.location.href, {
                    ...this.continueAutofillContext,
                    disableUploadResume: !!this.disableUploadResume,
                    resumeInfo: this.resumeInfo
                }, Date.now(), e1);
            } catch  {
                console.info('[IcimsJobDetailContinuation] {"reason":"storage-unavailable"}');
            }
        }), this.resumeAutofillAfterJobDetail(), this.resumeAutofillAfterUploadRefresh(), window.addEventListener("message", (e1)=>{
            e1.data?.type === L && this.continueApplication(!!e1.data?.data?.fromAgent);
        });
    }
    async resumeAutofillAfterJobDetail() {
        try {
            await (0, E.resumeIcimsJobDetailAutofill)(window.sessionStorage, window.location.href, ()=>(0, l.waitForCondition)(()=>null !== (0, I.detectIcimsPageType)(), {
                    timeout: 15e3,
                    interval: 200
                }), async (e1)=>{
                this.disableUploadResume = e1.disableUploadResume, e1.resumeInfo && (this.resumeInfo = e1.resumeInfo), await this.fillForm(e1.fromAgent);
            }, ()=>(0, x.getIcimsContinuationSignature)(document), (e1)=>{
                this.continueAutofillContext = {
                    fromAgent: e1.fromAgent
                }, this.disableUploadResume = e1.disableUploadResume, e1.resumeInfo && (this.resumeInfo = e1.resumeInfo);
            }, ()=>document.documentElement.setAttribute("data-jobright-icims-continuation-claimed", "pending"));
        } catch  {
            console.info('[IcimsJobDetailContinuation] {"reason":"storage-unavailable"}');
        }
    }
    getFieldHandlers() {
        return {
            [u.FIELD_TYPE.TEXT]: {
                handler: async (e1, t)=>{
                    let r1 = Array.isArray(t) ? t[0] : t;
                    null != r1 && "" !== r1 && await (0, F.fillInputTextField)(e1.$input, String(r1 ?? ""));
                },
                options: {
                    expectArray: !1
                }
            },
            [u.FIELD_TYPE.SELECT]: {
                handler: (e1, t)=>(0, F.fillSearchSelectField)(e1.$input, t, e1.label),
                options: {
                    expectArray: !0
                }
            },
            [u.FIELD_TYPE.SELECT_ORIGINAL]: {
                handler: async (e1, t)=>{
                    let r1 = Array.isArray(t) ? t[0] : t;
                    return null != r1 && "" !== r1 && (0, F.fillOriginSelectField)(e1.$input, String(r1));
                },
                options: {
                    expectArray: !1
                }
            },
            [u.FIELD_TYPE.CHECKBOX]: {
                handler: (e1, t)=>(0, F.fillCheckboxField)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [u.FIELD_TYPE.DATE]: {
                handler: async (e1, t)=>{
                    let r1 = Array.isArray(t) ? t[0] : t;
                    null != r1 && "" !== r1 && await (0, F.fillDateField)(e1.$input, String(r1));
                },
                options: {
                    expectArray: !1
                }
            },
            [u.FIELD_TYPE.RADIOGROUP]: {
                handler: (e1, t)=>(0, F.fillRadioGroupField)(e1, t),
                options: {
                    expectArray: !0
                }
            }
        };
    }
    getSiteName() {
        return "icims";
    }
    async extractFormRules() {
        let e1 = (0, A.formatRulesForRequest)((0, I.extractRules)());
        return console.info(`[IcimsAddressDebug] rules extracted ${JSON.stringify({
            dom: O(),
            rules: (0, D.getIcimsAddressRuleDiagnostics)(e1)
        })}`), e1;
    }
    getNewComboQuestionRules(e1, t) {
        return (0, I.getIcimsComboQuestionRules)(e1, t);
    }
    async fetchFormAnswers(e1, t) {
        let r1 = (0, A.expandIcimsPhoneSectionRulesForRequest)(e1);
        console.info(`[IcimsAddressDebug] rules requested ${JSON.stringify({
            rules: (0, D.getIcimsAddressRuleDiagnostics)(r1)
        })}`);
        let n = await this.requestFormAnswers(r1, t);
        if ("string" == typeof n) return console.info('[IcimsAddressDebug] answer unavailable {"status":"request-error"}'), n;
        n ? (this.answer = n, console.info(`[IcimsAddressDebug] answer received ${JSON.stringify({
            addressLikeRegularKeyCount: M(n)
        })}`)) : console.info('[IcimsAddressDebug] answer unavailable {"status":"empty-response"}');
    }
    formatAnswer(e1) {
        return (0, A.formatAnswer)(e1);
    }
    splitSnapshot(e1) {
        let { education: t = [], employment: r1 = [], ...n } = e1 || {};
        return {
            normal: n,
            education: Array.isArray(t) ? t : [],
            employment: Array.isArray(r1) ? r1 : []
        };
    }
    extractEducationEmploymentAdditional(e1) {
        let { education: t, employment: r1 } = this.splitSnapshot(e1);
        return {
            education: t,
            employment: r1
        };
    }
    filterSectionRecordForEndDateRule(e1, t, r1) {
        return (0, D.filterIcimsOptionalEndDateRecord)(e1, t, {
            legacyMatchLabels: A.ICIMS_LEGACY_END_DATE_MATCH_LABELS,
            recordKeys: "education" === r1 ? A.ICIMS_EDUCATION_END_DATE_RECORD_KEYS : A.ICIMS_EMPLOYMENT_END_DATE_RECORD_KEYS
        });
    }
    async getAutofillSnapshot(e1) {
        let t = (0, I.getFormSnapshot)(void 0, {
            markEducationRows: !0,
            includeEducationSnapshotIndex: !0,
            includeEducationTrace: !0,
            educationTraceRunId: this.ensureEducationTraceRunId()
        }) || {};
        return this.lastFullAutofillSnapshot = t, this.splitSnapshot(t).normal;
    }
    async getSubmitSnapshot() {
        let e1 = (0, I.getFormSnapshot)(void 0, {
            includeEducationSnapshotIndex: !0,
            includeEducationTrace: !0,
            educationTraceRunId: this.ensureEducationTraceRunId()
        }) || {};
        return this.lastFullSubmitSnapshot = e1, this.splitSnapshot(e1).normal;
    }
    getAdditionalAutofillSnapshotData(e1) {
        return this.extractEducationEmploymentAdditional(this.lastFullAutofillSnapshot);
    }
    getAdditionalSubmitSnapshotData() {
        return this.extractEducationEmploymentAdditional(this.lastFullSubmitSnapshot);
    }
    getSubmitButtonSelector() {
        return null;
    }
    ensureEducationTraceRunId() {
        return this.educationTraceRunId || (this.educationTraceRunId = (0, w.createEducationTraceRunId)()), this.educationTraceRunId;
    }
    getNavigationButtonFromEventTarget(e1) {
        if (!(e1 instanceof HTMLElement)) return null;
        let t = e1.closest('input[type="submit"], button[type="submit"]');
        return t && (0, D.isVisibleIcimsElement)(t) ? t : null;
    }
    isTrackedNavigationButton(e1) {
        let t = this.getNavigationButtonText(e1);
        return (!(e1 instanceof HTMLInputElement) || "icims_save" !== e1.name) && "finish later" !== t && "save & return later" !== t && "save and return later" !== t && (!!("submit" === t || "submit profile" === t || "apply" === t || t.includes("submit")) || this.isContinueNavigationButton(e1));
    }
    async bindSubmitButtonTracking(e1) {
        let t = await this.getAutofillSnapshot(e1), r1 = this.getAdditionalAutofillSnapshotData?.(e1) || {};
        this.navigationTracking.bind({
            root: document,
            resolveButton: (e1)=>this.getNavigationButtonFromEventTarget(e1),
            isTrackedButton: (e1)=>this.isTrackedNavigationButton(e1),
            formUrl: ()=>(0, m.useUrlStore).getState().currentTabUrl,
            source: ()=>this.getSiteName(),
            answer: ()=>this.answer,
            autofillSnapshot: t,
            additionalAutofillData: r1,
            getSubmitSnapshot: ()=>this.getSubmitSnapshot(),
            getAdditionalSubmitData: ()=>this.getAdditionalSubmitSnapshotData?.() || {},
            educationOutcomes: ()=>this.educationClientSearchLedger,
            send: y.sendAutofillAnswerPairEvent,
            afterSend: async ({ submitSnapshot: e1 })=>{
                await (0, g.handleSubmitStarRating)(this.getSiteName(), t, e1, this.progressTracker.fieldStatus);
            }
        });
    }
    async continueApplication(e1 = !1) {
        let t = this.getActiveContinueButton();
        if (t) return t.click(), !0;
        let r1 = this.forwardContinueToChildIframe(e1);
        return r1;
    }
    isReadyForSecondPhase() {
        return (0, F.hasUploadedResumeQueryFlag)() && (0, F.hasUploadedResume)();
    }
    readPendingUploadAutofill() {
        try {
            let e1 = window.sessionStorage.getItem(P);
            if (!e1) return null;
            let t = JSON.parse(e1);
            if (!t || Date.now() - Number(t.startedAt) > _) return this.clearPendingUploadAutofill(), null;
            return {
                fromAgent: !!t.fromAgent,
                disableUploadResume: !!t.disableUploadResume,
                sourceUrl: "string" == typeof t.sourceUrl && t.sourceUrl ? t.sourceUrl : window.location.href,
                sourceUploadSignature: "string" == typeof t.sourceUploadSignature ? t.sourceUploadSignature : "",
                startedAt: "number" == typeof t.startedAt ? t.startedAt : Date.now(),
                resumeInfo: t.resumeInfo
            };
        } catch (e1) {
            return this.clearPendingUploadAutofill(), null;
        }
    }
    savePendingUploadAutofill(e1) {
        try {
            window.sessionStorage.setItem(P, JSON.stringify({
                fromAgent: e1,
                disableUploadResume: !!this.disableUploadResume,
                sourceUrl: window.location.href,
                sourceUploadSignature: this.getUploadPendingSignature(),
                startedAt: Date.now(),
                resumeInfo: this.resumeInfo
            }));
        } catch (e1) {}
    }
    clearPendingUploadAutofill() {
        try {
            window.sessionStorage.removeItem(P);
        } catch (e1) {}
    }
    getUploadPendingSignature() {
        return [
            (0, F.hasUploadedResume)() ? "uploaded" : "empty",
            (0, F.hasUploadedResumeQueryFlag)() ? "upload-query" : "no-query",
            this.getIcimsPrefillSignature()
        ].join("|");
    }
    isSamePendingUploadPage(e1) {
        try {
            let t = new URL(window.location.href), r1 = new URL(e1.sourceUrl, window.location.href);
            return t.origin === r1.origin && t.pathname === r1.pathname;
        } catch (e1) {
            return !1;
        }
    }
    hasUploadRefreshTransition(e1) {
        try {
            let t = new URL(window.location.href), r1 = new URL(e1.sourceUrl, window.location.href);
            return t.origin === r1.origin && t.pathname === r1.pathname && (t.href !== r1.href || (0, F.hasUploadedResumeQueryFlag)() || this.getUploadPendingSignature() !== e1.sourceUploadSignature);
        } catch (e1) {
            return !1;
        }
    }
    async resumeAutofillAfterUploadRefresh() {
        let e1 = this.readPendingUploadAutofill();
        if (!e1 || !this.isSamePendingUploadPage(e1)) return;
        if (!this.hasUploadRefreshTransition(e1)) {
            this.clearPendingUploadAutofill();
            return;
        }
        this.disableUploadResume = e1.disableUploadResume, e1.resumeInfo && (this.resumeInfo = e1.resumeInfo);
        let t = await (0, l.waitForCondition)(()=>this.isReadyForSecondPhase(), {
            timeout: 5e3,
            interval: 200
        });
        if (!t) {
            this.clearPendingUploadAutofill();
            return;
        }
        try {
            this.continueAutofillContext = {
                fromAgent: e1.fromAgent
            }, await this.runFieldFillPhase(e1.fromAgent);
        } finally{
            this.clearPendingUploadAutofill();
        }
    }
    shouldUploadResumeFirst() {
        return !this.disableUploadResume && (0, F.hasResumeSection)();
    }
    syncUploadedResumeProgress() {
        if (!(0, F.hasUploadedResume)()) return;
        let e1 = this.progressTracker.fieldStatus.fieldRequiredStatus.some((e1)=>"Resume/CV" === e1.label);
        e1 || this.progressTracker.updateFieldRequiredStatus({
            label: "Resume/CV",
            required: !0,
            type: "file"
        }), this.progressTracker.fieldStatus.filledFields.includes("Resume/CV") || this.progressTracker.updateFilledProgress("Resume/CV");
    }
    getIcimsPrefillSignature() {
        let e1 = Array.from(document.querySelectorAll("input, textarea, select")), t = 0;
        for (let r1 of e1)if (r1 instanceof HTMLElement && (0, D.isVisibleIcimsElement)(r1)) {
            if (r1 instanceof HTMLInputElement) {
                if ([
                    "hidden",
                    "file",
                    "button",
                    "submit",
                    "radio",
                    "checkbox"
                ].includes(r1.type)) continue;
                r1.value.trim() && (t += 1);
                continue;
            }
            if (r1 instanceof HTMLTextAreaElement) {
                r1.value.trim() && (t += 1);
                continue;
            }
            r1 instanceof HTMLSelectElement && r1.value && (t += 1);
        }
        return `${(0, F.getVisibleEmploymentSectionCount)()}:${t}`;
    }
    async waitForIcimsPrefillToSettle() {
        let e1 = "", t = 0, r1 = Date.now() + 8e3;
        for(; Date.now() < r1;){
            let r1 = this.getIcimsPrefillSignature();
            if (r1 === e1 ? t += 1 : (e1 = r1, t = 0), t >= 4) {
                await (0, h.delay)(300);
                return;
            }
            await (0, h.delay)(250);
        }
    }
    async waitForPostUploadTransition(e1, t) {
        await (0, l.waitForCondition)(()=>window.location.href !== e1 || (0, F.hasUploadedResumeQueryFlag)() || this.getIcimsPrefillSignature() !== t, {
            timeout: 8e3,
            interval: 250
        });
    }
    async clearRuleValue(e1) {
        if (e1) {
            if (e1.type === u.FIELD_TYPE.EDUCATION || e1.type === u.FIELD_TYPE.EMPLOYMENT) {
                for (let t of e1.children ?? [])await this.clearRuleValue(t);
                return;
            }
            if (e1.type === u.FIELD_TYPE.TEXT && e1.$input) {
                await (0, F.clearInputField)(e1.$input);
                return;
            }
            if (e1.type === u.FIELD_TYPE.DATE && e1.$input) {
                await (0, F.clearDateFieldValue)(e1.$input);
                return;
            }
            (e1.type === u.FIELD_TYPE.SELECT || e1.type === u.FIELD_TYPE.SELECT_ORIGINAL) && e1.$input && (0, F.clearSelectField)(e1.$input);
        }
    }
    async clearRuleValues(e1) {
        for (let t of e1)await this.clearRuleValue(t);
    }
    async runResumeUploadPhase(e1) {
        let t = window.location.href, r1 = this.getIcimsPrefillSignature();
        await this.initializeFillForm(), this.savePendingUploadAutofill(e1);
        try {
            let n = await (0, F.uploadResume)(this.resumeInfo, ()=>{}, ()=>{});
            if (!n) return this.clearPendingUploadAutofill(), this.runFieldFillPhase(e1);
            await this.waitForPostUploadTransition(t, r1), await this.waitForIcimsPrefillToSettle();
            let o = await this.runFieldFillPhase(e1);
            return this.clearPendingUploadAutofill(), o;
        } catch (e1) {
            throw this.clearPendingUploadAutofill(), e1;
        }
    }
    getNavigationButtonText(e1) {
        let t = e1 instanceof HTMLInputElement ? e1.value : e1.innerText || e1.textContent || "", r1 = e1.getAttribute("aria-label") ?? "";
        return (t || r1).trim().toLowerCase();
    }
    getCurrentStepText() {
        let e1 = (0, d.getFirstOrderedNode)(".//div[contains(@class, 'iCIMS_PageStepText')]");
        return (e1?.textContent || "").trim().toLowerCase();
    }
    isFinalNavigationStep() {
        let e1 = this.getCurrentStepText();
        return !!e1 && (e1.includes("submit") || e1.includes("review") || e1.includes("complete") || e1.includes("confirmation") || e1.includes("finish"));
    }
    isSubmitNavigationButton(e1) {
        let t = this.getNavigationButtonText(e1);
        return "submit" === t || "submit profile" === t || "apply" === t || t.includes("submit");
    }
    isContinueNavigationButton(e1) {
        let t = this.getNavigationButtonText(e1);
        if (e1 instanceof HTMLInputElement && "icims_save" === e1.name) return !1;
        if (e1 instanceof HTMLInputElement && "icims_submit" === e1.name && "submit" === t || e1 instanceof HTMLInputElement && "cp_form_submit_i" === e1.id && "profileButton" === e1.name && "submit" === t) return !0;
        if ("finish later" === t || "save & return later" === t) return !1;
        let r1 = this.getCurrentStepText();
        return r1 ? !this.isFinalNavigationStep() : !this.isSubmitNavigationButton(e1);
    }
    getActiveContinueButton() {
        let e1 = Array.from(document.querySelectorAll('input[type="submit"], button[type="submit"]')), t = e1.filter((e1)=>!!(0, D.isVisibleIcimsElement)(e1) && this.isContinueNavigationButton(e1));
        return t[0] ?? null;
    }
    getSupportedChildIframes() {
        let e1 = Array.from(document.getElementsByTagName("iframe")), t = e1.filter((e1)=>{
            if (!e1.contentWindow || !e1.src) return !1;
            try {
                return (0, c.checkSupportIframeSrc)(e1.src);
            } catch (e1) {
                return !1;
            }
        });
        return t;
    }
    waitForChildIframeAutofill() {
        return new Promise((e1)=>{
            try {
                let t = window.top ?? window, r1 = !1, n = window.setTimeout(()=>{
                    r1 || (r1 = !0, t.removeEventListener("message", o), e1());
                }, 15e3), o = (i)=>{
                    let a = i.data?.type;
                    (a === u.MESSAGE_EVENTS.autoFillResultFromIframe || a === u.MESSAGE_EVENTS.autoFillCompleteFromIframe) && (r1 || (r1 = !0, window.clearTimeout(n), t.removeEventListener("message", o), e1()));
                };
                t.addEventListener("message", o);
            } catch (t) {
                e1();
            }
        });
    }
    async forwardAutofillToChildIframe(e1) {
        let t = this.getSupportedChildIframes(), r1 = t[t.length - 1];
        if (!r1?.contentWindow) return !1;
        let n = this.waitForChildIframeAutofill();
        return r1.contentWindow.postMessage((0, b.cleanObject)({
            type: f.IFRAME_EVENTS.UPDATE_IFRAME_DATA,
            data: {
                resumeInfo: this.resumeInfo,
                disableUploadResume: this.disableUploadResume,
                token: this.token
            },
            url: r1.src
        }), {
            targetOrigin: "*"
        }), r1.contentWindow.postMessage((0, b.cleanObject)({
            type: f.IFRAME_EVENTS.EXECUTE_IFRAME_FUNCTION,
            data: {
                fromAgent: e1,
                timestamp: Date.now()
            },
            url: r1.src
        }), {
            targetOrigin: "*"
        }), await n, !0;
    }
    forwardContinueToChildIframe(e1) {
        let t = this.getSupportedChildIframes(), r1 = t[t.length - 1];
        return !!r1?.contentWindow && (r1.contentWindow.postMessage((0, b.cleanObject)({
            type: L,
            data: {
                fromAgent: e1,
                timestamp: Date.now()
            },
            url: r1.src
        }), {
            targetOrigin: "*"
        }), !0);
    }
    async runFieldFillPhase(e1 = !1) {
        this.navigationTracking.startRun(), this.educationTraceRunId = null, this.educationClientSearchLedger = [];
        let t = !1, r1 = "", n = "";
        await this.initializeFillForm();
        try {
            this.isReadyForSecondPhase() && await this.waitForIcimsPrefillToSettle();
            let o = await (0, p.useAutofillInfoStore).getState().fetchAutofillInfo(), l = await (0, T.loadIcimsCreateLoginCredentials)(o), c = await (0, T.fillIcimsCreateLoginCredentials)(l);
            if (console.info(`[IcimsCreateLogin] ${JSON.stringify({
                foundSection: c.foundSection,
                foundRoleCount: c.foundRoles.length,
                filledRoleCount: c.filledRoles.length,
                skippedExistingRoleCount: c.skippedExistingRoles.length,
                rejectedRoleCount: c.rejectedRoles.length
            })}`), r1 = (0, p.useAutofillInfoStore).getState().country, n = String(o?.location?.state ?? o?.state ?? "").trim(), r1) {
                let e1 = (0, F.getSelectedIcimsCountryText)(), t = (0, D.getIcimsStateProvinceOptionsSignature)(), n = !1;
                this.taskQueue.add(async ()=>{
                    n = await (0, F.fillCountry)(r1);
                }), await this.taskQueue.run();
                let o = (0, F.getSelectedIcimsCountryText)();
                n && e1.toLowerCase() !== o.toLowerCase() && await (0, D.waitForIcimsStateProvinceOptionsRefresh)(t);
            }
            let d = (0, F.autoSelectCertifyField)(), f = await this.extractFormRules(), m = d ? [
                d
            ] : [];
            if (0 === f.length) return d && (this.progressTracker.setFieldsRequiredStatus(m), d.filled ? this.progressTracker.updateFilledProgress(d.label) : this.progressTracker.updateMissedProgress(d.label)), t = await this.forwardAutofillToChildIframe(e1), this.progressTracker.generateFinalProgress();
            let h = new Set, g = "Employment";
            for (let e1 of f){
                let t = e1.type;
                if (t === u.FIELD_TYPE.EDUCATION || t === u.FIELD_TYPE.EMPLOYMENT) {
                    let e1 = String(t);
                    if (h.has(e1)) continue;
                    h.add(e1);
                }
                if (t === u.FIELD_TYPE.EMPLOYMENT) {
                    let t = Array.isArray(e1.options) ? e1.options[0] : null;
                    g = "object" == typeof t && t?.label ? t.label : e1.label, m.push({
                        label: g,
                        required: e1.required ?? null,
                        options: e1.options,
                        type: e1.type
                    });
                    continue;
                }
                if (t === u.FIELD_TYPE.SECTION && Array.isArray(e1.children)) {
                    for (let t of e1.children)m.push({
                        label: t.label,
                        required: t.required ?? null,
                        options: t.options,
                        type: t.type
                    });
                    continue;
                }
                m.push({
                    label: e1.label,
                    required: e1.required ?? null,
                    options: e1.options,
                    type: e1.type
                });
            }
            this.progressTracker.setFieldsRequiredStatus(m), d && (d.filled ? this.progressTracker.updateFilledProgress(d.label) : this.progressTracker.updateMissedProgress(d.label));
            let y = await this.fetchFormAnswers(f, e1);
            if ("string" == typeof y) return y;
            (0, A.applyIcimsEducationProfileRawFallback)(this.answer, o), (0, A.applyIcimsStateProvinceFallback)(this.answer, n), window.top?.postMessage(b.cleanObject({
                type: u.MESSAGE_EVENTS.agentStartFillingFields
            }), {
                targetOrigin: "*"
            }), (0, F.hasUploadedResume)() ? this.syncUploadedResumeProgress() : this.disableUploadResume && this.progressTracker.updateMissedProgress("Resume/CV");
            let v = f.reduce((e1, t)=>(t.type === u.FIELD_TYPE.EDUCATION || t.type === u.FIELD_TYPE.EMPLOYMENT || (t.type === u.FIELD_TYPE.SECTION && Array.isArray(t.children) ? e1.push(...t.children) : e1.push(t)), e1), []), w = v.find((e1)=>(e1.type === u.FIELD_TYPE.SELECT || e1.type === u.FIELD_TYPE.SELECT_ORIGINAL) && /^country$/i.test(e1.label)), S = v.filter((e1)=>!/^country$/i.test(e1.label)), E = (0, D.getIcimsRegularRulesForFill)(S), x = String(r1 || this.answer?.country || "").trim();
            if (await this.clearRuleValues(E), w) {
                let e1 = !!x && await (0, F.fillCountry)(x, w.$input);
                e1 ? this.progressTracker.updateFilledProgress("Country") : this.progressTracker.updateMissedProgress("Country");
            }
            let k = (0, i.getRegularOperations)(E, this.answer.regular, this.operationConfig);
            for (let e1 of (console.info(`[IcimsAddressDebug] regular fill queued ${JSON.stringify({
                addressRules: (0, D.getIcimsAddressRuleDiagnostics)(f),
                addressLikeRegularKeyCount: M(this.answer),
                totalRegularOperationCount: k.length
            })}`), k))this.taskQueue.add(e1);
            await this.taskQueue.run(), console.info(`[IcimsAddressDebug] regular fill completed ${JSON.stringify({
                dom: O()
            })}`), await (0, F.fillSignatureCheckboxes)();
            let j = await this.runComboQuestionAutofillIfNeeded(f, e1);
            if ("string" == typeof j) return j;
            f = j;
            let P = this.answer.education ?? [];
            if (this.educationClientSearchLedger = [], P.length > 0) {
                let e1 = await B(P, {
                    syncEducationSections: F.syncEducationSections,
                    getEducationRules: I.getEducationRules,
                    getVisibleEducationSectionCount: F.getVisibleEducationSectionCount,
                    clearRuleValues: (e1)=>this.clearRuleValues(e1),
                    operationConfig: this.operationConfig,
                    transformRecordByRule: (e1, t)=>this.filterSectionRecordForEndDateRule(e1, t, "education"),
                    fillClientSearchField: C.fillIcimsEducationClientSearchField,
                    clientSearchDeps: N,
                    updateFilledProgress: (e1)=>this.progressTracker.updateFilledProgress(e1),
                    updateMissedProgress: (e1)=>this.progressTracker.updateMissedProgress(e1),
                    onSectionResultChanged: this.progressTracker.updateSectionResult
                });
                this.educationClientSearchLedger = e1.ledger;
            }
            let _ = this.answer.workExperience ?? [];
            if (_.length > 0) {
                await (0, F.syncEmploymentSections)(_.length), (0, F.getVisibleEmploymentSectionCount)();
                let e1 = (0, I.getExperienceRules)();
                (0, s.setSectionResultFocusRules)("employment", e1);
                let t = Math.min(_.length, e1.length);
                await this.clearRuleValues(e1.slice(0, t));
                let r1 = !1, n = (0, i.createSectionResultReporter)("employment", {
                    onSectionResultChanged: this.progressTracker.updateSectionResult
                });
                n.setLabel(g);
                for(let o = 0; o < t; o++){
                    let t = e1[o];
                    if (!t) continue;
                    let i = _[o], l = t.children ?? [], s = n.ensureRow(o, i);
                    if (n.emit(), this.taskQueue.add(async ()=>{
                        let e1;
                        let t = i;
                        try {
                            for (let r1 of l){
                                let o = this.filterSectionRecordForEndDateRule(r1, i, "employment");
                                e1 = r1, t = o;
                                let a = await this.operationConfig[r1.type]?.(r1, o, !1), l = $(r1.label, o);
                                n.updateRow(s, o), n.updateField(s, r1.label, l, !1 !== a && l ? "filled" : "missed"), n.emit();
                            }
                        } catch (o) {
                            if (o instanceof a.SkippedError) {
                                r1 = !0, e1 && (n.updateField(s, e1.label, $(e1.label, t), "skipped"), n.emit());
                                return;
                            }
                            throw o;
                        }
                    }), await this.taskQueue.run(), r1) break;
                }
                (0, F.getVisibleEmploymentSectionCount)(), r1 ? this.progressTracker.updateMissedProgress(g) : this.progressTracker.updateFilledProgress(g);
            }
            await this.taskQueue.run(), await this.bindSubmitButtonTracking(f);
        } catch (e1) {
            if (e1 instanceof a.CancelledError) throw e1;
        } finally{
            if (t) return this.progressTracker.generateFinalProgress();
            await this.finalizeFillForm();
        }
        return this.progressTracker.generateFinalProgress();
    }
    async doFillForm(e1 = !1) {
        if (this.continueAutofillContext = {
            fromAgent: e1
        }, (0, S.proceedIcimsJobDetailToApply)(document, ()=>{
            try {
                (0, E.saveIcimsJobDetailAutofill)(window.sessionStorage, window.location.href, {
                    fromAgent: e1,
                    disableUploadResume: !!this.disableUploadResume,
                    resumeInfo: this.resumeInfo
                });
            } catch  {
                console.info('[IcimsJobDetailContinuation] {"reason":"storage-unavailable"}');
            }
        })) return this.progressTracker.generateFinalProgress();
        try {
            (0, E.clearIcimsJobDetailAutofill)(window.sessionStorage);
        } catch  {}
        return (this.navigationTracking.startRun(), this.shouldUploadResumeFirst()) ? this.runResumeUploadPhase(e1) : this.runFieldFillPhase(e1);
    }
    submitApplication() {
        let e1 = (0, d.getFirstOrderedNode)(".//input[@type='submit' and @value=\"Submit Profile\"]");
        e1 && e1.click();
    }
}
var _c, _c1, _c2;
$RefreshReg$(_c, "O");
$RefreshReg$(_c1, "M");
$RefreshReg$(_c2, "B");

},{}]},["gKBoy","3Fnej"], "3Fnej", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFBc0UsSUFBSSxJQUFFLEVBQUUsNEJBQTRCLEdBQUU7Z0JBQUcsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLElBQUk7Z0JBQUU7WUFBRSxJQUFHO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFO1lBQStCLElBQUcsTUFBSSxLQUFLLEdBQUU7Z0JBQUMsSUFBSSxJQUFFO2dCQUFFLEVBQUUsaUNBQStCLElBQUU7b0JBQUMsV0FBVSxJQUFJO29CQUFJLGVBQWMsQ0FBQztvQkFBRSxRQUFPLFNBQVMsQ0FBQzt3QkFBRSxPQUFPO29CQUFHO29CQUFFLHFCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFFO29CQUFFLG1CQUFrQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRTtvQkFBRSxzQkFBcUIsWUFBVztnQkFBQztZQUFDO1lBQUMsSUFBRyxFQUFFLFlBQVc7Z0JBQUMsUUFBUSxLQUFLO2dCQUE4SjtZQUFNO1lBQUMsSUFBSSxJQUFFLEVBQUU7WUFBTyxFQUFFLFNBQU8sU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLE1BQU0sSUFBSSxFQUFDO2dCQUFXLE9BQU8sT0FBTyxFQUFFLG1CQUFpQixjQUFZLE9BQU8sRUFBRSxxQkFBbUIsY0FBWSxFQUFFLElBQUksR0FBRSxJQUFHO1lBQUMsR0FBRSxFQUFFLFVBQVUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLE9BQU8sRUFBRSxtQkFBaUIsY0FBWSxPQUFPLEVBQUUscUJBQW1CLGNBQVksRUFBRSxJQUFJLEdBQUU7WUFBRTtZQUFHLElBQUksSUFBRSxFQUFFLG1CQUFrQixJQUFFLEVBQUUsdUJBQXFCLFlBQVc7WUFBRSxFQUFFLHNCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUksQ0FBQSxFQUFFLE9BQU8sSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLEdBQUUsRUFBQyxHQUFHLEVBQUUsTUFBTSxJQUFJLEVBQUM7WUFBVSxHQUFFLEVBQUUsb0JBQWtCLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO2dCQUFHLElBQUcsTUFBSSxLQUFLLEdBQUU7b0JBQUMsRUFBRSxJQUFJLEdBQUU7b0JBQUcsSUFBSSxJQUFFLEVBQUUsU0FBUSxJQUFFLEVBQUU7b0JBQVUsSUFBRyxNQUFJLE1BQUs7d0JBQUMsSUFBSSxJQUFFLEVBQUUsaUJBQWUsUUFBTSxFQUFFLGNBQWMsV0FBUyxRQUFNLEVBQUUsSUFBSSxJQUFHLElBQUUsRUFBRSxpQkFBZSxRQUFNLEVBQUUsY0FBYyxXQUFTO3dCQUFLLENBQUMsS0FBRyxJQUFHLENBQUEsRUFBRSxJQUFJLElBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxLQUFHLEtBQUksQ0FBQSxLQUFHLENBQUMsSUFBRyxDQUFBLEVBQUUsT0FBTyxJQUFHLElBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxDQUFDLEtBQUcsQ0FBQyxLQUFHLEtBQUcsRUFBRSxJQUFJLEVBQUM7b0JBQUUsT0FBTSxFQUFFLElBQUk7Z0JBQUU7Z0JBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxFQUFDO1lBQVU7UUFBRTtRQUFDLFNBQVM7WUFBSyxPQUFNLENBQUM7UUFBQztRQUFDLFNBQVM7WUFBSyxPQUFPLEVBQUU7UUFBSTtRQUFDLFNBQVM7WUFBTSxJQUFJLEdBQUUsR0FBRSxJQUFFLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFHLE9BQU8sS0FBRyxVQUFTLE9BQU8sS0FBSSxDQUFBLElBQUUsR0FBRSxJQUFFLE9BQU8sS0FBRyxVQUFTLEdBQUcsS0FBRyxRQUFPLENBQUEsT0FBTyxLQUFHLGNBQVksT0FBTyxLQUFHLFFBQU8sS0FBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLElBQUc7Z0JBQUUsQ0FBQyxLQUFHLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxFQUFFLEVBQUM7WUFBRTtRQUFFO1FBQUMsU0FBUyxHQUFHLENBQUM7WUFBRSxPQUFPLE9BQU87Z0JBQUcsS0FBSTtvQkFBWSxJQUFHLEVBQUUsYUFBVyxNQUFLO3dCQUFDLElBQUcsRUFBRSxVQUFVLGtCQUFpQixPQUFNLENBQUM7d0JBQUUsSUFBSSxJQUFFLE9BQU8sb0JBQW9CLEVBQUU7d0JBQVcsSUFBRyxFQUFFLFNBQU8sS0FBRyxDQUFDLENBQUMsRUFBRSxLQUFHLGlCQUFlLEVBQUUsVUFBVSxjQUFZLE9BQU8sV0FBVSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsSUFBSSxJQUFFLEVBQUUsUUFBTSxFQUFFO29CQUFZLE9BQU8sT0FBTyxLQUFHLFlBQVUsU0FBUyxLQUFLO2dCQUFHLEtBQUk7b0JBQVUsSUFBRyxLQUFHLE1BQUssT0FBTyxFQUFFLEdBQUU7d0JBQWEsS0FBSzt3QkFBRSxLQUFLOzRCQUFFLE9BQU0sQ0FBQzt3QkFBRTs0QkFBUSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsT0FBTSxDQUFDO2dCQUFFO29CQUFRLE9BQU0sQ0FBQztZQUFDO1FBQUM7UUFBQyxFQUFFLHVCQUFxQixJQUFHLEVBQUUsaUNBQStCLEdBQUUsRUFBRSxzQ0FBb0MsSUFBRyxFQUFFLDRCQUEwQixJQUFHLEVBQUUsZ0JBQWMsR0FBRSxFQUFFLGtCQUFnQixHQUFFLEVBQUUseUJBQXVCLElBQUcsRUFBRSx1QkFBcUIsSUFBRyxFQUFFLHdCQUFzQixJQUFHLEVBQUUsc0JBQW9CLEdBQUUsRUFBRSxXQUFTLEdBQUUsRUFBRSxlQUFhO0lBQUMsQ0FBQTtBQUFJO0FBQUcsSUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFHO0lBQUs7SUFBYSxFQUFFLFVBQVE7QUFBRztBQUFHLElBQUksSUFBRSxDQUFDO0FBQUUsR0FBRyxHQUFFO0lBQUMsU0FBUSxJQUFJO0FBQUU7QUFBRyxPQUFPLFVBQVEsR0FBRztBQUFHLElBQUksSUFBRSxFQUFFO0FBQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxPQUFPO0FBQVMsSUFBSSxLQUFHLEVBQUUsU0FDcDVMOzs7Ozs7Ozs7Ozs7QUFZQTs7O0FDYkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWlDQyxHQUVELElBQUksSUFBSSxFQUFFO0FBQ1YsRUFBRSxrQkFBa0IsSUFBSSxFQUFFLE9BQU8sR0FBRywwQkFBMEIsSUFBTSxJQUFJLEVBQUUsT0FBTyxHQUFHLFNBQVMsSUFDM0Y7QUFDRixJQUFJLElBQUksRUFBRSx3QkFDUixJQUFJLEVBQUUsNkJBQ04sSUFBSSxFQUFFLG1DQUNOLElBQUksRUFBRSwrQkFDTixJQUFJLEVBQUUsY0FDTixJQUFJLEVBQUUsZ0JBQ04sSUFBSSxFQUFFLGdCQUNOLElBQUksRUFBRSxnQkFDTixJQUFJLEVBQUUsV0FDTixJQUFJLEVBQUUsd0JBQ04sSUFBSSxFQUFFLGVBQ04sSUFBSSxFQUFFLGlCQUNOLElBQUksRUFBRSxzQkFDTixJQUFJLEVBQUUsa0JBQ04sSUFBSSxFQUFFLHFDQUNOLElBQUksRUFBRSxtQkFDTixJQUFJLEVBQUUsNEJBQ04sSUFBSSxFQUFFLHVCQUNOLElBQUksRUFBRSw4QkFDTixJQUFJLEVBQUUsd0JBQ04sSUFBSSxFQUFFLDhCQUNOLElBQUksRUFBRSxhQUNOLElBQUksRUFBRSwyQkFDTixJQUFJLEVBQUUsbUJBQ04sSUFBSSxFQUFFLGlCQUNOLElBQUksRUFBRSxZQUNOLElBQUksRUFBRSxzQkFDTixJQUFJLEVBQUU7QUFDUixJQUFJLElBQUksMENBQ04sSUFBSSxLQUNKLElBQUksbUNBQ0osSUFBSTtBQUVOLFNBQVM7SUFDUCxJQUFJLEtBQUksTUFBTSxLQUFLLFNBQVMsaUJBQWlCLG1DQUFtQyxPQUFPLENBQUEsS0FDbkYsaUJBQWlCLEtBQUssR0FBRSxjQUFjLFdBQVcsYUFBYSxRQUFRLFFBQVEsS0FBSyxVQUNqRixNQUNKLElBQUksR0FBRSxRQUFRLENBQUEsS0FBSyxNQUFNLEtBQUssR0FBRSxpQkFBaUIsNEJBQTRCLE9BQU8sQ0FBQSxLQUFLLEdBQUUsR0FDeEYsU0FBUyxjQUFjLENBQUUsQ0FBQSxjQUFhLG9CQUFvQixhQUFhLEdBQUUsSUFBRztJQUNqRixPQUFPO1FBQ0wsaUJBQWlCLEdBQUU7UUFDbkIsVUFBVSxHQUFFLE9BQU8sQ0FBQyxJQUFHLElBQU0sS0FBSSxFQUFFLGlCQUFpQixtQkFBbUIsUUFBUTtRQUMvRSxjQUFjLEVBQUU7UUFDaEIsbUJBQW1CLEVBQUUsT0FBTyxDQUFBLEtBQUssQ0FBQyxHQUFFLE1BQU0sUUFBUTtJQUNwRDtBQUNGO0tBWlM7QUFjVCxTQUFTLEVBQUUsRUFBQztJQUNWLE9BQU8sT0FBTyxLQUFLLElBQUcsV0FBVyxDQUFDLEdBQUcsT0FBTyxDQUFBLEtBQUssRUFBRSxLQUFLLEtBQUk7QUFDOUQ7TUFGUztBQUdULElBQUksSUFBSTtJQUNOLGFBQWEsT0FBTSxLQUFLLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxnQkFBZSxFQUFHO1lBQ3BELE1BQU07WUFDTixNQUFNO1FBQ1I7SUFDQSxtQkFBbUIsRUFBRTtJQUNyQixpQkFBaUIsRUFBRTtJQUNuQixhQUFhLEVBQUU7SUFDZiw2QkFBNkIsRUFBRTtJQUMvQixvQkFBb0IsRUFBRTtBQUN4QjtBQUVBLFNBQVMsRUFBRSxFQUFDLEVBQUUsQ0FBQztJQUNiLElBQUk7UUFDRixJQUFJLEtBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxpQkFBZ0IsRUFBRyxJQUFHO1FBQ3BDLE9BQU8sTUFBTSxRQUFRLE1BQUssR0FBRSxLQUFLLFFBQVE7SUFDM0MsRUFBRSxPQUFNO1FBQ047SUFDRjtBQUNGO0FBQ0EsZUFBZSxFQUFFLEVBQUMsRUFBRSxDQUFDO0lBQ25CLElBQUksS0FBSSxFQUFFLEVBQ1IsSUFBSSxHQUNKLElBQUksR0FDSixJQUFJLEVBQUUsRUFDTixJQUFJLENBQUMsR0FDTCxJQUFJLENBQUMsR0FDTCxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsMkJBQTBCLEVBQUcsYUFBYTtRQUNsRCx3QkFBd0IsRUFBRTtJQUM1QjtJQUNGLEVBQUUsU0FBUyxjQUFjLEFBQUMsQ0FBQSxHQUFHLEVBQUUsa0JBQWlCLEVBQUc7SUFDbkQsSUFBSTtRQUNGLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxRQUFPLEVBQUc7WUFDbkIsQ0FBQSxHQUFHLEVBQUUsVUFBUyxLQUFNLE1BQU0sRUFBRSxzQkFBc0IsR0FBRSxTQUFTLEFBQUMsQ0FBQSxHQUFHLEVBQUUsVUFBUztRQUMvRSxJQUFJLEtBQUksRUFBRSxxQkFBcUIsQUFBQyxDQUFBLEdBQUcsRUFBRSwwQkFBeUIsRUFBRyxhQUFhLEtBQUksSUFBSSxFQUNuRixtQ0FBbUMsSUFBSSxLQUFLLElBQUksR0FBRSxRQUFRLEdBQUUsU0FBUyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsUUFBTyxFQUN2RjtZQUNHLENBQUEsR0FBRyxFQUFFLFVBQVMsS0FBTSxNQUFNLEVBQUUsZ0JBQWdCLEdBQUUsTUFBTSxHQUFHLEtBQUssQUFBQyxDQUFBLEdBQUcsRUFBRSxVQUFTO1FBQzlFO1FBQ0osR0FBRyxJQUFLLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLEVBQUc7WUFDaEMsSUFBSSxJQUFJLEVBQUMsQ0FBQyxFQUFFLEVBQ1YsSUFBSSxFQUFDLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRztZQUNkLElBQUksSUFBSSxFQUFFLFVBQVUsR0FBRztZQUN2QixFQUFFO1lBQ0YsSUFBSSxJQUFJO21CQUFJLEVBQUUsWUFBWSxFQUFFO2FBQUMsQ0FBQyxLQUFLLENBQUMsSUFBRztnQkFDckMsSUFBSSxLQUFJLENBQUE7b0JBQ04sSUFBSSxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsc0NBQXFDLEVBQUc7b0JBQ3RELE9BQU8sYUFBYSxJQUFJLElBQUksWUFBWSxJQUFJLElBQUk7Z0JBQ2xEO2dCQUNBLE9BQU8sR0FBRSxNQUFLLEdBQUU7WUFDbEI7WUFDQSxLQUFLLElBQUksTUFBSyxFQUFHO2dCQUNkLENBQUEsR0FBRyxFQUFFLFVBQVM7Z0JBQ2YsSUFBSSxLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsc0NBQXFDLEVBQUc7Z0JBQ3RELElBQUksSUFBRztvQkFDTCxJQUFJLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSwrQkFBOEIsRUFBRyxJQUFHO29CQUNsRCxJQUFJLENBQUMsR0FBRzt3QkFDTixFQUFFLFlBQVksR0FBRyxHQUFFLE9BQU8sS0FBSyxHQUFHLFdBQVcsRUFBRTt3QkFDL0M7b0JBQ0Y7b0JBQ0EsSUFBSTt3QkFDRixJQUFJLElBQUksTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLFFBQU8sRUFBRyxJQUFNLEVBQUUsc0JBQXNCLElBQUcsR0FBRyxHQUFHLEVBQ2xFO3dCQUNILEVBQUUsS0FBSyxJQUFJLEVBQUUsVUFBVSxHQUFHLElBQUksRUFBRSxZQUFZLEdBQUcsR0FBRSxPQUFPLEdBQUcsRUFBRSxVQUFVLFdBQ3JFLFdBQVcsRUFBRSxRQUFRLEVBQUUsV0FBVyxRQUFRLEtBQzFDLGtEQUFrRCxLQUFLLFVBQVU7NEJBQy9ELFVBQVU7NEJBQ1YsV0FBVzs0QkFDWCxTQUFTLEVBQUU7NEJBQ1gsc0JBQXNCLEVBQUUsT0FBTyxJQUFJLENBQUEsS0FBSyxHQUFFOzRCQUMxQyxlQUFlLEVBQUUsaUJBQWlCO3dCQUNwQztvQkFDSixFQUFFLE9BQU8sR0FBRzt3QkFDVixJQUFJLGFBQWEsRUFBRSxnQkFBZ0IsTUFBTTt3QkFDekMsSUFBSSxhQUFhLEVBQUUsY0FBYzs0QkFDL0IsRUFBRSxVQUFVLEdBQUcsSUFBSSxFQUFFLFlBQVksR0FBRyxHQUFFLE9BQU8sR0FBRyxZQUFZLEVBQUUsUUFBUSxJQUFJLENBQUM7NEJBQzNFLE1BQU07d0JBQ1I7d0JBQ0EsRUFBRSxLQUFLOzRCQUNMLFVBQVU7NEJBQ1YsV0FBVzs0QkFDWCxXQUFXLENBQUM7NEJBQ1osU0FBUyxDQUFDOzRCQUNWLFNBQVMsRUFBRTs0QkFDWCxRQUFRLEVBQUU7NEJBQ1YsZUFBZTt3QkFDakIsSUFBSSxFQUFFLFVBQVUsR0FBRyxJQUFJLEVBQUUsWUFBWSxHQUFHLEdBQUUsT0FBTyxHQUFHLFdBQVcsRUFBRTtvQkFDbkU7b0JBQ0E7Z0JBQ0Y7Z0JBQ0EsSUFBSTtvQkFDRixJQUFJLEtBQUksTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLFFBQU8sRUFBRzt3QkFDMUIsSUFBSSxLQUFJLE1BQU0sRUFBRSxzQkFBc0IsSUFBRzt3QkFDekMsT0FBTyxJQUFJLElBQUcsQUFBQyxDQUFBLEdBQUcsRUFBRSxVQUFTLEtBQU0sTUFBTSxFQUFFLGVBQWUsQ0FBQyxHQUFFLEtBQUssR0FBRyxJQUFHLElBQUcsQ0FBQztvQkFDOUUsSUFDQSxJQUFJLEVBQUUsR0FBRSxPQUFPO29CQUNqQixFQUFFLFVBQVUsR0FBRyxJQUFJLEVBQUUsWUFBWSxHQUFHLEdBQUUsT0FBTyxHQUFHLENBQUMsTUFBTSxNQUFLLElBQUksV0FBVyxXQUN6RSxFQUFFLFFBQVEsQ0FBQyxNQUFNLE1BQU0sQ0FBQSxJQUFJLENBQUMsQ0FBQTtnQkFDaEMsRUFBRSxPQUFPLEdBQUc7b0JBQ1YsSUFBSSxhQUFhLEVBQUUsZ0JBQWdCLE1BQU07b0JBQ3pDLElBQUksYUFBYSxFQUFFLGNBQWM7d0JBQy9CLEVBQUUsVUFBVSxHQUFHLElBQUksRUFBRSxZQUFZLEdBQUcsR0FBRSxPQUFPLEVBQUUsR0FBRSxPQUFPLElBQUksWUFBWSxFQUFFLFFBQ3hFLElBQUksQ0FBQzt3QkFDUCxNQUFNO29CQUNSO29CQUNBLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxHQUFHLElBQUksRUFBRSxZQUFZLEdBQUcsR0FBRSxPQUFPLEVBQUUsR0FBRSxPQUFPLElBQUksV0FBVyxFQUM5RTtnQkFDSDtZQUNGO1FBQ0Y7SUFDRixFQUFFLE9BQU8sSUFBRztRQUNWLElBQUksY0FBYSxFQUFFLGdCQUFnQixNQUFNO1FBQ3pDLElBQUksY0FBYSxFQUFFLGNBQWMsSUFBSSxDQUFDO2FBQ2pDLE1BQU07SUFDYixTQUFVO1FBQ1AsQ0FBQSxHQUFHLEVBQUUsa0JBQWlCLEVBQUc7SUFDNUI7SUFDQSxJQUFJLElBQUksS0FBSyxHQUFFLFVBQVUsR0FBRSxVQUFVLEdBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFBLEtBQUssR0FBRTtJQUM1RSxPQUFPLElBQUksRUFBRSxxQkFBcUIsZUFBZSxFQUFFLHFCQUFxQixjQUFjO1FBQ3BGLFFBQVE7UUFDUixTQUFTO1FBQ1QsUUFBUTtJQUNWO0FBQ0Y7TUF4R2U7QUF5R2YsTUFBTSxVQUFVLEVBQUU7SUFDaEIsYUFBYztRQUNaLEtBQUssSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxJQUFJLENBQUMsNkJBQTZCLEtBQUssSUFBSSxDQUM5RSwyQkFBMkIsQ0FBQyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLElBQUksQ0FDckUsOEJBQThCLEVBQUUsRUFBRSxJQUFJLENBQUMsc0JBQXNCLE1BQU0sSUFBSSxDQUN2RSwwQkFBMEIsTUFBTSxJQUFJLENBQUMscUJBQXFCLElBQUksRUFDOUQ7UUFDSCxJQUFJLEtBQUksSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVM7WUFDVixJQUFJLENBQUMsMEJBQTBCO1lBQy9CLElBQUk7Z0JBQ0QsQ0FBQSxHQUFHLEVBQUUsMkJBQTBCLEVBQUcsT0FBTztZQUM1QyxFQUFFLE9BQU0sQ0FBQztZQUNULE1BQU07UUFDUixHQUFHLEFBQUMsQ0FBQSxHQUFHLEVBQUUseUJBQXdCLEVBQUcsVUFBVSxJQUFNLFNBQVMsSUFBSSxDQUM5RCx5QkFBeUI7WUFDeEIsSUFBSSxLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsNkJBQTRCLEVBQUc7WUFDN0MsSUFBSSxTQUFTLE1BQUssSUFBSSxDQUFDLHlCQUF5QixJQUFJO2dCQUNqRCxDQUFBLEdBQUcsRUFBRSwwQkFBeUIsRUFBRyxPQUFPLGdCQUFnQixPQUFPLFNBQVMsTUFBTTtvQkFDN0UsR0FBRyxJQUFJLENBQUMsdUJBQXVCO29CQUMvQixxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDNUIsWUFBWSxJQUFJLENBQUM7Z0JBQ25CLEdBQUcsS0FBSyxPQUFPO1lBQ2pCLEVBQUUsT0FBTTtnQkFDTixRQUFRLEtBQUs7WUFDZjtRQUNGLElBQUksSUFBSSxDQUFDLGdDQUFnQyxJQUFJLENBQUMsb0NBQ2hELE9BQU8saUJBQWlCLFdBQVcsQ0FBQTtZQUNqQyxHQUFFLE1BQU0sU0FBUyxLQUFLLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEdBQUUsTUFBTSxNQUFNO1FBQ2pFO0lBQ0o7SUFDQSxNQUFNLCtCQUErQjtRQUNuQyxJQUFJO1lBQ0YsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLDRCQUEyQixFQUFHLE9BQU8sZ0JBQWdCLE9BQU8sU0FBUyxNQUNqRixJQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZ0JBQWUsRUFBRyxJQUFNLFNBQVMsQUFBQyxDQUFBLEdBQUcsRUFBRSxtQkFBa0IsS0FBTTtvQkFDdkUsU0FBUztvQkFDVCxVQUFVO2dCQUNaLElBQUksT0FBTTtnQkFDUixJQUFJLENBQUMsc0JBQXNCLEdBQUUscUJBQXFCLEdBQUUsY0FBZSxDQUFBLElBQUksQ0FBQyxhQUN0RSxHQUFFLFVBQVMsR0FBSSxNQUFNLElBQUksQ0FBQyxTQUFTLEdBQUU7WUFDekMsR0FBRyxJQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsNkJBQTRCLEVBQUcsV0FBVyxDQUFBO2dCQUN2RCxJQUFJLENBQUMsMEJBQTBCO29CQUM3QixXQUFXLEdBQUU7Z0JBQ2YsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEdBQUUscUJBQXFCLEdBQUUsY0FBZSxDQUFBLElBQUksQ0FDdkUsYUFBYSxHQUFFLFVBQVM7WUFDN0IsR0FBRyxJQUFNLFNBQVMsZ0JBQWdCLGFBQ2hDLDRDQUE0QztRQUNsRCxFQUFFLE9BQU07WUFDTixRQUFRLEtBQUs7UUFDZjtJQUNGO0lBQ0EsbUJBQW1CO1FBQ2pCLE9BQU87WUFDTCxDQUFDLEVBQUUsV0FBVyxLQUFLLEVBQUU7Z0JBQ25CLFNBQVMsT0FBTyxJQUFHO29CQUNqQixJQUFJLEtBQUksTUFBTSxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRztvQkFDbEMsUUFBUSxNQUFLLE9BQU8sTUFBSyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsa0JBQWlCLEVBQUcsR0FBRSxRQUFRLE9BQU8sTUFBSztnQkFDakY7Z0JBQ0EsU0FBUztvQkFDUCxhQUFhLENBQUM7Z0JBQ2hCO1lBQ0Y7WUFDQSxDQUFDLEVBQUUsV0FBVyxPQUFPLEVBQUU7Z0JBQ3JCLFNBQVMsQ0FBQyxJQUFHLElBQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxxQkFBb0IsRUFBRyxHQUFFLFFBQVEsR0FBRyxHQUFFO2dCQUMvRCxTQUFTO29CQUNQLGFBQWEsQ0FBQztnQkFDaEI7WUFDRjtZQUNBLENBQUMsRUFBRSxXQUFXLGdCQUFnQixFQUFFO2dCQUM5QixTQUFTLE9BQU8sSUFBRztvQkFDakIsSUFBSSxLQUFJLE1BQU0sUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUc7b0JBQ2xDLE9BQU8sUUFBUSxNQUFLLE9BQU8sTUFBSyxBQUFDLENBQUEsR0FBRyxFQUFFLHFCQUFvQixFQUFHLEdBQUUsUUFBUSxPQUFPO2dCQUNoRjtnQkFDQSxTQUFTO29CQUNQLGFBQWEsQ0FBQztnQkFDaEI7WUFDRjtZQUNBLENBQUMsRUFBRSxXQUFXLFNBQVMsRUFBRTtnQkFDdkIsU0FBUyxDQUFDLElBQUcsSUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLGlCQUFnQixFQUFHLElBQUc7Z0JBQy9DLFNBQVM7b0JBQ1AsYUFBYSxDQUFDO2dCQUNoQjtZQUNGO1lBQ0EsQ0FBQyxFQUFFLFdBQVcsS0FBSyxFQUFFO2dCQUNuQixTQUFTLE9BQU8sSUFBRztvQkFDakIsSUFBSSxLQUFJLE1BQU0sUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUc7b0JBQ2xDLFFBQVEsTUFBSyxPQUFPLE1BQUssTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLGFBQVksRUFBRyxHQUFFLFFBQVEsT0FBTztnQkFDdkU7Z0JBQ0EsU0FBUztvQkFDUCxhQUFhLENBQUM7Z0JBQ2hCO1lBQ0Y7WUFDQSxDQUFDLEVBQUUsV0FBVyxXQUFXLEVBQUU7Z0JBQ3pCLFNBQVMsQ0FBQyxJQUFHLElBQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxtQkFBa0IsRUFBRyxJQUFHO2dCQUNqRCxTQUFTO29CQUNQLGFBQWEsQ0FBQztnQkFDaEI7WUFDRjtRQUNGO0lBQ0Y7SUFDQSxjQUFjO1FBQ1osT0FBTztJQUNUO0lBQ0EsTUFBTSxtQkFBbUI7UUFDdkIsSUFBSSxLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUscUJBQW9CLEVBQUcsQUFBQyxDQUFBLEdBQUcsRUFBRSxZQUFXO1FBQ3RELE9BQU8sUUFBUSxLQUNiLENBQUMsb0NBQW9DLEVBQUUsS0FBSyxVQUFVO1lBQUMsS0FBSTtZQUFJLE9BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSw4QkFBNkIsRUFBRztRQUFFLEdBQUcsQ0FBQyxHQUM3RztJQUNQO0lBQ0EseUJBQXlCLEVBQUMsRUFBRSxDQUFDLEVBQUU7UUFDN0IsT0FBTyxBQUFDLENBQUEsR0FBRyxFQUFFLDBCQUF5QixFQUFHLElBQUc7SUFDOUM7SUFDQSxNQUFNLGlCQUFpQixFQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzNCLElBQUksS0FBSSxBQUFDLENBQUEsR0FBRyxFQUFFLHNDQUFxQyxFQUFHO1FBQ3RELFFBQVEsS0FDTixDQUFDLG9DQUFvQyxFQUFFLEtBQUssVUFBVTtZQUFDLE9BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSw4QkFBNkIsRUFBRztRQUFFLEdBQUcsQ0FBQztRQUUxRyxJQUFJLElBQUksTUFBTSxJQUFJLENBQUMsbUJBQW1CLElBQUc7UUFDekMsSUFBSSxZQUFZLE9BQU8sR0FBRyxPQUFPLFFBQVEsS0FDdkMsc0VBQXNFO1FBQ3hFLElBQUssQ0FBQSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsS0FDNUIsQ0FBQyxvQ0FBb0MsRUFBRSxLQUFLLFVBQVU7WUFBQyw0QkFBMkIsRUFBRTtRQUFFLEdBQUcsQ0FBQyxDQUMxRixJQUFLLFFBQVEsS0FBSztJQUN0QjtJQUNBLGFBQWEsRUFBQyxFQUFFO1FBQ2QsT0FBTyxBQUFDLENBQUEsR0FBRyxFQUFFLFlBQVcsRUFBRztJQUM3QjtJQUNBLGNBQWMsRUFBQyxFQUFFO1FBQ2YsSUFBSSxFQUNGLFdBQVcsSUFBSSxFQUFFLEVBQ2pCLFlBQVksS0FBSSxFQUFFLEVBQ2xCLEdBQUcsR0FDSixHQUFHLE1BQUssQ0FBQztRQUNWLE9BQU87WUFDTCxRQUFRO1lBQ1IsV0FBVyxNQUFNLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDcEMsWUFBWSxNQUFNLFFBQVEsTUFBSyxLQUFJLEVBQUU7UUFDdkM7SUFDRjtJQUNBLHFDQUFxQyxFQUFDLEVBQUU7UUFDdEMsSUFBSSxFQUNGLFdBQVcsQ0FBQyxFQUNaLFlBQVksRUFBQyxFQUNkLEdBQUcsSUFBSSxDQUFDLGNBQWM7UUFDdkIsT0FBTztZQUNMLFdBQVc7WUFDWCxZQUFZO1FBQ2Q7SUFDRjtJQUNBLGtDQUFrQyxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsRUFBRTtRQUN6QyxPQUFPLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZ0NBQStCLEVBQUcsSUFBRyxHQUFHO1lBQ25ELG1CQUFtQixFQUFFO1lBQ3JCLFlBQVksZ0JBQWdCLEtBQUksRUFBRSx1Q0FBdUMsRUFDdEU7UUFDTDtJQUNGO0lBQ0EsTUFBTSxvQkFBb0IsRUFBQyxFQUFFO1FBQzNCLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLGVBQWMsRUFBRyxLQUFLLEdBQUc7WUFDckMsbUJBQW1CLENBQUM7WUFDcEIsK0JBQStCLENBQUM7WUFDaEMsdUJBQXVCLENBQUM7WUFDeEIscUJBQXFCLElBQUksQ0FBQztRQUM1QixNQUFNLENBQUM7UUFDUCxPQUFPLElBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHO0lBQ2xFO0lBQ0EsTUFBTSxvQkFBb0I7UUFDeEIsSUFBSSxLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZUFBYyxFQUFHLEtBQUssR0FBRztZQUNyQywrQkFBK0IsQ0FBQztZQUNoQyx1QkFBdUIsQ0FBQztZQUN4QixxQkFBcUIsSUFBSSxDQUFDO1FBQzVCLE1BQU0sQ0FBQztRQUNQLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixJQUFHLElBQUksQ0FBQyxjQUFjLElBQUc7SUFDaEU7SUFDQSxrQ0FBa0MsRUFBQyxFQUFFO1FBQ25DLE9BQU8sSUFBSSxDQUFDLHFDQUFxQyxJQUFJLENBQUM7SUFDeEQ7SUFDQSxrQ0FBa0M7UUFDaEMsT0FBTyxJQUFJLENBQUMscUNBQXFDLElBQUksQ0FBQztJQUN4RDtJQUNBLDBCQUEwQjtRQUN4QixPQUFPO0lBQ1Q7SUFDQSw0QkFBNEI7UUFDMUIsT0FBTyxJQUFJLENBQUMsdUJBQXdCLENBQUEsSUFBSSxDQUFDLHNCQUFzQixBQUFDLENBQUEsR0FBRyxFQUNoRSx5QkFBd0IsR0FBRyxHQUFJLElBQUksQ0FBQztJQUN6QztJQUNBLG1DQUFtQyxFQUFDLEVBQUU7UUFDcEMsSUFBSSxDQUFFLENBQUEsY0FBYSxXQUFVLEdBQUksT0FBTztRQUN4QyxJQUFJLElBQUksR0FBRSxRQUFRO1FBQ2xCLE9BQU8sS0FBSyxBQUFDLENBQUEsR0FBRyxFQUFFLHFCQUFvQixFQUFHLEtBQUssSUFBSTtJQUNwRDtJQUNBLDBCQUEwQixFQUFDLEVBQUU7UUFDM0IsSUFBSSxJQUFJLElBQUksQ0FBQyx3QkFBd0I7UUFDckMsT0FBTyxBQUFDLENBQUEsQ0FBRSxDQUFBLGNBQWEsZ0JBQWUsS0FBTSxpQkFBaUIsR0FBRSxJQUFHLEtBQU0sbUJBQ3RFLEtBQUssMEJBQTBCLEtBQUssNEJBQTRCLEtBQU0sQ0FBQSxDQUFDLENBQUUsQ0FBQSxhQUFhLEtBQ2xGLHFCQUFxQixLQUFLLFlBQVksS0FBSyxFQUFFLFNBQVMsU0FBUSxLQUFNLElBQUksQ0FDekUsMkJBQTJCLEdBQUM7SUFDbkM7SUFDQSxNQUFNLHlCQUF5QixFQUFDLEVBQUU7UUFDaEMsSUFBSSxJQUFJLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixLQUNyQyxLQUFJLElBQUksQ0FBQyxvQ0FBb0MsT0FBTSxDQUFDO1FBQ3RELElBQUksQ0FBQyxtQkFBbUIsS0FBSztZQUMzQixNQUFNO1lBQ04sZUFBZSxDQUFBLEtBQUssSUFBSSxDQUFDLG1DQUFtQztZQUM1RCxpQkFBaUIsQ0FBQSxLQUFLLElBQUksQ0FBQywwQkFBMEI7WUFDckQsU0FBUyxJQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsV0FBVSxFQUFHLFdBQVc7WUFDN0MsUUFBUSxJQUFNLElBQUksQ0FBQztZQUNuQixRQUFRLElBQU0sSUFBSSxDQUFDO1lBQ25CLGtCQUFrQjtZQUNsQix3QkFBd0I7WUFDeEIsbUJBQW1CLElBQU0sSUFBSSxDQUFDO1lBQzlCLHlCQUF5QixJQUFNLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQztZQUM1RSxtQkFBbUIsSUFBTSxJQUFJLENBQUM7WUFDOUIsTUFBTSxFQUFFO1lBQ1IsV0FBVyxPQUFPLEVBQ2hCLGdCQUFnQixFQUFDLEVBQ2xCO2dCQUNDLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxzQkFBcUIsRUFBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUcsSUFBSSxDQUFDLGdCQUNoRTtZQUNMO1FBQ0Y7SUFDRjtJQUNBLE1BQU0sb0JBQW9CLEtBQUksQ0FBQyxDQUFDLEVBQUU7UUFDaEMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUNiLElBQUksR0FBRyxPQUFPLEVBQUUsU0FBUyxDQUFDO1FBQzFCLElBQUksS0FBSSxJQUFJLENBQUMsNkJBQTZCO1FBQzFDLE9BQU87SUFDVDtJQUNBLHdCQUF3QjtRQUN0QixPQUFPLEFBQUMsQ0FBQSxHQUFHLEVBQUUsMEJBQXlCLE9BQVEsQUFBQyxDQUFBLEdBQUcsRUFBRSxpQkFBZ0I7SUFDdEU7SUFDQSw0QkFBNEI7UUFDMUIsSUFBSTtZQUNGLElBQUksS0FBSSxPQUFPLGVBQWUsUUFBUTtZQUN0QyxJQUFJLENBQUMsSUFBRyxPQUFPO1lBQ2YsSUFBSSxJQUFJLEtBQUssTUFBTTtZQUNuQixJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsT0FBTyxFQUFFLGFBQWEsR0FBRyxPQUFPLElBQUksQ0FBQyw4QkFDMUQ7WUFDRixPQUFPO2dCQUNMLFdBQVcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2YscUJBQXFCLENBQUMsQ0FBQyxFQUFFO2dCQUN6QixXQUFXLFlBQVksT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxPQUFPLFNBQzdFO2dCQUNILHVCQUF1QixZQUFZLE9BQU8sRUFBRSx3QkFBd0IsRUFDakUsd0JBQXdCO2dCQUMzQixXQUFXLFlBQVksT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEtBQUs7Z0JBQy9ELFlBQVksRUFBRTtZQUNoQjtRQUNGLEVBQUUsT0FBTyxJQUFHO1lBQ1YsT0FBTyxJQUFJLENBQUMsOEJBQThCO1FBQzVDO0lBQ0Y7SUFDQSwwQkFBMEIsRUFBQyxFQUFFO1FBQzNCLElBQUk7WUFDRixPQUFPLGVBQWUsUUFBUSxHQUFHLEtBQUssVUFBVTtnQkFDOUMsV0FBVztnQkFDWCxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDNUIsV0FBVyxPQUFPLFNBQVM7Z0JBQzNCLHVCQUF1QixJQUFJLENBQUM7Z0JBQzVCLFdBQVcsS0FBSztnQkFDaEIsWUFBWSxJQUFJLENBQUM7WUFDbkI7UUFDRixFQUFFLE9BQU8sSUFBRyxDQUFDO0lBQ2Y7SUFDQSw2QkFBNkI7UUFDM0IsSUFBSTtZQUNGLE9BQU8sZUFBZSxXQUFXO1FBQ25DLEVBQUUsT0FBTyxJQUFHLENBQUM7SUFDZjtJQUNBLDRCQUE0QjtRQUMxQixPQUFPO1lBQUUsQ0FBQSxHQUFHLEVBQUUsaUJBQWdCLE1BQU8sYUFBYTtZQUFVLENBQUEsR0FBRyxFQUFFLDBCQUF5QixNQUNuRixpQkFBaUI7WUFBWSxJQUFJLENBQUM7U0FDeEMsQ0FBQyxLQUFLO0lBQ1Q7SUFDQSx3QkFBd0IsRUFBQyxFQUFFO1FBQ3pCLElBQUk7WUFDRixJQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sU0FBUyxPQUM5QixLQUFJLElBQUksSUFBSSxHQUFFLFdBQVcsT0FBTyxTQUFTO1lBQzNDLE9BQU8sRUFBRSxXQUFXLEdBQUUsVUFBVSxFQUFFLGFBQWEsR0FBRTtRQUNuRCxFQUFFLE9BQU8sSUFBRztZQUNWLE9BQU8sQ0FBQztRQUNWO0lBQ0Y7SUFDQSwyQkFBMkIsRUFBQyxFQUFFO1FBQzVCLElBQUk7WUFDRixJQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sU0FBUyxPQUM5QixLQUFJLElBQUksSUFBSSxHQUFFLFdBQVcsT0FBTyxTQUFTO1lBQzNDLE9BQU8sRUFBRSxXQUFXLEdBQUUsVUFBVSxFQUFFLGFBQWEsR0FBRSxZQUFhLENBQUEsRUFBRSxTQUFTLEdBQUUsUUFBUSxBQUFDLENBQUEsR0FBRyxFQUNsRiwwQkFBeUIsT0FBUSxJQUFJLENBQUMsZ0NBQWdDLEdBQ3hFLHFCQUFvQjtRQUN6QixFQUFFLE9BQU8sSUFBRztZQUNWLE9BQU8sQ0FBQztRQUNWO0lBQ0Y7SUFDQSxNQUFNLG1DQUFtQztRQUN2QyxJQUFJLEtBQUksSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE1BQUssQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEtBQUk7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQywyQkFBMkIsS0FBSTtZQUN2QyxJQUFJLENBQUM7WUFDTDtRQUNGO1FBQ0EsSUFBSSxDQUFDLHNCQUFzQixHQUFFLHFCQUFxQixHQUFFLGNBQWUsQ0FBQSxJQUFJLENBQUMsYUFBYSxHQUNsRixVQUFTO1FBQ1osSUFBSSxJQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxnQkFBZSxFQUFHLElBQU0sSUFBSSxDQUFDLHlCQUF5QjtZQUN4RSxTQUFTO1lBQ1QsVUFBVTtRQUNaO1FBQ0EsSUFBSSxDQUFDLEdBQUc7WUFDTixJQUFJLENBQUM7WUFDTDtRQUNGO1FBQ0EsSUFBSTtZQUNGLElBQUksQ0FBQywwQkFBMEI7Z0JBQzdCLFdBQVcsR0FBRTtZQUNmLEdBQUcsTUFBTSxJQUFJLENBQUMsa0JBQWtCLEdBQUU7UUFDcEMsU0FBVTtZQUNSLElBQUksQ0FBQztRQUNQO0lBQ0Y7SUFDQSwwQkFBMEI7UUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQUFBQyxDQUFBLEdBQUcsRUFBRSxnQkFBZTtJQUMzRDtJQUNBLDZCQUE2QjtRQUMzQixJQUFJLENBQUMsQUFBQyxDQUFBLEdBQUcsRUFBRSxpQkFBZ0IsS0FBTTtRQUNqQyxJQUFJLEtBQUksSUFBSSxDQUFDLGdCQUFnQixZQUFZLG9CQUFvQixLQUFLLENBQUEsS0FBSyxnQkFBZ0IsR0FDcEY7UUFDSCxNQUFLLElBQUksQ0FBQyxnQkFBZ0IsMEJBQTBCO1lBQ2hELE9BQU87WUFDUCxVQUFVLENBQUM7WUFDWCxNQUFNO1FBQ1IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLFlBQVksYUFBYSxTQUFTLGdCQUFnQixJQUFJLENBQzlFLGdCQUFnQixxQkFBcUI7SUFDMUM7SUFDQSwyQkFBMkI7UUFDekIsSUFBSSxLQUFJLE1BQU0sS0FBSyxTQUFTLGlCQUFpQiw2QkFDM0MsSUFBSTtRQUNOLEtBQUssSUFBSSxNQUFLLEdBQ1osSUFBSSxjQUFhLGVBQWUsQUFBQyxDQUFBLEdBQUcsRUFBRSxxQkFBb0IsRUFBRyxLQUFJO1lBQy9ELElBQUksY0FBYSxrQkFBa0I7Z0JBQ2pDLElBQUk7b0JBQUM7b0JBQVU7b0JBQVE7b0JBQVU7b0JBQVU7b0JBQVM7aUJBQVcsQ0FBQyxTQUFTLEdBQUUsT0FDekU7Z0JBQ0YsR0FBRSxNQUFNLFVBQVcsQ0FBQSxLQUFLLENBQUE7Z0JBQ3hCO1lBQ0Y7WUFDQSxJQUFJLGNBQWEscUJBQXFCO2dCQUNwQyxHQUFFLE1BQU0sVUFBVyxDQUFBLEtBQUssQ0FBQTtnQkFDeEI7WUFDRjtZQUNBLGNBQWEscUJBQXFCLEdBQUUsU0FBVSxDQUFBLEtBQUssQ0FBQTtRQUNyRDtRQUFFLE9BQU8sQ0FBQyxFQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsZ0NBQStCLElBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUMvRDtJQUNBLE1BQU0sOEJBQThCO1FBQ2xDLElBQUksS0FBSSxJQUNOLElBQUksR0FDSixLQUFJLEtBQUssUUFBUTtRQUNuQixNQUFPLEtBQUssUUFBUSxJQUFJO1lBQ3RCLElBQUksS0FBSSxJQUFJLENBQUM7WUFDYixJQUFJLE9BQU0sS0FBSSxLQUFLLElBQUssQ0FBQSxLQUFJLElBQUcsSUFBSSxDQUFBLEdBQUksS0FBSyxHQUFHO2dCQUM3QyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHO2dCQUNuQjtZQUNGO1lBQ0EsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRztRQUNyQjtJQUNGO0lBQ0EsTUFBTSw0QkFBNEIsRUFBQyxFQUFFLENBQUMsRUFBRTtRQUN0QyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZ0JBQWUsRUFBRyxJQUFNLE9BQU8sU0FBUyxTQUFTLE1BQUssQUFBQyxDQUFBLEdBQUcsRUFDbkUsMEJBQXlCLE9BQVEsSUFBSSxDQUFDLCtCQUErQixHQUFHO1lBQ3pFLFNBQVM7WUFDVCxVQUFVO1FBQ1o7SUFDRjtJQUNBLE1BQU0sZUFBZSxFQUFDLEVBQUU7UUFDdEIsSUFBSSxJQUFHO1lBQ0wsSUFBSSxHQUFFLFNBQVMsRUFBRSxXQUFXLGFBQWEsR0FBRSxTQUFTLEVBQUUsV0FBVyxZQUFZO2dCQUMzRSxLQUFLLElBQUksS0FBSyxHQUFFLFlBQVksRUFBRSxDQUFFLE1BQU0sSUFBSSxDQUFDLGVBQWU7Z0JBQzFEO1lBQ0Y7WUFDQSxJQUFJLEdBQUUsU0FBUyxFQUFFLFdBQVcsUUFBUSxHQUFFLFFBQVE7Z0JBQzVDLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxlQUFjLEVBQUcsR0FBRTtnQkFDL0I7WUFDRjtZQUNBLElBQUksR0FBRSxTQUFTLEVBQUUsV0FBVyxRQUFRLEdBQUUsUUFBUTtnQkFDNUMsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUFHLEdBQUU7Z0JBQ25DO1lBQ0Y7WUFBRSxDQUFBLEdBQUUsU0FBUyxFQUFFLFdBQVcsVUFBVSxHQUFFLFNBQVMsRUFBRSxXQUFXLGVBQWMsS0FBTSxHQUM3RSxVQUFVLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZ0JBQWUsRUFBRyxHQUFFO1FBQ3pDO0lBQ0Y7SUFDQSxNQUFNLGdCQUFnQixFQUFDLEVBQUU7UUFDdkIsS0FBSyxJQUFJLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxlQUFlO0lBQzdDO0lBQ0EsTUFBTSxxQkFBcUIsRUFBQyxFQUFFO1FBQzVCLElBQUksSUFBSSxPQUFPLFNBQVMsTUFDdEIsS0FBSSxJQUFJLENBQUM7UUFDWCxNQUFNLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxDQUFDLDBCQUEwQjtRQUNoRSxJQUFJO1lBQ0YsSUFBSSxJQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxZQUFXLEVBQUcsSUFBSSxDQUFDLFlBQVksS0FBTyxHQUFHLEtBQU87WUFDcEUsSUFBSSxDQUFDLEdBQUcsT0FBTyxJQUFJLENBQUMsOEJBQThCLElBQUksQ0FBQyxrQkFBa0I7WUFDekUsTUFBTSxJQUFJLENBQUMsNEJBQTRCLEdBQUcsS0FBSSxNQUFNLElBQUksQ0FBQztZQUN6RCxJQUFJLElBQUksTUFBTSxJQUFJLENBQUMsa0JBQWtCO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QjtRQUM1QyxFQUFFLE9BQU8sSUFBRztZQUNWLE1BQU0sSUFBSSxDQUFDLDhCQUE4QjtRQUMzQztJQUNGO0lBQ0Esd0JBQXdCLEVBQUMsRUFBRTtRQUN6QixJQUFJLElBQUksY0FBYSxtQkFBbUIsR0FBRSxRQUFRLEdBQUUsYUFBYSxHQUFFLGVBQWUsSUFDaEYsS0FBSSxHQUFFLGFBQWEsaUJBQWlCO1FBQ3RDLE9BQU8sQUFBQyxDQUFBLEtBQUssRUFBQSxFQUFHLE9BQU87SUFDekI7SUFDQSxxQkFBcUI7UUFDbkIsSUFBSSxLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsbUJBQWtCLEVBQUc7UUFDbkMsT0FBTyxBQUFDLENBQUEsSUFBRyxlQUFlLEVBQUMsRUFBRyxPQUFPO0lBQ3ZDO0lBQ0Esd0JBQXdCO1FBQ3RCLElBQUksS0FBSSxJQUFJLENBQUM7UUFDYixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUEsR0FBRSxTQUFTLGFBQWEsR0FBRSxTQUFTLGFBQWEsR0FBRSxTQUFTLGVBQWUsR0FDdEYsU0FBUyxtQkFBbUIsR0FBRSxTQUFTLFNBQVE7SUFDcEQ7SUFDQSx5QkFBeUIsRUFBQyxFQUFFO1FBQzFCLElBQUksSUFBSSxJQUFJLENBQUMsd0JBQXdCO1FBQ3JDLE9BQU8sYUFBYSxLQUFLLHFCQUFxQixLQUFLLFlBQVksS0FBSyxFQUFFLFNBQVM7SUFDakY7SUFDQSwyQkFBMkIsRUFBQyxFQUFFO1FBQzVCLElBQUksSUFBSSxJQUFJLENBQUMsd0JBQXdCO1FBQ3JDLElBQUksY0FBYSxvQkFBb0IsaUJBQWlCLEdBQUUsTUFBTSxPQUFPLENBQUM7UUFDdEUsSUFBSSxjQUFhLG9CQUFvQixtQkFBbUIsR0FBRSxRQUFRLGFBQWEsS0FDN0UsY0FBYSxvQkFBb0IsdUJBQXVCLEdBQUUsTUFBTSxvQkFBb0IsR0FDbkYsUUFBUSxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQ25DLElBQUksbUJBQW1CLEtBQUssMEJBQTBCLEdBQUcsT0FBTyxDQUFDO1FBQ2pFLElBQUksS0FBSSxJQUFJLENBQUM7UUFDYixPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLHlCQUF5QjtJQUM1RTtJQUNBLDBCQUEwQjtRQUN4QixJQUFJLEtBQUksTUFBTSxLQUFLLFNBQVMsaUJBQzFCLGlEQUNBLElBQUksR0FBRSxPQUFPLENBQUEsS0FBSyxDQUFDLENBQUMsQUFBQyxDQUFBLEdBQUcsRUFBRSxxQkFBb0IsRUFBRyxPQUFNLElBQUksQ0FBQywyQkFDNUQ7UUFDRixPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUk7SUFDakI7SUFDQSwyQkFBMkI7UUFDekIsSUFBSSxLQUFJLE1BQU0sS0FBSyxTQUFTLHFCQUFxQixZQUMvQyxJQUFJLEdBQUUsT0FBTyxDQUFBO1lBQ1gsSUFBSSxDQUFDLEdBQUUsaUJBQWlCLENBQUMsR0FBRSxLQUFLLE9BQU8sQ0FBQztZQUN4QyxJQUFJO2dCQUNGLE9BQU8sQUFBQyxDQUFBLEdBQUcsRUFBRSxxQkFBb0IsRUFBRyxHQUFFO1lBQ3hDLEVBQUUsT0FBTyxJQUFHO2dCQUNWLE9BQU8sQ0FBQztZQUNWO1FBQ0Y7UUFDRixPQUFPO0lBQ1Q7SUFDQSw2QkFBNkI7UUFDM0IsT0FBTyxJQUFJLFFBQVEsQ0FBQTtZQUNqQixJQUFJO2dCQUNGLElBQUksSUFBSSxPQUFPLE9BQU8sUUFDcEIsS0FBSSxDQUFDLEdBQ0wsSUFBSSxPQUFPLFdBQVc7b0JBQ3BCLE1BQU0sQ0FBQSxLQUFJLENBQUMsR0FBRyxFQUFFLG9CQUFvQixXQUFXLElBQUksSUFBRTtnQkFDdkQsR0FBRyxPQUNILElBQUksQ0FBQTtvQkFDRixJQUFJLElBQUksRUFBRSxNQUFNO29CQUNmLENBQUEsTUFBTSxFQUFFLGVBQWUsNEJBQTRCLE1BQU0sRUFBRSxlQUN6RCwwQkFBeUIsS0FBTyxDQUFBLE1BQU0sQ0FBQSxLQUFJLENBQUMsR0FBRyxPQUFPLGFBQWEsSUFBSSxFQUN0RSxvQkFBb0IsV0FBVyxJQUFJLElBQUUsQ0FBQztnQkFDM0M7Z0JBQ0YsRUFBRSxpQkFBaUIsV0FBVztZQUNoQyxFQUFFLE9BQU8sR0FBRztnQkFDVjtZQUNGO1FBQ0Y7SUFDRjtJQUNBLE1BQU0sNkJBQTZCLEVBQUMsRUFBRTtRQUNwQyxJQUFJLElBQUksSUFBSSxDQUFDLDRCQUNYLEtBQUksQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFO1FBQ3JCLElBQUksQ0FBQyxJQUFHLGVBQWUsT0FBTyxDQUFDO1FBQy9CLElBQUksSUFBSSxJQUFJLENBQUM7UUFDYixPQUFPLEdBQUUsY0FBYyxZQUFZLEFBQUMsQ0FBQSxHQUFHLEVBQUUsV0FBVSxFQUFHO1lBQ3BELE1BQU0sRUFBRSxjQUFjO1lBQ3RCLE1BQU07Z0JBQ0osWUFBWSxJQUFJLENBQUM7Z0JBQ2pCLHFCQUFxQixJQUFJLENBQUM7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDO1lBQ2Q7WUFDQSxLQUFLLEdBQUU7UUFDVCxJQUFJO1lBQ0YsY0FBYztRQUNoQixJQUFJLEdBQUUsY0FBYyxZQUFZLEFBQUMsQ0FBQSxHQUFHLEVBQUUsV0FBVSxFQUFHO1lBQ2pELE1BQU0sRUFBRSxjQUFjO1lBQ3RCLE1BQU07Z0JBQ0osV0FBVztnQkFDWCxXQUFXLEtBQUs7WUFDbEI7WUFDQSxLQUFLLEdBQUU7UUFDVCxJQUFJO1lBQ0YsY0FBYztRQUNoQixJQUFJLE1BQU0sR0FBRyxDQUFDO0lBQ2hCO0lBQ0EsNkJBQTZCLEVBQUMsRUFBRTtRQUM5QixJQUFJLElBQUksSUFBSSxDQUFDLDRCQUNYLEtBQUksQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDLElBQUcsaUJBQWtCLENBQUEsR0FBRSxjQUFjLFlBQVksQUFBQyxDQUFBLEdBQUcsRUFBRSxXQUFVLEVBQUc7WUFDM0UsTUFBTTtZQUNOLE1BQU07Z0JBQ0osV0FBVztnQkFDWCxXQUFXLEtBQUs7WUFDbEI7WUFDQSxLQUFLLEdBQUU7UUFDVCxJQUFJO1lBQ0YsY0FBYztRQUNoQixJQUFJLENBQUMsQ0FBQTtJQUNQO0lBQ0EsTUFBTSxrQkFBa0IsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUM5QixJQUFJLENBQUMsbUJBQW1CLFlBQVksSUFBSSxDQUFDLHNCQUFzQixNQUFNLElBQUksQ0FDdEUsOEJBQThCLEVBQUU7UUFDbkMsSUFBSSxJQUFJLENBQUMsR0FDUCxLQUFJLElBQ0osSUFBSTtRQUNOLE1BQU0sSUFBSSxDQUFDO1FBQ1gsSUFBSTtZQUNGLElBQUksQ0FBQywyQkFBMkIsTUFBTSxJQUFJLENBQUM7WUFDM0MsSUFBSSxJQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxvQkFBbUIsRUFBRyxXQUFXLHFCQUNuRCxJQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSwrQkFBOEIsRUFBRyxJQUNqRCxJQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSwrQkFBOEIsRUFBRztZQUNuRCxJQUFJLFFBQVEsS0FDUixDQUFDLG1CQUFtQixFQUFFLEtBQUssVUFBVTtnQkFBQyxjQUFhLEVBQUU7Z0JBQWEsZ0JBQWUsRUFBRSxXQUFXO2dCQUFPLGlCQUFnQixFQUFFLFlBQVk7Z0JBQU8sMEJBQXlCLEVBQUUscUJBQXFCO2dCQUFPLG1CQUFrQixFQUFFLGNBQWM7WUFBTSxHQUFHLENBQUMsR0FDMU8sS0FBSSxBQUFDLENBQUEsR0FBRyxFQUFFLG9CQUFtQixFQUFHLFdBQVcsU0FBUyxJQUFJLE9BQU8sR0FBRyxVQUNuRSxTQUFTLEdBQUcsU0FBUyxJQUFJLFFBQVEsSUFBRztnQkFDeEMsSUFBSSxLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsMkJBQTBCLEtBQ3RDLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxxQ0FBb0MsS0FDOUMsSUFBSSxDQUFDO2dCQUNQLElBQUksQ0FBQyxVQUFVLElBQUk7b0JBQ2pCLElBQUksTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLFdBQVUsRUFBRztnQkFDL0IsSUFBSSxNQUFNLElBQUksQ0FBQyxVQUFVO2dCQUN6QixJQUFJLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSwyQkFBMEI7Z0JBQ3hDLEtBQUssR0FBRSxrQkFBa0IsRUFBRSxpQkFBaUIsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUNuRCx1Q0FBc0MsRUFBRztZQUM5QztZQUNBLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLHNCQUFxQixLQUNqQyxJQUFJLE1BQU0sSUFBSSxDQUFDLG9CQUNmLElBQUksSUFBSTtnQkFBQzthQUFFLEdBQUcsRUFBRTtZQUNsQixJQUFJLE1BQU0sRUFBRSxRQUFRLE9BQU8sS0FBTSxDQUFBLElBQUksQ0FBQyxnQkFBZ0Isd0JBQXdCLElBQUksRUFDN0UsU0FBUyxJQUFJLENBQUMsZ0JBQWdCLHFCQUFxQixFQUFFLFNBQVMsSUFBSSxDQUFDLGdCQUNuRSxxQkFBcUIsRUFBRSxNQUFLLEdBQUksSUFBSSxNQUFNLElBQUksQ0FBQyw2QkFBNkIsS0FDL0UsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QixJQUFJLElBQUksSUFBSSxLQUNWLElBQUk7WUFDTixLQUFLLElBQUksTUFBSyxFQUFHO2dCQUNmLElBQUksSUFBSSxHQUFFO2dCQUNWLElBQUksTUFBTSxFQUFFLFdBQVcsYUFBYSxNQUFNLEVBQUUsV0FBVyxZQUFZO29CQUNqRSxJQUFJLEtBQUksT0FBTztvQkFDZixJQUFJLEVBQUUsSUFBSSxLQUFJO29CQUNkLEVBQUUsSUFBSTtnQkFDUjtnQkFDQSxJQUFJLE1BQU0sRUFBRSxXQUFXLFlBQVk7b0JBQ2pDLElBQUksSUFBSSxNQUFNLFFBQVEsR0FBRSxXQUFXLEdBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRztvQkFDbEQsSUFBSSxZQUFZLE9BQU8sS0FBSyxHQUFHLFFBQVEsRUFBRSxRQUFRLEdBQUUsT0FBTyxFQUFFLEtBQUs7d0JBQy9ELE9BQU87d0JBQ1AsVUFBVSxHQUFFLFlBQVk7d0JBQ3hCLFNBQVMsR0FBRTt3QkFDWCxNQUFNLEdBQUU7b0JBQ1Y7b0JBQ0E7Z0JBQ0Y7Z0JBQ0EsSUFBSSxNQUFNLEVBQUUsV0FBVyxXQUFXLE1BQU0sUUFBUSxHQUFFLFdBQVc7b0JBQzNELEtBQUssSUFBSSxLQUFLLEdBQUUsU0FBVSxFQUFFLEtBQUs7d0JBQy9CLE9BQU8sRUFBRTt3QkFDVCxVQUFVLEVBQUUsWUFBWTt3QkFDeEIsU0FBUyxFQUFFO3dCQUNYLE1BQU0sRUFBRTtvQkFDVjtvQkFDQTtnQkFDRjtnQkFDQSxFQUFFLEtBQUs7b0JBQ0wsT0FBTyxHQUFFO29CQUNULFVBQVUsR0FBRSxZQUFZO29CQUN4QixTQUFTLEdBQUU7b0JBQ1gsTUFBTSxHQUFFO2dCQUNWO1lBQ0Y7WUFDQSxJQUFJLENBQUMsZ0JBQWdCLHdCQUF3QixJQUFJLEtBQU0sQ0FBQSxFQUFFLFNBQVMsSUFBSSxDQUFDLGdCQUNwRSxxQkFBcUIsRUFBRSxTQUFTLElBQUksQ0FBQyxnQkFBZ0IscUJBQXFCLEVBQUUsTUFBSztZQUNwRixJQUFJLElBQUksTUFBTSxJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDdkMsSUFBSSxZQUFZLE9BQU8sR0FBRyxPQUFPO1lBQ2hDLENBQUEsR0FBRyxFQUFFLHFDQUFvQyxFQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQUFBQyxDQUFBLEdBQUcsRUFDL0QsK0JBQThCLEVBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLEtBQUssWUFBWSxFQUN4RSxZQUFZO2dCQUNYLE1BQU0sRUFBRSxlQUFlO1lBQ3pCLElBQUk7Z0JBQ0YsY0FBYztZQUNoQixJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsaUJBQWdCLE1BQU8sSUFBSSxDQUFDLCtCQUErQixJQUFJLENBQzFFLHVCQUF1QixJQUFJLENBQUMsZ0JBQWdCLHFCQUFxQjtZQUNwRSxJQUFJLElBQUksRUFBRSxPQUFPLENBQUMsSUFBRyxJQUFPLENBQUEsRUFBRSxTQUFTLEVBQUUsV0FBVyxhQUFhLEVBQUUsU0FBUyxFQUFFLFdBQ3pFLGNBQWUsQ0FBQSxFQUFFLFNBQVMsRUFBRSxXQUFXLFdBQVcsTUFBTSxRQUFRLEVBQUUsWUFBWSxHQUM1RSxRQUFRLEVBQUUsWUFBWSxHQUFFLEtBQUssRUFBQyxHQUFJLEVBQUEsR0FBSSxFQUFFLEdBQzdDLElBQUksRUFBRSxLQUFLLENBQUEsS0FBSyxBQUFDLENBQUEsR0FBRSxTQUFTLEVBQUUsV0FBVyxVQUFVLEdBQUUsU0FBUyxFQUFFLFdBQzdELGVBQWMsS0FBTSxhQUFhLEtBQUssR0FBRSxTQUMzQyxJQUFJLEVBQUUsT0FBTyxDQUFBLEtBQUssQ0FBQyxhQUFhLEtBQUssR0FBRSxTQUN2QyxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsMkJBQTBCLEVBQUcsSUFDdkMsSUFBSSxPQUFPLE1BQUssSUFBSSxDQUFDLFFBQVEsV0FBVyxJQUFJO1lBQzlDLElBQUksTUFBTSxJQUFJLENBQUMsZ0JBQWdCLElBQUksR0FBRztnQkFDcEMsSUFBSSxLQUFJLENBQUMsQ0FBQyxLQUFLLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxXQUFVLEVBQUcsR0FBRyxFQUFFO2dCQUM3QyxLQUFJLElBQUksQ0FBQyxnQkFBZ0IscUJBQXFCLGFBQWEsSUFBSSxDQUFDLGdCQUM3RCxxQkFBcUI7WUFDMUI7WUFDQSxJQUFJLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxvQkFBbUIsRUFBRyxHQUFHLElBQUksQ0FBQyxPQUFPLFNBQVMsSUFBSSxDQUFDO1lBQ2pFLEtBQUssSUFBSSxNQUFNLENBQUEsUUFBUSxLQUNuQixDQUFDLHdDQUF3QyxFQUFFLEtBQUssVUFBVTtnQkFBQyxjQUFhLEFBQUMsQ0FBQSxHQUFFLEVBQUUsOEJBQTZCLEVBQUc7Z0JBQUcsNEJBQTJCLEVBQUUsSUFBSSxDQUFDO2dCQUFRLDRCQUEyQixFQUFFO1lBQU0sR0FBRyxDQUFDLEdBQzlMLENBQUEsRUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJO1lBQzlCLE1BQU0sSUFBSSxDQUFDLFVBQVUsT0FBTyxRQUFRLEtBQ2xDLENBQUMsMkNBQTJDLEVBQUUsS0FBSyxVQUFVO2dCQUFDLEtBQUk7WUFBRyxHQUFHLENBQUMsR0FBRyxNQUFNLEFBQUMsQ0FBQSxHQUNuRixFQUFFLHVCQUFzQjtZQUMxQixJQUFJLElBQUksTUFBTSxJQUFJLENBQUMsaUNBQWlDLEdBQUc7WUFDdkQsSUFBSSxZQUFZLE9BQU8sR0FBRyxPQUFPO1lBQ2pDLElBQUk7WUFDSixJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sYUFBYSxFQUFFO1lBQ25DLElBQUksSUFBSSxDQUFDLDhCQUE4QixFQUFFLEVBQUUsRUFBRSxTQUFTLEdBQUc7Z0JBQ3ZELElBQUksS0FBSSxNQUFNLEVBQUUsR0FBRztvQkFDakIsdUJBQXVCLEVBQUU7b0JBQ3pCLG1CQUFtQixFQUFFO29CQUNyQixpQ0FBaUMsRUFBRTtvQkFDbkMsaUJBQWlCLENBQUEsS0FBSyxJQUFJLENBQUMsZ0JBQWdCO29CQUMzQyxpQkFBaUIsSUFBSSxDQUFDO29CQUN0Qix1QkFBdUIsQ0FBQyxJQUFHLElBQU0sSUFBSSxDQUFDLGtDQUFrQyxJQUFHLEdBQ3pFO29CQUNGLHVCQUF1QixFQUFFO29CQUN6QixrQkFBa0I7b0JBQ2xCLHNCQUFzQixDQUFBLEtBQUssSUFBSSxDQUFDLGdCQUFnQixxQkFBcUI7b0JBQ3JFLHNCQUFzQixDQUFBLEtBQUssSUFBSSxDQUFDLGdCQUFnQixxQkFBcUI7b0JBQ3JFLHdCQUF3QixJQUFJLENBQUMsZ0JBQWdCO2dCQUMvQztnQkFDQSxJQUFJLENBQUMsOEJBQThCLEdBQUU7WUFDdkM7WUFDQSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sa0JBQWtCLEVBQUU7WUFDeEMsSUFBSSxFQUFFLFNBQVMsR0FBRztnQkFDaEIsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLHNCQUFxQixFQUFHLEVBQUUsU0FBUyxBQUFDLENBQUEsR0FBRyxFQUFFLGdDQUErQjtnQkFFcEYsSUFBSSxLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsa0JBQWlCO2dCQUM5QixDQUFBLEdBQUcsRUFBRSwwQkFBeUIsRUFBRyxjQUFjO2dCQUNoRCxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsUUFBUSxHQUFFO2dCQUM3QixNQUFNLElBQUksQ0FBQyxnQkFBZ0IsR0FBRSxNQUFNLEdBQUc7Z0JBQ3RDLElBQUksS0FBSSxDQUFDLEdBQ1AsSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLDJCQUEwQixFQUFHLGNBQWM7b0JBQ25ELHdCQUF3QixJQUFJLENBQUMsZ0JBQWdCO2dCQUMvQztnQkFDRixFQUFFLFNBQVM7Z0JBQ1gsSUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSztvQkFDMUIsSUFBSSxJQUFJLEVBQUMsQ0FBQyxFQUFFO29CQUNaLElBQUksQ0FBQyxHQUFHO29CQUNSLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxFQUNWLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDcEIsSUFBSSxFQUFFLFVBQVUsR0FBRztvQkFDckIsSUFBSSxFQUFFLFFBQVEsSUFBSSxDQUFDLFVBQVUsSUFBSTt3QkFDN0IsSUFBSTt3QkFDSixJQUFJLElBQUk7d0JBQ1IsSUFBSTs0QkFDRixLQUFLLElBQUksTUFBSyxFQUFHO2dDQUNmLElBQUksSUFBSSxJQUFJLENBQUMsa0NBQWtDLElBQUcsR0FBRztnQ0FDckQsS0FBSSxJQUFHLElBQUk7Z0NBQ1gsSUFBSSxJQUFJLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFFLEtBQUssR0FBRyxJQUFHLEdBQUcsQ0FBQyxJQUNsRCxJQUFJLEVBQUUsR0FBRSxPQUFPO2dDQUNqQixFQUFFLFVBQVUsR0FBRyxJQUFJLEVBQUUsWUFBWSxHQUFHLEdBQUUsT0FBTyxHQUFHLENBQUMsTUFBTSxLQUFLLElBQUksV0FDOUQsV0FBVyxFQUFFOzRCQUNqQjt3QkFDRixFQUFFLE9BQU8sR0FBRzs0QkFDVixJQUFJLGFBQWEsRUFBRSxjQUFjO2dDQUMvQixLQUFJLENBQUMsR0FBRyxNQUFNLENBQUEsRUFBRSxZQUFZLEdBQUcsR0FBRSxPQUFPLEVBQUUsR0FBRSxPQUFPLElBQUksWUFBWSxFQUNsRSxNQUFLO2dDQUNOOzRCQUNGOzRCQUNBLE1BQU07d0JBQ1I7b0JBQ0YsSUFBSSxNQUFNLElBQUksQ0FBQyxVQUFVLE9BQU8sSUFBRztnQkFDdkM7Z0JBQUUsQ0FBQSxHQUFHLEVBQUUsZ0NBQStCLEtBQU0sS0FBSSxJQUFJLENBQUMsZ0JBQ2xELHFCQUFxQixLQUFLLElBQUksQ0FBQyxnQkFBZ0IscUJBQXFCO1lBQ3pFO1lBQ0EsTUFBTSxJQUFJLENBQUMsVUFBVSxPQUFPLE1BQU0sSUFBSSxDQUFDLHlCQUF5QjtRQUNsRSxFQUFFLE9BQU8sSUFBRztZQUNWLElBQUksY0FBYSxFQUFFLGdCQUFnQixNQUFNO1FBQzNDLFNBQVU7WUFDUixJQUFJLEdBQUcsT0FBTyxJQUFJLENBQUMsZ0JBQWdCO1lBQ25DLE1BQU0sSUFBSSxDQUFDO1FBQ2I7UUFDQSxPQUFPLElBQUksQ0FBQyxnQkFBZ0I7SUFDOUI7SUFDQSxNQUFNLFdBQVcsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUN2QixJQUFJLElBQUksQ0FBQywwQkFBMEI7WUFDL0IsV0FBVztRQUNiLEdBQUcsQUFBQyxDQUFBLEdBQUcsRUFBRSw0QkFBMkIsRUFBRyxVQUFVO1lBQy9DLElBQUk7Z0JBQ0QsQ0FBQSxHQUFHLEVBQUUsMEJBQXlCLEVBQUcsT0FBTyxnQkFBZ0IsT0FBTyxTQUFTLE1BQU07b0JBQzdFLFdBQVc7b0JBQ1gscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzVCLFlBQVksSUFBSSxDQUFDO2dCQUNuQjtZQUNGLEVBQUUsT0FBTTtnQkFDTixRQUFRLEtBQUs7WUFDZjtRQUNGLElBQUksT0FBTyxJQUFJLENBQUMsZ0JBQWdCO1FBQ2xDLElBQUk7WUFDRCxDQUFBLEdBQUcsRUFBRSwyQkFBMEIsRUFBRyxPQUFPO1FBQzVDLEVBQUUsT0FBTSxDQUFDO1FBQ1QsT0FBTyxBQUFDLENBQUEsSUFBSSxDQUFDLG1CQUFtQixZQUFZLElBQUksQ0FBQyx5QkFBd0IsSUFBSyxJQUFJLENBQy9FLHFCQUFxQixNQUFLLElBQUksQ0FBQyxrQkFBa0I7SUFDdEQ7SUFDQSxvQkFBb0I7UUFDbEIsSUFBSSxLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsbUJBQWtCLEVBQ2hDO1FBQ0EsTUFBSyxHQUFFO0lBQ1Q7QUFDRiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtNWJkZmFkYWZjMjczNzY4Yi5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9pY2ltcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxpY2ltcy5qc1wiLFwiYnVuZGxlSWRcIjpcIjNlODAzOTc5ZGYyYjdhMTVcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiBqNzBoalxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvaWNpbXMuanNcbiAqIERlcGVuZGVuY2llczpcclxuICogICAuLi9hdXRvZmlsbC1hbnN3ZXItcGFpci10cmFja2luZyAtPiBhQ0VsWiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9hdXRvZmlsbC1hbnN3ZXItcGFpci10cmFja2luZy5qc1xyXG4gKiAgIC4uL2Jhc2UtZmlsbGVyIC0+IDh4ajZGICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyLmpzXHJcbiAqICAgLi4vZWR1Y2F0aW9uLWl0ZW0tdHJhY2UgLT4gajdVR0kgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvZWR1Y2F0aW9uLWl0ZW0tdHJhY2UuanNcclxuICogICAuL2Fuc3dlciAtPiA5SWM0YiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9pY2ltcy9hbnN3ZXIuanNcclxuICogICAuL2NsaWVudC1zZWFyY2gtd2lkZ2V0IC0+IGV4a1NhICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2ljaW1zL2NsaWVudC1zZWFyY2gtd2lkZ2V0LmpzXHJcbiAqICAgLi9jb250aW51ZS1hdXRvZmlsbCAtPiBlcWdBdCAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9pY2ltcy9jb250aW51ZS1hdXRvZmlsbC5qc1xyXG4gKiAgIC4vY3JlYXRlLWxvZ2luIC0+IDVCaGVXICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2ljaW1zL2NyZWF0ZS1sb2dpbi5qc1xyXG4gKiAgIC4vZWR1Y2F0aW9uLWNsaWVudC1zZWFyY2ggLT4gY292NHggID0+ICBzcmMvY29udGVudHMvc2l0ZXMvaWNpbXMvZWR1Y2F0aW9uLWNsaWVudC1zZWFyY2guanNcclxuICogICAuL2pvYi1kZXRhaWwtY29udGludWF0aW9uIC0+IGE1Rjg5ICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2ljaW1zL2pvYi1kZXRhaWwtY29udGludWF0aW9uLmpzXHJcbiAqICAgLi9qb2ItZGV0YWlsLWVudHJ5IC0+IDNMcGx6ICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2ljaW1zL2pvYi1kZXRhaWwtZW50cnkuanNcclxuICogICAuL29wZXJhdGlvbnMgLT4gbFlxblggID0+ICBzcmMvY29udGVudHMvc2l0ZXMvaWNpbXMvb3BlcmF0aW9ucy5qc1xyXG4gKiAgIC4vcnVsZXMgLT4gOUx2U0sgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvaWNpbXMvcnVsZXMuanNcclxuICogICAuL3N1Ym1pdC10cmFja2luZyAtPiA1a2VzVyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9pY2ltcy9zdWJtaXQtdHJhY2tpbmcuanNcclxuICogICAuL3V0aWxzIC0+IERRdG9qICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2ljaW1zL3V0aWxzLmpzXHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICBAcGxhc21vaHEvbWVzc2FnaW5nIC0+IDkyR3lCICA9PiAgQHBsYXNtb2hxL21lc3NhZ2luZy5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Fuc3dlciAtPiA3VDVlVyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvbiAtPiBsdUpmcyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvbi5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL29ic2VydmVyIC0+IGVUelV4ICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXIuanNcclxuICogICB+Y29yZS9kb20gLT4gaExNSlggID0+ICBzcmMvY29yZS9kb20uanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUvdXRpbHMgLT4gYVREaDUgID0+ICBzcmMvY29yZS91dGlscy5qc1xyXG4gKiAgIH5jb3JlL3hwYXRoIC0+IGFnRTR1ICA9PiAgc3JjL2NvcmUveHBhdGguanNcclxuICogICB+ZW51bXMgLT4gZHJadnYgID0+ICBzcmMvZW51bXMuanNcclxuICogICB+c3RvcmUvYXV0b2ZpbGxJbmZvIC0+IDc5Vk5QICA9PiAgc3JjL3N0b3JlL2F1dG9maWxsSW5mby5qc1xyXG4gKiAgIH5zdG9yZS91cmwgLT4gYjUzTDMgID0+ICBzcmMvc3RvcmUvdXJsLmpzXHJcbiAqICAgfnV0aWxzL2RlbGF5IC0+IGFtNjE0ICA9PiAgc3JjL3V0aWxzL2RlbGF5LmpzXHJcbiAqICAgfnV0aWxzL3N0YXJSYXRpbmcgLT4gaW1XVlAgID0+ICBzcmMvdXRpbHMvc3RhclJhdGluZy5qc1xyXG4gKiAgIH51dGlscy9zdHJpbmcgLT4gaWpFRmkgID0+ICBzcmMvdXRpbHMvc3RyaW5nLmpzXHJcbiAqL1xyXG5cclxudmFyIG4gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxubi5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgbi5leHBvcnQociwgXCJmaWxsSWNpbXNFZHVjYXRpb25Sb3dzXCIsICgpID0+IEIpLCBuLmV4cG9ydChyLCBcIkljaW1zXCIsICgpID0+XHJcbiAgcSk7XHJcbnZhciBvID0gZShcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIiksXHJcbiAgaSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXJcIiksXHJcbiAgYSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb25cIiksXHJcbiAgbCA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9vYnNlcnZlclwiKSxcclxuICBzID0gZShcIn5jb3JlL2RvbVwiKSxcclxuICB1ID0gZShcIn5jb3JlL2VudW1zXCIpLFxyXG4gIGMgPSBlKFwifmNvcmUvdXRpbHNcIiksXHJcbiAgZCA9IGUoXCJ+Y29yZS94cGF0aFwiKSxcclxuICBmID0gZShcIn5lbnVtc1wiKSxcclxuICBwID0gZShcIn5zdG9yZS9hdXRvZmlsbEluZm9cIiksXHJcbiAgbSA9IGUoXCJ+c3RvcmUvdXJsXCIpLFxyXG4gIGggPSBlKFwifnV0aWxzL2RlbGF5XCIpLFxyXG4gIGcgPSBlKFwifnV0aWxzL3N0YXJSYXRpbmdcIiksXHJcbiAgYiA9IGUoXCJ+dXRpbHMvc3RyaW5nXCIpLFxyXG4gIHkgPSBlKFwiLi4vYXV0b2ZpbGwtYW5zd2VyLXBhaXItdHJhY2tpbmdcIiksXHJcbiAgdiA9IGUoXCIuLi9iYXNlLWZpbGxlclwiKSxcclxuICB3ID0gZShcIi4uL2VkdWNhdGlvbi1pdGVtLXRyYWNlXCIpLFxyXG4gIFMgPSBlKFwiLi9qb2ItZGV0YWlsLWVudHJ5XCIpLFxyXG4gIEUgPSBlKFwiLi9qb2ItZGV0YWlsLWNvbnRpbnVhdGlvblwiKSxcclxuICB4ID0gZShcIi4vY29udGludWUtYXV0b2ZpbGxcIiksXHJcbiAgQyA9IGUoXCIuL2VkdWNhdGlvbi1jbGllbnQtc2VhcmNoXCIpLFxyXG4gIEEgPSBlKFwiLi9hbnN3ZXJcIiksXHJcbiAgayA9IGUoXCIuL2NsaWVudC1zZWFyY2gtd2lkZ2V0XCIpLFxyXG4gIFQgPSBlKFwiLi9jcmVhdGUtbG9naW5cIiksXHJcbiAgRiA9IGUoXCIuL29wZXJhdGlvbnNcIiksXHJcbiAgSSA9IGUoXCIuL3J1bGVzXCIpLFxyXG4gIGogPSBlKFwiLi9zdWJtaXQtdHJhY2tpbmdcIiksXHJcbiAgRCA9IGUoXCIuL3V0aWxzXCIpO1xyXG5sZXQgUCA9IFwiam9icmlnaHQ6aWNpbXM6dXBsb2FkLXBlbmRpbmctYXV0b2ZpbGxcIixcclxuICBfID0gM2U0LFxyXG4gIEwgPSBcImpvYnJpZ2h0OmljaW1zOmNvbnRpbnVlLXJlcXVlc3RcIixcclxuICBSID0gLyg/OmFkZHJlc3N8Y2l0eXx6aXB8cG9zdGFsfGNvdW50cnl8c3RhdGV8cHJvdmluY2V8Y291bnR5KS9pO1xyXG5cclxuZnVuY3Rpb24gTygpIHtcclxuICBsZXQgZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZpZWxkc2V0LmlDSU1TX0NvbGxlY3Rpb25Hcm91cFwiKSkuZmlsdGVyKGUgPT5cclxuICAgICAgL15hZGRyZXNzZXM/XFxiL2kudGVzdChlLnF1ZXJ5U2VsZWN0b3IoXCJsZWdlbmRcIik/LnRleHRDb250ZW50Py5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkgPz9cclxuICAgICAgICBcIlwiKSksXHJcbiAgICB0ID0gZS5mbGF0TWFwKGUgPT4gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSkuZmlsdGVyKGUgPT4gZS5pZFxyXG4gICAgICAuaW5jbHVkZXMoXCJBZGRyZXNzXCIpICYmICEoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgXCJoaWRkZW5cIiA9PT0gZS50eXBlKSkpO1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2xsZWN0aW9uQ291bnQ6IGUubGVuZ3RoLFxyXG4gICAgcm93Q291bnQ6IGUucmVkdWNlKChlLCB0KSA9PiBlICsgdC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlDSU1TX1RhYmxlUm93XCIpLmxlbmd0aCwgMCksXHJcbiAgICBjb250cm9sQ291bnQ6IHQubGVuZ3RoLFxyXG4gICAgZW1wdHlDb250cm9sQ291bnQ6IHQuZmlsdGVyKGUgPT4gIWUudmFsdWUudHJpbSgpKS5sZW5ndGhcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE0oZSkge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhlPy5yZWd1bGFyID8/IHt9KS5maWx0ZXIoZSA9PiBSLnRlc3QoZSkpLmxlbmd0aFxyXG59XHJcbmxldCBOID0ge1xyXG4gIHJlcXVlc3RTdGVwOiBhc3luYyBlID0+IGF3YWl0ICgwLCBvLnNlbmRUb0JhY2tncm91bmQpKHtcclxuICAgIG5hbWU6IFwicmVzb2x2ZUF1dG9maWxsQ2xpZW50U2VhcmNoU3RlcFwiLFxyXG4gICAgYm9keTogZVxyXG4gIH0pLFxyXG4gIGNhcHR1cmVDYW5kaWRhdGVzOiBrLmNhcHR1cmVJY2ltc1Byb2ZpbGVPcHRpb25zQ2FuZGlkYXRlcyxcclxuICBjb21taXRDYW5kaWRhdGU6IGsuY29tbWl0RXhhY3RJY2ltc1Byb2ZpbGVPcHRpb25DYW5kaWRhdGUsXHJcbiAgY2xlYXJTZWxlY3Q6IGsuY2xlYXJJY2ltc1NlYXJjaFNlbGVjdEFuZFZlcmlmeSxcclxuICByZXNvbHZlU2Nob29sQ29tcGFuaW9uSW5wdXQ6IEYucmVzb2x2ZUljaW1zU2Nob29sQ29tcGFuaW9uSW5wdXQsXHJcbiAgZmlsbENvbXBhbmlvbklucHV0OiBGLmZpbGxJbnB1dFRleHRGaWVsZFxyXG59O1xyXG5cclxuZnVuY3Rpb24gJChlLCB0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCByID0gKDAsIGkuZmluZFZhbHVlSW5SZWNvcmQpKGUsIHQpO1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocikgPyByLmpvaW4oXCIsIFwiKSA6IHJcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBCKGUsIHQpIHtcclxuICBsZXQgciA9IFtdLFxyXG4gICAgbiA9IDAsXHJcbiAgICBvID0gMCxcclxuICAgIGwgPSBbXSxcclxuICAgIHUgPSAhMSxcclxuICAgIGMgPSAhMSxcclxuICAgIGQgPSAoMCwgaS5jcmVhdGVTZWN0aW9uUmVzdWx0UmVwb3J0ZXIpKFwiZWR1Y2F0aW9uXCIsIHtcclxuICAgICAgb25TZWN0aW9uUmVzdWx0Q2hhbmdlZDogdC5vblNlY3Rpb25SZXN1bHRDaGFuZ2VkXHJcbiAgICB9KTtcclxuICBkLnNldExhYmVsKFwiRWR1Y2F0aW9uXCIpLCAoMCwgYS51cGRhdGVDdXJyZW50RmllbGQpKFwiRWR1Y2F0aW9uXCIpO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCAoMCwgYS53aXRoU2tpcCkoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAoMCwgYS5jaGVja3BvaW50KSgpLCBhd2FpdCB0LnN5bmNFZHVjYXRpb25TZWN0aW9ucyhlLmxlbmd0aCksICgwLCBhLmNoZWNrcG9pbnQpKClcclxuICAgIH0pLCByID0gdC5nZXRFZHVjYXRpb25SdWxlcygpLCAoMCwgcy5zZXRTZWN0aW9uUmVzdWx0Rm9jdXNSdWxlcykoXCJlZHVjYXRpb25cIiwgciksIG4gPSB0XHJcbiAgICAgIC5nZXRWaXNpYmxlRWR1Y2F0aW9uU2VjdGlvbkNvdW50KCksIG8gPSBNYXRoLm1pbihlLmxlbmd0aCwgci5sZW5ndGgpLCBhd2FpdCAoMCwgYS53aXRoU2tpcCkoXHJcbiAgICAgICAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgKDAsIGEuY2hlY2twb2ludCkoKSwgYXdhaXQgdC5jbGVhclJ1bGVWYWx1ZXMoci5zbGljZSgwLCBvKSksICgwLCBhLmNoZWNrcG9pbnQpKClcclxuICAgICAgICB9KTtcclxuICAgIG46IGZvciAobGV0IG4gPSAwOyBuIDwgbzsgbiArPSAxKSB7XHJcbiAgICAgIGxldCBvID0gcltuXSxcclxuICAgICAgICBpID0gZVtuXTtcclxuICAgICAgaWYgKCFvIHx8ICFpKSBjb250aW51ZTtcclxuICAgICAgbGV0IHMgPSBkLmVuc3VyZVJvdyhuLCBpKTtcclxuICAgICAgZC5lbWl0KCk7XHJcbiAgICAgIGxldCBmID0gWy4uLm8uY2hpbGRyZW4gPz8gW11dLnNvcnQoKGUsIHQpID0+IHtcclxuICAgICAgICBsZXQgciA9IGUgPT4ge1xyXG4gICAgICAgICAgbGV0IHQgPSAoMCwgQy5jbGFzc2lmeUljaW1zRWR1Y2F0aW9uQ2xpZW50U2VhcmNoUnVsZSkoZSk7XHJcbiAgICAgICAgICByZXR1cm4gXCJzY2hvb2xcIiA9PT0gdCA/IDAgOiBcIm1ham9yXCIgPT09IHQgPyAxIDogMlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHIoZSkgLSByKHQpXHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IgKGxldCBlIG9mIGYpIHtcclxuICAgICAgICAoMCwgYS5jaGVja3BvaW50KSgpO1xyXG4gICAgICAgIGxldCByID0gKDAsIEMuY2xhc3NpZnlJY2ltc0VkdWNhdGlvbkNsaWVudFNlYXJjaFJ1bGUpKGUpO1xyXG4gICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICBsZXQgbyA9ICgwLCBDLmdldEljaW1zRWR1Y2F0aW9uT3JpZ2luYWxBbnN3ZXIpKHIsIGkpO1xyXG4gICAgICAgICAgaWYgKCFvKSB7XHJcbiAgICAgICAgICAgIGQudXBkYXRlRmllbGQocywgZS5sYWJlbCwgdm9pZCAwLCBcIm1pc3NlZFwiKSwgZC5lbWl0KCk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgdSA9IGF3YWl0ICgwLCBhLndpdGhTa2lwKSgoKSA9PiB0LmZpbGxDbGllbnRTZWFyY2hGaWVsZChlLCBpLCBuLCB0XHJcbiAgICAgICAgICAgICAgLmNsaWVudFNlYXJjaERlcHMpKTtcclxuICAgICAgICAgICAgbC5wdXNoKHUpLCBkLnVwZGF0ZVJvdyhzLCBpKSwgZC51cGRhdGVGaWVsZChzLCBlLmxhYmVsLCBvLCB1LnN1Y2Nlc3MgPyBcImZpbGxlZFwiIDpcclxuICAgICAgICAgICAgICBcIm1pc3NlZFwiKSwgZC5lbWl0KCksIHUuc3VjY2VzcyB8fCBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgXCJbQXV0b2ZpbGxDbGllbnRTZWFyY2hdIEVkdWNhdGlvbiBmaWVsZCBvdXRjb21lXCIsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHJvd0luZGV4OiBuLFxyXG4gICAgICAgICAgICAgICAgZmllbGRUeXBlOiByLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uczogdS5hY3Rpb25zLFxyXG4gICAgICAgICAgICAgICAgcm91bmRDYW5kaWRhdGVDb3VudHM6IHUucm91bmRzLm1hcChlID0+IGUuY2FuZGlkYXRlQ291bnQpLFxyXG4gICAgICAgICAgICAgICAgZmFpbHVyZVJlYXNvbjogdS5mYWlsdXJlUmVhc29uID8/IG51bGxcclxuICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgIH0gY2F0Y2ggKHQpIHtcclxuICAgICAgICAgICAgaWYgKHQgaW5zdGFuY2VvZiBhLkNhbmNlbGxlZEVycm9yKSB0aHJvdyB0O1xyXG4gICAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIGEuU2tpcHBlZEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgZC51cGRhdGVSb3cocywgaSksIGQudXBkYXRlRmllbGQocywgZS5sYWJlbCwgbywgXCJza2lwcGVkXCIpLCBkLmVtaXQoKSwgYyA9ICEwO1xyXG4gICAgICAgICAgICAgIGJyZWFrIG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsLnB1c2goe1xyXG4gICAgICAgICAgICAgIHJvd0luZGV4OiBuLFxyXG4gICAgICAgICAgICAgIGZpZWxkVHlwZTogcixcclxuICAgICAgICAgICAgICBhdHRlbXB0ZWQ6ICEwLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6ICExLFxyXG4gICAgICAgICAgICAgIGFjdGlvbnM6IFtdLFxyXG4gICAgICAgICAgICAgIHJvdW5kczogW10sXHJcbiAgICAgICAgICAgICAgZmFpbHVyZVJlYXNvbjogXCJvcmNoZXN0cmF0aW9uLWVycm9yXCJcclxuICAgICAgICAgICAgfSksIGQudXBkYXRlUm93KHMsIGkpLCBkLnVwZGF0ZUZpZWxkKHMsIGUubGFiZWwsIG8sIFwibWlzc2VkXCIpLCBkLmVtaXQoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGxldCByID0gYXdhaXQgKDAsIGEud2l0aFNraXApKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgciA9IGF3YWl0IHQudHJhbnNmb3JtUmVjb3JkQnlSdWxlKGUsIGkpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBpID0gciwgKDAsIGEuY2hlY2twb2ludCkoKSwgYXdhaXQgdC5vcGVyYXRpb25Db25maWdbZS50eXBlXT8uKGUsIHIsICExKVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbiA9ICQoZS5sYWJlbCwgaSk7XHJcbiAgICAgICAgICBkLnVwZGF0ZVJvdyhzLCBpKSwgZC51cGRhdGVGaWVsZChzLCBlLmxhYmVsLCBuLCAhMSAhPT0gciAmJiBuID8gXCJmaWxsZWRcIiA6IFwibWlzc2VkXCIpLFxyXG4gICAgICAgICAgICBkLmVtaXQoKSwgITEgPT09IHIgJiYgKHUgPSAhMClcclxuICAgICAgICB9IGNhdGNoICh0KSB7XHJcbiAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIGEuQ2FuY2VsbGVkRXJyb3IpIHRocm93IHQ7XHJcbiAgICAgICAgICBpZiAodCBpbnN0YW5jZW9mIGEuU2tpcHBlZEVycm9yKSB7XHJcbiAgICAgICAgICAgIGQudXBkYXRlUm93KHMsIGkpLCBkLnVwZGF0ZUZpZWxkKHMsIGUubGFiZWwsICQoZS5sYWJlbCwgaSksIFwic2tpcHBlZFwiKSwgZC5lbWl0KCksXHJcbiAgICAgICAgICAgICAgYyA9ICEwO1xyXG4gICAgICAgICAgICBicmVhayBuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1ID0gITAsIGQudXBkYXRlUm93KHMsIGkpLCBkLnVwZGF0ZUZpZWxkKHMsIGUubGFiZWwsICQoZS5sYWJlbCwgaSksIFwibWlzc2VkXCIpLCBkXHJcbiAgICAgICAgICAuZW1pdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBhLkNhbmNlbGxlZEVycm9yKSB0aHJvdyBlO1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBhLlNraXBwZWRFcnJvcikgYyA9ICEwO1xyXG4gICAgZWxzZSB0aHJvdyBlXHJcbiAgfSBmaW5hbGx5IHtcclxuICAgICgwLCBhLnVwZGF0ZUN1cnJlbnRGaWVsZCkobnVsbClcclxuICB9XHJcbiAgbGV0IGYgPSBuID49IGUubGVuZ3RoICYmIHIubGVuZ3RoID49IGUubGVuZ3RoICYmICFjICYmICF1ICYmIGwuZXZlcnkoZSA9PiBlLnN1Y2Nlc3MpO1xyXG4gIHJldHVybiBmID8gdC51cGRhdGVGaWxsZWRQcm9ncmVzcyhcIkVkdWNhdGlvblwiKSA6IHQudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFZHVjYXRpb25cIiksIHtcclxuICAgIGZpbGxlZDogZixcclxuICAgIHNraXBwZWQ6IGMsXHJcbiAgICBsZWRnZXI6IGxcclxuICB9XHJcbn1cclxuY2xhc3MgcSBleHRlbmRzIHYuQmFzZUZpbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpLCB0aGlzLmhhc0NvbWJvUXVlc3Rpb25zID0gITAsIHRoaXMuY29tYm9RdWVzdGlvblNldHRsZURlbGF5TXMgPSA1MDAsIHRoaXNcclxuICAgICAgLmxhc3RGdWxsQXV0b2ZpbGxTbmFwc2hvdCA9IHt9LCB0aGlzLmxhc3RGdWxsU3VibWl0U25hcHNob3QgPSB7fSwgdGhpc1xyXG4gICAgICAuZWR1Y2F0aW9uQ2xpZW50U2VhcmNoTGVkZ2VyID0gW10sIHRoaXMuZWR1Y2F0aW9uVHJhY2VSdW5JZCA9IG51bGwsIHRoaXNcclxuICAgICAgLmNvbnRpbnVlQXV0b2ZpbGxDb250ZXh0ID0gbnVsbCwgdGhpcy5uYXZpZ2F0aW9uVHJhY2tpbmcgPSBuZXcgalxyXG4gICAgICAuSWNpbXNOYXZpZ2F0aW9uVHJhY2tpbmdDb250cm9sbGVyO1xyXG4gICAgbGV0IGUgPSB0aGlzLmNhbmNlbDtcclxuICAgIHRoaXMuY2FuY2VsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29udGludWVBdXRvZmlsbENvbnRleHQgPSBudWxsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAoMCwgRS5jbGVhckljaW1zSm9iRGV0YWlsQXV0b2ZpbGwpKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSlcclxuICAgICAgICB9IGNhdGNoIHt9XHJcbiAgICAgICAgYXdhaXQgZSgpXHJcbiAgICAgIH0sICgwLCB4LmJpbmRJY2ltc0NvbnRpbnVlQXV0b2ZpbGwpKGRvY3VtZW50LCAoKSA9PiBudWxsICE9PSB0aGlzXHJcbiAgICAgICAgLmNvbnRpbnVlQXV0b2ZpbGxDb250ZXh0LCAoKSA9PiB7XHJcbiAgICAgICAgICBsZXQgZSA9ICgwLCB4LmdldEljaW1zQ29udGludWF0aW9uU2lnbmF0dXJlKShkb2N1bWVudCk7XHJcbiAgICAgICAgICBpZiAobnVsbCAhPT0gZSAmJiB0aGlzLmNvbnRpbnVlQXV0b2ZpbGxDb250ZXh0KSB0cnkge1xyXG4gICAgICAgICAgICAoMCwgRS5zYXZlSWNpbXNKb2JEZXRhaWxBdXRvZmlsbCkod2luZG93LnNlc3Npb25TdG9yYWdlLCB3aW5kb3cubG9jYXRpb24uaHJlZiwge1xyXG4gICAgICAgICAgICAgIC4uLnRoaXMuY29udGludWVBdXRvZmlsbENvbnRleHQsXHJcbiAgICAgICAgICAgICAgZGlzYWJsZVVwbG9hZFJlc3VtZTogISF0aGlzLmRpc2FibGVVcGxvYWRSZXN1bWUsXHJcbiAgICAgICAgICAgICAgcmVzdW1lSW5mbzogdGhpcy5yZXN1bWVJbmZvXHJcbiAgICAgICAgICAgIH0sIERhdGUubm93KCksIGUpXHJcbiAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdbSWNpbXNKb2JEZXRhaWxDb250aW51YXRpb25dIHtcInJlYXNvblwiOlwic3RvcmFnZS11bmF2YWlsYWJsZVwifScpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksIHRoaXMucmVzdW1lQXV0b2ZpbGxBZnRlckpvYkRldGFpbCgpLCB0aGlzLnJlc3VtZUF1dG9maWxsQWZ0ZXJVcGxvYWRSZWZyZXNoKCksXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBlID0+IHtcclxuICAgICAgICBlLmRhdGE/LnR5cGUgPT09IEwgJiYgdGhpcy5jb250aW51ZUFwcGxpY2F0aW9uKCEhZS5kYXRhPy5kYXRhPy5mcm9tQWdlbnQpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIGFzeW5jIHJlc3VtZUF1dG9maWxsQWZ0ZXJKb2JEZXRhaWwoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCAoMCwgRS5yZXN1bWVJY2ltc0pvYkRldGFpbEF1dG9maWxsKSh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxyXG4gICAgICAoKSA9PiAoMCwgbC53YWl0Rm9yQ29uZGl0aW9uKSgoKSA9PiBudWxsICE9PSAoMCwgSS5kZXRlY3RJY2ltc1BhZ2VUeXBlKSgpLCB7XHJcbiAgICAgICAgICB0aW1lb3V0OiAxNWUzLFxyXG4gICAgICAgICAgaW50ZXJ2YWw6IDIwMFxyXG4gICAgICAgIH0pLCBhc3luYyBlID0+IHtcclxuICAgICAgICAgIHRoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZSA9IGUuZGlzYWJsZVVwbG9hZFJlc3VtZSwgZS5yZXN1bWVJbmZvICYmICh0aGlzLnJlc3VtZUluZm8gPVxyXG4gICAgICAgICAgICBlLnJlc3VtZUluZm8pLCBhd2FpdCB0aGlzLmZpbGxGb3JtKGUuZnJvbUFnZW50KVxyXG4gICAgICAgIH0sICgpID0+ICgwLCB4LmdldEljaW1zQ29udGludWF0aW9uU2lnbmF0dXJlKShkb2N1bWVudCksIGUgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jb250aW51ZUF1dG9maWxsQ29udGV4dCA9IHtcclxuICAgICAgICAgICAgZnJvbUFnZW50OiBlLmZyb21BZ2VudFxyXG4gICAgICAgICAgfSwgdGhpcy5kaXNhYmxlVXBsb2FkUmVzdW1lID0gZS5kaXNhYmxlVXBsb2FkUmVzdW1lLCBlLnJlc3VtZUluZm8gJiYgKHRoaXNcclxuICAgICAgICAgICAgLnJlc3VtZUluZm8gPSBlLnJlc3VtZUluZm8pXHJcbiAgICAgICAgfSwgKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgIFwiZGF0YS1qb2JyaWdodC1pY2ltcy1jb250aW51YXRpb24tY2xhaW1lZFwiLCBcInBlbmRpbmdcIikpXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgY29uc29sZS5pbmZvKCdbSWNpbXNKb2JEZXRhaWxDb250aW51YXRpb25dIHtcInJlYXNvblwiOlwic3RvcmFnZS11bmF2YWlsYWJsZVwifScpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEZpZWxkSGFuZGxlcnMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbdS5GSUVMRF9UWVBFLlRFWFRdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogYXN5bmMgKGUsIHQpID0+IHtcclxuICAgICAgICAgIGxldCByID0gQXJyYXkuaXNBcnJheSh0KSA/IHRbMF0gOiB0O1xyXG4gICAgICAgICAgbnVsbCAhPSByICYmIFwiXCIgIT09IHIgJiYgYXdhaXQgKDAsIEYuZmlsbElucHV0VGV4dEZpZWxkKShlLiRpbnB1dCwgU3RyaW5nKHIgPz8gXCJcIikpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt1LkZJRUxEX1RZUEUuU0VMRUNUXToge1xyXG4gICAgICAgIGhhbmRsZXI6IChlLCB0KSA9PiAoMCwgRi5maWxsU2VhcmNoU2VsZWN0RmllbGQpKGUuJGlucHV0LCB0LCBlLmxhYmVsKSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt1LkZJRUxEX1RZUEUuU0VMRUNUX09SSUdJTkFMXToge1xyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jIChlLCB0KSA9PiB7XHJcbiAgICAgICAgICBsZXQgciA9IEFycmF5LmlzQXJyYXkodCkgPyB0WzBdIDogdDtcclxuICAgICAgICAgIHJldHVybiBudWxsICE9IHIgJiYgXCJcIiAhPT0gciAmJiAoMCwgRi5maWxsT3JpZ2luU2VsZWN0RmllbGQpKGUuJGlucHV0LCBTdHJpbmcocikpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt1LkZJRUxEX1RZUEUuQ0hFQ0tCT1hdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBGLmZpbGxDaGVja2JveEZpZWxkKShlLCB0KSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFt1LkZJRUxEX1RZUEUuREFURV06IHtcclxuICAgICAgICBoYW5kbGVyOiBhc3luYyAoZSwgdCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHIgPSBBcnJheS5pc0FycmF5KHQpID8gdFswXSA6IHQ7XHJcbiAgICAgICAgICBudWxsICE9IHIgJiYgXCJcIiAhPT0gciAmJiBhd2FpdCAoMCwgRi5maWxsRGF0ZUZpZWxkKShlLiRpbnB1dCwgU3RyaW5nKHIpKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgZXhwZWN0QXJyYXk6ICExXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBbdS5GSUVMRF9UWVBFLlJBRElPR1JPVVBdOiB7XHJcbiAgICAgICAgaGFuZGxlcjogKGUsIHQpID0+ICgwLCBGLmZpbGxSYWRpb0dyb3VwRmllbGQpKGUsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBnZXRTaXRlTmFtZSgpIHtcclxuICAgIHJldHVybiBcImljaW1zXCJcclxuICB9XHJcbiAgYXN5bmMgZXh0cmFjdEZvcm1SdWxlcygpIHtcclxuICAgIGxldCBlID0gKDAsIEEuZm9ybWF0UnVsZXNGb3JSZXF1ZXN0KSgoMCwgSS5leHRyYWN0UnVsZXMpKCkpO1xyXG4gICAgcmV0dXJuIGNvbnNvbGUuaW5mbyhcclxuICAgICAgYFtJY2ltc0FkZHJlc3NEZWJ1Z10gcnVsZXMgZXh0cmFjdGVkICR7SlNPTi5zdHJpbmdpZnkoe2RvbTpPKCkscnVsZXM6KDAsRC5nZXRJY2ltc0FkZHJlc3NSdWxlRGlhZ25vc3RpY3MpKGUpfSl9YFxyXG4gICAgICApLCBlXHJcbiAgfVxyXG4gIGdldE5ld0NvbWJvUXVlc3Rpb25SdWxlcyhlLCB0KSB7XHJcbiAgICByZXR1cm4gKDAsIEkuZ2V0SWNpbXNDb21ib1F1ZXN0aW9uUnVsZXMpKGUsIHQpXHJcbiAgfVxyXG4gIGFzeW5jIGZldGNoRm9ybUFuc3dlcnMoZSwgdCkge1xyXG4gICAgbGV0IHIgPSAoMCwgQS5leHBhbmRJY2ltc1Bob25lU2VjdGlvblJ1bGVzRm9yUmVxdWVzdCkoZSk7XHJcbiAgICBjb25zb2xlLmluZm8oXHJcbiAgICAgIGBbSWNpbXNBZGRyZXNzRGVidWddIHJ1bGVzIHJlcXVlc3RlZCAke0pTT04uc3RyaW5naWZ5KHtydWxlczooMCxELmdldEljaW1zQWRkcmVzc1J1bGVEaWFnbm9zdGljcykocil9KX1gXHJcbiAgICAgICk7XHJcbiAgICBsZXQgbiA9IGF3YWl0IHRoaXMucmVxdWVzdEZvcm1BbnN3ZXJzKHIsIHQpO1xyXG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIG4pIHJldHVybiBjb25zb2xlLmluZm8oXHJcbiAgICAgICdbSWNpbXNBZGRyZXNzRGVidWddIGFuc3dlciB1bmF2YWlsYWJsZSB7XCJzdGF0dXNcIjpcInJlcXVlc3QtZXJyb3JcIn0nKSwgbjtcclxuICAgIG4gPyAodGhpcy5hbnN3ZXIgPSBuLCBjb25zb2xlLmluZm8oXHJcbiAgICAgIGBbSWNpbXNBZGRyZXNzRGVidWddIGFuc3dlciByZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHthZGRyZXNzTGlrZVJlZ3VsYXJLZXlDb3VudDpNKG4pfSl9YFxyXG4gICAgICApKSA6IGNvbnNvbGUuaW5mbygnW0ljaW1zQWRkcmVzc0RlYnVnXSBhbnN3ZXIgdW5hdmFpbGFibGUge1wic3RhdHVzXCI6XCJlbXB0eS1yZXNwb25zZVwifScpXHJcbiAgfVxyXG4gIGZvcm1hdEFuc3dlcihlKSB7XHJcbiAgICByZXR1cm4gKDAsIEEuZm9ybWF0QW5zd2VyKShlKVxyXG4gIH1cclxuICBzcGxpdFNuYXBzaG90KGUpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIGVkdWNhdGlvbjogdCA9IFtdLFxyXG4gICAgICBlbXBsb3ltZW50OiByID0gW10sXHJcbiAgICAgIC4uLm5cclxuICAgIH0gPSBlIHx8IHt9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm9ybWFsOiBuLFxyXG4gICAgICBlZHVjYXRpb246IEFycmF5LmlzQXJyYXkodCkgPyB0IDogW10sXHJcbiAgICAgIGVtcGxveW1lbnQ6IEFycmF5LmlzQXJyYXkocikgPyByIDogW11cclxuICAgIH1cclxuICB9XHJcbiAgZXh0cmFjdEVkdWNhdGlvbkVtcGxveW1lbnRBZGRpdGlvbmFsKGUpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIGVkdWNhdGlvbjogdCxcclxuICAgICAgZW1wbG95bWVudDogclxyXG4gICAgfSA9IHRoaXMuc3BsaXRTbmFwc2hvdChlKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVkdWNhdGlvbjogdCxcclxuICAgICAgZW1wbG95bWVudDogclxyXG4gICAgfVxyXG4gIH1cclxuICBmaWx0ZXJTZWN0aW9uUmVjb3JkRm9yRW5kRGF0ZVJ1bGUoZSwgdCwgcikge1xyXG4gICAgcmV0dXJuICgwLCBELmZpbHRlckljaW1zT3B0aW9uYWxFbmREYXRlUmVjb3JkKShlLCB0LCB7XHJcbiAgICAgIGxlZ2FjeU1hdGNoTGFiZWxzOiBBLklDSU1TX0xFR0FDWV9FTkRfREFURV9NQVRDSF9MQUJFTFMsXHJcbiAgICAgIHJlY29yZEtleXM6IFwiZWR1Y2F0aW9uXCIgPT09IHIgPyBBLklDSU1TX0VEVUNBVElPTl9FTkRfREFURV9SRUNPUkRfS0VZUyA6IEFcclxuICAgICAgICAuSUNJTVNfRU1QTE9ZTUVOVF9FTkRfREFURV9SRUNPUkRfS0VZU1xyXG4gICAgfSlcclxuICB9XHJcbiAgYXN5bmMgZ2V0QXV0b2ZpbGxTbmFwc2hvdChlKSB7XHJcbiAgICBsZXQgdCA9ICgwLCBJLmdldEZvcm1TbmFwc2hvdCkodm9pZCAwLCB7XHJcbiAgICAgIG1hcmtFZHVjYXRpb25Sb3dzOiAhMCxcclxuICAgICAgaW5jbHVkZUVkdWNhdGlvblNuYXBzaG90SW5kZXg6ICEwLFxyXG4gICAgICBpbmNsdWRlRWR1Y2F0aW9uVHJhY2U6ICEwLFxyXG4gICAgICBlZHVjYXRpb25UcmFjZVJ1bklkOiB0aGlzLmVuc3VyZUVkdWNhdGlvblRyYWNlUnVuSWQoKVxyXG4gICAgfSkgfHwge307XHJcbiAgICByZXR1cm4gdGhpcy5sYXN0RnVsbEF1dG9maWxsU25hcHNob3QgPSB0LCB0aGlzLnNwbGl0U25hcHNob3QodCkubm9ybWFsXHJcbiAgfVxyXG4gIGFzeW5jIGdldFN1Ym1pdFNuYXBzaG90KCkge1xyXG4gICAgbGV0IGUgPSAoMCwgSS5nZXRGb3JtU25hcHNob3QpKHZvaWQgMCwge1xyXG4gICAgICBpbmNsdWRlRWR1Y2F0aW9uU25hcHNob3RJbmRleDogITAsXHJcbiAgICAgIGluY2x1ZGVFZHVjYXRpb25UcmFjZTogITAsXHJcbiAgICAgIGVkdWNhdGlvblRyYWNlUnVuSWQ6IHRoaXMuZW5zdXJlRWR1Y2F0aW9uVHJhY2VSdW5JZCgpXHJcbiAgICB9KSB8fCB7fTtcclxuICAgIHJldHVybiB0aGlzLmxhc3RGdWxsU3VibWl0U25hcHNob3QgPSBlLCB0aGlzLnNwbGl0U25hcHNob3QoZSkubm9ybWFsXHJcbiAgfVxyXG4gIGdldEFkZGl0aW9uYWxBdXRvZmlsbFNuYXBzaG90RGF0YShlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5leHRyYWN0RWR1Y2F0aW9uRW1wbG95bWVudEFkZGl0aW9uYWwodGhpcy5sYXN0RnVsbEF1dG9maWxsU25hcHNob3QpXHJcbiAgfVxyXG4gIGdldEFkZGl0aW9uYWxTdWJtaXRTbmFwc2hvdERhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5leHRyYWN0RWR1Y2F0aW9uRW1wbG95bWVudEFkZGl0aW9uYWwodGhpcy5sYXN0RnVsbFN1Ym1pdFNuYXBzaG90KVxyXG4gIH1cclxuICBnZXRTdWJtaXRCdXR0b25TZWxlY3RvcigpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGVuc3VyZUVkdWNhdGlvblRyYWNlUnVuSWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lZHVjYXRpb25UcmFjZVJ1bklkIHx8ICh0aGlzLmVkdWNhdGlvblRyYWNlUnVuSWQgPSAoMCwgd1xyXG4gICAgICAuY3JlYXRlRWR1Y2F0aW9uVHJhY2VSdW5JZCkoKSksIHRoaXMuZWR1Y2F0aW9uVHJhY2VSdW5JZFxyXG4gIH1cclxuICBnZXROYXZpZ2F0aW9uQnV0dG9uRnJvbUV2ZW50VGFyZ2V0KGUpIHtcclxuICAgIGlmICghKGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybiBudWxsO1xyXG4gICAgbGV0IHQgPSBlLmNsb3Nlc3QoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0sIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdJyk7XHJcbiAgICByZXR1cm4gdCAmJiAoMCwgRC5pc1Zpc2libGVJY2ltc0VsZW1lbnQpKHQpID8gdCA6IG51bGxcclxuICB9XHJcbiAgaXNUcmFja2VkTmF2aWdhdGlvbkJ1dHRvbihlKSB7XHJcbiAgICBsZXQgdCA9IHRoaXMuZ2V0TmF2aWdhdGlvbkJ1dHRvblRleHQoZSk7XHJcbiAgICByZXR1cm4gKCEoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHx8IFwiaWNpbXNfc2F2ZVwiICE9PSBlLm5hbWUpICYmIFwiZmluaXNoIGxhdGVyXCIgIT09XHJcbiAgICAgIHQgJiYgXCJzYXZlICYgcmV0dXJuIGxhdGVyXCIgIT09IHQgJiYgXCJzYXZlIGFuZCByZXR1cm4gbGF0ZXJcIiAhPT0gdCAmJiAoISEoXCJzdWJtaXRcIiA9PT0gdCB8fFxyXG4gICAgICAgICAgXCJzdWJtaXQgcHJvZmlsZVwiID09PSB0IHx8IFwiYXBwbHlcIiA9PT0gdCB8fCB0LmluY2x1ZGVzKFwic3VibWl0XCIpKSB8fCB0aGlzXHJcbiAgICAgICAgLmlzQ29udGludWVOYXZpZ2F0aW9uQnV0dG9uKGUpKVxyXG4gIH1cclxuICBhc3luYyBiaW5kU3VibWl0QnV0dG9uVHJhY2tpbmcoZSkge1xyXG4gICAgbGV0IHQgPSBhd2FpdCB0aGlzLmdldEF1dG9maWxsU25hcHNob3QoZSksXHJcbiAgICAgIHIgPSB0aGlzLmdldEFkZGl0aW9uYWxBdXRvZmlsbFNuYXBzaG90RGF0YT8uKGUpIHx8IHt9O1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uVHJhY2tpbmcuYmluZCh7XHJcbiAgICAgIHJvb3Q6IGRvY3VtZW50LFxyXG4gICAgICByZXNvbHZlQnV0dG9uOiBlID0+IHRoaXMuZ2V0TmF2aWdhdGlvbkJ1dHRvbkZyb21FdmVudFRhcmdldChlKSxcclxuICAgICAgaXNUcmFja2VkQnV0dG9uOiBlID0+IHRoaXMuaXNUcmFja2VkTmF2aWdhdGlvbkJ1dHRvbihlKSxcclxuICAgICAgZm9ybVVybDogKCkgPT4gKDAsIG0udXNlVXJsU3RvcmUpLmdldFN0YXRlKCkuY3VycmVudFRhYlVybCxcclxuICAgICAgc291cmNlOiAoKSA9PiB0aGlzLmdldFNpdGVOYW1lKCksXHJcbiAgICAgIGFuc3dlcjogKCkgPT4gdGhpcy5hbnN3ZXIsXHJcbiAgICAgIGF1dG9maWxsU25hcHNob3Q6IHQsXHJcbiAgICAgIGFkZGl0aW9uYWxBdXRvZmlsbERhdGE6IHIsXHJcbiAgICAgIGdldFN1Ym1pdFNuYXBzaG90OiAoKSA9PiB0aGlzLmdldFN1Ym1pdFNuYXBzaG90KCksXHJcbiAgICAgIGdldEFkZGl0aW9uYWxTdWJtaXREYXRhOiAoKSA9PiB0aGlzLmdldEFkZGl0aW9uYWxTdWJtaXRTbmFwc2hvdERhdGE/LigpIHx8IHt9LFxyXG4gICAgICBlZHVjYXRpb25PdXRjb21lczogKCkgPT4gdGhpcy5lZHVjYXRpb25DbGllbnRTZWFyY2hMZWRnZXIsXHJcbiAgICAgIHNlbmQ6IHkuc2VuZEF1dG9maWxsQW5zd2VyUGFpckV2ZW50LFxyXG4gICAgICBhZnRlclNlbmQ6IGFzeW5jICh7XHJcbiAgICAgICAgc3VibWl0U25hcHNob3Q6IGVcclxuICAgICAgfSkgPT4ge1xyXG4gICAgICAgIGF3YWl0ICgwLCBnLmhhbmRsZVN1Ym1pdFN0YXJSYXRpbmcpKHRoaXMuZ2V0U2l0ZU5hbWUoKSwgdCwgZSwgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAgIC5maWVsZFN0YXR1cylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgYXN5bmMgY29udGludWVBcHBsaWNhdGlvbihlID0gITEpIHtcclxuICAgIGxldCB0ID0gdGhpcy5nZXRBY3RpdmVDb250aW51ZUJ1dHRvbigpO1xyXG4gICAgaWYgKHQpIHJldHVybiB0LmNsaWNrKCksICEwO1xyXG4gICAgbGV0IHIgPSB0aGlzLmZvcndhcmRDb250aW51ZVRvQ2hpbGRJZnJhbWUoZSk7XHJcbiAgICByZXR1cm4gclxyXG4gIH1cclxuICBpc1JlYWR5Rm9yU2Vjb25kUGhhc2UoKSB7XHJcbiAgICByZXR1cm4gKDAsIEYuaGFzVXBsb2FkZWRSZXN1bWVRdWVyeUZsYWcpKCkgJiYgKDAsIEYuaGFzVXBsb2FkZWRSZXN1bWUpKClcclxuICB9XHJcbiAgcmVhZFBlbmRpbmdVcGxvYWRBdXRvZmlsbCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBlID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oUCk7XHJcbiAgICAgIGlmICghZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgIGxldCB0ID0gSlNPTi5wYXJzZShlKTtcclxuICAgICAgaWYgKCF0IHx8IERhdGUubm93KCkgLSBOdW1iZXIodC5zdGFydGVkQXQpID4gXykgcmV0dXJuIHRoaXMuY2xlYXJQZW5kaW5nVXBsb2FkQXV0b2ZpbGwoKSxcclxuICAgICAgICBudWxsO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGZyb21BZ2VudDogISF0LmZyb21BZ2VudCxcclxuICAgICAgICBkaXNhYmxlVXBsb2FkUmVzdW1lOiAhIXQuZGlzYWJsZVVwbG9hZFJlc3VtZSxcclxuICAgICAgICBzb3VyY2VVcmw6IFwic3RyaW5nXCIgPT0gdHlwZW9mIHQuc291cmNlVXJsICYmIHQuc291cmNlVXJsID8gdC5zb3VyY2VVcmwgOiB3aW5kb3cubG9jYXRpb25cclxuICAgICAgICAgIC5ocmVmLFxyXG4gICAgICAgIHNvdXJjZVVwbG9hZFNpZ25hdHVyZTogXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC5zb3VyY2VVcGxvYWRTaWduYXR1cmUgPyB0XHJcbiAgICAgICAgICAuc291cmNlVXBsb2FkU2lnbmF0dXJlIDogXCJcIixcclxuICAgICAgICBzdGFydGVkQXQ6IFwibnVtYmVyXCIgPT0gdHlwZW9mIHQuc3RhcnRlZEF0ID8gdC5zdGFydGVkQXQgOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIHJlc3VtZUluZm86IHQucmVzdW1lSW5mb1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsZWFyUGVuZGluZ1VwbG9hZEF1dG9maWxsKCksIG51bGxcclxuICAgIH1cclxuICB9XHJcbiAgc2F2ZVBlbmRpbmdVcGxvYWRBdXRvZmlsbChlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShQLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZnJvbUFnZW50OiBlLFxyXG4gICAgICAgIGRpc2FibGVVcGxvYWRSZXN1bWU6ICEhdGhpcy5kaXNhYmxlVXBsb2FkUmVzdW1lLFxyXG4gICAgICAgIHNvdXJjZVVybDogd2luZG93LmxvY2F0aW9uLmhyZWYsXHJcbiAgICAgICAgc291cmNlVXBsb2FkU2lnbmF0dXJlOiB0aGlzLmdldFVwbG9hZFBlbmRpbmdTaWduYXR1cmUoKSxcclxuICAgICAgICBzdGFydGVkQXQ6IERhdGUubm93KCksXHJcbiAgICAgICAgcmVzdW1lSW5mbzogdGhpcy5yZXN1bWVJbmZvXHJcbiAgICAgIH0pKVxyXG4gICAgfSBjYXRjaCAoZSkge31cclxuICB9XHJcbiAgY2xlYXJQZW5kaW5nVXBsb2FkQXV0b2ZpbGwoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShQKVxyXG4gICAgfSBjYXRjaCAoZSkge31cclxuICB9XHJcbiAgZ2V0VXBsb2FkUGVuZGluZ1NpZ25hdHVyZSgpIHtcclxuICAgIHJldHVybiBbKDAsIEYuaGFzVXBsb2FkZWRSZXN1bWUpKCkgPyBcInVwbG9hZGVkXCIgOiBcImVtcHR5XCIsICgwLCBGLmhhc1VwbG9hZGVkUmVzdW1lUXVlcnlGbGFnKVxyXG4gICAgICAoKSA/IFwidXBsb2FkLXF1ZXJ5XCIgOiBcIm5vLXF1ZXJ5XCIsIHRoaXMuZ2V0SWNpbXNQcmVmaWxsU2lnbmF0dXJlKClcclxuICAgIF0uam9pbihcInxcIilcclxuICB9XHJcbiAgaXNTYW1lUGVuZGluZ1VwbG9hZFBhZ2UoZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHQgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSxcclxuICAgICAgICByID0gbmV3IFVSTChlLnNvdXJjZVVybCwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICByZXR1cm4gdC5vcmlnaW4gPT09IHIub3JpZ2luICYmIHQucGF0aG5hbWUgPT09IHIucGF0aG5hbWVcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuICExXHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhc1VwbG9hZFJlZnJlc2hUcmFuc2l0aW9uKGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB0ID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZiksXHJcbiAgICAgICAgciA9IG5ldyBVUkwoZS5zb3VyY2VVcmwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgcmV0dXJuIHQub3JpZ2luID09PSByLm9yaWdpbiAmJiB0LnBhdGhuYW1lID09PSByLnBhdGhuYW1lICYmICh0LmhyZWYgIT09IHIuaHJlZiB8fCAoMCwgRlxyXG4gICAgICAgICAgLmhhc1VwbG9hZGVkUmVzdW1lUXVlcnlGbGFnKSgpIHx8IHRoaXMuZ2V0VXBsb2FkUGVuZGluZ1NpZ25hdHVyZSgpICE9PSBlXHJcbiAgICAgICAgLnNvdXJjZVVwbG9hZFNpZ25hdHVyZSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuICExXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIHJlc3VtZUF1dG9maWxsQWZ0ZXJVcGxvYWRSZWZyZXNoKCkge1xyXG4gICAgbGV0IGUgPSB0aGlzLnJlYWRQZW5kaW5nVXBsb2FkQXV0b2ZpbGwoKTtcclxuICAgIGlmICghZSB8fCAhdGhpcy5pc1NhbWVQZW5kaW5nVXBsb2FkUGFnZShlKSkgcmV0dXJuO1xyXG4gICAgaWYgKCF0aGlzLmhhc1VwbG9hZFJlZnJlc2hUcmFuc2l0aW9uKGUpKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJQZW5kaW5nVXBsb2FkQXV0b2ZpbGwoKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLmRpc2FibGVVcGxvYWRSZXN1bWUgPSBlLmRpc2FibGVVcGxvYWRSZXN1bWUsIGUucmVzdW1lSW5mbyAmJiAodGhpcy5yZXN1bWVJbmZvID0gZVxyXG4gICAgICAucmVzdW1lSW5mbyk7XHJcbiAgICBsZXQgdCA9IGF3YWl0ICgwLCBsLndhaXRGb3JDb25kaXRpb24pKCgpID0+IHRoaXMuaXNSZWFkeUZvclNlY29uZFBoYXNlKCksIHtcclxuICAgICAgdGltZW91dDogNWUzLFxyXG4gICAgICBpbnRlcnZhbDogMjAwXHJcbiAgICB9KTtcclxuICAgIGlmICghdCkge1xyXG4gICAgICB0aGlzLmNsZWFyUGVuZGluZ1VwbG9hZEF1dG9maWxsKCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5jb250aW51ZUF1dG9maWxsQ29udGV4dCA9IHtcclxuICAgICAgICBmcm9tQWdlbnQ6IGUuZnJvbUFnZW50XHJcbiAgICAgIH0sIGF3YWl0IHRoaXMucnVuRmllbGRGaWxsUGhhc2UoZS5mcm9tQWdlbnQpXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICB0aGlzLmNsZWFyUGVuZGluZ1VwbG9hZEF1dG9maWxsKClcclxuICAgIH1cclxuICB9XHJcbiAgc2hvdWxkVXBsb2FkUmVzdW1lRmlyc3QoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZSAmJiAoMCwgRi5oYXNSZXN1bWVTZWN0aW9uKSgpXHJcbiAgfVxyXG4gIHN5bmNVcGxvYWRlZFJlc3VtZVByb2dyZXNzKCkge1xyXG4gICAgaWYgKCEoMCwgRi5oYXNVcGxvYWRlZFJlc3VtZSkoKSkgcmV0dXJuO1xyXG4gICAgbGV0IGUgPSB0aGlzLnByb2dyZXNzVHJhY2tlci5maWVsZFN0YXR1cy5maWVsZFJlcXVpcmVkU3RhdHVzLnNvbWUoZSA9PiBcIlJlc3VtZS9DVlwiID09PSBlXHJcbiAgICAgIC5sYWJlbCk7XHJcbiAgICBlIHx8IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMoe1xyXG4gICAgICAgIGxhYmVsOiBcIlJlc3VtZS9DVlwiLFxyXG4gICAgICAgIHJlcXVpcmVkOiAhMCxcclxuICAgICAgICB0eXBlOiBcImZpbGVcIlxyXG4gICAgICB9KSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIuZmllbGRTdGF0dXMuZmlsbGVkRmllbGRzLmluY2x1ZGVzKFwiUmVzdW1lL0NWXCIpIHx8IHRoaXNcclxuICAgICAgLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhcIlJlc3VtZS9DVlwiKVxyXG4gIH1cclxuICBnZXRJY2ltc1ByZWZpbGxTaWduYXR1cmUoKSB7XHJcbiAgICBsZXQgZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKSxcclxuICAgICAgdCA9IDA7XHJcbiAgICBmb3IgKGxldCByIG9mIGUpXHJcbiAgICAgIGlmIChyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgKDAsIEQuaXNWaXNpYmxlSWNpbXNFbGVtZW50KShyKSkge1xyXG4gICAgICAgIGlmIChyIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xyXG4gICAgICAgICAgaWYgKFtcImhpZGRlblwiLCBcImZpbGVcIiwgXCJidXR0b25cIiwgXCJzdWJtaXRcIiwgXCJyYWRpb1wiLCBcImNoZWNrYm94XCJdLmluY2x1ZGVzKHIudHlwZSkpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgci52YWx1ZS50cmltKCkgJiYgKHQgKz0gMSk7XHJcbiAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAociBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcclxuICAgICAgICAgIHIudmFsdWUudHJpbSgpICYmICh0ICs9IDEpO1xyXG4gICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgciBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50ICYmIHIudmFsdWUgJiYgKHQgKz0gMSlcclxuICAgICAgfSByZXR1cm4gYCR7KDAsRi5nZXRWaXNpYmxlRW1wbG95bWVudFNlY3Rpb25Db3VudCkoKX06JHt0fWBcclxuICB9XHJcbiAgYXN5bmMgd2FpdEZvckljaW1zUHJlZmlsbFRvU2V0dGxlKCkge1xyXG4gICAgbGV0IGUgPSBcIlwiLFxyXG4gICAgICB0ID0gMCxcclxuICAgICAgciA9IERhdGUubm93KCkgKyA4ZTM7XHJcbiAgICBmb3IgKDsgRGF0ZS5ub3coKSA8IHI7KSB7XHJcbiAgICAgIGxldCByID0gdGhpcy5nZXRJY2ltc1ByZWZpbGxTaWduYXR1cmUoKTtcclxuICAgICAgaWYgKHIgPT09IGUgPyB0ICs9IDEgOiAoZSA9IHIsIHQgPSAwKSwgdCA+PSA0KSB7XHJcbiAgICAgICAgYXdhaXQgKDAsIGguZGVsYXkpKDMwMCk7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgKDAsIGguZGVsYXkpKDI1MClcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgd2FpdEZvclBvc3RVcGxvYWRUcmFuc2l0aW9uKGUsIHQpIHtcclxuICAgIGF3YWl0ICgwLCBsLndhaXRGb3JDb25kaXRpb24pKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmICE9PSBlIHx8ICgwLCBGXHJcbiAgICAgIC5oYXNVcGxvYWRlZFJlc3VtZVF1ZXJ5RmxhZykoKSB8fCB0aGlzLmdldEljaW1zUHJlZmlsbFNpZ25hdHVyZSgpICE9PSB0LCB7XHJcbiAgICAgIHRpbWVvdXQ6IDhlMyxcclxuICAgICAgaW50ZXJ2YWw6IDI1MFxyXG4gICAgfSlcclxuICB9XHJcbiAgYXN5bmMgY2xlYXJSdWxlVmFsdWUoZSkge1xyXG4gICAgaWYgKGUpIHtcclxuICAgICAgaWYgKGUudHlwZSA9PT0gdS5GSUVMRF9UWVBFLkVEVUNBVElPTiB8fCBlLnR5cGUgPT09IHUuRklFTERfVFlQRS5FTVBMT1lNRU5UKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdCBvZiBlLmNoaWxkcmVuID8/IFtdKSBhd2FpdCB0aGlzLmNsZWFyUnVsZVZhbHVlKHQpO1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLnR5cGUgPT09IHUuRklFTERfVFlQRS5URVhUICYmIGUuJGlucHV0KSB7XHJcbiAgICAgICAgYXdhaXQgKDAsIEYuY2xlYXJJbnB1dEZpZWxkKShlLiRpbnB1dCk7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUudHlwZSA9PT0gdS5GSUVMRF9UWVBFLkRBVEUgJiYgZS4kaW5wdXQpIHtcclxuICAgICAgICBhd2FpdCAoMCwgRi5jbGVhckRhdGVGaWVsZFZhbHVlKShlLiRpbnB1dCk7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH0oZS50eXBlID09PSB1LkZJRUxEX1RZUEUuU0VMRUNUIHx8IGUudHlwZSA9PT0gdS5GSUVMRF9UWVBFLlNFTEVDVF9PUklHSU5BTCkgJiYgZVxyXG4gICAgICAgIC4kaW5wdXQgJiYgKDAsIEYuY2xlYXJTZWxlY3RGaWVsZCkoZS4kaW5wdXQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGNsZWFyUnVsZVZhbHVlcyhlKSB7XHJcbiAgICBmb3IgKGxldCB0IG9mIGUpIGF3YWl0IHRoaXMuY2xlYXJSdWxlVmFsdWUodClcclxuICB9XHJcbiAgYXN5bmMgcnVuUmVzdW1lVXBsb2FkUGhhc2UoZSkge1xyXG4gICAgbGV0IHQgPSB3aW5kb3cubG9jYXRpb24uaHJlZixcclxuICAgICAgciA9IHRoaXMuZ2V0SWNpbXNQcmVmaWxsU2lnbmF0dXJlKCk7XHJcbiAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVGaWxsRm9ybSgpLCB0aGlzLnNhdmVQZW5kaW5nVXBsb2FkQXV0b2ZpbGwoZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgbiA9IGF3YWl0ICgwLCBGLnVwbG9hZFJlc3VtZSkodGhpcy5yZXN1bWVJbmZvLCAoKSA9PiB7fSwgKCkgPT4ge30pO1xyXG4gICAgICBpZiAoIW4pIHJldHVybiB0aGlzLmNsZWFyUGVuZGluZ1VwbG9hZEF1dG9maWxsKCksIHRoaXMucnVuRmllbGRGaWxsUGhhc2UoZSk7XHJcbiAgICAgIGF3YWl0IHRoaXMud2FpdEZvclBvc3RVcGxvYWRUcmFuc2l0aW9uKHQsIHIpLCBhd2FpdCB0aGlzLndhaXRGb3JJY2ltc1ByZWZpbGxUb1NldHRsZSgpO1xyXG4gICAgICBsZXQgbyA9IGF3YWl0IHRoaXMucnVuRmllbGRGaWxsUGhhc2UoZSk7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsZWFyUGVuZGluZ1VwbG9hZEF1dG9maWxsKCksIG9cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhyb3cgdGhpcy5jbGVhclBlbmRpbmdVcGxvYWRBdXRvZmlsbCgpLCBlXHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldE5hdmlnYXRpb25CdXR0b25UZXh0KGUpIHtcclxuICAgIGxldCB0ID0gZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgPyBlLnZhbHVlIDogZS5pbm5lclRleHQgfHwgZS50ZXh0Q29udGVudCB8fCBcIlwiLFxyXG4gICAgICByID0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpID8/IFwiXCI7XHJcbiAgICByZXR1cm4gKHQgfHwgcikudHJpbSgpLnRvTG93ZXJDYXNlKClcclxuICB9XHJcbiAgZ2V0Q3VycmVudFN0ZXBUZXh0KCkge1xyXG4gICAgbGV0IGUgPSAoMCwgZC5nZXRGaXJzdE9yZGVyZWROb2RlKShcIi4vL2Rpdltjb250YWlucyhAY2xhc3MsICdpQ0lNU19QYWdlU3RlcFRleHQnKV1cIik7XHJcbiAgICByZXR1cm4gKGU/LnRleHRDb250ZW50IHx8IFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpXHJcbiAgfVxyXG4gIGlzRmluYWxOYXZpZ2F0aW9uU3RlcCgpIHtcclxuICAgIGxldCBlID0gdGhpcy5nZXRDdXJyZW50U3RlcFRleHQoKTtcclxuICAgIHJldHVybiAhIWUgJiYgKGUuaW5jbHVkZXMoXCJzdWJtaXRcIikgfHwgZS5pbmNsdWRlcyhcInJldmlld1wiKSB8fCBlLmluY2x1ZGVzKFwiY29tcGxldGVcIikgfHwgZVxyXG4gICAgICAuaW5jbHVkZXMoXCJjb25maXJtYXRpb25cIikgfHwgZS5pbmNsdWRlcyhcImZpbmlzaFwiKSlcclxuICB9XHJcbiAgaXNTdWJtaXROYXZpZ2F0aW9uQnV0dG9uKGUpIHtcclxuICAgIGxldCB0ID0gdGhpcy5nZXROYXZpZ2F0aW9uQnV0dG9uVGV4dChlKTtcclxuICAgIHJldHVybiBcInN1Ym1pdFwiID09PSB0IHx8IFwic3VibWl0IHByb2ZpbGVcIiA9PT0gdCB8fCBcImFwcGx5XCIgPT09IHQgfHwgdC5pbmNsdWRlcyhcInN1Ym1pdFwiKVxyXG4gIH1cclxuICBpc0NvbnRpbnVlTmF2aWdhdGlvbkJ1dHRvbihlKSB7XHJcbiAgICBsZXQgdCA9IHRoaXMuZ2V0TmF2aWdhdGlvbkJ1dHRvblRleHQoZSk7XHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgXCJpY2ltc19zYXZlXCIgPT09IGUubmFtZSkgcmV0dXJuICExO1xyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIFwiaWNpbXNfc3VibWl0XCIgPT09IGUubmFtZSAmJiBcInN1Ym1pdFwiID09PSB0IHx8XHJcbiAgICAgIGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIFwiY3BfZm9ybV9zdWJtaXRfaVwiID09PSBlLmlkICYmIFwicHJvZmlsZUJ1dHRvblwiID09PSBlXHJcbiAgICAgIC5uYW1lICYmIFwic3VibWl0XCIgPT09IHQpIHJldHVybiAhMDtcclxuICAgIGlmIChcImZpbmlzaCBsYXRlclwiID09PSB0IHx8IFwic2F2ZSAmIHJldHVybiBsYXRlclwiID09PSB0KSByZXR1cm4gITE7XHJcbiAgICBsZXQgciA9IHRoaXMuZ2V0Q3VycmVudFN0ZXBUZXh0KCk7XHJcbiAgICByZXR1cm4gciA/ICF0aGlzLmlzRmluYWxOYXZpZ2F0aW9uU3RlcCgpIDogIXRoaXMuaXNTdWJtaXROYXZpZ2F0aW9uQnV0dG9uKGUpXHJcbiAgfVxyXG4gIGdldEFjdGl2ZUNvbnRpbnVlQnV0dG9uKCkge1xyXG4gICAgbGV0IGUgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICdpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpKSxcclxuICAgICAgdCA9IGUuZmlsdGVyKGUgPT4gISEoMCwgRC5pc1Zpc2libGVJY2ltc0VsZW1lbnQpKGUpICYmIHRoaXMuaXNDb250aW51ZU5hdmlnYXRpb25CdXR0b24oXHJcbiAgICAgIGUpKTtcclxuICAgIHJldHVybiB0WzBdID8/IG51bGxcclxuICB9XHJcbiAgZ2V0U3VwcG9ydGVkQ2hpbGRJZnJhbWVzKCkge1xyXG4gICAgbGV0IGUgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaWZyYW1lXCIpKSxcclxuICAgICAgdCA9IGUuZmlsdGVyKGUgPT4ge1xyXG4gICAgICAgIGlmICghZS5jb250ZW50V2luZG93IHx8ICFlLnNyYykgcmV0dXJuICExO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByZXR1cm4gKDAsIGMuY2hlY2tTdXBwb3J0SWZyYW1lU3JjKShlLnNyYylcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICByZXR1cm4gITFcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIHRcclxuICB9XHJcbiAgd2FpdEZvckNoaWxkSWZyYW1lQXV0b2ZpbGwoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHQgPSB3aW5kb3cudG9wID8/IHdpbmRvdyxcclxuICAgICAgICAgIHIgPSAhMSxcclxuICAgICAgICAgIG4gPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHIgfHwgKHIgPSAhMCwgdC5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvKSwgZSgpKVxyXG4gICAgICAgICAgfSwgMTVlMyksXHJcbiAgICAgICAgICBvID0gaSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhID0gaS5kYXRhPy50eXBlO1xyXG4gICAgICAgICAgICAoYSA9PT0gdS5NRVNTQUdFX0VWRU5UUy5hdXRvRmlsbFJlc3VsdEZyb21JZnJhbWUgfHwgYSA9PT0gdS5NRVNTQUdFX0VWRU5UU1xyXG4gICAgICAgICAgICAgIC5hdXRvRmlsbENvbXBsZXRlRnJvbUlmcmFtZSkgJiYgKHIgfHwgKHIgPSAhMCwgd2luZG93LmNsZWFyVGltZW91dChuKSwgdFxyXG4gICAgICAgICAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvKSwgZSgpKSlcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvKVxyXG4gICAgICB9IGNhdGNoICh0KSB7XHJcbiAgICAgICAgZSgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGFzeW5jIGZvcndhcmRBdXRvZmlsbFRvQ2hpbGRJZnJhbWUoZSkge1xyXG4gICAgbGV0IHQgPSB0aGlzLmdldFN1cHBvcnRlZENoaWxkSWZyYW1lcygpLFxyXG4gICAgICByID0gdFt0Lmxlbmd0aCAtIDFdO1xyXG4gICAgaWYgKCFyPy5jb250ZW50V2luZG93KSByZXR1cm4gITE7XHJcbiAgICBsZXQgbiA9IHRoaXMud2FpdEZvckNoaWxkSWZyYW1lQXV0b2ZpbGwoKTtcclxuICAgIHJldHVybiByLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoKDAsIGIuY2xlYW5PYmplY3QpKHtcclxuICAgICAgdHlwZTogZi5JRlJBTUVfRVZFTlRTLlVQREFURV9JRlJBTUVfREFUQSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHJlc3VtZUluZm86IHRoaXMucmVzdW1lSW5mbyxcclxuICAgICAgICBkaXNhYmxlVXBsb2FkUmVzdW1lOiB0aGlzLmRpc2FibGVVcGxvYWRSZXN1bWUsXHJcbiAgICAgICAgdG9rZW46IHRoaXMudG9rZW5cclxuICAgICAgfSxcclxuICAgICAgdXJsOiByLnNyY1xyXG4gICAgfSksIHtcclxuICAgICAgdGFyZ2V0T3JpZ2luOiBcIipcIlxyXG4gICAgfSksIHIuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSgoMCwgYi5jbGVhbk9iamVjdCkoe1xyXG4gICAgICB0eXBlOiBmLklGUkFNRV9FVkVOVFMuRVhFQ1VURV9JRlJBTUVfRlVOQ1RJT04sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBmcm9tQWdlbnQ6IGUsXHJcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICAgIH0sXHJcbiAgICAgIHVybDogci5zcmNcclxuICAgIH0pLCB7XHJcbiAgICAgIHRhcmdldE9yaWdpbjogXCIqXCJcclxuICAgIH0pLCBhd2FpdCBuLCAhMFxyXG4gIH1cclxuICBmb3J3YXJkQ29udGludWVUb0NoaWxkSWZyYW1lKGUpIHtcclxuICAgIGxldCB0ID0gdGhpcy5nZXRTdXBwb3J0ZWRDaGlsZElmcmFtZXMoKSxcclxuICAgICAgciA9IHRbdC5sZW5ndGggLSAxXTtcclxuICAgIHJldHVybiAhIXI/LmNvbnRlbnRXaW5kb3cgJiYgKHIuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSgoMCwgYi5jbGVhbk9iamVjdCkoe1xyXG4gICAgICB0eXBlOiBMLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZnJvbUFnZW50OiBlLFxyXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgICB9LFxyXG4gICAgICB1cmw6IHIuc3JjXHJcbiAgICB9KSwge1xyXG4gICAgICB0YXJnZXRPcmlnaW46IFwiKlwiXHJcbiAgICB9KSwgITApXHJcbiAgfVxyXG4gIGFzeW5jIHJ1bkZpZWxkRmlsbFBoYXNlKGUgPSAhMSkge1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uVHJhY2tpbmcuc3RhcnRSdW4oKSwgdGhpcy5lZHVjYXRpb25UcmFjZVJ1bklkID0gbnVsbCwgdGhpc1xyXG4gICAgICAuZWR1Y2F0aW9uQ2xpZW50U2VhcmNoTGVkZ2VyID0gW107XHJcbiAgICBsZXQgdCA9ICExLFxyXG4gICAgICByID0gXCJcIixcclxuICAgICAgbiA9IFwiXCI7XHJcbiAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVGaWxsRm9ybSgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5pc1JlYWR5Rm9yU2Vjb25kUGhhc2UoKSAmJiBhd2FpdCB0aGlzLndhaXRGb3JJY2ltc1ByZWZpbGxUb1NldHRsZSgpO1xyXG4gICAgICBsZXQgbyA9IGF3YWl0ICgwLCBwLnVzZUF1dG9maWxsSW5mb1N0b3JlKS5nZXRTdGF0ZSgpLmZldGNoQXV0b2ZpbGxJbmZvKCksXHJcbiAgICAgICAgbCA9IGF3YWl0ICgwLCBULmxvYWRJY2ltc0NyZWF0ZUxvZ2luQ3JlZGVudGlhbHMpKG8pLFxyXG4gICAgICAgIGMgPSBhd2FpdCAoMCwgVC5maWxsSWNpbXNDcmVhdGVMb2dpbkNyZWRlbnRpYWxzKShsKTtcclxuICAgICAgaWYgKGNvbnNvbGUuaW5mbyhcclxuICAgICAgICAgIGBbSWNpbXNDcmVhdGVMb2dpbl0gJHtKU09OLnN0cmluZ2lmeSh7Zm91bmRTZWN0aW9uOmMuZm91bmRTZWN0aW9uLGZvdW5kUm9sZUNvdW50OmMuZm91bmRSb2xlcy5sZW5ndGgsZmlsbGVkUm9sZUNvdW50OmMuZmlsbGVkUm9sZXMubGVuZ3RoLHNraXBwZWRFeGlzdGluZ1JvbGVDb3VudDpjLnNraXBwZWRFeGlzdGluZ1JvbGVzLmxlbmd0aCxyZWplY3RlZFJvbGVDb3VudDpjLnJlamVjdGVkUm9sZXMubGVuZ3RofSl9YFxyXG4gICAgICAgICAgKSwgciA9ICgwLCBwLnVzZUF1dG9maWxsSW5mb1N0b3JlKS5nZXRTdGF0ZSgpLmNvdW50cnksIG4gPSBTdHJpbmcobz8ubG9jYXRpb25cclxuICAgICAgICAgID8uc3RhdGUgPz8gbz8uc3RhdGUgPz8gXCJcIikudHJpbSgpLCByKSB7XHJcbiAgICAgICAgbGV0IGUgPSAoMCwgRi5nZXRTZWxlY3RlZEljaW1zQ291bnRyeVRleHQpKCksXHJcbiAgICAgICAgICB0ID0gKDAsIEQuZ2V0SWNpbXNTdGF0ZVByb3ZpbmNlT3B0aW9uc1NpZ25hdHVyZSkoKSxcclxuICAgICAgICAgIG4gPSAhMTtcclxuICAgICAgICB0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgbiA9IGF3YWl0ICgwLCBGLmZpbGxDb3VudHJ5KShyKVxyXG4gICAgICAgIH0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKTtcclxuICAgICAgICBsZXQgbyA9ICgwLCBGLmdldFNlbGVjdGVkSWNpbXNDb3VudHJ5VGV4dCkoKTtcclxuICAgICAgICBuICYmIGUudG9Mb3dlckNhc2UoKSAhPT0gby50b0xvd2VyQ2FzZSgpICYmIGF3YWl0ICgwLCBEXHJcbiAgICAgICAgICAud2FpdEZvckljaW1zU3RhdGVQcm92aW5jZU9wdGlvbnNSZWZyZXNoKSh0KVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBkID0gKDAsIEYuYXV0b1NlbGVjdENlcnRpZnlGaWVsZCkoKSxcclxuICAgICAgICBmID0gYXdhaXQgdGhpcy5leHRyYWN0Rm9ybVJ1bGVzKCksXHJcbiAgICAgICAgbSA9IGQgPyBbZF0gOiBbXTtcclxuICAgICAgaWYgKDAgPT09IGYubGVuZ3RoKSByZXR1cm4gZCAmJiAodGhpcy5wcm9ncmVzc1RyYWNrZXIuc2V0RmllbGRzUmVxdWlyZWRTdGF0dXMobSksIGRcclxuICAgICAgICAgIC5maWxsZWQgPyB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhkLmxhYmVsKSA6IHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgICAudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoZC5sYWJlbCkpLCB0ID0gYXdhaXQgdGhpcy5mb3J3YXJkQXV0b2ZpbGxUb0NoaWxkSWZyYW1lKGUpLFxyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLmdlbmVyYXRlRmluYWxQcm9ncmVzcygpO1xyXG4gICAgICBsZXQgaCA9IG5ldyBTZXQsXHJcbiAgICAgICAgZyA9IFwiRW1wbG95bWVudFwiO1xyXG4gICAgICBmb3IgKGxldCBlIG9mIGYpIHtcclxuICAgICAgICBsZXQgdCA9IGUudHlwZTtcclxuICAgICAgICBpZiAodCA9PT0gdS5GSUVMRF9UWVBFLkVEVUNBVElPTiB8fCB0ID09PSB1LkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCkge1xyXG4gICAgICAgICAgbGV0IGUgPSBTdHJpbmcodCk7XHJcbiAgICAgICAgICBpZiAoaC5oYXMoZSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgaC5hZGQoZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPT09IHUuRklFTERfVFlQRS5FTVBMT1lNRU5UKSB7XHJcbiAgICAgICAgICBsZXQgdCA9IEFycmF5LmlzQXJyYXkoZS5vcHRpb25zKSA/IGUub3B0aW9uc1swXSA6IG51bGw7XHJcbiAgICAgICAgICBnID0gXCJvYmplY3RcIiA9PSB0eXBlb2YgdCAmJiB0Py5sYWJlbCA/IHQubGFiZWwgOiBlLmxhYmVsLCBtLnB1c2goe1xyXG4gICAgICAgICAgICBsYWJlbDogZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGUucmVxdWlyZWQgPz8gbnVsbCxcclxuICAgICAgICAgICAgb3B0aW9uczogZS5vcHRpb25zLFxyXG4gICAgICAgICAgICB0eXBlOiBlLnR5cGVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPT09IHUuRklFTERfVFlQRS5TRUNUSU9OICYmIEFycmF5LmlzQXJyYXkoZS5jaGlsZHJlbikpIHtcclxuICAgICAgICAgIGZvciAobGV0IHQgb2YgZS5jaGlsZHJlbikgbS5wdXNoKHtcclxuICAgICAgICAgICAgbGFiZWw6IHQubGFiZWwsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0LnJlcXVpcmVkID8/IG51bGwsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHQub3B0aW9ucyxcclxuICAgICAgICAgICAgdHlwZTogdC50eXBlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG0ucHVzaCh7XHJcbiAgICAgICAgICBsYWJlbDogZS5sYWJlbCxcclxuICAgICAgICAgIHJlcXVpcmVkOiBlLnJlcXVpcmVkID8/IG51bGwsXHJcbiAgICAgICAgICBvcHRpb25zOiBlLm9wdGlvbnMsXHJcbiAgICAgICAgICB0eXBlOiBlLnR5cGVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnNldEZpZWxkc1JlcXVpcmVkU3RhdHVzKG0pLCBkICYmIChkLmZpbGxlZCA/IHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgLnVwZGF0ZUZpbGxlZFByb2dyZXNzKGQubGFiZWwpIDogdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoZC5sYWJlbCkpO1xyXG4gICAgICBsZXQgeSA9IGF3YWl0IHRoaXMuZmV0Y2hGb3JtQW5zd2VycyhmLCBlKTtcclxuICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHkpIHJldHVybiB5O1xyXG4gICAgICAoMCwgQS5hcHBseUljaW1zRWR1Y2F0aW9uUHJvZmlsZVJhd0ZhbGxiYWNrKSh0aGlzLmFuc3dlciwgbyksICgwLCBBXHJcbiAgICAgICAgLmFwcGx5SWNpbXNTdGF0ZVByb3ZpbmNlRmFsbGJhY2spKHRoaXMuYW5zd2VyLCBuKSwgd2luZG93LnRvcD8ucG9zdE1lc3NhZ2UoYlxyXG4gICAgICAgICAgLmNsZWFuT2JqZWN0KHtcclxuICAgICAgICAgICAgdHlwZTogdS5NRVNTQUdFX0VWRU5UUy5hZ2VudFN0YXJ0RmlsbGluZ0ZpZWxkc1xyXG4gICAgICAgICAgfSksIHtcclxuICAgICAgICAgICAgdGFyZ2V0T3JpZ2luOiBcIipcIlxyXG4gICAgICAgICAgfSksICgwLCBGLmhhc1VwbG9hZGVkUmVzdW1lKSgpID8gdGhpcy5zeW5jVXBsb2FkZWRSZXN1bWVQcm9ncmVzcygpIDogdGhpc1xyXG4gICAgICAgIC5kaXNhYmxlVXBsb2FkUmVzdW1lICYmIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiUmVzdW1lL0NWXCIpO1xyXG4gICAgICBsZXQgdiA9IGYucmVkdWNlKChlLCB0KSA9PiAodC50eXBlID09PSB1LkZJRUxEX1RZUEUuRURVQ0FUSU9OIHx8IHQudHlwZSA9PT0gdS5GSUVMRF9UWVBFXHJcbiAgICAgICAgICAuRU1QTE9ZTUVOVCB8fCAodC50eXBlID09PSB1LkZJRUxEX1RZUEUuU0VDVElPTiAmJiBBcnJheS5pc0FycmF5KHQuY2hpbGRyZW4pID8gZVxyXG4gICAgICAgICAgICAucHVzaCguLi50LmNoaWxkcmVuKSA6IGUucHVzaCh0KSksIGUpLCBbXSksXHJcbiAgICAgICAgdyA9IHYuZmluZChlID0+IChlLnR5cGUgPT09IHUuRklFTERfVFlQRS5TRUxFQ1QgfHwgZS50eXBlID09PSB1LkZJRUxEX1RZUEVcclxuICAgICAgICAgIC5TRUxFQ1RfT1JJR0lOQUwpICYmIC9eY291bnRyeSQvaS50ZXN0KGUubGFiZWwpKSxcclxuICAgICAgICBTID0gdi5maWx0ZXIoZSA9PiAhL15jb3VudHJ5JC9pLnRlc3QoZS5sYWJlbCkpLFxyXG4gICAgICAgIEUgPSAoMCwgRC5nZXRJY2ltc1JlZ3VsYXJSdWxlc0ZvckZpbGwpKFMpLFxyXG4gICAgICAgIHggPSBTdHJpbmcociB8fCB0aGlzLmFuc3dlcj8uY291bnRyeSB8fCBcIlwiKS50cmltKCk7XHJcbiAgICAgIGlmIChhd2FpdCB0aGlzLmNsZWFyUnVsZVZhbHVlcyhFKSwgdykge1xyXG4gICAgICAgIGxldCBlID0gISF4ICYmIGF3YWl0ICgwLCBGLmZpbGxDb3VudHJ5KSh4LCB3LiRpbnB1dCk7XHJcbiAgICAgICAgZSA/IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKFwiQ291bnRyeVwiKSA6IHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgICAudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJDb3VudHJ5XCIpXHJcbiAgICAgIH1cclxuICAgICAgbGV0IGsgPSAoMCwgaS5nZXRSZWd1bGFyT3BlcmF0aW9ucykoRSwgdGhpcy5hbnN3ZXIucmVndWxhciwgdGhpcy5vcGVyYXRpb25Db25maWcpO1xyXG4gICAgICBmb3IgKGxldCBlIG9mIChjb25zb2xlLmluZm8oXHJcbiAgICAgICAgICBgW0ljaW1zQWRkcmVzc0RlYnVnXSByZWd1bGFyIGZpbGwgcXVldWVkICR7SlNPTi5zdHJpbmdpZnkoe2FkZHJlc3NSdWxlczooMCxELmdldEljaW1zQWRkcmVzc1J1bGVEaWFnbm9zdGljcykoZiksYWRkcmVzc0xpa2VSZWd1bGFyS2V5Q291bnQ6TSh0aGlzLmFuc3dlciksdG90YWxSZWd1bGFyT3BlcmF0aW9uQ291bnQ6ay5sZW5ndGh9KX1gXHJcbiAgICAgICAgICApLCBrKSkgdGhpcy50YXNrUXVldWUuYWRkKGUpO1xyXG4gICAgICBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKSwgY29uc29sZS5pbmZvKFxyXG4gICAgICAgIGBbSWNpbXNBZGRyZXNzRGVidWddIHJlZ3VsYXIgZmlsbCBjb21wbGV0ZWQgJHtKU09OLnN0cmluZ2lmeSh7ZG9tOk8oKX0pfWApLCBhd2FpdCAoMCxcclxuICAgICAgICBGLmZpbGxTaWduYXR1cmVDaGVja2JveGVzKSgpO1xyXG4gICAgICBsZXQgaiA9IGF3YWl0IHRoaXMucnVuQ29tYm9RdWVzdGlvbkF1dG9maWxsSWZOZWVkZWQoZiwgZSk7XHJcbiAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBqKSByZXR1cm4gajtcclxuICAgICAgZiA9IGo7XHJcbiAgICAgIGxldCBQID0gdGhpcy5hbnN3ZXIuZWR1Y2F0aW9uID8/IFtdO1xyXG4gICAgICBpZiAodGhpcy5lZHVjYXRpb25DbGllbnRTZWFyY2hMZWRnZXIgPSBbXSwgUC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGUgPSBhd2FpdCBCKFAsIHtcclxuICAgICAgICAgIHN5bmNFZHVjYXRpb25TZWN0aW9uczogRi5zeW5jRWR1Y2F0aW9uU2VjdGlvbnMsXHJcbiAgICAgICAgICBnZXRFZHVjYXRpb25SdWxlczogSS5nZXRFZHVjYXRpb25SdWxlcyxcclxuICAgICAgICAgIGdldFZpc2libGVFZHVjYXRpb25TZWN0aW9uQ291bnQ6IEYuZ2V0VmlzaWJsZUVkdWNhdGlvblNlY3Rpb25Db3VudCxcclxuICAgICAgICAgIGNsZWFyUnVsZVZhbHVlczogZSA9PiB0aGlzLmNsZWFyUnVsZVZhbHVlcyhlKSxcclxuICAgICAgICAgIG9wZXJhdGlvbkNvbmZpZzogdGhpcy5vcGVyYXRpb25Db25maWcsXHJcbiAgICAgICAgICB0cmFuc2Zvcm1SZWNvcmRCeVJ1bGU6IChlLCB0KSA9PiB0aGlzLmZpbHRlclNlY3Rpb25SZWNvcmRGb3JFbmREYXRlUnVsZShlLCB0LFxyXG4gICAgICAgICAgICBcImVkdWNhdGlvblwiKSxcclxuICAgICAgICAgIGZpbGxDbGllbnRTZWFyY2hGaWVsZDogQy5maWxsSWNpbXNFZHVjYXRpb25DbGllbnRTZWFyY2hGaWVsZCxcclxuICAgICAgICAgIGNsaWVudFNlYXJjaERlcHM6IE4sXHJcbiAgICAgICAgICB1cGRhdGVGaWxsZWRQcm9ncmVzczogZSA9PiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyhlKSxcclxuICAgICAgICAgIHVwZGF0ZU1pc3NlZFByb2dyZXNzOiBlID0+IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKGUpLFxyXG4gICAgICAgICAgb25TZWN0aW9uUmVzdWx0Q2hhbmdlZDogdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlU2VjdGlvblJlc3VsdFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZWR1Y2F0aW9uQ2xpZW50U2VhcmNoTGVkZ2VyID0gZS5sZWRnZXJcclxuICAgICAgfVxyXG4gICAgICBsZXQgXyA9IHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlID8/IFtdO1xyXG4gICAgICBpZiAoXy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgYXdhaXQgKDAsIEYuc3luY0VtcGxveW1lbnRTZWN0aW9ucykoXy5sZW5ndGgpLCAoMCwgRi5nZXRWaXNpYmxlRW1wbG95bWVudFNlY3Rpb25Db3VudClcclxuICAgICAgKCk7XHJcbiAgICAgICAgbGV0IGUgPSAoMCwgSS5nZXRFeHBlcmllbmNlUnVsZXMpKCk7XHJcbiAgICAgICAgKDAsIHMuc2V0U2VjdGlvblJlc3VsdEZvY3VzUnVsZXMpKFwiZW1wbG95bWVudFwiLCBlKTtcclxuICAgICAgICBsZXQgdCA9IE1hdGgubWluKF8ubGVuZ3RoLCBlLmxlbmd0aCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jbGVhclJ1bGVWYWx1ZXMoZS5zbGljZSgwLCB0KSk7XHJcbiAgICAgICAgbGV0IHIgPSAhMSxcclxuICAgICAgICAgIG4gPSAoMCwgaS5jcmVhdGVTZWN0aW9uUmVzdWx0UmVwb3J0ZXIpKFwiZW1wbG95bWVudFwiLCB7XHJcbiAgICAgICAgICAgIG9uU2VjdGlvblJlc3VsdENoYW5nZWQ6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVNlY3Rpb25SZXN1bHRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIG4uc2V0TGFiZWwoZyk7XHJcbiAgICAgICAgZm9yIChsZXQgbyA9IDA7IG8gPCB0OyBvKyspIHtcclxuICAgICAgICAgIGxldCB0ID0gZVtvXTtcclxuICAgICAgICAgIGlmICghdCkgY29udGludWU7XHJcbiAgICAgICAgICBsZXQgaSA9IF9bb10sXHJcbiAgICAgICAgICAgIGwgPSB0LmNoaWxkcmVuID8/IFtdLFxyXG4gICAgICAgICAgICBzID0gbi5lbnN1cmVSb3cobywgaSk7XHJcbiAgICAgICAgICBpZiAobi5lbWl0KCksIHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IGU7XHJcbiAgICAgICAgICAgICAgbGV0IHQgPSBpO1xyXG4gICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByIG9mIGwpIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IG8gPSB0aGlzLmZpbHRlclNlY3Rpb25SZWNvcmRGb3JFbmREYXRlUnVsZShyLCBpLCBcImVtcGxveW1lbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgIGUgPSByLCB0ID0gbztcclxuICAgICAgICAgICAgICAgICAgbGV0IGEgPSBhd2FpdCB0aGlzLm9wZXJhdGlvbkNvbmZpZ1tyLnR5cGVdPy4ociwgbywgITEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGwgPSAkKHIubGFiZWwsIG8pO1xyXG4gICAgICAgICAgICAgICAgICBuLnVwZGF0ZVJvdyhzLCBvKSwgbi51cGRhdGVGaWVsZChzLCByLmxhYmVsLCBsLCAhMSAhPT0gYSAmJiBsID8gXCJmaWxsZWRcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJtaXNzZWRcIiksIG4uZW1pdCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAobykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG8gaW5zdGFuY2VvZiBhLlNraXBwZWRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICByID0gITAsIGUgJiYgKG4udXBkYXRlRmllbGQocywgZS5sYWJlbCwgJChlLmxhYmVsLCB0KSwgXCJza2lwcGVkXCIpLCBuXHJcbiAgICAgICAgICAgICAgICAgIC5lbWl0KCkpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IG9cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKSwgcikgYnJlYWtcclxuICAgICAgICB9KDAsIEYuZ2V0VmlzaWJsZUVtcGxveW1lbnRTZWN0aW9uQ291bnQpKCksIHIgPyB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgICAgLnVwZGF0ZU1pc3NlZFByb2dyZXNzKGcpIDogdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoZylcclxuICAgICAgfVxyXG4gICAgICBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKSwgYXdhaXQgdGhpcy5iaW5kU3VibWl0QnV0dG9uVHJhY2tpbmcoZilcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBhLkNhbmNlbGxlZEVycm9yKSB0aHJvdyBlXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBpZiAodCkgcmV0dXJuIHRoaXMucHJvZ3Jlc3NUcmFja2VyLmdlbmVyYXRlRmluYWxQcm9ncmVzcygpO1xyXG4gICAgICBhd2FpdCB0aGlzLmZpbmFsaXplRmlsbEZvcm0oKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3NUcmFja2VyLmdlbmVyYXRlRmluYWxQcm9ncmVzcygpXHJcbiAgfVxyXG4gIGFzeW5jIGRvRmlsbEZvcm0oZSA9ICExKSB7XHJcbiAgICBpZiAodGhpcy5jb250aW51ZUF1dG9maWxsQ29udGV4dCA9IHtcclxuICAgICAgICBmcm9tQWdlbnQ6IGVcclxuICAgICAgfSwgKDAsIFMucHJvY2VlZEljaW1zSm9iRGV0YWlsVG9BcHBseSkoZG9jdW1lbnQsICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgKDAsIEUuc2F2ZUljaW1zSm9iRGV0YWlsQXV0b2ZpbGwpKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSwgd2luZG93LmxvY2F0aW9uLmhyZWYsIHtcclxuICAgICAgICAgICAgZnJvbUFnZW50OiBlLFxyXG4gICAgICAgICAgICBkaXNhYmxlVXBsb2FkUmVzdW1lOiAhIXRoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZSxcclxuICAgICAgICAgICAgcmVzdW1lSW5mbzogdGhpcy5yZXN1bWVJbmZvXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgY29uc29sZS5pbmZvKCdbSWNpbXNKb2JEZXRhaWxDb250aW51YXRpb25dIHtcInJlYXNvblwiOlwic3RvcmFnZS11bmF2YWlsYWJsZVwifScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSkgcmV0dXJuIHRoaXMucHJvZ3Jlc3NUcmFja2VyLmdlbmVyYXRlRmluYWxQcm9ncmVzcygpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgKDAsIEUuY2xlYXJJY2ltc0pvYkRldGFpbEF1dG9maWxsKSh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpXHJcbiAgICB9IGNhdGNoIHt9XHJcbiAgICByZXR1cm4gKHRoaXMubmF2aWdhdGlvblRyYWNraW5nLnN0YXJ0UnVuKCksIHRoaXMuc2hvdWxkVXBsb2FkUmVzdW1lRmlyc3QoKSkgPyB0aGlzXHJcbiAgICAgIC5ydW5SZXN1bWVVcGxvYWRQaGFzZShlKSA6IHRoaXMucnVuRmllbGRGaWxsUGhhc2UoZSlcclxuICB9XHJcbiAgc3VibWl0QXBwbGljYXRpb24oKSB7XHJcbiAgICBsZXQgZSA9ICgwLCBkLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgXCIuLy9pbnB1dFtAdHlwZT0nc3VibWl0JyBhbmQgQHZhbHVlPVxcXCJTdWJtaXQgUHJvZmlsZVxcXCJdXCIpO1xyXG4gICAgZSAmJiBlLmNsaWNrKClcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJpY2ltcy5kZjJiN2ExNS5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);