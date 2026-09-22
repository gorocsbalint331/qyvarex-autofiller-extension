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
})({"dq4OA":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\jacobs\\rules.js",
    "bundleId": "21c6a78f4389b34f",
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
var j = z(require("c8c50251be980859"));
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

},{"c8c50251be980859":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"e07v6":[function(require,module,exports) {
/**
 * Parcel module id: iZWxZ
 * Resolved path: src/contents/sites/jacobs/rules.js
 * Dependencies:
 *   ./answer -> iOFeQ  =>  src/contents/sites/jacobs/answer.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "UPPERCASE_XPATH", ()=>s), n.export(r, "LOWERCASE_XPATH", ()=>u), n.export(r, "getFormContainer", ()=>B), n.export(r, "validateExperienceRow", ()=>z), n.export(r, "validateEducationRow", ()=>W), n.export(r, "validateExperienceSection", ()=>K), n.export(r, "validateEducationSection", ()=>X), n.export(r, "getCleanLabelText", ()=>en), n.export(r, "isAutoCompleteSelect", ()=>ei), n.export(r, "getEducationRules", ()=>ep), n.export(r, "getExperienceRules", ()=>em), n.export(r, "isPasswordRule", ()=>eh), n.export(r, "isAcceptAcknowledgementRule", ()=>eb), n.export(r, "getLocalOnlyAutofillRules", ()=>ey), n.export(r, "getAutofillRules", ()=>ev), n.export(r, "extractRules", ()=>eS), n.export(r, "getFormSnapshot", ()=>eC), n.export(r, "jacobsXpaths", ()=>eA);
var o = e("~core/enums"), i = e("~core/xpath"), a = e("./answer");
function l(e1) {
    return `contains(concat(" ", normalize-space(@class), " "), " ${e1} ")`;
}
let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", u = "abcdefghijklmnopqrstuvwxyz", c = `//form[${l("tpt_wizard")}]`, d = l("WizardFieldHidden"), f = `translate(normalize-space(.), '${s}', '${u}')`, p = `not(@hidden) and not(ancestor::*[@hidden]) and not(${d}) and not(ancestor::*[${d}])`, m = `not(@type="hidden") and not(@type="file") and not(@type="button") and not(@type="submit") and not(@type="reset") and not(${d}) and not(ancestor::*[${d}])`, h = `.//*[self::input or self::select or self::textarea][${m}][1]`, g = `.//*[self::input or self::select or self::textarea][${m}]`, b = `.//div[${l("fieldSpec")}][${p}][not(ancestor::div[${l("datasetcontent")}])][not(${l("datasetField")})][not(${l("FileField")})][not(${l("ButtonBarField")})][not(${l("formContainer")})][not(ancestor::div[${l("formContainer")}])][not(ancestor::div[${l("schemaFieldContainer")}])][${g}]`, y = `.//div[${l("schemaFieldContainer")}]//div[${l("formfieldSpec")}][${p}][not(ancestor::div[${l("datasetcontent")}])][${g}]`, v = `${l("datasetField__row")} and not(${l("datasetField__row--sample")}) and not(@hidden) and not(@aria-hidden="true") and not(ancestor::*[@hidden])`, w = `${l("datasetcontent")} and @role="group"`, S = './/div[@data-schema-field-id="2021"] and .//div[@data-schema-field-id="1865"] and .//div[@data-schema-field-id="2106"]', E = './/div[@data-schema-field-id="1870"] and .//div[@data-schema-field-id="2108"] and .//div[@data-schema-field-id="3487"]', x = M(`//div[${w}][.//fieldset[${l("datasetField__row")}][${S}]]`), C = M(`//div[${w}][.//fieldset[${l("datasetField__row")}][${E}]]`), A = `${x}//fieldset[${v}]`, k = `${C}//fieldset[${v}]`, T = `.//div[${l("fieldSpec")} and ${p} and ${g}]`, F = `//div[${l("FileField")}][${p}][.//input[@type="file" and not(@disabled)]]`, I = `.//label[contains(${f}, "resume") or contains(${f}, "cv")]`, j = `.//label[contains(${f}, "upload additional file")]`, D = `${c}${F}[${I}]//input[@type="file" and not(@disabled)][1]`, P = `${c}${F}[${j}]//input[@type="file" and not(@disabled)][1]`, _ = M(`${F}[${I} or ${j}]`), L = `${_}//input[@type="file" and not(@disabled)][1]`, R = [
    {
        label: "College/university name",
        xpath: './/div[@data-schema-field-id="2021"]//select'
    },
    {
        label: "Level",
        xpath: './/div[@data-schema-field-id="1865"]//select'
    },
    {
        label: "Program/major",
        xpath: './/div[@data-schema-field-id="2106"]//select'
    },
    {
        label: "Start date (Month/Year)",
        xpath: './/div[@data-schema-field-id="1868"]//input[@type="month" and not(@hidden) and not(ancestor::*[@hidden])]'
    },
    {
        label: "End date (Month/Year)",
        xpath: './/div[@data-schema-field-id="1867"]//input[@type="month" and not(@hidden) and not(ancestor::*[@hidden])]'
    },
    {
        label: "Degree received? - Yes",
        xpath: './/div[@data-schema-field-id="3488"]//div[@role="radiogroup"]//input[@type="radio" and (@data-option-name="Yes" or following-sibling::label[contains(normalize-space(.), "Yes")])]'
    },
    {
        label: "Degree received? - No",
        xpath: './/div[@data-schema-field-id="3488"]//div[@role="radiogroup"]//input[@type="radio" and (@data-option-name="No" or following-sibling::label[contains(normalize-space(.), "No")])]'
    }
], O = [
    {
        label: "Company",
        xpath: './/div[@data-schema-field-id="1870"]//input[@type="text" and not(@type="hidden") and not(@hidden) and not(ancestor::*[@hidden])]'
    },
    {
        label: "Position title",
        xpath: './/div[@data-schema-field-id="2108"]//input[@type="text" and not(@type="hidden") and not(@hidden) and not(ancestor::*[@hidden])]'
    },
    {
        label: "Start date (Month/Year)",
        xpath: './/div[@data-schema-field-id="1872"]//input[@type="month" and not(@hidden) and not(ancestor::*[@hidden])]'
    },
    {
        label: "End date (Month/Year)",
        xpath: './/div[@data-schema-field-id="1871"]//input[@type="month" and not(@hidden) and not(ancestor::*[@hidden])]'
    },
    {
        label: "Current employer? - Yes",
        xpath: './/div[@data-schema-field-id="3487"]//div[@role="radiogroup"]//input[@type="radio" and (@data-option-name="Yes" or following-sibling::label[contains(normalize-space(.), "Yes")])]'
    },
    {
        label: "Current employer? - No",
        xpath: './/div[@data-schema-field-id="3487"]//div[@role="radiogroup"]//input[@type="radio" and (@data-option-name="No" or following-sibling::label[contains(normalize-space(.), "No")])]'
    }
];
function M(e1) {
    return `${c}${e1}`;
}
_c = M;
let N = M(`//div[${w}][.//fieldset[${l("datasetField__row")}][${E}]]//div[${l("datasetField__button--add")}]//a[${l("action--add")} and @role="button"]`), $ = M(`//div[${w}][.//fieldset[${l("datasetField__row")}][${S}]]//div[${l("datasetField__button--add")}]//a[${l("action--add")} and @role="button"]`);
function B() {
    return (0, i.getFirstOrderedNodeSafe)(c);
}
_c1 = B;
function q(e1) {
    let t = (0, i.getOrderedNodesSafe)(b, e1), r1 = (0, i.getOrderedNodesSafe)(y, e1);
    return [
        ...t,
        ...r1
    ];
}
function U() {
    return (0, i.getOrderedNodesSafe)(A);
}
_c2 = U;
function H() {
    return (0, i.getOrderedNodesSafe)(k);
}
_c3 = H;
function Y(e1, t) {
    return !!(0, i.getFirstOrderedNodeSafe)(e1, t);
}
_c4 = Y;
function z(e1) {
    let t = [], r1 = e1.id || "";
    for (let r1 of ((e1.hidden || "true" === e1.getAttribute("aria-hidden") || e1.classList.contains("datasetField__row--sample")) && t.push("Visible experience row"), O))Y(r1.xpath, e1) || t.push(r1.label);
    return {
        rowId: r1,
        valid: 0 === t.length,
        missingFields: t
    };
}
function V() {
    return H().filter((e1)=>z(e1).valid);
}
_c5 = V;
function W(e1) {
    let t = [], r1 = e1.id || "";
    for (let r1 of ((e1.hidden || "true" === e1.getAttribute("aria-hidden") || e1.classList.contains("datasetField__row--sample")) && t.push("Visible education row"), R))Y(r1.xpath, e1) || t.push(r1.label);
    return {
        rowId: r1,
        valid: 0 === t.length,
        missingFields: t
    };
}
_c6 = W;
function G() {
    return U().filter((e1)=>W(e1).valid);
}
_c7 = G;
function K(e1) {
    let t = Y(C), r1 = Y(N), n = H().map(z), o = n.length, i = n.filter((e1)=>e1.valid).length, a = null == e1 ? o > 0 : o === e1;
    return {
        valid: t && r1 && a,
        containerFound: t,
        addButtonFound: r1,
        countMatched: a,
        actualCount: o,
        rowCount: o,
        validRowCount: i,
        expectedCount: e1,
        rows: n
    };
}
_c8 = K;
function X(e1) {
    let t = Y(x), r1 = Y($), n = U().map(W), o = n.length, i = n.filter((e1)=>e1.valid).length, a = null == e1 ? o > 0 : o === e1;
    return {
        valid: t && r1 && a,
        containerFound: t,
        addButtonFound: r1,
        countMatched: a,
        actualCount: o,
        rowCount: o,
        validRowCount: i,
        expectedCount: e1,
        rows: n
    };
}
_c9 = X;
function J(e1) {
    return (0, i.getOrderedNodesSafe)(T, e1);
}
_c10 = J;
function Q(e1) {
    return (0, i.getFirstOrderedNodeSafe)(h, e1);
}
_c11 = Q;
function Z(e1) {
    return !(!(e1 instanceof HTMLInputElement || e1 instanceof HTMLSelectElement || e1 instanceof HTMLTextAreaElement) || e1.closest(".WizardFieldHidden")) && (!(e1 instanceof HTMLInputElement) || ![
        "hidden",
        "file",
        "button",
        "submit",
        "reset"
    ].includes(e1.type));
}
_c12 = Z;
function ee(e1) {
    return Array.from(e1.querySelectorAll("input, select, textarea")).filter(Z);
}
function et(e1) {
    return (0, i.getFirstOrderedNodeSafe)("./label[1] | ./fieldset/legend[1] | .//label[1] | .//legend[1]", e1);
}
function er(e1, t) {
    let r1 = ee(e1);
    if (!r1.length) return null;
    if (!t) return r1[0];
    let n = r1.find((e1)=>!!(t.compareDocumentPosition(e1) & Node.DOCUMENT_POSITION_FOLLOWING));
    return n || r1[0] || Q(e1);
}
function en(e1) {
    if (!e1) return "";
    let t = new Set([
        "labelRequiredIcon",
        "screenReaderVisibility"
    ]), r1 = Array.from(e1.childNodes).filter((e1)=>{
        let r1 = e1, n = r1.classList ? Array.from(r1.classList) : [];
        return !r1.id?.endsWith("-labelValue") && !n.some((e1)=>t.has(e1));
    }).map((e1)=>e1.textContent || "").join("");
    return (0, a.normalizeText)(r1).replace(/\s*\*\s*$/, "").trim();
}
function eo(e1, t, r1) {
    return e1.classList.contains("isRequired") || t.hasAttribute("required") || "true" === t.getAttribute("required") || "true" === t.getAttribute("data-required") || "true" === t.getAttribute("aria-required") || /\*/.test(r1?.textContent || "");
}
function ei(e1) {
    return e1.classList.contains("AutoCompleteField") || e1.classList.contains("AutocompleteSelectFieldChildHtmlElement");
}
function ea(e1) {
    return ei(e1) ? [] : Array.from(e1.options).map((e1)=>(0, a.normalizeText)(e1.textContent || e1.value)).filter((e1)=>e1 && !/^select (an?|a) /i.test(e1) && !/^not required$/i.test(e1));
}
function el(e1) {
    return (0, i.getOrderedNodesSafe)('.//input[@type="radio"]', e1);
}
function es(e1) {
    return (0, i.getOrderedNodesSafe)('.//input[@type="checkbox"]', e1);
}
function eu(e1) {
    let t = (0, i.getFirstOrderedNodeSafe)(`./ancestor::form[1]//label[@for=${(0, i.escapeXPath)(e1.id)}][1]`, e1);
    return (0, a.normalizeText)(t?.textContent || e1.getAttribute("data-option-name") || e1.value);
}
function ec(e1) {
    return e1.map((e1)=>({
            label: e1.label,
            type: e1.type,
            options: "options" in e1 ? e1.options : void 0
        }));
}
async function ed(e1) {
    let t = et(e1), r1 = er(e1, t), n = en(t);
    if (!r1 || !n) return null;
    if (r1 instanceof HTMLInputElement && "radio" === r1.type) {
        let r1 = el(e1);
        return r1.length ? {
            label: n,
            type: o.FIELD_TYPE.RADIOGROUP,
            required: r1.some((r1)=>eo(e1, r1, t)),
            options: r1.map(eu).filter(Boolean),
            $label: t || e1,
            $input: r1[0],
            $radioParent: e1,
            $radios: r1
        } : null;
    }
    if (r1 instanceof HTMLInputElement && "checkbox" === r1.type) {
        let i = es(e1), a = i.length ? i : [
            r1
        ];
        return {
            label: n,
            type: o.FIELD_TYPE.CHECKBOX,
            required: a.some((r1)=>eo(e1, r1, t)),
            options: a.map(eu).filter(Boolean),
            $label: t || e1,
            $input: r1,
            $checkboxs: a
        };
    }
    if (r1 instanceof HTMLSelectElement) {
        let i = r1.multiple ? o.FIELD_TYPE.MULTI_SELECT : o.FIELD_TYPE.SELECT;
        return {
            label: n,
            type: i,
            required: eo(e1, r1, t),
            options: ea(r1),
            $label: t || e1,
            $input: r1
        };
    }
    let i = {
        label: n,
        type: o.FIELD_TYPE.TEXT,
        required: eo(e1, r1, t),
        $label: t || e1,
        $input: r1
    };
    return "what is your expected annual salary" === (0, a.normalizeText)(n).replace(/[?:.]+$/g, "").toLowerCase() && (i.description = "Please return a specific number only."), i;
}
async function ef(e1) {
    let t = [];
    for (let r1 of J(e1)){
        let e1 = await ed(r1);
        e1 && t.push(e1);
    }
    return t;
}
async function ep() {
    let e1 = [];
    for (let t of G()){
        let r1 = await ef(t);
        r1.length && e1.push({
            label: "Education",
            type: o.FIELD_TYPE.EDUCATION,
            required: !0,
            children: r1,
            options: ec(r1),
            $input: t
        });
    }
    return e1;
}
async function em() {
    let e1 = [];
    for (let t of V()){
        let r1 = await ef(t);
        r1.length && e1.push({
            label: "Employment",
            type: o.FIELD_TYPE.EMPLOYMENT,
            required: r1.some((e1)=>e1.required),
            children: r1,
            options: ec(r1),
            $input: t
        });
    }
    return e1;
}
function eh(e1) {
    let t = e1.$input;
    return e1.type === o.FIELD_TYPE.TEXT && "password" === String(t?.type || "").toLowerCase();
}
function eg(e1) {
    let t = e1.$input;
    return t ? (0, i.getFirstOrderedNodeSafe)('./ancestor::div[contains(concat(" ", normalize-space(@class), " "), " fieldSpec ")][1]', t) : null;
}
function eb(e1) {
    if (e1.type !== o.FIELD_TYPE.CHECKBOX) return !1;
    let t = (0, a.normalizeText)(e1.label).toLowerCase(), r1 = e1.$input;
    return r1?.id === "1577" || "i accept and acknowledge" === t || t.startsWith("i accept and acknowledge") || eg(e1)?.id === "fieldSpecContainer1577";
}
function ey(e1) {
    return e1.filter(eb);
}
function ev(e1) {
    return e1.filter((e1)=>!eh(e1) && !eb(e1));
}
function ew(e1) {
    return e1.checked || "true" === e1.getAttribute("aria-checked");
}
async function eS() {
    let e1 = B(), t = [];
    if (!e1) return t;
    for (let r1 of q(e1)){
        let e1 = await ed(r1);
        e1 && t.push(e1);
    }
    return t.push(...await ep()), t.push(...await em()), t;
}
function eE(e1) {
    if (e1.type === o.FIELD_TYPE.TEXT) {
        let t = e1;
        return t.$input.value || "";
    }
    if (e1.type === o.FIELD_TYPE.SELECT || e1.type === o.FIELD_TYPE.MULTI_SELECT) {
        let t = e1, r1 = t.$input, n = Array.from(r1.selectedOptions || []).map((e1)=>(0, a.normalizeText)(e1.textContent || e1.value)).filter((e1)=>"select an option" !== e1.toLowerCase()).filter(Boolean), o = (0, a.normalizeText)(r1.value);
        return n.length ? n.join(", ") : "select an option" === o.toLowerCase() ? "" : o;
    }
    if (e1.type === o.FIELD_TYPE.CHECKBOX) {
        let t = e1, r1 = (t.$checkboxs || []).filter((e1)=>e1.checked).map((e1)=>eu(e1)).filter(Boolean);
        return r1.length > 0 ? r1.join(", ") : t.$input?.checked ? "Yes" : "No";
    }
    if (e1.type === o.FIELD_TYPE.RADIOGROUP) {
        let t = e1, r1 = t.$radios || [], n = r1.find(ew);
        return n ? eu(n) : "";
    }
    return "";
}
function ex(e1) {
    return e1.map((e1)=>{
        let t = {}, r1 = "children" in e1 ? e1.children : [];
        for (let e1 of r1 || [])t[e1.label] = eE(e1);
        return t;
    });
}
async function eC() {
    let e1 = {}, t = ev(await eS());
    for (let r1 of t)r1.type !== o.FIELD_TYPE.EDUCATION && r1.type !== o.FIELD_TYPE.EMPLOYMENT && (e1[r1.label] = eE(r1));
    return e1.education = ex(await ep()), e1.employment = ex(await em()), e1;
}
let eA = {
    form: c,
    regularFieldSpecs: b,
    jobSpecificFieldSpecs: y,
    rowFieldSpecs: T,
    fieldControl: h,
    educationContainer: x,
    experienceContainer: C,
    educationRows: A,
    experienceRows: k,
    educationAddButton: $,
    experienceAddButton: N,
    experienceRowFieldChecks: O,
    resumeFileInput: D,
    additionalFileInput: P,
    attachmentFileField: _,
    attachmentFileInput: L,
    submitButton: M('//button[@name="save" and @type="submit" and contains(concat(" ", normalize-space(@class), " "), " saveButton ")]')
};
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
$RefreshReg$(_c, "M");
$RefreshReg$(_c1, "B");
$RefreshReg$(_c2, "U");
$RefreshReg$(_c3, "H");
$RefreshReg$(_c4, "Y");
$RefreshReg$(_c5, "V");
$RefreshReg$(_c6, "W");
$RefreshReg$(_c7, "G");
$RefreshReg$(_c8, "K");
$RefreshReg$(_c9, "X");
$RefreshReg$(_c10, "J");
$RefreshReg$(_c11, "Q");
$RefreshReg$(_c12, "Z");

},{}]},["dq4OA","e07v6"], "e07v6", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUFFLEdBQUUsS0FBSyxRQUFNLEVBQUUsUUFBUSxVQUFRLFFBQU07SUFBSTtJQUFDLElBQUcsR0FBRSxTQUFPLEVBQUUsV0FBVyxZQUFXO1FBQUMsSUFBSSxJQUFFLElBQUUsS0FBRSxFQUFFLFdBQVMsRUFBRSxFQUFDLElBQUUsR0FBRSxLQUFLO1FBQUksT0FBTyxJQUFFLEdBQUcsS0FBRztJQUFFO0lBQUMsT0FBTTtBQUFFO0FBQUMsU0FBUyxHQUFHLEVBQUM7SUFBRSxPQUFPLEdBQUUsSUFBSSxDQUFBO1FBQUksSUFBSSxJQUFFLENBQUMsR0FBRSxLQUFFLGNBQWEsS0FBRSxHQUFFLFdBQVMsRUFBRTtRQUFDLEtBQUksSUFBSSxNQUFLLE1BQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLE1BQU0sR0FBQyxHQUFHO1FBQUcsT0FBTztJQUFDO0FBQUU7QUFBQyxlQUFlO0lBQUssSUFBSSxLQUFFLENBQUMsR0FBRSxJQUFFLEdBQUcsTUFBTTtJQUFNLEtBQUksSUFBSSxNQUFLLEVBQUUsR0FBRSxTQUFPLEVBQUUsV0FBVyxhQUFXLEdBQUUsU0FBTyxFQUFFLFdBQVcsY0FBYSxDQUFBLEVBQUMsQ0FBQyxHQUFFLE1BQU0sR0FBQyxHQUFHLEdBQUM7SUFBRyxPQUFPLEdBQUUsWUFBVSxHQUFHLE1BQU0sT0FBTSxHQUFFLGFBQVcsR0FBRyxNQUFNLE9BQU07QUFBQztBQUFDLElBQUksS0FBRztJQUFDLE1BQUs7SUFBRSxtQkFBa0I7SUFBRSx1QkFBc0I7SUFBRSxlQUFjO0lBQUUsY0FBYTtJQUFFLG9CQUFtQjtJQUFFLHFCQUFvQjtJQUFFLGVBQWM7SUFBRSxnQkFBZTtJQUFFLG9CQUFtQjtJQUFFLHFCQUFvQjtJQUFFLDBCQUF5QjtJQUFFLGlCQUFnQjtJQUFFLHFCQUFvQjtJQUFFLHFCQUFvQjtJQUFFLHFCQUFvQjtJQUFFLGNBQWEsRUFBRTtBQUFvSCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtNDY1ZmY4ZjNmZTYyNTJiZS5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9qYWNvYnMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcamFjb2JzXFxcXHJ1bGVzLmpzXCIsXCJidW5kbGVJZFwiOlwiMjFjNmE3OGY0Mzg5YjM0ZlwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IGlaV3haXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9qYWNvYnMvcnVsZXMuanNcclxuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIC4vYW5zd2VyIC0+IGlPRmVRICA9PiAgc3JjL2NvbnRlbnRzL3NpdGVzL2phY29icy9hbnN3ZXIuanNcclxuICogICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIC0+IGNIVWJsICA9PiAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1xyXG4gKiAgIH5jb3JlL2VudW1zIC0+IDFPM25jICA9PiAgc3JjL2NvcmUvZW51bXMuanNcclxuICogICB+Y29yZS94cGF0aCAtPiBhZ0U0dSAgPT4gIHNyYy9jb3JlL3hwYXRoLmpzXHJcbiAqL1xyXG5cclxudmFyIG49ZShcIkBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcIik7bi5kZWZpbmVJbnRlcm9wRmxhZyhyKSxuLmV4cG9ydChyLFwiVVBQRVJDQVNFX1hQQVRIXCIsKCk9PnMpLG4uZXhwb3J0KHIsXCJMT1dFUkNBU0VfWFBBVEhcIiwoKT0+dSksbi5leHBvcnQocixcImdldEZvcm1Db250YWluZXJcIiwoKT0+Qiksbi5leHBvcnQocixcInZhbGlkYXRlRXhwZXJpZW5jZVJvd1wiLCgpPT56KSxuLmV4cG9ydChyLFwidmFsaWRhdGVFZHVjYXRpb25Sb3dcIiwoKT0+Vyksbi5leHBvcnQocixcInZhbGlkYXRlRXhwZXJpZW5jZVNlY3Rpb25cIiwoKT0+Syksbi5leHBvcnQocixcInZhbGlkYXRlRWR1Y2F0aW9uU2VjdGlvblwiLCgpPT5YKSxuLmV4cG9ydChyLFwiZ2V0Q2xlYW5MYWJlbFRleHRcIiwoKT0+ZW4pLG4uZXhwb3J0KHIsXCJpc0F1dG9Db21wbGV0ZVNlbGVjdFwiLCgpPT5laSksbi5leHBvcnQocixcImdldEVkdWNhdGlvblJ1bGVzXCIsKCk9PmVwKSxuLmV4cG9ydChyLFwiZ2V0RXhwZXJpZW5jZVJ1bGVzXCIsKCk9PmVtKSxuLmV4cG9ydChyLFwiaXNQYXNzd29yZFJ1bGVcIiwoKT0+ZWgpLG4uZXhwb3J0KHIsXCJpc0FjY2VwdEFja25vd2xlZGdlbWVudFJ1bGVcIiwoKT0+ZWIpLG4uZXhwb3J0KHIsXCJnZXRMb2NhbE9ubHlBdXRvZmlsbFJ1bGVzXCIsKCk9PmV5KSxuLmV4cG9ydChyLFwiZ2V0QXV0b2ZpbGxSdWxlc1wiLCgpPT5ldiksbi5leHBvcnQocixcImV4dHJhY3RSdWxlc1wiLCgpPT5lUyksbi5leHBvcnQocixcImdldEZvcm1TbmFwc2hvdFwiLCgpPT5lQyksbi5leHBvcnQocixcImphY29ic1hwYXRoc1wiLCgpPT5lQSk7dmFyIG89ZShcIn5jb3JlL2VudW1zXCIpLGk9ZShcIn5jb3JlL3hwYXRoXCIpLGE9ZShcIi4vYW5zd2VyXCIpO2Z1bmN0aW9uIGwoZSl7cmV0dXJuYGNvbnRhaW5zKGNvbmNhdChcIiBcIiwgbm9ybWFsaXplLXNwYWNlKEBjbGFzcyksIFwiIFwiKSwgXCIgJHtlfSBcIilgfWxldCBzPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIix1PVwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIixjPWAvL2Zvcm1bJHtsKFwidHB0X3dpemFyZFwiKX1dYCxkPWwoXCJXaXphcmRGaWVsZEhpZGRlblwiKSxmPWB0cmFuc2xhdGUobm9ybWFsaXplLXNwYWNlKC4pLCAnJHtzfScsICcke3V9JylgLHA9YG5vdChAaGlkZGVuKSBhbmQgbm90KGFuY2VzdG9yOjoqW0BoaWRkZW5dKSBhbmQgbm90KCR7ZH0pIGFuZCBub3QoYW5jZXN0b3I6OipbJHtkfV0pYCxtPWBub3QoQHR5cGU9XCJoaWRkZW5cIikgYW5kIG5vdChAdHlwZT1cImZpbGVcIikgYW5kIG5vdChAdHlwZT1cImJ1dHRvblwiKSBhbmQgbm90KEB0eXBlPVwic3VibWl0XCIpIGFuZCBub3QoQHR5cGU9XCJyZXNldFwiKSBhbmQgbm90KCR7ZH0pIGFuZCBub3QoYW5jZXN0b3I6OipbJHtkfV0pYCxoPWAuLy8qW3NlbGY6OmlucHV0IG9yIHNlbGY6OnNlbGVjdCBvciBzZWxmOjp0ZXh0YXJlYV1bJHttfV1bMV1gLGc9YC4vLypbc2VsZjo6aW5wdXQgb3Igc2VsZjo6c2VsZWN0IG9yIHNlbGY6OnRleHRhcmVhXVske219XWAsYj1gLi8vZGl2WyR7bChcImZpZWxkU3BlY1wiKX1dWyR7cH1dW25vdChhbmNlc3Rvcjo6ZGl2WyR7bChcImRhdGFzZXRjb250ZW50XCIpfV0pXVtub3QoJHtsKFwiZGF0YXNldEZpZWxkXCIpfSldW25vdCgke2woXCJGaWxlRmllbGRcIil9KV1bbm90KCR7bChcIkJ1dHRvbkJhckZpZWxkXCIpfSldW25vdCgke2woXCJmb3JtQ29udGFpbmVyXCIpfSldW25vdChhbmNlc3Rvcjo6ZGl2WyR7bChcImZvcm1Db250YWluZXJcIil9XSldW25vdChhbmNlc3Rvcjo6ZGl2WyR7bChcInNjaGVtYUZpZWxkQ29udGFpbmVyXCIpfV0pXVske2d9XWAseT1gLi8vZGl2WyR7bChcInNjaGVtYUZpZWxkQ29udGFpbmVyXCIpfV0vL2Rpdlske2woXCJmb3JtZmllbGRTcGVjXCIpfV1bJHtwfV1bbm90KGFuY2VzdG9yOjpkaXZbJHtsKFwiZGF0YXNldGNvbnRlbnRcIil9XSldWyR7Z31dYCx2PWAke2woXCJkYXRhc2V0RmllbGRfX3Jvd1wiKX0gYW5kIG5vdCgke2woXCJkYXRhc2V0RmllbGRfX3Jvdy0tc2FtcGxlXCIpfSkgYW5kIG5vdChAaGlkZGVuKSBhbmQgbm90KEBhcmlhLWhpZGRlbj1cInRydWVcIikgYW5kIG5vdChhbmNlc3Rvcjo6KltAaGlkZGVuXSlgLHc9YCR7bChcImRhdGFzZXRjb250ZW50XCIpfSBhbmQgQHJvbGU9XCJncm91cFwiYCxTPScuLy9kaXZbQGRhdGEtc2NoZW1hLWZpZWxkLWlkPVwiMjAyMVwiXSBhbmQgLi8vZGl2W0BkYXRhLXNjaGVtYS1maWVsZC1pZD1cIjE4NjVcIl0gYW5kIC4vL2RpdltAZGF0YS1zY2hlbWEtZmllbGQtaWQ9XCIyMTA2XCJdJyxFPScuLy9kaXZbQGRhdGEtc2NoZW1hLWZpZWxkLWlkPVwiMTg3MFwiXSBhbmQgLi8vZGl2W0BkYXRhLXNjaGVtYS1maWVsZC1pZD1cIjIxMDhcIl0gYW5kIC4vL2RpdltAZGF0YS1zY2hlbWEtZmllbGQtaWQ9XCIzNDg3XCJdJyx4PU0oYC8vZGl2WyR7d31dWy4vL2ZpZWxkc2V0WyR7bChcImRhdGFzZXRGaWVsZF9fcm93XCIpfV1bJHtTfV1dYCksQz1NKGAvL2Rpdlske3d9XVsuLy9maWVsZHNldFske2woXCJkYXRhc2V0RmllbGRfX3Jvd1wiKX1dWyR7RX1dXWApLEE9YCR7eH0vL2ZpZWxkc2V0WyR7dn1dYCxrPWAke0N9Ly9maWVsZHNldFske3Z9XWAsVD1gLi8vZGl2WyR7bChcImZpZWxkU3BlY1wiKX0gYW5kICR7cH0gYW5kICR7Z31dYCxGPWAvL2Rpdlske2woXCJGaWxlRmllbGRcIil9XVske3B9XVsuLy9pbnB1dFtAdHlwZT1cImZpbGVcIiBhbmQgbm90KEBkaXNhYmxlZCldXWAsST1gLi8vbGFiZWxbY29udGFpbnMoJHtmfSwgXCJyZXN1bWVcIikgb3IgY29udGFpbnMoJHtmfSwgXCJjdlwiKV1gLGo9YC4vL2xhYmVsW2NvbnRhaW5zKCR7Zn0sIFwidXBsb2FkIGFkZGl0aW9uYWwgZmlsZVwiKV1gLEQ9YCR7Y30ke0Z9WyR7SX1dLy9pbnB1dFtAdHlwZT1cImZpbGVcIiBhbmQgbm90KEBkaXNhYmxlZCldWzFdYCxQPWAke2N9JHtGfVske2p9XS8vaW5wdXRbQHR5cGU9XCJmaWxlXCIgYW5kIG5vdChAZGlzYWJsZWQpXVsxXWAsXz1NKGAke0Z9WyR7SX0gb3IgJHtqfV1gKSxMPWAke199Ly9pbnB1dFtAdHlwZT1cImZpbGVcIiBhbmQgbm90KEBkaXNhYmxlZCldWzFdYCxSPVt7bGFiZWw6XCJDb2xsZWdlL3VuaXZlcnNpdHkgbmFtZVwiLHhwYXRoOicuLy9kaXZbQGRhdGEtc2NoZW1hLWZpZWxkLWlkPVwiMjAyMVwiXS8vc2VsZWN0J30se2xhYmVsOlwiTGV2ZWxcIix4cGF0aDonLi8vZGl2W0BkYXRhLXNjaGVtYS1maWVsZC1pZD1cIjE4NjVcIl0vL3NlbGVjdCd9LHtsYWJlbDpcIlByb2dyYW0vbWFqb3JcIix4cGF0aDonLi8vZGl2W0BkYXRhLXNjaGVtYS1maWVsZC1pZD1cIjIxMDZcIl0vL3NlbGVjdCd9LHtsYWJlbDpcIlN0YXJ0IGRhdGUgKE1vbnRoL1llYXIpXCIseHBhdGg6Jy4vL2RpdltAZGF0YS1zY2hlbWEtZmllbGQtaWQ9XCIxODY4XCJdLy9pbnB1dFtAdHlwZT1cIm1vbnRoXCIgYW5kIG5vdChAaGlkZGVuKSBhbmQgbm90KGFuY2VzdG9yOjoqW0BoaWRkZW5dKV0nfSx7bGFiZWw6XCJFbmQgZGF0ZSAoTW9udGgvWWVhcilcIix4cGF0aDonLi8vZGl2W0BkYXRhLXNjaGVtYS1maWVsZC1pZD1cIjE4NjdcIl0vL2lucHV0W0B0eXBlPVwibW9udGhcIiBhbmQgbm90KEBoaWRkZW4pIGFuZCBub3QoYW5jZXN0b3I6OipbQGhpZGRlbl0pXSd9LHtsYWJlbDpcIkRlZ3JlZSByZWNlaXZlZD8gLSBZZXNcIix4cGF0aDonLi8vZGl2W0BkYXRhLXNjaGVtYS1maWVsZC1pZD1cIjM0ODhcIl0vL2RpdltAcm9sZT1cInJhZGlvZ3JvdXBcIl0vL2lucHV0W0B0eXBlPVwicmFkaW9cIiBhbmQgKEBkYXRhLW9wdGlvbi1uYW1lPVwiWWVzXCIgb3IgZm9sbG93aW5nLXNpYmxpbmc6OmxhYmVsW2NvbnRhaW5zKG5vcm1hbGl6ZS1zcGFjZSguKSwgXCJZZXNcIildKV0nfSx7bGFiZWw6XCJEZWdyZWUgcmVjZWl2ZWQ/IC0gTm9cIix4cGF0aDonLi8vZGl2W0BkYXRhLXNjaGVtYS1maWVsZC1pZD1cIjM0ODhcIl0vL2RpdltAcm9sZT1cInJhZGlvZ3JvdXBcIl0vL2lucHV0W0B0eXBlPVwicmFkaW9cIiBhbmQgKEBkYXRhLW9wdGlvbi1uYW1lPVwiTm9cIiBvciBmb2xsb3dpbmctc2libGluZzo6bGFiZWxbY29udGFpbnMobm9ybWFsaXplLXNwYWNlKC4pLCBcIk5vXCIpXSldJ31dLE89W3tsYWJlbDpcIkNvbXBhbnlcIix4cGF0aDonLi8vZGl2W0BkYXRhLXNjaGVtYS1maWVsZC1pZD1cIjE4NzBcIl0vL2lucHV0W0B0eXBlPVwidGV4dFwiIGFuZCBub3QoQHR5cGU9XCJoaWRkZW5cIikgYW5kIG5vdChAaGlkZGVuKSBhbmQgbm90KGFuY2VzdG9yOjoqW0BoaWRkZW5dKV0nfSx7bGFiZWw6XCJQb3NpdGlvbiB0aXRsZVwiLHhwYXRoOicuLy9kaXZbQGRhdGEtc2NoZW1hLWZpZWxkLWlkPVwiMjEwOFwiXS8vaW5wdXRbQHR5cGU9XCJ0ZXh0XCIgYW5kIG5vdChAdHlwZT1cImhpZGRlblwiKSBhbmQgbm90KEBoaWRkZW4pIGFuZCBub3QoYW5jZXN0b3I6OipbQGhpZGRlbl0pXSd9LHtsYWJlbDpcIlN0YXJ0IGRhdGUgKE1vbnRoL1llYXIpXCIseHBhdGg6Jy4vL2RpdltAZGF0YS1zY2hlbWEtZmllbGQtaWQ9XCIxODcyXCJdLy9pbnB1dFtAdHlwZT1cIm1vbnRoXCIgYW5kIG5vdChAaGlkZGVuKSBhbmQgbm90KGFuY2VzdG9yOjoqW0BoaWRkZW5dKV0nfSx7bGFiZWw6XCJFbmQgZGF0ZSAoTW9udGgvWWVhcilcIix4cGF0aDonLi8vZGl2W0BkYXRhLXNjaGVtYS1maWVsZC1pZD1cIjE4NzFcIl0vL2lucHV0W0B0eXBlPVwibW9udGhcIiBhbmQgbm90KEBoaWRkZW4pIGFuZCBub3QoYW5jZXN0b3I6OipbQGhpZGRlbl0pXSd9LHtsYWJlbDpcIkN1cnJlbnQgZW1wbG95ZXI/IC0gWWVzXCIseHBhdGg6Jy4vL2RpdltAZGF0YS1zY2hlbWEtZmllbGQtaWQ9XCIzNDg3XCJdLy9kaXZbQHJvbGU9XCJyYWRpb2dyb3VwXCJdLy9pbnB1dFtAdHlwZT1cInJhZGlvXCIgYW5kIChAZGF0YS1vcHRpb24tbmFtZT1cIlllc1wiIG9yIGZvbGxvd2luZy1zaWJsaW5nOjpsYWJlbFtjb250YWlucyhub3JtYWxpemUtc3BhY2UoLiksIFwiWWVzXCIpXSldJ30se2xhYmVsOlwiQ3VycmVudCBlbXBsb3llcj8gLSBOb1wiLHhwYXRoOicuLy9kaXZbQGRhdGEtc2NoZW1hLWZpZWxkLWlkPVwiMzQ4N1wiXS8vZGl2W0Byb2xlPVwicmFkaW9ncm91cFwiXS8vaW5wdXRbQHR5cGU9XCJyYWRpb1wiIGFuZCAoQGRhdGEtb3B0aW9uLW5hbWU9XCJOb1wiIG9yIGZvbGxvd2luZy1zaWJsaW5nOjpsYWJlbFtjb250YWlucyhub3JtYWxpemUtc3BhY2UoLiksIFwiTm9cIildKV0nfV07ZnVuY3Rpb24gTShlKXtyZXR1cm5gJHtjfSR7ZX1gfWxldCBOPU0oYC8vZGl2WyR7d31dWy4vL2ZpZWxkc2V0WyR7bChcImRhdGFzZXRGaWVsZF9fcm93XCIpfV1bJHtFfV1dLy9kaXZbJHtsKFwiZGF0YXNldEZpZWxkX19idXR0b24tLWFkZFwiKX1dLy9hWyR7bChcImFjdGlvbi0tYWRkXCIpfSBhbmQgQHJvbGU9XCJidXR0b25cIl1gKSwkPU0oYC8vZGl2WyR7d31dWy4vL2ZpZWxkc2V0WyR7bChcImRhdGFzZXRGaWVsZF9fcm93XCIpfV1bJHtTfV1dLy9kaXZbJHtsKFwiZGF0YXNldEZpZWxkX19idXR0b24tLWFkZFwiKX1dLy9hWyR7bChcImFjdGlvbi0tYWRkXCIpfSBhbmQgQHJvbGU9XCJidXR0b25cIl1gKTtmdW5jdGlvbiBCKCl7cmV0dXJuKDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoYyl9ZnVuY3Rpb24gcShlKXtsZXQgdD0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKGIsZSkscj0oMCxpLmdldE9yZGVyZWROb2Rlc1NhZmUpKHksZSk7cmV0dXJuWy4uLnQsLi4ucl19ZnVuY3Rpb24gVSgpe3JldHVybigwLGkuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoQSl9ZnVuY3Rpb24gSCgpe3JldHVybigwLGkuZ2V0T3JkZXJlZE5vZGVzU2FmZSkoayl9ZnVuY3Rpb24gWShlLHQpe3JldHVybiEhKDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoZSx0KX1mdW5jdGlvbiB6KGUpe2xldCB0PVtdLHI9ZS5pZHx8XCJcIjtmb3IobGV0IHIgb2YoKGUuaGlkZGVufHxcInRydWVcIj09PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIil8fGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGF0YXNldEZpZWxkX19yb3ctLXNhbXBsZVwiKSkmJnQucHVzaChcIlZpc2libGUgZXhwZXJpZW5jZSByb3dcIiksTykpWShyLnhwYXRoLGUpfHx0LnB1c2goci5sYWJlbCk7cmV0dXJue3Jvd0lkOnIsdmFsaWQ6MD09PXQubGVuZ3RoLG1pc3NpbmdGaWVsZHM6dH19ZnVuY3Rpb24gVigpe3JldHVybiBIKCkuZmlsdGVyKGU9PnooZSkudmFsaWQpfWZ1bmN0aW9uIFcoZSl7bGV0IHQ9W10scj1lLmlkfHxcIlwiO2ZvcihsZXQgciBvZigoZS5oaWRkZW58fFwidHJ1ZVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKXx8ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXRhc2V0RmllbGRfX3Jvdy0tc2FtcGxlXCIpKSYmdC5wdXNoKFwiVmlzaWJsZSBlZHVjYXRpb24gcm93XCIpLFIpKVkoci54cGF0aCxlKXx8dC5wdXNoKHIubGFiZWwpO3JldHVybntyb3dJZDpyLHZhbGlkOjA9PT10Lmxlbmd0aCxtaXNzaW5nRmllbGRzOnR9fWZ1bmN0aW9uIEcoKXtyZXR1cm4gVSgpLmZpbHRlcihlPT5XKGUpLnZhbGlkKX1mdW5jdGlvbiBLKGUpe2xldCB0PVkoQykscj1ZKE4pLG49SCgpLm1hcCh6KSxvPW4ubGVuZ3RoLGk9bi5maWx0ZXIoZT0+ZS52YWxpZCkubGVuZ3RoLGE9bnVsbD09ZT9vPjA6bz09PWU7cmV0dXJue3ZhbGlkOnQmJnImJmEsY29udGFpbmVyRm91bmQ6dCxhZGRCdXR0b25Gb3VuZDpyLGNvdW50TWF0Y2hlZDphLGFjdHVhbENvdW50Om8scm93Q291bnQ6byx2YWxpZFJvd0NvdW50OmksZXhwZWN0ZWRDb3VudDplLHJvd3M6bn19ZnVuY3Rpb24gWChlKXtsZXQgdD1ZKHgpLHI9WSgkKSxuPVUoKS5tYXAoVyksbz1uLmxlbmd0aCxpPW4uZmlsdGVyKGU9PmUudmFsaWQpLmxlbmd0aCxhPW51bGw9PWU/bz4wOm89PT1lO3JldHVybnt2YWxpZDp0JiZyJiZhLGNvbnRhaW5lckZvdW5kOnQsYWRkQnV0dG9uRm91bmQ6cixjb3VudE1hdGNoZWQ6YSxhY3R1YWxDb3VudDpvLHJvd0NvdW50Om8sdmFsaWRSb3dDb3VudDppLGV4cGVjdGVkQ291bnQ6ZSxyb3dzOm59fWZ1bmN0aW9uIEooZSl7cmV0dXJuKDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKShULGUpfWZ1bmN0aW9uIFEoZSl7cmV0dXJuKDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoaCxlKX1mdW5jdGlvbiBaKGUpe3JldHVybiEoIShlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudHx8ZSBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50fHxlIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCl8fGUuY2xvc2VzdChcIi5XaXphcmRGaWVsZEhpZGRlblwiKSkmJighKGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KXx8IVtcImhpZGRlblwiLFwiZmlsZVwiLFwiYnV0dG9uXCIsXCJzdWJtaXRcIixcInJlc2V0XCJdLmluY2x1ZGVzKGUudHlwZSkpfWZ1bmN0aW9uIGVlKGUpe3JldHVybiBBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpKS5maWx0ZXIoWil9ZnVuY3Rpb24gZXQoZSl7cmV0dXJuKDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoXCIuL2xhYmVsWzFdIHwgLi9maWVsZHNldC9sZWdlbmRbMV0gfCAuLy9sYWJlbFsxXSB8IC4vL2xlZ2VuZFsxXVwiLGUpfWZ1bmN0aW9uIGVyKGUsdCl7bGV0IHI9ZWUoZSk7aWYoIXIubGVuZ3RoKXJldHVybiBudWxsO2lmKCF0KXJldHVybiByWzBdO2xldCBuPXIuZmluZChlPT4hISh0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpJk5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HKSk7cmV0dXJuIG58fHJbMF18fFEoZSl9ZnVuY3Rpb24gZW4oZSl7aWYoIWUpcmV0dXJuXCJcIjtsZXQgdD1uZXcgU2V0KFtcImxhYmVsUmVxdWlyZWRJY29uXCIsXCJzY3JlZW5SZWFkZXJWaXNpYmlsaXR5XCJdKSxyPUFycmF5LmZyb20oZS5jaGlsZE5vZGVzKS5maWx0ZXIoZT0+e2xldCByPWUsbj1yLmNsYXNzTGlzdD9BcnJheS5mcm9tKHIuY2xhc3NMaXN0KTpbXTtyZXR1cm4hci5pZD8uZW5kc1dpdGgoXCItbGFiZWxWYWx1ZVwiKSYmIW4uc29tZShlPT50LmhhcyhlKSl9KS5tYXAoZT0+ZS50ZXh0Q29udGVudHx8XCJcIikuam9pbihcIlwiKTtyZXR1cm4oMCxhLm5vcm1hbGl6ZVRleHQpKHIpLnJlcGxhY2UoL1xccypcXCpcXHMqJC8sXCJcIikudHJpbSgpfWZ1bmN0aW9uIGVvKGUsdCxyKXtyZXR1cm4gZS5jbGFzc0xpc3QuY29udGFpbnMoXCJpc1JlcXVpcmVkXCIpfHx0Lmhhc0F0dHJpYnV0ZShcInJlcXVpcmVkXCIpfHxcInRydWVcIj09PXQuZ2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIil8fFwidHJ1ZVwiPT09dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlcXVpcmVkXCIpfHxcInRydWVcIj09PXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKXx8L1xcKi8udGVzdChyPy50ZXh0Q29udGVudHx8XCJcIil9ZnVuY3Rpb24gZWkoZSl7cmV0dXJuIGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiQXV0b0NvbXBsZXRlRmllbGRcIil8fGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiQXV0b2NvbXBsZXRlU2VsZWN0RmllbGRDaGlsZEh0bWxFbGVtZW50XCIpfWZ1bmN0aW9uIGVhKGUpe3JldHVybiBlaShlKT9bXTpBcnJheS5mcm9tKGUub3B0aW9ucykubWFwKGU9PigwLGEubm9ybWFsaXplVGV4dCkoZS50ZXh0Q29udGVudHx8ZS52YWx1ZSkpLmZpbHRlcihlPT5lJiYhL15zZWxlY3QgKGFuP3xhKSAvaS50ZXN0KGUpJiYhL15ub3QgcmVxdWlyZWQkL2kudGVzdChlKSl9ZnVuY3Rpb24gZWwoZSl7cmV0dXJuKDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vaW5wdXRbQHR5cGU9XCJyYWRpb1wiXScsZSl9ZnVuY3Rpb24gZXMoZSl7cmV0dXJuKDAsaS5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vaW5wdXRbQHR5cGU9XCJjaGVja2JveFwiXScsZSl9ZnVuY3Rpb24gZXUoZSl7bGV0IHQ9KDAsaS5nZXRGaXJzdE9yZGVyZWROb2RlU2FmZSkoYC4vYW5jZXN0b3I6OmZvcm1bMV0vL2xhYmVsW0Bmb3I9JHsoMCxpLmVzY2FwZVhQYXRoKShlLmlkKX1dWzFdYCxlKTtyZXR1cm4oMCxhLm5vcm1hbGl6ZVRleHQpKHQ/LnRleHRDb250ZW50fHxlLmdldEF0dHJpYnV0ZShcImRhdGEtb3B0aW9uLW5hbWVcIil8fGUudmFsdWUpfWZ1bmN0aW9uIGVjKGUpe3JldHVybiBlLm1hcChlPT4oe2xhYmVsOmUubGFiZWwsdHlwZTplLnR5cGUsb3B0aW9uczpcIm9wdGlvbnNcImluIGU/ZS5vcHRpb25zOnZvaWQgMH0pKX1hc3luYyBmdW5jdGlvbiBlZChlKXtsZXQgdD1ldChlKSxyPWVyKGUsdCksbj1lbih0KTtpZighcnx8IW4pcmV0dXJuIG51bGw7aWYociBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJlwicmFkaW9cIj09PXIudHlwZSl7bGV0IHI9ZWwoZSk7cmV0dXJuIHIubGVuZ3RoP3tsYWJlbDpuLHR5cGU6by5GSUVMRF9UWVBFLlJBRElPR1JPVVAscmVxdWlyZWQ6ci5zb21lKHI9PmVvKGUscix0KSksb3B0aW9uczpyLm1hcChldSkuZmlsdGVyKEJvb2xlYW4pLCRsYWJlbDp0fHxlLCRpbnB1dDpyWzBdLCRyYWRpb1BhcmVudDplLCRyYWRpb3M6cn06bnVsbH1pZihyIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCYmXCJjaGVja2JveFwiPT09ci50eXBlKXtsZXQgaT1lcyhlKSxhPWkubGVuZ3RoP2k6W3JdO3JldHVybntsYWJlbDpuLHR5cGU6by5GSUVMRF9UWVBFLkNIRUNLQk9YLHJlcXVpcmVkOmEuc29tZShyPT5lbyhlLHIsdCkpLG9wdGlvbnM6YS5tYXAoZXUpLmZpbHRlcihCb29sZWFuKSwkbGFiZWw6dHx8ZSwkaW5wdXQ6ciwkY2hlY2tib3hzOmF9fWlmKHIgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCl7bGV0IGk9ci5tdWx0aXBsZT9vLkZJRUxEX1RZUEUuTVVMVElfU0VMRUNUOm8uRklFTERfVFlQRS5TRUxFQ1Q7cmV0dXJue2xhYmVsOm4sdHlwZTppLHJlcXVpcmVkOmVvKGUscix0KSxvcHRpb25zOmVhKHIpLCRsYWJlbDp0fHxlLCRpbnB1dDpyfX1sZXQgaT17bGFiZWw6bix0eXBlOm8uRklFTERfVFlQRS5URVhULHJlcXVpcmVkOmVvKGUscix0KSwkbGFiZWw6dHx8ZSwkaW5wdXQ6cn07cmV0dXJuXCJ3aGF0IGlzIHlvdXIgZXhwZWN0ZWQgYW5udWFsIHNhbGFyeVwiPT09KDAsYS5ub3JtYWxpemVUZXh0KShuKS5yZXBsYWNlKC9bPzouXSskL2csXCJcIikudG9Mb3dlckNhc2UoKSYmKGkuZGVzY3JpcHRpb249XCJQbGVhc2UgcmV0dXJuIGEgc3BlY2lmaWMgbnVtYmVyIG9ubHkuXCIpLGl9YXN5bmMgZnVuY3Rpb24gZWYoZSl7bGV0IHQ9W107Zm9yKGxldCByIG9mIEooZSkpe2xldCBlPWF3YWl0IGVkKHIpO2UmJnQucHVzaChlKX1yZXR1cm4gdH1hc3luYyBmdW5jdGlvbiBlcCgpe2xldCBlPVtdO2ZvcihsZXQgdCBvZiBHKCkpe2xldCByPWF3YWl0IGVmKHQpO3IubGVuZ3RoJiZlLnB1c2goe2xhYmVsOlwiRWR1Y2F0aW9uXCIsdHlwZTpvLkZJRUxEX1RZUEUuRURVQ0FUSU9OLHJlcXVpcmVkOiEwLGNoaWxkcmVuOnIsb3B0aW9uczplYyhyKSwkaW5wdXQ6dH0pfXJldHVybiBlfWFzeW5jIGZ1bmN0aW9uIGVtKCl7bGV0IGU9W107Zm9yKGxldCB0IG9mIFYoKSl7bGV0IHI9YXdhaXQgZWYodCk7ci5sZW5ndGgmJmUucHVzaCh7bGFiZWw6XCJFbXBsb3ltZW50XCIsdHlwZTpvLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCxyZXF1aXJlZDpyLnNvbWUoZT0+ZS5yZXF1aXJlZCksY2hpbGRyZW46cixvcHRpb25zOmVjKHIpLCRpbnB1dDp0fSl9cmV0dXJuIGV9ZnVuY3Rpb24gZWgoZSl7bGV0IHQ9ZS4kaW5wdXQ7cmV0dXJuIGUudHlwZT09PW8uRklFTERfVFlQRS5URVhUJiZcInBhc3N3b3JkXCI9PT1TdHJpbmcodD8udHlwZXx8XCJcIikudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiBlZyhlKXtsZXQgdD1lLiRpbnB1dDtyZXR1cm4gdD8oMCxpLmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi9hbmNlc3Rvcjo6ZGl2W2NvbnRhaW5zKGNvbmNhdChcIiBcIiwgbm9ybWFsaXplLXNwYWNlKEBjbGFzcyksIFwiIFwiKSwgXCIgZmllbGRTcGVjIFwiKV1bMV0nLHQpOm51bGx9ZnVuY3Rpb24gZWIoZSl7aWYoZS50eXBlIT09by5GSUVMRF9UWVBFLkNIRUNLQk9YKXJldHVybiExO2xldCB0PSgwLGEubm9ybWFsaXplVGV4dCkoZS5sYWJlbCkudG9Mb3dlckNhc2UoKSxyPWUuJGlucHV0O3JldHVybiByPy5pZD09PVwiMTU3N1wifHxcImkgYWNjZXB0IGFuZCBhY2tub3dsZWRnZVwiPT09dHx8dC5zdGFydHNXaXRoKFwiaSBhY2NlcHQgYW5kIGFja25vd2xlZGdlXCIpfHxlZyhlKT8uaWQ9PT1cImZpZWxkU3BlY0NvbnRhaW5lcjE1NzdcIn1mdW5jdGlvbiBleShlKXtyZXR1cm4gZS5maWx0ZXIoZWIpfWZ1bmN0aW9uIGV2KGUpe3JldHVybiBlLmZpbHRlcihlPT4hZWgoZSkmJiFlYihlKSl9ZnVuY3Rpb24gZXcoZSl7cmV0dXJuIGUuY2hlY2tlZHx8XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtY2hlY2tlZFwiKX1hc3luYyBmdW5jdGlvbiBlUygpe2xldCBlPUIoKSx0PVtdO2lmKCFlKXJldHVybiB0O2ZvcihsZXQgciBvZiBxKGUpKXtsZXQgZT1hd2FpdCBlZChyKTtlJiZ0LnB1c2goZSl9cmV0dXJuIHQucHVzaCguLi5hd2FpdCBlcCgpKSx0LnB1c2goLi4uYXdhaXQgZW0oKSksdH1mdW5jdGlvbiBlRShlKXtpZihlLnR5cGU9PT1vLkZJRUxEX1RZUEUuVEVYVCl7bGV0IHQ9ZTtyZXR1cm4gdC4kaW5wdXQudmFsdWV8fFwiXCJ9aWYoZS50eXBlPT09by5GSUVMRF9UWVBFLlNFTEVDVHx8ZS50eXBlPT09by5GSUVMRF9UWVBFLk1VTFRJX1NFTEVDVCl7bGV0IHQ9ZSxyPXQuJGlucHV0LG49QXJyYXkuZnJvbShyLnNlbGVjdGVkT3B0aW9uc3x8W10pLm1hcChlPT4oMCxhLm5vcm1hbGl6ZVRleHQpKGUudGV4dENvbnRlbnR8fGUudmFsdWUpKS5maWx0ZXIoZT0+XCJzZWxlY3QgYW4gb3B0aW9uXCIhPT1lLnRvTG93ZXJDYXNlKCkpLmZpbHRlcihCb29sZWFuKSxvPSgwLGEubm9ybWFsaXplVGV4dCkoci52YWx1ZSk7cmV0dXJuIG4ubGVuZ3RoP24uam9pbihcIiwgXCIpOlwic2VsZWN0IGFuIG9wdGlvblwiPT09by50b0xvd2VyQ2FzZSgpP1wiXCI6b31pZihlLnR5cGU9PT1vLkZJRUxEX1RZUEUuQ0hFQ0tCT1gpe2xldCB0PWUscj0odC4kY2hlY2tib3hzfHxbXSkuZmlsdGVyKGU9PmUuY2hlY2tlZCkubWFwKGU9PmV1KGUpKS5maWx0ZXIoQm9vbGVhbik7cmV0dXJuIHIubGVuZ3RoPjA/ci5qb2luKFwiLCBcIik6dC4kaW5wdXQ/LmNoZWNrZWQ/XCJZZXNcIjpcIk5vXCJ9aWYoZS50eXBlPT09by5GSUVMRF9UWVBFLlJBRElPR1JPVVApe2xldCB0PWUscj10LiRyYWRpb3N8fFtdLG49ci5maW5kKGV3KTtyZXR1cm4gbj9ldShuKTpcIlwifXJldHVyblwiXCJ9ZnVuY3Rpb24gZXgoZSl7cmV0dXJuIGUubWFwKGU9PntsZXQgdD17fSxyPVwiY2hpbGRyZW5cImluIGU/ZS5jaGlsZHJlbjpbXTtmb3IobGV0IGUgb2Ygcnx8W10pdFtlLmxhYmVsXT1lRShlKTtyZXR1cm4gdH0pfWFzeW5jIGZ1bmN0aW9uIGVDKCl7bGV0IGU9e30sdD1ldihhd2FpdCBlUygpKTtmb3IobGV0IHIgb2YgdClyLnR5cGUhPT1vLkZJRUxEX1RZUEUuRURVQ0FUSU9OJiZyLnR5cGUhPT1vLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCYmKGVbci5sYWJlbF09ZUUocikpO3JldHVybiBlLmVkdWNhdGlvbj1leChhd2FpdCBlcCgpKSxlLmVtcGxveW1lbnQ9ZXgoYXdhaXQgZW0oKSksZX1sZXQgZUE9e2Zvcm06YyxyZWd1bGFyRmllbGRTcGVjczpiLGpvYlNwZWNpZmljRmllbGRTcGVjczp5LHJvd0ZpZWxkU3BlY3M6VCxmaWVsZENvbnRyb2w6aCxlZHVjYXRpb25Db250YWluZXI6eCxleHBlcmllbmNlQ29udGFpbmVyOkMsZWR1Y2F0aW9uUm93czpBLGV4cGVyaWVuY2VSb3dzOmssZWR1Y2F0aW9uQWRkQnV0dG9uOiQsZXhwZXJpZW5jZUFkZEJ1dHRvbjpOLGV4cGVyaWVuY2VSb3dGaWVsZENoZWNrczpPLHJlc3VtZUZpbGVJbnB1dDpELGFkZGl0aW9uYWxGaWxlSW5wdXQ6UCxhdHRhY2htZW50RmlsZUZpZWxkOl8sYXR0YWNobWVudEZpbGVJbnB1dDpMLHN1Ym1pdEJ1dHRvbjpNKCcvL2J1dHRvbltAbmFtZT1cInNhdmVcIiBhbmQgQHR5cGU9XCJzdWJtaXRcIiBhbmQgY29udGFpbnMoY29uY2F0KFwiIFwiLCBub3JtYWxpemUtc3BhY2UoQGNsYXNzKSwgXCIgXCIpLCBcIiBzYXZlQnV0dG9uIFwiKV0nKX1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6InJ1bGVzLjQzODliMzRmLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);