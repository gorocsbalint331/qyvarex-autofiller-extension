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
})({"lfa4s":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\paylocity\\operations.js",
    "bundleId": "38ff3001937b9685",
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
var j = z(require("321163e31751ec69"));
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

},{"321163e31751ec69":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"3cphy":[function(require,module,exports) {
/**
 * Parcel module id: bmU1E
 * Resolved path: src/contents/sites/paylocity/operations.js
 * Dependencies:
 *   ./date -> lockZ  =>  src/contents/sites/paylocity/date.js
 *   ./rules -> 5BvUQ  =>  src/contents/sites/paylocity/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~contents/crawler/utils/input -> iPIvT  =>  src/contents/crawler/utils/input.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~contents/sites/autofill-answer-pair-tracking -> aCElZ  =>  src/contents/sites/autofill-answer-pair-tracking.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/profile -> 9omPD  =>  src/store/profile.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "dispatchClickSequence", ()=>b), n.export(r, "dispatchMousedown", ()=>y), n.export(r, "PAYLOCITY_PERSONAL_ADDRESS_SETTLE_DELAY_MS", ()=>w), n.export(r, "isPaylocityPersonalStateControlId", ()=>C), n.export(r, "isPaylocityPersonalAddressInput", ()=>A), n.export(r, "getPaylocityPersonalAddressInputMode", ()=>k), n.export(r, "fillPaylocityPersonalStateField", ()=>M), n.export(r, "getPaylocityMissingPersonalAddressRules", ()=>N), n.export(r, "reconcilePaylocityPersonalAddress", ()=>$), n.export(r, "isPaylocityPersonalAddressRule", ()=>B), n.export(r, "orderPaylocityPersonalAddressRules", ()=>q), n.export(r, "createPaylocitySingleFlight", ()=>U), n.export(r, "waitForPaylocityPersonalAddressQuiet", ()=>H), n.export(r, "fillPaylocityPersonalAddressField", ()=>X), n.export(r, "hasPaylocityCoverLetterSlot", ()=>eo), n.export(r, "hasPaylocityCoverLetterUploadCapability", ()=>ei), n.export(r, "hasUploadedPaylocityCoverLetter", ()=>ea), n.export(r, "getPaylocityCoverLetterStatus", ()=>el), n.export(r, "normalizePaylocityCountry", ()=>eu), n.export(r, "fillCountry", ()=>eD), n.export(r, "fillListboxSelectButtonField", ()=>eR), n.export(r, "fillPaylocityEducationDegreeObtained", ()=>eO), n.export(r, "fillPaylocityEducationGraduationDate", ()=>eM), n.export(r, "fillSearchBoxInputField", ()=>eN), n.export(r, "fillListboxButtonField", ()=>e$), n.export(r, "uploadResume", ()=>eB), n.export(r, "uploadCoverLetter", ()=>eq), n.export(r, "fillSkills", ()=>eQ), n.export(r, "preclickAddButtons", ()=>eZ), n.export(r, "expandFormFromProfile", ()=>e7), n.export(r, "expandForm", ()=>te), n.export(r, "blurPage", ()=>tr), n.export(r, "fillAvailableToStartField", ()=>to), n.export(r, "fillPaylocityDateField", ()=>ti), n.export(r, "isLoadingCleared", ()=>ta), n.export(r, "waitPageClean", ()=>tl), n.export(r, "submitHandler", ()=>ts);
var o = e("dayjs"), i = n.interopDefault(o), a = e("~contents/crawler/utils/input"), l = e("~contents/methods/answer"), s = e("~contents/methods/dom"), u = e("~contents/methods/observer"), c = e("~contents/sites/autofill-answer-pair-tracking"), d = e("~core/xpath"), f = e("~store/url"), p = e("~utils/delay"), m = e("./rules"), h = e("~store/profile"), g = e("./date");
async function b(e1, t = 30, r1 = 100) {
    e1.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0,
        view: window
    })), await (0, p.delay)(t), e1.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0,
        cancelable: !0,
        view: window
    })), await (0, p.delay)(t), e1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
    })), await (0, p.delay)(r1);
}
async function y(e1, t = 100) {
    e1.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0,
        view: window
    })), await (0, p.delay)(t);
}
let v = async (e1, t, r1 = 10, n = 100)=>{
    let o = e1.querySelector(t), i = 0;
    for(; !o && i < r1;)await (0, p.delay)(n), o = e1.querySelector(t), i++;
    return o;
}, w = 100, S = [
    "public-site-address-address-1",
    "public-site-address-address-2",
    "public-site-address-city",
    "public-site-address-county",
    "public-site-address-us-state-select-wrapper",
    "public-site-address-us-state",
    "public-site-address-zip"
], E = new Set([
    "public-site-address-address-1",
    "public-site-address-address-2",
    "public-site-address-city",
    "public-site-address-county",
    "public-site-address-zip"
]), x = new Set([
    "public-site-address-us-state-select-wrapper",
    "public-site-address-us-state"
]);
function C(e1) {
    return x.has(e1);
}
_c = C;
function A(e1) {
    return !!e1 && E.has(e1.id);
}
_c1 = A;
function k(e1) {
    return "list" === e1.getAttribute("aria-autocomplete") ? "list" : "text";
}
function T(e1) {
    let t = e1?.$input;
    return t && (t.id || t.querySelector("input")?.id) || "";
}
_c2 = T;
let F = {
    "public-site-address-address-1": [
        "Address Line 1",
        "Address 1"
    ],
    "public-site-address-address-2": [
        "Address Line 2",
        "Address 2"
    ],
    "public-site-address-city": [
        "City",
        "Locality"
    ],
    "public-site-address-county": [
        "County"
    ],
    "public-site-address-us-state-select-wrapper": [
        "State",
        "Administrative Area",
        "Province"
    ],
    "public-site-address-us-state": [
        "State",
        "Administrative Area",
        "Province"
    ],
    "public-site-address-zip": [
        "Zip Code",
        "Zip",
        "Postal Code",
        "Postal"
    ]
};
function I(e1, t) {
    let r1 = T(e1), n = [
        e1.label,
        ...F[r1] ?? []
    ];
    for (let e1 of n){
        let r1 = Object.keys(t).find((t)=>(0, l.isMatched)(e1, t));
        if (!r1) continue;
        let n = t[r1];
        if (Array.isArray(n)) {
            let e1 = n.find((e1)=>String(e1 ?? "").trim());
            if (void 0 !== e1) return e1;
            continue;
        }
        if (String(n ?? "").trim()) return n;
    }
}
_c3 = I;
function j(e1) {
    let t = T(e1), r1 = t && "undefined" != typeof document ? document.getElementById(t) : null;
    return r1 ? {
        ...e1,
        $input: r1
    } : e1.$input && !1 !== e1.$input.isConnected ? e1 : null;
}
function D(e1) {
    let t = e1.$input;
    return t ? t instanceof HTMLInputElement ? t.value.trim() : eL(t).value.trim() : "";
}
_c4 = D;
function P(e1, t) {
    let r1 = t.trim();
    if (!r1) return !0;
    let n = T(e1);
    return C(n) && /^(select|choose|please select|--)/i.test(r1);
}
_c5 = P;
function _(e1) {
    if ("undefined" == typeof document) return null;
    let t = document.getElementById(e1);
    return t ? e1.endsWith("-select-wrapper") ? t : t.closest('[id*="-select-wrapper"]') || t : null;
}
function L(e1) {
    if ("undefined" == typeof document) return null;
    let t = e1.querySelector("input, button"), r1 = e1.getAttribute("aria-controls") || e1.getAttribute("aria-owns") || t?.getAttribute("aria-controls") || t?.getAttribute("aria-owns");
    return r1 ? document.getElementById(r1) : null;
}
_c6 = L;
function R(e1) {
    let t = Array.from(e1.querySelectorAll("div[title]"));
    return t.length > 0 ? t : Array.from(e1.querySelectorAll("li[role='option'], li, div[role='option']"));
}
_c7 = R;
async function O(e1) {
    if (e1()) return !0;
    let t = document.querySelector('[data-automation-id="public-site-address"]');
    if (!t) return !1;
    let r1 = Date.now() + 1500;
    for(; Date.now() < r1;)if (await H(t, {
        quietMs: 100,
        timeoutMs: Math.min(500, r1 - Date.now())
    }), e1()) return !0;
    return !1;
}
_c8 = O;
async function M(e1, t, r1 = {}) {
    if (!C(e1)) return !1;
    let n = t.map((e1)=>String(e1).trim()).filter(Boolean);
    if (0 === n.length) return !1;
    let o = r1.findLiveControl ?? _, i = r1.getOwnedListbox ?? L, a = r1.getOptions ?? R, l = r1.readCommittedValue ?? ((e1)=>eL(e1).value), s = r1.waitForReady ?? O, u = r1.waitForCommitted ?? O, c = r1.openControl ?? (async (e1)=>{
        let t = e1.querySelector("input, button") || e1;
        await b(t, 50, 0);
    }), d = r1.clickOption ?? (async (e1)=>{
        e1.scrollIntoView({
            block: "center"
        }), await b(e1, 50, 0);
    }), f = o(e1);
    if (!f) return !1;
    if (e_(l(f), n)) return !0;
    await c(f);
    let p = ()=>{
        let t = o(e1);
        if (!t) return null;
        let r1 = i(t);
        if (!r1) return null;
        let l = a(r1).filter((e1)=>e_(e1.getAttribute?.("title")?.trim() || e1.textContent?.trim() || "", n));
        return 1 === l.length ? l[0] : null;
    }, m = await s(()=>!!p()), h = m ? p() : null;
    if (!h) return console.warn("[Paylocity][PersonalAddress][State] fill failed", {
        controlId: e1,
        reason: "owned_option_not_ready"
    }), !1;
    await d(h);
    let g = await u(()=>{
        let t = o(e1);
        return !!(t && e_(l(t), n));
    });
    return console.info("[Paylocity][PersonalAddress][State] committed readback", {
        controlId: e1,
        committed: g
    }), g;
}
_c9 = M;
function N(e1, t, r1 = {}) {
    let n = r1.getAnswerValue ?? I, o = r1.readLiveValue ?? D, i = r1.getLiveRule ?? j;
    return q(e1.filter(B)).filter((e1)=>{
        let r1 = i(e1);
        if (!r1) return !1;
        let a = n(r1, t);
        return "" !== String(a ?? "").trim() && P(r1, o(r1));
    });
}
_c10 = N;
async function $(e1) {
    let t = e1.getLiveRule ?? j, r1 = e1.readLiveValue ?? D, n = {
        getAnswerValue: e1.getAnswerValue,
        getLiveRule: t,
        readLiveValue: r1
    }, o = [], i = [], a = async (n)=>{
        let a = t(n);
        if (!a) return !1;
        let l = T(a), s = e1.getAnswerValue ?? I, u = s(a, e1.record);
        o.push(l), await e1.fillRule(a, u);
        let c = t(n), d = !!(c && !P(c, r1(c)));
        return d && i.push(l), d;
    }, l = N(e1.rules, e1.record, n).find((e1)=>"public-site-address-address-1" === T(e1));
    if (l) {
        let r1 = t(l), n = !!r1?.$input && "list" === k(r1.$input), o = await a(l);
        o && n && await e1.waitForQuiet();
    }
    let s = new Set(o);
    for(let t = 0; t < e1.rules.length; t++){
        let t = N(e1.rules, e1.record, n).find((e1)=>{
            let t = T(e1);
            return "public-site-address-address-1" !== t && !s.has(t);
        });
        if (!t) break;
        let r1 = T(t);
        s.add(r1), await a(t);
    }
    let u = N(e1.rules, e1.record, n).map(T);
    return {
        attemptedControlIds: o,
        filledControlIds: i,
        missingControlIds: u
    };
}
function B(e1) {
    let t = T(e1);
    return S.includes(t);
}
_c11 = B;
function q(e1) {
    return e1.map((e1, t)=>({
            rule: e1,
            originalIndex: t
        })).sort((e1, t)=>{
        let r1 = S.indexOf(T(e1.rule)), n = S.indexOf(T(t.rule)), o = -1 === r1 ? Number.MAX_SAFE_INTEGER : r1, i = -1 === n ? Number.MAX_SAFE_INTEGER : n;
        return o - i || e1.originalIndex - t.originalIndex;
    }).map(({ rule: e1 })=>e1);
}
function U(e1) {
    let t = null;
    return (...r1)=>{
        if (t) return console.info("[Paylocity] coalesced duplicate Autofill start"), t;
        let n = e1(...r1);
        t = n;
        let o = ()=>{
            t === n && (t = null);
        };
        return n.then(o, o), n;
    };
}
_c12 = U;
function H(e1, t = {}) {
    let r1 = t.quietMs ?? 150, n = t.timeoutMs ?? 1500, o = t.observe ?? ((e1, t)=>{
        if ("function" != typeof MutationObserver) return ()=>{};
        let r1 = new MutationObserver(t);
        return r1.observe(e1, {
            attributes: !0,
            childList: !0,
            subtree: !0
        }), ()=>r1.disconnect();
    });
    return new Promise((t)=>{
        let i, a, l = !1, s = ()=>{}, u = (e1)=>{
            l || (l = !0, clearTimeout(i), clearTimeout(a), s(), t(e1));
        }, c = ()=>{
            clearTimeout(i), i = setTimeout(()=>u(!0), r1);
        };
        s = o(e1, c), a = setTimeout(()=>u(!1), n), c();
    });
}
_c13 = H;
function Y(e1) {
    return e1.normalize("NFKD").replace(/\p{M}+/gu, "").replace(/[^\p{L}\p{N}]+/gu, " ").trim().replace(/\s+/g, " ").toLowerCase();
}
_c14 = Y;
function z(e1, t) {
    let r1 = Y(G(e1)), n = Y(t);
    return r1 === n || r1.startsWith(`${n} `);
}
function V(e1) {
    let t = document.getElementById(e1);
    return t instanceof HTMLInputElement && !1 !== t.isConnected ? t : null;
}
_c15 = V;
function W(e1) {
    let t = e1.getAttribute("aria-controls"), r1 = t ? document.getElementById(t) : null;
    return r1 ? Array.from(r1.querySelectorAll('[role="option"], li, .pcty-input-select__option')) : [];
}
_c16 = W;
function G(e1) {
    return e1.getAttribute("title")?.trim() || e1.textContent?.trim() || "";
}
_c17 = G;
function K(e1, t) {
    e1.focus();
    let r1 = Object.getPrototypeOf(e1), n = Object.getOwnPropertyDescriptor(r1, "value")?.set, o = e1.value;
    n ? n.call(e1, t) : e1.value = t;
    let i = e1._valueTracker;
    i?.setValue?.(o), e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        cancelable: !0
    }));
}
_c18 = K;
async function X(e1, t, r1 = {}) {
    if (!A(e1) || !t.trim()) return !1;
    let n = r1.findLiveInput ?? V, o = r1.wait ?? p.delay, i = t.trim(), l = n(e1.id);
    if (!l) return !1;
    let s = k(l);
    if (console.info("[Paylocity][PersonalAddress] fill start", {
        controlId: l.id,
        mode: s,
        valueLength: i.length
    }), "text" === s) {
        let t = r1.writeText ?? a.fillDefaultInputField;
        await t(l, i), await o(w);
        let u = n(e1.id), c = u?.value.trim() === i;
        return console.info("[Paylocity][PersonalAddress] fill readback", {
            controlId: e1.id,
            mode: s,
            committed: c
        }), c;
    }
    let u = r1.writeAutocompleteQuery ?? (async (e1, t)=>{
        K(e1, t);
    });
    await u(l, i), await o(w);
    let c = n(e1.id);
    if (!c || "list" !== k(c)) return console.warn("[Paylocity][PersonalAddress] fill failed", {
        controlId: e1.id,
        mode: s,
        reason: "autocomplete_input_replaced"
    }), !1;
    let d = r1.getAutocompleteOptions ?? W, f = d(c).filter((e1)=>z(e1, i));
    if (1 !== f.length) return console.warn("[Paylocity][PersonalAddress] fill failed", {
        controlId: e1.id,
        mode: s,
        reason: "no_unique_exact_option",
        optionCount: f.length
    }), !1;
    let m = r1.clickAutocompleteOption ?? (async (e1)=>{
        await b(e1, 0, 0);
    });
    await m(f[0]), await o(w);
    let h = n(e1.id), g = h?.value.trim() === i;
    return console.info("[Paylocity][PersonalAddress] fill readback", {
        controlId: e1.id,
        mode: s,
        committed: g
    }), g;
}
_c19 = X;
function J(e1) {
    let t = Array.from(document.querySelectorAll("label")), r1 = t.find((t)=>e1(t.textContent?.trim().toLowerCase() || ""));
    return r1?.closest(".section-wrapper");
}
_c20 = J;
function Q() {
    let e1 = J((e1)=>e1.includes("cover letter")) || document.getElementById("btn-coverLetter")?.closest(".section-wrapper"), t = e1?.querySelector('input[type="file"]#btn-coverLetter') || document.querySelector('input[type="file"]#btn-coverLetter'), r1 = e1?.querySelector('button[data-automation-id="btn-coverLetter"]') || document.querySelector('button[data-automation-id="btn-coverLetter"]'), n = e1?.querySelector("tbody tr td span.color-blue") || null, o = (e1?.querySelector("a.button.secondary.icon, button.button.secondary.icon") ?? e1?.querySelector('[aria-label="Remove File"]')?.closest("a,button")) || null;
    return {
        section: e1,
        input: t,
        triggerButton: r1,
        uploadedFileName: n,
        removeButton: o
    };
}
_c21 = Q;
function Z() {
    let e1 = J((e1)=>e1.includes("resume") || e1.includes("curriculum vitae") || e1.includes("cv")), t = er(e1) && e1?.querySelector('input[type="file"]') || null;
    if (t) return t;
    let r1 = document.getElementById("forceUploadResumeModal");
    if (er(r1)) {
        let e1 = r1.querySelector('input[type="file"]#btn-forceResume, input[type="file"][id*="resume" i]');
        if (e1) return e1;
    }
    let n = Array.from(document.querySelectorAll('input[type="file"]#btn-resume, input[type="file"][id*="resume" i]')).find(ee);
    return n || Array.from(document.querySelectorAll('input[type="file"]:not(#btn-coverLetter)')).find((e1)=>ee(e1) && et(e1)) || null;
}
_c22 = Z;
function ee(e1) {
    let t = e1.closest(".section-wrapper, #forceUploadResumeModal, .modal");
    return t ? er(t) : en(e1);
}
function et(e1) {
    let t = e1.closest(".section-wrapper, #forceUploadResumeModal, .modal"), r1 = [
        e1.id,
        e1.name,
        e1.getAttribute("data-automation-id"),
        t?.textContent
    ].filter(Boolean).join(" ").toLowerCase();
    return r1.includes("resume") || r1.includes("curriculum vitae") || /\bcv\b/.test(r1);
}
function er(e1) {
    return en(e1);
}
function en(e1) {
    if (!e1 || e1.hasAttribute("hidden") || "true" === e1.getAttribute("aria-hidden")) return !1;
    let t = e1.ownerDocument?.defaultView || ("undefined" != typeof window ? window : null), r1 = t?.getComputedStyle?.(e1);
    return (!r1 || "none" !== r1.display && "hidden" !== r1.visibility && "0" !== r1.opacity) && ("function" != typeof e1.getClientRects || e1.getClientRects().length > 0);
}
function eo() {
    let { section: e1, input: t, triggerButton: r1 } = Q();
    return !!e1 && !!t && !!r1;
}
function ei() {
    let e1 = Q();
    if (!e1.section || !e1.input || !e1.triggerButton) return !1;
    let t = !!e1.uploadedFileName?.textContent?.trim();
    return !t || !!e1.removeButton;
}
function ea() {
    let { uploadedFileName: e1, removeButton: t } = Q();
    return !!e1?.textContent?.trim() && !!t;
}
async function el() {
    return await tl(), await (0, u.waitForCondition)(()=>ei(), {
        timeout: 5e3,
        interval: 100,
        observeTarget: document.body
    }), ei() ? "required" : "";
}
async function es() {
    let { section: e1, uploadedFileName: t, removeButton: r1 } = Q();
    return !t?.textContent?.trim() || !!r1 && (await b(r1), await (0, u.waitForCondition)(()=>{
        let e1 = Q();
        return !e1.uploadedFileName?.textContent?.trim() && !e1.triggerButton?.disabled;
    }, {
        timeout: 4e3,
        interval: 100,
        observeTarget: e1 || document.body
    }));
}
function eu(e1) {
    if ("string" == typeof e1) {
        let t = e1.trim(), r1 = t.toLowerCase();
        return "ca" === r1 || "canada" === r1 ? "Canada" : "us" === r1 || "usa" === r1 || "united states" === r1 || "united states of america" === r1 ? "United States" : "uk" === r1 || "gb" === r1 || "gbr" === r1 || "great britain" === r1 || "united kingdom" === r1 ? "United Kingdom" : t;
    }
    return "";
}
function ec(e1) {
    let t = eu(e1);
    return "Canada" === t ? [
        "Canada",
        "CANADA"
    ] : "United States" === t ? [
        "United States",
        "United States of America",
        "USA",
        "UNITED STATES"
    ] : t ? [
        t
    ] : [];
}
function ed() {
    let e1 = document.getElementById("public-site-address-country-select-wrapper");
    if (e1) return e1;
    let t = document.getElementById("public-site-address-country"), r1 = t?.closest('[id*="-select-wrapper"], .pcty-input-select-full-container, [role="combobox"]');
    return r1 || document.querySelector('[id*="address-country"][id*="-select-wrapper"], [data-automation-id*="country"][id*="-select-wrapper"]');
}
let ef = 20, ep = 12, em = 50, eh = 2, eg = 2;
function eb(e1) {
    return e1.querySelector(".input-select-input-single-value")?.textContent?.trim() || "";
}
function ey(e1) {
    return JSON.stringify(e1);
}
async function ev(e1, t) {
    let r1 = Object.getPrototypeOf(e1), n = Object.getOwnPropertyDescriptor(r1, "value")?.set, o = (t, r1)=>{
        n ? n.call(e1, t) : e1.value = t;
        let o = e1._valueTracker;
        o?.setValue?.(r1);
    };
    o("", e1.value), e1.dispatchEvent("function" == typeof InputEvent ? new InputEvent("input", {
        bubbles: !0,
        inputType: "deleteContentBackward",
        data: null
    }) : new Event("input", {
        bubbles: !0
    }));
    let i = "";
    for (let r1 of t){
        e1.dispatchEvent("function" == typeof KeyboardEvent ? new KeyboardEvent("keydown", {
            key: r1,
            bubbles: !0,
            cancelable: !0
        }) : new Event("keydown", {
            bubbles: !0,
            cancelable: !0
        })), "function" == typeof InputEvent && e1.dispatchEvent(new InputEvent("beforeinput", {
            data: r1,
            inputType: "insertText",
            bubbles: !0,
            cancelable: !0
        }));
        let t = `${i}${r1}`;
        o(t, i), e1.dispatchEvent("function" == typeof InputEvent ? new InputEvent("input", {
            data: r1,
            inputType: "insertText",
            bubbles: !0
        }) : new Event("input", {
            bubbles: !0
        })), e1.dispatchEvent("function" == typeof KeyboardEvent ? new KeyboardEvent("keyup", {
            key: r1,
            bubbles: !0,
            cancelable: !0
        }) : new Event("keyup", {
            bubbles: !0,
            cancelable: !0
        })), i = t, await (0, p.delay)(10);
    }
    e1.dispatchEvent(new Event("change", {
        bubbles: !0
    }));
}
function ew(e1, t) {
    if ("true" !== e1.getAttribute("aria-expanded")) return null;
    let r1 = t.getAttribute("aria-controls") || t.getAttribute("aria-owns") || e1.getAttribute("aria-controls") || e1.getAttribute("aria-owns");
    if (r1) {
        let e1 = document.getElementById(r1);
        if (e1) return e1;
    }
    let n = (e1.id || t.id || "").replace(/\./g, "-").replace(/-select-wrapper$/, "");
    if (n) {
        let e1 = document.querySelector(`[id*="${n}"][id*="dropdown-list-container"]`);
        if (e1) return e1;
    }
    return null;
}
function eS(e1) {
    let t = ed() || e1, r1 = t.querySelector("input");
    return r1 && !1 !== r1.isConnected ? {
        control: t,
        input: r1,
        listbox: ew(t, r1)
    } : null;
}
async function eE(e1, t) {
    let r1 = "missing_search_input";
    for(let t = 0; t < eh; t++){
        let t = eS(e1);
        if (!t) {
            r1 = "missing_search_input", await (0, p.delay)(em);
            continue;
        }
        if (t.listbox) return t;
        "true" !== t.control.getAttribute("aria-expanded") && await b(t.input, 50, 100);
        for(let t = 0; t < ef; t++){
            let t = eS(e1);
            if (t) {
                if (t.listbox) return t;
                if ("true" !== t.control.getAttribute("aria-expanded")) {
                    r1 = "not_expanded";
                    break;
                }
                r1 = "missing_owned_listbox";
            } else r1 = "missing_search_input";
            await (0, p.delay)(em);
        }
    }
    return console.warn(`[Paylocity][Country] search unavailable phase=${t} reason=${r1}`), null;
}
function ex(e1) {
    let t = e1.querySelector(".pcty-input-select__menu-list") || e1, r1 = Array.from(t.querySelectorAll("div[title]"));
    return r1.length > 0 ? r1 : Array.from(t.querySelectorAll("li, [role='option'], .pcty-input-select__option"));
}
function eC(e1) {
    return e1.getAttribute("title")?.trim() || e1.textContent?.trim() || "";
}
function eA(e1, t) {
    let r1 = e1.filter((e1)=>e_(eC(e1), t));
    return 1 === r1.length ? r1[0] : null;
}
async function ek(e1) {
    let t = ed() || e1, r1 = t.querySelector("input");
    r1 && (await ev(r1, ""), "true" === t.getAttribute("aria-expanded") && await b(r1), r1.blur());
}
async function eT(e1, t) {
    let r1 = eb(e1);
    if (e_(r1, t)) return console.info(`[Paylocity][Country] already committed currentValue=${ey(r1)} candidateValues=${ey(t)}`), !0;
    let n = e1.querySelector("input");
    if (!n) return console.warn(`[Paylocity][Country] fill failed reason=missing_search_input currentValue=${ey(r1)} candidateValues=${ey(t)}`), !1;
    let o = await eE(e1, "initial");
    if (!o) return console.warn(`[Paylocity][Country] fill failed reason=search_unavailable phase=initial currentValue=${ey(r1)} candidateValues=${ey(t)}`), !1;
    (n = o.input).focus(), await ev(n, t[0]);
    let i = null, a = [], l = 0;
    for(let r1 = 0; r1 < ef; r1++){
        let r1 = eS(e1), o = !r1 || "true" !== r1.control.getAttribute("aria-expanded"), s = !!(r1 && r1.input !== n);
        if (o || s || !1 === n.isConnected) {
            if (l >= eg || (l++, console.info(`[Paylocity][Country] search recovery attempt=${l} reason=${o ? "not_expanded" : s ? "input_replaced" : "input_disconnected"}`), !(r1 = await eE(e1, "recovery")))) break;
            (n = r1.input).focus(), await ev(n, t[0]);
        }
        let u = r1?.listbox;
        if (u) {
            let e1 = ex(u);
            if (a = e1.map(eC).filter(Boolean).slice(0, 20), i = eA(e1, t)) break;
        }
        await (0, p.delay)(em);
    }
    if (!i) return console.warn(`[Paylocity][Country] fill failed reason=no_unique_exact_option searchTerm=${ey(t[0])} candidateValues=${ey(t)} mountedOptionValues=${ey(a)}`), await ek(e1), !1;
    i.scrollIntoView({
        block: "center"
    }), await b(i);
    let s = ed() || e1;
    s.querySelector("input")?.blur();
    for(let r1 = 0; r1 < ep; r1++){
        let r1 = ed() || e1;
        if (e_(eb(r1), t)) return console.info(`[Paylocity][Country] committed committedValue=${ey(eb(r1))} candidateValues=${ey(t)}`), !0;
        await (0, p.delay)(em);
    }
    return console.warn(`[Paylocity][Country] fill failed reason=commit_readback_mismatch committedValue=${ey(eb(ed() || e1))} candidateValues=${ey(t)}`), await ek(e1), !1;
}
async function eF(e1) {
    for(let t = 0; t < ep; t++){
        let t = ed() || e1;
        if (!eb(t)) return !0;
        await (0, p.delay)(em);
    }
    return !1;
}
async function eI(e1, t) {
    if (t) return await eT(e1, [
        t
    ]);
    await ek(e1);
    let r1 = ed() || e1;
    if (!eb(r1)) return !0;
    let n = r1.querySelector(".css-b40bim") || r1.querySelector("[aria-label='delete']")?.closest("[tabindex]");
    return !!n && (await b(n), await eF(r1));
}
async function ej(e1, t) {
    let r1 = eb(e1);
    if (await eT(e1, t)) return !0;
    let n = ed() || e1, o = eb(n), i = r1 ? e_(o, [
        r1
    ]) : !o;
    if (i) return await ek(n), !1;
    let a = await eI(n, r1);
    return a || console.warn("[Paylocity][Country] rollback failed", {
        reason: "not_restored"
    }), await ek(n), !1;
}
async function eD(e1) {
    let t = ec(e1);
    if (0 === t.length) return console.warn("[Paylocity][Country] fill skipped reason=empty_source_country"), !1;
    let r1 = ed();
    return r1 ? (console.info(`[Paylocity][Country] fill start sourceCountry=${ey(eu(e1))} candidateValues=${ey(t)} currentValue=${ey(eb(r1))}`), await ej(r1, t)) : (console.warn(`[Paylocity][Country] fill failed reason=missing_country_control sourceCountry=${ey(eu(e1))} candidateValues=${ey(t)}`), !1);
}
function eP(e1) {
    return String(e1 ?? "").normalize("NFKD").replace(/\p{M}+/gu, "").replace(/[^\p{L}\p{N}]+/gu, " ").replace(/\s+/g, " ").trim().toLowerCase();
}
function e_(e1, t) {
    let r1 = eP(e1);
    return "" !== r1 && t.some((e1)=>eP(e1) === r1);
}
function eL(e1) {
    let t = Array.from(e1.querySelectorAll(".input-select-input-single-value, .rw-input")).map((e1)=>e1.textContent?.trim() || "").find(Boolean);
    if (t) return {
        source: "display",
        value: t
    };
    let r1 = e1.querySelector("input")?.value?.trim();
    if (r1) return {
        source: "input",
        value: r1
    };
    let n = Array.from(e1.querySelectorAll("button[aria-label]")).map((e1)=>e1.getAttribute("aria-label")?.trim() || "").map((e1)=>e1.match(/^(.+?)\s+Dismiss$/i)?.[1]?.trim() || "").find(Boolean);
    return n ? {
        source: "tag",
        value: n
    } : {
        source: "none",
        value: ""
    };
}
async function eR(e1, t, r1 = !1) {
    if (!e1) return !1;
    let n = eL(e1), o = n.value, i = /^(select|choose|please select|--)/i.test(o) || "" === o;
    if (console.info("[Paylocity][Select] committed readback", {
        controlId: e1.id || "unknown",
        stage: "before_fill",
        source: n.source,
        hasCommittedValue: !!o,
        isPlaceholder: i
    }), !i && t.length > 0) {
        let e1 = String(t[0]).trim();
        if (r1 ? e_(o, t) : (0, l.isMatched)(o, e1)) return !0;
    }
    let a = e1.querySelector("input") || null, s = a || e1;
    await b(s, 50, 300);
    let u = null, c = e1.getAttribute("aria-controls");
    if (c && (u = document.getElementById(c)), !u) {
        let t = e1.getAttribute("aria-owns") || s.getAttribute("aria-owns");
        t && (u = document.getElementById(t));
    }
    if (!u) {
        let t = e1.id || s.id || "";
        if (t) {
            let e1 = t.replace(/\./g, "-").replace(/-select-wrapper$/, ""), r1 = `[id*="${e1}"][id*="dropdown-list-container"]`, n = document.querySelector(r1);
            n && null !== n.offsetParent && (u = n);
        }
    }
    if (!u) {
        let e1 = document.querySelectorAll(".rw-popup-container");
        e1.length > 0 && (u = e1[e1.length - 1]);
    }
    if (!u) return await b(s), !1;
    let d = u.querySelector(".pcty-input-select__menu-list") || u, f = [], m = d.querySelectorAll("div[title]");
    if (m.length > 0) f = Array.from(m);
    else {
        let t = e1.getAttribute("aria-owns");
        if (t) {
            let e1 = document.getElementById(t);
            e1 && (f = Array.from(e1.querySelectorAll("li")));
        }
        0 === f.length && (f = Array.from(d.querySelectorAll("ul li, div[role='option']")));
    }
    let h = f.map((e1)=>e1.getAttribute("title")?.trim() || e1.textContent?.trim() || ""), g = -1;
    if (t.length > 0) for (let e1 of t){
        let t = String(e1).trim();
        if (/^\d+$/.test(t)) {
            let e1 = Number(t);
            if (Number.isInteger(e1) && e1 >= 0 && e1 < h.length) {
                g = e1;
                break;
            }
        }
        if (-1 !== (g = h.findIndex((t)=>r1 ? e_(t, [
                e1
            ]) : (0, l.isMatched)(t, e1)))) break;
    }
    if (-1 === g) return await b(s), !1;
    {
        let n = f[g];
        n.scrollIntoView({
            block: "center"
        }), await (0, p.delay)(50), await b(n), await (0, p.delay)(100);
        let o = eL(e1), i = o.value, a = !!(i && (r1 ? e_(i, t) : t.some((e1)=>(0, l.isMatched)(i, e1))));
        return console.info("[Paylocity][Select] committed readback", {
            controlId: e1.id || "unknown",
            stage: "after_selection",
            source: o.source,
            hasCommittedValue: !!i,
            committed: a
        }), a;
    }
}
async function eO(e1, t) {
    if (!e1) return !1;
    let r1 = await v(e1, 'div[data-for*="Obtained"]');
    if (!r1) return !1;
    r1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
    })), await (0, p.delay)(100);
    let n = await v(e1, 'ul[id*="educationHistory.degreeId"]');
    if (!n) return !1;
    let o = Array.from(n.querySelectorAll("li"));
    if (0 === o.length) return !1;
    let i = (t ?? []).map((e1)=>String(e1).trim()).filter(Boolean), a = null;
    for (let e1 of i){
        let t = o.findIndex((t)=>(0, l.isMatched)(t.textContent?.trim() || "", e1));
        if (-1 !== t) {
            a = o[t];
            break;
        }
    }
    return !!a && (a.click(), await (0, p.delay)(100), !0);
}
async function eM(e1, t) {
    if (!e1) return !1;
    let r1 = await v(e1, 'input[id*="txt-educationHistory-graduationDate"]');
    return !!r1 && await ti(r1, t);
}
async function eN(e1, t, r1 = !1) {
    if (!e1 || !t || 0 === t.length) return;
    let n = t.map((e1)=>String(e1).trim()).filter(Boolean);
    for (let t of n){
        e1.focus(), await (0, p.delay)(50), e1.value = t, (0, s.triggerEvents)(e1, [
            "input",
            "change"
        ]), await (0, p.delay)(100);
        let n = document.querySelector('.rw-popup-container, [role="listbox"]');
        if (n) {
            let r1 = Array.from(n.querySelectorAll('li, [role="option"]')), o = r1.find((e1)=>(0, l.isMatched)(e1.textContent?.trim() || "", t));
            o ? await b(o) : (e1.dispatchEvent(new KeyboardEvent("keydown", {
                key: "Enter",
                keyCode: 13,
                bubbles: !0
            })), await (0, p.delay)(100));
        }
        if (!r1) break;
    }
    e1.blur(), await (0, p.delay)(100);
}
async function e$(e1, t) {
    if (!e1 || !t || 0 === t.length) return;
    e1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
    })), await (0, p.delay)(200);
    let r1 = document.querySelector('[role="listbox"]');
    if (!r1) return;
    let n = Array.from(r1.querySelectorAll('[role="option"]')), o = !1;
    for (let e1 of t){
        let t = n.find((t)=>(0, l.isMatched)(t.textContent?.trim() || "", e1));
        if (t) {
            await b(t), o = !0;
            break;
        }
    }
    await b(e1);
}
async function eB(e1, t, r1) {
    let n = Z();
    if (!n) return;
    let o = await (0, l.fetchPdfAsBlob)(e1);
    o && (await (0, s.uploadFiles)(n, o, t, r1), await (0, p.delay)(500));
}
async function eq(e1, t, r1) {
    let n = Q();
    if (!n.input || !n.triggerButton) return !1;
    let o = await es();
    if (!o) return !1;
    await (0, s.uploadFiles)(n.input, await (0, l.fetchCoverLetterPdfAsBlob)(e1), t, r1, "Cover Letter");
    let i = `${e1.coverLetterName}.pdf`.toLowerCase();
    return await (0, u.waitForCondition)(()=>{
        let e1 = Q(), t = e1.uploadedFileName?.textContent?.trim().toLowerCase() || "";
        return t.includes(i) || !!t && !!e1.removeButton;
    }, {
        timeout: 5e3,
        interval: 100,
        observeTarget: n.section || document.body
    });
}
let eU = 2, eH = 8, eY = 50;
function ez(e1) {
    return `${e1 ?? ""}`.trim().toLowerCase();
}
function eV() {
    return document.getElementById("info.skills");
}
function eW(e1) {
    return e1.closest(".react-tagsinput");
}
function eG(e1) {
    return Array.from(e1.querySelectorAll(".react-tagsinput-tag")).map((e1)=>{
        let t = e1.querySelector(".react-tagsinput-remove")?.textContent || "", r1 = e1.textContent || "";
        return t && r1.endsWith(t) ? r1.slice(0, -t.length).trim() : r1.trim();
    }).filter(Boolean);
}
function eK(e1, t) {
    let r1 = e1.ownerDocument?.defaultView?.HTMLInputElement?.prototype || ("undefined" != typeof HTMLInputElement ? HTMLInputElement.prototype : void 0), n = r1 ? Object.getOwnPropertyDescriptor(r1, "value")?.set : void 0, o = e1.value;
    n ? n.call(e1, t) : e1.value = t;
    let i = e1._valueTracker;
    i?.setValue?.(o);
}
function eX(e1, t) {
    e1.focus(), e1.dispatchEvent(new Event("focusin", {
        bubbles: !0,
        composed: !0
    })), eK(e1, t), e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        composed: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
    }));
    let r1 = {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        which: 13,
        bubbles: !0,
        cancelable: !0,
        composed: !0
    };
    for (let t of [
        "keydown",
        "keypress",
        "keyup"
    ])e1.dispatchEvent("function" == typeof KeyboardEvent ? new KeyboardEvent(t, r1) : new Event(t, {
        bubbles: !0,
        cancelable: !0
    }));
}
async function eJ(e1) {
    let t = ez(e1);
    for(let e1 = 0; e1 < eH; e1 += 1){
        let e1 = eV(), r1 = e1 ? eW(e1) : null;
        if (r1 && eG(r1).some((e1)=>ez(e1) === t)) return !0;
        await (0, p.delay)(eY);
    }
    return !1;
}
async function eQ(e1) {
    let t = Array.from(new Map((e1 ?? []).flatMap((e1)=>`${e1 ?? ""}`.split(",")).map((e1)=>e1.trim()).filter(Boolean).map((e1)=>[
            ez(e1),
            e1
        ])).values()), r1 = eV(), n = r1 ? eW(r1) : null;
    if (!r1 || !n) return console.warn("[Paylocity][Skills] fill failed", {
        reason: r1 ? "container_not_found" : "input_not_found",
        requestedCount: t.length
    }), !1;
    if (0 === t.length) return console.info("[Paylocity][Skills] fill skipped", {
        reason: "empty_skill_list"
    }), !1;
    console.info("[Paylocity][Skills] fill start", {
        requestedCount: t.length,
        existingCount: eG(n).length
    });
    let o = 0;
    for (let [e1, r1] of t.entries()){
        let n = eV(), i = n ? eW(n) : null, a = !!i && eG(i).some((e1)=>ez(e1) === ez(r1));
        if (a) {
            o += 1;
            continue;
        }
        let l = !1;
        for(let n = 1; n <= eU; n += 1){
            let i = eV(), a = i ? eW(i) : null;
            if (!i || !a) {
                console.warn("[Paylocity][Skills] item failed", {
                    reason: i ? "container_replaced" : "input_replaced",
                    itemIndex: e1,
                    requestedCount: t.length,
                    attempt: n
                });
                break;
            }
            if (a.click(), eX(i, r1), l = await eJ(r1)) {
                o += 1;
                break;
            }
            eK(i, ""), i.dispatchEvent(new Event("input", {
                bubbles: !0,
                composed: !0
            })), console.warn("[Paylocity][Skills] commit readback failed", {
                itemIndex: e1,
                requestedCount: t.length,
                attempt: n
            });
        }
    }
    let i = o === t.length;
    return console.info("[Paylocity][Skills] fill complete", {
        requestedCount: t.length,
        committedCount: o,
        missingCount: t.length - o,
        complete: i
    }), i;
}
async function eZ() {
    let e2 = (0, d.getFirstOrderedNodeSafe)("//div[contains(@class, 'section-wrapper')]//button[contains(@data-automation-id, 'AddWorkHistory')]"), t = e2?.closest(".section-wrapper"), r1 = (0, d.getFirstOrderedNodeSafe)("//div[contains(@class, 'section-wrapper')]//button[contains(@data-automation-id, 'AddEducation')]"), n = r1?.closest(".section-wrapper");
    if (t) {
        await e0(), await (0, p.delay)(100);
        let e1 = e8();
        0 === e1 ? (await e5(), await (0, p.delay)(150), e1 = e8(), await (0, u.waitForCondition)(ta, {
            timeout: 500,
            observeTarget: document.body
        })) : console.warn(`Failed to delete all employment sections, remaining: ${e1}`);
    }
    if (n) {
        let e2 = h.useProfileStore.getState().userProfile?.profile?.education?.length || 0;
        await e1(), await (0, p.delay)(100);
        let t = e9();
        0 === t && e2 > 0 ? (await e6(), await (0, p.delay)(150), t = e9(), await (0, u.waitForCondition)(ta, {
            timeout: 500,
            observeTarget: document.body
        })) : t > e2 && console.warn(`Failed to delete all education sections, remaining: ${t}`);
    }
}
async function e0() {
    await e3(e8, e2);
}
function e2() {
    return (0, d.getFirstOrderedNodeSafe)("//button[contains(@data-automation-id, 'btn-delete-workhistory') or contains(@data-automationid, 'btn-delete-workhistory') or contains(normalize-space(.), 'Delete This Work History') or contains(normalize-space(.), 'Delete This Employment History')]");
}
async function e1() {
    await e3(e9, e4);
}
async function e3(e1, t) {
    let r1 = e1(), n = t();
    for(; n && r1 > 0;){
        n.click(), await (0, u.waitForCondition)(()=>e1() < r1, {
            timeout: 1e3,
            observeTarget: document.body
        });
        let o = e1();
        if (o >= r1) break;
        r1 = o, n = t();
    }
}
function e4() {
    return (0, d.getFirstOrderedNodeSafe)("//button[contains(@data-automation-id, 'btn-delete-educationhistory') or contains(normalize-space(.), 'Delete This Education History')]");
}
async function e5() {
    let e1 = (0, d.getFirstOrderedNodeSafe)("//div[contains(@class, 'section-wrapper')]//button[contains(@data-automation-id, 'AddWorkHistory')]");
    e1 && (e1.click(), await (0, p.delay)(200));
}
async function e6() {
    let e1 = (0, d.getFirstOrderedNodeSafe)("//div[contains(@class, 'section-wrapper')]//button[contains(@data-automation-id, 'AddEducation')]");
    e1 && (e1.click(), await (0, p.delay)(200));
}
function e8() {
    return (0, d.getOrderedNodesSafe)("//div[contains(@class, 'work-history-group')]").length;
}
function e9() {
    return (0, d.getOrderedNodesSafe)("//div[contains(@class, 'education-history-group')]").length;
}
async function e7(e1 = {}) {
    let { expandEducation: t = !0, expandEmployment: r1 = !0 } = e1, n = h.useProfileStore.getState().userProfile?.profile;
    n && (await tt({
        getCurrentCount: e9,
        getTargetCount: ()=>n.education?.length || 0,
        addSection: e6,
        enabled: t,
        settleDelay: 150,
        waitTimeout: 500
    }), await tt({
        getCurrentCount: e8,
        getTargetCount: ()=>n.workExperience?.length || 0,
        addSection: e5,
        enabled: r1,
        settleDelay: 150,
        waitTimeout: 500
    }));
}
async function te(e1) {
    await tt({
        getCurrentCount: e9,
        getTargetCount: ()=>e1.education?.length || 0,
        addSection: e6,
        settleDelay: 200,
        waitTimeout: 1500
    }), await tt({
        getCurrentCount: e8,
        getTargetCount: ()=>e1.workExperience?.length || 0,
        addSection: e5,
        settleDelay: 200,
        waitTimeout: 1500
    });
}
async function tt({ getCurrentCount: e1, getTargetCount: t, addSection: r1, enabled: n = !0, settleDelay: o, waitTimeout: i }) {
    if (!n) return;
    let a = t(), l = e1();
    for(; l < a;){
        await r1(), await (0, p.delay)(o), await (0, u.waitForCondition)(ta, {
            timeout: i,
            observeTarget: document.body
        }), await (0, p.delay)(100);
        let t = e1();
        if (t === l) break;
        l = t;
    }
}
async function tr() {
    let e1 = document.querySelector("main") || document.body;
    e1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        view: window
    })), await (0, p.delay)(100);
}
async function tn(e1, t, r1 = "") {
    let n = r1;
    for(let r1 = 0; r1 < t.length; r1++){
        let o = t[r1], i = o.charCodeAt(0);
        e1.dispatchEvent(new KeyboardEvent("keydown", {
            key: o,
            keyCode: i,
            code: `Digit${o}`,
            bubbles: !0,
            cancelable: !0
        })), n += o, e1.value = n, e1.dispatchEvent(new KeyboardEvent("keyup", {
            key: o,
            keyCode: i,
            code: `Digit${o}`,
            bubbles: !0,
            cancelable: !0
        })), await (0, p.delay)(200);
    }
}
async function to(e1, t) {
    if (!e1) return;
    let r1 = (0, i.default)(t);
    if (!r1.isValid()) return;
    let n = r1.format("YYYY-MM-DD");
    e1.click(), await (0, p.delay)(200), e1.focus(), await (0, p.delay)(200), e1.value = "", e1.select(), await (0, p.delay)(200), await tn(e1, n, ""), (0, s.triggerEvents)(e1, [
        "change"
    ]), await (0, p.delay)(200), e1.blur(), await (0, p.delay)(200), await tr();
}
async function ti(e1, t) {
    if (e1 instanceof HTMLInputElement) {
        let r1 = (0, g.inferPaylocityDateFormat)(e1);
        if (!r1) return console.warn("[Paylocity][Date] fill skipped: unsupported format", {
            controlId: e1.id,
            controlType: e1.getAttribute("type") || e1.type || null,
            placeholder: e1.getAttribute("placeholder") || e1.placeholder || null
        }), !1;
        let n = (0, g.formatPaylocityDateValue)(t, r1);
        if (!n) return console.warn("[Paylocity][Date] fill skipped: invalid source date", {
            controlId: e1.id,
            dateFormat: r1,
            source: (0, g.summarizePaylocityDateValue)(t)
        }), !1;
        console.info("[Paylocity][Date] fill start", {
            controlId: e1.id,
            controlType: e1.getAttribute("type") || e1.type || null,
            placeholder: e1.getAttribute("placeholder") || e1.placeholder || null,
            dateFormat: r1,
            source: (0, g.summarizePaylocityDateValue)(t),
            target: (0, g.summarizePaylocityDateValue)(n)
        }), await (0, a.fillDefaultInputField)(e1, n), await (0, p.delay)(50);
        let o = e1.value?.trim() || "", i = o === n;
        return console.info("[Paylocity][Date] fill readback", {
            controlId: e1.id,
            dateFormat: r1,
            committed: i,
            value: (0, g.summarizePaylocityDateValue)(o)
        }), i;
    }
    return console.warn("[Paylocity][Date] fill skipped: target is not an input"), !1;
}
function ta() {
    let e1 = document.querySelectorAll('[data-automation-id*="loading"], .loading, .spinner, [aria-busy="true"]');
    return 0 === e1.length;
}
async function tl() {
    await (0, u.waitForCondition)(ta, {
        timeout: 3e3,
        observeTarget: document.body
    }), await (0, p.delay)(200);
}
function ts(e1, t = [], r1) {
    let n = (0, m.getFormSnapshot)(t), o = (0, c.buildFalconAutofillAnswerPairData)(r1), { education: i, employment: a, ...l } = n, { education: s, employment: u, ...d } = e1;
    (0, c.sendAutofillAnswerPairEvent)({
        formUrl: (0, f.useUrlStore).getState().currentTabUrl,
        autofillSnapshot: d,
        submitSnapshot: l,
        additionalAutofillData: {
            education: s,
            employment: u
        },
        additionalSubmitData: {
            education: i,
            employment: a
        },
        ...o ? {
            extraData: {
                falcon: o
            }
        } : {},
        source: "paylocity"
    });
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22;
$RefreshReg$(_c, "C");
$RefreshReg$(_c1, "A");
$RefreshReg$(_c2, "T");
$RefreshReg$(_c3, "I");
$RefreshReg$(_c4, "D");
$RefreshReg$(_c5, "P");
$RefreshReg$(_c6, "L");
$RefreshReg$(_c7, "R");
$RefreshReg$(_c8, "O");
$RefreshReg$(_c9, "M");
$RefreshReg$(_c10, "N");
$RefreshReg$(_c11, "B");
$RefreshReg$(_c12, "U");
$RefreshReg$(_c13, "H");
$RefreshReg$(_c14, "Y");
$RefreshReg$(_c15, "V");
$RefreshReg$(_c16, "W");
$RefreshReg$(_c17, "G");
$RefreshReg$(_c18, "K");
$RefreshReg$(_c19, "X");
$RefreshReg$(_c20, "J");
$RefreshReg$(_c21, "Q");
$RefreshReg$(_c22, "Z");

},{}]},["lfa4s","3cphy"], "3cphy", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUFBLEdBQUcsRUFBRSxLQUFJLEVBQUc7QUFDekI7QUFFQSxTQUFTLEdBQUcsRUFBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7SUFDdEIsSUFBSSxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZUFBYyxFQUFHLElBQzdCLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxpQ0FBZ0MsRUFBRyxLQUM3QyxFQUNFLFdBQVcsQ0FBQyxFQUNaLFlBQVksQ0FBQyxFQUNiLEdBQUcsR0FDSixHQUFHLEdBQ0osRUFDRSxXQUFXLENBQUMsRUFDWixZQUFZLENBQUMsRUFDYixHQUFHLEdBQ0osR0FBRztJQUNMLENBQUEsR0FBRyxFQUFFLDJCQUEwQixFQUFHO1FBQ2pDLFNBQVMsQUFBQyxDQUFBLEdBQUcsRUFBRSxXQUFVLEVBQUcsV0FBVztRQUN2QyxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLHdCQUF3QjtZQUN0QixXQUFXO1lBQ1gsWUFBWTtRQUNkO1FBQ0Esc0JBQXNCO1lBQ3BCLFdBQVc7WUFDWCxZQUFZO1FBQ2Q7UUFDQSxHQUFHLElBQUk7WUFDTCxXQUFXO2dCQUNULFFBQVE7WUFDVjtRQUNGLElBQUksQ0FBQyxDQUFDO1FBQ04sUUFBUTtJQUNWO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTFlN2UxNGIwMzc3ZjJjZmMuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvcGF5bG9jaXR5L29wZXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxccGF5bG9jaXR5XFxcXG9wZXJhdGlvbnMuanNcIixcImJ1bmRsZUlkXCI6XCIzOGZmMzAwMTkzN2I5Njg1XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogYm1VMUVcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL3BheWxvY2l0eS9vcGVyYXRpb25zLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9kYXRlIC0+IGxvY2taICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3BheWxvY2l0eS9kYXRlLmpzXHJcbiAqICAgLi9ydWxlcyAtPiA1QnZVUSAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9wYXlsb2NpdHkvcnVsZXMuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIGRheWpzIC0+IGZuaFhwICA9PiAgX3RpbGRlX25vZGVfbW9kdWxlcy9kYXlqcy5qc1xyXG4gKiAgIH5jb250ZW50cy9jcmF3bGVyL3V0aWxzL2lucHV0IC0+IGlQSXZUICA9PiAgc3JjL2NvbnRlbnRzL2NyYXdsZXIvdXRpbHMvaW5wdXQuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9kb20gLT4gaEE1UWEgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9kb20uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9vYnNlcnZlciAtPiBlVHpVeCAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL29ic2VydmVyLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2F1dG9maWxsLWFuc3dlci1wYWlyLXRyYWNraW5nIC0+IGFDRWxaICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2F1dG9maWxsLWFuc3dlci1wYWlyLXRyYWNraW5nLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH5zdG9yZS9wcm9maWxlIC0+IDlvbVBEICA9PiAgc3JjL3N0b3JlL3Byb2ZpbGUuanNcclxuICogICB+c3RvcmUvdXJsIC0+IGI1M0wzICA9PiAgc3JjL3N0b3JlL3VybC5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiZGlzcGF0Y2hDbGlja1NlcXVlbmNlXCIsICgpID0+IGIpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJkaXNwYXRjaE1vdXNlZG93blwiLCAoKSA9PiB5KSwgbi5leHBvcnQociwgXCJQQVlMT0NJVFlfUEVSU09OQUxfQUREUkVTU19TRVRUTEVfREVMQVlfTVNcIiwgKCkgPT5cclxuICAgIHcpLCBuLmV4cG9ydChyLCBcImlzUGF5bG9jaXR5UGVyc29uYWxTdGF0ZUNvbnRyb2xJZFwiLCAoKSA9PiBDKSwgbi5leHBvcnQocixcclxuICAgIFwiaXNQYXlsb2NpdHlQZXJzb25hbEFkZHJlc3NJbnB1dFwiLCAoKSA9PiBBKSwgbi5leHBvcnQociwgXCJnZXRQYXlsb2NpdHlQZXJzb25hbEFkZHJlc3NJbnB1dE1vZGVcIixcclxuICAgICgpID0+IGspLCBuLmV4cG9ydChyLCBcImZpbGxQYXlsb2NpdHlQZXJzb25hbFN0YXRlRmllbGRcIiwgKCkgPT4gTSksIG4uZXhwb3J0KHIsXHJcbiAgICBcImdldFBheWxvY2l0eU1pc3NpbmdQZXJzb25hbEFkZHJlc3NSdWxlc1wiLCAoKSA9PiBOKSwgbi5leHBvcnQocixcclxuICAgIFwicmVjb25jaWxlUGF5bG9jaXR5UGVyc29uYWxBZGRyZXNzXCIsICgpID0+ICQpLCBuLmV4cG9ydChyLCBcImlzUGF5bG9jaXR5UGVyc29uYWxBZGRyZXNzUnVsZVwiLFxyXG4gICgpID0+IEIpLCBuLmV4cG9ydChyLCBcIm9yZGVyUGF5bG9jaXR5UGVyc29uYWxBZGRyZXNzUnVsZXNcIiwgKCkgPT4gcSksIG4uZXhwb3J0KHIsXHJcbiAgICBcImNyZWF0ZVBheWxvY2l0eVNpbmdsZUZsaWdodFwiLCAoKSA9PiBVKSwgbi5leHBvcnQociwgXCJ3YWl0Rm9yUGF5bG9jaXR5UGVyc29uYWxBZGRyZXNzUXVpZXRcIixcclxuICAoKSA9PiBIKSwgbi5leHBvcnQociwgXCJmaWxsUGF5bG9jaXR5UGVyc29uYWxBZGRyZXNzRmllbGRcIiwgKCkgPT4gWCksIG4uZXhwb3J0KHIsXHJcbiAgICBcImhhc1BheWxvY2l0eUNvdmVyTGV0dGVyU2xvdFwiLCAoKSA9PiBlbyksIG4uZXhwb3J0KHIsIFwiaGFzUGF5bG9jaXR5Q292ZXJMZXR0ZXJVcGxvYWRDYXBhYmlsaXR5XCIsXHJcbiAgICAoKSA9PiBlaSksIG4uZXhwb3J0KHIsIFwiaGFzVXBsb2FkZWRQYXlsb2NpdHlDb3ZlckxldHRlclwiLCAoKSA9PiBlYSksIG4uZXhwb3J0KHIsXHJcbiAgICBcImdldFBheWxvY2l0eUNvdmVyTGV0dGVyU3RhdHVzXCIsICgpID0+IGVsKSwgbi5leHBvcnQociwgXCJub3JtYWxpemVQYXlsb2NpdHlDb3VudHJ5XCIsICgpID0+IGV1KSxcclxuICBuLmV4cG9ydChyLCBcImZpbGxDb3VudHJ5XCIsICgpID0+IGVEKSwgbi5leHBvcnQociwgXCJmaWxsTGlzdGJveFNlbGVjdEJ1dHRvbkZpZWxkXCIsICgpID0+IGVSKSwgblxyXG4gIC5leHBvcnQociwgXCJmaWxsUGF5bG9jaXR5RWR1Y2F0aW9uRGVncmVlT2J0YWluZWRcIiwgKCkgPT4gZU8pLCBuLmV4cG9ydChyLFxyXG4gICAgXCJmaWxsUGF5bG9jaXR5RWR1Y2F0aW9uR3JhZHVhdGlvbkRhdGVcIiwgKCkgPT4gZU0pLCBuLmV4cG9ydChyLCBcImZpbGxTZWFyY2hCb3hJbnB1dEZpZWxkXCIsICgpID0+XHJcbiAgICBlTiksIG4uZXhwb3J0KHIsIFwiZmlsbExpc3Rib3hCdXR0b25GaWVsZFwiLCAoKSA9PiBlJCksIG4uZXhwb3J0KHIsIFwidXBsb2FkUmVzdW1lXCIsICgpID0+IGVCKSwgblxyXG4gIC5leHBvcnQociwgXCJ1cGxvYWRDb3ZlckxldHRlclwiLCAoKSA9PiBlcSksIG4uZXhwb3J0KHIsIFwiZmlsbFNraWxsc1wiLCAoKSA9PiBlUSksIG4uZXhwb3J0KHIsXHJcbiAgICBcInByZWNsaWNrQWRkQnV0dG9uc1wiLCAoKSA9PiBlWiksIG4uZXhwb3J0KHIsIFwiZXhwYW5kRm9ybUZyb21Qcm9maWxlXCIsICgpID0+IGU3KSwgbi5leHBvcnQocixcclxuICAgIFwiZXhwYW5kRm9ybVwiLCAoKSA9PiB0ZSksIG4uZXhwb3J0KHIsIFwiYmx1clBhZ2VcIiwgKCkgPT4gdHIpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJmaWxsQXZhaWxhYmxlVG9TdGFydEZpZWxkXCIsICgpID0+IHRvKSwgbi5leHBvcnQociwgXCJmaWxsUGF5bG9jaXR5RGF0ZUZpZWxkXCIsICgpID0+IHRpKSwgblxyXG4gIC5leHBvcnQociwgXCJpc0xvYWRpbmdDbGVhcmVkXCIsICgpID0+IHRhKSwgbi5leHBvcnQociwgXCJ3YWl0UGFnZUNsZWFuXCIsICgpID0+IHRsKSwgbi5leHBvcnQocixcclxuICAgIFwic3VibWl0SGFuZGxlclwiLCAoKSA9PiB0cyk7XHJcbnZhciBvID0gZShcImRheWpzXCIpLFxyXG4gIGkgPSBuLmludGVyb3BEZWZhdWx0KG8pLFxyXG4gIGEgPSBlKFwifmNvbnRlbnRzL2NyYXdsZXIvdXRpbHMvaW5wdXRcIiksXHJcbiAgbCA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXJcIiksXHJcbiAgcyA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9kb21cIiksXHJcbiAgdSA9IGUoXCJ+Y29udGVudHMvbWV0aG9kcy9vYnNlcnZlclwiKSxcclxuICBjID0gZShcIn5jb250ZW50cy9zaXRlcy9hdXRvZmlsbC1hbnN3ZXItcGFpci10cmFja2luZ1wiKSxcclxuICBkID0gZShcIn5jb3JlL3hwYXRoXCIpLFxyXG4gIGYgPSBlKFwifnN0b3JlL3VybFwiKSxcclxuICBwID0gZShcIn51dGlscy9kZWxheVwiKSxcclxuICBtID0gZShcIi4vcnVsZXNcIiksXHJcbiAgaCA9IGUoXCJ+c3RvcmUvcHJvZmlsZVwiKSxcclxuICBnID0gZShcIi4vZGF0ZVwiKTtcclxuYXN5bmMgZnVuY3Rpb24gYihlLCB0ID0gMzAsIHIgPSAxMDApIHtcclxuICBlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZWRvd25cIiwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMCxcclxuICAgIHZpZXc6IHdpbmRvd1xyXG4gIH0pKSwgYXdhaXQgKDAsIHAuZGVsYXkpKHQpLCBlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITAsXHJcbiAgICB2aWV3OiB3aW5kb3dcclxuICB9KSksIGF3YWl0ICgwLCBwLmRlbGF5KSh0KSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIiwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBjYW5jZWxhYmxlOiAhMCxcclxuICAgIHZpZXc6IHdpbmRvd1xyXG4gIH0pKSwgYXdhaXQgKDAsIHAuZGVsYXkpKHIpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24geShlLCB0ID0gMTAwKSB7XHJcbiAgZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2Vkb3duXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITAsXHJcbiAgICB2aWV3OiB3aW5kb3dcclxuICB9KSksIGF3YWl0ICgwLCBwLmRlbGF5KSh0KVxyXG59XHJcbmxldCB2ID0gYXN5bmMgKGUsIHQsIHIgPSAxMCwgbiA9IDEwMCkgPT4ge1xyXG4gIGxldCBvID0gZS5xdWVyeVNlbGVjdG9yKHQpLFxyXG4gICAgaSA9IDA7XHJcbiAgZm9yICg7ICFvICYmIGkgPCByOykgYXdhaXQgKDAsIHAuZGVsYXkpKG4pLCBvID0gZS5xdWVyeVNlbGVjdG9yKHQpLCBpKys7XHJcbiAgcmV0dXJuIG9cclxufSwgdyA9IDEwMCwgUyA9IFtcInB1YmxpYy1zaXRlLWFkZHJlc3MtYWRkcmVzcy0xXCIsIFwicHVibGljLXNpdGUtYWRkcmVzcy1hZGRyZXNzLTJcIixcclxuICBcInB1YmxpYy1zaXRlLWFkZHJlc3MtY2l0eVwiLCBcInB1YmxpYy1zaXRlLWFkZHJlc3MtY291bnR5XCIsXHJcbiAgXCJwdWJsaWMtc2l0ZS1hZGRyZXNzLXVzLXN0YXRlLXNlbGVjdC13cmFwcGVyXCIsIFwicHVibGljLXNpdGUtYWRkcmVzcy11cy1zdGF0ZVwiLFxyXG4gIFwicHVibGljLXNpdGUtYWRkcmVzcy16aXBcIlxyXG5dLCBFID0gbmV3IFNldChbXCJwdWJsaWMtc2l0ZS1hZGRyZXNzLWFkZHJlc3MtMVwiLCBcInB1YmxpYy1zaXRlLWFkZHJlc3MtYWRkcmVzcy0yXCIsXHJcbiAgXCJwdWJsaWMtc2l0ZS1hZGRyZXNzLWNpdHlcIiwgXCJwdWJsaWMtc2l0ZS1hZGRyZXNzLWNvdW50eVwiLCBcInB1YmxpYy1zaXRlLWFkZHJlc3MtemlwXCJcclxuXSksIHggPSBuZXcgU2V0KFtcInB1YmxpYy1zaXRlLWFkZHJlc3MtdXMtc3RhdGUtc2VsZWN0LXdyYXBwZXJcIiwgXCJwdWJsaWMtc2l0ZS1hZGRyZXNzLXVzLXN0YXRlXCJdKTtcclxuXHJcbmZ1bmN0aW9uIEMoZSkge1xyXG4gIHJldHVybiB4LmhhcyhlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBKGUpIHtcclxuICByZXR1cm4gISFlICYmIEUuaGFzKGUuaWQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGsoZSkge1xyXG4gIHJldHVybiBcImxpc3RcIiA9PT0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWF1dG9jb21wbGV0ZVwiKSA/IFwibGlzdFwiIDogXCJ0ZXh0XCJcclxufVxyXG5cclxuZnVuY3Rpb24gVChlKSB7XHJcbiAgbGV0IHQgPSBlPy4kaW5wdXQ7XHJcbiAgcmV0dXJuIHQgJiYgKHQuaWQgfHwgdC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik/LmlkKSB8fCBcIlwiXHJcbn1cclxubGV0IEYgPSB7XHJcbiAgXCJwdWJsaWMtc2l0ZS1hZGRyZXNzLWFkZHJlc3MtMVwiOiBbXCJBZGRyZXNzIExpbmUgMVwiLCBcIkFkZHJlc3MgMVwiXSxcclxuICBcInB1YmxpYy1zaXRlLWFkZHJlc3MtYWRkcmVzcy0yXCI6IFtcIkFkZHJlc3MgTGluZSAyXCIsIFwiQWRkcmVzcyAyXCJdLFxyXG4gIFwicHVibGljLXNpdGUtYWRkcmVzcy1jaXR5XCI6IFtcIkNpdHlcIiwgXCJMb2NhbGl0eVwiXSxcclxuICBcInB1YmxpYy1zaXRlLWFkZHJlc3MtY291bnR5XCI6IFtcIkNvdW50eVwiXSxcclxuICBcInB1YmxpYy1zaXRlLWFkZHJlc3MtdXMtc3RhdGUtc2VsZWN0LXdyYXBwZXJcIjogW1wiU3RhdGVcIiwgXCJBZG1pbmlzdHJhdGl2ZSBBcmVhXCIsIFwiUHJvdmluY2VcIl0sXHJcbiAgXCJwdWJsaWMtc2l0ZS1hZGRyZXNzLXVzLXN0YXRlXCI6IFtcIlN0YXRlXCIsIFwiQWRtaW5pc3RyYXRpdmUgQXJlYVwiLCBcIlByb3ZpbmNlXCJdLFxyXG4gIFwicHVibGljLXNpdGUtYWRkcmVzcy16aXBcIjogW1wiWmlwIENvZGVcIiwgXCJaaXBcIiwgXCJQb3N0YWwgQ29kZVwiLCBcIlBvc3RhbFwiXVxyXG59O1xyXG5cclxuZnVuY3Rpb24gSShlLCB0KSB7XHJcbiAgbGV0IHIgPSBUKGUpLFxyXG4gICAgbiA9IFtlLmxhYmVsLCAuLi5GW3JdID8/IFtdXTtcclxuICBmb3IgKGxldCBlIG9mIG4pIHtcclxuICAgIGxldCByID0gT2JqZWN0LmtleXModCkuZmluZCh0ID0+ICgwLCBsLmlzTWF0Y2hlZCkoZSwgdCkpO1xyXG4gICAgaWYgKCFyKSBjb250aW51ZTtcclxuICAgIGxldCBuID0gdFtyXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KG4pKSB7XHJcbiAgICAgIGxldCBlID0gbi5maW5kKGUgPT4gU3RyaW5nKGUgPz8gXCJcIikudHJpbSgpKTtcclxuICAgICAgaWYgKHZvaWQgMCAhPT0gZSkgcmV0dXJuIGU7XHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcbiAgICBpZiAoU3RyaW5nKG4gPz8gXCJcIikudHJpbSgpKSByZXR1cm4gblxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaihlKSB7XHJcbiAgbGV0IHQgPSBUKGUpLFxyXG4gICAgciA9IHQgJiYgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZG9jdW1lbnQgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KSA6IG51bGw7XHJcbiAgcmV0dXJuIHIgPyB7XHJcbiAgICAuLi5lLFxyXG4gICAgJGlucHV0OiByXHJcbiAgfSA6IGUuJGlucHV0ICYmICExICE9PSBlLiRpbnB1dC5pc0Nvbm5lY3RlZCA/IGUgOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEQoZSkge1xyXG4gIGxldCB0ID0gZS4kaW5wdXQ7XHJcbiAgcmV0dXJuIHQgPyB0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCA/IHQudmFsdWUudHJpbSgpIDogZUwodCkudmFsdWUudHJpbSgpIDogXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBQKGUsIHQpIHtcclxuICBsZXQgciA9IHQudHJpbSgpO1xyXG4gIGlmICghcikgcmV0dXJuICEwO1xyXG4gIGxldCBuID0gVChlKTtcclxuICByZXR1cm4gQyhuKSAmJiAvXihzZWxlY3R8Y2hvb3NlfHBsZWFzZSBzZWxlY3R8LS0pL2kudGVzdChyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBfKGUpIHtcclxuICBpZiAoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgZG9jdW1lbnQpIHJldHVybiBudWxsO1xyXG4gIGxldCB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSk7XHJcbiAgcmV0dXJuIHQgPyBlLmVuZHNXaXRoKFwiLXNlbGVjdC13cmFwcGVyXCIpID8gdCA6IHQuY2xvc2VzdCgnW2lkKj1cIi1zZWxlY3Qtd3JhcHBlclwiXScpIHx8IHQgOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEwoZSkge1xyXG4gIGlmIChcInVuZGVmaW5lZFwiID09IHR5cGVvZiBkb2N1bWVudCkgcmV0dXJuIG51bGw7XHJcbiAgbGV0IHQgPSBlLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCwgYnV0dG9uXCIpLFxyXG4gICAgciA9IGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKSB8fCBlLmdldEF0dHJpYnV0ZShcImFyaWEtb3duc1wiKSB8fCB0Py5nZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwiYXJpYS1jb250cm9sc1wiKSB8fCB0Py5nZXRBdHRyaWJ1dGUoXCJhcmlhLW93bnNcIik7XHJcbiAgcmV0dXJuIHIgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyKSA6IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gUihlKSB7XHJcbiAgbGV0IHQgPSBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImRpdlt0aXRsZV1cIikpO1xyXG4gIHJldHVybiB0Lmxlbmd0aCA+IDAgPyB0IDogQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcImxpW3JvbGU9J29wdGlvbiddLCBsaSwgZGl2W3JvbGU9J29wdGlvbiddXCIpKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIE8oZSkge1xyXG4gIGlmIChlKCkpIHJldHVybiAhMDtcclxuICBsZXQgdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWF1dG9tYXRpb24taWQ9XCJwdWJsaWMtc2l0ZS1hZGRyZXNzXCJdJyk7XHJcbiAgaWYgKCF0KSByZXR1cm4gITE7XHJcbiAgbGV0IHIgPSBEYXRlLm5vdygpICsgMTUwMDtcclxuICBmb3IgKDsgRGF0ZS5ub3coKSA8IHI7KVxyXG4gICAgaWYgKGF3YWl0IEgodCwge1xyXG4gICAgICAgIHF1aWV0TXM6IDEwMCxcclxuICAgICAgICB0aW1lb3V0TXM6IE1hdGgubWluKDUwMCwgciAtIERhdGUubm93KCkpXHJcbiAgICAgIH0pLCBlKCkpIHJldHVybiAhMDtcclxuICByZXR1cm4gITFcclxufVxyXG5hc3luYyBmdW5jdGlvbiBNKGUsIHQsIHIgPSB7fSkge1xyXG4gIGlmICghQyhlKSkgcmV0dXJuICExO1xyXG4gIGxldCBuID0gdC5tYXAoZSA9PiBTdHJpbmcoZSkudHJpbSgpKS5maWx0ZXIoQm9vbGVhbik7XHJcbiAgaWYgKDAgPT09IG4ubGVuZ3RoKSByZXR1cm4gITE7XHJcbiAgbGV0IG8gPSByLmZpbmRMaXZlQ29udHJvbCA/PyBfLFxyXG4gICAgaSA9IHIuZ2V0T3duZWRMaXN0Ym94ID8/IEwsXHJcbiAgICBhID0gci5nZXRPcHRpb25zID8/IFIsXHJcbiAgICBsID0gci5yZWFkQ29tbWl0dGVkVmFsdWUgPz8gKGUgPT4gZUwoZSkudmFsdWUpLFxyXG4gICAgcyA9IHIud2FpdEZvclJlYWR5ID8/IE8sXHJcbiAgICB1ID0gci53YWl0Rm9yQ29tbWl0dGVkID8/IE8sXHJcbiAgICBjID0gci5vcGVuQ29udHJvbCA/PyAoYXN5bmMgZSA9PiB7XHJcbiAgICAgIGxldCB0ID0gZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIGJ1dHRvblwiKSB8fCBlO1xyXG4gICAgICBhd2FpdCBiKHQsIDUwLCAwKVxyXG4gICAgfSksXHJcbiAgICBkID0gci5jbGlja09wdGlvbiA/PyAoYXN5bmMgZSA9PiB7XHJcbiAgICAgIGUuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgIGJsb2NrOiBcImNlbnRlclwiXHJcbiAgICAgIH0pLCBhd2FpdCBiKGUsIDUwLCAwKVxyXG4gICAgfSksXHJcbiAgICBmID0gbyhlKTtcclxuICBpZiAoIWYpIHJldHVybiAhMTtcclxuICBpZiAoZV8obChmKSwgbikpIHJldHVybiAhMDtcclxuICBhd2FpdCBjKGYpO1xyXG4gIGxldCBwID0gKCkgPT4ge1xyXG4gICAgICBsZXQgdCA9IG8oZSk7XHJcbiAgICAgIGlmICghdCkgcmV0dXJuIG51bGw7XHJcbiAgICAgIGxldCByID0gaSh0KTtcclxuICAgICAgaWYgKCFyKSByZXR1cm4gbnVsbDtcclxuICAgICAgbGV0IGwgPSBhKHIpLmZpbHRlcihlID0+IGVfKGUuZ2V0QXR0cmlidXRlPy4oXCJ0aXRsZVwiKT8udHJpbSgpIHx8IGUudGV4dENvbnRlbnQ/LnRyaW0oKSB8fFxyXG4gICAgICAgIFwiXCIsIG4pKTtcclxuICAgICAgcmV0dXJuIDEgPT09IGwubGVuZ3RoID8gbFswXSA6IG51bGxcclxuICAgIH0sXHJcbiAgICBtID0gYXdhaXQgcygoKSA9PiAhIXAoKSksXHJcbiAgICBoID0gbSA/IHAoKSA6IG51bGw7XHJcbiAgaWYgKCFoKSByZXR1cm4gY29uc29sZS53YXJuKFwiW1BheWxvY2l0eV1bUGVyc29uYWxBZGRyZXNzXVtTdGF0ZV0gZmlsbCBmYWlsZWRcIiwge1xyXG4gICAgY29udHJvbElkOiBlLFxyXG4gICAgcmVhc29uOiBcIm93bmVkX29wdGlvbl9ub3RfcmVhZHlcIlxyXG4gIH0pLCAhMTtcclxuICBhd2FpdCBkKGgpO1xyXG4gIGxldCBnID0gYXdhaXQgdSgoKSA9PiB7XHJcbiAgICBsZXQgdCA9IG8oZSk7XHJcbiAgICByZXR1cm4gISEodCAmJiBlXyhsKHQpLCBuKSlcclxuICB9KTtcclxuICByZXR1cm4gY29uc29sZS5pbmZvKFwiW1BheWxvY2l0eV1bUGVyc29uYWxBZGRyZXNzXVtTdGF0ZV0gY29tbWl0dGVkIHJlYWRiYWNrXCIsIHtcclxuICAgIGNvbnRyb2xJZDogZSxcclxuICAgIGNvbW1pdHRlZDogZ1xyXG4gIH0pLCBnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE4oZSwgdCwgciA9IHt9KSB7XHJcbiAgbGV0IG4gPSByLmdldEFuc3dlclZhbHVlID8/IEksXHJcbiAgICBvID0gci5yZWFkTGl2ZVZhbHVlID8/IEQsXHJcbiAgICBpID0gci5nZXRMaXZlUnVsZSA/PyBqO1xyXG4gIHJldHVybiBxKGUuZmlsdGVyKEIpKS5maWx0ZXIoZSA9PiB7XHJcbiAgICBsZXQgciA9IGkoZSk7XHJcbiAgICBpZiAoIXIpIHJldHVybiAhMTtcclxuICAgIGxldCBhID0gbihyLCB0KTtcclxuICAgIHJldHVybiBcIlwiICE9PSBTdHJpbmcoYSA/PyBcIlwiKS50cmltKCkgJiYgUChyLCBvKHIpKVxyXG4gIH0pXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gJChlKSB7XHJcbiAgbGV0IHQgPSBlLmdldExpdmVSdWxlID8/IGosXHJcbiAgICByID0gZS5yZWFkTGl2ZVZhbHVlID8/IEQsXHJcbiAgICBuID0ge1xyXG4gICAgICBnZXRBbnN3ZXJWYWx1ZTogZS5nZXRBbnN3ZXJWYWx1ZSxcclxuICAgICAgZ2V0TGl2ZVJ1bGU6IHQsXHJcbiAgICAgIHJlYWRMaXZlVmFsdWU6IHJcclxuICAgIH0sXHJcbiAgICBvID0gW10sXHJcbiAgICBpID0gW10sXHJcbiAgICBhID0gYXN5bmMgbiA9PiB7XHJcbiAgICAgIGxldCBhID0gdChuKTtcclxuICAgICAgaWYgKCFhKSByZXR1cm4gITE7XHJcbiAgICAgIGxldCBsID0gVChhKSxcclxuICAgICAgICBzID0gZS5nZXRBbnN3ZXJWYWx1ZSA/PyBJLFxyXG4gICAgICAgIHUgPSBzKGEsIGUucmVjb3JkKTtcclxuICAgICAgby5wdXNoKGwpLCBhd2FpdCBlLmZpbGxSdWxlKGEsIHUpO1xyXG4gICAgICBsZXQgYyA9IHQobiksXHJcbiAgICAgICAgZCA9ICEhKGMgJiYgIVAoYywgcihjKSkpO1xyXG4gICAgICByZXR1cm4gZCAmJiBpLnB1c2gobCksIGRcclxuICAgIH0sIGwgPSBOKGUucnVsZXMsIGUucmVjb3JkLCBuKS5maW5kKGUgPT4gXCJwdWJsaWMtc2l0ZS1hZGRyZXNzLWFkZHJlc3MtMVwiID09PSBUKGUpKTtcclxuICBpZiAobCkge1xyXG4gICAgbGV0IHIgPSB0KGwpLFxyXG4gICAgICBuID0gISFyPy4kaW5wdXQgJiYgXCJsaXN0XCIgPT09IGsoci4kaW5wdXQpLFxyXG4gICAgICBvID0gYXdhaXQgYShsKTtcclxuICAgIG8gJiYgbiAmJiBhd2FpdCBlLndhaXRGb3JRdWlldCgpXHJcbiAgfVxyXG4gIGxldCBzID0gbmV3IFNldChvKTtcclxuICBmb3IgKGxldCB0ID0gMDsgdCA8IGUucnVsZXMubGVuZ3RoOyB0KyspIHtcclxuICAgIGxldCB0ID0gTihlLnJ1bGVzLCBlLnJlY29yZCwgbikuZmluZChlID0+IHtcclxuICAgICAgbGV0IHQgPSBUKGUpO1xyXG4gICAgICByZXR1cm4gXCJwdWJsaWMtc2l0ZS1hZGRyZXNzLWFkZHJlc3MtMVwiICE9PSB0ICYmICFzLmhhcyh0KVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXQpIGJyZWFrO1xyXG4gICAgbGV0IHIgPSBUKHQpO1xyXG4gICAgcy5hZGQociksIGF3YWl0IGEodClcclxuICB9XHJcbiAgbGV0IHUgPSBOKGUucnVsZXMsIGUucmVjb3JkLCBuKS5tYXAoVCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGF0dGVtcHRlZENvbnRyb2xJZHM6IG8sXHJcbiAgICBmaWxsZWRDb250cm9sSWRzOiBpLFxyXG4gICAgbWlzc2luZ0NvbnRyb2xJZHM6IHVcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEIoZSkge1xyXG4gIGxldCB0ID0gVChlKTtcclxuICByZXR1cm4gUy5pbmNsdWRlcyh0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBxKGUpIHtcclxuICByZXR1cm4gZS5tYXAoKGUsIHQpID0+ICh7XHJcbiAgICBydWxlOiBlLFxyXG4gICAgb3JpZ2luYWxJbmRleDogdFxyXG4gIH0pKS5zb3J0KChlLCB0KSA9PiB7XHJcbiAgICBsZXQgciA9IFMuaW5kZXhPZihUKGUucnVsZSkpLFxyXG4gICAgICBuID0gUy5pbmRleE9mKFQodC5ydWxlKSksXHJcbiAgICAgIG8gPSAtMSA9PT0gciA/IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIDogcixcclxuICAgICAgaSA9IC0xID09PSBuID8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgOiBuO1xyXG4gICAgcmV0dXJuIG8gLSBpIHx8IGUub3JpZ2luYWxJbmRleCAtIHQub3JpZ2luYWxJbmRleFxyXG4gIH0pLm1hcCgoe1xyXG4gICAgcnVsZTogZVxyXG4gIH0pID0+IGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFUoZSkge1xyXG4gIGxldCB0ID0gbnVsbDtcclxuICByZXR1cm4gKC4uLnIpID0+IHtcclxuICAgIGlmICh0KSByZXR1cm4gY29uc29sZS5pbmZvKFwiW1BheWxvY2l0eV0gY29hbGVzY2VkIGR1cGxpY2F0ZSBBdXRvZmlsbCBzdGFydFwiKSwgdDtcclxuICAgIGxldCBuID0gZSguLi5yKTtcclxuICAgIHQgPSBuO1xyXG4gICAgbGV0IG8gPSAoKSA9PiB7XHJcbiAgICAgIHQgPT09IG4gJiYgKHQgPSBudWxsKVxyXG4gICAgfTtcclxuICAgIHJldHVybiBuLnRoZW4obywgbyksIG5cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEgoZSwgdCA9IHt9KSB7XHJcbiAgbGV0IHIgPSB0LnF1aWV0TXMgPz8gMTUwLFxyXG4gICAgbiA9IHQudGltZW91dE1zID8/IDE1MDAsXHJcbiAgICBvID0gdC5vYnNlcnZlID8/ICgoZSwgdCkgPT4ge1xyXG4gICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyKSByZXR1cm4gKCkgPT4ge307XHJcbiAgICAgIGxldCByID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodCk7XHJcbiAgICAgIHJldHVybiByLm9ic2VydmUoZSwge1xyXG4gICAgICAgIGF0dHJpYnV0ZXM6ICEwLFxyXG4gICAgICAgIGNoaWxkTGlzdDogITAsXHJcbiAgICAgICAgc3VidHJlZTogITBcclxuICAgICAgfSksICgpID0+IHIuZGlzY29ubmVjdCgpXHJcbiAgICB9KTtcclxuICByZXR1cm4gbmV3IFByb21pc2UodCA9PiB7XHJcbiAgICBsZXQgaSwgYSwgbCA9ICExLFxyXG4gICAgICBzID0gKCkgPT4ge30sXHJcbiAgICAgIHUgPSBlID0+IHtcclxuICAgICAgICBsIHx8IChsID0gITAsIGNsZWFyVGltZW91dChpKSwgY2xlYXJUaW1lb3V0KGEpLCBzKCksIHQoZSkpXHJcbiAgICAgIH0sXHJcbiAgICAgIGMgPSAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGkpLCBpID0gc2V0VGltZW91dCgoKSA9PiB1KCEwKSwgcilcclxuICAgICAgfTtcclxuICAgIHMgPSBvKGUsIGMpLCBhID0gc2V0VGltZW91dCgoKSA9PiB1KCExKSwgbiksIGMoKVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFkoZSkge1xyXG4gIHJldHVybiBlLm5vcm1hbGl6ZShcIk5GS0RcIikucmVwbGFjZSgvXFxwe019Ky9ndSwgXCJcIikucmVwbGFjZSgvW15cXHB7TH1cXHB7Tn1dKy9ndSwgXCIgXCIpLnRyaW0oKVxyXG4gICAgLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuZnVuY3Rpb24geihlLCB0KSB7XHJcbiAgbGV0IHIgPSBZKEcoZSkpLFxyXG4gICAgbiA9IFkodCk7XHJcbiAgcmV0dXJuIHIgPT09IG4gfHwgci5zdGFydHNXaXRoKGAke259IGApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFYoZSkge1xyXG4gIGxldCB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSk7XHJcbiAgcmV0dXJuIHQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmICExICE9PSB0LmlzQ29ubmVjdGVkID8gdCA6IG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gVyhlKSB7XHJcbiAgbGV0IHQgPSBlLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIiksXHJcbiAgICByID0gdCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQpIDogbnVsbDtcclxuICByZXR1cm4gciA/IEFycmF5LmZyb20oci5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cIm9wdGlvblwiXSwgbGksIC5wY3R5LWlucHV0LXNlbGVjdF9fb3B0aW9uJykpIDogW11cclxufVxyXG5cclxuZnVuY3Rpb24gRyhlKSB7XHJcbiAgcmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwidGl0bGVcIik/LnRyaW0oKSB8fCBlLnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBLKGUsIHQpIHtcclxuICBlLmZvY3VzKCk7XHJcbiAgbGV0IHIgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSksXHJcbiAgICBuID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLCBcInZhbHVlXCIpPy5zZXQsXHJcbiAgICBvID0gZS52YWx1ZTtcclxuICBuID8gbi5jYWxsKGUsIHQpIDogZS52YWx1ZSA9IHQ7XHJcbiAgbGV0IGkgPSBlLl92YWx1ZVRyYWNrZXI7XHJcbiAgaT8uc2V0VmFsdWU/LihvKSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITBcclxuICB9KSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBYKGUsIHQsIHIgPSB7fSkge1xyXG4gIGlmICghQShlKSB8fCAhdC50cmltKCkpIHJldHVybiAhMTtcclxuICBsZXQgbiA9IHIuZmluZExpdmVJbnB1dCA/PyBWLFxyXG4gICAgbyA9IHIud2FpdCA/PyBwLmRlbGF5LFxyXG4gICAgaSA9IHQudHJpbSgpLFxyXG4gICAgbCA9IG4oZS5pZCk7XHJcbiAgaWYgKCFsKSByZXR1cm4gITE7XHJcbiAgbGV0IHMgPSBrKGwpO1xyXG4gIGlmIChjb25zb2xlLmluZm8oXCJbUGF5bG9jaXR5XVtQZXJzb25hbEFkZHJlc3NdIGZpbGwgc3RhcnRcIiwge1xyXG4gICAgICBjb250cm9sSWQ6IGwuaWQsXHJcbiAgICAgIG1vZGU6IHMsXHJcbiAgICAgIHZhbHVlTGVuZ3RoOiBpLmxlbmd0aFxyXG4gICAgfSksIFwidGV4dFwiID09PSBzKSB7XHJcbiAgICBsZXQgdCA9IHIud3JpdGVUZXh0ID8/IGEuZmlsbERlZmF1bHRJbnB1dEZpZWxkO1xyXG4gICAgYXdhaXQgdChsLCBpKSwgYXdhaXQgbyh3KTtcclxuICAgIGxldCB1ID0gbihlLmlkKSxcclxuICAgICAgYyA9IHU/LnZhbHVlLnRyaW0oKSA9PT0gaTtcclxuICAgIHJldHVybiBjb25zb2xlLmluZm8oXCJbUGF5bG9jaXR5XVtQZXJzb25hbEFkZHJlc3NdIGZpbGwgcmVhZGJhY2tcIiwge1xyXG4gICAgICBjb250cm9sSWQ6IGUuaWQsXHJcbiAgICAgIG1vZGU6IHMsXHJcbiAgICAgIGNvbW1pdHRlZDogY1xyXG4gICAgfSksIGNcclxuICB9XHJcbiAgbGV0IHUgPSByLndyaXRlQXV0b2NvbXBsZXRlUXVlcnkgPz8gKGFzeW5jIChlLCB0KSA9PiB7XHJcbiAgICBLKGUsIHQpXHJcbiAgfSk7XHJcbiAgYXdhaXQgdShsLCBpKSwgYXdhaXQgbyh3KTtcclxuICBsZXQgYyA9IG4oZS5pZCk7XHJcbiAgaWYgKCFjIHx8IFwibGlzdFwiICE9PSBrKGMpKSByZXR1cm4gY29uc29sZS53YXJuKFwiW1BheWxvY2l0eV1bUGVyc29uYWxBZGRyZXNzXSBmaWxsIGZhaWxlZFwiLCB7XHJcbiAgICBjb250cm9sSWQ6IGUuaWQsXHJcbiAgICBtb2RlOiBzLFxyXG4gICAgcmVhc29uOiBcImF1dG9jb21wbGV0ZV9pbnB1dF9yZXBsYWNlZFwiXHJcbiAgfSksICExO1xyXG4gIGxldCBkID0gci5nZXRBdXRvY29tcGxldGVPcHRpb25zID8/IFcsXHJcbiAgICBmID0gZChjKS5maWx0ZXIoZSA9PiB6KGUsIGkpKTtcclxuICBpZiAoMSAhPT0gZi5sZW5ndGgpIHJldHVybiBjb25zb2xlLndhcm4oXCJbUGF5bG9jaXR5XVtQZXJzb25hbEFkZHJlc3NdIGZpbGwgZmFpbGVkXCIsIHtcclxuICAgIGNvbnRyb2xJZDogZS5pZCxcclxuICAgIG1vZGU6IHMsXHJcbiAgICByZWFzb246IFwibm9fdW5pcXVlX2V4YWN0X29wdGlvblwiLFxyXG4gICAgb3B0aW9uQ291bnQ6IGYubGVuZ3RoXHJcbiAgfSksICExO1xyXG4gIGxldCBtID0gci5jbGlja0F1dG9jb21wbGV0ZU9wdGlvbiA/PyAoYXN5bmMgZSA9PiB7XHJcbiAgICBhd2FpdCBiKGUsIDAsIDApXHJcbiAgfSk7XHJcbiAgYXdhaXQgbShmWzBdKSwgYXdhaXQgbyh3KTtcclxuICBsZXQgaCA9IG4oZS5pZCksXHJcbiAgICBnID0gaD8udmFsdWUudHJpbSgpID09PSBpO1xyXG4gIHJldHVybiBjb25zb2xlLmluZm8oXCJbUGF5bG9jaXR5XVtQZXJzb25hbEFkZHJlc3NdIGZpbGwgcmVhZGJhY2tcIiwge1xyXG4gICAgY29udHJvbElkOiBlLmlkLFxyXG4gICAgbW9kZTogcyxcclxuICAgIGNvbW1pdHRlZDogZ1xyXG4gIH0pLCBnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEooZSkge1xyXG4gIGxldCB0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGFiZWxcIikpLFxyXG4gICAgciA9IHQuZmluZCh0ID0+IGUodC50ZXh0Q29udGVudD8udHJpbSgpLnRvTG93ZXJDYXNlKCkgfHwgXCJcIikpO1xyXG4gIHJldHVybiByPy5jbG9zZXN0KFwiLnNlY3Rpb24td3JhcHBlclwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBRKCkge1xyXG4gIGxldCBlID0gSihlID0+IGUuaW5jbHVkZXMoXCJjb3ZlciBsZXR0ZXJcIikpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWNvdmVyTGV0dGVyXCIpPy5jbG9zZXN0KFxyXG4gICAgICBcIi5zZWN0aW9uLXdyYXBwZXJcIiksXHJcbiAgICB0ID0gZT8ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0jYnRuLWNvdmVyTGV0dGVyJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgJ2lucHV0W3R5cGU9XCJmaWxlXCJdI2J0bi1jb3ZlckxldHRlcicpLFxyXG4gICAgciA9IGU/LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLWF1dG9tYXRpb24taWQ9XCJidG4tY292ZXJMZXR0ZXJcIl0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uW2RhdGEtYXV0b21hdGlvbi1pZD1cImJ0bi1jb3ZlckxldHRlclwiXScpLFxyXG4gICAgbiA9IGU/LnF1ZXJ5U2VsZWN0b3IoXCJ0Ym9keSB0ciB0ZCBzcGFuLmNvbG9yLWJsdWVcIikgfHwgbnVsbCxcclxuICAgIG8gPSAoZT8ucXVlcnlTZWxlY3RvcihcImEuYnV0dG9uLnNlY29uZGFyeS5pY29uLCBidXR0b24uYnV0dG9uLnNlY29uZGFyeS5pY29uXCIpID8/IGVcclxuICAgICAgPy5xdWVyeVNlbGVjdG9yKCdbYXJpYS1sYWJlbD1cIlJlbW92ZSBGaWxlXCJdJyk/LmNsb3Nlc3QoXCJhLGJ1dHRvblwiKSkgfHwgbnVsbDtcclxuICByZXR1cm4ge1xyXG4gICAgc2VjdGlvbjogZSxcclxuICAgIGlucHV0OiB0LFxyXG4gICAgdHJpZ2dlckJ1dHRvbjogcixcclxuICAgIHVwbG9hZGVkRmlsZU5hbWU6IG4sXHJcbiAgICByZW1vdmVCdXR0b246IG9cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFooKSB7XHJcbiAgbGV0IGUgPSBKKGUgPT4gZS5pbmNsdWRlcyhcInJlc3VtZVwiKSB8fCBlLmluY2x1ZGVzKFwiY3VycmljdWx1bSB2aXRhZVwiKSB8fCBlLmluY2x1ZGVzKFwiY3ZcIikpLFxyXG4gICAgdCA9IGVyKGUpICYmIGU/LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykgfHwgbnVsbDtcclxuICBpZiAodCkgcmV0dXJuIHQ7XHJcbiAgbGV0IHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmNlVXBsb2FkUmVzdW1lTW9kYWxcIik7XHJcbiAgaWYgKGVyKHIpKSB7XHJcbiAgICBsZXQgZSA9IHIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJ2lucHV0W3R5cGU9XCJmaWxlXCJdI2J0bi1mb3JjZVJlc3VtZSwgaW5wdXRbdHlwZT1cImZpbGVcIl1baWQqPVwicmVzdW1lXCIgaV0nKTtcclxuICAgIGlmIChlKSByZXR1cm4gZVxyXG4gIH1cclxuICBsZXQgbiA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICdpbnB1dFt0eXBlPVwiZmlsZVwiXSNidG4tcmVzdW1lLCBpbnB1dFt0eXBlPVwiZmlsZVwiXVtpZCo9XCJyZXN1bWVcIiBpXScpKS5maW5kKGVlKTtcclxuICByZXR1cm4gbiB8fCBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJmaWxlXCJdOm5vdCgjYnRuLWNvdmVyTGV0dGVyKScpKVxyXG4gICAgLmZpbmQoZSA9PiBlZShlKSAmJiBldChlKSkgfHwgbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBlZShlKSB7XHJcbiAgbGV0IHQgPSBlLmNsb3Nlc3QoXCIuc2VjdGlvbi13cmFwcGVyLCAjZm9yY2VVcGxvYWRSZXN1bWVNb2RhbCwgLm1vZGFsXCIpO1xyXG4gIHJldHVybiB0ID8gZXIodCkgOiBlbihlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBldChlKSB7XHJcbiAgbGV0IHQgPSBlLmNsb3Nlc3QoXCIuc2VjdGlvbi13cmFwcGVyLCAjZm9yY2VVcGxvYWRSZXN1bWVNb2RhbCwgLm1vZGFsXCIpLFxyXG4gICAgciA9IFtlLmlkLCBlLm5hbWUsIGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hdXRvbWF0aW9uLWlkXCIpLCB0Py50ZXh0Q29udGVudF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXHJcbiAgICAgIFwiIFwiKS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiByLmluY2x1ZGVzKFwicmVzdW1lXCIpIHx8IHIuaW5jbHVkZXMoXCJjdXJyaWN1bHVtIHZpdGFlXCIpIHx8IC9cXGJjdlxcYi8udGVzdChyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlcihlKSB7XHJcbiAgcmV0dXJuIGVuKGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuKGUpIHtcclxuICBpZiAoIWUgfHwgZS5oYXNBdHRyaWJ1dGUoXCJoaWRkZW5cIikgfHwgXCJ0cnVlXCIgPT09IGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIikpIHJldHVybiAhMTtcclxuICBsZXQgdCA9IGUub3duZXJEb2N1bWVudD8uZGVmYXVsdFZpZXcgfHwgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHdpbmRvdyA6IG51bGwpLFxyXG4gICAgciA9IHQ/LmdldENvbXB1dGVkU3R5bGU/LihlKTtcclxuICByZXR1cm4gKCFyIHx8IFwibm9uZVwiICE9PSByLmRpc3BsYXkgJiYgXCJoaWRkZW5cIiAhPT0gci52aXNpYmlsaXR5ICYmIFwiMFwiICE9PSByLm9wYWNpdHkpICYmIChcclxuICAgIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZS5nZXRDbGllbnRSZWN0cyB8fCBlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoID4gMClcclxufVxyXG5cclxuZnVuY3Rpb24gZW8oKSB7XHJcbiAgbGV0IHtcclxuICAgIHNlY3Rpb246IGUsXHJcbiAgICBpbnB1dDogdCxcclxuICAgIHRyaWdnZXJCdXR0b246IHJcclxuICB9ID0gUSgpO1xyXG4gIHJldHVybiAhIWUgJiYgISF0ICYmICEhclxyXG59XHJcblxyXG5mdW5jdGlvbiBlaSgpIHtcclxuICBsZXQgZSA9IFEoKTtcclxuICBpZiAoIWUuc2VjdGlvbiB8fCAhZS5pbnB1dCB8fCAhZS50cmlnZ2VyQnV0dG9uKSByZXR1cm4gITE7XHJcbiAgbGV0IHQgPSAhIWUudXBsb2FkZWRGaWxlTmFtZT8udGV4dENvbnRlbnQ/LnRyaW0oKTtcclxuICByZXR1cm4gIXQgfHwgISFlLnJlbW92ZUJ1dHRvblxyXG59XHJcblxyXG5mdW5jdGlvbiBlYSgpIHtcclxuICBsZXQge1xyXG4gICAgdXBsb2FkZWRGaWxlTmFtZTogZSxcclxuICAgIHJlbW92ZUJ1dHRvbjogdFxyXG4gIH0gPSBRKCk7XHJcbiAgcmV0dXJuICEhZT8udGV4dENvbnRlbnQ/LnRyaW0oKSAmJiAhIXRcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlbCgpIHtcclxuICByZXR1cm4gYXdhaXQgdGwoKSwgYXdhaXQgKDAsIHUud2FpdEZvckNvbmRpdGlvbikoKCkgPT4gZWkoKSwge1xyXG4gICAgdGltZW91dDogNWUzLFxyXG4gICAgaW50ZXJ2YWw6IDEwMCxcclxuICAgIG9ic2VydmVUYXJnZXQ6IGRvY3VtZW50LmJvZHlcclxuICB9KSwgZWkoKSA/IFwicmVxdWlyZWRcIiA6IFwiXCJcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlcygpIHtcclxuICBsZXQge1xyXG4gICAgc2VjdGlvbjogZSxcclxuICAgIHVwbG9hZGVkRmlsZU5hbWU6IHQsXHJcbiAgICByZW1vdmVCdXR0b246IHJcclxuICB9ID0gUSgpO1xyXG4gIHJldHVybiAhdD8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCAhIXIgJiYgKGF3YWl0IGIociksIGF3YWl0ICgwLCB1LndhaXRGb3JDb25kaXRpb24pKCgpID0+IHtcclxuICAgIGxldCBlID0gUSgpO1xyXG4gICAgcmV0dXJuICFlLnVwbG9hZGVkRmlsZU5hbWU/LnRleHRDb250ZW50Py50cmltKCkgJiYgIWUudHJpZ2dlckJ1dHRvbj8uZGlzYWJsZWRcclxuICB9LCB7XHJcbiAgICB0aW1lb3V0OiA0ZTMsXHJcbiAgICBpbnRlcnZhbDogMTAwLFxyXG4gICAgb2JzZXJ2ZVRhcmdldDogZSB8fCBkb2N1bWVudC5ib2R5XHJcbiAgfSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV1KGUpIHtcclxuICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkge1xyXG4gICAgbGV0IHQgPSBlLnRyaW0oKSxcclxuICAgICAgciA9IHQudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiBcImNhXCIgPT09IHIgfHwgXCJjYW5hZGFcIiA9PT0gciA/IFwiQ2FuYWRhXCIgOiBcInVzXCIgPT09IHIgfHwgXCJ1c2FcIiA9PT0gciB8fFxyXG4gICAgICBcInVuaXRlZCBzdGF0ZXNcIiA9PT0gciB8fCBcInVuaXRlZCBzdGF0ZXMgb2YgYW1lcmljYVwiID09PSByID8gXCJVbml0ZWQgU3RhdGVzXCIgOiBcInVrXCIgPT09IHIgfHxcclxuICAgICAgXCJnYlwiID09PSByIHx8IFwiZ2JyXCIgPT09IHIgfHwgXCJncmVhdCBicml0YWluXCIgPT09IHIgfHwgXCJ1bml0ZWQga2luZ2RvbVwiID09PSByID9cclxuICAgICAgXCJVbml0ZWQgS2luZ2RvbVwiIDogdFxyXG4gIH1cclxuICByZXR1cm4gXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBlYyhlKSB7XHJcbiAgbGV0IHQgPSBldShlKTtcclxuICByZXR1cm4gXCJDYW5hZGFcIiA9PT0gdCA/IFtcIkNhbmFkYVwiLCBcIkNBTkFEQVwiXSA6IFwiVW5pdGVkIFN0YXRlc1wiID09PSB0ID8gW1wiVW5pdGVkIFN0YXRlc1wiLFxyXG4gICAgXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIiwgXCJVU0FcIiwgXCJVTklURUQgU1RBVEVTXCJcclxuICBdIDogdCA/IFt0XSA6IFtdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkKCkge1xyXG4gIGxldCBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdWJsaWMtc2l0ZS1hZGRyZXNzLWNvdW50cnktc2VsZWN0LXdyYXBwZXJcIik7XHJcbiAgaWYgKGUpIHJldHVybiBlO1xyXG4gIGxldCB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdWJsaWMtc2l0ZS1hZGRyZXNzLWNvdW50cnlcIiksXHJcbiAgICByID0gdD8uY2xvc2VzdCgnW2lkKj1cIi1zZWxlY3Qtd3JhcHBlclwiXSwgLnBjdHktaW5wdXQtc2VsZWN0LWZ1bGwtY29udGFpbmVyLCBbcm9sZT1cImNvbWJvYm94XCJdJyk7XHJcbiAgcmV0dXJuIHIgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICdbaWQqPVwiYWRkcmVzcy1jb3VudHJ5XCJdW2lkKj1cIi1zZWxlY3Qtd3JhcHBlclwiXSwgW2RhdGEtYXV0b21hdGlvbi1pZCo9XCJjb3VudHJ5XCJdW2lkKj1cIi1zZWxlY3Qtd3JhcHBlclwiXSdcclxuICAgIClcclxufVxyXG5sZXQgZWYgPSAyMCxcclxuICBlcCA9IDEyLFxyXG4gIGVtID0gNTAsXHJcbiAgZWggPSAyLFxyXG4gIGVnID0gMjtcclxuXHJcbmZ1bmN0aW9uIGViKGUpIHtcclxuICByZXR1cm4gZS5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXNlbGVjdC1pbnB1dC1zaW5nbGUtdmFsdWVcIik/LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBleShlKSB7XHJcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZXYoZSwgdCkge1xyXG4gIGxldCByID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGUpLFxyXG4gICAgbiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IociwgXCJ2YWx1ZVwiKT8uc2V0LFxyXG4gICAgbyA9ICh0LCByKSA9PiB7XHJcbiAgICAgIG4gPyBuLmNhbGwoZSwgdCkgOiBlLnZhbHVlID0gdDtcclxuICAgICAgbGV0IG8gPSBlLl92YWx1ZVRyYWNrZXI7XHJcbiAgICAgIG8/LnNldFZhbHVlPy4ocilcclxuICAgIH07XHJcbiAgbyhcIlwiLCBlLnZhbHVlKSwgZS5kaXNwYXRjaEV2ZW50KFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgSW5wdXRFdmVudCA/IG5ldyBJbnB1dEV2ZW50KFwiaW5wdXRcIiwge1xyXG4gICAgYnViYmxlczogITAsXHJcbiAgICBpbnB1dFR5cGU6IFwiZGVsZXRlQ29udGVudEJhY2t3YXJkXCIsXHJcbiAgICBkYXRhOiBudWxsXHJcbiAgfSkgOiBuZXcgRXZlbnQoXCJpbnB1dFwiLCB7XHJcbiAgICBidWJibGVzOiAhMFxyXG4gIH0pKTtcclxuICBsZXQgaSA9IFwiXCI7XHJcbiAgZm9yIChsZXQgciBvZiB0KSB7XHJcbiAgICBlLmRpc3BhdGNoRXZlbnQoXCJmdW5jdGlvblwiID09IHR5cGVvZiBLZXlib2FyZEV2ZW50ID8gbmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIsIHtcclxuICAgICAga2V5OiByLFxyXG4gICAgICBidWJibGVzOiAhMCxcclxuICAgICAgY2FuY2VsYWJsZTogITBcclxuICAgIH0pIDogbmV3IEV2ZW50KFwia2V5ZG93blwiLCB7XHJcbiAgICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgICBjYW5jZWxhYmxlOiAhMFxyXG4gICAgfSkpLCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIElucHV0RXZlbnQgJiYgZS5kaXNwYXRjaEV2ZW50KG5ldyBJbnB1dEV2ZW50KFwiYmVmb3JlaW5wdXRcIiwge1xyXG4gICAgICBkYXRhOiByLFxyXG4gICAgICBpbnB1dFR5cGU6IFwiaW5zZXJ0VGV4dFwiLFxyXG4gICAgICBidWJibGVzOiAhMCxcclxuICAgICAgY2FuY2VsYWJsZTogITBcclxuICAgIH0pKTtcclxuICAgIGxldCB0ID0gYCR7aX0ke3J9YDtcclxuICAgIG8odCwgaSksIGUuZGlzcGF0Y2hFdmVudChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIElucHV0RXZlbnQgPyBuZXcgSW5wdXRFdmVudChcImlucHV0XCIsIHtcclxuICAgICAgZGF0YTogcixcclxuICAgICAgaW5wdXRUeXBlOiBcImluc2VydFRleHRcIixcclxuICAgICAgYnViYmxlczogITBcclxuICAgIH0pIDogbmV3IEV2ZW50KFwiaW5wdXRcIiwge1xyXG4gICAgICBidWJibGVzOiAhMFxyXG4gICAgfSkpLCBlLmRpc3BhdGNoRXZlbnQoXCJmdW5jdGlvblwiID09IHR5cGVvZiBLZXlib2FyZEV2ZW50ID8gbmV3IEtleWJvYXJkRXZlbnQoXCJrZXl1cFwiLCB7XHJcbiAgICAgIGtleTogcixcclxuICAgICAgYnViYmxlczogITAsXHJcbiAgICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgICB9KSA6IG5ldyBFdmVudChcImtleXVwXCIsIHtcclxuICAgICAgYnViYmxlczogITAsXHJcbiAgICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgICB9KSksIGkgPSB0LCBhd2FpdCAoMCwgcC5kZWxheSkoMTApXHJcbiAgfVxyXG4gIGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwge1xyXG4gICAgYnViYmxlczogITBcclxuICB9KSlcclxufVxyXG5cclxuZnVuY3Rpb24gZXcoZSwgdCkge1xyXG4gIGlmIChcInRydWVcIiAhPT0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpKSByZXR1cm4gbnVsbDtcclxuICBsZXQgciA9IHQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKSB8fCB0LmdldEF0dHJpYnV0ZShcImFyaWEtb3duc1wiKSB8fCBlLmdldEF0dHJpYnV0ZShcclxuICAgIFwiYXJpYS1jb250cm9sc1wiKSB8fCBlLmdldEF0dHJpYnV0ZShcImFyaWEtb3duc1wiKTtcclxuICBpZiAocikge1xyXG4gICAgbGV0IGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyKTtcclxuICAgIGlmIChlKSByZXR1cm4gZVxyXG4gIH1cclxuICBsZXQgbiA9IChlLmlkIHx8IHQuaWQgfHwgXCJcIikucmVwbGFjZSgvXFwuL2csIFwiLVwiKS5yZXBsYWNlKC8tc2VsZWN0LXdyYXBwZXIkLywgXCJcIik7XHJcbiAgaWYgKG4pIHtcclxuICAgIGxldCBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2lkKj1cIiR7bn1cIl1baWQqPVwiZHJvcGRvd24tbGlzdC1jb250YWluZXJcIl1gKTtcclxuICAgIGlmIChlKSByZXR1cm4gZVxyXG4gIH1cclxuICByZXR1cm4gbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBlUyhlKSB7XHJcbiAgbGV0IHQgPSBlZCgpIHx8IGUsXHJcbiAgICByID0gdC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgcmV0dXJuIHIgJiYgITEgIT09IHIuaXNDb25uZWN0ZWQgPyB7XHJcbiAgICBjb250cm9sOiB0LFxyXG4gICAgaW5wdXQ6IHIsXHJcbiAgICBsaXN0Ym94OiBldyh0LCByKVxyXG4gIH0gOiBudWxsXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZUUoZSwgdCkge1xyXG4gIGxldCByID0gXCJtaXNzaW5nX3NlYXJjaF9pbnB1dFwiO1xyXG4gIGZvciAobGV0IHQgPSAwOyB0IDwgZWg7IHQrKykge1xyXG4gICAgbGV0IHQgPSBlUyhlKTtcclxuICAgIGlmICghdCkge1xyXG4gICAgICByID0gXCJtaXNzaW5nX3NlYXJjaF9pbnB1dFwiLCBhd2FpdCAoMCwgcC5kZWxheSkoZW0pO1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG4gICAgaWYgKHQubGlzdGJveCkgcmV0dXJuIHQ7XHJcbiAgICBcInRydWVcIiAhPT0gdC5jb250cm9sLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikgJiYgYXdhaXQgYih0LmlucHV0LCA1MCwgMTAwKTtcclxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgZWY7IHQrKykge1xyXG4gICAgICBsZXQgdCA9IGVTKGUpO1xyXG4gICAgICBpZiAodCkge1xyXG4gICAgICAgIGlmICh0Lmxpc3Rib3gpIHJldHVybiB0O1xyXG4gICAgICAgIGlmIChcInRydWVcIiAhPT0gdC5jb250cm9sLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikpIHtcclxuICAgICAgICAgIHIgPSBcIm5vdF9leHBhbmRlZFwiO1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgciA9IFwibWlzc2luZ19vd25lZF9saXN0Ym94XCJcclxuICAgICAgfSBlbHNlIHIgPSBcIm1pc3Npbmdfc2VhcmNoX2lucHV0XCI7XHJcbiAgICAgIGF3YWl0ICgwLCBwLmRlbGF5KShlbSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGNvbnNvbGUud2FybihgW1BheWxvY2l0eV1bQ291bnRyeV0gc2VhcmNoIHVuYXZhaWxhYmxlIHBoYXNlPSR7dH0gcmVhc29uPSR7cn1gKSwgbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBleChlKSB7XHJcbiAgbGV0IHQgPSBlLnF1ZXJ5U2VsZWN0b3IoXCIucGN0eS1pbnB1dC1zZWxlY3RfX21lbnUtbGlzdFwiKSB8fCBlLFxyXG4gICAgciA9IEFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2W3RpdGxlXVwiKSk7XHJcbiAgcmV0dXJuIHIubGVuZ3RoID4gMCA/IHIgOiBBcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwibGksIFtyb2xlPSdvcHRpb24nXSwgLnBjdHktaW5wdXQtc2VsZWN0X19vcHRpb25cIikpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVDKGUpIHtcclxuICByZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKT8udHJpbSgpIHx8IGUudGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVBKGUsIHQpIHtcclxuICBsZXQgciA9IGUuZmlsdGVyKGUgPT4gZV8oZUMoZSksIHQpKTtcclxuICByZXR1cm4gMSA9PT0gci5sZW5ndGggPyByWzBdIDogbnVsbFxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVrKGUpIHtcclxuICBsZXQgdCA9IGVkKCkgfHwgZSxcclxuICAgIHIgPSB0LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICByICYmIChhd2FpdCBldihyLCBcIlwiKSwgXCJ0cnVlXCIgPT09IHQuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKSAmJiBhd2FpdCBiKHIpLCByLmJsdXIoKSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlVChlLCB0KSB7XHJcbiAgbGV0IHIgPSBlYihlKTtcclxuICBpZiAoZV8ociwgdCkpIHJldHVybiBjb25zb2xlLmluZm8oXHJcbiAgICAgIGBbUGF5bG9jaXR5XVtDb3VudHJ5XSBhbHJlYWR5IGNvbW1pdHRlZCBjdXJyZW50VmFsdWU9JHtleShyKX0gY2FuZGlkYXRlVmFsdWVzPSR7ZXkodCl9YCksXHJcbiAgICAhMDtcclxuICBsZXQgbiA9IGUucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gIGlmICghbikgcmV0dXJuIGNvbnNvbGUud2FybihcclxuICAgIGBbUGF5bG9jaXR5XVtDb3VudHJ5XSBmaWxsIGZhaWxlZCByZWFzb249bWlzc2luZ19zZWFyY2hfaW5wdXQgY3VycmVudFZhbHVlPSR7ZXkocil9IGNhbmRpZGF0ZVZhbHVlcz0ke2V5KHQpfWBcclxuICAgICksICExO1xyXG4gIGxldCBvID0gYXdhaXQgZUUoZSwgXCJpbml0aWFsXCIpO1xyXG4gIGlmICghbykgcmV0dXJuIGNvbnNvbGUud2FybihcclxuICAgIGBbUGF5bG9jaXR5XVtDb3VudHJ5XSBmaWxsIGZhaWxlZCByZWFzb249c2VhcmNoX3VuYXZhaWxhYmxlIHBoYXNlPWluaXRpYWwgY3VycmVudFZhbHVlPSR7ZXkocil9IGNhbmRpZGF0ZVZhbHVlcz0ke2V5KHQpfWBcclxuICAgICksICExO1xyXG4gIChuID0gby5pbnB1dCkuZm9jdXMoKSwgYXdhaXQgZXYobiwgdFswXSk7XHJcbiAgbGV0IGkgPSBudWxsLFxyXG4gICAgYSA9IFtdLFxyXG4gICAgbCA9IDA7XHJcbiAgZm9yIChsZXQgciA9IDA7IHIgPCBlZjsgcisrKSB7XHJcbiAgICBsZXQgciA9IGVTKGUpLFxyXG4gICAgICBvID0gIXIgfHwgXCJ0cnVlXCIgIT09IHIuY29udHJvbC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpLFxyXG4gICAgICBzID0gISEociAmJiByLmlucHV0ICE9PSBuKTtcclxuICAgIGlmIChvIHx8IHMgfHwgITEgPT09IG4uaXNDb25uZWN0ZWQpIHtcclxuICAgICAgaWYgKGwgPj0gZWcgfHwgKGwrKywgY29uc29sZS5pbmZvKFxyXG4gICAgICAgICAgYFtQYXlsb2NpdHldW0NvdW50cnldIHNlYXJjaCByZWNvdmVyeSBhdHRlbXB0PSR7bH0gcmVhc29uPSR7bz9cIm5vdF9leHBhbmRlZFwiOnM/XCJpbnB1dF9yZXBsYWNlZFwiOlwiaW5wdXRfZGlzY29ubmVjdGVkXCJ9YFxyXG4gICAgICAgICAgKSwgIShyID0gYXdhaXQgZUUoZSwgXCJyZWNvdmVyeVwiKSkpKSBicmVhaztcclxuICAgICAgKG4gPSByLmlucHV0KS5mb2N1cygpLCBhd2FpdCBldihuLCB0WzBdKVxyXG4gICAgfVxyXG4gICAgbGV0IHUgPSByPy5saXN0Ym94O1xyXG4gICAgaWYgKHUpIHtcclxuICAgICAgbGV0IGUgPSBleCh1KTtcclxuICAgICAgaWYgKGEgPSBlLm1hcChlQykuZmlsdGVyKEJvb2xlYW4pLnNsaWNlKDAsIDIwKSwgaSA9IGVBKGUsIHQpKSBicmVha1xyXG4gICAgfVxyXG4gICAgYXdhaXQgKDAsIHAuZGVsYXkpKGVtKVxyXG4gIH1cclxuICBpZiAoIWkpIHJldHVybiBjb25zb2xlLndhcm4oXHJcbiAgICBgW1BheWxvY2l0eV1bQ291bnRyeV0gZmlsbCBmYWlsZWQgcmVhc29uPW5vX3VuaXF1ZV9leGFjdF9vcHRpb24gc2VhcmNoVGVybT0ke2V5KHRbMF0pfSBjYW5kaWRhdGVWYWx1ZXM9JHtleSh0KX0gbW91bnRlZE9wdGlvblZhbHVlcz0ke2V5KGEpfWBcclxuICAgICksIGF3YWl0IGVrKGUpLCAhMTtcclxuICBpLnNjcm9sbEludG9WaWV3KHtcclxuICAgIGJsb2NrOiBcImNlbnRlclwiXHJcbiAgfSksIGF3YWl0IGIoaSk7XHJcbiAgbGV0IHMgPSBlZCgpIHx8IGU7XHJcbiAgcy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik/LmJsdXIoKTtcclxuICBmb3IgKGxldCByID0gMDsgciA8IGVwOyByKyspIHtcclxuICAgIGxldCByID0gZWQoKSB8fCBlO1xyXG4gICAgaWYgKGVfKGViKHIpLCB0KSkgcmV0dXJuIGNvbnNvbGUuaW5mbyhcclxuICAgICAgICBgW1BheWxvY2l0eV1bQ291bnRyeV0gY29tbWl0dGVkIGNvbW1pdHRlZFZhbHVlPSR7ZXkoZWIocikpfSBjYW5kaWRhdGVWYWx1ZXM9JHtleSh0KX1gKSxcclxuICAgICAgITA7XHJcbiAgICBhd2FpdCAoMCwgcC5kZWxheSkoZW0pXHJcbiAgfVxyXG4gIHJldHVybiBjb25zb2xlLndhcm4oXHJcbiAgICBgW1BheWxvY2l0eV1bQ291bnRyeV0gZmlsbCBmYWlsZWQgcmVhc29uPWNvbW1pdF9yZWFkYmFja19taXNtYXRjaCBjb21taXR0ZWRWYWx1ZT0ke2V5KGViKGVkKCl8fGUpKX0gY2FuZGlkYXRlVmFsdWVzPSR7ZXkodCl9YFxyXG4gICAgKSwgYXdhaXQgZWsoZSksICExXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZUYoZSkge1xyXG4gIGZvciAobGV0IHQgPSAwOyB0IDwgZXA7IHQrKykge1xyXG4gICAgbGV0IHQgPSBlZCgpIHx8IGU7XHJcbiAgICBpZiAoIWViKHQpKSByZXR1cm4gITA7XHJcbiAgICBhd2FpdCAoMCwgcC5kZWxheSkoZW0pXHJcbiAgfVxyXG4gIHJldHVybiAhMVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVJKGUsIHQpIHtcclxuICBpZiAodCkgcmV0dXJuIGF3YWl0IGVUKGUsIFt0XSk7XHJcbiAgYXdhaXQgZWsoZSk7XHJcbiAgbGV0IHIgPSBlZCgpIHx8IGU7XHJcbiAgaWYgKCFlYihyKSkgcmV0dXJuICEwO1xyXG4gIGxldCBuID0gci5xdWVyeVNlbGVjdG9yKFwiLmNzcy1iNDBiaW1cIikgfHwgci5xdWVyeVNlbGVjdG9yKFwiW2FyaWEtbGFiZWw9J2RlbGV0ZSddXCIpPy5jbG9zZXN0KFxyXG4gICAgXCJbdGFiaW5kZXhdXCIpO1xyXG4gIHJldHVybiAhIW4gJiYgKGF3YWl0IGIobiksIGF3YWl0IGVGKHIpKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVqKGUsIHQpIHtcclxuICBsZXQgciA9IGViKGUpO1xyXG4gIGlmIChhd2FpdCBlVChlLCB0KSkgcmV0dXJuICEwO1xyXG4gIGxldCBuID0gZWQoKSB8fCBlLFxyXG4gICAgbyA9IGViKG4pLFxyXG4gICAgaSA9IHIgPyBlXyhvLCBbcl0pIDogIW87XHJcbiAgaWYgKGkpIHJldHVybiBhd2FpdCBlayhuKSwgITE7XHJcbiAgbGV0IGEgPSBhd2FpdCBlSShuLCByKTtcclxuICByZXR1cm4gYSB8fCBjb25zb2xlLndhcm4oXCJbUGF5bG9jaXR5XVtDb3VudHJ5XSByb2xsYmFjayBmYWlsZWRcIiwge1xyXG4gICAgcmVhc29uOiBcIm5vdF9yZXN0b3JlZFwiXHJcbiAgfSksIGF3YWl0IGVrKG4pLCAhMVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVEKGUpIHtcclxuICBsZXQgdCA9IGVjKGUpO1xyXG4gIGlmICgwID09PSB0Lmxlbmd0aCkgcmV0dXJuIGNvbnNvbGUud2FybihcclxuICAgIFwiW1BheWxvY2l0eV1bQ291bnRyeV0gZmlsbCBza2lwcGVkIHJlYXNvbj1lbXB0eV9zb3VyY2VfY291bnRyeVwiKSwgITE7XHJcbiAgbGV0IHIgPSBlZCgpO1xyXG4gIHJldHVybiByID8gKGNvbnNvbGUuaW5mbyhcclxuICAgIGBbUGF5bG9jaXR5XVtDb3VudHJ5XSBmaWxsIHN0YXJ0IHNvdXJjZUNvdW50cnk9JHtleShldShlKSl9IGNhbmRpZGF0ZVZhbHVlcz0ke2V5KHQpfSBjdXJyZW50VmFsdWU9JHtleShlYihyKSl9YFxyXG4gICAgKSwgYXdhaXQgZWoociwgdCkpIDogKGNvbnNvbGUud2FybihcclxuICAgIGBbUGF5bG9jaXR5XVtDb3VudHJ5XSBmaWxsIGZhaWxlZCByZWFzb249bWlzc2luZ19jb3VudHJ5X2NvbnRyb2wgc291cmNlQ291bnRyeT0ke2V5KGV1KGUpKX0gY2FuZGlkYXRlVmFsdWVzPSR7ZXkodCl9YFxyXG4gICAgKSwgITEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVQKGUpIHtcclxuICByZXR1cm4gU3RyaW5nKGUgPz8gXCJcIikubm9ybWFsaXplKFwiTkZLRFwiKS5yZXBsYWNlKC9cXHB7TX0rL2d1LCBcIlwiKS5yZXBsYWNlKC9bXlxccHtMfVxccHtOfV0rL2d1LCBcIiBcIilcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlXyhlLCB0KSB7XHJcbiAgbGV0IHIgPSBlUChlKTtcclxuICByZXR1cm4gXCJcIiAhPT0gciAmJiB0LnNvbWUoZSA9PiBlUChlKSA9PT0gcilcclxufVxyXG5cclxuZnVuY3Rpb24gZUwoZSkge1xyXG4gIGxldCB0ID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtc2VsZWN0LWlucHV0LXNpbmdsZS12YWx1ZSwgLnJ3LWlucHV0XCIpKS5tYXAoZSA9PiBlXHJcbiAgICAudGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBcIlwiKS5maW5kKEJvb2xlYW4pO1xyXG4gIGlmICh0KSByZXR1cm4ge1xyXG4gICAgc291cmNlOiBcImRpc3BsYXlcIixcclxuICAgIHZhbHVlOiB0XHJcbiAgfTtcclxuICBsZXQgciA9IGUucXVlcnlTZWxlY3RvcihcImlucHV0XCIpPy52YWx1ZT8udHJpbSgpO1xyXG4gIGlmIChyKSByZXR1cm4ge1xyXG4gICAgc291cmNlOiBcImlucHV0XCIsXHJcbiAgICB2YWx1ZTogclxyXG4gIH07XHJcbiAgbGV0IG4gPSBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblthcmlhLWxhYmVsXVwiKSkubWFwKGUgPT4gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpXHJcbiAgICA/LnRyaW0oKSB8fCBcIlwiKS5tYXAoZSA9PiBlLm1hdGNoKC9eKC4rPylcXHMrRGlzbWlzcyQvaSk/LlsxXT8udHJpbSgpIHx8IFwiXCIpLmZpbmQoQm9vbGVhbik7XHJcbiAgcmV0dXJuIG4gPyB7XHJcbiAgICBzb3VyY2U6IFwidGFnXCIsXHJcbiAgICB2YWx1ZTogblxyXG4gIH0gOiB7XHJcbiAgICBzb3VyY2U6IFwibm9uZVwiLFxyXG4gICAgdmFsdWU6IFwiXCJcclxuICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZVIoZSwgdCwgciA9ICExKSB7XHJcbiAgaWYgKCFlKSByZXR1cm4gITE7XHJcbiAgbGV0IG4gPSBlTChlKSxcclxuICAgIG8gPSBuLnZhbHVlLFxyXG4gICAgaSA9IC9eKHNlbGVjdHxjaG9vc2V8cGxlYXNlIHNlbGVjdHwtLSkvaS50ZXN0KG8pIHx8IFwiXCIgPT09IG87XHJcbiAgaWYgKGNvbnNvbGUuaW5mbyhcIltQYXlsb2NpdHldW1NlbGVjdF0gY29tbWl0dGVkIHJlYWRiYWNrXCIsIHtcclxuICAgICAgY29udHJvbElkOiBlLmlkIHx8IFwidW5rbm93blwiLFxyXG4gICAgICBzdGFnZTogXCJiZWZvcmVfZmlsbFwiLFxyXG4gICAgICBzb3VyY2U6IG4uc291cmNlLFxyXG4gICAgICBoYXNDb21taXR0ZWRWYWx1ZTogISFvLFxyXG4gICAgICBpc1BsYWNlaG9sZGVyOiBpXHJcbiAgICB9KSwgIWkgJiYgdC5sZW5ndGggPiAwKSB7XHJcbiAgICBsZXQgZSA9IFN0cmluZyh0WzBdKS50cmltKCk7XHJcbiAgICBpZiAociA/IGVfKG8sIHQpIDogKDAsIGwuaXNNYXRjaGVkKShvLCBlKSkgcmV0dXJuICEwXHJcbiAgfVxyXG4gIGxldCBhID0gZS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikgfHwgbnVsbCxcclxuICAgIHMgPSBhIHx8IGU7XHJcbiAgYXdhaXQgYihzLCA1MCwgMzAwKTtcclxuICBsZXQgdSA9IG51bGwsXHJcbiAgICBjID0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpO1xyXG4gIGlmIChjICYmICh1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYykpLCAhdSkge1xyXG4gICAgbGV0IHQgPSBlLmdldEF0dHJpYnV0ZShcImFyaWEtb3duc1wiKSB8fCBzLmdldEF0dHJpYnV0ZShcImFyaWEtb3duc1wiKTtcclxuICAgIHQgJiYgKHUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KSlcclxuICB9XHJcbiAgaWYgKCF1KSB7XHJcbiAgICBsZXQgdCA9IGUuaWQgfHwgcy5pZCB8fCBcIlwiO1xyXG4gICAgaWYgKHQpIHtcclxuICAgICAgbGV0IGUgPSB0LnJlcGxhY2UoL1xcLi9nLCBcIi1cIikucmVwbGFjZSgvLXNlbGVjdC13cmFwcGVyJC8sIFwiXCIpLFxyXG4gICAgICAgIHIgPSBgW2lkKj1cIiR7ZX1cIl1baWQqPVwiZHJvcGRvd24tbGlzdC1jb250YWluZXJcIl1gLFxyXG4gICAgICAgIG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHIpO1xyXG4gICAgICBuICYmIG51bGwgIT09IG4ub2Zmc2V0UGFyZW50ICYmICh1ID0gbilcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKCF1KSB7XHJcbiAgICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucnctcG9wdXAtY29udGFpbmVyXCIpO1xyXG4gICAgZS5sZW5ndGggPiAwICYmICh1ID0gZVtlLmxlbmd0aCAtIDFdKVxyXG4gIH1cclxuICBpZiAoIXUpIHJldHVybiBhd2FpdCBiKHMpLCAhMTtcclxuICBsZXQgZCA9IHUucXVlcnlTZWxlY3RvcihcIi5wY3R5LWlucHV0LXNlbGVjdF9fbWVudS1saXN0XCIpIHx8IHUsXHJcbiAgICBmID0gW10sXHJcbiAgICBtID0gZC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2W3RpdGxlXVwiKTtcclxuICBpZiAobS5sZW5ndGggPiAwKSBmID0gQXJyYXkuZnJvbShtKTtcclxuICBlbHNlIHtcclxuICAgIGxldCB0ID0gZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLW93bnNcIik7XHJcbiAgICBpZiAodCkge1xyXG4gICAgICBsZXQgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQpO1xyXG4gICAgICBlICYmIChmID0gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKSkpXHJcbiAgICB9XHJcbiAgICAwID09PSBmLmxlbmd0aCAmJiAoZiA9IEFycmF5LmZyb20oZC5xdWVyeVNlbGVjdG9yQWxsKFwidWwgbGksIGRpdltyb2xlPSdvcHRpb24nXVwiKSkpXHJcbiAgfVxyXG4gIGxldCBoID0gZi5tYXAoZSA9PiBlLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpPy50cmltKCkgfHwgZS50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCIpLFxyXG4gICAgZyA9IC0xO1xyXG4gIGlmICh0Lmxlbmd0aCA+IDApXHJcbiAgICBmb3IgKGxldCBlIG9mIHQpIHtcclxuICAgICAgbGV0IHQgPSBTdHJpbmcoZSkudHJpbSgpO1xyXG4gICAgICBpZiAoL15cXGQrJC8udGVzdCh0KSkge1xyXG4gICAgICAgIGxldCBlID0gTnVtYmVyKHQpO1xyXG4gICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGUpICYmIGUgPj0gMCAmJiBlIDwgaC5sZW5ndGgpIHtcclxuICAgICAgICAgIGcgPSBlO1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKC0xICE9PSAoZyA9IGguZmluZEluZGV4KHQgPT4gciA/IGVfKHQsIFtlXSkgOiAoMCwgbC5pc01hdGNoZWQpKHQsIGUpKSkpIGJyZWFrXHJcbiAgICB9XHJcbiAgaWYgKC0xID09PSBnKSByZXR1cm4gYXdhaXQgYihzKSwgITE7XHJcbiAge1xyXG4gICAgbGV0IG4gPSBmW2ddO1xyXG4gICAgbi5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgIGJsb2NrOiBcImNlbnRlclwiXHJcbiAgICB9KSwgYXdhaXQgKDAsIHAuZGVsYXkpKDUwKSwgYXdhaXQgYihuKSwgYXdhaXQgKDAsIHAuZGVsYXkpKDEwMCk7XHJcbiAgICBsZXQgbyA9IGVMKGUpLFxyXG4gICAgICBpID0gby52YWx1ZSxcclxuICAgICAgYSA9ICEhKGkgJiYgKHIgPyBlXyhpLCB0KSA6IHQuc29tZShlID0+ICgwLCBsLmlzTWF0Y2hlZCkoaSwgZSkpKSk7XHJcbiAgICByZXR1cm4gY29uc29sZS5pbmZvKFwiW1BheWxvY2l0eV1bU2VsZWN0XSBjb21taXR0ZWQgcmVhZGJhY2tcIiwge1xyXG4gICAgICBjb250cm9sSWQ6IGUuaWQgfHwgXCJ1bmtub3duXCIsXHJcbiAgICAgIHN0YWdlOiBcImFmdGVyX3NlbGVjdGlvblwiLFxyXG4gICAgICBzb3VyY2U6IG8uc291cmNlLFxyXG4gICAgICBoYXNDb21taXR0ZWRWYWx1ZTogISFpLFxyXG4gICAgICBjb21taXR0ZWQ6IGFcclxuICAgIH0pLCBhXHJcbiAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVPKGUsIHQpIHtcclxuICBpZiAoIWUpIHJldHVybiAhMTtcclxuICBsZXQgciA9IGF3YWl0IHYoZSwgJ2RpdltkYXRhLWZvcio9XCJPYnRhaW5lZFwiXScpO1xyXG4gIGlmICghcikgcmV0dXJuICExO1xyXG4gIHIuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITAsXHJcbiAgICB2aWV3OiB3aW5kb3dcclxuICB9KSksIGF3YWl0ICgwLCBwLmRlbGF5KSgxMDApO1xyXG4gIGxldCBuID0gYXdhaXQgdihlLCAndWxbaWQqPVwiZWR1Y2F0aW9uSGlzdG9yeS5kZWdyZWVJZFwiXScpO1xyXG4gIGlmICghbikgcmV0dXJuICExO1xyXG4gIGxldCBvID0gQXJyYXkuZnJvbShuLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKSk7XHJcbiAgaWYgKDAgPT09IG8ubGVuZ3RoKSByZXR1cm4gITE7XHJcbiAgbGV0IGkgPSAodCA/PyBbXSkubWFwKGUgPT4gU3RyaW5nKGUpLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pLFxyXG4gICAgYSA9IG51bGw7XHJcbiAgZm9yIChsZXQgZSBvZiBpKSB7XHJcbiAgICBsZXQgdCA9IG8uZmluZEluZGV4KHQgPT4gKDAsIGwuaXNNYXRjaGVkKSh0LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIiwgZSkpO1xyXG4gICAgaWYgKC0xICE9PSB0KSB7XHJcbiAgICAgIGEgPSBvW3RdO1xyXG4gICAgICBicmVha1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gISFhICYmIChhLmNsaWNrKCksIGF3YWl0ICgwLCBwLmRlbGF5KSgxMDApLCAhMClcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlTShlLCB0KSB7XHJcbiAgaWYgKCFlKSByZXR1cm4gITE7XHJcbiAgbGV0IHIgPSBhd2FpdCB2KGUsICdpbnB1dFtpZCo9XCJ0eHQtZWR1Y2F0aW9uSGlzdG9yeS1ncmFkdWF0aW9uRGF0ZVwiXScpO1xyXG4gIHJldHVybiAhIXIgJiYgYXdhaXQgdGkociwgdClcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlTihlLCB0LCByID0gITEpIHtcclxuICBpZiAoIWUgfHwgIXQgfHwgMCA9PT0gdC5sZW5ndGgpIHJldHVybjtcclxuICBsZXQgbiA9IHQubWFwKGUgPT4gU3RyaW5nKGUpLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pO1xyXG4gIGZvciAobGV0IHQgb2Ygbikge1xyXG4gICAgZS5mb2N1cygpLCBhd2FpdCAoMCwgcC5kZWxheSkoNTApLCBlLnZhbHVlID0gdCwgKDAsIHMudHJpZ2dlckV2ZW50cykoZSwgW1wiaW5wdXRcIiwgXCJjaGFuZ2VcIl0pLFxyXG4gICAgICBhd2FpdCAoMCwgcC5kZWxheSkoMTAwKTtcclxuICAgIGxldCBuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJ3LXBvcHVwLWNvbnRhaW5lciwgW3JvbGU9XCJsaXN0Ym94XCJdJyk7XHJcbiAgICBpZiAobikge1xyXG4gICAgICBsZXQgciA9IEFycmF5LmZyb20obi5xdWVyeVNlbGVjdG9yQWxsKCdsaSwgW3JvbGU9XCJvcHRpb25cIl0nKSksXHJcbiAgICAgICAgbyA9IHIuZmluZChlID0+ICgwLCBsLmlzTWF0Y2hlZCkoZS50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCIsIHQpKTtcclxuICAgICAgbyA/IGF3YWl0IGIobykgOiAoZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLCB7XHJcbiAgICAgICAga2V5OiBcIkVudGVyXCIsXHJcbiAgICAgICAga2V5Q29kZTogMTMsXHJcbiAgICAgICAgYnViYmxlczogITBcclxuICAgICAgfSkpLCBhd2FpdCAoMCwgcC5kZWxheSkoMTAwKSlcclxuICAgIH1cclxuICAgIGlmICghcikgYnJlYWtcclxuICB9XHJcbiAgZS5ibHVyKCksIGF3YWl0ICgwLCBwLmRlbGF5KSgxMDApXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZSQoZSwgdCkge1xyXG4gIGlmICghZSB8fCAhdCB8fCAwID09PSB0Lmxlbmd0aCkgcmV0dXJuO1xyXG4gIGUuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITAsXHJcbiAgICB2aWV3OiB3aW5kb3dcclxuICB9KSksIGF3YWl0ICgwLCBwLmRlbGF5KSgyMDApO1xyXG4gIGxldCByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJsaXN0Ym94XCJdJyk7XHJcbiAgaWYgKCFyKSByZXR1cm47XHJcbiAgbGV0IG4gPSBBcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJvcHRpb25cIl0nKSksXHJcbiAgICBvID0gITE7XHJcbiAgZm9yIChsZXQgZSBvZiB0KSB7XHJcbiAgICBsZXQgdCA9IG4uZmluZCh0ID0+ICgwLCBsLmlzTWF0Y2hlZCkodC50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCIsIGUpKTtcclxuICAgIGlmICh0KSB7XHJcbiAgICAgIGF3YWl0IGIodCksIG8gPSAhMDtcclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcbiAgYXdhaXQgYihlKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVCKGUsIHQsIHIpIHtcclxuICBsZXQgbiA9IFooKTtcclxuICBpZiAoIW4pIHJldHVybjtcclxuICBsZXQgbyA9IGF3YWl0ICgwLCBsLmZldGNoUGRmQXNCbG9iKShlKTtcclxuICBvICYmIChhd2FpdCAoMCwgcy51cGxvYWRGaWxlcykobiwgbywgdCwgciksIGF3YWl0ICgwLCBwLmRlbGF5KSg1MDApKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVxKGUsIHQsIHIpIHtcclxuICBsZXQgbiA9IFEoKTtcclxuICBpZiAoIW4uaW5wdXQgfHwgIW4udHJpZ2dlckJ1dHRvbikgcmV0dXJuICExO1xyXG4gIGxldCBvID0gYXdhaXQgZXMoKTtcclxuICBpZiAoIW8pIHJldHVybiAhMTtcclxuICBhd2FpdCAoMCwgcy51cGxvYWRGaWxlcykobi5pbnB1dCwgYXdhaXQgKDAsIGwuZmV0Y2hDb3ZlckxldHRlclBkZkFzQmxvYikoZSksIHQsIHIsXHJcbiAgICBcIkNvdmVyIExldHRlclwiKTtcclxuICBsZXQgaSA9IGAke2UuY292ZXJMZXR0ZXJOYW1lfS5wZGZgLnRvTG93ZXJDYXNlKCk7XHJcbiAgcmV0dXJuIGF3YWl0ICgwLCB1LndhaXRGb3JDb25kaXRpb24pKCgpID0+IHtcclxuICAgIGxldCBlID0gUSgpLFxyXG4gICAgICB0ID0gZS51cGxvYWRlZEZpbGVOYW1lPy50ZXh0Q29udGVudD8udHJpbSgpLnRvTG93ZXJDYXNlKCkgfHwgXCJcIjtcclxuICAgIHJldHVybiB0LmluY2x1ZGVzKGkpIHx8ICEhdCAmJiAhIWUucmVtb3ZlQnV0dG9uXHJcbiAgfSwge1xyXG4gICAgdGltZW91dDogNWUzLFxyXG4gICAgaW50ZXJ2YWw6IDEwMCxcclxuICAgIG9ic2VydmVUYXJnZXQ6IG4uc2VjdGlvbiB8fCBkb2N1bWVudC5ib2R5XHJcbiAgfSlcclxufVxyXG5sZXQgZVUgPSAyLFxyXG4gIGVIID0gOCxcclxuICBlWSA9IDUwO1xyXG5cclxuZnVuY3Rpb24gZXooZSkge1xyXG4gIHJldHVybiBgJHtlPz9cIlwifWAudHJpbSgpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuZnVuY3Rpb24gZVYoKSB7XHJcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mby5za2lsbHNcIilcclxufVxyXG5cclxuZnVuY3Rpb24gZVcoZSkge1xyXG4gIHJldHVybiBlLmNsb3Nlc3QoXCIucmVhY3QtdGFnc2lucHV0XCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVHKGUpIHtcclxuICByZXR1cm4gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVhY3QtdGFnc2lucHV0LXRhZ1wiKSkubWFwKGUgPT4ge1xyXG4gICAgbGV0IHQgPSBlLnF1ZXJ5U2VsZWN0b3IoXCIucmVhY3QtdGFnc2lucHV0LXJlbW92ZVwiKT8udGV4dENvbnRlbnQgfHwgXCJcIixcclxuICAgICAgciA9IGUudGV4dENvbnRlbnQgfHwgXCJcIjtcclxuICAgIHJldHVybiB0ICYmIHIuZW5kc1dpdGgodCkgPyByLnNsaWNlKDAsIC10Lmxlbmd0aCkudHJpbSgpIDogci50cmltKClcclxuICB9KS5maWx0ZXIoQm9vbGVhbilcclxufVxyXG5cclxuZnVuY3Rpb24gZUsoZSwgdCkge1xyXG4gIGxldCByID0gZS5vd25lckRvY3VtZW50Py5kZWZhdWx0Vmlldz8uSFRNTElucHV0RWxlbWVudD8ucHJvdG90eXBlIHx8IChcInVuZGVmaW5lZFwiICE9XHJcbiAgICAgIHR5cGVvZiBIVE1MSW5wdXRFbGVtZW50ID8gSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUgOiB2b2lkIDApLFxyXG4gICAgbiA9IHIgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsIFwidmFsdWVcIik/LnNldCA6IHZvaWQgMCxcclxuICAgIG8gPSBlLnZhbHVlO1xyXG4gIG4gPyBuLmNhbGwoZSwgdCkgOiBlLnZhbHVlID0gdDtcclxuICBsZXQgaSA9IGUuX3ZhbHVlVHJhY2tlcjtcclxuICBpPy5zZXRWYWx1ZT8uKG8pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVYKGUsIHQpIHtcclxuICBlLmZvY3VzKCksIGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJmb2N1c2luXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY29tcG9zZWQ6ICEwXHJcbiAgfSkpLCBlSyhlLCB0KSwgZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY29tcG9zZWQ6ICEwXHJcbiAgfSkpLCBlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY29tcG9zZWQ6ICEwXHJcbiAgfSkpO1xyXG4gIGxldCByID0ge1xyXG4gICAga2V5OiBcIkVudGVyXCIsXHJcbiAgICBjb2RlOiBcIkVudGVyXCIsXHJcbiAgICBrZXlDb2RlOiAxMyxcclxuICAgIHdoaWNoOiAxMyxcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITAsXHJcbiAgICBjb21wb3NlZDogITBcclxuICB9O1xyXG4gIGZvciAobGV0IHQgb2YgW1wia2V5ZG93blwiLCBcImtleXByZXNzXCIsIFwia2V5dXBcIl0pIGUuZGlzcGF0Y2hFdmVudChcImZ1bmN0aW9uXCIgPT1cclxuICAgIHR5cGVvZiBLZXlib2FyZEV2ZW50ID8gbmV3IEtleWJvYXJkRXZlbnQodCwgcikgOiBuZXcgRXZlbnQodCwge1xyXG4gICAgICBidWJibGVzOiAhMCxcclxuICAgICAgY2FuY2VsYWJsZTogITBcclxuICAgIH0pKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVKKGUpIHtcclxuICBsZXQgdCA9IGV6KGUpO1xyXG4gIGZvciAobGV0IGUgPSAwOyBlIDwgZUg7IGUgKz0gMSkge1xyXG4gICAgbGV0IGUgPSBlVigpLFxyXG4gICAgICByID0gZSA/IGVXKGUpIDogbnVsbDtcclxuICAgIGlmIChyICYmIGVHKHIpLnNvbWUoZSA9PiBleihlKSA9PT0gdCkpIHJldHVybiAhMDtcclxuICAgIGF3YWl0ICgwLCBwLmRlbGF5KShlWSlcclxuICB9XHJcbiAgcmV0dXJuICExXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZVEoZSkge1xyXG4gIGxldCB0ID0gQXJyYXkuZnJvbShuZXcgTWFwKChlID8/IFtdKS5mbGF0TWFwKGUgPT4gYCR7ZT8/XCJcIn1gLnNwbGl0KFwiLFwiKSkubWFwKGUgPT4gZS50cmltKCkpXHJcbiAgICAgIC5maWx0ZXIoQm9vbGVhbikubWFwKGUgPT4gW2V6KGUpLCBlXSkpLnZhbHVlcygpKSxcclxuICAgIHIgPSBlVigpLFxyXG4gICAgbiA9IHIgPyBlVyhyKSA6IG51bGw7XHJcbiAgaWYgKCFyIHx8ICFuKSByZXR1cm4gY29uc29sZS53YXJuKFwiW1BheWxvY2l0eV1bU2tpbGxzXSBmaWxsIGZhaWxlZFwiLCB7XHJcbiAgICByZWFzb246IHIgPyBcImNvbnRhaW5lcl9ub3RfZm91bmRcIiA6IFwiaW5wdXRfbm90X2ZvdW5kXCIsXHJcbiAgICByZXF1ZXN0ZWRDb3VudDogdC5sZW5ndGhcclxuICB9KSwgITE7XHJcbiAgaWYgKDAgPT09IHQubGVuZ3RoKSByZXR1cm4gY29uc29sZS5pbmZvKFwiW1BheWxvY2l0eV1bU2tpbGxzXSBmaWxsIHNraXBwZWRcIiwge1xyXG4gICAgcmVhc29uOiBcImVtcHR5X3NraWxsX2xpc3RcIlxyXG4gIH0pLCAhMTtcclxuICBjb25zb2xlLmluZm8oXCJbUGF5bG9jaXR5XVtTa2lsbHNdIGZpbGwgc3RhcnRcIiwge1xyXG4gICAgcmVxdWVzdGVkQ291bnQ6IHQubGVuZ3RoLFxyXG4gICAgZXhpc3RpbmdDb3VudDogZUcobikubGVuZ3RoXHJcbiAgfSk7XHJcbiAgbGV0IG8gPSAwO1xyXG4gIGZvciAobGV0IFtlLCByXSBvZiB0LmVudHJpZXMoKSkge1xyXG4gICAgbGV0IG4gPSBlVigpLFxyXG4gICAgICBpID0gbiA/IGVXKG4pIDogbnVsbCxcclxuICAgICAgYSA9ICEhaSAmJiBlRyhpKS5zb21lKGUgPT4gZXooZSkgPT09IGV6KHIpKTtcclxuICAgIGlmIChhKSB7XHJcbiAgICAgIG8gKz0gMTtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuICAgIGxldCBsID0gITE7XHJcbiAgICBmb3IgKGxldCBuID0gMTsgbiA8PSBlVTsgbiArPSAxKSB7XHJcbiAgICAgIGxldCBpID0gZVYoKSxcclxuICAgICAgICBhID0gaSA/IGVXKGkpIDogbnVsbDtcclxuICAgICAgaWYgKCFpIHx8ICFhKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiW1BheWxvY2l0eV1bU2tpbGxzXSBpdGVtIGZhaWxlZFwiLCB7XHJcbiAgICAgICAgICByZWFzb246IGkgPyBcImNvbnRhaW5lcl9yZXBsYWNlZFwiIDogXCJpbnB1dF9yZXBsYWNlZFwiLFxyXG4gICAgICAgICAgaXRlbUluZGV4OiBlLFxyXG4gICAgICAgICAgcmVxdWVzdGVkQ291bnQ6IHQubGVuZ3RoLFxyXG4gICAgICAgICAgYXR0ZW1wdDogblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGEuY2xpY2soKSwgZVgoaSwgciksIGwgPSBhd2FpdCBlSihyKSkge1xyXG4gICAgICAgIG8gKz0gMTtcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICAgIGVLKGksIFwiXCIpLCBpLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIiwge1xyXG4gICAgICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgICAgIGNvbXBvc2VkOiAhMFxyXG4gICAgICB9KSksIGNvbnNvbGUud2FybihcIltQYXlsb2NpdHldW1NraWxsc10gY29tbWl0IHJlYWRiYWNrIGZhaWxlZFwiLCB7XHJcbiAgICAgICAgaXRlbUluZGV4OiBlLFxyXG4gICAgICAgIHJlcXVlc3RlZENvdW50OiB0Lmxlbmd0aCxcclxuICAgICAgICBhdHRlbXB0OiBuXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBpID0gbyA9PT0gdC5sZW5ndGg7XHJcbiAgcmV0dXJuIGNvbnNvbGUuaW5mbyhcIltQYXlsb2NpdHldW1NraWxsc10gZmlsbCBjb21wbGV0ZVwiLCB7XHJcbiAgICByZXF1ZXN0ZWRDb3VudDogdC5sZW5ndGgsXHJcbiAgICBjb21taXR0ZWRDb3VudDogbyxcclxuICAgIG1pc3NpbmdDb3VudDogdC5sZW5ndGggLSBvLFxyXG4gICAgY29tcGxldGU6IGlcclxuICB9KSwgaVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGVaKCkge1xyXG4gIGxldCBlID0gKDAsIGQuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFxyXG4gICAgICBcIi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ3NlY3Rpb24td3JhcHBlcicpXS8vYnV0dG9uW2NvbnRhaW5zKEBkYXRhLWF1dG9tYXRpb24taWQsICdBZGRXb3JrSGlzdG9yeScpXVwiXHJcbiAgICAgICksXHJcbiAgICB0ID0gZT8uY2xvc2VzdChcIi5zZWN0aW9uLXdyYXBwZXJcIiksXHJcbiAgICByID0gKDAsIGQuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFxyXG4gICAgICBcIi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ3NlY3Rpb24td3JhcHBlcicpXS8vYnV0dG9uW2NvbnRhaW5zKEBkYXRhLWF1dG9tYXRpb24taWQsICdBZGRFZHVjYXRpb24nKV1cIlxyXG4gICAgICApLFxyXG4gICAgbiA9IHI/LmNsb3Nlc3QoXCIuc2VjdGlvbi13cmFwcGVyXCIpO1xyXG4gIGlmICh0KSB7XHJcbiAgICBhd2FpdCBlMCgpLCBhd2FpdCAoMCwgcC5kZWxheSkoMTAwKTtcclxuICAgIGxldCBlID0gZTgoKTtcclxuICAgIDAgPT09IGUgPyAoYXdhaXQgZTUoKSwgYXdhaXQgKDAsIHAuZGVsYXkpKDE1MCksIGUgPSBlOCgpLCBhd2FpdCAoMCwgdS53YWl0Rm9yQ29uZGl0aW9uKSh0YSwge1xyXG4gICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgIG9ic2VydmVUYXJnZXQ6IGRvY3VtZW50LmJvZHlcclxuICAgIH0pKSA6IGNvbnNvbGUud2FybihgRmFpbGVkIHRvIGRlbGV0ZSBhbGwgZW1wbG95bWVudCBzZWN0aW9ucywgcmVtYWluaW5nOiAke2V9YClcclxuICB9XHJcbiAgaWYgKG4pIHtcclxuICAgIGxldCBlID0gaC51c2VQcm9maWxlU3RvcmUuZ2V0U3RhdGUoKS51c2VyUHJvZmlsZT8ucHJvZmlsZT8uZWR1Y2F0aW9uPy5sZW5ndGggfHwgMDtcclxuICAgIGF3YWl0IGUxKCksIGF3YWl0ICgwLCBwLmRlbGF5KSgxMDApO1xyXG4gICAgbGV0IHQgPSBlOSgpO1xyXG4gICAgMCA9PT0gdCAmJiBlID4gMCA/IChhd2FpdCBlNigpLCBhd2FpdCAoMCwgcC5kZWxheSkoMTUwKSwgdCA9IGU5KCksIGF3YWl0ICgwLCB1XHJcbiAgICAgIC53YWl0Rm9yQ29uZGl0aW9uKSh0YSwge1xyXG4gICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgIG9ic2VydmVUYXJnZXQ6IGRvY3VtZW50LmJvZHlcclxuICAgIH0pKSA6IHQgPiBlICYmIGNvbnNvbGUud2FybihgRmFpbGVkIHRvIGRlbGV0ZSBhbGwgZWR1Y2F0aW9uIHNlY3Rpb25zLCByZW1haW5pbmc6ICR7dH1gKVxyXG4gIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBlMCgpIHtcclxuICBhd2FpdCBlMyhlOCwgZTIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGUyKCkge1xyXG4gIHJldHVybiAoMCwgZC5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXHJcbiAgICBcIi8vYnV0dG9uW2NvbnRhaW5zKEBkYXRhLWF1dG9tYXRpb24taWQsICdidG4tZGVsZXRlLXdvcmtoaXN0b3J5Jykgb3IgY29udGFpbnMoQGRhdGEtYXV0b21hdGlvbmlkLCAnYnRuLWRlbGV0ZS13b3JraGlzdG9yeScpIG9yIGNvbnRhaW5zKG5vcm1hbGl6ZS1zcGFjZSguKSwgJ0RlbGV0ZSBUaGlzIFdvcmsgSGlzdG9yeScpIG9yIGNvbnRhaW5zKG5vcm1hbGl6ZS1zcGFjZSguKSwgJ0RlbGV0ZSBUaGlzIEVtcGxveW1lbnQgSGlzdG9yeScpXVwiXHJcbiAgICApXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZTEoKSB7XHJcbiAgYXdhaXQgZTMoZTksIGU0KVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGUzKGUsIHQpIHtcclxuICBsZXQgciA9IGUoKSxcclxuICAgIG4gPSB0KCk7XHJcbiAgZm9yICg7IG4gJiYgciA+IDA7KSB7XHJcbiAgICBuLmNsaWNrKCksIGF3YWl0ICgwLCB1LndhaXRGb3JDb25kaXRpb24pKCgpID0+IGUoKSA8IHIsIHtcclxuICAgICAgdGltZW91dDogMWUzLFxyXG4gICAgICBvYnNlcnZlVGFyZ2V0OiBkb2N1bWVudC5ib2R5XHJcbiAgICB9KTtcclxuICAgIGxldCBvID0gZSgpO1xyXG4gICAgaWYgKG8gPj0gcikgYnJlYWs7XHJcbiAgICByID0gbywgbiA9IHQoKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZTQoKSB7XHJcbiAgcmV0dXJuICgwLCBkLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcclxuICAgIFwiLy9idXR0b25bY29udGFpbnMoQGRhdGEtYXV0b21hdGlvbi1pZCwgJ2J0bi1kZWxldGUtZWR1Y2F0aW9uaGlzdG9yeScpIG9yIGNvbnRhaW5zKG5vcm1hbGl6ZS1zcGFjZSguKSwgJ0RlbGV0ZSBUaGlzIEVkdWNhdGlvbiBIaXN0b3J5JyldXCJcclxuICAgIClcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlNSgpIHtcclxuICBsZXQgZSA9ICgwLCBkLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcclxuICAgIFwiLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnc2VjdGlvbi13cmFwcGVyJyldLy9idXR0b25bY29udGFpbnMoQGRhdGEtYXV0b21hdGlvbi1pZCwgJ0FkZFdvcmtIaXN0b3J5JyldXCJcclxuICAgICk7XHJcbiAgZSAmJiAoZS5jbGljaygpLCBhd2FpdCAoMCwgcC5kZWxheSkoMjAwKSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiBlNigpIHtcclxuICBsZXQgZSA9ICgwLCBkLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKShcclxuICAgIFwiLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnc2VjdGlvbi13cmFwcGVyJyldLy9idXR0b25bY29udGFpbnMoQGRhdGEtYXV0b21hdGlvbi1pZCwgJ0FkZEVkdWNhdGlvbicpXVwiXHJcbiAgICApO1xyXG4gIGUgJiYgKGUuY2xpY2soKSwgYXdhaXQgKDAsIHAuZGVsYXkpKDIwMCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGU4KCkge1xyXG4gIHJldHVybiAoMCwgZC5nZXRPcmRlcmVkTm9kZXNTYWZlKShcIi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ3dvcmstaGlzdG9yeS1ncm91cCcpXVwiKS5sZW5ndGhcclxufVxyXG5cclxuZnVuY3Rpb24gZTkoKSB7XHJcbiAgcmV0dXJuICgwLCBkLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnZWR1Y2F0aW9uLWhpc3RvcnktZ3JvdXAnKV1cIikubGVuZ3RoXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZTcoZSA9IHt9KSB7XHJcbiAgbGV0IHtcclxuICAgIGV4cGFuZEVkdWNhdGlvbjogdCA9ICEwLFxyXG4gICAgZXhwYW5kRW1wbG95bWVudDogciA9ICEwXHJcbiAgfSA9IGUsIG4gPSBoLnVzZVByb2ZpbGVTdG9yZS5nZXRTdGF0ZSgpLnVzZXJQcm9maWxlPy5wcm9maWxlO1xyXG4gIG4gJiYgKGF3YWl0IHR0KHtcclxuICAgIGdldEN1cnJlbnRDb3VudDogZTksXHJcbiAgICBnZXRUYXJnZXRDb3VudDogKCkgPT4gbi5lZHVjYXRpb24/Lmxlbmd0aCB8fCAwLFxyXG4gICAgYWRkU2VjdGlvbjogZTYsXHJcbiAgICBlbmFibGVkOiB0LFxyXG4gICAgc2V0dGxlRGVsYXk6IDE1MCxcclxuICAgIHdhaXRUaW1lb3V0OiA1MDBcclxuICB9KSwgYXdhaXQgdHQoe1xyXG4gICAgZ2V0Q3VycmVudENvdW50OiBlOCxcclxuICAgIGdldFRhcmdldENvdW50OiAoKSA9PiBuLndvcmtFeHBlcmllbmNlPy5sZW5ndGggfHwgMCxcclxuICAgIGFkZFNlY3Rpb246IGU1LFxyXG4gICAgZW5hYmxlZDogcixcclxuICAgIHNldHRsZURlbGF5OiAxNTAsXHJcbiAgICB3YWl0VGltZW91dDogNTAwXHJcbiAgfSkpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdGUoZSkge1xyXG4gIGF3YWl0IHR0KHtcclxuICAgIGdldEN1cnJlbnRDb3VudDogZTksXHJcbiAgICBnZXRUYXJnZXRDb3VudDogKCkgPT4gZS5lZHVjYXRpb24/Lmxlbmd0aCB8fCAwLFxyXG4gICAgYWRkU2VjdGlvbjogZTYsXHJcbiAgICBzZXR0bGVEZWxheTogMjAwLFxyXG4gICAgd2FpdFRpbWVvdXQ6IDE1MDBcclxuICB9KSwgYXdhaXQgdHQoe1xyXG4gICAgZ2V0Q3VycmVudENvdW50OiBlOCxcclxuICAgIGdldFRhcmdldENvdW50OiAoKSA9PiBlLndvcmtFeHBlcmllbmNlPy5sZW5ndGggfHwgMCxcclxuICAgIGFkZFNlY3Rpb246IGU1LFxyXG4gICAgc2V0dGxlRGVsYXk6IDIwMCxcclxuICAgIHdhaXRUaW1lb3V0OiAxNTAwXHJcbiAgfSlcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0dCh7XHJcbiAgZ2V0Q3VycmVudENvdW50OiBlLFxyXG4gIGdldFRhcmdldENvdW50OiB0LFxyXG4gIGFkZFNlY3Rpb246IHIsXHJcbiAgZW5hYmxlZDogbiA9ICEwLFxyXG4gIHNldHRsZURlbGF5OiBvLFxyXG4gIHdhaXRUaW1lb3V0OiBpXHJcbn0pIHtcclxuICBpZiAoIW4pIHJldHVybjtcclxuICBsZXQgYSA9IHQoKSxcclxuICAgIGwgPSBlKCk7XHJcbiAgZm9yICg7IGwgPCBhOykge1xyXG4gICAgYXdhaXQgcigpLCBhd2FpdCAoMCwgcC5kZWxheSkobyksIGF3YWl0ICgwLCB1LndhaXRGb3JDb25kaXRpb24pKHRhLCB7XHJcbiAgICAgIHRpbWVvdXQ6IGksXHJcbiAgICAgIG9ic2VydmVUYXJnZXQ6IGRvY3VtZW50LmJvZHlcclxuICAgIH0pLCBhd2FpdCAoMCwgcC5kZWxheSkoMTAwKTtcclxuICAgIGxldCB0ID0gZSgpO1xyXG4gICAgaWYgKHQgPT09IGwpIGJyZWFrO1xyXG4gICAgbCA9IHRcclxuICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdHIoKSB7XHJcbiAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSB8fCBkb2N1bWVudC5ib2R5O1xyXG4gIGUuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIsIHtcclxuICAgIGJ1YmJsZXM6ICEwLFxyXG4gICAgY2FuY2VsYWJsZTogITAsXHJcbiAgICB2aWV3OiB3aW5kb3dcclxuICB9KSksIGF3YWl0ICgwLCBwLmRlbGF5KSgxMDApXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdG4oZSwgdCwgciA9IFwiXCIpIHtcclxuICBsZXQgbiA9IHI7XHJcbiAgZm9yIChsZXQgciA9IDA7IHIgPCB0Lmxlbmd0aDsgcisrKSB7XHJcbiAgICBsZXQgbyA9IHRbcl0sXHJcbiAgICAgIGkgPSBvLmNoYXJDb2RlQXQoMCk7XHJcbiAgICBlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIsIHtcclxuICAgICAga2V5OiBvLFxyXG4gICAgICBrZXlDb2RlOiBpLFxyXG4gICAgICBjb2RlOiBgRGlnaXQke299YCxcclxuICAgICAgYnViYmxlczogITAsXHJcbiAgICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgICB9KSksIG4gKz0gbywgZS52YWx1ZSA9IG4sIGUuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleXVwXCIsIHtcclxuICAgICAga2V5OiBvLFxyXG4gICAgICBrZXlDb2RlOiBpLFxyXG4gICAgICBjb2RlOiBgRGlnaXQke299YCxcclxuICAgICAgYnViYmxlczogITAsXHJcbiAgICAgIGNhbmNlbGFibGU6ICEwXHJcbiAgICB9KSksIGF3YWl0ICgwLCBwLmRlbGF5KSgyMDApXHJcbiAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHRvKGUsIHQpIHtcclxuICBpZiAoIWUpIHJldHVybjtcclxuICBsZXQgciA9ICgwLCBpLmRlZmF1bHQpKHQpO1xyXG4gIGlmICghci5pc1ZhbGlkKCkpIHJldHVybjtcclxuICBsZXQgbiA9IHIuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcclxuICBlLmNsaWNrKCksIGF3YWl0ICgwLCBwLmRlbGF5KSgyMDApLCBlLmZvY3VzKCksIGF3YWl0ICgwLCBwLmRlbGF5KSgyMDApLCBlLnZhbHVlID0gXCJcIiwgZVxyXG4gIC5zZWxlY3QoKSwgYXdhaXQgKDAsIHAuZGVsYXkpKDIwMCksIGF3YWl0IHRuKGUsIG4sIFwiXCIpLCAoMCwgcy50cmlnZ2VyRXZlbnRzKShlLCBbXCJjaGFuZ2VcIl0pLFxyXG4gICAgYXdhaXQgKDAsIHAuZGVsYXkpKDIwMCksIGUuYmx1cigpLCBhd2FpdCAoMCwgcC5kZWxheSkoMjAwKSwgYXdhaXQgdHIoKVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHRpKGUsIHQpIHtcclxuICBpZiAoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgIGxldCByID0gKDAsIGcuaW5mZXJQYXlsb2NpdHlEYXRlRm9ybWF0KShlKTtcclxuICAgIGlmICghcikgcmV0dXJuIGNvbnNvbGUud2FybihcIltQYXlsb2NpdHldW0RhdGVdIGZpbGwgc2tpcHBlZDogdW5zdXBwb3J0ZWQgZm9ybWF0XCIsIHtcclxuICAgICAgY29udHJvbElkOiBlLmlkLFxyXG4gICAgICBjb250cm9sVHlwZTogZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpIHx8IGUudHlwZSB8fCBudWxsLFxyXG4gICAgICBwbGFjZWhvbGRlcjogZS5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKSB8fCBlLnBsYWNlaG9sZGVyIHx8IG51bGxcclxuICAgIH0pLCAhMTtcclxuICAgIGxldCBuID0gKDAsIGcuZm9ybWF0UGF5bG9jaXR5RGF0ZVZhbHVlKSh0LCByKTtcclxuICAgIGlmICghbikgcmV0dXJuIGNvbnNvbGUud2FybihcIltQYXlsb2NpdHldW0RhdGVdIGZpbGwgc2tpcHBlZDogaW52YWxpZCBzb3VyY2UgZGF0ZVwiLCB7XHJcbiAgICAgIGNvbnRyb2xJZDogZS5pZCxcclxuICAgICAgZGF0ZUZvcm1hdDogcixcclxuICAgICAgc291cmNlOiAoMCwgZy5zdW1tYXJpemVQYXlsb2NpdHlEYXRlVmFsdWUpKHQpXHJcbiAgICB9KSwgITE7XHJcbiAgICBjb25zb2xlLmluZm8oXCJbUGF5bG9jaXR5XVtEYXRlXSBmaWxsIHN0YXJ0XCIsIHtcclxuICAgICAgY29udHJvbElkOiBlLmlkLFxyXG4gICAgICBjb250cm9sVHlwZTogZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpIHx8IGUudHlwZSB8fCBudWxsLFxyXG4gICAgICBwbGFjZWhvbGRlcjogZS5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKSB8fCBlLnBsYWNlaG9sZGVyIHx8IG51bGwsXHJcbiAgICAgIGRhdGVGb3JtYXQ6IHIsXHJcbiAgICAgIHNvdXJjZTogKDAsIGcuc3VtbWFyaXplUGF5bG9jaXR5RGF0ZVZhbHVlKSh0KSxcclxuICAgICAgdGFyZ2V0OiAoMCwgZy5zdW1tYXJpemVQYXlsb2NpdHlEYXRlVmFsdWUpKG4pXHJcbiAgICB9KSwgYXdhaXQgKDAsIGEuZmlsbERlZmF1bHRJbnB1dEZpZWxkKShlLCBuKSwgYXdhaXQgKDAsIHAuZGVsYXkpKDUwKTtcclxuICAgIGxldCBvID0gZS52YWx1ZT8udHJpbSgpIHx8IFwiXCIsXHJcbiAgICAgIGkgPSBvID09PSBuO1xyXG4gICAgcmV0dXJuIGNvbnNvbGUuaW5mbyhcIltQYXlsb2NpdHldW0RhdGVdIGZpbGwgcmVhZGJhY2tcIiwge1xyXG4gICAgICBjb250cm9sSWQ6IGUuaWQsXHJcbiAgICAgIGRhdGVGb3JtYXQ6IHIsXHJcbiAgICAgIGNvbW1pdHRlZDogaSxcclxuICAgICAgdmFsdWU6ICgwLCBnLnN1bW1hcml6ZVBheWxvY2l0eURhdGVWYWx1ZSkobylcclxuICAgIH0pLCBpXHJcbiAgfVxyXG4gIHJldHVybiBjb25zb2xlLndhcm4oXCJbUGF5bG9jaXR5XVtEYXRlXSBmaWxsIHNraXBwZWQ6IHRhcmdldCBpcyBub3QgYW4gaW5wdXRcIiksICExXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhKCkge1xyXG4gIGxldCBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICdbZGF0YS1hdXRvbWF0aW9uLWlkKj1cImxvYWRpbmdcIl0sIC5sb2FkaW5nLCAuc3Bpbm5lciwgW2FyaWEtYnVzeT1cInRydWVcIl0nKTtcclxuICByZXR1cm4gMCA9PT0gZS5sZW5ndGhcclxufVxyXG5hc3luYyBmdW5jdGlvbiB0bCgpIHtcclxuICBhd2FpdCAoMCwgdS53YWl0Rm9yQ29uZGl0aW9uKSh0YSwge1xyXG4gICAgdGltZW91dDogM2UzLFxyXG4gICAgb2JzZXJ2ZVRhcmdldDogZG9jdW1lbnQuYm9keVxyXG4gIH0pLCBhd2FpdCAoMCwgcC5kZWxheSkoMjAwKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0cyhlLCB0ID0gW10sIHIpIHtcclxuICBsZXQgbiA9ICgwLCBtLmdldEZvcm1TbmFwc2hvdCkodCksXHJcbiAgICBvID0gKDAsIGMuYnVpbGRGYWxjb25BdXRvZmlsbEFuc3dlclBhaXJEYXRhKShyKSxcclxuICAgIHtcclxuICAgICAgZWR1Y2F0aW9uOiBpLFxyXG4gICAgICBlbXBsb3ltZW50OiBhLFxyXG4gICAgICAuLi5sXHJcbiAgICB9ID0gbixcclxuICAgIHtcclxuICAgICAgZWR1Y2F0aW9uOiBzLFxyXG4gICAgICBlbXBsb3ltZW50OiB1LFxyXG4gICAgICAuLi5kXHJcbiAgICB9ID0gZTtcclxuICAoMCwgYy5zZW5kQXV0b2ZpbGxBbnN3ZXJQYWlyRXZlbnQpKHtcclxuICAgIGZvcm1Vcmw6ICgwLCBmLnVzZVVybFN0b3JlKS5nZXRTdGF0ZSgpLmN1cnJlbnRUYWJVcmwsXHJcbiAgICBhdXRvZmlsbFNuYXBzaG90OiBkLFxyXG4gICAgc3VibWl0U25hcHNob3Q6IGwsXHJcbiAgICBhZGRpdGlvbmFsQXV0b2ZpbGxEYXRhOiB7XHJcbiAgICAgIGVkdWNhdGlvbjogcyxcclxuICAgICAgZW1wbG95bWVudDogdVxyXG4gICAgfSxcclxuICAgIGFkZGl0aW9uYWxTdWJtaXREYXRhOiB7XHJcbiAgICAgIGVkdWNhdGlvbjogaSxcclxuICAgICAgZW1wbG95bWVudDogYVxyXG4gICAgfSxcclxuICAgIC4uLm8gPyB7XHJcbiAgICAgIGV4dHJhRGF0YToge1xyXG4gICAgICAgIGZhbGNvbjogb1xyXG4gICAgICB9XHJcbiAgICB9IDoge30sXHJcbiAgICBzb3VyY2U6IFwicGF5bG9jaXR5XCJcclxuICB9KVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9ucy45MzdiOTY4NS5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);