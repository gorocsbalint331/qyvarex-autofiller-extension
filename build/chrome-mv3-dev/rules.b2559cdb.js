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
})({"iETpd":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\dayforce\\rules.js",
    "bundleId": "fe2f8bb9b2559cdb",
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
var j = z(require("46d0e752431321d5"));
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

},{"46d0e752431321d5":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"eLiUf":[function(require,module,exports) {
/**
 * Parcel module id: 5ymq4
 * Resolved path: src/contents/sites/dayforce/rules.js
 * Dependencies:
 *   ./answer -> irXfm  =>  src/contents/sites/dayforce/answer.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~constants/country -> 7z2Rw  =>  src/constants/country.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "DAYFORCE_SECTIONS", ()=>l), n.export(r, "getCurrentDayforceElement", ()=>x), n.export(r, "getDayforceDropdownCurrentValue", ()=>k), n.export(r, "getDayforceRuleFromElement", ()=>j), n.export(r, "dedupeDayforceFieldStatus", ()=>D), n.export(r, "getDayforceSectionRows", ()=>L), n.export(r, "getDayforceCompositeRules", ()=>R), n.export(r, "getRules", ()=>O), n.export(r, "getFormSnapshot", ()=>H), n.export(r, "getDayforceNormalFormSnapshot", ()=>Y), n.export(r, "getDayforceEducationEmploymentSnapshot", ()=>X), n.export(r, "DAYFORCE_SUBMIT_BUTTON_SELECTOR", ()=>J), n.export(r, "isVisibleDayforceSubmitButton", ()=>Q), n.export(r, "resolveDayforceSubmitButtonFromTarget", ()=>Z), n.export(r, "getSubmitButton", ()=>ee);
var o = e("~constants/country"), i = e("~core/enums"), a = e("./answer");
let l = {
    education: {
        label: "Education",
        type: i.FIELD_TYPE.EDUCATION,
        containerSelector: '[test-id*="education-history"]',
        rowSelector: 'form[id*="educationHistory"]',
        addButtonSelector: 'button[test-id*="add-educationhistory-record"]',
        fields: [
            {
                key: "Degree",
                selector: 'input[id*="degreeName"]',
                type: i.FIELD_TYPE.TEXT
            },
            {
                key: "isCurrent",
                alternateKey: "isCurrent",
                selector: 'input[id*="notCompleted"]',
                isCheckbox: !0,
                type: i.FIELD_TYPE.CHECKBOX
            },
            {
                key: "Major",
                alternateKey: "Study",
                selector: 'input[id*="majorName"]',
                type: i.FIELD_TYPE.TEXT
            },
            {
                key: "Minor",
                selector: 'input[id*="minorName"], input[id*="Minor"], input[name*="Minor"]',
                type: i.FIELD_TYPE.TEXT
            },
            {
                key: "Start Date",
                alternateKey: "Start",
                selector: 'input[id*="effectiveStart"]',
                type: i.FIELD_TYPE.DATE
            },
            {
                key: "End Date",
                alternateKey: "End",
                selector: 'input[id*="effectiveEnd"]',
                type: i.FIELD_TYPE.DATE
            },
            {
                key: "School",
                selector: 'input[id*="schoolName"]',
                type: i.FIELD_TYPE.TEXT
            },
            {
                key: "Country",
                selector: 'input[id*="countryCode"], input[name*="Country"]',
                type: i.FIELD_TYPE.DROPDOWN
            },
            {
                key: "State / Province",
                selector: 'input[id*="stateCode"], input[id*="StateProvince"], input[name*="StateProvince"]',
                type: i.FIELD_TYPE.DROPDOWN
            },
            {
                key: "City",
                selector: 'input[id*="City"], input[name*="City"]',
                type: i.FIELD_TYPE.TEXT
            },
            {
                key: "G.P.A",
                alternateKey: "gpa",
                selector: 'input[id*="gpa"], input[id*="GPA"], input[name*="GPA"]',
                type: i.FIELD_TYPE.TEXT
            }
        ]
    },
    workExperience: {
        label: "Employment",
        type: i.FIELD_TYPE.EMPLOYMENT,
        containerSelector: '[test-id*="work-history"]',
        rowSelector: 'form[id*="workHistory"]',
        addButtonSelector: 'button[test-id*="add-workhistory-record"]',
        fields: [
            {
                key: "Position Title",
                alternateKey: "jobTitle",
                selector: 'input[id*="title"]',
                type: i.FIELD_TYPE.TEXT
            },
            {
                key: "isCurrent",
                selector: 'input[id*="isCurrent"]',
                isCheckbox: !0,
                type: i.FIELD_TYPE.CHECKBOX
            },
            {
                key: "Employer Name",
                alternateKey: "organization",
                selector: 'input[id*="companyName"]',
                type: i.FIELD_TYPE.TEXT
            },
            {
                key: "Start Date",
                alternateKey: "Start",
                selector: 'input[id*="effectiveStart"]',
                type: i.FIELD_TYPE.DATE
            },
            {
                key: "End Date",
                alternateKey: "End",
                selector: 'input[id*="effectiveEnd"]',
                type: i.FIELD_TYPE.DATE
            },
            {
                key: "Country",
                selector: 'input[id*="countryCode"], input[id*="Country"]',
                type: i.FIELD_TYPE.DROPDOWN
            },
            {
                key: "State / Province",
                alternateKey: "State/Province",
                selector: 'input[id*="stateCode"], input[id*="StateProvince"], input[name*="StateProvince"]',
                type: i.FIELD_TYPE.DROPDOWN
            },
            {
                key: "Address Line 1",
                alternateKey: "location",
                selector: 'input[name*="Address1"]',
                type: i.FIELD_TYPE.TEXT
            },
            {
                key: "City",
                alternateKey: "City",
                selector: 'input[id*="city"], input[name*="City"]',
                type: i.FIELD_TYPE.TEXT
            },
            {
                key: "Division / Dept.",
                alternateKey: "Division",
                selector: 'input[id*="department"], input[name*="DivisionDept"]',
                type: i.FIELD_TYPE.TEXT
            },
            {
                key: "Supervisor",
                alternateKey: "Supervisor",
                selector: 'input[name*="SupervisorName"]',
                type: i.FIELD_TYPE.TEXT
            },
            {
                key: "Reason for Leaving",
                alternateKey: "Reason for Leaving",
                selector: 'textarea[id*="reasonForLeaving"], input[name*="ReasonForLeaving"], textarea[test-id*="reasonforleaving"]',
                type: i.FIELD_TYPE.TEXT
            },
            {
                key: "Duties and Responsibilities",
                alternateKey: "Duties and Responsibilities",
                selector: 'textarea[id*="description"], input[name*="DutiesResponsibilities"], textarea[test-id*="dutiesandresponsibilities"]',
                type: i.FIELD_TYPE.TEXT
            }
        ]
    }
};
function s(e1) {
    return !e1 || "" === e1.trim();
}
function u(e1) {
    return null == e1 || (Array.isArray(e1) ? e1.every(u) : "string" == typeof e1 && "" === e1.trim());
}
function c(e1) {
    return e1.closest(".ant-form-item");
}
function d(e1) {
    return c(e1)?.querySelector("label");
}
function f(e1) {
    return (e1.getAttribute("aria-label") || e1.closest(".ant-select")?.getAttribute("aria-label") || "").trim();
}
function p(e1, t) {
    let r1 = t.textContent?.trim() || "";
    if (!g(e1)) return r1;
    let n = f(e1);
    return "Country dialing code" === n && r1.includes("Phone Number") && (0, a.getDayforcePhoneCountryCodeLabel)(r1) || r1;
}
function m(e1) {
    let t = e1.getAttribute("min"), r1 = e1.getAttribute("max"), n = [
        t && `min ${t}`,
        r1 && `max ${r1}`
    ].filter(Boolean).join(", ");
    return n ? `Please format the date as YYYY-MM-DD (${n})` : "Please format the date as YYYY-MM-DD";
}
function h(e1) {
    return !!e1.closest(".HiddenFields");
}
function g(e1) {
    return "combobox" === e1.getAttribute("role");
}
function b(e1) {
    return !g(e1) && (e1.readOnly || "readonly" === e1.getAttribute("readonly") || e1.hasAttribute?.("readonly"));
}
function y(e1) {
    let t = e1.closest("label.ant-checkbox-wrapper, label.ant-radio-wrapper");
    return t?.textContent?.trim() || "";
}
function v(e1) {
    return e1 ? Array.from(document.querySelectorAll(`input[name="${CSS.escape(e1)}"]`)) : [];
}
function w(e1) {
    let t = e1.closest(".ant-checkbox-group, .ant-radio-group"), r1 = Array.from(t?.querySelectorAll('input[type="checkbox"], input[type="radio"]') || []);
    if (r1.length > 0) return r1;
    let n = v(e1.name);
    return n.length > 0 ? n : "checkbox" === e1.type ? [
        e1
    ] : [];
}
let S = {
    "Home Phone Number": 'input[test-id="personal-info-home-phone-text-input"]',
    "Mobile Phone Number": 'input[test-id="personal-info-mobile-phone-text-input"]'
};
function E(e1, t) {
    if ("INPUT" !== e1.tagName) return null;
    let r1 = S[t];
    return r1 ? document.querySelector(r1) : null;
}
_c = E;
function x(e1, t = "") {
    if ("undefined" == typeof document) return e1;
    let r1 = ()=>E(e1, t) || e1;
    if (!e1.id || "function" != typeof document.getElementById) return r1();
    let n = document.getElementById(e1.id);
    return n && n.tagName === e1.tagName ? n : r1();
}
function C(e1) {
    let t = e1?.trim().toLowerCase();
    return t && o.COUNTRY_OPTIONS.find((e1)=>e1.code.toLowerCase() === t)?.label || "";
}
_c1 = C;
function A(e1, t = "") {
    if ("undefined" == typeof document) return null;
    let r1 = t.startsWith("Home Phone") ? "jobPostingApplication_personalInfo_homePhoneCountryCode" : t.startsWith("Mobile") ? "jobPostingApplication_personalInfo_mobilePhoneCountryCode" : "", n = r1 ? document.getElementById?.(r1) : null;
    return n?.value ? n : e1.closest(".ant-col, [class*='ant-col']")?.querySelector('input[type="hidden"][id$="PhoneCountryCode"]');
}
_c2 = A;
function k(e1, t = "") {
    if ((0, a.isDayforcePhoneCountryCodeLabel)(t)) {
        let r1 = C(A(e1, t)?.value);
        if (r1) return r1;
    }
    let r1 = e1.closest(".ant-select")?.querySelector(".ant-select-selection-item"), n = r1?.getAttribute("title") || r1?.textContent || "";
    return (0, a.normalizeDayforceDropdownOptionText)(n);
}
async function T(e1) {
    F(e1), await I(500);
    let t = e1.id ? document.querySelector(`#${CSS.escape(e1.id)}_list`) : null, r1 = Array.from(t?.children || []).map((e1)=>(0, a.normalizeDayforceDropdownOptionText)(e1.textContent)).filter((e1)=>!s(e1)), n = e1;
    return n.blur?.(), await I(200), r1;
}
_c3 = T;
function F(e1) {
    let t = document.createEvent("MouseEvents");
    t.initEvent("mousedown", !0, !0), e1.dispatchEvent(t);
}
_c4 = F;
function I(e1) {
    return new Promise((t)=>window.setTimeout(t, e1));
}
_c5 = I;
async function j(e1) {
    let t = e1;
    if ("hidden" === t.type || "file" === t.type || b(t) || h(e1)) return null;
    if ("agreeCheckbox" === t.id && "checkbox" === t.type) {
        let r1 = e1.closest(".submit-information")?.querySelector("h3"), n = r1?.textContent?.trim();
        return n ? {
            type: i.FIELD_TYPE.CHECKBOX,
            label: n,
            required: !0,
            $label: r1,
            options: [
                "I Agree to the Candidate Acknowledgement"
            ],
            $checkboxs: [
                t
            ]
        } : null;
    }
    let r1 = d(e1);
    if (!r1) return null;
    let n = p(e1, r1);
    if (s(n)) return null;
    let o = t.required || "true" === t.getAttribute("aria-required") || String(r1.className || "").includes("required");
    if ("TEXTAREA" === e1.tagName) return {
        type: i.FIELD_TYPE.TEXT,
        label: n,
        required: !!o,
        $label: r1,
        $input: e1
    };
    if ("INPUT" === e1.tagName) {
        let a = t.type;
        if ("date" === a) return {
            type: i.FIELD_TYPE.DATE,
            label: n,
            required: !!o,
            $label: r1,
            $input: e1,
            description: m(t)
        };
        if ("checkbox" === a || "radio" === a) {
            let e1 = w(t), l = e1.map((e1)=>y(e1)).filter((e1)=>!s(e1)), u = "checkbox" === a && 1 === e1.length && 0 === l.length;
            return e1.indexOf(t) >= 1 || !u && 0 === l.length ? null : {
                type: i.FIELD_TYPE.CHECKBOX,
                label: n,
                required: !!o,
                $label: r1,
                options: u ? [
                    "Yes",
                    "No"
                ] : l,
                $checkboxs: e1
            };
        }
        return g(e1) ? {
            type: i.FIELD_TYPE.DROPDOWN,
            label: n,
            required: !!o,
            $input: e1,
            $label: r1,
            options: await T(e1)
        } : {
            type: i.FIELD_TYPE.TEXT,
            label: n,
            required: !!o,
            $label: r1,
            $input: e1
        };
    }
    if ("SELECT" === e1.tagName) {
        let t = e1, a = Array.from(t.options).filter((e1)=>!!e1.value).map((e1)=>e1.textContent?.trim() || "").filter((e1)=>!s(e1));
        return {
            type: i.FIELD_TYPE.SELECT,
            label: n,
            required: !!o,
            $input: t,
            $label: r1,
            options: a
        };
    }
    return null;
}
function D(e1) {
    let t = [], r1 = new Set;
    for (let n of e1){
        let e1 = n?.label?.trim();
        !e1 || r1.has(e1) || (r1.add(e1), t.push(n));
    }
    return t;
}
_c6 = D;
function P() {
    return [
        ...Array.from(document.querySelectorAll('form[id*="personalInfo"]')),
        ...Array.from(document.querySelectorAll('[test-id*="application-step-questionnaire"]'))
    ];
}
_c7 = P;
async function _(e1) {
    let t = [], r1 = new Map, n = Array.from(e1.querySelectorAll("input, textarea, select"));
    for (let e1 of n){
        let n = await j(e1);
        if (!n) continue;
        let o = r1.get(n.label);
        if (o && "$input" in o) {
            let e1 = o.$input?.getAttribute?.("aria-label");
            e1 && (o.label = e1, r1.set(e1, o));
        }
        r1.has(n.label) || (t.push(n), r1.set(n.label, n));
    }
    return t;
}
function L(e1) {
    let t = "Education" === e1.label ? "educationHistory" : "workHistory", r1 = RegExp(`^${t}-(\\d+)$`, "i");
    return Array.from(document.querySelectorAll(e1.rowSelector)).map((e1, t)=>({
            row: e1,
            domIndex: t,
            formIndex: Number(String(e1.id || "").match(r1)?.[1])
        })).sort((e1, t)=>{
        let r1 = Number.isFinite(e1.formIndex), n = Number.isFinite(t.formIndex);
        return r1 && n ? e1.formIndex - t.formIndex : e1.domIndex - t.domIndex;
    }).map(({ row: e1 })=>e1);
}
_c8 = L;
async function R(e1) {
    let t = [];
    for (let r1 of L(e1)){
        let n = [], o = Array.from(r1.querySelectorAll("input:not([type='submit']), textarea, select"));
        for (let e1 of o){
            let t = await j(e1);
            t && n.push(t);
        }
        0 !== n.length && t.push({
            type: e1.type,
            label: e1.label,
            required: !0,
            options: n.map((e1)=>({
                    type: e1.type,
                    label: e1.label,
                    description: e1.description,
                    options: e1.options || []
                })),
            children: n
        });
    }
    return t;
}
_c9 = R;
async function O() {
    let e1 = [];
    for (let t of P())e1.push(...await _(t));
    return e1.push(...await R(l.education)), e1.push(...await R(l.workExperience)), D(e1);
}
_c10 = O;
function M(e1, t = "") {
    let r1 = x(e1, t);
    if ("SELECT" === r1.tagName) {
        let e1 = r1;
        return e1.options[e1.selectedIndex]?.textContent?.trim() || "";
    }
    if ("INPUT" === r1.tagName) {
        let e1 = r1;
        if (g(e1)) return k(e1, t);
        if ("checkbox" === e1.type) return e1.checked ? "Yes" : "No";
        if ("radio" === e1.type) {
            let t = document.querySelector(`input[type="radio"][name="${CSS.escape(e1.name)}"]:checked`);
            return t?.value || "";
        }
    }
    return r1.value || r1.getAttribute("value") || "";
}
_c11 = M;
function N(e1) {
    return e1.flatMap((e1)=>Array.isArray(e1.children) ? N(e1.children) : [
            e1
        ]);
}
_c12 = N;
function $(e1) {
    return Array.isArray(e1?.children) && (e1.type === i.FIELD_TYPE.EDUCATION || e1.type === i.FIELD_TYPE.EMPLOYMENT || e1.label === l.education.label || e1.label === l.workExperience.label);
}
function B(e1) {
    return Object.values(l).some((t)=>e1.closest(t.rowSelector));
}
_c13 = B;
function q(e1) {
    let t = e1.$checkboxs;
    if (!t?.length) return;
    if (1 === t.length) return t[0].checked ? "Yes" : "No";
    let r1 = t.filter((e1)=>e1.checked).map((e1)=>y(e1) || e1.value || "").filter((e1)=>!s(e1));
    return 0 === r1.length ? "" : 1 === r1.length ? r1[0] : r1;
}
function U(e1, t = {}) {
    return e1.length > 0 ? N(e1) : Array.from(document.querySelectorAll("input, textarea, select")).map((e1)=>{
        if (t.excludeStructuredSections && B(e1)) return null;
        let r1 = d(e1), n = r1 ? p(e1, r1) : "";
        if (!n) return null;
        if ("INPUT" === e1.tagName) {
            let t = e1;
            if ("checkbox" === t.type || "radio" === t.type) {
                let e1 = w(t);
                return e1.indexOf(t) >= 1 ? null : {
                    label: n,
                    $input: t,
                    $checkboxs: e1.length > 0 ? e1 : [
                        t
                    ]
                };
            }
        }
        return {
            label: n,
            $input: e1
        };
    }).filter((e1)=>!!e1?.label);
}
_c14 = U;
function H(e1 = [], t = {}) {
    let r1 = {}, n = U(e1, t);
    for (let e1 of n){
        let t = q(e1);
        if (void 0 !== t) {
            r1[e1.label] = t;
            continue;
        }
        let n = e1.$input;
        if (!n || "INPUT" === n.tagName && "file" === n.type) continue;
        let o = M(n, e1.label);
        !(Object.prototype.hasOwnProperty.call(r1, e1.label) && !u(r1[e1.label]) && u(o)) && (!Object.prototype.hasOwnProperty.call(r1, e1.label) || u(r1[e1.label]) || u(o)) && (r1[e1.label] = o);
    }
    return r1;
}
_c15 = H;
function Y(e1 = []) {
    return H(e1.filter((e1)=>!$(e1)), {
        excludeStructuredSections: 0 === e1.length
    });
}
_c16 = Y;
function z(e1, t) {
    let r1 = d(t);
    return r1 && p(t, r1) || e1.key;
}
function V(e1, t) {
    let r1 = e1.trim().toLowerCase(), n = String(t ?? "").trim().toLowerCase();
    return "no" === n && ("iscurrent" === r1 || "current job" === r1 || "not completed" === r1);
}
_c17 = V;
function W(e1) {
    return Object.entries(e1).some(([e1, t])=>!V(e1, t) && !u(t));
}
_c18 = W;
function G(e1) {
    return W(e1) ? Object.fromEntries(Object.entries(e1).filter(([e1, t])=>!!V(e1, t) || !u(t))) : null;
}
_c19 = G;
function K(e1) {
    return L(e1).map((t)=>{
        let r1 = {};
        for (let n of e1.fields){
            let e1 = t.querySelector(n.selector);
            if (!e1) continue;
            let o = z(n, e1);
            if (n.isCheckbox) {
                r1[o] = e1.checked ? "Yes" : "No";
                continue;
            }
            r1[o] = M(e1, o);
        }
        return G(r1);
    }).filter((e1)=>!!e1);
}
_c20 = K;
function X() {
    return {
        education: K(l.education),
        employment: K(l.workExperience)
    };
}
_c21 = X;
let J = 'button[test-id="application-submit"], button[test-id="application-next-step"]';
function Q(e1) {
    if (e1.disabled || e1.hidden || "true" === e1.getAttribute("aria-hidden")) return !1;
    let t = e1;
    for(; t;){
        if (t.hidden || "true" === t.getAttribute("aria-hidden")) return !1;
        let e1 = window.getComputedStyle?.(t);
        if (e1?.display === "none" || e1?.visibility === "hidden") return !1;
        if (t === document.body) break;
        t = t.parentElement;
    }
    return !0;
}
_c22 = Q;
function Z(e1) {
    let t = e1.closest(J);
    return t && Q(t) ? t : null;
}
_c23 = Z;
function ee() {
    return Array.from(document.querySelectorAll(J)).find(Q);
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23;
$RefreshReg$(_c, "E");
$RefreshReg$(_c1, "C");
$RefreshReg$(_c2, "A");
$RefreshReg$(_c3, "T");
$RefreshReg$(_c4, "F");
$RefreshReg$(_c5, "I");
$RefreshReg$(_c6, "D");
$RefreshReg$(_c7, "P");
$RefreshReg$(_c8, "L");
$RefreshReg$(_c9, "R");
$RefreshReg$(_c10, "O");
$RefreshReg$(_c11, "M");
$RefreshReg$(_c12, "N");
$RefreshReg$(_c13, "B");
$RefreshReg$(_c14, "U");
$RefreshReg$(_c15, "H");
$RefreshReg$(_c16, "Y");
$RefreshReg$(_c17, "V");
$RefreshReg$(_c18, "W");
$RefreshReg$(_c19, "G");
$RefreshReg$(_c20, "K");
$RefreshReg$(_c21, "X");
$RefreshReg$(_c22, "Q");
$RefreshReg$(_c23, "Z");

},{}]},["iETpd","eLiUf"], "eLiUf", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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TjtBQUFvTixTQUFTO0lBQUksT0FBTTtRQUFDLFdBQVUsRUFBRSxFQUFFO1FBQVcsWUFBVyxFQUFFLEVBQUU7SUFBZTtBQUFDO09BQW5FO0FBQW9FLElBQUksSUFBRTtBQUFnRixTQUFTLEVBQUUsRUFBQztJQUFFLElBQUcsR0FBRSxZQUFVLEdBQUUsVUFBUSxXQUFTLEdBQUUsYUFBYSxnQkFBZSxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUU7SUFBRSxNQUFLLEdBQUc7UUFBQyxJQUFHLEVBQUUsVUFBUSxXQUFTLEVBQUUsYUFBYSxnQkFBZSxPQUFNLENBQUM7UUFBRSxJQUFJLEtBQUUsT0FBTyxtQkFBbUI7UUFBRyxJQUFHLElBQUcsWUFBVSxVQUFRLElBQUcsZUFBYSxVQUFTLE9BQU0sQ0FBQztRQUFFLElBQUcsTUFBSSxTQUFTLE1BQUs7UUFBTSxJQUFFLEVBQUU7SUFBYTtJQUFDLE9BQU0sQ0FBQztBQUFDO09BQTlTO0FBQStTLFNBQVMsRUFBRSxFQUFDO0lBQUUsSUFBSSxJQUFFLEdBQUUsUUFBUTtJQUFHLE9BQU8sS0FBRyxFQUFFLEtBQUcsSUFBRTtBQUFJO09BQTdDO0FBQThDLFNBQVM7SUFBSyxPQUFPLE1BQU0sS0FBSyxTQUFTLGlCQUFpQixJQUFJLEtBQUs7QUFBRSIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtMDBlYzAyMzQ2OWRlNWYzZi5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9kYXlmb3JjZS9ydWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxkYXlmb3JjZVxcXFxydWxlcy5qc1wiLFwiYnVuZGxlSWRcIjpcImZlMmY4YmI5YjI1NTljZGJcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiA1eW1xNFxyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvZGF5Zm9yY2UvcnVsZXMuanNcclxuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vYW5zd2VyIC0+IGlyWGZtICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2RheWZvcmNlL2Fuc3dlci5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvbnN0YW50cy9jb3VudHJ5IC0+IDd6MlJ3ICA9PiAgc3JjL2NvbnN0YW50cy9jb3VudHJ5LmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKi9cclxuXHJcbnZhciBuPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO24uZGVmaW5lSW50ZXJvcEZsYWcociksbi5leHBvcnQocixcIkRBWUZPUkNFX1NFQ1RJT05TXCIsKCk9PmwpLG4uZXhwb3J0KHIsXCJnZXRDdXJyZW50RGF5Zm9yY2VFbGVtZW50XCIsKCk9PngpLG4uZXhwb3J0KHIsXCJnZXREYXlmb3JjZURyb3Bkb3duQ3VycmVudFZhbHVlXCIsKCk9PmspLG4uZXhwb3J0KHIsXCJnZXREYXlmb3JjZVJ1bGVGcm9tRWxlbWVudFwiLCgpPT5qKSxuLmV4cG9ydChyLFwiZGVkdXBlRGF5Zm9yY2VGaWVsZFN0YXR1c1wiLCgpPT5EKSxuLmV4cG9ydChyLFwiZ2V0RGF5Zm9yY2VTZWN0aW9uUm93c1wiLCgpPT5MKSxuLmV4cG9ydChyLFwiZ2V0RGF5Zm9yY2VDb21wb3NpdGVSdWxlc1wiLCgpPT5SKSxuLmV4cG9ydChyLFwiZ2V0UnVsZXNcIiwoKT0+Tyksbi5leHBvcnQocixcImdldEZvcm1TbmFwc2hvdFwiLCgpPT5IKSxuLmV4cG9ydChyLFwiZ2V0RGF5Zm9yY2VOb3JtYWxGb3JtU25hcHNob3RcIiwoKT0+WSksbi5leHBvcnQocixcImdldERheWZvcmNlRWR1Y2F0aW9uRW1wbG95bWVudFNuYXBzaG90XCIsKCk9PlgpLG4uZXhwb3J0KHIsXCJEQVlGT1JDRV9TVUJNSVRfQlVUVE9OX1NFTEVDVE9SXCIsKCk9PkopLG4uZXhwb3J0KHIsXCJpc1Zpc2libGVEYXlmb3JjZVN1Ym1pdEJ1dHRvblwiLCgpPT5RKSxuLmV4cG9ydChyLFwicmVzb2x2ZURheWZvcmNlU3VibWl0QnV0dG9uRnJvbVRhcmdldFwiLCgpPT5aKSxuLmV4cG9ydChyLFwiZ2V0U3VibWl0QnV0dG9uXCIsKCk9PmVlKTt2YXIgbz1lKFwifmNvbnN0YW50cy9jb3VudHJ5XCIpLGk9ZShcIn5jb3JlL2VudW1zXCIpLGE9ZShcIi4vYW5zd2VyXCIpO2xldCBsPXtlZHVjYXRpb246e2xhYmVsOlwiRWR1Y2F0aW9uXCIsdHlwZTppLkZJRUxEX1RZUEUuRURVQ0FUSU9OLGNvbnRhaW5lclNlbGVjdG9yOidbdGVzdC1pZCo9XCJlZHVjYXRpb24taGlzdG9yeVwiXScscm93U2VsZWN0b3I6J2Zvcm1baWQqPVwiZWR1Y2F0aW9uSGlzdG9yeVwiXScsYWRkQnV0dG9uU2VsZWN0b3I6J2J1dHRvblt0ZXN0LWlkKj1cImFkZC1lZHVjYXRpb25oaXN0b3J5LXJlY29yZFwiXScsZmllbGRzOlt7a2V5OlwiRGVncmVlXCIsc2VsZWN0b3I6J2lucHV0W2lkKj1cImRlZ3JlZU5hbWVcIl0nLHR5cGU6aS5GSUVMRF9UWVBFLlRFWFR9LHtrZXk6XCJpc0N1cnJlbnRcIixhbHRlcm5hdGVLZXk6XCJpc0N1cnJlbnRcIixzZWxlY3RvcjonaW5wdXRbaWQqPVwibm90Q29tcGxldGVkXCJdJyxpc0NoZWNrYm94OiEwLHR5cGU6aS5GSUVMRF9UWVBFLkNIRUNLQk9YfSx7a2V5OlwiTWFqb3JcIixhbHRlcm5hdGVLZXk6XCJTdHVkeVwiLHNlbGVjdG9yOidpbnB1dFtpZCo9XCJtYWpvck5hbWVcIl0nLHR5cGU6aS5GSUVMRF9UWVBFLlRFWFR9LHtrZXk6XCJNaW5vclwiLHNlbGVjdG9yOidpbnB1dFtpZCo9XCJtaW5vck5hbWVcIl0sIGlucHV0W2lkKj1cIk1pbm9yXCJdLCBpbnB1dFtuYW1lKj1cIk1pbm9yXCJdJyx0eXBlOmkuRklFTERfVFlQRS5URVhUfSx7a2V5OlwiU3RhcnQgRGF0ZVwiLGFsdGVybmF0ZUtleTpcIlN0YXJ0XCIsc2VsZWN0b3I6J2lucHV0W2lkKj1cImVmZmVjdGl2ZVN0YXJ0XCJdJyx0eXBlOmkuRklFTERfVFlQRS5EQVRFfSx7a2V5OlwiRW5kIERhdGVcIixhbHRlcm5hdGVLZXk6XCJFbmRcIixzZWxlY3RvcjonaW5wdXRbaWQqPVwiZWZmZWN0aXZlRW5kXCJdJyx0eXBlOmkuRklFTERfVFlQRS5EQVRFfSx7a2V5OlwiU2Nob29sXCIsc2VsZWN0b3I6J2lucHV0W2lkKj1cInNjaG9vbE5hbWVcIl0nLHR5cGU6aS5GSUVMRF9UWVBFLlRFWFR9LHtrZXk6XCJDb3VudHJ5XCIsc2VsZWN0b3I6J2lucHV0W2lkKj1cImNvdW50cnlDb2RlXCJdLCBpbnB1dFtuYW1lKj1cIkNvdW50cnlcIl0nLHR5cGU6aS5GSUVMRF9UWVBFLkRST1BET1dOfSx7a2V5OlwiU3RhdGUgLyBQcm92aW5jZVwiLHNlbGVjdG9yOidpbnB1dFtpZCo9XCJzdGF0ZUNvZGVcIl0sIGlucHV0W2lkKj1cIlN0YXRlUHJvdmluY2VcIl0sIGlucHV0W25hbWUqPVwiU3RhdGVQcm92aW5jZVwiXScsdHlwZTppLkZJRUxEX1RZUEUuRFJPUERPV059LHtrZXk6XCJDaXR5XCIsc2VsZWN0b3I6J2lucHV0W2lkKj1cIkNpdHlcIl0sIGlucHV0W25hbWUqPVwiQ2l0eVwiXScsdHlwZTppLkZJRUxEX1RZUEUuVEVYVH0se2tleTpcIkcuUC5BXCIsYWx0ZXJuYXRlS2V5OlwiZ3BhXCIsc2VsZWN0b3I6J2lucHV0W2lkKj1cImdwYVwiXSwgaW5wdXRbaWQqPVwiR1BBXCJdLCBpbnB1dFtuYW1lKj1cIkdQQVwiXScsdHlwZTppLkZJRUxEX1RZUEUuVEVYVH1dfSx3b3JrRXhwZXJpZW5jZTp7bGFiZWw6XCJFbXBsb3ltZW50XCIsdHlwZTppLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCxjb250YWluZXJTZWxlY3RvcjonW3Rlc3QtaWQqPVwid29yay1oaXN0b3J5XCJdJyxyb3dTZWxlY3RvcjonZm9ybVtpZCo9XCJ3b3JrSGlzdG9yeVwiXScsYWRkQnV0dG9uU2VsZWN0b3I6J2J1dHRvblt0ZXN0LWlkKj1cImFkZC13b3JraGlzdG9yeS1yZWNvcmRcIl0nLGZpZWxkczpbe2tleTpcIlBvc2l0aW9uIFRpdGxlXCIsYWx0ZXJuYXRlS2V5Olwiam9iVGl0bGVcIixzZWxlY3RvcjonaW5wdXRbaWQqPVwidGl0bGVcIl0nLHR5cGU6aS5GSUVMRF9UWVBFLlRFWFR9LHtrZXk6XCJpc0N1cnJlbnRcIixzZWxlY3RvcjonaW5wdXRbaWQqPVwiaXNDdXJyZW50XCJdJyxpc0NoZWNrYm94OiEwLHR5cGU6aS5GSUVMRF9UWVBFLkNIRUNLQk9YfSx7a2V5OlwiRW1wbG95ZXIgTmFtZVwiLGFsdGVybmF0ZUtleTpcIm9yZ2FuaXphdGlvblwiLHNlbGVjdG9yOidpbnB1dFtpZCo9XCJjb21wYW55TmFtZVwiXScsdHlwZTppLkZJRUxEX1RZUEUuVEVYVH0se2tleTpcIlN0YXJ0IERhdGVcIixhbHRlcm5hdGVLZXk6XCJTdGFydFwiLHNlbGVjdG9yOidpbnB1dFtpZCo9XCJlZmZlY3RpdmVTdGFydFwiXScsdHlwZTppLkZJRUxEX1RZUEUuREFURX0se2tleTpcIkVuZCBEYXRlXCIsYWx0ZXJuYXRlS2V5OlwiRW5kXCIsc2VsZWN0b3I6J2lucHV0W2lkKj1cImVmZmVjdGl2ZUVuZFwiXScsdHlwZTppLkZJRUxEX1RZUEUuREFURX0se2tleTpcIkNvdW50cnlcIixzZWxlY3RvcjonaW5wdXRbaWQqPVwiY291bnRyeUNvZGVcIl0sIGlucHV0W2lkKj1cIkNvdW50cnlcIl0nLHR5cGU6aS5GSUVMRF9UWVBFLkRST1BET1dOfSx7a2V5OlwiU3RhdGUgLyBQcm92aW5jZVwiLGFsdGVybmF0ZUtleTpcIlN0YXRlL1Byb3ZpbmNlXCIsc2VsZWN0b3I6J2lucHV0W2lkKj1cInN0YXRlQ29kZVwiXSwgaW5wdXRbaWQqPVwiU3RhdGVQcm92aW5jZVwiXSwgaW5wdXRbbmFtZSo9XCJTdGF0ZVByb3ZpbmNlXCJdJyx0eXBlOmkuRklFTERfVFlQRS5EUk9QRE9XTn0se2tleTpcIkFkZHJlc3MgTGluZSAxXCIsYWx0ZXJuYXRlS2V5OlwibG9jYXRpb25cIixzZWxlY3RvcjonaW5wdXRbbmFtZSo9XCJBZGRyZXNzMVwiXScsdHlwZTppLkZJRUxEX1RZUEUuVEVYVH0se2tleTpcIkNpdHlcIixhbHRlcm5hdGVLZXk6XCJDaXR5XCIsc2VsZWN0b3I6J2lucHV0W2lkKj1cImNpdHlcIl0sIGlucHV0W25hbWUqPVwiQ2l0eVwiXScsdHlwZTppLkZJRUxEX1RZUEUuVEVYVH0se2tleTpcIkRpdmlzaW9uIC8gRGVwdC5cIixhbHRlcm5hdGVLZXk6XCJEaXZpc2lvblwiLHNlbGVjdG9yOidpbnB1dFtpZCo9XCJkZXBhcnRtZW50XCJdLCBpbnB1dFtuYW1lKj1cIkRpdmlzaW9uRGVwdFwiXScsdHlwZTppLkZJRUxEX1RZUEUuVEVYVH0se2tleTpcIlN1cGVydmlzb3JcIixhbHRlcm5hdGVLZXk6XCJTdXBlcnZpc29yXCIsc2VsZWN0b3I6J2lucHV0W25hbWUqPVwiU3VwZXJ2aXNvck5hbWVcIl0nLHR5cGU6aS5GSUVMRF9UWVBFLlRFWFR9LHtrZXk6XCJSZWFzb24gZm9yIExlYXZpbmdcIixhbHRlcm5hdGVLZXk6XCJSZWFzb24gZm9yIExlYXZpbmdcIixzZWxlY3RvcjondGV4dGFyZWFbaWQqPVwicmVhc29uRm9yTGVhdmluZ1wiXSwgaW5wdXRbbmFtZSo9XCJSZWFzb25Gb3JMZWF2aW5nXCJdLCB0ZXh0YXJlYVt0ZXN0LWlkKj1cInJlYXNvbmZvcmxlYXZpbmdcIl0nLHR5cGU6aS5GSUVMRF9UWVBFLlRFWFR9LHtrZXk6XCJEdXRpZXMgYW5kIFJlc3BvbnNpYmlsaXRpZXNcIixhbHRlcm5hdGVLZXk6XCJEdXRpZXMgYW5kIFJlc3BvbnNpYmlsaXRpZXNcIixzZWxlY3RvcjondGV4dGFyZWFbaWQqPVwiZGVzY3JpcHRpb25cIl0sIGlucHV0W25hbWUqPVwiRHV0aWVzUmVzcG9uc2liaWxpdGllc1wiXSwgdGV4dGFyZWFbdGVzdC1pZCo9XCJkdXRpZXNhbmRyZXNwb25zaWJpbGl0aWVzXCJdJyx0eXBlOmkuRklFTERfVFlQRS5URVhUfV19fTtmdW5jdGlvbiBzKGUpe3JldHVybiFlfHxcIlwiPT09ZS50cmltKCl9ZnVuY3Rpb24gdShlKXtyZXR1cm4gbnVsbD09ZXx8KEFycmF5LmlzQXJyYXkoZSk/ZS5ldmVyeSh1KTpcInN0cmluZ1wiPT10eXBlb2YgZSYmXCJcIj09PWUudHJpbSgpKX1mdW5jdGlvbiBjKGUpe3JldHVybiBlLmNsb3Nlc3QoXCIuYW50LWZvcm0taXRlbVwiKX1mdW5jdGlvbiBkKGUpe3JldHVybiBjKGUpPy5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIil9ZnVuY3Rpb24gZihlKXtyZXR1cm4oZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxlLmNsb3Nlc3QoXCIuYW50LXNlbGVjdFwiKT8uZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJcIikudHJpbSgpfWZ1bmN0aW9uIHAoZSx0KXtsZXQgcj10LnRleHRDb250ZW50Py50cmltKCl8fFwiXCI7aWYoIWcoZSkpcmV0dXJuIHI7bGV0IG49ZihlKTtyZXR1cm5cIkNvdW50cnkgZGlhbGluZyBjb2RlXCI9PT1uJiZyLmluY2x1ZGVzKFwiUGhvbmUgTnVtYmVyXCIpJiYoMCxhLmdldERheWZvcmNlUGhvbmVDb3VudHJ5Q29kZUxhYmVsKShyKXx8cn1mdW5jdGlvbiBtKGUpe2xldCB0PWUuZ2V0QXR0cmlidXRlKFwibWluXCIpLHI9ZS5nZXRBdHRyaWJ1dGUoXCJtYXhcIiksbj1bdCYmYG1pbiAke3R9YCxyJiZgbWF4ICR7cn1gXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiwgXCIpO3JldHVybiBuP2BQbGVhc2UgZm9ybWF0IHRoZSBkYXRlIGFzIFlZWVktTU0tREQgKCR7bn0pYDpcIlBsZWFzZSBmb3JtYXQgdGhlIGRhdGUgYXMgWVlZWS1NTS1ERFwifWZ1bmN0aW9uIGgoZSl7cmV0dXJuISFlLmNsb3Nlc3QoXCIuSGlkZGVuRmllbGRzXCIpfWZ1bmN0aW9uIGcoZSl7cmV0dXJuXCJjb21ib2JveFwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpfWZ1bmN0aW9uIGIoZSl7cmV0dXJuIWcoZSkmJihlLnJlYWRPbmx5fHxcInJlYWRvbmx5XCI9PT1lLmdldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIpfHxlLmhhc0F0dHJpYnV0ZT8uKFwicmVhZG9ubHlcIikpfWZ1bmN0aW9uIHkoZSl7bGV0IHQ9ZS5jbG9zZXN0KFwibGFiZWwuYW50LWNoZWNrYm94LXdyYXBwZXIsIGxhYmVsLmFudC1yYWRpby13cmFwcGVyXCIpO3JldHVybiB0Py50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwifWZ1bmN0aW9uIHYoZSl7cmV0dXJuIGU/QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFtuYW1lPVwiJHtDU1MuZXNjYXBlKGUpfVwiXWApKTpbXX1mdW5jdGlvbiB3KGUpe2xldCB0PWUuY2xvc2VzdChcIi5hbnQtY2hlY2tib3gtZ3JvdXAsIC5hbnQtcmFkaW8tZ3JvdXBcIikscj1BcnJheS5mcm9tKHQ/LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdJyl8fFtdKTtpZihyLmxlbmd0aD4wKXJldHVybiByO2xldCBuPXYoZS5uYW1lKTtyZXR1cm4gbi5sZW5ndGg+MD9uOlwiY2hlY2tib3hcIj09PWUudHlwZT9bZV06W119bGV0IFM9e1wiSG9tZSBQaG9uZSBOdW1iZXJcIjonaW5wdXRbdGVzdC1pZD1cInBlcnNvbmFsLWluZm8taG9tZS1waG9uZS10ZXh0LWlucHV0XCJdJyxcIk1vYmlsZSBQaG9uZSBOdW1iZXJcIjonaW5wdXRbdGVzdC1pZD1cInBlcnNvbmFsLWluZm8tbW9iaWxlLXBob25lLXRleHQtaW5wdXRcIl0nfTtmdW5jdGlvbiBFKGUsdCl7aWYoXCJJTlBVVFwiIT09ZS50YWdOYW1lKXJldHVybiBudWxsO2xldCByPVNbdF07cmV0dXJuIHI/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyKTpudWxsfWZ1bmN0aW9uIHgoZSx0PVwiXCIpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBkb2N1bWVudClyZXR1cm4gZTtsZXQgcj0oKT0+RShlLHQpfHxlO2lmKCFlLmlkfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZClyZXR1cm4gcigpO2xldCBuPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUuaWQpO3JldHVybiBuJiZuLnRhZ05hbWU9PT1lLnRhZ05hbWU/bjpyKCl9ZnVuY3Rpb24gQyhlKXtsZXQgdD1lPy50cmltKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4gdCYmby5DT1VOVFJZX09QVElPTlMuZmluZChlPT5lLmNvZGUudG9Mb3dlckNhc2UoKT09PXQpPy5sYWJlbHx8XCJcIn1mdW5jdGlvbiBBKGUsdD1cIlwiKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQpcmV0dXJuIG51bGw7bGV0IHI9dC5zdGFydHNXaXRoKFwiSG9tZSBQaG9uZVwiKT9cImpvYlBvc3RpbmdBcHBsaWNhdGlvbl9wZXJzb25hbEluZm9faG9tZVBob25lQ291bnRyeUNvZGVcIjp0LnN0YXJ0c1dpdGgoXCJNb2JpbGVcIik/XCJqb2JQb3N0aW5nQXBwbGljYXRpb25fcGVyc29uYWxJbmZvX21vYmlsZVBob25lQ291bnRyeUNvZGVcIjpcIlwiLG49cj9kb2N1bWVudC5nZXRFbGVtZW50QnlJZD8uKHIpOm51bGw7cmV0dXJuIG4/LnZhbHVlP246ZS5jbG9zZXN0KFwiLmFudC1jb2wsIFtjbGFzcyo9J2FudC1jb2wnXVwiKT8ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImhpZGRlblwiXVtpZCQ9XCJQaG9uZUNvdW50cnlDb2RlXCJdJyl9ZnVuY3Rpb24gayhlLHQ9XCJcIil7aWYoKDAsYS5pc0RheWZvcmNlUGhvbmVDb3VudHJ5Q29kZUxhYmVsKSh0KSl7bGV0IHI9QyhBKGUsdCk/LnZhbHVlKTtpZihyKXJldHVybiByfWxldCByPWUuY2xvc2VzdChcIi5hbnQtc2VsZWN0XCIpPy5xdWVyeVNlbGVjdG9yKFwiLmFudC1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW1cIiksbj1yPy5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKXx8cj8udGV4dENvbnRlbnR8fFwiXCI7cmV0dXJuKDAsYS5ub3JtYWxpemVEYXlmb3JjZURyb3Bkb3duT3B0aW9uVGV4dCkobil9YXN5bmMgZnVuY3Rpb24gVChlKXtGKGUpLGF3YWl0IEkoNTAwKTtsZXQgdD1lLmlkP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke0NTUy5lc2NhcGUoZS5pZCl9X2xpc3RgKTpudWxsLHI9QXJyYXkuZnJvbSh0Py5jaGlsZHJlbnx8W10pLm1hcChlPT4oMCxhLm5vcm1hbGl6ZURheWZvcmNlRHJvcGRvd25PcHRpb25UZXh0KShlLnRleHRDb250ZW50KSkuZmlsdGVyKGU9PiFzKGUpKSxuPWU7cmV0dXJuIG4uYmx1cj8uKCksYXdhaXQgSSgyMDApLHJ9ZnVuY3Rpb24gRihlKXtsZXQgdD1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO3QuaW5pdEV2ZW50KFwibW91c2Vkb3duXCIsITAsITApLGUuZGlzcGF0Y2hFdmVudCh0KX1mdW5jdGlvbiBJKGUpe3JldHVybiBuZXcgUHJvbWlzZSh0PT53aW5kb3cuc2V0VGltZW91dCh0LGUpKX1hc3luYyBmdW5jdGlvbiBqKGUpe2xldCB0PWU7aWYoXCJoaWRkZW5cIj09PXQudHlwZXx8XCJmaWxlXCI9PT10LnR5cGV8fGIodCl8fGgoZSkpcmV0dXJuIG51bGw7aWYoXCJhZ3JlZUNoZWNrYm94XCI9PT10LmlkJiZcImNoZWNrYm94XCI9PT10LnR5cGUpe2xldCByPWUuY2xvc2VzdChcIi5zdWJtaXQtaW5mb3JtYXRpb25cIik/LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKSxuPXI/LnRleHRDb250ZW50Py50cmltKCk7cmV0dXJuIG4/e3R5cGU6aS5GSUVMRF9UWVBFLkNIRUNLQk9YLGxhYmVsOm4scmVxdWlyZWQ6ITAsJGxhYmVsOnIsb3B0aW9uczpbXCJJIEFncmVlIHRvIHRoZSBDYW5kaWRhdGUgQWNrbm93bGVkZ2VtZW50XCJdLCRjaGVja2JveHM6W3RdfTpudWxsfWxldCByPWQoZSk7aWYoIXIpcmV0dXJuIG51bGw7bGV0IG49cChlLHIpO2lmKHMobikpcmV0dXJuIG51bGw7bGV0IG89dC5yZXF1aXJlZHx8XCJ0cnVlXCI9PT10LmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIil8fFN0cmluZyhyLmNsYXNzTmFtZXx8XCJcIikuaW5jbHVkZXMoXCJyZXF1aXJlZFwiKTtpZihcIlRFWFRBUkVBXCI9PT1lLnRhZ05hbWUpcmV0dXJue3R5cGU6aS5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6bixyZXF1aXJlZDohIW8sJGxhYmVsOnIsJGlucHV0OmV9O2lmKFwiSU5QVVRcIj09PWUudGFnTmFtZSl7bGV0IGE9dC50eXBlO2lmKFwiZGF0ZVwiPT09YSlyZXR1cm57dHlwZTppLkZJRUxEX1RZUEUuREFURSxsYWJlbDpuLHJlcXVpcmVkOiEhbywkbGFiZWw6ciwkaW5wdXQ6ZSxkZXNjcmlwdGlvbjptKHQpfTtpZihcImNoZWNrYm94XCI9PT1hfHxcInJhZGlvXCI9PT1hKXtsZXQgZT13KHQpLGw9ZS5tYXAoZT0+eShlKSkuZmlsdGVyKGU9PiFzKGUpKSx1PVwiY2hlY2tib3hcIj09PWEmJjE9PT1lLmxlbmd0aCYmMD09PWwubGVuZ3RoO3JldHVybiBlLmluZGV4T2YodCk+PTF8fCF1JiYwPT09bC5sZW5ndGg/bnVsbDp7dHlwZTppLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsbGFiZWw6bixyZXF1aXJlZDohIW8sJGxhYmVsOnIsb3B0aW9uczp1P1tcIlllc1wiLFwiTm9cIl06bCwkY2hlY2tib3hzOmV9fXJldHVybiBnKGUpP3t0eXBlOmkuRklFTERfVFlQRS5EUk9QRE9XTixsYWJlbDpuLHJlcXVpcmVkOiEhbywkaW5wdXQ6ZSwkbGFiZWw6cixvcHRpb25zOmF3YWl0IFQoZSl9Ont0eXBlOmkuRklFTERfVFlQRS5URVhULGxhYmVsOm4scmVxdWlyZWQ6ISFvLCRsYWJlbDpyLCRpbnB1dDplfX1pZihcIlNFTEVDVFwiPT09ZS50YWdOYW1lKXtsZXQgdD1lLGE9QXJyYXkuZnJvbSh0Lm9wdGlvbnMpLmZpbHRlcihlPT4hIWUudmFsdWUpLm1hcChlPT5lLnRleHRDb250ZW50Py50cmltKCl8fFwiXCIpLmZpbHRlcihlPT4hcyhlKSk7cmV0dXJue3R5cGU6aS5GSUVMRF9UWVBFLlNFTEVDVCxsYWJlbDpuLHJlcXVpcmVkOiEhbywkaW5wdXQ6dCwkbGFiZWw6cixvcHRpb25zOmF9fXJldHVybiBudWxsfWZ1bmN0aW9uIEQoZSl7bGV0IHQ9W10scj1uZXcgU2V0O2ZvcihsZXQgbiBvZiBlKXtsZXQgZT1uPy5sYWJlbD8udHJpbSgpOyFlfHxyLmhhcyhlKXx8KHIuYWRkKGUpLHQucHVzaChuKSl9cmV0dXJuIHR9ZnVuY3Rpb24gUCgpe3JldHVyblsuLi5BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm1baWQqPVwicGVyc29uYWxJbmZvXCJdJykpLC4uLkFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3Rlc3QtaWQqPVwiYXBwbGljYXRpb24tc3RlcC1xdWVzdGlvbm5haXJlXCJdJykpXX1hc3luYyBmdW5jdGlvbiBfKGUpe2xldCB0PVtdLHI9bmV3IE1hcCxuPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikpO2ZvcihsZXQgZSBvZiBuKXtsZXQgbj1hd2FpdCBqKGUpO2lmKCFuKWNvbnRpbnVlO2xldCBvPXIuZ2V0KG4ubGFiZWwpO2lmKG8mJlwiJGlucHV0XCJpbiBvKXtsZXQgZT1vLiRpbnB1dD8uZ2V0QXR0cmlidXRlPy4oXCJhcmlhLWxhYmVsXCIpO2UmJihvLmxhYmVsPWUsci5zZXQoZSxvKSl9ci5oYXMobi5sYWJlbCl8fCh0LnB1c2gobiksci5zZXQobi5sYWJlbCxuKSl9cmV0dXJuIHR9ZnVuY3Rpb24gTChlKXtsZXQgdD1cIkVkdWNhdGlvblwiPT09ZS5sYWJlbD9cImVkdWNhdGlvbkhpc3RvcnlcIjpcIndvcmtIaXN0b3J5XCIscj1SZWdFeHAoYF4ke3R9LShcXFxcZCspJGAsXCJpXCIpO3JldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZS5yb3dTZWxlY3RvcikpLm1hcCgoZSx0KT0+KHtyb3c6ZSxkb21JbmRleDp0LGZvcm1JbmRleDpOdW1iZXIoU3RyaW5nKGUuaWR8fFwiXCIpLm1hdGNoKHIpPy5bMV0pfSkpLnNvcnQoKGUsdCk9PntsZXQgcj1OdW1iZXIuaXNGaW5pdGUoZS5mb3JtSW5kZXgpLG49TnVtYmVyLmlzRmluaXRlKHQuZm9ybUluZGV4KTtyZXR1cm4gciYmbj9lLmZvcm1JbmRleC10LmZvcm1JbmRleDplLmRvbUluZGV4LXQuZG9tSW5kZXh9KS5tYXAoKHtyb3c6ZX0pPT5lKX1hc3luYyBmdW5jdGlvbiBSKGUpe2xldCB0PVtdO2ZvcihsZXQgciBvZiBMKGUpKXtsZXQgbj1bXSxvPUFycmF5LmZyb20oci5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQ6bm90KFt0eXBlPSdzdWJtaXQnXSksIHRleHRhcmVhLCBzZWxlY3RcIikpO2ZvcihsZXQgZSBvZiBvKXtsZXQgdD1hd2FpdCBqKGUpO3QmJm4ucHVzaCh0KX0wIT09bi5sZW5ndGgmJnQucHVzaCh7dHlwZTplLnR5cGUsbGFiZWw6ZS5sYWJlbCxyZXF1aXJlZDohMCxvcHRpb25zOm4ubWFwKGU9Pih7dHlwZTplLnR5cGUsbGFiZWw6ZS5sYWJlbCxkZXNjcmlwdGlvbjplLmRlc2NyaXB0aW9uLG9wdGlvbnM6ZS5vcHRpb25zfHxbXX0pKSxjaGlsZHJlbjpufSl9cmV0dXJuIHR9YXN5bmMgZnVuY3Rpb24gTygpe2xldCBlPVtdO2ZvcihsZXQgdCBvZiBQKCkpZS5wdXNoKC4uLmF3YWl0IF8odCkpO3JldHVybiBlLnB1c2goLi4uYXdhaXQgUihsLmVkdWNhdGlvbikpLGUucHVzaCguLi5hd2FpdCBSKGwud29ya0V4cGVyaWVuY2UpKSxEKGUpfWZ1bmN0aW9uIE0oZSx0PVwiXCIpe2xldCByPXgoZSx0KTtpZihcIlNFTEVDVFwiPT09ci50YWdOYW1lKXtsZXQgZT1yO3JldHVybiBlLm9wdGlvbnNbZS5zZWxlY3RlZEluZGV4XT8udGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIn1pZihcIklOUFVUXCI9PT1yLnRhZ05hbWUpe2xldCBlPXI7aWYoZyhlKSlyZXR1cm4gayhlLHQpO2lmKFwiY2hlY2tib3hcIj09PWUudHlwZSlyZXR1cm4gZS5jaGVja2VkP1wiWWVzXCI6XCJOb1wiO2lmKFwicmFkaW9cIj09PWUudHlwZSl7bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCIke0NTUy5lc2NhcGUoZS5uYW1lKX1cIl06Y2hlY2tlZGApO3JldHVybiB0Py52YWx1ZXx8XCJcIn19cmV0dXJuIHIudmFsdWV8fHIuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil8fFwiXCJ9ZnVuY3Rpb24gTihlKXtyZXR1cm4gZS5mbGF0TWFwKGU9PkFycmF5LmlzQXJyYXkoZS5jaGlsZHJlbik/TihlLmNoaWxkcmVuKTpbZV0pfWZ1bmN0aW9uICQoZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZT8uY2hpbGRyZW4pJiYoZS50eXBlPT09aS5GSUVMRF9UWVBFLkVEVUNBVElPTnx8ZS50eXBlPT09aS5GSUVMRF9UWVBFLkVNUExPWU1FTlR8fGUubGFiZWw9PT1sLmVkdWNhdGlvbi5sYWJlbHx8ZS5sYWJlbD09PWwud29ya0V4cGVyaWVuY2UubGFiZWwpfWZ1bmN0aW9uIEIoZSl7cmV0dXJuIE9iamVjdC52YWx1ZXMobCkuc29tZSh0PT5lLmNsb3Nlc3QodC5yb3dTZWxlY3RvcikpfWZ1bmN0aW9uIHEoZSl7bGV0IHQ9ZS4kY2hlY2tib3hzO2lmKCF0Py5sZW5ndGgpcmV0dXJuO2lmKDE9PT10Lmxlbmd0aClyZXR1cm4gdFswXS5jaGVja2VkP1wiWWVzXCI6XCJOb1wiO2xldCByPXQuZmlsdGVyKGU9PmUuY2hlY2tlZCkubWFwKGU9PnkoZSl8fGUudmFsdWV8fFwiXCIpLmZpbHRlcihlPT4hcyhlKSk7cmV0dXJuIDA9PT1yLmxlbmd0aD9cIlwiOjE9PT1yLmxlbmd0aD9yWzBdOnJ9ZnVuY3Rpb24gVShlLHQ9e30pe3JldHVybiBlLmxlbmd0aD4wP04oZSk6QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikpLm1hcChlPT57aWYodC5leGNsdWRlU3RydWN0dXJlZFNlY3Rpb25zJiZCKGUpKXJldHVybiBudWxsO2xldCByPWQoZSksbj1yP3AoZSxyKTpcIlwiO2lmKCFuKXJldHVybiBudWxsO2lmKFwiSU5QVVRcIj09PWUudGFnTmFtZSl7bGV0IHQ9ZTtpZihcImNoZWNrYm94XCI9PT10LnR5cGV8fFwicmFkaW9cIj09PXQudHlwZSl7bGV0IGU9dyh0KTtyZXR1cm4gZS5pbmRleE9mKHQpPj0xP251bGw6e2xhYmVsOm4sJGlucHV0OnQsJGNoZWNrYm94czplLmxlbmd0aD4wP2U6W3RdfX19cmV0dXJue2xhYmVsOm4sJGlucHV0OmV9fSkuZmlsdGVyKGU9PiEhZT8ubGFiZWwpfWZ1bmN0aW9uIEgoZT1bXSx0PXt9KXtsZXQgcj17fSxuPVUoZSx0KTtmb3IobGV0IGUgb2Ygbil7bGV0IHQ9cShlKTtpZih2b2lkIDAhPT10KXtyW2UubGFiZWxdPXQ7Y29udGludWV9bGV0IG49ZS4kaW5wdXQ7aWYoIW58fFwiSU5QVVRcIj09PW4udGFnTmFtZSYmXCJmaWxlXCI9PT1uLnR5cGUpY29udGludWU7bGV0IG89TShuLGUubGFiZWwpOyEoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsZS5sYWJlbCkmJiF1KHJbZS5sYWJlbF0pJiZ1KG8pKSYmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixlLmxhYmVsKXx8dShyW2UubGFiZWxdKXx8dShvKSkmJihyW2UubGFiZWxdPW8pfXJldHVybiByfWZ1bmN0aW9uIFkoZT1bXSl7cmV0dXJuIEgoZS5maWx0ZXIoZT0+ISQoZSkpLHtleGNsdWRlU3RydWN0dXJlZFNlY3Rpb25zOjA9PT1lLmxlbmd0aH0pfWZ1bmN0aW9uIHooZSx0KXtsZXQgcj1kKHQpO3JldHVybiByJiZwKHQscil8fGUua2V5fWZ1bmN0aW9uIFYoZSx0KXtsZXQgcj1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpLG49U3RyaW5nKHQ/P1wiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO3JldHVyblwibm9cIj09PW4mJihcImlzY3VycmVudFwiPT09cnx8XCJjdXJyZW50IGpvYlwiPT09cnx8XCJub3QgY29tcGxldGVkXCI9PT1yKX1mdW5jdGlvbiBXKGUpe3JldHVybiBPYmplY3QuZW50cmllcyhlKS5zb21lKChbZSx0XSk9PiFWKGUsdCkmJiF1KHQpKX1mdW5jdGlvbiBHKGUpe3JldHVybiBXKGUpP09iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhlKS5maWx0ZXIoKFtlLHRdKT0+ISFWKGUsdCl8fCF1KHQpKSk6bnVsbH1mdW5jdGlvbiBLKGUpe3JldHVybiBMKGUpLm1hcCh0PT57bGV0IHI9e307Zm9yKGxldCBuIG9mIGUuZmllbGRzKXtsZXQgZT10LnF1ZXJ5U2VsZWN0b3Iobi5zZWxlY3Rvcik7aWYoIWUpY29udGludWU7bGV0IG89eihuLGUpO2lmKG4uaXNDaGVja2JveCl7cltvXT1lLmNoZWNrZWQ/XCJZZXNcIjpcIk5vXCI7Y29udGludWV9cltvXT1NKGUsbyl9cmV0dXJuIEcocil9KS5maWx0ZXIoZT0+ISFlKX1mdW5jdGlvbiBYKCl7cmV0dXJue2VkdWNhdGlvbjpLKGwuZWR1Y2F0aW9uKSxlbXBsb3ltZW50OksobC53b3JrRXhwZXJpZW5jZSl9fWxldCBKPSdidXR0b25bdGVzdC1pZD1cImFwcGxpY2F0aW9uLXN1Ym1pdFwiXSwgYnV0dG9uW3Rlc3QtaWQ9XCJhcHBsaWNhdGlvbi1uZXh0LXN0ZXBcIl0nO2Z1bmN0aW9uIFEoZSl7aWYoZS5kaXNhYmxlZHx8ZS5oaWRkZW58fFwidHJ1ZVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSlyZXR1cm4hMTtsZXQgdD1lO2Zvcig7dDspe2lmKHQuaGlkZGVufHxcInRydWVcIj09PXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIikpcmV0dXJuITE7bGV0IGU9d2luZG93LmdldENvbXB1dGVkU3R5bGU/Lih0KTtpZihlPy5kaXNwbGF5PT09XCJub25lXCJ8fGU/LnZpc2liaWxpdHk9PT1cImhpZGRlblwiKXJldHVybiExO2lmKHQ9PT1kb2N1bWVudC5ib2R5KWJyZWFrO3Q9dC5wYXJlbnRFbGVtZW50fXJldHVybiEwfWZ1bmN0aW9uIFooZSl7bGV0IHQ9ZS5jbG9zZXN0KEopO3JldHVybiB0JiZRKHQpP3Q6bnVsbH1mdW5jdGlvbiBlZSgpe3JldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoSikpLmZpbmQoUSl9XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJydWxlcy5iMjU1OWNkYi5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);