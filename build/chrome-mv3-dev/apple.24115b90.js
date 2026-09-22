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
})({"47HH0":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\apple.js",
    "bundleId": "86965ebb24115b90",
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
var j = z(require("308b0f8a5dd76654"));
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

},{"308b0f8a5dd76654":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"cBgyZ":[function(require,module,exports) {
/**
 * Parcel module id: c6v3o
 * Resolved path: src/contents/sites/apple.js
 * Dependencies:
 *   ../base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/rules -> 3cWKC  =>  src/contents/methods/rules.js
 *   ~contents/methods/track -> h479b  =>  src/contents/methods/track.js
 *   ~contents/sites/apple/answer -> 1vP8Z  =>  src/contents/sites/apple/answer.js
 *   ~contents/sites/apple/country -> g9Qd1  =>  src/contents/sites/apple/country.js
 *   ~contents/sites/apple/operations -> dcxvW  =>  src/contents/sites/apple/operations.js
 *   ~contents/sites/apple/rules -> bPSBK  =>  src/contents/sites/apple/rules.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Apple", ()=>v);
var o = e("~contents/methods/cancellation"), i = e("~contents/methods/answer"), a = e("~contents/methods/rules"), l = e("~contents/methods/dom"), s = e("~contents/methods/track"), u = e("~contents/sites/apple/operations"), c = e("~contents/sites/apple/answer"), d = e("~contents/sites/apple/country"), f = e("~contents/sites/apple/rules"), p = e("~core/dom"), m = e("~core/enums"), h = e("~store/autofillInfo"), g = e("~utils/delay"), b = e("../base-filler");
let y = "apple";
class v extends b.BaseFiller {
    constructor(){
        super(), this.continueButtonHandler = null, this.activeFillPromise = null, this.lastFillFromAgent = !1, this.continueRefillCaptureHandler = null, this.lastContinueRefillAt = 0, this.coverLetterStatusObserver = null, this.coverLetterStatusTimer = null, this.lastCoverLetterStatus = null, this.currentRunCountryCommitted = !1, this.bindCoverLetterStatusObserver();
    }
    getFieldHandlers() {
        return {
            [m.FIELD_TYPE.TEXT]: {
                handler: (e1, t)=>{
                    if ("Skills" === e1.label || "apply-skills-typeahead-suggestion-textbox" === e1.$input.id) {
                        let e1 = this.answer?.skills;
                        return (0, u.fillSkills)(e1);
                    }
                    return (0, u.fillInputTextField)(e1.$input, t, e1.label);
                },
                options: {
                    expectArray: !1
                }
            },
            [m.FIELD_TYPE.LISTBOX]: {
                handler: (e1, t)=>{
                    if ("Skills" === e1.label || e1.$input?.id === "apply-skills-typeahead-suggestion-textbox") {
                        let e1 = this.answer?.skills?.length ? this.answer.skills : t;
                        return (0, u.fillSkills)(e1);
                    }
                    return (0, u.fillListbox)(e1.$input, t, e1.label);
                },
                options: {
                    expectArray: !1
                }
            },
            [m.FIELD_TYPE.SELECT]: {
                handler: (e1, t)=>e1.$input instanceof HTMLSelectElement ? (0, u.fillSelectField)(e1.$input, t, e1.label) : (0, u.fillCustomDropdown)(e1.$input, t, e1.label),
                options: {
                    expectArray: !0
                }
            },
            [m.FIELD_TYPE.CHECKBOX]: {
                handler: (e1, t)=>(0, u.fillRadioGroup)(e1, t),
                options: {
                    expectArray: !0
                }
            },
            [m.FIELD_TYPE.DATE]: {
                handler: (e1, t)=>(0, u.fillSplitDate)(e1, t),
                options: {
                    expectArray: !1
                }
            }
        };
    }
    async extractFormRules() {
        return await (0, f.getRules)();
    }
    getSiteName() {
        return y;
    }
    formatAnswer(e1) {
        return (0, c.formatAnswer)(e1);
    }
    async getAutofillSnapshot() {
        return (0, f.getFormSnapshot)();
    }
    async getSubmitSnapshot() {
        return (0, f.getFormSnapshot)();
    }
    async executeSiteSpecificSteps() {}
    async checkCoverLetter() {
        this.syncCoverLetterStatus(!0);
    }
    syncCoverLetterStatus(e1 = !1) {
        let t = (0, u.getAppleCoverLetterStatus)();
        (e1 || t !== this.lastCoverLetterStatus) && (this.lastCoverLetterStatus = t, (0, l.postCoverLetterStatus)(t));
    }
    scheduleCoverLetterStatusSync(e1 = !1) {
        this.coverLetterStatusTimer && window.clearTimeout(this.coverLetterStatusTimer), this.coverLetterStatusTimer = window.setTimeout(()=>{
            this.syncCoverLetterStatus(e1);
        }, 150);
    }
    bindCoverLetterStatusObserver() {
        if (this.coverLetterStatusObserver || !document.body) {
            this.scheduleCoverLetterStatusSync(!0);
            return;
        }
        this.coverLetterStatusObserver = new MutationObserver(()=>{
            this.scheduleCoverLetterStatusSync();
        }), this.coverLetterStatusObserver.observe(document.body, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            characterData: !0
        }), this.scheduleCoverLetterStatusSync(!0);
    }
    async doFillForm(e1) {
        if (this.lastFillFromAgent = e1, this.bindContinueRefillListener(), this.activeFillPromise) return await this.activeFillPromise;
        this.activeFillPromise = this.runFillForm(e1);
        try {
            return await this.activeFillPromise;
        } finally{
            this.activeFillPromise = null;
        }
    }
    getCurrentStepFingerprint() {
        let e1 = document.querySelector('li.apply-progress-step[aria-current="step"] .apply-progress-label span'), t = e1?.textContent?.trim().toLowerCase() || "", r1 = document.getElementById("apply-profileInformation-form") || document.querySelector("main"), n = r1?.getAttribute("id") || r1?.getAttribute("aria-label") || r1?.className || "";
        return `${t}::${n}`;
    }
    bindContinueRefillListener() {
        if (this.continueRefillCaptureHandler) return;
        let e1 = 2500;
        this.continueRefillCaptureHandler = (t)=>{
            let r1 = t.target;
            if (!(r1 instanceof Element)) return;
            let n = r1.closest("#apply-step-continue-button");
            if (!n?.isConnected || n.disabled || "true" === n.getAttribute("aria-disabled")) return;
            let o = this.getCurrentStepFingerprint(), i = Date.now();
            i - this.lastContinueRefillAt < e1 || (this.lastContinueRefillAt = i, window.setTimeout(()=>{
                let e1 = Date.now(), t = ()=>{
                    let r1 = this.getCurrentStepFingerprint();
                    if (r1 && r1 !== o) {
                        this.scheduleCoverLetterStatusSync(!0), this.fillForm(this.lastFillFromAgent);
                        return;
                    }
                    Date.now() - e1 > 8e3 || window.setTimeout(t, 300);
                };
                t();
            }, 1200));
        }, document.addEventListener("click", this.continueRefillCaptureHandler, !0);
    }
    async runFillForm(e1 = !1) {
        this.resetFalconResponseAccumulator(), await this.taskQueue.run();
        let t = document.querySelector('li.apply-progress-step[aria-current="step"] .apply-progress-label span'), r1 = t?.textContent?.trim().toLowerCase() || "";
        if (r1.includes("resume") && r1.includes("add")) {
            this.timeTrace.rulesParseStartTime = Date.now(), this.progressTracker.clear(), this.taskQueue.clear(), this.disableUploadResume || (this.taskQueue.add(async ()=>{
                await (0, u.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
            }), await this.taskQueue.run());
            let e1 = (0, f.getFormSnapshot)(), t = document.getElementById("apply-step-continue-button");
            return t && (this.continueButtonHandler && t.removeEventListener("click", this.continueButtonHandler), this.continueButtonHandler = (0, u.submitHandler).bind(null, e1), t.addEventListener("click", this.continueButtonHandler)), (0, s.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace), this.progressTracker.generateFinalProgress();
        }
        if (this.timeTrace.rulesParseStartTime = Date.now(), this.progressTracker.clear(), this.taskQueue.clear(), r1.includes("profile") && r1.includes("information")) {
            let e1 = document.getElementById("manualOption"), t = document.getElementById("resumeOption");
            if ((e1 || t) && (this.taskQueue.add(u.selectManualFillOption), await this.taskQueue.run(), await (0, u.waitPageClean)(), await (0, g.delay)(1200), !document.getElementById("apply-profileInformation-form"))) return console.warn("[Apple] Profile Information form did not appear after selecting manual fill"), (0, s.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace), this.progressTracker.generateFinalProgress();
        }
        this.taskQueue.add(u.preclickAddButtons), await this.taskQueue.run(), this.currentRunCountryCommitted = !1;
        let n = null;
        try {
            n = await (0, h.useAutofillInfoStore).getState().fetchAutofillInfo();
        } catch  {
            console.warn("[Apple][Country] fresh Autofill Information fetch failed");
        }
        (0, o.checkpoint)();
        let l = await (0, d.prefillAppleCountry)(n?.location?.country, document, {
            checkpoint: o.checkpoint
        });
        this.currentRunCountryCommitted = l.committed;
        let m = await (0, f.getRules)(), b = m.filter((e1)=>!(0, d.isMainAppleCountryRule)(e1)), v = l.dependentsSettled ? [] : b.filter(d.isAppleCountryDependentRule), w = l.dependentsSettled ? b : b.filter((e1)=>!(0, d.isAppleCountryDependentRule)(e1));
        this.progressTracker.setFieldsRequiredStatus(m);
        let S = m.filter(d.isMainAppleCountryRule);
        for (let e1 of S)this.currentRunCountryCommitted ? this.progressTracker.updateFilledProgress(e1.label) : this.progressTracker.updateMissedProgress(e1.label);
        if ("ambiguous" === l.discovery) {
            for (let e1 of v)this.progressTracker.updateMissedProgress(e1.label);
            return console.warn("[Apple][Country] skipped stage: main geographic Country controls are ambiguous"), (0, s.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace), this.progressTracker.generateFinalProgress();
        }
        let E = ()=>({
                education: [],
                workExperience: [],
                skills: [],
                regular: {}
            });
        try {
            let t = (0, a.filterRulesByLabel)(w, []);
            if (t.length > 0) {
                this.token || (this.token = await (0, i.getSiteToken)()), this.timeTrace.requestStartTime = Date.now();
                let r1 = this.captureFalconResponseRun(), n = await (0, i.getElementRules)(t, y, this.token, e1, this.resumeInfo.id, this.resumeInfo.tailorId);
                this.recordFalconResponse(n, r1), this.answer = (0, c.formatAnswer)(n);
            } else this.answer = E();
        } catch (e1) {
            if (e1 instanceof i.HTTPError || e1 instanceof i.ResumeMissingCodeError) return (0, s.sendHttpStatusMessage)(e1.message), e1.message;
            throw e1;
        }
        (0, o.checkpoint)();
        let x = (0, f.getSubmitButtonText)();
        if ((0, s.bindSubmitButton)(x, this.progressTracker.fieldStatus, this.timeTrace), this.answer.education && this.answer.education.length > 0) for(let e1 = 1; e1 < this.answer.education.length; e1++)this.taskQueue.add(u.addEducationSection);
        if (this.answer.workExperience && this.answer.workExperience.length > 0) for(let e1 = 1; e1 < this.answer.workExperience.length; e1++)this.taskQueue.add(u.addEmploymentSection);
        await this.taskQueue.run(), await (0, g.delay)(200), this.timeTrace.fillStartTime = Date.now();
        let C = await (0, f.getEduRules)(), A = await (0, f.getExpRules)();
        (0, p.setSectionResultFocusRules)("education", C), (0, p.setSectionResultFocusRules)("employment", A);
        let k = (0, i.getEmploymentOperations)(A, this.answer.workExperience, this.operationConfig, void 0, {
            onSectionResultChanged: this.progressTracker.updateSectionResult,
            onCompleted: ()=>this.progressTracker.updateFilledProgress("Employment"),
            onSkipped: ()=>this.progressTracker.updateMissedProgress("Employment")
        }), T = (0, i.getEducationOperations)(C, this.answer.education, this.operationConfig, void 0, {
            onSectionResultChanged: this.progressTracker.updateSectionResult,
            onCompleted: ()=>this.progressTracker.updateFilledProgress("Education"),
            onSkipped: ()=>this.progressTracker.updateMissedProgress("Education")
        }), F = (0, i.getRegularOperations)(w, this.answer.regular, this.operationConfig), I = [
            ...F,
            ...k,
            ...T
        ];
        for (let e1 of I)this.taskQueue.add(e1);
        if (await this.taskQueue.run(), v.length > 0) {
            let t = await (0, d.waitForAppleCountryDependents)(l.dependentBaseline, l.dependentExpectation, document, {
                checkpoint: o.checkpoint
            });
            if (t) {
                let t = await (0, f.getRules)(), r1 = t.filter(d.isAppleCountryDependentRule);
                for (let e1 of r1)this.progressTracker.updateFieldRequiredStatus(e1);
                let n = (0, a.filterRulesByLabel)(r1, []);
                if (n.length > 0) try {
                    this.token || (this.token = await (0, i.getSiteToken)());
                    let t = this.captureFalconResponseRun(), a = await (0, i.getElementRules)(n, y, this.token, e1, this.resumeInfo.id, this.resumeInfo.tailorId);
                    this.recordFalconResponse(a, t);
                    let l = (0, c.formatAnswer)(a);
                    (0, o.checkpoint)();
                    let s = (0, i.getRegularOperations)(r1, l.regular, this.operationConfig);
                    for (let e1 of s)this.taskQueue.add(e1);
                    await this.taskQueue.run();
                } catch (e1) {
                    if (e1 instanceof i.HTTPError || e1 instanceof i.ResumeMissingCodeError) return (0, s.sendHttpStatusMessage)(e1.message), e1.message;
                    throw e1;
                }
            } else {
                for (let e1 of v)this.progressTracker.updateMissedProgress(e1.label);
                console.warn("[Apple][Country] deferred address rules skipped: dependent state remains unverified");
            }
        }
        let j = (0, u.isAppleCoverLetterStep)() ? (0, u.getAppleCoverLetterStatus)() : "";
        if ("required" === j && (this.progressTracker.updateFieldRequiredStatus({
            label: "Cover Letter",
            required: !0,
            type: "file"
        }), this.coverLetter?.coverLetterId && this.coverLetter?.coverLetterName ? this.taskQueue.add(async ()=>{
            let e1 = await (0, u.uploadCoverLetter)(this.coverLetter, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
            e1 || this.progressTracker.updateMissedProgress("Cover Letter");
        }) : this.progressTracker.updateMissedProgress("Cover Letter")), r1.includes("self-disclosure")) {
            let t = await (0, u.openDisabilityModal)();
            if (t) {
                let t = await (0, f.getDisabilityModalRules)();
                if (t.length > 0) {
                    let r1;
                    t.forEach((e1)=>{
                        this.progressTracker.updateFieldRequiredStatus({
                            label: e1.label,
                            required: e1.required,
                            options: e1.options,
                            type: e1.type
                        });
                    });
                    let n = (0, a.filterRulesByLabel)(t, []);
                    try {
                        let t = this.captureFalconResponseRun(), o = await (0, i.getElementRules)(n, y, this.token, e1, this.resumeInfo.id, this.resumeInfo.tailorId);
                        this.recordFalconResponse(o, t), r1 = (0, c.formatAnswer)(o);
                    } catch (e1) {
                        if (e1 instanceof i.HTTPError || e1 instanceof i.ResumeMissingCodeError) return (0, s.sendHttpStatusMessage)(e1.message), e1.message;
                        throw e1;
                    }
                    (0, o.checkpoint)();
                    let l = (0, i.getRegularOperations)(t, r1.regular, this.operationConfig);
                    for (let e1 of l)this.taskQueue.add(e1);
                    await this.taskQueue.run();
                    let d = await (0, u.submitDisabilityModal)();
                    d || console.warn("[Apple] Disability modal submit did not complete");
                }
            }
        }
        await (0, g.delay)(500), await (0, u.blurPage)(), this.taskQueue.add(async ()=>{
            await (0, u.fillAgreementCheckbox)();
        }), await this.taskQueue.run();
        let D = (0, f.getFormSnapshot)(), P = document.getElementById("apply-step-continue-button");
        return P && (this.continueButtonHandler && P.removeEventListener("click", this.continueButtonHandler), this.continueButtonHandler = (0, u.submitHandler).bind(null, D), P.addEventListener("click", this.continueButtonHandler)), (0, s.postStatus)("filling", this.progressTracker.fieldStatus, this.timeTrace), this.progressTracker.generateFinalProgress();
    }
    submitApplication() {}
}

},{}]},["47HH0","cBgyZ"], "cBgyZ", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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YUFBWSxFQUFHLEtBQUssTUFDaEYsSUFBSSxFQUFFLGlCQUFpQixTQUFTLElBQUksQ0FBQyxzQkFBcUIsR0FBSSxBQUFDLENBQUEsR0FBRyxFQUFFLFVBQVMsRUFDN0UsV0FBVyxJQUFJLENBQUMsZ0JBQWdCLGFBQWEsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLGdCQUNwRTtJQUNMO0lBQ0Esb0JBQW9CLENBQUM7QUFDdkIiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLWIwOTMwZDk0YmFiODYyODcuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvYXBwbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcYXBwbGUuanNcIixcImJ1bmRsZUlkXCI6XCI4Njk2NWViYjI0MTE1YjkwXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogYzZ2M29cclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2FwcGxlLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi4vYmFzZS1maWxsZXIgLT4gOHhqNkYgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYmFzZS1maWxsZXIuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2Fuc3dlciAtPiA3VDVlVyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Fuc3dlci5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvbiAtPiBsdUpmcyAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvbi5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL2RvbSAtPiBoQTVRYSAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2RvbS5qc1xyXG4gKiAgIH5jb250ZW50cy9tZXRob2RzL3J1bGVzIC0+IDNjV0tDICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvcnVsZXMuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy90cmFjayAtPiBoNDc5YiAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL3RyYWNrLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2FwcGxlL2Fuc3dlciAtPiAxdlA4WiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9hcHBsZS9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvc2l0ZXMvYXBwbGUvY291bnRyeSAtPiBnOVFkMSAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9hcHBsZS9jb3VudHJ5LmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2FwcGxlL29wZXJhdGlvbnMgLT4gZGN4dlcgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYXBwbGUvb3BlcmF0aW9ucy5qc1xyXG4gKiAgIH5jb250ZW50cy9zaXRlcy9hcHBsZS9ydWxlcyAtPiBiUFNCSyAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9hcHBsZS9ydWxlcy5qc1xyXG4gKiAgIH5jb3JlL2RvbSAtPiBoTE1KWCAgPT4gIHNyYy9jb3JlL2RvbS5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+c3RvcmUvYXV0b2ZpbGxJbmZvIC0+IDc5Vk5QICA9PiAgc3JjL3N0b3JlL2F1dG9maWxsSW5mby5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiQXBwbGVcIiwgKCkgPT4gdik7XHJcbnZhciBvID0gZShcIn5jb250ZW50cy9tZXRob2RzL2NhbmNlbGxhdGlvblwiKSxcclxuICBpID0gZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxcclxuICBhID0gZShcIn5jb250ZW50cy9tZXRob2RzL3J1bGVzXCIpLFxyXG4gIGwgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvZG9tXCIpLFxyXG4gIHMgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvdHJhY2tcIiksXHJcbiAgdSA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvYXBwbGUvb3BlcmF0aW9uc1wiKSxcclxuICBjID0gZShcIn5jb250ZW50cy9zaXRlcy9hcHBsZS9hbnN3ZXJcIiksXHJcbiAgZCA9IGUoXCJ+Y29udGVudHMvc2l0ZXMvYXBwbGUvY291bnRyeVwiKSxcclxuICBmID0gZShcIn5jb250ZW50cy9zaXRlcy9hcHBsZS9ydWxlc1wiKSxcclxuICBwID0gZShcIn5jb3JlL2RvbVwiKSxcclxuICBtID0gZShcIn5jb3JlL2VudW1zXCIpLFxyXG4gIGggPSBlKFwifnN0b3JlL2F1dG9maWxsSW5mb1wiKSxcclxuICBnID0gZShcIn51dGlscy9kZWxheVwiKSxcclxuICBiID0gZShcIi4uL2Jhc2UtZmlsbGVyXCIpO1xyXG5sZXQgeSA9IFwiYXBwbGVcIjtcclxuY2xhc3MgdiBleHRlbmRzIGIuQmFzZUZpbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpLCB0aGlzLmNvbnRpbnVlQnV0dG9uSGFuZGxlciA9IG51bGwsIHRoaXMuYWN0aXZlRmlsbFByb21pc2UgPSBudWxsLCB0aGlzXHJcbiAgICAgIC5sYXN0RmlsbEZyb21BZ2VudCA9ICExLCB0aGlzLmNvbnRpbnVlUmVmaWxsQ2FwdHVyZUhhbmRsZXIgPSBudWxsLCB0aGlzXHJcbiAgICAgIC5sYXN0Q29udGludWVSZWZpbGxBdCA9IDAsIHRoaXMuY292ZXJMZXR0ZXJTdGF0dXNPYnNlcnZlciA9IG51bGwsIHRoaXNcclxuICAgICAgLmNvdmVyTGV0dGVyU3RhdHVzVGltZXIgPSBudWxsLCB0aGlzLmxhc3RDb3ZlckxldHRlclN0YXR1cyA9IG51bGwsIHRoaXNcclxuICAgICAgLmN1cnJlbnRSdW5Db3VudHJ5Q29tbWl0dGVkID0gITEsIHRoaXMuYmluZENvdmVyTGV0dGVyU3RhdHVzT2JzZXJ2ZXIoKVxyXG4gIH1cclxuICBnZXRGaWVsZEhhbmRsZXJzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW20uRklFTERfVFlQRS5URVhUXToge1xyXG4gICAgICAgIGhhbmRsZXI6IChlLCB0KSA9PiB7XHJcbiAgICAgICAgICBpZiAoXCJTa2lsbHNcIiA9PT0gZS5sYWJlbCB8fCBcImFwcGx5LXNraWxscy10eXBlYWhlYWQtc3VnZ2VzdGlvbi10ZXh0Ym94XCIgPT09IGUuJGlucHV0XHJcbiAgICAgICAgICAgIC5pZCkge1xyXG4gICAgICAgICAgICBsZXQgZSA9IHRoaXMuYW5zd2VyPy5za2lsbHM7XHJcbiAgICAgICAgICAgIHJldHVybiAoMCwgdS5maWxsU2tpbGxzKShlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuICgwLCB1LmZpbGxJbnB1dFRleHRGaWVsZCkoZS4kaW5wdXQsIHQsIGUubGFiZWwpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFttLkZJRUxEX1RZUEUuTElTVEJPWF06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKFwiU2tpbGxzXCIgPT09IGUubGFiZWwgfHwgZS4kaW5wdXQ/LmlkID09PVxyXG4gICAgICAgICAgICBcImFwcGx5LXNraWxscy10eXBlYWhlYWQtc3VnZ2VzdGlvbi10ZXh0Ym94XCIpIHtcclxuICAgICAgICAgICAgbGV0IGUgPSB0aGlzLmFuc3dlcj8uc2tpbGxzPy5sZW5ndGggPyB0aGlzLmFuc3dlci5za2lsbHMgOiB0O1xyXG4gICAgICAgICAgICByZXR1cm4gKDAsIHUuZmlsbFNraWxscykoZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAoMCwgdS5maWxsTGlzdGJveCkoZS4kaW5wdXQsIHQsIGUubGFiZWwpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFttLkZJRUxEX1RZUEUuU0VMRUNUXToge1xyXG4gICAgICAgIGhhbmRsZXI6IChlLCB0KSA9PiBlLiRpbnB1dCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50ID8gKDAsIHUuZmlsbFNlbGVjdEZpZWxkKShlXHJcbiAgICAgICAgICAuJGlucHV0LCB0LCBlLmxhYmVsKSA6ICgwLCB1LmZpbGxDdXN0b21Ecm9wZG93bikoZS4kaW5wdXQsIHQsIGUubGFiZWwpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW20uRklFTERfVFlQRS5DSEVDS0JPWF06IHtcclxuICAgICAgICBoYW5kbGVyOiAoZSwgdCkgPT4gKDAsIHUuZmlsbFJhZGlvR3JvdXApKGUsIHQpLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGV4cGVjdEFycmF5OiAhMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgW20uRklFTERfVFlQRS5EQVRFXToge1xyXG4gICAgICAgIGhhbmRsZXI6IChlLCB0KSA9PiAoMCwgdS5maWxsU3BsaXREYXRlKShlLCB0KSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBleHBlY3RBcnJheTogITFcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgZXh0cmFjdEZvcm1SdWxlcygpIHtcclxuICAgIHJldHVybiBhd2FpdCAoMCwgZi5nZXRSdWxlcykoKVxyXG4gIH1cclxuICBnZXRTaXRlTmFtZSgpIHtcclxuICAgIHJldHVybiB5XHJcbiAgfVxyXG4gIGZvcm1hdEFuc3dlcihlKSB7XHJcbiAgICByZXR1cm4gKDAsIGMuZm9ybWF0QW5zd2VyKShlKVxyXG4gIH1cclxuICBhc3luYyBnZXRBdXRvZmlsbFNuYXBzaG90KCkge1xyXG4gICAgcmV0dXJuICgwLCBmLmdldEZvcm1TbmFwc2hvdCkoKVxyXG4gIH1cclxuICBhc3luYyBnZXRTdWJtaXRTbmFwc2hvdCgpIHtcclxuICAgIHJldHVybiAoMCwgZi5nZXRGb3JtU25hcHNob3QpKClcclxuICB9XHJcbiAgYXN5bmMgZXhlY3V0ZVNpdGVTcGVjaWZpY1N0ZXBzKCkge31cclxuICBhc3luYyBjaGVja0NvdmVyTGV0dGVyKCkge1xyXG4gICAgdGhpcy5zeW5jQ292ZXJMZXR0ZXJTdGF0dXMoITApXHJcbiAgfVxyXG4gIHN5bmNDb3ZlckxldHRlclN0YXR1cyhlID0gITEpIHtcclxuICAgIGxldCB0ID0gKDAsIHUuZ2V0QXBwbGVDb3ZlckxldHRlclN0YXR1cykoKTtcclxuICAgIChlIHx8IHQgIT09IHRoaXMubGFzdENvdmVyTGV0dGVyU3RhdHVzKSAmJiAodGhpcy5sYXN0Q292ZXJMZXR0ZXJTdGF0dXMgPSB0LCAoMCwgbFxyXG4gICAgICAucG9zdENvdmVyTGV0dGVyU3RhdHVzKSh0KSlcclxuICB9XHJcbiAgc2NoZWR1bGVDb3ZlckxldHRlclN0YXR1c1N5bmMoZSA9ICExKSB7XHJcbiAgICB0aGlzLmNvdmVyTGV0dGVyU3RhdHVzVGltZXIgJiYgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLmNvdmVyTGV0dGVyU3RhdHVzVGltZXIpLCB0aGlzXHJcbiAgICAgIC5jb3ZlckxldHRlclN0YXR1c1RpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3luY0NvdmVyTGV0dGVyU3RhdHVzKGUpXHJcbiAgICAgIH0sIDE1MClcclxuICB9XHJcbiAgYmluZENvdmVyTGV0dGVyU3RhdHVzT2JzZXJ2ZXIoKSB7XHJcbiAgICBpZiAodGhpcy5jb3ZlckxldHRlclN0YXR1c09ic2VydmVyIHx8ICFkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVDb3ZlckxldHRlclN0YXR1c1N5bmMoITApO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuY292ZXJMZXR0ZXJTdGF0dXNPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgdGhpcy5zY2hlZHVsZUNvdmVyTGV0dGVyU3RhdHVzU3luYygpXHJcbiAgICB9KSwgdGhpcy5jb3ZlckxldHRlclN0YXR1c09ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xyXG4gICAgICBjaGlsZExpc3Q6ICEwLFxyXG4gICAgICBzdWJ0cmVlOiAhMCxcclxuICAgICAgYXR0cmlidXRlczogITAsXHJcbiAgICAgIGNoYXJhY3RlckRhdGE6ICEwXHJcbiAgICB9KSwgdGhpcy5zY2hlZHVsZUNvdmVyTGV0dGVyU3RhdHVzU3luYyghMClcclxuICB9XHJcbiAgYXN5bmMgZG9GaWxsRm9ybShlKSB7XHJcbiAgICBpZiAodGhpcy5sYXN0RmlsbEZyb21BZ2VudCA9IGUsIHRoaXMuYmluZENvbnRpbnVlUmVmaWxsTGlzdGVuZXIoKSwgdGhpcy5hY3RpdmVGaWxsUHJvbWlzZSlcclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYWN0aXZlRmlsbFByb21pc2U7XHJcbiAgICB0aGlzLmFjdGl2ZUZpbGxQcm9taXNlID0gdGhpcy5ydW5GaWxsRm9ybShlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmFjdGl2ZUZpbGxQcm9taXNlXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICB0aGlzLmFjdGl2ZUZpbGxQcm9taXNlID0gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuICBnZXRDdXJyZW50U3RlcEZpbmdlcnByaW50KCkge1xyXG4gICAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICdsaS5hcHBseS1wcm9ncmVzcy1zdGVwW2FyaWEtY3VycmVudD1cInN0ZXBcIl0gLmFwcGx5LXByb2dyZXNzLWxhYmVsIHNwYW4nKSxcclxuICAgICAgdCA9IGU/LnRleHRDb250ZW50Py50cmltKCkudG9Mb3dlckNhc2UoKSB8fCBcIlwiLFxyXG4gICAgICByID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBseS1wcm9maWxlSW5mb3JtYXRpb24tZm9ybVwiKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwibWFpblwiKSxcclxuICAgICAgbiA9IHI/LmdldEF0dHJpYnV0ZShcImlkXCIpIHx8IHI/LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikgfHwgcj8uY2xhc3NOYW1lIHx8IFwiXCI7XHJcbiAgICByZXR1cm4gYCR7dH06OiR7bn1gXHJcbiAgfVxyXG4gIGJpbmRDb250aW51ZVJlZmlsbExpc3RlbmVyKCkge1xyXG4gICAgaWYgKHRoaXMuY29udGludWVSZWZpbGxDYXB0dXJlSGFuZGxlcikgcmV0dXJuO1xyXG4gICAgbGV0IGUgPSAyNTAwO1xyXG4gICAgdGhpcy5jb250aW51ZVJlZmlsbENhcHR1cmVIYW5kbGVyID0gdCA9PiB7XHJcbiAgICAgIGxldCByID0gdC50YXJnZXQ7XHJcbiAgICAgIGlmICghKHIgaW5zdGFuY2VvZiBFbGVtZW50KSkgcmV0dXJuO1xyXG4gICAgICBsZXQgbiA9IHIuY2xvc2VzdChcIiNhcHBseS1zdGVwLWNvbnRpbnVlLWJ1dHRvblwiKTtcclxuICAgICAgaWYgKCFuPy5pc0Nvbm5lY3RlZCB8fCBuLmRpc2FibGVkIHx8IFwidHJ1ZVwiID09PSBuLmdldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIikpIHJldHVybjtcclxuICAgICAgbGV0IG8gPSB0aGlzLmdldEN1cnJlbnRTdGVwRmluZ2VycHJpbnQoKSxcclxuICAgICAgICBpID0gRGF0ZS5ub3coKTtcclxuICAgICAgaSAtIHRoaXMubGFzdENvbnRpbnVlUmVmaWxsQXQgPCBlIHx8ICh0aGlzLmxhc3RDb250aW51ZVJlZmlsbEF0ID0gaSwgd2luZG93LnNldFRpbWVvdXQoXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBsZXQgZSA9IERhdGUubm93KCksXHJcbiAgICAgICAgICB0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgciA9IHRoaXMuZ2V0Q3VycmVudFN0ZXBGaW5nZXJwcmludCgpO1xyXG4gICAgICAgICAgICBpZiAociAmJiByICE9PSBvKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZUNvdmVyTGV0dGVyU3RhdHVzU3luYyghMCksIHRoaXMuZmlsbEZvcm0odGhpc1xyXG4gICAgICAgICAgICAgICAgLmxhc3RGaWxsRnJvbUFnZW50KTtcclxuICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBEYXRlLm5vdygpIC0gZSA+IDhlMyB8fCB3aW5kb3cuc2V0VGltZW91dCh0LCAzMDApXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIHQoKVxyXG4gICAgICB9LCAxMjAwKSlcclxuICAgIH0sIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNvbnRpbnVlUmVmaWxsQ2FwdHVyZUhhbmRsZXIsICEwKVxyXG4gIH1cclxuICBhc3luYyBydW5GaWxsRm9ybShlID0gITEpIHtcclxuICAgIHRoaXMucmVzZXRGYWxjb25SZXNwb25zZUFjY3VtdWxhdG9yKCksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpO1xyXG4gICAgbGV0IHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICdsaS5hcHBseS1wcm9ncmVzcy1zdGVwW2FyaWEtY3VycmVudD1cInN0ZXBcIl0gLmFwcGx5LXByb2dyZXNzLWxhYmVsIHNwYW4nKSxcclxuICAgICAgciA9IHQ/LnRleHRDb250ZW50Py50cmltKCkudG9Mb3dlckNhc2UoKSB8fCBcIlwiO1xyXG4gICAgaWYgKHIuaW5jbHVkZXMoXCJyZXN1bWVcIikgJiYgci5pbmNsdWRlcyhcImFkZFwiKSkge1xyXG4gICAgICB0aGlzLnRpbWVUcmFjZS5ydWxlc1BhcnNlU3RhcnRUaW1lID0gRGF0ZS5ub3coKSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIuY2xlYXIoKSwgdGhpc1xyXG4gICAgICAgIC50YXNrUXVldWUuY2xlYXIoKSwgdGhpcy5kaXNhYmxlVXBsb2FkUmVzdW1lIHx8ICh0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgYXdhaXQgKDAsIHUudXBsb2FkUmVzdW1lKSh0aGlzLnJlc3VtZUluZm8sIHRoaXMucHJvZ3Jlc3NUcmFja2VyXHJcbiAgICAgICAgICAgIC51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzLCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcylcclxuICAgICAgICB9KSwgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCkpO1xyXG4gICAgICBsZXQgZSA9ICgwLCBmLmdldEZvcm1TbmFwc2hvdCkoKSxcclxuICAgICAgICB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBseS1zdGVwLWNvbnRpbnVlLWJ1dHRvblwiKTtcclxuICAgICAgcmV0dXJuIHQgJiYgKHRoaXMuY29udGludWVCdXR0b25IYW5kbGVyICYmIHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXNcclxuICAgICAgICAgIC5jb250aW51ZUJ1dHRvbkhhbmRsZXIpLCB0aGlzLmNvbnRpbnVlQnV0dG9uSGFuZGxlciA9ICgwLCB1LnN1Ym1pdEhhbmRsZXIpLmJpbmQoXHJcbiAgICAgICAgICBudWxsLCBlKSwgdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jb250aW51ZUJ1dHRvbkhhbmRsZXIpKSwgKDAsIHMucG9zdFN0YXR1cykoXHJcbiAgICAgICAgICBcImZpbGxpbmdcIiwgdGhpcy5wcm9ncmVzc1RyYWNrZXIuZmllbGRTdGF0dXMsIHRoaXMudGltZVRyYWNlKSwgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAuZ2VuZXJhdGVGaW5hbFByb2dyZXNzKClcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRpbWVUcmFjZS5ydWxlc1BhcnNlU3RhcnRUaW1lID0gRGF0ZS5ub3coKSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIuY2xlYXIoKSwgdGhpc1xyXG4gICAgICAudGFza1F1ZXVlLmNsZWFyKCksIHIuaW5jbHVkZXMoXCJwcm9maWxlXCIpICYmIHIuaW5jbHVkZXMoXCJpbmZvcm1hdGlvblwiKSkge1xyXG4gICAgICBsZXQgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFudWFsT3B0aW9uXCIpLFxyXG4gICAgICAgIHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VtZU9wdGlvblwiKTtcclxuICAgICAgaWYgKChlIHx8IHQpICYmICh0aGlzLnRhc2tRdWV1ZS5hZGQodS5zZWxlY3RNYW51YWxGaWxsT3B0aW9uKSwgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksXHJcbiAgICAgICAgICBhd2FpdCAoMCwgdS53YWl0UGFnZUNsZWFuKSgpLCBhd2FpdCAoMCwgZy5kZWxheSkoMTIwMCksICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgXCJhcHBseS1wcm9maWxlSW5mb3JtYXRpb24tZm9ybVwiKSkpIHJldHVybiBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICBcIltBcHBsZV0gUHJvZmlsZSBJbmZvcm1hdGlvbiBmb3JtIGRpZCBub3QgYXBwZWFyIGFmdGVyIHNlbGVjdGluZyBtYW51YWwgZmlsbFwiKSwgKDAsXHJcbiAgICAgICAgICBzLnBvc3RTdGF0dXMpKFwiZmlsbGluZ1wiLCB0aGlzLnByb2dyZXNzVHJhY2tlci5maWVsZFN0YXR1cywgdGhpcy50aW1lVHJhY2UpLCB0aGlzXHJcbiAgICAgICAgLnByb2dyZXNzVHJhY2tlci5nZW5lcmF0ZUZpbmFsUHJvZ3Jlc3MoKVxyXG4gICAgfVxyXG4gICAgdGhpcy50YXNrUXVldWUuYWRkKHUucHJlY2xpY2tBZGRCdXR0b25zKSwgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksIHRoaXNcclxuICAgICAgLmN1cnJlbnRSdW5Db3VudHJ5Q29tbWl0dGVkID0gITE7XHJcbiAgICBsZXQgbiA9IG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICBuID0gYXdhaXQgKDAsIGgudXNlQXV0b2ZpbGxJbmZvU3RvcmUpLmdldFN0YXRlKCkuZmV0Y2hBdXRvZmlsbEluZm8oKVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIltBcHBsZV1bQ291bnRyeV0gZnJlc2ggQXV0b2ZpbGwgSW5mb3JtYXRpb24gZmV0Y2ggZmFpbGVkXCIpXHJcbiAgICB9KDAsIG8uY2hlY2twb2ludCkoKTtcclxuICAgIGxldCBsID0gYXdhaXQgKDAsIGQucHJlZmlsbEFwcGxlQ291bnRyeSkobj8ubG9jYXRpb24/LmNvdW50cnksIGRvY3VtZW50LCB7XHJcbiAgICAgIGNoZWNrcG9pbnQ6IG8uY2hlY2twb2ludFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmN1cnJlbnRSdW5Db3VudHJ5Q29tbWl0dGVkID0gbC5jb21taXR0ZWQ7XHJcbiAgICBsZXQgbSA9IGF3YWl0ICgwLCBmLmdldFJ1bGVzKSgpLFxyXG4gICAgICBiID0gbS5maWx0ZXIoZSA9PiAhKDAsIGQuaXNNYWluQXBwbGVDb3VudHJ5UnVsZSkoZSkpLFxyXG4gICAgICB2ID0gbC5kZXBlbmRlbnRzU2V0dGxlZCA/IFtdIDogYi5maWx0ZXIoZC5pc0FwcGxlQ291bnRyeURlcGVuZGVudFJ1bGUpLFxyXG4gICAgICB3ID0gbC5kZXBlbmRlbnRzU2V0dGxlZCA/IGIgOiBiLmZpbHRlcihlID0+ICEoMCwgZC5pc0FwcGxlQ291bnRyeURlcGVuZGVudFJ1bGUpKGUpKTtcclxuICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnNldEZpZWxkc1JlcXVpcmVkU3RhdHVzKG0pO1xyXG4gICAgbGV0IFMgPSBtLmZpbHRlcihkLmlzTWFpbkFwcGxlQ291bnRyeVJ1bGUpO1xyXG4gICAgZm9yIChsZXQgZSBvZiBTKSB0aGlzLmN1cnJlbnRSdW5Db3VudHJ5Q29tbWl0dGVkID8gdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgLnVwZGF0ZUZpbGxlZFByb2dyZXNzKGUubGFiZWwpIDogdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoZS5sYWJlbCk7XHJcbiAgICBpZiAoXCJhbWJpZ3VvdXNcIiA9PT0gbC5kaXNjb3ZlcnkpIHtcclxuICAgICAgZm9yIChsZXQgZSBvZiB2KSB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhlLmxhYmVsKTtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihcclxuICAgICAgICAgIFwiW0FwcGxlXVtDb3VudHJ5XSBza2lwcGVkIHN0YWdlOiBtYWluIGdlb2dyYXBoaWMgQ291bnRyeSBjb250cm9scyBhcmUgYW1iaWd1b3VzXCIpLCAoMCxcclxuICAgICAgICAgIHMucG9zdFN0YXR1cykoXCJmaWxsaW5nXCIsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLmZpZWxkU3RhdHVzLCB0aGlzLnRpbWVUcmFjZSksIHRoaXNcclxuICAgICAgICAucHJvZ3Jlc3NUcmFja2VyLmdlbmVyYXRlRmluYWxQcm9ncmVzcygpXHJcbiAgICB9XHJcbiAgICBsZXQgRSA9ICgpID0+ICh7XHJcbiAgICAgIGVkdWNhdGlvbjogW10sXHJcbiAgICAgIHdvcmtFeHBlcmllbmNlOiBbXSxcclxuICAgICAgc2tpbGxzOiBbXSxcclxuICAgICAgcmVndWxhcjoge31cclxuICAgIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHQgPSAoMCwgYS5maWx0ZXJSdWxlc0J5TGFiZWwpKHcsIFtdKTtcclxuICAgICAgaWYgKHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMudG9rZW4gfHwgKHRoaXMudG9rZW4gPSBhd2FpdCAoMCwgaS5nZXRTaXRlVG9rZW4pKCkpLCB0aGlzLnRpbWVUcmFjZVxyXG4gICAgICAgICAgLnJlcXVlc3RTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGxldCByID0gdGhpcy5jYXB0dXJlRmFsY29uUmVzcG9uc2VSdW4oKSxcclxuICAgICAgICAgIG4gPSBhd2FpdCAoMCwgaS5nZXRFbGVtZW50UnVsZXMpKHQsIHksIHRoaXMudG9rZW4sIGUsIHRoaXMucmVzdW1lSW5mby5pZCwgdGhpc1xyXG4gICAgICAgICAgICAucmVzdW1lSW5mby50YWlsb3JJZCk7XHJcbiAgICAgICAgdGhpcy5yZWNvcmRGYWxjb25SZXNwb25zZShuLCByKSwgdGhpcy5hbnN3ZXIgPSAoMCwgYy5mb3JtYXRBbnN3ZXIpKG4pXHJcbiAgICAgIH0gZWxzZSB0aGlzLmFuc3dlciA9IEUoKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIGkuSFRUUEVycm9yIHx8IGUgaW5zdGFuY2VvZiBpLlJlc3VtZU1pc3NpbmdDb2RlRXJyb3IpIHJldHVybiAoMCwgc1xyXG4gICAgICAgIC5zZW5kSHR0cFN0YXR1c01lc3NhZ2UpKGUubWVzc2FnZSksIGUubWVzc2FnZTtcclxuICAgICAgdGhyb3cgZVxyXG4gICAgfSgwLCBvLmNoZWNrcG9pbnQpKCk7XHJcbiAgICBsZXQgeCA9ICgwLCBmLmdldFN1Ym1pdEJ1dHRvblRleHQpKCk7XHJcbiAgICBpZiAoKDAsIHMuYmluZFN1Ym1pdEJ1dHRvbikoeCwgdGhpcy5wcm9ncmVzc1RyYWNrZXIuZmllbGRTdGF0dXMsIHRoaXMudGltZVRyYWNlKSwgdGhpc1xyXG4gICAgICAuYW5zd2VyLmVkdWNhdGlvbiAmJiB0aGlzLmFuc3dlci5lZHVjYXRpb24ubGVuZ3RoID4gMClcclxuICAgICAgZm9yIChsZXQgZSA9IDE7IGUgPCB0aGlzLmFuc3dlci5lZHVjYXRpb24ubGVuZ3RoOyBlKyspIHRoaXMudGFza1F1ZXVlLmFkZCh1XHJcbiAgICAgICAgLmFkZEVkdWNhdGlvblNlY3Rpb24pO1xyXG4gICAgaWYgKHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlICYmIHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlLmxlbmd0aCA+IDApXHJcbiAgICAgIGZvciAobGV0IGUgPSAxOyBlIDwgdGhpcy5hbnN3ZXIud29ya0V4cGVyaWVuY2UubGVuZ3RoOyBlKyspIHRoaXMudGFza1F1ZXVlLmFkZCh1XHJcbiAgICAgICAgLmFkZEVtcGxveW1lbnRTZWN0aW9uKTtcclxuICAgIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpLCBhd2FpdCAoMCwgZy5kZWxheSkoMjAwKSwgdGhpcy50aW1lVHJhY2UuZmlsbFN0YXJ0VGltZSA9IERhdGVcclxuICAgICAgLm5vdygpO1xyXG4gICAgbGV0IEMgPSBhd2FpdCAoMCwgZi5nZXRFZHVSdWxlcykoKSxcclxuICAgICAgQSA9IGF3YWl0ICgwLCBmLmdldEV4cFJ1bGVzKSgpO1xyXG4gICAgKDAsIHAuc2V0U2VjdGlvblJlc3VsdEZvY3VzUnVsZXMpKFwiZWR1Y2F0aW9uXCIsIEMpLCAoMCwgcC5zZXRTZWN0aW9uUmVzdWx0Rm9jdXNSdWxlcykoXHJcbiAgICAgIFwiZW1wbG95bWVudFwiLCBBKTtcclxuICAgIGxldCBrID0gKDAsIGkuZ2V0RW1wbG95bWVudE9wZXJhdGlvbnMpKEEsIHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlLCB0aGlzLm9wZXJhdGlvbkNvbmZpZyxcclxuICAgICAgICB2b2lkIDAsIHtcclxuICAgICAgICAgIG9uU2VjdGlvblJlc3VsdENoYW5nZWQ6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVNlY3Rpb25SZXN1bHQsXHJcbiAgICAgICAgICBvbkNvbXBsZXRlZDogKCkgPT4gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoXCJFbXBsb3ltZW50XCIpLFxyXG4gICAgICAgICAgb25Ta2lwcGVkOiAoKSA9PiB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIkVtcGxveW1lbnRcIilcclxuICAgICAgICB9KSxcclxuICAgICAgVCA9ICgwLCBpLmdldEVkdWNhdGlvbk9wZXJhdGlvbnMpKEMsIHRoaXMuYW5zd2VyLmVkdWNhdGlvbiwgdGhpcy5vcGVyYXRpb25Db25maWcsXHJcbiAgICAgIHZvaWQgMCwge1xyXG4gICAgICAgIG9uU2VjdGlvblJlc3VsdENoYW5nZWQ6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZVNlY3Rpb25SZXN1bHQsXHJcbiAgICAgICAgb25Db21wbGV0ZWQ6ICgpID0+IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKFwiRWR1Y2F0aW9uXCIpLFxyXG4gICAgICAgIG9uU2tpcHBlZDogKCkgPT4gdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFZHVjYXRpb25cIilcclxuICAgICAgfSksXHJcbiAgICAgIEYgPSAoMCwgaS5nZXRSZWd1bGFyT3BlcmF0aW9ucykodywgdGhpcy5hbnN3ZXIucmVndWxhciwgdGhpcy5vcGVyYXRpb25Db25maWcpLFxyXG4gICAgICBJID0gWy4uLkYsIC4uLmssIC4uLlRdO1xyXG4gICAgZm9yIChsZXQgZSBvZiBJKSB0aGlzLnRhc2tRdWV1ZS5hZGQoZSk7XHJcbiAgICBpZiAoYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksIHYubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgdCA9IGF3YWl0ICgwLCBkLndhaXRGb3JBcHBsZUNvdW50cnlEZXBlbmRlbnRzKShsLmRlcGVuZGVudEJhc2VsaW5lLCBsXHJcbiAgICAgICAgLmRlcGVuZGVudEV4cGVjdGF0aW9uLCBkb2N1bWVudCwge1xyXG4gICAgICAgICAgY2hlY2twb2ludDogby5jaGVja3BvaW50XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGlmICh0KSB7XHJcbiAgICAgICAgbGV0IHQgPSBhd2FpdCAoMCwgZi5nZXRSdWxlcykoKSxcclxuICAgICAgICAgIHIgPSB0LmZpbHRlcihkLmlzQXBwbGVDb3VudHJ5RGVwZW5kZW50UnVsZSk7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiByKSB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzKGUpO1xyXG4gICAgICAgIGxldCBuID0gKDAsIGEuZmlsdGVyUnVsZXNCeUxhYmVsKShyLCBbXSk7XHJcbiAgICAgICAgaWYgKG4ubGVuZ3RoID4gMCkgdHJ5IHtcclxuICAgICAgICAgIHRoaXMudG9rZW4gfHwgKHRoaXMudG9rZW4gPSBhd2FpdCAoMCwgaS5nZXRTaXRlVG9rZW4pKCkpO1xyXG4gICAgICAgICAgbGV0IHQgPSB0aGlzLmNhcHR1cmVGYWxjb25SZXNwb25zZVJ1bigpLFxyXG4gICAgICAgICAgICBhID0gYXdhaXQgKDAsIGkuZ2V0RWxlbWVudFJ1bGVzKShuLCB5LCB0aGlzLnRva2VuLCBlLCB0aGlzLnJlc3VtZUluZm8uaWQsIHRoaXNcclxuICAgICAgICAgICAgICAucmVzdW1lSW5mby50YWlsb3JJZCk7XHJcbiAgICAgICAgICB0aGlzLnJlY29yZEZhbGNvblJlc3BvbnNlKGEsIHQpO1xyXG4gICAgICAgICAgbGV0IGwgPSAoMCwgYy5mb3JtYXRBbnN3ZXIpKGEpO1xyXG4gICAgICAgICAgKDAsIG8uY2hlY2twb2ludCkoKTtcclxuICAgICAgICAgIGxldCBzID0gKDAsIGkuZ2V0UmVndWxhck9wZXJhdGlvbnMpKHIsIGwucmVndWxhciwgdGhpcy5vcGVyYXRpb25Db25maWcpO1xyXG4gICAgICAgICAgZm9yIChsZXQgZSBvZiBzKSB0aGlzLnRhc2tRdWV1ZS5hZGQoZSk7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgaS5IVFRQRXJyb3IgfHwgZSBpbnN0YW5jZW9mIGkuUmVzdW1lTWlzc2luZ0NvZGVFcnJvcikgcmV0dXJuICgwLCBzXHJcbiAgICAgICAgICAgIC5zZW5kSHR0cFN0YXR1c01lc3NhZ2UpKGUubWVzc2FnZSksIGUubWVzc2FnZTtcclxuICAgICAgICAgIHRocm93IGVcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiB2KSB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhlLmxhYmVsKTtcclxuICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICBcIltBcHBsZV1bQ291bnRyeV0gZGVmZXJyZWQgYWRkcmVzcyBydWxlcyBza2lwcGVkOiBkZXBlbmRlbnQgc3RhdGUgcmVtYWlucyB1bnZlcmlmaWVkXCJcclxuICAgICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGogPSAoMCwgdS5pc0FwcGxlQ292ZXJMZXR0ZXJTdGVwKSgpID8gKDAsIHUuZ2V0QXBwbGVDb3ZlckxldHRlclN0YXR1cykoKSA6IFwiXCI7XHJcbiAgICBpZiAoXCJyZXF1aXJlZFwiID09PSBqICYmICh0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzKHtcclxuICAgICAgICAgIGxhYmVsOiBcIkNvdmVyIExldHRlclwiLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6ICEwLFxyXG4gICAgICAgICAgdHlwZTogXCJmaWxlXCJcclxuICAgICAgICB9KSwgdGhpcy5jb3ZlckxldHRlcj8uY292ZXJMZXR0ZXJJZCAmJiB0aGlzLmNvdmVyTGV0dGVyPy5jb3ZlckxldHRlck5hbWUgPyB0aGlzXHJcbiAgICAgICAgLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IGUgPSBhd2FpdCAoMCwgdS51cGxvYWRDb3ZlckxldHRlcikodGhpcy5jb3ZlckxldHRlciwgdGhpcy5wcm9ncmVzc1RyYWNrZXJcclxuICAgICAgICAgICAgLnVwZGF0ZUZpZWxkUmVxdWlyZWRTdGF0dXMsIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKTtcclxuICAgICAgICAgIGUgfHwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJDb3ZlciBMZXR0ZXJcIilcclxuICAgICAgICB9KSA6IHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiQ292ZXIgTGV0dGVyXCIpKSwgci5pbmNsdWRlcyhcclxuICAgICAgICBcInNlbGYtZGlzY2xvc3VyZVwiKSkge1xyXG4gICAgICBsZXQgdCA9IGF3YWl0ICgwLCB1Lm9wZW5EaXNhYmlsaXR5TW9kYWwpKCk7XHJcbiAgICAgIGlmICh0KSB7XHJcbiAgICAgICAgbGV0IHQgPSBhd2FpdCAoMCwgZi5nZXREaXNhYmlsaXR5TW9kYWxSdWxlcykoKTtcclxuICAgICAgICBpZiAodC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBsZXQgcjtcclxuICAgICAgICAgIHQuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmllbGRSZXF1aXJlZFN0YXR1cyh7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IGUubGFiZWwsXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IGUucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgb3B0aW9uczogZS5vcHRpb25zLFxyXG4gICAgICAgICAgICAgIHR5cGU6IGUudHlwZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBsZXQgbiA9ICgwLCBhLmZpbHRlclJ1bGVzQnlMYWJlbCkodCwgW10pO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHQgPSB0aGlzLmNhcHR1cmVGYWxjb25SZXNwb25zZVJ1bigpLFxyXG4gICAgICAgICAgICAgIG8gPSBhd2FpdCAoMCwgaS5nZXRFbGVtZW50UnVsZXMpKG4sIHksIHRoaXMudG9rZW4sIGUsIHRoaXMucmVzdW1lSW5mby5pZCwgdGhpc1xyXG4gICAgICAgICAgICAgICAgLnJlc3VtZUluZm8udGFpbG9ySWQpO1xyXG4gICAgICAgICAgICB0aGlzLnJlY29yZEZhbGNvblJlc3BvbnNlKG8sIHQpLCByID0gKDAsIGMuZm9ybWF0QW5zd2VyKShvKVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIGkuSFRUUEVycm9yIHx8IGUgaW5zdGFuY2VvZiBpLlJlc3VtZU1pc3NpbmdDb2RlRXJyb3IpIHJldHVybiAoMCwgc1xyXG4gICAgICAgICAgICAgIC5zZW5kSHR0cFN0YXR1c01lc3NhZ2UpKGUubWVzc2FnZSksIGUubWVzc2FnZTtcclxuICAgICAgICAgICAgdGhyb3cgZVxyXG4gICAgICAgICAgfSgwLCBvLmNoZWNrcG9pbnQpKCk7XHJcbiAgICAgICAgICBsZXQgbCA9ICgwLCBpLmdldFJlZ3VsYXJPcGVyYXRpb25zKSh0LCByLnJlZ3VsYXIsIHRoaXMub3BlcmF0aW9uQ29uZmlnKTtcclxuICAgICAgICAgIGZvciAobGV0IGUgb2YgbCkgdGhpcy50YXNrUXVldWUuYWRkKGUpO1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCk7XHJcbiAgICAgICAgICBsZXQgZCA9IGF3YWl0ICgwLCB1LnN1Ym1pdERpc2FiaWxpdHlNb2RhbCkoKTtcclxuICAgICAgICAgIGQgfHwgY29uc29sZS53YXJuKFwiW0FwcGxlXSBEaXNhYmlsaXR5IG1vZGFsIHN1Ym1pdCBkaWQgbm90IGNvbXBsZXRlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhd2FpdCAoMCwgZy5kZWxheSkoNTAwKSwgYXdhaXQgKDAsIHUuYmx1clBhZ2UpKCksIHRoaXMudGFza1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0ICgwLCB1LmZpbGxBZ3JlZW1lbnRDaGVja2JveCkoKVxyXG4gICAgfSksIGF3YWl0IHRoaXMudGFza1F1ZXVlLnJ1bigpO1xyXG4gICAgbGV0IEQgPSAoMCwgZi5nZXRGb3JtU25hcHNob3QpKCksXHJcbiAgICAgIFAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcGx5LXN0ZXAtY29udGludWUtYnV0dG9uXCIpO1xyXG4gICAgcmV0dXJuIFAgJiYgKHRoaXMuY29udGludWVCdXR0b25IYW5kbGVyICYmIFAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXNcclxuICAgICAgICAuY29udGludWVCdXR0b25IYW5kbGVyKSwgdGhpcy5jb250aW51ZUJ1dHRvbkhhbmRsZXIgPSAoMCwgdS5zdWJtaXRIYW5kbGVyKS5iaW5kKG51bGwsXHJcbiAgICAgICAgRCksIFAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY29udGludWVCdXR0b25IYW5kbGVyKSksICgwLCBzLnBvc3RTdGF0dXMpKFxyXG4gICAgICAgIFwiZmlsbGluZ1wiLCB0aGlzLnByb2dyZXNzVHJhY2tlci5maWVsZFN0YXR1cywgdGhpcy50aW1lVHJhY2UpLCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAuZ2VuZXJhdGVGaW5hbFByb2dyZXNzKClcclxuICB9XHJcbiAgc3VibWl0QXBwbGljYXRpb24oKSB7fVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGUuMjQxMTViOTAuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);