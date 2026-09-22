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
})({"lIReG":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\breezy\\rules.js",
    "bundleId": "48191fca724bea6e",
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
var j = z(require("ef094044b225934"));
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

},{"ef094044b225934":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"7PbvZ":[function(require,module,exports) {
/**
 * Parcel module id: hU5fc
 * Resolved path: src/contents/sites/breezy/rules.js
 * Dependencies:
 *   ./polyglot -> elvDI  =>  src/contents/sites/breezy/polyglot.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */ var n, o = e("@parcel/transformer-js/src/esmodule-helpers.js");
o.defineInteropFlag(r), o.export(r, "HARDCODE_KEY", ()=>n), o.export(r, "getBreezySalaryFieldType", ()=>s), o.export(r, "hardCodeConfig", ()=>c), o.export(r, "getFillingLabels", ()=>d), o.export(r, "getRules", ()=>f), o.export(r, "findCoverLetterTextarea", ()=>p), o.export(r, "processEduOrWorkExpRules", ()=>b), o.export(r, "findAndRemoveRule", ()=>I), o.export(r, "getSubmitButtonText", ()=>j), o.export(r, "getBreezySubmitButtonXpath", ()=>D);
var i = e("~core/enums"), a = e("~core/xpath"), l = e("./polyglot");
function s(e1) {
    return /\b(salary|compensation|pay)\b/i.test(e1) ? /\b(range|minimum and maximum|min and max)\b/i.test(e1) ? i.FIELD_TYPE.TEXT : i.FIELD_TYPE.NUMBER : i.FIELD_TYPE.TEXT;
}
!function(e1) {
    e1.education = "education", e1.workExperience = "workExperience";
}(n || (n = {}));
let u = (e1)=>`.//div[@class="section-footer"]//a[child::span[${(0, l.buildBreezyPolyglotXpathTextCondition)(e1, (e1)=>`contains(text(), "${e1}")`)}]]`, c = {
    [n.education]: {
        key: n.education,
        container: './/li[@ng-repeat="candidateSchool in candidate.education"]',
        snapshot: '//li[@ng-repeat="candidateSchool in candidate.education"]',
        addButton: u("Add Education"),
        fields: [
            {
                key: "School",
                xpath: './/input[@ng-model="candidateSchool.school_name"]'
            },
            {
                key: "Study",
                xpath: './/input[@ng-model="candidateSchool.field_of_study"]'
            },
            {
                key: "Start",
                xpath: './/input[@ng-model="candidateSchool.date_start"]'
            },
            {
                key: "End",
                xpath: './/input[@ng-model="candidateSchool.date_end"]'
            }
        ]
    },
    [n.workExperience]: {
        key: n.workExperience,
        container: './/li[@ng-repeat="candidatePosition in candidate.work_history"]',
        snapshot: '//li[@ng-repeat="candidatePosition in candidate.work_history"]',
        addButton: u("Add Position"),
        fields: [
            {
                key: "Title",
                xpath: './/input[@ng-model="candidatePosition.title"]'
            },
            {
                key: "Organization",
                alternateKey: "Company",
                xpath: './/input[@ng-model="candidatePosition.company_name"]'
            },
            {
                key: "Start",
                xpath: './/input[@ng-model="candidatePosition.date_start"]'
            },
            {
                key: "End",
                xpath: './/input[@ng-model="candidatePosition.date_end"]'
            },
            {
                key: "jobDescriptions",
                xpath: './/textarea[@ng-model="candidatePosition.summary"]'
            }
        ]
    }
}, d = ()=>(0, a.getOrderedNodes)('//h3[contains(@class, "polygot") or child::span[@class="polygot" or contains(@class,"ng-binding")] or @class="polygot" or contains(@class, "ng-binding")]'), f = async ()=>{
    let e1 = d(), t = [];
    for (let r1 of e1){
        let e1 = m(r1);
        Array.isArray(e1) && t.push(...e1), e1 && !Array.isArray(e1) && t.push(e1);
    }
    return t;
};
function p() {
    let e1 = (0, a.getOrderedNodes)('//textarea[@name="cCoverLetter" or @ng-model="candidate.cover_letter"]');
    if (0 === e1.length) return null;
    let t = e1.find((e1)=>{
        let t = e1.closest?.('div[class*="section"]')?.querySelector("h3");
        return !!t && (0, l.matchesBreezyLabel)(T(t), "Cover Letter");
    });
    return t ?? e1[0];
}
let m = (e1)=>{
    let t = y(e1);
    if (t) return t;
    let r1 = h(e1);
    if (r1) return r1;
    let n = A(e1);
    if (n) return n;
    let o = C(e1);
    if (o) return o;
    let i = v(e1);
    if (i) return i;
    let a = w(e1);
    if (a) return a;
    let l = S(e1);
    if (l) return l;
    let s = E(e1);
    if (s) return s;
    let u = x(e1);
    return u || null;
}, h = (e1)=>{
    let t = T(e1);
    if ("Education" !== t) return null;
    let r1 = (0, a.getFirstOrderedNode)("//h3/parent::div/following-sibling::ul/li", e1);
    if (r1) {
        let n = [], o = (0, a.getFirstOrderedNode)('//input[@placeholder="School"]', r1), l = (0, a.getFirstOrderedNode)('//input[@placeholder="Study"]', r1), s = (0, a.getFirstOrderedNode)('//textarea[@placeholder="Summary"]', r1), u = (0, a.getFirstOrderedNode)('//input[@ng-model="candidateSchool.date_start"]', r1), c = (0, a.getFirstOrderedNode)('//input[@ng-model="candidateSchool.date_end"]', r1);
        n.push({
            type: i.FIELD_TYPE.TEXT,
            label: "School",
            required: !0,
            $input: o,
            $label: e1
        }), n.push({
            type: i.FIELD_TYPE.TEXT,
            label: "Study",
            required: !1,
            $input: l,
            $label: e1
        }), n.push({
            type: i.FIELD_TYPE.TEXT,
            label: "Summary",
            required: !1,
            $input: s,
            $label: e1
        }), n.push({
            type: i.FIELD_TYPE.DATE,
            label: "Start date",
            required: !1,
            $input: u,
            $label: e1
        }), n.push({
            type: i.FIELD_TYPE.DATE,
            label: "End date",
            required: !1,
            $input: c,
            $label: e1
        });
        let d = n.map((e1)=>({
                type: e1.type,
                label: e1.label
            }));
        return {
            label: t,
            required: !1,
            type: i.FIELD_TYPE.EDUCATION,
            $input: r1,
            options: d,
            children: n
        };
    }
    return null;
}, g = (e1)=>{
    let t = "";
    t = e1 ? '//li[@ng-repeat="candidateSchool in candidate.education"]' : '//li[@ng-repeat="candidatePosition in candidate.work_history"]';
    let r1 = (0, a.getOrderedNodes)(t, document);
    return r1;
}, b = (e1)=>{
    let t = g(e1), r1 = [], n = [];
    if (e1 ? (r1 = [
        i.FIELD_TYPE.TEXT,
        i.FIELD_TYPE.TEXT,
        i.FIELD_TYPE.TEXT,
        i.FIELD_TYPE.DATE,
        i.FIELD_TYPE.DATE
    ], n = [
        "School",
        "Study",
        "Summary",
        "Start date",
        "End date"
    ]) : (r1 = [
        i.FIELD_TYPE.TEXT,
        i.FIELD_TYPE.TEXT,
        i.FIELD_TYPE.TEXT,
        i.FIELD_TYPE.DATE,
        i.FIELD_TYPE.DATE
    ], n = [
        "Company",
        "Title",
        "Summary",
        "Start date",
        "End date"
    ]), t.length > 0) {
        let o = [];
        for(let l = 0; l < t.length; l++){
            let s = [], u = [], c = t[l], d = (0, a.getOrderedNodes)(".//input | .//textarea", c);
            for(let e1 = 0; e1 < r1.length; e1++){
                if (!d[e1]) continue;
                let t = r1[e1];
                if (t === i.FIELD_TYPE.TEXT) s.push({
                    type: i.FIELD_TYPE.TEXT,
                    label: n[e1],
                    required: !1,
                    $input: d[e1],
                    $label: c
                }), u.push({
                    type: i.FIELD_TYPE.TEXT,
                    label: n[e1],
                    option: []
                });
                else if (t === i.FIELD_TYPE.DATE) s.push({
                    type: i.FIELD_TYPE.DATE,
                    label: n[e1],
                    required: !1,
                    $input: d[e1],
                    $label: c
                }), u.push({
                    type: i.FIELD_TYPE.DATE,
                    label: n[e1],
                    option: []
                });
                else throw Error(`Unsupported field type: ${t} in Edu/Work Exp processing`);
            }
            o.push({
                children: s,
                label: e1 ? "Education" : "Work History",
                options: u,
                required: !1,
                type: e1 ? i.FIELD_TYPE.EDUCATION : i.FIELD_TYPE.EMPLOYMENT
            });
        }
        return o;
    }
    return null;
}, y = (e1)=>{
    let t = T(e1);
    if ("Work History" !== t) return null;
    let r1 = (0, a.getFirstOrderedNode)("//h3/parent::div/following-sibling::ul/li", e1);
    if (r1) {
        let n = [], o = (0, a.getFirstOrderedNode)('//input[@placeholder="School"]', r1), l = (0, a.getFirstOrderedNode)('//input[@placeholder="Study"]', r1), s = (0, a.getFirstOrderedNode)('//textarea[@placeholder="Summary"]', r1), u = (0, a.getFirstOrderedNode)('//input[@ng-model="candidateSchool.date_start"]', r1), c = (0, a.getFirstOrderedNode)('//input[@ng-model="candidateSchool.date_end"]', r1);
        n.push({
            type: i.FIELD_TYPE.TEXT,
            label: "Company",
            required: !0,
            $input: o,
            $label: e1
        }), n.push({
            type: i.FIELD_TYPE.TEXT,
            label: "Title",
            required: !1,
            $input: l,
            $label: e1
        }), n.push({
            type: i.FIELD_TYPE.TEXT,
            label: "Summary",
            required: !1,
            $input: s,
            $label: e1
        }), n.push({
            type: i.FIELD_TYPE.DATE,
            label: "Start date",
            required: !1,
            $input: u,
            $label: e1
        }), n.push({
            type: i.FIELD_TYPE.DATE,
            label: "End date",
            required: !1,
            $input: c,
            $label: e1
        });
        let d = n.map((e1)=>({
                type: e1.type,
                label: e1.label
            }));
        return {
            label: t,
            required: !1,
            type: i.FIELD_TYPE.EMPLOYMENT,
            $input: r1,
            options: d,
            children: n
        };
    }
    return null;
}, v = (e1)=>{
    let t = T(e1), r1 = (0, a.getFirstOrderedNode)('./following-sibling::input[@type="text" or @type="email"]', e1);
    return r1 ? {
        type: s(t),
        label: t,
        required: F(e1),
        $input: r1,
        $label: e1
    } : null;
}, w = (e1)=>{
    let t = T(e1), r1 = (0, a.getFirstOrderedNode)("../following-sibling::textarea", e1);
    return (r1 || (r1 = (0, a.getFirstOrderedNode)("./following-sibling::textarea", e1)), r1) ? {
        type: s(t),
        label: t,
        required: F(e1),
        $input: r1,
        $label: e1
    } : null;
}, S = (e1)=>{
    let t = T(e1), r1 = (0, a.getFirstOrderedNode)("./following-sibling::div[@class='dropdown-container']//select | ./following-sibling::select", e1);
    if (r1) {
        let n = r1, o = k(n);
        return {
            type: i.FIELD_TYPE.SELECT,
            label: t,
            required: F(e1),
            options: o,
            $input: n,
            $label: e1
        };
    }
    return null;
}, E = (e1)=>{
    let t = T(e1), r1 = './/ancestor::li[contains(@class, "question") or contains(@class, "multiplechoice")]//input[@type="radio"]';
    "Veteran status" === t && (r1 = './following-sibling::ul//input[@type="radio" and contains(@id, "vet")]'), "Voluntary Self-Identification of Disability" === t && (r1 = './following-sibling::ul//input[@type="radio" and contains(@id, "disability")]');
    let n = (0, a.getOrderedNodes)(r1, e1);
    if (n.length > 0) {
        let r1 = n.map((e1)=>{
            let t = e1, r1 = t.closest("label") || t.nextElementSibling;
            return r1?.textContent?.trim() || "";
        });
        return {
            type: i.FIELD_TYPE.RADIO,
            label: t,
            required: F(e1),
            options: r1,
            $input: n,
            $label: e1,
            $radioParent: e1
        };
    }
    return null;
}, x = (e1)=>{
    let t = T(e1), r1 = (0, a.getOrderedNodes)('.//ancestor::li[contains(@class, "question") or contains(@class, "multiplechoice") or contains(@class, "option")]//input[@type="checkbox"]', e1);
    if (r1.length > 0) {
        let n = r1.map((e1)=>{
            let t = e1, r1 = t.closest("label") || t.nextElementSibling;
            return r1?.textContent?.trim() || "";
        });
        return {
            type: i.FIELD_TYPE.CHECKBOX,
            label: t,
            required: F(e1),
            $label: e1,
            options: n,
            $checkboxs: r1
        };
    }
    return null;
}, C = (e1)=>{
    let t = T(e1), r1 = (0, a.getFirstOrderedNode)('./following-sibling::input[@type="date"]', e1);
    return r1 ? {
        type: i.FIELD_TYPE.DATE,
        label: t,
        required: F(e1),
        $input: r1,
        $label: e1
    } : null;
}, A = (e1)=>{
    let t = T(e1);
    if (!t.includes("Desired Salary")) return null;
    let r1 = [], n = (0, a.getFirstOrderedNode)("./following::select[@ng-model='candidate.salary.currency']", e1), o = (0, a.getFirstOrderedNode)("./following-sibling::input[@ng-model='candidate.salary.salary']", e1), l = (0, a.getFirstOrderedNode)("./following::select[@ng-model='candidate.salary.period']", e1);
    if (n && o && l) {
        let a = k(n), u = k(l);
        return r1.push({
            type: i.FIELD_TYPE.SELECT,
            label: "Currency of Desired Salary",
            options: a,
            required: F(e1),
            $input: n,
            $label: e1
        }), r1.push({
            type: s(t),
            label: /\brange\b/i.test(t) ? "Desired Salary Range" : "Desired Salary Monthly, you must provide a number",
            required: F(e1),
            $input: o,
            $label: e1
        }), r1.push({
            type: i.FIELD_TYPE.SELECT,
            label: "Period of Desired Salary, must select one, default to Monthly",
            options: u,
            required: F(e1),
            $input: l,
            $label: e1
        }), r1;
    }
    return null;
}, k = (e1)=>Array.from(e1.options).filter((e1)=>"" !== e1.value.trim() && !e1.value.trim().startsWith("?")).map((e1)=>e1.text.trim()), T = (e1)=>{
    let t = e1?.textContent?.replaceAll("*", "").trim() || "";
    return (0, l.canonicalizeBreezyLabel)(t);
}, F = (e1)=>{
    let t = e1.querySelector(".required:not(.ng-hide)");
    return null !== t;
}, I = (e1, t)=>{
    let r1 = e1.findIndex((e1)=>(0, l.matchesBreezyLabel)(e1.label, t));
    return -1 !== r1 ? e1.splice(r1, 1)[0] : null;
}, j = ()=>"Submit", D = ()=>`//button[.//span[${(0, l.buildBreezyPolyglotXpathTextCondition)("Submit Application", (e1)=>`text()="${e1}"`)}]]`;

},{}]},["lIReG","7PbvZ"], "7PbvZ", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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LFVBQVU7SUFDdEQsT0FBTyxBQUFDLENBQUEsR0FBRyxFQUFFLHVCQUFzQixFQUFHO0FBQ3hDLEdBQ0EsSUFBSSxDQUFBO0lBQ0YsSUFBSSxJQUFJLEdBQUUsY0FBYztJQUN4QixPQUFPLFNBQVM7QUFDbEIsR0FDQSxJQUFJLENBQUMsSUFBRztJQUNOLElBQUksS0FBSSxHQUFFLFVBQVUsQ0FBQSxLQUFLLEFBQUMsQ0FBQSxHQUFHLEVBQUUsa0JBQWlCLEVBQUcsR0FBRSxPQUFPO0lBQzVELE9BQU8sT0FBTyxLQUFJLEdBQUUsT0FBTyxJQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUc7QUFDeEMsR0FDQSxJQUFJLElBQU0sVUFDVixJQUFJLElBQ0osQ0FBQyxpQkFBaUIsRUFBRSxBQUFDLENBQUEsR0FBRSxFQUFFLHFDQUFvQyxFQUFHLHNCQUFxQixDQUFBLEtBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTM0MDc0NzhkOWNmOTU4YzQuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvYnJlZXp5L3J1bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBXPU9iamVjdC5jcmVhdGU7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBWPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIEc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIFg9T2JqZWN0LmdldFByb3RvdHlwZU9mLEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcT0oZSx0LG8scik9PntpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcInx8dHlwZW9mIHQ9PVwiZnVuY3Rpb25cIilmb3IobGV0IG4gb2YgRyh0KSkhSi5jYWxsKGUsbikmJm4hPT1vJiZQKGUsbix7Z2V0OigpPT50W25dLGVudW1lcmFibGU6IShyPVYodCxuKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgej0oZSx0LG8pPT4obz1lIT1udWxsP1coWChlKSk6e30scSh0fHwhZXx8IWUuX19lc01vZHVsZT9QKG8sXCJkZWZhdWx0XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMH0pOm8sZSkpO3ZhciB5PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIEg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSz1uZXcgU2V0KHkpLEQ9ZT0+Sy5oYXMoZSksdWU9eS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBkZT1EKFwiLS1kcnktcnVuXCIpLF89KCk9PkQoXCItLXZlcmJvc2VcIil8fEgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsZmU9XygpO3ZhciB4PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciBrPSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksVD0oLi4uZSk9PngoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxBPSguLi5lKT0+eChcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFE9MCxwPSguLi5lKT0+XygpJiZ4KGBcXHV7MUY3RTF9ICR7USsrfWAsLi4uZSk7dmFyIGM9e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wicGFnZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcam9icmlnaHQtZm9ya1xcXFxleHRlbnNpb25cXFxcc3JjXFxcXGNvbnRlbnRzXFxcXHNpdGVzXFxcXGJyZWV6eVxcXFxydWxlcy5qc1wiLFwiYnVuZGxlSWRcIjpcIjQ4MTkxZmNhNzI0YmVhNmVcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9Yy5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOmMudmVyYm9zZX19O3ZhciBZPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIFooZSl7WS5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1aO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgZD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2FzeW5jIGZ1bmN0aW9uIG0oZT0hMSl7ZT8ocChcIlRyaWdnZXJpbmcgZnVsbCByZWxvYWRcIiksZC5ydW50aW1lLnNlbmRNZXNzYWdlKHtfX3BsYXNtb19mdWxsX3JlbG9hZF9fOiEwfSkpOmdsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCl9ZnVuY3Rpb24gdygpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBMKCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gZigpe3JldHVybiBjLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFM9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCI7dmFyIGk9e2NoZWNrZWRBc3NldHM6e30sYXNzZXRzVG9EaXNwb3NlOltdLGFzc2V0c1RvQWNjZXB0OltdfSxCPSgpPT57aS5jaGVja2VkQXNzZXRzPXt9LGkuYXNzZXRzVG9EaXNwb3NlPVtdLGkuYXNzZXRzVG9BY2NlcHQ9W119O2Z1bmN0aW9uIHUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKCFvKXJldHVybltdO2xldCByPVtdLG4scyxhO2ZvcihuIGluIG8pZm9yKHMgaW4gb1tuXVsxXSlhPW9bbl1bMV1bc10sKGE9PT10fHxBcnJheS5pc0FycmF5KGEpJiZhW2EubGVuZ3RoLTFdPT09dCkmJnIucHVzaChbZSxuXSk7cmV0dXJuIGUucGFyZW50JiYocj1yLmNvbmNhdCh1KGUucGFyZW50LHQpKSkscn1mdW5jdGlvbiBSKGUsdCxvKXtpZihDKGUsdCxvKSlyZXR1cm4hMDtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KSxuPSExO2Zvcig7ci5sZW5ndGg+MDspe2xldFtzLGFdPXIuc2hpZnQoKTtpZihDKHMsYSxudWxsKSluPSEwO2Vsc2V7bGV0IGc9dShtb2R1bGUuYnVuZGxlLnJvb3QsYSk7aWYoZy5sZW5ndGg9PT0wKXtuPSExO2JyZWFrfXIucHVzaCguLi5nKX19cmV0dXJuIG59ZnVuY3Rpb24gQyhlLHQsbyl7bGV0e21vZHVsZXM6cn09ZTtpZighcilyZXR1cm4hMTtpZihvJiYhb1tlLkhNUl9CVU5ETEVfSURdKXJldHVybiBlLnBhcmVudD9SKGUucGFyZW50LHQsbyk6ITA7aWYoaS5jaGVja2VkQXNzZXRzW3RdKXJldHVybiEwO2kuY2hlY2tlZEFzc2V0c1t0XT0hMDtsZXQgbj1lLmNhY2hlW3RdO3JldHVybiBpLmFzc2V0c1RvRGlzcG9zZS5wdXNoKFtlLHRdKSwhbnx8bi5ob3QmJm4uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoPyhpLmFzc2V0c1RvQWNjZXB0LnB1c2goW2UsdF0pLCEwKTohMX1mdW5jdGlvbiBNKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gZWUoZSl7aWYoZS50eXBlPT09XCJqc1wiJiZ0eXBlb2YgZG9jdW1lbnQ8XCJ1XCIpcmV0dXJuIG5ldyBQcm9taXNlKCh0LG8pPT57bGV0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyLnNyYz1gJHtlLnVybH0/dD0ke0RhdGUubm93KCl9YCxlLm91dHB1dEZvcm1hdD09PVwiZXNtb2R1bGVcIiYmKHIudHlwZT1cIm1vZHVsZVwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9PnQocikpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKCk9Pm8obmV3IEVycm9yKGBGYWlsZWQgdG8gZG93bmxvYWQgYXNzZXQ6ICR7ZS5pZH1gKSkpLGRvY3VtZW50LmhlYWQ/LmFwcGVuZENoaWxkKHIpfSl9YXN5bmMgZnVuY3Rpb24gTyhlKXtnbG9iYWwucGFyY2VsSG90VXBkYXRlPU9iamVjdC5jcmVhdGUobnVsbCksZS5mb3JFYWNoKG89PntvLnVybD1kLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIitlbmNvZGVVUklDb21wb25lbnQoYCR7by51cmx9P3Q9JHtEYXRlLm5vdygpfWApKX0pO2xldCB0PWF3YWl0IFByb21pc2UuYWxsKGUubWFwKGVlKSk7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihvKXskKG1vZHVsZS5idW5kbGUucm9vdCxvKX0pfWZpbmFsbHl7ZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUsdCYmdC5mb3JFYWNoKG89PntvJiZkb2N1bWVudC5oZWFkPy5yZW1vdmVDaGlsZChvKX0pfX1mdW5jdGlvbiB0ZShlKXtsZXQgdD1lLmNsb25lTm9kZSgpO3Qub25sb2FkPWZ1bmN0aW9uKCl7ZS5wYXJlbnROb2RlIT09bnVsbCYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSx0LnNldEF0dHJpYnV0ZShcImhyZWZcIixlLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3BsaXQoXCI/XCIpWzBdK1wiP1wiK0RhdGUubm93KCkpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlLm5leHRTaWJsaW5nKX12YXIgRT1udWxsO2Z1bmN0aW9uIG9lKCl7RXx8KEU9c2V0VGltZW91dChmdW5jdGlvbigpe2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXtsZXQgbz1lW3RdLmdldEF0dHJpYnV0ZShcImhyZWZcIikscj13KCksbj1yPT09XCJsb2NhbGhvc3RcIj9uZXcgUmVnRXhwKFwiXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTpcIitmKCkpLnRlc3Qobyk6by5pbmRleE9mKHIrXCI6XCIrZigpKTsvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KG8pJiZvLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSE9PTAmJiFufHx0ZShlW3RdKX1FPW51bGx9LDQ3KSl9ZnVuY3Rpb24gJChlLHQpe2xldHttb2R1bGVzOm99PWU7aWYobyl7aWYodC50eXBlPT09XCJjc3NcIilvZSgpO2Vsc2UgaWYodC50eXBlPT09XCJqc1wiKXtsZXQgcj10LmRlcHNCeUJ1bmRsZVtlLkhNUl9CVU5ETEVfSURdO2lmKHIpe2lmKG9bdC5pZF0pe2xldCBzPW9bdC5pZF1bMV07Zm9yKGxldCBhIGluIHMpaWYoIXJbYV18fHJbYV0hPT1zW2FdKXtsZXQgbD1zW2FdO3UobW9kdWxlLmJ1bmRsZS5yb290LGwpLmxlbmd0aD09PTEmJmIobW9kdWxlLmJ1bmRsZS5yb290LGwpfX1sZXQgbj1nbG9iYWwucGFyY2VsSG90VXBkYXRlW3QuaWRdO29bdC5pZF09W24scl19ZWxzZSBlLnBhcmVudCYmJChlLnBhcmVudCx0KX19fWZ1bmN0aW9uIGIoZSx0KXtsZXQgbz1lLm1vZHVsZXM7aWYobylpZihvW3RdKXtsZXQgcj1vW3RdWzFdLG49W107Zm9yKGxldCBzIGluIHIpdShtb2R1bGUuYnVuZGxlLnJvb3QscltzXSkubGVuZ3RoPT09MSYmbi5wdXNoKHJbc10pO2RlbGV0ZSBvW3RdLGRlbGV0ZSBlLmNhY2hlW3RdLG4uZm9yRWFjaChzPT57Yihtb2R1bGUuYnVuZGxlLnJvb3Qscyl9KX1lbHNlIGUucGFyZW50JiZiKGUucGFyZW50LHQpfWZ1bmN0aW9uIHYoZSx0KXtsZXQgbz1lLmNhY2hlW3RdO2UuaG90RGF0YVt0XT17fSxvJiZvLmhvdCYmKG8uaG90LmRhdGE9ZS5ob3REYXRhW3RdKSxvJiZvLmhvdCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoJiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHIpe3IoZS5ob3REYXRhW3RdKX0pLGRlbGV0ZSBlLmNhY2hlW3RdfWZ1bmN0aW9uIEkoZSx0KXtlKHQpO2xldCBvPWUuY2FjaGVbdF07aWYobyYmby5ob3QmJm8uaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKXtsZXQgcj11KG1vZHVsZS5idW5kbGUucm9vdCx0KTtvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24obil7bGV0IHM9bigoKT0+cik7cyYmcy5sZW5ndGgmJihzLmZvckVhY2goKFthLGxdKT0+e3YoYSxsKX0pLGkuYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShpLmFzc2V0c1RvQWNjZXB0LHMpKX0pfX1mdW5jdGlvbiByZShlPWYoKSl7bGV0IHQ9TCgpO3JldHVybmAke2Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIG5lKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJmsoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBOKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChyZSgpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBuIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHM9bi5jb2RlZnJhbWV8fG4uc3RhY2s7QShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIituLm1lc3NhZ2UrYFxuYCtzK2BcblxuYCtuLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbmUpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e1QoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57QShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIGo9eihyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTthc3luYyBmdW5jdGlvbiBGKCl7ai5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyksd2luZG93LiRSZWZyZXNoUmVnJD1mdW5jdGlvbigpe30sd2luZG93LiRSZWZyZXNoU2lnJD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZX19fXZhciBzZT1gJHtTfSR7bW9kdWxlLmlkfV9fYCxoLFU9bW9kdWxlLmJ1bmRsZS5wYXJlbnQ7aWYoIVV8fCFVLmlzUGFyY2VsUmVxdWlyZSl7dHJ5e2g9ZD8ucnVudGltZS5jb25uZWN0KHtuYW1lOnNlfSksaC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PnttKCl9KSxjLmlzUmVhY3R8fGgub25NZXNzYWdlLmFkZExpc3RlbmVyKCgpPT57bSgpfSl9Y2F0Y2goZSl7cChlKX1OKGFzeW5jIGU9PntpZihwKFwiUGFnZSBydW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxjLmlzUmVhY3Qpe0IoKTtsZXQgdD1lLmZpbHRlcihyPT5yLmVudkhhc2g9PT1jLmVudkhhc2gpO2lmKHQuc29tZShyPT5yLnR5cGU9PT1cImNzc1wifHxyLnR5cGU9PT1cImpzXCImJlIobW9kdWxlLmJ1bmRsZS5yb290LHIuaWQsci5kZXBzQnlCdW5kbGUpKSl0cnl7YXdhaXQgTyh0KTtsZXQgcj17fTtmb3IobGV0W3MsYV1vZiBpLmFzc2V0c1RvRGlzcG9zZSlyW2FdfHwodihzLGEpLHJbYV09ITApO2xldCBuPXt9O2ZvcihsZXQgcz0wO3M8aS5hc3NldHNUb0FjY2VwdC5sZW5ndGg7cysrKXtsZXRbYSxsXT1pLmFzc2V0c1RvQWNjZXB0W3NdO25bbF18fChJKGEsbCksbltsXT0hMCl9fWNhdGNoKHIpe2MudmVyYm9zZT09PVwidHJ1ZVwiJiYoY29uc29sZS50cmFjZShyKSxhbGVydChKU09OLnN0cmluZ2lmeShyKSkpLGF3YWl0IG0oITApfX1lbHNle2xldCB0PWUuZmlsdGVyKG89Pm8uZW52SGFzaD09PWMuZW52SGFzaCkuc29tZShvPT5NKG1vZHVsZS5idW5kbGUsby5pZCkpO3AoXCJQYWdlIHJ1bnRpbWUgLVwiLHtzb3VyY2VDaGFuZ2VkOnR9KSx0JiZoLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19wYWdlX2NoYW5nZWRfXzohMH0pfX0pfWMuaXNSZWFjdCYmKHAoXCJJbmplY3RpbmcgcmVhY3QgcmVmcmVzaFwiKSxGKCkpO1xuIiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiIsIi8qKlxyXG4gKiBQYXJjZWwgbW9kdWxlIGlkOiBoVTVmY1xyXG4gKiBSZXNvbHZlZCBwYXRoOiBzcmMvY29udGVudHMvc2l0ZXMvYnJlZXp5L3J1bGVzLmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi9wb2x5Z2xvdCAtPiBlbHZESSAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9icmVlenkvcG9seWdsb3QuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+Y29yZS94cGF0aCAtPiBhZ0U0dSAgPT4gIHNyYy9jb3JlL3hwYXRoLmpzXHJcbiAqL1xyXG5cclxudmFyIG4sIG8gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxuby5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgby5leHBvcnQociwgXCJIQVJEQ09ERV9LRVlcIiwgKCkgPT4gbiksIG8uZXhwb3J0KHIsXHJcbiAgXCJnZXRCcmVlenlTYWxhcnlGaWVsZFR5cGVcIiwgKCkgPT4gcyksIG8uZXhwb3J0KHIsIFwiaGFyZENvZGVDb25maWdcIiwgKCkgPT4gYyksIG8uZXhwb3J0KHIsXHJcbiAgXCJnZXRGaWxsaW5nTGFiZWxzXCIsICgpID0+IGQpLCBvLmV4cG9ydChyLCBcImdldFJ1bGVzXCIsICgpID0+IGYpLCBvLmV4cG9ydChyLFxyXG4gIFwiZmluZENvdmVyTGV0dGVyVGV4dGFyZWFcIiwgKCkgPT4gcCksIG8uZXhwb3J0KHIsIFwicHJvY2Vzc0VkdU9yV29ya0V4cFJ1bGVzXCIsICgpID0+IGIpLCBvLmV4cG9ydChcclxuICByLCBcImZpbmRBbmRSZW1vdmVSdWxlXCIsICgpID0+IEkpLCBvLmV4cG9ydChyLCBcImdldFN1Ym1pdEJ1dHRvblRleHRcIiwgKCkgPT4gaiksIG8uZXhwb3J0KHIsXHJcbiAgXCJnZXRCcmVlenlTdWJtaXRCdXR0b25YcGF0aFwiLCAoKSA9PiBEKTtcclxudmFyIGkgPSBlKFwifmNvcmUvZW51bXNcIiksXHJcbiAgYSA9IGUoXCJ+Y29yZS94cGF0aFwiKSxcclxuICBsID0gZShcIi4vcG9seWdsb3RcIik7XHJcblxyXG5mdW5jdGlvbiBzKGUpIHtcclxuICByZXR1cm4gL1xcYihzYWxhcnl8Y29tcGVuc2F0aW9ufHBheSlcXGIvaS50ZXN0KGUpID8gL1xcYihyYW5nZXxtaW5pbXVtIGFuZCBtYXhpbXVtfG1pbiBhbmQgbWF4KVxcYi9pXHJcbiAgICAudGVzdChlKSA/IGkuRklFTERfVFlQRS5URVhUIDogaS5GSUVMRF9UWVBFLk5VTUJFUiA6IGkuRklFTERfVFlQRS5URVhUXHJcbn0hIGZ1bmN0aW9uKGUpIHtcclxuICBlLmVkdWNhdGlvbiA9IFwiZWR1Y2F0aW9uXCIsIGUud29ya0V4cGVyaWVuY2UgPSBcIndvcmtFeHBlcmllbmNlXCJcclxufShuIHx8IChuID0ge30pKTtcclxubGV0IHUgPSBlID0+XHJcbiAgYC4vL2RpdltAY2xhc3M9XCJzZWN0aW9uLWZvb3RlclwiXS8vYVtjaGlsZDo6c3BhblskeygwLGwuYnVpbGRCcmVlenlQb2x5Z2xvdFhwYXRoVGV4dENvbmRpdGlvbikoZSxlPT5gY29udGFpbnModGV4dCgpLCBcIiR7ZX1cIilgKX1dXWAsXHJcbiAgYyA9IHtcclxuICAgIFtuLmVkdWNhdGlvbl06IHtcclxuICAgICAga2V5OiBuLmVkdWNhdGlvbixcclxuICAgICAgY29udGFpbmVyOiAnLi8vbGlbQG5nLXJlcGVhdD1cImNhbmRpZGF0ZVNjaG9vbCBpbiBjYW5kaWRhdGUuZWR1Y2F0aW9uXCJdJyxcclxuICAgICAgc25hcHNob3Q6ICcvL2xpW0BuZy1yZXBlYXQ9XCJjYW5kaWRhdGVTY2hvb2wgaW4gY2FuZGlkYXRlLmVkdWNhdGlvblwiXScsXHJcbiAgICAgIGFkZEJ1dHRvbjogdShcIkFkZCBFZHVjYXRpb25cIiksXHJcbiAgICAgIGZpZWxkczogW3tcclxuICAgICAgICBrZXk6IFwiU2Nob29sXCIsXHJcbiAgICAgICAgeHBhdGg6ICcuLy9pbnB1dFtAbmctbW9kZWw9XCJjYW5kaWRhdGVTY2hvb2wuc2Nob29sX25hbWVcIl0nXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBrZXk6IFwiU3R1ZHlcIixcclxuICAgICAgICB4cGF0aDogJy4vL2lucHV0W0BuZy1tb2RlbD1cImNhbmRpZGF0ZVNjaG9vbC5maWVsZF9vZl9zdHVkeVwiXSdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGtleTogXCJTdGFydFwiLFxyXG4gICAgICAgIHhwYXRoOiAnLi8vaW5wdXRbQG5nLW1vZGVsPVwiY2FuZGlkYXRlU2Nob29sLmRhdGVfc3RhcnRcIl0nXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBrZXk6IFwiRW5kXCIsXHJcbiAgICAgICAgeHBhdGg6ICcuLy9pbnB1dFtAbmctbW9kZWw9XCJjYW5kaWRhdGVTY2hvb2wuZGF0ZV9lbmRcIl0nXHJcbiAgICAgIH1dXHJcbiAgICB9LFxyXG4gICAgW24ud29ya0V4cGVyaWVuY2VdOiB7XHJcbiAgICAgIGtleTogbi53b3JrRXhwZXJpZW5jZSxcclxuICAgICAgY29udGFpbmVyOiAnLi8vbGlbQG5nLXJlcGVhdD1cImNhbmRpZGF0ZVBvc2l0aW9uIGluIGNhbmRpZGF0ZS53b3JrX2hpc3RvcnlcIl0nLFxyXG4gICAgICBzbmFwc2hvdDogJy8vbGlbQG5nLXJlcGVhdD1cImNhbmRpZGF0ZVBvc2l0aW9uIGluIGNhbmRpZGF0ZS53b3JrX2hpc3RvcnlcIl0nLFxyXG4gICAgICBhZGRCdXR0b246IHUoXCJBZGQgUG9zaXRpb25cIiksXHJcbiAgICAgIGZpZWxkczogW3tcclxuICAgICAgICBrZXk6IFwiVGl0bGVcIixcclxuICAgICAgICB4cGF0aDogJy4vL2lucHV0W0BuZy1tb2RlbD1cImNhbmRpZGF0ZVBvc2l0aW9uLnRpdGxlXCJdJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAga2V5OiBcIk9yZ2FuaXphdGlvblwiLFxyXG4gICAgICAgIGFsdGVybmF0ZUtleTogXCJDb21wYW55XCIsXHJcbiAgICAgICAgeHBhdGg6ICcuLy9pbnB1dFtAbmctbW9kZWw9XCJjYW5kaWRhdGVQb3NpdGlvbi5jb21wYW55X25hbWVcIl0nXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBrZXk6IFwiU3RhcnRcIixcclxuICAgICAgICB4cGF0aDogJy4vL2lucHV0W0BuZy1tb2RlbD1cImNhbmRpZGF0ZVBvc2l0aW9uLmRhdGVfc3RhcnRcIl0nXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBrZXk6IFwiRW5kXCIsXHJcbiAgICAgICAgeHBhdGg6ICcuLy9pbnB1dFtAbmctbW9kZWw9XCJjYW5kaWRhdGVQb3NpdGlvbi5kYXRlX2VuZFwiXSdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGtleTogXCJqb2JEZXNjcmlwdGlvbnNcIixcclxuICAgICAgICB4cGF0aDogJy4vL3RleHRhcmVhW0BuZy1tb2RlbD1cImNhbmRpZGF0ZVBvc2l0aW9uLnN1bW1hcnlcIl0nXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgfSxcclxuICBkID0gKCkgPT4gKDAsIGEuZ2V0T3JkZXJlZE5vZGVzKShcclxuICAgICcvL2gzW2NvbnRhaW5zKEBjbGFzcywgXCJwb2x5Z290XCIpIG9yIGNoaWxkOjpzcGFuW0BjbGFzcz1cInBvbHlnb3RcIiBvciBjb250YWlucyhAY2xhc3MsXCJuZy1iaW5kaW5nXCIpXSBvciBAY2xhc3M9XCJwb2x5Z290XCIgb3IgY29udGFpbnMoQGNsYXNzLCBcIm5nLWJpbmRpbmdcIildJ1xyXG4gICAgKSxcclxuICBmID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IGUgPSBkKCksXHJcbiAgICAgIHQgPSBbXTtcclxuICAgIGZvciAobGV0IHIgb2YgZSkge1xyXG4gICAgICBsZXQgZSA9IG0ocik7XHJcbiAgICAgIEFycmF5LmlzQXJyYXkoZSkgJiYgdC5wdXNoKC4uLmUpLCBlICYmICFBcnJheS5pc0FycmF5KGUpICYmIHQucHVzaChlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRcclxuICB9O1xyXG5cclxuZnVuY3Rpb24gcCgpIHtcclxuICBsZXQgZSA9ICgwLCBhLmdldE9yZGVyZWROb2RlcykoXHJcbiAgICAnLy90ZXh0YXJlYVtAbmFtZT1cImNDb3ZlckxldHRlclwiIG9yIEBuZy1tb2RlbD1cImNhbmRpZGF0ZS5jb3Zlcl9sZXR0ZXJcIl0nKTtcclxuICBpZiAoMCA9PT0gZS5sZW5ndGgpIHJldHVybiBudWxsO1xyXG4gIGxldCB0ID0gZS5maW5kKGUgPT4ge1xyXG4gICAgbGV0IHQgPSBlLmNsb3Nlc3Q/LignZGl2W2NsYXNzKj1cInNlY3Rpb25cIl0nKT8ucXVlcnlTZWxlY3RvcihcImgzXCIpO1xyXG4gICAgcmV0dXJuICEhdCAmJiAoMCwgbC5tYXRjaGVzQnJlZXp5TGFiZWwpKFQodCksIFwiQ292ZXIgTGV0dGVyXCIpXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHQgPz8gZVswXVxyXG59XHJcbmxldCBtID0gZSA9PiB7XHJcbiAgICBsZXQgdCA9IHkoZSk7XHJcbiAgICBpZiAodCkgcmV0dXJuIHQ7XHJcbiAgICBsZXQgciA9IGgoZSk7XHJcbiAgICBpZiAocikgcmV0dXJuIHI7XHJcbiAgICBsZXQgbiA9IEEoZSk7XHJcbiAgICBpZiAobikgcmV0dXJuIG47XHJcbiAgICBsZXQgbyA9IEMoZSk7XHJcbiAgICBpZiAobykgcmV0dXJuIG87XHJcbiAgICBsZXQgaSA9IHYoZSk7XHJcbiAgICBpZiAoaSkgcmV0dXJuIGk7XHJcbiAgICBsZXQgYSA9IHcoZSk7XHJcbiAgICBpZiAoYSkgcmV0dXJuIGE7XHJcbiAgICBsZXQgbCA9IFMoZSk7XHJcbiAgICBpZiAobCkgcmV0dXJuIGw7XHJcbiAgICBsZXQgcyA9IEUoZSk7XHJcbiAgICBpZiAocykgcmV0dXJuIHM7XHJcbiAgICBsZXQgdSA9IHgoZSk7XHJcbiAgICByZXR1cm4gdSB8fCBudWxsXHJcbiAgfSxcclxuICBoID0gZSA9PiB7XHJcbiAgICBsZXQgdCA9IFQoZSk7XHJcbiAgICBpZiAoXCJFZHVjYXRpb25cIiAhPT0gdCkgcmV0dXJuIG51bGw7XHJcbiAgICBsZXQgciA9ICgwLCBhLmdldEZpcnN0T3JkZXJlZE5vZGUpKFwiLy9oMy9wYXJlbnQ6OmRpdi9mb2xsb3dpbmctc2libGluZzo6dWwvbGlcIiwgZSk7XHJcbiAgICBpZiAocikge1xyXG4gICAgICBsZXQgbiA9IFtdLFxyXG4gICAgICAgIG8gPSAoMCwgYS5nZXRGaXJzdE9yZGVyZWROb2RlKSgnLy9pbnB1dFtAcGxhY2Vob2xkZXI9XCJTY2hvb2xcIl0nLCByKSxcclxuICAgICAgICBsID0gKDAsIGEuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoJy8vaW5wdXRbQHBsYWNlaG9sZGVyPVwiU3R1ZHlcIl0nLCByKSxcclxuICAgICAgICBzID0gKDAsIGEuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoJy8vdGV4dGFyZWFbQHBsYWNlaG9sZGVyPVwiU3VtbWFyeVwiXScsIHIpLFxyXG4gICAgICAgIHUgPSAoMCwgYS5nZXRGaXJzdE9yZGVyZWROb2RlKSgnLy9pbnB1dFtAbmctbW9kZWw9XCJjYW5kaWRhdGVTY2hvb2wuZGF0ZV9zdGFydFwiXScsIHIpLFxyXG4gICAgICAgIGMgPSAoMCwgYS5nZXRGaXJzdE9yZGVyZWROb2RlKSgnLy9pbnB1dFtAbmctbW9kZWw9XCJjYW5kaWRhdGVTY2hvb2wuZGF0ZV9lbmRcIl0nLCByKTtcclxuICAgICAgbi5wdXNoKHtcclxuICAgICAgICB0eXBlOiBpLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgICBsYWJlbDogXCJTY2hvb2xcIixcclxuICAgICAgICByZXF1aXJlZDogITAsXHJcbiAgICAgICAgJGlucHV0OiBvLFxyXG4gICAgICAgICRsYWJlbDogZVxyXG4gICAgICB9KSwgbi5wdXNoKHtcclxuICAgICAgICB0eXBlOiBpLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgICBsYWJlbDogXCJTdHVkeVwiLFxyXG4gICAgICAgIHJlcXVpcmVkOiAhMSxcclxuICAgICAgICAkaW5wdXQ6IGwsXHJcbiAgICAgICAgJGxhYmVsOiBlXHJcbiAgICAgIH0pLCBuLnB1c2goe1xyXG4gICAgICAgIHR5cGU6IGkuRklFTERfVFlQRS5URVhULFxyXG4gICAgICAgIGxhYmVsOiBcIlN1bW1hcnlcIixcclxuICAgICAgICByZXF1aXJlZDogITEsXHJcbiAgICAgICAgJGlucHV0OiBzLFxyXG4gICAgICAgICRsYWJlbDogZVxyXG4gICAgICB9KSwgbi5wdXNoKHtcclxuICAgICAgICB0eXBlOiBpLkZJRUxEX1RZUEUuREFURSxcclxuICAgICAgICBsYWJlbDogXCJTdGFydCBkYXRlXCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6ICExLFxyXG4gICAgICAgICRpbnB1dDogdSxcclxuICAgICAgICAkbGFiZWw6IGVcclxuICAgICAgfSksIG4ucHVzaCh7XHJcbiAgICAgICAgdHlwZTogaS5GSUVMRF9UWVBFLkRBVEUsXHJcbiAgICAgICAgbGFiZWw6IFwiRW5kIGRhdGVcIixcclxuICAgICAgICByZXF1aXJlZDogITEsXHJcbiAgICAgICAgJGlucHV0OiBjLFxyXG4gICAgICAgICRsYWJlbDogZVxyXG4gICAgICB9KTtcclxuICAgICAgbGV0IGQgPSBuLm1hcChlID0+ICh7XHJcbiAgICAgICAgdHlwZTogZS50eXBlLFxyXG4gICAgICAgIGxhYmVsOiBlLmxhYmVsXHJcbiAgICAgIH0pKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYWJlbDogdCxcclxuICAgICAgICByZXF1aXJlZDogITEsXHJcbiAgICAgICAgdHlwZTogaS5GSUVMRF9UWVBFLkVEVUNBVElPTixcclxuICAgICAgICAkaW5wdXQ6IHIsXHJcbiAgICAgICAgb3B0aW9uczogZCxcclxuICAgICAgICBjaGlsZHJlbjogblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH0sXHJcbiAgZyA9IGUgPT4ge1xyXG4gICAgbGV0IHQgPSBcIlwiO1xyXG4gICAgdCA9IGUgPyAnLy9saVtAbmctcmVwZWF0PVwiY2FuZGlkYXRlU2Nob29sIGluIGNhbmRpZGF0ZS5lZHVjYXRpb25cIl0nIDpcclxuICAgICAgJy8vbGlbQG5nLXJlcGVhdD1cImNhbmRpZGF0ZVBvc2l0aW9uIGluIGNhbmRpZGF0ZS53b3JrX2hpc3RvcnlcIl0nO1xyXG4gICAgbGV0IHIgPSAoMCwgYS5nZXRPcmRlcmVkTm9kZXMpKHQsIGRvY3VtZW50KTtcclxuICAgIHJldHVybiByXHJcbiAgfSxcclxuICBiID0gZSA9PiB7XHJcbiAgICBsZXQgdCA9IGcoZSksXHJcbiAgICAgIHIgPSBbXSxcclxuICAgICAgbiA9IFtdO1xyXG4gICAgaWYgKGUgPyAociA9IFtpLkZJRUxEX1RZUEUuVEVYVCwgaS5GSUVMRF9UWVBFLlRFWFQsIGkuRklFTERfVFlQRS5URVhULCBpLkZJRUxEX1RZUEUuREFURSwgaVxyXG4gICAgICAgIC5GSUVMRF9UWVBFLkRBVEVcclxuICAgICAgXSwgbiA9IFtcIlNjaG9vbFwiLCBcIlN0dWR5XCIsIFwiU3VtbWFyeVwiLCBcIlN0YXJ0IGRhdGVcIiwgXCJFbmQgZGF0ZVwiXSkgOiAociA9IFtpLkZJRUxEX1RZUEUuVEVYVCwgaVxyXG4gICAgICAgIC5GSUVMRF9UWVBFLlRFWFQsIGkuRklFTERfVFlQRS5URVhULCBpLkZJRUxEX1RZUEUuREFURSwgaS5GSUVMRF9UWVBFLkRBVEVcclxuICAgICAgXSwgbiA9IFtcIkNvbXBhbnlcIiwgXCJUaXRsZVwiLCBcIlN1bW1hcnlcIiwgXCJTdGFydCBkYXRlXCIsIFwiRW5kIGRhdGVcIl0pLCB0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IG8gPSBbXTtcclxuICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCB0Lmxlbmd0aDsgbCsrKSB7XHJcbiAgICAgICAgbGV0IHMgPSBbXSxcclxuICAgICAgICAgIHUgPSBbXSxcclxuICAgICAgICAgIGMgPSB0W2xdLFxyXG4gICAgICAgICAgZCA9ICgwLCBhLmdldE9yZGVyZWROb2RlcykoXCIuLy9pbnB1dCB8IC4vL3RleHRhcmVhXCIsIGMpO1xyXG4gICAgICAgIGZvciAobGV0IGUgPSAwOyBlIDwgci5sZW5ndGg7IGUrKykge1xyXG4gICAgICAgICAgaWYgKCFkW2VdKSBjb250aW51ZTtcclxuICAgICAgICAgIGxldCB0ID0gcltlXTtcclxuICAgICAgICAgIGlmICh0ID09PSBpLkZJRUxEX1RZUEUuVEVYVCkgcy5wdXNoKHtcclxuICAgICAgICAgICAgdHlwZTogaS5GSUVMRF9UWVBFLlRFWFQsXHJcbiAgICAgICAgICAgIGxhYmVsOiBuW2VdLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogITEsXHJcbiAgICAgICAgICAgICRpbnB1dDogZFtlXSxcclxuICAgICAgICAgICAgJGxhYmVsOiBjXHJcbiAgICAgICAgICB9KSwgdS5wdXNoKHtcclxuICAgICAgICAgICAgdHlwZTogaS5GSUVMRF9UWVBFLlRFWFQsXHJcbiAgICAgICAgICAgIGxhYmVsOiBuW2VdLFxyXG4gICAgICAgICAgICBvcHRpb246IFtdXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVsc2UgaWYgKHQgPT09IGkuRklFTERfVFlQRS5EQVRFKSBzLnB1c2goe1xyXG4gICAgICAgICAgICB0eXBlOiBpLkZJRUxEX1RZUEUuREFURSxcclxuICAgICAgICAgICAgbGFiZWw6IG5bZV0sXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiAhMSxcclxuICAgICAgICAgICAgJGlucHV0OiBkW2VdLFxyXG4gICAgICAgICAgICAkbGFiZWw6IGNcclxuICAgICAgICAgIH0pLCB1LnB1c2goe1xyXG4gICAgICAgICAgICB0eXBlOiBpLkZJRUxEX1RZUEUuREFURSxcclxuICAgICAgICAgICAgbGFiZWw6IG5bZV0sXHJcbiAgICAgICAgICAgIG9wdGlvbjogW11cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZWxzZSB0aHJvdyBFcnJvcihgVW5zdXBwb3J0ZWQgZmllbGQgdHlwZTogJHt0fSBpbiBFZHUvV29yayBFeHAgcHJvY2Vzc2luZ2ApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG8ucHVzaCh7XHJcbiAgICAgICAgICBjaGlsZHJlbjogcyxcclxuICAgICAgICAgIGxhYmVsOiBlID8gXCJFZHVjYXRpb25cIiA6IFwiV29yayBIaXN0b3J5XCIsXHJcbiAgICAgICAgICBvcHRpb25zOiB1LFxyXG4gICAgICAgICAgcmVxdWlyZWQ6ICExLFxyXG4gICAgICAgICAgdHlwZTogZSA/IGkuRklFTERfVFlQRS5FRFVDQVRJT04gOiBpLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbiAgfSxcclxuICB5ID0gZSA9PiB7XHJcbiAgICBsZXQgdCA9IFQoZSk7XHJcbiAgICBpZiAoXCJXb3JrIEhpc3RvcnlcIiAhPT0gdCkgcmV0dXJuIG51bGw7XHJcbiAgICBsZXQgciA9ICgwLCBhLmdldEZpcnN0T3JkZXJlZE5vZGUpKFwiLy9oMy9wYXJlbnQ6OmRpdi9mb2xsb3dpbmctc2libGluZzo6dWwvbGlcIiwgZSk7XHJcbiAgICBpZiAocikge1xyXG4gICAgICBsZXQgbiA9IFtdLFxyXG4gICAgICAgIG8gPSAoMCwgYS5nZXRGaXJzdE9yZGVyZWROb2RlKSgnLy9pbnB1dFtAcGxhY2Vob2xkZXI9XCJTY2hvb2xcIl0nLCByKSxcclxuICAgICAgICBsID0gKDAsIGEuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoJy8vaW5wdXRbQHBsYWNlaG9sZGVyPVwiU3R1ZHlcIl0nLCByKSxcclxuICAgICAgICBzID0gKDAsIGEuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoJy8vdGV4dGFyZWFbQHBsYWNlaG9sZGVyPVwiU3VtbWFyeVwiXScsIHIpLFxyXG4gICAgICAgIHUgPSAoMCwgYS5nZXRGaXJzdE9yZGVyZWROb2RlKSgnLy9pbnB1dFtAbmctbW9kZWw9XCJjYW5kaWRhdGVTY2hvb2wuZGF0ZV9zdGFydFwiXScsIHIpLFxyXG4gICAgICAgIGMgPSAoMCwgYS5nZXRGaXJzdE9yZGVyZWROb2RlKSgnLy9pbnB1dFtAbmctbW9kZWw9XCJjYW5kaWRhdGVTY2hvb2wuZGF0ZV9lbmRcIl0nLCByKTtcclxuICAgICAgbi5wdXNoKHtcclxuICAgICAgICB0eXBlOiBpLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgICBsYWJlbDogXCJDb21wYW55XCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6ICEwLFxyXG4gICAgICAgICRpbnB1dDogbyxcclxuICAgICAgICAkbGFiZWw6IGVcclxuICAgICAgfSksIG4ucHVzaCh7XHJcbiAgICAgICAgdHlwZTogaS5GSUVMRF9UWVBFLlRFWFQsXHJcbiAgICAgICAgbGFiZWw6IFwiVGl0bGVcIixcclxuICAgICAgICByZXF1aXJlZDogITEsXHJcbiAgICAgICAgJGlucHV0OiBsLFxyXG4gICAgICAgICRsYWJlbDogZVxyXG4gICAgICB9KSwgbi5wdXNoKHtcclxuICAgICAgICB0eXBlOiBpLkZJRUxEX1RZUEUuVEVYVCxcclxuICAgICAgICBsYWJlbDogXCJTdW1tYXJ5XCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6ICExLFxyXG4gICAgICAgICRpbnB1dDogcyxcclxuICAgICAgICAkbGFiZWw6IGVcclxuICAgICAgfSksIG4ucHVzaCh7XHJcbiAgICAgICAgdHlwZTogaS5GSUVMRF9UWVBFLkRBVEUsXHJcbiAgICAgICAgbGFiZWw6IFwiU3RhcnQgZGF0ZVwiLFxyXG4gICAgICAgIHJlcXVpcmVkOiAhMSxcclxuICAgICAgICAkaW5wdXQ6IHUsXHJcbiAgICAgICAgJGxhYmVsOiBlXHJcbiAgICAgIH0pLCBuLnB1c2goe1xyXG4gICAgICAgIHR5cGU6IGkuRklFTERfVFlQRS5EQVRFLFxyXG4gICAgICAgIGxhYmVsOiBcIkVuZCBkYXRlXCIsXHJcbiAgICAgICAgcmVxdWlyZWQ6ICExLFxyXG4gICAgICAgICRpbnB1dDogYyxcclxuICAgICAgICAkbGFiZWw6IGVcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBkID0gbi5tYXAoZSA9PiAoe1xyXG4gICAgICAgIHR5cGU6IGUudHlwZSxcclxuICAgICAgICBsYWJlbDogZS5sYWJlbFxyXG4gICAgICB9KSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFiZWw6IHQsXHJcbiAgICAgICAgcmVxdWlyZWQ6ICExLFxyXG4gICAgICAgIHR5cGU6IGkuRklFTERfVFlQRS5FTVBMT1lNRU5ULFxyXG4gICAgICAgICRpbnB1dDogcixcclxuICAgICAgICBvcHRpb25zOiBkLFxyXG4gICAgICAgIGNoaWxkcmVuOiBuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbiAgfSxcclxuICB2ID0gZSA9PiB7XHJcbiAgICBsZXQgdCA9IFQoZSksXHJcbiAgICAgIHIgPSAoMCwgYS5nZXRGaXJzdE9yZGVyZWROb2RlKSgnLi9mb2xsb3dpbmctc2libGluZzo6aW5wdXRbQHR5cGU9XCJ0ZXh0XCIgb3IgQHR5cGU9XCJlbWFpbFwiXScsXHJcbiAgICAgIGUpO1xyXG4gICAgcmV0dXJuIHIgPyB7XHJcbiAgICAgIHR5cGU6IHModCksXHJcbiAgICAgIGxhYmVsOiB0LFxyXG4gICAgICByZXF1aXJlZDogRihlKSxcclxuICAgICAgJGlucHV0OiByLFxyXG4gICAgICAkbGFiZWw6IGVcclxuICAgIH0gOiBudWxsXHJcbiAgfSxcclxuICB3ID0gZSA9PiB7XHJcbiAgICBsZXQgdCA9IFQoZSksXHJcbiAgICAgIHIgPSAoMCwgYS5nZXRGaXJzdE9yZGVyZWROb2RlKShcIi4uL2ZvbGxvd2luZy1zaWJsaW5nOjp0ZXh0YXJlYVwiLCBlKTtcclxuICAgIHJldHVybiAociB8fCAociA9ICgwLCBhLmdldEZpcnN0T3JkZXJlZE5vZGUpKFwiLi9mb2xsb3dpbmctc2libGluZzo6dGV4dGFyZWFcIiwgZSkpLCByKSA/IHtcclxuICAgICAgdHlwZTogcyh0KSxcclxuICAgICAgbGFiZWw6IHQsXHJcbiAgICAgIHJlcXVpcmVkOiBGKGUpLFxyXG4gICAgICAkaW5wdXQ6IHIsXHJcbiAgICAgICRsYWJlbDogZVxyXG4gICAgfSA6IG51bGxcclxuICB9LFxyXG4gIFMgPSBlID0+IHtcclxuICAgIGxldCB0ID0gVChlKSxcclxuICAgICAgciA9ICgwLCBhLmdldEZpcnN0T3JkZXJlZE5vZGUpKFxyXG4gICAgICAgIFwiLi9mb2xsb3dpbmctc2libGluZzo6ZGl2W0BjbGFzcz0nZHJvcGRvd24tY29udGFpbmVyJ10vL3NlbGVjdCB8IC4vZm9sbG93aW5nLXNpYmxpbmc6OnNlbGVjdFwiLFxyXG4gICAgICAgIGUpO1xyXG4gICAgaWYgKHIpIHtcclxuICAgICAgbGV0IG4gPSByLFxyXG4gICAgICAgIG8gPSBrKG4pO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IGkuRklFTERfVFlQRS5TRUxFQ1QsXHJcbiAgICAgICAgbGFiZWw6IHQsXHJcbiAgICAgICAgcmVxdWlyZWQ6IEYoZSksXHJcbiAgICAgICAgb3B0aW9uczogbyxcclxuICAgICAgICAkaW5wdXQ6IG4sXHJcbiAgICAgICAgJGxhYmVsOiBlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbiAgfSxcclxuICBFID0gZSA9PiB7XHJcbiAgICBsZXQgdCA9IFQoZSksXHJcbiAgICAgIHIgPVxyXG4gICAgICAnLi8vYW5jZXN0b3I6OmxpW2NvbnRhaW5zKEBjbGFzcywgXCJxdWVzdGlvblwiKSBvciBjb250YWlucyhAY2xhc3MsIFwibXVsdGlwbGVjaG9pY2VcIildLy9pbnB1dFtAdHlwZT1cInJhZGlvXCJdJztcclxuICAgIFwiVmV0ZXJhbiBzdGF0dXNcIiA9PT0gdCAmJiAociA9XHJcbiAgICAgICAgJy4vZm9sbG93aW5nLXNpYmxpbmc6OnVsLy9pbnB1dFtAdHlwZT1cInJhZGlvXCIgYW5kIGNvbnRhaW5zKEBpZCwgXCJ2ZXRcIildJyksXHJcbiAgICAgIFwiVm9sdW50YXJ5IFNlbGYtSWRlbnRpZmljYXRpb24gb2YgRGlzYWJpbGl0eVwiID09PSB0ICYmIChyID1cclxuICAgICAgICAnLi9mb2xsb3dpbmctc2libGluZzo6dWwvL2lucHV0W0B0eXBlPVwicmFkaW9cIiBhbmQgY29udGFpbnMoQGlkLCBcImRpc2FiaWxpdHlcIildJyk7XHJcbiAgICBsZXQgbiA9ICgwLCBhLmdldE9yZGVyZWROb2RlcykociwgZSk7XHJcbiAgICBpZiAobi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCByID0gbi5tYXAoZSA9PiB7XHJcbiAgICAgICAgbGV0IHQgPSBlLFxyXG4gICAgICAgICAgciA9IHQuY2xvc2VzdChcImxhYmVsXCIpIHx8IHQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIHJldHVybiByPy50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCJcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogaS5GSUVMRF9UWVBFLlJBRElPLFxyXG4gICAgICAgIGxhYmVsOiB0LFxyXG4gICAgICAgIHJlcXVpcmVkOiBGKGUpLFxyXG4gICAgICAgIG9wdGlvbnM6IHIsXHJcbiAgICAgICAgJGlucHV0OiBuLFxyXG4gICAgICAgICRsYWJlbDogZSxcclxuICAgICAgICAkcmFkaW9QYXJlbnQ6IGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9LFxyXG4gIHggPSBlID0+IHtcclxuICAgIGxldCB0ID0gVChlKSxcclxuICAgICAgciA9ICgwLCBhLmdldE9yZGVyZWROb2RlcykoXHJcbiAgICAgICAgJy4vL2FuY2VzdG9yOjpsaVtjb250YWlucyhAY2xhc3MsIFwicXVlc3Rpb25cIikgb3IgY29udGFpbnMoQGNsYXNzLCBcIm11bHRpcGxlY2hvaWNlXCIpIG9yIGNvbnRhaW5zKEBjbGFzcywgXCJvcHRpb25cIildLy9pbnB1dFtAdHlwZT1cImNoZWNrYm94XCJdJyxcclxuICAgICAgICBlKTtcclxuICAgIGlmIChyLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IG4gPSByLm1hcChlID0+IHtcclxuICAgICAgICBsZXQgdCA9IGUsXHJcbiAgICAgICAgICByID0gdC5jbG9zZXN0KFwibGFiZWxcIikgfHwgdC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgcmV0dXJuIHI/LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJcIlxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBpLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsXHJcbiAgICAgICAgbGFiZWw6IHQsXHJcbiAgICAgICAgcmVxdWlyZWQ6IEYoZSksXHJcbiAgICAgICAgJGxhYmVsOiBlLFxyXG4gICAgICAgIG9wdGlvbnM6IG4sXHJcbiAgICAgICAgJGNoZWNrYm94czogclxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH0sXHJcbiAgQyA9IGUgPT4ge1xyXG4gICAgbGV0IHQgPSBUKGUpLFxyXG4gICAgICByID0gKDAsIGEuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoJy4vZm9sbG93aW5nLXNpYmxpbmc6OmlucHV0W0B0eXBlPVwiZGF0ZVwiXScsIGUpO1xyXG4gICAgcmV0dXJuIHIgPyB7XHJcbiAgICAgIHR5cGU6IGkuRklFTERfVFlQRS5EQVRFLFxyXG4gICAgICBsYWJlbDogdCxcclxuICAgICAgcmVxdWlyZWQ6IEYoZSksXHJcbiAgICAgICRpbnB1dDogcixcclxuICAgICAgJGxhYmVsOiBlXHJcbiAgICB9IDogbnVsbFxyXG4gIH0sXHJcbiAgQSA9IGUgPT4ge1xyXG4gICAgbGV0IHQgPSBUKGUpO1xyXG4gICAgaWYgKCF0LmluY2x1ZGVzKFwiRGVzaXJlZCBTYWxhcnlcIikpIHJldHVybiBudWxsO1xyXG4gICAgbGV0IHIgPSBbXSxcclxuICAgICAgbiA9ICgwLCBhLmdldEZpcnN0T3JkZXJlZE5vZGUpKFwiLi9mb2xsb3dpbmc6OnNlbGVjdFtAbmctbW9kZWw9J2NhbmRpZGF0ZS5zYWxhcnkuY3VycmVuY3knXVwiLFxyXG4gICAgICAgIGUpLFxyXG4gICAgICBvID0gKDAsIGEuZ2V0Rmlyc3RPcmRlcmVkTm9kZSkoXHJcbiAgICAgICAgXCIuL2ZvbGxvd2luZy1zaWJsaW5nOjppbnB1dFtAbmctbW9kZWw9J2NhbmRpZGF0ZS5zYWxhcnkuc2FsYXJ5J11cIiwgZSksXHJcbiAgICAgIGwgPSAoMCwgYS5nZXRGaXJzdE9yZGVyZWROb2RlKShcIi4vZm9sbG93aW5nOjpzZWxlY3RbQG5nLW1vZGVsPSdjYW5kaWRhdGUuc2FsYXJ5LnBlcmlvZCddXCIsIGUpO1xyXG4gICAgaWYgKG4gJiYgbyAmJiBsKSB7XHJcbiAgICAgIGxldCBhID0gayhuKSxcclxuICAgICAgICB1ID0gayhsKTtcclxuICAgICAgcmV0dXJuIHIucHVzaCh7XHJcbiAgICAgICAgdHlwZTogaS5GSUVMRF9UWVBFLlNFTEVDVCxcclxuICAgICAgICBsYWJlbDogXCJDdXJyZW5jeSBvZiBEZXNpcmVkIFNhbGFyeVwiLFxyXG4gICAgICAgIG9wdGlvbnM6IGEsXHJcbiAgICAgICAgcmVxdWlyZWQ6IEYoZSksXHJcbiAgICAgICAgJGlucHV0OiBuLFxyXG4gICAgICAgICRsYWJlbDogZVxyXG4gICAgICB9KSwgci5wdXNoKHtcclxuICAgICAgICB0eXBlOiBzKHQpLFxyXG4gICAgICAgIGxhYmVsOiAvXFxicmFuZ2VcXGIvaS50ZXN0KHQpID8gXCJEZXNpcmVkIFNhbGFyeSBSYW5nZVwiIDpcclxuICAgICAgICAgIFwiRGVzaXJlZCBTYWxhcnkgTW9udGhseSwgeW91IG11c3QgcHJvdmlkZSBhIG51bWJlclwiLFxyXG4gICAgICAgIHJlcXVpcmVkOiBGKGUpLFxyXG4gICAgICAgICRpbnB1dDogbyxcclxuICAgICAgICAkbGFiZWw6IGVcclxuICAgICAgfSksIHIucHVzaCh7XHJcbiAgICAgICAgdHlwZTogaS5GSUVMRF9UWVBFLlNFTEVDVCxcclxuICAgICAgICBsYWJlbDogXCJQZXJpb2Qgb2YgRGVzaXJlZCBTYWxhcnksIG11c3Qgc2VsZWN0IG9uZSwgZGVmYXVsdCB0byBNb250aGx5XCIsXHJcbiAgICAgICAgb3B0aW9uczogdSxcclxuICAgICAgICByZXF1aXJlZDogRihlKSxcclxuICAgICAgICAkaW5wdXQ6IGwsXHJcbiAgICAgICAgJGxhYmVsOiBlXHJcbiAgICAgIH0pLCByXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH0sXHJcbiAgayA9IGUgPT4gQXJyYXkuZnJvbShlLm9wdGlvbnMpLmZpbHRlcihlID0+IFwiXCIgIT09IGUudmFsdWUudHJpbSgpICYmICFlLnZhbHVlLnRyaW0oKS5zdGFydHNXaXRoKFxyXG4gICAgXCI/XCIpKS5tYXAoZSA9PiBlLnRleHQudHJpbSgpKSxcclxuICBUID0gZSA9PiB7XHJcbiAgICBsZXQgdCA9IGU/LnRleHRDb250ZW50Py5yZXBsYWNlQWxsKFwiKlwiLCBcIlwiKS50cmltKCkgfHwgXCJcIjtcclxuICAgIHJldHVybiAoMCwgbC5jYW5vbmljYWxpemVCcmVlenlMYWJlbCkodClcclxuICB9LFxyXG4gIEYgPSBlID0+IHtcclxuICAgIGxldCB0ID0gZS5xdWVyeVNlbGVjdG9yKFwiLnJlcXVpcmVkOm5vdCgubmctaGlkZSlcIik7XHJcbiAgICByZXR1cm4gbnVsbCAhPT0gdFxyXG4gIH0sXHJcbiAgSSA9IChlLCB0KSA9PiB7XHJcbiAgICBsZXQgciA9IGUuZmluZEluZGV4KGUgPT4gKDAsIGwubWF0Y2hlc0JyZWV6eUxhYmVsKShlLmxhYmVsLCB0KSk7XHJcbiAgICByZXR1cm4gLTEgIT09IHIgPyBlLnNwbGljZShyLCAxKVswXSA6IG51bGxcclxuICB9LFxyXG4gIGogPSAoKSA9PiBcIlN1Ym1pdFwiLFxyXG4gIEQgPSAoKSA9PlxyXG4gIGAvL2J1dHRvblsuLy9zcGFuWyR7KDAsbC5idWlsZEJyZWV6eVBvbHlnbG90WHBhdGhUZXh0Q29uZGl0aW9uKShcIlN1Ym1pdCBBcHBsaWNhdGlvblwiLGU9PmB0ZXh0KCk9XCIke2V9XCJgKX1dXWBcclxuXHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJydWxlcy43MjRiZWE2ZS5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);