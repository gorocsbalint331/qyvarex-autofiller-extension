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
})({"aT0Lm":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\shared\\click-jr-injector.js",
    "bundleId": "b314449697b5d295",
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
var j = z(require("b52d59816fd28797"));
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

},{"b52d59816fd28797":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"gUbNB":[function(require,module,exports) {
/**
 * Parcel module id: fu3wC
 * Resolved path: src/contents/shared/click-jr-injector.js
 * Dependencies:
 *   ./incremental-anchor-observer -> iLrNS  =>  shared/incremental-anchor-observer.js
 *   ./sticky-job-id -> DQI8L  =>  shared/sticky-job-id.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/utils -> aTDh5  =>  src/core/utils.js
 *   ~utils/job-id -> klnOn  =>  src/utils/job-id.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "keepJobIdInUrl", ()=>l.keepJobIdInUrl), n.export(r, "matchesApplyHeuristic", ()=>c), n.export(r, "matchesSiteSpecificPattern", ()=>j), n.export(r, "evaluatePostNavigationSync", ()=>L), n.export(r, "handleClickForJrInjection", ()=>B), n.export(r, "attachClickJrInjector", ()=>q);
var o = e("~core/utils"), i = e("~utils/job-id"), a = e("./incremental-anchor-observer"), l = e("./sticky-job-id");
let s = /^\s*(apply|apply now|apply (for|to) (this )?(job|position)|submit (your )?application|start (your )?application|continue to apply|begin application)\s*$/i, u = 80;
function c(e1) {
    if (!e1) return !1;
    let t = e1.textContent ?? "", r1 = t.trim();
    if (r1.length <= u && s.test(r1)) return !0;
    let n = (e1.getAttribute("aria-label") ?? "").trim();
    return !!(n && s.test(n));
}
function d(e1) {
    if ("BUTTON" !== e1.tagName) return !1;
    if (/^applyButton_(top|bottom)$/.test(e1.id)) return !0;
    let t = e1.getAttribute("onclick") ?? "";
    return c(e1) && /\bcheckDpcs2AndProceed\s*\(/.test(t);
}
function f(e1) {
    if ("BUTTON" !== e1.tagName) return !1;
    let t = e1.getAttribute("test-id");
    return "apply-button" === t || "apply-without-account" === t || "application-next-step" === t;
}
function p(e1) {
    if ("A" !== e1.tagName || !c(e1)) return !1;
    let t = e1.href;
    return /\/careers\/RegisterEdit(?:[/?#]|$)/.test(t);
}
function m(e1) {
    if ("A" !== e1.tagName || !c(e1)) return !1;
    let t = e1.href;
    return /\/careers\/[^/]+\/jobs\/[^/]+\/apply\/?(?:[?#]|$)/.test(t);
}
function h(e1) {
    if ("A" !== e1.tagName || !c(e1)) return !1;
    let t = e1.href;
    try {
        let e1 = new URL(t);
        return (0, o.isDomainMatch)(e1.hostname, "jobs.bytedance.com") && /^\/[^/]+\/[^/]+\/[^/]+\/apply\/?$/.test(e1.pathname);
    } catch  {
        return !1;
    }
}
function g(e1) {
    if ("A" !== e1.tagName) return !1;
    try {
        let t = new URL(e1.href);
        return (0, o.isDomainMatch)(t.hostname, "jobs.apple.com") && /^\/app\/[^/]+\/apply\/[^/]+\/?$/.test(t.pathname);
    } catch  {
        return !1;
    }
}
function b(e1) {
    if (!c(e1)) return !1;
    let t = e1.getAttribute("role");
    return "BUTTON" === e1.tagName || "button" === t || "tab" === t;
}
let y = [
    {
        label: "smartrecruiters",
        domain: "smartrecruiters.com",
        predicate: (e1)=>"st-apply" === e1.id || "apply" === e1.getAttribute("data-sr-track")
    },
    {
        label: "recruitee",
        domain: "recruitee.com",
        predicate: (e1)=>{
            let t = e1.getAttribute("data-cy");
            return "apply-button-nav" === t || "apply-button" === t;
        }
    },
    {
        label: "netflix-jobs",
        domain: "jobs.netflix.net",
        predicate: (e1)=>"apply-button" === e1.getAttribute("data-test-id")
    },
    {
        label: "gusto",
        domain: "jobs.gusto.com",
        predicate: (e1)=>{
            if ("A" !== e1.tagName) return !1;
            let t = e1.href;
            return "string" == typeof t && /\/applicants\/new(?:\/|[?#]|$)/.test(t);
        }
    },
    {
        label: "apple-submit-resume",
        domain: "jobs.apple.com",
        predicate: g
    },
    {
        label: "successfactors-eu",
        domain: "successfactors.eu",
        predicate: d
    },
    {
        label: "successfactors-com",
        domain: "successfactors.com",
        predicate: d
    },
    {
        label: "dayforce-apply-and-next",
        domain: "jobs.dayforcehcm.com",
        predicate: f
    },
    {
        label: "sapsf",
        domain: "sapsf.com",
        predicate: d
    },
    {
        label: "deloitte-avature-register-edit",
        domain: "apply.deloitte.com",
        predicate: p
    },
    {
        label: "catsone-apply",
        domain: "catsone.com",
        syncAfterAnchorClick: !0,
        predicate: m
    },
    {
        label: "bytedance-apply",
        domain: "joinbytedance.com",
        predicate: h
    },
    {
        label: "tiktok-usds-apply",
        domain: "tiktokusds.com",
        predicate: b
    }
];
function v(e1) {
    return y.filter((t)=>(0, o.isDomainMatch)(e1, t.domain));
}
function w(e1, t) {
    for (let r1 of t)if (r1.predicate(e1)) return !0;
    return !1;
}
function S(e1, t) {
    for (let r1 of t)if (r1.syncAfterAnchorClick && r1.predicate(e1)) return !0;
    return !1;
}
_c = S;
function E(e1, t, r1) {
    if (!e1.href || e1.hasAttribute("download")) return !1;
    let n = (0, i.safeSetJobIdInUrl)(e1.href, t, r1);
    return !!n && (e1.href = n, e1.referrerPolicy = "unsafe-url", !0);
}
_c1 = E;
function x(e1, t) {
    try {
        return new URL(e1.href).searchParams.get(i.JOB_ID_QUERY_KEY) === t;
    } catch  {
        return !1;
    }
}
function C() {
    try {
        return "undefined" != typeof window && window.top !== window.self;
    } catch  {
        return !1;
    }
}
_c2 = C;
function A(e1) {
    try {
        return new URL(e1);
    } catch  {
        return null;
    }
}
_c3 = A;
function k(e1, t, r1) {
    let n = A(e1);
    if (!t || !n) return null;
    let o = (0, i.safeSetJobIdInUrl)(e1, t, r1);
    if (o) return o;
    if (n.searchParams.get(i.JOB_ID_QUERY_KEY) !== t) return null;
    let a = new URL(n.toString());
    a.searchParams.delete(i.JOB_ID_QUERY_KEY);
    let l = (0, i.safeSetJobIdInUrl)(a.toString(), t, r1);
    return l ? n.toString() : null;
}
function T(e1, t, r1) {
    if (!C()) return !1;
    let n = k(e1.href, t, r1);
    return !!n && (e1.href = n, e1.target = "_top", e1.referrerPolicy = "unsafe-url", !0);
}
_c4 = T;
function F(e1, t, r1, n) {
    if ("A" !== e1.tagName) return {
        scanned: 0,
        matched: 0,
        rewritten: 0
    };
    let o = w(e1, n), i = c(e1);
    return o || i ? T(e1, t, r1) ? {
        scanned: 1,
        matched: 1,
        rewritten: 1
    } : "_blank" !== e1.target || o ? {
        scanned: 1,
        matched: 1,
        rewritten: E(e1, t, r1) ? 1 : 0
    } : {
        scanned: 1,
        matched: 1,
        rewritten: 0
    } : {
        scanned: 1,
        matched: 0,
        rewritten: 0
    };
}
_c5 = F;
function I(e1, t, r1, n) {
    let o = {
        scanned: 0,
        matched: 0,
        rewritten: 0
    };
    for (let i of e1){
        let e1 = F(i, t, r1, n);
        o.scanned += e1.scanned, o.matched += e1.matched, o.rewritten += e1.rewritten;
    }
    return o;
}
_c6 = I;
function j(e1, t) {
    return w(e1, v(t));
}
function D(e1) {
    let t = e1.composedPath?.() ?? [];
    for (let e1 of t){
        let t = e1;
        if (!t?.tagName) continue;
        if ("A" === t.tagName) return {
            kind: "anchor",
            element: t
        };
        if ("BUTTON" === t.tagName) return {
            kind: "button",
            element: t
        };
        let r1 = t.getAttribute("role");
        if ("button" === r1 || "tab" === r1) return {
            kind: "button",
            element: t
        };
    }
    return null;
}
_c7 = D;
let P = 1e4, _ = 50;
function L({ jobId: e1, originalHost: t, originalUrl: r1, currentUrl: n }) {
    let o;
    if (n === r1) return {
        done: !1
    };
    try {
        o = new URL(n);
    } catch  {
        return {
            done: !0
        };
    }
    return o.hostname.toLowerCase() !== t.toLowerCase() || o.searchParams.has(i.JOB_ID_QUERY_KEY) ? {
        done: !0
    } : (o.searchParams.set(i.JOB_ID_QUERY_KEY, e1), {
        done: !0,
        restoredUrl: o.toString()
    });
}
_c8 = L;
let R = 1e4, O = 250, M = "click-jr-injector-20260721-v9", N = null;
function $(e1, t) {
    null !== N && clearInterval(N);
    let r1 = window.location.href, n = Date.now(), o = setInterval(()=>{
        try {
            if (Date.now() - n > P) {
                clearInterval(o), N === o && (N = null);
                return;
            }
            let a = window.location.href, s = L({
                jobId: e1,
                originalHost: t,
                originalUrl: r1,
                currentUrl: a
            });
            if (!s.done) return;
            if (clearInterval(o), N === o && (N = null), s.restoredUrl) {
                try {
                    let e1 = new URL(r1), t = new URL(a);
                    console.info("[jobright] click-jr-injector button URL sync result", {
                        host: e1.hostname,
                        originalPathname: e1.pathname,
                        currentPathname: t.pathname,
                        currentQueryKeys: Array.from(t.searchParams.keys()).filter((e1)=>e1 !== i.JOB_ID_QUERY_KEY),
                        restored: !0
                    });
                } catch  {}
                window.history.replaceState(window.history.state, "", s.restoredUrl), (0, l.keepJobIdInUrl)(e1, {
                    originalHost: t
                });
            }
        } catch  {
            clearInterval(o), N === o && (N = null);
        }
    }, _);
    N = o;
}
function B(e1, t, r1, n = v(r1)) {
    let o = D(e1);
    if (!o) return !1;
    let i = w(o.element, n), a = i || c(o.element);
    if (!a) return !1;
    if ("anchor" === o.kind) {
        let e1 = o.element, a = "_blank" !== e1.target && S(e1, n);
        return !!T(e1, t, r1) || ("_blank" !== e1.target || !!i) && (E(e1, t, r1) ? (a && $(t, r1), !0) : !!(a && x(e1, t)) && ($(t, r1), !0));
    }
    return !!i && (console.info("[jobright] click-jr-injector scheduling button URL sync", {
        host: r1,
        testId: o.element.getAttribute("test-id"),
        role: o.element.getAttribute("role"),
        hasJobId: !!t
    }), $(t, r1), !0);
}
_c9 = B;
function q() {
    let e1 = window.location.hostname, t = v(e1);
    if (t.length) {
        let r1;
        try {
            r1 = chrome?.runtime?.getManifest?.()?.version;
        } catch  {
            r1 = void 0;
        }
        console.info("[jobright] click-jr-injector attached", {
            marker: M,
            extensionVersion: r1,
            host: e1,
            hasJobId: !!(0, i.extractJobIdFromUrl)(window.location.href),
            activeSitePatterns: t.map((e1)=>e1.label),
            rewriteDurationMs: R,
            rewriteFallbackIntervalMs: O
        });
    }
    let r1 = !1, n = !1, o = ()=>{
        let o = (0, i.extractJobIdFromUrl)(window.location.href);
        if (!o || "function" != typeof document.querySelectorAll) return;
        let a = I(document.querySelectorAll("a[href]"), o, e1, t), l = t.length > 0 || a.matched > 0;
        l && !r1 && (r1 = !0, console.info("[jobright] click-jr-injector first anchor scan", {
            marker: M,
            host: e1,
            ...a
        })), a.matched > 0 && !n && (n = !0, console.info("[jobright] click-jr-injector first anchor match", {
            marker: M,
            host: e1,
            ...a
        })), a.rewritten > 0 && console.info("[jobright] click-jr-injector rewrote apply anchors", {
            marker: M,
            host: e1,
            ...a
        });
    }, l = null, s = null, u = null;
    (0, i.extractJobIdFromUrl)(window.location.href) && (o(), "undefined" != typeof MutationObserver && document.documentElement ? (l = new MutationObserver((r1)=>{
        let n = (0, i.extractJobIdFromUrl)(window.location.href);
        if (!n) return;
        let o = {
            scanned: 0,
            matched: 0,
            rewritten: 0
        };
        (0, a.visitChangedAnchors)(r1, (r1)=>{
            let i = F(r1, n, e1, t);
            o.scanned += i.scanned, o.matched += i.matched, o.rewritten += i.rewritten;
        }), o.rewritten > 0 && console.info("[jobright] click-jr-injector rewrote changed anchors", {
            marker: M,
            host: e1,
            ...o
        });
    })).observe(document.documentElement, {
        attributes: !0,
        attributeFilter: [
            "aria-label",
            "href"
        ],
        childList: !0,
        characterData: !0,
        subtree: !0
    }) : s = setInterval(o, O), u = setTimeout(()=>{
        l?.disconnect(), l = null, null !== s && (clearInterval(s), s = null), u = null;
    }, R));
    let c = (r1)=>{
        try {
            let n = (0, i.extractJobIdFromUrl)(window.location.href);
            if (!n) return;
            B(r1, n, e1, t);
        } catch (e1) {
            console.warn("[jobright] click-jr-injector handler failed:", e1);
        }
    };
    return document.addEventListener("click", c, !0), ()=>{
        document.removeEventListener("click", c, !0), l?.disconnect(), null !== s && clearInterval(s), null !== u && clearTimeout(u);
    };
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");
$RefreshReg$(_c5, "F");
$RefreshReg$(_c6, "I");
$RefreshReg$(_c7, "D");
$RefreshReg$(_c8, "L");
$RefreshReg$(_c9, "B");

},{}]},["aT0Lm","gUbNB"], "gUbNB", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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L0I7QUFDRiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtYzMyY2NmZjViMWUwMDkxNy5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaGFyZWQvY2xpY2stanItaW5qZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2hhcmVkXFxcXGNsaWNrLWpyLWluamVjdG9yLmpzXCIsXCJidW5kbGVJZFwiOlwiYjMxNDQ0OTY5N2I1ZDI5NVwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IGZ1M3dDXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaGFyZWQvY2xpY2stanItaW5qZWN0b3IuanNcbiAqIERlcGVuZGVuY2llczpcclxuICogICAuL2luY3JlbWVudGFsLWFuY2hvci1vYnNlcnZlciAtPiBpTHJOUyAgPT4gIHNoYXJlZC9pbmNyZW1lbnRhbC1hbmNob3Itb2JzZXJ2ZXIuanNcclxuICogICAuL3N0aWNreS1qb2ItaWQgLT4gRFFJOEwgID0+ICBzaGFyZWQvc3RpY2t5LWpvYi1pZC5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvcmUvdXRpbHMgLT4gYVREaDUgID0+ICBzcmMvY29yZS91dGlscy5qc1xyXG4gKiAgIH51dGlscy9qb2ItaWQgLT4ga2xuT24gID0+ICBzcmMvdXRpbHMvam9iLWlkLmpzXHJcbiAqL1xyXG5cclxudmFyIG4gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxubi5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgbi5leHBvcnQociwgXCJrZWVwSm9iSWRJblVybFwiLCAoKSA9PiBsLmtlZXBKb2JJZEluVXJsKSwgbi5leHBvcnQocixcclxuICAgIFwibWF0Y2hlc0FwcGx5SGV1cmlzdGljXCIsICgpID0+IGMpLCBuLmV4cG9ydChyLCBcIm1hdGNoZXNTaXRlU3BlY2lmaWNQYXR0ZXJuXCIsICgpID0+IGopLCBuLmV4cG9ydChcclxuICAgIHIsIFwiZXZhbHVhdGVQb3N0TmF2aWdhdGlvblN5bmNcIiwgKCkgPT4gTCksIG4uZXhwb3J0KHIsIFwiaGFuZGxlQ2xpY2tGb3JKckluamVjdGlvblwiLCAoKSA9PiBCKSwgblxyXG4gIC5leHBvcnQociwgXCJhdHRhY2hDbGlja0pySW5qZWN0b3JcIiwgKCkgPT4gcSk7XHJcbnZhciBvID0gZShcIn5jb3JlL3V0aWxzXCIpLFxyXG4gIGkgPSBlKFwifnV0aWxzL2pvYi1pZFwiKSxcclxuICBhID0gZShcIi4vaW5jcmVtZW50YWwtYW5jaG9yLW9ic2VydmVyXCIpLFxyXG4gIGwgPSBlKFwiLi9zdGlja3ktam9iLWlkXCIpO1xyXG5sZXQgcyA9XHJcbiAgL15cXHMqKGFwcGx5fGFwcGx5IG5vd3xhcHBseSAoZm9yfHRvKSAodGhpcyApPyhqb2J8cG9zaXRpb24pfHN1Ym1pdCAoeW91ciApP2FwcGxpY2F0aW9ufHN0YXJ0ICh5b3VyICk/YXBwbGljYXRpb258Y29udGludWUgdG8gYXBwbHl8YmVnaW4gYXBwbGljYXRpb24pXFxzKiQvaSxcclxuICB1ID0gODA7XHJcblxyXG5mdW5jdGlvbiBjKGUpIHtcclxuICBpZiAoIWUpIHJldHVybiAhMTtcclxuICBsZXQgdCA9IGUudGV4dENvbnRlbnQgPz8gXCJcIixcclxuICAgIHIgPSB0LnRyaW0oKTtcclxuICBpZiAoci5sZW5ndGggPD0gdSAmJiBzLnRlc3QocikpIHJldHVybiAhMDtcclxuICBsZXQgbiA9IChlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikgPz8gXCJcIikudHJpbSgpO1xyXG4gIHJldHVybiAhIShuICYmIHMudGVzdChuKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZChlKSB7XHJcbiAgaWYgKFwiQlVUVE9OXCIgIT09IGUudGFnTmFtZSkgcmV0dXJuICExO1xyXG4gIGlmICgvXmFwcGx5QnV0dG9uXyh0b3B8Ym90dG9tKSQvLnRlc3QoZS5pZCkpIHJldHVybiAhMDtcclxuICBsZXQgdCA9IGUuZ2V0QXR0cmlidXRlKFwib25jbGlja1wiKSA/PyBcIlwiO1xyXG4gIHJldHVybiBjKGUpICYmIC9cXGJjaGVja0RwY3MyQW5kUHJvY2VlZFxccypcXCgvLnRlc3QodClcclxufVxyXG5cclxuZnVuY3Rpb24gZihlKSB7XHJcbiAgaWYgKFwiQlVUVE9OXCIgIT09IGUudGFnTmFtZSkgcmV0dXJuICExO1xyXG4gIGxldCB0ID0gZS5nZXRBdHRyaWJ1dGUoXCJ0ZXN0LWlkXCIpO1xyXG4gIHJldHVybiBcImFwcGx5LWJ1dHRvblwiID09PSB0IHx8IFwiYXBwbHktd2l0aG91dC1hY2NvdW50XCIgPT09IHQgfHwgXCJhcHBsaWNhdGlvbi1uZXh0LXN0ZXBcIiA9PT0gdFxyXG59XHJcblxyXG5mdW5jdGlvbiBwKGUpIHtcclxuICBpZiAoXCJBXCIgIT09IGUudGFnTmFtZSB8fCAhYyhlKSkgcmV0dXJuICExO1xyXG4gIGxldCB0ID0gZS5ocmVmO1xyXG4gIHJldHVybiAvXFwvY2FyZWVyc1xcL1JlZ2lzdGVyRWRpdCg/OlsvPyNdfCQpLy50ZXN0KHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG0oZSkge1xyXG4gIGlmIChcIkFcIiAhPT0gZS50YWdOYW1lIHx8ICFjKGUpKSByZXR1cm4gITE7XHJcbiAgbGV0IHQgPSBlLmhyZWY7XHJcbiAgcmV0dXJuIC9cXC9jYXJlZXJzXFwvW14vXStcXC9qb2JzXFwvW14vXStcXC9hcHBseVxcLz8oPzpbPyNdfCQpLy50ZXN0KHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGgoZSkge1xyXG4gIGlmIChcIkFcIiAhPT0gZS50YWdOYW1lIHx8ICFjKGUpKSByZXR1cm4gITE7XHJcbiAgbGV0IHQgPSBlLmhyZWY7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBlID0gbmV3IFVSTCh0KTtcclxuICAgIHJldHVybiAoMCwgby5pc0RvbWFpbk1hdGNoKShlLmhvc3RuYW1lLCBcImpvYnMuYnl0ZWRhbmNlLmNvbVwiKSAmJlxyXG4gICAgICAvXlxcL1teL10rXFwvW14vXStcXC9bXi9dK1xcL2FwcGx5XFwvPyQvLnRlc3QoZS5wYXRobmFtZSlcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiAhMVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZyhlKSB7XHJcbiAgaWYgKFwiQVwiICE9PSBlLnRhZ05hbWUpIHJldHVybiAhMTtcclxuICB0cnkge1xyXG4gICAgbGV0IHQgPSBuZXcgVVJMKGUuaHJlZik7XHJcbiAgICByZXR1cm4gKDAsIG8uaXNEb21haW5NYXRjaCkodC5ob3N0bmFtZSwgXCJqb2JzLmFwcGxlLmNvbVwiKSAmJiAvXlxcL2FwcFxcL1teL10rXFwvYXBwbHlcXC9bXi9dK1xcLz8kL1xyXG4gICAgICAudGVzdCh0LnBhdGhuYW1lKVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuICExXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiKGUpIHtcclxuICBpZiAoIWMoZSkpIHJldHVybiAhMTtcclxuICBsZXQgdCA9IGUuZ2V0QXR0cmlidXRlKFwicm9sZVwiKTtcclxuICByZXR1cm4gXCJCVVRUT05cIiA9PT0gZS50YWdOYW1lIHx8IFwiYnV0dG9uXCIgPT09IHQgfHwgXCJ0YWJcIiA9PT0gdFxyXG59XHJcbmxldCB5ID0gW3tcclxuICBsYWJlbDogXCJzbWFydHJlY3J1aXRlcnNcIixcclxuICBkb21haW46IFwic21hcnRyZWNydWl0ZXJzLmNvbVwiLFxyXG4gIHByZWRpY2F0ZTogZSA9PiBcInN0LWFwcGx5XCIgPT09IGUuaWQgfHwgXCJhcHBseVwiID09PSBlLmdldEF0dHJpYnV0ZShcImRhdGEtc3ItdHJhY2tcIilcclxufSwge1xyXG4gIGxhYmVsOiBcInJlY3J1aXRlZVwiLFxyXG4gIGRvbWFpbjogXCJyZWNydWl0ZWUuY29tXCIsXHJcbiAgcHJlZGljYXRlOiBlID0+IHtcclxuICAgIGxldCB0ID0gZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWN5XCIpO1xyXG4gICAgcmV0dXJuIFwiYXBwbHktYnV0dG9uLW5hdlwiID09PSB0IHx8IFwiYXBwbHktYnV0dG9uXCIgPT09IHRcclxuICB9XHJcbn0sIHtcclxuICBsYWJlbDogXCJuZXRmbGl4LWpvYnNcIixcclxuICBkb21haW46IFwiam9icy5uZXRmbGl4Lm5ldFwiLFxyXG4gIHByZWRpY2F0ZTogZSA9PiBcImFwcGx5LWJ1dHRvblwiID09PSBlLmdldEF0dHJpYnV0ZShcImRhdGEtdGVzdC1pZFwiKVxyXG59LCB7XHJcbiAgbGFiZWw6IFwiZ3VzdG9cIixcclxuICBkb21haW46IFwiam9icy5ndXN0by5jb21cIixcclxuICBwcmVkaWNhdGU6IGUgPT4ge1xyXG4gICAgaWYgKFwiQVwiICE9PSBlLnRhZ05hbWUpIHJldHVybiAhMTtcclxuICAgIGxldCB0ID0gZS5ocmVmO1xyXG4gICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgJiYgL1xcL2FwcGxpY2FudHNcXC9uZXcoPzpcXC98Wz8jXXwkKS8udGVzdCh0KVxyXG4gIH1cclxufSwge1xyXG4gIGxhYmVsOiBcImFwcGxlLXN1Ym1pdC1yZXN1bWVcIixcclxuICBkb21haW46IFwiam9icy5hcHBsZS5jb21cIixcclxuICBwcmVkaWNhdGU6IGdcclxufSwge1xyXG4gIGxhYmVsOiBcInN1Y2Nlc3NmYWN0b3JzLWV1XCIsXHJcbiAgZG9tYWluOiBcInN1Y2Nlc3NmYWN0b3JzLmV1XCIsXHJcbiAgcHJlZGljYXRlOiBkXHJcbn0sIHtcclxuICBsYWJlbDogXCJzdWNjZXNzZmFjdG9ycy1jb21cIixcclxuICBkb21haW46IFwic3VjY2Vzc2ZhY3RvcnMuY29tXCIsXHJcbiAgcHJlZGljYXRlOiBkXHJcbn0sIHtcclxuICBsYWJlbDogXCJkYXlmb3JjZS1hcHBseS1hbmQtbmV4dFwiLFxyXG4gIGRvbWFpbjogXCJqb2JzLmRheWZvcmNlaGNtLmNvbVwiLFxyXG4gIHByZWRpY2F0ZTogZlxyXG59LCB7XHJcbiAgbGFiZWw6IFwic2Fwc2ZcIixcclxuICBkb21haW46IFwic2Fwc2YuY29tXCIsXHJcbiAgcHJlZGljYXRlOiBkXHJcbn0sIHtcclxuICBsYWJlbDogXCJkZWxvaXR0ZS1hdmF0dXJlLXJlZ2lzdGVyLWVkaXRcIixcclxuICBkb21haW46IFwiYXBwbHkuZGVsb2l0dGUuY29tXCIsXHJcbiAgcHJlZGljYXRlOiBwXHJcbn0sIHtcclxuICBsYWJlbDogXCJjYXRzb25lLWFwcGx5XCIsXHJcbiAgZG9tYWluOiBcImNhdHNvbmUuY29tXCIsXHJcbiAgc3luY0FmdGVyQW5jaG9yQ2xpY2s6ICEwLFxyXG4gIHByZWRpY2F0ZTogbVxyXG59LCB7XHJcbiAgbGFiZWw6IFwiYnl0ZWRhbmNlLWFwcGx5XCIsXHJcbiAgZG9tYWluOiBcImpvaW5ieXRlZGFuY2UuY29tXCIsXHJcbiAgcHJlZGljYXRlOiBoXHJcbn0sIHtcclxuICBsYWJlbDogXCJ0aWt0b2stdXNkcy1hcHBseVwiLFxyXG4gIGRvbWFpbjogXCJ0aWt0b2t1c2RzLmNvbVwiLFxyXG4gIHByZWRpY2F0ZTogYlxyXG59XTtcclxuXHJcbmZ1bmN0aW9uIHYoZSkge1xyXG4gIHJldHVybiB5LmZpbHRlcih0ID0+ICgwLCBvLmlzRG9tYWluTWF0Y2gpKGUsIHQuZG9tYWluKSlcclxufVxyXG5cclxuZnVuY3Rpb24gdyhlLCB0KSB7XHJcbiAgZm9yIChsZXQgciBvZiB0KVxyXG4gICAgaWYgKHIucHJlZGljYXRlKGUpKSByZXR1cm4gITA7XHJcbiAgcmV0dXJuICExXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFMoZSwgdCkge1xyXG4gIGZvciAobGV0IHIgb2YgdClcclxuICAgIGlmIChyLnN5bmNBZnRlckFuY2hvckNsaWNrICYmIHIucHJlZGljYXRlKGUpKSByZXR1cm4gITA7XHJcbiAgcmV0dXJuICExXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEUoZSwgdCwgcikge1xyXG4gIGlmICghZS5ocmVmIHx8IGUuaGFzQXR0cmlidXRlKFwiZG93bmxvYWRcIikpIHJldHVybiAhMTtcclxuICBsZXQgbiA9ICgwLCBpLnNhZmVTZXRKb2JJZEluVXJsKShlLmhyZWYsIHQsIHIpO1xyXG4gIHJldHVybiAhIW4gJiYgKGUuaHJlZiA9IG4sIGUucmVmZXJyZXJQb2xpY3kgPSBcInVuc2FmZS11cmxcIiwgITApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHgoZSwgdCkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gbmV3IFVSTChlLmhyZWYpLnNlYXJjaFBhcmFtcy5nZXQoaS5KT0JfSURfUVVFUllfS0VZKSA9PT0gdFxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuICExXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBDKCkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ICYmIHdpbmRvdy50b3AgIT09IHdpbmRvdy5zZWxmXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gITFcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEEoZSkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gbmV3IFVSTChlKVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGsoZSwgdCwgcikge1xyXG4gIGxldCBuID0gQShlKTtcclxuICBpZiAoIXQgfHwgIW4pIHJldHVybiBudWxsO1xyXG4gIGxldCBvID0gKDAsIGkuc2FmZVNldEpvYklkSW5VcmwpKGUsIHQsIHIpO1xyXG4gIGlmIChvKSByZXR1cm4gbztcclxuICBpZiAobi5zZWFyY2hQYXJhbXMuZ2V0KGkuSk9CX0lEX1FVRVJZX0tFWSkgIT09IHQpIHJldHVybiBudWxsO1xyXG4gIGxldCBhID0gbmV3IFVSTChuLnRvU3RyaW5nKCkpO1xyXG4gIGEuc2VhcmNoUGFyYW1zLmRlbGV0ZShpLkpPQl9JRF9RVUVSWV9LRVkpO1xyXG4gIGxldCBsID0gKDAsIGkuc2FmZVNldEpvYklkSW5VcmwpKGEudG9TdHJpbmcoKSwgdCwgcik7XHJcbiAgcmV0dXJuIGwgPyBuLnRvU3RyaW5nKCkgOiBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFQoZSwgdCwgcikge1xyXG4gIGlmICghQygpKSByZXR1cm4gITE7XHJcbiAgbGV0IG4gPSBrKGUuaHJlZiwgdCwgcik7XHJcbiAgcmV0dXJuICEhbiAmJiAoZS5ocmVmID0gbiwgZS50YXJnZXQgPSBcIl90b3BcIiwgZS5yZWZlcnJlclBvbGljeSA9IFwidW5zYWZlLXVybFwiLCAhMClcclxufVxyXG5cclxuZnVuY3Rpb24gRihlLCB0LCByLCBuKSB7XHJcbiAgaWYgKFwiQVwiICE9PSBlLnRhZ05hbWUpIHJldHVybiB7XHJcbiAgICBzY2FubmVkOiAwLFxyXG4gICAgbWF0Y2hlZDogMCxcclxuICAgIHJld3JpdHRlbjogMFxyXG4gIH07XHJcbiAgbGV0IG8gPSB3KGUsIG4pLFxyXG4gICAgaSA9IGMoZSk7XHJcbiAgcmV0dXJuIG8gfHwgaSA/IFQoZSwgdCwgcikgPyB7XHJcbiAgICBzY2FubmVkOiAxLFxyXG4gICAgbWF0Y2hlZDogMSxcclxuICAgIHJld3JpdHRlbjogMVxyXG4gIH0gOiBcIl9ibGFua1wiICE9PSBlLnRhcmdldCB8fCBvID8ge1xyXG4gICAgc2Nhbm5lZDogMSxcclxuICAgIG1hdGNoZWQ6IDEsXHJcbiAgICByZXdyaXR0ZW46IEUoZSwgdCwgcikgPyAxIDogMFxyXG4gIH0gOiB7XHJcbiAgICBzY2FubmVkOiAxLFxyXG4gICAgbWF0Y2hlZDogMSxcclxuICAgIHJld3JpdHRlbjogMFxyXG4gIH0gOiB7XHJcbiAgICBzY2FubmVkOiAxLFxyXG4gICAgbWF0Y2hlZDogMCxcclxuICAgIHJld3JpdHRlbjogMFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSShlLCB0LCByLCBuKSB7XHJcbiAgbGV0IG8gPSB7XHJcbiAgICBzY2FubmVkOiAwLFxyXG4gICAgbWF0Y2hlZDogMCxcclxuICAgIHJld3JpdHRlbjogMFxyXG4gIH07XHJcbiAgZm9yIChsZXQgaSBvZiBlKSB7XHJcbiAgICBsZXQgZSA9IEYoaSwgdCwgciwgbik7XHJcbiAgICBvLnNjYW5uZWQgKz0gZS5zY2FubmVkLCBvLm1hdGNoZWQgKz0gZS5tYXRjaGVkLCBvLnJld3JpdHRlbiArPSBlLnJld3JpdHRlblxyXG4gIH1cclxuICByZXR1cm4gb1xyXG59XHJcblxyXG5mdW5jdGlvbiBqKGUsIHQpIHtcclxuICByZXR1cm4gdyhlLCB2KHQpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEKGUpIHtcclxuICBsZXQgdCA9IGUuY29tcG9zZWRQYXRoPy4oKSA/PyBbXTtcclxuICBmb3IgKGxldCBlIG9mIHQpIHtcclxuICAgIGxldCB0ID0gZTtcclxuICAgIGlmICghdD8udGFnTmFtZSkgY29udGludWU7XHJcbiAgICBpZiAoXCJBXCIgPT09IHQudGFnTmFtZSkgcmV0dXJuIHtcclxuICAgICAga2luZDogXCJhbmNob3JcIixcclxuICAgICAgZWxlbWVudDogdFxyXG4gICAgfTtcclxuICAgIGlmIChcIkJVVFRPTlwiID09PSB0LnRhZ05hbWUpIHJldHVybiB7XHJcbiAgICAgIGtpbmQ6IFwiYnV0dG9uXCIsXHJcbiAgICAgIGVsZW1lbnQ6IHRcclxuICAgIH07XHJcbiAgICBsZXQgciA9IHQuZ2V0QXR0cmlidXRlKFwicm9sZVwiKTtcclxuICAgIGlmIChcImJ1dHRvblwiID09PSByIHx8IFwidGFiXCIgPT09IHIpIHJldHVybiB7XHJcbiAgICAgIGtpbmQ6IFwiYnV0dG9uXCIsXHJcbiAgICAgIGVsZW1lbnQ6IHRcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5sZXQgUCA9IDFlNCxcclxuICBfID0gNTA7XHJcblxyXG5mdW5jdGlvbiBMKHtcclxuICBqb2JJZDogZSxcclxuICBvcmlnaW5hbEhvc3Q6IHQsXHJcbiAgb3JpZ2luYWxVcmw6IHIsXHJcbiAgY3VycmVudFVybDogblxyXG59KSB7XHJcbiAgbGV0IG87XHJcbiAgaWYgKG4gPT09IHIpIHJldHVybiB7XHJcbiAgICBkb25lOiAhMVxyXG4gIH07XHJcbiAgdHJ5IHtcclxuICAgIG8gPSBuZXcgVVJMKG4pXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkb25lOiAhMFxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gby5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0LnRvTG93ZXJDYXNlKCkgfHwgby5zZWFyY2hQYXJhbXMuaGFzKGkuSk9CX0lEX1FVRVJZX0tFWSkgPyB7XHJcbiAgICBkb25lOiAhMFxyXG4gIH0gOiAoby5zZWFyY2hQYXJhbXMuc2V0KGkuSk9CX0lEX1FVRVJZX0tFWSwgZSksIHtcclxuICAgIGRvbmU6ICEwLFxyXG4gICAgcmVzdG9yZWRVcmw6IG8udG9TdHJpbmcoKVxyXG4gIH0pXHJcbn1cclxubGV0IFIgPSAxZTQsXHJcbiAgTyA9IDI1MCxcclxuICBNID0gXCJjbGljay1qci1pbmplY3Rvci0yMDI2MDcyMS12OVwiLFxyXG4gIE4gPSBudWxsO1xyXG5cclxuZnVuY3Rpb24gJChlLCB0KSB7XHJcbiAgbnVsbCAhPT0gTiAmJiBjbGVhckludGVydmFsKE4pO1xyXG4gIGxldCByID0gd2luZG93LmxvY2F0aW9uLmhyZWYsXHJcbiAgICBuID0gRGF0ZS5ub3coKSxcclxuICAgIG8gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBuID4gUCkge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChvKSwgTiA9PT0gbyAmJiAoTiA9IG51bGwpO1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhID0gd2luZG93LmxvY2F0aW9uLmhyZWYsXHJcbiAgICAgICAgICBzID0gTCh7XHJcbiAgICAgICAgICAgIGpvYklkOiBlLFxyXG4gICAgICAgICAgICBvcmlnaW5hbEhvc3Q6IHQsXHJcbiAgICAgICAgICAgIG9yaWdpbmFsVXJsOiByLFxyXG4gICAgICAgICAgICBjdXJyZW50VXJsOiBhXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXMuZG9uZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChjbGVhckludGVydmFsKG8pLCBOID09PSBvICYmIChOID0gbnVsbCksIHMucmVzdG9yZWRVcmwpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBlID0gbmV3IFVSTChyKSxcclxuICAgICAgICAgICAgICB0ID0gbmV3IFVSTChhKTtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiW2pvYnJpZ2h0XSBjbGljay1qci1pbmplY3RvciBidXR0b24gVVJMIHN5bmMgcmVzdWx0XCIsIHtcclxuICAgICAgICAgICAgICBob3N0OiBlLmhvc3RuYW1lLFxyXG4gICAgICAgICAgICAgIG9yaWdpbmFsUGF0aG5hbWU6IGUucGF0aG5hbWUsXHJcbiAgICAgICAgICAgICAgY3VycmVudFBhdGhuYW1lOiB0LnBhdGhuYW1lLFxyXG4gICAgICAgICAgICAgIGN1cnJlbnRRdWVyeUtleXM6IEFycmF5LmZyb20odC5zZWFyY2hQYXJhbXMua2V5cygpKS5maWx0ZXIoZSA9PiBlICE9PSBpXHJcbiAgICAgICAgICAgICAgICAuSk9CX0lEX1FVRVJZX0tFWSksXHJcbiAgICAgICAgICAgICAgcmVzdG9yZWQ6ICEwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGNhdGNoIHt9XHJcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUod2luZG93Lmhpc3Rvcnkuc3RhdGUsIFwiXCIsIHMucmVzdG9yZWRVcmwpLCAoMCwgbFxyXG4gICAgICAgICAgICAua2VlcEpvYklkSW5VcmwpKGUsIHtcclxuICAgICAgICAgICAgb3JpZ2luYWxIb3N0OiB0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChvKSwgTiA9PT0gbyAmJiAoTiA9IG51bGwpXHJcbiAgICAgIH1cclxuICAgIH0sIF8pO1xyXG4gIE4gPSBvXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEIoZSwgdCwgciwgbiA9IHYocikpIHtcclxuICBsZXQgbyA9IEQoZSk7XHJcbiAgaWYgKCFvKSByZXR1cm4gITE7XHJcbiAgbGV0IGkgPSB3KG8uZWxlbWVudCwgbiksXHJcbiAgICBhID0gaSB8fCBjKG8uZWxlbWVudCk7XHJcbiAgaWYgKCFhKSByZXR1cm4gITE7XHJcbiAgaWYgKFwiYW5jaG9yXCIgPT09IG8ua2luZCkge1xyXG4gICAgbGV0IGUgPSBvLmVsZW1lbnQsXHJcbiAgICAgIGEgPSBcIl9ibGFua1wiICE9PSBlLnRhcmdldCAmJiBTKGUsIG4pO1xyXG4gICAgcmV0dXJuICEhVChlLCB0LCByKSB8fCAoXCJfYmxhbmtcIiAhPT0gZS50YXJnZXQgfHwgISFpKSAmJiAoRShlLCB0LCByKSA/IChhICYmICQodCwgciksICEwKSA6ICEhKFxyXG4gICAgICBhICYmIHgoZSwgdCkpICYmICgkKHQsIHIpLCAhMCkpXHJcbiAgfVxyXG4gIHJldHVybiAhIWkgJiYgKGNvbnNvbGUuaW5mbyhcIltqb2JyaWdodF0gY2xpY2stanItaW5qZWN0b3Igc2NoZWR1bGluZyBidXR0b24gVVJMIHN5bmNcIiwge1xyXG4gICAgaG9zdDogcixcclxuICAgIHRlc3RJZDogby5lbGVtZW50LmdldEF0dHJpYnV0ZShcInRlc3QtaWRcIiksXHJcbiAgICByb2xlOiBvLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwicm9sZVwiKSxcclxuICAgIGhhc0pvYklkOiAhIXRcclxuICB9KSwgJCh0LCByKSwgITApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHEoKSB7XHJcbiAgbGV0IGUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUsXHJcbiAgICB0ID0gdihlKTtcclxuICBpZiAodC5sZW5ndGgpIHtcclxuICAgIGxldCByO1xyXG4gICAgdHJ5IHtcclxuICAgICAgciA9IGNocm9tZT8ucnVudGltZT8uZ2V0TWFuaWZlc3Q/LigpPy52ZXJzaW9uXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgciA9IHZvaWQgMFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5pbmZvKFwiW2pvYnJpZ2h0XSBjbGljay1qci1pbmplY3RvciBhdHRhY2hlZFwiLCB7XHJcbiAgICAgIG1hcmtlcjogTSxcclxuICAgICAgZXh0ZW5zaW9uVmVyc2lvbjogcixcclxuICAgICAgaG9zdDogZSxcclxuICAgICAgaGFzSm9iSWQ6ICEhKDAsIGkuZXh0cmFjdEpvYklkRnJvbVVybCkod2luZG93LmxvY2F0aW9uLmhyZWYpLFxyXG4gICAgICBhY3RpdmVTaXRlUGF0dGVybnM6IHQubWFwKGUgPT4gZS5sYWJlbCksXHJcbiAgICAgIHJld3JpdGVEdXJhdGlvbk1zOiBSLFxyXG4gICAgICByZXdyaXRlRmFsbGJhY2tJbnRlcnZhbE1zOiBPXHJcbiAgICB9KVxyXG4gIH1cclxuICBsZXQgciA9ICExLFxyXG4gICAgbiA9ICExLFxyXG4gICAgbyA9ICgpID0+IHtcclxuICAgICAgbGV0IG8gPSAoMCwgaS5leHRyYWN0Sm9iSWRGcm9tVXJsKSh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgIGlmICghbyB8fCBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwpIHJldHVybjtcclxuICAgICAgbGV0IGEgPSBJKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhW2hyZWZdXCIpLCBvLCBlLCB0KSxcclxuICAgICAgICBsID0gdC5sZW5ndGggPiAwIHx8IGEubWF0Y2hlZCA+IDA7XHJcbiAgICAgIGwgJiYgIXIgJiYgKHIgPSAhMCwgY29uc29sZS5pbmZvKFwiW2pvYnJpZ2h0XSBjbGljay1qci1pbmplY3RvciBmaXJzdCBhbmNob3Igc2NhblwiLCB7XHJcbiAgICAgICAgbWFya2VyOiBNLFxyXG4gICAgICAgIGhvc3Q6IGUsXHJcbiAgICAgICAgLi4uYVxyXG4gICAgICB9KSksIGEubWF0Y2hlZCA+IDAgJiYgIW4gJiYgKG4gPSAhMCwgY29uc29sZS5pbmZvKFxyXG4gICAgICAgIFwiW2pvYnJpZ2h0XSBjbGljay1qci1pbmplY3RvciBmaXJzdCBhbmNob3IgbWF0Y2hcIiwge1xyXG4gICAgICAgICAgbWFya2VyOiBNLFxyXG4gICAgICAgICAgaG9zdDogZSxcclxuICAgICAgICAgIC4uLmFcclxuICAgICAgICB9KSksIGEucmV3cml0dGVuID4gMCAmJiBjb25zb2xlLmluZm8oXHJcbiAgICAgIFwiW2pvYnJpZ2h0XSBjbGljay1qci1pbmplY3RvciByZXdyb3RlIGFwcGx5IGFuY2hvcnNcIiwge1xyXG4gICAgICAgIG1hcmtlcjogTSxcclxuICAgICAgICBob3N0OiBlLFxyXG4gICAgICAgIC4uLmFcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBsID0gbnVsbCxcclxuICAgIHMgPSBudWxsLFxyXG4gICAgdSA9IG51bGw7XHJcbiAgKDAsIGkuZXh0cmFjdEpvYklkRnJvbVVybCkod2luZG93LmxvY2F0aW9uLmhyZWYpICYmIChvKCksIFwidW5kZWZpbmVkXCIgIT1cclxuICAgIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IChsID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIociA9PiB7XHJcbiAgICAgIGxldCBuID0gKDAsIGkuZXh0cmFjdEpvYklkRnJvbVVybCkod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICBpZiAoIW4pIHJldHVybjtcclxuICAgICAgbGV0IG8gPSB7XHJcbiAgICAgICAgc2Nhbm5lZDogMCxcclxuICAgICAgICBtYXRjaGVkOiAwLFxyXG4gICAgICAgIHJld3JpdHRlbjogMFxyXG4gICAgICB9O1xyXG4gICAgICAoMCwgYS52aXNpdENoYW5nZWRBbmNob3JzKShyLCByID0+IHtcclxuICAgICAgICBsZXQgaSA9IEYociwgbiwgZSwgdCk7XHJcbiAgICAgICAgby5zY2FubmVkICs9IGkuc2Nhbm5lZCwgby5tYXRjaGVkICs9IGkubWF0Y2hlZCwgby5yZXdyaXR0ZW4gKz0gaS5yZXdyaXR0ZW5cclxuICAgICAgfSksIG8ucmV3cml0dGVuID4gMCAmJiBjb25zb2xlLmluZm8oXHJcbiAgICAgICAgXCJbam9icmlnaHRdIGNsaWNrLWpyLWluamVjdG9yIHJld3JvdGUgY2hhbmdlZCBhbmNob3JzXCIsIHtcclxuICAgICAgICAgIG1hcmtlcjogTSxcclxuICAgICAgICAgIGhvc3Q6IGUsXHJcbiAgICAgICAgICAuLi5vXHJcbiAgICAgICAgfSlcclxuICAgIH0pKS5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xyXG4gICAgICBhdHRyaWJ1dGVzOiAhMCxcclxuICAgICAgYXR0cmlidXRlRmlsdGVyOiBbXCJhcmlhLWxhYmVsXCIsIFwiaHJlZlwiXSxcclxuICAgICAgY2hpbGRMaXN0OiAhMCxcclxuICAgICAgY2hhcmFjdGVyRGF0YTogITAsXHJcbiAgICAgIHN1YnRyZWU6ICEwXHJcbiAgICB9KSA6IHMgPSBzZXRJbnRlcnZhbChvLCBPKSwgdSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBsPy5kaXNjb25uZWN0KCksIGwgPSBudWxsLCBudWxsICE9PSBzICYmIChjbGVhckludGVydmFsKHMpLCBzID0gbnVsbCksIHUgPSBudWxsXHJcbiAgICB9LCBSKSk7XHJcbiAgbGV0IGMgPSByID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBuID0gKDAsIGkuZXh0cmFjdEpvYklkRnJvbVVybCkod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICBpZiAoIW4pIHJldHVybjtcclxuICAgICAgQihyLCBuLCBlLCB0KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJbam9icmlnaHRdIGNsaWNrLWpyLWluamVjdG9yIGhhbmRsZXIgZmFpbGVkOlwiLCBlKVxyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjLCAhMCksICgpID0+IHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjLCAhMCksIGw/LmRpc2Nvbm5lY3QoKSwgbnVsbCAhPT0gcyAmJiBjbGVhckludGVydmFsKHMpLFxyXG4gICAgICBudWxsICE9PSB1ICYmIGNsZWFyVGltZW91dCh1KVxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImNsaWNrLWpyLWluamVjdG9yLjk3YjVkMjk1LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);