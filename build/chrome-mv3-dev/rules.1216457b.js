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
})({"lkVlI":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\careers-page\\rules.js",
    "bundleId": "5e37fbe01216457b",
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
var j = z(require("c45ea27691c5e9e7"));
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

},{"c45ea27691c5e9e7":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"7KSXI":[function(require,module,exports) {
/**
 * Parcel module id: 9NM9Q
 * Resolved path: src/contents/sites/careers-page/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "extractRules", ()=>u), n.export(r, "getCoverLetterStatus", ()=>m), n.export(r, "detectEduExpType", ()=>w), n.export(r, "clearEduExpSectionFields", ()=>A), n.export(r, "getEducationRules", ()=>_), n.export(r, "getExperienceRules", ()=>L), n.export(r, "getFormSnapshot", ()=>N), n.export(r, "getEducationSnapshot", ()=>Y), n.export(r, "getEmploymentSnapshot", ()=>z), n.export(r, "getEduAndEmploymentSnapshot", ()=>V);
var o = e("~core/enums"), i = e("~utils/delay");
async function a(e1) {
    let t = [];
    if ("SELECT" === e1.tagName) return Array.from(e1.options).forEach((e1)=>{
        e1.value && "" !== e1.value && t.push(e1.textContent?.trim() || e1.value);
    }), t;
    let r1 = e1.nextElementSibling;
    if (r1 && "DIV" === r1.tagName) {
        let e1 = r1.querySelectorAll("button");
        e1.forEach((e1)=>{
            let r1 = e1.querySelector("div");
            if (r1) {
                let e1 = r1.textContent?.trim();
                e1 && t.push(e1);
            }
        });
    }
    return t;
}
function l(e1) {
    let t = e1.closest("[role='radiogroup']");
    if (t) return t;
    let r1 = e1.closest(".form-group");
    if (r1) {
        let t = Array.from(r1.querySelectorAll("input[type='radio']")).filter((t)=>t.name === e1.name);
        if (t.length > 0) return r1;
    }
    let n = e1.getRootNode(), o = Array.from(n.querySelectorAll("input[type='radio']")).filter((t)=>t.name === e1.name);
    if (o.length > 0) {
        let e1 = o[0].closest(".form-group");
        return e1 || o[0].parentElement || document.body;
    }
    return e1.parentElement || document.body;
}
function s(e1) {
    let t = e1.querySelectorAll("input[type='radio']"), r1 = [];
    return t.forEach((e1)=>{
        let t = "", n = e1.closest("label");
        if (n?.textContent && (t = d(n.textContent)), !t) {
            let r1 = O(e1);
            r1?.textContent && (t = d(r1.textContent));
        }
        if (!t && e1.nextElementSibling) {
            let r1 = e1.nextElementSibling;
            "LABEL" === r1.tagName && r1.textContent && (t = d(r1.textContent));
        }
        t || (t = d(e1.value)), t && !r1.includes(t) && r1.push(t);
    }), r1;
}
async function u() {
    let e1 = [], t = c();
    if (!t) return e1;
    await k(t);
    let r1 = t.querySelectorAll("input, select, textarea"), n = new Set, i = new Set;
    for (let a of r1){
        if (v(a)) continue;
        if ("INPUT" === a.tagName && "radio" === a.type) {
            let e1 = a.name;
            if (e1 && i.has(e1)) continue;
        }
        if ("INPUT" === a.tagName && "checkbox" === a.type && a.name) {
            let r1 = a.name;
            if (n.has(r1)) continue;
            n.add(r1);
            let i = Array.from(t.querySelectorAll(`input[type="checkbox"][name="${CSS.escape(r1)}"]`)).filter((e1)=>!v(e1));
            if (i.length > 1) {
                let t = a.closest(".form-group"), n = t?.querySelector(":scope > label") ?? null, l = n ? d(n.textContent ?? "") : r1, s = R(a, n), u = i.map((e1)=>{
                    let t = e1.closest("label");
                    return d(t?.textContent ?? e1.value ?? "");
                }).filter(Boolean);
                e1.push({
                    label: l,
                    type: o.FIELD_TYPE.CHECKBOX,
                    required: s,
                    $input: i[0],
                    $checkboxs: i,
                    options: u
                });
                continue;
            }
        }
        let r1 = await y(a);
        if (r1 && (e1.push(r1), "INPUT" === a.tagName && "radio" === a.type)) {
            let e1 = a.name;
            e1 && i.add(e1);
        }
    }
    await F(t);
    let a = await _();
    e1.push(...a);
    let l = await L();
    return e1.push(...l), e1;
}
function c() {
    let e1 = document.querySelector("form");
    if (e1) {
        let t = e1.querySelectorAll("input, select, textarea");
        if (t.length > 0) return e1;
    }
    let t = Array.from(document.querySelectorAll("*")).filter((e1)=>e1.shadowRoot);
    for (let e1 of t){
        let t = e1.shadowRoot, r1 = t.querySelector("form");
        if (r1) return r1;
        let n = t.querySelectorAll("input, select, textarea, textarea");
        if (n.length > 0) return t;
    }
    return null;
}
function d(e1) {
    return (e1 || "").replace(/[*:\n]/g, "").replace(/\s+/g, " ").trim();
}
function f(e1) {
    return d(e1).toLowerCase().includes("cover letter");
}
function p(e1 = c()) {
    if (!e1) return null;
    let t = e1.querySelectorAll("textarea");
    for (let e1 of t){
        let t = M(e1);
        if (f(t?.textContent) || f(e1.placeholder) || f(e1.getAttribute("aria-label")) || f(e1.name) || f(e1.id)) return e1;
    }
    return null;
}
function m() {
    let e1 = p();
    if (!e1) return "";
    let t = M(e1), r1 = R(e1, t) || e1.required || "true" === e1.getAttribute("aria-required");
    return r1 ? "required" : "optional";
}
function h(e1) {
    return "salary desired" === e1 || "salary expectations" === e1;
}
let g = "How many years' experiences do you have in software sales?", b = "Please return the years of experience in software sales as a number (digits only).";
async function y(e1) {
    let t, r1;
    let n = M(e1), i = e1.placeholder || e1.getAttribute("placeholder"), u = n ? d(n.textContent || "") : d(i);
    if (!u) return null;
    let c = u.toLowerCase();
    if ("resume" === c) return null;
    let f = h(c);
    if (f && "SELECT" === e1.tagName) return null;
    let p = R(e1, n), m = null;
    if ("INPUT" === e1.tagName) {
        let r1 = e1;
        if ("file" === r1.type) return null;
        t = "checkbox" === r1.type ? o.FIELD_TYPE.CHECKBOX : "radio" === r1.type ? o.FIELD_TYPE.RADIOGROUP : r1.classList.contains("datetimefield") ? o.FIELD_TYPE.DATE : o.FIELD_TYPE.TEXT, m = r1;
    } else if ("SELECT" === e1.tagName) t = o.FIELD_TYPE.SELECT, m = e1;
    else {
        if ("TEXTAREA" !== e1.tagName) return null;
        t = o.FIELD_TYPE.TEXT, m = e1;
    }
    let y = [];
    t === o.FIELD_TYPE.SELECT && (y = await a(m));
    let v = null;
    if (t === o.FIELD_TYPE.RADIOGROUP) {
        y = s(v = l(e1));
        let t = v.querySelectorAll("input[type='radio']").length, r1 = {
            name: e1.name || "(missing)",
            groupTag: v.tagName,
            radioCount: t,
            optionCount: y.length
        };
        0 === y.length ? console.warn("[CareersPage][rules] Radio \u9009\u9879\u63d0\u53d6\u5931\u8d25", r1) : console.debug("[CareersPage][rules] Radio \u9009\u9879\u63d0\u53d6\u5b8c\u6210", r1);
    }
    t === o.FIELD_TYPE.DATE && (r1 = "MM/DD/YYYY"), c === d(g).toLowerCase() && (r1 = b), f && t === o.FIELD_TYPE.TEXT && (r1 = "Return a numeric value only (digits, optional decimal). Currency is US Dollar and period is Monthly; do not include symbols or units.");
    let w = {
        label: u,
        type: t,
        required: p,
        $input: m
    };
    return t !== o.FIELD_TYPE.TEXT && t !== o.FIELD_TYPE.DATE && (w.options = y), r1 && (w.description = r1), t === o.FIELD_TYPE.RADIOGROUP && v && (w.$label = n, w.$radioParent = v), w;
}
function v(e1) {
    return !!e1.closest(".education-experience-item");
}
function w(e1) {
    let t = e1.querySelector(":scope > label")?.textContent?.toLowerCase() || "", r1 = Array.from(e1.querySelectorAll("button")).map((e1)=>e1.textContent?.trim().toLowerCase() || "");
    if (r1.some((e1)=>e1.includes("add") && e1.includes("education"))) return "education";
    if (r1.some((e1)=>e1.includes("add") && e1.includes("experience"))) return "experience";
    let n = e1.querySelector(".education-experience-item");
    if (n) {
        if (n.querySelector('input[name="school"], .education_started_at, .education_ended_at')) return "education";
        if (n.querySelector('input[name="title"], input[name="employer"], input[name="is_current_employer"], .experience_started_at, .experience_ended_at')) return "experience";
        let e1 = d(n.textContent).toLowerCase();
        if (/\b(school|degree)\b/.test(e1)) return "education";
        if (/\b(employer|position name)\b/.test(e1)) return "experience";
    }
    return t.includes("education") ? "education" : t.includes("experience") ? "experience" : null;
}
function S(e1) {
    let t = Array.from(e1.querySelectorAll("button"));
    return t.find((e1)=>{
        let t = e1.textContent?.trim().toLowerCase() || "";
        return !!(t.includes("delete") || t.includes("remove") || e1.className.toLowerCase().includes("btn-danger")) || !!e1.querySelector("i.fa-trash-alt, i.fas.fa-trash-alt");
    }) || null;
}
_c = S;
function E(e1) {
    let t = Array.from(e1.querySelectorAll("button"));
    return t.find((e1)=>{
        let t = e1.textContent?.trim().toLowerCase() || "";
        return !!("edit" === t || t.includes("edit")) || !!e1.querySelector("i.fa-edit, i.far.fa-edit");
    }) || null;
}
_c1 = E;
function x(e1, t) {
    return Array.from(e1.querySelectorAll("button")).find((e1)=>{
        let r1 = e1.textContent?.trim().toLowerCase() || "";
        return r1.includes("add") && r1.includes(t);
    }) || null;
}
function C(e1) {
    return !!e1.querySelector("input, select, textarea");
}
_c2 = C;
async function A(e1) {
    let t = e1.querySelectorAll("input, select, textarea");
    for (let e1 of t){
        if (e1 instanceof HTMLInputElement) {
            if ("checkbox" === e1.type || "radio" === e1.type) {
                e1.checked && (e1.checked = !1, e1.dispatchEvent(new Event("change", {
                    bubbles: !0
                })));
                continue;
            }
            if ("file" === e1.type) continue;
            e1.value = "", e1.dispatchEvent(new Event("input", {
                bubbles: !0
            })), e1.dispatchEvent(new Event("change", {
                bubbles: !0
            }));
            continue;
        }
        if (e1 instanceof HTMLSelectElement) {
            e1.selectedIndex = 0, e1.dispatchEvent(new Event("change", {
                bubbles: !0
            }));
            continue;
        }
        e1.value = "", e1.dispatchEvent(new Event("input", {
            bubbles: !0
        })), e1.dispatchEvent(new Event("change", {
            bubbles: !0
        }));
    }
}
_c3 = A;
async function k(e1) {
    let t = e1.querySelectorAll(".form-group");
    for (let e1 of t){
        let t = w(e1);
        if (!t) continue;
        let r1 = Array.from(e1.querySelectorAll(".education-experience-item"));
        if (0 === r1.length) continue;
        for(let e1 = r1.length - 1; e1 >= 1; e1--){
            let t = S(r1[e1]);
            t && (t.click(), await (0, i.delay)(250));
        }
        let n = (r1 = Array.from(e1.querySelectorAll(".education-experience-item")))[0];
        if (n) {
            if (!C(n)) {
                let e1 = E(n);
                e1 && (e1.click(), await (0, i.delay)(400));
            }
            if (n = (r1 = Array.from(e1.querySelectorAll(".education-experience-item")))[0]) {
                if (!C(n)) {
                    let n = x(e1, t);
                    n && (n.click(), await (0, i.delay)(500)), r1 = Array.from(e1.querySelectorAll(".education-experience-item"));
                    let o = r1.find((e1)=>C(e1));
                    o && await A(o);
                    continue;
                }
                await A(n);
            }
        }
    }
}
async function T(e1, t) {
    if (e1.querySelector(".education-experience-item")) return;
    let r1 = Array.from(e1.querySelectorAll("button")).find((e1)=>{
        let r1 = e1.textContent?.trim().toLowerCase() || "";
        return r1.includes("add") && r1.includes(t);
    });
    r1 && (r1.click(), await (0, i.delay)(500));
}
_c4 = T;
async function F(e1) {
    let t = e1.querySelectorAll(".form-group");
    for (let e1 of t)"experience" === w(e1) && await T(e1, "experience");
    for (let e1 of t)"education" === w(e1) && await T(e1, "education");
}
_c5 = F;
async function I(e1, t = {}) {
    let r1 = [], n = e1.querySelectorAll("input, select, textarea");
    for (let e1 of n){
        let n = t.enableExperienceFrequencyFallback ? j(e1) : null, i = await y(e1);
        if (!i && t.enableExperienceFrequencyFallback && (i = await D(e1)), !i) continue;
        let a = e1.placeholder || e1.getAttribute("placeholder"), l = d(a);
        l ? i.label = l : n && i.type === o.FIELD_TYPE.SELECT && (i.label = n), r1.push(i);
    }
    return r1;
}
_c6 = I;
function j(e1) {
    if ("SELECT" !== e1.tagName) return null;
    let t = e1, r1 = t.options[0];
    if (!r1) return null;
    let n = d(r1.textContent || "");
    return "select frequency" !== n.toLowerCase() || "" !== r1.value ? null : n;
}
async function D(e1) {
    if ("SELECT" !== e1.tagName) return null;
    let t = e1, r1 = j(t);
    if (!r1) return null;
    let n = r1, i = R(t, M(t)), l = await a(t);
    return {
        label: n,
        type: o.FIELD_TYPE.SELECT,
        required: i,
        $input: t,
        options: l
    };
}
_c7 = D;
function P(e1) {
    let t = [], r1 = document.querySelectorAll(".form-group");
    for (let n of r1)if (w(n) === e1) {
        let e1 = n.querySelectorAll(".education-experience-item");
        e1.forEach((e1)=>t.push(e1));
    }
    return t;
}
_c8 = P;
async function _() {
    let e1 = [], t = P("education");
    for (let r1 of t){
        let t = r1.closest(".form-group"), n = t?.querySelector(":scope > label"), i = R(r1, n), a = await I(r1), l = a.map((e1)=>({
                label: e1.label,
                type: e1.type,
                ...e1.options ? {
                    options: e1.options
                } : {}
            }));
        e1.push({
            label: "Education",
            type: o.FIELD_TYPE.EDUCATION,
            required: i,
            children: a,
            options: l
        });
    }
    return e1;
}
async function L() {
    let e1 = [], t = P("experience");
    for (let r1 of t){
        let t = r1.closest(".form-group"), n = t?.querySelector(":scope > label"), i = R(r1, n), a = await I(r1, {
            enableExperienceFrequencyFallback: !0
        }), l = a.map((e1)=>({
                label: e1.label,
                type: e1.type,
                ...e1.options ? {
                    options: e1.options
                } : {}
            }));
        e1.push({
            label: "Experience",
            type: o.FIELD_TYPE.EMPLOYMENT,
            required: i,
            children: a,
            options: l
        });
    }
    return e1;
}
_c9 = L;
function R(e1, t) {
    if (t) {
        let e1 = t.querySelectorAll("span");
        for (let t of e1)if (t.textContent?.trim() === "*") return !0;
    }
    return !!(e1.hasAttribute("required") || t?.textContent?.toLowerCase().includes("required"));
}
_c10 = R;
function O(e1) {
    let t = e1.id;
    if (!t) return null;
    let r1 = e1.getRootNode();
    if ("querySelector" in r1) {
        let e1 = r1.querySelector(`label[for="${t}"]`);
        if (e1) return e1;
    }
    let n = document.querySelector(`label[for="${t}"]`);
    return n || null;
}
_c11 = O;
function M(e1) {
    let t = O(e1);
    if (t) return t;
    let r1 = e1.previousElementSibling;
    for(; r1;){
        if ("LABEL" === r1.tagName) return r1;
        r1 = r1.previousElementSibling;
    }
    if ("INPUT" === e1.tagName && "checkbox" === e1.type) {
        let t = e1.nextElementSibling;
        for(; t;){
            if (("SPAN" === t.tagName || "LABEL" === t.tagName) && t.textContent?.trim()) return t;
            t = t.nextElementSibling;
        }
        let r1 = e1.parentElement;
        if (r1 && r1.textContent?.trim()) return r1;
    }
    let n = e1.closest(".form-group");
    if (n) {
        let t = e1.closest("[class*='col-']");
        if (t) {
            let e1 = t.querySelector("label");
            if (e1) return e1;
        }
        let r1 = n.querySelector("label");
        if (r1) return r1;
    }
    let o = e1.parentElement;
    for(; o;){
        let e1 = o.previousElementSibling;
        for(; e1;){
            let t = e1.querySelector("label");
            if (t?.textContent?.trim()) return t;
            e1 = e1.previousElementSibling;
        }
        o = o.parentElement;
    }
    return null;
}
_c12 = M;
async function N() {
    let e1 = {}, t = c() ?? document, r1 = t.querySelectorAll("input, select, textarea");
    for (let t of r1){
        let r1 = M(t), n = t.placeholder || t.getAttribute("placeholder"), o = r1 ? d(r1.textContent || "") : d(n);
        if (!o) continue;
        let i = o.toLowerCase(), a = "";
        if ("INPUT" === t.tagName) {
            let e1 = t;
            if ("checkbox" === e1.type) a = e1.checked ? "Yes" : "No";
            else if ("radio" === e1.type) {
                let t = document.querySelector(`input[type="radio"][name="${e1.name}"]:checked`);
                a = t?.value || "";
            } else a = e1.value || "";
        } else if ("SELECT" === t.tagName) {
            let e1 = t;
            a = e1.options[e1.selectedIndex]?.textContent?.trim() || "";
        } else if ("TEXTAREA" === t.tagName) {
            let e1 = t;
            a = e1.value || "";
        }
        if (h(i)) {
            let r1 = t.id || "", n = o;
            if ("expected_currency" === r1) e1[`${n} Currency`] = a;
            else if ("expected_frequency" === r1) e1[`${n} Frequency`] = a;
            else if ("INPUT" === t.tagName) {
                let r1 = t, i = new Set([
                    "checkbox",
                    "radio",
                    "file",
                    "hidden"
                ]);
                i.has(r1.type) ? e1[o] = a : e1[`${n} Amount`] = a;
            } else e1[o] = a;
            continue;
        }
        e1[o] = a;
    }
    return e1;
}
_c13 = N;
function $(e1) {
    return d((e1 || "").replace(/:\s*$/, ""));
}
function B(e1) {
    let t = {}, r1 = e1.querySelectorAll(".row");
    for (let e1 of r1){
        let r1 = e1.querySelectorAll(":scope > div");
        if (r1.length < 2) continue;
        let n = r1[0].querySelector("h6"), o = r1[1].querySelector("h6");
        if (!n || !o) continue;
        let i = n.textContent || "";
        if (!i.includes(":")) continue;
        let a = $(i), l = (o.textContent || "").trim();
        !a || !l || Object.prototype.hasOwnProperty.call(t, a) || (t[a] = l);
    }
    return t;
}
_c14 = B;
function q(e1) {
    let t = {}, r1 = e1.querySelectorAll("input, select, textarea");
    for (let e1 of r1){
        let r1 = "", n = e1.placeholder || e1.getAttribute("placeholder"), o = e1.getAttribute("name");
        if (n ? r1 = d(n) : o && (r1 = d(o.replace(/_/g, " "))), !r1) continue;
        let i = "";
        if (e1 instanceof HTMLInputElement) {
            if ("checkbox" === e1.type) i = e1.checked ? "Yes" : "No";
            else if ("radio" === e1.type) {
                if (!e1.checked) continue;
                i = e1.value || "Yes";
            } else i = e1.value || "";
        } else i = e1 instanceof HTMLSelectElement ? e1.options[e1.selectedIndex]?.textContent?.trim() || "" : e1.value || "";
        t[r1] = i;
    }
    return t;
}
function U(e1) {
    let t = document.querySelectorAll(".form-group"), r1 = [];
    for (let n of t)w(n) === e1 && n.querySelectorAll(".education-experience-item").forEach((e1)=>{
        r1.push(e1);
    });
    return r1;
}
_c15 = U;
function H(e1) {
    let t = U(e1), r1 = [];
    for (let e1 of t){
        let t = C(e1) ? q(e1) : B(e1);
        Object.keys(t).length > 0 && r1.push(t);
    }
    return r1;
}
_c16 = H;
function Y() {
    return H("education");
}
_c17 = Y;
function z() {
    return H("experience");
}
function V() {
    let e1 = Y(), t = z();
    return 0 === e1.length && 0 === t.length ? null : {
        education: e1,
        employment: t
    };
}
_c18 = V;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18;
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

},{}]},["lkVlI","7KSXI"], "7KSXI", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFBc0UsSUFBSSxJQUFFLEVBQUUsNEJBQTRCLEdBQUU7Z0JBQUcsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLElBQUk7Z0JBQUU7WUFBRSxJQUFHO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFO1lBQStCLElBQUcsTUFBSSxLQUFLLEdBQUU7Z0JBQUMsSUFBSSxJQUFFO2dCQUFFLEVBQUUsaUNBQStCLElBQUU7b0JBQUMsV0FBVSxJQUFJO29CQUFJLGVBQWMsQ0FBQztvQkFBRSxRQUFPLFNBQVMsQ0FBQzt3QkFBRSxPQUFPO29CQUFHO29CQUFFLHFCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFFO29CQUFFLG1CQUFrQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRTtvQkFBRSxzQkFBcUIsWUFBVztnQkFBQztZQUFDO1lBQUMsSUFBRyxFQUFFLFlBQVc7Z0JBQUMsUUFBUSxLQUFLO2dCQUE4SjtZQUFNO1lBQUMsSUFBSSxJQUFFLEVBQUU7WUFBTyxFQUFFLFNBQU8sU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLE1BQU0sSUFBSSxFQUFDO2dCQUFXLE9BQU8sT0FBTyxFQUFFLG1CQUFpQixjQUFZLE9BQU8sRUFBRSxxQkFBbUIsY0FBWSxFQUFFLElBQUksR0FBRSxJQUFHO1lBQUMsR0FBRSxFQUFFLFVBQVUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLE9BQU8sRUFBRSxtQkFBaUIsY0FBWSxPQUFPLEVBQUUscUJBQW1CLGNBQVksRUFBRSxJQUFJLEdBQUU7WUFBRTtZQUFHLElBQUksSUFBRSxFQUFFLG1CQUFrQixJQUFFLEVBQUUsdUJBQXFCLFlBQVc7WUFBRSxFQUFFLHNCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUksQ0FBQSxFQUFFLE9BQU8sSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLEdBQUUsRUFBQyxHQUFHLEVBQUUsTUFBTSxJQUFJLEVBQUM7WUFBVSxHQUFFLEVBQUUsb0JBQWtCLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO2dCQUFHLElBQUcsTUFBSSxLQUFLLEdBQUU7b0JBQUMsRUFBRSxJQUFJLEdBQUU7b0JBQUcsSUFBSSxJQUFFLEVBQUUsU0FBUSxJQUFFLEVBQUU7b0JBQVUsSUFBRyxNQUFJLE1BQUs7d0JBQUMsSUFBSSxJQUFFLEVBQUUsaUJBQWUsUUFBTSxFQUFFLGNBQWMsV0FBUyxRQUFNLEVBQUUsSUFBSSxJQUFHLElBQUUsRUFBRSxpQkFBZSxRQUFNLEVBQUUsY0FBYyxXQUFTO3dCQUFLLENBQUMsS0FBRyxJQUFHLENBQUEsRUFBRSxJQUFJLElBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxLQUFHLEtBQUksQ0FBQSxLQUFHLENBQUMsSUFBRyxDQUFBLEVBQUUsT0FBTyxJQUFHLElBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxDQUFDLEtBQUcsQ0FBQyxLQUFHLEtBQUcsRUFBRSxJQUFJLEVBQUM7b0JBQUUsT0FBTSxFQUFFLElBQUk7Z0JBQUU7Z0JBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxFQUFDO1lBQVU7UUFBRTtRQUFDLFNBQVM7WUFBSyxPQUFNLENBQUM7UUFBQztRQUFDLFNBQVM7WUFBSyxPQUFPLEVBQUU7UUFBSTtRQUFDLFNBQVM7WUFBTSxJQUFJLEdBQUUsR0FBRSxJQUFFLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFHLE9BQU8sS0FBRyxVQUFTLE9BQU8sS0FBSSxDQUFBLElBQUUsR0FBRSxJQUFFLE9BQU8sS0FBRyxVQUFTLEdBQUcsS0FBRyxRQUFPLENBQUEsT0FBTyxLQUFHLGNBQVksT0FBTyxLQUFHLFFBQU8sS0FBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLElBQUc7Z0JBQUUsQ0FBQyxLQUFHLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxFQUFFLEVBQUM7WUFBRTtRQUFFO1FBQUMsU0FBUyxHQUFHLENBQUM7WUFBRSxPQUFPLE9BQU87Z0JBQUcsS0FBSTtvQkFBWSxJQUFHLEVBQUUsYUFBVyxNQUFLO3dCQUFDLElBQUcsRUFBRSxVQUFVLGtCQUFpQixPQUFNLENBQUM7d0JBQUUsSUFBSSxJQUFFLE9BQU8sb0JBQW9CLEVBQUU7d0JBQVcsSUFBRyxFQUFFLFNBQU8sS0FBRyxDQUFDLENBQUMsRUFBRSxLQUFHLGlCQUFlLEVBQUUsVUFBVSxjQUFZLE9BQU8sV0FBVSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsSUFBSSxJQUFFLEVBQUUsUUFBTSxFQUFFO29CQUFZLE9BQU8sT0FBTyxLQUFHLFlBQVUsU0FBUyxLQUFLO2dCQUFHLEtBQUk7b0JBQVUsSUFBRyxLQUFHLE1BQUssT0FBTyxFQUFFLEdBQUU7d0JBQWEsS0FBSzt3QkFBRSxLQUFLOzRCQUFFLE9BQU0sQ0FBQzt3QkFBRTs0QkFBUSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsT0FBTSxDQUFDO2dCQUFFO29CQUFRLE9BQU0sQ0FBQztZQUFDO1FBQUM7UUFBQyxFQUFFLHVCQUFxQixJQUFHLEVBQUUsaUNBQStCLEdBQUUsRUFBRSxzQ0FBb0MsSUFBRyxFQUFFLDRCQUEwQixJQUFHLEVBQUUsZ0JBQWMsR0FBRSxFQUFFLGtCQUFnQixHQUFFLEVBQUUseUJBQXVCLElBQUcsRUFBRSx1QkFBcUIsSUFBRyxFQUFFLHdCQUFzQixJQUFHLEVBQUUsc0JBQW9CLEdBQUUsRUFBRSxXQUFTLEdBQUUsRUFBRSxlQUFhO0lBQUMsQ0FBQTtBQUFJO0FBQUcsSUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFHO0lBQUs7SUFBYSxFQUFFLFVBQVE7QUFBRztBQUFHLElBQUksSUFBRSxDQUFDO0FBQUUsR0FBRyxHQUFFO0lBQUMsU0FBUSxJQUFJO0FBQUU7QUFBRyxPQUFPLFVBQVEsR0FBRztBQUFHLElBQUksSUFBRSxFQUFFO0FBQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxPQUFPO0FBQVMsSUFBSSxLQUFHLEVBQUUsU0FDcDVMOzs7Ozs7Ozs7Ozs7QUFZQTs7O0FDYkE7Ozs7Ozs7Q0FPQyxHQUVELElBQUksSUFBRSxFQUFFO0FBQWtELEVBQUUsa0JBQWtCLElBQUcsRUFBRSxPQUFPLEdBQUUsZ0JBQWUsSUFBSSxJQUFHLEVBQUUsT0FBTyxHQUFFLHdCQUF1QixJQUFJLElBQUcsRUFBRSxPQUFPLEdBQUUsb0JBQW1CLElBQUksSUFBRyxFQUFFLE9BQU8sR0FBRSw0QkFBMkIsSUFBSSxJQUFHLEVBQUUsT0FBTyxHQUFFLHFCQUFvQixJQUFJLElBQUcsRUFBRSxPQUFPLEdBQUUsc0JBQXFCLElBQUksSUFBRyxFQUFFLE9BQU8sR0FBRSxtQkFBa0IsSUFBSSxJQUFHLEVBQUUsT0FBTyxHQUFFLHdCQUF1QixJQUFJLElBQUcsRUFBRSxPQUFPLEdBQUUseUJBQXdCLElBQUksSUFBRyxFQUFFLE9BQU8sR0FBRSwrQkFBOEIsSUFBSTtBQUFHLElBQUksSUFBRSxFQUFFLGdCQUFlLElBQUUsRUFBRTtBQUFnQixlQUFlLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxFQUFFO0lBQUMsSUFBRyxhQUFXLEdBQUUsU0FBUSxPQUFPLE1BQU0sS0FBSyxHQUFFLFNBQVMsUUFBUSxDQUFBO1FBQUksR0FBRSxTQUFPLE9BQUssR0FBRSxTQUFPLEVBQUUsS0FBSyxHQUFFLGFBQWEsVUFBUSxHQUFFO0lBQU0sSUFBRztJQUFFLElBQUksS0FBRSxHQUFFO0lBQW1CLElBQUcsTUFBRyxVQUFRLEdBQUUsU0FBUTtRQUFDLElBQUksS0FBRSxHQUFFLGlCQUFpQjtRQUFVLEdBQUUsUUFBUSxDQUFBO1lBQUksSUFBSSxLQUFFLEdBQUUsY0FBYztZQUFPLElBQUcsSUFBRTtnQkFBQyxJQUFJLEtBQUUsR0FBRSxhQUFhO2dCQUFPLE1BQUcsRUFBRSxLQUFLO1lBQUU7UUFBQztJQUFFO0lBQUMsT0FBTztBQUFDO0FBQUMsU0FBUyxFQUFFLEVBQUM7SUFBRSxJQUFJLElBQUUsR0FBRSxRQUFRO0lBQXVCLElBQUcsR0FBRSxPQUFPO0lBQUUsSUFBSSxLQUFFLEdBQUUsUUFBUTtJQUFlLElBQUcsSUFBRTtRQUFDLElBQUksSUFBRSxNQUFNLEtBQUssR0FBRSxpQkFBaUIsd0JBQXdCLE9BQU8sQ0FBQSxJQUFHLEVBQUUsU0FBTyxHQUFFO1FBQU0sSUFBRyxFQUFFLFNBQU8sR0FBRSxPQUFPO0lBQUM7SUFBQyxJQUFJLElBQUUsR0FBRSxlQUFjLElBQUUsTUFBTSxLQUFLLEVBQUUsaUJBQWlCLHdCQUF3QixPQUFPLENBQUEsSUFBRyxFQUFFLFNBQU8sR0FBRTtJQUFNLElBQUcsRUFBRSxTQUFPLEdBQUU7UUFBQyxJQUFJLEtBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRO1FBQWUsT0FBTyxNQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsaUJBQWUsU0FBUztJQUFJO0lBQUMsT0FBTyxHQUFFLGlCQUFlLFNBQVM7QUFBSTtBQUFDLFNBQVMsRUFBRSxFQUFDO0lBQUUsSUFBSSxJQUFFLEdBQUUsaUJBQWlCLHdCQUF1QixLQUFFLEVBQUU7SUFBQyxPQUFPLEVBQUUsUUFBUSxDQUFBO1FBQUksSUFBSSxJQUFFLElBQUcsSUFBRSxHQUFFLFFBQVE7UUFBUyxJQUFHLEdBQUcsZUFBYyxDQUFBLElBQUUsRUFBRSxFQUFFLFlBQVcsR0FBRyxDQUFDLEdBQUU7WUFBQyxJQUFJLEtBQUUsRUFBRTtZQUFHLElBQUcsZUFBYyxDQUFBLElBQUUsRUFBRSxHQUFFLFlBQVc7UUFBRTtRQUFDLElBQUcsQ0FBQyxLQUFHLEdBQUUsb0JBQW1CO1lBQUMsSUFBSSxLQUFFLEdBQUU7WUFBbUIsWUFBVSxHQUFFLFdBQVMsR0FBRSxlQUFjLENBQUEsSUFBRSxFQUFFLEdBQUUsWUFBVztRQUFFO1FBQUMsS0FBSSxDQUFBLElBQUUsRUFBRSxHQUFFLE1BQUssR0FBRyxLQUFHLENBQUMsR0FBRSxTQUFTLE1BQUksR0FBRSxLQUFLO0lBQUUsSUFBRztBQUFDO0FBQUMsZUFBZTtJQUFJLElBQUksS0FBRSxFQUFFLEVBQUMsSUFBRTtJQUFJLElBQUcsQ0FBQyxHQUFFLE9BQU87SUFBRSxNQUFNLEVBQUU7SUFBRyxJQUFJLEtBQUUsRUFBRSxpQkFBaUIsNEJBQTJCLElBQUUsSUFBSSxLQUFJLElBQUUsSUFBSTtJQUFJLEtBQUksSUFBSSxLQUFLLEdBQUU7UUFBQyxJQUFHLEVBQUUsSUFBRztRQUFTLElBQUcsWUFBVSxFQUFFLFdBQVMsWUFBVSxFQUFFLE1BQUs7WUFBQyxJQUFJLEtBQUUsRUFBRTtZQUFLLElBQUcsTUFBRyxFQUFFLElBQUksS0FBRztRQUFRO1FBQUMsSUFBRyxZQUFVLEVBQUUsV0FBUyxlQUFhLEVBQUUsUUFBTSxFQUFFLE1BQUs7WUFBQyxJQUFJLEtBQUUsRUFBRTtZQUFLLElBQUcsRUFBRSxJQUFJLEtBQUc7WUFBUyxFQUFFLElBQUk7WUFBRyxJQUFJLElBQUUsTUFBTSxLQUFLLEVBQUUsaUJBQWlCLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxPQUFPLElBQUcsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFBLEtBQUcsQ0FBQyxFQUFFO1lBQUksSUFBRyxFQUFFLFNBQU8sR0FBRTtnQkFBQyxJQUFJLElBQUUsRUFBRSxRQUFRLGdCQUFlLElBQUUsR0FBRyxjQUFjLHFCQUFtQixNQUFLLElBQUUsSUFBRSxFQUFFLEVBQUUsZUFBYSxNQUFJLElBQUUsSUFBRSxFQUFFLEdBQUUsSUFBRyxJQUFFLEVBQUUsSUFBSSxDQUFBO29CQUFJLElBQUksSUFBRSxHQUFFLFFBQVE7b0JBQVMsT0FBTyxFQUFFLEdBQUcsZUFBYSxHQUFFLFNBQU87Z0JBQUcsR0FBRyxPQUFPO2dCQUFTLEdBQUUsS0FBSztvQkFBQyxPQUFNO29CQUFFLE1BQUssRUFBRSxXQUFXO29CQUFTLFVBQVM7b0JBQUUsUUFBTyxDQUFDLENBQUMsRUFBRTtvQkFBQyxZQUFXO29CQUFFLFNBQVE7Z0JBQUM7Z0JBQUc7WUFBUTtRQUFDO1FBQUMsSUFBSSxLQUFFLE1BQU0sRUFBRTtRQUFHLElBQUcsTUFBSSxDQUFBLEdBQUUsS0FBSyxLQUFHLFlBQVUsRUFBRSxXQUFTLFlBQVUsRUFBRSxJQUFHLEdBQUc7WUFBQyxJQUFJLEtBQUUsRUFBRTtZQUFLLE1BQUcsRUFBRSxJQUFJO1FBQUU7SUFBQztJQUFDLE1BQU0sRUFBRTtJQUFHLElBQUksSUFBRSxNQUFNO0lBQUksR0FBRSxRQUFRO0lBQUcsSUFBSSxJQUFFLE1BQU07SUFBSSxPQUFPLEdBQUUsUUFBUSxJQUFHO0FBQUM7QUFBQyxTQUFTO0lBQUksSUFBSSxLQUFFLFNBQVMsY0FBYztJQUFRLElBQUcsSUFBRTtRQUFDLElBQUksSUFBRSxHQUFFLGlCQUFpQjtRQUEyQixJQUFHLEVBQUUsU0FBTyxHQUFFLE9BQU87SUFBQztJQUFDLElBQUksSUFBRSxNQUFNLEtBQUssU0FBUyxpQkFBaUIsTUFBTSxPQUFPLENBQUEsS0FBRyxHQUFFO0lBQVksS0FBSSxJQUFJLE1BQUssRUFBRTtRQUFDLElBQUksSUFBRSxHQUFFLFlBQVcsS0FBRSxFQUFFLGNBQWM7UUFBUSxJQUFHLElBQUUsT0FBTztRQUFFLElBQUksSUFBRSxFQUFFLGlCQUFpQjtRQUFxQyxJQUFHLEVBQUUsU0FBTyxHQUFFLE9BQU87SUFBQztJQUFDLE9BQU87QUFBSTtBQUFDLFNBQVMsRUFBRSxFQUFDO0lBQUUsT0FBTSxBQUFDLENBQUEsTUFBRyxFQUFDLEVBQUcsUUFBUSxXQUFVLElBQUksUUFBUSxRQUFPLEtBQUs7QUFBTTtBQUFDLFNBQVMsRUFBRSxFQUFDO0lBQUUsT0FBTyxFQUFFLElBQUcsY0FBYyxTQUFTO0FBQWU7QUFBQyxTQUFTLEVBQUUsS0FBRSxHQUFHO0lBQUUsSUFBRyxDQUFDLElBQUUsT0FBTztJQUFLLElBQUksSUFBRSxHQUFFLGlCQUFpQjtJQUFZLEtBQUksSUFBSSxNQUFLLEVBQUU7UUFBQyxJQUFJLElBQUUsRUFBRTtRQUFHLElBQUcsRUFBRSxHQUFHLGdCQUFjLEVBQUUsR0FBRSxnQkFBYyxFQUFFLEdBQUUsYUFBYSxrQkFBZ0IsRUFBRSxHQUFFLFNBQU8sRUFBRSxHQUFFLEtBQUksT0FBTztJQUFDO0lBQUMsT0FBTztBQUFJO0FBQUMsU0FBUztJQUFJLElBQUksS0FBRTtJQUFJLElBQUcsQ0FBQyxJQUFFLE9BQU07SUFBRyxJQUFJLElBQUUsRUFBRSxLQUFHLEtBQUUsRUFBRSxJQUFFLE1BQUksR0FBRSxZQUFVLFdBQVMsR0FBRSxhQUFhO0lBQWlCLE9BQU8sS0FBRSxhQUFXO0FBQVU7QUFBQyxTQUFTLEVBQUUsRUFBQztJQUFFLE9BQU0scUJBQW1CLE1BQUcsMEJBQXdCO0FBQUM7QUFBQyxJQUFJLElBQUUsOERBQTZELElBQUU7QUFBcUYsZUFBZSxFQUFFLEVBQUM7SUFBRSxJQUFJLEdBQUU7SUFBRSxJQUFJLElBQUUsRUFBRSxLQUFHLElBQUUsR0FBRSxlQUFhLEdBQUUsYUFBYSxnQkFBZSxJQUFFLElBQUUsRUFBRSxFQUFFLGVBQWEsTUFBSSxFQUFFO0lBQUcsSUFBRyxDQUFDLEdBQUUsT0FBTztJQUFLLElBQUksSUFBRSxFQUFFO0lBQWMsSUFBRyxhQUFXLEdBQUUsT0FBTztJQUFLLElBQUksSUFBRSxFQUFFO0lBQUcsSUFBRyxLQUFHLGFBQVcsR0FBRSxTQUFRLE9BQU87SUFBSyxJQUFJLElBQUUsRUFBRSxJQUFFLElBQUcsSUFBRTtJQUFLLElBQUcsWUFBVSxHQUFFLFNBQVE7UUFBQyxJQUFJLEtBQUU7UUFBRSxJQUFHLFdBQVMsR0FBRSxNQUFLLE9BQU87UUFBSyxJQUFFLGVBQWEsR0FBRSxPQUFLLEVBQUUsV0FBVyxXQUFTLFlBQVUsR0FBRSxPQUFLLEVBQUUsV0FBVyxhQUFXLEdBQUUsVUFBVSxTQUFTLG1CQUFpQixFQUFFLFdBQVcsT0FBSyxFQUFFLFdBQVcsTUFBSyxJQUFFO0lBQUMsT0FBTSxJQUFHLGFBQVcsR0FBRSxTQUFRLElBQUUsRUFBRSxXQUFXLFFBQU8sSUFBRTtTQUFNO1FBQUMsSUFBRyxlQUFhLEdBQUUsU0FBUSxPQUFPO1FBQUssSUFBRSxFQUFFLFdBQVcsTUFBSyxJQUFFO0lBQUM7SUFBQyxJQUFJLElBQUUsRUFBRTtJQUFDLE1BQUksRUFBRSxXQUFXLFVBQVMsQ0FBQSxJQUFFLE1BQU0sRUFBRSxFQUFDO0lBQUcsSUFBSSxJQUFFO0lBQUssSUFBRyxNQUFJLEVBQUUsV0FBVyxZQUFXO1FBQUMsSUFBRSxFQUFFLElBQUUsRUFBRTtRQUFJLElBQUksSUFBRSxFQUFFLGlCQUFpQix1QkFBdUIsUUFBTyxLQUFFO1lBQUMsTUFBSyxHQUFFLFFBQU07WUFBWSxVQUFTLEVBQUU7WUFBUSxZQUFXO1lBQUUsYUFBWSxFQUFFO1FBQU07UUFBRSxNQUFJLEVBQUUsU0FBTyxRQUFRLEtBQUsscUNBQWtFLE1BQUcsUUFBUSxNQUFNLHFDQUFrRTtJQUFFO0lBQUMsTUFBSSxFQUFFLFdBQVcsUUFBTyxDQUFBLEtBQUUsWUFBVyxHQUFHLE1BQUksRUFBRSxHQUFHLGlCQUFnQixDQUFBLEtBQUUsQ0FBQSxHQUFHLEtBQUcsTUFBSSxFQUFFLFdBQVcsUUFBTyxDQUFBLEtBQUUsdUlBQXNJO0lBQUcsSUFBSSxJQUFFO1FBQUMsT0FBTTtRQUFFLE1BQUs7UUFBRSxVQUFTO1FBQUUsUUFBTztJQUFDO0lBQUUsT0FBTyxNQUFJLEVBQUUsV0FBVyxRQUFNLE1BQUksRUFBRSxXQUFXLFFBQU8sQ0FBQSxFQUFFLFVBQVEsQ0FBQSxHQUFHLE1BQUksQ0FBQSxFQUFFLGNBQVksRUFBQSxHQUFHLE1BQUksRUFBRSxXQUFXLGNBQVksS0FBSSxDQUFBLEVBQUUsU0FBTyxHQUFFLEVBQUUsZUFBYSxDQUFBLEdBQUc7QUFBQztBQUFDLFNBQVMsRUFBRSxFQUFDO0lBQUUsT0FBTSxDQUFDLENBQUMsR0FBRSxRQUFRO0FBQTZCO0FBQUMsU0FBUyxFQUFFLEVBQUM7SUFBRSxJQUFJLElBQUUsR0FBRSxjQUFjLG1CQUFtQixhQUFhLGlCQUFlLElBQUcsS0FBRSxNQUFNLEtBQUssR0FBRSxpQkFBaUIsV0FBVyxJQUFJLENBQUEsS0FBRyxHQUFFLGFBQWEsT0FBTyxpQkFBZTtJQUFJLElBQUcsR0FBRSxLQUFLLENBQUEsS0FBRyxHQUFFLFNBQVMsVUFBUSxHQUFFLFNBQVMsZUFBYyxPQUFNO0lBQVksSUFBRyxHQUFFLEtBQUssQ0FBQSxLQUFHLEdBQUUsU0FBUyxVQUFRLEdBQUUsU0FBUyxnQkFBZSxPQUFNO0lBQWEsSUFBSSxJQUFFLEdBQUUsY0FBYztJQUE4QixJQUFHLEdBQUU7UUFBQyxJQUFHLEVBQUUsY0FBYyxxRUFBb0UsT0FBTTtRQUFZLElBQUcsRUFBRSxjQUFjLGlJQUFnSSxPQUFNO1FBQWEsSUFBSSxLQUFFLEVBQUUsRUFBRSxhQUFhO1FBQWMsSUFBRyxzQkFBc0IsS0FBSyxLQUFHLE9BQU07UUFBWSxJQUFHLCtCQUErQixLQUFLLEtBQUcsT0FBTTtJQUFZO0lBQUMsT0FBTyxFQUFFLFNBQVMsZUFBYSxjQUFZLEVBQUUsU0FBUyxnQkFBYyxlQUFhO0FBQUk7QUFBQyxTQUFTLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxNQUFNLEtBQUssR0FBRSxpQkFBaUI7SUFBVyxPQUFPLEVBQUUsS0FBSyxDQUFBO1FBQUksSUFBSSxJQUFFLEdBQUUsYUFBYSxPQUFPLGlCQUFlO1FBQUcsT0FBTSxDQUFDLENBQUUsQ0FBQSxFQUFFLFNBQVMsYUFBVyxFQUFFLFNBQVMsYUFBVyxHQUFFLFVBQVUsY0FBYyxTQUFTLGFBQVksS0FBSSxDQUFDLENBQUMsR0FBRSxjQUFjO0lBQXFDLE1BQUk7QUFBSTtLQUEzUjtBQUE0UixTQUFTLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxNQUFNLEtBQUssR0FBRSxpQkFBaUI7SUFBVyxPQUFPLEVBQUUsS0FBSyxDQUFBO1FBQUksSUFBSSxJQUFFLEdBQUUsYUFBYSxPQUFPLGlCQUFlO1FBQUcsT0FBTSxDQUFDLENBQUUsQ0FBQSxXQUFTLEtBQUcsRUFBRSxTQUFTLE9BQU0sS0FBSSxDQUFDLENBQUMsR0FBRSxjQUFjO0lBQTJCLE1BQUk7QUFBSTtNQUFuTjtBQUFvTixTQUFTLEVBQUUsRUFBQyxFQUFDLENBQUM7SUFBRSxPQUFPLE1BQU0sS0FBSyxHQUFFLGlCQUFpQixXQUFXLEtBQUssQ0FBQTtRQUFJLElBQUksS0FBRSxHQUFFLGFBQWEsT0FBTyxpQkFBZTtRQUFHLE9BQU8sR0FBRSxTQUFTLFVBQVEsR0FBRSxTQUFTO0lBQUUsTUFBSTtBQUFJO0FBQUMsU0FBUyxFQUFFLEVBQUM7SUFBRSxPQUFNLENBQUMsQ0FBQyxHQUFFLGNBQWM7QUFBMEI7TUFBdkQ7QUFBd0QsZUFBZSxFQUFFLEVBQUM7SUFBRSxJQUFJLElBQUUsR0FBRSxpQkFBaUI7SUFBMkIsS0FBSSxJQUFJLE1BQUssRUFBRTtRQUFDLElBQUcsY0FBYSxrQkFBaUI7WUFBQyxJQUFHLGVBQWEsR0FBRSxRQUFNLFlBQVUsR0FBRSxNQUFLO2dCQUFDLEdBQUUsV0FBVSxDQUFBLEdBQUUsVUFBUSxDQUFDLEdBQUUsR0FBRSxjQUFjLElBQUksTUFBTSxVQUFTO29CQUFDLFNBQVEsQ0FBQztnQkFBQyxHQUFFO2dCQUFHO1lBQVE7WUFBQyxJQUFHLFdBQVMsR0FBRSxNQUFLO1lBQVMsR0FBRSxRQUFNLElBQUcsR0FBRSxjQUFjLElBQUksTUFBTSxTQUFRO2dCQUFDLFNBQVEsQ0FBQztZQUFDLEtBQUksR0FBRSxjQUFjLElBQUksTUFBTSxVQUFTO2dCQUFDLFNBQVEsQ0FBQztZQUFDO1lBQUk7UUFBUTtRQUFDLElBQUcsY0FBYSxtQkFBa0I7WUFBQyxHQUFFLGdCQUFjLEdBQUUsR0FBRSxjQUFjLElBQUksTUFBTSxVQUFTO2dCQUFDLFNBQVEsQ0FBQztZQUFDO1lBQUk7UUFBUTtRQUFDLEdBQUUsUUFBTSxJQUFHLEdBQUUsY0FBYyxJQUFJLE1BQU0sU0FBUTtZQUFDLFNBQVEsQ0FBQztRQUFDLEtBQUksR0FBRSxjQUFjLElBQUksTUFBTSxVQUFTO1lBQUMsU0FBUSxDQUFDO1FBQUM7SUFBRztBQUFDO01BQTNsQjtBQUE0bEIsZUFBZSxFQUFFLEVBQUM7SUFBRSxJQUFJLElBQUUsR0FBRSxpQkFBaUI7SUFBZSxLQUFJLElBQUksTUFBSyxFQUFFO1FBQUMsSUFBSSxJQUFFLEVBQUU7UUFBRyxJQUFHLENBQUMsR0FBRTtRQUFTLElBQUksS0FBRSxNQUFNLEtBQUssR0FBRSxpQkFBaUI7UUFBK0IsSUFBRyxNQUFJLEdBQUUsUUFBTztRQUFTLElBQUksSUFBSSxLQUFFLEdBQUUsU0FBTyxHQUFFLE1BQUcsR0FBRSxLQUFJO1lBQUMsSUFBSSxJQUFFLEVBQUUsRUFBQyxDQUFDLEdBQUU7WUFBRSxLQUFJLENBQUEsRUFBRSxTQUFRLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsSUFBRztRQUFFO1FBQUMsSUFBSSxJQUFFLEFBQUMsQ0FBQSxLQUFFLE1BQU0sS0FBSyxHQUFFLGlCQUFpQiw4QkFBNkIsQ0FBRSxDQUFDLEVBQUU7UUFBQyxJQUFHLEdBQUU7WUFBQyxJQUFHLENBQUMsRUFBRSxJQUFHO2dCQUFDLElBQUksS0FBRSxFQUFFO2dCQUFHLE1BQUksQ0FBQSxHQUFFLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxJQUFHO1lBQUU7WUFBQyxJQUFHLElBQUUsQUFBQyxDQUFBLEtBQUUsTUFBTSxLQUFLLEdBQUUsaUJBQWlCLDhCQUE2QixDQUFFLENBQUMsRUFBRSxFQUFDO2dCQUFDLElBQUcsQ0FBQyxFQUFFLElBQUc7b0JBQUMsSUFBSSxJQUFFLEVBQUUsSUFBRTtvQkFBRyxLQUFJLENBQUEsRUFBRSxTQUFRLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsSUFBRyxHQUFHLEtBQUUsTUFBTSxLQUFLLEdBQUUsaUJBQWlCO29CQUErQixJQUFJLElBQUUsR0FBRSxLQUFLLENBQUEsS0FBRyxFQUFFO29CQUFJLEtBQUcsTUFBTSxFQUFFO29CQUFHO2dCQUFRO2dCQUFDLE1BQU0sRUFBRTtZQUFFO1FBQUM7SUFBQztBQUFDO0FBQUMsZUFBZSxFQUFFLEVBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxHQUFFLGNBQWMsK0JBQThCO0lBQU8sSUFBSSxLQUFFLE1BQU0sS0FBSyxHQUFFLGlCQUFpQixXQUFXLEtBQUssQ0FBQTtRQUFJLElBQUksS0FBRSxHQUFFLGFBQWEsT0FBTyxpQkFBZTtRQUFHLE9BQU8sR0FBRSxTQUFTLFVBQVEsR0FBRSxTQUFTO0lBQUU7SUFBRyxNQUFJLENBQUEsR0FBRSxTQUFRLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsSUFBRztBQUFFO01BQXBQO0FBQXFQLGVBQWUsRUFBRSxFQUFDO0lBQUUsSUFBSSxJQUFFLEdBQUUsaUJBQWlCO0lBQWUsS0FBSSxJQUFJLE1BQUssRUFBRSxpQkFBZSxFQUFFLE9BQUksTUFBTSxFQUFFLElBQUU7SUFBYyxLQUFJLElBQUksTUFBSyxFQUFFLGdCQUFjLEVBQUUsT0FBSSxNQUFNLEVBQUUsSUFBRTtBQUFZO01BQWxLO0FBQW1LLGVBQWUsRUFBRSxFQUFDLEVBQUMsSUFBRSxDQUFDLENBQUM7SUFBRSxJQUFJLEtBQUUsRUFBRSxFQUFDLElBQUUsR0FBRSxpQkFBaUI7SUFBMkIsS0FBSSxJQUFJLE1BQUssRUFBRTtRQUFDLElBQUksSUFBRSxFQUFFLG9DQUFrQyxFQUFFLE1BQUcsTUFBSyxJQUFFLE1BQU0sRUFBRTtRQUFHLElBQUcsQ0FBQyxLQUFHLEVBQUUscUNBQW9DLENBQUEsSUFBRSxNQUFNLEVBQUUsR0FBQyxHQUFHLENBQUMsR0FBRTtRQUFTLElBQUksSUFBRSxHQUFFLGVBQWEsR0FBRSxhQUFhLGdCQUFlLElBQUUsRUFBRTtRQUFHLElBQUUsRUFBRSxRQUFNLElBQUUsS0FBRyxFQUFFLFNBQU8sRUFBRSxXQUFXLFVBQVMsQ0FBQSxFQUFFLFFBQU0sQ0FBQSxHQUFHLEdBQUUsS0FBSztJQUFFO0lBQUMsT0FBTztBQUFDO01BQWhXO0FBQWlXLFNBQVMsRUFBRSxFQUFDO0lBQUUsSUFBRyxhQUFXLEdBQUUsU0FBUSxPQUFPO0lBQUssSUFBSSxJQUFFLElBQUUsS0FBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFO0lBQUMsSUFBRyxDQUFDLElBQUUsT0FBTztJQUFLLElBQUksSUFBRSxFQUFFLEdBQUUsZUFBYTtJQUFJLE9BQU0sdUJBQXFCLEVBQUUsaUJBQWUsT0FBSyxHQUFFLFFBQU0sT0FBSztBQUFDO0FBQUMsZUFBZSxFQUFFLEVBQUM7SUFBRSxJQUFHLGFBQVcsR0FBRSxTQUFRLE9BQU87SUFBSyxJQUFJLElBQUUsSUFBRSxLQUFFLEVBQUU7SUFBRyxJQUFHLENBQUMsSUFBRSxPQUFPO0lBQUssSUFBSSxJQUFFLElBQUUsSUFBRSxFQUFFLEdBQUUsRUFBRSxLQUFJLElBQUUsTUFBTSxFQUFFO0lBQUcsT0FBTTtRQUFDLE9BQU07UUFBRSxNQUFLLEVBQUUsV0FBVztRQUFPLFVBQVM7UUFBRSxRQUFPO1FBQUUsU0FBUTtJQUFDO0FBQUM7TUFBakw7QUFBa0wsU0FBUyxFQUFFLEVBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxFQUFDLEtBQUUsU0FBUyxpQkFBaUI7SUFBZSxLQUFJLElBQUksS0FBSyxHQUFFLElBQUcsRUFBRSxPQUFLLElBQUU7UUFBQyxJQUFJLEtBQUUsRUFBRSxpQkFBaUI7UUFBOEIsR0FBRSxRQUFRLENBQUEsS0FBRyxFQUFFLEtBQUs7SUFBRztJQUFDLE9BQU87QUFBQztNQUE1SztBQUE2SyxlQUFlO0lBQUksSUFBSSxLQUFFLEVBQUUsRUFBQyxJQUFFLEVBQUU7SUFBYSxLQUFJLElBQUksTUFBSyxFQUFFO1FBQUMsSUFBSSxJQUFFLEdBQUUsUUFBUSxnQkFBZSxJQUFFLEdBQUcsY0FBYyxtQkFBa0IsSUFBRSxFQUFFLElBQUUsSUFBRyxJQUFFLE1BQU0sRUFBRSxLQUFHLElBQUUsRUFBRSxJQUFJLENBQUEsS0FBSSxDQUFBO2dCQUFDLE9BQU0sR0FBRTtnQkFBTSxNQUFLLEdBQUU7Z0JBQUssR0FBRyxHQUFFLFVBQVE7b0JBQUMsU0FBUSxHQUFFO2dCQUFPLElBQUUsQ0FBQyxDQUFDO1lBQUEsQ0FBQTtRQUFJLEdBQUUsS0FBSztZQUFDLE9BQU07WUFBWSxNQUFLLEVBQUUsV0FBVztZQUFVLFVBQVM7WUFBRSxVQUFTO1lBQUUsU0FBUTtRQUFDO0lBQUU7SUFBQyxPQUFPO0FBQUM7QUFBQyxlQUFlO0lBQUksSUFBSSxLQUFFLEVBQUUsRUFBQyxJQUFFLEVBQUU7SUFBYyxLQUFJLElBQUksTUFBSyxFQUFFO1FBQUMsSUFBSSxJQUFFLEdBQUUsUUFBUSxnQkFBZSxJQUFFLEdBQUcsY0FBYyxtQkFBa0IsSUFBRSxFQUFFLElBQUUsSUFBRyxJQUFFLE1BQU0sRUFBRSxJQUFFO1lBQUMsbUNBQWtDLENBQUM7UUFBQyxJQUFHLElBQUUsRUFBRSxJQUFJLENBQUEsS0FBSSxDQUFBO2dCQUFDLE9BQU0sR0FBRTtnQkFBTSxNQUFLLEdBQUU7Z0JBQUssR0FBRyxHQUFFLFVBQVE7b0JBQUMsU0FBUSxHQUFFO2dCQUFPLElBQUUsQ0FBQyxDQUFDO1lBQUEsQ0FBQTtRQUFJLEdBQUUsS0FBSztZQUFDLE9BQU07WUFBYSxNQUFLLEVBQUUsV0FBVztZQUFXLFVBQVM7WUFBRSxVQUFTO1lBQUUsU0FBUTtRQUFDO0lBQUU7SUFBQyxPQUFPO0FBQUM7TUFBaFc7QUFBaVcsU0FBUyxFQUFFLEVBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxHQUFFO1FBQUMsSUFBSSxLQUFFLEVBQUUsaUJBQWlCO1FBQVEsS0FBSSxJQUFJLEtBQUssR0FBRSxJQUFHLEVBQUUsYUFBYSxXQUFTLEtBQUksT0FBTSxDQUFDO0lBQUM7SUFBQyxPQUFNLENBQUMsQ0FBRSxDQUFBLEdBQUUsYUFBYSxlQUFhLEdBQUcsYUFBYSxjQUFjLFNBQVMsV0FBVTtBQUFFO09BQTdMO0FBQThMLFNBQVMsRUFBRSxFQUFDO0lBQUUsSUFBSSxJQUFFLEdBQUU7SUFBRyxJQUFHLENBQUMsR0FBRSxPQUFPO0lBQUssSUFBSSxLQUFFLEdBQUU7SUFBYyxJQUFHLG1CQUFrQixJQUFFO1FBQUMsSUFBSSxLQUFFLEdBQUUsY0FBYyxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUFFLElBQUcsSUFBRSxPQUFPO0lBQUM7SUFBQyxJQUFJLElBQUUsU0FBUyxjQUFjLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQUUsT0FBTyxLQUFHO0FBQUk7T0FBek07QUFBME0sU0FBUyxFQUFFLEVBQUM7SUFBRSxJQUFJLElBQUUsRUFBRTtJQUFHLElBQUcsR0FBRSxPQUFPO0lBQUUsSUFBSSxLQUFFLEdBQUU7SUFBdUIsTUFBSyxJQUFHO1FBQUMsSUFBRyxZQUFVLEdBQUUsU0FBUSxPQUFPO1FBQUUsS0FBRSxHQUFFO0lBQXNCO0lBQUMsSUFBRyxZQUFVLEdBQUUsV0FBUyxlQUFhLEdBQUUsTUFBSztRQUFDLElBQUksSUFBRSxHQUFFO1FBQW1CLE1BQUssR0FBRztZQUFDLElBQUcsQUFBQyxDQUFBLFdBQVMsRUFBRSxXQUFTLFlBQVUsRUFBRSxPQUFNLEtBQUksRUFBRSxhQUFhLFFBQU8sT0FBTztZQUFFLElBQUUsRUFBRTtRQUFrQjtRQUFDLElBQUksS0FBRSxHQUFFO1FBQWMsSUFBRyxNQUFHLEdBQUUsYUFBYSxRQUFPLE9BQU87SUFBQztJQUFDLElBQUksSUFBRSxHQUFFLFFBQVE7SUFBZSxJQUFHLEdBQUU7UUFBQyxJQUFJLElBQUUsR0FBRSxRQUFRO1FBQW1CLElBQUcsR0FBRTtZQUFDLElBQUksS0FBRSxFQUFFLGNBQWM7WUFBUyxJQUFHLElBQUUsT0FBTztRQUFDO1FBQUMsSUFBSSxLQUFFLEVBQUUsY0FBYztRQUFTLElBQUcsSUFBRSxPQUFPO0lBQUM7SUFBQyxJQUFJLElBQUUsR0FBRTtJQUFjLE1BQUssR0FBRztRQUFDLElBQUksS0FBRSxFQUFFO1FBQXVCLE1BQUssSUFBRztZQUFDLElBQUksSUFBRSxHQUFFLGNBQWM7WUFBUyxJQUFHLEdBQUcsYUFBYSxRQUFPLE9BQU87WUFBRSxLQUFFLEdBQUU7UUFBc0I7UUFBQyxJQUFFLEVBQUU7SUFBYTtJQUFDLE9BQU87QUFBSTtPQUExdEI7QUFBMnRCLGVBQWU7SUFBSSxJQUFJLEtBQUUsQ0FBQyxHQUFFLElBQUUsT0FBSyxVQUFTLEtBQUUsRUFBRSxpQkFBaUI7SUFBMkIsS0FBSSxJQUFJLEtBQUssR0FBRTtRQUFDLElBQUksS0FBRSxFQUFFLElBQUcsSUFBRSxFQUFFLGVBQWEsRUFBRSxhQUFhLGdCQUFlLElBQUUsS0FBRSxFQUFFLEdBQUUsZUFBYSxNQUFJLEVBQUU7UUFBRyxJQUFHLENBQUMsR0FBRTtRQUFTLElBQUksSUFBRSxFQUFFLGVBQWMsSUFBRTtRQUFHLElBQUcsWUFBVSxFQUFFLFNBQVE7WUFBQyxJQUFJLEtBQUU7WUFBRSxJQUFHLGVBQWEsR0FBRSxNQUFLLElBQUUsR0FBRSxVQUFRLFFBQU07aUJBQVUsSUFBRyxZQUFVLEdBQUUsTUFBSztnQkFBQyxJQUFJLElBQUUsU0FBUyxjQUFjLENBQUMsMEJBQTBCLEVBQUUsR0FBRSxLQUFLLFVBQVUsQ0FBQztnQkFBRSxJQUFFLEdBQUcsU0FBTztZQUFFLE9BQU0sSUFBRSxHQUFFLFNBQU87UUFBRSxPQUFNLElBQUcsYUFBVyxFQUFFLFNBQVE7WUFBQyxJQUFJLEtBQUU7WUFBRSxJQUFFLEdBQUUsT0FBTyxDQUFDLEdBQUUsY0FBYyxFQUFFLGFBQWEsVUFBUTtRQUFFLE9BQU0sSUFBRyxlQUFhLEVBQUUsU0FBUTtZQUFDLElBQUksS0FBRTtZQUFFLElBQUUsR0FBRSxTQUFPO1FBQUU7UUFBQyxJQUFHLEVBQUUsSUFBRztZQUFDLElBQUksS0FBRSxFQUFFLE1BQUksSUFBRyxJQUFFO1lBQUUsSUFBRyx3QkFBc0IsSUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBQztpQkFBTyxJQUFHLHlCQUF1QixJQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQyxHQUFDO2lCQUFPLElBQUcsWUFBVSxFQUFFLFNBQVE7Z0JBQUMsSUFBSSxLQUFFLEdBQUUsSUFBRSxJQUFJLElBQUk7b0JBQUM7b0JBQVc7b0JBQVE7b0JBQU87aUJBQVM7Z0JBQUUsRUFBRSxJQUFJLEdBQUUsUUFBTSxFQUFDLENBQUMsRUFBRSxHQUFDLElBQUUsRUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUM7WUFBQyxPQUFNLEVBQUMsQ0FBQyxFQUFFLEdBQUM7WUFBRTtRQUFRO1FBQUMsRUFBQyxDQUFDLEVBQUUsR0FBQztJQUFDO0lBQUMsT0FBTztBQUFDO09BQTcyQjtBQUE4MkIsU0FBUyxFQUFFLEVBQUM7SUFBRSxPQUFPLEVBQUUsQUFBQyxDQUFBLE1BQUcsRUFBQyxFQUFHLFFBQVEsU0FBUTtBQUFJO0FBQUMsU0FBUyxFQUFFLEVBQUM7SUFBRSxJQUFJLElBQUUsQ0FBQyxHQUFFLEtBQUUsR0FBRSxpQkFBaUI7SUFBUSxLQUFJLElBQUksTUFBSyxHQUFFO1FBQUMsSUFBSSxLQUFFLEdBQUUsaUJBQWlCO1FBQWdCLElBQUcsR0FBRSxTQUFPLEdBQUU7UUFBUyxJQUFJLElBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLE9BQU0sSUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLGNBQWM7UUFBTSxJQUFHLENBQUMsS0FBRyxDQUFDLEdBQUU7UUFBUyxJQUFJLElBQUUsRUFBRSxlQUFhO1FBQUcsSUFBRyxDQUFDLEVBQUUsU0FBUyxNQUFLO1FBQVMsSUFBSSxJQUFFLEVBQUUsSUFBRyxJQUFFLEFBQUMsQ0FBQSxFQUFFLGVBQWEsRUFBQyxFQUFHO1FBQU8sQ0FBQyxLQUFHLENBQUMsS0FBRyxPQUFPLFVBQVUsZUFBZSxLQUFLLEdBQUUsTUFBSyxDQUFBLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQTtJQUFFO0lBQUMsT0FBTztBQUFDO09BQXpXO0FBQTBXLFNBQVMsRUFBRSxFQUFDO0lBQUUsSUFBSSxJQUFFLENBQUMsR0FBRSxLQUFFLEdBQUUsaUJBQWlCO0lBQTJCLEtBQUksSUFBSSxNQUFLLEdBQUU7UUFBQyxJQUFJLEtBQUUsSUFBRyxJQUFFLEdBQUUsZUFBYSxHQUFFLGFBQWEsZ0JBQWUsSUFBRSxHQUFFLGFBQWE7UUFBUSxJQUFHLElBQUUsS0FBRSxFQUFFLEtBQUcsS0FBSSxDQUFBLEtBQUUsRUFBRSxFQUFFLFFBQVEsTUFBSyxLQUFJLEdBQUcsQ0FBQyxJQUFFO1FBQVMsSUFBSSxJQUFFO1FBQUcsSUFBRyxjQUFhLGtCQUFpQjtZQUFDLElBQUcsZUFBYSxHQUFFLE1BQUssSUFBRSxHQUFFLFVBQVEsUUFBTTtpQkFBVSxJQUFHLFlBQVUsR0FBRSxNQUFLO2dCQUFDLElBQUcsQ0FBQyxHQUFFLFNBQVE7Z0JBQVMsSUFBRSxHQUFFLFNBQU87WUFBSyxPQUFNLElBQUUsR0FBRSxTQUFPO1FBQUUsT0FBTSxJQUFFLGNBQWEsb0JBQWtCLEdBQUUsT0FBTyxDQUFDLEdBQUUsY0FBYyxFQUFFLGFBQWEsVUFBUSxLQUFHLEdBQUUsU0FBTztRQUFHLENBQUMsQ0FBQyxHQUFFLEdBQUM7SUFBQztJQUFDLE9BQU87QUFBQztBQUFDLFNBQVMsRUFBRSxFQUFDO0lBQUUsSUFBSSxJQUFFLFNBQVMsaUJBQWlCLGdCQUFlLEtBQUUsRUFBRTtJQUFDLEtBQUksSUFBSSxLQUFLLEVBQUUsRUFBRSxPQUFLLE1BQUcsRUFBRSxpQkFBaUIsOEJBQThCLFFBQVEsQ0FBQTtRQUFJLEdBQUUsS0FBSztJQUFFO0lBQUcsT0FBTztBQUFDO09BQW5LO0FBQW9LLFNBQVMsRUFBRSxFQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUUsS0FBRyxLQUFFLEVBQUU7SUFBQyxLQUFJLElBQUksTUFBSyxFQUFFO1FBQUMsSUFBSSxJQUFFLEVBQUUsTUFBRyxFQUFFLE1BQUcsRUFBRTtRQUFHLE9BQU8sS0FBSyxHQUFHLFNBQU8sS0FBRyxHQUFFLEtBQUs7SUFBRTtJQUFDLE9BQU87QUFBQztPQUFyRztBQUFzRyxTQUFTO0lBQUksT0FBTyxFQUFFO0FBQVk7T0FBekI7QUFBMEIsU0FBUztJQUFJLE9BQU8sRUFBRTtBQUFhO0FBQUMsU0FBUztJQUFJLElBQUksS0FBRSxLQUFJLElBQUU7SUFBSSxPQUFPLE1BQUksR0FBRSxVQUFRLE1BQUksRUFBRSxTQUFPLE9BQUs7UUFBQyxXQUFVO1FBQUUsWUFBVztJQUFDO0FBQUM7T0FBckYiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTE0ZTc3NmE3ZmEwOWIyNjYuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvY2FyZWVycy1wYWdlL3J1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXGNhcmVlcnMtcGFnZVxcXFxydWxlcy5qc1wiLFwiYnVuZGxlSWRcIjpcIjVlMzdmYmUwMTIxNjQ1N2JcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA5Tk05UVxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvY2FyZWVycy1wYWdlL3J1bGVzLmpzXHJcbiAqIERlcGVuZGVuY2llczpcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+dXRpbHMvZGVsYXkgLT4gYW02MTQgID0+ICBzcmMvdXRpbHMvZGVsYXkuanNcclxuICovXHJcblxyXG52YXIgbj1lKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtuLmRlZmluZUludGVyb3BGbGFnKHIpLG4uZXhwb3J0KHIsXCJleHRyYWN0UnVsZXNcIiwoKT0+dSksbi5leHBvcnQocixcImdldENvdmVyTGV0dGVyU3RhdHVzXCIsKCk9Pm0pLG4uZXhwb3J0KHIsXCJkZXRlY3RFZHVFeHBUeXBlXCIsKCk9PncpLG4uZXhwb3J0KHIsXCJjbGVhckVkdUV4cFNlY3Rpb25GaWVsZHNcIiwoKT0+QSksbi5leHBvcnQocixcImdldEVkdWNhdGlvblJ1bGVzXCIsKCk9Pl8pLG4uZXhwb3J0KHIsXCJnZXRFeHBlcmllbmNlUnVsZXNcIiwoKT0+TCksbi5leHBvcnQocixcImdldEZvcm1TbmFwc2hvdFwiLCgpPT5OKSxuLmV4cG9ydChyLFwiZ2V0RWR1Y2F0aW9uU25hcHNob3RcIiwoKT0+WSksbi5leHBvcnQocixcImdldEVtcGxveW1lbnRTbmFwc2hvdFwiLCgpPT56KSxuLmV4cG9ydChyLFwiZ2V0RWR1QW5kRW1wbG95bWVudFNuYXBzaG90XCIsKCk9PlYpO3ZhciBvPWUoXCJ+Y29yZS9lbnVtc1wiKSxpPWUoXCJ+dXRpbHMvZGVsYXlcIik7YXN5bmMgZnVuY3Rpb24gYShlKXtsZXQgdD1bXTtpZihcIlNFTEVDVFwiPT09ZS50YWdOYW1lKXJldHVybiBBcnJheS5mcm9tKGUub3B0aW9ucykuZm9yRWFjaChlPT57ZS52YWx1ZSYmXCJcIiE9PWUudmFsdWUmJnQucHVzaChlLnRleHRDb250ZW50Py50cmltKCl8fGUudmFsdWUpfSksdDtsZXQgcj1lLm5leHRFbGVtZW50U2libGluZztpZihyJiZcIkRJVlwiPT09ci50YWdOYW1lKXtsZXQgZT1yLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7ZS5mb3JFYWNoKGU9PntsZXQgcj1lLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik7aWYocil7bGV0IGU9ci50ZXh0Q29udGVudD8udHJpbSgpO2UmJnQucHVzaChlKX19KX1yZXR1cm4gdH1mdW5jdGlvbiBsKGUpe2xldCB0PWUuY2xvc2VzdChcIltyb2xlPSdyYWRpb2dyb3VwJ11cIik7aWYodClyZXR1cm4gdDtsZXQgcj1lLmNsb3Nlc3QoXCIuZm9ybS1ncm91cFwiKTtpZihyKXtsZXQgdD1BcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J3JhZGlvJ11cIikpLmZpbHRlcih0PT50Lm5hbWU9PT1lLm5hbWUpO2lmKHQubGVuZ3RoPjApcmV0dXJuIHJ9bGV0IG49ZS5nZXRSb290Tm9kZSgpLG89QXJyYXkuZnJvbShuLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdyYWRpbyddXCIpKS5maWx0ZXIodD0+dC5uYW1lPT09ZS5uYW1lKTtpZihvLmxlbmd0aD4wKXtsZXQgZT1vWzBdLmNsb3Nlc3QoXCIuZm9ybS1ncm91cFwiKTtyZXR1cm4gZXx8b1swXS5wYXJlbnRFbGVtZW50fHxkb2N1bWVudC5ib2R5fXJldHVybiBlLnBhcmVudEVsZW1lbnR8fGRvY3VtZW50LmJvZHl9ZnVuY3Rpb24gcyhlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdyYWRpbyddXCIpLHI9W107cmV0dXJuIHQuZm9yRWFjaChlPT57bGV0IHQ9XCJcIixuPWUuY2xvc2VzdChcImxhYmVsXCIpO2lmKG4/LnRleHRDb250ZW50JiYodD1kKG4udGV4dENvbnRlbnQpKSwhdCl7bGV0IHI9TyhlKTtyPy50ZXh0Q29udGVudCYmKHQ9ZChyLnRleHRDb250ZW50KSl9aWYoIXQmJmUubmV4dEVsZW1lbnRTaWJsaW5nKXtsZXQgcj1lLm5leHRFbGVtZW50U2libGluZztcIkxBQkVMXCI9PT1yLnRhZ05hbWUmJnIudGV4dENvbnRlbnQmJih0PWQoci50ZXh0Q29udGVudCkpfXR8fCh0PWQoZS52YWx1ZSkpLHQmJiFyLmluY2x1ZGVzKHQpJiZyLnB1c2godCl9KSxyfWFzeW5jIGZ1bmN0aW9uIHUoKXtsZXQgZT1bXSx0PWMoKTtpZighdClyZXR1cm4gZTthd2FpdCBrKHQpO2xldCByPXQucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpLG49bmV3IFNldCxpPW5ldyBTZXQ7Zm9yKGxldCBhIG9mIHIpe2lmKHYoYSkpY29udGludWU7aWYoXCJJTlBVVFwiPT09YS50YWdOYW1lJiZcInJhZGlvXCI9PT1hLnR5cGUpe2xldCBlPWEubmFtZTtpZihlJiZpLmhhcyhlKSljb250aW51ZX1pZihcIklOUFVUXCI9PT1hLnRhZ05hbWUmJlwiY2hlY2tib3hcIj09PWEudHlwZSYmYS5uYW1lKXtsZXQgcj1hLm5hbWU7aWYobi5oYXMocikpY29udGludWU7bi5hZGQocik7bGV0IGk9QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9XCJjaGVja2JveFwiXVtuYW1lPVwiJHtDU1MuZXNjYXBlKHIpfVwiXWApKS5maWx0ZXIoZT0+IXYoZSkpO2lmKGkubGVuZ3RoPjEpe2xldCB0PWEuY2xvc2VzdChcIi5mb3JtLWdyb3VwXCIpLG49dD8ucXVlcnlTZWxlY3RvcihcIjpzY29wZSA+IGxhYmVsXCIpPz9udWxsLGw9bj9kKG4udGV4dENvbnRlbnQ/P1wiXCIpOnIscz1SKGEsbiksdT1pLm1hcChlPT57bGV0IHQ9ZS5jbG9zZXN0KFwibGFiZWxcIik7cmV0dXJuIGQodD8udGV4dENvbnRlbnQ/P2UudmFsdWU/P1wiXCIpfSkuZmlsdGVyKEJvb2xlYW4pO2UucHVzaCh7bGFiZWw6bCx0eXBlOm8uRklFTERfVFlQRS5DSEVDS0JPWCxyZXF1aXJlZDpzLCRpbnB1dDppWzBdLCRjaGVja2JveHM6aSxvcHRpb25zOnV9KTtjb250aW51ZX19bGV0IHI9YXdhaXQgeShhKTtpZihyJiYoZS5wdXNoKHIpLFwiSU5QVVRcIj09PWEudGFnTmFtZSYmXCJyYWRpb1wiPT09YS50eXBlKSl7bGV0IGU9YS5uYW1lO2UmJmkuYWRkKGUpfX1hd2FpdCBGKHQpO2xldCBhPWF3YWl0IF8oKTtlLnB1c2goLi4uYSk7bGV0IGw9YXdhaXQgTCgpO3JldHVybiBlLnB1c2goLi4ubCksZX1mdW5jdGlvbiBjKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7aWYoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIik7aWYodC5sZW5ndGg+MClyZXR1cm4gZX1sZXQgdD1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpKS5maWx0ZXIoZT0+ZS5zaGFkb3dSb290KTtmb3IobGV0IGUgb2YgdCl7bGV0IHQ9ZS5zaGFkb3dSb290LHI9dC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtpZihyKXJldHVybiByO2xldCBuPXQucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCB0ZXh0YXJlYVwiKTtpZihuLmxlbmd0aD4wKXJldHVybiB0fXJldHVybiBudWxsfWZ1bmN0aW9uIGQoZSl7cmV0dXJuKGV8fFwiXCIpLnJlcGxhY2UoL1sqOlxcbl0vZyxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKX1mdW5jdGlvbiBmKGUpe3JldHVybiBkKGUpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJjb3ZlciBsZXR0ZXJcIil9ZnVuY3Rpb24gcChlPWMoKSl7aWYoIWUpcmV0dXJuIG51bGw7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yQWxsKFwidGV4dGFyZWFcIik7Zm9yKGxldCBlIG9mIHQpe2xldCB0PU0oZSk7aWYoZih0Py50ZXh0Q29udGVudCl8fGYoZS5wbGFjZWhvbGRlcil8fGYoZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpKXx8ZihlLm5hbWUpfHxmKGUuaWQpKXJldHVybiBlfXJldHVybiBudWxsfWZ1bmN0aW9uIG0oKXtsZXQgZT1wKCk7aWYoIWUpcmV0dXJuXCJcIjtsZXQgdD1NKGUpLHI9UihlLHQpfHxlLnJlcXVpcmVkfHxcInRydWVcIj09PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKTtyZXR1cm4gcj9cInJlcXVpcmVkXCI6XCJvcHRpb25hbFwifWZ1bmN0aW9uIGgoZSl7cmV0dXJuXCJzYWxhcnkgZGVzaXJlZFwiPT09ZXx8XCJzYWxhcnkgZXhwZWN0YXRpb25zXCI9PT1lfWxldCBnPVwiSG93IG1hbnkgeWVhcnMnIGV4cGVyaWVuY2VzIGRvIHlvdSBoYXZlIGluIHNvZnR3YXJlIHNhbGVzP1wiLGI9XCJQbGVhc2UgcmV0dXJuIHRoZSB5ZWFycyBvZiBleHBlcmllbmNlIGluIHNvZnR3YXJlIHNhbGVzIGFzIGEgbnVtYmVyIChkaWdpdHMgb25seSkuXCI7YXN5bmMgZnVuY3Rpb24geShlKXtsZXQgdCxyO2xldCBuPU0oZSksaT1lLnBsYWNlaG9sZGVyfHxlLmdldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpLHU9bj9kKG4udGV4dENvbnRlbnR8fFwiXCIpOmQoaSk7aWYoIXUpcmV0dXJuIG51bGw7bGV0IGM9dS50b0xvd2VyQ2FzZSgpO2lmKFwicmVzdW1lXCI9PT1jKXJldHVybiBudWxsO2xldCBmPWgoYyk7aWYoZiYmXCJTRUxFQ1RcIj09PWUudGFnTmFtZSlyZXR1cm4gbnVsbDtsZXQgcD1SKGUsbiksbT1udWxsO2lmKFwiSU5QVVRcIj09PWUudGFnTmFtZSl7bGV0IHI9ZTtpZihcImZpbGVcIj09PXIudHlwZSlyZXR1cm4gbnVsbDt0PVwiY2hlY2tib3hcIj09PXIudHlwZT9vLkZJRUxEX1RZUEUuQ0hFQ0tCT1g6XCJyYWRpb1wiPT09ci50eXBlP28uRklFTERfVFlQRS5SQURJT0dST1VQOnIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGF0ZXRpbWVmaWVsZFwiKT9vLkZJRUxEX1RZUEUuREFURTpvLkZJRUxEX1RZUEUuVEVYVCxtPXJ9ZWxzZSBpZihcIlNFTEVDVFwiPT09ZS50YWdOYW1lKXQ9by5GSUVMRF9UWVBFLlNFTEVDVCxtPWU7ZWxzZXtpZihcIlRFWFRBUkVBXCIhPT1lLnRhZ05hbWUpcmV0dXJuIG51bGw7dD1vLkZJRUxEX1RZUEUuVEVYVCxtPWV9bGV0IHk9W107dD09PW8uRklFTERfVFlQRS5TRUxFQ1QmJih5PWF3YWl0IGEobSkpO2xldCB2PW51bGw7aWYodD09PW8uRklFTERfVFlQRS5SQURJT0dST1VQKXt5PXModj1sKGUpKTtsZXQgdD12LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdyYWRpbyddXCIpLmxlbmd0aCxyPXtuYW1lOmUubmFtZXx8XCIobWlzc2luZylcIixncm91cFRhZzp2LnRhZ05hbWUscmFkaW9Db3VudDp0LG9wdGlvbkNvdW50OnkubGVuZ3RofTswPT09eS5sZW5ndGg/Y29uc29sZS53YXJuKFwiW0NhcmVlcnNQYWdlXVtydWxlc10gUmFkaW8gXFx1OTAwOVxcdTk4NzlcXHU2M2QwXFx1NTNkNlxcdTU5MzFcXHU4ZDI1XCIscik6Y29uc29sZS5kZWJ1ZyhcIltDYXJlZXJzUGFnZV1bcnVsZXNdIFJhZGlvIFxcdTkwMDlcXHU5ODc5XFx1NjNkMFxcdTUzZDZcXHU1YjhjXFx1NjIxMFwiLHIpfXQ9PT1vLkZJRUxEX1RZUEUuREFURSYmKHI9XCJNTS9ERC9ZWVlZXCIpLGM9PT1kKGcpLnRvTG93ZXJDYXNlKCkmJihyPWIpLGYmJnQ9PT1vLkZJRUxEX1RZUEUuVEVYVCYmKHI9XCJSZXR1cm4gYSBudW1lcmljIHZhbHVlIG9ubHkgKGRpZ2l0cywgb3B0aW9uYWwgZGVjaW1hbCkuIEN1cnJlbmN5IGlzIFVTIERvbGxhciBhbmQgcGVyaW9kIGlzIE1vbnRobHk7IGRvIG5vdCBpbmNsdWRlIHN5bWJvbHMgb3IgdW5pdHMuXCIpO2xldCB3PXtsYWJlbDp1LHR5cGU6dCxyZXF1aXJlZDpwLCRpbnB1dDptfTtyZXR1cm4gdCE9PW8uRklFTERfVFlQRS5URVhUJiZ0IT09by5GSUVMRF9UWVBFLkRBVEUmJih3Lm9wdGlvbnM9eSksciYmKHcuZGVzY3JpcHRpb249ciksdD09PW8uRklFTERfVFlQRS5SQURJT0dST1VQJiZ2JiYody4kbGFiZWw9bix3LiRyYWRpb1BhcmVudD12KSx3fWZ1bmN0aW9uIHYoZSl7cmV0dXJuISFlLmNsb3Nlc3QoXCIuZWR1Y2F0aW9uLWV4cGVyaWVuY2UtaXRlbVwiKX1mdW5jdGlvbiB3KGUpe2xldCB0PWUucXVlcnlTZWxlY3RvcihcIjpzY29wZSA+IGxhYmVsXCIpPy50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKXx8XCJcIixyPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKS5tYXAoZT0+ZS50ZXh0Q29udGVudD8udHJpbSgpLnRvTG93ZXJDYXNlKCl8fFwiXCIpO2lmKHIuc29tZShlPT5lLmluY2x1ZGVzKFwiYWRkXCIpJiZlLmluY2x1ZGVzKFwiZWR1Y2F0aW9uXCIpKSlyZXR1cm5cImVkdWNhdGlvblwiO2lmKHIuc29tZShlPT5lLmluY2x1ZGVzKFwiYWRkXCIpJiZlLmluY2x1ZGVzKFwiZXhwZXJpZW5jZVwiKSkpcmV0dXJuXCJleHBlcmllbmNlXCI7bGV0IG49ZS5xdWVyeVNlbGVjdG9yKFwiLmVkdWNhdGlvbi1leHBlcmllbmNlLWl0ZW1cIik7aWYobil7aWYobi5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwic2Nob29sXCJdLCAuZWR1Y2F0aW9uX3N0YXJ0ZWRfYXQsIC5lZHVjYXRpb25fZW5kZWRfYXQnKSlyZXR1cm5cImVkdWNhdGlvblwiO2lmKG4ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRpdGxlXCJdLCBpbnB1dFtuYW1lPVwiZW1wbG95ZXJcIl0sIGlucHV0W25hbWU9XCJpc19jdXJyZW50X2VtcGxveWVyXCJdLCAuZXhwZXJpZW5jZV9zdGFydGVkX2F0LCAuZXhwZXJpZW5jZV9lbmRlZF9hdCcpKXJldHVyblwiZXhwZXJpZW5jZVwiO2xldCBlPWQobi50ZXh0Q29udGVudCkudG9Mb3dlckNhc2UoKTtpZigvXFxiKHNjaG9vbHxkZWdyZWUpXFxiLy50ZXN0KGUpKXJldHVyblwiZWR1Y2F0aW9uXCI7aWYoL1xcYihlbXBsb3llcnxwb3NpdGlvbiBuYW1lKVxcYi8udGVzdChlKSlyZXR1cm5cImV4cGVyaWVuY2VcIn1yZXR1cm4gdC5pbmNsdWRlcyhcImVkdWNhdGlvblwiKT9cImVkdWNhdGlvblwiOnQuaW5jbHVkZXMoXCJleHBlcmllbmNlXCIpP1wiZXhwZXJpZW5jZVwiOm51bGx9ZnVuY3Rpb24gUyhlKXtsZXQgdD1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKSk7cmV0dXJuIHQuZmluZChlPT57bGV0IHQ9ZS50ZXh0Q29udGVudD8udHJpbSgpLnRvTG93ZXJDYXNlKCl8fFwiXCI7cmV0dXJuISEodC5pbmNsdWRlcyhcImRlbGV0ZVwiKXx8dC5pbmNsdWRlcyhcInJlbW92ZVwiKXx8ZS5jbGFzc05hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImJ0bi1kYW5nZXJcIikpfHwhIWUucXVlcnlTZWxlY3RvcihcImkuZmEtdHJhc2gtYWx0LCBpLmZhcy5mYS10cmFzaC1hbHRcIil9KXx8bnVsbH1mdW5jdGlvbiBFKGUpe2xldCB0PUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKTtyZXR1cm4gdC5maW5kKGU9PntsZXQgdD1lLnRleHRDb250ZW50Py50cmltKCkudG9Mb3dlckNhc2UoKXx8XCJcIjtyZXR1cm4hIShcImVkaXRcIj09PXR8fHQuaW5jbHVkZXMoXCJlZGl0XCIpKXx8ISFlLnF1ZXJ5U2VsZWN0b3IoXCJpLmZhLWVkaXQsIGkuZmFyLmZhLWVkaXRcIil9KXx8bnVsbH1mdW5jdGlvbiB4KGUsdCl7cmV0dXJuIEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKS5maW5kKGU9PntsZXQgcj1lLnRleHRDb250ZW50Py50cmltKCkudG9Mb3dlckNhc2UoKXx8XCJcIjtyZXR1cm4gci5pbmNsdWRlcyhcImFkZFwiKSYmci5pbmNsdWRlcyh0KX0pfHxudWxsfWZ1bmN0aW9uIEMoZSl7cmV0dXJuISFlLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKX1hc3luYyBmdW5jdGlvbiBBKGUpe2xldCB0PWUucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpO2ZvcihsZXQgZSBvZiB0KXtpZihlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCl7aWYoXCJjaGVja2JveFwiPT09ZS50eXBlfHxcInJhZGlvXCI9PT1lLnR5cGUpe2UuY2hlY2tlZCYmKGUuY2hlY2tlZD0hMSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSkpO2NvbnRpbnVlfWlmKFwiZmlsZVwiPT09ZS50eXBlKWNvbnRpbnVlO2UudmFsdWU9XCJcIixlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSk7Y29udGludWV9aWYoZSBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KXtlLnNlbGVjdGVkSW5kZXg9MCxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSk7Y29udGludWV9ZS52YWx1ZT1cIlwiLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKX19YXN5bmMgZnVuY3Rpb24gayhlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybS1ncm91cFwiKTtmb3IobGV0IGUgb2YgdCl7bGV0IHQ9dyhlKTtpZighdCljb250aW51ZTtsZXQgcj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcIi5lZHVjYXRpb24tZXhwZXJpZW5jZS1pdGVtXCIpKTtpZigwPT09ci5sZW5ndGgpY29udGludWU7Zm9yKGxldCBlPXIubGVuZ3RoLTE7ZT49MTtlLS0pe2xldCB0PVMocltlXSk7dCYmKHQuY2xpY2soKSxhd2FpdCAoMCxpLmRlbGF5KSgyNTApKX1sZXQgbj0ocj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcIi5lZHVjYXRpb24tZXhwZXJpZW5jZS1pdGVtXCIpKSlbMF07aWYobil7aWYoIUMobikpe2xldCBlPUUobik7ZSYmKGUuY2xpY2soKSxhd2FpdCAoMCxpLmRlbGF5KSg0MDApKX1pZihuPShyPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkdWNhdGlvbi1leHBlcmllbmNlLWl0ZW1cIikpKVswXSl7aWYoIUMobikpe2xldCBuPXgoZSx0KTtuJiYobi5jbGljaygpLGF3YWl0ICgwLGkuZGVsYXkpKDUwMCkpLHI9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWR1Y2F0aW9uLWV4cGVyaWVuY2UtaXRlbVwiKSk7bGV0IG89ci5maW5kKGU9PkMoZSkpO28mJmF3YWl0IEEobyk7Y29udGludWV9YXdhaXQgQShuKX19fX1hc3luYyBmdW5jdGlvbiBUKGUsdCl7aWYoZS5xdWVyeVNlbGVjdG9yKFwiLmVkdWNhdGlvbi1leHBlcmllbmNlLWl0ZW1cIikpcmV0dXJuO2xldCByPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKS5maW5kKGU9PntsZXQgcj1lLnRleHRDb250ZW50Py50cmltKCkudG9Mb3dlckNhc2UoKXx8XCJcIjtyZXR1cm4gci5pbmNsdWRlcyhcImFkZFwiKSYmci5pbmNsdWRlcyh0KX0pO3ImJihyLmNsaWNrKCksYXdhaXQgKDAsaS5kZWxheSkoNTAwKSl9YXN5bmMgZnVuY3Rpb24gRihlKXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybS1ncm91cFwiKTtmb3IobGV0IGUgb2YgdClcImV4cGVyaWVuY2VcIj09PXcoZSkmJmF3YWl0IFQoZSxcImV4cGVyaWVuY2VcIik7Zm9yKGxldCBlIG9mIHQpXCJlZHVjYXRpb25cIj09PXcoZSkmJmF3YWl0IFQoZSxcImVkdWNhdGlvblwiKX1hc3luYyBmdW5jdGlvbiBJKGUsdD17fSl7bGV0IHI9W10sbj1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKTtmb3IobGV0IGUgb2Ygbil7bGV0IG49dC5lbmFibGVFeHBlcmllbmNlRnJlcXVlbmN5RmFsbGJhY2s/aihlKTpudWxsLGk9YXdhaXQgeShlKTtpZighaSYmdC5lbmFibGVFeHBlcmllbmNlRnJlcXVlbmN5RmFsbGJhY2smJihpPWF3YWl0IEQoZSkpLCFpKWNvbnRpbnVlO2xldCBhPWUucGxhY2Vob2xkZXJ8fGUuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiksbD1kKGEpO2w/aS5sYWJlbD1sOm4mJmkudHlwZT09PW8uRklFTERfVFlQRS5TRUxFQ1QmJihpLmxhYmVsPW4pLHIucHVzaChpKX1yZXR1cm4gcn1mdW5jdGlvbiBqKGUpe2lmKFwiU0VMRUNUXCIhPT1lLnRhZ05hbWUpcmV0dXJuIG51bGw7bGV0IHQ9ZSxyPXQub3B0aW9uc1swXTtpZighcilyZXR1cm4gbnVsbDtsZXQgbj1kKHIudGV4dENvbnRlbnR8fFwiXCIpO3JldHVyblwic2VsZWN0IGZyZXF1ZW5jeVwiIT09bi50b0xvd2VyQ2FzZSgpfHxcIlwiIT09ci52YWx1ZT9udWxsOm59YXN5bmMgZnVuY3Rpb24gRChlKXtpZihcIlNFTEVDVFwiIT09ZS50YWdOYW1lKXJldHVybiBudWxsO2xldCB0PWUscj1qKHQpO2lmKCFyKXJldHVybiBudWxsO2xldCBuPXIsaT1SKHQsTSh0KSksbD1hd2FpdCBhKHQpO3JldHVybntsYWJlbDpuLHR5cGU6by5GSUVMRF9UWVBFLlNFTEVDVCxyZXF1aXJlZDppLCRpbnB1dDp0LG9wdGlvbnM6bH19ZnVuY3Rpb24gUChlKXtsZXQgdD1bXSxyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybS1ncm91cFwiKTtmb3IobGV0IG4gb2YgcilpZih3KG4pPT09ZSl7bGV0IGU9bi5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkdWNhdGlvbi1leHBlcmllbmNlLWl0ZW1cIik7ZS5mb3JFYWNoKGU9PnQucHVzaChlKSl9cmV0dXJuIHR9YXN5bmMgZnVuY3Rpb24gXygpe2xldCBlPVtdLHQ9UChcImVkdWNhdGlvblwiKTtmb3IobGV0IHIgb2YgdCl7bGV0IHQ9ci5jbG9zZXN0KFwiLmZvcm0tZ3JvdXBcIiksbj10Py5xdWVyeVNlbGVjdG9yKFwiOnNjb3BlID4gbGFiZWxcIiksaT1SKHIsbiksYT1hd2FpdCBJKHIpLGw9YS5tYXAoZT0+KHtsYWJlbDplLmxhYmVsLHR5cGU6ZS50eXBlLC4uLmUub3B0aW9ucz97b3B0aW9uczplLm9wdGlvbnN9Ont9fSkpO2UucHVzaCh7bGFiZWw6XCJFZHVjYXRpb25cIix0eXBlOm8uRklFTERfVFlQRS5FRFVDQVRJT04scmVxdWlyZWQ6aSxjaGlsZHJlbjphLG9wdGlvbnM6bH0pfXJldHVybiBlfWFzeW5jIGZ1bmN0aW9uIEwoKXtsZXQgZT1bXSx0PVAoXCJleHBlcmllbmNlXCIpO2ZvcihsZXQgciBvZiB0KXtsZXQgdD1yLmNsb3Nlc3QoXCIuZm9ybS1ncm91cFwiKSxuPXQ/LnF1ZXJ5U2VsZWN0b3IoXCI6c2NvcGUgPiBsYWJlbFwiKSxpPVIocixuKSxhPWF3YWl0IEkocix7ZW5hYmxlRXhwZXJpZW5jZUZyZXF1ZW5jeUZhbGxiYWNrOiEwfSksbD1hLm1hcChlPT4oe2xhYmVsOmUubGFiZWwsdHlwZTplLnR5cGUsLi4uZS5vcHRpb25zP3tvcHRpb25zOmUub3B0aW9uc306e319KSk7ZS5wdXNoKHtsYWJlbDpcIkV4cGVyaWVuY2VcIix0eXBlOm8uRklFTERfVFlQRS5FTVBMT1lNRU5ULHJlcXVpcmVkOmksY2hpbGRyZW46YSxvcHRpb25zOmx9KX1yZXR1cm4gZX1mdW5jdGlvbiBSKGUsdCl7aWYodCl7bGV0IGU9dC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKTtmb3IobGV0IHQgb2YgZSlpZih0LnRleHRDb250ZW50Py50cmltKCk9PT1cIipcIilyZXR1cm4hMH1yZXR1cm4hIShlLmhhc0F0dHJpYnV0ZShcInJlcXVpcmVkXCIpfHx0Py50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInJlcXVpcmVkXCIpKX1mdW5jdGlvbiBPKGUpe2xldCB0PWUuaWQ7aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9ZS5nZXRSb290Tm9kZSgpO2lmKFwicXVlcnlTZWxlY3RvclwiaW4gcil7bGV0IGU9ci5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3R9XCJdYCk7aWYoZSlyZXR1cm4gZX1sZXQgbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3R9XCJdYCk7cmV0dXJuIG58fG51bGx9ZnVuY3Rpb24gTShlKXtsZXQgdD1PKGUpO2lmKHQpcmV0dXJuIHQ7bGV0IHI9ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2Zvcig7cjspe2lmKFwiTEFCRUxcIj09PXIudGFnTmFtZSlyZXR1cm4gcjtyPXIucHJldmlvdXNFbGVtZW50U2libGluZ31pZihcIklOUFVUXCI9PT1lLnRhZ05hbWUmJlwiY2hlY2tib3hcIj09PWUudHlwZSl7bGV0IHQ9ZS5uZXh0RWxlbWVudFNpYmxpbmc7Zm9yKDt0Oyl7aWYoKFwiU1BBTlwiPT09dC50YWdOYW1lfHxcIkxBQkVMXCI9PT10LnRhZ05hbWUpJiZ0LnRleHRDb250ZW50Py50cmltKCkpcmV0dXJuIHQ7dD10Lm5leHRFbGVtZW50U2libGluZ31sZXQgcj1lLnBhcmVudEVsZW1lbnQ7aWYociYmci50ZXh0Q29udGVudD8udHJpbSgpKXJldHVybiByfWxldCBuPWUuY2xvc2VzdChcIi5mb3JtLWdyb3VwXCIpO2lmKG4pe2xldCB0PWUuY2xvc2VzdChcIltjbGFzcyo9J2NvbC0nXVwiKTtpZih0KXtsZXQgZT10LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKTtpZihlKXJldHVybiBlfWxldCByPW4ucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO2lmKHIpcmV0dXJuIHJ9bGV0IG89ZS5wYXJlbnRFbGVtZW50O2Zvcig7bzspe2xldCBlPW8ucHJldmlvdXNFbGVtZW50U2libGluZztmb3IoO2U7KXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKTtpZih0Py50ZXh0Q29udGVudD8udHJpbSgpKXJldHVybiB0O2U9ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nfW89by5wYXJlbnRFbGVtZW50fXJldHVybiBudWxsfWFzeW5jIGZ1bmN0aW9uIE4oKXtsZXQgZT17fSx0PWMoKT8/ZG9jdW1lbnQscj10LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKTtmb3IobGV0IHQgb2Ygcil7bGV0IHI9TSh0KSxuPXQucGxhY2Vob2xkZXJ8fHQuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiksbz1yP2Qoci50ZXh0Q29udGVudHx8XCJcIik6ZChuKTtpZighbyljb250aW51ZTtsZXQgaT1vLnRvTG93ZXJDYXNlKCksYT1cIlwiO2lmKFwiSU5QVVRcIj09PXQudGFnTmFtZSl7bGV0IGU9dDtpZihcImNoZWNrYm94XCI9PT1lLnR5cGUpYT1lLmNoZWNrZWQ/XCJZZXNcIjpcIk5vXCI7ZWxzZSBpZihcInJhZGlvXCI9PT1lLnR5cGUpe2xldCB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJHtlLm5hbWV9XCJdOmNoZWNrZWRgKTthPXQ/LnZhbHVlfHxcIlwifWVsc2UgYT1lLnZhbHVlfHxcIlwifWVsc2UgaWYoXCJTRUxFQ1RcIj09PXQudGFnTmFtZSl7bGV0IGU9dDthPWUub3B0aW9uc1tlLnNlbGVjdGVkSW5kZXhdPy50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwifWVsc2UgaWYoXCJURVhUQVJFQVwiPT09dC50YWdOYW1lKXtsZXQgZT10O2E9ZS52YWx1ZXx8XCJcIn1pZihoKGkpKXtsZXQgcj10LmlkfHxcIlwiLG49bztpZihcImV4cGVjdGVkX2N1cnJlbmN5XCI9PT1yKWVbYCR7bn0gQ3VycmVuY3lgXT1hO2Vsc2UgaWYoXCJleHBlY3RlZF9mcmVxdWVuY3lcIj09PXIpZVtgJHtufSBGcmVxdWVuY3lgXT1hO2Vsc2UgaWYoXCJJTlBVVFwiPT09dC50YWdOYW1lKXtsZXQgcj10LGk9bmV3IFNldChbXCJjaGVja2JveFwiLFwicmFkaW9cIixcImZpbGVcIixcImhpZGRlblwiXSk7aS5oYXMoci50eXBlKT9lW29dPWE6ZVtgJHtufSBBbW91bnRgXT1hfWVsc2UgZVtvXT1hO2NvbnRpbnVlfWVbb109YX1yZXR1cm4gZX1mdW5jdGlvbiAkKGUpe3JldHVybiBkKChlfHxcIlwiKS5yZXBsYWNlKC86XFxzKiQvLFwiXCIpKX1mdW5jdGlvbiBCKGUpe2xldCB0PXt9LHI9ZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnJvd1wiKTtmb3IobGV0IGUgb2Ygcil7bGV0IHI9ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOnNjb3BlID4gZGl2XCIpO2lmKHIubGVuZ3RoPDIpY29udGludWU7bGV0IG49clswXS5xdWVyeVNlbGVjdG9yKFwiaDZcIiksbz1yWzFdLnF1ZXJ5U2VsZWN0b3IoXCJoNlwiKTtpZighbnx8IW8pY29udGludWU7bGV0IGk9bi50ZXh0Q29udGVudHx8XCJcIjtpZighaS5pbmNsdWRlcyhcIjpcIikpY29udGludWU7bGV0IGE9JChpKSxsPShvLnRleHRDb250ZW50fHxcIlwiKS50cmltKCk7IWF8fCFsfHxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxhKXx8KHRbYV09bCl9cmV0dXJuIHR9ZnVuY3Rpb24gcShlKXtsZXQgdD17fSxyPWUucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpO2ZvcihsZXQgZSBvZiByKXtsZXQgcj1cIlwiLG49ZS5wbGFjZWhvbGRlcnx8ZS5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKSxvPWUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtpZihuP3I9ZChuKTpvJiYocj1kKG8ucmVwbGFjZSgvXy9nLFwiIFwiKSkpLCFyKWNvbnRpbnVlO2xldCBpPVwiXCI7aWYoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpe2lmKFwiY2hlY2tib3hcIj09PWUudHlwZSlpPWUuY2hlY2tlZD9cIlllc1wiOlwiTm9cIjtlbHNlIGlmKFwicmFkaW9cIj09PWUudHlwZSl7aWYoIWUuY2hlY2tlZCljb250aW51ZTtpPWUudmFsdWV8fFwiWWVzXCJ9ZWxzZSBpPWUudmFsdWV8fFwiXCJ9ZWxzZSBpPWUgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudD9lLm9wdGlvbnNbZS5zZWxlY3RlZEluZGV4XT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjplLnZhbHVlfHxcIlwiO3Rbcl09aX1yZXR1cm4gdH1mdW5jdGlvbiBVKGUpe2xldCB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybS1ncm91cFwiKSxyPVtdO2ZvcihsZXQgbiBvZiB0KXcobik9PT1lJiZuLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWR1Y2F0aW9uLWV4cGVyaWVuY2UtaXRlbVwiKS5mb3JFYWNoKGU9PntyLnB1c2goZSl9KTtyZXR1cm4gcn1mdW5jdGlvbiBIKGUpe2xldCB0PVUoZSkscj1bXTtmb3IobGV0IGUgb2YgdCl7bGV0IHQ9QyhlKT9xKGUpOkIoZSk7T2JqZWN0LmtleXModCkubGVuZ3RoPjAmJnIucHVzaCh0KX1yZXR1cm4gcn1mdW5jdGlvbiBZKCl7cmV0dXJuIEgoXCJlZHVjYXRpb25cIil9ZnVuY3Rpb24geigpe3JldHVybiBIKFwiZXhwZXJpZW5jZVwiKX1mdW5jdGlvbiBWKCl7bGV0IGU9WSgpLHQ9eigpO3JldHVybiAwPT09ZS5sZW5ndGgmJjA9PT10Lmxlbmd0aD9udWxsOntlZHVjYXRpb246ZSxlbXBsb3ltZW50OnR9fVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuMTIxNjQ1N2IuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);