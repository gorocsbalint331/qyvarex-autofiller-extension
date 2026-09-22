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
})({"f144D":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\rippling\\rules.js",
    "bundleId": "538dbad3776d4511",
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
var j = z(require("403f9a74120483de"));
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

},{"403f9a74120483de":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"fO006":[function(require,module,exports) {
/**
 * Parcel module id: aNlNp
 * Resolved path: src/contents/sites/rippling/rules.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "extractRules", ()=>l), n.export(r, "getRipplingRuleForTests", ()=>y), n.export(r, "buildRipplingPhoneRulesForTests", ()=>v), n.export(r, "getRipplingPhoneCountryCodeValueForTests", ()=>w), n.export(r, "getRipplingPhoneSnapshotForTests", ()=>x), n.export(r, "buildRipplingPhoneSnapshotForTests", ()=>C), n.export(r, "getFormSnapshot", ()=>T), n.export(r, "resolveRipplingRadioSnapshotLabel", ()=>j), n.export(r, "getEduSnapshot", ()=>_), n.export(r, "getEmploymentSnapshot", ()=>L), n.export(r, "getEduAndEmploymentSnapshot", ()=>R);
var o = e("~core/enums"), i = e("~core/xpath"), a = e("~utils/delay");
async function l() {
    let e1 = window.location.hostname;
    return e1.includes("rippling-ats") ? d() : s();
}
async function s() {
    let e1 = [], t = (0, i.getOrderedNodesSafe)('//*[@data-testid="field"]');
    for (let r1 of t){
        let t = await p(r1);
        t && (Array.isArray(t) ? e1.push(...t) : e1.push(t));
    }
    return e1;
}
function u(e1) {
    let t = Array.from(document.querySelectorAll("h3")), r1 = t.find((e1)=>e1.textContent?.trim() === "Employment History"), n = Array.from(document.querySelectorAll("button")).find((e1)=>{
        let t = e1.textContent?.trim() || "";
        return t.includes("Add Another Position");
    });
    if (!r1 || !n) return !1;
    let o = r1.compareDocumentPosition(e1), i = (o & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
    if (!i) return !1;
    let a = e1.compareDocumentPosition(n), l = (a & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
    return !!l;
}
function c(e1) {
    let t = Array.from(document.querySelectorAll("h3")), r1 = t.find((e1)=>e1.textContent?.trim() === "Education"), n = Array.from(document.querySelectorAll("button")).find((e1)=>{
        let t = e1.textContent?.trim() || "";
        return t.includes("Add More Education History");
    });
    if (!r1 || !n) return !1;
    let o = r1.compareDocumentPosition(e1), i = (o & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
    if (!i) return !1;
    let a = e1.compareDocumentPosition(n), l = (a & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
    return !!l;
}
async function d() {
    let e1 = [], t = new Set, r1 = [], n = [], i = document.querySelector("form#job-application-form");
    if (!i) return e1;
    let a = Array.from(i.querySelectorAll("label[for]"));
    for (let o of a){
        let i = o.getAttribute("for");
        if (!i) continue;
        let a = document.getElementById(i);
        if (!a) continue;
        o.textContent?.trim();
        let l = u(a), s = c(a);
        if (l) {
            let e1 = await f(o, a);
            if (e1) {
                let r1 = `${e1.type}:${e1.label}`;
                t.has(r1) || (t.add(r1), n.push(e1));
            }
            continue;
        }
        if (s) {
            let e1 = await f(o, a);
            if (e1) {
                let n = `${e1.type}:${e1.label}`;
                t.has(n) || (t.add(n), r1.push(e1));
            }
            continue;
        }
        let d = await f(o, a);
        if (d) {
            let r1 = `${d.type}:${d.label}`;
            t.has(r1) || (t.add(r1), e1.push(d));
        }
    }
    let l = Array.from(i.querySelectorAll(".yesno-field-container, .form-field-container"));
    for (let o of l){
        let i = o.querySelector(".form-field-label, .yesno-field-label");
        if (!i) continue;
        let a = o.querySelector(".yesno-radios, .multi-option-container");
        if (!a) continue;
        let l = Array.from(a.querySelectorAll('input[type="radio"]'));
        if (0 === l.length) continue;
        i.textContent?.trim();
        let s = u(o), d = c(o);
        if (s) {
            let e1 = await k(i, a, l);
            if (e1) {
                let r1 = `${e1.type}:${e1.label}`;
                t.has(r1) || (t.add(r1), n.push(e1));
            }
            continue;
        }
        if (d) {
            let e1 = await k(i, a, l);
            if (e1) {
                let n = `${e1.type}:${e1.label}`;
                t.has(n) || (t.add(n), r1.push(e1));
            }
            continue;
        }
        let f = await k(i, a, l);
        if (f) {
            let r1 = `${f.type}:${f.label}`;
            t.has(r1) || (t.add(r1), e1.push(f));
        }
    }
    if (n.length > 0) {
        let t = {
            type: o.FIELD_TYPE.EMPLOYMENT,
            label: "employment",
            children: n,
            options: [
                ...n.map((e1)=>({
                        type: e1.type,
                        label: e1.label,
                        options: e1.options
                    }))
            ],
            required: !1
        };
        e1.push(t);
    }
    if (r1.length > 0) {
        let t = {
            type: o.FIELD_TYPE.EDUCATION,
            label: "Education",
            children: r1,
            options: [
                ...r1.map((e1)=>({
                        type: e1.type,
                        label: e1.label,
                        options: e1.options
                    }))
            ],
            required: !1
        };
        e1.push(t);
    }
    return e1;
}
async function f(e1, t) {
    let r1 = (e1.textContent || "").trim();
    if (!(r1 = r1.replace(/\s*\(required\)\s*/gi, "").trim())) return null;
    r1 = r1.replace(/[\u2731*]\s*$/, "").trim();
    let n = e1.textContent?.toLowerCase().includes("required") || !1, i = t.tagName.toLowerCase();
    if (/phone|mobile/i.test(r1)) {
        let a = !!t.closest(".Select") || t.classList.contains("Select-control") || "combobox" === t.getAttribute("role");
        if (a) return null;
        if ("input" === i) {
            let i = t, a = (i.type || "").toLowerCase();
            if ("hidden" !== a && ("tel" === a || "text" === a || "number" === a)) return {
                type: o.FIELD_TYPE.TEXT,
                label: r1,
                required: n,
                $input: i,
                $label: e1
            };
        }
    }
    if (t.classList.contains("Select-control") || "combobox" === t.getAttribute("role") || t.closest(".Select")) {
        let i = t.closest(".Select") || t.parentElement;
        if (!i) return console.warn("[getRuleForRipplingAts] No selectContainer found"), null;
        let a = [], l = document.querySelector(".Select-menu");
        if (l) {
            let e1 = l.querySelectorAll(".Select-option");
            a = Array.from(e1).map((e1)=>{
                let t = e1.getAttribute("aria-label");
                return t || (e1.textContent || "").trim();
            }).filter((e1)=>e1 && "Select" !== e1);
        } else try {
            let e1 = "combobox" === t.getAttribute("role") ? t : i.querySelector('input[role="combobox"]');
            if (e1) {
                let t = "true" === e1.getAttribute("aria-expanded");
                if (!t) {
                    let t = i.querySelector(".Select-arrow-zone"), r1 = i.querySelector(".Select-arrow"), n = i.querySelector(".Select-control");
                    if (n) {
                        n.focus(), await new Promise((e1)=>setTimeout(e1, 50));
                        let e1 = new MouseEvent("mousedown", {
                            bubbles: !0,
                            cancelable: !0,
                            view: window,
                            button: 0
                        }), t = new MouseEvent("mouseup", {
                            bubbles: !0,
                            cancelable: !0,
                            view: window,
                            button: 0
                        }), r1 = new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0,
                            view: window,
                            button: 0
                        });
                        n.dispatchEvent(e1), await new Promise((e1)=>setTimeout(e1, 50)), n.dispatchEvent(t), await new Promise((e1)=>setTimeout(e1, 50)), n.dispatchEvent(r1), n.click();
                    } else if (t) {
                        t.focus(), await new Promise((e1)=>setTimeout(e1, 50));
                        let e1 = new MouseEvent("mousedown", {
                            bubbles: !0,
                            cancelable: !0,
                            view: window,
                            button: 0
                        }), r1 = new MouseEvent("mouseup", {
                            bubbles: !0,
                            cancelable: !0,
                            view: window,
                            button: 0
                        }), n = new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0,
                            view: window,
                            button: 0
                        });
                        t.dispatchEvent(e1), await new Promise((e1)=>setTimeout(e1, 50)), t.dispatchEvent(r1), await new Promise((e1)=>setTimeout(e1, 50)), t.dispatchEvent(n), t.click();
                    } else r1 ? r1.click() : (e1.focus(), await new Promise((e1)=>setTimeout(e1, 50)), e1.click());
                    for(let t = 0; t < 15; t++){
                        await new Promise((e1)=>setTimeout(e1, 100));
                        let t = "true" === e1.getAttribute("aria-expanded");
                        if (t) break;
                    }
                }
                let r1 = e1.id || "", n = e1.getAttribute("aria-owns") || "", o = null;
                n && (o = document.getElementById(n));
                let l = e1.getAttribute("aria-activedescendant") || "";
                if (!o && l) {
                    let e1 = l.replace("--value", "--list");
                    o = document.getElementById(e1);
                }
                if (!o && r1 && r1.includes("--value")) {
                    let e1 = r1.replace("--value", "--list");
                    o = document.getElementById(e1);
                }
                if (!o) {
                    let e1 = document.querySelectorAll(".Select-menu");
                    for (let t of Array.from(e1)){
                        let e1 = t, r1 = window.getComputedStyle(e1);
                        if ("none" !== r1.display && "hidden" !== r1.visibility) {
                            o = e1;
                            break;
                        }
                    }
                }
                if (o || (o = document.querySelector(".Select-menu")), o) {
                    let e1 = o.querySelectorAll(".Select-option");
                    a = Array.from(e1).map((e1)=>{
                        let t = e1.getAttribute("aria-label");
                        return t || (e1.textContent || "").trim();
                    }).filter((e1)=>e1 && "Select" !== e1), t || (document.body.click(), await new Promise((e1)=>setTimeout(e1, 100)));
                } else console.warn("[getRuleForRipplingAts] Menu not found after opening");
            } else console.warn("[getRuleForRipplingAts] Combobox not found");
        } catch (e1) {
            console.error("[getRuleForRipplingAts] Error opening select to get options:", e1);
        }
        return {
            type: o.FIELD_TYPE.SELECT,
            label: r1,
            required: n,
            options: a,
            $input: i,
            $label: e1
        };
    }
    if ("input" === i || "textarea" === i) {
        let i = t, a = i.type?.toLowerCase() || "text";
        return "file" === a ? null : {
            type: o.FIELD_TYPE.TEXT,
            label: r1,
            required: n,
            $input: i,
            $label: e1
        };
    }
    if ("input" === i && "checkbox" === t.type) {
        let i = t, a = i.closest("label"), l = (a?.textContent || r1).trim();
        return {
            type: o.FIELD_TYPE.CHECKBOX,
            label: l,
            required: n,
            options: [
                l
            ],
            $checkboxs: [
                i
            ],
            $radioParent: a || e1.parentElement || e1,
            $input: i,
            $label: e1
        };
    }
    return null;
}
async function p(e1) {
    let t = (0, i.getFirstOrderedNodeSafe)('.//span[@id and contains(@id, "-label")] | .//label', e1), r1 = "";
    if (t && (r1 = (r1 = (t.textContent || "").trim()).replace(/[\u2731*]$/, "").trim()), !r1) {
        let t = (0, i.getFirstOrderedNodeSafe)('.//input[@aria-labelledby] | .//*[@role="combobox"][@aria-labelledby]', e1);
        if (t) {
            let e1 = t.getAttribute("aria-labelledby");
            if (e1) {
                let t = e1.split(" ");
                for (let e1 of t){
                    let t = document.getElementById(e1);
                    if (t && (r1 = (r1 = (t.textContent || "").trim()).replace(/[\u2731*]$/, "").trim())) break;
                }
            }
        }
    }
    if (!r1) {
        let t = null, n = e1.closest('[data-testid="field"]') || e1, o = n.parentElement;
        if (o) {
            let e1 = Array.from(o.children), r1 = e1.indexOf(n);
            for(let n = r1 - 1; n >= Math.max(0, r1 - 3); n--){
                let r1 = e1[n];
                if (!r1) continue;
                let o = r1.querySelector("p");
                if (o) {
                    let e1 = o.closest('[data-testid="select-controller"]') || o.closest('[role="combobox"]') || o.closest('[role="listbox"]');
                    if (e1) continue;
                    let r1 = (o.textContent || "").trim();
                    if (r1.length > 3) {
                        t = o;
                        break;
                    }
                }
            }
        }
        if (!t) {
            let e1 = o;
            for(let r1 = 0; r1 < 2 && e1; r1++){
                let r1 = e1.parentElement;
                if (!r1) break;
                let n = Array.from(r1.children), o = n.indexOf(e1);
                for(let e1 = o - 1; e1 >= Math.max(0, o - 2); e1--){
                    let r1 = n[e1];
                    if (!r1) continue;
                    let o = r1.querySelector("p");
                    if (o) {
                        let e1 = o.closest('[data-testid="select-controller"]') || o.closest('[role="combobox"]') || o.closest('[role="listbox"]');
                        if (e1) continue;
                        let r1 = (o.textContent || "").trim();
                        if (r1.length > 3) {
                            t = o;
                            break;
                        }
                    }
                }
                if (t) break;
                e1 = r1;
            }
        }
        t && (r1 = (r1 = (r1 = (t.textContent || "").trim()).replace(/<[^>]*>/g, "").trim()).replace(/\s*$/, "").trim());
    }
    if (!r1) return null;
    let n = !!(0, i.getFirstOrderedNodeSafe)('.//*[@aria-required="true"] | .//span[contains(text(), "*")] | .//span[contains(text(), "\u2731")]', e1), l = (0, i.getFirstOrderedNodeSafe)('.//*[@role="group"]', e1);
    if (l) {
        let a = (0, i.getOrderedNodesSafe)('.//*[@role="checkbox"]', l);
        if (a.length > 0) {
            let s = r1, u = n, c = null, d = e1;
            for(let e1 = 0; e1 < 5 && d; e1++){
                let e1 = d.parentElement;
                if (!e1) break;
                let t = Array.from(e1.querySelectorAll("p"));
                for (let r1 of t){
                    let t = (r1.textContent || "").trim();
                    if (t.length > 10) {
                        let t = Array.from(e1.children).indexOf(r1), n = Array.from(e1.children).indexOf(d.closest('[data-testid="field"]') || d);
                        if (t < n) {
                            c = r1;
                            break;
                        }
                    }
                }
                if (c) break;
                d = e1;
            }
            if (c) {
                s = (s = (c.textContent || "").trim()).replace(/<[^>]*>/g, "").trim();
                let e1 = c.querySelector("div");
                u = null !== e1;
            }
            let f = a.map((e1)=>{
                let t = (0, i.getFirstOrderedNodeSafe)('.//*[@id and contains(@id, "label-")] | .//p', e1);
                return t?.textContent?.trim() || e1.textContent?.trim() || "";
            }).filter((e1)=>e1), p = (0, i.getOrderedNodesSafe)('.//input[@type="checkbox"]', l);
            return {
                type: o.FIELD_TYPE.CHECKBOX,
                label: s,
                required: u,
                options: f,
                $radioParent: e1,
                $checkboxs: p,
                $input: p[0],
                $label: c || t
            };
        }
    }
    let s = (0, i.getFirstOrderedNodeSafe)('.//input[@type="checkbox"][@data-testid]', e1);
    if (s) {
        let a = (0, i.getFirstOrderedNodeSafe)('.//*[@id and contains(@id, "label-")] | .//p | .//label', e1), l = a?.textContent?.trim() || r1;
        return {
            type: o.FIELD_TYPE.CHECKBOX,
            label: l,
            required: n,
            options: [
                l
            ],
            $radioParent: e1,
            $checkboxs: [
                s
            ],
            $input: s,
            $label: t || a
        };
    }
    if (/phone|mobile/i.test(r1)) {
        let o = (0, i.getFirstOrderedNodeSafe)('.//*[@data-testid="phone_number"]//input[@data-input="phone_number"]', e1);
        if (o) return b(r1, n, o, m(e1), t);
    }
    if (/location/i.test(r1)) {
        let a = (0, i.getFirstOrderedNodeSafe)('.//*[@data-testid="location"]//input[not(@type="hidden") and not(@type="file")]', e1);
        if (a) return {
            type: o.FIELD_TYPE.TEXT,
            label: r1,
            required: n,
            $input: a,
            $label: t
        };
    }
    let u = (0, i.getFirstOrderedNodeSafe)('.//*[@data-testid="select-controller"] | .//*[@role="combobox"][@aria-haspopup="listbox"]', e1);
    if (u) {
        let l = [], s = (0, i.getFirstOrderedNodeSafe)('.//ul[@role="listbox"] | .//*[@data-testid="popper"]//ul[@role="listbox"]', e1);
        if (s) {
            let e1 = (0, i.getOrderedNodesSafe)('.//li[@role="option"]', s);
            l = e1.map((e1)=>{
                let t = (0, i.getFirstOrderedNodeSafe)('.//*[@data-testid="menuListLabel"] | .//p | .//span', e1);
                return t?.textContent?.trim() || e1.textContent?.trim() || "";
            }).filter((e1)=>e1 && "Select" !== e1);
        } else try {
            let t = u.querySelector('[role="combobox"]');
            if (t && "false" === t.getAttribute("aria-expanded")) {
                let r1 = t.id, n = t.getAttribute("aria-controls");
                t.click(), await (0, a.delay)(300);
                let o = null;
                if (n) o = document.getElementById(n);
                else if (r1) {
                    let e1 = `${r1}-list`;
                    o = document.getElementById(e1);
                }
                if (!o) {
                    let t = (0, i.getFirstOrderedNodeSafe)('.//*[@data-testid="popper"][contains(@style, "position: fixed")]', e1.parentElement || document.body);
                    t && (o = (0, i.getFirstOrderedNodeSafe)('.//ul[@role="listbox"]', t));
                }
                if (o) {
                    let e1 = (0, i.getOrderedNodesSafe)('.//li[@role="option"]', o);
                    l = e1.map((e1)=>{
                        let t = (0, i.getFirstOrderedNodeSafe)('.//*[@data-testid="menuListLabel"] | .//p | .//span', e1);
                        return t?.textContent?.trim() || e1.textContent?.trim() || "";
                    }).filter((e1)=>e1 && "Select" !== e1), document.body.click(), await (0, a.delay)(100);
                }
            }
        } catch (e1) {
            console.warn("Failed to extract select options:", e1);
        }
        return {
            type: o.FIELD_TYPE.SELECT,
            label: r1,
            required: n,
            options: l,
            $input: u,
            $label: t
        };
    }
    let c = (0, i.getFirstOrderedNodeSafe)(".//select", e1);
    if (c) {
        let e1 = (0, i.getOrderedNodesSafe)(".//option", c), a = e1.map((e1)=>e1.textContent.trim()).filter((e1)=>e1 && "Select ..." !== e1 && "Select..." !== e1);
        return {
            type: o.FIELD_TYPE.SELECT,
            label: r1,
            required: n,
            options: a,
            $input: c,
            $label: t
        };
    }
    let d = (0, i.getOrderedNodesSafe)('.//input[@type="radio"]', e1), f = (0, i.getOrderedNodesSafe)('.//*[@role="radio"]', e1);
    if (d.length > 0 || f.length > 0) {
        let i = r1, a = n, l = I(e1);
        l && (i = (i = (l.textContent || "").trim()).replace(/<[^>]*>/g, "").trim(), a = null !== l.closest('[aria-required="true"]') || !!l.querySelector('[aria-required="true"]'));
        let s = f.length > 0 ? f : d, u = s.map((e1)=>A(e1)).filter((e1)=>e1);
        return {
            type: o.FIELD_TYPE.RADIOGROUP,
            label: i,
            required: a,
            options: u,
            $input: d[0] || f[0],
            $radioParent: e1,
            $label: l || t
        };
    }
    let p = (0, i.getFirstOrderedNodeSafe)('.//input[@data-input][not(@type="hidden")] | .//input[@type="text"] | .//input[@type="email"] | .//input[@type="tel"] | .//input[@type="url"] | .//textarea', e1);
    return p ? "file" === p.type || "input-resume" === p.getAttribute("data-testid") ? null : {
        type: o.FIELD_TYPE.TEXT,
        label: r1,
        required: n,
        $input: p,
        $label: t
    } : null;
}
function m(e1) {
    return (0, i.getFirstOrderedNodeSafe)('.//*[@data-testid="phone_number-code"]//input | .//*[@data-testid="phone_number-code"]//*[@role="combobox"]', e1);
}
function h(e1) {
    return e1.closest(".Select") || e1.closest('[data-testid="phone_number-code"]') || e1;
}
function g(e1) {
    return e1 ? e1 instanceof HTMLInputElement ? e1.value || "" : e1.textContent?.trim() || "" : "";
}
function b(e1, t, r1, n, i) {
    let a = {
        type: o.FIELD_TYPE.TEXT,
        label: e1,
        required: t,
        $input: r1,
        $label: i
    };
    return n ? [
        {
            type: o.FIELD_TYPE.SELECT,
            label: "Phone Country Code",
            required: t,
            options: [],
            $input: h(n),
            $label: i
        },
        a
    ] : a;
}
let y = p, v = b, w = g;
function S(e1, t, r1) {
    let n = {};
    return t && (n["Phone Country Code"] = g(t)), r1 && (n[e1] = r1.value || ""), Object.keys(n).length > 0 ? n : null;
}
_c = S;
function E(e1, t) {
    return S(t, m(e1), (0, i.getFirstOrderedNodeSafe)('.//*[@data-testid="phone_number"]//input[@data-input="phone_number"]', e1));
}
_c1 = E;
let x = E, C = S;
function A(e1) {
    let t = e1.getAttribute("aria-label")?.trim();
    if (t) return t;
    let r1 = (0, i.getFirstOrderedNodeSafe)('.//*[@id and contains(@id, "label-")] | .//p | .//span', e1);
    return r1?.textContent?.trim() || e1.textContent?.trim() || "";
}
_c2 = A;
async function k(e1, t, r1) {
    let n = (e1.textContent || "").trim();
    if (!(n = n.replace(/\s*\(required\)\s*/gi, "").trim())) return null;
    let i = e1.textContent?.toLowerCase().includes("required") || !1, a = r1.map((e1)=>{
        let t = e1.closest("label.multi-option");
        if (t) {
            let r1 = Array.from(t.childNodes).filter((e1)=>e1.nodeType === Node.TEXT_NODE).map((e1)=>e1.textContent?.trim()).join(" ").trim();
            return r1 || e1.value || e1.getAttribute("aria-label") || "";
        }
        return e1.value || e1.getAttribute("aria-label") || "";
    }).filter((e1)=>e1);
    return 0 === a.length ? null : {
        type: o.FIELD_TYPE.RADIOGROUP,
        label: n,
        required: i,
        options: a,
        $input: r1[0],
        $radioParent: t,
        $label: e1
    };
}
function T() {
    let e1 = window.location.hostname;
    return e1.includes("rippling-ats") ? P() : D();
}
_c3 = T;
function F(e1) {
    let t = e1.tagName?.toLowerCase() === "p" ? e1 : e1.querySelector("p");
    if (!t) return null;
    let r1 = t.closest('[data-testid="select-controller"]') || t.closest('[role="combobox"]') || t.closest('[role="listbox"]');
    if (r1) return null;
    let n = (t.textContent || "").trim();
    return n.length > 3 ? t : null;
}
_c4 = F;
function I(e1) {
    let t = e1.closest('[data-testid="field"]') || e1;
    for(let e1 = 0; e1 < 3 && t; e1++){
        let e1 = t.parentElement;
        if (!e1) break;
        let r1 = Array.from(e1.children), n = r1.indexOf(t);
        if (n < 0) break;
        for(let e1 = n - 1; e1 >= 0; e1--){
            let t = F(r1[e1]);
            if (t) return t;
        }
        t = e1;
    }
    return null;
}
_c5 = I;
function j(e1, t) {
    let r1 = I(e1);
    return r1 ? (r1.textContent || "").trim().replace(/<[^>]*>/g, "").trim() : t;
}
function D() {
    let e1 = {}, t = (0, i.getOrderedNodesSafe)('//*[@data-testid="field"]');
    for (let r1 of t){
        let t = (0, i.getFirstOrderedNodeSafe)('.//span[@id and contains(@id, "-label")] | .//span[@aria-describedby]', r1), n = "";
        if (t && (n = (t.textContent || "").trim().replace(/[\u2731*]$/, "").trim()), !n) {
            let e1 = (0, i.getFirstOrderedNodeSafe)('.//input[@aria-labelledby] | .//*[@role="combobox"][@aria-labelledby]', r1);
            if (e1) {
                let t = e1.getAttribute("aria-labelledby");
                if (t) {
                    let e1 = t.split(" ");
                    for (let t of e1){
                        let e1 = document.getElementById(t);
                        if (e1 && (n = (e1.textContent || "").trim().replace(/[\u2731*]$/, "").trim())) break;
                    }
                }
            }
        }
        if (!n) {
            let e1 = null, t = r1;
            for(let r1 = 0; r1 < 5 && t; r1++){
                let r1 = t.parentElement;
                if (!r1) break;
                let n = Array.from(r1.querySelectorAll("p"));
                for (let o of n){
                    let n = (o.textContent || "").trim();
                    if (n.length > 10) {
                        let n = Array.from(r1.children).indexOf(o), i = Array.from(r1.children).indexOf(t.closest('[data-testid="field"]') || t);
                        if (n < i) {
                            e1 = o;
                            break;
                        }
                    }
                }
                if (e1) break;
                t = r1;
            }
            e1 && (n = (e1.textContent || "").trim());
        }
        if (!n) continue;
        if (n.toLowerCase().includes("phone")) {
            let t = E(r1, n);
            if (t) {
                Object.assign(e1, t);
                continue;
            }
        }
        let o = (0, i.getFirstOrderedNodeSafe)('.//input[@type="checkbox"][@data-testid]', r1);
        if (o) {
            e1[n] = o.checked ? "true" : "false";
            continue;
        }
        let a = (0, i.getFirstOrderedNodeSafe)('.//*[@data-testid="select-controller"] | .//*[@role="combobox"][@aria-haspopup="listbox"]', r1);
        if (a) {
            let t = a.querySelector('input[role="combobox"], input[data-input="select-search-input"]'), r1 = t?.value || "";
            if (!r1) {
                let e1 = a.querySelector('[role="combobox"]');
                r1 = e1?.textContent?.trim() || "";
            }
            if (!r1) {
                let e1 = a.querySelector(".select__single-value, p, span");
                r1 = e1?.textContent?.trim() || "";
            }
            e1[n] = r1;
            continue;
        }
        let l = (0, i.getFirstOrderedNodeSafe)(".//select", r1);
        if (l) {
            let t = l.options[l.selectedIndex];
            e1[n] = t?.text || "";
            continue;
        }
        let s = (0, i.getOrderedNodesSafe)('.//input[@type="radio"] | .//*[@role="radio"]', r1);
        if (s.length > 0) {
            n = j(r1, n);
            let t = s.find((e1)=>"INPUT" === e1.tagName && "radio" === e1.type ? e1.checked : "true" === e1.getAttribute("aria-checked"));
            if (t) {
                let r1 = t.getAttribute("aria-label");
                if (r1) e1[n] = r1.trim();
                else {
                    let r1 = t.closest("label") || t.closest('[data-testid*="checkbox-label"]') || t.parentElement;
                    if (r1) {
                        let o = Array.from(r1.childNodes).filter((e1)=>e1.nodeType === Node.TEXT_NODE || e1.nodeType === Node.ELEMENT_NODE && !e1.querySelector('input[type="radio"], input[type="checkbox"]')).map((e1)=>e1.textContent?.trim()).filter(Boolean).join(" ");
                        e1[n] = o || t.value || "";
                    } else e1[n] = t.value || "";
                }
            } else e1[n] = "";
            continue;
        }
        let u = (0, i.getFirstOrderedNodeSafe)('.//input[@data-input][not(@type="hidden")] | .//input[@type="text"] | .//input[@type="email"] | .//input[@type="tel"] | .//input[@type="url"] | .//input[not(@type) and not(@role="combobox")] | .//textarea', r1);
        u && "file" !== u.type && (e1[n] = u.value);
    }
    return e1;
}
_c6 = D;
function P() {
    let e1 = {}, t = document.querySelector("form#job-application-form");
    if (!t) return e1;
    let r1 = Array.from(t.querySelectorAll("label[for]")), n = new Set(r1), o = Array.from(document.querySelectorAll("label[for]"));
    for (let e1 of o){
        let t = e1.getAttribute("for");
        if (!t) continue;
        let r1 = document.getElementById(t);
        if (r1) {
            let t = (e1.textContent || "").trim().replace(/\s*\(required\)\s*/gi, "").trim();
            if (t) {
                let t = u(r1), o = c(r1);
                t || o || n.add(e1);
            }
        }
    }
    for (let o of r1 = Array.from(n)){
        let r1 = o.getAttribute("for");
        if (!r1) continue;
        let n = document.getElementById(r1);
        if (!n) continue;
        let i = (o.textContent || "").trim().replace(/\s*\(required\)\s*/gi, "").trim(), a = u(n), l = c(n);
        if (a || l || !i) continue;
        let s = "";
        if ("SELECT" === n.tagName) {
            let e1 = n;
            s = e1.options[e1.selectedIndex]?.text?.trim() || "";
        } else if ("INPUT" === n.tagName) {
            let e1 = n;
            if ("checkbox" === e1.type) s = e1.checked ? "true" : "false";
            else if ("radio" === e1.type) {
                let r1 = t.querySelectorAll(`input[type="radio"][name="${e1.name}"]`);
                for (let e1 of Array.from(r1))if (e1.checked) {
                    let r1 = t.querySelector(`label[for="${e1.id}"]`);
                    s = r1?.textContent?.trim() || e1.value;
                    break;
                }
            } else if ("combobox" === e1.getAttribute("role") || e1.closest(".Select")) {
                let t = e1.closest(".Select") || e1.closest(".Select-control") || e1.parentElement;
                if (t) {
                    let e1 = t.querySelector(".Select-value-label, .Select-value, .select__single-value");
                    e1 && (s = e1.textContent?.trim() || "");
                }
            } else s = e1.value || "";
        } else if ("TEXTAREA" === n.tagName) s = n.value || "";
        else {
            let e1 = n.querySelector(".Select-value-label, .Select-value, .select__single-value");
            if (e1) s = e1.textContent?.trim() || "";
            else {
                let e1 = n.closest(".Select");
                if (e1) {
                    let t = e1.querySelector(".Select-value-label, .Select-value, .select__single-value");
                    t && (s = t.textContent?.trim() || "");
                }
            }
        }
        s && (e1[i] = s);
    }
    return e1;
}
_c7 = P;
function _() {
    let e1 = [], t = Array.from(document.querySelectorAll("h3")), r1 = t.find((e1)=>e1.textContent?.trim() === "Education"), n = Array.from(document.querySelectorAll("button")).find((e1)=>{
        let t = e1.textContent?.trim() || "", r1 = e1.getAttribute("aria-label") || "";
        return t.includes("Add More Education History") || r1.includes("Add More Education History");
    });
    if (!r1 || !n) return e1;
    let o = document.querySelector("form#job-application-form");
    if (!o) return e1;
    let i = Array.from(o.querySelectorAll("input, textarea, select")), a = new Map;
    for (let e1 of i){
        let t = r1.compareDocumentPosition(e1), o = (t & Node.DOCUMENT_POSITION_FOLLOWING) != 0, i = e1.compareDocumentPosition(n), l = (i & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
        if (o && l) {
            let t = e1.id || "", r1 = e1.name || "", n = (t + r1).match(/\.response\.(\d+)\./) || (t + r1).match(/response\.(\d+)\./) || (t + r1).match(/\[(\d+)\]/) || (t + r1).match(/--(\d+)/) || (t + r1).match(/-(\d+)-/);
            if (n) {
                let t = parseInt(n[1], 10);
                a.has(t) || a.set(t, new Map);
                let r1 = e1.getAttribute("aria-labelledby") && document.getElementById(e1.getAttribute("aria-labelledby") || "") || e1.id && document.querySelector(`label[for="${e1.id}"]`) || e1.closest("label");
                if (r1) {
                    let n = (r1.textContent || "").trim().replace(/\s*\(required\)\s*/gi, "").trim(), o = "";
                    if ("SELECT" === e1.tagName) {
                        let t = e1;
                        o = t.options[t.selectedIndex]?.text?.trim() || "";
                    } else if ("INPUT" === e1.tagName) {
                        let t = e1;
                        o = "checkbox" === t.type ? t.checked ? "true" : "false" : t.value || "";
                    } else "TEXTAREA" === e1.tagName && (o = e1.value || "");
                    n && o && a.get(t).set(n, o);
                }
            }
        }
    }
    let l = Array.from(a.keys()).sort((e1, t)=>e1 - t);
    for (let t of l){
        let r1 = a.get(t);
        if (r1.size > 0) {
            let t = {};
            for (let [e1, n] of r1.entries())t[e1] = n;
            e1.push(t);
        }
    }
    return e1;
}
function L() {
    let e1 = [], t = Array.from(document.querySelectorAll("h3")), r1 = t.find((e1)=>e1.textContent?.trim() === "Employment History"), n = Array.from(document.querySelectorAll("button")).find((e1)=>{
        let t = e1.textContent?.trim() || "";
        return t.includes("Add Another Position");
    });
    if (!r1 || !n) return e1;
    let o = document.querySelector("form#job-application-form");
    if (!o) return e1;
    let i = Array.from(o.querySelectorAll("input, textarea, select")), a = new Map;
    for (let e1 of i){
        let t = r1.compareDocumentPosition(e1), o = (t & Node.DOCUMENT_POSITION_FOLLOWING) != 0, i = e1.compareDocumentPosition(n), l = (i & Node.DOCUMENT_POSITION_FOLLOWING) != 0;
        if (o && l) {
            let t = e1.id || "", r1 = e1.name || "", n = (t + r1).match(/\.response\.(\d+)\./) || (t + r1).match(/response\.(\d+)\./) || (t + r1).match(/\[(\d+)\]/) || (t + r1).match(/--(\d+)/) || (t + r1).match(/-(\d+)-/);
            if (n) {
                let t = parseInt(n[1], 10);
                a.has(t) || a.set(t, new Map);
                let r1 = e1.getAttribute("aria-labelledby") && document.getElementById(e1.getAttribute("aria-labelledby") || "") || e1.id && document.querySelector(`label[for="${e1.id}"]`) || e1.closest("label");
                if (r1) {
                    let n = (r1.textContent || "").trim().replace(/\s*\(required\)\s*/gi, "").trim(), o = "";
                    if ("SELECT" === e1.tagName) {
                        let t = e1;
                        o = t.options[t.selectedIndex]?.text?.trim() || "";
                    } else if ("INPUT" === e1.tagName) {
                        let t = e1;
                        o = "checkbox" === t.type ? t.checked ? "true" : "false" : t.value || "";
                    } else "TEXTAREA" === e1.tagName && (o = e1.value || "");
                    n && o && a.get(t).set(n, o);
                }
            }
        }
    }
    let l = Array.from(a.keys()).sort((e1, t)=>e1 - t);
    for (let t of l){
        let r1 = a.get(t);
        if (r1.size > 0) {
            let t = {};
            for (let [e1, n] of r1.entries())t[e1] = n;
            e1.push(t);
        }
    }
    return e1;
}
_c8 = L;
function R() {
    let e1 = _(), t = L(), r1 = {};
    return e1 && e1.length > 0 && (r1.education = e1), t && t.length > 0 && (r1.employment = t), r1;
}
_c9 = R;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "A");
$RefreshReg$(_c3, "T");
$RefreshReg$(_c4, "F");
$RefreshReg$(_c5, "I");
$RefreshReg$(_c6, "D");
$RefreshReg$(_c7, "P");
$RefreshReg$(_c8, "L");
$RefreshReg$(_c9, "R");

},{}]},["f144D","fO006"], "fO006", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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S0FBSSxLQUFFLENBQUM7SUFBRSxPQUFPLE1BQUcsR0FBRSxTQUFPLEtBQUksQ0FBQSxHQUFFLFlBQVUsRUFBQSxHQUFHLEtBQUcsRUFBRSxTQUFPLEtBQUksQ0FBQSxHQUFFLGFBQVcsQ0FBQSxHQUFHO0FBQUM7TUFBaEciLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTA2NzY4NTc2ZDdhMjdiMDEuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvcmlwcGxpbmcvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxccmlwcGxpbmdcXFxccnVsZXMuanNcIixcImJ1bmRsZUlkXCI6XCI1MzhkYmFkMzc3NmQ0NTExXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogYU5sTnBcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL3JpcHBsaW5nL3J1bGVzLmpzXHJcbiAqIERlcGVuZGVuY2llczpcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+Y29yZS94cGF0aCAtPiBhZ0U0dSAgPT4gIHNyYy9jb3JlL3hwYXRoLmpzXHJcbiAqICAgfnV0aWxzL2RlbGF5IC0+IGFtNjE0ICA9PiAgc3JjL3V0aWxzL2RlbGF5LmpzXHJcbiAqL1xyXG5cclxudmFyIG49ZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7bi5kZWZpbmVJbnRlcm9wRmxhZyhyKSxuLmV4cG9ydChyLFwiZXh0cmFjdFJ1bGVzXCIsKCk9PmwpLG4uZXhwb3J0KHIsXCJnZXRSaXBwbGluZ1J1bGVGb3JUZXN0c1wiLCgpPT55KSxuLmV4cG9ydChyLFwiYnVpbGRSaXBwbGluZ1Bob25lUnVsZXNGb3JUZXN0c1wiLCgpPT52KSxuLmV4cG9ydChyLFwiZ2V0UmlwcGxpbmdQaG9uZUNvdW50cnlDb2RlVmFsdWVGb3JUZXN0c1wiLCgpPT53KSxuLmV4cG9ydChyLFwiZ2V0UmlwcGxpbmdQaG9uZVNuYXBzaG90Rm9yVGVzdHNcIiwoKT0+eCksbi5leHBvcnQocixcImJ1aWxkUmlwcGxpbmdQaG9uZVNuYXBzaG90Rm9yVGVzdHNcIiwoKT0+Qyksbi5leHBvcnQocixcImdldEZvcm1TbmFwc2hvdFwiLCgpPT5UKSxuLmV4cG9ydChyLFwicmVzb2x2ZVJpcHBsaW5nUmFkaW9TbmFwc2hvdExhYmVsXCIsKCk9PmopLG4uZXhwb3J0KHIsXCJnZXRFZHVTbmFwc2hvdFwiLCgpPT5fKSxuLmV4cG9ydChyLFwiZ2V0RW1wbG95bWVudFNuYXBzaG90XCIsKCk9PkwpLG4uZXhwb3J0KHIsXCJnZXRFZHVBbmRFbXBsb3ltZW50U25hcHNob3RcIiwoKT0+Uik7dmFyIG89ZShcIn5jb3JlL2VudW1zXCIpLGk9ZShcIn5jb3JlL3hwYXRoXCIpLGE9ZShcIn51dGlscy9kZWxheVwiKTthc3luYyBmdW5jdGlvbiBsKCl7bGV0IGU9d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO3JldHVybiBlLmluY2x1ZGVzKFwicmlwcGxpbmctYXRzXCIpP2QoKTpzKCl9YXN5bmMgZnVuY3Rpb24gcygpe2xldCBlPVtdLHQ9KDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLy8qW0BkYXRhLXRlc3RpZD1cImZpZWxkXCJdJyk7Zm9yKGxldCByIG9mIHQpe2xldCB0PWF3YWl0IHAocik7dCYmKEFycmF5LmlzQXJyYXkodCk/ZS5wdXNoKC4uLnQpOmUucHVzaCh0KSl9cmV0dXJuIGV9ZnVuY3Rpb24gdShlKXtsZXQgdD1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoM1wiKSkscj10LmZpbmQoZT0+ZS50ZXh0Q29udGVudD8udHJpbSgpPT09XCJFbXBsb3ltZW50IEhpc3RvcnlcIiksbj1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpLmZpbmQoZT0+e2xldCB0PWUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtyZXR1cm4gdC5pbmNsdWRlcyhcIkFkZCBBbm90aGVyIFBvc2l0aW9uXCIpfSk7aWYoIXJ8fCFuKXJldHVybiExO2xldCBvPXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSksaT0obyZOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORykhPTA7aWYoIWkpcmV0dXJuITE7bGV0IGE9ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuKSxsPShhJk5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HKSE9MDtyZXR1cm4hIWx9ZnVuY3Rpb24gYyhlKXtsZXQgdD1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoM1wiKSkscj10LmZpbmQoZT0+ZS50ZXh0Q29udGVudD8udHJpbSgpPT09XCJFZHVjYXRpb25cIiksbj1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpLmZpbmQoZT0+e2xldCB0PWUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjtyZXR1cm4gdC5pbmNsdWRlcyhcIkFkZCBNb3JlIEVkdWNhdGlvbiBIaXN0b3J5XCIpfSk7aWYoIXJ8fCFuKXJldHVybiExO2xldCBvPXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSksaT0obyZOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORykhPTA7aWYoIWkpcmV0dXJuITE7bGV0IGE9ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuKSxsPShhJk5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HKSE9MDtyZXR1cm4hIWx9YXN5bmMgZnVuY3Rpb24gZCgpe2xldCBlPVtdLHQ9bmV3IFNldCxyPVtdLG49W10saT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSNqb2ItYXBwbGljYXRpb24tZm9ybVwiKTtpZighaSlyZXR1cm4gZTtsZXQgYT1BcnJheS5mcm9tKGkucXVlcnlTZWxlY3RvckFsbChcImxhYmVsW2Zvcl1cIikpO2ZvcihsZXQgbyBvZiBhKXtsZXQgaT1vLmdldEF0dHJpYnV0ZShcImZvclwiKTtpZighaSljb250aW51ZTtsZXQgYT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKTtpZighYSljb250aW51ZTtvLnRleHRDb250ZW50Py50cmltKCk7bGV0IGw9dShhKSxzPWMoYSk7aWYobCl7bGV0IGU9YXdhaXQgZihvLGEpO2lmKGUpe2xldCByPWAke2UudHlwZX06JHtlLmxhYmVsfWA7dC5oYXMocil8fCh0LmFkZChyKSxuLnB1c2goZSkpfWNvbnRpbnVlfWlmKHMpe2xldCBlPWF3YWl0IGYobyxhKTtpZihlKXtsZXQgbj1gJHtlLnR5cGV9OiR7ZS5sYWJlbH1gO3QuaGFzKG4pfHwodC5hZGQobiksci5wdXNoKGUpKX1jb250aW51ZX1sZXQgZD1hd2FpdCBmKG8sYSk7aWYoZCl7bGV0IHI9YCR7ZC50eXBlfToke2QubGFiZWx9YDt0LmhhcyhyKXx8KHQuYWRkKHIpLGUucHVzaChkKSl9fWxldCBsPUFycmF5LmZyb20oaS5xdWVyeVNlbGVjdG9yQWxsKFwiLnllc25vLWZpZWxkLWNvbnRhaW5lciwgLmZvcm0tZmllbGQtY29udGFpbmVyXCIpKTtmb3IobGV0IG8gb2YgbCl7bGV0IGk9by5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tZmllbGQtbGFiZWwsIC55ZXNuby1maWVsZC1sYWJlbFwiKTtpZighaSljb250aW51ZTtsZXQgYT1vLnF1ZXJ5U2VsZWN0b3IoXCIueWVzbm8tcmFkaW9zLCAubXVsdGktb3B0aW9uLWNvbnRhaW5lclwiKTtpZighYSljb250aW51ZTtsZXQgbD1BcnJheS5mcm9tKGEucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykpO2lmKDA9PT1sLmxlbmd0aCljb250aW51ZTtpLnRleHRDb250ZW50Py50cmltKCk7bGV0IHM9dShvKSxkPWMobyk7aWYocyl7bGV0IGU9YXdhaXQgayhpLGEsbCk7aWYoZSl7bGV0IHI9YCR7ZS50eXBlfToke2UubGFiZWx9YDt0LmhhcyhyKXx8KHQuYWRkKHIpLG4ucHVzaChlKSl9Y29udGludWV9aWYoZCl7bGV0IGU9YXdhaXQgayhpLGEsbCk7aWYoZSl7bGV0IG49YCR7ZS50eXBlfToke2UubGFiZWx9YDt0LmhhcyhuKXx8KHQuYWRkKG4pLHIucHVzaChlKSl9Y29udGludWV9bGV0IGY9YXdhaXQgayhpLGEsbCk7aWYoZil7bGV0IHI9YCR7Zi50eXBlfToke2YubGFiZWx9YDt0LmhhcyhyKXx8KHQuYWRkKHIpLGUucHVzaChmKSl9fWlmKG4ubGVuZ3RoPjApe2xldCB0PXt0eXBlOm8uRklFTERfVFlQRS5FTVBMT1lNRU5ULGxhYmVsOlwiZW1wbG95bWVudFwiLGNoaWxkcmVuOm4sb3B0aW9uczpbLi4ubi5tYXAoZT0+KHt0eXBlOmUudHlwZSxsYWJlbDplLmxhYmVsLG9wdGlvbnM6ZS5vcHRpb25zfSkpXSxyZXF1aXJlZDohMX07ZS5wdXNoKHQpfWlmKHIubGVuZ3RoPjApe2xldCB0PXt0eXBlOm8uRklFTERfVFlQRS5FRFVDQVRJT04sbGFiZWw6XCJFZHVjYXRpb25cIixjaGlsZHJlbjpyLG9wdGlvbnM6Wy4uLnIubWFwKGU9Pih7dHlwZTplLnR5cGUsbGFiZWw6ZS5sYWJlbCxvcHRpb25zOmUub3B0aW9uc30pKV0scmVxdWlyZWQ6ITF9O2UucHVzaCh0KX1yZXR1cm4gZX1hc3luYyBmdW5jdGlvbiBmKGUsdCl7bGV0IHI9KGUudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKTtpZighKHI9ci5yZXBsYWNlKC9cXHMqXFwocmVxdWlyZWRcXClcXHMqL2dpLFwiXCIpLnRyaW0oKSkpcmV0dXJuIG51bGw7cj1yLnJlcGxhY2UoL1tcXHUyNzMxKl1cXHMqJC8sXCJcIikudHJpbSgpO2xldCBuPWUudGV4dENvbnRlbnQ/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJyZXF1aXJlZFwiKXx8ITEsaT10LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtpZigvcGhvbmV8bW9iaWxlL2kudGVzdChyKSl7bGV0IGE9ISF0LmNsb3Nlc3QoXCIuU2VsZWN0XCIpfHx0LmNsYXNzTGlzdC5jb250YWlucyhcIlNlbGVjdC1jb250cm9sXCIpfHxcImNvbWJvYm94XCI9PT10LmdldEF0dHJpYnV0ZShcInJvbGVcIik7aWYoYSlyZXR1cm4gbnVsbDtpZihcImlucHV0XCI9PT1pKXtsZXQgaT10LGE9KGkudHlwZXx8XCJcIikudG9Mb3dlckNhc2UoKTtpZihcImhpZGRlblwiIT09YSYmKFwidGVsXCI9PT1hfHxcInRleHRcIj09PWF8fFwibnVtYmVyXCI9PT1hKSlyZXR1cm57dHlwZTpvLkZJRUxEX1RZUEUuVEVYVCxsYWJlbDpyLHJlcXVpcmVkOm4sJGlucHV0OmksJGxhYmVsOmV9fX1pZih0LmNsYXNzTGlzdC5jb250YWlucyhcIlNlbGVjdC1jb250cm9sXCIpfHxcImNvbWJvYm94XCI9PT10LmdldEF0dHJpYnV0ZShcInJvbGVcIil8fHQuY2xvc2VzdChcIi5TZWxlY3RcIikpe2xldCBpPXQuY2xvc2VzdChcIi5TZWxlY3RcIil8fHQucGFyZW50RWxlbWVudDtpZighaSlyZXR1cm4gY29uc29sZS53YXJuKFwiW2dldFJ1bGVGb3JSaXBwbGluZ0F0c10gTm8gc2VsZWN0Q29udGFpbmVyIGZvdW5kXCIpLG51bGw7bGV0IGE9W10sbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlNlbGVjdC1tZW51XCIpO2lmKGwpe2xldCBlPWwucXVlcnlTZWxlY3RvckFsbChcIi5TZWxlY3Qtb3B0aW9uXCIpO2E9QXJyYXkuZnJvbShlKS5tYXAoZT0+e2xldCB0PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKTtyZXR1cm4gdHx8KGUudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKX0pLmZpbHRlcihlPT5lJiZcIlNlbGVjdFwiIT09ZSl9ZWxzZSB0cnl7bGV0IGU9XCJjb21ib2JveFwiPT09dC5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpP3Q6aS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtyb2xlPVwiY29tYm9ib3hcIl0nKTtpZihlKXtsZXQgdD1cInRydWVcIj09PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKTtpZighdCl7bGV0IHQ9aS5xdWVyeVNlbGVjdG9yKFwiLlNlbGVjdC1hcnJvdy16b25lXCIpLHI9aS5xdWVyeVNlbGVjdG9yKFwiLlNlbGVjdC1hcnJvd1wiKSxuPWkucXVlcnlTZWxlY3RvcihcIi5TZWxlY3QtY29udHJvbFwiKTtpZihuKXtuLmZvY3VzKCksYXdhaXQgbmV3IFByb21pc2UoZT0+c2V0VGltZW91dChlLDUwKSk7bGV0IGU9bmV3IE1vdXNlRXZlbnQoXCJtb3VzZWRvd25cIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLHZpZXc6d2luZG93LGJ1dHRvbjowfSksdD1uZXcgTW91c2VFdmVudChcIm1vdXNldXBcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLHZpZXc6d2luZG93LGJ1dHRvbjowfSkscj1uZXcgTW91c2VFdmVudChcImNsaWNrXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCx2aWV3OndpbmRvdyxidXR0b246MH0pO24uZGlzcGF0Y2hFdmVudChlKSxhd2FpdCBuZXcgUHJvbWlzZShlPT5zZXRUaW1lb3V0KGUsNTApKSxuLmRpc3BhdGNoRXZlbnQodCksYXdhaXQgbmV3IFByb21pc2UoZT0+c2V0VGltZW91dChlLDUwKSksbi5kaXNwYXRjaEV2ZW50KHIpLG4uY2xpY2soKX1lbHNlIGlmKHQpe3QuZm9jdXMoKSxhd2FpdCBuZXcgUHJvbWlzZShlPT5zZXRUaW1lb3V0KGUsNTApKTtsZXQgZT1uZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsdmlldzp3aW5kb3csYnV0dG9uOjB9KSxyPW5ldyBNb3VzZUV2ZW50KFwibW91c2V1cFwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsdmlldzp3aW5kb3csYnV0dG9uOjB9KSxuPW5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLHZpZXc6d2luZG93LGJ1dHRvbjowfSk7dC5kaXNwYXRjaEV2ZW50KGUpLGF3YWl0IG5ldyBQcm9taXNlKGU9PnNldFRpbWVvdXQoZSw1MCkpLHQuZGlzcGF0Y2hFdmVudChyKSxhd2FpdCBuZXcgUHJvbWlzZShlPT5zZXRUaW1lb3V0KGUsNTApKSx0LmRpc3BhdGNoRXZlbnQobiksdC5jbGljaygpfWVsc2Ugcj9yLmNsaWNrKCk6KGUuZm9jdXMoKSxhd2FpdCBuZXcgUHJvbWlzZShlPT5zZXRUaW1lb3V0KGUsNTApKSxlLmNsaWNrKCkpO2ZvcihsZXQgdD0wO3Q8MTU7dCsrKXthd2FpdCBuZXcgUHJvbWlzZShlPT5zZXRUaW1lb3V0KGUsMTAwKSk7bGV0IHQ9XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIik7aWYodClicmVha319bGV0IHI9ZS5pZHx8XCJcIixuPWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1vd25zXCIpfHxcIlwiLG89bnVsbDtuJiYobz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChuKSk7bGV0IGw9ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIil8fFwiXCI7aWYoIW8mJmwpe2xldCBlPWwucmVwbGFjZShcIi0tdmFsdWVcIixcIi0tbGlzdFwiKTtvPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpfWlmKCFvJiZyJiZyLmluY2x1ZGVzKFwiLS12YWx1ZVwiKSl7bGV0IGU9ci5yZXBsYWNlKFwiLS12YWx1ZVwiLFwiLS1saXN0XCIpO289ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSl9aWYoIW8pe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuU2VsZWN0LW1lbnVcIik7Zm9yKGxldCB0IG9mIEFycmF5LmZyb20oZSkpe2xldCBlPXQscj13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlKTtpZihcIm5vbmVcIiE9PXIuZGlzcGxheSYmXCJoaWRkZW5cIiE9PXIudmlzaWJpbGl0eSl7bz1lO2JyZWFrfX19aWYob3x8KG89ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TZWxlY3QtbWVudVwiKSksbyl7bGV0IGU9by5xdWVyeVNlbGVjdG9yQWxsKFwiLlNlbGVjdC1vcHRpb25cIik7YT1BcnJheS5mcm9tKGUpLm1hcChlPT57bGV0IHQ9ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpO3JldHVybiB0fHwoZS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpfSkuZmlsdGVyKGU9PmUmJlwiU2VsZWN0XCIhPT1lKSx0fHwoZG9jdW1lbnQuYm9keS5jbGljaygpLGF3YWl0IG5ldyBQcm9taXNlKGU9PnNldFRpbWVvdXQoZSwxMDApKSl9ZWxzZSBjb25zb2xlLndhcm4oXCJbZ2V0UnVsZUZvclJpcHBsaW5nQXRzXSBNZW51IG5vdCBmb3VuZCBhZnRlciBvcGVuaW5nXCIpfWVsc2UgY29uc29sZS53YXJuKFwiW2dldFJ1bGVGb3JSaXBwbGluZ0F0c10gQ29tYm9ib3ggbm90IGZvdW5kXCIpfWNhdGNoKGUpe2NvbnNvbGUuZXJyb3IoXCJbZ2V0UnVsZUZvclJpcHBsaW5nQXRzXSBFcnJvciBvcGVuaW5nIHNlbGVjdCB0byBnZXQgb3B0aW9uczpcIixlKX1yZXR1cm57dHlwZTpvLkZJRUxEX1RZUEUuU0VMRUNULGxhYmVsOnIscmVxdWlyZWQ6bixvcHRpb25zOmEsJGlucHV0OmksJGxhYmVsOmV9fWlmKFwiaW5wdXRcIj09PWl8fFwidGV4dGFyZWFcIj09PWkpe2xldCBpPXQsYT1pLnR5cGU/LnRvTG93ZXJDYXNlKCl8fFwidGV4dFwiO3JldHVyblwiZmlsZVwiPT09YT9udWxsOnt0eXBlOm8uRklFTERfVFlQRS5URVhULGxhYmVsOnIscmVxdWlyZWQ6biwkaW5wdXQ6aSwkbGFiZWw6ZX19aWYoXCJpbnB1dFwiPT09aSYmXCJjaGVja2JveFwiPT09dC50eXBlKXtsZXQgaT10LGE9aS5jbG9zZXN0KFwibGFiZWxcIiksbD0oYT8udGV4dENvbnRlbnR8fHIpLnRyaW0oKTtyZXR1cm57dHlwZTpvLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsbGFiZWw6bCxyZXF1aXJlZDpuLG9wdGlvbnM6W2xdLCRjaGVja2JveHM6W2ldLCRyYWRpb1BhcmVudDphfHxlLnBhcmVudEVsZW1lbnR8fGUsJGlucHV0OmksJGxhYmVsOmV9fXJldHVybiBudWxsfWFzeW5jIGZ1bmN0aW9uIHAoZSl7bGV0IHQ9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vL3NwYW5bQGlkIGFuZCBjb250YWlucyhAaWQsIFwiLWxhYmVsXCIpXSB8IC4vL2xhYmVsJyxlKSxyPVwiXCI7aWYodCYmKHI9KHI9KHQudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKSkucmVwbGFjZSgvW1xcdTI3MzEqXSQvLFwiXCIpLnRyaW0oKSksIXIpe2xldCB0PSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKCcuLy9pbnB1dFtAYXJpYS1sYWJlbGxlZGJ5XSB8IC4vLypbQHJvbGU9XCJjb21ib2JveFwiXVtAYXJpYS1sYWJlbGxlZGJ5XScsZSk7aWYodCl7bGV0IGU9dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIik7aWYoZSl7bGV0IHQ9ZS5zcGxpdChcIiBcIik7Zm9yKGxldCBlIG9mIHQpe2xldCB0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpO2lmKHQmJihyPShyPSh0LnRleHRDb250ZW50fHxcIlwiKS50cmltKCkpLnJlcGxhY2UoL1tcXHUyNzMxKl0kLyxcIlwiKS50cmltKCkpKWJyZWFrfX19fWlmKCFyKXtsZXQgdD1udWxsLG49ZS5jbG9zZXN0KCdbZGF0YS10ZXN0aWQ9XCJmaWVsZFwiXScpfHxlLG89bi5wYXJlbnRFbGVtZW50O2lmKG8pe2xldCBlPUFycmF5LmZyb20oby5jaGlsZHJlbikscj1lLmluZGV4T2Yobik7Zm9yKGxldCBuPXItMTtuPj1NYXRoLm1heCgwLHItMyk7bi0tKXtsZXQgcj1lW25dO2lmKCFyKWNvbnRpbnVlO2xldCBvPXIucXVlcnlTZWxlY3RvcihcInBcIik7aWYobyl7bGV0IGU9by5jbG9zZXN0KCdbZGF0YS10ZXN0aWQ9XCJzZWxlY3QtY29udHJvbGxlclwiXScpfHxvLmNsb3Nlc3QoJ1tyb2xlPVwiY29tYm9ib3hcIl0nKXx8by5jbG9zZXN0KCdbcm9sZT1cImxpc3Rib3hcIl0nKTtpZihlKWNvbnRpbnVlO2xldCByPShvLnRleHRDb250ZW50fHxcIlwiKS50cmltKCk7aWYoci5sZW5ndGg+Myl7dD1vO2JyZWFrfX19fWlmKCF0KXtsZXQgZT1vO2ZvcihsZXQgcj0wO3I8MiYmZTtyKyspe2xldCByPWUucGFyZW50RWxlbWVudDtpZighcilicmVhaztsZXQgbj1BcnJheS5mcm9tKHIuY2hpbGRyZW4pLG89bi5pbmRleE9mKGUpO2ZvcihsZXQgZT1vLTE7ZT49TWF0aC5tYXgoMCxvLTIpO2UtLSl7bGV0IHI9bltlXTtpZighciljb250aW51ZTtsZXQgbz1yLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO2lmKG8pe2xldCBlPW8uY2xvc2VzdCgnW2RhdGEtdGVzdGlkPVwic2VsZWN0LWNvbnRyb2xsZXJcIl0nKXx8by5jbG9zZXN0KCdbcm9sZT1cImNvbWJvYm94XCJdJyl8fG8uY2xvc2VzdCgnW3JvbGU9XCJsaXN0Ym94XCJdJyk7aWYoZSljb250aW51ZTtsZXQgcj0oby50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpO2lmKHIubGVuZ3RoPjMpe3Q9bzticmVha319fWlmKHQpYnJlYWs7ZT1yfX10JiYocj0ocj0ocj0odC50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpKS5yZXBsYWNlKC88W14+XSo+L2csXCJcIikudHJpbSgpKS5yZXBsYWNlKC9cXHMqJC8sXCJcIikudHJpbSgpKX1pZighcilyZXR1cm4gbnVsbDtsZXQgbj0hISgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKCcuLy8qW0BhcmlhLXJlcXVpcmVkPVwidHJ1ZVwiXSB8IC4vL3NwYW5bY29udGFpbnModGV4dCgpLCBcIipcIildIHwgLi8vc3Bhbltjb250YWlucyh0ZXh0KCksIFwiXFx1MjczMVwiKV0nLGUpLGw9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vLypbQHJvbGU9XCJncm91cFwiXScsZSk7aWYobCl7bGV0IGE9KDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vKltAcm9sZT1cImNoZWNrYm94XCJdJyxsKTtpZihhLmxlbmd0aD4wKXtsZXQgcz1yLHU9bixjPW51bGwsZD1lO2ZvcihsZXQgZT0wO2U8NSYmZDtlKyspe2xldCBlPWQucGFyZW50RWxlbWVudDtpZighZSlicmVhaztsZXQgdD1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcInBcIikpO2ZvcihsZXQgciBvZiB0KXtsZXQgdD0oci50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpO2lmKHQubGVuZ3RoPjEwKXtsZXQgdD1BcnJheS5mcm9tKGUuY2hpbGRyZW4pLmluZGV4T2Yociksbj1BcnJheS5mcm9tKGUuY2hpbGRyZW4pLmluZGV4T2YoZC5jbG9zZXN0KCdbZGF0YS10ZXN0aWQ9XCJmaWVsZFwiXScpfHxkKTtpZih0PG4pe2M9cjticmVha319fWlmKGMpYnJlYWs7ZD1lfWlmKGMpe3M9KHM9KGMudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKSkucmVwbGFjZSgvPFtePl0qPi9nLFwiXCIpLnRyaW0oKTtsZXQgZT1jLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik7dT1udWxsIT09ZX1sZXQgZj1hLm1hcChlPT57bGV0IHQ9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vLypbQGlkIGFuZCBjb250YWlucyhAaWQsIFwibGFiZWwtXCIpXSB8IC4vL3AnLGUpO3JldHVybiB0Py50ZXh0Q29udGVudD8udHJpbSgpfHxlLnRleHRDb250ZW50Py50cmltKCl8fFwiXCJ9KS5maWx0ZXIoZT0+ZSkscD0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKCcuLy9pbnB1dFtAdHlwZT1cImNoZWNrYm94XCJdJyxsKTtyZXR1cm57dHlwZTpvLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsbGFiZWw6cyxyZXF1aXJlZDp1LG9wdGlvbnM6ZiwkcmFkaW9QYXJlbnQ6ZSwkY2hlY2tib3hzOnAsJGlucHV0OnBbMF0sJGxhYmVsOmN8fHR9fX1sZXQgcz0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vaW5wdXRbQHR5cGU9XCJjaGVja2JveFwiXVtAZGF0YS10ZXN0aWRdJyxlKTtpZihzKXtsZXQgYT0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vKltAaWQgYW5kIGNvbnRhaW5zKEBpZCwgXCJsYWJlbC1cIildIHwgLi8vcCB8IC4vL2xhYmVsJyxlKSxsPWE/LnRleHRDb250ZW50Py50cmltKCl8fHI7cmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLkNIRUNLQk9YLGxhYmVsOmwscmVxdWlyZWQ6bixvcHRpb25zOltsXSwkcmFkaW9QYXJlbnQ6ZSwkY2hlY2tib3hzOltzXSwkaW5wdXQ6cywkbGFiZWw6dHx8YX19aWYoL3Bob25lfG1vYmlsZS9pLnRlc3Qocikpe2xldCBvPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKCcuLy8qW0BkYXRhLXRlc3RpZD1cInBob25lX251bWJlclwiXS8vaW5wdXRbQGRhdGEtaW5wdXQ9XCJwaG9uZV9udW1iZXJcIl0nLGUpO2lmKG8pcmV0dXJuIGIocixuLG8sbShlKSx0KX1pZigvbG9jYXRpb24vaS50ZXN0KHIpKXtsZXQgYT0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vKltAZGF0YS10ZXN0aWQ9XCJsb2NhdGlvblwiXS8vaW5wdXRbbm90KEB0eXBlPVwiaGlkZGVuXCIpIGFuZCBub3QoQHR5cGU9XCJmaWxlXCIpXScsZSk7aWYoYSlyZXR1cm57dHlwZTpvLkZJRUxEX1RZUEUuVEVYVCxsYWJlbDpyLHJlcXVpcmVkOm4sJGlucHV0OmEsJGxhYmVsOnR9fWxldCB1PSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKCcuLy8qW0BkYXRhLXRlc3RpZD1cInNlbGVjdC1jb250cm9sbGVyXCJdIHwgLi8vKltAcm9sZT1cImNvbWJvYm94XCJdW0BhcmlhLWhhc3BvcHVwPVwibGlzdGJveFwiXScsZSk7aWYodSl7bGV0IGw9W10scz0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vdWxbQHJvbGU9XCJsaXN0Ym94XCJdIHwgLi8vKltAZGF0YS10ZXN0aWQ9XCJwb3BwZXJcIl0vL3VsW0Byb2xlPVwibGlzdGJveFwiXScsZSk7aWYocyl7bGV0IGU9KDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vbGlbQHJvbGU9XCJvcHRpb25cIl0nLHMpO2w9ZS5tYXAoZT0+e2xldCB0PSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKCcuLy8qW0BkYXRhLXRlc3RpZD1cIm1lbnVMaXN0TGFiZWxcIl0gfCAuLy9wIHwgLi8vc3BhbicsZSk7cmV0dXJuIHQ/LnRleHRDb250ZW50Py50cmltKCl8fGUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIn0pLmZpbHRlcihlPT5lJiZcIlNlbGVjdFwiIT09ZSl9ZWxzZSB0cnl7bGV0IHQ9dS5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImNvbWJvYm94XCJdJyk7aWYodCYmXCJmYWxzZVwiPT09dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpKXtsZXQgcj10LmlkLG49dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpO3QuY2xpY2soKSxhd2FpdCAoMCxhLmRlbGF5KSgzMDApO2xldCBvPW51bGw7aWYobilvPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG4pO2Vsc2UgaWYocil7bGV0IGU9YCR7cn0tbGlzdGA7bz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKX1pZighbyl7bGV0IHQ9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vLypbQGRhdGEtdGVzdGlkPVwicG9wcGVyXCJdW2NvbnRhaW5zKEBzdHlsZSwgXCJwb3NpdGlvbjogZml4ZWRcIildJyxlLnBhcmVudEVsZW1lbnR8fGRvY3VtZW50LmJvZHkpO3QmJihvPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKCcuLy91bFtAcm9sZT1cImxpc3Rib3hcIl0nLHQpKX1pZihvKXtsZXQgZT0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKCcuLy9saVtAcm9sZT1cIm9wdGlvblwiXScsbyk7bD1lLm1hcChlPT57bGV0IHQ9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vLypbQGRhdGEtdGVzdGlkPVwibWVudUxpc3RMYWJlbFwiXSB8IC4vL3AgfCAuLy9zcGFuJyxlKTtyZXR1cm4gdD8udGV4dENvbnRlbnQ/LnRyaW0oKXx8ZS50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwifSkuZmlsdGVyKGU9PmUmJlwiU2VsZWN0XCIhPT1lKSxkb2N1bWVudC5ib2R5LmNsaWNrKCksYXdhaXQgKDAsYS5kZWxheSkoMTAwKX19fWNhdGNoKGUpe2NvbnNvbGUud2FybihcIkZhaWxlZCB0byBleHRyYWN0IHNlbGVjdCBvcHRpb25zOlwiLGUpfXJldHVybnt0eXBlOm8uRklFTERfVFlQRS5TRUxFQ1QsbGFiZWw6cixyZXF1aXJlZDpuLG9wdGlvbnM6bCwkaW5wdXQ6dSwkbGFiZWw6dH19bGV0IGM9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuLy9zZWxlY3RcIixlKTtpZihjKXtsZXQgZT0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKFwiLi8vb3B0aW9uXCIsYyksYT1lLm1hcChlPT5lLnRleHRDb250ZW50LnRyaW0oKSkuZmlsdGVyKGU9PmUmJlwiU2VsZWN0IC4uLlwiIT09ZSYmXCJTZWxlY3QuLi5cIiE9PWUpO3JldHVybnt0eXBlOm8uRklFTERfVFlQRS5TRUxFQ1QsbGFiZWw6cixyZXF1aXJlZDpuLG9wdGlvbnM6YSwkaW5wdXQ6YywkbGFiZWw6dH19bGV0IGQ9KDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vaW5wdXRbQHR5cGU9XCJyYWRpb1wiXScsZSksZj0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKCcuLy8qW0Byb2xlPVwicmFkaW9cIl0nLGUpO2lmKGQubGVuZ3RoPjB8fGYubGVuZ3RoPjApe2xldCBpPXIsYT1uLGw9SShlKTtsJiYoaT0oaT0obC50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpKS5yZXBsYWNlKC88W14+XSo+L2csXCJcIikudHJpbSgpLGE9bnVsbCE9PWwuY2xvc2VzdCgnW2FyaWEtcmVxdWlyZWQ9XCJ0cnVlXCJdJyl8fCEhbC5xdWVyeVNlbGVjdG9yKCdbYXJpYS1yZXF1aXJlZD1cInRydWVcIl0nKSk7bGV0IHM9Zi5sZW5ndGg+MD9mOmQsdT1zLm1hcChlPT5BKGUpKS5maWx0ZXIoZT0+ZSk7cmV0dXJue3R5cGU6by5GSUVMRF9UWVBFLlJBRElPR1JPVVAsbGFiZWw6aSxyZXF1aXJlZDphLG9wdGlvbnM6dSwkaW5wdXQ6ZFswXXx8ZlswXSwkcmFkaW9QYXJlbnQ6ZSwkbGFiZWw6bHx8dH19bGV0IHA9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vL2lucHV0W0BkYXRhLWlucHV0XVtub3QoQHR5cGU9XCJoaWRkZW5cIildIHwgLi8vaW5wdXRbQHR5cGU9XCJ0ZXh0XCJdIHwgLi8vaW5wdXRbQHR5cGU9XCJlbWFpbFwiXSB8IC4vL2lucHV0W0B0eXBlPVwidGVsXCJdIHwgLi8vaW5wdXRbQHR5cGU9XCJ1cmxcIl0gfCAuLy90ZXh0YXJlYScsZSk7cmV0dXJuIHA/XCJmaWxlXCI9PT1wLnR5cGV8fFwiaW5wdXQtcmVzdW1lXCI9PT1wLmdldEF0dHJpYnV0ZShcImRhdGEtdGVzdGlkXCIpP251bGw6e3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6cixyZXF1aXJlZDpuLCRpbnB1dDpwLCRsYWJlbDp0fTpudWxsfWZ1bmN0aW9uIG0oZSl7cmV0dXJuKDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vLypbQGRhdGEtdGVzdGlkPVwicGhvbmVfbnVtYmVyLWNvZGVcIl0vL2lucHV0IHwgLi8vKltAZGF0YS10ZXN0aWQ9XCJwaG9uZV9udW1iZXItY29kZVwiXS8vKltAcm9sZT1cImNvbWJvYm94XCJdJyxlKX1mdW5jdGlvbiBoKGUpe3JldHVybiBlLmNsb3Nlc3QoXCIuU2VsZWN0XCIpfHxlLmNsb3Nlc3QoJ1tkYXRhLXRlc3RpZD1cInBob25lX251bWJlci1jb2RlXCJdJyl8fGV9ZnVuY3Rpb24gZyhlKXtyZXR1cm4gZT9lIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudD9lLnZhbHVlfHxcIlwiOmUudGV4dENvbnRlbnQ/LnRyaW0oKXx8XCJcIjpcIlwifWZ1bmN0aW9uIGIoZSx0LHIsbixpKXtsZXQgYT17dHlwZTpvLkZJRUxEX1RZUEUuVEVYVCxsYWJlbDplLHJlcXVpcmVkOnQsJGlucHV0OnIsJGxhYmVsOml9O3JldHVybiBuP1t7dHlwZTpvLkZJRUxEX1RZUEUuU0VMRUNULGxhYmVsOlwiUGhvbmUgQ291bnRyeSBDb2RlXCIscmVxdWlyZWQ6dCxvcHRpb25zOltdLCRpbnB1dDpoKG4pLCRsYWJlbDppfSxhXTphfWxldCB5PXAsdj1iLHc9ZztmdW5jdGlvbiBTKGUsdCxyKXtsZXQgbj17fTtyZXR1cm4gdCYmKG5bXCJQaG9uZSBDb3VudHJ5IENvZGVcIl09Zyh0KSksciYmKG5bZV09ci52YWx1ZXx8XCJcIiksT2JqZWN0LmtleXMobikubGVuZ3RoPjA/bjpudWxsfWZ1bmN0aW9uIEUoZSx0KXtyZXR1cm4gUyh0LG0oZSksKDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vLypbQGRhdGEtdGVzdGlkPVwicGhvbmVfbnVtYmVyXCJdLy9pbnB1dFtAZGF0YS1pbnB1dD1cInBob25lX251bWJlclwiXScsZSkpfWxldCB4PUUsQz1TO2Z1bmN0aW9uIEEoZSl7bGV0IHQ9ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpPy50cmltKCk7aWYodClyZXR1cm4gdDtsZXQgcj0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vKltAaWQgYW5kIGNvbnRhaW5zKEBpZCwgXCJsYWJlbC1cIildIHwgLi8vcCB8IC4vL3NwYW4nLGUpO3JldHVybiByPy50ZXh0Q29udGVudD8udHJpbSgpfHxlLnRleHRDb250ZW50Py50cmltKCl8fFwiXCJ9YXN5bmMgZnVuY3Rpb24gayhlLHQscil7bGV0IG49KGUudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKTtpZighKG49bi5yZXBsYWNlKC9cXHMqXFwocmVxdWlyZWRcXClcXHMqL2dpLFwiXCIpLnRyaW0oKSkpcmV0dXJuIG51bGw7bGV0IGk9ZS50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInJlcXVpcmVkXCIpfHwhMSxhPXIubWFwKGU9PntsZXQgdD1lLmNsb3Nlc3QoXCJsYWJlbC5tdWx0aS1vcHRpb25cIik7aWYodCl7bGV0IHI9QXJyYXkuZnJvbSh0LmNoaWxkTm9kZXMpLmZpbHRlcihlPT5lLm5vZGVUeXBlPT09Tm9kZS5URVhUX05PREUpLm1hcChlPT5lLnRleHRDb250ZW50Py50cmltKCkpLmpvaW4oXCIgXCIpLnRyaW0oKTtyZXR1cm4gcnx8ZS52YWx1ZXx8ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlwifXJldHVybiBlLnZhbHVlfHxlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCJ9KS5maWx0ZXIoZT0+ZSk7cmV0dXJuIDA9PT1hLmxlbmd0aD9udWxsOnt0eXBlOm8uRklFTERfVFlQRS5SQURJT0dST1VQLGxhYmVsOm4scmVxdWlyZWQ6aSxvcHRpb25zOmEsJGlucHV0OnJbMF0sJHJhZGlvUGFyZW50OnQsJGxhYmVsOmV9fWZ1bmN0aW9uIFQoKXtsZXQgZT13aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7cmV0dXJuIGUuaW5jbHVkZXMoXCJyaXBwbGluZy1hdHNcIik/UCgpOkQoKX1mdW5jdGlvbiBGKGUpe2xldCB0PWUudGFnTmFtZT8udG9Mb3dlckNhc2UoKT09PVwicFwiP2U6ZS5xdWVyeVNlbGVjdG9yKFwicFwiKTtpZighdClyZXR1cm4gbnVsbDtsZXQgcj10LmNsb3Nlc3QoJ1tkYXRhLXRlc3RpZD1cInNlbGVjdC1jb250cm9sbGVyXCJdJyl8fHQuY2xvc2VzdCgnW3JvbGU9XCJjb21ib2JveFwiXScpfHx0LmNsb3Nlc3QoJ1tyb2xlPVwibGlzdGJveFwiXScpO2lmKHIpcmV0dXJuIG51bGw7bGV0IG49KHQudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKTtyZXR1cm4gbi5sZW5ndGg+Mz90Om51bGx9ZnVuY3Rpb24gSShlKXtsZXQgdD1lLmNsb3Nlc3QoJ1tkYXRhLXRlc3RpZD1cImZpZWxkXCJdJyl8fGU7Zm9yKGxldCBlPTA7ZTwzJiZ0O2UrKyl7bGV0IGU9dC5wYXJlbnRFbGVtZW50O2lmKCFlKWJyZWFrO2xldCByPUFycmF5LmZyb20oZS5jaGlsZHJlbiksbj1yLmluZGV4T2YodCk7aWYobjwwKWJyZWFrO2ZvcihsZXQgZT1uLTE7ZT49MDtlLS0pe2xldCB0PUYocltlXSk7aWYodClyZXR1cm4gdH10PWV9cmV0dXJuIG51bGx9ZnVuY3Rpb24gaihlLHQpe2xldCByPUkoZSk7cmV0dXJuIHI/KHIudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKS5yZXBsYWNlKC88W14+XSo+L2csXCJcIikudHJpbSgpOnR9ZnVuY3Rpb24gRCgpe2xldCBlPXt9LHQ9KDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLy8qW0BkYXRhLXRlc3RpZD1cImZpZWxkXCJdJyk7Zm9yKGxldCByIG9mIHQpe2xldCB0PSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKCcuLy9zcGFuW0BpZCBhbmQgY29udGFpbnMoQGlkLCBcIi1sYWJlbFwiKV0gfCAuLy9zcGFuW0BhcmlhLWRlc2NyaWJlZGJ5XScsciksbj1cIlwiO2lmKHQmJihuPSh0LnRleHRDb250ZW50fHxcIlwiKS50cmltKCkucmVwbGFjZSgvW1xcdTI3MzEqXSQvLFwiXCIpLnRyaW0oKSksIW4pe2xldCBlPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKCcuLy9pbnB1dFtAYXJpYS1sYWJlbGxlZGJ5XSB8IC4vLypbQHJvbGU9XCJjb21ib2JveFwiXVtAYXJpYS1sYWJlbGxlZGJ5XScscik7aWYoZSl7bGV0IHQ9ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIik7aWYodCl7bGV0IGU9dC5zcGxpdChcIiBcIik7Zm9yKGxldCB0IG9mIGUpe2xldCBlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQpO2lmKGUmJihuPShlLnRleHRDb250ZW50fHxcIlwiKS50cmltKCkucmVwbGFjZSgvW1xcdTI3MzEqXSQvLFwiXCIpLnRyaW0oKSkpYnJlYWt9fX19aWYoIW4pe2xldCBlPW51bGwsdD1yO2ZvcihsZXQgcj0wO3I8NSYmdDtyKyspe2xldCByPXQucGFyZW50RWxlbWVudDtpZighcilicmVhaztsZXQgbj1BcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbChcInBcIikpO2ZvcihsZXQgbyBvZiBuKXtsZXQgbj0oby50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpO2lmKG4ubGVuZ3RoPjEwKXtsZXQgbj1BcnJheS5mcm9tKHIuY2hpbGRyZW4pLmluZGV4T2YobyksaT1BcnJheS5mcm9tKHIuY2hpbGRyZW4pLmluZGV4T2YodC5jbG9zZXN0KCdbZGF0YS10ZXN0aWQ9XCJmaWVsZFwiXScpfHx0KTtpZihuPGkpe2U9bzticmVha319fWlmKGUpYnJlYWs7dD1yfWUmJihuPShlLnRleHRDb250ZW50fHxcIlwiKS50cmltKCkpfWlmKCFuKWNvbnRpbnVlO2lmKG4udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInBob25lXCIpKXtsZXQgdD1FKHIsbik7aWYodCl7T2JqZWN0LmFzc2lnbihlLHQpO2NvbnRpbnVlfX1sZXQgbz0oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vaW5wdXRbQHR5cGU9XCJjaGVja2JveFwiXVtAZGF0YS10ZXN0aWRdJyxyKTtpZihvKXtlW25dPW8uY2hlY2tlZD9cInRydWVcIjpcImZhbHNlXCI7Y29udGludWV9bGV0IGE9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vLypbQGRhdGEtdGVzdGlkPVwic2VsZWN0LWNvbnRyb2xsZXJcIl0gfCAuLy8qW0Byb2xlPVwiY29tYm9ib3hcIl1bQGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCJdJyxyKTtpZihhKXtsZXQgdD1hLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3JvbGU9XCJjb21ib2JveFwiXSwgaW5wdXRbZGF0YS1pbnB1dD1cInNlbGVjdC1zZWFyY2gtaW5wdXRcIl0nKSxyPXQ/LnZhbHVlfHxcIlwiO2lmKCFyKXtsZXQgZT1hLnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwiY29tYm9ib3hcIl0nKTtyPWU/LnRleHRDb250ZW50Py50cmltKCl8fFwiXCJ9aWYoIXIpe2xldCBlPWEucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RfX3NpbmdsZS12YWx1ZSwgcCwgc3BhblwiKTtyPWU/LnRleHRDb250ZW50Py50cmltKCl8fFwiXCJ9ZVtuXT1yO2NvbnRpbnVlfWxldCBsPSgwLGkuZ2V0Rmlyc3RPcmRlcmVkTm9kZVNhZmUpKFwiLi8vc2VsZWN0XCIscik7aWYobCl7bGV0IHQ9bC5vcHRpb25zW2wuc2VsZWN0ZWRJbmRleF07ZVtuXT10Py50ZXh0fHxcIlwiO2NvbnRpbnVlfWxldCBzPSgwLGkuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoJy4vL2lucHV0W0B0eXBlPVwicmFkaW9cIl0gfCAuLy8qW0Byb2xlPVwicmFkaW9cIl0nLHIpO2lmKHMubGVuZ3RoPjApe249aihyLG4pO2xldCB0PXMuZmluZChlPT5cIklOUFVUXCI9PT1lLnRhZ05hbWUmJlwicmFkaW9cIj09PWUudHlwZT9lLmNoZWNrZWQ6XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiKSk7aWYodCl7bGV0IHI9dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpO2lmKHIpZVtuXT1yLnRyaW0oKTtlbHNle2xldCByPXQuY2xvc2VzdChcImxhYmVsXCIpfHx0LmNsb3Nlc3QoJ1tkYXRhLXRlc3RpZCo9XCJjaGVja2JveC1sYWJlbFwiXScpfHx0LnBhcmVudEVsZW1lbnQ7aWYocil7bGV0IG89QXJyYXkuZnJvbShyLmNoaWxkTm9kZXMpLmZpbHRlcihlPT5lLm5vZGVUeXBlPT09Tm9kZS5URVhUX05PREV8fGUubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSYmIWUucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInJhZGlvXCJdLCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSkubWFwKGU9PmUudGV4dENvbnRlbnQ/LnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO2Vbbl09b3x8dC52YWx1ZXx8XCJcIn1lbHNlIGVbbl09dC52YWx1ZXx8XCJcIn19ZWxzZSBlW25dPVwiXCI7Y29udGludWV9bGV0IHU9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoJy4vL2lucHV0W0BkYXRhLWlucHV0XVtub3QoQHR5cGU9XCJoaWRkZW5cIildIHwgLi8vaW5wdXRbQHR5cGU9XCJ0ZXh0XCJdIHwgLi8vaW5wdXRbQHR5cGU9XCJlbWFpbFwiXSB8IC4vL2lucHV0W0B0eXBlPVwidGVsXCJdIHwgLi8vaW5wdXRbQHR5cGU9XCJ1cmxcIl0gfCAuLy9pbnB1dFtub3QoQHR5cGUpIGFuZCBub3QoQHJvbGU9XCJjb21ib2JveFwiKV0gfCAuLy90ZXh0YXJlYScscik7dSYmXCJmaWxlXCIhPT11LnR5cGUmJihlW25dPXUudmFsdWUpfXJldHVybiBlfWZ1bmN0aW9uIFAoKXtsZXQgZT17fSx0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtI2pvYi1hcHBsaWNhdGlvbi1mb3JtXCIpO2lmKCF0KXJldHVybiBlO2xldCByPUFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKFwibGFiZWxbZm9yXVwiKSksbj1uZXcgU2V0KHIpLG89QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGFiZWxbZm9yXVwiKSk7Zm9yKGxldCBlIG9mIG8pe2xldCB0PWUuZ2V0QXR0cmlidXRlKFwiZm9yXCIpO2lmKCF0KWNvbnRpbnVlO2xldCByPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQpO2lmKHIpe2xldCB0PShlLnRleHRDb250ZW50fHxcIlwiKS50cmltKCkucmVwbGFjZSgvXFxzKlxcKHJlcXVpcmVkXFwpXFxzKi9naSxcIlwiKS50cmltKCk7aWYodCl7bGV0IHQ9dShyKSxvPWMocik7dHx8b3x8bi5hZGQoZSl9fX1mb3IobGV0IG8gb2Ygcj1BcnJheS5mcm9tKG4pKXtsZXQgcj1vLmdldEF0dHJpYnV0ZShcImZvclwiKTtpZighciljb250aW51ZTtsZXQgbj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChyKTtpZighbiljb250aW51ZTtsZXQgaT0oby50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpLnJlcGxhY2UoL1xccypcXChyZXF1aXJlZFxcKVxccyovZ2ksXCJcIikudHJpbSgpLGE9dShuKSxsPWMobik7aWYoYXx8bHx8IWkpY29udGludWU7bGV0IHM9XCJcIjtpZihcIlNFTEVDVFwiPT09bi50YWdOYW1lKXtsZXQgZT1uO3M9ZS5vcHRpb25zW2Uuc2VsZWN0ZWRJbmRleF0/LnRleHQ/LnRyaW0oKXx8XCJcIn1lbHNlIGlmKFwiSU5QVVRcIj09PW4udGFnTmFtZSl7bGV0IGU9bjtpZihcImNoZWNrYm94XCI9PT1lLnR5cGUpcz1lLmNoZWNrZWQ/XCJ0cnVlXCI6XCJmYWxzZVwiO2Vsc2UgaWYoXCJyYWRpb1wiPT09ZS50eXBlKXtsZXQgcj10LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJHtlLm5hbWV9XCJdYCk7Zm9yKGxldCBlIG9mIEFycmF5LmZyb20ocikpaWYoZS5jaGVja2VkKXtsZXQgcj10LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7ZS5pZH1cIl1gKTtzPXI/LnRleHRDb250ZW50Py50cmltKCl8fGUudmFsdWU7YnJlYWt9fWVsc2UgaWYoXCJjb21ib2JveFwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpfHxlLmNsb3Nlc3QoXCIuU2VsZWN0XCIpKXtsZXQgdD1lLmNsb3Nlc3QoXCIuU2VsZWN0XCIpfHxlLmNsb3Nlc3QoXCIuU2VsZWN0LWNvbnRyb2xcIil8fGUucGFyZW50RWxlbWVudDtpZih0KXtsZXQgZT10LnF1ZXJ5U2VsZWN0b3IoXCIuU2VsZWN0LXZhbHVlLWxhYmVsLCAuU2VsZWN0LXZhbHVlLCAuc2VsZWN0X19zaW5nbGUtdmFsdWVcIik7ZSYmKHM9ZS50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiKX19ZWxzZSBzPWUudmFsdWV8fFwiXCJ9ZWxzZSBpZihcIlRFWFRBUkVBXCI9PT1uLnRhZ05hbWUpcz1uLnZhbHVlfHxcIlwiO2Vsc2V7bGV0IGU9bi5xdWVyeVNlbGVjdG9yKFwiLlNlbGVjdC12YWx1ZS1sYWJlbCwgLlNlbGVjdC12YWx1ZSwgLnNlbGVjdF9fc2luZ2xlLXZhbHVlXCIpO2lmKGUpcz1lLnRleHRDb250ZW50Py50cmltKCl8fFwiXCI7ZWxzZXtsZXQgZT1uLmNsb3Nlc3QoXCIuU2VsZWN0XCIpO2lmKGUpe2xldCB0PWUucXVlcnlTZWxlY3RvcihcIi5TZWxlY3QtdmFsdWUtbGFiZWwsIC5TZWxlY3QtdmFsdWUsIC5zZWxlY3RfX3NpbmdsZS12YWx1ZVwiKTt0JiYocz10LnRleHRDb250ZW50Py50cmltKCl8fFwiXCIpfX19cyYmKGVbaV09cyl9cmV0dXJuIGV9ZnVuY3Rpb24gXygpe2xldCBlPVtdLHQ9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDNcIikpLHI9dC5maW5kKGU9PmUudGV4dENvbnRlbnQ/LnRyaW0oKT09PVwiRWR1Y2F0aW9uXCIpLG49QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKS5maW5kKGU9PntsZXQgdD1lLnRleHRDb250ZW50Py50cmltKCl8fFwiXCIscj1lLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCI7cmV0dXJuIHQuaW5jbHVkZXMoXCJBZGQgTW9yZSBFZHVjYXRpb24gSGlzdG9yeVwiKXx8ci5pbmNsdWRlcyhcIkFkZCBNb3JlIEVkdWNhdGlvbiBIaXN0b3J5XCIpfSk7aWYoIXJ8fCFuKXJldHVybiBlO2xldCBvPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtI2pvYi1hcHBsaWNhdGlvbi1mb3JtXCIpO2lmKCFvKXJldHVybiBlO2xldCBpPUFycmF5LmZyb20oby5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikpLGE9bmV3IE1hcDtmb3IobGV0IGUgb2YgaSl7bGV0IHQ9ci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKSxvPSh0Jk5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HKSE9MCxpPWUuY29tcGFyZURvY3VtZW50UG9zaXRpb24obiksbD0oaSZOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORykhPTA7aWYobyYmbCl7bGV0IHQ9ZS5pZHx8XCJcIixyPWUubmFtZXx8XCJcIixuPSh0K3IpLm1hdGNoKC9cXC5yZXNwb25zZVxcLihcXGQrKVxcLi8pfHwodCtyKS5tYXRjaCgvcmVzcG9uc2VcXC4oXFxkKylcXC4vKXx8KHQrcikubWF0Y2goL1xcWyhcXGQrKVxcXS8pfHwodCtyKS5tYXRjaCgvLS0oXFxkKykvKXx8KHQrcikubWF0Y2goLy0oXFxkKyktLyk7aWYobil7bGV0IHQ9cGFyc2VJbnQoblsxXSwxMCk7YS5oYXModCl8fGEuc2V0KHQsbmV3IE1hcCk7bGV0IHI9ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIikmJmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIpfHxcIlwiKXx8ZS5pZCYmZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtlLmlkfVwiXWApfHxlLmNsb3Nlc3QoXCJsYWJlbFwiKTtpZihyKXtsZXQgbj0oci50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpLnJlcGxhY2UoL1xccypcXChyZXF1aXJlZFxcKVxccyovZ2ksXCJcIikudHJpbSgpLG89XCJcIjtpZihcIlNFTEVDVFwiPT09ZS50YWdOYW1lKXtsZXQgdD1lO289dC5vcHRpb25zW3Quc2VsZWN0ZWRJbmRleF0/LnRleHQ/LnRyaW0oKXx8XCJcIn1lbHNlIGlmKFwiSU5QVVRcIj09PWUudGFnTmFtZSl7bGV0IHQ9ZTtvPVwiY2hlY2tib3hcIj09PXQudHlwZT90LmNoZWNrZWQ/XCJ0cnVlXCI6XCJmYWxzZVwiOnQudmFsdWV8fFwiXCJ9ZWxzZVwiVEVYVEFSRUFcIj09PWUudGFnTmFtZSYmKG89ZS52YWx1ZXx8XCJcIik7biYmbyYmYS5nZXQodCkuc2V0KG4sbyl9fX19bGV0IGw9QXJyYXkuZnJvbShhLmtleXMoKSkuc29ydCgoZSx0KT0+ZS10KTtmb3IobGV0IHQgb2YgbCl7bGV0IHI9YS5nZXQodCk7aWYoci5zaXplPjApe2xldCB0PXt9O2ZvcihsZXRbZSxuXW9mIHIuZW50cmllcygpKXRbZV09bjtlLnB1c2godCl9fXJldHVybiBlfWZ1bmN0aW9uIEwoKXtsZXQgZT1bXSx0PUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImgzXCIpKSxyPXQuZmluZChlPT5lLnRleHRDb250ZW50Py50cmltKCk9PT1cIkVtcGxveW1lbnQgSGlzdG9yeVwiKSxuPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKSkuZmluZChlPT57bGV0IHQ9ZS50ZXh0Q29udGVudD8udHJpbSgpfHxcIlwiO3JldHVybiB0LmluY2x1ZGVzKFwiQWRkIEFub3RoZXIgUG9zaXRpb25cIil9KTtpZighcnx8IW4pcmV0dXJuIGU7bGV0IG89ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0jam9iLWFwcGxpY2F0aW9uLWZvcm1cIik7aWYoIW8pcmV0dXJuIGU7bGV0IGk9QXJyYXkuZnJvbShvLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSksYT1uZXcgTWFwO2ZvcihsZXQgZSBvZiBpKXtsZXQgdD1yLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpLG89KHQmTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkcpIT0wLGk9ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuKSxsPShpJk5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HKSE9MDtpZihvJiZsKXtsZXQgdD1lLmlkfHxcIlwiLHI9ZS5uYW1lfHxcIlwiLG49KHQrcikubWF0Y2goL1xcLnJlc3BvbnNlXFwuKFxcZCspXFwuLyl8fCh0K3IpLm1hdGNoKC9yZXNwb25zZVxcLihcXGQrKVxcLi8pfHwodCtyKS5tYXRjaCgvXFxbKFxcZCspXFxdLyl8fCh0K3IpLm1hdGNoKC8tLShcXGQrKS8pfHwodCtyKS5tYXRjaCgvLShcXGQrKS0vKTtpZihuKXtsZXQgdD1wYXJzZUludChuWzFdLDEwKTthLmhhcyh0KXx8YS5zZXQodCxuZXcgTWFwKTtsZXQgcj1lLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiKSYmZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIil8fFwiXCIpfHxlLmlkJiZkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke2UuaWR9XCJdYCl8fGUuY2xvc2VzdChcImxhYmVsXCIpO2lmKHIpe2xldCBuPShyLnRleHRDb250ZW50fHxcIlwiKS50cmltKCkucmVwbGFjZSgvXFxzKlxcKHJlcXVpcmVkXFwpXFxzKi9naSxcIlwiKS50cmltKCksbz1cIlwiO2lmKFwiU0VMRUNUXCI9PT1lLnRhZ05hbWUpe2xldCB0PWU7bz10Lm9wdGlvbnNbdC5zZWxlY3RlZEluZGV4XT8udGV4dD8udHJpbSgpfHxcIlwifWVsc2UgaWYoXCJJTlBVVFwiPT09ZS50YWdOYW1lKXtsZXQgdD1lO289XCJjaGVja2JveFwiPT09dC50eXBlP3QuY2hlY2tlZD9cInRydWVcIjpcImZhbHNlXCI6dC52YWx1ZXx8XCJcIn1lbHNlXCJURVhUQVJFQVwiPT09ZS50YWdOYW1lJiYobz1lLnZhbHVlfHxcIlwiKTtuJiZvJiZhLmdldCh0KS5zZXQobixvKX19fX1sZXQgbD1BcnJheS5mcm9tKGEua2V5cygpKS5zb3J0KChlLHQpPT5lLXQpO2ZvcihsZXQgdCBvZiBsKXtsZXQgcj1hLmdldCh0KTtpZihyLnNpemU+MCl7bGV0IHQ9e307Zm9yKGxldFtlLG5db2Ygci5lbnRyaWVzKCkpdFtlXT1uO2UucHVzaCh0KX19cmV0dXJuIGV9ZnVuY3Rpb24gUigpe2xldCBlPV8oKSx0PUwoKSxyPXt9O3JldHVybiBlJiZlLmxlbmd0aD4wJiYoci5lZHVjYXRpb249ZSksdCYmdC5sZW5ndGg+MCYmKHIuZW1wbG95bWVudD10KSxyfVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuNzc2ZDQ1MTEuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);