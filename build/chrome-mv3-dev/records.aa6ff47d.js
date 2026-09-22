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
})({"l8nfa":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\eightfold\\records.js",
    "bundleId": "a3b86e5faa6ff47d",
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
var j = z(require("69af39fb22b56bbf"));
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

},{"69af39fb22b56bbf":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"5rlV5":[function(require,module,exports) {
/**
 * Parcel module id: 48qwr
 * Resolved path: src/contents/sites/eightfold/records.js
 * Dependencies:
 *   ./steps -> llTaO  =>  steps.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~core/dom -> hLMJX  =>  src/core/dom.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "normalizeCareerHubExperienceRecords", ()=>x), n.export(r, "normalizeCareerHubEducationRecords", ()=>C), n.export(r, "commitCareerHubExactOption", ()=>I), n.export(r, "getCareerHubRecordSnapshots", ()=>M), n.export(r, "fillCareerHubRecords", ()=>W);
var o = e("~contents/methods/cancellation"), i = e("~core/dom"), a = e("~core/enums"), l = e("./steps");
let s = 12, u = 25, c = ".fieldContainer-3aJo0", d = "data-jobright-careerhub-committed-value", f = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function p(e1 = u) {
    return new Promise((t)=>setTimeout(t, e1));
}
async function m(e1) {
    (0, o.checkpoint)(), await e1(), (0, o.checkpoint)();
}
function h(e1) {
    let t = Array.isArray(e1) ? e1.find((e1)=>String(e1 ?? "").trim()) : e1;
    return String(t ?? "").replace(/\s+/g, " ").trim();
}
function g(e1, t) {
    for (let r1 of t){
        let t = e1[r1];
        if (h(t)) return t;
    }
}
function b(e1, t) {
    let r1 = e1.dates ?? e1.Dates;
    return r1 && "object" == typeof r1 ? g(r1, t) : void 0;
}
function y(e1) {
    return !0 === e1 || 1 === e1 || /^(?:true|yes|1|current|present)$/i.test(h(e1));
}
function v(e1) {
    let t = h(e1);
    if (!t) return {
        month: "",
        year: "",
        valid: !1
    };
    let r1 = t.match(/^(\d{4})-(\d{1,2})(?:-(\d{1,2}))?$/);
    if (r1) {
        let e1 = Number(r1[2]), t = r1[3] ? Number(r1[3]) : 1, n = new Date(Number(r1[1]), e1, 0).getDate();
        return e1 >= 1 && e1 <= 12 && t >= 1 && t <= n ? {
            month: f[e1 - 1],
            year: r1[1],
            valid: !0
        } : {
            month: "",
            year: "",
            valid: !1
        };
    }
    let n = t.match(/^([A-Za-z]{3,9})[\s,/-]+(\d{4})$/);
    if (n) {
        let e1 = n[1].toLowerCase(), t = f.findIndex((t)=>{
            let r1 = t.toLowerCase();
            return r1 === e1 || 3 === e1.length && r1.slice(0, 3) === e1;
        });
        if (t >= 0) return {
            month: f[t],
            year: n[2],
            valid: !0
        };
    }
    return {
        month: "",
        year: "",
        valid: !1
    };
}
function w(e1) {
    let t = h(e1);
    if (!t) return {
        year: "",
        valid: !1
    };
    if (/^\d{4}$/.test(t)) return {
        year: t,
        valid: !0
    };
    let r1 = v(t);
    return {
        year: r1.year,
        valid: r1.valid
    };
}
function S(e1, t) {
    let r1 = "start" === t ? "Start" : "End", n = g(e1, [
        r1,
        `${r1} Date`,
        `${t}Date`,
        `${t}_date`,
        "end" === t ? "Completion Date" : "",
        "end" === t ? "completionDate" : "",
        "end" === t ? "completion_date" : ""
    ]) ?? b(e1, [
        `${t}Date`,
        `${t}_date`,
        "end" === t ? "completionDate" : "",
        "end" === t ? "completion_date" : ""
    ]);
    if (h(n)) return v(n);
    let o = g(e1, [
        `${r1} Month`,
        `${r1} Date - Month`,
        `${t}Month`
    ]), i = g(e1, [
        `${r1} Year`,
        `${r1} Date - Year`,
        `${t}Year`
    ]);
    return h(o) || h(i) ? v(`${h(o)} ${h(i)}`) : {
        month: "",
        year: "",
        valid: !1
    };
}
_c = S;
function E(e1, t) {
    let r1 = "start" === t ? "Start" : "End";
    return !!h(g(e1, [
        r1,
        `${r1} Date`,
        `${t}Date`,
        `${t}_date`,
        `${r1} Month`,
        `${r1} Year`,
        `${r1} Date - Month`,
        `${r1} Date - Year`,
        `${t}Month`,
        `${t}Year`,
        "end" === t ? "Completion Date" : "",
        "end" === t ? "completionDate" : "",
        "end" === t ? "completion_date" : ""
    ]) ?? b(e1, [
        `${t}Date`,
        `${t}_date`,
        "end" === t ? "completionDate" : "",
        "end" === t ? "completion_date" : ""
    ]));
}
_c1 = E;
function x(e1 = []) {
    return e1.map((e1)=>{
        let t = S(e1, "start"), r1 = y(g(e1, [
            "isCurrent",
            "is_current",
            "Current Job",
            "Current Employer",
            "Currently in this role",
            "This is your current job"
        ]) ?? b(e1, [
            "isCurrent",
            "is_current"
        ])), n = r1 ? {
            month: "",
            year: "",
            valid: !0
        } : S(e1, "end"), o = r1 || !E(e1, "end") || n.valid, i = r1 || !n.month || !n.year || 12 * Number(t.year) + f.indexOf(t.month) <= 12 * Number(n.year) + f.indexOf(n.month);
        return {
            kind: "experience",
            role: h(g(e1, [
                "role",
                "Role",
                "title",
                "Title",
                "Job Title",
                "Position",
                "jobTitle",
                "job_title"
            ])),
            organization: h(g(e1, [
                "organization",
                "Organization",
                "company",
                "Company",
                "companyName",
                "Company Name",
                "Employer",
                "Employer Name",
                "Employer name",
                "employer"
            ])),
            location: h(g(e1, [
                "location",
                "Location"
            ])),
            startMonth: t.month,
            startYear: t.year,
            endMonth: n.month,
            endYear: n.year,
            isCurrent: r1,
            description: h(g(e1, [
                "description",
                "Description",
                "jobDescription",
                "Job Description"
            ])),
            valid: !!t.valid && o && i && !!h(g(e1, [
                "role",
                "Role",
                "title",
                "Title",
                "Job Title",
                "Position",
                "jobTitle",
                "job_title"
            ])) && !!h(g(e1, [
                "organization",
                "Organization",
                "company",
                "Company",
                "companyName",
                "Company Name",
                "Employer",
                "Employer Name",
                "Employer name",
                "employer"
            ]))
        };
    });
}
function C(e1 = []) {
    return e1.map((e1)=>{
        let t = g(e1, [
            "Start",
            "Start Date",
            "startDate",
            "start_date"
        ]) ?? b(e1, [
            "startDate",
            "start_date"
        ]), r1 = g(e1, [
            "End",
            "End Date",
            "endDate",
            "end_date",
            "Completion Date",
            "Graduation Date",
            "completionDate",
            "completion_date"
        ]) ?? b(e1, [
            "endDate",
            "end_date",
            "completionDate",
            "completion_date"
        ]), n = w(t), o = h(r1) ? w(r1) : {
            year: "",
            valid: !0
        }, i = h(g(e1, [
            "school",
            "School",
            "School Name",
            "School or University",
            "University",
            "Institution",
            "College",
            "organization"
        ]));
        return {
            kind: "education",
            school: i,
            degree: h(g(e1, [
                "degree",
                "Degree",
                "Degree Type",
                "accreditation",
                "Accreditation"
            ])),
            major: h(g(e1, [
                "major",
                "Major",
                "rawMajor",
                "Field of Study",
                "discipline",
                "Discipline",
                "Study"
            ])),
            startYear: n.year,
            endYear: o.year,
            description: h(g(e1, [
                "description",
                "Description",
                "activities"
            ])),
            valid: !!i && n.valid && o.valid && (!o.year || Number(n.year) <= Number(o.year))
        };
    });
}
_c2 = C;
function A(e1) {
    return e1.normalize("NFKC").toLocaleLowerCase().replace(/\bjanuary\b|\bjan\b/g, "01").replace(/\bfebruary\b|\bfeb\b/g, "02").replace(/\bmarch\b|\bmar\b/g, "03").replace(/\bapril\b|\bapr\b/g, "04").replace(/\bmay\b/g, "05").replace(/\bjune\b|\bjun\b/g, "06").replace(/\bjuly\b|\bjul\b/g, "07").replace(/\baugust\b|\baug\b/g, "08").replace(/\bseptember\b|\bsep\b|\bsept\b/g, "09").replace(/\boctober\b|\boct\b/g, "10").replace(/\bnovember\b|\bnov\b/g, "11").replace(/\bdecember\b|\bdec\b/g, "12").replace(/\s+/g, " ").trim();
}
_c3 = A;
function k(e1) {
    return h(e1.getAttribute?.("title") || e1.text || e1.textContent);
}
function T(e1, t) {
    e1.value = t, e1.dispatchEvent && "undefined" != typeof Event && (e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        composed: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
    })));
}
_c4 = T;
function F(e1, t, r1, n) {
    try {
        let o = e1() ?? t;
        o.value !== r1 && T(o, r1), null === n ? o.removeAttribute?.(d) : o.setAttribute?.(d, n), o.dispatchEvent && "undefined" != typeof KeyboardEvent && o.dispatchEvent(new KeyboardEvent("keydown", {
            key: "Escape",
            code: "Escape",
            bubbles: !0,
            composed: !0
        })), o.blur?.();
    } catch  {
        try {
            t.blur?.();
        } catch  {}
    }
}
_c5 = F;
async function I(e1, t, r1 = {}) {
    (0, o.checkpoint)();
    let n = r1.pause ?? p, i = r1.isValid ?? (()=>!0), a = e1(), l = a?.value ?? "";
    if (!a || !A(t) || !i()) return !1;
    let u = a.getAttribute?.(d) ?? null, c = null, f = null;
    try {
        a.focus?.(), T(a, t);
        let r1 = a, u = [];
        for(let o = 0; o < s; o += 1){
            if (!i()) return !1;
            if (u = (r1 = e1() ?? r1).options.filter((e1)=>A(k(e1)) === A(t)), 1 === u.length) break;
            await m(n);
        }
        if (1 !== u.length || !i()) {
            let t = e1() ?? r1, o = 0;
            for(let r1 = 0; r1 < s && i(); r1 += 1){
                t.value !== l && T(t, l), await m(n);
                let r1 = e1() ?? t;
                if (o = r1 === t && r1.value === l ? o + 1 : 0, t = r1, o >= 2) break;
            }
            return !1;
        }
        let d = u[0].getAttribute?.("aria-selected") === "true" || u[0].getAttribute?.("data-selected") === "true", p = !1;
        f = ()=>{
            p = !0;
        }, c = r1, r1.addEventListener?.("input", f), r1.addEventListener?.("change", f), (0, o.checkpoint)(), u[0].dispatchEvent && "undefined" != typeof MouseEvent && (u[0].dispatchEvent(new MouseEvent("mousedown", {
            bubbles: !0,
            composed: !0
        })), u[0].dispatchEvent(new MouseEvent("mouseup", {
            bubbles: !0,
            composed: !0
        }))), (0, o.checkpoint)(), u[0].click();
        for(let o = 0; o < s; o += 1){
            if (!i()) return !1;
            r1 = e1() ?? r1;
            let o = u[0].getAttribute?.("aria-selected") === "true" || u[0].getAttribute?.("data-selected") === "true";
            if ((p || !d && o) && A(r1.value) === A(t) && 0 === r1.options.filter((e1)=>A(k(e1)) === A(t)).length) return r1.blur?.(), !0;
            await m(n);
        }
        let h = e1() ?? r1, g = 0;
        for(let t = 0; t < s && i(); t += 1){
            h.value !== l && T(h, l), await m(n);
            let t = e1() ?? h;
            if (g = t === h && t.value === l ? g + 1 : 0, h = t, g >= 2) break;
        }
        return !1;
    } catch (t) {
        throw (t instanceof o.CancelledError || t instanceof o.SkippedError) && F(e1, a, l, u), t;
    } finally{
        c && f && (c.removeEventListener?.("input", f), c.removeEventListener?.("change", f));
    }
}
_c6 = I;
function j(e1) {
    let t = [];
    for (let r1 of Array.from(e1.children)){
        let e1 = h(r1.getAttribute("aria-label")), n = r1.querySelector('label, dt, .label, [class*="label"]'), o = r1.querySelector('dd, .value, [class*="value"]'), i = e1 || h(n?.textContent), a = h(o?.textContent);
        !a && e1 && (a = h(r1.textContent)), !i && n && (i = h(n.textContent));
        let l = i.match(/^([^:]+):\s*(.+)$/);
        l && (!a || A(a) === A(i)) && (i = h(l[1]), a = h(l[2])), i && a && t.push({
            label: i,
            value: a
        });
    }
    return t;
}
function D(e1, t) {
    let r1 = e1.filter(({ label: e1 })=>t.some((t)=>t.test(P(e1))));
    return 1 === r1.length ? r1[0].value : "";
}
_c7 = D;
function P(e1) {
    return e1.normalize("NFKC").toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").replace(/\s+/g, " ").trim();
}
_c8 = P;
function _(e1) {
    if (!e1) return "";
    let t = f.find((t)=>A(t) === A(e1));
    return t || v(e1).month;
}
function L(e1) {
    return e1 ? w(e1).year : "";
}
_c9 = L;
function R(e1, t) {
    let r1 = D(t, [
        /^start date$/
    ]), n = D(t, [
        /^end date$/,
        /^end date or expected$/
    ]), o = D(t, [
        /^currently in this role$/,
        /^current role$/,
        /^current$/
    ]);
    return {
        role: e1,
        organization: D(t, [
            /^company$/,
            /^organization$/,
            /^employer$/,
            /^work$/
        ]),
        location: D(t, [
            /^location$/
        ]),
        startMonth: _(D(t, [
            /^start date month$/,
            /^start month$/
        ]) || r1),
        startYear: L(D(t, [
            /^start date year$/,
            /^start year$/
        ]) || r1),
        endMonth: _(D(t, [
            /^end date month$/,
            /^end month$/
        ]) || n),
        endYear: L(D(t, [
            /^end date year$/,
            /^end date or expected year$/,
            /^end year$/
        ]) || n),
        isCurrent: y(o),
        description: D(t, [
            /^description$/
        ])
    };
}
_c10 = R;
function O(e1, t) {
    return {
        school: e1,
        degree: D(t, [
            /^degree$/
        ]),
        major: D(t, [
            /^major$/,
            /^field of study$/,
            /^discipline$/
        ]),
        startYear: L(D(t, [
            /^start date year$/,
            /^start year$/,
            /^start date$/
        ])),
        endYear: L(D(t, [
            /^end date year$/,
            /^end date or expected year$/,
            /^end year$/,
            /^end date$/
        ])),
        description: D(t, [
            /^description$/
        ])
    };
}
_c11 = O;
function M(e1, t = document) {
    if ((0, l.getCareerHubActiveStep)(t) !== e1) return [];
    let r1 = [];
    for (let n of Array.from(t.querySelectorAll(c))){
        if (!G(n)) continue;
        let t = n.querySelector(".info-card.infoCard-3PHA5") ?? n.querySelector(".info-card-container") ?? n.querySelector(".info-card");
        if (!G(t)) continue;
        let o = "function" == typeof t.querySelectorAll ? Array.from(t.querySelectorAll('button[aria-label^="Edit "]')) : [], i = o.filter(G), a = Array.from(new Set(i.map((e1)=>e1.getAttribute("aria-label") ?? "").filter((e1)=>e1.startsWith("Edit ")).map((e1)=>h(e1.slice(5))).filter(Boolean)));
        if (1 !== a.length) continue;
        let l = a[0];
        if (!l) continue;
        let s = t.querySelector(".details");
        if (!G(s)) continue;
        let u = "experience" === e1 ? R(l, j(s)) : O(l, j(s));
        r1.push({
            kind: e1,
            identity: l,
            organization: "education" === e1 ? l : u.organization,
            fields: u,
            card: t
        });
    }
    return r1;
}
_c12 = M;
function N(e1) {
    return "experience" === e1.kind ? e1.role : e1.school;
}
_c13 = N;
function $(e1) {
    return "experience" === e1.kind ? e1.organization : e1.school;
}
function B(e1, t) {
    return A(e1.identity) === A(N(t)) && A(e1.organization) === A($(t));
}
_c14 = B;
function q(e1, t) {
    return !t || A(h(e1)) === A(t);
}
function U(e1, t) {
    if (!B(e1, t)) return !1;
    if ("experience" === t.kind) {
        if ("experience" !== e1.kind) return !1;
        let r1 = e1.fields;
        return q(r1.role, t.role) && q(r1.organization, t.organization) && q(r1.location, t.location) && q(r1.startMonth, t.startMonth) && q(r1.startYear, t.startYear) && r1.isCurrent === t.isCurrent && q(r1.description, t.description) && (t.isCurrent || q(r1.endMonth, t.endMonth) && q(r1.endYear, t.endYear));
    }
    if ("education" !== e1.kind) return !1;
    let r1 = e1.fields;
    return q(r1.school, t.school) && q(r1.degree, t.degree) && q(r1.major, t.major) && q(r1.startYear, t.startYear) && q(r1.endYear, t.endYear) && q(r1.description, t.description);
}
_c15 = U;
function H(e1, t) {
    return e1.getStep() === t;
}
_c16 = H;
async function Y(e1) {
    (0, o.checkpoint)();
    let t = await e1();
    return (0, o.checkpoint)(), t;
}
_c17 = Y;
async function z(e1, t, r1) {
    let n = [
        [
            "role",
            t.role
        ],
        [
            "organization",
            t.organization
        ],
        [
            "startMonth",
            t.startMonth
        ],
        [
            "startYear",
            t.startYear
        ]
    ];
    for (let [t, o] of n){
        if (!H(e1, r1)) return !1;
        let n = await Y(()=>e1.fillExact(t, o));
        if (!n || !H(e1, r1)) return !1;
    }
    if (t.location && H(e1, r1) && await Y(()=>e1.fillExact("location", t.location)), t.description && H(e1, r1) && await Y(()=>e1.fillText("description", t.description)), !H(e1, r1) || !await Y(()=>e1.setCheckbox("isCurrent", t.isCurrent)) || !H(e1, r1)) return !1;
    if (!t.isCurrent) {
        if (t.endMonth && await Y(()=>e1.fillExact("endMonth", t.endMonth)), !H(e1, r1)) return !1;
        t.endYear && await Y(()=>e1.fillExact("endYear", t.endYear));
    }
    return H(e1, r1);
}
async function V(e1, t, r1) {
    return !!(await Y(()=>e1.fillExact("school", t.school)) && H(e1, r1) && await Y(()=>e1.fillExact("startYear", t.startYear)) && H(e1, r1)) && (t.degree && await Y(()=>e1.fillExact("degree", t.degree)), !!H(e1, r1) && (t.major && await Y(()=>e1.fillExact("major", t.major)), !!H(e1, r1) && (t.endYear && await Y(()=>e1.fillExact("endYear", t.endYear)), !!H(e1, r1) && (t.description && await Y(()=>e1.fillText("description", t.description)), H(e1, r1)))));
}
_c18 = V;
async function W(e1, t, r1 = {}) {
    let n = r1.root ?? ("undefined" != typeof document ? document : {}), l = r1.runtime ?? et(n, r1.pause), s = e1, u = "experience" === e1 ? x(t) : C(t), c = [], d = r1.sectionReporter, f = [], p = "experience" === e1 ? "employment" : "education", m = {
        role: "Role / Job Title",
        organization: "Company",
        location: "Location",
        school: "School",
        degree: "Degree",
        major: "Major",
        description: "Description",
        startMonth: "Start Month",
        startYear: "Start Year",
        endMonth: "End Month",
        endYear: "End Year",
        isCurrent: "Currently in this role"
    };
    for (let [t, r1] of u.entries()){
        let n = d?.ensureRow(t, {
            ...r1,
            ..."education" === r1.kind ? {
                School: r1.school
            } : {
                Company: r1.organization
            }
        }), u = Object.entries(r1).filter(([e1, t])=>m[e1] && ("boolean" == typeof t || !!t)), h = d ? u.map(([e1])=>({
                label: m[e1],
                type: a.FIELD_TYPE.TEXT
            })) : [], g = (r1, n)=>{
            d && (f[t] = {
                type: "experience" === e1 ? a.FIELD_TYPE.EMPLOYMENT : a.FIELD_TYPE.EDUCATION,
                label: "experience" === e1 ? "Experience" : "Education",
                $input: n,
                children: h.map((e1, t)=>({
                        ...e1,
                        $input: r1 ? l.getFieldTarget?.(u[t][0]) : void 0
                    }))
            }, (0, i.setSectionResultFocusRules)(p, f));
        }, b = (e1, t)=>{
            if (d && n) {
                for (let t of n.fields)d.updateField(n, t.label, t.value, "skipped" === t.status ? "skipped" : e1 ? "pending" === t.status ? "filled" : t.status : "missed");
                g(!1, t), d.emit();
            }
        };
        if (d && n) {
            for (let [e1, t] of u)d.updateField(n, m[e1], String(t), "pending");
            d.emit();
        }
        let y = async (e1, t, r1)=>{
            try {
                let o = await r1();
                return d && n && (d.updateField(n, m[e1] ?? e1, String(t), o ? "filled" : "missed"), g(!0), d.emit()), o;
            } catch (r1) {
                throw d && n && (d.updateField(n, m[e1] ?? e1, String(t), r1 instanceof o.SkippedError ? "skipped" : "missed"), d.emit()), r1;
            }
        }, v = d ? {
            ...l,
            getStep: ()=>l.getStep(),
            fillText: (e1, t)=>y(e1, t, ()=>l.fillText(e1, t)),
            fillExact: (e1, t)=>y(e1, t, ()=>l.fillExact(e1, t)),
            setCheckbox: (e1, t)=>y(e1, t, ()=>l.setCheckbox(e1, t))
        } : l;
        if (!r1.valid) {
            c.push({
                committed: !1,
                mode: "invalid"
            }), b(!1);
            continue;
        }
        if (l.getStep() !== s) {
            c.push({
                committed: !1,
                mode: "aborted"
            }), b(!1);
            continue;
        }
        let w = l.getSnapshots(e1), S = w.find((e1)=>U(e1, r1));
        if (S) {
            c.push({
                committed: !0,
                mode: "existing"
            }), b(!0, S.card);
            continue;
        }
        let E = w.filter((e1)=>B(e1, r1)), x = 1 === E.length ? "edit" : "add", C = 1 === E.length ? E[0] : void 0, A = !1, k = !1, T = c.length;
        try {
            if (!(A = await Y(()=>(k = !0, l.begin(r1, x, C))))) {
                c.push({
                    committed: !1,
                    mode: x
                });
                continue;
            }
            if (g(!0), l.getStep() !== s) {
                c.push({
                    committed: !1,
                    mode: "aborted"
                });
                continue;
            }
            let e1 = "experience" === r1.kind ? await z(v, r1, s) : await V(v, r1, s);
            if (!e1 || l.getStep() !== s) {
                c.push({
                    committed: !1,
                    mode: l.getStep() === s ? x : "aborted"
                });
                continue;
            }
            c.push({
                committed: await Y(()=>l.save(r1)),
                mode: x
            });
        } catch (e1) {
            if (k && (e1 instanceof o.CancelledError || e1 instanceof o.SkippedError)) try {
                await l.cleanupInterruptedRun?.(r1, x, C);
            } catch  {}
            throw e1;
        } finally{
            let t = c.length > T && c[c.length - 1].committed, n = d && t ? l.getSnapshots(e1).find((e1)=>U(e1, r1))?.card : void 0;
            b(t, n);
        }
    }
    return c;
}
_c19 = W;
function G(e1) {
    return !!(e1?.isConnected && !e1.hidden && "true" !== e1.getAttribute("aria-hidden") && (!e1.getClientRects || e1.getClientRects().length > 0));
}
_c20 = G;
function K(e1, t) {
    let r1 = h(e1.getAttribute("aria-label"));
    if (r1) return r1;
    let n = e1.getAttribute("id");
    if (n) {
        for (let e1 of Array.from(t.querySelectorAll("label")))if (e1.getAttribute("for") === n) return h(e1.textContent);
    }
    return h(e1.closest("label")?.textContent);
}
_c21 = K;
function X(e1, t) {
    let r1 = Array.from(e1.querySelectorAll("button")).filter(G).filter((e1)=>{
        let r1 = h(e1.getAttribute("aria-label")) || h(e1.textContent);
        return A(r1) === A(t);
    });
    return 1 === r1.length ? r1[0] : null;
}
_c22 = X;
function J(e1) {
    return Array.from(e1.querySelectorAll(c)).some((e1)=>{
        if (!G(e1)) return !1;
        let t = e1.querySelector(".info-card.infoCard-3PHA5") ?? e1.querySelector(".info-card-container") ?? e1.querySelector(".info-card");
        return !!G(t) && Array.from(t.querySelectorAll('button[aria-label^="Edit "]')).filter(G).length > 1;
    });
}
_c23 = J;
function Q(e1, t) {
    let r1 = "undefined" != typeof HTMLInputElement && e1 instanceof HTMLInputElement ? HTMLInputElement.prototype : "undefined" != typeof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : null, n = r1 ? Object.getOwnPropertyDescriptor(r1, "value")?.set : void 0;
    n ? n.call(e1, t) : e1.value = t;
}
_c24 = Q;
function Z(e1, t) {
    Q(e1, t), e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        composed: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
    }));
}
_c25 = Z;
function ee(e1, t) {
    return Array.from(e1.querySelectorAll("[id]")).find((e1)=>e1.getAttribute("id") === t) ?? null;
}
function et(e1, t = p) {
    let r1, n = null, o = null, i = null, a = !1, u = null, c = new Map, f = ()=>!!n && (0, l.getCareerHubActiveStep)(e1) === n, g = ()=>{
        if (!f() || !o) return null;
        let t = Array.from(e1.querySelectorAll(`#${o}`)).filter(G).map((e1)=>e1.closest('form, [role="dialog"], .fieldContainer-3aJo0') ?? e1.parentElement).filter((e1)=>G(e1));
        return 1 === t.length ? t[0] : null;
    }, b = (e1)=>{
        let t = g();
        if (!t) return null;
        let r1 = {
            role: "title",
            organization: "work",
            location: "location",
            school: "school",
            degree: "degree",
            major: "major"
        };
        if (r1[e1]) {
            let n = t.querySelector(`#${r1[e1]}`);
            return G(n) ? n : null;
        }
        let n = {
            startMonth: [
                "Start date, Month"
            ],
            startYear: [
                "Start date, Year"
            ],
            endMonth: [
                "End date, Month"
            ],
            endYear: [
                "End date, Year",
                "End date (or expected), Year"
            ]
        }, o = n[e1] ?? [], i = Array.from(t.querySelectorAll('input[role="combobox"]')).filter(G).filter((e1)=>o.some((r1)=>A(K(e1, t)) === A(r1)));
        return 1 === i.length ? i[0] : null;
    }, y = (t)=>{
        let r1 = b(t);
        if (!r1) return null;
        let n = {
            role: "search-results-title",
            organization: "search-results-work",
            location: "search-results-location",
            school: "search-results-school"
        }, o = h(r1.getAttribute("aria-controls"));
        if (!o || /\s/.test(o) || n[t] && o !== n[t]) return null;
        let i = ee(e1, o), a = G(i) ? Array.from(i.querySelectorAll('[role="option"]')) : [];
        return {
            get value () {
                return r1.value;
            },
            set value (value){
                Q(r1, value);
            },
            options: a,
            getAttribute: (e1)=>r1.getAttribute(e1),
            setAttribute: (e1, t)=>r1.setAttribute(e1, t),
            removeAttribute: (e1)=>r1.removeAttribute(e1),
            focus: ()=>r1.focus(),
            blur: ()=>r1.blur(),
            dispatchEvent: (e1)=>r1.dispatchEvent(e1),
            addEventListener: (e1, t)=>r1.addEventListener(e1, t),
            removeEventListener: (e1, t)=>r1.removeEventListener(e1, t)
        };
    }, v = (e1, t)=>{
        !t || c.has(e1) || c.set(e1, {
            control: t,
            value: t.value,
            checked: "undefined" != typeof HTMLInputElement && t instanceof HTMLInputElement && "checkbox" === t.type ? t.checked : void 0,
            marker: t.getAttribute(d)
        });
    }, w = (e1)=>Array.from(e1.querySelectorAll("input, textarea")).every((e1)=>e1 instanceof HTMLInputElement && "checkbox" === e1.type ? !e1.checked : !e1.value), S = (e1)=>{
        "undefined" != typeof KeyboardEvent && e1.dispatchEvent(new KeyboardEvent("keydown", {
            key: "Escape",
            code: "Escape",
            bubbles: !0,
            composed: !0
        })), e1.blur();
    };
    return {
        getStep: ()=>(0, l.getCareerHubActiveStep)(e1),
        getSnapshots: (t)=>M(t, e1),
        getFieldTarget (e1) {
            if ("description" === e1) return g()?.querySelector("#description") ?? null;
            if ("isCurrent" === e1) {
                let e1 = Array.from(g()?.querySelectorAll('input[type="checkbox"]') ?? []).filter(G).filter((e1)=>"isCurrent" === e1.value || A(K(e1, g())) === A("Currently in this role"));
                return 1 === e1.length ? e1[0] : null;
            }
            return b(e1);
        },
        async begin (l, d, p) {
            if (n = l.kind, o = "experience" === l.kind ? "title" : "school", r1 = p, i = null, a = !1, u = null, c.clear(), !f() || "add" === d && J(e1)) return !1;
            let h = g(), b = "edit" === d && p?.card ? X(p.card, `Edit ${N(l)}`) : X(e1, "experience" === l.kind ? "Add experience" : "Add Education");
            if (!b) return !1;
            u = {
                mode: d,
                editorBefore: h
            }, b.click();
            for(let e1 = 0; e1 < s && f(); e1 += 1){
                let e1 = g();
                if (e1) return i = e1, a = "add" === d && e1 !== h && w(e1), !0;
                await m(t);
            }
            return !1;
        },
        async fillText (e1, t) {
            let r1 = g();
            if (!r1 || !f()) return !1;
            let n = "description" === e1 ? r1.querySelector("#description") : null;
            if (!G(n)) return !1;
            v(e1, n), Z(n, t);
            let o = g()?.querySelector("#description");
            return !!o && f() && o.value === t;
        },
        fillExact: async (e1, r1)=>(v(e1, b(e1)), I(()=>y(e1), r1, {
                pause: t,
                isValid: f
            })),
        async setCheckbox (e1, t) {
            if ("isCurrent" !== e1) return !1;
            let r1 = g();
            if (!r1 || !f()) return !1;
            let n = Array.from(r1.querySelectorAll('input[type="checkbox"]')).filter(G).filter((e1)=>"isCurrent" === e1.value || A(K(e1, r1)) === A("Currently in this role"));
            if (1 !== n.length) return !1;
            v(e1, n[0]), n[0].checked !== t && n[0].click();
            let o = g(), i = o ? Array.from(o.querySelectorAll('input[type="checkbox"]')).filter((e1)=>"isCurrent" === e1.value || A(K(e1, o)) === A("Currently in this role")) : [];
            return 1 === i.length && i[0].checked === t && f();
        },
        async save (n) {
            let o = g();
            if (!o || !f()) return !1;
            let i = N(n), a = "education" === n.kind ? [
                "Save School"
            ] : r1 ? [
                `Save ${i}`
            ] : [
                "Save Role / Job Title"
            ], l = a.map((e1)=>X(o, e1)).filter((e1)=>!!e1), u = Array.from(new Set(l));
            if (1 !== u.length) return !1;
            u[0].click();
            for(let r1 = 0; r1 < s && f(); r1 += 1){
                let r1 = !g(), o = M(n.kind, e1).some((e1)=>U(e1, n));
                if (r1 && o) return !0;
                await m(t);
            }
            return !1;
        },
        cleanupInterruptedRun (e1, t) {
            let r1 = i?.isConnected ? i : g();
            for (let [e1, t] of c)try {
                let n = "description" === e1 ? r1?.querySelector("#description") : "isCurrent" === e1 ? r1?.querySelector('input[type="checkbox"][value="isCurrent"]') : b(e1), o = G(n ?? null) ? n : t.control;
                void 0 !== t.checked && o instanceof HTMLInputElement ? o.checked !== t.checked && o.click() : o.value !== t.value && Z(o, t.value), null === t.marker ? o.removeAttribute(d) : o.setAttribute(d, t.marker), S(o);
            } catch  {}
            let n = !!("add" === t && u?.mode === "add" && r1 && r1 !== u.editorBefore && w(r1));
            if ("add" === t && r1 && (a || n)) {
                let t = X(r1, "experience" === e1.kind ? "Delete Role / Job Title" : "Delete School");
                t?.click();
            }
        }
    };
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

},{}]},["l8nfa","5rlV5"], "5rlV5", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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LFNBQU8sR0FBRTtJQUFNLE9BQU8sTUFBRyxZQUFVLE9BQU8sS0FBRSxFQUFFLElBQUUsS0FBRyxLQUFLO0FBQUM7QUFBQyxTQUFTLEVBQUUsRUFBQztJQUFFLE9BQU0sQ0FBQyxNQUFJLE1BQUcsTUFBSSxNQUFHLG9DQUFvQyxLQUFLLEVBQUU7QUFBRztBQUFDLFNBQVMsRUFBRSxFQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUU7SUFBRyxJQUFHLENBQUMsR0FBRSxPQUFNO1FBQUMsT0FBTTtRQUFHLE1BQUs7UUFBRyxPQUFNLENBQUM7SUFBQztJQUFFLElBQUksS0FBRSxFQUFFLE1BQU07SUFBc0MsSUFBRyxJQUFFO1FBQUMsSUFBSSxLQUFFLE9BQU8sRUFBQyxDQUFDLEVBQUUsR0FBRSxJQUFFLEVBQUMsQ0FBQyxFQUFFLEdBQUMsT0FBTyxFQUFDLENBQUMsRUFBRSxJQUFFLEdBQUUsSUFBRSxJQUFJLEtBQUssT0FBTyxFQUFDLENBQUMsRUFBRSxHQUFFLElBQUUsR0FBRztRQUFVLE9BQU8sTUFBRyxLQUFHLE1BQUcsTUFBSSxLQUFHLEtBQUcsS0FBRyxJQUFFO1lBQUMsT0FBTSxDQUFDLENBQUMsS0FBRSxFQUFFO1lBQUMsTUFBSyxFQUFDLENBQUMsRUFBRTtZQUFDLE9BQU0sQ0FBQztRQUFDLElBQUU7WUFBQyxPQUFNO1lBQUcsTUFBSztZQUFHLE9BQU0sQ0FBQztRQUFDO0lBQUM7SUFBQyxJQUFJLElBQUUsRUFBRSxNQUFNO0lBQW9DLElBQUcsR0FBRTtRQUFDLElBQUksS0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLGVBQWMsSUFBRSxFQUFFLFVBQVUsQ0FBQTtZQUFJLElBQUksS0FBRSxFQUFFO1lBQWMsT0FBTyxPQUFJLE1BQUcsTUFBSSxHQUFFLFVBQVEsR0FBRSxNQUFNLEdBQUUsT0FBSztRQUFDO1FBQUcsSUFBRyxLQUFHLEdBQUUsT0FBTTtZQUFDLE9BQU0sQ0FBQyxDQUFDLEVBQUU7WUFBQyxNQUFLLENBQUMsQ0FBQyxFQUFFO1lBQUMsT0FBTSxDQUFDO1FBQUM7SUFBQztJQUFDLE9BQU07UUFBQyxPQUFNO1FBQUcsTUFBSztRQUFHLE9BQU0sQ0FBQztJQUFDO0FBQUM7QUFBQyxTQUFTLEVBQUUsRUFBQztJQUFFLElBQUksSUFBRSxFQUFFO0lBQUcsSUFBRyxDQUFDLEdBQUUsT0FBTTtRQUFDLE1BQUs7UUFBRyxPQUFNLENBQUM7SUFBQztJQUFFLElBQUcsVUFBVSxLQUFLLElBQUcsT0FBTTtRQUFDLE1BQUs7UUFBRSxPQUFNLENBQUM7SUFBQztJQUFFLElBQUksS0FBRSxFQUFFO0lBQUcsT0FBTTtRQUFDLE1BQUssR0FBRTtRQUFLLE9BQU0sR0FBRTtJQUFLO0FBQUM7QUFBQyxTQUFTLEVBQUUsRUFBQyxFQUFDLENBQUM7SUFBRSxJQUFJLEtBQUUsWUFBVSxJQUFFLFVBQVEsT0FBTSxJQUFFLEVBQUUsSUFBRTtRQUFDO1FBQUUsQ0FBQyxFQUFFLEdBQUUsS0FBSyxDQUFDO1FBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO1FBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO1FBQUMsVUFBUSxJQUFFLG9CQUFrQjtRQUFHLFVBQVEsSUFBRSxtQkFBaUI7UUFBRyxVQUFRLElBQUUsb0JBQWtCO0tBQUcsS0FBRyxFQUFFLElBQUU7UUFBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7UUFBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7UUFBQyxVQUFRLElBQUUsbUJBQWlCO1FBQUcsVUFBUSxJQUFFLG9CQUFrQjtLQUFHO0lBQUUsSUFBRyxFQUFFLElBQUcsT0FBTyxFQUFFO0lBQUcsSUFBSSxJQUFFLEVBQUUsSUFBRTtRQUFDLENBQUMsRUFBRSxHQUFFLE1BQU0sQ0FBQztRQUFDLENBQUMsRUFBRSxHQUFFLGFBQWEsQ0FBQztRQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztLQUFDLEdBQUUsSUFBRSxFQUFFLElBQUU7UUFBQyxDQUFDLEVBQUUsR0FBRSxLQUFLLENBQUM7UUFBQyxDQUFDLEVBQUUsR0FBRSxZQUFZLENBQUM7UUFBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7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QUFFLFNBQU87Z0JBQVUsRUFBRSxDQUFDLEdBQUUsSUFBRyxFQUFFO1lBQU07UUFBQztRQUFFLElBQUcsS0FBRyxHQUFFO1lBQUMsS0FBSSxJQUFHLENBQUMsSUFBRSxFQUFFLElBQUcsRUFBRSxFQUFFLFlBQVksR0FBRSxDQUFDLENBQUMsR0FBRSxFQUFDLE9BQU8sSUFBRztZQUFXLEVBQUU7UUFBTTtRQUFDLElBQUksSUFBRSxPQUFNLElBQUUsR0FBRTtZQUFLLElBQUc7Z0JBQUMsSUFBSSxJQUFFLE1BQU07Z0JBQUksT0FBTyxLQUFHLEtBQUksQ0FBQSxFQUFFLFlBQVksR0FBRSxDQUFDLENBQUMsR0FBRSxJQUFFLElBQUUsT0FBTyxJQUFHLElBQUUsV0FBUyxXQUFVLEVBQUUsQ0FBQyxJQUFHLEVBQUUsTUFBSyxHQUFHO1lBQUMsRUFBQyxPQUFNLElBQUU7Z0JBQUMsTUFBTSxLQUFHLEtBQUksQ0FBQSxFQUFFLFlBQVksR0FBRSxDQUFDLENBQUMsR0FBRSxJQUFFLElBQUUsT0FBTyxJQUFHLGNBQWEsRUFBRSxlQUFhLFlBQVUsV0FBVSxFQUFFLE1BQUssR0FBRztZQUFDO1FBQUMsR0FBRSxJQUFFLElBQUU7WUFBQyxHQUFHLENBQUM7WUFBQyxTQUFRLElBQUksRUFBRTtZQUFVLFVBQVMsQ0FBQyxJQUFFLElBQUksRUFBRSxJQUFFLEdBQUUsSUFBSSxFQUFFLFNBQVMsSUFBRTtZQUFJLFdBQVUsQ0FBQyxJQUFFLElBQUksRUFBRSxJQUFFLEdBQUUsSUFBSSxFQUFFLFVBQVUsSUFBRTtZQUFJLGFBQVksQ0FBQyxJQUFFLElBQUksRUFBRSxJQUFFLEdBQUUsSUFBSSxFQUFFLFlBQVksSUFBRTtRQUFHLElBQUU7UUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNO1lBQUMsRUFBRSxLQUFLO2dCQUFDLFdBQVUsQ0FBQztnQkFBRSxNQUFLO1lBQVMsSUFBRyxFQUFFLENBQUM7WUFBRztRQUFRO1FBQUMsSUFBRyxFQUFFLGNBQVksR0FBRTtZQUFDLEVBQUUsS0FBSztnQkFBQyxXQUFVLENBQUM7Z0JBQUUsTUFB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RUFBRSxJQUFHLEVBQUUsSUFBRztnQkFBQyxJQUFJLElBQUUsa0JBQWdCLEtBQUUsSUFBRyxjQUFjLGtCQUFnQixnQkFBYyxLQUFFLElBQUcsY0FBYywrQ0FBNkMsRUFBRSxLQUFHLElBQUUsRUFBRSxLQUFHLFFBQU0sSUFBRSxFQUFFO2dCQUFRLEtBQUssTUFBSSxFQUFFLFdBQVMsYUFBYSxtQkFBaUIsRUFBRSxZQUFVLEVBQUUsV0FBUyxFQUFFLFVBQVEsRUFBRSxVQUFRLEVBQUUsU0FBTyxFQUFFLEdBQUUsRUFBRSxRQUFPLFNBQU8sRUFBRSxTQUFPLEVBQUUsZ0JBQWdCLEtBQUcsRUFBRSxhQUFhLEdBQUUsRUFBRSxTQUFRLEVBQUU7WUFBRSxFQUFDLE9BQUssQ0FBQztZQUFDLElBQUksSUFBRSxDQUFDLENBQUUsQ0FBQSxVQUFRLEtBQUcsR0FBRyxTQUFPLFNBQU8sTUFBRyxPQUFJLEVBQUUsZ0JBQWMsRUFBRSxHQUFDO1lBQUcsSUFBRyxVQUFRLEtBQUcsTUFBSSxDQUFBLEtBQUcsQ0FBQSxHQUFHO2dCQUFDLElBQUksSUFBRSxFQUFFLElBQUUsaUJBQWUsR0FBRSxPQUFLLDRCQUEwQjtnQkFBaUIsR0FBRztZQUFPO1FBQUM7SUFBQztBQUFDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0zMDM1Y2E4ZDA4Mzk3NGViLmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3NpdGVzL2VpZ2h0Zm9sZC9yZWNvcmRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXGVpZ2h0Zm9sZFxcXFxyZWNvcmRzLmpzXCIsXCJidW5kbGVJZFwiOlwiYTNiODZlNWZhYTZmZjQ3ZFwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IDQ4cXdyXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9laWdodGZvbGQvcmVjb3Jkcy5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vc3RlcHMgLT4gbGxUYU8gID0+ICBzdGVwcy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uIC0+IGx1SmZzICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uLmpzXHJcbiAqICAgfmNvcmUvZG9tIC0+IGhMTUpYICA9PiAgc3JjL2NvcmUvZG9tLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKi9cclxuXHJcbnZhciBuPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO24uZGVmaW5lSW50ZXJvcEZsYWcociksbi5leHBvcnQocixcIm5vcm1hbGl6ZUNhcmVlckh1YkV4cGVyaWVuY2VSZWNvcmRzXCIsKCk9PngpLG4uZXhwb3J0KHIsXCJub3JtYWxpemVDYXJlZXJIdWJFZHVjYXRpb25SZWNvcmRzXCIsKCk9PkMpLG4uZXhwb3J0KHIsXCJjb21taXRDYXJlZXJIdWJFeGFjdE9wdGlvblwiLCgpPT5JKSxuLmV4cG9ydChyLFwiZ2V0Q2FyZWVySHViUmVjb3JkU25hcHNob3RzXCIsKCk9Pk0pLG4uZXhwb3J0KHIsXCJmaWxsQ2FyZWVySHViUmVjb3Jkc1wiLCgpPT5XKTt2YXIgbz1lKFwifmNvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uXCIpLGk9ZShcIn5jb3JlL2RvbVwiKSxhPWUoXCJ+Y29yZS9lbnVtc1wiKSxsPWUoXCIuL3N0ZXBzXCIpO2xldCBzPTEyLHU9MjUsYz1cIi5maWVsZENvbnRhaW5lci0zYUpvMFwiLGQ9XCJkYXRhLWpvYnJpZ2h0LWNhcmVlcmh1Yi1jb21taXR0ZWQtdmFsdWVcIixmPVtcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXTtmdW5jdGlvbiBwKGU9dSl7cmV0dXJuIG5ldyBQcm9taXNlKHQ9PnNldFRpbWVvdXQodCxlKSl9YXN5bmMgZnVuY3Rpb24gbShlKXsoMCxvLmNoZWNrcG9pbnQpKCksYXdhaXQgZSgpLCgwLG8uY2hlY2twb2ludCkoKX1mdW5jdGlvbiBoKGUpe2xldCB0PUFycmF5LmlzQXJyYXkoZSk/ZS5maW5kKGU9PlN0cmluZyhlPz9cIlwiKS50cmltKCkpOmU7cmV0dXJuIFN0cmluZyh0Pz9cIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKX1mdW5jdGlvbiBnKGUsdCl7Zm9yKGxldCByIG9mIHQpe2xldCB0PWVbcl07aWYoaCh0KSlyZXR1cm4gdH19ZnVuY3Rpb24gYihlLHQpe2xldCByPWUuZGF0ZXM/P2UuRGF0ZXM7cmV0dXJuIHImJlwib2JqZWN0XCI9PXR5cGVvZiByP2cocix0KTp2b2lkIDB9ZnVuY3Rpb24geShlKXtyZXR1cm4hMD09PWV8fDE9PT1lfHwvXig/OnRydWV8eWVzfDF8Y3VycmVudHxwcmVzZW50KSQvaS50ZXN0KGgoZSkpfWZ1bmN0aW9uIHYoZSl7bGV0IHQ9aChlKTtpZighdClyZXR1cm57bW9udGg6XCJcIix5ZWFyOlwiXCIsdmFsaWQ6ITF9O2xldCByPXQubWF0Y2goL14oXFxkezR9KS0oXFxkezEsMn0pKD86LShcXGR7MSwyfSkpPyQvKTtpZihyKXtsZXQgZT1OdW1iZXIoclsyXSksdD1yWzNdP051bWJlcihyWzNdKToxLG49bmV3IERhdGUoTnVtYmVyKHJbMV0pLGUsMCkuZ2V0RGF0ZSgpO3JldHVybiBlPj0xJiZlPD0xMiYmdD49MSYmdDw9bj97bW9udGg6ZltlLTFdLHllYXI6clsxXSx2YWxpZDohMH06e21vbnRoOlwiXCIseWVhcjpcIlwiLHZhbGlkOiExfX1sZXQgbj10Lm1hdGNoKC9eKFtBLVphLXpdezMsOX0pW1xccywvLV0rKFxcZHs0fSkkLyk7aWYobil7bGV0IGU9blsxXS50b0xvd2VyQ2FzZSgpLHQ9Zi5maW5kSW5kZXgodD0+e2xldCByPXQudG9Mb3dlckNhc2UoKTtyZXR1cm4gcj09PWV8fDM9PT1lLmxlbmd0aCYmci5zbGljZSgwLDMpPT09ZX0pO2lmKHQ+PTApcmV0dXJue21vbnRoOmZbdF0seWVhcjpuWzJdLHZhbGlkOiEwfX1yZXR1cm57bW9udGg6XCJcIix5ZWFyOlwiXCIsdmFsaWQ6ITF9fWZ1bmN0aW9uIHcoZSl7bGV0IHQ9aChlKTtpZighdClyZXR1cm57eWVhcjpcIlwiLHZhbGlkOiExfTtpZigvXlxcZHs0fSQvLnRlc3QodCkpcmV0dXJue3llYXI6dCx2YWxpZDohMH07bGV0IHI9dih0KTtyZXR1cm57eWVhcjpyLnllYXIsdmFsaWQ6ci52YWxpZH19ZnVuY3Rpb24gUyhlLHQpe2xldCByPVwic3RhcnRcIj09PXQ/XCJTdGFydFwiOlwiRW5kXCIsbj1nKGUsW3IsYCR7cn0gRGF0ZWAsYCR7dH1EYXRlYCxgJHt0fV9kYXRlYCxcImVuZFwiPT09dD9cIkNvbXBsZXRpb24gRGF0ZVwiOlwiXCIsXCJlbmRcIj09PXQ/XCJjb21wbGV0aW9uRGF0ZVwiOlwiXCIsXCJlbmRcIj09PXQ/XCJjb21wbGV0aW9uX2RhdGVcIjpcIlwiXSk/P2IoZSxbYCR7dH1EYXRlYCxgJHt0fV9kYXRlYCxcImVuZFwiPT09dD9cImNvbXBsZXRpb25EYXRlXCI6XCJcIixcImVuZFwiPT09dD9cImNvbXBsZXRpb25fZGF0ZVwiOlwiXCJdKTtpZihoKG4pKXJldHVybiB2KG4pO2xldCBvPWcoZSxbYCR7cn0gTW9udGhgLGAke3J9IERhdGUgLSBNb250aGAsYCR7dH1Nb250aGBdKSxpPWcoZSxbYCR7cn0gWWVhcmAsYCR7cn0gRGF0ZSAtIFllYXJgLGAke3R9WWVhcmBdKTtyZXR1cm4gaChvKXx8aChpKT92KGAke2gobyl9ICR7aChpKX1gKTp7bW9udGg6XCJcIix5ZWFyOlwiXCIsdmFsaWQ6ITF9fWZ1bmN0aW9uIEUoZSx0KXtsZXQgcj1cInN0YXJ0XCI9PT10P1wiU3RhcnRcIjpcIkVuZFwiO3JldHVybiEhaChnKGUsW3IsYCR7cn0gRGF0ZWAsYCR7dH1EYXRlYCxgJHt0fV9kYXRlYCxgJHtyfSBNb250aGAsYCR7cn0gWWVhcmAsYCR7cn0gRGF0ZSAtIE1vbnRoYCxgJHtyfSBEYXRlIC0gWWVhcmAsYCR7dH1Nb250aGAsYCR7dH1ZZWFyYCxcImVuZFwiPT09dD9cIkNvbXBsZXRpb24gRGF0ZVwiOlwiXCIsXCJlbmRcIj09PXQ/XCJjb21wbGV0aW9uRGF0ZVwiOlwiXCIsXCJlbmRcIj09PXQ/XCJjb21wbGV0aW9uX2RhdGVcIjpcIlwiXSk/P2IoZSxbYCR7dH1EYXRlYCxgJHt0fV9kYXRlYCxcImVuZFwiPT09dD9cImNvbXBsZXRpb25EYXRlXCI6XCJcIixcImVuZFwiPT09dD9cImNvbXBsZXRpb25fZGF0ZVwiOlwiXCJdKSl9ZnVuY3Rpb24geChlPVtdKXtyZXR1cm4gZS5tYXAoZT0+e2xldCB0PVMoZSxcInN0YXJ0XCIpLHI9eShnKGUsW1wiaXNDdXJyZW50XCIsXCJpc19jdXJyZW50XCIsXCJDdXJyZW50IEpvYlwiLFwiQ3VycmVudCBFbXBsb3llclwiLFwiQ3VycmVudGx5IGluIHRoaXMgcm9sZVwiLFwiVGhpcyBpcyB5b3VyIGN1cnJlbnQgam9iXCJdKT8/YihlLFtcImlzQ3VycmVudFwiLFwiaXNfY3VycmVudFwiXSkpLG49cj97bW9udGg6XCJcIix5ZWFyOlwiXCIsdmFsaWQ6ITB9OlMoZSxcImVuZFwiKSxvPXJ8fCFFKGUsXCJlbmRcIil8fG4udmFsaWQsaT1yfHwhbi5tb250aHx8IW4ueWVhcnx8MTIqTnVtYmVyKHQueWVhcikrZi5pbmRleE9mKHQubW9udGgpPD0xMipOdW1iZXIobi55ZWFyKStmLmluZGV4T2Yobi5tb250aCk7cmV0dXJue2tpbmQ6XCJleHBlcmllbmNlXCIscm9sZTpoKGcoZSxbXCJyb2xlXCIsXCJSb2xlXCIsXCJ0aXRsZVwiLFwiVGl0bGVcIixcIkpvYiBUaXRsZVwiLFwiUG9zaXRpb25cIixcImpvYlRpdGxlXCIsXCJqb2JfdGl0bGVcIl0pKSxvcmdhbml6YXRpb246aChnKGUsW1wib3JnYW5pemF0aW9uXCIsXCJPcmdhbml6YXRpb25cIixcImNvbXBhbnlcIixcIkNvbXBhbnlcIixcImNvbXBhbnlOYW1lXCIsXCJDb21wYW55IE5hbWVcIixcIkVtcGxveWVyXCIsXCJFbXBsb3llciBOYW1lXCIsXCJFbXBsb3llciBuYW1lXCIsXCJlbXBsb3llclwiXSkpLGxvY2F0aW9uOmgoZyhlLFtcImxvY2F0aW9uXCIsXCJMb2NhdGlvblwiXSkpLHN0YXJ0TW9udGg6dC5tb250aCxzdGFydFllYXI6dC55ZWFyLGVuZE1vbnRoOm4ubW9udGgsZW5kWWVhcjpuLnllYXIsaXNDdXJyZW50OnIsZGVzY3JpcHRpb246aChnKGUsW1wiZGVzY3JpcHRpb25cIixcIkRlc2NyaXB0aW9uXCIsXCJqb2JEZXNjcmlwdGlvblwiLFwiSm9iIERlc2NyaXB0aW9uXCJdKSksdmFsaWQ6ISF0LnZhbGlkJiZvJiZpJiYhIWgoZyhlLFtcInJvbGVcIixcIlJvbGVcIixcInRpdGxlXCIsXCJUaXRsZVwiLFwiSm9iIFRpdGxlXCIsXCJQb3NpdGlvblwiLFwiam9iVGl0bGVcIixcImpvYl90aXRsZVwiXSkpJiYhIWgoZyhlLFtcIm9yZ2FuaXphdGlvblwiLFwiT3JnYW5pemF0aW9uXCIsXCJjb21wYW55XCIsXCJDb21wYW55XCIsXCJjb21wYW55TmFtZVwiLFwiQ29tcGFueSBOYW1lXCIsXCJFbXBsb3llclwiLFwiRW1wbG95ZXIgTmFtZVwiLFwiRW1wbG95ZXIgbmFtZVwiLFwiZW1wbG95ZXJcIl0pKX19KX1mdW5jdGlvbiBDKGU9W10pe3JldHVybiBlLm1hcChlPT57bGV0IHQ9ZyhlLFtcIlN0YXJ0XCIsXCJTdGFydCBEYXRlXCIsXCJzdGFydERhdGVcIixcInN0YXJ0X2RhdGVcIl0pPz9iKGUsW1wic3RhcnREYXRlXCIsXCJzdGFydF9kYXRlXCJdKSxyPWcoZSxbXCJFbmRcIixcIkVuZCBEYXRlXCIsXCJlbmREYXRlXCIsXCJlbmRfZGF0ZVwiLFwiQ29tcGxldGlvbiBEYXRlXCIsXCJHcmFkdWF0aW9uIERhdGVcIixcImNvbXBsZXRpb25EYXRlXCIsXCJjb21wbGV0aW9uX2RhdGVcIl0pPz9iKGUsW1wiZW5kRGF0ZVwiLFwiZW5kX2RhdGVcIixcImNvbXBsZXRpb25EYXRlXCIsXCJjb21wbGV0aW9uX2RhdGVcIl0pLG49dyh0KSxvPWgocik/dyhyKTp7eWVhcjpcIlwiLHZhbGlkOiEwfSxpPWgoZyhlLFtcInNjaG9vbFwiLFwiU2Nob29sXCIsXCJTY2hvb2wgTmFtZVwiLFwiU2Nob29sIG9yIFVuaXZlcnNpdHlcIixcIlVuaXZlcnNpdHlcIixcIkluc3RpdHV0aW9uXCIsXCJDb2xsZWdlXCIsXCJvcmdhbml6YXRpb25cIl0pKTtyZXR1cm57a2luZDpcImVkdWNhdGlvblwiLHNjaG9vbDppLGRlZ3JlZTpoKGcoZSxbXCJkZWdyZWVcIixcIkRlZ3JlZVwiLFwiRGVncmVlIFR5cGVcIixcImFjY3JlZGl0YXRpb25cIixcIkFjY3JlZGl0YXRpb25cIl0pKSxtYWpvcjpoKGcoZSxbXCJtYWpvclwiLFwiTWFqb3JcIixcInJhd01ham9yXCIsXCJGaWVsZCBvZiBTdHVkeVwiLFwiZGlzY2lwbGluZVwiLFwiRGlzY2lwbGluZVwiLFwiU3R1ZHlcIl0pKSxzdGFydFllYXI6bi55ZWFyLGVuZFllYXI6by55ZWFyLGRlc2NyaXB0aW9uOmgoZyhlLFtcImRlc2NyaXB0aW9uXCIsXCJEZXNjcmlwdGlvblwiLFwiYWN0aXZpdGllc1wiXSkpLHZhbGlkOiEhaSYmbi52YWxpZCYmby52YWxpZCYmKCFvLnllYXJ8fE51bWJlcihuLnllYXIpPD1OdW1iZXIoby55ZWFyKSl9fSl9ZnVuY3Rpb24gQShlKXtyZXR1cm4gZS5ub3JtYWxpemUoXCJORktDXCIpLnRvTG9jYWxlTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxiamFudWFyeVxcYnxcXGJqYW5cXGIvZyxcIjAxXCIpLnJlcGxhY2UoL1xcYmZlYnJ1YXJ5XFxifFxcYmZlYlxcYi9nLFwiMDJcIikucmVwbGFjZSgvXFxibWFyY2hcXGJ8XFxibWFyXFxiL2csXCIwM1wiKS5yZXBsYWNlKC9cXGJhcHJpbFxcYnxcXGJhcHJcXGIvZyxcIjA0XCIpLnJlcGxhY2UoL1xcYm1heVxcYi9nLFwiMDVcIikucmVwbGFjZSgvXFxianVuZVxcYnxcXGJqdW5cXGIvZyxcIjA2XCIpLnJlcGxhY2UoL1xcYmp1bHlcXGJ8XFxianVsXFxiL2csXCIwN1wiKS5yZXBsYWNlKC9cXGJhdWd1c3RcXGJ8XFxiYXVnXFxiL2csXCIwOFwiKS5yZXBsYWNlKC9cXGJzZXB0ZW1iZXJcXGJ8XFxic2VwXFxifFxcYnNlcHRcXGIvZyxcIjA5XCIpLnJlcGxhY2UoL1xcYm9jdG9iZXJcXGJ8XFxib2N0XFxiL2csXCIxMFwiKS5yZXBsYWNlKC9cXGJub3ZlbWJlclxcYnxcXGJub3ZcXGIvZyxcIjExXCIpLnJlcGxhY2UoL1xcYmRlY2VtYmVyXFxifFxcYmRlY1xcYi9nLFwiMTJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl9ZnVuY3Rpb24gayhlKXtyZXR1cm4gaChlLmdldEF0dHJpYnV0ZT8uKFwidGl0bGVcIil8fGUudGV4dHx8ZS50ZXh0Q29udGVudCl9ZnVuY3Rpb24gVChlLHQpe2UudmFsdWU9dCxlLmRpc3BhdGNoRXZlbnQmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBFdmVudCYmKGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwLGNvbXBvc2VkOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMCxjb21wb3NlZDohMH0pKSl9ZnVuY3Rpb24gRihlLHQscixuKXt0cnl7bGV0IG89ZSgpPz90O28udmFsdWUhPT1yJiZUKG8sciksbnVsbD09PW4/by5yZW1vdmVBdHRyaWJ1dGU/LihkKTpvLnNldEF0dHJpYnV0ZT8uKGQsbiksby5kaXNwYXRjaEV2ZW50JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgS2V5Ym9hcmRFdmVudCYmby5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLHtrZXk6XCJFc2NhcGVcIixjb2RlOlwiRXNjYXBlXCIsYnViYmxlczohMCxjb21wb3NlZDohMH0pKSxvLmJsdXI/LigpfWNhdGNoe3RyeXt0LmJsdXI/LigpfWNhdGNoe319fWFzeW5jIGZ1bmN0aW9uIEkoZSx0LHI9e30peygwLG8uY2hlY2twb2ludCkoKTtsZXQgbj1yLnBhdXNlPz9wLGk9ci5pc1ZhbGlkPz8oKCk9PiEwKSxhPWUoKSxsPWE/LnZhbHVlPz9cIlwiO2lmKCFhfHwhQSh0KXx8IWkoKSlyZXR1cm4hMTtsZXQgdT1hLmdldEF0dHJpYnV0ZT8uKGQpPz9udWxsLGM9bnVsbCxmPW51bGw7dHJ5e2EuZm9jdXM/LigpLFQoYSx0KTtsZXQgcj1hLHU9W107Zm9yKGxldCBvPTA7bzxzO28rPTEpe2lmKCFpKCkpcmV0dXJuITE7aWYodT0ocj1lKCk/P3IpLm9wdGlvbnMuZmlsdGVyKGU9PkEoayhlKSk9PT1BKHQpKSwxPT09dS5sZW5ndGgpYnJlYWs7YXdhaXQgbShuKX1pZigxIT09dS5sZW5ndGh8fCFpKCkpe2xldCB0PWUoKT8/cixvPTA7Zm9yKGxldCByPTA7cjxzJiZpKCk7cis9MSl7dC52YWx1ZSE9PWwmJlQodCxsKSxhd2FpdCBtKG4pO2xldCByPWUoKT8/dDtpZihvPXI9PT10JiZyLnZhbHVlPT09bD9vKzE6MCx0PXIsbz49MilicmVha31yZXR1cm4hMX1sZXQgZD11WzBdLmdldEF0dHJpYnV0ZT8uKFwiYXJpYS1zZWxlY3RlZFwiKT09PVwidHJ1ZVwifHx1WzBdLmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1zZWxlY3RlZFwiKT09PVwidHJ1ZVwiLHA9ITE7Zj0oKT0+e3A9ITB9LGM9cixyLmFkZEV2ZW50TGlzdGVuZXI/LihcImlucHV0XCIsZiksci5hZGRFdmVudExpc3RlbmVyPy4oXCJjaGFuZ2VcIixmKSwoMCxvLmNoZWNrcG9pbnQpKCksdVswXS5kaXNwYXRjaEV2ZW50JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgTW91c2VFdmVudCYmKHVbMF0uZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLHtidWJibGVzOiEwLGNvbXBvc2VkOiEwfSkpLHVbMF0uZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNldXBcIix7YnViYmxlczohMCxjb21wb3NlZDohMH0pKSksKDAsby5jaGVja3BvaW50KSgpLHVbMF0uY2xpY2soKTtmb3IobGV0IG89MDtvPHM7bys9MSl7aWYoIWkoKSlyZXR1cm4hMTtyPWUoKT8/cjtsZXQgbz11WzBdLmdldEF0dHJpYnV0ZT8uKFwiYXJpYS1zZWxlY3RlZFwiKT09PVwidHJ1ZVwifHx1WzBdLmdldEF0dHJpYnV0ZT8uKFwiZGF0YS1zZWxlY3RlZFwiKT09PVwidHJ1ZVwiO2lmKChwfHwhZCYmbykmJkEoci52YWx1ZSk9PT1BKHQpJiYwPT09ci5vcHRpb25zLmZpbHRlcihlPT5BKGsoZSkpPT09QSh0KSkubGVuZ3RoKXJldHVybiByLmJsdXI/LigpLCEwO2F3YWl0IG0obil9bGV0IGg9ZSgpPz9yLGc9MDtmb3IobGV0IHQ9MDt0PHMmJmkoKTt0Kz0xKXtoLnZhbHVlIT09bCYmVChoLGwpLGF3YWl0IG0obik7bGV0IHQ9ZSgpPz9oO2lmKGc9dD09PWgmJnQudmFsdWU9PT1sP2crMTowLGg9dCxnPj0yKWJyZWFrfXJldHVybiExfWNhdGNoKHQpe3Rocm93KHQgaW5zdGFuY2VvZiBvLkNhbmNlbGxlZEVycm9yfHx0IGluc3RhbmNlb2Ygby5Ta2lwcGVkRXJyb3IpJiZGKGUsYSxsLHUpLHR9ZmluYWxseXtjJiZmJiYoYy5yZW1vdmVFdmVudExpc3RlbmVyPy4oXCJpbnB1dFwiLGYpLGMucmVtb3ZlRXZlbnRMaXN0ZW5lcj8uKFwiY2hhbmdlXCIsZikpfX1mdW5jdGlvbiBqKGUpe2xldCB0PVtdO2ZvcihsZXQgciBvZiBBcnJheS5mcm9tKGUuY2hpbGRyZW4pKXtsZXQgZT1oKHIuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSksbj1yLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsLCBkdCwgLmxhYmVsLCBbY2xhc3MqPVwibGFiZWxcIl0nKSxvPXIucXVlcnlTZWxlY3RvcignZGQsIC52YWx1ZSwgW2NsYXNzKj1cInZhbHVlXCJdJyksaT1lfHxoKG4/LnRleHRDb250ZW50KSxhPWgobz8udGV4dENvbnRlbnQpOyFhJiZlJiYoYT1oKHIudGV4dENvbnRlbnQpKSwhaSYmbiYmKGk9aChuLnRleHRDb250ZW50KSk7bGV0IGw9aS5tYXRjaCgvXihbXjpdKyk6XFxzKiguKykkLyk7bCYmKCFhfHxBKGEpPT09QShpKSkmJihpPWgobFsxXSksYT1oKGxbMl0pKSxpJiZhJiZ0LnB1c2goe2xhYmVsOmksdmFsdWU6YX0pfXJldHVybiB0fWZ1bmN0aW9uIEQoZSx0KXtsZXQgcj1lLmZpbHRlcigoe2xhYmVsOmV9KT0+dC5zb21lKHQ9PnQudGVzdChQKGUpKSkpO3JldHVybiAxPT09ci5sZW5ndGg/clswXS52YWx1ZTpcIlwifWZ1bmN0aW9uIFAoZSl7cmV0dXJuIGUubm9ybWFsaXplKFwiTkZLQ1wiKS50b0xvY2FsZUxvd2VyQ2FzZSgpLnJlcGxhY2UoL1teXFxwe0x9XFxwe059XSsvZ3UsXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfWZ1bmN0aW9uIF8oZSl7aWYoIWUpcmV0dXJuXCJcIjtsZXQgdD1mLmZpbmQodD0+QSh0KT09PUEoZSkpO3JldHVybiB0fHx2KGUpLm1vbnRofWZ1bmN0aW9uIEwoZSl7cmV0dXJuIGU/dyhlKS55ZWFyOlwiXCJ9ZnVuY3Rpb24gUihlLHQpe2xldCByPUQodCxbL15zdGFydCBkYXRlJC9dKSxuPUQodCxbL15lbmQgZGF0ZSQvLC9eZW5kIGRhdGUgb3IgZXhwZWN0ZWQkL10pLG89RCh0LFsvXmN1cnJlbnRseSBpbiB0aGlzIHJvbGUkLywvXmN1cnJlbnQgcm9sZSQvLC9eY3VycmVudCQvXSk7cmV0dXJue3JvbGU6ZSxvcmdhbml6YXRpb246RCh0LFsvXmNvbXBhbnkkLywvXm9yZ2FuaXphdGlvbiQvLC9eZW1wbG95ZXIkLywvXndvcmskL10pLGxvY2F0aW9uOkQodCxbL15sb2NhdGlvbiQvXSksc3RhcnRNb250aDpfKEQodCxbL15zdGFydCBkYXRlIG1vbnRoJC8sL15zdGFydCBtb250aCQvXSl8fHIpLHN0YXJ0WWVhcjpMKEQodCxbL15zdGFydCBkYXRlIHllYXIkLywvXnN0YXJ0IHllYXIkL10pfHxyKSxlbmRNb250aDpfKEQodCxbL15lbmQgZGF0ZSBtb250aCQvLC9eZW5kIG1vbnRoJC9dKXx8biksZW5kWWVhcjpMKEQodCxbL15lbmQgZGF0ZSB5ZWFyJC8sL15lbmQgZGF0ZSBvciBleHBlY3RlZCB5ZWFyJC8sL15lbmQgeWVhciQvXSl8fG4pLGlzQ3VycmVudDp5KG8pLGRlc2NyaXB0aW9uOkQodCxbL15kZXNjcmlwdGlvbiQvXSl9fWZ1bmN0aW9uIE8oZSx0KXtyZXR1cm57c2Nob29sOmUsZGVncmVlOkQodCxbL15kZWdyZWUkL10pLG1ham9yOkQodCxbL15tYWpvciQvLC9eZmllbGQgb2Ygc3R1ZHkkLywvXmRpc2NpcGxpbmUkL10pLHN0YXJ0WWVhcjpMKEQodCxbL15zdGFydCBkYXRlIHllYXIkLywvXnN0YXJ0IHllYXIkLywvXnN0YXJ0IGRhdGUkL10pKSxlbmRZZWFyOkwoRCh0LFsvXmVuZCBkYXRlIHllYXIkLywvXmVuZCBkYXRlIG9yIGV4cGVjdGVkIHllYXIkLywvXmVuZCB5ZWFyJC8sL15lbmQgZGF0ZSQvXSkpLGRlc2NyaXB0aW9uOkQodCxbL15kZXNjcmlwdGlvbiQvXSl9fWZ1bmN0aW9uIE0oZSx0PWRvY3VtZW50KXtpZigoMCxsLmdldENhcmVlckh1YkFjdGl2ZVN0ZXApKHQpIT09ZSlyZXR1cm5bXTtsZXQgcj1bXTtmb3IobGV0IG4gb2YgQXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoYykpKXtpZighRyhuKSljb250aW51ZTtsZXQgdD1uLnF1ZXJ5U2VsZWN0b3IoXCIuaW5mby1jYXJkLmluZm9DYXJkLTNQSEE1XCIpPz9uLnF1ZXJ5U2VsZWN0b3IoXCIuaW5mby1jYXJkLWNvbnRhaW5lclwiKT8/bi5xdWVyeVNlbGVjdG9yKFwiLmluZm8tY2FyZFwiKTtpZighRyh0KSljb250aW51ZTtsZXQgbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnF1ZXJ5U2VsZWN0b3JBbGw/QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvblthcmlhLWxhYmVsXj1cIkVkaXQgXCJdJykpOltdLGk9by5maWx0ZXIoRyksYT1BcnJheS5mcm9tKG5ldyBTZXQoaS5tYXAoZT0+ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpPz9cIlwiKS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiRWRpdCBcIikpLm1hcChlPT5oKGUuc2xpY2UoNSkpKS5maWx0ZXIoQm9vbGVhbikpKTtpZigxIT09YS5sZW5ndGgpY29udGludWU7bGV0IGw9YVswXTtpZighbCljb250aW51ZTtsZXQgcz10LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlsc1wiKTtpZighRyhzKSljb250aW51ZTtsZXQgdT1cImV4cGVyaWVuY2VcIj09PWU/UihsLGoocykpOk8obCxqKHMpKTtyLnB1c2goe2tpbmQ6ZSxpZGVudGl0eTpsLG9yZ2FuaXphdGlvbjpcImVkdWNhdGlvblwiPT09ZT9sOnUub3JnYW5pemF0aW9uLGZpZWxkczp1LGNhcmQ6dH0pfXJldHVybiByfWZ1bmN0aW9uIE4oZSl7cmV0dXJuXCJleHBlcmllbmNlXCI9PT1lLmtpbmQ/ZS5yb2xlOmUuc2Nob29sfWZ1bmN0aW9uICQoZSl7cmV0dXJuXCJleHBlcmllbmNlXCI9PT1lLmtpbmQ/ZS5vcmdhbml6YXRpb246ZS5zY2hvb2x9ZnVuY3Rpb24gQihlLHQpe3JldHVybiBBKGUuaWRlbnRpdHkpPT09QShOKHQpKSYmQShlLm9yZ2FuaXphdGlvbik9PT1BKCQodCkpfWZ1bmN0aW9uIHEoZSx0KXtyZXR1cm4hdHx8QShoKGUpKT09PUEodCl9ZnVuY3Rpb24gVShlLHQpe2lmKCFCKGUsdCkpcmV0dXJuITE7aWYoXCJleHBlcmllbmNlXCI9PT10LmtpbmQpe2lmKFwiZXhwZXJpZW5jZVwiIT09ZS5raW5kKXJldHVybiExO2xldCByPWUuZmllbGRzO3JldHVybiBxKHIucm9sZSx0LnJvbGUpJiZxKHIub3JnYW5pemF0aW9uLHQub3JnYW5pemF0aW9uKSYmcShyLmxvY2F0aW9uLHQubG9jYXRpb24pJiZxKHIuc3RhcnRNb250aCx0LnN0YXJ0TW9udGgpJiZxKHIuc3RhcnRZZWFyLHQuc3RhcnRZZWFyKSYmci5pc0N1cnJlbnQ9PT10LmlzQ3VycmVudCYmcShyLmRlc2NyaXB0aW9uLHQuZGVzY3JpcHRpb24pJiYodC5pc0N1cnJlbnR8fHEoci5lbmRNb250aCx0LmVuZE1vbnRoKSYmcShyLmVuZFllYXIsdC5lbmRZZWFyKSl9aWYoXCJlZHVjYXRpb25cIiE9PWUua2luZClyZXR1cm4hMTtsZXQgcj1lLmZpZWxkcztyZXR1cm4gcShyLnNjaG9vbCx0LnNjaG9vbCkmJnEoci5kZWdyZWUsdC5kZWdyZWUpJiZxKHIubWFqb3IsdC5tYWpvcikmJnEoci5zdGFydFllYXIsdC5zdGFydFllYXIpJiZxKHIuZW5kWWVhcix0LmVuZFllYXIpJiZxKHIuZGVzY3JpcHRpb24sdC5kZXNjcmlwdGlvbil9ZnVuY3Rpb24gSChlLHQpe3JldHVybiBlLmdldFN0ZXAoKT09PXR9YXN5bmMgZnVuY3Rpb24gWShlKXsoMCxvLmNoZWNrcG9pbnQpKCk7bGV0IHQ9YXdhaXQgZSgpO3JldHVybigwLG8uY2hlY2twb2ludCkoKSx0fWFzeW5jIGZ1bmN0aW9uIHooZSx0LHIpe2xldCBuPVtbXCJyb2xlXCIsdC5yb2xlXSxbXCJvcmdhbml6YXRpb25cIix0Lm9yZ2FuaXphdGlvbl0sW1wic3RhcnRNb250aFwiLHQuc3RhcnRNb250aF0sW1wic3RhcnRZZWFyXCIsdC5zdGFydFllYXJdXTtmb3IobGV0W3Qsb11vZiBuKXtpZighSChlLHIpKXJldHVybiExO2xldCBuPWF3YWl0IFkoKCk9PmUuZmlsbEV4YWN0KHQsbykpO2lmKCFufHwhSChlLHIpKXJldHVybiExfWlmKHQubG9jYXRpb24mJkgoZSxyKSYmYXdhaXQgWSgoKT0+ZS5maWxsRXhhY3QoXCJsb2NhdGlvblwiLHQubG9jYXRpb24pKSx0LmRlc2NyaXB0aW9uJiZIKGUscikmJmF3YWl0IFkoKCk9PmUuZmlsbFRleHQoXCJkZXNjcmlwdGlvblwiLHQuZGVzY3JpcHRpb24pKSwhSChlLHIpfHwhYXdhaXQgWSgoKT0+ZS5zZXRDaGVja2JveChcImlzQ3VycmVudFwiLHQuaXNDdXJyZW50KSl8fCFIKGUscikpcmV0dXJuITE7aWYoIXQuaXNDdXJyZW50KXtpZih0LmVuZE1vbnRoJiZhd2FpdCBZKCgpPT5lLmZpbGxFeGFjdChcImVuZE1vbnRoXCIsdC5lbmRNb250aCkpLCFIKGUscikpcmV0dXJuITE7dC5lbmRZZWFyJiZhd2FpdCBZKCgpPT5lLmZpbGxFeGFjdChcImVuZFllYXJcIix0LmVuZFllYXIpKX1yZXR1cm4gSChlLHIpfWFzeW5jIGZ1bmN0aW9uIFYoZSx0LHIpe3JldHVybiEhKGF3YWl0IFkoKCk9PmUuZmlsbEV4YWN0KFwic2Nob29sXCIsdC5zY2hvb2wpKSYmSChlLHIpJiZhd2FpdCBZKCgpPT5lLmZpbGxFeGFjdChcInN0YXJ0WWVhclwiLHQuc3RhcnRZZWFyKSkmJkgoZSxyKSkmJih0LmRlZ3JlZSYmYXdhaXQgWSgoKT0+ZS5maWxsRXhhY3QoXCJkZWdyZWVcIix0LmRlZ3JlZSkpLCEhSChlLHIpJiYodC5tYWpvciYmYXdhaXQgWSgoKT0+ZS5maWxsRXhhY3QoXCJtYWpvclwiLHQubWFqb3IpKSwhIUgoZSxyKSYmKHQuZW5kWWVhciYmYXdhaXQgWSgoKT0+ZS5maWxsRXhhY3QoXCJlbmRZZWFyXCIsdC5lbmRZZWFyKSksISFIKGUscikmJih0LmRlc2NyaXB0aW9uJiZhd2FpdCBZKCgpPT5lLmZpbGxUZXh0KFwiZGVzY3JpcHRpb25cIix0LmRlc2NyaXB0aW9uKSksSChlLHIpKSkpKX1hc3luYyBmdW5jdGlvbiBXKGUsdCxyPXt9KXtsZXQgbj1yLnJvb3Q/PyhcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQ/ZG9jdW1lbnQ6e30pLGw9ci5ydW50aW1lPz9ldChuLHIucGF1c2UpLHM9ZSx1PVwiZXhwZXJpZW5jZVwiPT09ZT94KHQpOkModCksYz1bXSxkPXIuc2VjdGlvblJlcG9ydGVyLGY9W10scD1cImV4cGVyaWVuY2VcIj09PWU/XCJlbXBsb3ltZW50XCI6XCJlZHVjYXRpb25cIixtPXtyb2xlOlwiUm9sZSAvIEpvYiBUaXRsZVwiLG9yZ2FuaXphdGlvbjpcIkNvbXBhbnlcIixsb2NhdGlvbjpcIkxvY2F0aW9uXCIsc2Nob29sOlwiU2Nob29sXCIsZGVncmVlOlwiRGVncmVlXCIsbWFqb3I6XCJNYWpvclwiLGRlc2NyaXB0aW9uOlwiRGVzY3JpcHRpb25cIixzdGFydE1vbnRoOlwiU3RhcnQgTW9udGhcIixzdGFydFllYXI6XCJTdGFydCBZZWFyXCIsZW5kTW9udGg6XCJFbmQgTW9udGhcIixlbmRZZWFyOlwiRW5kIFllYXJcIixpc0N1cnJlbnQ6XCJDdXJyZW50bHkgaW4gdGhpcyByb2xlXCJ9O2ZvcihsZXRbdCxyXW9mIHUuZW50cmllcygpKXtsZXQgbj1kPy5lbnN1cmVSb3codCx7Li4uciwuLi5cImVkdWNhdGlvblwiPT09ci5raW5kP3tTY2hvb2w6ci5zY2hvb2x9OntDb21wYW55OnIub3JnYW5pemF0aW9ufX0pLHU9T2JqZWN0LmVudHJpZXMocikuZmlsdGVyKChbZSx0XSk9Pm1bZV0mJihcImJvb2xlYW5cIj09dHlwZW9mIHR8fCEhdCkpLGg9ZD91Lm1hcCgoW2VdKT0+KHtsYWJlbDptW2VdLHR5cGU6YS5GSUVMRF9UWVBFLlRFWFR9KSk6W10sZz0ocixuKT0+e2QmJihmW3RdPXt0eXBlOlwiZXhwZXJpZW5jZVwiPT09ZT9hLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVDphLkZJRUxEX1RZUEUuRURVQ0FUSU9OLGxhYmVsOlwiZXhwZXJpZW5jZVwiPT09ZT9cIkV4cGVyaWVuY2VcIjpcIkVkdWNhdGlvblwiLCRpbnB1dDpuLGNoaWxkcmVuOmgubWFwKChlLHQpPT4oey4uLmUsJGlucHV0OnI/bC5nZXRGaWVsZFRhcmdldD8uKHVbdF1bMF0pOnZvaWQgMH0pKX0sKDAsaS5zZXRTZWN0aW9uUmVzdWx0Rm9jdXNSdWxlcykocCxmKSl9LGI9KGUsdCk9PntpZihkJiZuKXtmb3IobGV0IHQgb2Ygbi5maWVsZHMpZC51cGRhdGVGaWVsZChuLHQubGFiZWwsdC52YWx1ZSxcInNraXBwZWRcIj09PXQuc3RhdHVzP1wic2tpcHBlZFwiOmU/XCJwZW5kaW5nXCI9PT10LnN0YXR1cz9cImZpbGxlZFwiOnQuc3RhdHVzOlwibWlzc2VkXCIpO2coITEsdCksZC5lbWl0KCl9fTtpZihkJiZuKXtmb3IobGV0W2UsdF1vZiB1KWQudXBkYXRlRmllbGQobixtW2VdLFN0cmluZyh0KSxcInBlbmRpbmdcIik7ZC5lbWl0KCl9bGV0IHk9YXN5bmMoZSx0LHIpPT57dHJ5e2xldCBvPWF3YWl0IHIoKTtyZXR1cm4gZCYmbiYmKGQudXBkYXRlRmllbGQobixtW2VdPz9lLFN0cmluZyh0KSxvP1wiZmlsbGVkXCI6XCJtaXNzZWRcIiksZyghMCksZC5lbWl0KCkpLG99Y2F0Y2gocil7dGhyb3cgZCYmbiYmKGQudXBkYXRlRmllbGQobixtW2VdPz9lLFN0cmluZyh0KSxyIGluc3RhbmNlb2Ygby5Ta2lwcGVkRXJyb3I/XCJza2lwcGVkXCI6XCJtaXNzZWRcIiksZC5lbWl0KCkpLHJ9fSx2PWQ/ey4uLmwsZ2V0U3RlcDooKT0+bC5nZXRTdGVwKCksZmlsbFRleHQ6KGUsdCk9PnkoZSx0LCgpPT5sLmZpbGxUZXh0KGUsdCkpLGZpbGxFeGFjdDooZSx0KT0+eShlLHQsKCk9PmwuZmlsbEV4YWN0KGUsdCkpLHNldENoZWNrYm94OihlLHQpPT55KGUsdCwoKT0+bC5zZXRDaGVja2JveChlLHQpKX06bDtpZighci52YWxpZCl7Yy5wdXNoKHtjb21taXR0ZWQ6ITEsbW9kZTpcImludmFsaWRcIn0pLGIoITEpO2NvbnRpbnVlfWlmKGwuZ2V0U3RlcCgpIT09cyl7Yy5wdXNoKHtjb21taXR0ZWQ6ITEsbW9kZTpcImFib3J0ZWRcIn0pLGIoITEpO2NvbnRpbnVlfWxldCB3PWwuZ2V0U25hcHNob3RzKGUpLFM9dy5maW5kKGU9PlUoZSxyKSk7aWYoUyl7Yy5wdXNoKHtjb21taXR0ZWQ6ITAsbW9kZTpcImV4aXN0aW5nXCJ9KSxiKCEwLFMuY2FyZCk7Y29udGludWV9bGV0IEU9dy5maWx0ZXIoZT0+QihlLHIpKSx4PTE9PT1FLmxlbmd0aD9cImVkaXRcIjpcImFkZFwiLEM9MT09PUUubGVuZ3RoP0VbMF06dm9pZCAwLEE9ITEsaz0hMSxUPWMubGVuZ3RoO3RyeXtpZighKEE9YXdhaXQgWSgoKT0+KGs9ITAsbC5iZWdpbihyLHgsQykpKSkpe2MucHVzaCh7Y29tbWl0dGVkOiExLG1vZGU6eH0pO2NvbnRpbnVlfWlmKGcoITApLGwuZ2V0U3RlcCgpIT09cyl7Yy5wdXNoKHtjb21taXR0ZWQ6ITEsbW9kZTpcImFib3J0ZWRcIn0pO2NvbnRpbnVlfWxldCBlPVwiZXhwZXJpZW5jZVwiPT09ci5raW5kP2F3YWl0IHoodixyLHMpOmF3YWl0IFYodixyLHMpO2lmKCFlfHxsLmdldFN0ZXAoKSE9PXMpe2MucHVzaCh7Y29tbWl0dGVkOiExLG1vZGU6bC5nZXRTdGVwKCk9PT1zP3g6XCJhYm9ydGVkXCJ9KTtjb250aW51ZX1jLnB1c2goe2NvbW1pdHRlZDphd2FpdCBZKCgpPT5sLnNhdmUocikpLG1vZGU6eH0pfWNhdGNoKGUpe2lmKGsmJihlIGluc3RhbmNlb2Ygby5DYW5jZWxsZWRFcnJvcnx8ZSBpbnN0YW5jZW9mIG8uU2tpcHBlZEVycm9yKSl0cnl7YXdhaXQgbC5jbGVhbnVwSW50ZXJydXB0ZWRSdW4/LihyLHgsQyl9Y2F0Y2h7fXRocm93IGV9ZmluYWxseXtsZXQgdD1jLmxlbmd0aD5UJiZjW2MubGVuZ3RoLTFdLmNvbW1pdHRlZCxuPWQmJnQ/bC5nZXRTbmFwc2hvdHMoZSkuZmluZChlPT5VKGUscikpPy5jYXJkOnZvaWQgMDtiKHQsbil9fXJldHVybiBjfWZ1bmN0aW9uIEcoZSl7cmV0dXJuISEoZT8uaXNDb25uZWN0ZWQmJiFlLmhpZGRlbiYmXCJ0cnVlXCIhPT1lLmdldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpJiYoIWUuZ2V0Q2xpZW50UmVjdHN8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg+MCkpfWZ1bmN0aW9uIEsoZSx0KXtsZXQgcj1oKGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSk7aWYocilyZXR1cm4gcjtsZXQgbj1lLmdldEF0dHJpYnV0ZShcImlkXCIpO2lmKG4pe2ZvcihsZXQgZSBvZiBBcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcImxhYmVsXCIpKSlpZihlLmdldEF0dHJpYnV0ZShcImZvclwiKT09PW4pcmV0dXJuIGgoZS50ZXh0Q29udGVudCl9cmV0dXJuIGgoZS5jbG9zZXN0KFwibGFiZWxcIik/LnRleHRDb250ZW50KX1mdW5jdGlvbiBYKGUsdCl7bGV0IHI9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpLmZpbHRlcihHKS5maWx0ZXIoZT0+e2xldCByPWgoZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpKXx8aChlLnRleHRDb250ZW50KTtyZXR1cm4gQShyKT09PUEodCl9KTtyZXR1cm4gMT09PXIubGVuZ3RoP3JbMF06bnVsbH1mdW5jdGlvbiBKKGUpe3JldHVybiBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChjKSkuc29tZShlPT57aWYoIUcoZSkpcmV0dXJuITE7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiLmluZm8tY2FyZC5pbmZvQ2FyZC0zUEhBNVwiKT8/ZS5xdWVyeVNlbGVjdG9yKFwiLmluZm8tY2FyZC1jb250YWluZXJcIik/P2UucXVlcnlTZWxlY3RvcihcIi5pbmZvLWNhcmRcIik7cmV0dXJuISFHKHQpJiZBcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uW2FyaWEtbGFiZWxePVwiRWRpdCBcIl0nKSkuZmlsdGVyKEcpLmxlbmd0aD4xfSl9ZnVuY3Rpb24gUShlLHQpe2xldCByPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBIVE1MSW5wdXRFbGVtZW50JiZlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudD9IVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZTpcInVuZGVmaW5lZFwiIT10eXBlb2YgSFRNTFRleHRBcmVhRWxlbWVudD9IVE1MVGV4dEFyZWFFbGVtZW50LnByb3RvdHlwZTpudWxsLG49cj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsXCJ2YWx1ZVwiKT8uc2V0OnZvaWQgMDtuP24uY2FsbChlLHQpOmUudmFsdWU9dH1mdW5jdGlvbiBaKGUsdCl7UShlLHQpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwLGNvbXBvc2VkOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMCxjb21wb3NlZDohMH0pKX1mdW5jdGlvbiBlZShlLHQpe3JldHVybiBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcIltpZF1cIikpLmZpbmQoZT0+ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PXQpPz9udWxsfWZ1bmN0aW9uIGV0KGUsdD1wKXtsZXQgcixuPW51bGwsbz1udWxsLGk9bnVsbCxhPSExLHU9bnVsbCxjPW5ldyBNYXAsZj0oKT0+ISFuJiYoMCxsLmdldENhcmVlckh1YkFjdGl2ZVN0ZXApKGUpPT09bixnPSgpPT57aWYoIWYoKXx8IW8pcmV0dXJuIG51bGw7bGV0IHQ9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoYCMke299YCkpLmZpbHRlcihHKS5tYXAoZT0+ZS5jbG9zZXN0KCdmb3JtLCBbcm9sZT1cImRpYWxvZ1wiXSwgLmZpZWxkQ29udGFpbmVyLTNhSm8wJyk/P2UucGFyZW50RWxlbWVudCkuZmlsdGVyKGU9PkcoZSkpO3JldHVybiAxPT09dC5sZW5ndGg/dFswXTpudWxsfSxiPWU9PntsZXQgdD1nKCk7aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9e3JvbGU6XCJ0aXRsZVwiLG9yZ2FuaXphdGlvbjpcIndvcmtcIixsb2NhdGlvbjpcImxvY2F0aW9uXCIsc2Nob29sOlwic2Nob29sXCIsZGVncmVlOlwiZGVncmVlXCIsbWFqb3I6XCJtYWpvclwifTtpZihyW2VdKXtsZXQgbj10LnF1ZXJ5U2VsZWN0b3IoYCMke3JbZV19YCk7cmV0dXJuIEcobik/bjpudWxsfWxldCBuPXtzdGFydE1vbnRoOltcIlN0YXJ0IGRhdGUsIE1vbnRoXCJdLHN0YXJ0WWVhcjpbXCJTdGFydCBkYXRlLCBZZWFyXCJdLGVuZE1vbnRoOltcIkVuZCBkYXRlLCBNb250aFwiXSxlbmRZZWFyOltcIkVuZCBkYXRlLCBZZWFyXCIsXCJFbmQgZGF0ZSAob3IgZXhwZWN0ZWQpLCBZZWFyXCJdfSxvPW5bZV0/P1tdLGk9QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3JvbGU9XCJjb21ib2JveFwiXScpKS5maWx0ZXIoRykuZmlsdGVyKGU9Pm8uc29tZShyPT5BKEsoZSx0KSk9PT1BKHIpKSk7cmV0dXJuIDE9PT1pLmxlbmd0aD9pWzBdOm51bGx9LHk9dD0+e2xldCByPWIodCk7aWYoIXIpcmV0dXJuIG51bGw7bGV0IG49e3JvbGU6XCJzZWFyY2gtcmVzdWx0cy10aXRsZVwiLG9yZ2FuaXphdGlvbjpcInNlYXJjaC1yZXN1bHRzLXdvcmtcIixsb2NhdGlvbjpcInNlYXJjaC1yZXN1bHRzLWxvY2F0aW9uXCIsc2Nob29sOlwic2VhcmNoLXJlc3VsdHMtc2Nob29sXCJ9LG89aChyLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIikpO2lmKCFvfHwvXFxzLy50ZXN0KG8pfHxuW3RdJiZvIT09blt0XSlyZXR1cm4gbnVsbDtsZXQgaT1lZShlLG8pLGE9RyhpKT9BcnJheS5mcm9tKGkucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJvcHRpb25cIl0nKSk6W107cmV0dXJue2dldCB2YWx1ZSgpe3JldHVybiByLnZhbHVlfSxzZXQgdmFsdWUodmFsdWUpe1Eocix2YWx1ZSl9LG9wdGlvbnM6YSxnZXRBdHRyaWJ1dGU6ZT0+ci5nZXRBdHRyaWJ1dGUoZSksc2V0QXR0cmlidXRlOihlLHQpPT5yLnNldEF0dHJpYnV0ZShlLHQpLHJlbW92ZUF0dHJpYnV0ZTplPT5yLnJlbW92ZUF0dHJpYnV0ZShlKSxmb2N1czooKT0+ci5mb2N1cygpLGJsdXI6KCk9PnIuYmx1cigpLGRpc3BhdGNoRXZlbnQ6ZT0+ci5kaXNwYXRjaEV2ZW50KGUpLGFkZEV2ZW50TGlzdGVuZXI6KGUsdCk9PnIuYWRkRXZlbnRMaXN0ZW5lcihlLHQpLHJlbW92ZUV2ZW50TGlzdGVuZXI6KGUsdCk9PnIucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLHQpfX0sdj0oZSx0KT0+eyF0fHxjLmhhcyhlKXx8Yy5zZXQoZSx7Y29udHJvbDp0LHZhbHVlOnQudmFsdWUsY2hlY2tlZDpcInVuZGVmaW5lZFwiIT10eXBlb2YgSFRNTElucHV0RWxlbWVudCYmdCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJlwiY2hlY2tib3hcIj09PXQudHlwZT90LmNoZWNrZWQ6dm9pZCAwLG1hcmtlcjp0LmdldEF0dHJpYnV0ZShkKX0pfSx3PWU9PkFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHRleHRhcmVhXCIpKS5ldmVyeShlPT5lIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCYmXCJjaGVja2JveFwiPT09ZS50eXBlPyFlLmNoZWNrZWQ6IWUudmFsdWUpLFM9ZT0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBLZXlib2FyZEV2ZW50JiZlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2tleTpcIkVzY2FwZVwiLGNvZGU6XCJFc2NhcGVcIixidWJibGVzOiEwLGNvbXBvc2VkOiEwfSkpLGUuYmx1cigpfTtyZXR1cm57Z2V0U3RlcDooKT0+KDAsbC5nZXRDYXJlZXJIdWJBY3RpdmVTdGVwKShlKSxnZXRTbmFwc2hvdHM6dD0+TSh0LGUpLGdldEZpZWxkVGFyZ2V0KGUpe2lmKFwiZGVzY3JpcHRpb25cIj09PWUpcmV0dXJuIGcoKT8ucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKT8/bnVsbDtpZihcImlzQ3VycmVudFwiPT09ZSl7bGV0IGU9QXJyYXkuZnJvbShnKCk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpPz9bXSkuZmlsdGVyKEcpLmZpbHRlcihlPT5cImlzQ3VycmVudFwiPT09ZS52YWx1ZXx8QShLKGUsZygpKSk9PT1BKFwiQ3VycmVudGx5IGluIHRoaXMgcm9sZVwiKSk7cmV0dXJuIDE9PT1lLmxlbmd0aD9lWzBdOm51bGx9cmV0dXJuIGIoZSl9LGFzeW5jIGJlZ2luKGwsZCxwKXtpZihuPWwua2luZCxvPVwiZXhwZXJpZW5jZVwiPT09bC5raW5kP1widGl0bGVcIjpcInNjaG9vbFwiLHI9cCxpPW51bGwsYT0hMSx1PW51bGwsYy5jbGVhcigpLCFmKCl8fFwiYWRkXCI9PT1kJiZKKGUpKXJldHVybiExO2xldCBoPWcoKSxiPVwiZWRpdFwiPT09ZCYmcD8uY2FyZD9YKHAuY2FyZCxgRWRpdCAke04obCl9YCk6WChlLFwiZXhwZXJpZW5jZVwiPT09bC5raW5kP1wiQWRkIGV4cGVyaWVuY2VcIjpcIkFkZCBFZHVjYXRpb25cIik7aWYoIWIpcmV0dXJuITE7dT17bW9kZTpkLGVkaXRvckJlZm9yZTpofSxiLmNsaWNrKCk7Zm9yKGxldCBlPTA7ZTxzJiZmKCk7ZSs9MSl7bGV0IGU9ZygpO2lmKGUpcmV0dXJuIGk9ZSxhPVwiYWRkXCI9PT1kJiZlIT09aCYmdyhlKSwhMDthd2FpdCBtKHQpfXJldHVybiExfSxhc3luYyBmaWxsVGV4dChlLHQpe2xldCByPWcoKTtpZighcnx8IWYoKSlyZXR1cm4hMTtsZXQgbj1cImRlc2NyaXB0aW9uXCI9PT1lP3IucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTpudWxsO2lmKCFHKG4pKXJldHVybiExO3YoZSxuKSxaKG4sdCk7bGV0IG89ZygpPy5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO3JldHVybiEhbyYmZigpJiZvLnZhbHVlPT09dH0sZmlsbEV4YWN0OmFzeW5jKGUscik9Pih2KGUsYihlKSksSSgoKT0+eShlKSxyLHtwYXVzZTp0LGlzVmFsaWQ6Zn0pKSxhc3luYyBzZXRDaGVja2JveChlLHQpe2lmKFwiaXNDdXJyZW50XCIhPT1lKXJldHVybiExO2xldCByPWcoKTtpZighcnx8IWYoKSlyZXR1cm4hMTtsZXQgbj1BcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykpLmZpbHRlcihHKS5maWx0ZXIoZT0+XCJpc0N1cnJlbnRcIj09PWUudmFsdWV8fEEoSyhlLHIpKT09PUEoXCJDdXJyZW50bHkgaW4gdGhpcyByb2xlXCIpKTtpZigxIT09bi5sZW5ndGgpcmV0dXJuITE7dihlLG5bMF0pLG5bMF0uY2hlY2tlZCE9PXQmJm5bMF0uY2xpY2soKTtsZXQgbz1nKCksaT1vP0FycmF5LmZyb20oby5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSkuZmlsdGVyKGU9PlwiaXNDdXJyZW50XCI9PT1lLnZhbHVlfHxBKEsoZSxvKSk9PT1BKFwiQ3VycmVudGx5IGluIHRoaXMgcm9sZVwiKSk6W107cmV0dXJuIDE9PT1pLmxlbmd0aCYmaVswXS5jaGVja2VkPT09dCYmZigpfSxhc3luYyBzYXZlKG4pe2xldCBvPWcoKTtpZighb3x8IWYoKSlyZXR1cm4hMTtsZXQgaT1OKG4pLGE9XCJlZHVjYXRpb25cIj09PW4ua2luZD9bXCJTYXZlIFNjaG9vbFwiXTpyP1tgU2F2ZSAke2l9YF06W1wiU2F2ZSBSb2xlIC8gSm9iIFRpdGxlXCJdLGw9YS5tYXAoZT0+WChvLGUpKS5maWx0ZXIoZT0+ISFlKSx1PUFycmF5LmZyb20obmV3IFNldChsKSk7aWYoMSE9PXUubGVuZ3RoKXJldHVybiExO3VbMF0uY2xpY2soKTtmb3IobGV0IHI9MDtyPHMmJmYoKTtyKz0xKXtsZXQgcj0hZygpLG89TShuLmtpbmQsZSkuc29tZShlPT5VKGUsbikpO2lmKHImJm8pcmV0dXJuITA7YXdhaXQgbSh0KX1yZXR1cm4hMX0sY2xlYW51cEludGVycnVwdGVkUnVuKGUsdCl7bGV0IHI9aT8uaXNDb25uZWN0ZWQ/aTpnKCk7Zm9yKGxldFtlLHRdb2YgYyl0cnl7bGV0IG49XCJkZXNjcmlwdGlvblwiPT09ZT9yPy5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpOlwiaXNDdXJyZW50XCI9PT1lP3I/LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXVt2YWx1ZT1cImlzQ3VycmVudFwiXScpOmIoZSksbz1HKG4/P251bGwpP246dC5jb250cm9sO3ZvaWQgMCE9PXQuY2hlY2tlZCYmbyBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQ/by5jaGVja2VkIT09dC5jaGVja2VkJiZvLmNsaWNrKCk6by52YWx1ZSE9PXQudmFsdWUmJloobyx0LnZhbHVlKSxudWxsPT09dC5tYXJrZXI/by5yZW1vdmVBdHRyaWJ1dGUoZCk6by5zZXRBdHRyaWJ1dGUoZCx0Lm1hcmtlciksUyhvKX1jYXRjaHt9bGV0IG49ISEoXCJhZGRcIj09PXQmJnU/Lm1vZGU9PT1cImFkZFwiJiZyJiZyIT09dS5lZGl0b3JCZWZvcmUmJncocikpO2lmKFwiYWRkXCI9PT10JiZyJiYoYXx8bikpe2xldCB0PVgocixcImV4cGVyaWVuY2VcIj09PWUua2luZD9cIkRlbGV0ZSBSb2xlIC8gSm9iIFRpdGxlXCI6XCJEZWxldGUgU2Nob29sXCIpO3Q/LmNsaWNrKCl9fX19XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJyZWNvcmRzLmFhNmZmNDdkLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);