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
})({"2ukzo":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\successfactors\\operations.js",
    "bundleId": "80e659b6b57582c0",
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
var j = z(require("5d3b267fd70bd281"));
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

},{"5d3b267fd70bd281":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"kbQur":[function(require,module,exports) {
/**
 * Parcel module id: eGv5O
 * Resolved path: src/contents/sites/successfactors/operations.js
 * Dependencies:
 *   ./rules -> 6S3gu  =>  src/contents/sites/successfactors/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   dayjs -> fnhXp  =>  _tilde_node_modules/dayjs.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~contents/sites/autofill-answer-pair-tracking -> aCElZ  =>  src/contents/sites/autofill-answer-pair-tracking.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/url -> b53L3  =>  src/store/url.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getSuccessFactorsCoverLetterStatus", ()=>G), n.export(r, "fillInputTextField", ()=>K), n.export(r, "fillCountryCombobox", ()=>ep), n.export(r, "fillSelectField", ()=>em), n.export(r, "fillCheckboxField", ()=>eh), n.export(r, "fillRadioGroupFiled", ()=>eg), n.export(r, "hasSuccessFactorsResumeUploadSurface", ()=>eE), n.export(r, "uploadResume", ()=>ex), n.export(r, "uploadCoverLetter", ()=>eC), n.export(r, "captureSuccessFactorsExperienceRows", ()=>eU), n.export(r, "cleanupSuccessFactorsParsedExperienceRows", ()=>eW), n.export(r, "preclickAddButtons", ()=>eX), n.export(r, "expandForm", ()=>e8), n.export(r, "preFillForm", ()=>e9), n.export(r, "fillSkills", ()=>e7), n.export(r, "submitHandler", ()=>te);
var o = e("~contents/methods/answer"), i = e("~contents/methods/dom"), a = e("~contents/methods/observer"), l = e("~contents/sites/autofill-answer-pair-tracking"), s = e("~core/xpath"), u = e("~utils/delay"), c = e("~store/url"), d = e("dayjs"), f = n.interopDefault(d), p = e("./rules");
let m = "Resume / CV", h = "Cover Letter", g = [
    "education",
    "educational background",
    "higher education",
    "formal education"
], b = [
    "experience",
    "work experience",
    "work history",
    "employment history",
    "previous work experience",
    "previous work history",
    "employment",
    "previous employment"
];
function y(e1) {
    let t = e1.trim().toLowerCase();
    if ("present" === t || "immediately" === t) return (0, f.default)().format("MM/DD/YYYY");
    let r1 = (0, f.default)(e1);
    return r1.isValid() ? r1.format("MM/DD/YYYY") : (console.warn(`[fillInputTextField] Invalid date value: "${e1}", using current date instead`), (0, f.default)().format("MM/DD/YYYY"));
}
function v(e1, t) {
    e1.dispatchEvent(new Event(t, {
        bubbles: !0,
        composed: !0
    }));
}
function w(e1) {
    return (e1 || "").replace(/\u00a0/g, " ").replace(/\*/g, " ").replace(/\s*:\s*$/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}
function S(e1) {
    return w(e1);
}
_c = S;
function E(e1, t) {
    let r1 = S(e1);
    return t.some((e1)=>r1.includes(S(e1)));
}
_c1 = E;
function x(e1) {
    return w(e1).replace(/[^a-z0-9]/g, "");
}
function C(e1, t) {
    let r1 = x(e1), n = x(t);
    if (!r1 || !n) return !1;
    let o = new Set([
        "resume",
        "resumecv"
    ]);
    if (o.has(n)) return o.has(r1);
    let i = new Set([
        "coverletter"
    ]);
    return i.has(n) ? i.has(r1) : r1 === n;
}
_c2 = C;
function A(e1) {
    if (!(e1 instanceof HTMLElement) || e1.classList.contains("displayNone") || "true" === e1.getAttribute("aria-hidden")) return !1;
    let t = window.getComputedStyle(e1);
    return "none" !== t.display && "hidden" !== t.visibility;
}
_c3 = A;
function k(e1) {
    return Array.from(document.querySelectorAll(".RCMFormField.attachmentField, .RCMFormField.rcmFormElement.attachmentField")).find((t)=>{
        let r1 = t.querySelector(".rcmFormFieldLabel")?.textContent;
        return C(r1, e1);
    }) || null;
}
function T(e1) {
    if (!e1) return null;
    let t = Array.from(e1.querySelectorAll('button, a, span[role="button"], div[role="button"], [title], [aria-label]'));
    return t.find((e1)=>{
        let t = w([
            e1.textContent,
            e1.getAttribute("title"),
            e1.getAttribute("aria-label"),
            e1.getAttribute("onclick")
        ].filter(Boolean).join(" "));
        return A(e1) && /delete|remove/.test(t);
    }) || null;
}
_c4 = T;
function F(e1) {
    return w([
        e1.textContent,
        e1.getAttribute("title"),
        e1.getAttribute("aria-label"),
        e1.getAttribute("id")
    ].filter(Boolean).join(" "));
}
_c5 = F;
function I(e1) {
    let t = k(e1), r1 = t?.querySelector(".rcmFormFieldLabel"), n = t?.querySelector('[id$="_attach"]'), o = t?.querySelector('.attachActions [role="button"], .attachActions, [id$="_attachIcon"]') || null, i = t?.querySelector('[id$="_attachSuccess"]'), a = t?.querySelector('[id$="_attachDownloadLabel"]'), l = a?.querySelector("a"), s = l || a, u = T(t);
    return {
        container: t,
        label: r1,
        actionButton: o,
        attachButton: n,
        successIcon: i,
        downloadLabel: a,
        downloadLink: l,
        uploadedFileName: s,
        deleteButton: u
    };
}
_c6 = I;
function j() {
    let e1 = Array.from(document.querySelectorAll(".candidate_summary_details, .candidate_summary, .candProfileUpperRight")), t = e1.find((e1)=>{
        let t = F(e1);
        return t.includes("cover letter") && (t.includes("upload cover letter") || t.includes("attach your cover letter") || t.includes("cover letter is not on file"));
    }) || null;
    if (!t) return {
        container: null,
        actionButton: null
    };
    let r1 = Array.from(t.querySelectorAll('a[title="Upload Cover Letter"], a[aria-label="Upload Cover Letter"], a[id$="_uploadButton"][role="button"], a[role="button"]')).filter((e1)=>{
        let t = F(e1);
        return t.includes("upload cover letter") || t.includes("attach your cover letter") || t.includes("uploadbutton");
    }), n = r1.find((e1)=>e1.id.endsWith("_uploadButton")) || r1.find((e1)=>A(e1)) || null;
    return {
        container: t,
        actionButton: n
    };
}
function D() {
    let e1 = Array.from(document.querySelectorAll('input[type="file"], input[type="file"].fileUpload, input[type="file"][name="fileData1"]')).filter((e1)=>e1.isConnected && !e1.disabled);
    return e1.find((e1)=>e1.classList.contains("fileUpload") || "fileData1" === e1.name) || e1.at(-1) || null;
}
_c7 = D;
function P(e1) {
    let t = k(e1), r1 = t?.querySelector('input[type="file"]');
    return r1 || D();
}
_c8 = P;
function _() {
    return document.querySelector('button[title="Upload"][name="Upload"][type="button"]');
}
function L(e1) {
    return (e1 || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
}
_c9 = L;
function R(e1, t) {
    let r1 = L(e1);
    return "education" === t ? g.some((e1)=>r1.includes(L(e1))) : b.some((e1)=>r1.includes(L(e1)));
}
_c10 = R;
function O(e1) {
    let t = e1.querySelector(".rcmFormSectionTopBar")?.textContent || e1.querySelector("h2")?.textContent || "", r1 = Array.from(e1.querySelectorAll(".hiddenAriaContent[aria-label]")).map((e1)=>e1.getAttribute("aria-label") || "").join(" ");
    return `${t} ${r1}`;
}
_c11 = O;
function M(e1) {
    let t = Array.from(document.querySelectorAll(".rcmFormSection"));
    return t.find((t)=>R(O(t), e1)) || null;
}
_c12 = M;
function N(e1) {
    let t = document.querySelectorAll(".rcmFormSection").length > 0;
    return !t || !!M(e1);
}
_c13 = N;
function $() {
    return Array.from(document.querySelectorAll(".rcmFormSection")).map((e1)=>O(e1).replace(/\s+/g, " ").trim()).filter(Boolean);
}
function B(e1) {
    let t = e1.querySelectorAll(".rcmSectionComponent");
    if (t.length > 0) return t.length;
    let r1 = L(e1.textContent);
    if (r1.includes("there are no items in this section")) return 0;
    let n = Array.from(e1.querySelectorAll("span")).map((e1)=>e1.textContent || "");
    if (n.some((e1)=>L(e1).includes("there are no items in this section"))) return 0;
    let o = n.find((e1)=>/section\s+(?:with|has)\s+\d+\s+rows?/i.test(e1)), i = o?.match(/section\s+(?:with|has)\s+(\d+)\s+rows?/i);
    return i ? parseInt(i[1], 10) : null;
}
_c14 = B;
function q(e1) {
    let t = M(e1);
    return t ? t.querySelector('[id$="_addRowBtn"], .addRowButton, [role="button"][title="Add new row"]') : null;
}
function U(e1) {
    return L([
        e1.textContent,
        e1.getAttribute("aria-label"),
        e1.getAttribute("title")
    ].filter(Boolean).join(" "));
}
_c15 = U;
function H(e1, t) {
    let r1 = U(e1);
    return !!r1.includes("add") && R(r1, t);
}
_c16 = H;
function Y(e1) {
    let t = Array.from(document.querySelectorAll('a[role="button"]'));
    return t.find((t)=>H(t, e1)) || null;
}
_c17 = Y;
function z(e1) {
    let t = I(e1);
    return !!t.actionButton && (t.actionButton.click(), !0);
}
function V() {
    if (z(h)) return !0;
    let e1 = j();
    return !!e1.actionButton && (e1.actionButton.click(), !0);
}
_c18 = V;
async function W(e1) {
    let t = await (0, a.waitForCondition)(()=>!!P(e1), {
        timeout: 4e3,
        interval: 100,
        observeTarget: document.body
    });
    return t ? P(e1) : null;
}
_c19 = W;
function G() {
    let e1 = I(h), t = j(), r1 = !!e1.container && (!!e1.actionButton || !!e1.attachButton || !!e1.successIcon || !!e1.downloadLabel), n = !!t.container && !!t.actionButton;
    return r1 || n ? "required" : "";
}
_c20 = G;
async function K(e1, t) {
    try {
        if (!e1) {
            console.warn("[fillInputTextField] Invalid input element");
            return;
        }
        let r1 = "Date Input" === e1.getAttribute("aria-roledescription"), n = t;
        r1 && (n = y(t)), e1.focus(), await (0, u.delay)(100), e1.value = "", v(e1, "input"), await (0, u.delay)(100), e1.value = n, v(e1, "input"), v(e1, "change"), await (0, u.delay)(100);
    } catch (e1) {
        console.warn("[fillInputTextField] Error:", e1);
    }
}
_c21 = K;
function X(e1, t) {
    e1.focus(), e1.value = "";
    for(let r1 = 0; r1 < t.length; r1++){
        let n = t[r1], o = t.slice(0, r1 + 1), i = 1 === n.length && /[a-zA-Z]/.test(n), a = i ? `Key${n.toUpperCase()}` : "Unidentified";
        e1.dispatchEvent(new KeyboardEvent("keydown", {
            key: n,
            code: a,
            bubbles: !0,
            cancelable: !0
        })), e1.value = o, e1.dispatchEvent(new InputEvent("input", {
            data: n,
            inputType: "insertText",
            bubbles: !0
        })), e1.dispatchEvent(new KeyboardEvent("keyup", {
            key: n,
            code: a,
            bubbles: !0,
            cancelable: !0
        }));
    }
}
_c22 = X;
function J(e1) {
    return e1 ? Array.from(e1.querySelectorAll("li")).filter((e1)=>e1.textContent?.trim() !== "No Selection") : [];
}
_c23 = J;
function Q(e1) {
    return e1.trim().toLowerCase().replace(/\s+/g, " ");
}
_c24 = Q;
function Z(e1) {
    return Q(e1).replace(/[^a-z0-9]/g, "");
}
_c25 = Z;
let ee = [
    [
        "unitedstates",
        "unitedstatesofamerica",
        "usa",
        "us"
    ]
];
function et(e1) {
    return Q(e1 || "").includes("country");
}
function er(e1, t) {
    let r1 = Z(e1), n = Z(String(t));
    return !!r1 && !!n && ee.some((e1)=>e1.includes(r1) && e1.includes(n));
}
function en(e1) {
    let t = String(e1 ?? "").trim();
    return t ? ee.some((e1)=>e1.includes(Z(t))) ? [
        t,
        "USA",
        "United States",
        "United States of America",
        "US"
    ].map((e1)=>e1.trim()).filter((e1, t, r1)=>{
        if (!e1) return !1;
        let n = Z(e1);
        return r1.findIndex((e1)=>Z(e1) === n) === t;
    }) : [
        t
    ] : [];
}
function eo(e1, t, r1 = {}) {
    let n = String(t).trim();
    if (!e1.trim() || !n) return !1;
    let o = Q(e1), i = Q(n);
    return e1 === n || o === i || Z(e1) === Z(n) || !0 === r1.allowCountryAliases && er(e1, t);
}
function ei(e1, t, r1 = !1) {
    let n = e1.querySelector("a")?.textContent?.trim() || e1.textContent?.trim() || "";
    return eo(n, t, {
        allowCountryAliases: r1
    });
}
function ea(e1, t) {
    let r1 = eo(e1.value || "", t, {
        allowCountryAliases: !0
    }), n = e1.getAttribute("title") || "";
    return n.trim() ? r1 && eo(n, t, {
        allowCountryAliases: !0
    }) : r1;
}
function el(e1) {
    let t = e1.querySelector("a");
    (t || e1).click();
}
function es(e1) {
    return e1 instanceof HTMLInputElement && !!e1.closest(".sfCascadingPicklist");
}
async function eu(e1, t, r1 = [
    String(t ?? "").trim()
], n = !1) {
    let o = r1.filter(Boolean);
    if (0 === o.length) return [];
    for (let r1 of o){
        e1.click(), await (0, u.delay)(200), X(e1, r1);
        let o = 8;
        for(let r1 = 0; r1 < o; r1++){
            await (0, u.delay)(400);
            let r1 = e1.getAttribute("aria-owns"), o = (r1 ? document.getElementById(r1) : null) || document.querySelector('[role="listbox"]'), i = J(o), a = /^\d+$/.test(String(t ?? "").trim());
            if (i.length > 0 && (a || i.some((e1)=>ei(e1, t, n)))) return i;
        }
    }
    return [];
}
async function ec(e1, t) {
    el(t), await (0, u.delay)(200), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("blur", {
        bubbles: !0
    }));
}
async function ed(e1, t) {
    let r1 = 5;
    for(let n = 0; n < r1; n++){
        if (ea(e1, t)) return !0;
        await (0, u.delay)(200);
    }
    return ea(e1, t);
}
function ef(e1, t, r1) {
    e1.value = t, e1.title = r1, e1.dispatchEvent(new Event("input", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0
    })), e1.dispatchEvent(new Event("blur", {
        bubbles: !0
    }));
}
async function ep(e1, t) {
    if (!e1 || !t?.trim()) return !1;
    let r1 = String(t).trim(), n = e1.value, o = e1.getAttribute("title") || "";
    if (ea(e1, r1)) return !0;
    let i = en(r1), a = null, l = 8;
    for (let t of i){
        e1.click(), await (0, u.delay)(200), X(e1, t), await (0, u.delay)(1e3);
        for(let t = 0; t < l; t++){
            await (0, u.delay)(400);
            let t = e1.getAttribute("aria-owns");
            if (t && (a = document.getElementById(t)), a || (a = document.querySelector('[role="listbox"]')), a) {
                let t = J(a);
                if (t.length > 0) {
                    let i = t.find((e1)=>ei(e1, r1, !0));
                    if (i) {
                        if (await ec(e1, i), await ed(e1, r1)) return !0;
                        return console.warn("[fillCountryCombobox] Exact option did not commit:", r1), ef(e1, n, o), !1;
                    }
                }
            }
        }
    }
    return ef(e1, n, o), console.warn("[fillCountryCombobox] No exact Country option found:", r1), !1;
}
async function em(e1, t) {
    let r1 = e1.$input, n = Array.isArray(t) ? t[0] : t, o = et(e1.label), i = r1.getAttribute("aria-owns");
    if (!i) {
        let e1 = Array.from(r1.options).filter((e1)=>(e1.textContent?.trim() || e1.value) && !e1.disabled), t = "number" == typeof n || "string" == typeof n && /^\d+$/.test(String(n).trim());
        if (t && e1.length > 0) {
            let t = "number" == typeof n ? n : parseInt(String(n).trim(), 10), o = t - 1;
            if (o >= 0 && o < e1.length) return r1.selectedIndex = e1[o].index, r1.dispatchEvent(new Event("change", {
                bubbles: !0
            })), await (0, u.delay)(200), !0;
        }
        for (let t of e1){
            let e1 = t.textContent?.trim() || "", i = t.value || e1;
            if (eo(e1, n, {
                allowCountryAliases: o
            }) || eo(i, n, {
                allowCountryAliases: o
            })) return r1.value = t.value, r1.dispatchEvent(new Event("change", {
                bubbles: !0
            })), await (0, u.delay)(200), !0;
        }
        return console.warn("[fillSelectField] Native select: no matching option for:", n), !1;
    }
    r1.focus();
    let a = document.getElementById(i), l = J(a), s = es(r1);
    if (0 === l.length && r1 instanceof HTMLInputElement && (l = await eu(r1, n, o ? en(n) : [
        String(n ?? "").trim()
    ], o)), 0 === l.length) return console.warn("[fillSelectField] Options list did not appear or was empty"), !1;
    let c = "number" == typeof n || "string" == typeof n && /^\d+$/.test(n.trim());
    if (c) {
        let e1 = "number" == typeof n ? n : parseInt(String(n).trim(), 10), t = e1 - 1;
        if (t >= 0 && t < l.length) {
            let e1 = l[t];
            return s && r1 instanceof HTMLInputElement ? await ec(r1, e1) : (el(e1), await (0, u.delay)(200)), !0;
        }
    }
    for (let e1 of l)if (ei(e1, n, o)) {
        if (s && r1 instanceof HTMLInputElement) {
            if (await ec(r1, e1), o) return await ed(r1, String(n ?? "").trim());
        } else el(e1), await (0, u.delay)(200);
        return !0;
    }
    return console.warn("[fillSelectField] No matching option found for:", n), !o && !!(s && r1 instanceof HTMLInputElement) && (await ec(r1, l[0]), !0);
}
async function eh(e1, t) {
    let r1 = e1.$input, n = Array.isArray(t) ? t[0] : t, o = !0 === n || "Yes" === n || "true" === n || "yes" === String(n).toLowerCase();
    r1.checked !== o && (r1.click(), await (0, u.delay)(100));
}
async function eg(e1, t) {
    let r1 = String(Array.isArray(t) ? t[0] : t).trim();
    if (!r1) return;
    let n = Array.from(e1.$radioParent.querySelectorAll("li[class='fd-form-item fd-form-item--compact'], .checkbox_column, .globalRadio.sfRadioInputField"));
    for (let e1 of n){
        let t = e1.querySelector("label, .radioLabel")?.textContent?.trim() || "";
        if (t === r1 || e1.id === r1) {
            let t = e1.querySelector("input"), r1 = e1.querySelector('[role="radio"], .radioCheck');
            (t || r1 || e1).click(), await (0, u.delay)(100);
            return;
        }
    }
}
function eb(e1, t = 1e4) {
    return new Promise((r1, n)=>{
        let o = document.querySelector(e1);
        if (o) return r1(o);
        let i = new MutationObserver(()=>{
            let t = document.querySelector(e1);
            t && (i.disconnect(), r1(t));
        });
        i.observe(document.body, {
            childList: !0,
            subtree: !0
        }), setTimeout(()=>{
            i.disconnect(), n(Error(`Element "${e1}" not found within ${t}ms`));
        }, t);
    });
}
async function ey(e1, t = 5e3, r1 = 200) {
    let n = Date.now();
    for(; Date.now() - n < t;){
        let t = document.querySelector(e1);
        if (!t) return;
        await (0, u.delay)(r1);
    }
    console.warn(`[uploadResume] Element "${e1}" still present after ${t}ms`);
}
async function ev() {
    try {
        let e1 = await eb('button[title="Overwrite Profile"], button[title="Overwrite Profile"][type="button"]', 8e3);
        e1.click(), await (0, u.delay)(500), await ey('div[class="globalPortletBodyBackground"]', 5e3);
    } catch (e1) {
        console.warn("[uploadResume] Overwrite button not found or timed out:", e1);
    }
}
async function ew(e1, t, r1, n) {
    let a = await (0, o.fetchPdfAsBlob)(t);
    await (0, i.uploadFiles)(e1, a, r1, n, "Resume/CV");
    let l = document.querySelector('button[title="Upload"][name="Upload"][type="button"]');
    l ? (l.click(), await ev()) : console.warn("[uploadResume] Upload button not found, cannot trigger upload");
}
function eS() {
    let e1 = document.querySelector('a[aria-label="Upload Resume"][title="Upload Resume"], span[aria-label="Update Resume"]');
    if (e1) return e1;
    let t = Array.from(document.querySelectorAll("div.attachActions")), r1 = t.find((e1)=>e1.textContent?.toLowerCase().includes("upload a resume"));
    return r1 || null;
}
function eE() {
    return !!k(m) || !!eS();
}
async function ex(e1, t, r1) {
    if (k(m)) {
        let n = z(m);
        if (!n) {
            console.warn("[uploadResume] Resume attachment action button not found");
            return;
        }
        let o = await W(m);
        if (!o) {
            console.warn("[uploadResume] Resume attachment file input not found");
            return;
        }
        await ew(o, e1, t, r1);
        return;
    }
    let n = document.querySelector('input[type="file"]');
    if (n) {
        await ew(n, e1, t, r1);
        return;
    }
    let o = eS();
    if (!o) {
        console.warn("[uploadResume] Upload Resume button not found");
        return;
    }
    o.click(), await (0, u.delay)(1e3);
    let i = document.querySelector('button[title="Overwrite Profile"]');
    i && (i.click(), await (0, u.delay)(500), await ey('div[class="globalPortletBodyBackground"]', 5e3));
    let a = 0, l = 6;
    for(; !n && a < l;){
        let e1 = Array.from(document.querySelectorAll("span")), t = e1.find((e1)=>e1.textContent?.trim() === "Upload from Device");
        if (t) {
            let e1 = t.nextElementSibling;
            for(; e1;){
                let t = e1.querySelector('input[type="file"][class="fileUpload"]');
                if (t) {
                    n = t;
                    break;
                }
                e1 = e1.nextElementSibling;
            }
        }
        n || (n = document.querySelector('input[type="file"][name="fileData1"]')), !n && (await (0, u.delay)(500), a++);
    }
    if (!n) {
        console.warn("[uploadResume] File input not found after waiting");
        return;
    }
    await ew(n, e1, t, r1);
}
async function eC(e1, t, r1) {
    let n = G();
    if ("required" !== n) return console.warn("[successfactors][Cover Letter] attachment slot is not ready"), !1;
    let a = V();
    if (!a) return console.warn("[successfactors][Cover Letter] attach action button not found"), !1;
    let l = await W(h);
    if (!l) return console.warn("[successfactors][Cover Letter] file input not found"), !1;
    await (0, i.uploadFiles)(l, await (0, o.fetchCoverLetterPdfAsBlob)(e1), t, r1, "Cover Letter");
    let s = _();
    return s ? (s.click(), await ev(), !0) : (console.warn("[successfactors][Cover Letter] upload button not found"), !1);
}
function eA() {
    return document.querySelector("div.profileLowerLayout");
}
function ek(e1) {
    let t = eA();
    if (!t) return null;
    let r1 = Array.from(t.querySelectorAll(".sfCollapse.fd-panel, .sfCollapse, .fd-panel, div[aria-label]"));
    return r1.find((t)=>{
        let r1 = t.getAttribute("aria-label") || t.querySelector("h2, [role='heading']")?.textContent || "";
        return E(r1, e1);
    }) || null;
}
function eT(e1) {
    let t = Array.from(e1.querySelectorAll(".hiddenAriaContent[aria-label]")).map((e1)=>e1.getAttribute("aria-label")), r1 = (e1.getAttribute("aria-labelledby") || "").split(/\s+/).map((e1)=>document.getElementById(e1)?.textContent);
    return [
        e1.getAttribute("aria-label"),
        e1.getAttribute("title"),
        e1.textContent,
        ...r1,
        ...t
    ].filter(Boolean).join(" ");
}
function eF(e1) {
    return "education" === e1 ? g : b;
}
function eI(e1, t, r1) {
    let n = "delete" === r1 ? [
        "delete",
        "remove"
    ] : [
        "add",
        "add another"
    ];
    return Array.from(e1.querySelectorAll('a[role="button"], button, [role="button"]')).filter((e1)=>{
        let r1 = eT(e1);
        return E(r1, t) && E(r1, n);
    });
}
function ej(e1, t) {
    let r1 = M(e1);
    return r1 ? eI(r1, eF(e1), t) : [];
}
function eD(e2) {
    return "education" === e2 ? e1 : e3;
}
function eP(e1) {
    return e1.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function e_(e1) {
    return (e1?.textContent || "").replace(/\s+/g, " ").trim();
}
function eL(e1) {
    return L(e1).replace(/\*/g, "").replace(/\s*:\s*$/g, "").trim();
}
function eR(e1, t) {
    let r1 = eL(e1);
    return t.some((e1)=>r1 === eL(e1));
}
function eO(e1) {
    let t = e1?.querySelector("input, textarea, select");
    return t ? "checkbox" === t.type ? t.checked ? "true" : "" : String(t.value || "").trim() : "";
}
function eM(e1, t) {
    let r1 = Array.from(e1.querySelectorAll("tr"));
    for (let e1 of r1){
        let r1 = Array.from(e1.querySelectorAll("th, td"));
        if (r1.length < 2) continue;
        let n = e_(r1[0]);
        if (!eR(n, t)) continue;
        let o = eO(r1[1]);
        if (o) return o;
        let i = r1[1].querySelector("[title]"), a = i?.getAttribute("title")?.trim();
        if (a) return a;
        return e_(r1[1]);
    }
    return "";
}
function eN(e1, t) {
    let r1 = t.map(eP).join("|"), n = [
        "Start Date",
        "From Date",
        "End Date",
        "Company Name",
        "Company",
        "Employer",
        "Organization",
        "Type of Business",
        "Title",
        "Job Title",
        "Position",
        "Function",
        "Country",
        "State",
        "City"
    ], o = n.map(eP).join("|"), i = e1.match(RegExp(`(?:^|\\s)(?:${r1})\\s*:?\\s*(.*?)\\s*(?=(?:${o})\\s*:?|$)`, "i"));
    return i?.[1]?.trim() || "";
}
function e$(e1, t) {
    let r1 = eM(e1, t);
    return r1 || eN(e_(e1), t);
}
function eB(e1) {
    return {
        company: e$(e1, [
            "Company Name",
            "Company",
            "Employer",
            "Organization"
        ]),
        text: e_(e1),
        title: e$(e1, [
            "Title",
            "Job Title",
            "Position"
        ])
    };
}
function eq() {
    let e1 = M("experience");
    if (e1) {
        let t = Array.from(e1.querySelectorAll(".rcmSectionComponent"));
        if (t.length > 0) return t;
    }
    let t = ek(b);
    if (!t) return [];
    let r1 = Array.from(t.querySelectorAll('[id*="NEW_ROW"]')).filter((e1)=>e1.querySelector('[id$="_fieldsLayout"], table[role="presentation"]'));
    if (r1.length > 0) return r1;
    let n = Array.from(t.querySelectorAll('[id$="_fieldsLayout"], table[role="presentation"]')), o = new Set;
    for (let e1 of n)o.add(e1.closest('[id*="NEW_ROW"], [id$="_row"], .bg_info.bgElem, .bg_info') ?? e1);
    return Array.from(o);
}
function eU() {
    return {
        count: eq().length
    };
}
function eH(e1) {
    let t = L(e1);
    return !!t && [
        "project",
        "portfolio",
        "capstone",
        "codelens",
        "metropulse",
        "notepad",
        "review assistant",
        "dashboard",
        "workspace"
    ].some((e1)=>t.includes(e1));
}
function eY(e1) {
    let t = L(e1);
    return !t || "no selection" === t || "unspecified" === t || "unknown" === t || "n/a" === t || "not applicable" === t;
}
function ez(e1) {
    let t = eY(e1.company), r1 = eH(e1.company), n = eY(e1.title), o = eH(e1.title);
    return (!!t || !!r1 || !!n || !!o) && (t ? eH([
        e1.title,
        e1.text
    ].join(" ")) : r1 && n || o);
}
function eV(e1) {
    let t = Array.from(e1.querySelectorAll('a[role="button"], button, [role="button"]'));
    return t.find((e1)=>E(eT(e1), [
            "delete",
            "remove"
        ])) || null;
}
async function eW(e1) {
    try {
        await (0, a.waitForCondition)(()=>eq().length !== e1.count, {
            timeout: 1500,
            interval: 150,
            observeTarget: document.body
        });
        let t = eq();
        for(let e1 = t.length - 1; e1 >= 0; e1 -= 1){
            let r1 = eB(t[e1]);
            if (!ez(r1)) continue;
            let n = eV(t[e1]);
            n && (n.click(), await (0, u.delay)(300));
        }
    } catch (e1) {
        console.warn("[successfactors][resume-parser-cleanup] failed to clean parsed Work History rows", e1);
    }
}
async function eG(e1, t, r1 = 3e3) {
    let n = Date.now();
    for(; Date.now() - n < r1;){
        let r1 = e1();
        if (r1 < t) return r1;
        await (0, u.delay)(500);
    }
    return e1();
}
async function eK(e1, t) {
    if (!M(e1)) return !1;
    let r1 = eD(e1), n = r1();
    for(; n > t;){
        let t = ej(e1, "delete"), o = t.at(-1);
        if (!o) {
            console.warn(`[reduceRepeatableSectionRows] No delete button found for ${e1}`);
            break;
        }
        o.click();
        let i = await eG(r1, n);
        if (i >= n) {
            console.warn(`[reduceRepeatableSectionRows] ${e1} count did not decrease after click, breaking loop`);
            break;
        }
        n = i;
    }
    return !0;
}
async function eX() {
    let e2 = N("education"), t = N("experience");
    if (console.info("[SuccessFactors][preclickAddButtons] repeatable gate", JSON.stringify({
        structuredSectionCount: document.querySelectorAll(".rcmFormSection").length,
        structuredSectionLabels: $(),
        shouldHandleEducation: e2,
        shouldHandleExperience: t
    })), e2 && (await eJ(), await (0, u.delay)(300)), t && (await eQ(), await (0, u.delay)(300)), e2) {
        let e2 = e1();
        e2 < 1 && (await e5(), await (0, u.delay)(300));
    }
    if (t) {
        let e1 = e3();
        e1 < 1 && (await e6(), await (0, u.delay)(300));
    }
}
async function eJ() {
    let e1 = await eK("education", 0);
    if (e1) return;
    let t = eA();
    if (!t) {
        console.warn("[deleteEducationSections] profileLowerLayout not found");
        return;
    }
    let r1 = ek(g), n = r1 ? eI(r1, g, "delete") : eI(t, g, "delete");
    if (0 === n.length) {
        console.warn("[deleteEducationSections] No delete buttons found, trying XPath...");
        let e1 = `
      //span[contains(@class, "hiddenAriaContent")
             and contains(@aria-label, "Education")]
      /parent::*[contains(translate(@title, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "delete")]
    `, t = (0, s.getFirstOrderedNode)(e1);
        t && (n = [
            t
        ]);
    }
    if (0 === n.length) {
        console.warn("[deleteEducationSections] No delete buttons found after XPath");
        return;
    }
    for (let e1 of n)e1.click(), await (0, u.delay)(300);
}
async function eQ() {
    let e1 = await eK("experience", 0);
    if (e1) return;
    let t = eA();
    if (!t) {
        console.warn("[deleteExperienceSections] profileLowerLayout not found");
        return;
    }
    let r1 = ek(b), n = r1 ? eI(r1, b, "delete") : eI(t, b, "delete");
    if (0 === n.length) {
        console.warn("[deleteExperienceSections] No delete buttons found, trying XPath...");
        let e1 = `
      //span[contains(@class, "hiddenAriaContent")
             and contains(@aria-label, "Work Experience")]
      /parent::*[contains(translate(@title, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "delete")]
    `, t = (0, s.getFirstOrderedNode)(e1);
        t && (n = [
            t
        ]);
    }
    if (0 === n.length) {
        console.warn("[deleteExperienceSections] No delete buttons found after XPath");
        return;
    }
    for (let e1 of n)e1.click(), await (0, u.delay)(300);
}
function eZ(e1) {
    let t = e1?.replace(/\s+/g, " ").match(/(?:section\s+has|section\s+with)\s+(\d+)\s+rows?/i);
    return t ? parseInt(t[1], 10) : null;
}
function e0(e1) {
    let t = ek(e1);
    if (!t) return null;
    let r1 = eZ(t.textContent);
    if (null !== r1) return r1;
    let n = t.querySelectorAll('[id$="_fieldsLayout"], table[role="presentation"]');
    return n.length > 0 ? n.length : null;
}
function e2(e1) {
    let t = Array.from(document.querySelectorAll("span.hiddenAriaContent, span[id$='_noItems']"));
    for (let r1 of t){
        let t = r1.textContent?.replace(/\s+/g, " ").trim() || "", n = t.toLowerCase(), o = e1.some((e1)=>n.includes(e1));
        if (!o) continue;
        let i = eZ(t);
        if (null !== i) return i;
    }
    return null;
}
function e1() {
    let e1 = M("education"), t = e1 ? B(e1) : null;
    if (null !== t) return t;
    let r1 = document.querySelector("#education, #educationNA");
    if (r1) {
        let e1 = r1.children.length;
        return e1;
    }
    let n = e0(g);
    if (null !== n) return n;
    let o = e2(g);
    if (null !== o) return o;
    console.warn("[countEducationSections] Education container not found, trying h2 search...");
    let i = Array.from(document.querySelectorAll("h2")), a = i.find((e1)=>e1.textContent?.toLowerCase().includes("education"));
    if (a && a.nextElementSibling) {
        let e1 = a.nextElementSibling.querySelectorAll("span");
        for (let t of e1){
            let e1 = t.textContent?.trim(), r1 = eZ(e1);
            if (null !== r1) return r1;
        }
    }
    return console.warn("[countEducationSections] Unable to extract count from XPath"), 0;
}
function e3() {
    let e1 = M("experience"), t = e1 ? B(e1) : null;
    if (null !== t) return t;
    let r1 = document.querySelector("#outsideWorkExperience, #outsideWorkExperienceNA");
    if (r1) {
        let e1 = r1.children.length;
        return e1;
    }
    let n = e0(b);
    if (null !== n) return n;
    let o = e2(b);
    if (null !== o) return o;
    console.warn("[countExperienceSections] Experience container not found, trying h2 search...");
    let i = Array.from(document.querySelectorAll("h2")), a = i.find((e1)=>{
        let t = e1.textContent?.toLowerCase() || "";
        return t.includes("experience") || t.includes("employ") || t.includes("work history");
    });
    if (a && a.nextElementSibling) {
        let e1 = a.nextElementSibling.querySelectorAll("span");
        for (let t of e1){
            let e1 = t.textContent?.trim(), r1 = eZ(e1);
            if (null !== r1) return r1;
        }
    }
    return console.warn("[countExperienceSections] Unable to extract count from XPath"), 0;
}
async function e4(e1, t, r1 = 3e3) {
    let n = Date.now();
    for(; Date.now() - n < r1;){
        let r1 = e1();
        if (r1 > t) return r1;
        await (0, u.delay)(500);
    }
    return e1();
}
async function e5() {
    let e1 = q("education"), t = `
      //span[contains(@class, "hiddenAriaContent")
             and contains(@aria-label, "Education")]
      /parent::*[contains(translate(@title, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "add")]
    `;
    (e1 = e1 || (0, s.getFirstOrderedNode)(t)) || (e1 = Y("education")), e1 ? e1.click() : console.warn("[addEducationSection] Add button not found");
}
async function e6() {
    let e1 = q("experience");
    if (e1 || (e1 = Y("experience")), !e1) {
        let t = `
      //span[contains(@class, "hiddenAriaContent")
             and contains(@aria-label, "Work Experience")]
      /parent::*[contains(translate(@title, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "add")]
    `;
        e1 = (0, s.getFirstOrderedNode)(t);
    }
    e1 ? e1.click() : console.warn("[addExperienceSection] Add button not found");
}
async function e8(e2) {
    let t = Array.isArray(e2.education) ? e2.education.length : 0;
    t > 0 && await eK("education", t);
    let r1 = e1();
    for(; r1 < t;){
        await e5();
        let e2 = await e4(e1, r1);
        if (e2 <= r1) {
            console.warn("[expandForm] Education count did not increase after click, breaking loop");
            break;
        }
        r1 = e2;
    }
    let n = Array.isArray(e2.workExperience) ? e2.workExperience.length : 0;
    n > 0 && await eK("experience", n);
    let o = e3();
    for(; o < n;){
        await e6();
        let e1 = await e4(e3, o);
        if (e1 <= o) {
            console.warn("[expandForm] Experience count did not increase after click, breaking loop");
            break;
        }
        o = e1;
    }
}
async function e9() {
    await (0, u.delay)(500);
}
async function e7(e1) {
    try {
        let t = Array.from(document.querySelectorAll("h2")), r1 = t.find((e1)=>e1.textContent?.toLowerCase().includes("skill"));
        if (!r1) return;
        let n = r1.nextElementSibling;
        if (!n) return;
        let o = n.querySelector("ui5-input-xweb-skill-profiler");
        if (!o || !o.shadowRoot) return;
        let i = o.shadowRoot.querySelector('input[type="text"]');
        if (!i) return;
        let a = e1?.skills || [];
        for (let e1 of a){
            i.focus(), await (0, u.delay)(100), i.value = e1, i.dispatchEvent(new Event("input", {
                bubbles: !0
            })), await (0, u.delay)(500);
            let t = o.querySelector("ui5-suggestion-item-xweb-skill-profiler");
            if (t) {
                let e1 = t.shadowRoot.querySelector("span");
                e1.click(), await (0, u.delay)(200);
            } else console.warn(`[fillSkills] No suggestion found for skill: ${e1}`);
        }
    } catch (e1) {
        console.error("[fillSkills] Error:", e1);
    }
}
function te(e1, t = {}) {
    let r1 = (0, p.getFormSnapshot)(), n = (0, p.getAdditionalFormSnapshotData)();
    (0, l.sendAutofillAnswerPairEvent)({
        formUrl: (0, c.useUrlStore).getState().currentTabUrl,
        autofillSnapshot: e1,
        submitSnapshot: r1,
        additionalAutofillData: t,
        additionalSubmitData: n,
        source: "successfactors"
    });
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25;
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
$RefreshReg$(_c25, "Z");

},{}]},["2ukzo","kbQur"], "kbQur", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFBc0UsSUFBSSxJQUFFLEVBQUUsNEJBQTRCLEdBQUU7Z0JBQUcsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLElBQUk7Z0JBQUU7WUFBRSxJQUFHO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFO1lBQStCLElBQUcsTUFBSSxLQUFLLEdBQUU7Z0JBQUMsSUFBSSxJQUFFO2dCQUFFLEVBQUUsaUNBQStCLElBQUU7b0JBQUMsV0FBVSxJQUFJO29CQUFJLGVBQWMsQ0FBQztvQkFBRSxRQUFPLFNBQVMsQ0FBQzt3QkFBRSxPQUFPO29CQUFHO29CQUFFLHFCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFFO29CQUFFLG1CQUFrQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRTtvQkFBRSxzQkFBcUIsWUFBVztnQkFBQztZQUFDO1lBQUMsSUFBRyxFQUFFLFlBQVc7Z0JBQUMsUUFBUSxLQUFLO2dCQUE4SjtZQUFNO1lBQUMsSUFBSSxJQUFFLEVBQUU7WUFBTyxFQUFFLFNBQU8sU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLE1BQU0sSUFBSSxFQUFDO2dCQUFXLE9BQU8sT0FBTyxFQUFFLG1CQUFpQixjQUFZLE9BQU8sRUFBRSxxQkFBbUIsY0FBWSxFQUFFLElBQUksR0FBRSxJQUFHO1lBQUMsR0FBRSxFQUFFLFVBQVUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLE9BQU8sRUFBRSxtQkFBaUIsY0FBWSxPQUFPLEVBQUUscUJBQW1CLGNBQVksRUFBRSxJQUFJLEdBQUU7WUFBRTtZQUFHLElBQUksSUFBRSxFQUFFLG1CQUFrQixJQUFFLEVBQUUsdUJBQXFCLFlBQVc7WUFBRSxFQUFFLHNCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUksQ0FBQSxFQUFFLE9BQU8sSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLEdBQUUsRUFBQyxHQUFHLEVBQUUsTUFBTSxJQUFJLEVBQUM7WUFBVSxHQUFFLEVBQUUsb0JBQWtCLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO2dCQUFHLElBQUcsTUFBSSxLQUFLLEdBQUU7b0JBQUMsRUFBRSxJQUFJLEdBQUU7b0JBQUcsSUFBSSxJQUFFLEVBQUUsU0FBUSxJQUFFLEVBQUU7b0JBQVUsSUFBRyxNQUFJLE1BQUs7d0JBQUMsSUFBSSxJQUFFLEVBQUUsaUJBQWUsUUFBTSxFQUFFLGNBQWMsV0FBUyxRQUFNLEVBQUUsSUFBSSxJQUFHLElBQUUsRUFBRSxpQkFBZSxRQUFNLEVBQUUsY0FBYyxXQUFTO3dCQUFLLENBQUMsS0FBRyxJQUFHLENBQUEsRUFBRSxJQUFJLElBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxLQUFHLEtBQUksQ0FBQSxLQUFHLENBQUMsSUFBRyxDQUFBLEVBQUUsT0FBTyxJQUFHLElBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxDQUFDLEtBQUcsQ0FBQyxLQUFHLEtBQUcsRUFBRSxJQUFJLEVBQUM7b0JBQUUsT0FBTSxFQUFFLElBQUk7Z0JBQUU7Z0JBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxFQUFDO1lBQVU7UUFBRTtRQUFDLFNBQVM7WUFBSyxPQUFNLENBQUM7UUFBQztRQUFDLFNBQVM7WUFBSyxPQUFPLEVBQUU7UUFBSTtRQUFDLFNBQVM7WUFBTSxJQUFJLEdBQUUsR0FBRSxJQUFFLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFHLE9BQU8sS0FBRyxVQUFTLE9BQU8sS0FBSSxDQUFBLElBQUUsR0FBRSxJQUFFLE9BQU8sS0FBRyxVQUFTLEdBQUcsS0FBRyxRQUFPLENBQUEsT0FBTyxLQUFHLGNBQVksT0FBTyxLQUFHLFFBQU8sS0FBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLElBQUc7Z0JBQUUsQ0FBQyxLQUFHLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxFQUFFLEVBQUM7WUFBRTtRQUFFO1FBQUMsU0FBUyxHQUFHLENBQUM7WUFBRSxPQUFPLE9BQU87Z0JBQUcsS0FBSTtvQkFBWSxJQUFHLEVBQUUsYUFBVyxNQUFLO3dCQUFDLElBQUcsRUFBRSxVQUFVLGtCQUFpQixPQUFNLENBQUM7d0JBQUUsSUFBSSxJQUFFLE9BQU8sb0JBQW9CLEVBQUU7d0JBQVcsSUFBRyxFQUFFLFNBQU8sS0FBRyxDQUFDLENBQUMsRUFBRSxLQUFHLGlCQUFlLEVBQUUsVUFBVSxjQUFZLE9BQU8sV0FBVSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsSUFBSSxJQUFFLEVBQUUsUUFBTSxFQUFFO29CQUFZLE9BQU8sT0FBTyxLQUFHLFlBQVUsU0FBUyxLQUFLO2dCQUFHLEtBQUk7b0JBQVUsSUFBRyxLQUFHLE1BQUssT0FBTyxFQUFFLEdBQUU7d0JBQWEsS0FBSzt3QkFBRSxLQUFLOzRCQUFFLE9BQU0sQ0FBQzt3QkFBRTs0QkFBUSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsT0FBTSxDQUFDO2dCQUFFO29CQUFRLE9BQU0sQ0FBQztZQUFDO1FBQUM7UUFBQyxFQUFFLHVCQUFxQixJQUFHLEVBQUUsaUNBQStCLEdBQUUsRUFBRSxzQ0FBb0MsSUFBRyxFQUFFLDRCQUEwQixJQUFHLEVBQUUsZ0JBQWMsR0FBRSxFQUFFLGtCQUFnQixHQUFFLEVBQUUseUJBQXVCLElBQUcsRUFBRSx1QkFBcUIsSUFBRyxFQUFFLHdCQUFzQixJQUFHLEVBQUUsc0JBQW9CLEdBQUUsRUFBRSxXQUFTLEdBQUUsRUFBRSxlQUFhO0lBQUMsQ0FBQTtBQUFJO0FBQUcsSUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFHO0lBQUs7SUFBYSxFQUFFLFVBQVE7QUFBRztBQUFHLElBQUksSUFBRSxDQUFDO0FBQUUsR0FBRyxHQUFFO0lBQUMsU0FBUSxJQUFJO0FBQUU7QUFBRyxPQUFPLFVBQVEsR0FBRztBQUFHLElBQUksSUFBRSxFQUFFO0FBQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxPQUFPO0FBQVMsSUFBSSxLQUFHLEVBQUUsU0FDcDVMOzs7Ozs7Ozs7Ozs7QUFZQTs7O0FDYkE7Ozs7Ozs7Ozs7Ozs7O0NBY0MsR0FFRCxJQUFJLElBQUUsRUFBRTtBQUFrRCxFQUFFLGtCQUFrQixJQUFHLEVBQUUsT0FBTyxHQUFFLHNDQUFxQyxJQUFJLElBQUcsRUFBRSxPQUFPLEdBQUUsc0JBQXFCLElBQUksSUFBRyxFQUFFLE9BQU8sR0FBRSx1QkFBc0IsSUFBSSxLQUFJLEVBQUUsT0FBTyxHQUFFLG1CQUFrQixJQUFJLEtBQUksRUFBRSxPQUFPLEdBQUUscUJBQW9CLElBQUksS0FBSSxFQUFFLE9BQU8sR0FBRSx1QkFBc0IsSUFBSSxLQUFJLEVBQUUsT0FBTyxHQUFFLHdDQUF1QyxJQUFJLEtBQUksRUFBRSxPQUFPLEdBQUUsZ0JBQWUsSUFBSSxLQUFJLEVBQUUsT0FBTyxHQUFFLHFCQUFvQixJQUFJLEtBQUksRUFBRSxPQUFPLEdBQUUsdUNBQXNDLElBQUksS0FBSSxFQUFFLE9BQU8sR0FBRSw2Q0FBNEMsSUFBSSxLQUFJLEVBQUUsT0FBTyxHQUFFLHNCQUFxQixJQUFJLEtBQUksRUFBRSxPQUFPLEdBQUUsY0FBYSxJQUFJLEtBQUksRUFBRSxPQUFPLEdBQUUsZUFBYyxJQUFJLEtBQUksRUFBRSxPQUFPLEdBQUUsY0FBYSxJQUFJLEtBQUksRUFBRSxPQUFPLEdBQUUsaUJBQWdCLElBQUk7QUFBSSxJQUFJLElBQUUsRUFBRSw2QkFBNEIsSUFBRSxFQUFFLDBCQUF5QixJQUFFLEVBQUUsK0JBQThCLElBQUUsRUFBRSxrREFBaUQsSUFBRSxFQUFFLGdCQUFlLElBQUUsRUFBRSxpQkFBZ0IsSUFBRSxFQUFFLGVBQWMsSUFBRSxFQUFFLFVBQVMsSUFBRSxFQUFFLGVBQWUsSUFBRyxJQUFFLEVBQUU7QUFBVyxJQUFJLElBQUUsZUFBYyxJQUFFLGdCQUFlLElBQUU7SUFBQztJQUFZO0lBQXlCO0lBQW1CO0NBQW1CLEVBQUMsSUFBRTtJQUFDO0lBQWE7SUFBa0I7SUFBZTtJQUFxQjtJQUEyQjtJQUF3QjtJQUFhO0NBQXNCO0FBQUMsU0FBUyxFQUFFLEVBQUM7SUFBRSxJQUFJLElBQUUsR0FBRSxPQUFPO0lBQWMsSUFBRyxjQUFZLEtBQUcsa0JBQWdCLEdBQUUsT0FBTSxBQUFDLENBQUEsR0FBRSxFQUFFLE9BQU0sSUFBSyxPQUFPO0lBQWMsSUFBSSxLQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsT0FBTSxFQUFHO0lBQUcsT0FBTyxHQUFFLFlBQVUsR0FBRSxPQUFPLGdCQUFlLENBQUEsUUFBUSxLQUFLLENBQUMsMENBQTBDLEVBQUUsR0FBRSw2QkFBNkIsQ0FBQyxHQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsT0FBTSxJQUFLLE9BQU8sYUFBWTtBQUFFO0FBQUMsU0FBUyxFQUFFLEVBQUMsRUFBQyxDQUFDO0lBQUUsR0FBRSxjQUFjLElBQUksTUFBTSxHQUFFO1FBQUMsU0FBUSxDQUFDO1FBQUUsVUFBUyxDQUFDO0lBQUM7QUFBRztBQUFDLFNBQVMsRUFBRSxFQUFDO0lBQUUsT0FBTSxBQUFDLENBQUEsTUFBRyxFQUFDLEVBQUcsUUFBUSxXQUFVLEtBQUssUUFBUSxPQUFNLEtBQUssUUFBUSxhQUFZLElBQUksUUFBUSxRQUFPLEtBQUssT0FBTztBQUFhO0FBQUMsU0FBUyxFQUFFLEVBQUM7SUFBRSxPQUFPLEVBQUU7QUFBRTtLQUFoQjtBQUFpQixTQUFTLEVBQUUsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJLEtBQUUsRUFBRTtJQUFHLE9BQU8sRUFBRSxLQUFLLENBQUEsS0FBRyxHQUFFLFNBQVMsRUFBRTtBQUFJO01BQXBEO0FBQXFELFNBQVMsRUFBRSxFQUFDO0lBQUUsT0FBTyxFQUFFLElBQUcsUUFBUSxjQUFhO0FBQUc7QUFBQyxTQUFTLEVBQUUsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJLEtBQUUsRUFBRSxLQUFHLElBQUUsRUFBRTtJQUFHLElBQUcsQ0FBQyxNQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsSUFBSSxJQUFJO1FBQUM7UUFBUztLQUFXO0lBQUUsSUFBRyxFQUFFLElBQUksSUFBRyxPQUFPLEVBQUUsSUFBSTtJQUFHLElBQUksSUFBRSxJQUFJLElBQUk7UUFBQztLQUFjO0lBQUUsT0FBTyxFQUFFLElBQUksS0FBRyxFQUFFLElBQUksTUFBRyxPQUFJO0FBQUM7TUFBMUs7QUFBMkssU0FBUyxFQUFFLEVBQUM7SUFBRSxJQUFHLENBQUUsQ0FBQSxjQUFhLFdBQVUsS0FBSSxHQUFFLFVBQVUsU0FBUyxrQkFBZ0IsV0FBUyxHQUFFLGFBQWEsZ0JBQWUsT0FBTSxDQUFDO0lBQUUsSUFBSSxJQUFFLE9BQU8saUJBQWlCO0lBQUcsT0FBTSxXQUFTLEVBQUUsV0FBUyxhQUFXLEVBQUU7QUFBVTtNQUE1TTtBQUE2TSxTQUFTLEVBQUUsRUFBQztJQUFFLE9BQU8sTUFBTSxLQUFLLFNBQVMsaUJBQWlCLGdGQUFnRixLQUFLLENBQUE7UUFBSSxJQUFJLEtBQUUsRUFBRSxjQUFjLHVCQUF1QjtRQUFZLE9BQU8sRUFBRSxJQUFFO0lBQUUsTUFBSTtBQUFJO0FBQUMsU0FBUyxFQUFFLEVBQUM7SUFBRSxJQUFHLENBQUMsSUFBRSxPQUFPO0lBQUssSUFBSSxJQUFFLE1BQU0sS0FBSyxHQUFFLGlCQUFpQjtJQUE4RSxPQUFPLEVBQUUsS0FBSyxDQUFBO1FBQUksSUFBSSxJQUFFLEVBQUU7WUFBQyxHQUFFO1lBQVksR0FBRSxhQUFhO1lBQVMsR0FBRSxhQUFhO1lBQWMsR0FBRSxhQUFhO1NBQVcsQ0FBQyxPQUFPLFNBQVMsS0FBSztRQUFNLE9BQU8sRUFBRSxPQUFJLGdCQUFnQixLQUFLO0lBQUUsTUFBSTtBQUFJO01BQXpVO0FBQTBVLFNBQVMsRUFBRSxFQUFDO0lBQUUsT0FBTyxFQUFFO1FBQUMsR0FBRTtRQUFZLEdBQUUsYUFBYTtRQUFTLEdBQUUsYUFBYTtRQUFjLEdBQUUsYUFBYTtLQUFNLENBQUMsT0FBTyxTQUFTLEtBQUs7QUFBSztNQUFsSTtBQUFtSSxTQUFTLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUcsS0FBRSxHQUFHLGNBQWMsdUJBQXNCLElBQUUsR0FBRyxjQUFjLG9CQUFtQixJQUFFLEdBQUcsY0FBYywwRUFBd0UsTUFBSyxJQUFFLEdBQUcsY0FBYywyQkFBMEIsSUFBRSxHQUFHLGNBQWMsaUNBQWdDLElBQUUsR0FBRyxjQUFjLE1BQUssSUFBRSxLQUFHLEdBQUUsSUFBRSxFQUFFO0lBQUcsT0FBTTtRQUFDLFdBQVU7UUFBRSxPQUFNO1FBQUUsY0FBYTtRQUFFLGNBQWE7UUFBRSxhQUFZO1FBQUUsZUFBYztRQUFFLGNBQWE7UUFBRSxrQkFBaUI7UUFBRSxjQUFhO0lBQUM7QUFBQztNQUE3YztBQUE4YyxTQUFTO0lBQUksSUFBSSxLQUFFLE1BQU0sS0FBSyxTQUFTLGlCQUFpQiw0RUFBMkUsSUFBRSxHQUFFLEtBQUssQ0FBQTtRQUFJLElBQUksSUFBRSxFQUFFO1FBQUcsT0FBTyxFQUFFLFNBQVMsbUJBQWtCLENBQUEsRUFBRSxTQUFTLDBCQUF3QixFQUFFLFNBQVMsK0JBQTZCLEVBQUUsU0FBUyw4QkFBNkI7SUFBRSxNQUFJO0lBQUssSUFBRyxDQUFDLEdBQUUsT0FBTTtRQUFDLFdBQVU7UUFBSyxjQUFhO0lBQUk7SUFBRSxJQUFJLEtBQUUsTUFBTSxLQUFLLEVBQUUsaUJBQWlCLGlJQUFpSSxPQUFPLENBQUE7UUFBSSxJQUFJLElBQUUsRUFBRTtRQUFHLE9BQU8sRUFBRSxTQUFTLDBCQUF3QixFQUFFLFNBQVMsK0JBQTZCLEVBQUUsU0FBUztJQUFlLElBQUcsSUFBRSxHQUFFLEtBQUssQ0FBQSxLQUFHLEdBQUUsR0FBRyxTQUFTLHFCQUFtQixHQUFFLEtBQUssQ0FBQSxLQUFHLEVBQUUsUUFBSztJQUFLLE9BQU07UUFBQyxXQUFVO1FBQUUsY0FBYTtJQUFDO0FBQUM7QUFBQyxTQUFTO0lBQUksSUFBSSxLQUFFLE1BQU0sS0FBSyxTQUFTLGlCQUFpQiw0RkFBNEYsT0FBTyxDQUFBLEtBQUcsR0FBRSxlQUFhLENBQUMsR0FBRTtJQUFVLE9BQU8sR0FBRSxLQUFLLENBQUEsS0FBRyxHQUFFLFVBQVUsU0FBUyxpQkFBZSxnQkFBYyxHQUFFLFNBQU8sR0FBRSxHQUFHLE9BQUs7QUFBSTtNQUEzUTtBQUE0USxTQUFTLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUcsS0FBRSxHQUFHLGNBQWM7SUFBc0IsT0FBTyxNQUFHO0FBQUc7TUFBdEU7QUFBdUUsU0FBUztJQUFJLE9BQU8sU0FBUyxjQUFjO0FBQXVEO0FBQUMsU0FBUyxFQUFFLEVBQUM7SUFBRSxPQUFNLEFBQUMsQ0FBQSxNQUFHLEVBQUMsRUFBRyxRQUFRLFdBQVUsS0FBSyxRQUFRLFFBQU8sS0FBSyxPQUFPO0FBQWE7TUFBbEY7QUFBbUYsU0FBUyxFQUFFLEVBQUMsRUFBQyxDQUFDO0lBQUUsSUFBSSxLQUFFLEVBQUU7SUFBRyxPQUFNLGdCQUFjLElBQUUsRUFBRSxLQUFLLENBQUEsS0FBRyxHQUFFLFNBQVMsRUFBRSxRQUFLLEVBQUUsS0FBSyxDQUFBLEtBQUcsR0FBRSxTQUFTLEVBQUU7QUFBSTtPQUEvRjtBQUFnRyxTQUFTLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxHQUFFLGNBQWMsMEJBQTBCLGVBQWEsR0FBRSxjQUFjLE9BQU8sZUFBYSxJQUFHLEtBQUUsTUFBTSxLQUFLLEdBQUUsaUJBQWlCLG1DQUFtQyxJQUFJLENBQUEsS0FBRyxHQUFFLGFBQWEsaUJBQWUsSUFBSSxLQUFLO0lBQUssT0FBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRSxDQUFDO0FBQUE7T0FBaFA7QUFBaVAsU0FBUyxFQUFFLEVBQUM7SUFBRSxJQUFJLElBQUUsTUFBTSxLQUFLLFNBQVMsaUJBQWlCO0lBQW9CLE9BQU8sRUFBRSxLQUFLLENBQUEsSUFBRyxFQUFFLEVBQUUsSUFBRyxRQUFLO0FBQUk7T0FBckc7QUFBc0csU0FBUyxFQUFFLEVBQUM7SUFBRSxJQUFJLElBQUUsU0FBUyxpQkFBaUIsbUJBQW1CLFNBQU87SUFBRSxPQUFNLENBQUMsS0FBRyxDQUFDLENBQUMsRUFBRTtBQUFFO09BQWpGO0FBQWtGLFNBQVM7SUFBSSxPQUFPLE1BQU0sS0FBSyxTQUFTLGlCQUFpQixvQkFBb0IsSUFBSSxDQUFBLEtBQUcsRUFBRSxJQUFHLFFBQVEsUUFBTyxLQUFLLFFBQVEsT0FBTztBQUFRO0FBQUMsU0FBUyxFQUFFLEVBQUM7SUFBRSxJQUFJLElBQUUsR0FBRSxpQkFBaUI7SUFBd0IsSUFBRyxFQUFFLFNBQU8sR0FBRSxPQUFPLEVBQUU7SUFBTyxJQUFJLEtBQUUsRUFBRSxHQUFFO0lBQWEsSUFBRyxHQUFFLFNBQVMsdUNBQXNDLE9BQU87SUFBRSxJQUFJLElBQUUsTUFBTSxLQUFLLEdBQUUsaUJBQWlCLFNBQVMsSUFBSSxDQUFBLEtBQUcsR0FBRSxlQUFhO0lBQUksSUFBRyxFQUFFLEtBQUssQ0FBQSxLQUFHLEVBQUUsSUFBRyxTQUFTLHdDQUF1QyxPQUFPO0lBQUUsSUFBSSxJQUFFLEVBQUUsS0FBSyxDQUFBLEtBQUcsd0NBQXdDLEtBQUssTUFBSSxJQUFFLEdBQUcsTUFBTTtJQUEyQyxPQUFPLElBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFDLE1BQUk7QUFBSTtPQUFoZDtBQUFpZCxTQUFTLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxFQUFFO0lBQUcsT0FBTyxJQUFFLEVBQUUsY0FBYyw2RUFBMkU7QUFBSTtBQUFDLFNBQVMsRUFBRSxFQUFDO0lBQUUsT0FBTyxFQUFFO1FBQUMsR0FBRTtRQUFZLEdBQUUsYUFBYTtRQUFjLEdBQUUsYUFBYTtLQUFTLENBQUMsT0FBTyxTQUFTLEtBQUs7QUFBSztPQUE3RztBQUE4RyxTQUFTLEVBQUUsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJLEtBQUUsRUFBRTtJQUFHLE9BQU0sQ0FBQyxDQUFDLEdBQUUsU0FBUyxVQUFRLEVBQUUsSUFBRTtBQUFFO09BQW5EO0FBQW9ELFNBQVMsRUFBRSxFQUFDO0lBQUUsSUFBSSxJQUFFLE1BQU0sS0FBSyxTQUFTLGlCQUFpQjtJQUFxQixPQUFPLEVBQUUsS0FBSyxDQUFBLElBQUcsRUFBRSxHQUFFLFFBQUs7QUFBSTtPQUFuRztBQUFvRyxTQUFTLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxFQUFFO0lBQUcsT0FBTSxDQUFDLENBQUMsRUFBRSxnQkFBZSxDQUFBLEVBQUUsYUFBYSxTQUFRLENBQUMsQ0FBQTtBQUFFO0FBQUMsU0FBUztJQUFJLElBQUcsRUFBRSxJQUFHLE9BQU0sQ0FBQztJQUFFLElBQUksS0FBRTtJQUFJLE9BQU0sQ0FBQyxDQUFDLEdBQUUsZ0JBQWUsQ0FBQSxHQUFFLGFBQWEsU0FBUSxDQUFDLENBQUE7QUFBRTtPQUFsRjtBQUFtRixlQUFlLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsZ0JBQWUsRUFBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUc7UUFBQyxTQUFRO1FBQUksVUFBUztRQUFJLGVBQWMsU0FBUztJQUFJO0lBQUcsT0FBTyxJQUFFLEVBQUUsTUFBRztBQUFJO09BQTdIO0FBQThILFNBQVM7SUFBSSxJQUFJLEtBQUUsRUFBRSxJQUFHLElBQUUsS0FBSSxLQUFFLENBQUMsQ0FBQyxHQUFFLGFBQVksQ0FBQSxDQUFDLENBQUMsR0FBRSxnQkFBYyxDQUFDLENBQUMsR0FBRSxnQkFBYyxDQUFDLENBQUMsR0FBRSxlQUFhLENBQUMsQ0FBQyxHQUFFLGFBQVksR0FBRyxJQUFFLENBQUMsQ0FBQyxFQUFFLGFBQVcsQ0FBQyxDQUFDLEVBQUU7SUFBYSxPQUFPLE1BQUcsSUFBRSxhQUFXO0FBQUU7T0FBMUs7QUFBMkssZUFBZSxFQUFFLEVBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRztRQUFDLElBQUcsQ0FBQyxJQUFFO1lBQUMsUUFBUSxLQUFLO1lBQThDO1FBQU07UUFBQyxJQUFJLEtBQUUsaUJBQWUsR0FBRSxhQUFhLHlCQUF3QixJQUFFO1FBQUUsTUFBSSxDQUFBLElBQUUsRUFBRSxFQUFDLEdBQUcsR0FBRSxTQUFRLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsTUFBSyxHQUFFLFFBQU0sSUFBRyxFQUFFLElBQUUsVUFBUyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLE1BQUssR0FBRSxRQUFNLEdBQUUsRUFBRSxJQUFFLFVBQVMsRUFBRSxJQUFFLFdBQVUsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRztJQUFJLEVBQUMsT0FBTSxJQUFFO1FBQUMsUUFBUSxLQUFLLCtCQUE4QjtJQUFFO0FBQUM7T0FBblc7QUFBb1csU0FBUyxFQUFFLEVBQUMsRUFBQyxDQUFDO0lBQUUsR0FBRSxTQUFRLEdBQUUsUUFBTTtJQUFHLElBQUksSUFBSSxLQUFFLEdBQUUsS0FBRSxFQUFFLFFBQU8sS0FBSTtRQUFDLElBQUksSUFBRSxDQUFDLENBQUMsR0FBRSxFQUFDLElBQUUsRUFBRSxNQUFNLEdBQUUsS0FBRSxJQUFHLElBQUUsTUFBSSxFQUFFLFVBQVEsV0FBVyxLQUFLLElBQUcsSUFBRSxJQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsY0FBYyxDQUFDLEdBQUM7UUFBZSxHQUFFLGNBQWMsSUFBSSxjQUFjLFdBQVU7WUFBQyxLQUFJO1lBQUUsTUFBSztZQUFFLFNBQVEsQ0FBQztZQUFFLFlBQVcsQ0FBQztRQUFDLEtBQUksR0FBRSxRQUFNLEdBQUUsR0FBRSxjQUFjLElBQUksV0FBVyxTQUFRO1lBQUMsTUFBSztZQUFFLFdBQVU7WUFBYSxTQUFRLENBQUM7UUFBQyxLQUFJLEdBQUUsY0FBYyxJQUFJLGNBQWMsU0FBUTtZQUFDLEtBQUk7WUFBRSxNQUFLO1lBQUUsU0FBUSxDQUFDO1lBQUUsWUFBVyxDQUFDO1FBQUM7SUFBRztBQUFDO09BQTFhO0FBQTJhLFNBQVMsRUFBRSxFQUFDO0lBQUUsT0FBTyxLQUFFLE1BQU0sS0FBSyxHQUFFLGlCQUFpQixPQUFPLE9BQU8sQ0FBQSxLQUFHLEdBQUUsYUFBYSxXQUFTLGtCQUFnQixFQUFFO0FBQUE7T0FBdkc7QUFBd0csU0FBUyxFQUFFLEVBQUM7SUFBRSxPQUFPLEdBQUUsT0FBTyxjQUFjLFFBQVEsUUFBTztBQUFJO09BQXREO0FBQXVELFNBQVMsRUFBRSxFQUFDO0lBQUUsT0FBTyxFQUFFLElBQUcsUUFBUSxjQUFhO0FBQUc7T0FBekM7QUFBMEMsSUFBSSxLQUFHO0lBQUM7UUFBQztRQUFlO1FBQXdCO1FBQU07S0FBSztDQUFDO0FBQUMsU0FBUyxHQUFHLEVBQUM7SUFBRSxPQUFPLEVBQUUsTUFBRyxJQUFJLFNBQVM7QUFBVTtBQUFDLFNBQVMsR0FBRyxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksS0FBRSxFQUFFLEtBQUcsSUFBRSxFQUFFLE9BQU87SUFBSSxPQUFNLENBQUMsQ0FBQyxNQUFHLENBQUMsQ0FBQyxLQUFHLEdBQUcsS0FBSyxDQUFBLEtBQUcsR0FBRSxTQUFTLE9BQUksR0FBRSxTQUFTO0FBQUc7QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLElBQUksSUFBRSxPQUFPLE1BQUcsSUFBSTtJQUFPLE9BQU8sSUFBRSxHQUFHLEtBQUssQ0FBQSxLQUFHLEdBQUUsU0FBUyxFQUFFLE9BQUs7UUFBQztRQUFFO1FBQU07UUFBZ0I7UUFBMkI7S0FBSyxDQUFDLElBQUksQ0FBQSxLQUFHLEdBQUUsUUFBUSxPQUFPLENBQUMsSUFBRSxHQUFFO1FBQUssSUFBRyxDQUFDLElBQUUsT0FBTSxDQUFDO1FBQUUsSUFBSSxJQUFFLEVBQUU7UUFBRyxPQUFPLEdBQUUsVUFBVSxDQUFBLEtBQUcsRUFBRSxRQUFLLE9BQUs7SUFBQyxLQUFHO1FBQUM7S0FBRSxHQUFDLEVBQUU7QUFBQTtBQUFDLFNBQVMsR0FBRyxFQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUUsQ0FBQyxDQUFDO0lBQUUsSUFBSSxJQUFFLE9BQU8sR0FBRztJQUFPLElBQUcsQ0FBQyxHQUFFLFVBQVEsQ0FBQyxHQUFFLE9BQU0sQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUcsSUFBRSxFQUFFO0lBQUcsT0FBTyxPQUFJLEtBQUcsTUFBSSxLQUFHLEVBQUUsUUFBSyxFQUFFLE1BQUksQ0FBQyxNQUFJLEdBQUUsdUJBQXFCLEdBQUcsSUFBRTtBQUFFO0FBQUMsU0FBUyxHQUFHLEVBQUMsRUFBQyxDQUFDLEVBQUMsS0FBRSxDQUFDLENBQUM7SUFBRSxJQUFJLElBQUUsR0FBRSxjQUFjLE1BQU0sYUFBYSxVQUFRLEdBQUUsYUFBYSxVQUFRO0lBQUcsT0FBTyxHQUFHLEdBQUUsR0FBRTtRQUFDLHFCQUFvQjtJQUFDO0FBQUU7QUFBQyxTQUFTLEdBQUcsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJLEtBQUUsR0FBRyxHQUFFLFNBQU8sSUFBRyxHQUFFO1FBQUMscUJBQW9CLENBQUM7SUFBQyxJQUFHLElBQUUsR0FBRSxhQUFhLFlBQVU7SUFBRyxPQUFPLEVBQUUsU0FBTyxNQUFHLEdBQUcsR0FBRSxHQUFFO1FBQUMscUJBQW9CLENBQUM7SUFBQyxLQUFHO0FBQUM7QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLElBQUksSUFBRSxHQUFFLGNBQWM7SUFBTSxDQUFBLEtBQUcsRUFBQSxFQUFHO0FBQU87QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLE9BQU8sY0FBYSxvQkFBa0IsQ0FBQyxDQUFDLEdBQUUsUUFBUTtBQUF1QjtBQUFDLGVBQWUsR0FBRyxFQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUU7SUFBQyxPQUFPLEtBQUcsSUFBSTtDQUFPLEVBQUMsSUFBRSxDQUFDLENBQUM7SUFBRSxJQUFJLElBQUUsR0FBRSxPQUFPO0lBQVMsSUFBRyxNQUFJLEVBQUUsUUFBTyxPQUFNLEVBQUU7SUFBQyxLQUFJLElBQUksTUFBSyxFQUFFO1FBQUMsR0FBRSxTQUFRLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsTUFBSyxFQUFFLElBQUU7UUFBRyxJQUFJLElBQUU7UUFBRSxJQUFJLElBQUksS0FBRSxHQUFFLEtBQUUsR0FBRSxLQUFJO1lBQUMsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRztZQUFLLElBQUksS0FBRSxHQUFFLGFBQWEsY0FBYSxJQUFFLEFBQUMsQ0FBQSxLQUFFLFNBQVMsZUFBZSxNQUFHLElBQUcsS0FBSSxTQUFTLGNBQWMscUJBQW9CLElBQUUsRUFBRSxJQUFHLElBQUUsUUFBUSxLQUFLLE9BQU8sS0FBRyxJQUFJO1lBQVEsSUFBRyxFQUFFLFNBQU8sS0FBSSxDQUFBLEtBQUcsRUFBRSxLQUFLLENBQUEsS0FBRyxHQUFHLElBQUUsR0FBRSxHQUFFLEdBQUcsT0FBTztRQUFDO0lBQUM7SUFBQyxPQUFNLEVBQUU7QUFBQTtBQUFDLGVBQWUsR0FBRyxFQUFDLEVBQUMsQ0FBQztJQUFFLEdBQUcsSUFBRyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLE1BQUssR0FBRSxjQUFjLElBQUksTUFBTSxVQUFTO1FBQUMsU0FBUSxDQUFDO0lBQUMsS0FBSSxHQUFFLGNBQWMsSUFBSSxNQUFNLFFBQU87UUFBQyxTQUFRLENBQUM7SUFBQztBQUFHO0FBQUMsZUFBZSxHQUFHLEVBQUMsRUFBQyxDQUFDO0lBQUUsSUFBSSxLQUFFO0lBQUUsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLElBQUUsSUFBSTtRQUFDLElBQUcsR0FBRyxJQUFFLElBQUcsT0FBTSxDQUFDO1FBQUUsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRztJQUFJO0lBQUMsT0FBTyxHQUFHLElBQUU7QUFBRTtBQUFDLFNBQVMsR0FBRyxFQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUM7SUFBRSxHQUFFLFFBQU0sR0FBRSxHQUFFLFFBQU0sSUFBRSxHQUFFLGNBQWMsSUFBSSxNQUFNLFNBQVE7UUFBQyxTQUFRLENBQUM7SUFBQyxLQUFJLEdBQUUsY0FBYyxJQUFJLE1BQU0sVUFBUztRQUFDLFNBQVEsQ0FBQztJQUFDLEtBQUksR0FBRSxjQUFjLElBQUksTUFBTSxRQUFPO1FBQUMsU0FBUSxDQUFDO0lBQUM7QUFBRztBQUFDLGVBQWUsR0FBRyxFQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsQ0FBQyxNQUFHLENBQUMsR0FBRyxRQUFPLE9BQU0sQ0FBQztJQUFFLElBQUksS0FBRSxPQUFPLEdBQUcsUUFBTyxJQUFFLEdBQUUsT0FBTSxJQUFFLEdBQUUsYUFBYSxZQUFVO0lBQUcsSUFBRyxHQUFHLElBQUUsS0FBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsR0FBRyxLQUFHLElBQUUsTUFBSyxJQUFFO0lBQUUsS0FBSSxJQUFJLEtBQUssRUFBRTtRQUFDLEdB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LENBQUEsSUFBRSxHQUFHO1FBQUMsR0FBRTtRQUFNLEdBQUU7S0FBSyxDQUFDLEtBQUssUUFBTSxNQUFHLEtBQUcsQ0FBQTtBQUFFO0FBQUMsU0FBUyxHQUFHLEVBQUM7SUFBRSxJQUFJLElBQUUsTUFBTSxLQUFLLEdBQUUsaUJBQWlCO0lBQThDLE9BQU8sRUFBRSxLQUFLLENBQUEsS0FBRyxFQUFFLEdBQUcsS0FBRztZQUFDO1lBQVM7U0FBUyxNQUFJO0FBQUk7QUFBQyxlQUFlLEdBQUcsRUFBQztJQUFFLElBQUc7UUFBQyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsZ0JBQWUsRUFBRyxJQUFJLEtBQUssV0FBUyxHQUFFLE9BQU07WUFBQyxTQUFRO1lBQUssVUFBUztZQUFJLGVBQWMsU0FBUztRQUFJO1FBQUcsSUFBSSxJQUFFO1FBQUssSUFBSSxJQUFJLEtBQUUsRUFBRSxTQUFPLEdBQUUsTUFBRyxHQUFFLE1BQUcsRUFBRTtZQUFDLElBQUksS0FBRSxHQUFHLENBQUMsQ0FBQyxHQUFFO1lBQUUsSUFBRyxDQUFDLEdBQUcsS0FBRztZQUFTLElBQUksSUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFFO1lBQUUsS0FBSSxDQUFBLEVBQUUsU0FBUSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLElBQUc7UUFBRTtJQUFDLEVBQUMsT0FBTSxJQUFFO1FBQUMsUUFBUSxLQUFLLG9GQUFtRjtJQUFFO0FBQUM7QUFBQyxlQUFlLEdBQUcsRUFBQyxFQUFDLENBQUMsRUFBQyxLQUFFLEdBQUc7SUFBRSxJQUFJLElBQUUsS0FBSztJQUFNLE1BQUssS0FBSyxRQUFNLElBQUUsSUFBRztRQUFDLElBQUksS0FBRTtRQUFJLElBQUcsS0FBRSxHQUFFLE9BQU87UUFBRSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHO0lBQUk7SUFBQyxPQUFPO0FBQUc7QUFBQyxlQUFlLEdBQUcsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFHLENBQUMsRUFBRSxLQUFHLE9BQU0sQ0FBQztJQUFFLElBQUksS0FBRSxHQUFHLEtBQUcsSUFBRTtJQUFJLE1BQUssSUFBRSxHQUFHO1FBQUMsSUFBSSxJQUFFLEdBQUcsSUFBRSxXQUFVLElBQUUsRUFBRSxHQUFHO1FBQUksSUFBRyxDQUFDLEdBQUU7WUFBQyxRQUFRLEtBQUssQ0FBQyx5REFBeUQsRUFBRSxHQUFFLENBQUM7WUFBRTtRQUFLO1FBQUMsRUFBRTtRQUFRLElBQUksSUFBRSxNQUFNLEdBQUcsSUFBRTtRQUFHLElBQUcsS0FBRyxHQUFFO1lBQUMsUUFBUSxLQUFLLENBQUMsOEJBQThCLEVBQUUsR0FBRSxrREFBa0QsQ0FBQztZQUFFO1FBQUs7UUFBQyxJQUFFO0lBQUM7SUFBQyxPQUFNLENBQUM7QUFBQztBQUFDLGVBQWU7SUFBSyxJQUFJLEtBQUUsRUFBRSxjQUFhLElBQUUsRUFBRTtJQUFjLElBQUcsUUFBUSxLQUFLLHdEQUF1RCxLQUFLLFVBQVU7UUFBQyx3QkFBdUIsU0FBUyxpQkFBaUIsbUJBQW1CO1FBQU8seUJBQXdCO1FBQUksdUJBQXNCO1FBQUUsd0JBQXVCO0lBQUMsS0FBSSxNQUFJLENBQUEsTUFBTSxNQUFLLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUcsSUFBRyxHQUFHLEtBQUksQ0FBQSxNQUFNLE1BQUssTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxJQUFHLEdBQUcsSUFBRTtRQUFDLElBQUksS0FBRTtRQUFLLEtBQUUsS0FBSSxDQUFBLE1BQU0sTUFBSyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLElBQUc7SUFBRTtJQUFDLElBQUcsR0FBRTtRQUFDLElBQUksS0FBRTtRQUFLLEtBQUUsS0FBSSxDQUFBLE1BQU0sTUFBSyxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHLElBQUc7SUFBRTtBQUFDO0FBQUMsZUFBZTtJQUFLLElBQUksS0FBRSxNQUFNLEdBQUcsYUFBWTtJQUFHLElBQUcsSUFBRTtJQUFPLElBQUksSUFBRTtJQUFLLElBQUcsQ0FBQyxHQUFFO1FBQUMsUUFBUSxLQUFLO1FBQTBEO0lBQU07SUFBQyxJQUFJLEtBQUUsR0FBRyxJQUFHLElBQUUsS0FBRSxHQUFHLElBQUUsR0FBRSxZQUFVLEdBQUcsR0FBRSxHQUFFO0lBQVUsSUFBRyxNQUFJLEVBQUUsUUFBTztRQUFDLFFBQVEsS0FBSztRQUFzRSxJQUFJLEtBQUUsQ0FBQzs7OztJQUlqbHBCLENBQUMsRUFBQyxJQUFFLEFBQUMsQ0FBQSxHQUFFLEVBQUUsbUJBQWtCLEVBQUc7UUFBRyxLQUFJLENBQUEsSUFBRTtZQUFDO1NBQUUsQUFBRDtJQUFFO0lBQUMsSUFBRyxNQUFJLEVBQUUsUUFBTztRQUFDLFFBQVEsS0FBSztRQUFpRTtJQUFNO0lBQUMsS0FBSSxJQUFJLE1BQUssRUFBRSxHQUFFLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRztBQUFJO0FBQUMsZUFBZTtJQUFLLElBQUksS0FBRSxNQUFNLEdBQUcsY0FBYTtJQUFHLElBQUcsSUFBRTtJQUFPLElBQUksSUFBRTtJQUFLLElBQUcsQ0FBQyxHQUFFO1FBQUMsUUFBUSxLQUFLO1FBQTJEO0lBQU07SUFBQyxJQUFJLEtBQUUsR0FBRyxJQUFHLElBQUUsS0FBRSxHQUFHLElBQUUsR0FBRSxZQUFVLEdBQUcsR0FBRSxHQUFFO0lBQVUsSUFBRyxNQUFJLEVBQUUsUUFBTztRQUFDLFFBQVEsS0FBSztRQUF1RSxJQUFJLEtBQUUsQ0FBQzs7OztJQUloZ0IsQ0FBQyxFQUFDLElBQUUsQUFBQyxDQUFBLEdBQUUsRUFBRSxtQkFBa0IsRUFBRztRQUFHLEtBQUksQ0FBQSxJQUFFO1lBQUM7U0FBRSxBQUFEO0lBQUU7SUFBQyxJQUFHLE1BQUksRUFBRSxRQUFPO1FBQUMsUUFBUSxLQUFLO1FBQWtFO0lBQU07SUFBQyxLQUFJLElBQUksTUFBSyxFQUFFLEdBQUUsU0FBUSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsS0FBSSxFQUFHO0FBQUk7QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLElBQUksSUFBRSxJQUFHLFFBQVEsUUFBTyxLQUFLLE1B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R0FBRSxFQUFFLDJCQUEwQixFQUFHO1FBQUMsU0FBUSxBQUFDLENBQUEsR0FBRSxFQUFFLFdBQVUsRUFBRyxXQUFXO1FBQWMsa0JBQWlCO1FBQUUsZ0JBQWU7UUFBRSx3QkFBdUI7UUFBRSxzQkFBcUI7UUFBRSxRQUFPO0lBQWdCO0FBQUUiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLWQ2M2ZiYjFmYjY5ZTAxMzAuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvc3VjY2Vzc2ZhY3RvcnMvb3BlcmF0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxzdWNjZXNzZmFjdG9yc1xcXFxvcGVyYXRpb25zLmpzXCIsXCJidW5kbGVJZFwiOlwiODBlNjU5YjZiNTc1ODJjMFwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IGVHdjVPXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9zdWNjZXNzZmFjdG9ycy9vcGVyYXRpb25zLmpzXHJcbiAqIERlcGVuZGVuY2llczpcclxuICogICAuL3J1bGVzIC0+IDZTM2d1ICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3N1Y2Nlc3NmYWN0b3JzL3J1bGVzLmpzXHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICBkYXlqcyAtPiBmbmhYcCAgPT4gIF90aWxkZV9ub2RlX21vZHVsZXMvZGF5anMuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXIgLT4gN1Q1ZVcgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9hbnN3ZXIuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9kb20gLT4gaEE1UWEgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9kb20uanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9vYnNlcnZlciAtPiBlVHpVeCAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL29ic2VydmVyLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2F1dG9maWxsLWFuc3dlci1wYWlyLXRyYWNraW5nIC0+IGFDRWxaICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2F1dG9maWxsLWFuc3dlci1wYWlyLXRyYWNraW5nLmpzXHJcbiAqICAgfmNvcmUveHBhdGggLT4gYWdFNHUgID0+ICBzcmMvY29yZS94cGF0aC5qc1xyXG4gKiAgIH5zdG9yZS91cmwgLT4gYjUzTDMgID0+ICBzcmMvc3RvcmUvdXJsLmpzXHJcbiAqICAgfnV0aWxzL2RlbGF5IC0+IGFtNjE0ICA9PiAgc3JjL3V0aWxzL2RlbGF5LmpzXHJcbiAqL1xyXG5cclxudmFyIG49ZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7bi5kZWZpbmVJbnRlcm9wRmxhZyhyKSxuLmV4cG9ydChyLFwiZ2V0U3VjY2Vzc0ZhY3RvcnNDb3ZlckxldHRlclN0YXR1c1wiLCgpPT5HKSxuLmV4cG9ydChyLFwiZmlsbElucHV0VGV4dEZpZWxkXCIsKCk9PkspLG4uZXhwb3J0KHIsXCJmaWxsQ291bnRyeUNvbWJvYm94XCIsKCk9PmVwKSxuLmV4cG9ydChyLFwiZmlsbFNlbGVjdEZpZWxkXCIsKCk9PmVtKSxuLmV4cG9ydChyLFwiZmlsbENoZWNrYm94RmllbGRcIiwoKT0+ZWgpLG4uZXhwb3J0KHIsXCJmaWxsUmFkaW9Hcm91cEZpbGVkXCIsKCk9PmVnKSxuLmV4cG9ydChyLFwiaGFzU3VjY2Vzc0ZhY3RvcnNSZXN1bWVVcGxvYWRTdXJmYWNlXCIsKCk9PmVFKSxuLmV4cG9ydChyLFwidXBsb2FkUmVzdW1lXCIsKCk9PmV4KSxuLmV4cG9ydChyLFwidXBsb2FkQ292ZXJMZXR0ZXJcIiwoKT0+ZUMpLG4uZXhwb3J0KHIsXCJjYXB0dXJlU3VjY2Vzc0ZhY3RvcnNFeHBlcmllbmNlUm93c1wiLCgpPT5lVSksbi5leHBvcnQocixcImNsZWFudXBTdWNjZXNzRmFjdG9yc1BhcnNlZEV4cGVyaWVuY2VSb3dzXCIsKCk9PmVXKSxuLmV4cG9ydChyLFwicHJlY2xpY2tBZGRCdXR0b25zXCIsKCk9PmVYKSxuLmV4cG9ydChyLFwiZXhwYW5kRm9ybVwiLCgpPT5lOCksbi5leHBvcnQocixcInByZUZpbGxGb3JtXCIsKCk9PmU5KSxuLmV4cG9ydChyLFwiZmlsbFNraWxsc1wiLCgpPT5lNyksbi5leHBvcnQocixcInN1Ym1pdEhhbmRsZXJcIiwoKT0+dGUpO3ZhciBvPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9hbnN3ZXJcIiksaT1lKFwifmNvbnRlbnRzL21ldGhvZHMvZG9tXCIpLGE9ZShcIn5jb250ZW50cy9tZXRob2RzL29ic2VydmVyXCIpLGw9ZShcIn5jb250ZW50cy9zaXRlcy9hdXRvZmlsbC1hbnN3ZXItcGFpci10cmFja2luZ1wiKSxzPWUoXCJ+Y29yZS94cGF0aFwiKSx1PWUoXCJ+dXRpbHMvZGVsYXlcIiksYz1lKFwifnN0b3JlL3VybFwiKSxkPWUoXCJkYXlqc1wiKSxmPW4uaW50ZXJvcERlZmF1bHQoZCkscD1lKFwiLi9ydWxlc1wiKTtsZXQgbT1cIlJlc3VtZSAvIENWXCIsaD1cIkNvdmVyIExldHRlclwiLGc9W1wiZWR1Y2F0aW9uXCIsXCJlZHVjYXRpb25hbCBiYWNrZ3JvdW5kXCIsXCJoaWdoZXIgZWR1Y2F0aW9uXCIsXCJmb3JtYWwgZWR1Y2F0aW9uXCJdLGI9W1wiZXhwZXJpZW5jZVwiLFwid29yayBleHBlcmllbmNlXCIsXCJ3b3JrIGhpc3RvcnlcIixcImVtcGxveW1lbnQgaGlzdG9yeVwiLFwicHJldmlvdXMgd29yayBleHBlcmllbmNlXCIsXCJwcmV2aW91cyB3b3JrIGhpc3RvcnlcIixcImVtcGxveW1lbnRcIixcInByZXZpb3VzIGVtcGxveW1lbnRcIl07ZnVuY3Rpb24geShlKXtsZXQgdD1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpO2lmKFwicHJlc2VudFwiPT09dHx8XCJpbW1lZGlhdGVseVwiPT09dClyZXR1cm4oMCxmLmRlZmF1bHQpKCkuZm9ybWF0KFwiTU0vREQvWVlZWVwiKTtsZXQgcj0oMCxmLmRlZmF1bHQpKGUpO3JldHVybiByLmlzVmFsaWQoKT9yLmZvcm1hdChcIk1NL0REL1lZWVlcIik6KGNvbnNvbGUud2FybihgW2ZpbGxJbnB1dFRleHRGaWVsZF0gSW52YWxpZCBkYXRlIHZhbHVlOiBcIiR7ZX1cIiwgdXNpbmcgY3VycmVudCBkYXRlIGluc3RlYWRgKSwoMCxmLmRlZmF1bHQpKCkuZm9ybWF0KFwiTU0vREQvWVlZWVwiKSl9ZnVuY3Rpb24gdihlLHQpe2UuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQodCx7YnViYmxlczohMCxjb21wb3NlZDohMH0pKX1mdW5jdGlvbiB3KGUpe3JldHVybihlfHxcIlwiKS5yZXBsYWNlKC9cXHUwMGEwL2csXCIgXCIpLnJlcGxhY2UoL1xcKi9nLFwiIFwiKS5yZXBsYWNlKC9cXHMqOlxccyokL2csXCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiBTKGUpe3JldHVybiB3KGUpfWZ1bmN0aW9uIEUoZSx0KXtsZXQgcj1TKGUpO3JldHVybiB0LnNvbWUoZT0+ci5pbmNsdWRlcyhTKGUpKSl9ZnVuY3Rpb24geChlKXtyZXR1cm4gdyhlKS5yZXBsYWNlKC9bXmEtejAtOV0vZyxcIlwiKX1mdW5jdGlvbiBDKGUsdCl7bGV0IHI9eChlKSxuPXgodCk7aWYoIXJ8fCFuKXJldHVybiExO2xldCBvPW5ldyBTZXQoW1wicmVzdW1lXCIsXCJyZXN1bWVjdlwiXSk7aWYoby5oYXMobikpcmV0dXJuIG8uaGFzKHIpO2xldCBpPW5ldyBTZXQoW1wiY292ZXJsZXR0ZXJcIl0pO3JldHVybiBpLmhhcyhuKT9pLmhhcyhyKTpyPT09bn1mdW5jdGlvbiBBKGUpe2lmKCEoZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXx8ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNwbGF5Tm9uZVwiKXx8XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpKXJldHVybiExO2xldCB0PXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpO3JldHVyblwibm9uZVwiIT09dC5kaXNwbGF5JiZcImhpZGRlblwiIT09dC52aXNpYmlsaXR5fWZ1bmN0aW9uIGsoZSl7cmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5SQ01Gb3JtRmllbGQuYXR0YWNobWVudEZpZWxkLCAuUkNNRm9ybUZpZWxkLnJjbUZvcm1FbGVtZW50LmF0dGFjaG1lbnRGaWVsZFwiKSkuZmluZCh0PT57bGV0IHI9dC5xdWVyeVNlbGVjdG9yKFwiLnJjbUZvcm1GaWVsZExhYmVsXCIpPy50ZXh0Q29udGVudDtyZXR1cm4gQyhyLGUpfSl8fG51bGx9ZnVuY3Rpb24gVChlKXtpZighZSlyZXR1cm4gbnVsbDtsZXQgdD1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLCBhLCBzcGFuW3JvbGU9XCJidXR0b25cIl0sIGRpdltyb2xlPVwiYnV0dG9uXCJdLCBbdGl0bGVdLCBbYXJpYS1sYWJlbF0nKSk7cmV0dXJuIHQuZmluZChlPT57bGV0IHQ9dyhbZS50ZXh0Q29udGVudCxlLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpLGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSxlLmdldEF0dHJpYnV0ZShcIm9uY2xpY2tcIildLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKSk7cmV0dXJuIEEoZSkmJi9kZWxldGV8cmVtb3ZlLy50ZXN0KHQpfSl8fG51bGx9ZnVuY3Rpb24gRihlKXtyZXR1cm4gdyhbZS50ZXh0Q29udGVudCxlLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpLGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSxlLmdldEF0dHJpYnV0ZShcImlkXCIpXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIikpfWZ1bmN0aW9uIEkoZSl7bGV0IHQ9ayhlKSxyPXQ/LnF1ZXJ5U2VsZWN0b3IoXCIucmNtRm9ybUZpZWxkTGFiZWxcIiksbj10Py5xdWVyeVNlbGVjdG9yKCdbaWQkPVwiX2F0dGFjaFwiXScpLG89dD8ucXVlcnlTZWxlY3RvcignLmF0dGFjaEFjdGlvbnMgW3JvbGU9XCJidXR0b25cIl0sIC5hdHRhY2hBY3Rpb25zLCBbaWQkPVwiX2F0dGFjaEljb25cIl0nKXx8bnVsbCxpPXQ/LnF1ZXJ5U2VsZWN0b3IoJ1tpZCQ9XCJfYXR0YWNoU3VjY2Vzc1wiXScpLGE9dD8ucXVlcnlTZWxlY3RvcignW2lkJD1cIl9hdHRhY2hEb3dubG9hZExhYmVsXCJdJyksbD1hPy5xdWVyeVNlbGVjdG9yKFwiYVwiKSxzPWx8fGEsdT1UKHQpO3JldHVybntjb250YWluZXI6dCxsYWJlbDpyLGFjdGlvbkJ1dHRvbjpvLGF0dGFjaEJ1dHRvbjpuLHN1Y2Nlc3NJY29uOmksZG93bmxvYWRMYWJlbDphLGRvd25sb2FkTGluazpsLHVwbG9hZGVkRmlsZU5hbWU6cyxkZWxldGVCdXR0b246dX19ZnVuY3Rpb24gaigpe2xldCBlPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYW5kaWRhdGVfc3VtbWFyeV9kZXRhaWxzLCAuY2FuZGlkYXRlX3N1bW1hcnksIC5jYW5kUHJvZmlsZVVwcGVyUmlnaHRcIikpLHQ9ZS5maW5kKGU9PntsZXQgdD1GKGUpO3JldHVybiB0LmluY2x1ZGVzKFwiY292ZXIgbGV0dGVyXCIpJiYodC5pbmNsdWRlcyhcInVwbG9hZCBjb3ZlciBsZXR0ZXJcIil8fHQuaW5jbHVkZXMoXCJhdHRhY2ggeW91ciBjb3ZlciBsZXR0ZXJcIil8fHQuaW5jbHVkZXMoXCJjb3ZlciBsZXR0ZXIgaXMgbm90IG9uIGZpbGVcIikpfSl8fG51bGw7aWYoIXQpcmV0dXJue2NvbnRhaW5lcjpudWxsLGFjdGlvbkJ1dHRvbjpudWxsfTtsZXQgcj1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbCgnYVt0aXRsZT1cIlVwbG9hZCBDb3ZlciBMZXR0ZXJcIl0sIGFbYXJpYS1sYWJlbD1cIlVwbG9hZCBDb3ZlciBMZXR0ZXJcIl0sIGFbaWQkPVwiX3VwbG9hZEJ1dHRvblwiXVtyb2xlPVwiYnV0dG9uXCJdLCBhW3JvbGU9XCJidXR0b25cIl0nKSkuZmlsdGVyKGU9PntsZXQgdD1GKGUpO3JldHVybiB0LmluY2x1ZGVzKFwidXBsb2FkIGNvdmVyIGxldHRlclwiKXx8dC5pbmNsdWRlcyhcImF0dGFjaCB5b3VyIGNvdmVyIGxldHRlclwiKXx8dC5pbmNsdWRlcyhcInVwbG9hZGJ1dHRvblwiKX0pLG49ci5maW5kKGU9PmUuaWQuZW5kc1dpdGgoXCJfdXBsb2FkQnV0dG9uXCIpKXx8ci5maW5kKGU9PkEoZSkpfHxudWxsO3JldHVybntjb250YWluZXI6dCxhY3Rpb25CdXR0b246bn19ZnVuY3Rpb24gRCgpe2xldCBlPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImZpbGVcIl0sIGlucHV0W3R5cGU9XCJmaWxlXCJdLmZpbGVVcGxvYWQsIGlucHV0W3R5cGU9XCJmaWxlXCJdW25hbWU9XCJmaWxlRGF0YTFcIl0nKSkuZmlsdGVyKGU9PmUuaXNDb25uZWN0ZWQmJiFlLmRpc2FibGVkKTtyZXR1cm4gZS5maW5kKGU9PmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmlsZVVwbG9hZFwiKXx8XCJmaWxlRGF0YTFcIj09PWUubmFtZSl8fGUuYXQoLTEpfHxudWxsfWZ1bmN0aW9uIFAoZSl7bGV0IHQ9ayhlKSxyPXQ/LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyk7cmV0dXJuIHJ8fEQoKX1mdW5jdGlvbiBfKCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0aXRsZT1cIlVwbG9hZFwiXVtuYW1lPVwiVXBsb2FkXCJdW3R5cGU9XCJidXR0b25cIl0nKX1mdW5jdGlvbiBMKGUpe3JldHVybihlfHxcIlwiKS5yZXBsYWNlKC9cXHUwMGEwL2csXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gUihlLHQpe2xldCByPUwoZSk7cmV0dXJuXCJlZHVjYXRpb25cIj09PXQ/Zy5zb21lKGU9PnIuaW5jbHVkZXMoTChlKSkpOmIuc29tZShlPT5yLmluY2x1ZGVzKEwoZSkpKX1mdW5jdGlvbiBPKGUpe2xldCB0PWUucXVlcnlTZWxlY3RvcihcIi5yY21Gb3JtU2VjdGlvblRvcEJhclwiKT8udGV4dENvbnRlbnR8fGUucXVlcnlTZWxlY3RvcihcImgyXCIpPy50ZXh0Q29udGVudHx8XCJcIixyPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmhpZGRlbkFyaWFDb250ZW50W2FyaWEtbGFiZWxdXCIpKS5tYXAoZT0+ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlwiKS5qb2luKFwiIFwiKTtyZXR1cm5gJHt0fSAke3J9YH1mdW5jdGlvbiBNKGUpe2xldCB0PUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yY21Gb3JtU2VjdGlvblwiKSk7cmV0dXJuIHQuZmluZCh0PT5SKE8odCksZSkpfHxudWxsfWZ1bmN0aW9uIE4oZSl7bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yY21Gb3JtU2VjdGlvblwiKS5sZW5ndGg+MDtyZXR1cm4hdHx8ISFNKGUpfWZ1bmN0aW9uICQoKXtyZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJjbUZvcm1TZWN0aW9uXCIpKS5tYXAoZT0+TyhlKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pfWZ1bmN0aW9uIEIoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnJjbVNlY3Rpb25Db21wb25lbnRcIik7aWYodC5sZW5ndGg+MClyZXR1cm4gdC5sZW5ndGg7bGV0IHI9TChlLnRleHRDb250ZW50KTtpZihyLmluY2x1ZGVzKFwidGhlcmUgYXJlIG5vIGl0ZW1zIGluIHRoaXMgc2VjdGlvblwiKSlyZXR1cm4gMDtsZXQgbj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIikpLm1hcChlPT5lLnRleHRDb250ZW50fHxcIlwiKTtpZihuLnNvbWUoZT0+TChlKS5pbmNsdWRlcyhcInRoZXJlIGFyZSBubyBpdGVtcyBpbiB0aGlzIHNlY3Rpb25cIikpKXJldHVybiAwO2xldCBvPW4uZmluZChlPT4vc2VjdGlvblxccysoPzp3aXRofGhhcylcXHMrXFxkK1xccytyb3dzPy9pLnRlc3QoZSkpLGk9bz8ubWF0Y2goL3NlY3Rpb25cXHMrKD86d2l0aHxoYXMpXFxzKyhcXGQrKVxccytyb3dzPy9pKTtyZXR1cm4gaT9wYXJzZUludChpWzFdLDEwKTpudWxsfWZ1bmN0aW9uIHEoZSl7bGV0IHQ9TShlKTtyZXR1cm4gdD90LnF1ZXJ5U2VsZWN0b3IoJ1tpZCQ9XCJfYWRkUm93QnRuXCJdLCAuYWRkUm93QnV0dG9uLCBbcm9sZT1cImJ1dHRvblwiXVt0aXRsZT1cIkFkZCBuZXcgcm93XCJdJyk6bnVsbH1mdW5jdGlvbiBVKGUpe3JldHVybiBMKFtlLnRleHRDb250ZW50LGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSxlLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIikpfWZ1bmN0aW9uIEgoZSx0KXtsZXQgcj1VKGUpO3JldHVybiEhci5pbmNsdWRlcyhcImFkZFwiKSYmUihyLHQpfWZ1bmN0aW9uIFkoZSl7bGV0IHQ9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW3JvbGU9XCJidXR0b25cIl0nKSk7cmV0dXJuIHQuZmluZCh0PT5IKHQsZSkpfHxudWxsfWZ1bmN0aW9uIHooZSl7bGV0IHQ9SShlKTtyZXR1cm4hIXQuYWN0aW9uQnV0dG9uJiYodC5hY3Rpb25CdXR0b24uY2xpY2soKSwhMCl9ZnVuY3Rpb24gVigpe2lmKHooaCkpcmV0dXJuITA7bGV0IGU9aigpO3JldHVybiEhZS5hY3Rpb25CdXR0b24mJihlLmFjdGlvbkJ1dHRvbi5jbGljaygpLCEwKX1hc3luYyBmdW5jdGlvbiBXKGUpe2xldCB0PWF3YWl0ICgwLGEud2FpdEZvckNvbmRpdGlvbikoKCk9PiEhUChlKSx7dGltZW91dDo0ZTMsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pO3JldHVybiB0P1AoZSk6bnVsbH1mdW5jdGlvbiBHKCl7bGV0IGU9SShoKSx0PWooKSxyPSEhZS5jb250YWluZXImJighIWUuYWN0aW9uQnV0dG9ufHwhIWUuYXR0YWNoQnV0dG9ufHwhIWUuc3VjY2Vzc0ljb258fCEhZS5kb3dubG9hZExhYmVsKSxuPSEhdC5jb250YWluZXImJiEhdC5hY3Rpb25CdXR0b247cmV0dXJuIHJ8fG4/XCJyZXF1aXJlZFwiOlwiXCJ9YXN5bmMgZnVuY3Rpb24gSyhlLHQpe3RyeXtpZighZSl7Y29uc29sZS53YXJuKFwiW2ZpbGxJbnB1dFRleHRGaWVsZF0gSW52YWxpZCBpbnB1dCBlbGVtZW50XCIpO3JldHVybn1sZXQgcj1cIkRhdGUgSW5wdXRcIj09PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1yb2xlZGVzY3JpcHRpb25cIiksbj10O3ImJihuPXkodCkpLGUuZm9jdXMoKSxhd2FpdCAoMCx1LmRlbGF5KSgxMDApLGUudmFsdWU9XCJcIix2KGUsXCJpbnB1dFwiKSxhd2FpdCAoMCx1LmRlbGF5KSgxMDApLGUudmFsdWU9bix2KGUsXCJpbnB1dFwiKSx2KGUsXCJjaGFuZ2VcIiksYXdhaXQgKDAsdS5kZWxheSkoMTAwKX1jYXRjaChlKXtjb25zb2xlLndhcm4oXCJbZmlsbElucHV0VGV4dEZpZWxkXSBFcnJvcjpcIixlKX19ZnVuY3Rpb24gWChlLHQpe2UuZm9jdXMoKSxlLnZhbHVlPVwiXCI7Zm9yKGxldCByPTA7cjx0Lmxlbmd0aDtyKyspe2xldCBuPXRbcl0sbz10LnNsaWNlKDAscisxKSxpPTE9PT1uLmxlbmd0aCYmL1thLXpBLVpdLy50ZXN0KG4pLGE9aT9gS2V5JHtuLnRvVXBwZXJDYXNlKCl9YDpcIlVuaWRlbnRpZmllZFwiO2UuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIix7a2V5Om4sY29kZTphLGJ1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxlLnZhbHVlPW8sZS5kaXNwYXRjaEV2ZW50KG5ldyBJbnB1dEV2ZW50KFwiaW5wdXRcIix7ZGF0YTpuLGlucHV0VHlwZTpcImluc2VydFRleHRcIixidWJibGVzOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleXVwXCIse2tleTpuLGNvZGU6YSxidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSl9fWZ1bmN0aW9uIEooZSl7cmV0dXJuIGU/QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKSkuZmlsdGVyKGU9PmUudGV4dENvbnRlbnQ/LnRyaW0oKSE9PVwiTm8gU2VsZWN0aW9uXCIpOltdfWZ1bmN0aW9uIFEoZSl7cmV0dXJuIGUudHJpbSgpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLFwiIFwiKX1mdW5jdGlvbiBaKGUpe3JldHVybiBRKGUpLnJlcGxhY2UoL1teYS16MC05XS9nLFwiXCIpfWxldCBlZT1bW1widW5pdGVkc3RhdGVzXCIsXCJ1bml0ZWRzdGF0ZXNvZmFtZXJpY2FcIixcInVzYVwiLFwidXNcIl1dO2Z1bmN0aW9uIGV0KGUpe3JldHVybiBRKGV8fFwiXCIpLmluY2x1ZGVzKFwiY291bnRyeVwiKX1mdW5jdGlvbiBlcihlLHQpe2xldCByPVooZSksbj1aKFN0cmluZyh0KSk7cmV0dXJuISFyJiYhIW4mJmVlLnNvbWUoZT0+ZS5pbmNsdWRlcyhyKSYmZS5pbmNsdWRlcyhuKSl9ZnVuY3Rpb24gZW4oZSl7bGV0IHQ9U3RyaW5nKGU/P1wiXCIpLnRyaW0oKTtyZXR1cm4gdD9lZS5zb21lKGU9PmUuaW5jbHVkZXMoWih0KSkpP1t0LFwiVVNBXCIsXCJVbml0ZWQgU3RhdGVzXCIsXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIixcIlVTXCJdLm1hcChlPT5lLnRyaW0oKSkuZmlsdGVyKChlLHQscik9PntpZighZSlyZXR1cm4hMTtsZXQgbj1aKGUpO3JldHVybiByLmZpbmRJbmRleChlPT5aKGUpPT09bik9PT10fSk6W3RdOltdfWZ1bmN0aW9uIGVvKGUsdCxyPXt9KXtsZXQgbj1TdHJpbmcodCkudHJpbSgpO2lmKCFlLnRyaW0oKXx8IW4pcmV0dXJuITE7bGV0IG89UShlKSxpPVEobik7cmV0dXJuIGU9PT1ufHxvPT09aXx8WihlKT09PVoobil8fCEwPT09ci5hbGxvd0NvdW50cnlBbGlhc2VzJiZlcihlLHQpfWZ1bmN0aW9uIGVpKGUsdCxyPSExKXtsZXQgbj1lLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpPy50ZXh0Q29udGVudD8udHJpbSgpfHxlLnRleHRDb250ZW50Py50cmltKCl8fFwiXCI7cmV0dXJuIGVvKG4sdCx7YWxsb3dDb3VudHJ5QWxpYXNlczpyfSl9ZnVuY3Rpb24gZWEoZSx0KXtsZXQgcj1lbyhlLnZhbHVlfHxcIlwiLHQse2FsbG93Q291bnRyeUFsaWFzZXM6ITB9KSxuPWUuZ2V0QXR0cmlidXRlKFwidGl0bGVcIil8fFwiXCI7cmV0dXJuIG4udHJpbSgpP3ImJmVvKG4sdCx7YWxsb3dDb3VudHJ5QWxpYXNlczohMH0pOnJ9ZnVuY3Rpb24gZWwoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiYVwiKTsodHx8ZSkuY2xpY2soKX1mdW5jdGlvbiBlcyhlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJiEhZS5jbG9zZXN0KFwiLnNmQ2FzY2FkaW5nUGlja2xpc3RcIil9YXN5bmMgZnVuY3Rpb24gZXUoZSx0LHI9W1N0cmluZyh0Pz9cIlwiKS50cmltKCldLG49ITEpe2xldCBvPXIuZmlsdGVyKEJvb2xlYW4pO2lmKDA9PT1vLmxlbmd0aClyZXR1cm5bXTtmb3IobGV0IHIgb2Ygbyl7ZS5jbGljaygpLGF3YWl0ICgwLHUuZGVsYXkpKDIwMCksWChlLHIpO2xldCBvPTg7Zm9yKGxldCByPTA7cjxvO3IrKyl7YXdhaXQgKDAsdS5kZWxheSkoNDAwKTtsZXQgcj1lLmdldEF0dHJpYnV0ZShcImFyaWEtb3duc1wiKSxvPShyP2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHIpOm51bGwpfHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImxpc3Rib3hcIl0nKSxpPUoobyksYT0vXlxcZCskLy50ZXN0KFN0cmluZyh0Pz9cIlwiKS50cmltKCkpO2lmKGkubGVuZ3RoPjAmJihhfHxpLnNvbWUoZT0+ZWkoZSx0LG4pKSkpcmV0dXJuIGl9fXJldHVybltdfWFzeW5jIGZ1bmN0aW9uIGVjKGUsdCl7ZWwodCksYXdhaXQgKDAsdS5kZWxheSkoMjAwKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImJsdXJcIix7YnViYmxlczohMH0pKX1hc3luYyBmdW5jdGlvbiBlZChlLHQpe2xldCByPTU7Zm9yKGxldCBuPTA7bjxyO24rKyl7aWYoZWEoZSx0KSlyZXR1cm4hMDthd2FpdCAoMCx1LmRlbGF5KSgyMDApfXJldHVybiBlYShlLHQpfWZ1bmN0aW9uIGVmKGUsdCxyKXtlLnZhbHVlPXQsZS50aXRsZT1yLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYmx1clwiLHtidWJibGVzOiEwfSkpfWFzeW5jIGZ1bmN0aW9uIGVwKGUsdCl7aWYoIWV8fCF0Py50cmltKCkpcmV0dXJuITE7bGV0IHI9U3RyaW5nKHQpLnRyaW0oKSxuPWUudmFsdWUsbz1lLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpfHxcIlwiO2lmKGVhKGUscikpcmV0dXJuITA7bGV0IGk9ZW4ociksYT1udWxsLGw9ODtmb3IobGV0IHQgb2YgaSl7ZS5jbGljaygpLGF3YWl0ICgwLHUuZGVsYXkpKDIwMCksWChlLHQpLGF3YWl0ICgwLHUuZGVsYXkpKDFlMyk7Zm9yKGxldCB0PTA7dDxsO3QrKyl7YXdhaXQgKDAsdS5kZWxheSkoNDAwKTtsZXQgdD1lLmdldEF0dHJpYnV0ZShcImFyaWEtb3duc1wiKTtpZih0JiYoYT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KSksYXx8KGE9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJsaXN0Ym94XCJdJykpLGEpe2xldCB0PUooYSk7aWYodC5sZW5ndGg+MCl7bGV0IGk9dC5maW5kKGU9PmVpKGUsciwhMCkpO2lmKGkpe2lmKGF3YWl0IGVjKGUsaSksYXdhaXQgZWQoZSxyKSlyZXR1cm4hMDtyZXR1cm4gY29uc29sZS53YXJuKFwiW2ZpbGxDb3VudHJ5Q29tYm9ib3hdIEV4YWN0IG9wdGlvbiBkaWQgbm90IGNvbW1pdDpcIixyKSxlZihlLG4sbyksITF9fX19fXJldHVybiBlZihlLG4sbyksY29uc29sZS53YXJuKFwiW2ZpbGxDb3VudHJ5Q29tYm9ib3hdIE5vIGV4YWN0IENvdW50cnkgb3B0aW9uIGZvdW5kOlwiLHIpLCExfWFzeW5jIGZ1bmN0aW9uIGVtKGUsdCl7bGV0IHI9ZS4kaW5wdXQsbj1BcnJheS5pc0FycmF5KHQpP3RbMF06dCxvPWV0KGUubGFiZWwpLGk9ci5nZXRBdHRyaWJ1dGUoXCJhcmlhLW93bnNcIik7aWYoIWkpe2xldCBlPUFycmF5LmZyb20oci5vcHRpb25zKS5maWx0ZXIoZT0+KGUudGV4dENvbnRlbnQ/LnRyaW0oKXx8ZS52YWx1ZSkmJiFlLmRpc2FibGVkKSx0PVwibnVtYmVyXCI9PXR5cGVvZiBufHxcInN0cmluZ1wiPT10eXBlb2YgbiYmL15cXGQrJC8udGVzdChTdHJpbmcobikudHJpbSgpKTtpZih0JiZlLmxlbmd0aD4wKXtsZXQgdD1cIm51bWJlclwiPT10eXBlb2Ygbj9uOnBhcnNlSW50KFN0cmluZyhuKS50cmltKCksMTApLG89dC0xO2lmKG8+PTAmJm88ZS5sZW5ndGgpcmV0dXJuIHIuc2VsZWN0ZWRJbmRleD1lW29dLmluZGV4LHIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMH0pKSxhd2FpdCAoMCx1LmRlbGF5KSgyMDApLCEwfWZvcihsZXQgdCBvZiBlKXtsZXQgZT10LnRleHRDb250ZW50Py50cmltKCl8fFwiXCIsaT10LnZhbHVlfHxlO2lmKGVvKGUsbix7YWxsb3dDb3VudHJ5QWxpYXNlczpvfSl8fGVvKGksbix7YWxsb3dDb3VudHJ5QWxpYXNlczpvfSkpcmV0dXJuIHIudmFsdWU9dC52YWx1ZSxyLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIse2J1YmJsZXM6ITB9KSksYXdhaXQgKDAsdS5kZWxheSkoMjAwKSwhMH1yZXR1cm4gY29uc29sZS53YXJuKFwiW2ZpbGxTZWxlY3RGaWVsZF0gTmF0aXZlIHNlbGVjdDogbm8gbWF0Y2hpbmcgb3B0aW9uIGZvcjpcIixuKSwhMX1yLmZvY3VzKCk7bGV0IGE9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSksbD1KKGEpLHM9ZXMocik7aWYoMD09PWwubGVuZ3RoJiZyIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCYmKGw9YXdhaXQgZXUocixuLG8/ZW4obik6W1N0cmluZyhuPz9cIlwiKS50cmltKCldLG8pKSwwPT09bC5sZW5ndGgpcmV0dXJuIGNvbnNvbGUud2FybihcIltmaWxsU2VsZWN0RmllbGRdIE9wdGlvbnMgbGlzdCBkaWQgbm90IGFwcGVhciBvciB3YXMgZW1wdHlcIiksITE7bGV0IGM9XCJudW1iZXJcIj09dHlwZW9mIG58fFwic3RyaW5nXCI9PXR5cGVvZiBuJiYvXlxcZCskLy50ZXN0KG4udHJpbSgpKTtpZihjKXtsZXQgZT1cIm51bWJlclwiPT10eXBlb2Ygbj9uOnBhcnNlSW50KFN0cmluZyhuKS50cmltKCksMTApLHQ9ZS0xO2lmKHQ+PTAmJnQ8bC5sZW5ndGgpe2xldCBlPWxbdF07cmV0dXJuIHMmJnIgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50P2F3YWl0IGVjKHIsZSk6KGVsKGUpLGF3YWl0ICgwLHUuZGVsYXkpKDIwMCkpLCEwfX1mb3IobGV0IGUgb2YgbClpZihlaShlLG4sbykpe2lmKHMmJnIgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KXtpZihhd2FpdCBlYyhyLGUpLG8pcmV0dXJuIGF3YWl0IGVkKHIsU3RyaW5nKG4/P1wiXCIpLnRyaW0oKSl9ZWxzZSBlbChlKSxhd2FpdCAoMCx1LmRlbGF5KSgyMDApO3JldHVybiEwfXJldHVybiBjb25zb2xlLndhcm4oXCJbZmlsbFNlbGVjdEZpZWxkXSBObyBtYXRjaGluZyBvcHRpb24gZm91bmQgZm9yOlwiLG4pLCFvJiYhIShzJiZyIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkmJihhd2FpdCBlYyhyLGxbMF0pLCEwKX1hc3luYyBmdW5jdGlvbiBlaChlLHQpe2xldCByPWUuJGlucHV0LG49QXJyYXkuaXNBcnJheSh0KT90WzBdOnQsbz0hMD09PW58fFwiWWVzXCI9PT1ufHxcInRydWVcIj09PW58fFwieWVzXCI9PT1TdHJpbmcobikudG9Mb3dlckNhc2UoKTtyLmNoZWNrZWQhPT1vJiYoci5jbGljaygpLGF3YWl0ICgwLHUuZGVsYXkpKDEwMCkpfWFzeW5jIGZ1bmN0aW9uIGVnKGUsdCl7bGV0IHI9U3RyaW5nKEFycmF5LmlzQXJyYXkodCk/dFswXTp0KS50cmltKCk7aWYoIXIpcmV0dXJuO2xldCBuPUFycmF5LmZyb20oZS4kcmFkaW9QYXJlbnQucXVlcnlTZWxlY3RvckFsbChcImxpW2NsYXNzPSdmZC1mb3JtLWl0ZW0gZmQtZm9ybS1pdGVtLS1jb21wYWN0J10sIC5jaGVja2JveF9jb2x1bW4sIC5nbG9iYWxSYWRpby5zZlJhZGlvSW5wdXRGaWVsZFwiKSk7Zm9yKGxldCBlIG9mIG4pe2xldCB0PWUucXVlcnlTZWxlY3RvcihcImxhYmVsLCAucmFkaW9MYWJlbFwiKT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtpZih0PT09cnx8ZS5pZD09PXIpe2xldCB0PWUucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLHI9ZS5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cInJhZGlvXCJdLCAucmFkaW9DaGVjaycpOyh0fHxyfHxlKS5jbGljaygpLGF3YWl0ICgwLHUuZGVsYXkpKDEwMCk7cmV0dXJufX19ZnVuY3Rpb24gZWIoZSx0PTFlNCl7cmV0dXJuIG5ldyBQcm9taXNlKChyLG4pPT57bGV0IG89ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKTtpZihvKXJldHVybiByKG8pO2xldCBpPW5ldyBNdXRhdGlvbk9ic2VydmVyKCgpPT57bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKTt0JiYoaS5kaXNjb25uZWN0KCkscih0KSl9KTtpLm9ic2VydmUoZG9jdW1lbnQuYm9keSx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KSxzZXRUaW1lb3V0KCgpPT57aS5kaXNjb25uZWN0KCksbihFcnJvcihgRWxlbWVudCBcIiR7ZX1cIiBub3QgZm91bmQgd2l0aGluICR7dH1tc2ApKX0sdCl9KX1hc3luYyBmdW5jdGlvbiBleShlLHQ9NWUzLHI9MjAwKXtsZXQgbj1EYXRlLm5vdygpO2Zvcig7RGF0ZS5ub3coKS1uPHQ7KXtsZXQgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpO2lmKCF0KXJldHVybjthd2FpdCAoMCx1LmRlbGF5KShyKX1jb25zb2xlLndhcm4oYFt1cGxvYWRSZXN1bWVdIEVsZW1lbnQgXCIke2V9XCIgc3RpbGwgcHJlc2VudCBhZnRlciAke3R9bXNgKX1hc3luYyBmdW5jdGlvbiBldigpe3RyeXtsZXQgZT1hd2FpdCBlYignYnV0dG9uW3RpdGxlPVwiT3ZlcndyaXRlIFByb2ZpbGVcIl0sIGJ1dHRvblt0aXRsZT1cIk92ZXJ3cml0ZSBQcm9maWxlXCJdW3R5cGU9XCJidXR0b25cIl0nLDhlMyk7ZS5jbGljaygpLGF3YWl0ICgwLHUuZGVsYXkpKDUwMCksYXdhaXQgZXkoJ2RpdltjbGFzcz1cImdsb2JhbFBvcnRsZXRCb2R5QmFja2dyb3VuZFwiXScsNWUzKX1jYXRjaChlKXtjb25zb2xlLndhcm4oXCJbdXBsb2FkUmVzdW1lXSBPdmVyd3JpdGUgYnV0dG9uIG5vdCBmb3VuZCBvciB0aW1lZCBvdXQ6XCIsZSl9fWFzeW5jIGZ1bmN0aW9uIGV3KGUsdCxyLG4pe2xldCBhPWF3YWl0ICgwLG8uZmV0Y2hQZGZBc0Jsb2IpKHQpO2F3YWl0ICgwLGkudXBsb2FkRmlsZXMpKGUsYSxyLG4sXCJSZXN1bWUvQ1ZcIik7bGV0IGw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3RpdGxlPVwiVXBsb2FkXCJdW25hbWU9XCJVcGxvYWRcIl1bdHlwZT1cImJ1dHRvblwiXScpO2w/KGwuY2xpY2soKSxhd2FpdCBldigpKTpjb25zb2xlLndhcm4oXCJbdXBsb2FkUmVzdW1lXSBVcGxvYWQgYnV0dG9uIG5vdCBmb3VuZCwgY2Fubm90IHRyaWdnZXIgdXBsb2FkXCIpfWZ1bmN0aW9uIGVTKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYVthcmlhLWxhYmVsPVwiVXBsb2FkIFJlc3VtZVwiXVt0aXRsZT1cIlVwbG9hZCBSZXN1bWVcIl0sIHNwYW5bYXJpYS1sYWJlbD1cIlVwZGF0ZSBSZXN1bWVcIl0nKTtpZihlKXJldHVybiBlO2xldCB0PUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi5hdHRhY2hBY3Rpb25zXCIpKSxyPXQuZmluZChlPT5lLnRleHRDb250ZW50Py50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwidXBsb2FkIGEgcmVzdW1lXCIpKTtyZXR1cm4gcnx8bnVsbH1mdW5jdGlvbiBlRSgpe3JldHVybiEhayhtKXx8ISFlUygpfWFzeW5jIGZ1bmN0aW9uIGV4KGUsdCxyKXtpZihrKG0pKXtsZXQgbj16KG0pO2lmKCFuKXtjb25zb2xlLndhcm4oXCJbdXBsb2FkUmVzdW1lXSBSZXN1bWUgYXR0YWNobWVudCBhY3Rpb24gYnV0dG9uIG5vdCBmb3VuZFwiKTtyZXR1cm59bGV0IG89YXdhaXQgVyhtKTtpZighbyl7Y29uc29sZS53YXJuKFwiW3VwbG9hZFJlc3VtZV0gUmVzdW1lIGF0dGFjaG1lbnQgZmlsZSBpbnB1dCBub3QgZm91bmRcIik7cmV0dXJufWF3YWl0IGV3KG8sZSx0LHIpO3JldHVybn1sZXQgbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpO2lmKG4pe2F3YWl0IGV3KG4sZSx0LHIpO3JldHVybn1sZXQgbz1lUygpO2lmKCFvKXtjb25zb2xlLndhcm4oXCJbdXBsb2FkUmVzdW1lXSBVcGxvYWQgUmVzdW1lIGJ1dHRvbiBub3QgZm91bmRcIik7cmV0dXJufW8uY2xpY2soKSxhd2FpdCAoMCx1LmRlbGF5KSgxZTMpO2xldCBpPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0aXRsZT1cIk92ZXJ3cml0ZSBQcm9maWxlXCJdJyk7aSYmKGkuY2xpY2soKSxhd2FpdCAoMCx1LmRlbGF5KSg1MDApLGF3YWl0IGV5KCdkaXZbY2xhc3M9XCJnbG9iYWxQb3J0bGV0Qm9keUJhY2tncm91bmRcIl0nLDVlMykpO2xldCBhPTAsbD02O2Zvcig7IW4mJmE8bDspe2xldCBlPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIikpLHQ9ZS5maW5kKGU9PmUudGV4dENvbnRlbnQ/LnRyaW0oKT09PVwiVXBsb2FkIGZyb20gRGV2aWNlXCIpO2lmKHQpe2xldCBlPXQubmV4dEVsZW1lbnRTaWJsaW5nO2Zvcig7ZTspe2xldCB0PWUucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl1bY2xhc3M9XCJmaWxlVXBsb2FkXCJdJyk7aWYodCl7bj10O2JyZWFrfWU9ZS5uZXh0RWxlbWVudFNpYmxpbmd9fW58fChuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdW25hbWU9XCJmaWxlRGF0YTFcIl0nKSksIW4mJihhd2FpdCAoMCx1LmRlbGF5KSg1MDApLGErKyl9aWYoIW4pe2NvbnNvbGUud2FybihcIlt1cGxvYWRSZXN1bWVdIEZpbGUgaW5wdXQgbm90IGZvdW5kIGFmdGVyIHdhaXRpbmdcIik7cmV0dXJufWF3YWl0IGV3KG4sZSx0LHIpfWFzeW5jIGZ1bmN0aW9uIGVDKGUsdCxyKXtsZXQgbj1HKCk7aWYoXCJyZXF1aXJlZFwiIT09bilyZXR1cm4gY29uc29sZS53YXJuKFwiW3N1Y2Nlc3NmYWN0b3JzXVtDb3ZlciBMZXR0ZXJdIGF0dGFjaG1lbnQgc2xvdCBpcyBub3QgcmVhZHlcIiksITE7bGV0IGE9VigpO2lmKCFhKXJldHVybiBjb25zb2xlLndhcm4oXCJbc3VjY2Vzc2ZhY3RvcnNdW0NvdmVyIExldHRlcl0gYXR0YWNoIGFjdGlvbiBidXR0b24gbm90IGZvdW5kXCIpLCExO2xldCBsPWF3YWl0IFcoaCk7aWYoIWwpcmV0dXJuIGNvbnNvbGUud2FybihcIltzdWNjZXNzZmFjdG9yc11bQ292ZXIgTGV0dGVyXSBmaWxlIGlucHV0IG5vdCBmb3VuZFwiKSwhMTthd2FpdCAoMCxpLnVwbG9hZEZpbGVzKShsLGF3YWl0ICgwLG8uZmV0Y2hDb3ZlckxldHRlclBkZkFzQmxvYikoZSksdCxyLFwiQ292ZXIgTGV0dGVyXCIpO2xldCBzPV8oKTtyZXR1cm4gcz8ocy5jbGljaygpLGF3YWl0IGV2KCksITApOihjb25zb2xlLndhcm4oXCJbc3VjY2Vzc2ZhY3RvcnNdW0NvdmVyIExldHRlcl0gdXBsb2FkIGJ1dHRvbiBub3QgZm91bmRcIiksITEpfWZ1bmN0aW9uIGVBKCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYucHJvZmlsZUxvd2VyTGF5b3V0XCIpfWZ1bmN0aW9uIGVrKGUpe2xldCB0PWVBKCk7aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2ZDb2xsYXBzZS5mZC1wYW5lbCwgLnNmQ29sbGFwc2UsIC5mZC1wYW5lbCwgZGl2W2FyaWEtbGFiZWxdXCIpKTtyZXR1cm4gci5maW5kKHQ9PntsZXQgcj10LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fHQucXVlcnlTZWxlY3RvcihcImgyLCBbcm9sZT0naGVhZGluZyddXCIpPy50ZXh0Q29udGVudHx8XCJcIjtyZXR1cm4gRShyLGUpfSl8fG51bGx9ZnVuY3Rpb24gZVQoZSl7bGV0IHQ9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGlkZGVuQXJpYUNvbnRlbnRbYXJpYS1sYWJlbF1cIikpLm1hcChlPT5lLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikpLHI9KGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIpfHxcIlwiKS5zcGxpdCgvXFxzKy8pLm1hcChlPT5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKT8udGV4dENvbnRlbnQpO3JldHVybltlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiksZS5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKSxlLnRleHRDb250ZW50LC4uLnIsLi4udF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIGVGKGUpe3JldHVyblwiZWR1Y2F0aW9uXCI9PT1lP2c6Yn1mdW5jdGlvbiBlSShlLHQscil7bGV0IG49XCJkZWxldGVcIj09PXI/W1wiZGVsZXRlXCIsXCJyZW1vdmVcIl06W1wiYWRkXCIsXCJhZGQgYW5vdGhlclwiXTtyZXR1cm4gQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2Fbcm9sZT1cImJ1dHRvblwiXSwgYnV0dG9uLCBbcm9sZT1cImJ1dHRvblwiXScpKS5maWx0ZXIoZT0+e2xldCByPWVUKGUpO3JldHVybiBFKHIsdCkmJkUocixuKX0pfWZ1bmN0aW9uIGVqKGUsdCl7bGV0IHI9TShlKTtyZXR1cm4gcj9lSShyLGVGKGUpLHQpOltdfWZ1bmN0aW9uIGVEKGUpe3JldHVyblwiZWR1Y2F0aW9uXCI9PT1lP2UxOmUzfWZ1bmN0aW9uIGVQKGUpe3JldHVybiBlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLFwiXFxcXCQmXCIpfWZ1bmN0aW9uIGVfKGUpe3JldHVybihlPy50ZXh0Q29udGVudHx8XCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl9ZnVuY3Rpb24gZUwoZSl7cmV0dXJuIEwoZSkucmVwbGFjZSgvXFwqL2csXCJcIikucmVwbGFjZSgvXFxzKjpcXHMqJC9nLFwiXCIpLnRyaW0oKX1mdW5jdGlvbiBlUihlLHQpe2xldCByPWVMKGUpO3JldHVybiB0LnNvbWUoZT0+cj09PWVMKGUpKX1mdW5jdGlvbiBlTyhlKXtsZXQgdD1lPy5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIik7cmV0dXJuIHQ/XCJjaGVja2JveFwiPT09dC50eXBlP3QuY2hlY2tlZD9cInRydWVcIjpcIlwiOlN0cmluZyh0LnZhbHVlfHxcIlwiKS50cmltKCk6XCJcIn1mdW5jdGlvbiBlTShlLHQpe2xldCByPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIikpO2ZvcihsZXQgZSBvZiByKXtsZXQgcj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcInRoLCB0ZFwiKSk7aWYoci5sZW5ndGg8Miljb250aW51ZTtsZXQgbj1lXyhyWzBdKTtpZighZVIobix0KSljb250aW51ZTtsZXQgbz1lTyhyWzFdKTtpZihvKXJldHVybiBvO2xldCBpPXJbMV0ucXVlcnlTZWxlY3RvcihcIlt0aXRsZV1cIiksYT1pPy5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKT8udHJpbSgpO2lmKGEpcmV0dXJuIGE7cmV0dXJuIGVfKHJbMV0pfXJldHVyblwiXCJ9ZnVuY3Rpb24gZU4oZSx0KXtsZXQgcj10Lm1hcChlUCkuam9pbihcInxcIiksbj1bXCJTdGFydCBEYXRlXCIsXCJGcm9tIERhdGVcIixcIkVuZCBEYXRlXCIsXCJDb21wYW55IE5hbWVcIixcIkNvbXBhbnlcIixcIkVtcGxveWVyXCIsXCJPcmdhbml6YXRpb25cIixcIlR5cGUgb2YgQnVzaW5lc3NcIixcIlRpdGxlXCIsXCJKb2IgVGl0bGVcIixcIlBvc2l0aW9uXCIsXCJGdW5jdGlvblwiLFwiQ291bnRyeVwiLFwiU3RhdGVcIixcIkNpdHlcIl0sbz1uLm1hcChlUCkuam9pbihcInxcIiksaT1lLm1hdGNoKFJlZ0V4cChgKD86XnxcXFxccykoPzoke3J9KVxcXFxzKjo/XFxcXHMqKC4qPylcXFxccyooPz0oPzoke299KVxcXFxzKjo/fCQpYCxcImlcIikpO3JldHVybiBpPy5bMV0/LnRyaW0oKXx8XCJcIn1mdW5jdGlvbiBlJChlLHQpe2xldCByPWVNKGUsdCk7cmV0dXJuIHJ8fGVOKGVfKGUpLHQpfWZ1bmN0aW9uIGVCKGUpe3JldHVybntjb21wYW55OmUkKGUsW1wiQ29tcGFueSBOYW1lXCIsXCJDb21wYW55XCIsXCJFbXBsb3llclwiLFwiT3JnYW5pemF0aW9uXCJdKSx0ZXh0OmVfKGUpLHRpdGxlOmUkKGUsW1wiVGl0bGVcIixcIkpvYiBUaXRsZVwiLFwiUG9zaXRpb25cIl0pfX1mdW5jdGlvbiBlcSgpe2xldCBlPU0oXCJleHBlcmllbmNlXCIpO2lmKGUpe2xldCB0PUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnJjbVNlY3Rpb25Db21wb25lbnRcIikpO2lmKHQubGVuZ3RoPjApcmV0dXJuIHR9bGV0IHQ9ZWsoYik7aWYoIXQpcmV0dXJuW107bGV0IHI9QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZCo9XCJORVdfUk9XXCJdJykpLmZpbHRlcihlPT5lLnF1ZXJ5U2VsZWN0b3IoJ1tpZCQ9XCJfZmllbGRzTGF5b3V0XCJdLCB0YWJsZVtyb2xlPVwicHJlc2VudGF0aW9uXCJdJykpO2lmKHIubGVuZ3RoPjApcmV0dXJuIHI7bGV0IG49QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZCQ9XCJfZmllbGRzTGF5b3V0XCJdLCB0YWJsZVtyb2xlPVwicHJlc2VudGF0aW9uXCJdJykpLG89bmV3IFNldDtmb3IobGV0IGUgb2YgbilvLmFkZChlLmNsb3Nlc3QoJ1tpZCo9XCJORVdfUk9XXCJdLCBbaWQkPVwiX3Jvd1wiXSwgLmJnX2luZm8uYmdFbGVtLCAuYmdfaW5mbycpPz9lKTtyZXR1cm4gQXJyYXkuZnJvbShvKX1mdW5jdGlvbiBlVSgpe3JldHVybntjb3VudDplcSgpLmxlbmd0aH19ZnVuY3Rpb24gZUgoZSl7bGV0IHQ9TChlKTtyZXR1cm4hIXQmJltcInByb2plY3RcIixcInBvcnRmb2xpb1wiLFwiY2Fwc3RvbmVcIixcImNvZGVsZW5zXCIsXCJtZXRyb3B1bHNlXCIsXCJub3RlcGFkXCIsXCJyZXZpZXcgYXNzaXN0YW50XCIsXCJkYXNoYm9hcmRcIixcIndvcmtzcGFjZVwiXS5zb21lKGU9PnQuaW5jbHVkZXMoZSkpfWZ1bmN0aW9uIGVZKGUpe2xldCB0PUwoZSk7cmV0dXJuIXR8fFwibm8gc2VsZWN0aW9uXCI9PT10fHxcInVuc3BlY2lmaWVkXCI9PT10fHxcInVua25vd25cIj09PXR8fFwibi9hXCI9PT10fHxcIm5vdCBhcHBsaWNhYmxlXCI9PT10fWZ1bmN0aW9uIGV6KGUpe2xldCB0PWVZKGUuY29tcGFueSkscj1lSChlLmNvbXBhbnkpLG49ZVkoZS50aXRsZSksbz1lSChlLnRpdGxlKTtyZXR1cm4oISF0fHwhIXJ8fCEhbnx8ISFvKSYmKHQ/ZUgoW2UudGl0bGUsZS50ZXh0XS5qb2luKFwiIFwiKSk6ciYmbnx8byl9ZnVuY3Rpb24gZVYoZSl7bGV0IHQ9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2Fbcm9sZT1cImJ1dHRvblwiXSwgYnV0dG9uLCBbcm9sZT1cImJ1dHRvblwiXScpKTtyZXR1cm4gdC5maW5kKGU9PkUoZVQoZSksW1wiZGVsZXRlXCIsXCJyZW1vdmVcIl0pKXx8bnVsbH1hc3luYyBmdW5jdGlvbiBlVyhlKXt0cnl7YXdhaXQgKDAsYS53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+ZXEoKS5sZW5ndGghPT1lLmNvdW50LHt0aW1lb3V0OjE1MDAsaW50ZXJ2YWw6MTUwLG9ic2VydmVUYXJnZXQ6ZG9jdW1lbnQuYm9keX0pO2xldCB0PWVxKCk7Zm9yKGxldCBlPXQubGVuZ3RoLTE7ZT49MDtlLT0xKXtsZXQgcj1lQih0W2VdKTtpZighZXoocikpY29udGludWU7bGV0IG49ZVYodFtlXSk7biYmKG4uY2xpY2soKSxhd2FpdCAoMCx1LmRlbGF5KSgzMDApKX19Y2F0Y2goZSl7Y29uc29sZS53YXJuKFwiW3N1Y2Nlc3NmYWN0b3JzXVtyZXN1bWUtcGFyc2VyLWNsZWFudXBdIGZhaWxlZCB0byBjbGVhbiBwYXJzZWQgV29yayBIaXN0b3J5IHJvd3NcIixlKX19YXN5bmMgZnVuY3Rpb24gZUcoZSx0LHI9M2UzKXtsZXQgbj1EYXRlLm5vdygpO2Zvcig7RGF0ZS5ub3coKS1uPHI7KXtsZXQgcj1lKCk7aWYocjx0KXJldHVybiByO2F3YWl0ICgwLHUuZGVsYXkpKDUwMCl9cmV0dXJuIGUoKX1hc3luYyBmdW5jdGlvbiBlSyhlLHQpe2lmKCFNKGUpKXJldHVybiExO2xldCByPWVEKGUpLG49cigpO2Zvcig7bj50Oyl7bGV0IHQ9ZWooZSxcImRlbGV0ZVwiKSxvPXQuYXQoLTEpO2lmKCFvKXtjb25zb2xlLndhcm4oYFtyZWR1Y2VSZXBlYXRhYmxlU2VjdGlvblJvd3NdIE5vIGRlbGV0ZSBidXR0b24gZm91bmQgZm9yICR7ZX1gKTticmVha31vLmNsaWNrKCk7bGV0IGk9YXdhaXQgZUcocixuKTtpZihpPj1uKXtjb25zb2xlLndhcm4oYFtyZWR1Y2VSZXBlYXRhYmxlU2VjdGlvblJvd3NdICR7ZX0gY291bnQgZGlkIG5vdCBkZWNyZWFzZSBhZnRlciBjbGljaywgYnJlYWtpbmcgbG9vcGApO2JyZWFrfW49aX1yZXR1cm4hMH1hc3luYyBmdW5jdGlvbiBlWCgpe2xldCBlPU4oXCJlZHVjYXRpb25cIiksdD1OKFwiZXhwZXJpZW5jZVwiKTtpZihjb25zb2xlLmluZm8oXCJbU3VjY2Vzc0ZhY3RvcnNdW3ByZWNsaWNrQWRkQnV0dG9uc10gcmVwZWF0YWJsZSBnYXRlXCIsSlNPTi5zdHJpbmdpZnkoe3N0cnVjdHVyZWRTZWN0aW9uQ291bnQ6ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yY21Gb3JtU2VjdGlvblwiKS5sZW5ndGgsc3RydWN0dXJlZFNlY3Rpb25MYWJlbHM6JCgpLHNob3VsZEhhbmRsZUVkdWNhdGlvbjplLHNob3VsZEhhbmRsZUV4cGVyaWVuY2U6dH0pKSxlJiYoYXdhaXQgZUooKSxhd2FpdCAoMCx1LmRlbGF5KSgzMDApKSx0JiYoYXdhaXQgZVEoKSxhd2FpdCAoMCx1LmRlbGF5KSgzMDApKSxlKXtsZXQgZT1lMSgpO2U8MSYmKGF3YWl0IGU1KCksYXdhaXQgKDAsdS5kZWxheSkoMzAwKSl9aWYodCl7bGV0IGU9ZTMoKTtlPDEmJihhd2FpdCBlNigpLGF3YWl0ICgwLHUuZGVsYXkpKDMwMCkpfX1hc3luYyBmdW5jdGlvbiBlSigpe2xldCBlPWF3YWl0IGVLKFwiZWR1Y2F0aW9uXCIsMCk7aWYoZSlyZXR1cm47bGV0IHQ9ZUEoKTtpZighdCl7Y29uc29sZS53YXJuKFwiW2RlbGV0ZUVkdWNhdGlvblNlY3Rpb25zXSBwcm9maWxlTG93ZXJMYXlvdXQgbm90IGZvdW5kXCIpO3JldHVybn1sZXQgcj1layhnKSxuPXI/ZUkocixnLFwiZGVsZXRlXCIpOmVJKHQsZyxcImRlbGV0ZVwiKTtpZigwPT09bi5sZW5ndGgpe2NvbnNvbGUud2FybihcIltkZWxldGVFZHVjYXRpb25TZWN0aW9uc10gTm8gZGVsZXRlIGJ1dHRvbnMgZm91bmQsIHRyeWluZyBYUGF0aC4uLlwiKTtsZXQgZT1gXHJcbiAgICAgIC8vc3Bhbltjb250YWlucyhAY2xhc3MsIFwiaGlkZGVuQXJpYUNvbnRlbnRcIilcclxuICAgICAgICAgICAgIGFuZCBjb250YWlucyhAYXJpYS1sYWJlbCwgXCJFZHVjYXRpb25cIildXHJcbiAgICAgIC9wYXJlbnQ6OipbY29udGFpbnModHJhbnNsYXRlKEB0aXRsZSwgXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiLCBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCIpLCBcImRlbGV0ZVwiKV1cclxuICAgIGAsdD0oMCxzLmdldEZpcnN0T3JkZXJlZE5vZGUpKGUpO3QmJihuPVt0XSl9aWYoMD09PW4ubGVuZ3RoKXtjb25zb2xlLndhcm4oXCJbZGVsZXRlRWR1Y2F0aW9uU2VjdGlvbnNdIE5vIGRlbGV0ZSBidXR0b25zIGZvdW5kIGFmdGVyIFhQYXRoXCIpO3JldHVybn1mb3IobGV0IGUgb2YgbillLmNsaWNrKCksYXdhaXQgKDAsdS5kZWxheSkoMzAwKX1hc3luYyBmdW5jdGlvbiBlUSgpe2xldCBlPWF3YWl0IGVLKFwiZXhwZXJpZW5jZVwiLDApO2lmKGUpcmV0dXJuO2xldCB0PWVBKCk7aWYoIXQpe2NvbnNvbGUud2FybihcIltkZWxldGVFeHBlcmllbmNlU2VjdGlvbnNdIHByb2ZpbGVMb3dlckxheW91dCBub3QgZm91bmRcIik7cmV0dXJufWxldCByPWVrKGIpLG49cj9lSShyLGIsXCJkZWxldGVcIik6ZUkodCxiLFwiZGVsZXRlXCIpO2lmKDA9PT1uLmxlbmd0aCl7Y29uc29sZS53YXJuKFwiW2RlbGV0ZUV4cGVyaWVuY2VTZWN0aW9uc10gTm8gZGVsZXRlIGJ1dHRvbnMgZm91bmQsIHRyeWluZyBYUGF0aC4uLlwiKTtsZXQgZT1gXHJcbiAgICAgIC8vc3Bhbltjb250YWlucyhAY2xhc3MsIFwiaGlkZGVuQXJpYUNvbnRlbnRcIilcclxuICAgICAgICAgICAgIGFuZCBjb250YWlucyhAYXJpYS1sYWJlbCwgXCJXb3JrIEV4cGVyaWVuY2VcIildXHJcbiAgICAgIC9wYXJlbnQ6OipbY29udGFpbnModHJhbnNsYXRlKEB0aXRsZSwgXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiLCBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCIpLCBcImRlbGV0ZVwiKV1cclxuICAgIGAsdD0oMCxzLmdldEZpcnN0T3JkZXJlZE5vZGUpKGUpO3QmJihuPVt0XSl9aWYoMD09PW4ubGVuZ3RoKXtjb25zb2xlLndhcm4oXCJbZGVsZXRlRXhwZXJpZW5jZVNlY3Rpb25zXSBObyBkZWxldGUgYnV0dG9ucyBmb3VuZCBhZnRlciBYUGF0aFwiKTtyZXR1cm59Zm9yKGxldCBlIG9mIG4pZS5jbGljaygpLGF3YWl0ICgwLHUuZGVsYXkpKDMwMCl9ZnVuY3Rpb24gZVooZSl7bGV0IHQ9ZT8ucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS5tYXRjaCgvKD86c2VjdGlvblxccytoYXN8c2VjdGlvblxccyt3aXRoKVxccysoXFxkKylcXHMrcm93cz8vaSk7cmV0dXJuIHQ/cGFyc2VJbnQodFsxXSwxMCk6bnVsbH1mdW5jdGlvbiBlMChlKXtsZXQgdD1layhlKTtpZighdClyZXR1cm4gbnVsbDtsZXQgcj1lWih0LnRleHRDb250ZW50KTtpZihudWxsIT09cilyZXR1cm4gcjtsZXQgbj10LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZCQ9XCJfZmllbGRzTGF5b3V0XCJdLCB0YWJsZVtyb2xlPVwicHJlc2VudGF0aW9uXCJdJyk7cmV0dXJuIG4ubGVuZ3RoPjA/bi5sZW5ndGg6bnVsbH1mdW5jdGlvbiBlMihlKXtsZXQgdD1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuLmhpZGRlbkFyaWFDb250ZW50LCBzcGFuW2lkJD0nX25vSXRlbXMnXVwiKSk7Zm9yKGxldCByIG9mIHQpe2xldCB0PXIudGV4dENvbnRlbnQ/LnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfHxcIlwiLG49dC50b0xvd2VyQ2FzZSgpLG89ZS5zb21lKGU9Pm4uaW5jbHVkZXMoZSkpO2lmKCFvKWNvbnRpbnVlO2xldCBpPWVaKHQpO2lmKG51bGwhPT1pKXJldHVybiBpfXJldHVybiBudWxsfWZ1bmN0aW9uIGUxKCl7bGV0IGU9TShcImVkdWNhdGlvblwiKSx0PWU/QihlKTpudWxsO2lmKG51bGwhPT10KXJldHVybiB0O2xldCByPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWR1Y2F0aW9uLCAjZWR1Y2F0aW9uTkFcIik7aWYocil7bGV0IGU9ci5jaGlsZHJlbi5sZW5ndGg7cmV0dXJuIGV9bGV0IG49ZTAoZyk7aWYobnVsbCE9PW4pcmV0dXJuIG47bGV0IG89ZTIoZyk7aWYobnVsbCE9PW8pcmV0dXJuIG87Y29uc29sZS53YXJuKFwiW2NvdW50RWR1Y2F0aW9uU2VjdGlvbnNdIEVkdWNhdGlvbiBjb250YWluZXIgbm90IGZvdW5kLCB0cnlpbmcgaDIgc2VhcmNoLi4uXCIpO2xldCBpPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImgyXCIpKSxhPWkuZmluZChlPT5lLnRleHRDb250ZW50Py50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiZWR1Y2F0aW9uXCIpKTtpZihhJiZhLm5leHRFbGVtZW50U2libGluZyl7bGV0IGU9YS5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIik7Zm9yKGxldCB0IG9mIGUpe2xldCBlPXQudGV4dENvbnRlbnQ/LnRyaW0oKSxyPWVaKGUpO2lmKG51bGwhPT1yKXJldHVybiByfX1yZXR1cm4gY29uc29sZS53YXJuKFwiW2NvdW50RWR1Y2F0aW9uU2VjdGlvbnNdIFVuYWJsZSB0byBleHRyYWN0IGNvdW50IGZyb20gWFBhdGhcIiksMH1mdW5jdGlvbiBlMygpe2xldCBlPU0oXCJleHBlcmllbmNlXCIpLHQ9ZT9CKGUpOm51bGw7aWYobnVsbCE9PXQpcmV0dXJuIHQ7bGV0IHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRzaWRlV29ya0V4cGVyaWVuY2UsICNvdXRzaWRlV29ya0V4cGVyaWVuY2VOQVwiKTtpZihyKXtsZXQgZT1yLmNoaWxkcmVuLmxlbmd0aDtyZXR1cm4gZX1sZXQgbj1lMChiKTtpZihudWxsIT09bilyZXR1cm4gbjtsZXQgbz1lMihiKTtpZihudWxsIT09bylyZXR1cm4gbztjb25zb2xlLndhcm4oXCJbY291bnRFeHBlcmllbmNlU2VjdGlvbnNdIEV4cGVyaWVuY2UgY29udGFpbmVyIG5vdCBmb3VuZCwgdHJ5aW5nIGgyIHNlYXJjaC4uLlwiKTtsZXQgaT1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMlwiKSksYT1pLmZpbmQoZT0+e2xldCB0PWUudGV4dENvbnRlbnQ/LnRvTG93ZXJDYXNlKCl8fFwiXCI7cmV0dXJuIHQuaW5jbHVkZXMoXCJleHBlcmllbmNlXCIpfHx0LmluY2x1ZGVzKFwiZW1wbG95XCIpfHx0LmluY2x1ZGVzKFwid29yayBoaXN0b3J5XCIpfSk7aWYoYSYmYS5uZXh0RWxlbWVudFNpYmxpbmcpe2xldCBlPWEubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpO2ZvcihsZXQgdCBvZiBlKXtsZXQgZT10LnRleHRDb250ZW50Py50cmltKCkscj1lWihlKTtpZihudWxsIT09cilyZXR1cm4gcn19cmV0dXJuIGNvbnNvbGUud2FybihcIltjb3VudEV4cGVyaWVuY2VTZWN0aW9uc10gVW5hYmxlIHRvIGV4dHJhY3QgY291bnQgZnJvbSBYUGF0aFwiKSwwfWFzeW5jIGZ1bmN0aW9uIGU0KGUsdCxyPTNlMyl7bGV0IG49RGF0ZS5ub3coKTtmb3IoO0RhdGUubm93KCktbjxyOyl7bGV0IHI9ZSgpO2lmKHI+dClyZXR1cm4gcjthd2FpdCAoMCx1LmRlbGF5KSg1MDApfXJldHVybiBlKCl9YXN5bmMgZnVuY3Rpb24gZTUoKXtsZXQgZT1xKFwiZWR1Y2F0aW9uXCIpLHQ9YFxyXG4gICAgICAvL3NwYW5bY29udGFpbnMoQGNsYXNzLCBcImhpZGRlbkFyaWFDb250ZW50XCIpXHJcbiAgICAgICAgICAgICBhbmQgY29udGFpbnMoQGFyaWEtbGFiZWwsIFwiRWR1Y2F0aW9uXCIpXVxyXG4gICAgICAvcGFyZW50OjoqW2NvbnRhaW5zKHRyYW5zbGF0ZShAdGl0bGUsIFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIiwgXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiKSwgXCJhZGRcIildXHJcbiAgICBgOyhlPWV8fCgwLHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkodCkpfHwoZT1ZKFwiZWR1Y2F0aW9uXCIpKSxlP2UuY2xpY2soKTpjb25zb2xlLndhcm4oXCJbYWRkRWR1Y2F0aW9uU2VjdGlvbl0gQWRkIGJ1dHRvbiBub3QgZm91bmRcIil9YXN5bmMgZnVuY3Rpb24gZTYoKXtsZXQgZT1xKFwiZXhwZXJpZW5jZVwiKTtpZihlfHwoZT1ZKFwiZXhwZXJpZW5jZVwiKSksIWUpe2xldCB0PWBcclxuICAgICAgLy9zcGFuW2NvbnRhaW5zKEBjbGFzcywgXCJoaWRkZW5BcmlhQ29udGVudFwiKVxyXG4gICAgICAgICAgICAgYW5kIGNvbnRhaW5zKEBhcmlhLWxhYmVsLCBcIldvcmsgRXhwZXJpZW5jZVwiKV1cclxuICAgICAgL3BhcmVudDo6Kltjb250YWlucyh0cmFuc2xhdGUoQHRpdGxlLCBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCIsIFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIiksIFwiYWRkXCIpXVxyXG4gICAgYDtlPSgwLHMuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkodCl9ZT9lLmNsaWNrKCk6Y29uc29sZS53YXJuKFwiW2FkZEV4cGVyaWVuY2VTZWN0aW9uXSBBZGQgYnV0dG9uIG5vdCBmb3VuZFwiKX1hc3luYyBmdW5jdGlvbiBlOChlKXtsZXQgdD1BcnJheS5pc0FycmF5KGUuZWR1Y2F0aW9uKT9lLmVkdWNhdGlvbi5sZW5ndGg6MDt0PjAmJmF3YWl0IGVLKFwiZWR1Y2F0aW9uXCIsdCk7bGV0IHI9ZTEoKTtmb3IoO3I8dDspe2F3YWl0IGU1KCk7bGV0IGU9YXdhaXQgZTQoZTEscik7aWYoZTw9cil7Y29uc29sZS53YXJuKFwiW2V4cGFuZEZvcm1dIEVkdWNhdGlvbiBjb3VudCBkaWQgbm90IGluY3JlYXNlIGFmdGVyIGNsaWNrLCBicmVha2luZyBsb29wXCIpO2JyZWFrfXI9ZX1sZXQgbj1BcnJheS5pc0FycmF5KGUud29ya0V4cGVyaWVuY2UpP2Uud29ya0V4cGVyaWVuY2UubGVuZ3RoOjA7bj4wJiZhd2FpdCBlSyhcImV4cGVyaWVuY2VcIixuKTtsZXQgbz1lMygpO2Zvcig7bzxuOyl7YXdhaXQgZTYoKTtsZXQgZT1hd2FpdCBlNChlMyxvKTtpZihlPD1vKXtjb25zb2xlLndhcm4oXCJbZXhwYW5kRm9ybV0gRXhwZXJpZW5jZSBjb3VudCBkaWQgbm90IGluY3JlYXNlIGFmdGVyIGNsaWNrLCBicmVha2luZyBsb29wXCIpO2JyZWFrfW89ZX19YXN5bmMgZnVuY3Rpb24gZTkoKXthd2FpdCAoMCx1LmRlbGF5KSg1MDApfWFzeW5jIGZ1bmN0aW9uIGU3KGUpe3RyeXtsZXQgdD1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMlwiKSkscj10LmZpbmQoZT0+ZS50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInNraWxsXCIpKTtpZighcilyZXR1cm47bGV0IG49ci5uZXh0RWxlbWVudFNpYmxpbmc7aWYoIW4pcmV0dXJuO2xldCBvPW4ucXVlcnlTZWxlY3RvcihcInVpNS1pbnB1dC14d2ViLXNraWxsLXByb2ZpbGVyXCIpO2lmKCFvfHwhby5zaGFkb3dSb290KXJldHVybjtsZXQgaT1vLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRleHRcIl0nKTtpZighaSlyZXR1cm47bGV0IGE9ZT8uc2tpbGxzfHxbXTtmb3IobGV0IGUgb2YgYSl7aS5mb2N1cygpLGF3YWl0ICgwLHUuZGVsYXkpKDEwMCksaS52YWx1ZT1lLGkuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLHUuZGVsYXkpKDUwMCk7bGV0IHQ9by5xdWVyeVNlbGVjdG9yKFwidWk1LXN1Z2dlc3Rpb24taXRlbS14d2ViLXNraWxsLXByb2ZpbGVyXCIpO2lmKHQpe2xldCBlPXQuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtlLmNsaWNrKCksYXdhaXQgKDAsdS5kZWxheSkoMjAwKX1lbHNlIGNvbnNvbGUud2FybihgW2ZpbGxTa2lsbHNdIE5vIHN1Z2dlc3Rpb24gZm91bmQgZm9yIHNraWxsOiAke2V9YCl9fWNhdGNoKGUpe2NvbnNvbGUuZXJyb3IoXCJbZmlsbFNraWxsc10gRXJyb3I6XCIsZSl9fWZ1bmN0aW9uIHRlKGUsdD17fSl7bGV0IHI9KDAscC5nZXRGb3JtU25hcHNob3QpKCksbj0oMCxwLmdldEFkZGl0aW9uYWxGb3JtU25hcHNob3REYXRhKSgpOygwLGwuc2VuZEF1dG9maWxsQW5zd2VyUGFpckV2ZW50KSh7Zm9ybVVybDooMCxjLnVzZVVybFN0b3JlKS5nZXRTdGF0ZSgpLmN1cnJlbnRUYWJVcmwsYXV0b2ZpbGxTbmFwc2hvdDplLHN1Ym1pdFNuYXBzaG90OnIsYWRkaXRpb25hbEF1dG9maWxsRGF0YTp0LGFkZGl0aW9uYWxTdWJtaXREYXRhOm4sc291cmNlOlwic3VjY2Vzc2ZhY3RvcnNcIn0pfVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9ucy5iNTc1ODJjMC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);