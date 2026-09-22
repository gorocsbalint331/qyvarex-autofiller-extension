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
})({"9g9Ks":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\recruiterflow\\rules.js",
    "bundleId": "cf7c610ef7355f28",
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
var j = z(require("f3eb9325c9ddd43d"));
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

},{"f3eb9325c9ddd43d":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"c71IP":[function(require,module,exports) {
/**
 * Parcel module id: aHzuN
 * Resolved path: src/contents/sites/recruiterflow/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "RECRUITERFLOW_PHONE_COUNTRY_CODE_LABEL", ()=>l), n.export(r, "RECRUITERFLOW_PHONE_WITH_COUNTRY_CODE_DESCRIPTION", ()=>s), n.export(r, "getRules", ()=>u), n.export(r, "getRecruiterflowPhoneRules", ()=>d), n.export(r, "getFieldLabel", ()=>f), n.export(r, "getExpRules", ()=>g), n.export(r, "getEduRules", ()=>b), n.export(r, "getSubmitButtonText", ()=>E), n.export(r, "getAdditionalFormSnapshotData", ()=>F), n.export(r, "getFormSnapshot", ()=>j), n.export(r, "readRecruiterflowPhoneCountryCode", ()=>D);
var o = e("~core/enums"), i = e("~core/phone-country-code"), a = e("~utils/delay");
let l = "Phone Country Code", s = i.LOCAL_PHONE_DESCRIPTION;
async function u(e1 = !1) {
    let t = [];
    await w(), await S();
    let r1 = document.querySelector(".apply-to-job-form-inputs-container");
    if (r1) {
        let e1 = [
            ".experience-inputs-container",
            ".education-inputs-container"
        ];
        t.push(...await c(r1, e1));
    }
    return 0 !== t.length || e1 ? t : (await (0, a.delay)(1500), await u(!0));
}
async function c(e1, t = []) {
    let r1 = [], n = new Set, i = (e1)=>t.some((t)=>e1.closest(t)), l = e1.querySelectorAll('input[id*="react-select"][role="combobox"]');
    for (let e1 of Array.from(l)){
        let t = e1;
        if (n.has(t) || i(t)) continue;
        let l = f(t);
        if (!l) continue;
        let s = t.closest(".multi-select-input-wrapper"), u = t.closest(".single-select-input-wrapper"), c = s || u;
        if (c) {
            let e1 = c.querySelector(".form-label"), n = e1 ? y(e1.textContent || "") : l, i = s ? o.FIELD_TYPE.MULTI_SELECT : o.FIELD_TYPE.SELECT, u = c.querySelector("input");
            u.dispatchEvent(new MouseEvent("mousedown", {
                bubbles: !0
            })), await (0, a.delay)(300);
            let d = document.querySelector('div[role="listbox"][id*="-listbox"]'), f = [];
            if (d) {
                let e1 = d.querySelectorAll('div[role="option"]');
                f = Array.from(e1).map((e1)=>{
                    let t = e1.querySelector(".custom-single-select-option, .custom-multi-select-option")?.textContent;
                    return (t || e1.textContent || "").trim();
                }).filter((e1)=>"" !== e1), u.dispatchEvent(new MouseEvent("click", {
                    bubbles: !0
                })), await (0, a.delay)(100);
            }
            r1.push({
                type: i,
                label: n,
                $input: t,
                $label: e1 || t,
                required: h(t),
                options: f
            });
        } else r1.push({
            type: o.FIELD_TYPE.TEXT,
            label: l,
            $input: t,
            $label: t.closest(".common-input-wrapper") || t,
            required: h(t)
        });
        n.add(t);
    }
    let s = e1.querySelectorAll('input:not([type="hidden"]):not([type="file"]):not([type="checkbox"]):not([type="radio"])');
    s.forEach((e1)=>{
        let t = e1;
        if (n.has(t) || i(t) || t.id.includes("react-select")) return;
        let a = f(t);
        if (!a) return;
        let l = m(t), s = {
            type: l,
            label: a,
            $input: t,
            $label: t.closest(".common-input-wrapper") || t,
            required: h(t),
            ...l === o.FIELD_TYPE.DATE ? {
                description: "MM/DD/YYYY"
            } : {}
        };
        r1.push(...d(s)), n.add(t);
    });
    let u = e1.querySelectorAll("textarea");
    u.forEach((e1)=>{
        let t = e1;
        if (n.has(t) || i(t)) return;
        let a = f(t);
        a && (r1.push({
            type: o.FIELD_TYPE.TEXT,
            label: a,
            $input: t,
            $label: t.closest(".common-input-wrapper") || t,
            required: h(t)
        }), n.add(t));
    });
    let c = e1.querySelectorAll('input[type="checkbox"]');
    c.forEach((e1)=>{
        let t = e1;
        if (n.has(t) || i(t) || t.closest(".multi-select-input-wrapper")) return;
        let a = f(t);
        a && (r1.push({
            type: o.FIELD_TYPE.CHECKBOX,
            label: a,
            $checkboxs: [
                t
            ],
            $label: t.parentElement,
            required: h(t),
            options: [
                a
            ]
        }), n.add(t));
    });
    let p = e1.querySelectorAll(".yes-no-inputs");
    return p.forEach((e1)=>{
        let t = e1;
        if (i(t)) return;
        let a = t.querySelectorAll("button");
        if (0 === a.length || n.has(a[0])) return;
        let l = t.closest(".yes-no-input-wrapper");
        if (!l) return;
        let s = l.querySelector(".form-label"), u = s ? y(s.textContent || "") : "";
        if (!u) return;
        let c = t.querySelector(".yes-input"), d = t.querySelector(".no-input");
        c && d && (r1.push({
            type: o.FIELD_TYPE.CHECKBOX,
            label: u,
            $checkboxs: [
                c,
                d
            ],
            $label: s,
            required: h(l),
            options: [
                "Yes",
                "No"
            ]
        }), a.forEach((e1)=>n.add(e1)));
    }), r1;
}
function d(e1) {
    if (e1.type !== o.FIELD_TYPE.TEXT) return [
        e1
    ];
    let t = e1.$input, r1 = e1.label.toLowerCase().includes("phone") || t?.type === "tel" || t?.name?.toLowerCase().includes("phone");
    if (!t || !r1) return [
        e1
    ];
    let n = t.closest(".iti"), i = n?.querySelector("button.iti__selected-country");
    if (!n || !i) return [
        e1
    ];
    let a = Array.from(n.querySelectorAll("li.iti__country[data-country-code]")).map((e1)=>{
        let t = e1.querySelector(".iti__country-name")?.textContent?.trim() || "", r1 = (e1.getAttribute("data-dial-code") || e1.querySelector(".iti__dial-code")?.textContent || "").replace(/\D/g, "");
        return [
            t,
            r1 ? `+${r1}` : ""
        ].filter(Boolean).join(" ");
    }).filter(Boolean).filter((e1, t, r1)=>r1.indexOf(e1) === t);
    return 0 === a.length ? [
        e1
    ] : [
        {
            ...e1,
            description: s
        },
        {
            type: o.FIELD_TYPE.SELECT,
            label: l,
            required: e1.required,
            options: a,
            $input: t,
            $label: e1.$label
        }
    ];
}
function f(e1) {
    if (e1.closest(".additional-info-inputs-container")) {
        let t = e1.closest(".text-area-input-wrapper, .text-input-wrapper, .multi-select-input-wrapper");
        if (t) {
            if (t.classList.contains("currency-range-select-number-input-wrapper") && "input" === e1.tagName.toLowerCase()) {
                let t = e1.getAttribute("placeholder");
                if (t && ("min" === t.toLowerCase() || "max" === t.toLowerCase())) return `${t} Compensation`;
            }
            let r1 = t.querySelector(".form-label");
            if (r1) return y(r1.textContent || "");
        }
    }
    if ("textarea" === e1.tagName.toLowerCase()) {
        let t = e1.closest(".text-area-input-wrapper");
        if (t) {
            let e1 = t.querySelector(".form-label");
            if (e1) return y(e1.textContent || "");
        }
    }
    let t = p(e1);
    if (t) return t;
    let r1 = e1.getAttribute("placeholder");
    if (r1 && !r1.toLowerCase().includes("select") && !r1.toLowerCase().includes("enter") && !r1.toLowerCase().includes("click")) return y(r1);
    let n = e1.closest(".single-select-input-wrapper, .multi-select-input-wrapper, .currency-range-select-number-input-wrapper");
    if (n) {
        if (n.classList.contains("currency-range-select-number-input-wrapper") && "input" === e1.tagName.toLowerCase()) {
            let t = e1.getAttribute("placeholder");
            if (t && ("min" === t.toLowerCase() || "max" === t.toLowerCase())) return `${t} Compensation`;
        }
        let t = n.querySelector(".form-label");
        if (t) return y(t.textContent || "");
    }
    let o = e1.closest(".common-input-wrapper, .full-name-input-wrapper, .email-input-wrapper, .phone-number-input-wrapper, .location-input-wrapper, .text-input-wrapper, .text-area-input-wrapper, .yes-no-input-wrapper");
    if (o) {
        let e1 = o.querySelector(".form-label");
        if (!e1 && o.parentElement) {
            let t = o.parentElement.closest(".full-name-input-wrapper, .email-input-wrapper, .phone-number-input-wrapper, .location-input-wrapper, .yes-no-input-wrapper");
            t && (e1 = t.querySelector(".form-label"));
        }
        if (e1) return y(e1.textContent || "");
    }
    if ("checkbox" === e1.type) {
        let t = e1.parentElement?.querySelector("label");
        if (t) return y(t.textContent || "");
    }
    let i = e1.getAttribute("name");
    if (i) {
        let e1 = i.split("."), t = e1[e1.length - 1];
        return t.replace(/_/g, " ").replace(/-/g, " ").replace(/\b\w/g, (e1)=>e1.toUpperCase());
    }
    return "";
}
function p(e1) {
    if ("input" !== e1.tagName.toLowerCase() || !e1.id?.includes("react-select")) return "";
    let t = e1.getAttribute("aria-describedby") || "", r1 = t.split(/\s+/).find((e1)=>e1.includes("placeholder"));
    if (!r1) return "";
    let n = e1.ownerDocument?.getElementById(r1), o = y(n?.textContent || "");
    return !o || o.toLowerCase().includes("select") || o.toLowerCase().includes("enter") || o.toLowerCase().includes("click") ? "" : o;
}
function m(e1) {
    let t = e1.tagName.toLowerCase(), r1 = e1.type, n = e1.classList;
    return n.contains("react-datepicker-ignore-onclickoutside") || e1.closest(".react-datepicker-wrapper") || v(e1, "Date") ? o.FIELD_TYPE.DATE : "textarea" === t ? o.FIELD_TYPE.TEXT : "checkbox" === r1 ? o.FIELD_TYPE.CHECKBOX : o.FIELD_TYPE.TEXT;
}
function h(e1) {
    let t = e1.closest(".common-input-wrapper, .full-name-input-wrapper, .email-input-wrapper, .phone-number-input-wrapper, .location-input-wrapper, .text-input-wrapper, .text-area-input-wrapper, .single-select-input-wrapper, .multi-select-input-wrapper, .yes-no-input-wrapper");
    if (t) {
        let e1 = t.parentElement?.closest(".full-name-input-wrapper, .email-input-wrapper, .phone-number-input-wrapper, .location-input-wrapper") || t, r1 = e1.querySelector(".form-label");
        if (r1 && r1.querySelector(".required")) return !0;
    }
    return !1;
}
async function g() {
    let e1 = [], t = document.querySelectorAll(".experience-input-wrapper");
    for (let r1 of Array.from(t)){
        let t = r1, n = await c(t);
        n.length > 0 && e1.push({
            type: o.FIELD_TYPE.EMPLOYMENT,
            label: "Employment",
            required: !0,
            children: n,
            options: n.map((e1)=>({
                    type: e1.type,
                    label: e1.label,
                    ...e1.options ? {
                        options: e1.options
                    } : {}
                }))
        });
    }
    return e1;
}
async function b() {
    let e1 = [], t = document.querySelectorAll(".education-input-wrapper");
    for (let r1 of Array.from(t)){
        let t = r1, n = await c(t);
        n.length > 0 && e1.push({
            type: o.FIELD_TYPE.EDUCATION,
            label: "Education",
            required: !0,
            children: n,
            options: n.map((e1)=>({
                    type: e1.type,
                    label: e1.label,
                    ...e1.options ? {
                        options: e1.options
                    } : {}
                }))
        });
    }
    return e1;
}
function y(e1) {
    return e1.replace(/\*/g, "").replace(/\(optional\)/gi, "").replace(/\(required\)/gi, "").trim();
}
function v(e1, t) {
    let r1 = e1.getAttribute("placeholder");
    return !!r1 && r1.includes(t);
}
async function w() {
    let e1 = 5e3, t = Date.now();
    for(; Date.now() - t < e1;){
        if (document.querySelector(".apply-to-job-form-inputs-container")) {
            await (0, a.delay)(500);
            return;
        }
        await (0, a.delay)(100);
    }
}
async function S() {
    let e1 = document.querySelectorAll(".input-section-container");
    for (let t of Array.from(e1)){
        let e1 = t.nextElementSibling;
        e1 && "none" === e1.style.display && (t.click(), await (0, a.delay)(200));
    }
}
_c = S;
function E() {
    let e1 = document.querySelector("button#submit-application-button, button.submit-application-button");
    return e1 && e1.textContent?.trim() || "";
}
_c1 = E;
let x = ".experience-input-wrapper", C = ".education-input-wrapper", A = `${x}, ${C}`;
function k(e1) {
    let t = (e1.type || "text").toLowerCase();
    return "checkbox" === t || "radio" === t ? e1.checked ? "Yes" : "No" : e1.value || "";
}
function T(e1) {
    return Array.from(document.querySelectorAll(e1)).map((e1)=>{
        let t = {};
        return e1.querySelectorAll("input, textarea").forEach((e1)=>{
            let r1 = e1, n = (r1.type || "text").toLowerCase();
            if ("hidden" === n || "file" === n) return;
            let o = f(r1);
            if (!o) return;
            let i = k(r1);
            i && (t[o] = i);
        }), t;
    }).filter((e1)=>Object.keys(e1).length > 0);
}
_c2 = T;
function F() {
    return {
        education: T(C),
        employment: T(x)
    };
}
_c3 = F;
function I(e1, t, r1) {
    if (void 0 === e1[t]) return t;
    let n = r1.name || r1.id;
    return n ? `${t} (${n})` : t;
}
_c4 = I;
function j() {
    let e1 = {}, t = document.querySelectorAll("input, textarea");
    t.forEach((t)=>{
        let r1 = t;
        if (r1.closest?.(A)) return;
        let n = k(r1);
        if (!r1.name || !n) return;
        let o = f(r1) || r1.name;
        e1[I(e1, o, r1)] = n;
    });
    let r1 = document.querySelector('input#user-phone, input[name="personal_info.phone"]');
    r1?.value && (e1.Phone = r1.value);
    let n = r1 ? D(r1) : "";
    return n && (e1[l] = n), e1;
}
function D(e1) {
    let t = e1.closest(".iti");
    if (!t) return "";
    let r1 = t.querySelector("li.iti__country.iti__active[data-country-code]") || t.querySelector('li.iti__country[aria-selected="true"][data-country-code]');
    if (r1) {
        let e1 = r1.querySelector(".iti__country-name")?.textContent?.trim() || "", t = (r1.getAttribute("data-dial-code") || r1.querySelector(".iti__dial-code")?.textContent || "").replace(/\D/g, "");
        return [
            e1,
            t ? `+${t}` : ""
        ].filter(Boolean).join(" ");
    }
    let n = t.querySelector("button.iti__selected-country"), o = n?.getAttribute("title")?.trim() || "", i = o.match(/\+\s*(\d{1,4})/)?.[1] || "", a = o.replace(/\s*:?\s*\+\s*\d{1,4}\s*$/, "").trim(), l = n?.querySelector(".iti__selected-dial-code")?.textContent?.trim() || "", s = l || (i ? `+${i}` : "");
    return [
        a,
        s
    ].filter(Boolean).join(" ");
}
_c5 = D;
var _c, _c1, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "T");
$RefreshReg$(_c3, "F");
$RefreshReg$(_c4, "I");
$RefreshReg$(_c5, "D");

},{}]},["9g9Ks","c71IP"], "c71IP", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFBc0UsSUFBSSxJQUFFLEVBQUUsNEJBQTRCLEdBQUU7Z0JBQUcsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLElBQUk7Z0JBQUU7WUFBRSxJQUFHO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFO1lBQStCLElBQUcsTUFBSSxLQUFLLEdBQUU7Z0JBQUMsSUFBSSxJQUFFO2dCQUFFLEVBQUUsaUNBQStCLElBQUU7b0JBQUMsV0FBVSxJQUFJO29CQUFJLGVBQWMsQ0FBQztvQkFBRSxRQUFPLFNBQVMsQ0FBQzt3QkFBRSxPQUFPO29CQUFHO29CQUFFLHFCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFFO29CQUFFLG1CQUFrQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRTtvQkFBRSxzQkFBcUIsWUFBVztnQkFBQztZQUFDO1lBQUMsSUFBRyxFQUFFLFlBQVc7Z0JBQUMsUUFBUSxLQUFLO2dCQUE4SjtZQUFNO1lBQUMsSUFBSSxJQUFFLEVBQUU7WUFBTyxFQUFFLFNBQU8sU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLE1BQU0sSUFBSSxFQUFDO2dCQUFXLE9BQU8sT0FBTyxFQUFFLG1CQUFpQixjQUFZLE9BQU8sRUFBRSxxQkFBbUIsY0FBWSxFQUFFLElBQUksR0FBRSxJQUFHO1lBQUMsR0FBRSxFQUFFLFVBQVUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLE9BQU8sRUFBRSxtQkFBaUIsY0FBWSxPQUFPLEVBQUUscUJBQW1CLGNBQVksRUFBRSxJQUFJLEdBQUU7WUFBRTtZQUFHLElBQUksSUFBRSxFQUFFLG1CQUFrQixJQUFFLEVBQUUsdUJBQXFCLFlBQVc7WUFBRSxFQUFFLHNCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUksQ0FBQSxFQUFFLE9BQU8sSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLEdBQUUsRUFBQyxHQUFHLEVBQUUsTUFBTSxJQUFJLEVBQUM7WUFBVSxHQUFFLEVBQUUsb0JBQWtCLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO2dCQUFHLElBQUcsTUFBSSxLQUFLLEdBQUU7b0JBQUMsRUFBRSxJQUFJLEdBQUU7b0JBQUcsSUFBSSxJQUFFLEVBQUUsU0FBUSxJQUFFLEVBQUU7b0JBQVUsSUFBRyxNQUFJLE1BQUs7d0JBQUMsSUFBSSxJQUFFLEVBQUUsaUJBQWUsUUFBTSxFQUFFLGNBQWMsV0FBUyxRQUFNLEVBQUUsSUFBSSxJQUFHLElBQUUsRUFBRSxpQkFBZSxRQUFNLEVBQUUsY0FBYyxXQUFTO3dCQUFLLENBQUMsS0FBRyxJQUFHLENBQUEsRUFBRSxJQUFJLElBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxLQUFHLEtBQUksQ0FBQSxLQUFHLENBQUMsSUFBRyxDQUFBLEVBQUUsT0FBTyxJQUFHLElBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxDQUFDLEtBQUcsQ0FBQyxLQUFHLEtBQUcsRUFBRSxJQUFJLEVBQUM7b0JBQUUsT0FBTSxFQUFFLElBQUk7Z0JBQUU7Z0JBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxFQUFDO1lBQVU7UUFBRTtRQUFDLFNBQVM7WUFBSyxPQUFNLENBQUM7UUFBQztRQUFDLFNBQVM7WUFBSyxPQUFPLEVBQUU7UUFBSTtRQUFDLFNBQVM7WUFBTSxJQUFJLEdBQUUsR0FBRSxJQUFFLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFHLE9BQU8sS0FBRyxVQUFTLE9BQU8sS0FBSSxDQUFBLElBQUUsR0FBRSxJQUFFLE9BQU8sS0FBRyxVQUFTLEdBQUcsS0FBRyxRQUFPLENBQUEsT0FBTyxLQUFHLGNBQVksT0FBTyxLQUFHLFFBQU8sS0FBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLElBQUc7Z0JBQUUsQ0FBQyxLQUFHLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxFQUFFLEVBQUM7WUFBRTtRQUFFO1FBQUMsU0FBUyxHQUFHLENBQUM7WUFBRSxPQUFPLE9BQU87Z0JBQUcsS0FBSTtvQkFBWSxJQUFHLEVBQUUsYUFBVyxNQUFLO3dCQUFDLElBQUcsRUFBRSxVQUFVLGtCQUFpQixPQUFNLENBQUM7d0JBQUUsSUFBSSxJQUFFLE9BQU8sb0JBQW9CLEVBQUU7d0JBQVcsSUFBRyxFQUFFLFNBQU8sS0FBRyxDQUFDLENBQUMsRUFBRSxLQUFHLGlCQUFlLEVBQUUsVUFBVSxjQUFZLE9BQU8sV0FBVSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsSUFBSSxJQUFFLEVBQUUsUUFBTSxFQUFFO29CQUFZLE9BQU8sT0FBTyxLQUFHLFlBQVUsU0FBUyxLQUFLO2dCQUFHLEtBQUk7b0JBQVUsSUFBRyxLQUFHLE1BQUssT0FBTyxFQUFFLEdBQUU7d0JBQWEsS0FBSzt3QkFBRSxLQUFLOzRCQUFFLE9BQU0sQ0FBQzt3QkFBRTs0QkFBUSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsT0FBTSxDQUFDO2dCQUFFO29CQUFRLE9BQU0sQ0FBQztZQUFDO1FBQUM7UUFBQyxFQUFFLHVCQUFxQixJQUFHLEVBQUUsaUNBQStCLEdBQUUsRUFBRSxzQ0FBb0MsSUFBRyxFQUFFLDRCQUEwQixJQUFHLEVBQUUsZ0JBQWMsR0FBRSxFQUFFLGtCQUFnQixHQUFFLEVBQUUseUJBQXVCLElBQUcsRUFBRSx1QkFBcUIsSUFBRyxFQUFFLHdCQUFzQixJQUFHLEVBQUUsc0JBQW9CLEdBQUUsRUFBRSxXQUFTLEdBQUUsRUFBRSxlQUFhO0lBQUMsQ0FBQTtBQUFJO0FBQUcsSUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFHO0lBQUs7SUFBYSxFQUFFLFVBQVE7QUFBRztBQUFHLElBQUksSUFBRSxDQUFDO0FBQUUsR0FBRyxHQUFFO0lBQUMsU0FBUSxJQUFJO0FBQUU7QUFBRyxPQUFPLFVBQVEsR0FBRztBQUFHLElBQUksSUFBRSxFQUFFO0FBQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxPQUFPO0FBQVMsSUFBSSxLQUFHLEVBQUUsU0FDcDVMOzs7Ozs7Ozs7Ozs7QUFZQTs7O0FDYkE7Ozs7Ozs7O0NBUUMsR0FFRCxJQUFJLElBQUksRUFBRTtBQUNWLEVBQUUsa0JBQWtCLElBQUksRUFBRSxPQUFPLEdBQUcsMENBQTBDLElBQU0sSUFBSSxFQUFFLE9BQU8sR0FDN0YscURBQXFELElBQU0sSUFBSSxFQUFFLE9BQU8sR0FBRyxZQUFZLElBQU0sSUFDL0YsRUFBRSxPQUFPLEdBQUcsOEJBQThCLElBQU0sSUFBSSxFQUFFLE9BQU8sR0FBRyxpQkFBaUIsSUFBTSxJQUFJLEVBQzFGLE9BQU8sR0FBRyxlQUFlLElBQU0sSUFBSSxFQUFFLE9BQU8sR0FBRyxlQUFlLElBQU0sSUFBSSxFQUFFLE9BQU8sR0FDaEYsdUJBQXVCLElBQU0sSUFBSSxFQUFFLE9BQU8sR0FBRyxpQ0FBaUMsSUFBTSxJQUFJLEVBQ3pGLE9BQU8sR0FBRyxtQkFBbUIsSUFBTSxJQUFJLEVBQUUsT0FBTyxHQUFHLHFDQUFxQyxJQUFNO0FBQ2pHLElBQUksSUFBSSxFQUFFLGdCQUNSLElBQUksRUFBRSw2QkFDTixJQUFJLEVBQUU7QUFDUixJQUFJLElBQUksc0JBQ04sSUFBSSxFQUFFO0FBQ1IsZUFBZSxFQUFFLEtBQUksQ0FBQyxDQUFDO0lBQ3JCLElBQUksSUFBSSxFQUFFO0lBQ1YsTUFBTSxLQUFLLE1BQU07SUFDakIsSUFBSSxLQUFJLFNBQVMsY0FBYztJQUMvQixJQUFJLElBQUc7UUFDTCxJQUFJLEtBQUk7WUFBQztZQUFnQztTQUE4QjtRQUN2RSxFQUFFLFFBQVEsTUFBTSxFQUFFLElBQUc7SUFDdkI7SUFDQSxPQUFPLE1BQU0sRUFBRSxVQUFVLEtBQUksSUFBSyxDQUFBLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxLQUFJLEVBQUcsT0FBTyxNQUFNLEVBQUUsQ0FBQyxFQUFDO0FBQ3hFO0FBQ0EsZUFBZSxFQUFFLEVBQUMsRUFBRSxJQUFJLEVBQUU7SUFDeEIsSUFBSSxLQUFJLEVBQUUsRUFDUixJQUFJLElBQUksS0FDUixJQUFJLENBQUEsS0FBSyxFQUFFLEtBQUssQ0FBQSxJQUFLLEdBQUUsUUFBUSxLQUMvQixJQUFJLEdBQUUsaUJBQWlCO0lBQ3pCLEtBQUssSUFBSSxNQUFLLE1BQU0sS0FBSyxHQUFJO1FBQzNCLElBQUksSUFBSTtRQUNSLElBQUksRUFBRSxJQUFJLE1BQU0sRUFBRSxJQUFJO1FBQ3RCLElBQUksSUFBSSxFQUFFO1FBQ1YsSUFBSSxDQUFDLEdBQUc7UUFDUixJQUFJLElBQUksRUFBRSxRQUFRLGdDQUNoQixJQUFJLEVBQUUsUUFBUSxpQ0FDZCxJQUFJLEtBQUs7UUFDWCxJQUFJLEdBQUc7WUFDTCxJQUFJLEtBQUksRUFBRSxjQUFjLGdCQUN0QixJQUFJLEtBQUksRUFBRSxHQUFFLGVBQWUsTUFBTSxHQUNqQyxJQUFJLElBQUksRUFBRSxXQUFXLGVBQWUsRUFBRSxXQUFXLFFBQ2pELElBQUksRUFBRSxjQUFjO1lBQ3RCLEVBQUUsY0FBYyxJQUFJLFdBQVcsYUFBYTtnQkFDMUMsU0FBUyxDQUFDO1lBQ1osS0FBSyxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHO1lBQ3hCLElBQUksSUFBSSxTQUFTLGNBQWMsd0NBQzdCLElBQUksRUFBRTtZQUNSLElBQUksR0FBRztnQkFDTCxJQUFJLEtBQUksRUFBRSxpQkFBaUI7Z0JBQzNCLElBQUksTUFBTSxLQUFLLElBQUcsSUFBSSxDQUFBO29CQUNwQixJQUFJLElBQUksR0FBRSxjQUFjLDhEQUNwQjtvQkFDSixPQUFPLEFBQUMsQ0FBQSxLQUFLLEdBQUUsZUFBZSxFQUFDLEVBQUc7Z0JBQ3BDLEdBQUcsT0FBTyxDQUFBLEtBQUssT0FBTyxLQUFJLEVBQUUsY0FBYyxJQUFJLFdBQVcsU0FBUztvQkFDaEUsU0FBUyxDQUFDO2dCQUNaLEtBQUssTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLEtBQUksRUFBRztZQUMxQjtZQUNBLEdBQUUsS0FBSztnQkFDTCxNQUFNO2dCQUNOLE9BQU87Z0JBQ1AsUUFBUTtnQkFDUixRQUFRLE1BQUs7Z0JBQ2IsVUFBVSxFQUFFO2dCQUNaLFNBQVM7WUFDWDtRQUNGLE9BQU8sR0FBRSxLQUFLO1lBQ1osTUFBTSxFQUFFLFdBQVc7WUFDbkIsT0FBTztZQUNQLFFBQVE7WUFDUixRQUFRLEVBQUUsUUFBUSw0QkFBNEI7WUFDOUMsVUFBVSxFQUFFO1FBQ2Q7UUFDQSxFQUFFLElBQUk7SUFDUjtJQUNBLElBQUksSUFBSSxHQUFFLGlCQUNSO0lBQ0YsRUFBRSxRQUFRLENBQUE7UUFDUixJQUFJLElBQUk7UUFDUixJQUFJLEVBQUUsSUFBSSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsU0FBUyxpQkFBaUI7UUFDdkQsSUFBSSxJQUFJLEVBQUU7UUFDVixJQUFJLENBQUMsR0FBRztRQUNSLElBQUksSUFBSSxFQUFFLElBQ1IsSUFBSTtZQUNGLE1BQU07WUFDTixPQUFPO1lBQ1AsUUFBUTtZQUNSLFFBQVEsRUFBRSxRQUFRLDRCQUE0QjtZQUM5QyxVQUFVLEVBQUU7WUFDWixHQUFHLE1BQU0sRUFBRSxXQUFXLE9BQU87Z0JBQzNCLGFBQWE7WUFDZixJQUFJLENBQUMsQ0FBQztRQUNSO1FBQ0YsR0FBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUk7SUFDekI7SUFDQSxJQUFJLElBQUksR0FBRSxpQkFBaUI7SUFDM0IsRUFBRSxRQUFRLENBQUE7UUFDUixJQUFJLElBQUk7UUFDUixJQUFJLEVBQUUsSUFBSSxNQUFNLEVBQUUsSUFBSTtRQUN0QixJQUFJLElBQUksRUFBRTtRQUNWLEtBQU0sQ0FBQSxHQUFFLEtBQUs7WUFDWCxNQUFNLEVBQUUsV0FBVztZQUNuQixPQUFPO1lBQ1AsUUFBUTtZQUNSLFFBQVEsRUFBRSxRQUFRLDRCQUE0QjtZQUM5QyxVQUFVLEVBQUU7UUFDZCxJQUFJLEVBQUUsSUFBSSxFQUFDO0lBQ2I7SUFDQSxJQUFJLElBQUksR0FBRSxpQkFBaUI7SUFDM0IsRUFBRSxRQUFRLENBQUE7UUFDUixJQUFJLElBQUk7UUFDUixJQUFJLEVBQUUsSUFBSSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsZ0NBQWdDO1FBQ2xFLElBQUksSUFBSSxFQUFFO1FBQ1YsS0FBTSxDQUFBLEdBQUUsS0FBSztZQUNYLE1BQU0sRUFBRSxXQUFXO1lBQ25CLE9BQU87WUFDUCxZQUFZO2dCQUFDO2FBQUU7WUFDZixRQUFRLEVBQUU7WUFDVixVQUFVLEVBQUU7WUFDWixTQUFTO2dCQUFDO2FBQUU7UUFDZCxJQUFJLEVBQUUsSUFBSSxFQUFDO0lBQ2I7SUFDQSxJQUFJLElBQUksR0FBRSxpQkFBaUI7SUFDM0IsT0FBTyxFQUFFLFFBQVEsQ0FBQTtRQUNmLElBQUksSUFBSTtRQUNSLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxJQUFJLEVBQUUsaUJBQWlCO1FBQzNCLElBQUksTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUc7UUFDbkMsSUFBSSxJQUFJLEVBQUUsUUFBUTtRQUNsQixJQUFJLENBQUMsR0FBRztRQUNSLElBQUksSUFBSSxFQUFFLGNBQWMsZ0JBQ3RCLElBQUksSUFBSSxFQUFFLEVBQUUsZUFBZSxNQUFNO1FBQ25DLElBQUksQ0FBQyxHQUFHO1FBQ1IsSUFBSSxJQUFJLEVBQUUsY0FBYyxlQUN0QixJQUFJLEVBQUUsY0FBYztRQUN0QixLQUFLLEtBQU0sQ0FBQSxHQUFFLEtBQUs7WUFDaEIsTUFBTSxFQUFFLFdBQVc7WUFDbkIsT0FBTztZQUNQLFlBQVk7Z0JBQUM7Z0JBQUc7YUFBRTtZQUNsQixRQUFRO1lBQ1IsVUFBVSxFQUFFO1lBQ1osU0FBUztnQkFBQztnQkFBTzthQUFLO1FBQ3hCLElBQUksRUFBRSxRQUFRLENBQUEsS0FBSyxFQUFFLElBQUksSUFBRTtJQUM3QixJQUFJO0FBQ047QUFFQSxTQUFTLEVBQUUsRUFBQztJQUNWLElBQUksR0FBRSxTQUFTLEVBQUUsV0FBVyxNQUFNLE9BQU87UUFBQztLQUFFO0lBQzVDLElBQUksSUFBSSxHQUFFLFFBQ1IsS0FBSSxHQUFFLE1BQU0sY0FBYyxTQUFTLFlBQVksR0FBRyxTQUFTLFNBQVMsR0FBRyxNQUFNLGNBQzVFLFNBQVM7SUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUcsT0FBTztRQUFDO0tBQUU7SUFDeEIsSUFBSSxJQUFJLEVBQUUsUUFBUSxTQUNoQixJQUFJLEdBQUcsY0FBYztJQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTztRQUFDO0tBQUU7SUFDeEIsSUFBSSxJQUFJLE1BQU0sS0FBSyxFQUFFLGlCQUFpQix1Q0FBdUMsSUFBSSxDQUFBO1FBQy9FLElBQUksSUFBSSxHQUFFLGNBQWMsdUJBQXVCLGFBQWEsVUFBVSxJQUNwRSxLQUFJLEFBQUMsQ0FBQSxHQUFFLGFBQWEscUJBQXFCLEdBQUUsY0FBYyxvQkFDckQsZUFBZSxFQUFDLEVBQUcsUUFBUSxPQUFPO1FBQ3hDLE9BQU87WUFBQztZQUFHLEtBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRSxDQUFDLEdBQUc7U0FBRyxDQUFDLE9BQU8sU0FBUyxLQUFLO0lBQ3BELEdBQUcsT0FBTyxTQUFTLE9BQU8sQ0FBQyxJQUFHLEdBQUcsS0FBTSxHQUFFLFFBQVEsUUFBTztJQUN4RCxPQUFPLE1BQU0sRUFBRSxTQUFTO1FBQUM7S0FBRSxHQUFHO1FBQUM7WUFDN0IsR0FBRyxFQUFDO1lBQ0osYUFBYTtRQUNmO1FBQUc7WUFDRCxNQUFNLEVBQUUsV0FBVztZQUNuQixPQUFPO1lBQ1AsVUFBVSxHQUFFO1lBQ1osU0FBUztZQUNULFFBQVE7WUFDUixRQUFRLEdBQUU7UUFDWjtLQUFFO0FBQ0o7QUFFQSxTQUFTLEVBQUUsRUFBQztJQUNWLElBQUksR0FBRSxRQUFRLHNDQUFzQztRQUNsRCxJQUFJLElBQUksR0FBRSxRQUFRO1FBQ2xCLElBQUksR0FBRztZQUNMLElBQUksRUFBRSxVQUFVLFNBQVMsaURBQWlELFlBQVksR0FDbkYsUUFBUSxlQUFlO2dCQUN4QixJQUFJLElBQUksR0FBRSxhQUFhO2dCQUN2QixJQUFJLEtBQU0sQ0FBQSxVQUFVLEVBQUUsaUJBQWlCLFVBQVUsRUFBRSxhQUFZLEdBQy9ELE9BQU8sQ0FBQyxFQUFFLEVBQUUsYUFBYSxDQUFDO1lBQzVCO1lBQ0EsSUFBSSxLQUFJLEVBQUUsY0FBYztZQUN4QixJQUFJLElBQUcsT0FBTyxFQUFFLEdBQUUsZUFBZTtRQUNuQztJQUNGO0lBQ0EsSUFBSSxlQUFlLEdBQUUsUUFBUSxlQUFlO1FBQzFDLElBQUksSUFBSSxHQUFFLFFBQVE7UUFDbEIsSUFBSSxHQUFHO1lBQ0wsSUFBSSxLQUFJLEVBQUUsY0FBYztZQUN4QixJQUFJLElBQUcsT0FBTyxFQUFFLEdBQUUsZUFBZTtRQUNuQztJQUNGO0lBQ0EsSUFBSSxJQUFJLEVBQUU7SUFDVixJQUFJLEdBQUcsT0FBTztJQUNkLElBQUksS0FBSSxHQUFFLGFBQWE7SUFDdkIsSUFBSSxNQUFLLENBQUMsR0FBRSxjQUFjLFNBQVMsYUFBYSxDQUFDLEdBQUUsY0FBYyxTQUFTLFlBQVksQ0FBQyxHQUNwRixjQUFjLFNBQVMsVUFBVSxPQUFPLEVBQUU7SUFDN0MsSUFBSSxJQUFJLEdBQUUsUUFDUjtJQUVGLElBQUksR0FBRztRQUNMLElBQUksRUFBRSxVQUFVLFNBQVMsaURBQWlELFlBQVksR0FBRSxRQUNyRixlQUFlO1lBQ2hCLElBQUksSUFBSSxHQUFFLGFBQWE7WUFDdkIsSUFBSSxLQUFNLENBQUEsVUFBVSxFQUFFLGlCQUFpQixVQUFVLEVBQUUsYUFBWSxHQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsYUFBYSxDQUFDO1FBQy9GO1FBQ0EsSUFBSSxJQUFJLEVBQUUsY0FBYztRQUN4QixJQUFJLEdBQUcsT0FBTyxFQUFFLEVBQUUsZUFBZTtJQUNuQztJQUNBLElBQUksSUFBSSxHQUFFLFFBQ1I7SUFFRixJQUFJLEdBQUc7UUFDTCxJQUFJLEtBQUksRUFBRSxjQUFjO1FBQ3hCLElBQUksQ0FBQyxNQUFLLEVBQUUsZUFBZTtZQUN6QixJQUFJLElBQUksRUFBRSxjQUFjLFFBQ3RCO1lBRUYsS0FBTSxDQUFBLEtBQUksRUFBRSxjQUFjLGNBQWE7UUFDekM7UUFDQSxJQUFJLElBQUcsT0FBTyxFQUFFLEdBQUUsZUFBZTtJQUNuQztJQUNBLElBQUksZUFBZSxHQUFFLE1BQU07UUFDekIsSUFBSSxJQUFJLEdBQUUsZUFBZSxjQUFjO1FBQ3ZDLElBQUksR0FBRyxPQUFPLEVBQUUsRUFBRSxlQUFlO0lBQ25DO0lBQ0EsSUFBSSxJQUFJLEdBQUUsYUFBYTtJQUN2QixJQUFJLEdBQUc7UUFDTCxJQUFJLEtBQUksRUFBRSxNQUFNLE1BQ2QsSUFBSSxFQUFDLENBQUMsR0FBRSxTQUFTLEVBQUU7UUFDckIsT0FBTyxFQUFFLFFBQVEsTUFBTSxLQUFLLFFBQVEsTUFBTSxLQUFLLFFBQVEsU0FBUyxDQUFBLEtBQUssR0FBRTtJQUN6RTtJQUNBLE9BQU87QUFDVDtBQUVBLFNBQVMsRUFBRSxFQUFDO0lBQ1YsSUFBSSxZQUFZLEdBQUUsUUFBUSxpQkFBaUIsQ0FBQyxHQUFFLElBQUksU0FBUyxpQkFBaUIsT0FBTztJQUNuRixJQUFJLElBQUksR0FBRSxhQUFhLHVCQUF1QixJQUM1QyxLQUFJLEVBQUUsTUFBTSxPQUFPLEtBQUssQ0FBQSxLQUFLLEdBQUUsU0FBUztJQUMxQyxJQUFJLENBQUMsSUFBRyxPQUFPO0lBQ2YsSUFBSSxJQUFJLEdBQUUsZUFBZSxlQUFlLEtBQ3RDLElBQUksRUFBRSxHQUFHLGVBQWU7SUFDMUIsT0FBTyxDQUFDLEtBQUssRUFBRSxjQUFjLFNBQVMsYUFBYSxFQUFFLGNBQWMsU0FBUyxZQUFZLEVBQ3JGLGNBQWMsU0FBUyxXQUFXLEtBQUs7QUFDNUM7QUFFQSxTQUFTLEVBQUUsRUFBQztJQUNWLElBQUksSUFBSSxHQUFFLFFBQVEsZUFDaEIsS0FBSSxHQUFFLE1BQ04sSUFBSSxHQUFFO0lBQ1IsT0FBTyxFQUFFLFNBQVMsNkNBQTZDLEdBQUUsUUFDN0QsZ0NBQWdDLEVBQUUsSUFBRyxVQUFVLEVBQUUsV0FBVyxPQUFPLGVBQWUsSUFBSSxFQUN2RixXQUFXLE9BQU8sZUFBZSxLQUFJLEVBQUUsV0FBVyxXQUFXLEVBQUUsV0FBVztBQUMvRTtBQUVBLFNBQVMsRUFBRSxFQUFDO0lBQ1YsSUFBSSxJQUFJLEdBQUUsUUFDUjtJQUVGLElBQUksR0FBRztRQUNMLElBQUksS0FBSSxFQUFFLGVBQWUsUUFDckIsMkdBQ0ssR0FDUCxLQUFJLEdBQUUsY0FBYztRQUN0QixJQUFJLE1BQUssR0FBRSxjQUFjLGNBQWMsT0FBTyxDQUFDO0lBQ2pEO0lBQ0EsT0FBTyxDQUFDO0FBQ1Y7QUFDQSxlQUFlO0lBQ2IsSUFBSSxLQUFJLEVBQUUsRUFDUixJQUFJLFNBQVMsaUJBQWlCO0lBQ2hDLEtBQUssSUFBSSxNQUFLLE1BQU0sS0FBSyxHQUFJO1FBQzNCLElBQUksSUFBSSxJQUNOLElBQUksTUFBTSxFQUFFO1FBQ2QsRUFBRSxTQUFTLEtBQUssR0FBRSxLQUFLO1lBQ3JCLE1BQU0sRUFBRSxXQUFXO1lBQ25CLE9BQU87WUFDUCxVQUFVLENBQUM7WUFDWCxVQUFVO1lBQ1YsU0FBUyxFQUFFLElBQUksQ0FBQSxLQUFNLENBQUE7b0JBQ25CLE1BQU0sR0FBRTtvQkFDUixPQUFPLEdBQUU7b0JBQ1QsR0FBRyxHQUFFLFVBQVU7d0JBQ2IsU0FBUyxHQUFFO29CQUNiLElBQUksQ0FBQyxDQUFDO2dCQUNSLENBQUE7UUFDRjtJQUNGO0lBQ0EsT0FBTztBQUNUO0FBQ0EsZUFBZTtJQUNiLElBQUksS0FBSSxFQUFFLEVBQ1IsSUFBSSxTQUFTLGlCQUFpQjtJQUNoQyxLQUFLLElBQUksTUFBSyxNQUFNLEtBQUssR0FBSTtRQUMzQixJQUFJLElBQUksSUFDTixJQUFJLE1BQU0sRUFBRTtRQUNkLEVBQUUsU0FBUyxLQUFLLEdBQUUsS0FBSztZQUNyQixNQUFNLEVBQUUsV0FBVztZQUNuQixPQUFPO1lBQ1AsVUFBVSxDQUFDO1lBQ1gsVUFBVTtZQUNWLFNBQVMsRUFBRSxJQUFJLENBQUEsS0FBTSxDQUFBO29CQUNuQixNQUFNLEdBQUU7b0JBQ1IsT0FBTyxHQUFFO29CQUNULEdBQUcsR0FBRSxVQUFVO3dCQUNiLFNBQVMsR0FBRTtvQkFDYixJQUFJLENBQUMsQ0FBQztnQkFDUixDQUFBO1FBQ0Y7SUFDRjtJQUNBLE9BQU87QUFDVDtBQUVBLFNBQVMsRUFBRSxFQUFDO0lBQ1YsT0FBTyxHQUFFLFFBQVEsT0FBTyxJQUFJLFFBQVEsa0JBQWtCLElBQUksUUFBUSxrQkFBa0IsSUFBSTtBQUMxRjtBQUVBLFNBQVMsRUFBRSxFQUFDLEVBQUUsQ0FBQztJQUNiLElBQUksS0FBSSxHQUFFLGFBQWE7SUFDdkIsT0FBTyxDQUFDLENBQUMsTUFBSyxHQUFFLFNBQVM7QUFDM0I7QUFDQSxlQUFlO0lBQ2IsSUFBSSxLQUFJLEtBQ04sSUFBSSxLQUFLO0lBQ1gsTUFBTyxLQUFLLFFBQVEsSUFBSSxJQUFJO1FBQzFCLElBQUksU0FBUyxjQUFjLHdDQUF3QztZQUNqRSxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHO1lBQ25CO1FBQ0Y7UUFDQSxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsS0FBSSxFQUFHO0lBQ3JCO0FBQ0Y7QUFDQSxlQUFlO0lBQ2IsSUFBSSxLQUFJLFNBQVMsaUJBQWlCO0lBQ2xDLEtBQUssSUFBSSxLQUFLLE1BQU0sS0FBSyxJQUFJO1FBQzNCLElBQUksS0FBSSxFQUFFO1FBQ1YsTUFBSyxXQUFXLEdBQUUsTUFBTSxXQUFZLENBQUEsRUFBRSxTQUFTLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxLQUFJLEVBQUcsSUFBRztJQUN2RTtBQUNGO0tBTmU7QUFRZixTQUFTO0lBQ1AsSUFBSSxLQUFJLFNBQVMsY0FDZjtJQUNGLE9BQU8sTUFBSyxHQUFFLGFBQWEsVUFBVTtBQUN2QztNQUpTO0FBS1QsSUFBSSxJQUFJLDZCQUNOLElBQUksNEJBQ0osSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBRWxCLFNBQVMsRUFBRSxFQUFDO0lBQ1YsSUFBSSxJQUFJLEFBQUMsQ0FBQSxHQUFFLFFBQVEsTUFBSyxFQUFHO0lBQzNCLE9BQU8sZUFBZSxLQUFLLFlBQVksSUFBSSxHQUFFLFVBQVUsUUFBUSxPQUFPLEdBQUUsU0FBUztBQUNuRjtBQUVBLFNBQVMsRUFBRSxFQUFDO0lBQ1YsT0FBTyxNQUFNLEtBQUssU0FBUyxpQkFBaUIsS0FBSSxJQUFJLENBQUE7UUFDbEQsSUFBSSxJQUFJLENBQUM7UUFDVCxPQUFPLEdBQUUsaUJBQWlCLG1CQUFtQixRQUFRLENBQUE7WUFDbkQsSUFBSSxLQUFJLElBQ04sSUFBSSxBQUFDLENBQUEsR0FBRSxRQUFRLE1BQUssRUFBRztZQUN6QixJQUFJLGFBQWEsS0FBSyxXQUFXLEdBQUc7WUFDcEMsSUFBSSxJQUFJLEVBQUU7WUFDVixJQUFJLENBQUMsR0FBRztZQUNSLElBQUksSUFBSSxFQUFFO1lBQ1YsS0FBTSxDQUFBLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQTtRQUNmLElBQUk7SUFDTixHQUFHLE9BQU8sQ0FBQSxLQUFLLE9BQU8sS0FBSyxJQUFHLFNBQVM7QUFDekM7TUFiUztBQWVULFNBQVM7SUFDUCxPQUFPO1FBQ0wsV0FBVyxFQUFFO1FBQ2IsWUFBWSxFQUFFO0lBQ2hCO0FBQ0Y7TUFMUztBQU9ULFNBQVMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7SUFDaEIsSUFBSSxLQUFLLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRSxPQUFPO0lBQzVCLElBQUksSUFBSSxHQUFFLFFBQVEsR0FBRTtJQUNwQixPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUc7QUFDN0I7TUFKUztBQU1ULFNBQVM7SUFDUCxJQUFJLEtBQUksQ0FBQyxHQUNQLElBQUksU0FBUyxpQkFBaUI7SUFDaEMsRUFBRSxRQUFRLENBQUE7UUFDUixJQUFJLEtBQUk7UUFDUixJQUFJLEdBQUUsVUFBVSxJQUFJO1FBQ3BCLElBQUksSUFBSSxFQUFFO1FBQ1YsSUFBSSxDQUFDLEdBQUUsUUFBUSxDQUFDLEdBQUc7UUFDbkIsSUFBSSxJQUFJLEVBQUUsT0FBTSxHQUFFO1FBQ2xCLEVBQUMsQ0FBQyxFQUFFLElBQUcsR0FBRyxJQUFHLEdBQUc7SUFDbEI7SUFDQSxJQUFJLEtBQUksU0FBUyxjQUFjO0lBQy9CLElBQUcsU0FBVSxDQUFBLEdBQUUsUUFBUSxHQUFFLEtBQUk7SUFDN0IsSUFBSSxJQUFJLEtBQUksRUFBRSxNQUFLO0lBQ25CLE9BQU8sS0FBTSxDQUFBLEVBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQSxHQUFJO0FBQzFCO0FBRUEsU0FBUyxFQUFFLEVBQUM7SUFDVixJQUFJLElBQUksR0FBRSxRQUFRO0lBQ2xCLElBQUksQ0FBQyxHQUFHLE9BQU87SUFDZixJQUFJLEtBQUksRUFBRSxjQUFjLHFEQUFxRCxFQUFFLGNBQzdFO0lBQ0YsSUFBSSxJQUFHO1FBQ0wsSUFBSSxLQUFJLEdBQUUsY0FBYyx1QkFBdUIsYUFBYSxVQUFVLElBQ3BFLElBQUksQUFBQyxDQUFBLEdBQUUsYUFBYSxxQkFBcUIsR0FBRSxjQUFjLG9CQUFvQixlQUMzRSxFQUFDLEVBQUcsUUFBUSxPQUFPO1FBQ3ZCLE9BQU87WUFBQztZQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUc7U0FBRyxDQUFDLE9BQU8sU0FBUyxLQUFLO0lBQ3BEO0lBQ0EsSUFBSSxJQUFJLEVBQUUsY0FBYyxpQ0FDdEIsSUFBSSxHQUFHLGFBQWEsVUFBVSxVQUFVLElBQ3hDLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDLEVBQUUsSUFBSSxJQUN0QyxJQUFJLEVBQUUsUUFBUSw0QkFBNEIsSUFBSSxRQUM5QyxJQUFJLEdBQUcsY0FBYyw2QkFBNkIsYUFBYSxVQUFVLElBQ3pFLElBQUksS0FBTSxDQUFBLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBQztJQUMzQixPQUFPO1FBQUM7UUFBRztLQUFFLENBQUMsT0FBTyxTQUFTLEtBQUs7QUFDckM7TUFsQlMiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTNmMzA3NDg2OTU0MWRhMDQuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvcmVjcnVpdGVyZmxvdy9ydWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxyZWNydWl0ZXJmbG93XFxcXHJ1bGVzLmpzXCIsXCJidW5kbGVJZFwiOlwiY2Y3YzYxMGVmNzM1NWYyOFwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IGFIenVOXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9yZWNydWl0ZXJmbG93L3J1bGVzLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfmNvcmUvcGhvbmUtY291bnRyeS1jb2RlIC0+IDhuRU53ICA9PiAgc3JjL2NvcmUvcGhvbmUtY291bnRyeS1jb2RlLmpzXHJcbiAqICAgfnV0aWxzL2RlbGF5IC0+IGFtNjE0ICA9PiAgc3JjL3V0aWxzL2RlbGF5LmpzXHJcbiAqL1xyXG5cclxudmFyIG4gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxubi5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgbi5leHBvcnQociwgXCJSRUNSVUlURVJGTE9XX1BIT05FX0NPVU5UUllfQ09ERV9MQUJFTFwiLCAoKSA9PiBsKSwgbi5leHBvcnQocixcclxuICAgIFwiUkVDUlVJVEVSRkxPV19QSE9ORV9XSVRIX0NPVU5UUllfQ09ERV9ERVNDUklQVElPTlwiLCAoKSA9PiBzKSwgbi5leHBvcnQociwgXCJnZXRSdWxlc1wiLCAoKSA9PiB1KSxcclxuICBuLmV4cG9ydChyLCBcImdldFJlY3J1aXRlcmZsb3dQaG9uZVJ1bGVzXCIsICgpID0+IGQpLCBuLmV4cG9ydChyLCBcImdldEZpZWxkTGFiZWxcIiwgKCkgPT4gZiksIG5cclxuICAuZXhwb3J0KHIsIFwiZ2V0RXhwUnVsZXNcIiwgKCkgPT4gZyksIG4uZXhwb3J0KHIsIFwiZ2V0RWR1UnVsZXNcIiwgKCkgPT4gYiksIG4uZXhwb3J0KHIsXHJcbiAgICBcImdldFN1Ym1pdEJ1dHRvblRleHRcIiwgKCkgPT4gRSksIG4uZXhwb3J0KHIsIFwiZ2V0QWRkaXRpb25hbEZvcm1TbmFwc2hvdERhdGFcIiwgKCkgPT4gRiksIG5cclxuICAuZXhwb3J0KHIsIFwiZ2V0Rm9ybVNuYXBzaG90XCIsICgpID0+IGopLCBuLmV4cG9ydChyLCBcInJlYWRSZWNydWl0ZXJmbG93UGhvbmVDb3VudHJ5Q29kZVwiLCAoKSA9PiBEKTtcclxudmFyIG8gPSBlKFwifmNvcmUvZW51bXNcIiksXHJcbiAgaSA9IGUoXCJ+Y29yZS9waG9uZS1jb3VudHJ5LWNvZGVcIiksXHJcbiAgYSA9IGUoXCJ+dXRpbHMvZGVsYXlcIik7XHJcbmxldCBsID0gXCJQaG9uZSBDb3VudHJ5IENvZGVcIixcclxuICBzID0gaS5MT0NBTF9QSE9ORV9ERVNDUklQVElPTjtcclxuYXN5bmMgZnVuY3Rpb24gdShlID0gITEpIHtcclxuICBsZXQgdCA9IFtdO1xyXG4gIGF3YWl0IHcoKSwgYXdhaXQgUygpO1xyXG4gIGxldCByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBseS10by1qb2ItZm9ybS1pbnB1dHMtY29udGFpbmVyXCIpO1xyXG4gIGlmIChyKSB7XHJcbiAgICBsZXQgZSA9IFtcIi5leHBlcmllbmNlLWlucHV0cy1jb250YWluZXJcIiwgXCIuZWR1Y2F0aW9uLWlucHV0cy1jb250YWluZXJcIl07XHJcbiAgICB0LnB1c2goLi4uYXdhaXQgYyhyLCBlKSlcclxuICB9XHJcbiAgcmV0dXJuIDAgIT09IHQubGVuZ3RoIHx8IGUgPyB0IDogKGF3YWl0ICgwLCBhLmRlbGF5KSgxNTAwKSwgYXdhaXQgdSghMCkpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gYyhlLCB0ID0gW10pIHtcclxuICBsZXQgciA9IFtdLFxyXG4gICAgbiA9IG5ldyBTZXQsXHJcbiAgICBpID0gZSA9PiB0LnNvbWUodCA9PiBlLmNsb3Nlc3QodCkpLFxyXG4gICAgbCA9IGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbaWQqPVwicmVhY3Qtc2VsZWN0XCJdW3JvbGU9XCJjb21ib2JveFwiXScpO1xyXG4gIGZvciAobGV0IGUgb2YgQXJyYXkuZnJvbShsKSkge1xyXG4gICAgbGV0IHQgPSBlO1xyXG4gICAgaWYgKG4uaGFzKHQpIHx8IGkodCkpIGNvbnRpbnVlO1xyXG4gICAgbGV0IGwgPSBmKHQpO1xyXG4gICAgaWYgKCFsKSBjb250aW51ZTtcclxuICAgIGxldCBzID0gdC5jbG9zZXN0KFwiLm11bHRpLXNlbGVjdC1pbnB1dC13cmFwcGVyXCIpLFxyXG4gICAgICB1ID0gdC5jbG9zZXN0KFwiLnNpbmdsZS1zZWxlY3QtaW5wdXQtd3JhcHBlclwiKSxcclxuICAgICAgYyA9IHMgfHwgdTtcclxuICAgIGlmIChjKSB7XHJcbiAgICAgIGxldCBlID0gYy5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tbGFiZWxcIiksXHJcbiAgICAgICAgbiA9IGUgPyB5KGUudGV4dENvbnRlbnQgfHwgXCJcIikgOiBsLFxyXG4gICAgICAgIGkgPSBzID8gby5GSUVMRF9UWVBFLk1VTFRJX1NFTEVDVCA6IG8uRklFTERfVFlQRS5TRUxFQ1QsXHJcbiAgICAgICAgdSA9IGMucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gICAgICB1LmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZWRvd25cIiwge1xyXG4gICAgICAgIGJ1YmJsZXM6ICEwXHJcbiAgICAgIH0pKSwgYXdhaXQgKDAsIGEuZGVsYXkpKDMwMCk7XHJcbiAgICAgIGxldCBkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2W3JvbGU9XCJsaXN0Ym94XCJdW2lkKj1cIi1saXN0Ym94XCJdJyksXHJcbiAgICAgICAgZiA9IFtdO1xyXG4gICAgICBpZiAoZCkge1xyXG4gICAgICAgIGxldCBlID0gZC5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbcm9sZT1cIm9wdGlvblwiXScpO1xyXG4gICAgICAgIGYgPSBBcnJheS5mcm9tKGUpLm1hcChlID0+IHtcclxuICAgICAgICAgIGxldCB0ID0gZS5xdWVyeVNlbGVjdG9yKFwiLmN1c3RvbS1zaW5nbGUtc2VsZWN0LW9wdGlvbiwgLmN1c3RvbS1tdWx0aS1zZWxlY3Qtb3B0aW9uXCIpXHJcbiAgICAgICAgICAgID8udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICByZXR1cm4gKHQgfHwgZS50ZXh0Q29udGVudCB8fCBcIlwiKS50cmltKClcclxuICAgICAgICB9KS5maWx0ZXIoZSA9PiBcIlwiICE9PSBlKSwgdS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIiwge1xyXG4gICAgICAgICAgYnViYmxlczogITBcclxuICAgICAgICB9KSksIGF3YWl0ICgwLCBhLmRlbGF5KSgxMDApXHJcbiAgICAgIH1cclxuICAgICAgci5wdXNoKHtcclxuICAgICAgICB0eXBlOiBpLFxyXG4gICAgICAgIGxhYmVsOiBuLFxyXG4gICAgICAgICRpbnB1dDogdCxcclxuICAgICAgICAkbGFiZWw6IGUgfHwgdCxcclxuICAgICAgICByZXF1aXJlZDogaCh0KSxcclxuICAgICAgICBvcHRpb25zOiBmXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Ugci5wdXNoKHtcclxuICAgICAgdHlwZTogby5GSUVMRF9UWVBFLlRFWFQsXHJcbiAgICAgIGxhYmVsOiBsLFxyXG4gICAgICAkaW5wdXQ6IHQsXHJcbiAgICAgICRsYWJlbDogdC5jbG9zZXN0KFwiLmNvbW1vbi1pbnB1dC13cmFwcGVyXCIpIHx8IHQsXHJcbiAgICAgIHJlcXVpcmVkOiBoKHQpXHJcbiAgICB9KTtcclxuICAgIG4uYWRkKHQpXHJcbiAgfVxyXG4gIGxldCBzID0gZS5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSk6bm90KFt0eXBlPVwiZmlsZVwiXSk6bm90KFt0eXBlPVwiY2hlY2tib3hcIl0pOm5vdChbdHlwZT1cInJhZGlvXCJdKScpO1xyXG4gIHMuZm9yRWFjaChlID0+IHtcclxuICAgIGxldCB0ID0gZTtcclxuICAgIGlmIChuLmhhcyh0KSB8fCBpKHQpIHx8IHQuaWQuaW5jbHVkZXMoXCJyZWFjdC1zZWxlY3RcIikpIHJldHVybjtcclxuICAgIGxldCBhID0gZih0KTtcclxuICAgIGlmICghYSkgcmV0dXJuO1xyXG4gICAgbGV0IGwgPSBtKHQpLFxyXG4gICAgICBzID0ge1xyXG4gICAgICAgIHR5cGU6IGwsXHJcbiAgICAgICAgbGFiZWw6IGEsXHJcbiAgICAgICAgJGlucHV0OiB0LFxyXG4gICAgICAgICRsYWJlbDogdC5jbG9zZXN0KFwiLmNvbW1vbi1pbnB1dC13cmFwcGVyXCIpIHx8IHQsXHJcbiAgICAgICAgcmVxdWlyZWQ6IGgodCksXHJcbiAgICAgICAgLi4ubCA9PT0gby5GSUVMRF9UWVBFLkRBVEUgPyB7XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJNTS9ERC9ZWVlZXCJcclxuICAgICAgICB9IDoge31cclxuICAgICAgfTtcclxuICAgIHIucHVzaCguLi5kKHMpKSwgbi5hZGQodClcclxuICB9KTtcclxuICBsZXQgdSA9IGUucXVlcnlTZWxlY3RvckFsbChcInRleHRhcmVhXCIpO1xyXG4gIHUuZm9yRWFjaChlID0+IHtcclxuICAgIGxldCB0ID0gZTtcclxuICAgIGlmIChuLmhhcyh0KSB8fCBpKHQpKSByZXR1cm47XHJcbiAgICBsZXQgYSA9IGYodCk7XHJcbiAgICBhICYmIChyLnB1c2goe1xyXG4gICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgbGFiZWw6IGEsXHJcbiAgICAgICRpbnB1dDogdCxcclxuICAgICAgJGxhYmVsOiB0LmNsb3Nlc3QoXCIuY29tbW9uLWlucHV0LXdyYXBwZXJcIikgfHwgdCxcclxuICAgICAgcmVxdWlyZWQ6IGgodClcclxuICAgIH0pLCBuLmFkZCh0KSlcclxuICB9KTtcclxuICBsZXQgYyA9IGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XHJcbiAgYy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgbGV0IHQgPSBlO1xyXG4gICAgaWYgKG4uaGFzKHQpIHx8IGkodCkgfHwgdC5jbG9zZXN0KFwiLm11bHRpLXNlbGVjdC1pbnB1dC13cmFwcGVyXCIpKSByZXR1cm47XHJcbiAgICBsZXQgYSA9IGYodCk7XHJcbiAgICBhICYmIChyLnB1c2goe1xyXG4gICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsXHJcbiAgICAgIGxhYmVsOiBhLFxyXG4gICAgICAkY2hlY2tib3hzOiBbdF0sXHJcbiAgICAgICRsYWJlbDogdC5wYXJlbnRFbGVtZW50LFxyXG4gICAgICByZXF1aXJlZDogaCh0KSxcclxuICAgICAgb3B0aW9uczogW2FdXHJcbiAgICB9KSwgbi5hZGQodCkpXHJcbiAgfSk7XHJcbiAgbGV0IHAgPSBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIueWVzLW5vLWlucHV0c1wiKTtcclxuICByZXR1cm4gcC5mb3JFYWNoKGUgPT4ge1xyXG4gICAgbGV0IHQgPSBlO1xyXG4gICAgaWYgKGkodCkpIHJldHVybjtcclxuICAgIGxldCBhID0gdC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG4gICAgaWYgKDAgPT09IGEubGVuZ3RoIHx8IG4uaGFzKGFbMF0pKSByZXR1cm47XHJcbiAgICBsZXQgbCA9IHQuY2xvc2VzdChcIi55ZXMtbm8taW5wdXQtd3JhcHBlclwiKTtcclxuICAgIGlmICghbCkgcmV0dXJuO1xyXG4gICAgbGV0IHMgPSBsLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1sYWJlbFwiKSxcclxuICAgICAgdSA9IHMgPyB5KHMudGV4dENvbnRlbnQgfHwgXCJcIikgOiBcIlwiO1xyXG4gICAgaWYgKCF1KSByZXR1cm47XHJcbiAgICBsZXQgYyA9IHQucXVlcnlTZWxlY3RvcihcIi55ZXMtaW5wdXRcIiksXHJcbiAgICAgIGQgPSB0LnF1ZXJ5U2VsZWN0b3IoXCIubm8taW5wdXRcIik7XHJcbiAgICBjICYmIGQgJiYgKHIucHVzaCh7XHJcbiAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5DSEVDS0JPWCxcclxuICAgICAgbGFiZWw6IHUsXHJcbiAgICAgICRjaGVja2JveHM6IFtjLCBkXSxcclxuICAgICAgJGxhYmVsOiBzLFxyXG4gICAgICByZXF1aXJlZDogaChsKSxcclxuICAgICAgb3B0aW9uczogW1wiWWVzXCIsIFwiTm9cIl1cclxuICAgIH0pLCBhLmZvckVhY2goZSA9PiBuLmFkZChlKSkpXHJcbiAgfSksIHJcclxufVxyXG5cclxuZnVuY3Rpb24gZChlKSB7XHJcbiAgaWYgKGUudHlwZSAhPT0gby5GSUVMRF9UWVBFLlRFWFQpIHJldHVybiBbZV07XHJcbiAgbGV0IHQgPSBlLiRpbnB1dCxcclxuICAgIHIgPSBlLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJwaG9uZVwiKSB8fCB0Py50eXBlID09PSBcInRlbFwiIHx8IHQ/Lm5hbWU/LnRvTG93ZXJDYXNlKClcclxuICAgIC5pbmNsdWRlcyhcInBob25lXCIpO1xyXG4gIGlmICghdCB8fCAhcikgcmV0dXJuIFtlXTtcclxuICBsZXQgbiA9IHQuY2xvc2VzdChcIi5pdGlcIiksXHJcbiAgICBpID0gbj8ucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5pdGlfX3NlbGVjdGVkLWNvdW50cnlcIik7XHJcbiAgaWYgKCFuIHx8ICFpKSByZXR1cm4gW2VdO1xyXG4gIGxldCBhID0gQXJyYXkuZnJvbShuLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5pdGlfX2NvdW50cnlbZGF0YS1jb3VudHJ5LWNvZGVdXCIpKS5tYXAoZSA9PiB7XHJcbiAgICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcihcIi5pdGlfX2NvdW50cnktbmFtZVwiKT8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBcIlwiLFxyXG4gICAgICByID0gKGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1kaWFsLWNvZGVcIikgfHwgZS5xdWVyeVNlbGVjdG9yKFwiLml0aV9fZGlhbC1jb2RlXCIpXHJcbiAgICAgICAgPy50ZXh0Q29udGVudCB8fCBcIlwiKS5yZXBsYWNlKC9cXEQvZywgXCJcIik7XHJcbiAgICByZXR1cm4gW3QsIHIgPyBgKyR7cn1gIDogXCJcIl0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpXHJcbiAgfSkuZmlsdGVyKEJvb2xlYW4pLmZpbHRlcigoZSwgdCwgcikgPT4gci5pbmRleE9mKGUpID09PSB0KTtcclxuICByZXR1cm4gMCA9PT0gYS5sZW5ndGggPyBbZV0gOiBbe1xyXG4gICAgLi4uZSxcclxuICAgIGRlc2NyaXB0aW9uOiBzXHJcbiAgfSwge1xyXG4gICAgdHlwZTogby5GSUVMRF9UWVBFLlNFTEVDVCxcclxuICAgIGxhYmVsOiBsLFxyXG4gICAgcmVxdWlyZWQ6IGUucmVxdWlyZWQsXHJcbiAgICBvcHRpb25zOiBhLFxyXG4gICAgJGlucHV0OiB0LFxyXG4gICAgJGxhYmVsOiBlLiRsYWJlbFxyXG4gIH1dXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGYoZSkge1xyXG4gIGlmIChlLmNsb3Nlc3QoXCIuYWRkaXRpb25hbC1pbmZvLWlucHV0cy1jb250YWluZXJcIikpIHtcclxuICAgIGxldCB0ID0gZS5jbG9zZXN0KFwiLnRleHQtYXJlYS1pbnB1dC13cmFwcGVyLCAudGV4dC1pbnB1dC13cmFwcGVyLCAubXVsdGktc2VsZWN0LWlucHV0LXdyYXBwZXJcIik7XHJcbiAgICBpZiAodCkge1xyXG4gICAgICBpZiAodC5jbGFzc0xpc3QuY29udGFpbnMoXCJjdXJyZW5jeS1yYW5nZS1zZWxlY3QtbnVtYmVyLWlucHV0LXdyYXBwZXJcIikgJiYgXCJpbnB1dFwiID09PSBlXHJcbiAgICAgICAgLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIGxldCB0ID0gZS5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKTtcclxuICAgICAgICBpZiAodCAmJiAoXCJtaW5cIiA9PT0gdC50b0xvd2VyQ2FzZSgpIHx8IFwibWF4XCIgPT09IHQudG9Mb3dlckNhc2UoKSkpXHJcbiAgICAgICAgcmV0dXJuIGAke3R9IENvbXBlbnNhdGlvbmBcclxuICAgICAgfVxyXG4gICAgICBsZXQgciA9IHQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWxhYmVsXCIpO1xyXG4gICAgICBpZiAocikgcmV0dXJuIHkoci50ZXh0Q29udGVudCB8fCBcIlwiKVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoXCJ0ZXh0YXJlYVwiID09PSBlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgbGV0IHQgPSBlLmNsb3Nlc3QoXCIudGV4dC1hcmVhLWlucHV0LXdyYXBwZXJcIik7XHJcbiAgICBpZiAodCkge1xyXG4gICAgICBsZXQgZSA9IHQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWxhYmVsXCIpO1xyXG4gICAgICBpZiAoZSkgcmV0dXJuIHkoZS50ZXh0Q29udGVudCB8fCBcIlwiKVxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgdCA9IHAoZSk7XHJcbiAgaWYgKHQpIHJldHVybiB0O1xyXG4gIGxldCByID0gZS5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKTtcclxuICBpZiAociAmJiAhci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwic2VsZWN0XCIpICYmICFyLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJlbnRlclwiKSAmJiAhclxyXG4gICAgLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJjbGlja1wiKSkgcmV0dXJuIHkocik7XHJcbiAgbGV0IG4gPSBlLmNsb3Nlc3QoXHJcbiAgICBcIi5zaW5nbGUtc2VsZWN0LWlucHV0LXdyYXBwZXIsIC5tdWx0aS1zZWxlY3QtaW5wdXQtd3JhcHBlciwgLmN1cnJlbmN5LXJhbmdlLXNlbGVjdC1udW1iZXItaW5wdXQtd3JhcHBlclwiXHJcbiAgICApO1xyXG4gIGlmIChuKSB7XHJcbiAgICBpZiAobi5jbGFzc0xpc3QuY29udGFpbnMoXCJjdXJyZW5jeS1yYW5nZS1zZWxlY3QtbnVtYmVyLWlucHV0LXdyYXBwZXJcIikgJiYgXCJpbnB1dFwiID09PSBlLnRhZ05hbWVcclxuICAgICAgLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgbGV0IHQgPSBlLmdldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpO1xyXG4gICAgICBpZiAodCAmJiAoXCJtaW5cIiA9PT0gdC50b0xvd2VyQ2FzZSgpIHx8IFwibWF4XCIgPT09IHQudG9Mb3dlckNhc2UoKSkpIHJldHVybiBgJHt0fSBDb21wZW5zYXRpb25gXHJcbiAgICB9XHJcbiAgICBsZXQgdCA9IG4ucXVlcnlTZWxlY3RvcihcIi5mb3JtLWxhYmVsXCIpO1xyXG4gICAgaWYgKHQpIHJldHVybiB5KHQudGV4dENvbnRlbnQgfHwgXCJcIilcclxuICB9XHJcbiAgbGV0IG8gPSBlLmNsb3Nlc3QoXHJcbiAgICBcIi5jb21tb24taW5wdXQtd3JhcHBlciwgLmZ1bGwtbmFtZS1pbnB1dC13cmFwcGVyLCAuZW1haWwtaW5wdXQtd3JhcHBlciwgLnBob25lLW51bWJlci1pbnB1dC13cmFwcGVyLCAubG9jYXRpb24taW5wdXQtd3JhcHBlciwgLnRleHQtaW5wdXQtd3JhcHBlciwgLnRleHQtYXJlYS1pbnB1dC13cmFwcGVyLCAueWVzLW5vLWlucHV0LXdyYXBwZXJcIlxyXG4gICAgKTtcclxuICBpZiAobykge1xyXG4gICAgbGV0IGUgPSBvLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1sYWJlbFwiKTtcclxuICAgIGlmICghZSAmJiBvLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgbGV0IHQgPSBvLnBhcmVudEVsZW1lbnQuY2xvc2VzdChcclxuICAgICAgICBcIi5mdWxsLW5hbWUtaW5wdXQtd3JhcHBlciwgLmVtYWlsLWlucHV0LXdyYXBwZXIsIC5waG9uZS1udW1iZXItaW5wdXQtd3JhcHBlciwgLmxvY2F0aW9uLWlucHV0LXdyYXBwZXIsIC55ZXMtbm8taW5wdXQtd3JhcHBlclwiXHJcbiAgICAgICAgKTtcclxuICAgICAgdCAmJiAoZSA9IHQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWxhYmVsXCIpKVxyXG4gICAgfVxyXG4gICAgaWYgKGUpIHJldHVybiB5KGUudGV4dENvbnRlbnQgfHwgXCJcIilcclxuICB9XHJcbiAgaWYgKFwiY2hlY2tib3hcIiA9PT0gZS50eXBlKSB7XHJcbiAgICBsZXQgdCA9IGUucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO1xyXG4gICAgaWYgKHQpIHJldHVybiB5KHQudGV4dENvbnRlbnQgfHwgXCJcIilcclxuICB9XHJcbiAgbGV0IGkgPSBlLmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XHJcbiAgaWYgKGkpIHtcclxuICAgIGxldCBlID0gaS5zcGxpdChcIi5cIiksXHJcbiAgICAgIHQgPSBlW2UubGVuZ3RoIC0gMV07XHJcbiAgICByZXR1cm4gdC5yZXBsYWNlKC9fL2csIFwiIFwiKS5yZXBsYWNlKC8tL2csIFwiIFwiKS5yZXBsYWNlKC9cXGJcXHcvZywgZSA9PiBlLnRvVXBwZXJDYXNlKCkpXHJcbiAgfVxyXG4gIHJldHVybiBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHAoZSkge1xyXG4gIGlmIChcImlucHV0XCIgIT09IGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpIHx8ICFlLmlkPy5pbmNsdWRlcyhcInJlYWN0LXNlbGVjdFwiKSkgcmV0dXJuIFwiXCI7XHJcbiAgbGV0IHQgPSBlLmdldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIikgfHwgXCJcIixcclxuICAgIHIgPSB0LnNwbGl0KC9cXHMrLykuZmluZChlID0+IGUuaW5jbHVkZXMoXCJwbGFjZWhvbGRlclwiKSk7XHJcbiAgaWYgKCFyKSByZXR1cm4gXCJcIjtcclxuICBsZXQgbiA9IGUub3duZXJEb2N1bWVudD8uZ2V0RWxlbWVudEJ5SWQociksXHJcbiAgICBvID0geShuPy50ZXh0Q29udGVudCB8fCBcIlwiKTtcclxuICByZXR1cm4gIW8gfHwgby50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwic2VsZWN0XCIpIHx8IG8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImVudGVyXCIpIHx8IG9cclxuICAgIC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiY2xpY2tcIikgPyBcIlwiIDogb1xyXG59XHJcblxyXG5mdW5jdGlvbiBtKGUpIHtcclxuICBsZXQgdCA9IGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgciA9IGUudHlwZSxcclxuICAgIG4gPSBlLmNsYXNzTGlzdDtcclxuICByZXR1cm4gbi5jb250YWlucyhcInJlYWN0LWRhdGVwaWNrZXItaWdub3JlLW9uY2xpY2tvdXRzaWRlXCIpIHx8IGUuY2xvc2VzdChcclxuICAgICAgXCIucmVhY3QtZGF0ZXBpY2tlci13cmFwcGVyXCIpIHx8IHYoZSwgXCJEYXRlXCIpID8gby5GSUVMRF9UWVBFLkRBVEUgOiBcInRleHRhcmVhXCIgPT09IHQgPyBvXHJcbiAgICAuRklFTERfVFlQRS5URVhUIDogXCJjaGVja2JveFwiID09PSByID8gby5GSUVMRF9UWVBFLkNIRUNLQk9YIDogby5GSUVMRF9UWVBFLlRFWFRcclxufVxyXG5cclxuZnVuY3Rpb24gaChlKSB7XHJcbiAgbGV0IHQgPSBlLmNsb3Nlc3QoXHJcbiAgICBcIi5jb21tb24taW5wdXQtd3JhcHBlciwgLmZ1bGwtbmFtZS1pbnB1dC13cmFwcGVyLCAuZW1haWwtaW5wdXQtd3JhcHBlciwgLnBob25lLW51bWJlci1pbnB1dC13cmFwcGVyLCAubG9jYXRpb24taW5wdXQtd3JhcHBlciwgLnRleHQtaW5wdXQtd3JhcHBlciwgLnRleHQtYXJlYS1pbnB1dC13cmFwcGVyLCAuc2luZ2xlLXNlbGVjdC1pbnB1dC13cmFwcGVyLCAubXVsdGktc2VsZWN0LWlucHV0LXdyYXBwZXIsIC55ZXMtbm8taW5wdXQtd3JhcHBlclwiXHJcbiAgICApO1xyXG4gIGlmICh0KSB7XHJcbiAgICBsZXQgZSA9IHQucGFyZW50RWxlbWVudD8uY2xvc2VzdChcclxuICAgICAgICBcIi5mdWxsLW5hbWUtaW5wdXQtd3JhcHBlciwgLmVtYWlsLWlucHV0LXdyYXBwZXIsIC5waG9uZS1udW1iZXItaW5wdXQtd3JhcHBlciwgLmxvY2F0aW9uLWlucHV0LXdyYXBwZXJcIlxyXG4gICAgICAgICkgfHwgdCxcclxuICAgICAgciA9IGUucXVlcnlTZWxlY3RvcihcIi5mb3JtLWxhYmVsXCIpO1xyXG4gICAgaWYgKHIgJiYgci5xdWVyeVNlbGVjdG9yKFwiLnJlcXVpcmVkXCIpKSByZXR1cm4gITBcclxuICB9XHJcbiAgcmV0dXJuICExXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZygpIHtcclxuICBsZXQgZSA9IFtdLFxyXG4gICAgdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhwZXJpZW5jZS1pbnB1dC13cmFwcGVyXCIpO1xyXG4gIGZvciAobGV0IHIgb2YgQXJyYXkuZnJvbSh0KSkge1xyXG4gICAgbGV0IHQgPSByLFxyXG4gICAgICBuID0gYXdhaXQgYyh0KTtcclxuICAgIG4ubGVuZ3RoID4gMCAmJiBlLnB1c2goe1xyXG4gICAgICB0eXBlOiBvLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCxcclxuICAgICAgbGFiZWw6IFwiRW1wbG95bWVudFwiLFxyXG4gICAgICByZXF1aXJlZDogITAsXHJcbiAgICAgIGNoaWxkcmVuOiBuLFxyXG4gICAgICBvcHRpb25zOiBuLm1hcChlID0+ICh7XHJcbiAgICAgICAgdHlwZTogZS50eXBlLFxyXG4gICAgICAgIGxhYmVsOiBlLmxhYmVsLFxyXG4gICAgICAgIC4uLmUub3B0aW9ucyA/IHtcclxuICAgICAgICAgIG9wdGlvbnM6IGUub3B0aW9uc1xyXG4gICAgICAgIH0gOiB7fVxyXG4gICAgICB9KSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiBlXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gYigpIHtcclxuICBsZXQgZSA9IFtdLFxyXG4gICAgdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWR1Y2F0aW9uLWlucHV0LXdyYXBwZXJcIik7XHJcbiAgZm9yIChsZXQgciBvZiBBcnJheS5mcm9tKHQpKSB7XHJcbiAgICBsZXQgdCA9IHIsXHJcbiAgICAgIG4gPSBhd2FpdCBjKHQpO1xyXG4gICAgbi5sZW5ndGggPiAwICYmIGUucHVzaCh7XHJcbiAgICAgIHR5cGU6IG8uRklFTERfVFlQRS5FRFVDQVRJT04sXHJcbiAgICAgIGxhYmVsOiBcIkVkdWNhdGlvblwiLFxyXG4gICAgICByZXF1aXJlZDogITAsXHJcbiAgICAgIGNoaWxkcmVuOiBuLFxyXG4gICAgICBvcHRpb25zOiBuLm1hcChlID0+ICh7XHJcbiAgICAgICAgdHlwZTogZS50eXBlLFxyXG4gICAgICAgIGxhYmVsOiBlLmxhYmVsLFxyXG4gICAgICAgIC4uLmUub3B0aW9ucyA/IHtcclxuICAgICAgICAgIG9wdGlvbnM6IGUub3B0aW9uc1xyXG4gICAgICAgIH0gOiB7fVxyXG4gICAgICB9KSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHkoZSkge1xyXG4gIHJldHVybiBlLnJlcGxhY2UoL1xcKi9nLCBcIlwiKS5yZXBsYWNlKC9cXChvcHRpb25hbFxcKS9naSwgXCJcIikucmVwbGFjZSgvXFwocmVxdWlyZWRcXCkvZ2ksIFwiXCIpLnRyaW0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiB2KGUsIHQpIHtcclxuICBsZXQgciA9IGUuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIik7XHJcbiAgcmV0dXJuICEhciAmJiByLmluY2x1ZGVzKHQpXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdygpIHtcclxuICBsZXQgZSA9IDVlMyxcclxuICAgIHQgPSBEYXRlLm5vdygpO1xyXG4gIGZvciAoOyBEYXRlLm5vdygpIC0gdCA8IGU7KSB7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBseS10by1qb2ItZm9ybS1pbnB1dHMtY29udGFpbmVyXCIpKSB7XHJcbiAgICAgIGF3YWl0ICgwLCBhLmRlbGF5KSg1MDApO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGF3YWl0ICgwLCBhLmRlbGF5KSgxMDApXHJcbiAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIFMoKSB7XHJcbiAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucHV0LXNlY3Rpb24tY29udGFpbmVyXCIpO1xyXG4gIGZvciAobGV0IHQgb2YgQXJyYXkuZnJvbShlKSkge1xyXG4gICAgbGV0IGUgPSB0Lm5leHRFbGVtZW50U2libGluZztcclxuICAgIGUgJiYgXCJub25lXCIgPT09IGUuc3R5bGUuZGlzcGxheSAmJiAodC5jbGljaygpLCBhd2FpdCAoMCwgYS5kZWxheSkoMjAwKSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEUoKSB7XHJcbiAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCJidXR0b24jc3VibWl0LWFwcGxpY2F0aW9uLWJ1dHRvbiwgYnV0dG9uLnN1Ym1pdC1hcHBsaWNhdGlvbi1idXR0b25cIik7XHJcbiAgcmV0dXJuIGUgJiYgZS50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCJcclxufVxyXG5sZXQgeCA9IFwiLmV4cGVyaWVuY2UtaW5wdXQtd3JhcHBlclwiLFxyXG4gIEMgPSBcIi5lZHVjYXRpb24taW5wdXQtd3JhcHBlclwiLFxyXG4gIEEgPSBgJHt4fSwgJHtDfWA7XHJcblxyXG5mdW5jdGlvbiBrKGUpIHtcclxuICBsZXQgdCA9IChlLnR5cGUgfHwgXCJ0ZXh0XCIpLnRvTG93ZXJDYXNlKCk7XHJcbiAgcmV0dXJuIFwiY2hlY2tib3hcIiA9PT0gdCB8fCBcInJhZGlvXCIgPT09IHQgPyBlLmNoZWNrZWQgPyBcIlllc1wiIDogXCJOb1wiIDogZS52YWx1ZSB8fCBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFQoZSkge1xyXG4gIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZSkpLm1hcChlID0+IHtcclxuICAgIGxldCB0ID0ge307XHJcbiAgICByZXR1cm4gZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHRleHRhcmVhXCIpLmZvckVhY2goZSA9PiB7XHJcbiAgICAgIGxldCByID0gZSxcclxuICAgICAgICBuID0gKHIudHlwZSB8fCBcInRleHRcIikudG9Mb3dlckNhc2UoKTtcclxuICAgICAgaWYgKFwiaGlkZGVuXCIgPT09IG4gfHwgXCJmaWxlXCIgPT09IG4pIHJldHVybjtcclxuICAgICAgbGV0IG8gPSBmKHIpO1xyXG4gICAgICBpZiAoIW8pIHJldHVybjtcclxuICAgICAgbGV0IGkgPSBrKHIpO1xyXG4gICAgICBpICYmICh0W29dID0gaSlcclxuICAgIH0pLCB0XHJcbiAgfSkuZmlsdGVyKGUgPT4gT2JqZWN0LmtleXMoZSkubGVuZ3RoID4gMClcclxufVxyXG5cclxuZnVuY3Rpb24gRigpIHtcclxuICByZXR1cm4ge1xyXG4gICAgZWR1Y2F0aW9uOiBUKEMpLFxyXG4gICAgZW1wbG95bWVudDogVCh4KVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSShlLCB0LCByKSB7XHJcbiAgaWYgKHZvaWQgMCA9PT0gZVt0XSkgcmV0dXJuIHQ7XHJcbiAgbGV0IG4gPSByLm5hbWUgfHwgci5pZDtcclxuICByZXR1cm4gbiA/IGAke3R9ICgke259KWAgOiB0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGooKSB7XHJcbiAgbGV0IGUgPSB7fSxcclxuICAgIHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHRleHRhcmVhXCIpO1xyXG4gIHQuZm9yRWFjaCh0ID0+IHtcclxuICAgIGxldCByID0gdDtcclxuICAgIGlmIChyLmNsb3Nlc3Q/LihBKSkgcmV0dXJuO1xyXG4gICAgbGV0IG4gPSBrKHIpO1xyXG4gICAgaWYgKCFyLm5hbWUgfHwgIW4pIHJldHVybjtcclxuICAgIGxldCBvID0gZihyKSB8fCByLm5hbWU7XHJcbiAgICBlW0koZSwgbywgcildID0gblxyXG4gIH0pO1xyXG4gIGxldCByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjdXNlci1waG9uZSwgaW5wdXRbbmFtZT1cInBlcnNvbmFsX2luZm8ucGhvbmVcIl0nKTtcclxuICByPy52YWx1ZSAmJiAoZS5QaG9uZSA9IHIudmFsdWUpO1xyXG4gIGxldCBuID0gciA/IEQocikgOiBcIlwiO1xyXG4gIHJldHVybiBuICYmIChlW2xdID0gbiksIGVcclxufVxyXG5cclxuZnVuY3Rpb24gRChlKSB7XHJcbiAgbGV0IHQgPSBlLmNsb3Nlc3QoXCIuaXRpXCIpO1xyXG4gIGlmICghdCkgcmV0dXJuIFwiXCI7XHJcbiAgbGV0IHIgPSB0LnF1ZXJ5U2VsZWN0b3IoXCJsaS5pdGlfX2NvdW50cnkuaXRpX19hY3RpdmVbZGF0YS1jb3VudHJ5LWNvZGVdXCIpIHx8IHQucXVlcnlTZWxlY3RvcihcclxuICAgICdsaS5pdGlfX2NvdW50cnlbYXJpYS1zZWxlY3RlZD1cInRydWVcIl1bZGF0YS1jb3VudHJ5LWNvZGVdJyk7XHJcbiAgaWYgKHIpIHtcclxuICAgIGxldCBlID0gci5xdWVyeVNlbGVjdG9yKFwiLml0aV9fY291bnRyeS1uYW1lXCIpPy50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCIsXHJcbiAgICAgIHQgPSAoci5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRpYWwtY29kZVwiKSB8fCByLnF1ZXJ5U2VsZWN0b3IoXCIuaXRpX19kaWFsLWNvZGVcIik/LnRleHRDb250ZW50IHx8XHJcbiAgICAgICAgXCJcIikucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xyXG4gICAgcmV0dXJuIFtlLCB0ID8gYCske3R9YCA6IFwiXCJdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKVxyXG4gIH1cclxuICBsZXQgbiA9IHQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5pdGlfX3NlbGVjdGVkLWNvdW50cnlcIiksXHJcbiAgICBvID0gbj8uZ2V0QXR0cmlidXRlKFwidGl0bGVcIik/LnRyaW0oKSB8fCBcIlwiLFxyXG4gICAgaSA9IG8ubWF0Y2goL1xcK1xccyooXFxkezEsNH0pLyk/LlsxXSB8fCBcIlwiLFxyXG4gICAgYSA9IG8ucmVwbGFjZSgvXFxzKjo/XFxzKlxcK1xccypcXGR7MSw0fVxccyokLywgXCJcIikudHJpbSgpLFxyXG4gICAgbCA9IG4/LnF1ZXJ5U2VsZWN0b3IoXCIuaXRpX19zZWxlY3RlZC1kaWFsLWNvZGVcIik/LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIixcclxuICAgIHMgPSBsIHx8IChpID8gYCske2l9YCA6IFwiXCIpO1xyXG4gIHJldHVybiBbYSwgc10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJydWxlcy5mNzM1NWYyOC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);