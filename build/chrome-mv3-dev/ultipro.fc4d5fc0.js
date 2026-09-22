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
})({"cP1w4":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\ultipro.js",
    "bundleId": "fa0ae593fc4d5fc0",
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
var j = z(require("13742b4d962232fa"));
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

},{"13742b4d962232fa":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"kO2Z6":[function(require,module,exports) {
/**
 * Parcel module id: 5R3mN
 * Resolved path: src/contents/sites/ultipro.js
 * Dependencies:
 *   ./answer -> oH3tv  =>  src/contents/sites/ultipro/answer.js
 *   ./operations -> k21zl  =>  src/contents/sites/ultipro/operations.js
 *   ./rules -> e0jMO  =>  src/contents/sites/ultipro/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~contents/methods/section-results -> 6WWsC  =>  src/contents/methods/section-results.js
 *   ~contents/sites/base-filler -> 8xj6F  =>  src/contents/sites/base-filler.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~store/autofillInfo -> 79VNP  =>  src/store/autofillInfo.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "Ultipro", ()=>h), n.export(r, "collectSavedEntryLabels", ()=>g), n.export(r, "removeUltiproSavedEntriesOutsideFillV2", ()=>k);
var o = e("~contents/methods/section-results"), i = e("~contents/methods/answer"), a = e("~contents/methods/cancellation"), l = e("~contents/sites/base-filler"), s = e("~core/enums"), u = e("~core/xpath"), c = e("~store/autofillInfo"), d = e("./answer"), f = e("./operations"), p = e("./rules");
function m(e1) {
    return {
        ...e1,
        School: e1["School Name"] ?? e1.School,
        Company: e1["Company / Organization"] ?? e1.Company
    };
}
class h extends l.BaseFiller {
    getFieldHandlers() {
        return {
            [s.FIELD_TYPE.TEXT]: (e1, t)=>{
                let r1 = t?.[0];
                return r1 ? (0, f.fillInputTextField)(e1.$input, String(r1 ?? "")) : T(e1);
            },
            [s.FIELD_TYPE.SELECT]: (e1, t)=>{
                let r1 = t?.[0];
                if (!r1) return T(e1);
                let n = e1.$input;
                return "Country" === n.id && e1.label?.trim().toLowerCase() === "country" ? (0, f.prefillUltiproCountry)(String(r1 ?? "")) : "State" === n.id && /(?:state|province)/i.test(e1.label ?? "") ? (0, f.fillUltiproStateProvinceField)(n, String(r1 ?? "")) : (0, f.fillSelectField)(n, String(r1 ?? ""));
            },
            [s.FIELD_TYPE.CHECKBOX]: (e1, t)=>(0, f.fillCheckboxField)(e1, t),
            [s.FIELD_TYPE.MULTI_SELECT]: (e1, t)=>(0, f.fillMultiSelectField)(e1, t),
            [s.FIELD_TYPE.DATE]: (e1, t)=>{
                let r1 = t?.[0];
                return r1 ? (0, f.fillDateField)(e1.$input, String(r1 ?? "")) : T(e1);
            }
        };
    }
    async extractFormRules() {
        let e1 = !1, t = await (0, p.extractRules)({
            beforeContactInformationExtraction: async ()=>{
                if (!(e1 = await (0, f.openUltiproContactInformationEditor)())) return;
                let t = (0, d.normalizeUltiproCountry)(this.currentRunCountry), r1 = !!t && this.preserveCommittedRegularFieldsForCurrentRun && Array.from(document.querySelectorAll("select#Country")).some((e1)=>!(0, p.isElementHidden)(e1) && (0, f.hasMeaningfulControlValue)(e1));
                t && !r1 ? await (0, f.prefillUltiproCountry)(t) : t && r1 && console.info("[Ultipro][RepeatFill] preserved committed Country");
            },
            afterQuestionExtraction: async ()=>{
                e1 && await (0, f.cancelUltiproContactInformationEditor)();
            }
        });
        return t.filter((e1)=>!j(e1));
    }
    getNewComboQuestionRules(e1, t) {
        let r1 = super.getNewComboQuestionRules(e1, t).filter((e1)=>!I(e1) || !T(e1)), n = t.find((e1)=>I(e1) && !T(e1));
        return !n || r1.includes(n) ? r1 : (console.info("[Ultipro][State / Province] queued for dynamic re-crawl", {
            optionCount: n.$input?.options?.length ?? 0
        }), [
            ...r1,
            n
        ]);
    }
    getSiteName() {
        return "ultipro";
    }
    async runPreFillForm() {
        this.currentRunCountry = "";
        let e1 = await (0, c.useAutofillInfoStore).getState().fetchAutofillInfo();
        this.currentRunCountry = e1?.location?.country ?? "", this.preserveCommittedRegularFieldsForCurrentRun ? console.info("[Ultipro][RepeatFill] skipped hidden contact prefill copy") : await (0, f.fillVisibleContactFieldsFromHiddenPrefill)();
    }
    async getAutofillSnapshot() {
        let e1 = await (0, p.getFormSnapshot)();
        return e1;
    }
    async getSubmitSnapshot() {
        return await (0, p.getFormSnapshot)();
    }
    getSubmitButtonSelector() {
        return '//*[@id="OpportunityApply"]//ukg-button[@data-automation="btn-submit"]';
    }
    submitApplication() {
        let e1 = '//*[@id="OpportunityApply"]//ukg-button[@data-automation="btn-submit"]', t = (0, u.getFirstOrderedNode)(e1);
        t && t?.click();
    }
    async doFillForm(e1 = !1) {
        this.preserveCommittedRegularFieldsForCurrentRun = this.hasCompletedRegularFillRun, await this.initializeFillForm();
        let t = await this.extractFormRules(), r1 = this.getFillableRulesForCurrentRun(t);
        this.progressTracker.setFieldsRequiredStatus(r1);
        let n = await this.fetchFormAnswers(r1, e1);
        if ("string" == typeof n) return n;
        this.answer = (0, d.formatAnswer)(this.answer, this.currentRunCountry);
        let o = t, i = !this.preserveCommittedRegularFieldsForCurrentRun && (0, f.hasSelectedUltiproResumeFile)() ? {
            initialSignature: (0, f.getUltiproResumeParserStateSignature)(),
            initialSavedRowsSignature: (0, f.getUltiproSavedExperienceRowsSignature)()
        } : null, l = null;
        this.preserveCommittedRegularFieldsForCurrentRun ? console.info("[Ultipro][RepeatFill] skipped repeated resume upload") : !1 !== (l = await this.handleResumeUpload()) && (l = await (0, f.waitForUltiproResumeParsingToFinish)(null === l && i ? i : {}));
        let s = this.preserveCommittedRegularFieldsForCurrentRun ? [] : await (0, f.fillVisibleContactFieldsFromHiddenPrefill)();
        s.length > 0 && await this.delay(800), t = await this.extractFormRules(), this.progressTracker.setFieldsRequiredStatus(this.getFillableRulesForCurrentRun(t));
        let u = this.getFillableRulesForCurrentRun(this.getNewComboQuestionRules(o, t));
        if (u.length > 0) try {
            await this.fetchAnswersForPostParseRules(u, e1);
        } catch (e1) {
            if (e1 instanceof a.CancelledError) throw e1;
            console.error("[Ultipro] post-parse answer step failed:", e1);
        }
        !1 !== l ? await this.fillEducationAndEmployment(t) : console.warn("[Ultipro] skipped structured experience fill because resume parser was not ready"), await this.fillRegularFields(t), this.hasCompletedRegularFillRun = !0, console.info("[Ultipro] starting post-fill dynamic rule re-crawl", {
            ruleCount: t.length
        });
        let c = await this.runComboQuestionAutofillIfNeeded(t, e1);
        return "string" == typeof c ? c : (t = c, await this.executeSiteSpecificSteps(t), this.finalizeFillForm());
    }
    static #_ = (()=>{
        this.POST_PARSE_ANSWER_TIMEOUT_MS = 2e4;
    })();
    async fetchAnswersForPostParseRules(e1, t) {
        let r1;
        let n = e1.map((e1)=>e1.label);
        console.log("[Ultipro] post-parse answer request:", n);
        let o = Symbol("timeout"), i = new Promise((e1)=>{
            r1 = setTimeout(()=>e1(o), h.POST_PARSE_ANSWER_TIMEOUT_MS);
        }), a = this.requestFormAnswers(e1, t, {
            updateTimeTrace: !1
        });
        a.catch(()=>{});
        let l = await Promise.race([
            a,
            i
        ]);
        r1 && clearTimeout(r1), l && "object" == typeof l ? (console.log("[Ultipro] post-parse answer response:", Object.keys(l.regular ?? {})), this.mergeComboQuestionAnswer(l, e1)) : console.warn("[Ultipro] post-parse answer request degraded:", l === o ? "timeout" : l ?? "empty"), this.applyPostParseStateFallback(e1), this.answer = (0, d.formatAnswer)(this.answer, this.currentRunCountry);
    }
    applyPostParseStateFallback(e1) {
        let t = "string" == typeof this.answer?.state ? this.answer.state.trim() : "";
        if (t) for (let r1 of e1){
            let e1 = r1.label;
            if (!e1) continue;
            let n = e1.toLowerCase();
            (n.includes("state") || n.includes("province")) && (this.hasRegularAnswer(e1) || (this.answer.regular = {
                ...this.answer.regular,
                [e1]: t
            }));
        }
    }
    hasRegularAnswer(e1) {
        try {
            return (0, i.findValueInRecord)(e1, this.answer.regular), !0;
        } catch  {
            return !1;
        }
    }
    async fillRegularFields(e1) {
        this.applyPostParseStateFallback(e1.filter(I));
        let t = e1.filter((e1)=>!e1.__ultiproDialogSection && !j(e1)), r1 = this.getFillableRulesForCurrentRun(t);
        this.preserveCommittedRegularFieldsForCurrentRun && console.info("[Ultipro][RepeatFill] preserved committed regular fields", {
            candidateCount: t.length,
            skippedCount: t.length - r1.length,
            fillCount: r1.length
        }), await super.fillRegularFields(r1);
    }
    async filterNewComboQuestionRules(e1) {
        return this.getFillableRulesForCurrentRun(e1);
    }
    getFillableRulesForCurrentRun(e1) {
        return this.preserveCommittedRegularFieldsForCurrentRun ? e1.filter((e1)=>!F(e1) || !T(e1)) : e1;
    }
    async handleResumeUpload() {
        if (!(0, f.hasResumeUploadInput)()) return null;
        if (this.progressTracker.updateFieldRequiredStatus({
            label: "Resume/CV",
            required: !0
        }), this.disableUploadResume) return this.progressTracker.updateMissedProgress("Resume/CV"), null;
        let e1 = null;
        return this.taskQueue.add(async ()=>{
            let t = await (0, f.uploadResume)(this.resumeInfo, this.progressTracker.updateFieldRequiredStatus, this.progressTracker.updateFilledProgress);
            t || this.progressTracker.updateMissedProgress("Resume/CV"), e1 = t;
        }), await this.taskQueue.run(), e1;
    }
    async fillEducationAndEmployment(e1) {
        let t = e1.find((e1)=>e1.type === s.FIELD_TYPE.EDUCATION), r1 = e1.find((e1)=>e1.type === s.FIELD_TYPE.EMPLOYMENT);
        Array.isArray(this.answer.workExperience) && (r1 || 0 === this.answer.workExperience.length) && await this.fillEmploymentSection(r1), Array.isArray(this.answer.education) && (t || 0 === this.answer.education.length) && await this.fillEducationSection(t);
    }
    async fillEmploymentSection(e1) {
        let t = (0, p.getUltiproVisibleSection)("employment");
        if (!t) return;
        let r1 = e1?.$input ?? null, n = this.answer.workExperience, a = (0, o.createSequentialSectionResultReporter)("employment", this.progressTracker, "Employment"), l = n.map((e1)=>x(e1)), s = await k(t, l, ()=>this.delay(100));
        if (console.info(`[Ultipro] reconciled Employment rows to fill-v2: targetCount=${n.length}; removedCount=${s.removed}; ready=${s.ready}`), !s.ready) {
            console.warn("[Ultipro] skipped Employment fill because parser rows could not be reconciled", {
                targetCount: n.length
            }), this.progressTracker.updateMissedProgress("Employment");
            return;
        }
        let u = g(t), c = (0, p.isUltiproReviewCopyLayout)(t), d = c ? b(t) : [], f = 0 === u.length;
        for (let [e1, o] of n.entries()){
            let n = {
                type: "employment",
                index: e1,
                reporter: a,
                focusLabels: []
            };
            if (this.progressTracker.updateSectionResult) {
                let t = (0, i.createSectionResultReporter)("employment", a.forRecord(e1, []));
                t.ensureRow(0, m(o)), t.emit();
            }
            let s = x(o), p = S(d, s);
            if (p) {
                console.info("[Ultipro] filling retained Employment review editor", {
                    remainingReviewEditors: d.length
                }), await this.fillEduOrExpFields(t, p, o, n), await this.saveEduOrExpEditor(t), v(n, p);
                continue;
            }
            if (!c && u.includes(s)) {
                v(n, y(t, l, e1));
                continue;
            }
            let h = await this.openEduOrExpEditor(t, r1, f);
            if (f = !1, !h) {
                a.markRecordMissed(e1), console.warn("[Ultipro] skipped Employment row because no individual editor was available"), this.progressTracker.updateMissedProgress("Employment");
                return;
            }
            await this.fillEduOrExpFields(t, h, o, n), await this.saveEduOrExpEditor(t), v(n, c ? h : y(t, l, e1)), u.push(s);
        }
        let h = b(t).length;
        if (h !== n.length) {
            console.warn("[Ultipro] Employment row count does not match fill-v2", {
                targetCount: n.length,
                finalCount: h
            }), this.progressTracker.updateMissedProgress("Employment");
            return;
        }
        this.progressTracker.updateFilledProgress("Employment");
        let w = t.querySelector('button[data-automation="cancel-button"]');
        w?.click(), await this.delay(300);
    }
    async fillEducationSection(e1) {
        let t = (0, p.getUltiproVisibleSection)("education");
        if (!t) return;
        let r1 = e1?.$input ?? null, n = this.answer.education, a = (0, o.createSequentialSectionResultReporter)("education", this.progressTracker, "Education"), l = n.map((e1)=>C(e1)), s = await k(t, l, ()=>this.delay(100));
        if (console.log("[Ultipro] reconciled Education rows to fill-v2", {
            targetCount: n.length,
            removedCount: s.removed,
            ready: s.ready
        }), !s.ready) {
            console.warn("[Ultipro] skipped Education fill because parser rows could not be reconciled", {
                targetCount: n.length
            }), this.progressTracker.updateMissedProgress("Education");
            return;
        }
        let u = g(t), c = (0, p.isUltiproReviewCopyLayout)(t), d = c ? b(t) : [], f = 0 === u.length;
        for (let [e1, o] of n.entries()){
            let n = {
                type: "education",
                index: e1,
                reporter: a,
                focusLabels: []
            };
            if (this.progressTracker.updateSectionResult) {
                let t = (0, i.createSectionResultReporter)("education", a.forRecord(e1, []));
                t.ensureRow(0, m(o)), t.emit();
            }
            let s = C(o), p = S(d, s);
            if (p) {
                console.info("[Ultipro] filling retained Education review editor", {
                    remainingReviewEditors: d.length
                }), await this.fillEduOrExpFields(t, p, o, n), await this.saveEduOrExpEditor(t), v(n, p);
                continue;
            }
            if (!c && s && u.includes(s)) {
                v(n, y(t, l, e1));
                continue;
            }
            let h = await this.openEduOrExpEditor(t, r1, f);
            if (f = !1, !h) {
                a.markRecordMissed(e1), console.warn("[Ultipro] skipped Education row because no individual editor was available"), this.progressTracker.updateMissedProgress("Education");
                return;
            }
            await this.fillEduOrExpFields(t, h, o, n), await this.saveEduOrExpEditor(t), v(n, c ? h : y(t, l, e1)), u.push(s);
        }
        let h = b(t).length;
        if (h !== n.length) {
            console.warn("[Ultipro] Education row count does not match fill-v2", {
                targetCount: n.length,
                finalCount: h
            }), this.progressTracker.updateMissedProgress("Education");
            return;
        }
        this.progressTracker.updateFilledProgress("Education");
        let w = t.querySelector('button[data-automation="cancel-button"]');
        w?.click(), await this.delay(300);
    }
    async openEduOrExpEditor(e1, t, r1) {
        let n = (0, p.getUltiproSectionEditors)(e1), o = (0, p.isUltiproReviewCopyLayout)(e1);
        if (o && r1) {
            let t = (0, p.getUltiproSectionEditor)(e1);
            if (console.info("[Ultipro] selected existing structured editor", {
                editorCount: n.length,
                selected: !!t
            }), t) return t;
            console.info("[Ultipro] no reusable review editor; adding structured row", {
                editorCount: n.length
            });
        }
        let i = e1.querySelector("button[data-automation='primary-action-button']") ?? t;
        if (!i) return null;
        i.click();
        let a = Date.now() + 3e3;
        for(; Date.now() < a;){
            let t = (0, p.getUltiproSectionEditor)(e1, n);
            if (t) return console.info("[Ultipro] selected newly added structured editor", {
                editorCountBefore: n.length,
                editorCountAfter: (0, p.getUltiproSectionEditors)(e1).length
            }), t;
            await this.delay(50);
        }
        return console.warn("[Ultipro] no individual editor appeared after Add", {
            editorCountBefore: n.length
        }), null;
    }
    async saveEduOrExpEditor(e1) {
        let t = e1.querySelector('button[data-automation="save-button"]');
        t && (t.click(), await this.delay(2200));
    }
    async fillEduOrExpFields(e1, t, r1, n) {
        let o = t.querySelectorAll("div.form-group"), l = Array.from(o).filter((e1)=>!e1.querySelector("div.form-group")), u = (0, p.isUltiproReviewCopyLayout)(e1), c = u ? (0, p.getUltiproSectionEditors)(e1) : [];
        console.info(`[Ultipro] filling structured editor: reviewCopy=${u}; editorIndex=${c.indexOf(t)}; editorCount=${c.length}; fieldCount=${l.length}`);
        let h = [], g = n && this.progressTracker.updateSectionResult ? (0, i.createSectionResultReporter)(n.type, n.reporter.forRecord(n.index, [
            {
                label: n.type,
                children: h
            }
        ])) : void 0, b = g?.ensureRow(0, m(r1));
        for (let e1 of (g?.emit(), l)){
            let t;
            let o = this.extractRuleFromGroup(e1);
            if (!o) continue;
            h.push(o), n?.focusLabels.push(o.label);
            let i = (0, d.getValueForEduExpField)(o.label, r1, {
                $input: o.$input
            });
            try {
                if (o.type === s.FIELD_TYPE.SELECT) {
                    let e1 = o.$input;
                    e1?.tagName === "INPUT" && "combobox" === e1.getAttribute("role") ? (t = await (0, f.fillUltiproTypeaheadField)(e1, i), await this.delay(50)) : (t = await (0, f.fillSelectField)(o.$input, i), await this.delay(200));
                } else o.type === s.FIELD_TYPE.TEXT && (t = await (0, f.fillInputTextField)(o.$input, i), await this.delay(50));
                b && g?.updateField(b, o.label, i || void 0, !0 === t && i ? "filled" : "missed");
            } catch (e1) {
                throw b && g?.updateField(b, o.label, i || void 0, a.SkippedError && e1 instanceof a.SkippedError ? "skipped" : "missed"), e1;
            } finally{
                g?.emit();
            }
        }
    }
    extractRuleFromGroup(e1) {
        return (0, p.extractExpAndEduRuleFromElement)(e1);
    }
    async executeSiteSpecificSteps(e1) {
        let t = D(this.answer.skills);
        t.length > 0 && (console.info("[Ultipro][Skills] selected answer source", {
            source: "profile_data",
            profileSkillCount: t.length
        }), this.taskQueue.add(()=>(0, f.fillSkills)(t, this.progressTracker.updateFilledProgress)));
        let r1 = e1.find((e1)=>"Behaviors" === e1.label && e1.type === s.FIELD_TYPE.MULTI_SELECT);
        r1 && this.answer.regular.Behaviors && this.taskQueue.add(async ()=>{
            await (0, f.fillBehaviorsAndMotivations)(r1, this.answer.regular.Behaviors), this.progressTracker.updateFilledProgress("Behaviors");
        });
        let n = e1.find((e1)=>"Motivations" === e1.label && e1.type === s.FIELD_TYPE.MULTI_SELECT);
        n && this.answer.regular.Motivations && this.taskQueue.add(async ()=>{
            await (0, f.fillBehaviorsAndMotivations)(n, this.answer.regular.Motivations), this.progressTracker.updateFilledProgress("Motivations");
        });
        let o = e1.filter((e1)=>"certifications" === e1.__ultiproDialogSection);
        o.length > 0 && this.taskQueue.add(()=>(0, f.fillCertifications)(o, this.answer.regular, this.progressTracker.updateFilledProgress, this.progressTracker.updateMissedProgress));
        let i = e1.filter((e1)=>"links" === e1.__ultiproDialogSection);
        i.length > 0 && this.taskQueue.add(()=>(0, f.fillLicenses)(i, this.answer.regular, this.progressTracker.updateFilledProgress, this.progressTracker.updateMissedProgress)), this.answer.regular.Race && this.taskQueue.add(()=>(0, f.fillRace)(this.answer.regular.Race)), await this.taskQueue.run(), await this.bindSubmitButtonTracking(e1);
    }
    async delay(e1) {
        return new Promise((t)=>setTimeout(t, e1));
    }
    constructor(...e1){
        super(...e1), this.hasComboQuestions = !0, this.currentRunCountry = "", this.hasCompletedRegularFillRun = !1, this.preserveCommittedRegularFieldsForCurrentRun = !1;
    }
}
function g(e1) {
    return b(e1).map(w).filter((e1)=>!!e1);
}
function b(e1) {
    let t = e1.querySelector("ul.listtype");
    if (!t) {
        let t = Array.from(e1.querySelectorAll("[data-automation='work-experience-item'], [data-automation='education-panel'], [data-automation='panel-list-item']"));
        return Array.from(new Set(t.map((e1)=>e1.closest("[data-automation='panel-list-item']") ?? e1)));
    }
    return Array.from(t.querySelectorAll("li.row, li[data-automation='panel-list-item']"));
}
function y(e1, t, r1) {
    let n = t[r1] ?? "", o = t.slice(0, r1).filter((e1)=>e1 === n).length, i = b(e1);
    return n ? i.filter((e1)=>w(e1) === n)[o] ?? null : i[r1] ?? null;
}
function v(e1, t) {
    if (!t) {
        e1.reporter.clearRecordFocus(e1.index), console.debug("[Ultipro][section-focus] stable row unavailable", {
            type: e1.type,
            index: e1.index
        });
        return;
    }
    let r1 = Array.from(new Set(e1.focusLabels)).map((e1)=>({
            label: e1,
            required: !1,
            type: s.FIELD_TYPE.TEXT,
            $input: t,
            $label: t
        }));
    e1.reporter.setRecordFocus(e1.index, {
        label: e1.type,
        required: !1,
        type: "education" === e1.type ? s.FIELD_TYPE.EDUCATION : s.FIELD_TYPE.EMPLOYMENT,
        $input: t,
        children: r1,
        options: []
    }), console.debug("[Ultipro][section-focus] stable row registered", {
        type: e1.type,
        index: e1.index,
        fieldCount: r1.length
    });
}
function w(e1) {
    let t = e1.querySelector("strong")?.textContent;
    if (t) return A(t);
    let r1 = new Map;
    for (let t of Array.from(e1.querySelectorAll("div.form-group"))){
        let e1 = (t.querySelector("label")?.textContent ?? "").replace(/\*/g, "").trim().toLowerCase();
        if (!e1) continue;
        let n = t.querySelector("input, textarea, select"), o = n?.value?.trim() ?? "";
        r1.set(e1, o);
    }
    let n = r1.get("job title") ?? "", o = r1.get("company / organization") ?? "";
    return n || o ? A([
        n,
        o
    ].filter(Boolean).join(", ")) : A(r1.get("school name") ?? "");
}
function S(e1, t) {
    let r1 = e1.findIndex((e1)=>w(e1) === t);
    return r1 < 0 ? null : e1.splice(r1, 1)[0] ?? null;
}
_c = S;
function E(e1) {
    let t = Array.isArray(e1) ? e1[0] : e1;
    return t?.toString().trim().toLowerCase() ?? "";
}
_c1 = E;
function x(e1) {
    return A([
        E(e1["Job Title"]),
        E(e1["Company / Organization"])
    ].join(", "));
}
function C(e1) {
    return A(E(e1["School Name"]));
}
_c2 = C;
function A(e1) {
    let t = e1.trim().toLowerCase().replace(/\s+/g, " ").replace(/\s*,\s*/g, ", ");
    return t.replace(/[,\s]/g, "") ? t : "";
}
_c3 = A;
async function k(e1, t, r1 = ()=>new Promise((e1)=>setTimeout(e1, 300))) {
    let n = t.map(A).filter(Boolean), o = 0;
    console.info("[Ultipro] reconciling parser rows", {
        targetCount: n.length,
        currentRowCount: b(e1).length
    });
    for(let t = 0; t < 100; t += 1){
        let t = new Map;
        for (let e1 of n)t.set(e1, (t.get(e1) ?? 0) + 1);
        let i = b(e1), a = [];
        for (let e1 of i){
            let r1 = w(e1), n = t.get(r1) ?? 0;
            r1 && n > 0 ? t.set(r1, n - 1) : a.push(e1);
        }
        if (0 === a.length) return {
            removed: o,
            ready: !0
        };
        let l = a[a.length - 1], s = l.querySelector("button[data-automation='remove-button'], button[data-automation='delete-button']");
        if (!s || s.disabled) break;
        let u = i.length;
        s.click();
        let c = Date.now() + 3e3;
        for(; b(e1).length >= u && Date.now() < c;)await r1();
        if (b(e1).length >= u) break;
        o += 1;
    }
    return {
        removed: o,
        ready: !1
    };
}
function T(e1) {
    if (e1.type === s.FIELD_TYPE.CHECKBOX) {
        let t = Array.isArray(e1.$checkboxs) ? e1.$checkboxs : [];
        if (t.length > 0) return t.some((e1)=>e1.checked);
        let r1 = e1.$input;
        return r1?.checked === !0;
    }
    let t = e1.$input;
    if (!t) return !1;
    if (e1.type === s.FIELD_TYPE.DATE && "UKG-DATE-INPUT-TEXT" === t.tagName) {
        let e1 = [
            "Month",
            "Day",
            "Year"
        ].map((e1)=>t.querySelector(`input[aria-label="${e1}"]`)?.value);
        return e1.every((e1)=>!!e1?.trim());
    }
    return (0, f.hasMeaningfulControlValue)(t);
}
_c4 = T;
function F(e1) {
    return !(e1.__ultiproDialogSection || j(e1)) && (e1.type === s.FIELD_TYPE.TEXT || e1.type === s.FIELD_TYPE.SELECT || e1.type === s.FIELD_TYPE.CHECKBOX || e1.type === s.FIELD_TYPE.DATE);
}
_c5 = F;
function I(e1) {
    let t = e1.$input;
    return e1.type === s.FIELD_TYPE.SELECT && t?.id === "State" && /(?:state|province)/i.test(e1.label ?? "");
}
_c6 = I;
function j(e1) {
    return e1.type === s.FIELD_TYPE.TEXT && e1.label?.trim().toLowerCase() === "skills";
}
function D(e1) {
    return Array.isArray(e1) ? e1.map((e1)=>String(e1 ?? "").trim()).filter((e1)=>e1.length > 0) : [];
}
_c7 = D;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");
$RefreshReg$(_c5, "F");
$RefreshReg$(_c6, "I");
$RefreshReg$(_c7, "D");

},{}]},["cP1w4","kO2Z6"], "kO2Z6", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFBc0UsSUFBSSxJQUFFLEVBQUUsNEJBQTRCLEdBQUU7Z0JBQUcsRUFBRSxRQUFRLFNBQVMsQ0FBQztvQkFBRSxFQUFFLElBQUk7Z0JBQUU7WUFBRSxJQUFHO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFO1lBQStCLElBQUcsTUFBSSxLQUFLLEdBQUU7Z0JBQUMsSUFBSSxJQUFFO2dCQUFFLEVBQUUsaUNBQStCLElBQUU7b0JBQUMsV0FBVSxJQUFJO29CQUFJLGVBQWMsQ0FBQztvQkFBRSxRQUFPLFNBQVMsQ0FBQzt3QkFBRSxPQUFPO29CQUFHO29CQUFFLHFCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFFO29CQUFFLG1CQUFrQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRTtvQkFBRSxzQkFBcUIsWUFBVztnQkFBQztZQUFDO1lBQUMsSUFBRyxFQUFFLFlBQVc7Z0JBQUMsUUFBUSxLQUFLO2dCQUE4SjtZQUFNO1lBQUMsSUFBSSxJQUFFLEVBQUU7WUFBTyxFQUFFLFNBQU8sU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLE1BQU0sSUFBSSxFQUFDO2dCQUFXLE9BQU8sT0FBTyxFQUFFLG1CQUFpQixjQUFZLE9BQU8sRUFBRSxxQkFBbUIsY0FBWSxFQUFFLElBQUksR0FBRSxJQUFHO1lBQUMsR0FBRSxFQUFFLFVBQVUsUUFBUSxTQUFTLENBQUMsRUFBQyxDQUFDO2dCQUFFLE9BQU8sRUFBRSxtQkFBaUIsY0FBWSxPQUFPLEVBQUUscUJBQW1CLGNBQVksRUFBRSxJQUFJLEdBQUU7WUFBRTtZQUFHLElBQUksSUFBRSxFQUFFLG1CQUFrQixJQUFFLEVBQUUsdUJBQXFCLFlBQVc7WUFBRSxFQUFFLHNCQUFvQixTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUksQ0FBQSxFQUFFLE9BQU8sSUFBRyxNQUFJLFFBQU0sRUFBRSxJQUFJLEdBQUUsRUFBQyxHQUFHLEVBQUUsTUFBTSxJQUFJLEVBQUM7WUFBVSxHQUFFLEVBQUUsb0JBQWtCLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO2dCQUFHLElBQUcsTUFBSSxLQUFLLEdBQUU7b0JBQUMsRUFBRSxJQUFJLEdBQUU7b0JBQUcsSUFBSSxJQUFFLEVBQUUsU0FBUSxJQUFFLEVBQUU7b0JBQVUsSUFBRyxNQUFJLE1BQUs7d0JBQUMsSUFBSSxJQUFFLEVBQUUsaUJBQWUsUUFBTSxFQUFFLGNBQWMsV0FBUyxRQUFNLEVBQUUsSUFBSSxJQUFHLElBQUUsRUFBRSxpQkFBZSxRQUFNLEVBQUUsY0FBYyxXQUFTO3dCQUFLLENBQUMsS0FBRyxJQUFHLENBQUEsRUFBRSxJQUFJLElBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxLQUFHLEtBQUksQ0FBQSxLQUFHLENBQUMsSUFBRyxDQUFBLEVBQUUsT0FBTyxJQUFHLElBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxPQUFPLEVBQUMsSUFBRyxDQUFDLEtBQUcsQ0FBQyxLQUFHLEtBQUcsRUFBRSxJQUFJLEVBQUM7b0JBQUUsT0FBTSxFQUFFLElBQUk7Z0JBQUU7Z0JBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxFQUFDO1lBQVU7UUFBRTtRQUFDLFNBQVM7WUFBSyxPQUFNLENBQUM7UUFBQztRQUFDLFNBQVM7WUFBSyxPQUFPLEVBQUU7UUFBSTtRQUFDLFNBQVM7WUFBTSxJQUFJLEdBQUUsR0FBRSxJQUFFLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztnQkFBRSxJQUFHLE9BQU8sS0FBRyxVQUFTLE9BQU8sS0FBSSxDQUFBLElBQUUsR0FBRSxJQUFFLE9BQU8sS0FBRyxVQUFTLEdBQUcsS0FBRyxRQUFPLENBQUEsT0FBTyxLQUFHLGNBQVksT0FBTyxLQUFHLFFBQU8sS0FBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLElBQUc7Z0JBQUUsQ0FBQyxLQUFHLEtBQUksQ0FBQSxJQUFFLENBQUMsR0FBRSxFQUFFLEVBQUM7WUFBRTtRQUFFO1FBQUMsU0FBUyxHQUFHLENBQUM7WUFBRSxPQUFPLE9BQU87Z0JBQUcsS0FBSTtvQkFBWSxJQUFHLEVBQUUsYUFBVyxNQUFLO3dCQUFDLElBQUcsRUFBRSxVQUFVLGtCQUFpQixPQUFNLENBQUM7d0JBQUUsSUFBSSxJQUFFLE9BQU8sb0JBQW9CLEVBQUU7d0JBQVcsSUFBRyxFQUFFLFNBQU8sS0FBRyxDQUFDLENBQUMsRUFBRSxLQUFHLGlCQUFlLEVBQUUsVUFBVSxjQUFZLE9BQU8sV0FBVSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsSUFBSSxJQUFFLEVBQUUsUUFBTSxFQUFFO29CQUFZLE9BQU8sT0FBTyxLQUFHLFlBQVUsU0FBUyxLQUFLO2dCQUFHLEtBQUk7b0JBQVUsSUFBRyxLQUFHLE1BQUssT0FBTyxFQUFFLEdBQUU7d0JBQWEsS0FBSzt3QkFBRSxLQUFLOzRCQUFFLE9BQU0sQ0FBQzt3QkFBRTs0QkFBUSxPQUFNLENBQUM7b0JBQUM7b0JBQUMsT0FBTSxDQUFDO2dCQUFFO29CQUFRLE9BQU0sQ0FBQztZQUFDO1FBQUM7UUFBQyxFQUFFLHVCQUFxQixJQUFHLEVBQUUsaUNBQStCLEdBQUUsRUFBRSxzQ0FBb0MsSUFBRyxFQUFFLDRCQUEwQixJQUFHLEVBQUUsZ0JBQWMsR0FBRSxFQUFFLGtCQUFnQixHQUFFLEVBQUUseUJBQXVCLElBQUcsRUFBRSx1QkFBcUIsSUFBRyxFQUFFLHdCQUFzQixJQUFHLEVBQUUsc0JBQW9CLEdBQUUsRUFBRSxXQUFTLEdBQUUsRUFBRSxlQUFhO0lBQUMsQ0FBQTtBQUFJO0FBQUcsSUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFHO0lBQUs7SUFBYSxFQUFFLFVBQVE7QUFBRztBQUFHLElBQUksSUFBRSxDQUFDO0FBQUUsR0FBRyxHQUFFO0lBQUMsU0FBUSxJQUFJO0FBQUU7QUFBRyxPQUFPLFVBQVEsR0FBRztBQUFHLElBQUksSUFBRSxFQUFFO0FBQUssRUFBRSxHQUFFLEVBQUUsTUFBSyxPQUFPO0FBQVMsSUFBSSxLQUFHLEVBQUUsU0FDcDVMOzs7Ozs7Ozs7Ozs7QUFZQTs7O0FDYkE7Ozs7Ozs7Ozs7Ozs7OztDQWVDLEdBRUQsSUFBSSxJQUFJLEVBQUU7QUFDVixFQUFFLGtCQUFrQixJQUFJLEVBQUUsT0FBTyxHQUFHLFdBQVcsSUFBTSxJQUFJLEVBQUUsT0FBTyxHQUFHLDJCQUNyRSxJQUFNLElBQUksRUFBRSxPQUFPLEdBQUcsMENBQTBDLElBQU07QUFDdEUsSUFBSSxJQUFJLEVBQUUsc0NBQ1IsSUFBSSxFQUFFLDZCQUNOLElBQUksRUFBRSxtQ0FDTixJQUFJLEVBQUUsZ0NBQ04sSUFBSSxFQUFFLGdCQUNOLElBQUksRUFBRSxnQkFDTixJQUFJLEVBQUUsd0JBQ04sSUFBSSxFQUFFLGFBQ04sSUFBSSxFQUFFLGlCQUNOLElBQUksRUFBRTtBQUVSLFNBQVMsRUFBRSxFQUFDO0lBQ1YsT0FBTztRQUNMLEdBQUcsRUFBQztRQUNKLFFBQVEsRUFBQyxDQUFDLGNBQWMsSUFBSSxHQUFFO1FBQzlCLFNBQVMsRUFBQyxDQUFDLHlCQUF5QixJQUFJLEdBQUU7SUFDNUM7QUFDRjtBQUNBLE1BQU0sVUFBVSxFQUFFO0lBQ2hCLG1CQUFtQjtRQUNqQixPQUFPO1lBQ0wsQ0FBQyxFQUFFLFdBQVcsS0FBSyxFQUFFLENBQUMsSUFBRztnQkFDdkIsSUFBSSxLQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNkLE9BQU8sS0FBSSxBQUFDLENBQUEsR0FBRyxFQUFFLGtCQUFpQixFQUFHLEdBQUUsUUFBUSxPQUFPLE1BQUssT0FBTyxFQUFFO1lBQ3RFO1lBQ0EsQ0FBQyxFQUFFLFdBQVcsT0FBTyxFQUFFLENBQUMsSUFBRztnQkFDekIsSUFBSSxLQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNkLElBQUksQ0FBQyxJQUFHLE9BQU8sRUFBRTtnQkFDakIsSUFBSSxJQUFJLEdBQUU7Z0JBQ1YsT0FBTyxjQUFjLEVBQUUsTUFBTSxHQUFFLE9BQU8sT0FBTyxrQkFBa0IsWUFBWSxBQUFDLENBQUEsR0FBRyxFQUMxRSxxQkFBb0IsRUFBRyxPQUFPLE1BQUssT0FBTyxZQUFZLEVBQUUsTUFDM0Qsc0JBQXNCLEtBQUssR0FBRSxTQUFTLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSw2QkFBNEIsRUFBRyxHQUMvRSxPQUFPLE1BQUssT0FBTyxBQUFDLENBQUEsR0FBRyxFQUFFLGVBQWMsRUFBRyxHQUFHLE9BQU8sTUFBSztZQUMvRDtZQUNBLENBQUMsRUFBRSxXQUFXLFNBQVMsRUFBRSxDQUFDLElBQUcsSUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLGlCQUFnQixFQUFHLElBQUc7WUFDL0QsQ0FBQyxFQUFFLFdBQVcsYUFBYSxFQUFFLENBQUMsSUFBRyxJQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsb0JBQW1CLEVBQUcsSUFBRztZQUN0RSxDQUFDLEVBQUUsV0FBVyxLQUFLLEVBQUUsQ0FBQyxJQUFHO2dCQUN2QixJQUFJLEtBQUksR0FBRyxDQUFDLEVBQUU7Z0JBQ2QsT0FBTyxLQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsYUFBWSxFQUFHLEdBQUUsUUFBUSxPQUFPLE1BQUssT0FBTyxFQUFFO1lBQ2pFO1FBQ0Y7SUFDRjtJQUNBLE1BQU0sbUJBQW1CO1FBQ3ZCLElBQUksS0FBSSxDQUFDLEdBQ1AsSUFBSSxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsWUFBVyxFQUFHO1lBQzVCLG9DQUFvQztnQkFDbEMsSUFBSSxDQUFFLENBQUEsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsbUNBQWtDLEdBQUcsR0FBSTtnQkFDL0QsSUFBSSxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsdUJBQXNCLEVBQUcsSUFBSSxDQUFDLG9CQUMxQyxLQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQywrQ0FBK0MsTUFBTSxLQUNuRSxTQUFTLGlCQUFpQixtQkFBbUIsS0FBSyxDQUFBLEtBQUssQ0FBQyxBQUFDLENBQUEsR0FBRyxFQUFFLGVBQWMsRUFDM0UsT0FBTSxBQUFDLENBQUEsR0FBRyxFQUFFLHlCQUF3QixFQUFHO2dCQUM1QyxLQUFLLENBQUMsS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUscUJBQW9CLEVBQUcsS0FBSyxLQUFLLE1BQUssUUFBUSxLQUNsRTtZQUNKO1lBQ0EseUJBQXlCO2dCQUN2QixNQUFLLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxxQ0FBb0M7WUFDdkQ7UUFDRjtRQUNGLE9BQU8sRUFBRSxPQUFPLENBQUEsS0FBSyxDQUFDLEVBQUU7SUFDMUI7SUFDQSx5QkFBeUIsRUFBQyxFQUFFLENBQUMsRUFBRTtRQUM3QixJQUFJLEtBQUksS0FBSyxDQUFDLHlCQUF5QixJQUFHLEdBQUcsT0FBTyxDQUFBLEtBQUssQ0FBQyxFQUFFLE9BQU0sQ0FBQyxFQUFFLE1BQ25FLElBQUksRUFBRSxLQUFLLENBQUEsS0FBSyxFQUFFLE9BQU0sQ0FBQyxFQUFFO1FBQzdCLE9BQU8sQ0FBQyxLQUFLLEdBQUUsU0FBUyxLQUFLLEtBQUssQ0FBQSxRQUFRLEtBQ3hDLDJEQUEyRDtZQUN6RCxhQUFhLEVBQUUsUUFBUSxTQUFTLFVBQVU7UUFDNUMsSUFBSTtlQUFJO1lBQUc7U0FBRSxBQUFEO0lBQ2hCO0lBQ0EsY0FBYztRQUNaLE9BQU87SUFDVDtJQUNBLE1BQU0saUJBQWlCO1FBQ3JCLElBQUksQ0FBQyxvQkFBb0I7UUFDekIsSUFBSSxLQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxvQkFBbUIsRUFBRyxXQUFXO1FBQ3JELElBQUksQ0FBQyxvQkFBb0IsSUFBRyxVQUFVLFdBQVcsSUFBSSxJQUFJLENBQ3RELDhDQUE4QyxRQUFRLEtBQ3JELCtEQUErRCxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQ3hFLHlDQUF3QztJQUMvQztJQUNBLE1BQU0sc0JBQXNCO1FBQzFCLElBQUksS0FBSSxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsZUFBYztRQUNsQyxPQUFPO0lBQ1Q7SUFDQSxNQUFNLG9CQUFvQjtRQUN4QixPQUFPLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxlQUFjO0lBQ25DO0lBQ0EsMEJBQTBCO1FBQ3hCLE9BQU87SUFDVDtJQUNBLG9CQUFvQjtRQUNsQixJQUFJLEtBQUksMEVBQ04sSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLG1CQUFrQixFQUFHO1FBQ2pDLEtBQUssR0FBRztJQUNWO0lBQ0EsTUFBTSxXQUFXLEtBQUksQ0FBQyxDQUFDLEVBQUU7UUFDdkIsSUFBSSxDQUFDLDhDQUE4QyxJQUFJLENBQUMsNEJBQ3RELE1BQU0sSUFBSSxDQUFDO1FBQ2IsSUFBSSxJQUFJLE1BQU0sSUFBSSxDQUFDLG9CQUNqQixLQUFJLElBQUksQ0FBQyw4QkFBOEI7UUFDekMsSUFBSSxDQUFDLGdCQUFnQix3QkFBd0I7UUFDN0MsSUFBSSxJQUFJLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixJQUFHO1FBQ3ZDLElBQUksWUFBWSxPQUFPLEdBQUcsT0FBTztRQUNqQyxJQUFJLENBQUMsU0FBUyxBQUFDLENBQUEsR0FBRyxFQUFFLFlBQVcsRUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUM7UUFDcEQsSUFBSSxJQUFJLEdBQ04sSUFBSSxDQUFDLElBQUksQ0FBQywrQ0FBK0MsQUFBQyxDQUFBLEdBQUcsRUFDMUQsNEJBQTJCLE1BQU87WUFDbkMsa0JBQWtCLEFBQUMsQ0FBQSxHQUFHLEVBQUUsb0NBQW1DO1lBQzNELDJCQUEyQixBQUFDLENBQUEsR0FBRyxFQUFFLHNDQUFxQztRQUN4RSxJQUFJLE1BQ0osSUFBSTtRQUNOLElBQUksQ0FBQyw4Q0FBOEMsUUFBUSxLQUN6RCwwREFBMEQsQ0FBQyxNQUFPLENBQUEsSUFBSSxNQUFNLElBQUksQ0FDL0Usb0JBQW1CLEtBQU8sQ0FBQSxJQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxtQ0FBa0MsRUFBRyxTQUNoRixLQUFLLElBQUksSUFBSSxDQUFDLEVBQUM7UUFDakIsSUFBSSxJQUFJLElBQUksQ0FBQyw4Q0FBOEMsRUFBRSxHQUFHLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFDdkUseUNBQXdDO1FBQzNDLEVBQUUsU0FBUyxLQUFLLE1BQU0sSUFBSSxDQUFDLE1BQU0sTUFBTSxJQUFJLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixJQUFJLENBQzNFLGdCQUFnQix3QkFBd0IsSUFBSSxDQUFDLDhCQUE4QjtRQUM5RSxJQUFJLElBQUksSUFBSSxDQUFDLDhCQUE4QixJQUFJLENBQUMseUJBQXlCLEdBQUc7UUFDNUUsSUFBSSxFQUFFLFNBQVMsR0FBRyxJQUFJO1lBQ2xCLE1BQU0sSUFBSSxDQUFDLDhCQUE4QixHQUFHO1FBQzlDLEVBQUUsT0FBTyxJQUFHO1lBQ1YsSUFBSSxjQUFhLEVBQUUsZ0JBQWdCLE1BQU07WUFDekMsUUFBUSxNQUFNLDRDQUE0QztRQUM1RDtRQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sSUFBSSxDQUFDLDJCQUEyQixLQUFLLFFBQVEsS0FDN0QscUZBQ0YsTUFBTSxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsUUFBUSxLQUM3RSxzREFBc0Q7WUFDcEQsV0FBVyxFQUFFO1FBQ2Y7UUFDSixJQUFJLElBQUksTUFBTSxJQUFJLENBQUMsaUNBQWlDLEdBQUc7UUFDdkQsT0FBTyxZQUFZLE9BQU8sSUFBSSxJQUFLLENBQUEsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixJQUFJLElBQUksQ0FDbkYsa0JBQWlCO0lBQ3RCOztRQUVFLElBQUksQ0FBQywrQkFBK0I7SUFDdEM7SUFDQSxNQUFNLDhCQUE4QixFQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3hDLElBQUk7UUFDSixJQUFJLElBQUksR0FBRSxJQUFJLENBQUEsS0FBSyxHQUFFO1FBQ3JCLFFBQVEsSUFBSSx3Q0FBd0M7UUFDcEQsSUFBSSxJQUFJLE9BQU8sWUFDYixJQUFJLElBQUksUUFBUSxDQUFBO1lBQ2QsS0FBSSxXQUFXLElBQU0sR0FBRSxJQUFJLEVBQUU7UUFDL0IsSUFDQSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBRyxHQUFHO1lBQ2hDLGlCQUFpQixDQUFDO1FBQ3BCO1FBQ0YsRUFBRSxNQUFNLEtBQU87UUFDZixJQUFJLElBQUksTUFBTSxRQUFRLEtBQUs7WUFBQztZQUFHO1NBQUU7UUFDakMsTUFBSyxhQUFhLEtBQUksS0FBSyxZQUFZLE9BQU8sSUFBSyxDQUFBLFFBQVEsSUFDckQseUNBQXlDLE9BQU8sS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLLElBQUksQ0FDN0UseUJBQXlCLEdBQUcsR0FBQyxJQUFLLFFBQVEsS0FDM0MsaURBQWlELE1BQU0sSUFBSSxZQUFZLEtBQUssVUFDOUUsSUFBSSxDQUFDLDRCQUE0QixLQUFJLElBQUksQ0FBQyxTQUFTLEFBQUMsQ0FBQSxHQUFHLEVBQUUsWUFBVyxFQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FDckY7SUFDUDtJQUNBLDRCQUE0QixFQUFDLEVBQUU7UUFDN0IsSUFBSSxJQUFJLFlBQVksT0FBTyxJQUFJLENBQUMsUUFBUSxRQUFRLElBQUksQ0FBQyxPQUFPLE1BQU0sU0FBUztRQUMzRSxJQUFJLEdBQ0YsS0FBSyxJQUFJLE1BQUssR0FBRztZQUNmLElBQUksS0FBSSxHQUFFO1lBQ1YsSUFBSSxDQUFDLElBQUc7WUFDUixJQUFJLElBQUksR0FBRTtZQUNULENBQUEsRUFBRSxTQUFTLFlBQVksRUFBRSxTQUFTLFdBQVUsS0FBTyxDQUFBLElBQUksQ0FBQyxpQkFBaUIsT0FBTyxDQUFBLElBQUksQ0FDbEYsT0FBTyxVQUFVO2dCQUNoQixHQUFHLElBQUksQ0FBQyxPQUFPLE9BQU87Z0JBQ3RCLENBQUMsR0FBRSxFQUFFO1lBQ1AsQ0FBQSxDQUFDO1FBQ0w7SUFDSjtJQUNBLGlCQUFpQixFQUFDLEVBQUU7UUFDbEIsSUFBSTtZQUNGLE9BQU8sQUFBQyxDQUFBLEdBQUcsRUFBRSxpQkFBZ0IsRUFBRyxJQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQztRQUM1RCxFQUFFLE9BQU07WUFDTixPQUFPLENBQUM7UUFDVjtJQUNGO0lBQ0EsTUFBTSxrQkFBa0IsRUFBQyxFQUFFO1FBQ3pCLElBQUksQ0FBQyw0QkFBNEIsR0FBRSxPQUFPO1FBQzFDLElBQUksSUFBSSxHQUFFLE9BQU8sQ0FBQSxLQUFLLENBQUMsR0FBRSwwQkFBMEIsQ0FBQyxFQUFFLE1BQ3BELEtBQUksSUFBSSxDQUFDLDhCQUE4QjtRQUN6QyxJQUFJLENBQUMsK0NBQStDLFFBQVEsS0FDMUQsNERBQTREO1lBQzFELGdCQUFnQixFQUFFO1lBQ2xCLGNBQWMsRUFBRSxTQUFTLEdBQUU7WUFDM0IsV0FBVyxHQUFFO1FBQ2YsSUFBSSxNQUFNLEtBQUssQ0FBQyxrQkFBa0I7SUFDdEM7SUFDQSxNQUFNLDRCQUE0QixFQUFDLEVBQUU7UUFDbkMsT0FBTyxJQUFJLENBQUMsOEJBQThCO0lBQzVDO0lBQ0EsOEJBQThCLEVBQUMsRUFBRTtRQUMvQixPQUFPLElBQUksQ0FBQyw4Q0FBOEMsR0FBRSxPQUFPLENBQUEsS0FBSyxDQUFDLEVBQUUsT0FBTSxDQUFDLEVBQUUsT0FBTTtJQUM1RjtJQUNBLE1BQU0scUJBQXFCO1FBQ3pCLElBQUksQ0FBQyxBQUFDLENBQUEsR0FBRyxFQUFFLG9CQUFtQixLQUFNLE9BQU87UUFDM0MsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLDBCQUEwQjtZQUMvQyxPQUFPO1lBQ1AsVUFBVSxDQUFDO1FBQ2IsSUFBSSxJQUFJLENBQUMscUJBQXFCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixxQkFDMUQsY0FBYztRQUNoQixJQUFJLEtBQUk7UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLElBQUk7WUFDeEIsSUFBSSxJQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxZQUFXLEVBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLGdCQUNyRCwyQkFBMkIsSUFBSSxDQUFDLGdCQUFnQjtZQUNuRCxLQUFLLElBQUksQ0FBQyxnQkFBZ0IscUJBQXFCLGNBQWMsS0FBSTtRQUNuRSxJQUFJLE1BQU0sSUFBSSxDQUFDLFVBQVUsT0FBTztJQUNsQztJQUNBLE1BQU0sMkJBQTJCLEVBQUMsRUFBRTtRQUNsQyxJQUFJLElBQUksR0FBRSxLQUFLLENBQUEsS0FBSyxHQUFFLFNBQVMsRUFBRSxXQUFXLFlBQzFDLEtBQUksR0FBRSxLQUFLLENBQUEsS0FBSyxHQUFFLFNBQVMsRUFBRSxXQUFXO1FBQzFDLE1BQU0sUUFBUSxJQUFJLENBQUMsT0FBTyxtQkFBb0IsQ0FBQSxNQUFLLE1BQU0sSUFBSSxDQUFDLE9BQU8sZUFDbEUsTUFBSyxLQUFNLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixLQUFJLE1BQU0sUUFBUSxJQUFJLENBQUMsT0FBTyxjQUN6RSxDQUFBLEtBQUssTUFBTSxJQUFJLENBQUMsT0FBTyxVQUFVLE1BQUssS0FBTSxNQUFNLElBQUksQ0FBQyxxQkFBcUI7SUFDbEY7SUFDQSxNQUFNLHNCQUFzQixFQUFDLEVBQUU7UUFDN0IsSUFBSSxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsd0JBQXVCLEVBQUc7UUFDeEMsSUFBSSxDQUFDLEdBQUc7UUFDUixJQUFJLEtBQUksSUFBRyxVQUFVLE1BQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sZ0JBQ2hCLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSxxQ0FBb0MsRUFBRyxjQUFjLElBQUksQ0FBQyxpQkFDbEUsZUFDRixJQUFJLEVBQUUsSUFBSSxDQUFBLEtBQUssRUFBRSxNQUNqQixJQUFJLE1BQU0sRUFBRSxHQUFHLEdBQUcsSUFBTSxJQUFJLENBQUMsTUFBTTtRQUNyQyxJQUFJLFFBQVEsS0FDUixDQUFDLDZEQUE2RCxFQUFFLEVBQUUsT0FBTyxlQUFlLEVBQUUsRUFBRSxRQUFRLFFBQVEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUNwSCxDQUFDLEVBQUUsT0FBTztZQUNmLFFBQVEsS0FDTixpRkFBaUY7Z0JBQy9FLGFBQWEsRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IscUJBQXFCO1lBQ2hEO1FBQ0Y7UUFDQSxJQUFJLElBQUksRUFBRSxJQUNSLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSx5QkFBd0IsRUFBRyxJQUNyQyxJQUFJLElBQUksRUFBRSxLQUFLLEVBQUUsRUFDakIsSUFBSSxNQUFNLEVBQUU7UUFDZCxLQUFLLElBQUksQ0FBQyxJQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVc7WUFDOUIsSUFBSSxJQUFJO2dCQUNOLE1BQU07Z0JBQ04sT0FBTztnQkFDUCxVQUFVO2dCQUNWLGFBQWEsRUFBRTtZQUNqQjtZQUNBLElBQUksSUFBSSxDQUFDLGdCQUFnQixxQkFBcUI7Z0JBQzVDLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLDJCQUEwQixFQUFHLGNBQWMsRUFBRSxVQUFVLElBQUcsRUFBRTtnQkFDMUUsRUFBRSxVQUFVLEdBQUcsRUFBRSxLQUFLLEVBQUU7WUFDMUI7WUFDQSxJQUFJLElBQUksRUFBRSxJQUNSLElBQUksRUFBRSxHQUFHO1lBQ1gsSUFBSSxHQUFHO2dCQUNMLFFBQVEsS0FBSyx1REFBdUQ7b0JBQ2xFLHdCQUF3QixFQUFFO2dCQUM1QixJQUFJLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixHQUFHLEdBQUcsR0FBRyxJQUFJLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixJQUFJLEVBQUUsR0FDakY7Z0JBQ0Y7WUFDRjtZQUNBLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxJQUFJO2dCQUN2QixFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUc7Z0JBQ2I7WUFDRjtZQUNBLElBQUksSUFBSSxNQUFNLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFHO1lBQzVDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHO2dCQUNkLEVBQUUsaUJBQWlCLEtBQUksUUFBUSxLQUMzQixnRkFBZ0YsSUFBSSxDQUNyRixnQkFBZ0IscUJBQXFCO2dCQUN4QztZQUNGO1lBQ0EsTUFBTSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxHQUFHLElBQUksTUFBTSxJQUFJLENBQUMsbUJBQW1CLElBQUksRUFBRSxHQUFHLElBQUksSUFDcEYsRUFBRSxHQUFHLEdBQUcsTUFBSyxFQUFFLEtBQUs7UUFDeEI7UUFDQSxJQUFJLElBQUksRUFBRSxHQUFHO1FBQ2IsSUFBSSxNQUFNLEVBQUUsUUFBUTtZQUNsQixRQUFRLEtBQUsseURBQXlEO2dCQUNwRSxhQUFhLEVBQUU7Z0JBQ2YsWUFBWTtZQUNkLElBQUksSUFBSSxDQUFDLGdCQUFnQixxQkFBcUI7WUFDOUM7UUFDRjtRQUNBLElBQUksQ0FBQyxnQkFBZ0IscUJBQXFCO1FBQzFDLElBQUksSUFBSSxFQUFFLGNBQWM7UUFDeEIsR0FBRyxTQUFTLE1BQU0sSUFBSSxDQUFDLE1BQU07SUFDL0I7SUFDQSxNQUFNLHFCQUFxQixFQUFDLEVBQUU7UUFDNUIsSUFBSSxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsd0JBQXVCLEVBQUc7UUFDeEMsSUFBSSxDQUFDLEdBQUc7UUFDUixJQUFJLEtBQUksSUFBRyxVQUFVLE1BQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sV0FDaEIsSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLHFDQUFvQyxFQUFHLGFBQWEsSUFBSSxDQUFDLGlCQUNqRSxjQUNGLElBQUksRUFBRSxJQUFJLENBQUEsS0FBSyxFQUFFLE1BQ2pCLElBQUksTUFBTSxFQUFFLEdBQUcsR0FBRyxJQUFNLElBQUksQ0FBQyxNQUFNO1FBQ3JDLElBQUksUUFBUSxJQUFJLGtEQUFrRDtZQUM5RCxhQUFhLEVBQUU7WUFDZixjQUFjLEVBQUU7WUFDaEIsT0FBTyxFQUFFO1FBQ1gsSUFBSSxDQUFDLEVBQUUsT0FBTztZQUNkLFFBQVEsS0FDTixnRkFBZ0Y7Z0JBQzlFLGFBQWEsRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IscUJBQXFCO1lBQ2hEO1FBQ0Y7UUFDQSxJQUFJLElBQUksRUFBRSxJQUNSLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSx5QkFBd0IsRUFBRyxJQUNyQyxJQUFJLElBQUksRUFBRSxLQUFLLEVBQUUsRUFDakIsSUFBSSxNQUFNLEVBQUU7UUFDZCxLQUFLLElBQUksQ0FBQyxJQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVc7WUFDOUIsSUFBSSxJQUFJO2dCQUNOLE1BQU07Z0JBQ04sT0FBTztnQkFDUCxVQUFVO2dCQUNWLGFBQWEsRUFBRTtZQUNqQjtZQUNBLElBQUksSUFBSSxDQUFDLGdCQUFnQixxQkFBcUI7Z0JBQzVDLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLDJCQUEwQixFQUFHLGFBQWEsRUFBRSxVQUFVLElBQUcsRUFBRTtnQkFDekUsRUFBRSxVQUFVLEdBQUcsRUFBRSxLQUFLLEVBQUU7WUFDMUI7WUFDQSxJQUFJLElBQUksRUFBRSxJQUNSLElBQUksRUFBRSxHQUFHO1lBQ1gsSUFBSSxHQUFHO2dCQUNMLFFBQVEsS0FBSyxzREFBc0Q7b0JBQ2pFLHdCQUF3QixFQUFFO2dCQUM1QixJQUFJLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixHQUFHLEdBQUcsR0FBRyxJQUFJLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixJQUFJLEVBQUUsR0FDakY7Z0JBQ0Y7WUFDRjtZQUNBLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxTQUFTLElBQUk7Z0JBQzVCLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRztnQkFDYjtZQUNGO1lBQ0EsSUFBSSxJQUFJLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUc7WUFDNUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUc7Z0JBQ2QsRUFBRSxpQkFBaUIsS0FBSSxRQUFRLEtBQzNCLCtFQUErRSxJQUFJLENBQ3BGLGdCQUFnQixxQkFBcUI7Z0JBQ3hDO1lBQ0Y7WUFDQSxNQUFNLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLEdBQUcsSUFBSSxNQUFNLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxJQUNwRixFQUFFLEdBQUcsR0FBRyxNQUFLLEVBQUUsS0FBSztRQUN4QjtRQUNBLElBQUksSUFBSSxFQUFFLEdBQUc7UUFDYixJQUFJLE1BQU0sRUFBRSxRQUFRO1lBQ2xCLFFBQVEsS0FBSyx3REFBd0Q7Z0JBQ25FLGFBQWEsRUFBRTtnQkFDZixZQUFZO1lBQ2QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLHFCQUFxQjtZQUM5QztRQUNGO1FBQ0EsSUFBSSxDQUFDLGdCQUFnQixxQkFBcUI7UUFDMUMsSUFBSSxJQUFJLEVBQUUsY0FBYztRQUN4QixHQUFHLFNBQVMsTUFBTSxJQUFJLENBQUMsTUFBTTtJQUMvQjtJQUNBLE1BQU0sbUJBQW1CLEVBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxFQUFFO1FBQ2hDLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLHdCQUF1QixFQUFHLEtBQ3RDLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSx5QkFBd0IsRUFBRztRQUN2QyxJQUFJLEtBQUssSUFBRztZQUNWLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLHVCQUFzQixFQUFHO1lBQ3ZDLElBQUksUUFBUSxLQUFLLGlEQUFpRDtnQkFDOUQsYUFBYSxFQUFFO2dCQUNmLFVBQVUsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxHQUFHLE9BQU87WUFDaEIsUUFBUSxLQUFLLDhEQUE4RDtnQkFDekUsYUFBYSxFQUFFO1lBQ2pCO1FBQ0Y7UUFDQSxJQUFJLElBQUksR0FBRSxjQUFjLHNEQUFzRDtRQUM5RSxJQUFJLENBQUMsR0FBRyxPQUFPO1FBQ2YsRUFBRTtRQUNGLElBQUksSUFBSSxLQUFLLFFBQVE7UUFDckIsTUFBTyxLQUFLLFFBQVEsR0FBSTtZQUN0QixJQUFJLElBQUksQUFBQyxDQUFBLEdBQUcsRUFBRSx1QkFBc0IsRUFBRyxJQUFHO1lBQzFDLElBQUksR0FBRyxPQUFPLFFBQVEsS0FBSyxvREFBb0Q7Z0JBQzdFLG1CQUFtQixFQUFFO2dCQUNyQixrQkFBa0IsQUFBQyxDQUFBLEdBQUcsRUFBRSx3QkFBdUIsRUFBRyxJQUFHO1lBQ3ZELElBQUk7WUFDSixNQUFNLElBQUksQ0FBQyxNQUFNO1FBQ25CO1FBQ0EsT0FBTyxRQUFRLEtBQUsscURBQXFEO1lBQ3ZFLG1CQUFtQixFQUFFO1FBQ3ZCLElBQUk7SUFDTjtJQUNBLE1BQU0sbUJBQW1CLEVBQUMsRUFBRTtRQUMxQixJQUFJLElBQUksR0FBRSxjQUFjO1FBQ3hCLEtBQU0sQ0FBQSxFQUFFLFNBQVMsTUFBTSxJQUFJLENBQUMsTUFBTSxLQUFJO0lBQ3hDO0lBQ0EsTUFBTSxtQkFBbUIsRUFBQyxFQUFFLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ25DLElBQUksSUFBSSxFQUFFLGlCQUFpQixtQkFDekIsSUFBSSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUEsS0FBSyxDQUFDLEdBQUUsY0FBYyxvQkFDL0MsSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLHlCQUF3QixFQUFHLEtBQ3JDLElBQUksSUFBSSxBQUFDLENBQUEsR0FBRyxFQUFFLHdCQUF1QixFQUFHLE1BQUssRUFBRTtRQUNqRCxRQUFRLEtBQ04sQ0FBQyxnREFBZ0QsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLFFBQVEsR0FBRyxjQUFjLEVBQUUsRUFBRSxPQUFPLGFBQWEsRUFBRSxFQUFFLE9BQU8sQ0FBQztRQUV0SSxJQUFJLElBQUksRUFBRSxFQUNSLElBQUksS0FBSyxJQUFJLENBQUMsZ0JBQWdCLHNCQUFzQixBQUFDLENBQUEsR0FBRyxFQUFFLDJCQUEwQixFQUFHLEVBQ3BGLE1BQU0sRUFBRSxTQUFTLFVBQVUsRUFBRSxPQUFPO1lBQUM7Z0JBQ3BDLE9BQU8sRUFBRTtnQkFDVCxVQUFVO1lBQ1o7U0FBRSxLQUFLLEtBQUssR0FDZCxJQUFJLEdBQUcsVUFBVSxHQUFHLEVBQUU7UUFDeEIsS0FBSyxJQUFJLE1BQU0sQ0FBQSxHQUFHLFFBQVEsQ0FBQSxFQUFJO1lBQzVCLElBQUk7WUFDSixJQUFJLElBQUksSUFBSSxDQUFDLHFCQUFxQjtZQUNsQyxJQUFJLENBQUMsR0FBRztZQUNSLEVBQUUsS0FBSyxJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7WUFDakMsSUFBSSxJQUFJLEFBQUMsQ0FBQSxHQUFHLEVBQUUsc0JBQXFCLEVBQUcsRUFBRSxPQUFPLElBQUc7Z0JBQ2hELFFBQVEsRUFBRTtZQUNaO1lBQ0EsSUFBSTtnQkFDRixJQUFJLEVBQUUsU0FBUyxFQUFFLFdBQVcsUUFBUTtvQkFDbEMsSUFBSSxLQUFJLEVBQUU7b0JBQ1YsSUFBRyxZQUFZLFdBQVcsZUFBZSxHQUFFLGFBQWEsVUFBVyxDQUFBLElBQUksTUFBTSxBQUFDLENBQUEsR0FBRyxFQUM5RSx5QkFBd0IsRUFBRyxJQUFHLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxHQUFFLElBQU0sQ0FBQSxJQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFDekUsZUFBYyxFQUFHLEVBQUUsUUFBUSxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sSUFBRztnQkFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLFFBQVMsQ0FBQSxJQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxrQkFBaUIsRUFBRyxFQUFFLFFBQzVFLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxHQUFFO2dCQUN6QixLQUFLLEdBQUcsWUFBWSxHQUFHLEVBQUUsT0FBTyxLQUFLLEtBQUssR0FBRyxDQUFDLE1BQU0sS0FBSyxJQUFJLFdBQVc7WUFDMUUsRUFBRSxPQUFPLElBQUc7Z0JBQ1YsTUFBTSxLQUFLLEdBQUcsWUFBWSxHQUFHLEVBQUUsT0FBTyxLQUFLLEtBQUssR0FBRyxFQUFFLGdCQUFnQixjQUFhLEVBQy9FLGVBQWUsWUFBWSxXQUFXO1lBQzNDLFNBQVU7Z0JBQ1IsR0FBRztZQUNMO1FBQ0Y7SUFDRjtJQUNBLHFCQUFxQixFQUFDLEVBQUU7UUFDdEIsT0FBTyxBQUFDLENBQUEsR0FBRyxFQUFFLCtCQUE4QixFQUFHO0lBQ2hEO0lBQ0EsTUFBTSx5QkFBeUIsRUFBQyxFQUFFO1FBQ2hDLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPO1FBQ3RCLEVBQUUsU0FBUyxLQUFNLENBQUEsUUFBUSxLQUFLLDRDQUE0QztZQUN4RSxRQUFRO1lBQ1IsbUJBQW1CLEVBQUU7UUFDdkIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxVQUFTLEVBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQ3BELHNCQUFxQjtRQUN4QixJQUFJLEtBQUksR0FBRSxLQUFLLENBQUEsS0FBSyxnQkFBZ0IsR0FBRSxTQUFTLEdBQUUsU0FBUyxFQUFFLFdBQVc7UUFDdkUsTUFBSyxJQUFJLENBQUMsT0FBTyxRQUFRLGFBQWEsSUFBSSxDQUFDLFVBQVUsSUFBSTtZQUN2RCxNQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsMkJBQTBCLEVBQUcsSUFBRyxJQUFJLENBQUMsT0FBTyxRQUFRLFlBQVksSUFBSSxDQUM3RSxnQkFBZ0IscUJBQXFCO1FBQzFDO1FBQ0EsSUFBSSxJQUFJLEdBQUUsS0FBSyxDQUFBLEtBQUssa0JBQWtCLEdBQUUsU0FBUyxHQUFFLFNBQVMsRUFBRSxXQUFXO1FBQ3pFLEtBQUssSUFBSSxDQUFDLE9BQU8sUUFBUSxlQUFlLElBQUksQ0FBQyxVQUFVLElBQUk7WUFDekQsTUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLDJCQUEwQixFQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sUUFBUSxjQUFjLElBQUksQ0FDL0UsZ0JBQWdCLHFCQUFxQjtRQUMxQztRQUNBLElBQUksSUFBSSxHQUFFLE9BQU8sQ0FBQSxLQUFLLHFCQUFxQixHQUFFO1FBQzdDLEVBQUUsU0FBUyxLQUFLLElBQUksQ0FBQyxVQUFVLElBQUksSUFBTSxBQUFDLENBQUEsR0FBRyxFQUFFLGtCQUFpQixFQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sU0FDaEYsSUFBSSxDQUFDLGdCQUFnQixzQkFBc0IsSUFBSSxDQUFDLGdCQUFnQjtRQUNsRSxJQUFJLElBQUksR0FBRSxPQUFPLENBQUEsS0FBSyxZQUFZLEdBQUU7UUFDcEMsRUFBRSxTQUFTLEtBQUssSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFNLEFBQUMsQ0FBQSxHQUFHLEVBQUUsWUFBVyxFQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sU0FBUyxJQUFJLENBQ3BGLGdCQUFnQixzQkFBc0IsSUFBSSxDQUFDLGdCQUFnQix3QkFBd0IsSUFBSSxDQUN6RixPQUFPLFFBQVEsUUFBUSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQU0sQUFBQyxDQUFBLEdBQUcsRUFBRSxRQUFPLEVBQUcsSUFBSSxDQUFDLE9BQU8sUUFDMUUsUUFBUSxNQUFNLElBQUksQ0FBQyxVQUFVLE9BQU8sTUFBTSxJQUFJLENBQUMseUJBQXlCO0lBQy9FO0lBQ0EsTUFBTSxNQUFNLEVBQUMsRUFBRTtRQUNiLE9BQU8sSUFBSSxRQUFRLENBQUEsSUFBSyxXQUFXLEdBQUc7SUFDeEM7SUFDQSxZQUFZLEdBQUcsRUFBQyxDQUFFO1FBQ2hCLEtBQUssSUFBSSxLQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQ3hFLDZCQUE2QixDQUFDLEdBQUcsSUFBSSxDQUFDLDhDQUE4QyxDQUFDO0lBQzFGO0FBQ0Y7QUFFQSxTQUFTLEVBQUUsRUFBQztJQUNWLE9BQU8sRUFBRSxJQUFHLElBQUksR0FBRyxPQUFPLENBQUEsS0FBSyxDQUFDLENBQUM7QUFDbkM7QUFFQSxTQUFTLEVBQUUsRUFBQztJQUNWLElBQUksSUFBSSxHQUFFLGNBQWM7SUFDeEIsSUFBSSxDQUFDLEdBQUc7UUFDTixJQUFJLElBQUksTUFBTSxLQUFLLEdBQUUsaUJBQ25CO1FBRUYsT0FBTyxNQUFNLEtBQUssSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFBLEtBQUssR0FBRSxRQUFRLDBDQUEwQztJQUMzRjtJQUNBLE9BQU8sTUFBTSxLQUFLLEVBQUUsaUJBQWlCO0FBQ3ZDO0FBRUEsU0FBUyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQztJQUNoQixJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUUsSUFBSSxJQUNkLElBQUksRUFBRSxNQUFNLEdBQUcsSUFBRyxPQUFPLENBQUEsS0FBSyxPQUFNLEdBQUcsUUFDdkMsSUFBSSxFQUFFO0lBQ1IsT0FBTyxJQUFJLEVBQUUsT0FBTyxDQUFBLEtBQUssRUFBRSxRQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRSxJQUFJO0FBQzVEO0FBRUEsU0FBUyxFQUFFLEVBQUMsRUFBRSxDQUFDO0lBQ2IsSUFBSSxDQUFDLEdBQUc7UUFDTixHQUFFLFNBQVMsaUJBQWlCLEdBQUUsUUFBUSxRQUFRLE1BQzVDLG1EQUFtRDtZQUNqRCxNQUFNLEdBQUU7WUFDUixPQUFPLEdBQUU7UUFDWDtRQUNGO0lBQ0Y7SUFDQSxJQUFJLEtBQUksTUFBTSxLQUFLLElBQUksSUFBSSxHQUFFLGNBQWMsSUFBSSxDQUFBLEtBQU0sQ0FBQTtZQUNuRCxPQUFPO1lBQ1AsVUFBVSxDQUFDO1lBQ1gsTUFBTSxFQUFFLFdBQVc7WUFDbkIsUUFBUTtZQUNSLFFBQVE7UUFDVixDQUFBO0lBQ0EsR0FBRSxTQUFTLGVBQWUsR0FBRSxPQUFPO1FBQ2pDLE9BQU8sR0FBRTtRQUNULFVBQVUsQ0FBQztRQUNYLE1BQU0sZ0JBQWdCLEdBQUUsT0FBTyxFQUFFLFdBQVcsWUFBWSxFQUFFLFdBQVc7UUFDckUsUUFBUTtRQUNSLFVBQVU7UUFDVixTQUFTLEVBQUU7SUFDYixJQUFJLFFBQVEsTUFBTSxrREFBa0Q7UUFDbEUsTUFBTSxHQUFFO1FBQ1IsT0FBTyxHQUFFO1FBQ1QsWUFBWSxHQUFFO0lBQ2hCO0FBQ0Y7QUFFQSxTQUFTLEVBQUUsRUFBQztJQUNWLElBQUksSUFBSSxHQUFFLGNBQWMsV0FBVztJQUNuQyxJQUFJLEdBQUcsT0FBTyxFQUFFO0lBQ2hCLElBQUksS0FBSSxJQUFJO0lBQ1osS0FBSyxJQUFJLEtBQUssTUFBTSxLQUFLLEdBQUUsaUJBQWlCLG1CQUFvQjtRQUM5RCxJQUFJLEtBQUksQUFBQyxDQUFBLEVBQUUsY0FBYyxVQUFVLGVBQWUsRUFBQyxFQUFHLFFBQVEsT0FBTyxJQUFJLE9BQU87UUFDaEYsSUFBSSxDQUFDLElBQUc7UUFDUixJQUFJLElBQUksRUFBRSxjQUFjLDRCQUN0QixJQUFJLEdBQUcsT0FBTyxVQUFVO1FBQzFCLEdBQUUsSUFBSSxJQUFHO0lBQ1g7SUFDQSxJQUFJLElBQUksR0FBRSxJQUFJLGdCQUFnQixJQUM1QixJQUFJLEdBQUUsSUFBSSw2QkFBNkI7SUFDekMsT0FBTyxLQUFLLElBQUksRUFBRTtRQUFDO1FBQUc7S0FBRSxDQUFDLE9BQU8sU0FBUyxLQUFLLFNBQVMsRUFBRSxHQUFFLElBQUksa0JBQWtCO0FBQ25GO0FBRUEsU0FBUyxFQUFFLEVBQUMsRUFBRSxDQUFDO0lBQ2IsSUFBSSxLQUFJLEdBQUUsVUFBVSxDQUFBLEtBQUssRUFBRSxRQUFPO0lBQ2xDLE9BQU8sS0FBSSxJQUFJLE9BQU8sR0FBRSxPQUFPLElBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSTtBQUM3QztLQUhTO0FBS1QsU0FBUyxFQUFFLEVBQUM7SUFDVixJQUFJLElBQUksTUFBTSxRQUFRLE1BQUssRUFBQyxDQUFDLEVBQUUsR0FBRztJQUNsQyxPQUFPLEdBQUcsV0FBVyxPQUFPLGlCQUFpQjtBQUMvQztNQUhTO0FBS1QsU0FBUyxFQUFFLEVBQUM7SUFDVixPQUFPLEVBQUU7UUFBQyxFQUFFLEVBQUMsQ0FBQyxZQUFZO1FBQUcsRUFBRSxFQUFDLENBQUMseUJBQXlCO0tBQUUsQ0FBQyxLQUFLO0FBQ3BFO0FBRUEsU0FBUyxFQUFFLEVBQUM7SUFDVixPQUFPLEVBQUUsRUFBRSxFQUFDLENBQUMsY0FBYztBQUM3QjtNQUZTO0FBSVQsU0FBUyxFQUFFLEVBQUM7SUFDVixJQUFJLElBQUksR0FBRSxPQUFPLGNBQWMsUUFBUSxRQUFRLEtBQUssUUFBUSxZQUFZO0lBQ3hFLE9BQU8sRUFBRSxRQUFRLFVBQVUsTUFBTSxJQUFJO0FBQ3ZDO01BSFM7QUFJVCxlQUFlLEVBQUUsRUFBQyxFQUFFLENBQUMsRUFBRSxLQUFJLElBQU0sSUFBSSxRQUFRLENBQUEsS0FBSyxXQUFXLElBQUcsS0FBSztJQUNuRSxJQUFJLElBQUksRUFBRSxJQUFJLEdBQUcsT0FBTyxVQUN0QixJQUFJO0lBQ04sUUFBUSxLQUFLLHFDQUFxQztRQUNoRCxhQUFhLEVBQUU7UUFDZixpQkFBaUIsRUFBRSxJQUFHO0lBQ3hCO0lBQ0EsSUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSyxFQUFHO1FBQy9CLElBQUksSUFBSSxJQUFJO1FBQ1osS0FBSyxJQUFJLE1BQUssRUFBRyxFQUFFLElBQUksSUFBRyxBQUFDLENBQUEsRUFBRSxJQUFJLE9BQU0sQ0FBQSxJQUFLO1FBQzVDLElBQUksSUFBSSxFQUFFLEtBQ1IsSUFBSSxFQUFFO1FBQ1IsS0FBSyxJQUFJLE1BQUssRUFBRztZQUNmLElBQUksS0FBSSxFQUFFLEtBQ1IsSUFBSSxFQUFFLElBQUksT0FBTTtZQUNsQixNQUFLLElBQUksSUFBSSxFQUFFLElBQUksSUFBRyxJQUFJLEtBQUssRUFBRSxLQUFLO1FBQ3hDO1FBQ0EsSUFBSSxNQUFNLEVBQUUsUUFBUSxPQUFPO1lBQ3pCLFNBQVM7WUFDVCxPQUFPLENBQUM7UUFDVjtRQUNBLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFDckIsSUFBSSxFQUFFLGNBQ0o7UUFDSixJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVU7UUFDdEIsSUFBSSxJQUFJLEVBQUU7UUFDVixFQUFFO1FBQ0YsSUFBSSxJQUFJLEtBQUssUUFBUTtRQUNyQixNQUFPLEVBQUUsSUFBRyxVQUFVLEtBQUssS0FBSyxRQUFRLEdBQUksTUFBTTtRQUNsRCxJQUFJLEVBQUUsSUFBRyxVQUFVLEdBQUc7UUFDdEIsS0FBSztJQUNQO0lBQ0EsT0FBTztRQUNMLFNBQVM7UUFDVCxPQUFPLENBQUM7SUFDVjtBQUNGO0FBRUEsU0FBUyxFQUFFLEVBQUM7SUFDVixJQUFJLEdBQUUsU0FBUyxFQUFFLFdBQVcsVUFBVTtRQUNwQyxJQUFJLElBQUksTUFBTSxRQUFRLEdBQUUsY0FBYyxHQUFFLGFBQWEsRUFBRTtRQUN2RCxJQUFJLEVBQUUsU0FBUyxHQUFHLE9BQU8sRUFBRSxLQUFLLENBQUEsS0FBSyxHQUFFO1FBQ3ZDLElBQUksS0FBSSxHQUFFO1FBQ1YsT0FBTyxJQUFHLFlBQVksQ0FBQztJQUN6QjtJQUNBLElBQUksSUFBSSxHQUFFO0lBQ1YsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ2hCLElBQUksR0FBRSxTQUFTLEVBQUUsV0FBVyxRQUFRLDBCQUEwQixFQUFFLFNBQVM7UUFDdkUsSUFBSSxLQUFJO1lBQUM7WUFBUztZQUFPO1NBQU8sQ0FBQyxJQUFJLENBQUEsS0FBSyxFQUFFLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxHQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ3ZGLE9BQU8sR0FBRSxNQUFNLENBQUEsS0FBSyxDQUFDLENBQUMsSUFBRztJQUMzQjtJQUNBLE9BQU8sQUFBQyxDQUFBLEdBQUcsRUFBRSx5QkFBd0IsRUFBRztBQUMxQztNQWRTO0FBZ0JULFNBQVMsRUFBRSxFQUFDO0lBQ1YsT0FBTyxDQUFFLENBQUEsR0FBRSwwQkFBMEIsRUFBRSxHQUFDLEtBQU8sQ0FBQSxHQUFFLFNBQVMsRUFBRSxXQUFXLFFBQVEsR0FBRSxTQUFTLEVBQ3ZGLFdBQVcsVUFBVSxHQUFFLFNBQVMsRUFBRSxXQUFXLFlBQVksR0FBRSxTQUFTLEVBQUUsV0FBVyxJQUFHO0FBQ3pGO01BSFM7QUFLVCxTQUFTLEVBQUUsRUFBQztJQUNWLElBQUksSUFBSSxHQUFFO0lBQ1YsT0FBTyxHQUFFLFNBQVMsRUFBRSxXQUFXLFVBQVUsR0FBRyxPQUFPLFdBQVcsc0JBQXNCLEtBQUssR0FDdEYsU0FBUztBQUNkO01BSlM7QUFNVCxTQUFTLEVBQUUsRUFBQztJQUNWLE9BQU8sR0FBRSxTQUFTLEVBQUUsV0FBVyxRQUFRLEdBQUUsT0FBTyxPQUFPLGtCQUFrQjtBQUMzRTtBQUVBLFNBQVMsRUFBRSxFQUFDO0lBQ1YsT0FBTyxNQUFNLFFBQVEsTUFBSyxHQUFFLElBQUksQ0FBQSxLQUFLLE9BQU8sTUFBSyxJQUFJLFFBQVEsT0FBTyxDQUFBLEtBQUssR0FBRSxTQUFTLEtBQUssRUFBRTtBQUM3RjtNQUZTIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1hNjg1OTk1ZGMzOTRiZjE0LmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL3VsdGlwcm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcdWx0aXByby5qc1wiLFwiYnVuZGxlSWRcIjpcImZhMGFlNTkzZmM0ZDVmYzBcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA1UjNtTlxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvdWx0aXByby5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vYW5zd2VyIC0+IG9IM3R2ICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3VsdGlwcm8vYW5zd2VyLmpzXHJcbiAqICAgLi9vcGVyYXRpb25zIC0+IGsyMXpsICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL3VsdGlwcm8vb3BlcmF0aW9ucy5qc1xyXG4gKiAgIC4vcnVsZXMgLT4gZTBqTU8gID0+ICBzcmMvY29udGVudHMvc2l0ZXMvdWx0aXByby9ydWxlcy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyIC0+IDdUNWVXICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvYW5zd2VyLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uIC0+IGx1SmZzICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvc2VjdGlvbi1yZXN1bHRzIC0+IDZXV3NDICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvc2VjdGlvbi1yZXN1bHRzLmpzXHJcbiAqICAgfmNvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyIC0+IDh4ajZGICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH5jb3JlL3hwYXRoIC0+IGFnRTR1ICA9PiAgc3JjL2NvcmUveHBhdGguanNcclxuICogICB+c3RvcmUvYXV0b2ZpbGxJbmZvIC0+IDc5Vk5QICA9PiAgc3JjL3N0b3JlL2F1dG9maWxsSW5mby5qc1xyXG4gKi9cclxuXHJcbnZhciBuID0gZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7XHJcbm4uZGVmaW5lSW50ZXJvcEZsYWcociksIG4uZXhwb3J0KHIsIFwiVWx0aXByb1wiLCAoKSA9PiBoKSwgbi5leHBvcnQociwgXCJjb2xsZWN0U2F2ZWRFbnRyeUxhYmVsc1wiLFxyXG4oKSA9PiBnKSwgbi5leHBvcnQociwgXCJyZW1vdmVVbHRpcHJvU2F2ZWRFbnRyaWVzT3V0c2lkZUZpbGxWMlwiLCAoKSA9PiBrKTtcclxudmFyIG8gPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvc2VjdGlvbi1yZXN1bHRzXCIpLFxyXG4gIGkgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyXCIpLFxyXG4gIGEgPSBlKFwifmNvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uXCIpLFxyXG4gIGwgPSBlKFwifmNvbnRlbnRzL3NpdGVzL2Jhc2UtZmlsbGVyXCIpLFxyXG4gIHMgPSBlKFwifmNvcmUvZW51bXNcIiksXHJcbiAgdSA9IGUoXCJ+Y29yZS94cGF0aFwiKSxcclxuICBjID0gZShcIn5zdG9yZS9hdXRvZmlsbEluZm9cIiksXHJcbiAgZCA9IGUoXCIuL2Fuc3dlclwiKSxcclxuICBmID0gZShcIi4vb3BlcmF0aW9uc1wiKSxcclxuICBwID0gZShcIi4vcnVsZXNcIik7XHJcblxyXG5mdW5jdGlvbiBtKGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uZSxcclxuICAgIFNjaG9vbDogZVtcIlNjaG9vbCBOYW1lXCJdID8/IGUuU2Nob29sLFxyXG4gICAgQ29tcGFueTogZVtcIkNvbXBhbnkgLyBPcmdhbml6YXRpb25cIl0gPz8gZS5Db21wYW55XHJcbiAgfVxyXG59XHJcbmNsYXNzIGggZXh0ZW5kcyBsLkJhc2VGaWxsZXIge1xyXG4gIGdldEZpZWxkSGFuZGxlcnMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbcy5GSUVMRF9UWVBFLlRFWFRdOiAoZSwgdCkgPT4ge1xyXG4gICAgICAgIGxldCByID0gdD8uWzBdO1xyXG4gICAgICAgIHJldHVybiByID8gKDAsIGYuZmlsbElucHV0VGV4dEZpZWxkKShlLiRpbnB1dCwgU3RyaW5nKHIgPz8gXCJcIikpIDogVChlKVxyXG4gICAgICB9LFxyXG4gICAgICBbcy5GSUVMRF9UWVBFLlNFTEVDVF06IChlLCB0KSA9PiB7XHJcbiAgICAgICAgbGV0IHIgPSB0Py5bMF07XHJcbiAgICAgICAgaWYgKCFyKSByZXR1cm4gVChlKTtcclxuICAgICAgICBsZXQgbiA9IGUuJGlucHV0O1xyXG4gICAgICAgIHJldHVybiBcIkNvdW50cnlcIiA9PT0gbi5pZCAmJiBlLmxhYmVsPy50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gXCJjb3VudHJ5XCIgPyAoMCwgZlxyXG4gICAgICAgICAgICAucHJlZmlsbFVsdGlwcm9Db3VudHJ5KShTdHJpbmcociA/PyBcIlwiKSkgOiBcIlN0YXRlXCIgPT09IG4uaWQgJiZcclxuICAgICAgICAgIC8oPzpzdGF0ZXxwcm92aW5jZSkvaS50ZXN0KGUubGFiZWwgPz8gXCJcIikgPyAoMCwgZi5maWxsVWx0aXByb1N0YXRlUHJvdmluY2VGaWVsZCkobixcclxuICAgICAgICAgICAgU3RyaW5nKHIgPz8gXCJcIikpIDogKDAsIGYuZmlsbFNlbGVjdEZpZWxkKShuLCBTdHJpbmcociA/PyBcIlwiKSlcclxuICAgICAgfSxcclxuICAgICAgW3MuRklFTERfVFlQRS5DSEVDS0JPWF06IChlLCB0KSA9PiAoMCwgZi5maWxsQ2hlY2tib3hGaWVsZCkoZSwgdCksXHJcbiAgICAgIFtzLkZJRUxEX1RZUEUuTVVMVElfU0VMRUNUXTogKGUsIHQpID0+ICgwLCBmLmZpbGxNdWx0aVNlbGVjdEZpZWxkKShlLCB0KSxcclxuICAgICAgW3MuRklFTERfVFlQRS5EQVRFXTogKGUsIHQpID0+IHtcclxuICAgICAgICBsZXQgciA9IHQ/LlswXTtcclxuICAgICAgICByZXR1cm4gciA/ICgwLCBmLmZpbGxEYXRlRmllbGQpKGUuJGlucHV0LCBTdHJpbmcociA/PyBcIlwiKSkgOiBUKGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgZXh0cmFjdEZvcm1SdWxlcygpIHtcclxuICAgIGxldCBlID0gITEsXHJcbiAgICAgIHQgPSBhd2FpdCAoMCwgcC5leHRyYWN0UnVsZXMpKHtcclxuICAgICAgICBiZWZvcmVDb250YWN0SW5mb3JtYXRpb25FeHRyYWN0aW9uOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIShlID0gYXdhaXQgKDAsIGYub3BlblVsdGlwcm9Db250YWN0SW5mb3JtYXRpb25FZGl0b3IpKCkpKSByZXR1cm47XHJcbiAgICAgICAgICBsZXQgdCA9ICgwLCBkLm5vcm1hbGl6ZVVsdGlwcm9Db3VudHJ5KSh0aGlzLmN1cnJlbnRSdW5Db3VudHJ5KSxcclxuICAgICAgICAgICAgciA9ICEhdCAmJiB0aGlzLnByZXNlcnZlQ29tbWl0dGVkUmVndWxhckZpZWxkc0ZvckN1cnJlbnRSdW4gJiYgQXJyYXkuZnJvbShcclxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0I0NvdW50cnlcIikpLnNvbWUoZSA9PiAhKDAsIHAuaXNFbGVtZW50SGlkZGVuKVxyXG4gICAgICAgICAgICAgIChlKSAmJiAoMCwgZi5oYXNNZWFuaW5nZnVsQ29udHJvbFZhbHVlKShlKSk7XHJcbiAgICAgICAgICB0ICYmICFyID8gYXdhaXQgKDAsIGYucHJlZmlsbFVsdGlwcm9Db3VudHJ5KSh0KSA6IHQgJiYgciAmJiBjb25zb2xlLmluZm8oXHJcbiAgICAgICAgICAgIFwiW1VsdGlwcm9dW1JlcGVhdEZpbGxdIHByZXNlcnZlZCBjb21taXR0ZWQgQ291bnRyeVwiKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWZ0ZXJRdWVzdGlvbkV4dHJhY3Rpb246IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGUgJiYgYXdhaXQgKDAsIGYuY2FuY2VsVWx0aXByb0NvbnRhY3RJbmZvcm1hdGlvbkVkaXRvcikoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gdC5maWx0ZXIoZSA9PiAhaihlKSlcclxuICB9XHJcbiAgZ2V0TmV3Q29tYm9RdWVzdGlvblJ1bGVzKGUsIHQpIHtcclxuICAgIGxldCByID0gc3VwZXIuZ2V0TmV3Q29tYm9RdWVzdGlvblJ1bGVzKGUsIHQpLmZpbHRlcihlID0+ICFJKGUpIHx8ICFUKGUpKSxcclxuICAgICAgbiA9IHQuZmluZChlID0+IEkoZSkgJiYgIVQoZSkpO1xyXG4gICAgcmV0dXJuICFuIHx8IHIuaW5jbHVkZXMobikgPyByIDogKGNvbnNvbGUuaW5mbyhcclxuICAgICAgXCJbVWx0aXByb11bU3RhdGUgLyBQcm92aW5jZV0gcXVldWVkIGZvciBkeW5hbWljIHJlLWNyYXdsXCIsIHtcclxuICAgICAgICBvcHRpb25Db3VudDogbi4kaW5wdXQ/Lm9wdGlvbnM/Lmxlbmd0aCA/PyAwXHJcbiAgICAgIH0pLCBbLi4uciwgbl0pXHJcbiAgfVxyXG4gIGdldFNpdGVOYW1lKCkge1xyXG4gICAgcmV0dXJuIFwidWx0aXByb1wiXHJcbiAgfVxyXG4gIGFzeW5jIHJ1blByZUZpbGxGb3JtKCkge1xyXG4gICAgdGhpcy5jdXJyZW50UnVuQ291bnRyeSA9IFwiXCI7XHJcbiAgICBsZXQgZSA9IGF3YWl0ICgwLCBjLnVzZUF1dG9maWxsSW5mb1N0b3JlKS5nZXRTdGF0ZSgpLmZldGNoQXV0b2ZpbGxJbmZvKCk7XHJcbiAgICB0aGlzLmN1cnJlbnRSdW5Db3VudHJ5ID0gZT8ubG9jYXRpb24/LmNvdW50cnkgPz8gXCJcIiwgdGhpc1xyXG4gICAgICAucHJlc2VydmVDb21taXR0ZWRSZWd1bGFyRmllbGRzRm9yQ3VycmVudFJ1biA/IGNvbnNvbGUuaW5mbyhcclxuICAgICAgICBcIltVbHRpcHJvXVtSZXBlYXRGaWxsXSBza2lwcGVkIGhpZGRlbiBjb250YWN0IHByZWZpbGwgY29weVwiKSA6IGF3YWl0ICgwLCBmXHJcbiAgICAgICAgLmZpbGxWaXNpYmxlQ29udGFjdEZpZWxkc0Zyb21IaWRkZW5QcmVmaWxsKSgpXHJcbiAgfVxyXG4gIGFzeW5jIGdldEF1dG9maWxsU25hcHNob3QoKSB7XHJcbiAgICBsZXQgZSA9IGF3YWl0ICgwLCBwLmdldEZvcm1TbmFwc2hvdCkoKTtcclxuICAgIHJldHVybiBlXHJcbiAgfVxyXG4gIGFzeW5jIGdldFN1Ym1pdFNuYXBzaG90KCkge1xyXG4gICAgcmV0dXJuIGF3YWl0ICgwLCBwLmdldEZvcm1TbmFwc2hvdCkoKVxyXG4gIH1cclxuICBnZXRTdWJtaXRCdXR0b25TZWxlY3RvcigpIHtcclxuICAgIHJldHVybiAnLy8qW0BpZD1cIk9wcG9ydHVuaXR5QXBwbHlcIl0vL3VrZy1idXR0b25bQGRhdGEtYXV0b21hdGlvbj1cImJ0bi1zdWJtaXRcIl0nXHJcbiAgfVxyXG4gIHN1Ym1pdEFwcGxpY2F0aW9uKCkge1xyXG4gICAgbGV0IGUgPSAnLy8qW0BpZD1cIk9wcG9ydHVuaXR5QXBwbHlcIl0vL3VrZy1idXR0b25bQGRhdGEtYXV0b21hdGlvbj1cImJ0bi1zdWJtaXRcIl0nLFxyXG4gICAgICB0ID0gKDAsIHUuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoZSk7XHJcbiAgICB0ICYmIHQ/LmNsaWNrKClcclxuICB9XHJcbiAgYXN5bmMgZG9GaWxsRm9ybShlID0gITEpIHtcclxuICAgIHRoaXMucHJlc2VydmVDb21taXR0ZWRSZWd1bGFyRmllbGRzRm9yQ3VycmVudFJ1biA9IHRoaXMuaGFzQ29tcGxldGVkUmVndWxhckZpbGxSdW4sXHJcbiAgICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZUZpbGxGb3JtKCk7XHJcbiAgICBsZXQgdCA9IGF3YWl0IHRoaXMuZXh0cmFjdEZvcm1SdWxlcygpLFxyXG4gICAgICByID0gdGhpcy5nZXRGaWxsYWJsZVJ1bGVzRm9yQ3VycmVudFJ1bih0KTtcclxuICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnNldEZpZWxkc1JlcXVpcmVkU3RhdHVzKHIpO1xyXG4gICAgbGV0IG4gPSBhd2FpdCB0aGlzLmZldGNoRm9ybUFuc3dlcnMociwgZSk7XHJcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgbikgcmV0dXJuIG47XHJcbiAgICB0aGlzLmFuc3dlciA9ICgwLCBkLmZvcm1hdEFuc3dlcikodGhpcy5hbnN3ZXIsIHRoaXMuY3VycmVudFJ1bkNvdW50cnkpO1xyXG4gICAgbGV0IG8gPSB0LFxyXG4gICAgICBpID0gIXRoaXMucHJlc2VydmVDb21taXR0ZWRSZWd1bGFyRmllbGRzRm9yQ3VycmVudFJ1biAmJiAoMCwgZlxyXG4gICAgICAgIC5oYXNTZWxlY3RlZFVsdGlwcm9SZXN1bWVGaWxlKSgpID8ge1xyXG4gICAgICAgIGluaXRpYWxTaWduYXR1cmU6ICgwLCBmLmdldFVsdGlwcm9SZXN1bWVQYXJzZXJTdGF0ZVNpZ25hdHVyZSkoKSxcclxuICAgICAgICBpbml0aWFsU2F2ZWRSb3dzU2lnbmF0dXJlOiAoMCwgZi5nZXRVbHRpcHJvU2F2ZWRFeHBlcmllbmNlUm93c1NpZ25hdHVyZSkoKVxyXG4gICAgICB9IDogbnVsbCxcclxuICAgICAgbCA9IG51bGw7XHJcbiAgICB0aGlzLnByZXNlcnZlQ29tbWl0dGVkUmVndWxhckZpZWxkc0ZvckN1cnJlbnRSdW4gPyBjb25zb2xlLmluZm8oXHJcbiAgICAgIFwiW1VsdGlwcm9dW1JlcGVhdEZpbGxdIHNraXBwZWQgcmVwZWF0ZWQgcmVzdW1lIHVwbG9hZFwiKSA6ICExICE9PSAobCA9IGF3YWl0IHRoaXNcclxuICAgICAgLmhhbmRsZVJlc3VtZVVwbG9hZCgpKSAmJiAobCA9IGF3YWl0ICgwLCBmLndhaXRGb3JVbHRpcHJvUmVzdW1lUGFyc2luZ1RvRmluaXNoKShudWxsID09PVxyXG4gICAgICBsICYmIGkgPyBpIDoge30pKTtcclxuICAgIGxldCBzID0gdGhpcy5wcmVzZXJ2ZUNvbW1pdHRlZFJlZ3VsYXJGaWVsZHNGb3JDdXJyZW50UnVuID8gW10gOiBhd2FpdCAoMCwgZlxyXG4gICAgICAuZmlsbFZpc2libGVDb250YWN0RmllbGRzRnJvbUhpZGRlblByZWZpbGwpKCk7XHJcbiAgICBzLmxlbmd0aCA+IDAgJiYgYXdhaXQgdGhpcy5kZWxheSg4MDApLCB0ID0gYXdhaXQgdGhpcy5leHRyYWN0Rm9ybVJ1bGVzKCksIHRoaXNcclxuICAgICAgLnByb2dyZXNzVHJhY2tlci5zZXRGaWVsZHNSZXF1aXJlZFN0YXR1cyh0aGlzLmdldEZpbGxhYmxlUnVsZXNGb3JDdXJyZW50UnVuKHQpKTtcclxuICAgIGxldCB1ID0gdGhpcy5nZXRGaWxsYWJsZVJ1bGVzRm9yQ3VycmVudFJ1bih0aGlzLmdldE5ld0NvbWJvUXVlc3Rpb25SdWxlcyhvLCB0KSk7XHJcbiAgICBpZiAodS5sZW5ndGggPiAwKSB0cnkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hBbnN3ZXJzRm9yUG9zdFBhcnNlUnVsZXModSwgZSlcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgYS5DYW5jZWxsZWRFcnJvcikgdGhyb3cgZTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiW1VsdGlwcm9dIHBvc3QtcGFyc2UgYW5zd2VyIHN0ZXAgZmFpbGVkOlwiLCBlKVxyXG4gICAgICB9ITEgIT09IGwgPyBhd2FpdCB0aGlzLmZpbGxFZHVjYXRpb25BbmRFbXBsb3ltZW50KHQpIDogY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiW1VsdGlwcm9dIHNraXBwZWQgc3RydWN0dXJlZCBleHBlcmllbmNlIGZpbGwgYmVjYXVzZSByZXN1bWUgcGFyc2VyIHdhcyBub3QgcmVhZHlcIiksXHJcbiAgICAgIGF3YWl0IHRoaXMuZmlsbFJlZ3VsYXJGaWVsZHModCksIHRoaXMuaGFzQ29tcGxldGVkUmVndWxhckZpbGxSdW4gPSAhMCwgY29uc29sZS5pbmZvKFxyXG4gICAgICAgIFwiW1VsdGlwcm9dIHN0YXJ0aW5nIHBvc3QtZmlsbCBkeW5hbWljIHJ1bGUgcmUtY3Jhd2xcIiwge1xyXG4gICAgICAgICAgcnVsZUNvdW50OiB0Lmxlbmd0aFxyXG4gICAgICAgIH0pO1xyXG4gICAgbGV0IGMgPSBhd2FpdCB0aGlzLnJ1bkNvbWJvUXVlc3Rpb25BdXRvZmlsbElmTmVlZGVkKHQsIGUpO1xyXG4gICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIGMgPyBjIDogKHQgPSBjLCBhd2FpdCB0aGlzLmV4ZWN1dGVTaXRlU3BlY2lmaWNTdGVwcyh0KSwgdGhpc1xyXG4gICAgICAuZmluYWxpemVGaWxsRm9ybSgpKVxyXG4gIH1cclxuICBzdGF0aWMge1xyXG4gICAgdGhpcy5QT1NUX1BBUlNFX0FOU1dFUl9USU1FT1VUX01TID0gMmU0XHJcbiAgfVxyXG4gIGFzeW5jIGZldGNoQW5zd2Vyc0ZvclBvc3RQYXJzZVJ1bGVzKGUsIHQpIHtcclxuICAgIGxldCByO1xyXG4gICAgbGV0IG4gPSBlLm1hcChlID0+IGUubGFiZWwpO1xyXG4gICAgY29uc29sZS5sb2coXCJbVWx0aXByb10gcG9zdC1wYXJzZSBhbnN3ZXIgcmVxdWVzdDpcIiwgbik7XHJcbiAgICBsZXQgbyA9IFN5bWJvbChcInRpbWVvdXRcIiksXHJcbiAgICAgIGkgPSBuZXcgUHJvbWlzZShlID0+IHtcclxuICAgICAgICByID0gc2V0VGltZW91dCgoKSA9PiBlKG8pLCBoLlBPU1RfUEFSU0VfQU5TV0VSX1RJTUVPVVRfTVMpXHJcbiAgICAgIH0pLFxyXG4gICAgICBhID0gdGhpcy5yZXF1ZXN0Rm9ybUFuc3dlcnMoZSwgdCwge1xyXG4gICAgICAgIHVwZGF0ZVRpbWVUcmFjZTogITFcclxuICAgICAgfSk7XHJcbiAgICBhLmNhdGNoKCgpID0+IHt9KTtcclxuICAgIGxldCBsID0gYXdhaXQgUHJvbWlzZS5yYWNlKFthLCBpXSk7XHJcbiAgICByICYmIGNsZWFyVGltZW91dChyKSwgbCAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBsID8gKGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgXCJbVWx0aXByb10gcG9zdC1wYXJzZSBhbnN3ZXIgcmVzcG9uc2U6XCIsIE9iamVjdC5rZXlzKGwucmVndWxhciA/PyB7fSkpLCB0aGlzXHJcbiAgICAgICAgLm1lcmdlQ29tYm9RdWVzdGlvbkFuc3dlcihsLCBlKSkgOiBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCJbVWx0aXByb10gcG9zdC1wYXJzZSBhbnN3ZXIgcmVxdWVzdCBkZWdyYWRlZDpcIiwgbCA9PT0gbyA/IFwidGltZW91dFwiIDogbCA/PyBcImVtcHR5XCIpLFxyXG4gICAgICB0aGlzLmFwcGx5UG9zdFBhcnNlU3RhdGVGYWxsYmFjayhlKSwgdGhpcy5hbnN3ZXIgPSAoMCwgZC5mb3JtYXRBbnN3ZXIpKHRoaXMuYW5zd2VyLCB0aGlzXHJcbiAgICAgICAgLmN1cnJlbnRSdW5Db3VudHJ5KVxyXG4gIH1cclxuICBhcHBseVBvc3RQYXJzZVN0YXRlRmFsbGJhY2soZSkge1xyXG4gICAgbGV0IHQgPSBcInN0cmluZ1wiID09IHR5cGVvZiB0aGlzLmFuc3dlcj8uc3RhdGUgPyB0aGlzLmFuc3dlci5zdGF0ZS50cmltKCkgOiBcIlwiO1xyXG4gICAgaWYgKHQpXHJcbiAgICAgIGZvciAobGV0IHIgb2YgZSkge1xyXG4gICAgICAgIGxldCBlID0gci5sYWJlbDtcclxuICAgICAgICBpZiAoIWUpIGNvbnRpbnVlO1xyXG4gICAgICAgIGxldCBuID0gZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIChuLmluY2x1ZGVzKFwic3RhdGVcIikgfHwgbi5pbmNsdWRlcyhcInByb3ZpbmNlXCIpKSAmJiAodGhpcy5oYXNSZWd1bGFyQW5zd2VyKGUpIHx8ICh0aGlzXHJcbiAgICAgICAgICAuYW5zd2VyLnJlZ3VsYXIgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuYW5zd2VyLnJlZ3VsYXIsXHJcbiAgICAgICAgICAgIFtlXTogdFxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgIH1cclxuICB9XHJcbiAgaGFzUmVndWxhckFuc3dlcihlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gKDAsIGkuZmluZFZhbHVlSW5SZWNvcmQpKGUsIHRoaXMuYW5zd2VyLnJlZ3VsYXIpLCAhMFxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHJldHVybiAhMVxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBmaWxsUmVndWxhckZpZWxkcyhlKSB7XHJcbiAgICB0aGlzLmFwcGx5UG9zdFBhcnNlU3RhdGVGYWxsYmFjayhlLmZpbHRlcihJKSk7XHJcbiAgICBsZXQgdCA9IGUuZmlsdGVyKGUgPT4gIWUuX191bHRpcHJvRGlhbG9nU2VjdGlvbiAmJiAhaihlKSksXHJcbiAgICAgIHIgPSB0aGlzLmdldEZpbGxhYmxlUnVsZXNGb3JDdXJyZW50UnVuKHQpO1xyXG4gICAgdGhpcy5wcmVzZXJ2ZUNvbW1pdHRlZFJlZ3VsYXJGaWVsZHNGb3JDdXJyZW50UnVuICYmIGNvbnNvbGUuaW5mbyhcclxuICAgICAgXCJbVWx0aXByb11bUmVwZWF0RmlsbF0gcHJlc2VydmVkIGNvbW1pdHRlZCByZWd1bGFyIGZpZWxkc1wiLCB7XHJcbiAgICAgICAgY2FuZGlkYXRlQ291bnQ6IHQubGVuZ3RoLFxyXG4gICAgICAgIHNraXBwZWRDb3VudDogdC5sZW5ndGggLSByLmxlbmd0aCxcclxuICAgICAgICBmaWxsQ291bnQ6IHIubGVuZ3RoXHJcbiAgICAgIH0pLCBhd2FpdCBzdXBlci5maWxsUmVndWxhckZpZWxkcyhyKVxyXG4gIH1cclxuICBhc3luYyBmaWx0ZXJOZXdDb21ib1F1ZXN0aW9uUnVsZXMoZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RmlsbGFibGVSdWxlc0ZvckN1cnJlbnRSdW4oZSlcclxuICB9XHJcbiAgZ2V0RmlsbGFibGVSdWxlc0ZvckN1cnJlbnRSdW4oZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJlc2VydmVDb21taXR0ZWRSZWd1bGFyRmllbGRzRm9yQ3VycmVudFJ1biA/IGUuZmlsdGVyKGUgPT4gIUYoZSkgfHwgIVQoZSkpIDogZVxyXG4gIH1cclxuICBhc3luYyBoYW5kbGVSZXN1bWVVcGxvYWQoKSB7XHJcbiAgICBpZiAoISgwLCBmLmhhc1Jlc3VtZVVwbG9hZElucHV0KSgpKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICh0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzKHtcclxuICAgICAgICBsYWJlbDogXCJSZXN1bWUvQ1ZcIixcclxuICAgICAgICByZXF1aXJlZDogITBcclxuICAgICAgfSksIHRoaXMuZGlzYWJsZVVwbG9hZFJlc3VtZSkgcmV0dXJuIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFxyXG4gICAgICBcIlJlc3VtZS9DVlwiKSwgbnVsbDtcclxuICAgIGxldCBlID0gbnVsbDtcclxuICAgIHJldHVybiB0aGlzLnRhc2tRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgdCA9IGF3YWl0ICgwLCBmLnVwbG9hZFJlc3VtZSkodGhpcy5yZXN1bWVJbmZvLCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAgIC51cGRhdGVGaWVsZFJlcXVpcmVkU3RhdHVzLCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcyk7XHJcbiAgICAgIHQgfHwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJSZXN1bWUvQ1ZcIiksIGUgPSB0XHJcbiAgICB9KSwgYXdhaXQgdGhpcy50YXNrUXVldWUucnVuKCksIGVcclxuICB9XHJcbiAgYXN5bmMgZmlsbEVkdWNhdGlvbkFuZEVtcGxveW1lbnQoZSkge1xyXG4gICAgbGV0IHQgPSBlLmZpbmQoZSA9PiBlLnR5cGUgPT09IHMuRklFTERfVFlQRS5FRFVDQVRJT04pLFxyXG4gICAgICByID0gZS5maW5kKGUgPT4gZS50eXBlID09PSBzLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCk7XHJcbiAgICBBcnJheS5pc0FycmF5KHRoaXMuYW5zd2VyLndvcmtFeHBlcmllbmNlKSAmJiAociB8fCAwID09PSB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZVxyXG4gICAgICAubGVuZ3RoKSAmJiBhd2FpdCB0aGlzLmZpbGxFbXBsb3ltZW50U2VjdGlvbihyKSwgQXJyYXkuaXNBcnJheSh0aGlzLmFuc3dlci5lZHVjYXRpb24pICYmIChcclxuICAgICAgICB0IHx8IDAgPT09IHRoaXMuYW5zd2VyLmVkdWNhdGlvbi5sZW5ndGgpICYmIGF3YWl0IHRoaXMuZmlsbEVkdWNhdGlvblNlY3Rpb24odClcclxuICB9XHJcbiAgYXN5bmMgZmlsbEVtcGxveW1lbnRTZWN0aW9uKGUpIHtcclxuICAgIGxldCB0ID0gKDAsIHAuZ2V0VWx0aXByb1Zpc2libGVTZWN0aW9uKShcImVtcGxveW1lbnRcIik7XHJcbiAgICBpZiAoIXQpIHJldHVybjtcclxuICAgIGxldCByID0gZT8uJGlucHV0ID8/IG51bGwsXHJcbiAgICAgIG4gPSB0aGlzLmFuc3dlci53b3JrRXhwZXJpZW5jZSxcclxuICAgICAgYSA9ICgwLCBvLmNyZWF0ZVNlcXVlbnRpYWxTZWN0aW9uUmVzdWx0UmVwb3J0ZXIpKFwiZW1wbG95bWVudFwiLCB0aGlzLnByb2dyZXNzVHJhY2tlcixcclxuICAgICAgICBcIkVtcGxveW1lbnRcIiksXHJcbiAgICAgIGwgPSBuLm1hcChlID0+IHgoZSkpLFxyXG4gICAgICBzID0gYXdhaXQgayh0LCBsLCAoKSA9PiB0aGlzLmRlbGF5KDEwMCkpO1xyXG4gICAgaWYgKGNvbnNvbGUuaW5mbyhcclxuICAgICAgICBgW1VsdGlwcm9dIHJlY29uY2lsZWQgRW1wbG95bWVudCByb3dzIHRvIGZpbGwtdjI6IHRhcmdldENvdW50PSR7bi5sZW5ndGh9OyByZW1vdmVkQ291bnQ9JHtzLnJlbW92ZWR9OyByZWFkeT0ke3MucmVhZHl9YFxyXG4gICAgICAgICksICFzLnJlYWR5KSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIltVbHRpcHJvXSBza2lwcGVkIEVtcGxveW1lbnQgZmlsbCBiZWNhdXNlIHBhcnNlciByb3dzIGNvdWxkIG5vdCBiZSByZWNvbmNpbGVkXCIsIHtcclxuICAgICAgICAgIHRhcmdldENvdW50OiBuLmxlbmd0aFxyXG4gICAgICAgIH0pLCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIkVtcGxveW1lbnRcIik7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IHUgPSBnKHQpLFxyXG4gICAgICBjID0gKDAsIHAuaXNVbHRpcHJvUmV2aWV3Q29weUxheW91dCkodCksXHJcbiAgICAgIGQgPSBjID8gYih0KSA6IFtdLFxyXG4gICAgICBmID0gMCA9PT0gdS5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBbZSwgb10gb2Ygbi5lbnRyaWVzKCkpIHtcclxuICAgICAgbGV0IG4gPSB7XHJcbiAgICAgICAgdHlwZTogXCJlbXBsb3ltZW50XCIsXHJcbiAgICAgICAgaW5kZXg6IGUsXHJcbiAgICAgICAgcmVwb3J0ZXI6IGEsXHJcbiAgICAgICAgZm9jdXNMYWJlbHM6IFtdXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICh0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVTZWN0aW9uUmVzdWx0KSB7XHJcbiAgICAgICAgbGV0IHQgPSAoMCwgaS5jcmVhdGVTZWN0aW9uUmVzdWx0UmVwb3J0ZXIpKFwiZW1wbG95bWVudFwiLCBhLmZvclJlY29yZChlLCBbXSkpO1xyXG4gICAgICAgIHQuZW5zdXJlUm93KDAsIG0obykpLCB0LmVtaXQoKVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBzID0geChvKSxcclxuICAgICAgICBwID0gUyhkLCBzKTtcclxuICAgICAgaWYgKHApIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oXCJbVWx0aXByb10gZmlsbGluZyByZXRhaW5lZCBFbXBsb3ltZW50IHJldmlldyBlZGl0b3JcIiwge1xyXG4gICAgICAgICAgcmVtYWluaW5nUmV2aWV3RWRpdG9yczogZC5sZW5ndGhcclxuICAgICAgICB9KSwgYXdhaXQgdGhpcy5maWxsRWR1T3JFeHBGaWVsZHModCwgcCwgbywgbiksIGF3YWl0IHRoaXMuc2F2ZUVkdU9yRXhwRWRpdG9yKHQpLCB2KG4sXHJcbiAgICAgICAgICBwKTtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghYyAmJiB1LmluY2x1ZGVzKHMpKSB7XHJcbiAgICAgICAgdihuLCB5KHQsIGwsIGUpKTtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBoID0gYXdhaXQgdGhpcy5vcGVuRWR1T3JFeHBFZGl0b3IodCwgciwgZik7XHJcbiAgICAgIGlmIChmID0gITEsICFoKSB7XHJcbiAgICAgICAgYS5tYXJrUmVjb3JkTWlzc2VkKGUpLCBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgIFwiW1VsdGlwcm9dIHNraXBwZWQgRW1wbG95bWVudCByb3cgYmVjYXVzZSBubyBpbmRpdmlkdWFsIGVkaXRvciB3YXMgYXZhaWxhYmxlXCIpLCB0aGlzXHJcbiAgICAgICAgICAucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiRW1wbG95bWVudFwiKTtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBhd2FpdCB0aGlzLmZpbGxFZHVPckV4cEZpZWxkcyh0LCBoLCBvLCBuKSwgYXdhaXQgdGhpcy5zYXZlRWR1T3JFeHBFZGl0b3IodCksIHYobiwgYyA/IGggOlxyXG4gICAgICAgIHkodCwgbCwgZSkpLCB1LnB1c2gocylcclxuICAgIH1cclxuICAgIGxldCBoID0gYih0KS5sZW5ndGg7XHJcbiAgICBpZiAoaCAhPT0gbi5sZW5ndGgpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiW1VsdGlwcm9dIEVtcGxveW1lbnQgcm93IGNvdW50IGRvZXMgbm90IG1hdGNoIGZpbGwtdjJcIiwge1xyXG4gICAgICAgIHRhcmdldENvdW50OiBuLmxlbmd0aCxcclxuICAgICAgICBmaW5hbENvdW50OiBoXHJcbiAgICAgIH0pLCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIkVtcGxveW1lbnRcIik7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoXCJFbXBsb3ltZW50XCIpO1xyXG4gICAgbGV0IHcgPSB0LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLWF1dG9tYXRpb249XCJjYW5jZWwtYnV0dG9uXCJdJyk7XHJcbiAgICB3Py5jbGljaygpLCBhd2FpdCB0aGlzLmRlbGF5KDMwMClcclxuICB9XHJcbiAgYXN5bmMgZmlsbEVkdWNhdGlvblNlY3Rpb24oZSkge1xyXG4gICAgbGV0IHQgPSAoMCwgcC5nZXRVbHRpcHJvVmlzaWJsZVNlY3Rpb24pKFwiZWR1Y2F0aW9uXCIpO1xyXG4gICAgaWYgKCF0KSByZXR1cm47XHJcbiAgICBsZXQgciA9IGU/LiRpbnB1dCA/PyBudWxsLFxyXG4gICAgICBuID0gdGhpcy5hbnN3ZXIuZWR1Y2F0aW9uLFxyXG4gICAgICBhID0gKDAsIG8uY3JlYXRlU2VxdWVudGlhbFNlY3Rpb25SZXN1bHRSZXBvcnRlcikoXCJlZHVjYXRpb25cIiwgdGhpcy5wcm9ncmVzc1RyYWNrZXIsXHJcbiAgICAgICAgXCJFZHVjYXRpb25cIiksXHJcbiAgICAgIGwgPSBuLm1hcChlID0+IEMoZSkpLFxyXG4gICAgICBzID0gYXdhaXQgayh0LCBsLCAoKSA9PiB0aGlzLmRlbGF5KDEwMCkpO1xyXG4gICAgaWYgKGNvbnNvbGUubG9nKFwiW1VsdGlwcm9dIHJlY29uY2lsZWQgRWR1Y2F0aW9uIHJvd3MgdG8gZmlsbC12MlwiLCB7XHJcbiAgICAgICAgdGFyZ2V0Q291bnQ6IG4ubGVuZ3RoLFxyXG4gICAgICAgIHJlbW92ZWRDb3VudDogcy5yZW1vdmVkLFxyXG4gICAgICAgIHJlYWR5OiBzLnJlYWR5XHJcbiAgICAgIH0pLCAhcy5yZWFkeSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgXCJbVWx0aXByb10gc2tpcHBlZCBFZHVjYXRpb24gZmlsbCBiZWNhdXNlIHBhcnNlciByb3dzIGNvdWxkIG5vdCBiZSByZWNvbmNpbGVkXCIsIHtcclxuICAgICAgICAgIHRhcmdldENvdW50OiBuLmxlbmd0aFxyXG4gICAgICAgIH0pLCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcyhcIkVkdWNhdGlvblwiKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsZXQgdSA9IGcodCksXHJcbiAgICAgIGMgPSAoMCwgcC5pc1VsdGlwcm9SZXZpZXdDb3B5TGF5b3V0KSh0KSxcclxuICAgICAgZCA9IGMgPyBiKHQpIDogW10sXHJcbiAgICAgIGYgPSAwID09PSB1Lmxlbmd0aDtcclxuICAgIGZvciAobGV0IFtlLCBvXSBvZiBuLmVudHJpZXMoKSkge1xyXG4gICAgICBsZXQgbiA9IHtcclxuICAgICAgICB0eXBlOiBcImVkdWNhdGlvblwiLFxyXG4gICAgICAgIGluZGV4OiBlLFxyXG4gICAgICAgIHJlcG9ydGVyOiBhLFxyXG4gICAgICAgIGZvY3VzTGFiZWxzOiBbXVxyXG4gICAgICB9O1xyXG4gICAgICBpZiAodGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlU2VjdGlvblJlc3VsdCkge1xyXG4gICAgICAgIGxldCB0ID0gKDAsIGkuY3JlYXRlU2VjdGlvblJlc3VsdFJlcG9ydGVyKShcImVkdWNhdGlvblwiLCBhLmZvclJlY29yZChlLCBbXSkpO1xyXG4gICAgICAgIHQuZW5zdXJlUm93KDAsIG0obykpLCB0LmVtaXQoKVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBzID0gQyhvKSxcclxuICAgICAgICBwID0gUyhkLCBzKTtcclxuICAgICAgaWYgKHApIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oXCJbVWx0aXByb10gZmlsbGluZyByZXRhaW5lZCBFZHVjYXRpb24gcmV2aWV3IGVkaXRvclwiLCB7XHJcbiAgICAgICAgICByZW1haW5pbmdSZXZpZXdFZGl0b3JzOiBkLmxlbmd0aFxyXG4gICAgICAgIH0pLCBhd2FpdCB0aGlzLmZpbGxFZHVPckV4cEZpZWxkcyh0LCBwLCBvLCBuKSwgYXdhaXQgdGhpcy5zYXZlRWR1T3JFeHBFZGl0b3IodCksIHYobixcclxuICAgICAgICAgIHApO1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFjICYmIHMgJiYgdS5pbmNsdWRlcyhzKSkge1xyXG4gICAgICAgIHYobiwgeSh0LCBsLCBlKSk7XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG4gICAgICBsZXQgaCA9IGF3YWl0IHRoaXMub3BlbkVkdU9yRXhwRWRpdG9yKHQsIHIsIGYpO1xyXG4gICAgICBpZiAoZiA9ICExLCAhaCkge1xyXG4gICAgICAgIGEubWFya1JlY29yZE1pc3NlZChlKSwgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICBcIltVbHRpcHJvXSBza2lwcGVkIEVkdWNhdGlvbiByb3cgYmVjYXVzZSBubyBpbmRpdmlkdWFsIGVkaXRvciB3YXMgYXZhaWxhYmxlXCIpLCB0aGlzXHJcbiAgICAgICAgICAucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZU1pc3NlZFByb2dyZXNzKFwiRWR1Y2F0aW9uXCIpO1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0IHRoaXMuZmlsbEVkdU9yRXhwRmllbGRzKHQsIGgsIG8sIG4pLCBhd2FpdCB0aGlzLnNhdmVFZHVPckV4cEVkaXRvcih0KSwgdihuLCBjID8gaCA6XHJcbiAgICAgICAgeSh0LCBsLCBlKSksIHUucHVzaChzKVxyXG4gICAgfVxyXG4gICAgbGV0IGggPSBiKHQpLmxlbmd0aDtcclxuICAgIGlmIChoICE9PSBuLmxlbmd0aCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJbVWx0aXByb10gRWR1Y2F0aW9uIHJvdyBjb3VudCBkb2VzIG5vdCBtYXRjaCBmaWxsLXYyXCIsIHtcclxuICAgICAgICB0YXJnZXRDb3VudDogbi5sZW5ndGgsXHJcbiAgICAgICAgZmluYWxDb3VudDogaFxyXG4gICAgICB9KSwgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MoXCJFZHVjYXRpb25cIik7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoXCJFZHVjYXRpb25cIik7XHJcbiAgICBsZXQgdyA9IHQucXVlcnlTZWxlY3RvcignYnV0dG9uW2RhdGEtYXV0b21hdGlvbj1cImNhbmNlbC1idXR0b25cIl0nKTtcclxuICAgIHc/LmNsaWNrKCksIGF3YWl0IHRoaXMuZGVsYXkoMzAwKVxyXG4gIH1cclxuICBhc3luYyBvcGVuRWR1T3JFeHBFZGl0b3IoZSwgdCwgcikge1xyXG4gICAgbGV0IG4gPSAoMCwgcC5nZXRVbHRpcHJvU2VjdGlvbkVkaXRvcnMpKGUpLFxyXG4gICAgICBvID0gKDAsIHAuaXNVbHRpcHJvUmV2aWV3Q29weUxheW91dCkoZSk7XHJcbiAgICBpZiAobyAmJiByKSB7XHJcbiAgICAgIGxldCB0ID0gKDAsIHAuZ2V0VWx0aXByb1NlY3Rpb25FZGl0b3IpKGUpO1xyXG4gICAgICBpZiAoY29uc29sZS5pbmZvKFwiW1VsdGlwcm9dIHNlbGVjdGVkIGV4aXN0aW5nIHN0cnVjdHVyZWQgZWRpdG9yXCIsIHtcclxuICAgICAgICAgIGVkaXRvckNvdW50OiBuLmxlbmd0aCxcclxuICAgICAgICAgIHNlbGVjdGVkOiAhIXRcclxuICAgICAgICB9KSwgdCkgcmV0dXJuIHQ7XHJcbiAgICAgIGNvbnNvbGUuaW5mbyhcIltVbHRpcHJvXSBubyByZXVzYWJsZSByZXZpZXcgZWRpdG9yOyBhZGRpbmcgc3RydWN0dXJlZCByb3dcIiwge1xyXG4gICAgICAgIGVkaXRvckNvdW50OiBuLmxlbmd0aFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgbGV0IGkgPSBlLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bZGF0YS1hdXRvbWF0aW9uPSdwcmltYXJ5LWFjdGlvbi1idXR0b24nXVwiKSA/PyB0O1xyXG4gICAgaWYgKCFpKSByZXR1cm4gbnVsbDtcclxuICAgIGkuY2xpY2soKTtcclxuICAgIGxldCBhID0gRGF0ZS5ub3coKSArIDNlMztcclxuICAgIGZvciAoOyBEYXRlLm5vdygpIDwgYTspIHtcclxuICAgICAgbGV0IHQgPSAoMCwgcC5nZXRVbHRpcHJvU2VjdGlvbkVkaXRvcikoZSwgbik7XHJcbiAgICAgIGlmICh0KSByZXR1cm4gY29uc29sZS5pbmZvKFwiW1VsdGlwcm9dIHNlbGVjdGVkIG5ld2x5IGFkZGVkIHN0cnVjdHVyZWQgZWRpdG9yXCIsIHtcclxuICAgICAgICBlZGl0b3JDb3VudEJlZm9yZTogbi5sZW5ndGgsXHJcbiAgICAgICAgZWRpdG9yQ291bnRBZnRlcjogKDAsIHAuZ2V0VWx0aXByb1NlY3Rpb25FZGl0b3JzKShlKS5sZW5ndGhcclxuICAgICAgfSksIHQ7XHJcbiAgICAgIGF3YWl0IHRoaXMuZGVsYXkoNTApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29uc29sZS53YXJuKFwiW1VsdGlwcm9dIG5vIGluZGl2aWR1YWwgZWRpdG9yIGFwcGVhcmVkIGFmdGVyIEFkZFwiLCB7XHJcbiAgICAgIGVkaXRvckNvdW50QmVmb3JlOiBuLmxlbmd0aFxyXG4gICAgfSksIG51bGxcclxuICB9XHJcbiAgYXN5bmMgc2F2ZUVkdU9yRXhwRWRpdG9yKGUpIHtcclxuICAgIGxldCB0ID0gZS5xdWVyeVNlbGVjdG9yKCdidXR0b25bZGF0YS1hdXRvbWF0aW9uPVwic2F2ZS1idXR0b25cIl0nKTtcclxuICAgIHQgJiYgKHQuY2xpY2soKSwgYXdhaXQgdGhpcy5kZWxheSgyMjAwKSlcclxuICB9XHJcbiAgYXN5bmMgZmlsbEVkdU9yRXhwRmllbGRzKGUsIHQsIHIsIG4pIHtcclxuICAgIGxldCBvID0gdC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LmZvcm0tZ3JvdXBcIiksXHJcbiAgICAgIGwgPSBBcnJheS5mcm9tKG8pLmZpbHRlcihlID0+ICFlLnF1ZXJ5U2VsZWN0b3IoXCJkaXYuZm9ybS1ncm91cFwiKSksXHJcbiAgICAgIHUgPSAoMCwgcC5pc1VsdGlwcm9SZXZpZXdDb3B5TGF5b3V0KShlKSxcclxuICAgICAgYyA9IHUgPyAoMCwgcC5nZXRVbHRpcHJvU2VjdGlvbkVkaXRvcnMpKGUpIDogW107XHJcbiAgICBjb25zb2xlLmluZm8oXHJcbiAgICAgIGBbVWx0aXByb10gZmlsbGluZyBzdHJ1Y3R1cmVkIGVkaXRvcjogcmV2aWV3Q29weT0ke3V9OyBlZGl0b3JJbmRleD0ke2MuaW5kZXhPZih0KX07IGVkaXRvckNvdW50PSR7Yy5sZW5ndGh9OyBmaWVsZENvdW50PSR7bC5sZW5ndGh9YFxyXG4gICAgICApO1xyXG4gICAgbGV0IGggPSBbXSxcclxuICAgICAgZyA9IG4gJiYgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlU2VjdGlvblJlc3VsdCA/ICgwLCBpLmNyZWF0ZVNlY3Rpb25SZXN1bHRSZXBvcnRlcikoblxyXG4gICAgICAgIC50eXBlLCBuLnJlcG9ydGVyLmZvclJlY29yZChuLmluZGV4LCBbe1xyXG4gICAgICAgICAgbGFiZWw6IG4udHlwZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBoXHJcbiAgICAgICAgfV0pKSA6IHZvaWQgMCxcclxuICAgICAgYiA9IGc/LmVuc3VyZVJvdygwLCBtKHIpKTtcclxuICAgIGZvciAobGV0IGUgb2YgKGc/LmVtaXQoKSwgbCkpIHtcclxuICAgICAgbGV0IHQ7XHJcbiAgICAgIGxldCBvID0gdGhpcy5leHRyYWN0UnVsZUZyb21Hcm91cChlKTtcclxuICAgICAgaWYgKCFvKSBjb250aW51ZTtcclxuICAgICAgaC5wdXNoKG8pLCBuPy5mb2N1c0xhYmVscy5wdXNoKG8ubGFiZWwpO1xyXG4gICAgICBsZXQgaSA9ICgwLCBkLmdldFZhbHVlRm9yRWR1RXhwRmllbGQpKG8ubGFiZWwsIHIsIHtcclxuICAgICAgICAkaW5wdXQ6IG8uJGlucHV0XHJcbiAgICAgIH0pO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmIChvLnR5cGUgPT09IHMuRklFTERfVFlQRS5TRUxFQ1QpIHtcclxuICAgICAgICAgIGxldCBlID0gby4kaW5wdXQ7XHJcbiAgICAgICAgICBlPy50YWdOYW1lID09PSBcIklOUFVUXCIgJiYgXCJjb21ib2JveFwiID09PSBlLmdldEF0dHJpYnV0ZShcInJvbGVcIikgPyAodCA9IGF3YWl0ICgwLCBmXHJcbiAgICAgICAgICAgIC5maWxsVWx0aXByb1R5cGVhaGVhZEZpZWxkKShlLCBpKSwgYXdhaXQgdGhpcy5kZWxheSg1MCkpIDogKHQgPSBhd2FpdCAoMCwgZlxyXG4gICAgICAgICAgICAuZmlsbFNlbGVjdEZpZWxkKShvLiRpbnB1dCwgaSksIGF3YWl0IHRoaXMuZGVsYXkoMjAwKSlcclxuICAgICAgICB9IGVsc2Ugby50eXBlID09PSBzLkZJRUxEX1RZUEUuVEVYVCAmJiAodCA9IGF3YWl0ICgwLCBmLmZpbGxJbnB1dFRleHRGaWVsZCkoby4kaW5wdXQsXHJcbiAgICAgICAgICBpKSwgYXdhaXQgdGhpcy5kZWxheSg1MCkpO1xyXG4gICAgICAgIGIgJiYgZz8udXBkYXRlRmllbGQoYiwgby5sYWJlbCwgaSB8fCB2b2lkIDAsICEwID09PSB0ICYmIGkgPyBcImZpbGxlZFwiIDogXCJtaXNzZWRcIilcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IGIgJiYgZz8udXBkYXRlRmllbGQoYiwgby5sYWJlbCwgaSB8fCB2b2lkIDAsIGEuU2tpcHBlZEVycm9yICYmIGUgaW5zdGFuY2VvZiBhXHJcbiAgICAgICAgICAuU2tpcHBlZEVycm9yID8gXCJza2lwcGVkXCIgOiBcIm1pc3NlZFwiKSwgZVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGc/LmVtaXQoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4dHJhY3RSdWxlRnJvbUdyb3VwKGUpIHtcclxuICAgIHJldHVybiAoMCwgcC5leHRyYWN0RXhwQW5kRWR1UnVsZUZyb21FbGVtZW50KShlKVxyXG4gIH1cclxuICBhc3luYyBleGVjdXRlU2l0ZVNwZWNpZmljU3RlcHMoZSkge1xyXG4gICAgbGV0IHQgPSBEKHRoaXMuYW5zd2VyLnNraWxscyk7XHJcbiAgICB0Lmxlbmd0aCA+IDAgJiYgKGNvbnNvbGUuaW5mbyhcIltVbHRpcHJvXVtTa2lsbHNdIHNlbGVjdGVkIGFuc3dlciBzb3VyY2VcIiwge1xyXG4gICAgICBzb3VyY2U6IFwicHJvZmlsZV9kYXRhXCIsXHJcbiAgICAgIHByb2ZpbGVTa2lsbENvdW50OiB0Lmxlbmd0aFxyXG4gICAgfSksIHRoaXMudGFza1F1ZXVlLmFkZCgoKSA9PiAoMCwgZi5maWxsU2tpbGxzKSh0LCB0aGlzLnByb2dyZXNzVHJhY2tlclxyXG4gICAgICAudXBkYXRlRmlsbGVkUHJvZ3Jlc3MpKSk7XHJcbiAgICBsZXQgciA9IGUuZmluZChlID0+IFwiQmVoYXZpb3JzXCIgPT09IGUubGFiZWwgJiYgZS50eXBlID09PSBzLkZJRUxEX1RZUEUuTVVMVElfU0VMRUNUKTtcclxuICAgIHIgJiYgdGhpcy5hbnN3ZXIucmVndWxhci5CZWhhdmlvcnMgJiYgdGhpcy50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgKDAsIGYuZmlsbEJlaGF2aW9yc0FuZE1vdGl2YXRpb25zKShyLCB0aGlzLmFuc3dlci5yZWd1bGFyLkJlaGF2aW9ycyksIHRoaXNcclxuICAgICAgICAucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzKFwiQmVoYXZpb3JzXCIpXHJcbiAgICB9KTtcclxuICAgIGxldCBuID0gZS5maW5kKGUgPT4gXCJNb3RpdmF0aW9uc1wiID09PSBlLmxhYmVsICYmIGUudHlwZSA9PT0gcy5GSUVMRF9UWVBFLk1VTFRJX1NFTEVDVCk7XHJcbiAgICBuICYmIHRoaXMuYW5zd2VyLnJlZ3VsYXIuTW90aXZhdGlvbnMgJiYgdGhpcy50YXNrUXVldWUuYWRkKGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgKDAsIGYuZmlsbEJlaGF2aW9yc0FuZE1vdGl2YXRpb25zKShuLCB0aGlzLmFuc3dlci5yZWd1bGFyLk1vdGl2YXRpb25zKSwgdGhpc1xyXG4gICAgICAgIC5wcm9ncmVzc1RyYWNrZXIudXBkYXRlRmlsbGVkUHJvZ3Jlc3MoXCJNb3RpdmF0aW9uc1wiKVxyXG4gICAgfSk7XHJcbiAgICBsZXQgbyA9IGUuZmlsdGVyKGUgPT4gXCJjZXJ0aWZpY2F0aW9uc1wiID09PSBlLl9fdWx0aXByb0RpYWxvZ1NlY3Rpb24pO1xyXG4gICAgby5sZW5ndGggPiAwICYmIHRoaXMudGFza1F1ZXVlLmFkZCgoKSA9PiAoMCwgZi5maWxsQ2VydGlmaWNhdGlvbnMpKG8sIHRoaXMuYW5zd2VyLnJlZ3VsYXIsXHJcbiAgICAgIHRoaXMucHJvZ3Jlc3NUcmFja2VyLnVwZGF0ZUZpbGxlZFByb2dyZXNzLCB0aGlzLnByb2dyZXNzVHJhY2tlci51cGRhdGVNaXNzZWRQcm9ncmVzcykpO1xyXG4gICAgbGV0IGkgPSBlLmZpbHRlcihlID0+IFwibGlua3NcIiA9PT0gZS5fX3VsdGlwcm9EaWFsb2dTZWN0aW9uKTtcclxuICAgIGkubGVuZ3RoID4gMCAmJiB0aGlzLnRhc2tRdWV1ZS5hZGQoKCkgPT4gKDAsIGYuZmlsbExpY2Vuc2VzKShpLCB0aGlzLmFuc3dlci5yZWd1bGFyLCB0aGlzXHJcbiAgICAgICAgLnByb2dyZXNzVHJhY2tlci51cGRhdGVGaWxsZWRQcm9ncmVzcywgdGhpcy5wcm9ncmVzc1RyYWNrZXIudXBkYXRlTWlzc2VkUHJvZ3Jlc3MpKSwgdGhpc1xyXG4gICAgICAuYW5zd2VyLnJlZ3VsYXIuUmFjZSAmJiB0aGlzLnRhc2tRdWV1ZS5hZGQoKCkgPT4gKDAsIGYuZmlsbFJhY2UpKHRoaXMuYW5zd2VyLnJlZ3VsYXJcclxuICAgICAgICAuUmFjZSkpLCBhd2FpdCB0aGlzLnRhc2tRdWV1ZS5ydW4oKSwgYXdhaXQgdGhpcy5iaW5kU3VibWl0QnV0dG9uVHJhY2tpbmcoZSlcclxuICB9XHJcbiAgYXN5bmMgZGVsYXkoZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHQgPT4gc2V0VGltZW91dCh0LCBlKSlcclxuICB9XHJcbiAgY29uc3RydWN0b3IoLi4uZSkge1xyXG4gICAgc3VwZXIoLi4uZSksIHRoaXMuaGFzQ29tYm9RdWVzdGlvbnMgPSAhMCwgdGhpcy5jdXJyZW50UnVuQ291bnRyeSA9IFwiXCIsIHRoaXNcclxuICAgICAgLmhhc0NvbXBsZXRlZFJlZ3VsYXJGaWxsUnVuID0gITEsIHRoaXMucHJlc2VydmVDb21taXR0ZWRSZWd1bGFyRmllbGRzRm9yQ3VycmVudFJ1biA9ICExXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnKGUpIHtcclxuICByZXR1cm4gYihlKS5tYXAodykuZmlsdGVyKGUgPT4gISFlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBiKGUpIHtcclxuICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcihcInVsLmxpc3R0eXBlXCIpO1xyXG4gIGlmICghdCkge1xyXG4gICAgbGV0IHQgPSBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCJbZGF0YS1hdXRvbWF0aW9uPSd3b3JrLWV4cGVyaWVuY2UtaXRlbSddLCBbZGF0YS1hdXRvbWF0aW9uPSdlZHVjYXRpb24tcGFuZWwnXSwgW2RhdGEtYXV0b21hdGlvbj0ncGFuZWwtbGlzdC1pdGVtJ11cIlxyXG4gICAgICApKTtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQodC5tYXAoZSA9PiBlLmNsb3Nlc3QoXCJbZGF0YS1hdXRvbWF0aW9uPSdwYW5lbC1saXN0LWl0ZW0nXVwiKSA/PyBlKSkpXHJcbiAgfVxyXG4gIHJldHVybiBBcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcImxpLnJvdywgbGlbZGF0YS1hdXRvbWF0aW9uPSdwYW5lbC1saXN0LWl0ZW0nXVwiKSlcclxufVxyXG5cclxuZnVuY3Rpb24geShlLCB0LCByKSB7XHJcbiAgbGV0IG4gPSB0W3JdID8/IFwiXCIsXHJcbiAgICBvID0gdC5zbGljZSgwLCByKS5maWx0ZXIoZSA9PiBlID09PSBuKS5sZW5ndGgsXHJcbiAgICBpID0gYihlKTtcclxuICByZXR1cm4gbiA/IGkuZmlsdGVyKGUgPT4gdyhlKSA9PT0gbilbb10gPz8gbnVsbCA6IGlbcl0gPz8gbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiB2KGUsIHQpIHtcclxuICBpZiAoIXQpIHtcclxuICAgIGUucmVwb3J0ZXIuY2xlYXJSZWNvcmRGb2N1cyhlLmluZGV4KSwgY29uc29sZS5kZWJ1ZyhcclxuICAgICAgXCJbVWx0aXByb11bc2VjdGlvbi1mb2N1c10gc3RhYmxlIHJvdyB1bmF2YWlsYWJsZVwiLCB7XHJcbiAgICAgICAgdHlwZTogZS50eXBlLFxyXG4gICAgICAgIGluZGV4OiBlLmluZGV4XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGxldCByID0gQXJyYXkuZnJvbShuZXcgU2V0KGUuZm9jdXNMYWJlbHMpKS5tYXAoZSA9PiAoe1xyXG4gICAgbGFiZWw6IGUsXHJcbiAgICByZXF1aXJlZDogITEsXHJcbiAgICB0eXBlOiBzLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICRpbnB1dDogdCxcclxuICAgICRsYWJlbDogdFxyXG4gIH0pKTtcclxuICBlLnJlcG9ydGVyLnNldFJlY29yZEZvY3VzKGUuaW5kZXgsIHtcclxuICAgIGxhYmVsOiBlLnR5cGUsXHJcbiAgICByZXF1aXJlZDogITEsXHJcbiAgICB0eXBlOiBcImVkdWNhdGlvblwiID09PSBlLnR5cGUgPyBzLkZJRUxEX1RZUEUuRURVQ0FUSU9OIDogcy5GSUVMRF9UWVBFLkVNUExPWU1FTlQsXHJcbiAgICAkaW5wdXQ6IHQsXHJcbiAgICBjaGlsZHJlbjogcixcclxuICAgIG9wdGlvbnM6IFtdXHJcbiAgfSksIGNvbnNvbGUuZGVidWcoXCJbVWx0aXByb11bc2VjdGlvbi1mb2N1c10gc3RhYmxlIHJvdyByZWdpc3RlcmVkXCIsIHtcclxuICAgIHR5cGU6IGUudHlwZSxcclxuICAgIGluZGV4OiBlLmluZGV4LFxyXG4gICAgZmllbGRDb3VudDogci5sZW5ndGhcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB3KGUpIHtcclxuICBsZXQgdCA9IGUucXVlcnlTZWxlY3RvcihcInN0cm9uZ1wiKT8udGV4dENvbnRlbnQ7XHJcbiAgaWYgKHQpIHJldHVybiBBKHQpO1xyXG4gIGxldCByID0gbmV3IE1hcDtcclxuICBmb3IgKGxldCB0IG9mIEFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LmZvcm0tZ3JvdXBcIikpKSB7XHJcbiAgICBsZXQgZSA9ICh0LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKT8udGV4dENvbnRlbnQgPz8gXCJcIikucmVwbGFjZSgvXFwqL2csIFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgaWYgKCFlKSBjb250aW51ZTtcclxuICAgIGxldCBuID0gdC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIiksXHJcbiAgICAgIG8gPSBuPy52YWx1ZT8udHJpbSgpID8/IFwiXCI7XHJcbiAgICByLnNldChlLCBvKVxyXG4gIH1cclxuICBsZXQgbiA9IHIuZ2V0KFwiam9iIHRpdGxlXCIpID8/IFwiXCIsXHJcbiAgICBvID0gci5nZXQoXCJjb21wYW55IC8gb3JnYW5pemF0aW9uXCIpID8/IFwiXCI7XHJcbiAgcmV0dXJuIG4gfHwgbyA/IEEoW24sIG9dLmZpbHRlcihCb29sZWFuKS5qb2luKFwiLCBcIikpIDogQShyLmdldChcInNjaG9vbCBuYW1lXCIpID8/IFwiXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFMoZSwgdCkge1xyXG4gIGxldCByID0gZS5maW5kSW5kZXgoZSA9PiB3KGUpID09PSB0KTtcclxuICByZXR1cm4gciA8IDAgPyBudWxsIDogZS5zcGxpY2UociwgMSlbMF0gPz8gbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBFKGUpIHtcclxuICBsZXQgdCA9IEFycmF5LmlzQXJyYXkoZSkgPyBlWzBdIDogZTtcclxuICByZXR1cm4gdD8udG9TdHJpbmcoKS50cmltKCkudG9Mb3dlckNhc2UoKSA/PyBcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHgoZSkge1xyXG4gIHJldHVybiBBKFtFKGVbXCJKb2IgVGl0bGVcIl0pLCBFKGVbXCJDb21wYW55IC8gT3JnYW5pemF0aW9uXCJdKV0uam9pbihcIiwgXCIpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBDKGUpIHtcclxuICByZXR1cm4gQShFKGVbXCJTY2hvb2wgTmFtZVwiXSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEEoZSkge1xyXG4gIGxldCB0ID0gZS50cmltKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS5yZXBsYWNlKC9cXHMqLFxccyovZywgXCIsIFwiKTtcclxuICByZXR1cm4gdC5yZXBsYWNlKC9bLFxcc10vZywgXCJcIikgPyB0IDogXCJcIlxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGsoZSwgdCwgciA9ICgpID0+IG5ldyBQcm9taXNlKGUgPT4gc2V0VGltZW91dChlLCAzMDApKSkge1xyXG4gIGxldCBuID0gdC5tYXAoQSkuZmlsdGVyKEJvb2xlYW4pLFxyXG4gICAgbyA9IDA7XHJcbiAgY29uc29sZS5pbmZvKFwiW1VsdGlwcm9dIHJlY29uY2lsaW5nIHBhcnNlciByb3dzXCIsIHtcclxuICAgIHRhcmdldENvdW50OiBuLmxlbmd0aCxcclxuICAgIGN1cnJlbnRSb3dDb3VudDogYihlKS5sZW5ndGhcclxuICB9KTtcclxuICBmb3IgKGxldCB0ID0gMDsgdCA8IDEwMDsgdCArPSAxKSB7XHJcbiAgICBsZXQgdCA9IG5ldyBNYXA7XHJcbiAgICBmb3IgKGxldCBlIG9mIG4pIHQuc2V0KGUsICh0LmdldChlKSA/PyAwKSArIDEpO1xyXG4gICAgbGV0IGkgPSBiKGUpLFxyXG4gICAgICBhID0gW107XHJcbiAgICBmb3IgKGxldCBlIG9mIGkpIHtcclxuICAgICAgbGV0IHIgPSB3KGUpLFxyXG4gICAgICAgIG4gPSB0LmdldChyKSA/PyAwO1xyXG4gICAgICByICYmIG4gPiAwID8gdC5zZXQociwgbiAtIDEpIDogYS5wdXNoKGUpXHJcbiAgICB9XHJcbiAgICBpZiAoMCA9PT0gYS5sZW5ndGgpIHJldHVybiB7XHJcbiAgICAgIHJlbW92ZWQ6IG8sXHJcbiAgICAgIHJlYWR5OiAhMFxyXG4gICAgfTtcclxuICAgIGxldCBsID0gYVthLmxlbmd0aCAtIDFdLFxyXG4gICAgICBzID0gbC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiYnV0dG9uW2RhdGEtYXV0b21hdGlvbj0ncmVtb3ZlLWJ1dHRvbiddLCBidXR0b25bZGF0YS1hdXRvbWF0aW9uPSdkZWxldGUtYnV0dG9uJ11cIik7XHJcbiAgICBpZiAoIXMgfHwgcy5kaXNhYmxlZCkgYnJlYWs7XHJcbiAgICBsZXQgdSA9IGkubGVuZ3RoO1xyXG4gICAgcy5jbGljaygpO1xyXG4gICAgbGV0IGMgPSBEYXRlLm5vdygpICsgM2UzO1xyXG4gICAgZm9yICg7IGIoZSkubGVuZ3RoID49IHUgJiYgRGF0ZS5ub3coKSA8IGM7KSBhd2FpdCByKCk7XHJcbiAgICBpZiAoYihlKS5sZW5ndGggPj0gdSkgYnJlYWs7XHJcbiAgICBvICs9IDFcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlbW92ZWQ6IG8sXHJcbiAgICByZWFkeTogITFcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFQoZSkge1xyXG4gIGlmIChlLnR5cGUgPT09IHMuRklFTERfVFlQRS5DSEVDS0JPWCkge1xyXG4gICAgbGV0IHQgPSBBcnJheS5pc0FycmF5KGUuJGNoZWNrYm94cykgPyBlLiRjaGVja2JveHMgOiBbXTtcclxuICAgIGlmICh0Lmxlbmd0aCA+IDApIHJldHVybiB0LnNvbWUoZSA9PiBlLmNoZWNrZWQpO1xyXG4gICAgbGV0IHIgPSBlLiRpbnB1dDtcclxuICAgIHJldHVybiByPy5jaGVja2VkID09PSAhMFxyXG4gIH1cclxuICBsZXQgdCA9IGUuJGlucHV0O1xyXG4gIGlmICghdCkgcmV0dXJuICExO1xyXG4gIGlmIChlLnR5cGUgPT09IHMuRklFTERfVFlQRS5EQVRFICYmIFwiVUtHLURBVEUtSU5QVVQtVEVYVFwiID09PSB0LnRhZ05hbWUpIHtcclxuICAgIGxldCBlID0gW1wiTW9udGhcIiwgXCJEYXlcIiwgXCJZZWFyXCJdLm1hcChlID0+IHQucXVlcnlTZWxlY3RvcihgaW5wdXRbYXJpYS1sYWJlbD1cIiR7ZX1cIl1gKT8udmFsdWUpO1xyXG4gICAgcmV0dXJuIGUuZXZlcnkoZSA9PiAhIWU/LnRyaW0oKSlcclxuICB9XHJcbiAgcmV0dXJuICgwLCBmLmhhc01lYW5pbmdmdWxDb250cm9sVmFsdWUpKHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEYoZSkge1xyXG4gIHJldHVybiAhKGUuX191bHRpcHJvRGlhbG9nU2VjdGlvbiB8fCBqKGUpKSAmJiAoZS50eXBlID09PSBzLkZJRUxEX1RZUEUuVEVYVCB8fCBlLnR5cGUgPT09IHNcclxuICAgIC5GSUVMRF9UWVBFLlNFTEVDVCB8fCBlLnR5cGUgPT09IHMuRklFTERfVFlQRS5DSEVDS0JPWCB8fCBlLnR5cGUgPT09IHMuRklFTERfVFlQRS5EQVRFKVxyXG59XHJcblxyXG5mdW5jdGlvbiBJKGUpIHtcclxuICBsZXQgdCA9IGUuJGlucHV0O1xyXG4gIHJldHVybiBlLnR5cGUgPT09IHMuRklFTERfVFlQRS5TRUxFQ1QgJiYgdD8uaWQgPT09IFwiU3RhdGVcIiAmJiAvKD86c3RhdGV8cHJvdmluY2UpL2kudGVzdChlXHJcbiAgICAubGFiZWwgPz8gXCJcIilcclxufVxyXG5cclxuZnVuY3Rpb24gaihlKSB7XHJcbiAgcmV0dXJuIGUudHlwZSA9PT0gcy5GSUVMRF9UWVBFLlRFWFQgJiYgZS5sYWJlbD8udHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09IFwic2tpbGxzXCJcclxufVxyXG5cclxuZnVuY3Rpb24gRChlKSB7XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZSkgPyBlLm1hcChlID0+IFN0cmluZyhlID8/IFwiXCIpLnRyaW0oKSkuZmlsdGVyKGUgPT4gZS5sZW5ndGggPiAwKSA6IFtdXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJ1bHRpcHJvLmZjNGQ1ZmMwLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);