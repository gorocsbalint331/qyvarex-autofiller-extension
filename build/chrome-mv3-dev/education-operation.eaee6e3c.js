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
})({"LkZYJ":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\phenom\\education-operation.js",
    "bundleId": "4e4d8f50eaee6e3c",
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
var j = z(require("b3553b9aca288aca"));
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

},{"b3553b9aca288aca":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"5CGbh":[function(require,module,exports) {
/**
 * Parcel module id: 7eN6s
 * Resolved path: src/contents/sites/phenom/education-operation.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~api/autofill-client-search -> 3KzDR  =>  src/api/autofill-client-search.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "PHENOM_EDUCATION_STAGE_TIMEOUTS", ()=>s), n.export(r, "getFirstNonblankPhenomSchoolValue", ()=>E), n.export(r, "isPhenomSchoolRule", ()=>k), n.export(r, "getPhenomSchoolRecordKey", ()=>T), n.export(r, "getPhenomSchoolOriginalAnswer", ()=>F), n.export(r, "applyPhenomSchoolResolution", ()=>I), n.export(r, "takeResolvedPhenomSchoolValue", ()=>j), n.export(r, "resolvePhenomEducationClientSearchRecordForRule", ()=>L), n.export(r, "resolvePhenomEducationRecordForRule", ()=>R);
var o = e("@plasmohq/messaging"), i = e("~contents/methods/cancellation"), a = e("~core/enums"), l = e("~api/autofill-client-search");
let s = Object.freeze({
    prepare: 5e3,
    probe: 12e3,
    wait: 5e3,
    clear: 2e3,
    resolve: 6e4
}), u = new WeakMap, c = new WeakMap, d = new WeakMap;
class f extends Error {
    constructor(){
        super("Phenom Education attempt superseded"), this.name = "PhenomEducationAttemptSupersededError";
    }
}
class p extends Error {
    constructor(e1){
        super(`Phenom Education ${e1} stage timed out`), this.stage = e1, this.name = "PhenomEducationStageTimeoutError";
    }
}
function m(e1) {
    d.get(e1)?.abort();
    let t = (c.get(e1) ?? 0) + 1, r1 = new AbortController;
    return c.set(e1, t), d.set(e1, r1), u.delete(e1), {
        version: t,
        controller: r1
    };
}
function h(e1, t) {
    d.get(e1) === t && d.delete(e1);
}
function g(e1, t) {
    return c.get(e1) === t;
}
function b(e1, t) {
    let r1 = t?.[e1];
    return "number" == typeof r1 && Number.isFinite(r1) && r1 > 0 ? r1 : s[e1];
}
function y(e1, t, r1, n, o = !0) {
    o && (0, i.checkpoint)();
    let a = new AbortController, l = o ? (0, i.getCurrentCancelSignal)() : null, s = o ? (0, i.getCurrentSkipSignal)() : null;
    return new Promise((o, u)=>{
        let c, d = !1, m = ()=>{
            void 0 !== c && clearTimeout(c), l?.removeEventListener("abort", g), s?.removeEventListener("abort", b), n.removeEventListener("abort", y);
        }, h = (e1)=>{
            d || (d = !0, m(), e1());
        }, g = ()=>{
            a.abort(), h(()=>u(new i.CancelledError));
        }, b = ()=>{
            a.abort(), h(()=>u(new i.SkippedError));
        }, y = ()=>{
            a.abort(), h(()=>u(new f));
        };
        c = setTimeout(()=>{
            a.abort(), h(()=>u(new p(e1)));
        }, t), l?.addEventListener("abort", g, {
            once: !0
        }), s?.addEventListener("abort", b, {
            once: !0
        }), n.addEventListener("abort", y, {
            once: !0
        }), n.aborted && y(), Promise.resolve().then(()=>{
            if (a.signal.aborted) throw new f;
            return r1(a.signal);
        }).then((e1)=>h(()=>o(e1)), (e1)=>h(()=>u(e1)));
    });
}
function v(e1) {
    if (!e1 || "object" != typeof e1) return !1;
    let t = e1, r1 = t.result?.action;
    return !!t.operation && "object" == typeof t.operation && ("SELECT_OPTIONS" === r1 || "RETURN_EMPTY" === r1 || "RETRYABLE_FAILURE" === r1) && Array.isArray(t.result?.selected_values);
}
function w(e1) {
    return "string" == typeof e1 ? e1.trim().replace(/\s+/g, " ").toLowerCase() : "";
}
function S(e1) {
    let t = w(e1);
    return "school" === t || "school name" === t || "schoolname" === t || "school or university" === t;
}
_c = S;
function E(e1) {
    let t = Array.isArray(e1) ? e1 : [
        e1
    ];
    for (let e1 of t){
        if ("string" != typeof e1) continue;
        let t = e1.trim();
        if (t) return t;
    }
    return "";
}
_c1 = E;
function x(e1) {
    return e1 && "object" == typeof e1 ? w(e1.field_type) : "";
}
function C(e1, t, r1) {
    let n = {
        recordIndex: e1,
        stage: t,
        action: "fallback",
        reason: r1
    };
    console.warn(`[Phenom][Education] school resolution fallback record=${e1} stage=${t} reason=${r1}`, n);
}
_c2 = C;
function A(e1, t) {
    console.info(`[Phenom][Education][ClientSearch] ${e1} ${JSON.stringify(t)}`);
}
_c3 = A;
function k(e1) {
    return e1?.type === a.FIELD_TYPE.SEARCH && S(e1?.label);
}
function T(e1, t) {
    if (!k(e1) || !t || "object" != typeof t) return null;
    let r1 = Object.keys(t), n = w(e1.label);
    return r1.find((e1)=>w(e1) === n) ?? r1.find((e1)=>S(e1)) ?? null;
}
_c4 = T;
function F(e1, t) {
    let r1 = T(e1, t);
    return r1 ? E(t.rawSchool) || E(t[`${r1} original answer`]) || E(t[r1]) : "";
}
_c5 = F;
function I(e1, t, r1) {
    u.delete(e1);
    let n = T(e1, t);
    if (!n || r1?.result?.action !== "SELECT_OPTIONS" || !Array.isArray(r1.result.selected_values)) return t;
    let o = r1.result.selected_values.find((e1)=>"string" == typeof e1 && e1.trim());
    if (!o) return t;
    let i = Array.isArray(t.operation) ? [
        ...t.operation
    ] : [], a = i.findIndex((e1)=>"school" === x(e1));
    a >= 0 ? i.splice(a, 1, r1.operation) : i.push(r1.operation);
    let l = {
        ...t,
        [n]: o,
        operation: i
    };
    return u.set(e1, o), l;
}
_c6 = I;
function j(e1) {
    let t = u.get(e1) ?? "";
    return u.delete(e1), t;
}
function D(e1) {
    return e1.normalize("NFKC").trim().toLowerCase().replace(/\s+/gu, " ");
}
_c7 = D;
function P(e1, t) {
    if (1 !== t.length) return null;
    let r1 = t[0];
    if ("string" != typeof r1 || !r1.trim()) return null;
    let n = e1.flatMap((e1)=>e1.options).filter((e1)=>e1.text === r1);
    return 0 === n.length || 1 !== new Set(n.map((e1)=>e1.value)).size ? null : n[0];
}
_c8 = P;
function _(e1) {
    return "string" == typeof e1 && e1.trim().length > 0;
}
async function L(e1, t, r1, n) {
    if (!1 === n.enabled) return u.delete(e1), t;
    let o = T(e1, t), a = F(e1, t);
    if (!k(e1) || !o || !a) return u.delete(e1), t;
    let s = m(e1), c = e1.$input, d = [], f = null, v = null;
    try {
        if (!c) return t;
        for(let p = 0; p < 5; p += 1){
            if ((0, i.checkpoint)(), !g(e1, s.version)) return t;
            let m = v ? {
                resolve_session_id: f,
                round_id: v.round_id,
                options: v.options
            } : {
                source: "phenom",
                field_type: "school",
                question: (0, l.getAutofillClientSearchQuestion)("school"),
                original_answer: a
            };
            A("request", {
                recordIndex: r1,
                roundIndex: p,
                requestKind: v ? "options" : "initial",
                optionCount: v?.options.length ?? 0
            });
            let h = Date.now(), w = await y("resolve", b("resolve", n.stageTimeouts), ()=>n.requestStep(m), s.controller.signal);
            if (A("response", {
                recordIndex: r1,
                roundIndex: p,
                action: w.action,
                elapsedMs: Date.now() - h,
                hasResolveSessionId: "REQUEST_SEARCH" === w.action && _(w.resolve_session_id),
                hasRoundId: "REQUEST_SEARCH" === w.action && "string" == typeof w.round_id && w.round_id.trim().length > 0,
                searchInputLength: "REQUEST_SEARCH" === w.action ? w.search_input.length : 0,
                selectedCount: "SELECT_OPTIONS" === w.action ? w.selected_values.length : 0
            }), (0, i.checkpoint)(), !g(e1, s.version)) return t;
            if ("REQUEST_SEARCH" === w.action) {
                if (!_(w.resolve_session_id)) return C(r1, "client-search", "missing_resolve_session_id"), t;
                if (null !== f && w.resolve_session_id !== f) return C(r1, "client-search", "changed_resolve_session_id"), t;
                f = w.resolve_session_id;
                let o = D(w.search_input);
                if (!o || !w.round_id.trim() || d.some((e1)=>D(e1.search_input) === o || e1.round_id === w.round_id)) return C(r1, "client-search", "repeated_search"), t;
                let a = Date.now(), l = await y("probe", b("probe", n.stageTimeouts), ()=>n.captureCandidates(c, w.search_input), s.controller.signal);
                if (A("candidate-capture-finish", {
                    recordIndex: r1,
                    roundIndex: p,
                    status: l.status,
                    candidateCount: l.candidates.length,
                    elapsedMs: Date.now() - a
                }), (0, i.checkpoint)(), !g(e1, s.version)) return t;
                if ("failed" === l.status) return C(r1, "client-search", "search_failed"), t;
                let u = l.candidates.slice(0, 25);
                v = {
                    round_id: w.round_id,
                    search_input: w.search_input,
                    options: u
                }, d.push(v);
                continue;
            }
            if ("SELECT_OPTIONS" === w.action) {
                let a = P(d, w.selected_values);
                if (!a) return C(r1, "client-search", "invalid_selection"), t;
                let l = d.find((e1)=>e1.options.some((e1)=>e1.text === a.text && e1.value === a.value)), f = await y("resolve", b("resolve", n.stageTimeouts), ()=>n.commitCandidate(c, a, l?.search_input, a.value), s.controller.signal);
                if ((0, i.checkpoint)(), !g(e1, s.version)) return t;
                if (!f) return C(r1, "client-search", "exact_commit_failed"), t;
                return u.set(e1, a.text), {
                    ...t,
                    [o]: a.text
                };
            }
            if ("RETURN_EMPTY" === w.action || "RETRYABLE_FAILURE" === w.action) return C(r1, "client-search", "RETURN_EMPTY" === w.action ? "empty" : "retryable_failure"), t;
        }
        return C(r1, "client-search", "round_limit"), t;
    } catch (n) {
        if (n instanceof i.CancelledError || n instanceof i.SkippedError) throw n;
        if (!g(e1, s.version)) return t;
        return console.warn("[Phenom][Education][ClientSearch] stage-error " + JSON.stringify({
            recordIndex: r1,
            errorName: n instanceof Error ? n.name : typeof n,
            errorMessage: n instanceof Error ? n.message : "unknown",
            timeoutStage: n instanceof p ? n.stage : null,
            completedRoundCount: d.length
        })), C(r1, "client-search", "stage_failed"), t;
    } finally{
        h(e1, s.controller);
    }
}
_c9 = L;
async function R(e1, t, r1, n) {
    if (!1 === n.enabled) return u.delete(e1), t;
    let o = m(e1);
    try {
        return await O(e1, t, r1, n, o);
    } finally{
        h(e1, o.controller);
    }
}
_c10 = R;
async function O(e1, t, r1, n, a) {
    let l = a.version;
    if (!k(e1)) return t;
    let s = F(e1, t);
    if (!s) return t;
    let u = e1.$input, c = n.sendToBackground ?? o.sendToBackground, d = "prepare", f = "";
    try {
        let o, m;
        let h = await y("prepare", b("prepare", n.stageTimeouts), ()=>c({
                name: "preparePhenomSchoolCapture",
                body: {
                    expectedValue: s
                }
            }), a.controller.signal);
        if ((0, i.checkpoint)(), !g(e1, l)) return t;
        let w = "string" == typeof h?.captureId ? h.captureId : "";
        if (!w.trim()) return C(r1, d, "invalid_capture_id"), t;
        let S = !1, E = !0;
        try {
            if (d = "probe", await y("probe", b("probe", n.stageTimeouts), (e1)=>n.typeProbe(u, s, e1), a.controller.signal), (0, i.checkpoint)(), g(e1, l) || (E = !1), d = "wait", E) {
                let t = await y("wait", b("wait", n.stageTimeouts), ()=>c({
                        name: "waitForPhenomSchoolCapture",
                        body: {
                            captureId: w
                        }
                    }), a.controller.signal);
                (0, i.checkpoint)(), S = (E = g(e1, l)) && t?.ready === !0;
            }
        } catch (e1) {
            f = d, o = e1;
        } finally{
            if (E = g(e1, l)) try {
                d = "clear", await y("clear", b("clear", n.stageTimeouts), (t)=>{
                    if (g(e1, l)) return n.clearProbe(u, t);
                }, a.controller.signal, !1);
            } catch (e1) {
                m = e1;
            }
            E = g(e1, l);
        }
        if (o instanceof i.CancelledError || o instanceof i.SkippedError) throw o;
        if (m instanceof i.CancelledError || m instanceof i.SkippedError) throw m;
        if ((0, i.checkpoint)(), !E) return t;
        if (o) throw o;
        if (m) return C(r1, "clear", m instanceof p ? "stage_timeout" : "clear_failed"), t;
        if (!S) return C(r1, "wait", "capture_not_ready"), t;
        d = "resolve";
        let x = await y("resolve", b("resolve", n.stageTimeouts), ()=>c({
                name: "resolveCapturedPhenomSchool",
                body: {
                    captureId: w
                }
            }), a.controller.signal);
        if ((0, i.checkpoint)(), !g(e1, l) || null === x) return t;
        if (!v(x)) return C(r1, "resolve", "malformed_resolution"), t;
        if (!g(e1, l)) return t;
        return I(e1, t, x);
    } catch (n) {
        if (n instanceof i.CancelledError || n instanceof i.SkippedError) throw n;
        if (!g(e1, l)) return t;
        return C(r1, f || d, n instanceof p ? "stage_timeout" : "stage_failed"), t;
    }
}
_c11 = O;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
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

},{}]},["LkZYJ","5CGbh"], "5CGbh", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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bWUvZGlzdC9ydW50aW1lLTEzODM0ZDJmOGNiNmNiODAuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvcGhlbm9tL2VkdWNhdGlvbi1vcGVyYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxccGhlbm9tXFxcXGVkdWNhdGlvbi1vcGVyYXRpb24uanNcIixcImJ1bmRsZUlkXCI6XCI0ZTRkOGY1MGVhZWU2ZTNjXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogN2VONnNcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL3BoZW5vbS9lZHVjYXRpb24tb3BlcmF0aW9uLmpzXHJcbiAqIERlcGVuZGVuY2llczpcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIEBwbGFzbW9ocS9tZXNzYWdpbmcgLT4gOTJHeUIgID0+ICBAcGxhc21vaHEvbWVzc2FnaW5nLmpzXHJcbiAqICAgfmFwaS9hdXRvZmlsbC1jbGllbnQtc2VhcmNoIC0+IDNLekRSICA9PiAgc3JjL2FwaS9hdXRvZmlsbC1jbGllbnQtc2VhcmNoLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uIC0+IGx1SmZzICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKi9cclxuXHJcbnZhciBuPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO24uZGVmaW5lSW50ZXJvcEZsYWcociksbi5leHBvcnQocixcIlBIRU5PTV9FRFVDQVRJT05fU1RBR0VfVElNRU9VVFNcIiwoKT0+cyksbi5leHBvcnQocixcImdldEZpcnN0Tm9uYmxhbmtQaGVub21TY2hvb2xWYWx1ZVwiLCgpPT5FKSxuLmV4cG9ydChyLFwiaXNQaGVub21TY2hvb2xSdWxlXCIsKCk9PmspLG4uZXhwb3J0KHIsXCJnZXRQaGVub21TY2hvb2xSZWNvcmRLZXlcIiwoKT0+VCksbi5leHBvcnQocixcImdldFBoZW5vbVNjaG9vbE9yaWdpbmFsQW5zd2VyXCIsKCk9PkYpLG4uZXhwb3J0KHIsXCJhcHBseVBoZW5vbVNjaG9vbFJlc29sdXRpb25cIiwoKT0+SSksbi5leHBvcnQocixcInRha2VSZXNvbHZlZFBoZW5vbVNjaG9vbFZhbHVlXCIsKCk9PmopLG4uZXhwb3J0KHIsXCJyZXNvbHZlUGhlbm9tRWR1Y2F0aW9uQ2xpZW50U2VhcmNoUmVjb3JkRm9yUnVsZVwiLCgpPT5MKSxuLmV4cG9ydChyLFwicmVzb2x2ZVBoZW5vbUVkdWNhdGlvblJlY29yZEZvclJ1bGVcIiwoKT0+Uik7dmFyIG89ZShcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIiksaT1lKFwifmNvbnRlbnRzL21ldGhvZHMvY2FuY2VsbGF0aW9uXCIpLGE9ZShcIn5jb3JlL2VudW1zXCIpLGw9ZShcIn5hcGkvYXV0b2ZpbGwtY2xpZW50LXNlYXJjaFwiKTtsZXQgcz1PYmplY3QuZnJlZXplKHtwcmVwYXJlOjVlMyxwcm9iZToxMmUzLHdhaXQ6NWUzLGNsZWFyOjJlMyxyZXNvbHZlOjZlNH0pLHU9bmV3IFdlYWtNYXAsYz1uZXcgV2Vha01hcCxkPW5ldyBXZWFrTWFwO2NsYXNzIGYgZXh0ZW5kcyBFcnJvcntjb25zdHJ1Y3Rvcigpe3N1cGVyKFwiUGhlbm9tIEVkdWNhdGlvbiBhdHRlbXB0IHN1cGVyc2VkZWRcIiksdGhpcy5uYW1lPVwiUGhlbm9tRWR1Y2F0aW9uQXR0ZW1wdFN1cGVyc2VkZWRFcnJvclwifX1jbGFzcyBwIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoZSl7c3VwZXIoYFBoZW5vbSBFZHVjYXRpb24gJHtlfSBzdGFnZSB0aW1lZCBvdXRgKSx0aGlzLnN0YWdlPWUsdGhpcy5uYW1lPVwiUGhlbm9tRWR1Y2F0aW9uU3RhZ2VUaW1lb3V0RXJyb3JcIn19ZnVuY3Rpb24gbShlKXtkLmdldChlKT8uYWJvcnQoKTtsZXQgdD0oYy5nZXQoZSk/PzApKzEscj1uZXcgQWJvcnRDb250cm9sbGVyO3JldHVybiBjLnNldChlLHQpLGQuc2V0KGUsciksdS5kZWxldGUoZSkse3ZlcnNpb246dCxjb250cm9sbGVyOnJ9fWZ1bmN0aW9uIGgoZSx0KXtkLmdldChlKT09PXQmJmQuZGVsZXRlKGUpfWZ1bmN0aW9uIGcoZSx0KXtyZXR1cm4gYy5nZXQoZSk9PT10fWZ1bmN0aW9uIGIoZSx0KXtsZXQgcj10Py5bZV07cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHImJk51bWJlci5pc0Zpbml0ZShyKSYmcj4wP3I6c1tlXX1mdW5jdGlvbiB5KGUsdCxyLG4sbz0hMCl7byYmKDAsaS5jaGVja3BvaW50KSgpO2xldCBhPW5ldyBBYm9ydENvbnRyb2xsZXIsbD1vPygwLGkuZ2V0Q3VycmVudENhbmNlbFNpZ25hbCkoKTpudWxsLHM9bz8oMCxpLmdldEN1cnJlbnRTa2lwU2lnbmFsKSgpOm51bGw7cmV0dXJuIG5ldyBQcm9taXNlKChvLHUpPT57bGV0IGMsZD0hMSxtPSgpPT57dm9pZCAwIT09YyYmY2xlYXJUaW1lb3V0KGMpLGw/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLGcpLHM/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLGIpLG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIseSl9LGg9ZT0+e2R8fChkPSEwLG0oKSxlKCkpfSxnPSgpPT57YS5hYm9ydCgpLGgoKCk9PnUobmV3IGkuQ2FuY2VsbGVkRXJyb3IpKX0sYj0oKT0+e2EuYWJvcnQoKSxoKCgpPT51KG5ldyBpLlNraXBwZWRFcnJvcikpfSx5PSgpPT57YS5hYm9ydCgpLGgoKCk9PnUobmV3IGYpKX07Yz1zZXRUaW1lb3V0KCgpPT57YS5hYm9ydCgpLGgoKCk9PnUobmV3IHAoZSkpKX0sdCksbD8uYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsZyx7b25jZTohMH0pLHM/LmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLGIse29uY2U6ITB9KSxuLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLHkse29uY2U6ITB9KSxuLmFib3J0ZWQmJnkoKSxQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT57aWYoYS5zaWduYWwuYWJvcnRlZCl0aHJvdyBuZXcgZjtyZXR1cm4gcihhLnNpZ25hbCl9KS50aGVuKGU9PmgoKCk9Pm8oZSkpLGU9PmgoKCk9PnUoZSkpKX0pfWZ1bmN0aW9uIHYoZSl7aWYoIWV8fFwib2JqZWN0XCIhPXR5cGVvZiBlKXJldHVybiExO2xldCB0PWUscj10LnJlc3VsdD8uYWN0aW9uO3JldHVybiEhdC5vcGVyYXRpb24mJlwib2JqZWN0XCI9PXR5cGVvZiB0Lm9wZXJhdGlvbiYmKFwiU0VMRUNUX09QVElPTlNcIj09PXJ8fFwiUkVUVVJOX0VNUFRZXCI9PT1yfHxcIlJFVFJZQUJMRV9GQUlMVVJFXCI9PT1yKSYmQXJyYXkuaXNBcnJheSh0LnJlc3VsdD8uc2VsZWN0ZWRfdmFsdWVzKX1mdW5jdGlvbiB3KGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP2UudHJpbSgpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudG9Mb3dlckNhc2UoKTpcIlwifWZ1bmN0aW9uIFMoZSl7bGV0IHQ9dyhlKTtyZXR1cm5cInNjaG9vbFwiPT09dHx8XCJzY2hvb2wgbmFtZVwiPT09dHx8XCJzY2hvb2xuYW1lXCI9PT10fHxcInNjaG9vbCBvciB1bml2ZXJzaXR5XCI9PT10fWZ1bmN0aW9uIEUoZSl7bGV0IHQ9QXJyYXkuaXNBcnJheShlKT9lOltlXTtmb3IobGV0IGUgb2YgdCl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpY29udGludWU7bGV0IHQ9ZS50cmltKCk7aWYodClyZXR1cm4gdH1yZXR1cm5cIlwifWZ1bmN0aW9uIHgoZSl7cmV0dXJuIGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlP3coZS5maWVsZF90eXBlKTpcIlwifWZ1bmN0aW9uIEMoZSx0LHIpe2xldCBuPXtyZWNvcmRJbmRleDplLHN0YWdlOnQsYWN0aW9uOlwiZmFsbGJhY2tcIixyZWFzb246cn07Y29uc29sZS53YXJuKGBbUGhlbm9tXVtFZHVjYXRpb25dIHNjaG9vbCByZXNvbHV0aW9uIGZhbGxiYWNrIHJlY29yZD0ke2V9IHN0YWdlPSR7dH0gcmVhc29uPSR7cn1gLG4pfWZ1bmN0aW9uIEEoZSx0KXtjb25zb2xlLmluZm8oYFtQaGVub21dW0VkdWNhdGlvbl1bQ2xpZW50U2VhcmNoXSAke2V9ICR7SlNPTi5zdHJpbmdpZnkodCl9YCl9ZnVuY3Rpb24gayhlKXtyZXR1cm4gZT8udHlwZT09PWEuRklFTERfVFlQRS5TRUFSQ0gmJlMoZT8ubGFiZWwpfWZ1bmN0aW9uIFQoZSx0KXtpZighayhlKXx8IXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0KXJldHVybiBudWxsO2xldCByPU9iamVjdC5rZXlzKHQpLG49dyhlLmxhYmVsKTtyZXR1cm4gci5maW5kKGU9PncoZSk9PT1uKT8/ci5maW5kKGU9PlMoZSkpPz9udWxsfWZ1bmN0aW9uIEYoZSx0KXtsZXQgcj1UKGUsdCk7cmV0dXJuIHI/RSh0LnJhd1NjaG9vbCl8fEUodFtgJHtyfSBvcmlnaW5hbCBhbnN3ZXJgXSl8fEUodFtyXSk6XCJcIn1mdW5jdGlvbiBJKGUsdCxyKXt1LmRlbGV0ZShlKTtsZXQgbj1UKGUsdCk7aWYoIW58fHI/LnJlc3VsdD8uYWN0aW9uIT09XCJTRUxFQ1RfT1BUSU9OU1wifHwhQXJyYXkuaXNBcnJheShyLnJlc3VsdC5zZWxlY3RlZF92YWx1ZXMpKXJldHVybiB0O2xldCBvPXIucmVzdWx0LnNlbGVjdGVkX3ZhbHVlcy5maW5kKGU9Plwic3RyaW5nXCI9PXR5cGVvZiBlJiZlLnRyaW0oKSk7aWYoIW8pcmV0dXJuIHQ7bGV0IGk9QXJyYXkuaXNBcnJheSh0Lm9wZXJhdGlvbik/Wy4uLnQub3BlcmF0aW9uXTpbXSxhPWkuZmluZEluZGV4KGU9Plwic2Nob29sXCI9PT14KGUpKTthPj0wP2kuc3BsaWNlKGEsMSxyLm9wZXJhdGlvbik6aS5wdXNoKHIub3BlcmF0aW9uKTtsZXQgbD17Li4udCxbbl06byxvcGVyYXRpb246aX07cmV0dXJuIHUuc2V0KGUsbyksbH1mdW5jdGlvbiBqKGUpe2xldCB0PXUuZ2V0KGUpPz9cIlwiO3JldHVybiB1LmRlbGV0ZShlKSx0fWZ1bmN0aW9uIEQoZSl7cmV0dXJuIGUubm9ybWFsaXplKFwiTkZLQ1wiKS50cmltKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2d1LFwiIFwiKX1mdW5jdGlvbiBQKGUsdCl7aWYoMSE9PXQubGVuZ3RoKXJldHVybiBudWxsO2xldCByPXRbMF07aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHJ8fCFyLnRyaW0oKSlyZXR1cm4gbnVsbDtsZXQgbj1lLmZsYXRNYXAoZT0+ZS5vcHRpb25zKS5maWx0ZXIoZT0+ZS50ZXh0PT09cik7cmV0dXJuIDA9PT1uLmxlbmd0aHx8MSE9PW5ldyBTZXQobi5tYXAoZT0+ZS52YWx1ZSkpLnNpemU/bnVsbDpuWzBdfWZ1bmN0aW9uIF8oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJmUudHJpbSgpLmxlbmd0aD4wfWFzeW5jIGZ1bmN0aW9uIEwoZSx0LHIsbil7aWYoITE9PT1uLmVuYWJsZWQpcmV0dXJuIHUuZGVsZXRlKGUpLHQ7bGV0IG89VChlLHQpLGE9RihlLHQpO2lmKCFrKGUpfHwhb3x8IWEpcmV0dXJuIHUuZGVsZXRlKGUpLHQ7bGV0IHM9bShlKSxjPWUuJGlucHV0LGQ9W10sZj1udWxsLHY9bnVsbDt0cnl7aWYoIWMpcmV0dXJuIHQ7Zm9yKGxldCBwPTA7cDw1O3ArPTEpe2lmKCgwLGkuY2hlY2twb2ludCkoKSwhZyhlLHMudmVyc2lvbikpcmV0dXJuIHQ7bGV0IG09dj97cmVzb2x2ZV9zZXNzaW9uX2lkOmYscm91bmRfaWQ6di5yb3VuZF9pZCxvcHRpb25zOnYub3B0aW9uc306e3NvdXJjZTpcInBoZW5vbVwiLGZpZWxkX3R5cGU6XCJzY2hvb2xcIixxdWVzdGlvbjooMCxsLmdldEF1dG9maWxsQ2xpZW50U2VhcmNoUXVlc3Rpb24pKFwic2Nob29sXCIpLG9yaWdpbmFsX2Fuc3dlcjphfTtBKFwicmVxdWVzdFwiLHtyZWNvcmRJbmRleDpyLHJvdW5kSW5kZXg6cCxyZXF1ZXN0S2luZDp2P1wib3B0aW9uc1wiOlwiaW5pdGlhbFwiLG9wdGlvbkNvdW50OnY/Lm9wdGlvbnMubGVuZ3RoPz8wfSk7bGV0IGg9RGF0ZS5ub3coKSx3PWF3YWl0IHkoXCJyZXNvbHZlXCIsYihcInJlc29sdmVcIixuLnN0YWdlVGltZW91dHMpLCgpPT5uLnJlcXVlc3RTdGVwKG0pLHMuY29udHJvbGxlci5zaWduYWwpO2lmKEEoXCJyZXNwb25zZVwiLHtyZWNvcmRJbmRleDpyLHJvdW5kSW5kZXg6cCxhY3Rpb246dy5hY3Rpb24sZWxhcHNlZE1zOkRhdGUubm93KCktaCxoYXNSZXNvbHZlU2Vzc2lvbklkOlwiUkVRVUVTVF9TRUFSQ0hcIj09PXcuYWN0aW9uJiZfKHcucmVzb2x2ZV9zZXNzaW9uX2lkKSxoYXNSb3VuZElkOlwiUkVRVUVTVF9TRUFSQ0hcIj09PXcuYWN0aW9uJiZcInN0cmluZ1wiPT10eXBlb2Ygdy5yb3VuZF9pZCYmdy5yb3VuZF9pZC50cmltKCkubGVuZ3RoPjAsc2VhcmNoSW5wdXRMZW5ndGg6XCJSRVFVRVNUX1NFQVJDSFwiPT09dy5hY3Rpb24/dy5zZWFyY2hfaW5wdXQubGVuZ3RoOjAsc2VsZWN0ZWRDb3VudDpcIlNFTEVDVF9PUFRJT05TXCI9PT13LmFjdGlvbj93LnNlbGVjdGVkX3ZhbHVlcy5sZW5ndGg6MH0pLCgwLGkuY2hlY2twb2ludCkoKSwhZyhlLHMudmVyc2lvbikpcmV0dXJuIHQ7aWYoXCJSRVFVRVNUX1NFQVJDSFwiPT09dy5hY3Rpb24pe2lmKCFfKHcucmVzb2x2ZV9zZXNzaW9uX2lkKSlyZXR1cm4gQyhyLFwiY2xpZW50LXNlYXJjaFwiLFwibWlzc2luZ19yZXNvbHZlX3Nlc3Npb25faWRcIiksdDtpZihudWxsIT09ZiYmdy5yZXNvbHZlX3Nlc3Npb25faWQhPT1mKXJldHVybiBDKHIsXCJjbGllbnQtc2VhcmNoXCIsXCJjaGFuZ2VkX3Jlc29sdmVfc2Vzc2lvbl9pZFwiKSx0O2Y9dy5yZXNvbHZlX3Nlc3Npb25faWQ7bGV0IG89RCh3LnNlYXJjaF9pbnB1dCk7aWYoIW98fCF3LnJvdW5kX2lkLnRyaW0oKXx8ZC5zb21lKGU9PkQoZS5zZWFyY2hfaW5wdXQpPT09b3x8ZS5yb3VuZF9pZD09PXcucm91bmRfaWQpKXJldHVybiBDKHIsXCJjbGllbnQtc2VhcmNoXCIsXCJyZXBlYXRlZF9zZWFyY2hcIiksdDtsZXQgYT1EYXRlLm5vdygpLGw9YXdhaXQgeShcInByb2JlXCIsYihcInByb2JlXCIsbi5zdGFnZVRpbWVvdXRzKSwoKT0+bi5jYXB0dXJlQ2FuZGlkYXRlcyhjLHcuc2VhcmNoX2lucHV0KSxzLmNvbnRyb2xsZXIuc2lnbmFsKTtpZihBKFwiY2FuZGlkYXRlLWNhcHR1cmUtZmluaXNoXCIse3JlY29yZEluZGV4OnIscm91bmRJbmRleDpwLHN0YXR1czpsLnN0YXR1cyxjYW5kaWRhdGVDb3VudDpsLmNhbmRpZGF0ZXMubGVuZ3RoLGVsYXBzZWRNczpEYXRlLm5vdygpLWF9KSwoMCxpLmNoZWNrcG9pbnQpKCksIWcoZSxzLnZlcnNpb24pKXJldHVybiB0O2lmKFwiZmFpbGVkXCI9PT1sLnN0YXR1cylyZXR1cm4gQyhyLFwiY2xpZW50LXNlYXJjaFwiLFwic2VhcmNoX2ZhaWxlZFwiKSx0O2xldCB1PWwuY2FuZGlkYXRlcy5zbGljZSgwLDI1KTt2PXtyb3VuZF9pZDp3LnJvdW5kX2lkLHNlYXJjaF9pbnB1dDp3LnNlYXJjaF9pbnB1dCxvcHRpb25zOnV9LGQucHVzaCh2KTtjb250aW51ZX1pZihcIlNFTEVDVF9PUFRJT05TXCI9PT13LmFjdGlvbil7bGV0IGE9UChkLHcuc2VsZWN0ZWRfdmFsdWVzKTtpZighYSlyZXR1cm4gQyhyLFwiY2xpZW50LXNlYXJjaFwiLFwiaW52YWxpZF9zZWxlY3Rpb25cIiksdDtsZXQgbD1kLmZpbmQoZT0+ZS5vcHRpb25zLnNvbWUoZT0+ZS50ZXh0PT09YS50ZXh0JiZlLnZhbHVlPT09YS52YWx1ZSkpLGY9YXdhaXQgeShcInJlc29sdmVcIixiKFwicmVzb2x2ZVwiLG4uc3RhZ2VUaW1lb3V0cyksKCk9Pm4uY29tbWl0Q2FuZGlkYXRlKGMsYSxsPy5zZWFyY2hfaW5wdXQsYS52YWx1ZSkscy5jb250cm9sbGVyLnNpZ25hbCk7aWYoKDAsaS5jaGVja3BvaW50KSgpLCFnKGUscy52ZXJzaW9uKSlyZXR1cm4gdDtpZighZilyZXR1cm4gQyhyLFwiY2xpZW50LXNlYXJjaFwiLFwiZXhhY3RfY29tbWl0X2ZhaWxlZFwiKSx0O3JldHVybiB1LnNldChlLGEudGV4dCksey4uLnQsW29dOmEudGV4dH19aWYoXCJSRVRVUk5fRU1QVFlcIj09PXcuYWN0aW9ufHxcIlJFVFJZQUJMRV9GQUlMVVJFXCI9PT13LmFjdGlvbilyZXR1cm4gQyhyLFwiY2xpZW50LXNlYXJjaFwiLFwiUkVUVVJOX0VNUFRZXCI9PT13LmFjdGlvbj9cImVtcHR5XCI6XCJyZXRyeWFibGVfZmFpbHVyZVwiKSx0fXJldHVybiBDKHIsXCJjbGllbnQtc2VhcmNoXCIsXCJyb3VuZF9saW1pdFwiKSx0fWNhdGNoKG4pe2lmKG4gaW5zdGFuY2VvZiBpLkNhbmNlbGxlZEVycm9yfHxuIGluc3RhbmNlb2YgaS5Ta2lwcGVkRXJyb3IpdGhyb3cgbjtpZighZyhlLHMudmVyc2lvbikpcmV0dXJuIHQ7cmV0dXJuIGNvbnNvbGUud2FybihcIltQaGVub21dW0VkdWNhdGlvbl1bQ2xpZW50U2VhcmNoXSBzdGFnZS1lcnJvciBcIitKU09OLnN0cmluZ2lmeSh7cmVjb3JkSW5kZXg6cixlcnJvck5hbWU6biBpbnN0YW5jZW9mIEVycm9yP24ubmFtZTp0eXBlb2YgbixlcnJvck1lc3NhZ2U6biBpbnN0YW5jZW9mIEVycm9yP24ubWVzc2FnZTpcInVua25vd25cIix0aW1lb3V0U3RhZ2U6biBpbnN0YW5jZW9mIHA/bi5zdGFnZTpudWxsLGNvbXBsZXRlZFJvdW5kQ291bnQ6ZC5sZW5ndGh9KSksQyhyLFwiY2xpZW50LXNlYXJjaFwiLFwic3RhZ2VfZmFpbGVkXCIpLHR9ZmluYWxseXtoKGUscy5jb250cm9sbGVyKX19YXN5bmMgZnVuY3Rpb24gUihlLHQscixuKXtpZighMT09PW4uZW5hYmxlZClyZXR1cm4gdS5kZWxldGUoZSksdDtsZXQgbz1tKGUpO3RyeXtyZXR1cm4gYXdhaXQgTyhlLHQscixuLG8pfWZpbmFsbHl7aChlLG8uY29udHJvbGxlcil9fWFzeW5jIGZ1bmN0aW9uIE8oZSx0LHIsbixhKXtsZXQgbD1hLnZlcnNpb247aWYoIWsoZSkpcmV0dXJuIHQ7bGV0IHM9RihlLHQpO2lmKCFzKXJldHVybiB0O2xldCB1PWUuJGlucHV0LGM9bi5zZW5kVG9CYWNrZ3JvdW5kPz9vLnNlbmRUb0JhY2tncm91bmQsZD1cInByZXBhcmVcIixmPVwiXCI7dHJ5e2xldCBvLG07bGV0IGg9YXdhaXQgeShcInByZXBhcmVcIixiKFwicHJlcGFyZVwiLG4uc3RhZ2VUaW1lb3V0cyksKCk9PmMoe25hbWU6XCJwcmVwYXJlUGhlbm9tU2Nob29sQ2FwdHVyZVwiLGJvZHk6e2V4cGVjdGVkVmFsdWU6c319KSxhLmNvbnRyb2xsZXIuc2lnbmFsKTtpZigoMCxpLmNoZWNrcG9pbnQpKCksIWcoZSxsKSlyZXR1cm4gdDtsZXQgdz1cInN0cmluZ1wiPT10eXBlb2YgaD8uY2FwdHVyZUlkP2guY2FwdHVyZUlkOlwiXCI7aWYoIXcudHJpbSgpKXJldHVybiBDKHIsZCxcImludmFsaWRfY2FwdHVyZV9pZFwiKSx0O2xldCBTPSExLEU9ITA7dHJ5e2lmKGQ9XCJwcm9iZVwiLGF3YWl0IHkoXCJwcm9iZVwiLGIoXCJwcm9iZVwiLG4uc3RhZ2VUaW1lb3V0cyksZT0+bi50eXBlUHJvYmUodSxzLGUpLGEuY29udHJvbGxlci5zaWduYWwpLCgwLGkuY2hlY2twb2ludCkoKSxnKGUsbCl8fChFPSExKSxkPVwid2FpdFwiLEUpe2xldCB0PWF3YWl0IHkoXCJ3YWl0XCIsYihcIndhaXRcIixuLnN0YWdlVGltZW91dHMpLCgpPT5jKHtuYW1lOlwid2FpdEZvclBoZW5vbVNjaG9vbENhcHR1cmVcIixib2R5OntjYXB0dXJlSWQ6d319KSxhLmNvbnRyb2xsZXIuc2lnbmFsKTsoMCxpLmNoZWNrcG9pbnQpKCksUz0oRT1nKGUsbCkpJiZ0Py5yZWFkeT09PSEwfX1jYXRjaChlKXtmPWQsbz1lfWZpbmFsbHl7aWYoRT1nKGUsbCkpdHJ5e2Q9XCJjbGVhclwiLGF3YWl0IHkoXCJjbGVhclwiLGIoXCJjbGVhclwiLG4uc3RhZ2VUaW1lb3V0cyksdD0+e2lmKGcoZSxsKSlyZXR1cm4gbi5jbGVhclByb2JlKHUsdCl9LGEuY29udHJvbGxlci5zaWduYWwsITEpfWNhdGNoKGUpe209ZX1FPWcoZSxsKX1pZihvIGluc3RhbmNlb2YgaS5DYW5jZWxsZWRFcnJvcnx8byBpbnN0YW5jZW9mIGkuU2tpcHBlZEVycm9yKXRocm93IG87aWYobSBpbnN0YW5jZW9mIGkuQ2FuY2VsbGVkRXJyb3J8fG0gaW5zdGFuY2VvZiBpLlNraXBwZWRFcnJvcil0aHJvdyBtO2lmKCgwLGkuY2hlY2twb2ludCkoKSwhRSlyZXR1cm4gdDtpZihvKXRocm93IG87aWYobSlyZXR1cm4gQyhyLFwiY2xlYXJcIixtIGluc3RhbmNlb2YgcD9cInN0YWdlX3RpbWVvdXRcIjpcImNsZWFyX2ZhaWxlZFwiKSx0O2lmKCFTKXJldHVybiBDKHIsXCJ3YWl0XCIsXCJjYXB0dXJlX25vdF9yZWFkeVwiKSx0O2Q9XCJyZXNvbHZlXCI7bGV0IHg9YXdhaXQgeShcInJlc29sdmVcIixiKFwicmVzb2x2ZVwiLG4uc3RhZ2VUaW1lb3V0cyksKCk9PmMoe25hbWU6XCJyZXNvbHZlQ2FwdHVyZWRQaGVub21TY2hvb2xcIixib2R5OntjYXB0dXJlSWQ6d319KSxhLmNvbnRyb2xsZXIuc2lnbmFsKTtpZigoMCxpLmNoZWNrcG9pbnQpKCksIWcoZSxsKXx8bnVsbD09PXgpcmV0dXJuIHQ7aWYoIXYoeCkpcmV0dXJuIEMocixcInJlc29sdmVcIixcIm1hbGZvcm1lZF9yZXNvbHV0aW9uXCIpLHQ7aWYoIWcoZSxsKSlyZXR1cm4gdDtyZXR1cm4gSShlLHQseCl9Y2F0Y2gobil7aWYobiBpbnN0YW5jZW9mIGkuQ2FuY2VsbGVkRXJyb3J8fG4gaW5zdGFuY2VvZiBpLlNraXBwZWRFcnJvcil0aHJvdyBuO2lmKCFnKGUsbCkpcmV0dXJuIHQ7cmV0dXJuIEMocixmfHxkLG4gaW5zdGFuY2VvZiBwP1wic3RhZ2VfdGltZW91dFwiOlwic3RhZ2VfZmFpbGVkXCIpLHR9fVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiZWR1Y2F0aW9uLW9wZXJhdGlvbi5lYWVlNmUzYy5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);