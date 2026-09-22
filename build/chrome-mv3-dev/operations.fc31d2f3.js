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
})({"4dG8v":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\adp-workforcenow\\operations.js",
    "bundleId": "72dcff9efc31d2f3",
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
var j = z(require("35bcea99264438d"));
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

},{"35bcea99264438d":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"10mps":[function(require,module,exports) {
/**
 * Parcel module id: lIV4n
 * Resolved path: src/contents/sites/adp-workforcenow/operations.js
 * Dependencies:
 *   ./answer -> 3cqYs  =>  src/contents/sites/adp-workforcenow/answer.js
 *   ./country -> dBzh2  =>  src/contents/sites/adp-workforcenow/country.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/phone-country-code -> 8nENw  =>  src/core/phone-country-code.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/string -> ijEFi  =>  src/utils/string.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getAdpWorkforceNowAdvanceButton", ()=>g), n.export(r, "getResumeUploadDom", ()=>y), n.export(r, "getCoverLetterUploadDom", ()=>v), n.export(r, "getCoverLetterFieldStatus", ()=>w), n.export(r, "bindCoverLetterAdvanceRecheckObserver", ()=>S), n.export(r, "fillAdpWorkforceNowTextInput", ()=>F), n.export(r, "fillAdpWorkforceNowPhoneInput", ()=>I), n.export(r, "fillAdpWorkforceNowPhoneCountryCode", ()=>j), n.export(r, "fillCheckBoxesField", ()=>D), n.export(r, "fillCountry", ()=>P), n.export(r, "prefillCountry", ()=>_), n.export(r, "preselectDesiredSalaryControls", ()=>L), n.export(r, "fillCustomSelectField", ()=>M), n.export(r, "uploadResume", ()=>H), n.export(r, "uploadCoverLetter", ()=>Y), n.export(r, "preclickAddButtons", ()=>z), n.export(r, "fillDisabilityStatusIfPresent", ()=>V), n.export(r, "fillRadioGroupField", ()=>K), n.export(r, "submitObserver", ()=>X), n.export(r, "getSelectOptionsElement", ()=>J);
var o = e("~contents/methods/choice-match"), i = e("~contents/methods/answer"), a = e("~contents/methods/dom"), l = e("~contents/methods/observer"), s = e("~core/enums"), u = e("~core/phone-country-code"), c = e("~core/xpath"), d = e("~utils/delay"), f = e("~utils/string"), p = e("./answer"), m = e("./country");
function h(e1) {
    if (!e1) return !1;
    let t = "function" == typeof e1.checkVisibility;
    return t ? e1.checkVisibility() ?? !1 : !!e1.offsetParent;
}
function g() {
    let e1 = document.getElementById("ja_sv_cw_next_footer_btn");
    if (e1 && h(e1)) return e1;
    let t = Array.from(document.querySelectorAll('button, input[type="submit"]')).find((e1)=>{
        let t = (e1.textContent || e1.getAttribute("value") || e1.getAttribute("aria-label") || "").trim().toLowerCase();
        return h(e1) && t.includes("submit");
    });
    return t ?? null;
}
function b(e1) {
    return e1 ? (e1.textContent || e1.getAttribute("button-title") || e1.getAttribute("aria-label") || "").trim().toLowerCase() : "";
}
function y() {
    let e1 = document.querySelector("#resumeUploadContainer, .resume-upload-container") || Array.from(document.querySelectorAll(".upload-resume-container")).find((e1)=>{
        let t = e1.textContent?.toLowerCase() || "";
        return !e1.closest(".additional-documents-container") && !!e1.querySelector('input[type="file"]') && (t.includes("upload resume") || t.includes("resume"));
    }) || null, t = e1?.querySelector('input[type="file"][name="file"], input[type="file"]'), r1 = e1?.querySelector('sdf-button[id^="fileUpload-"][button-title*="Upload resume"], sdf-button[id^="fileUpload-"][aria-label*="Upload resume"], sdf-button[button-title*="Upload resume"], sdf-button[aria-label*="Upload resume"]') || Array.from(e1?.querySelectorAll("sdf-button") || []).find((e1)=>b(e1).includes("upload resume")) || null;
    return {
        container: e1,
        input: t,
        uploadButton: r1
    };
}
function v() {
    let e1 = Array.from(document.querySelectorAll(".additional-documents-container")).find((e1)=>{
        let t = e1.querySelector("h3")?.textContent?.toLowerCase() || "", r1 = e1.textContent?.toLowerCase() || "";
        return t.includes("attachment") && r1.includes("cover letter");
    }) || null, t = e1?.querySelector('input[type="file"][name="file"]'), r1 = e1?.querySelector('sdf-button[id^="fileUpload-"], sdf-button[button-title*="Upload attachments"]'), n = e1?.querySelector(".additional-document-result, .additional-document-success"), o = e1?.querySelector(".additional-document-result .fileDetails .fileName, .additional-document-result .fileName, [class*='fileName']"), i = e1?.querySelector('button[id^="recruitment_afterAdditionalDocumentsUpload_remove_"], .additional-document-result button.removeIcon[aria-label^="Remove,"]');
    return {
        container: e1,
        input: t,
        uploadButton: r1,
        uploadedValue: n,
        uploadedFileName: o,
        deleteButton: i
    };
}
function w() {
    let e1 = v(), t = !!e1.container && !!e1.input && !!e1.uploadButton;
    return t ? "required" : "";
}
function S(e1) {
    let t = "", r1 = !1, n = null, o = ()=>[
            window.location.pathname + window.location.search + window.location.hash,
            document.title?.trim() ?? "",
            document.querySelector("h1")?.textContent?.trim() ?? ""
        ].join("\x1e"), i = (t)=>{
        n && clearTimeout(n), n = setTimeout(()=>{
            n = null, e1();
        }, t);
    };
    document.addEventListener("click", (e1)=>{
        let t = E(e1);
        t?.isConnected && t.innerText?.trim() !== "Submit" && i(1500);
    }, !0), setInterval(()=>{
        let e1 = o();
        if (!r1) {
            t = e1, r1 = !0;
            return;
        }
        e1 !== t && (t = e1, i(800));
    }, 1e3);
}
_c = S;
function E(e1) {
    for (let t of e1.composedPath()){
        if (!(t instanceof HTMLElement) || "ja_sv_cw_next_footer_btn" !== t.id) continue;
        if (t instanceof HTMLButtonElement) return t;
        let e1 = t.closest("button");
        return e1 instanceof HTMLButtonElement ? e1 : null;
    }
    return null;
}
_c1 = E;
function x() {
    return v().uploadedFileName?.textContent?.trim() || "";
}
function C() {
    let { uploadedFileName: e1, deleteButton: t } = v();
    return !!e1?.textContent?.trim() || !!t;
}
_c2 = C;
function A(e1) {
    if (!e1.id || "function" != typeof document.getElementById) return e1.isConnected ? e1 : null;
    let t = document.getElementById(e1.id);
    return t instanceof HTMLInputElement ? t : null;
}
_c3 = A;
function k(e1) {
    if (!e1.id || "undefined" == typeof document || "function" != typeof document.getElementById) return e1.isConnected ? e1 : null;
    let t = document.getElementById(e1.id);
    return t instanceof HTMLInputElement || "undefined" != typeof HTMLTextAreaElement && t instanceof HTMLTextAreaElement ? t : null;
}
function T(e1) {
    let t = Object.getPrototypeOf(e1);
    for(; t && t !== Object.prototype;){
        let e1 = Object.getOwnPropertyDescriptor(t, "value")?.set;
        if (e1) return e1;
        t = Object.getPrototypeOf(t);
    }
    return null;
}
_c4 = T;
async function F(e1, t, r1) {
    let n = k(e1);
    if (!n) return console.info("[AdpWorkforceNowInputDebug] write", JSON.stringify({
        label: r1,
        valueLength: t.length,
        committed: !1,
        reason: "input-not-connected-or-replaced"
    })), !1;
    try {
        n.focus();
    } catch  {
        return console.info("[AdpWorkforceNowInputDebug] write", JSON.stringify({
            label: r1,
            valueLength: t.length,
            committed: !1,
            reason: "focus-error"
        })), !1;
    }
    if (await (0, d.delay)(0), !(n = k(n))) return console.info("[AdpWorkforceNowInputDebug] write", JSON.stringify({
        label: r1,
        valueLength: t.length,
        committed: !1,
        reason: "input-replaced-after-focus"
    })), !1;
    let o = T(n);
    if (!o) return console.info("[AdpWorkforceNowInputDebug] write", JSON.stringify({
        label: r1,
        valueLength: t.length,
        committed: !1,
        reason: "no-native-setter"
    })), !1;
    try {
        o.call(n, t), n.dispatchEvent(new Event("input", {
            bubbles: !0,
            cancelable: !0
        })), n.dispatchEvent(new Event("change", {
            bubbles: !0,
            cancelable: !0
        })), n.blur(), await (0, d.delay)(50);
        let e1 = k(n), i = e1?.isConnected === !0 && e1.value === t;
        return console.info("[AdpWorkforceNowInputDebug] write", JSON.stringify({
            label: r1,
            valueLength: t.length,
            committed: i,
            events: "focus-input-change-blur"
        })), i;
    } catch  {
        return console.info("[AdpWorkforceNowInputDebug] write", JSON.stringify({
            label: r1,
            valueLength: t.length,
            committed: !1,
            reason: "write-error"
        })), !1;
    }
}
_c5 = F;
async function I(e1, t, r1) {
    let n = (0, u.resolvePhoneAnswerText)(t), o = A(e1);
    if (!o || !n) return !1;
    let i = await F(o, n, r1);
    if (!i) return !1;
    await (0, d.delay)(100);
    let a = A(o), l = (0, p.isAdpWorkforceNowPhoneValueCommitted)(a?.value, n);
    return console.info("[AdpWorkforceNowPhoneDebug] phone-write", JSON.stringify({
        label: r1,
        expectedLength: n.length,
        expectedDigitsLength: n.replace(/\D/g, "").length,
        actualLength: a?.value.length ?? 0,
        actualDigitsLength: a?.value.replace(/\D/g, "").length ?? 0,
        committed: l
    })), l;
}
_c6 = I;
function j(e1, t, r1) {
    let n = (0, u.resolvePhoneAnswerText)(t);
    if (!n || !e1?.isConnected) return !1;
    let o = Array.from(e1.options).map((e1)=>{
        let t = e1.value.trim().toLowerCase(), r1 = (0, u.getCountryByIso2)(t);
        return {
            label: e1.textContent?.trim() || "",
            countryName: r1?.name || e1.textContent?.trim() || "",
            dialCode: r1?.dialCode || "",
            iso2: t,
            element: e1
        };
    }), i = u.findPhoneCountryOption(n, o, {
        bareDialPolicy: "reject-shared"
    })?.element;
    if (!i) return console.info("[AdpWorkforceNowPhoneDebug] country-code-write", JSON.stringify({
        label: r1,
        answerLength: n.length,
        optionCount: o.length,
        matched: !1,
        committed: !1
    })), !1;
    e1.value = i.value, i.selected = !0, e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !0
    }));
    let a = e1.value === i.value && i.selected;
    return console.info("[AdpWorkforceNowPhoneDebug] country-code-write", JSON.stringify({
        label: r1,
        answerLength: n.length,
        optionCount: o.length,
        matched: !0,
        committed: a
    })), a;
}
async function D(e1, t) {
    let r1 = Array.isArray(t) ? t : [
        t
    ];
    if (e1.$checkboxs && 0 !== e1.$checkboxs.length) for (let t of e1.$checkboxs){
        if (!t || !t.isConnected) continue;
        let n = t;
        if (n.checked) continue;
        let a = (n.closest("label")?.textContent?.trim() || n.closest(".vdl-checkbox")?.querySelector("label")?.textContent?.trim() || n.getAttribute("aria-label") || "").toLowerCase().trim().replace("*", ""), l = !1;
        if (r1.some((e1)=>(0, o.isExactChoiceMatch)(a, e1?.toLowerCase().trim())) ? l = !0 : (r1[0]?.toLowerCase() === "true" && "yes" === a || r1[0]?.toLowerCase() === "false" && "no" === a || a.includes("have read") && r1[0]?.toLowerCase() === "true" || (0, i.isMatched)(a, e1.label) && r1[0]?.toLowerCase() === "true" || r1[0]?.toLowerCase() === "true" && (a.includes("current") || e1.label.toLowerCase().includes("current")) || e1.label.toLowerCase().includes("current") && r1[0]?.toLowerCase() === "true") && (l = !0), l) {
            n.checked = !0, n.dispatchEvent(new Event("click", {
                bubbles: !0,
                cancelable: !0
            })), n.dispatchEvent(new Event("change", {
                bubbles: !0,
                cancelable: !0
            }));
            let e1 = n.closest('[role="checkbox"]');
            e1 && e1.dispatchEvent(new Event("click", {
                bubbles: !0,
                cancelable: !0
            })), await (0, d.delay)(50);
        }
    }
}
_c7 = D;
async function P(e1, t) {
    if (!t?.trim()) return !1;
    let r1 = (e1, r1)=>(0, m.isAdpCountryOptionMatch)(t, e1, r1);
    if (B(e1, r1)) return !0;
    let n = await $(e1, t, r1);
    return !!n && O(e1, r1);
}
_c8 = P;
async function _(e1) {
    if (!e1?.trim()) return !1;
    let t = !1;
    for (let r1 of Array.from(document.querySelectorAll(".mdf-validated-field"))){
        let n = r1.querySelector(".mdf-label label"), o = R(n?.textContent?.replace(/\*+/g, ""));
        if ("country" !== o) continue;
        let i = n?.getAttribute("for"), a = (i ? document.getElementById(i) : null) || r1.querySelector('[role="combobox"], input.MDFSelectBox__input');
        a?.isConnected && (t = await P(a, e1) || t);
    }
    return t;
}
async function L() {
    let e1 = Array.from(document.querySelectorAll(".additional-question")).filter((e1)=>R(e1.textContent).includes("what is your desired salary"));
    for (let t of e1){
        Array.from(t.querySelectorAll("sdf-radio-button")).find((e1)=>{
            let t = e1.getAttribute("label") || e1.getAttribute("value") || e1.textContent;
            return "annually" === R(t);
        })?.click();
        let e1 = Array.from(t.querySelectorAll("sdf-select-simple")).find((e1)=>R(e1.getAttribute("aria-label") || e1.getAttribute("label") || e1.textContent).includes("currency"));
        e1 && await $(e1, "United States Dollar ( USD )");
    }
}
_c9 = L;
function R(e1) {
    return (e1 || "").replace(/\s+/g, " ").trim().toLowerCase();
}
_c10 = R;
async function O(e1, t) {
    let r1 = e1.closest(".mdf-validated-field, sdf-select-simple") || e1;
    return (0, l.waitForCondition)(()=>B(e1, t), {
        timeout: 3e3,
        interval: 100,
        observeTarget: r1
    });
}
_c11 = O;
async function M(e1, t) {
    let r1 = Array.isArray(t) ? t[0] : t;
    return e1?.tagName === "TABLE" ? N(e1, r1) : $(e1, r1);
}
_c12 = M;
async function N(e1, t) {
    if (!e1) return null;
    let r1 = e1.getAttribute("id");
    (0, a.triggerEvents)(e1, [
        "mousedown"
    ]), await (0, d.delay)(100);
    let n = (0, c.getOrderedNodesSafe)(`.//table[@aria-labelledby="${r1}"]/tbody/tr/td[contains(@class, "dijitMenuItemLabel")]/span[@class="label"]`, document);
    for (let e1 of n){
        let r1 = e1.textContent?.trim();
        if ((0, i.isMatched)(r1, t)) {
            (0, a.triggerEvents)(e1, [
                "click"
            ]);
            break;
        }
    }
}
_c13 = N;
async function $(e1, t, r1) {
    let n = r1 ?? ((e1)=>(0, i.isMatched)(e1, t));
    try {
        if (e1 instanceof HTMLSelectElement) return q(e1, r1 ?? ((e1, r1)=>(0, i.isMatched)(e1, t) || !!r1 && (0, i.isMatched)(r1, t)));
        if (B(e1, n)) return !0;
        let o = e1.closest("sdf-select-simple");
        if (o) return await U(o, n, !!r1);
        let a = await J(e1, !1);
        if (!a || 0 === a.length) return !1;
        for (let e1 of a){
            let t = e1.textContent?.trim();
            if (!t) continue;
            let r1 = e1.getAttribute("value") || e1.getAttribute("aria-label") || "";
            if (n(t, r1) && e1.isConnected) try {
                return e1.dispatchEvent(new MouseEvent("click", {
                    bubbles: !0,
                    cancelable: !0,
                    view: window
                })), e1.click(), await (0, d.delay)(200), !0;
            } catch (e1) {
                continue;
            }
        }
        return !1;
    } catch (e1) {
        return !1;
    } finally{
        try {
            await Q(e1);
        } catch (e1) {}
    }
}
function B(e1, t) {
    if (e1 instanceof HTMLSelectElement) {
        let r1 = Array.from(e1.options).find((e1)=>e1.selected) || e1.options[e1.selectedIndex];
        if (r1) return t(r1.textContent?.trim() || "", r1.value?.trim() || "");
    }
    let r1 = [];
    for (let t of ("undefined" != typeof HTMLInputElement && e1 instanceof HTMLInputElement && r1.push(e1.value || ""), r1.push(e1.textContent || ""), e1.querySelectorAll(".MDFSelectBox__single-value, .single-value, [class*='SingleValue'], [class*='single-value']")))r1.push(t.textContent || "");
    let n = [
        e1.closest(".MDFSelectBox"),
        e1.closest(".mdf-validated-field")
    ].filter((e1)=>!!e1);
    for (let e1 of new Set(n))for (let t of e1.querySelectorAll(".MDFSelectBox__single-value, .single-value, [class*='SingleValue'], [class*='single-value']"))r1.push(t.textContent || "");
    let o = e1.closest("sdf-select-simple");
    if (o) for (let e1 of (r1.push(o.textContent || ""), o.querySelectorAll(".MDFSelectBox__single-value, .single-value, [class*='SingleValue'], [class*='single-value']")))r1.push(e1.textContent || "");
    return r1.some((e1)=>{
        let r1 = e1.trim();
        return r1.length > 0 && t(r1);
    });
}
_c14 = B;
function q(e1, t) {
    for (let r1 of Array.from(e1.options)){
        let n = r1.textContent?.trim() || "", o = r1.value?.trim() || "";
        if (t(n, o)) return e1.value = r1.value, r1.selected = !0, e1.dispatchEvent(new Event("input", {
            bubbles: !0,
            cancelable: !0
        })), e1.dispatchEvent(new Event("change", {
            bubbles: !0,
            cancelable: !0
        })), !0;
    }
    return !1;
}
async function U(e1, t, r1 = !1) {
    try {
        let n = e1.shadowRoot, o = (e1)=>{
            if (!e1 || !e1.isConnected || "true" === e1.getAttribute("aria-hidden")) return !1;
            let t = window.getComputedStyle(e1);
            if ("none" === t.display || "hidden" === t.visibility) return !1;
            let r1 = e1.getBoundingClientRect();
            return r1.width > 0 && r1.height > 0;
        }, i = (e1)=>(e1.getAttribute("aria-label") || e1.getAttribute("value") || e1.textContent || "").trim(), a = (e1)=>{
            if (!r1) return t(i(e1), e1.getAttribute("value") || void 0);
            let n = [
                e1.textContent,
                e1.getAttribute("aria-label"),
                e1.getAttribute("value")
            ];
            return n.some((e1)=>{
                let r1 = e1?.trim() || "";
                return r1.length > 0 && t(r1);
            });
        }, l = ()=>Array.from(document.querySelectorAll('[role="listbox"]')).filter(o), s = n?.querySelector('input[role="combobox"], [role="button"][aria-expanded], input, button') || e1.querySelector("input, button");
        if (!s) return !1;
        let u = new Set(Array.from(document.querySelectorAll('[role="listbox"]')));
        await (0, d.delay)(100), s.isConnected && s.click(), await (0, d.delay)(300);
        let c = s.getAttribute("aria-controls"), f = null;
        for(let e1 = 0; e1 < 6 && !f; e1++){
            if (e1 > 0 && await (0, d.delay)(100), c) {
                let e1 = n?.querySelector(`[id="${c}"]`) || document.getElementById(c);
                if (o(e1)) {
                    f = e1;
                    break;
                }
            }
            let t = Array.from(n?.querySelectorAll('[role="listbox"]') || []).filter(o);
            if (t.length > 0) {
                f = t[t.length - 1];
                break;
            }
            let r1 = l(), i = r1.filter((e1)=>!u.has(e1));
            if (i.length > 0) {
                f = i[i.length - 1];
                break;
            }
            if (r1.length > 0) {
                f = r1[r1.length - 1];
                break;
            }
        }
        if (!f) {
            let e1 = Array.from(document.querySelectorAll("menu[role='menu'], ul[role='menu']")), t = e1.filter((e1)=>null !== e1.offsetParent && "none" !== e1.style.display);
            t.length > 0 && (f = t[t.length - 1]);
        }
        if (!f) return !1;
        let p = ()=>{
            let r1 = "value" in s ? (s.value || "").trim() : "", o = (s.getAttribute("aria-label") || "").trim(), i = (s.textContent || "").trim(), l = (e1.getAttribute("aria-label") || "").trim(), u = (e1.textContent || "").trim(), c = [
                r1,
                o,
                i,
                l,
                u
            ];
            if (c.some((e1)=>e1 && t(e1))) return !0;
            let d = s.getAttribute("aria-activedescendant") || e1.getAttribute("aria-activedescendant");
            if (!d) return !1;
            let f = n?.querySelector(`[id="${d}"]`) || document.getElementById(d);
            return !!f && a(f);
        }, m = f.querySelectorAll("sdf-select-item, li[role='menuitem'], li[role='option'], [role='menuitem'], [role='option']");
        for (let e1 of m){
            let t = e1;
            if (o(t) && a(t) && (await (0, d.delay)(50), t.isConnected && t.click(), await (0, d.delay)(200), p())) return !0;
        }
        return !1;
    } catch (e1) {
        return !1;
    }
}
_c15 = U;
async function H(e1, t, r1) {
    let { container: n, input: o } = y();
    return !!n && !!o && (await (0, a.uploadFiles)(o, await (0, i.fetchPdfAsBlob)(e1), t, r1, "Resume/CV"), !0);
}
_c16 = H;
async function Y(e1, t, r1) {
    let { container: n, input: o, deleteButton: s } = v();
    if (!n || !o) return !1;
    if (C()) {
        if (!s) return !1;
        s.click();
        let e1 = await (0, l.waitForCondition)(()=>!C(), {
            timeout: 5e3,
            interval: 100,
            observeTarget: n
        });
        if (!e1) return !1;
    }
    await (0, a.uploadFiles)(o, await (0, i.fetchCoverLetterPdfAsBlob)(e1), t, r1, "Cover Letter");
    let u = `${e1.coverLetterName}.pdf`.toLowerCase(), c = await (0, l.waitForCondition)(()=>{
        let t = x().toLowerCase();
        if (t && (t.includes(e1.coverLetterName.toLowerCase()) || t.includes(u))) return !0;
        let { uploadedValue: r1 } = v(), n = r1?.querySelector('sdf-alert[status="success"]');
        return !!n;
    }, {
        timeout: 8e3,
        interval: 100,
        observeTarget: n
    });
    return c;
}
_c17 = Y;
async function z() {
    let e1 = (0, c.getFirstOrderedNode)('.//a[@aria-label="Clear Profile" and (not(@aria-disabled) or @aria-disabled != "true")]');
    e1 && e1.click();
    let t = (0, c.getFirstOrderedNode)(".//*[@data-ui='add-section' and @aria-label='Add Education']", (0, c.getFirstOrderedNode)("//*[@data-ui='education']"));
    t && (t.click(), await (0, d.delay)(100));
    let r1 = (0, c.getFirstOrderedNode)(".//*[@data-ui='add-section' and @aria-label='Add Experience']", (0, c.getFirstOrderedNode)("//*[@data-ui='experience']"));
    r1 && (r1.click(), await (0, d.delay)(100));
}
async function V() {
    let e1 = document.querySelector('#disabilityStatusCheck input[type="checkbox"], input[name="disabilityStatusCheck"][type="checkbox"]');
    e1 && !e1.checked && (e1.checked = !0, e1.dispatchEvent(new Event("click", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !0
    })), e1.closest('[role="checkbox"], .vdl-checkbox')?.dispatchEvent(new Event("click", {
        bubbles: !0,
        cancelable: !0
    })), await (0, d.delay)(300), await W());
}
_c18 = V;
async function W() {
    let e1 = await G(()=>document.querySelector(".vsid-status-question-block"), 30), t = await G(()=>e1?.querySelector("sdf-radio-group") ?? null, 30);
    if (!t) return;
    await (0, d.delay)(200);
    let r1 = Array.from(t.querySelectorAll("sdf-radio-button")), n = r1.find((e1)=>{
        let t = e1.getAttribute("label")?.toLowerCase() ?? "", r1 = e1.getAttribute("value") ?? "";
        return t.includes("don't wish") || t.includes("decline") || "D" === r1;
    }) ?? null;
    n?.isConnected && (n.click(), await (0, d.delay)(100));
}
_c19 = W;
async function G(e1, t) {
    for(let r1 = 0; r1 < t; r1++){
        let t = e1();
        if (t) return t;
        await (0, d.delay)(100);
    }
    return null;
}
_c20 = G;
async function K(e1, t) {
    let r1 = t?.[0];
    if (!r1) return;
    let n = e1;
    if (n.$radios && n.$radios.length > 0) {
        let e1 = (0, o.findExactChoice)(n.$radios, r1, (e1)=>e1.closest("label")?.textContent, (e1)=>e1.value);
        for (let t of e1 ? [
            e1
        ] : []){
            let e1 = t.closest("label")?.textContent?.trim() || "", n = t.value || "", i = (0, o.isExactChoiceMatch)(e1.toLowerCase(), r1.toLowerCase()) || (0, o.isExactChoiceMatch)(n.toLowerCase(), r1.toLowerCase());
            if (i && !t.checked) {
                await (0, d.delay)(50), t.isConnected && t.click(), await (0, d.delay)(100);
                return;
            }
        }
    }
    let i = e1.$radioParent || document, a = Array.from(i.querySelectorAll("sdf-radio-button")), l = (0, o.findExactChoice)(a, r1, (e1)=>e1.getAttribute("label"), (e1)=>e1.getAttribute("value"));
    for (let e1 of l ? [
        l
    ] : []){
        let t = e1.getAttribute("label") || "", n = e1.getAttribute("value") || "", i = (0, o.isExactChoiceMatch)(t.toLowerCase(), r1.toLowerCase()) || (0, o.isExactChoiceMatch)(n.toLowerCase(), r1.toLowerCase());
        if (i) {
            let t = "true" === e1.getAttribute("aria-checked");
            if (t) return;
            await (0, d.delay)(50), e1.isConnected && e1.click(), await (0, d.delay)(100);
            let r1 = e1.querySelector('input[type="radio"]');
            r1 && !r1.checked && (r1.click(), await (0, d.delay)(50));
            return;
        }
    }
}
_c21 = K;
function X(e1) {
    if (e1) {
        e1.parentNode;
        let t = new MutationObserver((e1)=>{
            for (let r1 of e1)for (let e1 of r1.addedNodes)(e1?.getAttribute?.("data-ui") === "successful-submit" || e1?.querySelectorAll("[data-ui='successful-submit']").length > 0) && (t.disconnect(), window.top?.postMessage(f.cleanObject({
                type: s.MESSAGE_EVENTS.agentSubmitClicked
            }), {
                targetOrigin: "*"
            }));
        });
        t.observe(document.getElementById("app"), {
            childList: !0,
            subtree: !0
        });
    }
}
_c22 = X;
async function J(e1, t = !0) {
    try {
        let t = (e1)=>(e1.getAttribute("aria-label") || e1.getAttribute("value") || e1.textContent?.trim() || "").trim(), r1 = !1, n = async (e1)=>{
            if (e1 && e1.isConnected) try {
                await (0, d.delay)(50);
                let t = {
                    bubbles: !0,
                    cancelable: !0,
                    view: window,
                    buttons: 1
                };
                e1.dispatchEvent(new MouseEvent("mousedown", t)), await (0, d.delay)(50), e1.dispatchEvent(new MouseEvent("mouseup", t)), await (0, d.delay)(50), e1.isConnected && (e1.click(), e1.dispatchEvent(new MouseEvent("click", t)));
            } catch (e1) {}
        }, o = e1.closest(".vsid-item");
        if (o) {
            await n(o);
            let e1 = o.querySelector(".MDFSelectBox__control");
            e1 && await n(e1), r1 = !0;
        }
        if (!r1) {
            let t = e1.closest(".vdl-dropdown-list__input-container");
            if (t) {
                let e1 = t.querySelector(".vdl-dropdown-list__picker");
                e1 ? await n(e1) : await n(t), r1 = !0;
            }
        }
        if (!r1) {
            let t = e1.closest(".MDFSelectBox__control");
            if (t) {
                let e1 = t.querySelector(".MDFSelectBox__dropdown-indicator");
                e1 ? await n(e1) : await n(t), r1 = !0;
            }
        }
        r1 || await n(e1);
        let i = e1.getAttribute("aria-expanded"), a = 0, l = e1.hasAttribute("aria-expanded"), s = l ? 20 : 4;
        for(; "true" !== i && a < s;)await (0, d.delay)(100), i = e1.getAttribute("aria-expanded"), a++;
        if ("false" === i || null === i) {
            let t = e1.closest(".vdl-dropdown-list__input-container");
            if (t && t.isConnected) await n(t), await (0, d.delay)(500), i = e1.getAttribute("aria-expanded");
            else {
                let t = e1.closest(".MDFSelectBox__control") || e1.parentElement?.closest(".MDFSelectBox__control");
                t && t.isConnected && (await n(t), await (0, d.delay)(500), i = e1.getAttribute("aria-expanded"));
            }
        }
        let u = e1?.getAttribute("aria-controls");
        if (!u) {
            let t = e1.getAttribute("aria-describedby");
            if (t) {
                let e1 = t.match(/react-select-instance-(.*?)-placeholder/);
                if (e1 && e1[1]) {
                    let t = e1[1], r1 = `react-select-instance-${t}-listbox`;
                    document.getElementById(r1) && (u = r1);
                }
            }
        }
        let c = [];
        if (u) c = Array.from(document.querySelectorAll(`#${u} .MDFSelectBox__option, #${u} .vdl-list__option, #${u} [role="option"]`));
        else {
            let e1 = Array.from(document.querySelectorAll(".MDFSelectBox__menu-list, [role='listbox']")), t = e1.find((e1)=>{
                let t = e1.getBoundingClientRect(), r1 = window.getComputedStyle(e1), n = t.width > 0 && t.height > 0 && "none" !== r1.display && "hidden" !== r1.visibility;
                return n;
            });
            t && (c = Array.from(t.querySelectorAll(".MDFSelectBox__option, .vdl-list__option, [role='option']")));
        }
        let f = c.filter((e1)=>!!t(e1));
        if (0 === f.length) {
            let r1 = e1.tagName?.toLowerCase() === "sdf-select-simple" ? e1 : e1.closest("sdf-select-simple"), n = r1?.shadowRoot;
            if (n) {
                let e1 = Array.from(n.querySelectorAll("sdf-select-item, [role='option']")), r1 = Array.from(new Set(e1));
                f = r1.filter((e1)=>!!t(e1));
            }
        }
        if (0 === f.length) return null;
        return f;
    } finally{
        t && await Q(e1);
    }
}
_c23 = J;
async function Q(e1) {
    try {
        if (!e1 || !e1.isConnected) return;
        let t = e1.getAttribute("aria-expanded");
        if ("true" !== t) return;
        let r1 = new KeyboardEvent("keydown", {
            key: "Escape",
            code: "Escape",
            keyCode: 27,
            bubbles: !0,
            cancelable: !0,
            view: window
        });
        e1.dispatchEvent(r1), await (0, d.delay)(50);
        let n = e1.getAttribute("aria-expanded");
        if ("true" === n) try {
            let t = new FocusEvent("focusout", {
                bubbles: !0,
                cancelable: !0,
                view: window
            });
            e1.dispatchEvent(t), await (0, d.delay)(50);
        } catch (e1) {}
    } catch (e1) {}
}
_c24 = Q;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24;
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
$RefreshReg$(_c20, "G");
$RefreshReg$(_c21, "K");
$RefreshReg$(_c22, "X");
$RefreshReg$(_c23, "J");
$RefreshReg$(_c24, "Q");

},{}]},["4dG8v","10mps"], "10mps", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFnQixLQUFLO1FBQUM7UUFBRTtLQUFFLEdBQUUsQ0FBQyxLQUFHLEVBQUUsT0FBSyxFQUFFLElBQUksaUJBQWlCLFNBQVEsQ0FBQSxFQUFFLGVBQWUsS0FBSztRQUFDO1FBQUU7S0FBRSxHQUFFLENBQUMsQ0FBQSxJQUFHLENBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBQyxTQUFRLENBQUMsRUFBQyxHQUFDO0lBQUUsT0FBTyxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsSUFBRyxFQUFFLFNBQU8sUUFBTSxPQUFPLFdBQVMsS0FBSSxPQUFPLElBQUksUUFBUSxDQUFDLEdBQUU7UUFBSyxJQUFJLElBQUUsU0FBUyxjQUFjO1FBQVUsRUFBRSxNQUFJLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLEtBQUssTUFBTSxDQUFDLEVBQUMsRUFBRSxpQkFBZSxjQUFhLENBQUEsRUFBRSxPQUFLLFFBQU8sR0FBRyxFQUFFLGlCQUFpQixRQUFPLElBQUksRUFBRSxLQUFJLEVBQUUsaUJBQWlCLFNBQVEsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLDBCQUEwQixFQUFFLEVBQUUsR0FBRyxDQUFDLEtBQUksU0FBUyxNQUFNLFlBQVk7SUFBRTtBQUFFO0FBQUMsZUFBZSxFQUFFLENBQUM7SUFBRSxPQUFPLGtCQUFnQixPQUFPLE9BQU8sT0FBTSxFQUFFLFFBQVEsQ0FBQTtRQUFJLEVBQUUsTUFBSSxFQUFFLFFBQVEsT0FBTywrQkFBNkIsbUJBQW1CLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLEtBQUssTUFBTSxDQUFDO0lBQUU7SUFBRyxJQUFJLElBQUUsTUFBTSxRQUFRLElBQUksRUFBRSxJQUFJO0lBQUssSUFBRztRQUFDLEVBQUUsUUFBUSxTQUFTLENBQUM7WUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1FBQUU7SUFBRSxTQUFRO1FBQUMsT0FBTyxPQUFPLGlCQUFnQixLQUFHLEVBQUUsUUFBUSxDQUFBO1lBQUksS0FBRyxTQUFTLE1BQU0sWUFBWTtRQUFFO0lBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUU7SUFBWSxFQUFFLFNBQU87UUFBVyxFQUFFLGVBQWEsUUFBTSxFQUFFLFdBQVcsWUFBWTtJQUFFLEdBQUUsRUFBRSxhQUFhLFFBQU8sRUFBRSxhQUFhLFFBQVEsTUFBTSxJQUFJLENBQUMsRUFBRSxHQUFDLE1BQUksS0FBSyxRQUFPLEVBQUUsV0FBVyxhQUFhLEdBQUUsRUFBRTtBQUFZO0FBQUMsSUFBSSxJQUFFO0FBQUssU0FBUztJQUFLLEtBQUksQ0FBQSxJQUFFLFdBQVc7UUFBVyxJQUFJLElBQUUsU0FBUyxpQkFBaUI7UUFBMEIsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJO1lBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxTQUFRLElBQUUsS0FBSSxJQUFFLE1BQUksY0FBWSxJQUFJLE9BQU8sbURBQWlELEtBQUssS0FBSyxLQUFHLEVBQUUsUUFBUSxJQUFFLE1BQUk7WUFBSyxnQkFBZ0IsS0FBSyxNQUFJLEVBQUUsUUFBUSxTQUFTLFlBQVUsS0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUFDO1FBQUMsSUFBRTtJQUFJLEdBQUUsR0FBRTtBQUFFO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLEdBQUU7UUFBQyxJQUFHLEVBQUUsU0FBTyxPQUFNO2FBQVUsSUFBRyxFQUFFLFNBQU8sTUFBSztZQUFDLElBQUksSUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFLGNBQWM7WUFBQyxJQUFHLEdBQUU7Z0JBQUMsSUFBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUM7b0JBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO29CQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBRyxDQUFDLENBQUMsRUFBRSxFQUFDO3dCQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRTt3QkFBQyxFQUFFLE9BQU8sT0FBTyxNQUFLLEdBQUcsV0FBUyxLQUFHLEVBQUUsT0FBTyxPQUFPLE1BQUs7b0JBQUU7Z0JBQUM7Z0JBQUMsSUFBSSxJQUFFLE9BQU8sZUFBZSxDQUFDLEVBQUUsR0FBRztnQkFBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUM7b0JBQUM7b0JBQUU7aUJBQUU7WUFBQSxPQUFNLEVBQUUsVUFBUSxFQUFFLEVBQUUsUUFBTztRQUFFO0lBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFO0lBQVEsSUFBRztRQUFFLElBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBQztZQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxJQUFFLEVBQUU7WUFBQyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsT0FBTyxPQUFPLE1BQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFTLEtBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsUUFBUSxDQUFBO2dCQUFJLEVBQUUsT0FBTyxPQUFPLE1BQUs7WUFBRTtRQUFFLE9BQU0sRUFBRSxVQUFRLEVBQUUsRUFBRSxRQUFPOztBQUFFO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7SUFBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFFLEtBQUcsRUFBRSxPQUFNLENBQUEsRUFBRSxJQUFJLE9BQUssRUFBRSxPQUFPLENBQUMsRUFBRSxBQUFELEdBQUcsS0FBRyxFQUFFLE9BQUssRUFBRSxJQUFJLGtCQUFrQixVQUFRLEVBQUUsSUFBSSxrQkFBa0IsUUFBUSxTQUFTLENBQUM7UUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7SUFBQyxJQUFHLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsRUFBRTtJQUFHLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsSUFBRyxLQUFHLEVBQUUsT0FBSyxFQUFFLElBQUksaUJBQWlCLFFBQU87UUFBQyxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSztRQUFHLEVBQUUsSUFBSSxpQkFBaUIsUUFBUSxTQUFTLENBQUM7WUFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO1lBQUcsS0FBRyxFQUFFLFVBQVMsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUUsRUFBRTtnQkFBSSxFQUFFLEdBQUU7WUFBRSxJQUFHLEVBQUUsZUFBZSxLQUFLLE1BQU0sRUFBRSxnQkFBZSxFQUFDO1FBQUU7SUFBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLElBQUUsR0FBRztJQUFFLElBQUksSUFBRTtJQUFJLE9BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBUSxTQUFTLGFBQVcsWUFBVSxDQUFDLDhCQUE4QixLQUFLLEtBQUcsUUFBTSxLQUFLLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUFBO0FBQUMsU0FBUyxHQUFHLENBQUM7SUFBRSxPQUFPLEVBQUUsV0FBUyxZQUFVLEVBQUUsOEJBQTRCLEVBQUU7QUFBUTtBQUFDLFNBQVMsRUFBRSxDQUFDO0lBQUUsSUFBRyxPQUFPLFdBQVcsWUFBVSxLQUFJO0lBQU8sSUFBSSxJQUFFLElBQUksVUFBVTtJQUFNLE9BQU8sRUFBRSxpQkFBaUIsV0FBVSxlQUFlLENBQUM7UUFBRSxJQUFJLElBQUUsS0FBSyxNQUFNLEVBQUU7UUFBTSxJQUFHLEVBQUUsU0FBTyxZQUFVLE1BQU0sRUFBRSxFQUFFLFNBQVEsRUFBRSxTQUFPLFNBQVEsS0FBSSxJQUFJLEtBQUssRUFBRSxZQUFZLEtBQUs7WUFBQyxJQUFJLElBQUUsRUFBRSxhQUFXLEVBQUU7WUFBTSxFQUFFLDhCQUE0QixFQUFFLFVBQVEsQ0FBQztBQUNqNEwsQ0FBQyxHQUFDLElBQUUsQ0FBQzs7QUFFTCxDQUFDLEdBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNoQixDQUFDO1FBQUU7SUFBQyxJQUFHLEVBQUUsaUJBQWlCLFNBQVEsS0FBSSxFQUFFLGlCQUFpQixRQUFPO1FBQUssRUFBRSxDQUFDLHFEQUFxRCxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRyxFQUFFLGlCQUFpQixTQUFRO1FBQUssRUFBRSxDQUFDLG9FQUFvRSxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRztBQUFDO0FBQUMsSUFBSSxJQUFFLEVBQUUsUUFBUTtBQUEwQixlQUFlO0lBQUksRUFBRSxRQUFRLHFCQUFxQixTQUFRLE9BQU8sZUFBYSxZQUFXLEdBQUUsT0FBTyxlQUFhO1FBQVcsT0FBTyxTQUFTLENBQUM7WUFBRSxPQUFPO1FBQUM7SUFBQztBQUFDO0FBQUMsSUFBSSxLQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFDLEdBQUUsSUFBRSxPQUFPLE9BQU87QUFBTyxJQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsaUJBQWdCO0lBQUMsSUFBRztRQUFDLElBQUUsR0FBRyxRQUFRLFFBQVE7WUFBQyxNQUFLO1FBQUUsSUFBRyxFQUFFLGFBQWEsWUFBWTtZQUFLO1FBQUcsSUFBRyxFQUFFLFdBQVMsRUFBRSxVQUFVLFlBQVk7WUFBSztRQUFHO0lBQUUsRUFBQyxPQUFNLEdBQUU7UUFBQyxFQUFFO0lBQUU7SUFBQyxFQUFFLE9BQU07UUFBSSxJQUFHLEVBQUUsaUNBQWdDLEVBQUUsU0FBUTtZQUFDO1lBQUksSUFBSSxJQUFFLEVBQUUsT0FBTyxDQUFBLElBQUcsRUFBRSxZQUFVLEVBQUU7WUFBUyxJQUFHLEVBQUUsS0FBSyxDQUFBLElBQUcsRUFBRSxTQUFPLFNBQU8sRUFBRSxTQUFPLFFBQU0sRUFBRSxPQUFPLE9BQU8sTUFBSyxFQUFFLElBQUcsRUFBRSxnQkFBZSxJQUFHO2dCQUFDLE1BQU0sRUFBRTtnQkFBRyxJQUFJLElBQUUsQ0FBQztnQkFBRSxLQUFJLElBQUcsQ0FBQyxHQUFFLEVBQUUsSUFBRyxFQUFFLGdCQUFnQixDQUFDLENBQUMsRUFBRSxJQUFHLENBQUEsRUFBRSxHQUFFLElBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUE7Z0JBQUcsSUFBSSxJQUFFLENBQUM7Z0JBQUUsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsZUFBZSxRQUFPLElBQUk7b0JBQUMsSUFBRyxDQUFDLEdBQUUsRUFBRSxHQUFDLEVBQUUsY0FBYyxDQUFDLEVBQUU7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBRyxDQUFBLEVBQUUsR0FBRSxJQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFBO2dCQUFFO1lBQUMsRUFBQyxPQUFNLEdBQUU7Z0JBQUMsRUFBRSxZQUFVLFVBQVMsQ0FBQSxRQUFRLE1BQU0sSUFBRyxNQUFNLEtBQUssVUFBVSxHQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7WUFBRTtRQUFDLE9BQUs7WUFBQyxJQUFJLElBQUUsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFlBQVUsRUFBRSxTQUFTLEtBQUssQ0FBQSxJQUFHLEVBQUUsT0FBTyxRQUFPLEVBQUU7WUFBSyxFQUFFLGtCQUFpQjtnQkFBQyxlQUFjO1lBQUMsSUFBRyxLQUFHLEVBQUUsWUFBWTtnQkFBQyx5QkFBd0IsQ0FBQztZQUFDO1FBQUU7SUFBQztBQUFFO0FBQUMsRUFBRSxXQUFVLENBQUEsRUFBRSw0QkFBMkIsR0FBRTs7O0FDSjMwQyxJQUFJLEtBQUcsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxLQUFHLE9BQU87QUFBeUIsSUFBSSxLQUFHLE9BQU87QUFBb0IsSUFBSSxLQUFHLE9BQU8sZ0JBQWUsS0FBRyxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUFDO2dCQUFFLE1BQUs7WUFBTTtZQUFHLEdBQUUsY0FBYyxJQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUc7UUFBRyxFQUFDLE9BQU0sSUFBRSxDQUFDO0lBQUMsRUFBQyxPQUFNLElBQUUsQ0FBQztBQUFDO09BQXhiIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1lMzVjMDU2ZmJiNDBiZmRlLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2FkcC13b3JrZm9yY2Vub3cvb3BlcmF0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxhZHAtd29ya2ZvcmNlbm93XFxcXG9wZXJhdGlvbnMuanNcIixcImJ1bmRsZUlkXCI6XCI3MmRjZmY5ZWZjMzFkMmYzXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogbElWNG5cclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2FkcC13b3JrZm9yY2Vub3cvb3BlcmF0aW9ucy5qc1xyXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9hbnN3ZXIgLT4gM2NxWXMgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYWRwLXdvcmtmb3JjZW5vdy9hbnN3ZXIuanNcclxuICogICAuL2NvdW50cnkgLT4gZEJ6aDIgID0+ICBzcmMvY29udGVudHMvc2l0ZXMvYWRwLXdvcmtmb3JjZW5vdy9jb3VudHJ5LmpzXHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2ggLT4gNm1rSTQgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2guanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9kb20gLT4gaEE1UWEgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9kb20uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9vYnNlcnZlciAtPiBlVHpVeCAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL29ic2VydmVyLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH5jb3JlL3Bob25lLWNvdW50cnktY29kZSAtPiA4bkVOdyAgPT4gIHNyYy9jb3JlL3Bob25lLWNvdW50cnktY29kZS5qc1xyXG4gKiAgIH5jb3JlL3hwYXRoIC0+IGFnRTR1ICA9PiAgc3JjL2NvcmUveHBhdGguanNcclxuICogICB+dXRpbHMvZGVsYXkgLT4gYW02MTQgID0+ICBzcmMvdXRpbHMvZGVsYXkuanNcclxuICogICB+dXRpbHMvc3RyaW5nIC0+IGlqRUZpICA9PiAgc3JjL3V0aWxzL3N0cmluZy5qc1xyXG4gKi9cclxuXHJcbnZhciBuPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO24uZGVmaW5lSW50ZXJvcEZsYWcociksbi5leHBvcnQocixcImdldEFkcFdvcmtmb3JjZU5vd0FkdmFuY2VCdXR0b25cIiwoKT0+Zyksbi5leHBvcnQocixcImdldFJlc3VtZVVwbG9hZERvbVwiLCgpPT55KSxuLmV4cG9ydChyLFwiZ2V0Q292ZXJMZXR0ZXJVcGxvYWREb21cIiwoKT0+diksbi5leHBvcnQocixcImdldENvdmVyTGV0dGVyRmllbGRTdGF0dXNcIiwoKT0+dyksbi5leHBvcnQocixcImJpbmRDb3ZlckxldHRlckFkdmFuY2VSZWNoZWNrT2JzZXJ2ZXJcIiwoKT0+Uyksbi5leHBvcnQocixcImZpbGxBZHBXb3JrZm9yY2VOb3dUZXh0SW5wdXRcIiwoKT0+Riksbi5leHBvcnQocixcImZpbGxBZHBXb3JrZm9yY2VOb3dQaG9uZUlucHV0XCIsKCk9PkkpLG4uZXhwb3J0KHIsXCJmaWxsQWRwV29ya2ZvcmNlTm93UGhvbmVDb3VudHJ5Q29kZVwiLCgpPT5qKSxuLmV4cG9ydChyLFwiZmlsbENoZWNrQm94ZXNGaWVsZFwiLCgpPT5EKSxuLmV4cG9ydChyLFwiZmlsbENvdW50cnlcIiwoKT0+UCksbi5leHBvcnQocixcInByZWZpbGxDb3VudHJ5XCIsKCk9Pl8pLG4uZXhwb3J0KHIsXCJwcmVzZWxlY3REZXNpcmVkU2FsYXJ5Q29udHJvbHNcIiwoKT0+TCksbi5leHBvcnQocixcImZpbGxDdXN0b21TZWxlY3RGaWVsZFwiLCgpPT5NKSxuLmV4cG9ydChyLFwidXBsb2FkUmVzdW1lXCIsKCk9PkgpLG4uZXhwb3J0KHIsXCJ1cGxvYWRDb3ZlckxldHRlclwiLCgpPT5ZKSxuLmV4cG9ydChyLFwicHJlY2xpY2tBZGRCdXR0b25zXCIsKCk9PnopLG4uZXhwb3J0KHIsXCJmaWxsRGlzYWJpbGl0eVN0YXR1c0lmUHJlc2VudFwiLCgpPT5WKSxuLmV4cG9ydChyLFwiZmlsbFJhZGlvR3JvdXBGaWVsZFwiLCgpPT5LKSxuLmV4cG9ydChyLFwic3VibWl0T2JzZXJ2ZXJcIiwoKT0+WCksbi5leHBvcnQocixcImdldFNlbGVjdE9wdGlvbnNFbGVtZW50XCIsKCk9PkopO3ZhciBvPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2hcIiksaT1lKFwifmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyXCIpLGE9ZShcIn5jb250ZW50cy9tZXRob2RzL2RvbVwiKSxsPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9vYnNlcnZlclwiKSxzPWUoXCJ+Y29yZS9lbnVtc1wiKSx1PWUoXCJ+Y29yZS9waG9uZS1jb3VudHJ5LWNvZGVcIiksYz1lKFwifmNvcmUveHBhdGhcIiksZD1lKFwifnV0aWxzL2RlbGF5XCIpLGY9ZShcIn51dGlscy9zdHJpbmdcIikscD1lKFwiLi9hbnN3ZXJcIiksbT1lKFwiLi9jb3VudHJ5XCIpO2Z1bmN0aW9uIGgoZSl7aWYoIWUpcmV0dXJuITE7bGV0IHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZS5jaGVja1Zpc2liaWxpdHk7cmV0dXJuIHQ/ZS5jaGVja1Zpc2liaWxpdHkoKT8/ITE6ISFlLm9mZnNldFBhcmVudH1mdW5jdGlvbiBnKCl7bGV0IGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqYV9zdl9jd19uZXh0X2Zvb3Rlcl9idG5cIik7aWYoZSYmaChlKSlyZXR1cm4gZTtsZXQgdD1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpKS5maW5kKGU9PntsZXQgdD0oZS50ZXh0Q29udGVudHx8ZS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKXx8ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4gaChlKSYmdC5pbmNsdWRlcyhcInN1Ym1pdFwiKX0pO3JldHVybiB0Pz9udWxsfWZ1bmN0aW9uIGIoZSl7cmV0dXJuIGU/KGUudGV4dENvbnRlbnR8fGUuZ2V0QXR0cmlidXRlKFwiYnV0dG9uLXRpdGxlXCIpfHxlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpOlwiXCJ9ZnVuY3Rpb24geSgpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdW1lVXBsb2FkQ29udGFpbmVyLCAucmVzdW1lLXVwbG9hZC1jb250YWluZXJcIil8fEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51cGxvYWQtcmVzdW1lLWNvbnRhaW5lclwiKSkuZmluZChlPT57bGV0IHQ9ZS50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKXx8XCJcIjtyZXR1cm4hZS5jbG9zZXN0KFwiLmFkZGl0aW9uYWwtZG9jdW1lbnRzLWNvbnRhaW5lclwiKSYmISFlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykmJih0LmluY2x1ZGVzKFwidXBsb2FkIHJlc3VtZVwiKXx8dC5pbmNsdWRlcyhcInJlc3VtZVwiKSl9KXx8bnVsbCx0PWU/LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdW25hbWU9XCJmaWxlXCJdLCBpbnB1dFt0eXBlPVwiZmlsZVwiXScpLHI9ZT8ucXVlcnlTZWxlY3Rvcignc2RmLWJ1dHRvbltpZF49XCJmaWxlVXBsb2FkLVwiXVtidXR0b24tdGl0bGUqPVwiVXBsb2FkIHJlc3VtZVwiXSwgc2RmLWJ1dHRvbltpZF49XCJmaWxlVXBsb2FkLVwiXVthcmlhLWxhYmVsKj1cIlVwbG9hZCByZXN1bWVcIl0sIHNkZi1idXR0b25bYnV0dG9uLXRpdGxlKj1cIlVwbG9hZCByZXN1bWVcIl0sIHNkZi1idXR0b25bYXJpYS1sYWJlbCo9XCJVcGxvYWQgcmVzdW1lXCJdJyl8fEFycmF5LmZyb20oZT8ucXVlcnlTZWxlY3RvckFsbChcInNkZi1idXR0b25cIil8fFtdKS5maW5kKGU9PmIoZSkuaW5jbHVkZXMoXCJ1cGxvYWQgcmVzdW1lXCIpKXx8bnVsbDtyZXR1cm57Y29udGFpbmVyOmUsaW5wdXQ6dCx1cGxvYWRCdXR0b246cn19ZnVuY3Rpb24gdigpe2xldCBlPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hZGRpdGlvbmFsLWRvY3VtZW50cy1jb250YWluZXJcIikpLmZpbmQoZT0+e2xldCB0PWUucXVlcnlTZWxlY3RvcihcImgzXCIpPy50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKXx8XCJcIixyPWUudGV4dENvbnRlbnQ/LnRvTG93ZXJDYXNlKCl8fFwiXCI7cmV0dXJuIHQuaW5jbHVkZXMoXCJhdHRhY2htZW50XCIpJiZyLmluY2x1ZGVzKFwiY292ZXIgbGV0dGVyXCIpfSl8fG51bGwsdD1lPy5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXVtuYW1lPVwiZmlsZVwiXScpLHI9ZT8ucXVlcnlTZWxlY3Rvcignc2RmLWJ1dHRvbltpZF49XCJmaWxlVXBsb2FkLVwiXSwgc2RmLWJ1dHRvbltidXR0b24tdGl0bGUqPVwiVXBsb2FkIGF0dGFjaG1lbnRzXCJdJyksbj1lPy5xdWVyeVNlbGVjdG9yKFwiLmFkZGl0aW9uYWwtZG9jdW1lbnQtcmVzdWx0LCAuYWRkaXRpb25hbC1kb2N1bWVudC1zdWNjZXNzXCIpLG89ZT8ucXVlcnlTZWxlY3RvcihcIi5hZGRpdGlvbmFsLWRvY3VtZW50LXJlc3VsdCAuZmlsZURldGFpbHMgLmZpbGVOYW1lLCAuYWRkaXRpb25hbC1kb2N1bWVudC1yZXN1bHQgLmZpbGVOYW1lLCBbY2xhc3MqPSdmaWxlTmFtZSddXCIpLGk9ZT8ucXVlcnlTZWxlY3RvcignYnV0dG9uW2lkXj1cInJlY3J1aXRtZW50X2FmdGVyQWRkaXRpb25hbERvY3VtZW50c1VwbG9hZF9yZW1vdmVfXCJdLCAuYWRkaXRpb25hbC1kb2N1bWVudC1yZXN1bHQgYnV0dG9uLnJlbW92ZUljb25bYXJpYS1sYWJlbF49XCJSZW1vdmUsXCJdJyk7cmV0dXJue2NvbnRhaW5lcjplLGlucHV0OnQsdXBsb2FkQnV0dG9uOnIsdXBsb2FkZWRWYWx1ZTpuLHVwbG9hZGVkRmlsZU5hbWU6byxkZWxldGVCdXR0b246aX19ZnVuY3Rpb24gdygpe2xldCBlPXYoKSx0PSEhZS5jb250YWluZXImJiEhZS5pbnB1dCYmISFlLnVwbG9hZEJ1dHRvbjtyZXR1cm4gdD9cInJlcXVpcmVkXCI6XCJcIn1mdW5jdGlvbiBTKGUpe2xldCB0PVwiXCIscj0hMSxuPW51bGwsbz0oKT0+W3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSt3aW5kb3cubG9jYXRpb24uc2VhcmNoK3dpbmRvdy5sb2NhdGlvbi5oYXNoLGRvY3VtZW50LnRpdGxlPy50cmltKCk/P1wiXCIsZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpPy50ZXh0Q29udGVudD8udHJpbSgpPz9cIlwiXS5qb2luKFwiXFx4MWVcIiksaT10PT57biYmY2xlYXJUaW1lb3V0KG4pLG49c2V0VGltZW91dCgoKT0+e249bnVsbCxlKCl9LHQpfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlPT57bGV0IHQ9RShlKTt0Py5pc0Nvbm5lY3RlZCYmdC5pbm5lclRleHQ/LnRyaW0oKSE9PVwiU3VibWl0XCImJmkoMTUwMCl9LCEwKSxzZXRJbnRlcnZhbCgoKT0+e2xldCBlPW8oKTtpZighcil7dD1lLHI9ITA7cmV0dXJufWUhPT10JiYodD1lLGkoODAwKSl9LDFlMyl9ZnVuY3Rpb24gRShlKXtmb3IobGV0IHQgb2YgZS5jb21wb3NlZFBhdGgoKSl7aWYoISh0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpfHxcImphX3N2X2N3X25leHRfZm9vdGVyX2J0blwiIT09dC5pZCljb250aW51ZTtpZih0IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQpcmV0dXJuIHQ7bGV0IGU9dC5jbG9zZXN0KFwiYnV0dG9uXCIpO3JldHVybiBlIGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQ/ZTpudWxsfXJldHVybiBudWxsfWZ1bmN0aW9uIHgoKXtyZXR1cm4gdigpLnVwbG9hZGVkRmlsZU5hbWU/LnRleHRDb250ZW50Py50cmltKCl8fFwiXCJ9ZnVuY3Rpb24gQygpe2xldHt1cGxvYWRlZEZpbGVOYW1lOmUsZGVsZXRlQnV0dG9uOnR9PXYoKTtyZXR1cm4hIWU/LnRleHRDb250ZW50Py50cmltKCl8fCEhdH1mdW5jdGlvbiBBKGUpe2lmKCFlLmlkfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZClyZXR1cm4gZS5pc0Nvbm5lY3RlZD9lOm51bGw7bGV0IHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5pZCk7cmV0dXJuIHQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50P3Q6bnVsbH1mdW5jdGlvbiBrKGUpe2lmKCFlLmlkfHxcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnR8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKXJldHVybiBlLmlzQ29ubmVjdGVkP2U6bnVsbDtsZXQgdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLmlkKTtyZXR1cm4gdCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnR8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBIVE1MVGV4dEFyZWFFbGVtZW50JiZ0IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudD90Om51bGx9ZnVuY3Rpb24gVChlKXtsZXQgdD1PYmplY3QuZ2V0UHJvdG90eXBlT2YoZSk7Zm9yKDt0JiZ0IT09T2JqZWN0LnByb3RvdHlwZTspe2xldCBlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxcInZhbHVlXCIpPy5zZXQ7aWYoZSlyZXR1cm4gZTt0PU9iamVjdC5nZXRQcm90b3R5cGVPZih0KX1yZXR1cm4gbnVsbH1hc3luYyBmdW5jdGlvbiBGKGUsdCxyKXtsZXQgbj1rKGUpO2lmKCFuKXJldHVybiBjb25zb2xlLmluZm8oXCJbQWRwV29ya2ZvcmNlTm93SW5wdXREZWJ1Z10gd3JpdGVcIixKU09OLnN0cmluZ2lmeSh7bGFiZWw6cix2YWx1ZUxlbmd0aDp0Lmxlbmd0aCxjb21taXR0ZWQ6ITEscmVhc29uOlwiaW5wdXQtbm90LWNvbm5lY3RlZC1vci1yZXBsYWNlZFwifSkpLCExO3RyeXtuLmZvY3VzKCl9Y2F0Y2h7cmV0dXJuIGNvbnNvbGUuaW5mbyhcIltBZHBXb3JrZm9yY2VOb3dJbnB1dERlYnVnXSB3cml0ZVwiLEpTT04uc3RyaW5naWZ5KHtsYWJlbDpyLHZhbHVlTGVuZ3RoOnQubGVuZ3RoLGNvbW1pdHRlZDohMSxyZWFzb246XCJmb2N1cy1lcnJvclwifSkpLCExfWlmKGF3YWl0ICgwLGQuZGVsYXkpKDApLCEobj1rKG4pKSlyZXR1cm4gY29uc29sZS5pbmZvKFwiW0FkcFdvcmtmb3JjZU5vd0lucHV0RGVidWddIHdyaXRlXCIsSlNPTi5zdHJpbmdpZnkoe2xhYmVsOnIsdmFsdWVMZW5ndGg6dC5sZW5ndGgsY29tbWl0dGVkOiExLHJlYXNvbjpcImlucHV0LXJlcGxhY2VkLWFmdGVyLWZvY3VzXCJ9KSksITE7bGV0IG89VChuKTtpZighbylyZXR1cm4gY29uc29sZS5pbmZvKFwiW0FkcFdvcmtmb3JjZU5vd0lucHV0RGVidWddIHdyaXRlXCIsSlNPTi5zdHJpbmdpZnkoe2xhYmVsOnIsdmFsdWVMZW5ndGg6dC5sZW5ndGgsY29tbWl0dGVkOiExLHJlYXNvbjpcIm5vLW5hdGl2ZS1zZXR0ZXJcIn0pKSwhMTt0cnl7by5jYWxsKG4sdCksbi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxuLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxuLmJsdXIoKSxhd2FpdCAoMCxkLmRlbGF5KSg1MCk7bGV0IGU9ayhuKSxpPWU/LmlzQ29ubmVjdGVkPT09ITAmJmUudmFsdWU9PT10O3JldHVybiBjb25zb2xlLmluZm8oXCJbQWRwV29ya2ZvcmNlTm93SW5wdXREZWJ1Z10gd3JpdGVcIixKU09OLnN0cmluZ2lmeSh7bGFiZWw6cix2YWx1ZUxlbmd0aDp0Lmxlbmd0aCxjb21taXR0ZWQ6aSxldmVudHM6XCJmb2N1cy1pbnB1dC1jaGFuZ2UtYmx1clwifSkpLGl9Y2F0Y2h7cmV0dXJuIGNvbnNvbGUuaW5mbyhcIltBZHBXb3JrZm9yY2VOb3dJbnB1dERlYnVnXSB3cml0ZVwiLEpTT04uc3RyaW5naWZ5KHtsYWJlbDpyLHZhbHVlTGVuZ3RoOnQubGVuZ3RoLGNvbW1pdHRlZDohMSxyZWFzb246XCJ3cml0ZS1lcnJvclwifSkpLCExfX1hc3luYyBmdW5jdGlvbiBJKGUsdCxyKXtsZXQgbj0oMCx1LnJlc29sdmVQaG9uZUFuc3dlclRleHQpKHQpLG89QShlKTtpZighb3x8IW4pcmV0dXJuITE7bGV0IGk9YXdhaXQgRihvLG4scik7aWYoIWkpcmV0dXJuITE7YXdhaXQgKDAsZC5kZWxheSkoMTAwKTtsZXQgYT1BKG8pLGw9KDAscC5pc0FkcFdvcmtmb3JjZU5vd1Bob25lVmFsdWVDb21taXR0ZWQpKGE/LnZhbHVlLG4pO3JldHVybiBjb25zb2xlLmluZm8oXCJbQWRwV29ya2ZvcmNlTm93UGhvbmVEZWJ1Z10gcGhvbmUtd3JpdGVcIixKU09OLnN0cmluZ2lmeSh7bGFiZWw6cixleHBlY3RlZExlbmd0aDpuLmxlbmd0aCxleHBlY3RlZERpZ2l0c0xlbmd0aDpuLnJlcGxhY2UoL1xcRC9nLFwiXCIpLmxlbmd0aCxhY3R1YWxMZW5ndGg6YT8udmFsdWUubGVuZ3RoPz8wLGFjdHVhbERpZ2l0c0xlbmd0aDphPy52YWx1ZS5yZXBsYWNlKC9cXEQvZyxcIlwiKS5sZW5ndGg/PzAsY29tbWl0dGVkOmx9KSksbH1mdW5jdGlvbiBqKGUsdCxyKXtsZXQgbj0oMCx1LnJlc29sdmVQaG9uZUFuc3dlclRleHQpKHQpO2lmKCFufHwhZT8uaXNDb25uZWN0ZWQpcmV0dXJuITE7bGV0IG89QXJyYXkuZnJvbShlLm9wdGlvbnMpLm1hcChlPT57bGV0IHQ9ZS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSxyPSgwLHUuZ2V0Q291bnRyeUJ5SXNvMikodCk7cmV0dXJue2xhYmVsOmUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIixjb3VudHJ5TmFtZTpyPy5uYW1lfHxlLnRleHRDb250ZW50Py50cmltKCl8fFwiXCIsZGlhbENvZGU6cj8uZGlhbENvZGV8fFwiXCIsaXNvMjp0LGVsZW1lbnQ6ZX19KSxpPXUuZmluZFBob25lQ291bnRyeU9wdGlvbihuLG8se2JhcmVEaWFsUG9saWN5OlwicmVqZWN0LXNoYXJlZFwifSk/LmVsZW1lbnQ7aWYoIWkpcmV0dXJuIGNvbnNvbGUuaW5mbyhcIltBZHBXb3JrZm9yY2VOb3dQaG9uZURlYnVnXSBjb3VudHJ5LWNvZGUtd3JpdGVcIixKU09OLnN0cmluZ2lmeSh7bGFiZWw6cixhbnN3ZXJMZW5ndGg6bi5sZW5ndGgsb3B0aW9uQ291bnQ6by5sZW5ndGgsbWF0Y2hlZDohMSxjb21taXR0ZWQ6ITF9KSksITE7ZS52YWx1ZT1pLnZhbHVlLGkuc2VsZWN0ZWQ9ITAsZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKTtsZXQgYT1lLnZhbHVlPT09aS52YWx1ZSYmaS5zZWxlY3RlZDtyZXR1cm4gY29uc29sZS5pbmZvKFwiW0FkcFdvcmtmb3JjZU5vd1Bob25lRGVidWddIGNvdW50cnktY29kZS13cml0ZVwiLEpTT04uc3RyaW5naWZ5KHtsYWJlbDpyLGFuc3dlckxlbmd0aDpuLmxlbmd0aCxvcHRpb25Db3VudDpvLmxlbmd0aCxtYXRjaGVkOiEwLGNvbW1pdHRlZDphfSkpLGF9YXN5bmMgZnVuY3Rpb24gRChlLHQpe2xldCByPUFycmF5LmlzQXJyYXkodCk/dDpbdF07aWYoZS4kY2hlY2tib3hzJiYwIT09ZS4kY2hlY2tib3hzLmxlbmd0aClmb3IobGV0IHQgb2YgZS4kY2hlY2tib3hzKXtpZighdHx8IXQuaXNDb25uZWN0ZWQpY29udGludWU7bGV0IG49dDtpZihuLmNoZWNrZWQpY29udGludWU7bGV0IGE9KG4uY2xvc2VzdChcImxhYmVsXCIpPy50ZXh0Q29udGVudD8udHJpbSgpfHxuLmNsb3Nlc3QoXCIudmRsLWNoZWNrYm94XCIpPy5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik/LnRleHRDb250ZW50Py50cmltKCl8fG4uZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJcIikudG9Mb3dlckNhc2UoKS50cmltKCkucmVwbGFjZShcIipcIixcIlwiKSxsPSExO2lmKHIuc29tZShlPT4oMCxvLmlzRXhhY3RDaG9pY2VNYXRjaCkoYSxlPy50b0xvd2VyQ2FzZSgpLnRyaW0oKSkpP2w9ITA6KHJbMF0/LnRvTG93ZXJDYXNlKCk9PT1cInRydWVcIiYmXCJ5ZXNcIj09PWF8fHJbMF0/LnRvTG93ZXJDYXNlKCk9PT1cImZhbHNlXCImJlwibm9cIj09PWF8fGEuaW5jbHVkZXMoXCJoYXZlIHJlYWRcIikmJnJbMF0/LnRvTG93ZXJDYXNlKCk9PT1cInRydWVcInx8KDAsaS5pc01hdGNoZWQpKGEsZS5sYWJlbCkmJnJbMF0/LnRvTG93ZXJDYXNlKCk9PT1cInRydWVcInx8clswXT8udG9Mb3dlckNhc2UoKT09PVwidHJ1ZVwiJiYoYS5pbmNsdWRlcyhcImN1cnJlbnRcIil8fGUubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImN1cnJlbnRcIikpfHxlLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJjdXJyZW50XCIpJiZyWzBdPy50b0xvd2VyQ2FzZSgpPT09XCJ0cnVlXCIpJiYobD0hMCksbCl7bi5jaGVja2VkPSEwLG4uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjbGlja1wiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksbi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSk7bGV0IGU9bi5jbG9zZXN0KCdbcm9sZT1cImNoZWNrYm94XCJdJyk7ZSYmZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNsaWNrXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxhd2FpdCAoMCxkLmRlbGF5KSg1MCl9fX1hc3luYyBmdW5jdGlvbiBQKGUsdCl7aWYoIXQ/LnRyaW0oKSlyZXR1cm4hMTtsZXQgcj0oZSxyKT0+KDAsbS5pc0FkcENvdW50cnlPcHRpb25NYXRjaCkodCxlLHIpO2lmKEIoZSxyKSlyZXR1cm4hMDtsZXQgbj1hd2FpdCAkKGUsdCxyKTtyZXR1cm4hIW4mJk8oZSxyKX1hc3luYyBmdW5jdGlvbiBfKGUpe2lmKCFlPy50cmltKCkpcmV0dXJuITE7bGV0IHQ9ITE7Zm9yKGxldCByIG9mIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZGYtdmFsaWRhdGVkLWZpZWxkXCIpKSl7bGV0IG49ci5xdWVyeVNlbGVjdG9yKFwiLm1kZi1sYWJlbCBsYWJlbFwiKSxvPVIobj8udGV4dENvbnRlbnQ/LnJlcGxhY2UoL1xcKisvZyxcIlwiKSk7aWYoXCJjb3VudHJ5XCIhPT1vKWNvbnRpbnVlO2xldCBpPW4/LmdldEF0dHJpYnV0ZShcImZvclwiKSxhPShpP2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpOm51bGwpfHxyLnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwiY29tYm9ib3hcIl0sIGlucHV0Lk1ERlNlbGVjdEJveF9faW5wdXQnKTthPy5pc0Nvbm5lY3RlZCYmKHQ9YXdhaXQgUChhLGUpfHx0KX1yZXR1cm4gdH1hc3luYyBmdW5jdGlvbiBMKCl7bGV0IGU9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZGl0aW9uYWwtcXVlc3Rpb25cIikpLmZpbHRlcihlPT5SKGUudGV4dENvbnRlbnQpLmluY2x1ZGVzKFwid2hhdCBpcyB5b3VyIGRlc2lyZWQgc2FsYXJ5XCIpKTtmb3IobGV0IHQgb2YgZSl7QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZGYtcmFkaW8tYnV0dG9uXCIpKS5maW5kKGU9PntsZXQgdD1lLmdldEF0dHJpYnV0ZShcImxhYmVsXCIpfHxlLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfHxlLnRleHRDb250ZW50O3JldHVyblwiYW5udWFsbHlcIj09PVIodCl9KT8uY2xpY2soKTtsZXQgZT1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcInNkZi1zZWxlY3Qtc2ltcGxlXCIpKS5maW5kKGU9PlIoZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxlLmdldEF0dHJpYnV0ZShcImxhYmVsXCIpfHxlLnRleHRDb250ZW50KS5pbmNsdWRlcyhcImN1cnJlbmN5XCIpKTtlJiZhd2FpdCAkKGUsXCJVbml0ZWQgU3RhdGVzIERvbGxhciAoIFVTRCApXCIpfX1mdW5jdGlvbiBSKGUpe3JldHVybihlfHxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpfWFzeW5jIGZ1bmN0aW9uIE8oZSx0KXtsZXQgcj1lLmNsb3Nlc3QoXCIubWRmLXZhbGlkYXRlZC1maWVsZCwgc2RmLXNlbGVjdC1zaW1wbGVcIil8fGU7cmV0dXJuKDAsbC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+QihlLHQpLHt0aW1lb3V0OjNlMyxpbnRlcnZhbDoxMDAsb2JzZXJ2ZVRhcmdldDpyfSl9YXN5bmMgZnVuY3Rpb24gTShlLHQpe2xldCByPUFycmF5LmlzQXJyYXkodCk/dFswXTp0O3JldHVybiBlPy50YWdOYW1lPT09XCJUQUJMRVwiP04oZSxyKTokKGUscil9YXN5bmMgZnVuY3Rpb24gTihlLHQpe2lmKCFlKXJldHVybiBudWxsO2xldCByPWUuZ2V0QXR0cmlidXRlKFwiaWRcIik7KDAsYS50cmlnZ2VyRXZlbnRzKShlLFtcIm1vdXNlZG93blwiXSksYXdhaXQgKDAsZC5kZWxheSkoMTAwKTtsZXQgbj0oMCxjLmdldE9yZGVyZWROb2Rlc1NhZmUpKGAuLy90YWJsZVtAYXJpYS1sYWJlbGxlZGJ5PVwiJHtyfVwiXS90Ym9keS90ci90ZFtjb250YWlucyhAY2xhc3MsIFwiZGlqaXRNZW51SXRlbUxhYmVsXCIpXS9zcGFuW0BjbGFzcz1cImxhYmVsXCJdYCxkb2N1bWVudCk7Zm9yKGxldCBlIG9mIG4pe2xldCByPWUudGV4dENvbnRlbnQ/LnRyaW0oKTtpZigoMCxpLmlzTWF0Y2hlZCkocix0KSl7KDAsYS50cmlnZ2VyRXZlbnRzKShlLFtcImNsaWNrXCJdKTticmVha319fWFzeW5jIGZ1bmN0aW9uICQoZSx0LHIpe2xldCBuPXI/PyhlPT4oMCxpLmlzTWF0Y2hlZCkoZSx0KSk7dHJ5e2lmKGUgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudClyZXR1cm4gcShlLHI/PygoZSxyKT0+KDAsaS5pc01hdGNoZWQpKGUsdCl8fCEhciYmKDAsaS5pc01hdGNoZWQpKHIsdCkpKTtpZihCKGUsbikpcmV0dXJuITA7bGV0IG89ZS5jbG9zZXN0KFwic2RmLXNlbGVjdC1zaW1wbGVcIik7aWYobylyZXR1cm4gYXdhaXQgVShvLG4sISFyKTtsZXQgYT1hd2FpdCBKKGUsITEpO2lmKCFhfHwwPT09YS5sZW5ndGgpcmV0dXJuITE7Zm9yKGxldCBlIG9mIGEpe2xldCB0PWUudGV4dENvbnRlbnQ/LnRyaW0oKTtpZighdCljb250aW51ZTtsZXQgcj1lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfHxlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCI7aWYobih0LHIpJiZlLmlzQ29ubmVjdGVkKXRyeXtyZXR1cm4gZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLHZpZXc6d2luZG93fSkpLGUuY2xpY2soKSxhd2FpdCAoMCxkLmRlbGF5KSgyMDApLCEwfWNhdGNoKGUpe2NvbnRpbnVlfX1yZXR1cm4hMX1jYXRjaChlKXtyZXR1cm4hMX1maW5hbGx5e3RyeXthd2FpdCBRKGUpfWNhdGNoKGUpe319fWZ1bmN0aW9uIEIoZSx0KXtpZihlIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpe2xldCByPUFycmF5LmZyb20oZS5vcHRpb25zKS5maW5kKGU9PmUuc2VsZWN0ZWQpfHxlLm9wdGlvbnNbZS5zZWxlY3RlZEluZGV4XTtpZihyKXJldHVybiB0KHIudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIixyLnZhbHVlPy50cmltKCl8fFwiXCIpfWxldCByPVtdO2ZvcihsZXQgdCBvZihcInVuZGVmaW5lZFwiIT10eXBlb2YgSFRNTElucHV0RWxlbWVudCYmZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJnIucHVzaChlLnZhbHVlfHxcIlwiKSxyLnB1c2goZS50ZXh0Q29udGVudHx8XCJcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiLk1ERlNlbGVjdEJveF9fc2luZ2xlLXZhbHVlLCAuc2luZ2xlLXZhbHVlLCBbY2xhc3MqPSdTaW5nbGVWYWx1ZSddLCBbY2xhc3MqPSdzaW5nbGUtdmFsdWUnXVwiKSkpci5wdXNoKHQudGV4dENvbnRlbnR8fFwiXCIpO2xldCBuPVtlLmNsb3Nlc3QoXCIuTURGU2VsZWN0Qm94XCIpLGUuY2xvc2VzdChcIi5tZGYtdmFsaWRhdGVkLWZpZWxkXCIpXS5maWx0ZXIoZT0+ISFlKTtmb3IobGV0IGUgb2YgbmV3IFNldChuKSlmb3IobGV0IHQgb2YgZS5xdWVyeVNlbGVjdG9yQWxsKFwiLk1ERlNlbGVjdEJveF9fc2luZ2xlLXZhbHVlLCAuc2luZ2xlLXZhbHVlLCBbY2xhc3MqPSdTaW5nbGVWYWx1ZSddLCBbY2xhc3MqPSdzaW5nbGUtdmFsdWUnXVwiKSlyLnB1c2godC50ZXh0Q29udGVudHx8XCJcIik7bGV0IG89ZS5jbG9zZXN0KFwic2RmLXNlbGVjdC1zaW1wbGVcIik7aWYobylmb3IobGV0IGUgb2Yoci5wdXNoKG8udGV4dENvbnRlbnR8fFwiXCIpLG8ucXVlcnlTZWxlY3RvckFsbChcIi5NREZTZWxlY3RCb3hfX3NpbmdsZS12YWx1ZSwgLnNpbmdsZS12YWx1ZSwgW2NsYXNzKj0nU2luZ2xlVmFsdWUnXSwgW2NsYXNzKj0nc2luZ2xlLXZhbHVlJ11cIikpKXIucHVzaChlLnRleHRDb250ZW50fHxcIlwiKTtyZXR1cm4gci5zb21lKGU9PntsZXQgcj1lLnRyaW0oKTtyZXR1cm4gci5sZW5ndGg+MCYmdChyKX0pfWZ1bmN0aW9uIHEoZSx0KXtmb3IobGV0IHIgb2YgQXJyYXkuZnJvbShlLm9wdGlvbnMpKXtsZXQgbj1yLnRleHRDb250ZW50Py50cmltKCl8fFwiXCIsbz1yLnZhbHVlPy50cmltKCl8fFwiXCI7aWYodChuLG8pKXJldHVybiBlLnZhbHVlPXIudmFsdWUsci5zZWxlY3RlZD0hMCxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLCEwfXJldHVybiExfWFzeW5jIGZ1bmN0aW9uIFUoZSx0LHI9ITEpe3RyeXtsZXQgbj1lLnNoYWRvd1Jvb3Qsbz1lPT57aWYoIWV8fCFlLmlzQ29ubmVjdGVkfHxcInRydWVcIj09PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIikpcmV0dXJuITE7bGV0IHQ9d2luZG93LmdldENvbXB1dGVkU3R5bGUoZSk7aWYoXCJub25lXCI9PT10LmRpc3BsYXl8fFwiaGlkZGVuXCI9PT10LnZpc2liaWxpdHkpcmV0dXJuITE7bGV0IHI9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm4gci53aWR0aD4wJiZyLmhlaWdodD4wfSxpPWU9PihlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fGUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil8fGUudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKSxhPWU9PntpZighcilyZXR1cm4gdChpKGUpLGUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil8fHZvaWQgMCk7bGV0IG49W2UudGV4dENvbnRlbnQsZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpLGUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIildO3JldHVybiBuLnNvbWUoZT0+e2xldCByPWU/LnRyaW0oKXx8XCJcIjtyZXR1cm4gci5sZW5ndGg+MCYmdChyKX0pfSxsPSgpPT5BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwibGlzdGJveFwiXScpKS5maWx0ZXIobykscz1uPy5xdWVyeVNlbGVjdG9yKCdpbnB1dFtyb2xlPVwiY29tYm9ib3hcIl0sIFtyb2xlPVwiYnV0dG9uXCJdW2FyaWEtZXhwYW5kZWRdLCBpbnB1dCwgYnV0dG9uJyl8fGUucXVlcnlTZWxlY3RvcihcImlucHV0LCBidXR0b25cIik7aWYoIXMpcmV0dXJuITE7bGV0IHU9bmV3IFNldChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwibGlzdGJveFwiXScpKSk7YXdhaXQgKDAsZC5kZWxheSkoMTAwKSxzLmlzQ29ubmVjdGVkJiZzLmNsaWNrKCksYXdhaXQgKDAsZC5kZWxheSkoMzAwKTtsZXQgYz1zLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIiksZj1udWxsO2ZvcihsZXQgZT0wO2U8NiYmIWY7ZSsrKXtpZihlPjAmJmF3YWl0ICgwLGQuZGVsYXkpKDEwMCksYyl7bGV0IGU9bj8ucXVlcnlTZWxlY3RvcihgW2lkPVwiJHtjfVwiXWApfHxkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjKTtpZihvKGUpKXtmPWU7YnJlYWt9fWxldCB0PUFycmF5LmZyb20obj8ucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJsaXN0Ym94XCJdJyl8fFtdKS5maWx0ZXIobyk7aWYodC5sZW5ndGg+MCl7Zj10W3QubGVuZ3RoLTFdO2JyZWFrfWxldCByPWwoKSxpPXIuZmlsdGVyKGU9PiF1LmhhcyhlKSk7aWYoaS5sZW5ndGg+MCl7Zj1pW2kubGVuZ3RoLTFdO2JyZWFrfWlmKHIubGVuZ3RoPjApe2Y9cltyLmxlbmd0aC0xXTticmVha319aWYoIWYpe2xldCBlPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm1lbnVbcm9sZT0nbWVudSddLCB1bFtyb2xlPSdtZW51J11cIikpLHQ9ZS5maWx0ZXIoZT0+bnVsbCE9PWUub2Zmc2V0UGFyZW50JiZcIm5vbmVcIiE9PWUuc3R5bGUuZGlzcGxheSk7dC5sZW5ndGg+MCYmKGY9dFt0Lmxlbmd0aC0xXSl9aWYoIWYpcmV0dXJuITE7bGV0IHA9KCk9PntsZXQgcj1cInZhbHVlXCJpbiBzPyhzLnZhbHVlfHxcIlwiKS50cmltKCk6XCJcIixvPShzLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIpLnRyaW0oKSxpPShzLnRleHRDb250ZW50fHxcIlwiKS50cmltKCksbD0oZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlwiKS50cmltKCksdT0oZS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpLGM9W3IsbyxpLGwsdV07aWYoYy5zb21lKGU9PmUmJnQoZSkpKXJldHVybiEwO2xldCBkPXMuZ2V0QXR0cmlidXRlKFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIpfHxlLmdldEF0dHJpYnV0ZShcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiKTtpZighZClyZXR1cm4hMTtsZXQgZj1uPy5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2R9XCJdYCl8fGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGQpO3JldHVybiEhZiYmYShmKX0sbT1mLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZGYtc2VsZWN0LWl0ZW0sIGxpW3JvbGU9J21lbnVpdGVtJ10sIGxpW3JvbGU9J29wdGlvbiddLCBbcm9sZT0nbWVudWl0ZW0nXSwgW3JvbGU9J29wdGlvbiddXCIpO2ZvcihsZXQgZSBvZiBtKXtsZXQgdD1lO2lmKG8odCkmJmEodCkmJihhd2FpdCAoMCxkLmRlbGF5KSg1MCksdC5pc0Nvbm5lY3RlZCYmdC5jbGljaygpLGF3YWl0ICgwLGQuZGVsYXkpKDIwMCkscCgpKSlyZXR1cm4hMH1yZXR1cm4hMX1jYXRjaChlKXtyZXR1cm4hMX19YXN5bmMgZnVuY3Rpb24gSChlLHQscil7bGV0e2NvbnRhaW5lcjpuLGlucHV0Om99PXkoKTtyZXR1cm4hIW4mJiEhbyYmKGF3YWl0ICgwLGEudXBsb2FkRmlsZXMpKG8sYXdhaXQgKDAsaS5mZXRjaFBkZkFzQmxvYikoZSksdCxyLFwiUmVzdW1lL0NWXCIpLCEwKX1hc3luYyBmdW5jdGlvbiBZKGUsdCxyKXtsZXR7Y29udGFpbmVyOm4saW5wdXQ6byxkZWxldGVCdXR0b246c309digpO2lmKCFufHwhbylyZXR1cm4hMTtpZihDKCkpe2lmKCFzKXJldHVybiExO3MuY2xpY2soKTtsZXQgZT1hd2FpdCAoMCxsLndhaXRGb3JDb25kaXRpb24pKCgpPT4hQygpLHt0aW1lb3V0OjVlMyxpbnRlcnZhbDoxMDAsb2JzZXJ2ZVRhcmdldDpufSk7aWYoIWUpcmV0dXJuITF9YXdhaXQgKDAsYS51cGxvYWRGaWxlcykobyxhd2FpdCAoMCxpLmZldGNoQ292ZXJMZXR0ZXJQZGZBc0Jsb2IpKGUpLHQscixcIkNvdmVyIExldHRlclwiKTtsZXQgdT1gJHtlLmNvdmVyTGV0dGVyTmFtZX0ucGRmYC50b0xvd2VyQ2FzZSgpLGM9YXdhaXQgKDAsbC53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+e2xldCB0PXgoKS50b0xvd2VyQ2FzZSgpO2lmKHQmJih0LmluY2x1ZGVzKGUuY292ZXJMZXR0ZXJOYW1lLnRvTG93ZXJDYXNlKCkpfHx0LmluY2x1ZGVzKHUpKSlyZXR1cm4hMDtsZXR7dXBsb2FkZWRWYWx1ZTpyfT12KCksbj1yPy5xdWVyeVNlbGVjdG9yKCdzZGYtYWxlcnRbc3RhdHVzPVwic3VjY2Vzc1wiXScpO3JldHVybiEhbn0se3RpbWVvdXQ6OGUzLGludGVydmFsOjEwMCxvYnNlcnZlVGFyZ2V0Om59KTtyZXR1cm4gY31hc3luYyBmdW5jdGlvbiB6KCl7bGV0IGU9KDAsYy5nZXRGaXJzdE9yZGVyZWROb2RlKSgnLi8vYVtAYXJpYS1sYWJlbD1cIkNsZWFyIFByb2ZpbGVcIiBhbmQgKG5vdChAYXJpYS1kaXNhYmxlZCkgb3IgQGFyaWEtZGlzYWJsZWQgIT0gXCJ0cnVlXCIpXScpO2UmJmUuY2xpY2soKTtsZXQgdD0oMCxjLmdldEZpcnN0T3JkZXJlZE5vZGUpKFwiLi8vKltAZGF0YS11aT0nYWRkLXNlY3Rpb24nIGFuZCBAYXJpYS1sYWJlbD0nQWRkIEVkdWNhdGlvbiddXCIsKDAsYy5nZXRGaXJzdE9yZGVyZWROb2RlKShcIi8vKltAZGF0YS11aT0nZWR1Y2F0aW9uJ11cIikpO3QmJih0LmNsaWNrKCksYXdhaXQgKDAsZC5kZWxheSkoMTAwKSk7bGV0IHI9KDAsYy5nZXRGaXJzdE9yZGVyZWROb2RlKShcIi4vLypbQGRhdGEtdWk9J2FkZC1zZWN0aW9uJyBhbmQgQGFyaWEtbGFiZWw9J0FkZCBFeHBlcmllbmNlJ11cIiwoMCxjLmdldEZpcnN0T3JkZXJlZE5vZGUpKFwiLy8qW0BkYXRhLXVpPSdleHBlcmllbmNlJ11cIikpO3ImJihyLmNsaWNrKCksYXdhaXQgKDAsZC5kZWxheSkoMTAwKSl9YXN5bmMgZnVuY3Rpb24gVigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNhYmlsaXR5U3RhdHVzQ2hlY2sgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFtuYW1lPVwiZGlzYWJpbGl0eVN0YXR1c0NoZWNrXCJdW3R5cGU9XCJjaGVja2JveFwiXScpO2UmJiFlLmNoZWNrZWQmJihlLmNoZWNrZWQ9ITAsZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNsaWNrXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxlLmNsb3Nlc3QoJ1tyb2xlPVwiY2hlY2tib3hcIl0sIC52ZGwtY2hlY2tib3gnKT8uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjbGlja1wiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksYXdhaXQgKDAsZC5kZWxheSkoMzAwKSxhd2FpdCBXKCkpfWFzeW5jIGZ1bmN0aW9uIFcoKXtsZXQgZT1hd2FpdCBHKCgpPT5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZzaWQtc3RhdHVzLXF1ZXN0aW9uLWJsb2NrXCIpLDMwKSx0PWF3YWl0IEcoKCk9PmU/LnF1ZXJ5U2VsZWN0b3IoXCJzZGYtcmFkaW8tZ3JvdXBcIik/P251bGwsMzApO2lmKCF0KXJldHVybjthd2FpdCAoMCxkLmRlbGF5KSgyMDApO2xldCByPUFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKFwic2RmLXJhZGlvLWJ1dHRvblwiKSksbj1yLmZpbmQoZT0+e2xldCB0PWUuZ2V0QXR0cmlidXRlKFwibGFiZWxcIik/LnRvTG93ZXJDYXNlKCk/P1wiXCIscj1lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpPz9cIlwiO3JldHVybiB0LmluY2x1ZGVzKFwiZG9uJ3Qgd2lzaFwiKXx8dC5pbmNsdWRlcyhcImRlY2xpbmVcIil8fFwiRFwiPT09cn0pPz9udWxsO24/LmlzQ29ubmVjdGVkJiYobi5jbGljaygpLGF3YWl0ICgwLGQuZGVsYXkpKDEwMCkpfWFzeW5jIGZ1bmN0aW9uIEcoZSx0KXtmb3IobGV0IHI9MDtyPHQ7cisrKXtsZXQgdD1lKCk7aWYodClyZXR1cm4gdDthd2FpdCAoMCxkLmRlbGF5KSgxMDApfXJldHVybiBudWxsfWFzeW5jIGZ1bmN0aW9uIEsoZSx0KXtsZXQgcj10Py5bMF07aWYoIXIpcmV0dXJuO2xldCBuPWU7aWYobi4kcmFkaW9zJiZuLiRyYWRpb3MubGVuZ3RoPjApe2xldCBlPSgwLG8uZmluZEV4YWN0Q2hvaWNlKShuLiRyYWRpb3MscixlPT5lLmNsb3Nlc3QoXCJsYWJlbFwiKT8udGV4dENvbnRlbnQsZT0+ZS52YWx1ZSk7Zm9yKGxldCB0IG9mIGU/W2VdOltdKXtsZXQgZT10LmNsb3Nlc3QoXCJsYWJlbFwiKT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIixuPXQudmFsdWV8fFwiXCIsaT0oMCxvLmlzRXhhY3RDaG9pY2VNYXRjaCkoZS50b0xvd2VyQ2FzZSgpLHIudG9Mb3dlckNhc2UoKSl8fCgwLG8uaXNFeGFjdENob2ljZU1hdGNoKShuLnRvTG93ZXJDYXNlKCksci50b0xvd2VyQ2FzZSgpKTtpZihpJiYhdC5jaGVja2VkKXthd2FpdCAoMCxkLmRlbGF5KSg1MCksdC5pc0Nvbm5lY3RlZCYmdC5jbGljaygpLGF3YWl0ICgwLGQuZGVsYXkpKDEwMCk7cmV0dXJufX19bGV0IGk9ZS4kcmFkaW9QYXJlbnR8fGRvY3VtZW50LGE9QXJyYXkuZnJvbShpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZGYtcmFkaW8tYnV0dG9uXCIpKSxsPSgwLG8uZmluZEV4YWN0Q2hvaWNlKShhLHIsZT0+ZS5nZXRBdHRyaWJ1dGUoXCJsYWJlbFwiKSxlPT5lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpKTtmb3IobGV0IGUgb2YgbD9bbF06W10pe2xldCB0PWUuZ2V0QXR0cmlidXRlKFwibGFiZWxcIil8fFwiXCIsbj1lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfHxcIlwiLGk9KDAsby5pc0V4YWN0Q2hvaWNlTWF0Y2gpKHQudG9Mb3dlckNhc2UoKSxyLnRvTG93ZXJDYXNlKCkpfHwoMCxvLmlzRXhhY3RDaG9pY2VNYXRjaCkobi50b0xvd2VyQ2FzZSgpLHIudG9Mb3dlckNhc2UoKSk7aWYoaSl7bGV0IHQ9XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiKTtpZih0KXJldHVybjthd2FpdCAoMCxkLmRlbGF5KSg1MCksZS5pc0Nvbm5lY3RlZCYmZS5jbGljaygpLGF3YWl0ICgwLGQuZGVsYXkpKDEwMCk7bGV0IHI9ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtyJiYhci5jaGVja2VkJiYoci5jbGljaygpLGF3YWl0ICgwLGQuZGVsYXkpKDUwKSk7cmV0dXJufX19ZnVuY3Rpb24gWChlKXtpZihlKXtlLnBhcmVudE5vZGU7bGV0IHQ9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoZT0+e2ZvcihsZXQgciBvZiBlKWZvcihsZXQgZSBvZiByLmFkZGVkTm9kZXMpKGU/LmdldEF0dHJpYnV0ZT8uKFwiZGF0YS11aVwiKT09PVwic3VjY2Vzc2Z1bC1zdWJtaXRcInx8ZT8ucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXVpPSdzdWNjZXNzZnVsLXN1Ym1pdCddXCIpLmxlbmd0aD4wKSYmKHQuZGlzY29ubmVjdCgpLHdpbmRvdy50b3A/LnBvc3RNZXNzYWdlKGYuY2xlYW5PYmplY3Qoe3R5cGU6cy5NRVNTQUdFX0VWRU5UUy5hZ2VudFN1Ym1pdENsaWNrZWR9KSx7dGFyZ2V0T3JpZ2luOlwiKlwifSkpfSk7dC5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pfX1hc3luYyBmdW5jdGlvbiBKKGUsdD0hMCl7dHJ5e2xldCB0PWU9PihlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fGUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil8fGUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIikudHJpbSgpLHI9ITEsbj1hc3luYyBlPT57aWYoZSYmZS5pc0Nvbm5lY3RlZCl0cnl7YXdhaXQgKDAsZC5kZWxheSkoNTApO2xldCB0PXtidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsdmlldzp3aW5kb3csYnV0dG9uczoxfTtlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZWRvd25cIix0KSksYXdhaXQgKDAsZC5kZWxheSkoNTApLGUuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNldXBcIix0KSksYXdhaXQgKDAsZC5kZWxheSkoNTApLGUuaXNDb25uZWN0ZWQmJihlLmNsaWNrKCksZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIix0KSkpfWNhdGNoKGUpe319LG89ZS5jbG9zZXN0KFwiLnZzaWQtaXRlbVwiKTtpZihvKXthd2FpdCBuKG8pO2xldCBlPW8ucXVlcnlTZWxlY3RvcihcIi5NREZTZWxlY3RCb3hfX2NvbnRyb2xcIik7ZSYmYXdhaXQgbihlKSxyPSEwfWlmKCFyKXtsZXQgdD1lLmNsb3Nlc3QoXCIudmRsLWRyb3Bkb3duLWxpc3RfX2lucHV0LWNvbnRhaW5lclwiKTtpZih0KXtsZXQgZT10LnF1ZXJ5U2VsZWN0b3IoXCIudmRsLWRyb3Bkb3duLWxpc3RfX3BpY2tlclwiKTtlP2F3YWl0IG4oZSk6YXdhaXQgbih0KSxyPSEwfX1pZighcil7bGV0IHQ9ZS5jbG9zZXN0KFwiLk1ERlNlbGVjdEJveF9fY29udHJvbFwiKTtpZih0KXtsZXQgZT10LnF1ZXJ5U2VsZWN0b3IoXCIuTURGU2VsZWN0Qm94X19kcm9wZG93bi1pbmRpY2F0b3JcIik7ZT9hd2FpdCBuKGUpOmF3YWl0IG4odCkscj0hMH19cnx8YXdhaXQgbihlKTtsZXQgaT1lLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiksYT0wLGw9ZS5oYXNBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpLHM9bD8yMDo0O2Zvcig7XCJ0cnVlXCIhPT1pJiZhPHM7KWF3YWl0ICgwLGQuZGVsYXkpKDEwMCksaT1lLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiksYSsrO2lmKFwiZmFsc2VcIj09PWl8fG51bGw9PT1pKXtsZXQgdD1lLmNsb3Nlc3QoXCIudmRsLWRyb3Bkb3duLWxpc3RfX2lucHV0LWNvbnRhaW5lclwiKTtpZih0JiZ0LmlzQ29ubmVjdGVkKWF3YWl0IG4odCksYXdhaXQgKDAsZC5kZWxheSkoNTAwKSxpPWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKTtlbHNle2xldCB0PWUuY2xvc2VzdChcIi5NREZTZWxlY3RCb3hfX2NvbnRyb2xcIil8fGUucGFyZW50RWxlbWVudD8uY2xvc2VzdChcIi5NREZTZWxlY3RCb3hfX2NvbnRyb2xcIik7dCYmdC5pc0Nvbm5lY3RlZCYmKGF3YWl0IG4odCksYXdhaXQgKDAsZC5kZWxheSkoNTAwKSxpPWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKSl9fWxldCB1PWU/LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIik7aWYoIXUpe2xldCB0PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRieVwiKTtpZih0KXtsZXQgZT10Lm1hdGNoKC9yZWFjdC1zZWxlY3QtaW5zdGFuY2UtKC4qPyktcGxhY2Vob2xkZXIvKTtpZihlJiZlWzFdKXtsZXQgdD1lWzFdLHI9YHJlYWN0LXNlbGVjdC1pbnN0YW5jZS0ke3R9LWxpc3Rib3hgO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHIpJiYodT1yKX19fWxldCBjPVtdO2lmKHUpYz1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3V9IC5NREZTZWxlY3RCb3hfX29wdGlvbiwgIyR7dX0gLnZkbC1saXN0X19vcHRpb24sICMke3V9IFtyb2xlPVwib3B0aW9uXCJdYCkpO2Vsc2V7bGV0IGU9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLk1ERlNlbGVjdEJveF9fbWVudS1saXN0LCBbcm9sZT0nbGlzdGJveCddXCIpKSx0PWUuZmluZChlPT57bGV0IHQ9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxyPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpLG49dC53aWR0aD4wJiZ0LmhlaWdodD4wJiZcIm5vbmVcIiE9PXIuZGlzcGxheSYmXCJoaWRkZW5cIiE9PXIudmlzaWJpbGl0eTtyZXR1cm4gbn0pO3QmJihjPUFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKFwiLk1ERlNlbGVjdEJveF9fb3B0aW9uLCAudmRsLWxpc3RfX29wdGlvbiwgW3JvbGU9J29wdGlvbiddXCIpKSl9bGV0IGY9Yy5maWx0ZXIoZT0+ISF0KGUpKTtpZigwPT09Zi5sZW5ndGgpe2xldCByPWUudGFnTmFtZT8udG9Mb3dlckNhc2UoKT09PVwic2RmLXNlbGVjdC1zaW1wbGVcIj9lOmUuY2xvc2VzdChcInNkZi1zZWxlY3Qtc2ltcGxlXCIpLG49cj8uc2hhZG93Um9vdDtpZihuKXtsZXQgZT1BcnJheS5mcm9tKG4ucXVlcnlTZWxlY3RvckFsbChcInNkZi1zZWxlY3QtaXRlbSwgW3JvbGU9J29wdGlvbiddXCIpKSxyPUFycmF5LmZyb20obmV3IFNldChlKSk7Zj1yLmZpbHRlcihlPT4hIXQoZSkpfX1pZigwPT09Zi5sZW5ndGgpcmV0dXJuIG51bGw7cmV0dXJuIGZ9ZmluYWxseXt0JiZhd2FpdCBRKGUpfX1hc3luYyBmdW5jdGlvbiBRKGUpe3RyeXtpZighZXx8IWUuaXNDb25uZWN0ZWQpcmV0dXJuO2xldCB0PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKTtpZihcInRydWVcIiE9PXQpcmV0dXJuO2xldCByPW5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLHtrZXk6XCJFc2NhcGVcIixjb2RlOlwiRXNjYXBlXCIsa2V5Q29kZToyNyxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsdmlldzp3aW5kb3d9KTtlLmRpc3BhdGNoRXZlbnQociksYXdhaXQgKDAsZC5kZWxheSkoNTApO2xldCBuPWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKTtpZihcInRydWVcIj09PW4pdHJ5e2xldCB0PW5ldyBGb2N1c0V2ZW50KFwiZm9jdXNvdXRcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLHZpZXc6d2luZG93fSk7ZS5kaXNwYXRjaEV2ZW50KHQpLGF3YWl0ICgwLGQuZGVsYXkpKDUwKX1jYXRjaChlKXt9fWNhdGNoKGUpe319XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJvcGVyYXRpb25zLmZjMzFkMmYzLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);