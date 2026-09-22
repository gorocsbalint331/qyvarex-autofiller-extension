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
})({"jliNH":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\pre-autofill-flow\\account-flow-state.js",
    "bundleId": "642b6560d1b981ff",
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
var j = z(require("f5c24ee96b9ac8b9"));
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

},{"f5c24ee96b9ac8b9":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"7Y8BU":[function(require,module,exports) {
/**
 * Parcel module id: 8WOx2
 * Resolved path: src/contents/pre-autofill-flow/account-flow-state.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~store/autofillResult -> hCUzf  =>  src/store/autofillResult.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "PRE_AUTOFILL_ACCOUNT_SETUP_MISSING_STEPS_KEY", ()=>i), n.export(r, "PRE_AUTOFILL_ACCOUNT_SUBMIT_ERROR_KEY", ()=>a), n.export(r, "WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_KEY", ()=>l), n.export(r, "WORKDAY_FORGOT_PASSWORD_SUBMIT_MESSAGE_EVENT", ()=>s), n.export(r, "PRE_AUTOFILL_ACCOUNT_SETUP_PROMPT_DELAY_MS", ()=>u), n.export(r, "PRE_AUTOFILL_ACCOUNT_SETUP_PROGRESS_TITLE", ()=>c), n.export(r, "getPreAutofillAccountSetupMissingSteps", ()=>d), n.export(r, "debugPreAutofillAccountSetup", ()=>p), n.export(r, "createPreAutofillFlowSessionStore", ()=>g), n.export(r, "appendCompletedPreAutofillStep", ()=>b), n.export(r, "buildPreAutofillStepProgress", ()=>v), n.export(r, "createPreAutofillStepProgressController", ()=>w), n.export(r, "createOneShotSessionStore", ()=>x), n.export(r, "PRE_AUTOFILL_ACCOUNT_STANDARD_READY_CHECK_INTERVAL_MS", ()=>C), n.export(r, "PRE_AUTOFILL_ACCOUNT_FLOW_FILLING_MODE", ()=>A), n.export(r, "PRE_AUTOFILL_ACCOUNT_FLOW_SESSION_KEY", ()=>k), n.export(r, "PRE_AUTOFILL_ACCOUNT_TRANSITION_SESSION_KEY", ()=>T), n.export(r, "PRE_AUTOFILL_ACCOUNT_PENDING_SUBMIT_SESSION_KEY", ()=>F), n.export(r, "PRE_AUTOFILL_ACCOUNT_FLOW_PROGRESS_TYPE", ()=>I), n.export(r, "PRE_AUTOFILL_ACCOUNT_CREDENTIALS_CHANGED_EVENT", ()=>j), n.export(r, "PRE_AUTOFILL_ACCOUNT_TRANSITION_CHANGED_EVENT", ()=>D), n.export(r, "PRE_AUTOFILL_ACCOUNT_PASSWORD_WAIT_TIMEOUT_MS", ()=>P), n.export(r, "PRE_AUTOFILL_ACCOUNT_TRANSITION_TTL_MS", ()=>_), n.export(r, "PRE_AUTOFILL_ACCOUNT_PENDING_SUBMIT_TTL_MS", ()=>L), n.export(r, "PRE_AUTOFILL_ACCOUNT_SUBMIT_REFRESH_DEBOUNCE_MS", ()=>R), n.export(r, "PRE_AUTOFILL_ACCOUNT_STEP_LABELS", ()=>O), n.export(r, "PRE_AUTOFILL_ACCOUNT_REGISTRATION_ENTRY_STEPS", ()=>M), n.export(r, "PRE_AUTOFILL_ACCOUNT_REGISTRATION_FORM_STEPS", ()=>N), n.export(r, "PRE_AUTOFILL_ACCOUNT_REGISTRATION_STEPS", ()=>$), n.export(r, "PRE_AUTOFILL_ACCOUNT_SIGN_IN_FORM_STEPS", ()=>B), n.export(r, "PRE_AUTOFILL_ACCOUNT_SIGN_IN_STEPS", ()=>q), n.export(r, "PRE_AUTOFILL_ACCOUNT_RESET_PASSWORD_STEPS", ()=>U), n.export(r, "PRE_AUTOFILL_ACCOUNT_FLOW_STATES", ()=>Y), n.export(r, "preAutofillAccountFlowSession", ()=>z), n.export(r, "preAutofillAccountTransitionSession", ()=>W), n.export(r, "preAutofillAccountPendingSubmitSession", ()=>G), n.export(r, "preAutofillAccountProgress", ()=>K), n.export(r, "buildPreAutofillAccountProgress", ()=>X), n.export(r, "getPreAutofillAccountFlowCtaText", ()=>J), n.export(r, "getPreAutofillAccountProgressTitle", ()=>Z);
var o = e("~store/autofillResult");
let i = "signupSetupMissingFields", a = "signupSubmitError", l = "workdayForgotPasswordSubmitMessage", s = "JobrightWorkdayForgotPasswordSubmitMessage", u = 300, c = "Paused: Action Needed!";
function d(e1) {
    let t = e1?.[i];
    return Array.isArray(t) ? t.filter((e1)=>"string" == typeof e1) : [];
}
function f() {
    try {
        return window.localStorage?.getItem("JOBRIGHT_DEBUG_ACCOUNT_SETUP") === "1" || window.sessionStorage?.getItem("JOBRIGHT_DEBUG_ACCOUNT_SETUP") === "1";
    } catch  {
        return !1;
    }
}
function p(e1, t, r1) {
    if (!f()) return;
    let n = "ui" === e1 ? "[workday-account-setup-ui]" : "[workday-account-setup]";
    console.debug(n, t, {
        ...r1,
        timestamp: Date.now()
    });
}
function m() {
    try {
        return window.sessionStorage;
    } catch  {
        return null;
    }
}
function h(e1, t) {
    if (!e1 || "object" != typeof e1) return !1;
    let r1 = e1;
    return t.includes(r1.pageKind) && Array.isArray(r1.completedSteps) && r1.completedSteps.every((e1)=>"string" == typeof e1) && ("string" == typeof r1.currentStep || null === r1.currentStep) && ("running" === r1.status || "completed" === r1.status) && "number" == typeof r1.updatedAt;
}
function g({ storageKey: e1, pageKinds: t }) {
    function r1() {
        let r1 = m();
        if (!r1) return null;
        try {
            let n = r1.getItem(e1);
            if (!n) return null;
            let o = JSON.parse(n);
            return h(o, t) ? o : null;
        } catch  {
            return null;
        }
    }
    function n() {
        return r1()?.status === "running";
    }
    return {
        get: r1,
        save: function(t) {
            let r1 = m();
            r1 && r1.setItem(e1, JSON.stringify({
                ...t,
                updatedAt: Date.now()
            }));
        },
        clear: function() {
            let t = m();
            t && t.removeItem(e1);
        },
        hasRunning: n
    };
}
function b(e1, t) {
    return e1.includes(t) ? e1 : [
        ...e1,
        t
    ];
}
function y(e1) {
    return "string" == typeof e1 ? {
        label: e1
    } : e1;
}
function v({ steps: e1, completedSteps: t = [], missingSteps: r1 = [], currentStep: n = null, userAutoFillResponse: o = {}, type: i = "PRE_AUTOFILL_FLOW_STEP" }) {
    let a = e1.map(y), l = a.map((e1)=>e1.label), s = new Set(l), u = t.filter((e1)=>s.has(e1)), c = r1.filter((e1)=>s.has(e1));
    return {
        filledFields: u,
        missingFields: c,
        fieldRequiredStatus: a.map((e1)=>({
                label: e1.label,
                required: !0,
                options: [],
                type: i,
                metadata: e1.metadata
            })),
        userAutoFillResponse: o,
        currentField: n && s.has(n) ? n : null
    };
}
function w({ fillingMode: e1, getSteps: t, progressType: r1, getTitle: n, sessionStore: i }) {
    function a({ pageKind: e1, steps: n, completedSteps: o = [], missingSteps: i = [], currentStep: a = null, userAutoFillResponse: l = {} }) {
        return v({
            steps: n ?? t(e1),
            completedSteps: o,
            missingSteps: i,
            currentStep: a,
            userAutoFillResponse: l,
            type: r1
        });
    }
    function l({ pageKind: t, steps: r1, completedSteps: l, missingSteps: s = [], currentStep: u, userAutoFillResponse: c = {}, status: d = "running", persistSession: f = !0 }) {
        let p = (0, o.useAutofillResultStore).getState();
        p.setFillingMode(e1), p.setProgressTitle(n(t, d)), p.setAutoFillResult(a({
            pageKind: t,
            steps: r1,
            completedSteps: l,
            missingSteps: s,
            currentStep: u,
            userAutoFillResponse: c
        })), f && i.save({
            pageKind: t,
            completedSteps: l,
            currentStep: u,
            status: d
        });
    }
    return {
        getSteps: t,
        getTitle: n,
        build: a,
        set: l
    };
}
function S() {
    try {
        return window.sessionStorage;
    } catch  {
        return null;
    }
}
_c = S;
function E({ value: e1, validatePayload: t }) {
    if (!e1 || "object" != typeof e1) return !1;
    let r1 = e1;
    return "number" == typeof r1.createdAt && t(r1.payload);
}
_c1 = E;
function x({ storageKey: e1, ttlMs: t, validatePayload: r1 }) {
    function n() {
        let t = S();
        t && t.removeItem(e1);
    }
    function o() {
        let o = S();
        if (!o) return null;
        try {
            let i = o.getItem(e1);
            if (!i) return null;
            let a = JSON.parse(i);
            if (!E({
                value: a,
                validatePayload: r1
            })) return n(), null;
            let l = Date.now() - a.createdAt;
            if (l > t) return console.debug("[pre-autofill-session]", "expired", {
                storageKey: e1,
                ageMs: l,
                ttlMs: t,
                createdAt: a.createdAt
            }), n(), null;
            return a;
        } catch  {
            return n(), null;
        }
    }
    function i() {
        let e1 = o();
        return e1 && n(), e1;
    }
    return {
        save: function(t) {
            let r1 = S();
            r1 && r1.setItem(e1, JSON.stringify({
                payload: t,
                createdAt: Date.now()
            }));
        },
        peek: o,
        consume: i,
        clear: n
    };
}
let C = 250, A = "signup_autofill_flow", k = "JOBRIGHT_SIGNUP_AUTOFILL_FLOW_SESSION", T = "JOBRIGHT_SIGNUP_AUTOFILL_FLOW_PENDING_SUBMIT", F = T, I = "SIGNUP_AUTOFILL_FLOW_STEP", j = "JobrightPreAutofillAccountCredentialsChanged", D = "JobrightPreAutofillAccountTransitionChanged", P = 3e5, _ = 1e4, L = _, R = 1e3, O = {
    clickApply: "Click Apply",
    clickContinueApplication: "Click Continue Application",
    selectedApplyManually: "Choose Apply Manually",
    emailAddress: "Enter Email Address",
    password: "Enter Password",
    signInWithEmail: "Sign in with email",
    verifyNewPassword: "Verify New Password",
    agreePrivacyNotice: "Agree to Privacy Notice",
    clickCreateAccount: "Click Create Account",
    clickSignIn: "Click Sign In",
    clickResetPassword: "Click Reset Password"
}, M = [
    O.clickApply,
    O.selectedApplyManually
], N = [
    O.emailAddress,
    O.password,
    O.verifyNewPassword
], $ = [
    ...M,
    ...N
], B = [
    O.emailAddress,
    O.password
], q = [
    ...B
], U = [
    O.password,
    O.verifyNewPassword
], H = {
    registration: {
        steps: $,
        progressTitle: "Creating account",
        ctaText: "Account Creation & Autofill"
    },
    sign_in: {
        steps: q,
        progressTitle: "Signing in",
        ctaText: "Sign In & Autofill"
    },
    forgot_password: {
        steps: [
            O.emailAddress
        ],
        progressTitle: "Autofilling",
        ctaText: "Autofill"
    },
    reset_password: {
        steps: U,
        progressTitle: "Autofilling",
        ctaText: "Autofill"
    }
}, Y = Object.keys(H), z = g({
    storageKey: k,
    pageKinds: Y
});
function V(e1) {
    if (!e1 || "object" != typeof e1) return !1;
    let t = e1;
    return "string" == typeof t.flowId && Y.includes(t.intent) && "string" == typeof t.sourceUrl && (void 0 === t.targetUrl || "string" == typeof t.targetUrl) && "string" == typeof t.sourcePageKind && ("string" == typeof t.transitionStep || "string" == typeof t.submitStep) && (void 0 === t.transitionStep || "string" == typeof t.transitionStep) && (void 0 === t.submitStep || "string" == typeof t.submitStep) && (void 0 === t.completedSteps || Array.isArray(t.completedSteps) && t.completedSteps.every((e1)=>"string" == typeof e1)) && (void 0 === t.currentStep || "string" == typeof t.currentStep || null === t.currentStep);
}
_c2 = V;
let W = x({
    storageKey: T,
    ttlMs: _,
    validatePayload: V
}), G = W, K = w({
    fillingMode: A,
    progressType: I,
    getSteps: Q,
    getTitle: Z,
    sessionStore: z
});
function X(e1) {
    return K.build(e1);
}
_c3 = X;
function J(e1) {
    return H[e1].ctaText;
}
_c4 = J;
function Q(e1) {
    return H[e1].steps;
}
_c5 = Q;
function Z(e1, t = "running") {
    switch(t){
        case "running":
            return H[e1].progressTitle;
        case "completed":
            return "Completed";
    }
}
_c6 = Z;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "V");
$RefreshReg$(_c3, "X");
$RefreshReg$(_c4, "J");
$RefreshReg$(_c5, "Q");
$RefreshReg$(_c6, "Z");

},{}]},["jliNH","7Y8BU"], "7Y8BU", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFnQixLQUFLO1FBQUM7UUFBRTtLQUFFLEdBQUUsQ0FBQyxLQUFHLEVBQUUsT0FBSyxFQUFFLElBQUksaUJBQWlCLFNBQVEsQ0FBQSxFQUFFLGVBQWUsS0FBSztRQUFDO1FBQUU7S0FBRSxHQUFFLENBQUMsQ0FBQSxJQUFHLENBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBQyxTQUFRLENBQUMsRUFBQyxHQUFDO0lBQUUsT0FBTyxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsSUFBRyxFQUFFLFNBQU8sUUFBTSxPQUFPLFdBQVMsS0FBSSxPQUFPLElBQUksUUFBUSxDQUFDLEdBQUU7UUFBSyxJQUFJLElBQUUsU0FBUyxjQUFjO1FBQVUsRUFBRSxNQUFJLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLEtBQUssTUFBTSxDQUFDLEVBQUMsRUFBRSxpQkFBZSxjQUFhLENBQUEsRUFBRSxPQUFLLFFBQU8sR0FBRyxFQUFFLGlCQUFpQixRQUFPLElBQUksRUFBRSxLQUFJLEVBQUUsaUJBQWlCLFNBQVEsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLDBCQUEwQixFQUFFLEVBQUUsR0FBRyxDQUFDLEtBQUksU0FBUyxNQUFNLFlBQVk7SUFBRTtBQUFFO0FBQUMsZUFBZSxFQUFFLENBQUM7SUFBRSxPQUFPLGtCQUFnQixPQUFPLE9BQU8sT0FBTSxFQUFFLFFBQVEsQ0FBQTtRQUFJLEVBQUUsTUFBSSxFQUFFLFFBQVEsT0FBTywrQkFBNkIsbUJBQW1CLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLEtBQUssTUFBTSxDQUFDO0lBQUU7SUFBRyxJQUFJLElBQUUsTUFBTSxRQUFRLElBQUksRUFBRSxJQUFJO0lBQUssSUFBRztRQUFDLEVBQUUsUUFBUSxTQUFTLENBQUM7WUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1FBQUU7SUFBRSxTQUFRO1FBQUMsT0FBTyxPQUFPLGlCQUFnQixLQUFHLEVBQUUsUUFBUSxDQUFBO1lBQUksS0FBRyxTQUFTLE1BQU0sWUFBWTtRQUFFO0lBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUU7SUFBWSxFQUFFLFNBQU87UUFBVyxFQUFFLGVBQWEsUUFBTSxFQUFFLFdBQVcsWUFBWTtJQUFFLEdBQUUsRUFBRSxhQUFhLFFBQU8sRUFBRSxhQUFhLFFBQVEsTUFBTSxJQUFJLENBQUMsRUFBRSxHQUFDLE1BQUksS0FBSyxRQUFPLEVBQUUsV0FBVyxhQUFhLEdBQUUsRUFBRTtBQUFZO0FBQUMsSUFBSSxJQUFFO0FBQUssU0FBUztJQUFLLEtBQUksQ0FBQSxJQUFFLFdBQVc7UUFBVyxJQUFJLElBQUUsU0FBUyxpQkFBaUI7UUFBMEIsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJO1lBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxTQUFRLElBQUUsS0FBSSxJQUFFLE1BQUksY0FBWSxJQUFJLE9BQU8sbURBQWlELEtBQUssS0FBSyxLQUFHLEVBQUUsUUFBUSxJQUFFLE1BQUk7WUFBSyxnQkFBZ0IsS0FBSyxNQUFJLEVBQUUsUUFBUSxTQUFTLFlBQVUsS0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUFDO1FBQUMsSUFBRTtJQUFJLEdBQUUsR0FBRTtBQUFFO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLEdBQUU7UUFBQyxJQUFHLEVBQUUsU0FBTyxPQUFNO2FBQVUsSUFBRyxFQUFFLFNBQU8sTUFBSztZQUFDLElBQUksSUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFLGNBQWM7WUFBQyxJQUFHLEdBQUU7Z0JBQUMsSUFBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUM7b0JBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO29CQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBRyxDQUFDLENBQUMsRUFBRSxFQUFDO3dCQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRTt3QkFBQyxFQUFFLE9BQU8sT0FBTyxNQUFLLEdBQUcsV0FBUyxLQUFHLEVBQUUsT0FBTyxPQUFPLE1BQUs7b0JBQUU7Z0JBQUM7Z0JBQUMsSUFBSSxJQUFFLE9BQU8sZUFBZSxDQUFDLEVBQUUsR0FBRztnQkFBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUM7b0JBQUM7b0JBQUU7aUJBQUU7WUFBQSxPQUFNLEVBQUUsVUFBUSxFQUFFLEVBQUUsUUFBTztRQUFFO0lBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFO0lBQVEsSUFBRztRQUFFLElBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBQztZQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxJQUFFLEVBQUU7WUFBQyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsT0FBTyxPQUFPLE1BQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFTLEtBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsUUFBUSxDQUFBO2dCQUFJLEVBQUUsT0FBTyxPQUFPLE1BQUs7WUFBRTtRQUFFLE9BQU0sRUFBRSxVQUFRLEVBQUUsRUFBRSxRQUFPOztBQUFFO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7SUFBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFFLEtBQUcsRUFBRSxPQUFNLENBQUEsRUFBRSxJQUFJLE9BQUssRUFBRSxPQUFPLENBQUMsRUFBRSxBQUFELEdBQUcsS0FBRyxFQUFFLE9BQUssRUFBRSxJQUFJLGtCQUFrQixVQUFRLEVBQUUsSUFBSSxrQkFBa0IsUUFBUSxTQUFTLENBQUM7UUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7SUFBQyxJQUFHLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsRUFBRTtJQUFHLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsSUFBRyxLQUFHLEVBQUUsT0FBSyxFQUFFLElBQUksaUJBQWlCLFFBQU87UUFBQyxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSztRQUFHLEVBQUUsSUFBSSxpQkFBaUIsUUFBUSxTQUFTLENBQUM7WUFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO1lBQUcsS0FBRyxFQUFFLFVBQVMsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUUsRUFBRTtnQkFBSSxFQUFFLEdBQUU7WUFBRSxJQUFHLEVBQUUsZUFBZSxLQUFLLE1BQU0sRUFBRSxnQkFBZSxFQUFDO1FBQUU7SUFBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLElBQUUsR0FBRztJQUFFLElBQUksSUFBRTtJQUFJLE9BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBUSxTQUFTLGFBQVcsWUFBVSxDQUFDLDhCQUE4QixLQUFLLEtBQUcsUUFBTSxLQUFLLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUFBO0FBQUMsU0FBUyxHQUFHLENBQUM7SUFBRSxPQUFPLEVBQUUsV0FBUyxZQUFVLEVBQUUsOEJBQTRCLEVBQUU7QUFBUTtBQUFDLFNBQVMsRUFBRSxDQUFDO0lBQUUsSUFBRyxPQUFPLFdBQVcsWUFBVSxLQUFJO0lBQU8sSUFBSSxJQUFFLElBQUksVUFBVTtJQUFNLE9BQU8sRUFBRSxpQkFBaUIsV0FBVSxlQUFlLENBQUM7UUFBRSxJQUFJLElBQUUsS0FBSyxNQUFNLEVBQUU7UUFBTSxJQUFHLEVBQUUsU0FBTyxZQUFVLE1BQU0sRUFBRSxFQUFFLFNBQVEsRUFBRSxTQUFPLFNBQVEsS0FBSSxJQUFJLEtBQUssRUFBRSxZQUFZLEtBQUs7WUFBQyxJQUFJLElBQUUsRUFBRSxhQUFXLEVBQUU7WUFBTSxFQUFFLDhCQUE0QixFQUFFLFVBQVEsQ0FBQztBQUNuNEwsQ0FBQyxHQUFDLElBQUUsQ0FBQzs7QUFFTCxDQUFDLEdBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNoQixDQUFDO1FBQUU7SUFBQyxJQUFHLEVBQUUsaUJBQWlCLFNBQVEsS0FBSSxFQUFFLGlCQUFpQixRQUFPO1FBQUssRUFBRSxDQUFDLHFEQUFxRCxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRyxFQUFFLGlCQUFpQixTQUFRO1FBQUssRUFBRSxDQUFDLG9FQUFvRSxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRztBQUFDO0FBQUMsSUFBSSxJQUFFLEVBQUUsUUFBUTtBQUEwQixlQUFlO0lBQUksRUFBRSxRQUFRLHFCQUFxQixTQUFRLE9BQU8sZUFBYSxZQUFXLEdBQUUsT0FBTyxlQUFhO1FBQVcsT0FBTyxTQUFTLENBQUM7WUFBRSxPQUFPO1FBQUM7SUFBQztBQUFDO0FBQUMsSUFBSSxLQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFDLEdBQUUsSUFBRSxPQUFPLE9BQU87QUFBTyxJQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsaUJBQWdCO0lBQUMsSUFBRztRQUFDLElBQUUsR0FBRyxRQUFRLFFBQVE7WUFBQyxNQUFLO1FBQUUsSUFBRyxFQUFFLGFBQWEsWUFBWTtZQUFLO1FBQUcsSUFBRyxFQUFFLFdBQVMsRUFBRSxVQUFVLFlBQVk7WUFBSztRQUFHO0lBQUUsRUFBQyxPQUFNLEdBQUU7UUFBQyxFQUFFO0lBQUU7SUFBQyxFQUFFLE9BQU07UUFBSSxJQUFHLEVBQUUsaUNBQWdDLEVBQUUsU0FBUTtZQUFDO1lBQUksSUFBSSxJQUFFLEVBQUUsT0FBTyxDQUFBLElBQUcsRUFBRSxZQUFVLEVBQUU7WUFBUyxJQUFHLEVBQUUsS0FBSyxDQUFBLElBQUcsRUFBRSxTQUFPLFNBQU8sRUFBRSxTQUFPLFFBQU0sRUFBRSxPQUFPLE9BQU8sTUFBSyxFQUFFLElBQUcsRUFBRSxnQkFBZSxJQUFHO2dCQUFDLE1BQU0sRUFBRTtnQkFBRyxJQUFJLElBQUUsQ0FBQztnQkFBRSxLQUFJLElBQUcsQ0FBQyxHQUFFLEVBQUUsSUFBRyxFQUFFLGdCQUFnQixDQUFDLENBQUMsRUFBRSxJQUFHLENBQUEsRUFBRSxHQUFFLElBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUE7Z0JBQUcsSUFBSSxJQUFFLENBQUM7Z0JBQUUsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsZUFBZSxRQUFPLElBQUk7b0JBQUMsSUFBRyxDQUFDLEdBQUUsRUFBRSxHQUFDLEVBQUUsY0FBYyxDQUFDLEVBQUU7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBRyxDQUFBLEVBQUUsR0FBRSxJQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFBO2dCQUFFO1lBQUMsRUFBQyxPQUFNLEdBQUU7Z0JBQUMsRUFBRSxZQUFVLFVBQVMsQ0FBQSxRQUFRLE1BQU0sSUFBRyxNQUFNLEtBQUssVUFBVSxHQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7WUFBRTtRQUFDLE9BQUs7WUFBQyxJQUFJLElBQUUsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFlBQVUsRUFBRSxTQUFTLEtBQUssQ0FBQSxJQUFHLEVBQUUsT0FBTyxRQUFPLEVBQUU7WUFBSyxFQUFFLGtCQUFpQjtnQkFBQyxlQUFjO1lBQUMsSUFBRyxLQUFHLEVBQUUsWUFBWTtnQkFBQyx5QkFBd0IsQ0FBQztZQUFDO1FBQUU7SUFBQztBQUFFO0FBQUMsRUFBRSxXQUFVLENBQUEsRUFBRSw0QkFBMkIsR0FBRTs7O0FDSjMwQyxJQUFJLEtBQUcsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxLQUFHLE9BQU87QUFBeUIsSUFBSSxLQUFHLE9BQU87QUFBb0IsSUFBSSxLQUFHLE9BQU8sZ0JBQWUsS0FBRyxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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RSxjQUFhLEtBQU8sQ0FBQSxLQUFLLE1BQU0sRUFDbEYsY0FBYyxZQUFZLE9BQU8sRUFBRSxVQUFTLEtBQU8sQ0FBQSxLQUFLLE1BQU0sRUFBRSxrQkFBa0IsTUFDbEYsUUFBUSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsTUFBTSxDQUFBLEtBQUssWUFBWSxPQUFPLEdBQUMsS0FDOUUsQ0FBQSxLQUFLLE1BQU0sRUFBRSxlQUFlLFlBQVksT0FBTyxFQUFFLGVBQWUsU0FBUyxFQUFFLFdBQVU7QUFDM0Y7TUFWUztBQVdULElBQUksSUFBSSxFQUFFO0lBQ04sWUFBWTtJQUNaLE9BQU87SUFDUCxpQkFBaUI7QUFDbkIsSUFDQSxJQUFJLEdBQ0osSUFBSSxFQUFFO0lBQ0osYUFBYTtJQUNiLGNBQWM7SUFDZCxVQUFVO0lBQ1YsVUFBVTtJQUNWLGNBQWM7QUFDaEI7QUFFRixTQUFTLEVBQUUsRUFBQztJQUNWLE9BQU8sRUFBRSxNQUFNO0FBQ2pCO01BRlM7QUFJVCxTQUFTLEVBQUUsRUFBQztJQUNWLE9BQU8sQ0FBQyxDQUFDLEdBQUUsQ0FBQztBQUNkO01BRlM7QUFJVCxTQUFTLEVBQUUsRUFBQztJQUNWLE9BQU8sQ0FBQyxDQUFDLEdBQUUsQ0FBQztBQUNkO01BRlM7QUFJVCxTQUFTLEVBQUUsRUFBQyxFQUFFLElBQUksU0FBUztJQUN6QixPQUFRO1FBQ04sS0FBSztZQUNILE9BQU8sQ0FBQyxDQUFDLEdBQUUsQ0FBQztRQUNkLEtBQUs7WUFDSCxPQUFPO0lBQ1g7QUFDRjtNQVBTIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1jYjc0ZGZhODc2NjdkZGM1LmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL3ByZS1hdXRvZmlsbC1mbG93L2FjY291bnQtZmxvdy1zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxwcmUtYXV0b2ZpbGwtZmxvd1xcXFxhY2NvdW50LWZsb3ctc3RhdGUuanNcIixcImJ1bmRsZUlkXCI6XCI2NDJiNjU2MGQxYjk4MWZmXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogOFdPeDJcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3ByZS1hdXRvZmlsbC1mbG93L2FjY291bnQtZmxvdy1zdGF0ZS5qc1xuICogRGVwZW5kZW5jaWVzOlxyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfnN0b3JlL2F1dG9maWxsUmVzdWx0IC0+IGhDVXpmICA9PiAgc3JjL3N0b3JlL2F1dG9maWxsUmVzdWx0LmpzXHJcbiAqL1xyXG5cclxudmFyIG4gPSBlKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtcclxubi5kZWZpbmVJbnRlcm9wRmxhZyhyKSwgbi5leHBvcnQociwgXCJQUkVfQVVUT0ZJTExfQUNDT1VOVF9TRVRVUF9NSVNTSU5HX1NURVBTX0tFWVwiLCAoKSA9PiBpKSwgblxyXG4gIC5leHBvcnQociwgXCJQUkVfQVVUT0ZJTExfQUNDT1VOVF9TVUJNSVRfRVJST1JfS0VZXCIsICgpID0+IGEpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJXT1JLREFZX0ZPUkdPVF9QQVNTV09SRF9TVUJNSVRfTUVTU0FHRV9LRVlcIiwgKCkgPT4gbCksIG4uZXhwb3J0KHIsXHJcbiAgICBcIldPUktEQVlfRk9SR09UX1BBU1NXT1JEX1NVQk1JVF9NRVNTQUdFX0VWRU5UXCIsICgpID0+IHMpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJQUkVfQVVUT0ZJTExfQUNDT1VOVF9TRVRVUF9QUk9NUFRfREVMQVlfTVNcIiwgKCkgPT4gdSksIG4uZXhwb3J0KHIsXHJcbiAgICBcIlBSRV9BVVRPRklMTF9BQ0NPVU5UX1NFVFVQX1BST0dSRVNTX1RJVExFXCIsICgpID0+IGMpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJnZXRQcmVBdXRvZmlsbEFjY291bnRTZXR1cE1pc3NpbmdTdGVwc1wiLCAoKSA9PiBkKSwgbi5leHBvcnQociwgXCJkZWJ1Z1ByZUF1dG9maWxsQWNjb3VudFNldHVwXCIsXHJcbiAgICAoKSA9PiBwKSwgbi5leHBvcnQociwgXCJjcmVhdGVQcmVBdXRvZmlsbEZsb3dTZXNzaW9uU3RvcmVcIiwgKCkgPT4gZyksIG4uZXhwb3J0KHIsXHJcbiAgICBcImFwcGVuZENvbXBsZXRlZFByZUF1dG9maWxsU3RlcFwiLCAoKSA9PiBiKSwgbi5leHBvcnQociwgXCJidWlsZFByZUF1dG9maWxsU3RlcFByb2dyZXNzXCIsICgpID0+XHJcbiAgdiksIG4uZXhwb3J0KHIsIFwiY3JlYXRlUHJlQXV0b2ZpbGxTdGVwUHJvZ3Jlc3NDb250cm9sbGVyXCIsICgpID0+IHcpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJjcmVhdGVPbmVTaG90U2Vzc2lvblN0b3JlXCIsICgpID0+IHgpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJQUkVfQVVUT0ZJTExfQUNDT1VOVF9TVEFOREFSRF9SRUFEWV9DSEVDS19JTlRFUlZBTF9NU1wiLCAoKSA9PiBDKSwgbi5leHBvcnQocixcclxuICAgIFwiUFJFX0FVVE9GSUxMX0FDQ09VTlRfRkxPV19GSUxMSU5HX01PREVcIiwgKCkgPT4gQSksIG4uZXhwb3J0KHIsXHJcbiAgICBcIlBSRV9BVVRPRklMTF9BQ0NPVU5UX0ZMT1dfU0VTU0lPTl9LRVlcIiwgKCkgPT4gayksIG4uZXhwb3J0KHIsXHJcbiAgICBcIlBSRV9BVVRPRklMTF9BQ0NPVU5UX1RSQU5TSVRJT05fU0VTU0lPTl9LRVlcIiwgKCkgPT4gVCksIG4uZXhwb3J0KHIsXHJcbiAgICBcIlBSRV9BVVRPRklMTF9BQ0NPVU5UX1BFTkRJTkdfU1VCTUlUX1NFU1NJT05fS0VZXCIsICgpID0+IEYpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJQUkVfQVVUT0ZJTExfQUNDT1VOVF9GTE9XX1BST0dSRVNTX1RZUEVcIiwgKCkgPT4gSSksIG4uZXhwb3J0KHIsXHJcbiAgICBcIlBSRV9BVVRPRklMTF9BQ0NPVU5UX0NSRURFTlRJQUxTX0NIQU5HRURfRVZFTlRcIiwgKCkgPT4gaiksIG4uZXhwb3J0KHIsXHJcbiAgICBcIlBSRV9BVVRPRklMTF9BQ0NPVU5UX1RSQU5TSVRJT05fQ0hBTkdFRF9FVkVOVFwiLCAoKSA9PiBEKSwgbi5leHBvcnQocixcclxuICAgIFwiUFJFX0FVVE9GSUxMX0FDQ09VTlRfUEFTU1dPUkRfV0FJVF9USU1FT1VUX01TXCIsICgpID0+IFApLCBuLmV4cG9ydChyLFxyXG4gICAgXCJQUkVfQVVUT0ZJTExfQUNDT1VOVF9UUkFOU0lUSU9OX1RUTF9NU1wiLCAoKSA9PiBfKSwgbi5leHBvcnQocixcclxuICAgIFwiUFJFX0FVVE9GSUxMX0FDQ09VTlRfUEVORElOR19TVUJNSVRfVFRMX01TXCIsICgpID0+IEwpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJQUkVfQVVUT0ZJTExfQUNDT1VOVF9TVUJNSVRfUkVGUkVTSF9ERUJPVU5DRV9NU1wiLCAoKSA9PiBSKSwgbi5leHBvcnQocixcclxuICAgIFwiUFJFX0FVVE9GSUxMX0FDQ09VTlRfU1RFUF9MQUJFTFNcIiwgKCkgPT4gTyksIG4uZXhwb3J0KHIsXHJcbiAgICBcIlBSRV9BVVRPRklMTF9BQ0NPVU5UX1JFR0lTVFJBVElPTl9FTlRSWV9TVEVQU1wiLCAoKSA9PiBNKSwgbi5leHBvcnQocixcclxuICAgIFwiUFJFX0FVVE9GSUxMX0FDQ09VTlRfUkVHSVNUUkFUSU9OX0ZPUk1fU1RFUFNcIiwgKCkgPT4gTiksIG4uZXhwb3J0KHIsXHJcbiAgICBcIlBSRV9BVVRPRklMTF9BQ0NPVU5UX1JFR0lTVFJBVElPTl9TVEVQU1wiLCAoKSA9PiAkKSwgbi5leHBvcnQocixcclxuICAgIFwiUFJFX0FVVE9GSUxMX0FDQ09VTlRfU0lHTl9JTl9GT1JNX1NURVBTXCIsICgpID0+IEIpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJQUkVfQVVUT0ZJTExfQUNDT1VOVF9TSUdOX0lOX1NURVBTXCIsICgpID0+IHEpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJQUkVfQVVUT0ZJTExfQUNDT1VOVF9SRVNFVF9QQVNTV09SRF9TVEVQU1wiLCAoKSA9PiBVKSwgbi5leHBvcnQocixcclxuICAgIFwiUFJFX0FVVE9GSUxMX0FDQ09VTlRfRkxPV19TVEFURVNcIiwgKCkgPT4gWSksIG4uZXhwb3J0KHIsIFwicHJlQXV0b2ZpbGxBY2NvdW50Rmxvd1Nlc3Npb25cIiwgKCkgPT5cclxuICAgIHopLCBuLmV4cG9ydChyLCBcInByZUF1dG9maWxsQWNjb3VudFRyYW5zaXRpb25TZXNzaW9uXCIsICgpID0+IFcpLCBuLmV4cG9ydChyLFxyXG4gICAgXCJwcmVBdXRvZmlsbEFjY291bnRQZW5kaW5nU3VibWl0U2Vzc2lvblwiLCAoKSA9PiBHKSwgbi5leHBvcnQociwgXCJwcmVBdXRvZmlsbEFjY291bnRQcm9ncmVzc1wiLFxyXG4gICgpID0+IEspLCBuLmV4cG9ydChyLCBcImJ1aWxkUHJlQXV0b2ZpbGxBY2NvdW50UHJvZ3Jlc3NcIiwgKCkgPT4gWCksIG4uZXhwb3J0KHIsXHJcbiAgICBcImdldFByZUF1dG9maWxsQWNjb3VudEZsb3dDdGFUZXh0XCIsICgpID0+IEopLCBuLmV4cG9ydChyLCBcImdldFByZUF1dG9maWxsQWNjb3VudFByb2dyZXNzVGl0bGVcIixcclxuICAgICgpID0+IFopO1xyXG52YXIgbyA9IGUoXCJ+c3RvcmUvYXV0b2ZpbGxSZXN1bHRcIik7XHJcbmxldCBpID0gXCJzaWdudXBTZXR1cE1pc3NpbmdGaWVsZHNcIixcclxuICBhID0gXCJzaWdudXBTdWJtaXRFcnJvclwiLFxyXG4gIGwgPSBcIndvcmtkYXlGb3Jnb3RQYXNzd29yZFN1Ym1pdE1lc3NhZ2VcIixcclxuICBzID0gXCJKb2JyaWdodFdvcmtkYXlGb3Jnb3RQYXNzd29yZFN1Ym1pdE1lc3NhZ2VcIixcclxuICB1ID0gMzAwLFxyXG4gIGMgPSBcIlBhdXNlZDogQWN0aW9uIE5lZWRlZCFcIjtcclxuXHJcbmZ1bmN0aW9uIGQoZSkge1xyXG4gIGxldCB0ID0gZT8uW2ldO1xyXG4gIHJldHVybiBBcnJheS5pc0FycmF5KHQpID8gdC5maWx0ZXIoZSA9PiBcInN0cmluZ1wiID09IHR5cGVvZiBlKSA6IFtdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGYoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlPy5nZXRJdGVtKFwiSk9CUklHSFRfREVCVUdfQUNDT1VOVF9TRVRVUFwiKSA9PT0gXCIxXCIgfHwgd2luZG93XHJcbiAgICAgIC5zZXNzaW9uU3RvcmFnZT8uZ2V0SXRlbShcIkpPQlJJR0hUX0RFQlVHX0FDQ09VTlRfU0VUVVBcIikgPT09IFwiMVwiXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gITFcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHAoZSwgdCwgcikge1xyXG4gIGlmICghZigpKSByZXR1cm47XHJcbiAgbGV0IG4gPSBcInVpXCIgPT09IGUgPyBcIlt3b3JrZGF5LWFjY291bnQtc2V0dXAtdWldXCIgOiBcIlt3b3JrZGF5LWFjY291bnQtc2V0dXBdXCI7XHJcbiAgY29uc29sZS5kZWJ1ZyhuLCB0LCB7XHJcbiAgICAuLi5yLFxyXG4gICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gbSgpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5zZXNzaW9uU3RvcmFnZVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGgoZSwgdCkge1xyXG4gIGlmICghZSB8fCBcIm9iamVjdFwiICE9IHR5cGVvZiBlKSByZXR1cm4gITE7XHJcbiAgbGV0IHIgPSBlO1xyXG4gIHJldHVybiB0LmluY2x1ZGVzKHIucGFnZUtpbmQpICYmIEFycmF5LmlzQXJyYXkoci5jb21wbGV0ZWRTdGVwcykgJiYgci5jb21wbGV0ZWRTdGVwcy5ldmVyeShlID0+XHJcbiAgICBcInN0cmluZ1wiID09IHR5cGVvZiBlKSAmJiAoXCJzdHJpbmdcIiA9PSB0eXBlb2Ygci5jdXJyZW50U3RlcCB8fCBudWxsID09PSByLmN1cnJlbnRTdGVwKSAmJiAoXHJcbiAgICBcInJ1bm5pbmdcIiA9PT0gci5zdGF0dXMgfHwgXCJjb21wbGV0ZWRcIiA9PT0gci5zdGF0dXMpICYmIFwibnVtYmVyXCIgPT0gdHlwZW9mIHIudXBkYXRlZEF0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGcoe1xyXG4gIHN0b3JhZ2VLZXk6IGUsXHJcbiAgcGFnZUtpbmRzOiB0XHJcbn0pIHtcclxuICBmdW5jdGlvbiByKCkge1xyXG4gICAgbGV0IHIgPSBtKCk7XHJcbiAgICBpZiAoIXIpIHJldHVybiBudWxsO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IG4gPSByLmdldEl0ZW0oZSk7XHJcbiAgICAgIGlmICghbikgcmV0dXJuIG51bGw7XHJcbiAgICAgIGxldCBvID0gSlNPTi5wYXJzZShuKTtcclxuICAgICAgcmV0dXJuIGgobywgdCkgPyBvIDogbnVsbFxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBuKCkge1xyXG4gICAgcmV0dXJuIHIoKT8uc3RhdHVzID09PSBcInJ1bm5pbmdcIlxyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0OiByLFxyXG4gICAgc2F2ZTogZnVuY3Rpb24odCkge1xyXG4gICAgICBsZXQgciA9IG0oKTtcclxuICAgICAgciAmJiByLnNldEl0ZW0oZSwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIC4uLnQsXHJcbiAgICAgICAgdXBkYXRlZEF0OiBEYXRlLm5vdygpXHJcbiAgICAgIH0pKVxyXG4gICAgfSxcclxuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IHQgPSBtKCk7XHJcbiAgICAgIHQgJiYgdC5yZW1vdmVJdGVtKGUpXHJcbiAgICB9LFxyXG4gICAgaGFzUnVubmluZzogblxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYihlLCB0KSB7XHJcbiAgcmV0dXJuIGUuaW5jbHVkZXModCkgPyBlIDogWy4uLmUsIHRdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHkoZSkge1xyXG4gIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBlID8ge1xyXG4gICAgbGFiZWw6IGVcclxuICB9IDogZVxyXG59XHJcblxyXG5mdW5jdGlvbiB2KHtcclxuICBzdGVwczogZSxcclxuICBjb21wbGV0ZWRTdGVwczogdCA9IFtdLFxyXG4gIG1pc3NpbmdTdGVwczogciA9IFtdLFxyXG4gIGN1cnJlbnRTdGVwOiBuID0gbnVsbCxcclxuICB1c2VyQXV0b0ZpbGxSZXNwb25zZTogbyA9IHt9LFxyXG4gIHR5cGU6IGkgPSBcIlBSRV9BVVRPRklMTF9GTE9XX1NURVBcIlxyXG59KSB7XHJcbiAgbGV0IGEgPSBlLm1hcCh5KSxcclxuICAgIGwgPSBhLm1hcChlID0+IGUubGFiZWwpLFxyXG4gICAgcyA9IG5ldyBTZXQobCksXHJcbiAgICB1ID0gdC5maWx0ZXIoZSA9PiBzLmhhcyhlKSksXHJcbiAgICBjID0gci5maWx0ZXIoZSA9PiBzLmhhcyhlKSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZpbGxlZEZpZWxkczogdSxcclxuICAgIG1pc3NpbmdGaWVsZHM6IGMsXHJcbiAgICBmaWVsZFJlcXVpcmVkU3RhdHVzOiBhLm1hcChlID0+ICh7XHJcbiAgICAgIGxhYmVsOiBlLmxhYmVsLFxyXG4gICAgICByZXF1aXJlZDogITAsXHJcbiAgICAgIG9wdGlvbnM6IFtdLFxyXG4gICAgICB0eXBlOiBpLFxyXG4gICAgICBtZXRhZGF0YTogZS5tZXRhZGF0YVxyXG4gICAgfSkpLFxyXG4gICAgdXNlckF1dG9GaWxsUmVzcG9uc2U6IG8sXHJcbiAgICBjdXJyZW50RmllbGQ6IG4gJiYgcy5oYXMobikgPyBuIDogbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdyh7XHJcbiAgZmlsbGluZ01vZGU6IGUsXHJcbiAgZ2V0U3RlcHM6IHQsXHJcbiAgcHJvZ3Jlc3NUeXBlOiByLFxyXG4gIGdldFRpdGxlOiBuLFxyXG4gIHNlc3Npb25TdG9yZTogaVxyXG59KSB7XHJcbiAgZnVuY3Rpb24gYSh7XHJcbiAgICBwYWdlS2luZDogZSxcclxuICAgIHN0ZXBzOiBuLFxyXG4gICAgY29tcGxldGVkU3RlcHM6IG8gPSBbXSxcclxuICAgIG1pc3NpbmdTdGVwczogaSA9IFtdLFxyXG4gICAgY3VycmVudFN0ZXA6IGEgPSBudWxsLFxyXG4gICAgdXNlckF1dG9GaWxsUmVzcG9uc2U6IGwgPSB7fVxyXG4gIH0pIHtcclxuICAgIHJldHVybiB2KHtcclxuICAgICAgc3RlcHM6IG4gPz8gdChlKSxcclxuICAgICAgY29tcGxldGVkU3RlcHM6IG8sXHJcbiAgICAgIG1pc3NpbmdTdGVwczogaSxcclxuICAgICAgY3VycmVudFN0ZXA6IGEsXHJcbiAgICAgIHVzZXJBdXRvRmlsbFJlc3BvbnNlOiBsLFxyXG4gICAgICB0eXBlOiByXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbCh7XHJcbiAgICBwYWdlS2luZDogdCxcclxuICAgIHN0ZXBzOiByLFxyXG4gICAgY29tcGxldGVkU3RlcHM6IGwsXHJcbiAgICBtaXNzaW5nU3RlcHM6IHMgPSBbXSxcclxuICAgIGN1cnJlbnRTdGVwOiB1LFxyXG4gICAgdXNlckF1dG9GaWxsUmVzcG9uc2U6IGMgPSB7fSxcclxuICAgIHN0YXR1czogZCA9IFwicnVubmluZ1wiLFxyXG4gICAgcGVyc2lzdFNlc3Npb246IGYgPSAhMFxyXG4gIH0pIHtcclxuICAgIGxldCBwID0gKDAsIG8udXNlQXV0b2ZpbGxSZXN1bHRTdG9yZSkuZ2V0U3RhdGUoKTtcclxuICAgIHAuc2V0RmlsbGluZ01vZGUoZSksIHAuc2V0UHJvZ3Jlc3NUaXRsZShuKHQsIGQpKSwgcC5zZXRBdXRvRmlsbFJlc3VsdChhKHtcclxuICAgICAgcGFnZUtpbmQ6IHQsXHJcbiAgICAgIHN0ZXBzOiByLFxyXG4gICAgICBjb21wbGV0ZWRTdGVwczogbCxcclxuICAgICAgbWlzc2luZ1N0ZXBzOiBzLFxyXG4gICAgICBjdXJyZW50U3RlcDogdSxcclxuICAgICAgdXNlckF1dG9GaWxsUmVzcG9uc2U6IGNcclxuICAgIH0pKSwgZiAmJiBpLnNhdmUoe1xyXG4gICAgICBwYWdlS2luZDogdCxcclxuICAgICAgY29tcGxldGVkU3RlcHM6IGwsXHJcbiAgICAgIGN1cnJlbnRTdGVwOiB1LFxyXG4gICAgICBzdGF0dXM6IGRcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBnZXRTdGVwczogdCxcclxuICAgIGdldFRpdGxlOiBuLFxyXG4gICAgYnVpbGQ6IGEsXHJcbiAgICBzZXQ6IGxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2VcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBFKHtcclxuICB2YWx1ZTogZSxcclxuICB2YWxpZGF0ZVBheWxvYWQ6IHRcclxufSkge1xyXG4gIGlmICghZSB8fCBcIm9iamVjdFwiICE9IHR5cGVvZiBlKSByZXR1cm4gITE7XHJcbiAgbGV0IHIgPSBlO1xyXG4gIHJldHVybiBcIm51bWJlclwiID09IHR5cGVvZiByLmNyZWF0ZWRBdCAmJiB0KHIucGF5bG9hZClcclxufVxyXG5cclxuZnVuY3Rpb24geCh7XHJcbiAgc3RvcmFnZUtleTogZSxcclxuICB0dGxNczogdCxcclxuICB2YWxpZGF0ZVBheWxvYWQ6IHJcclxufSkge1xyXG4gIGZ1bmN0aW9uIG4oKSB7XHJcbiAgICBsZXQgdCA9IFMoKTtcclxuICAgIHQgJiYgdC5yZW1vdmVJdGVtKGUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvKCkge1xyXG4gICAgbGV0IG8gPSBTKCk7XHJcbiAgICBpZiAoIW8pIHJldHVybiBudWxsO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGkgPSBvLmdldEl0ZW0oZSk7XHJcbiAgICAgIGlmICghaSkgcmV0dXJuIG51bGw7XHJcbiAgICAgIGxldCBhID0gSlNPTi5wYXJzZShpKTtcclxuICAgICAgaWYgKCFFKHtcclxuICAgICAgICAgIHZhbHVlOiBhLFxyXG4gICAgICAgICAgdmFsaWRhdGVQYXlsb2FkOiByXHJcbiAgICAgICAgfSkpIHJldHVybiBuKCksIG51bGw7XHJcbiAgICAgIGxldCBsID0gRGF0ZS5ub3coKSAtIGEuY3JlYXRlZEF0O1xyXG4gICAgICBpZiAobCA+IHQpIHJldHVybiBjb25zb2xlLmRlYnVnKFwiW3ByZS1hdXRvZmlsbC1zZXNzaW9uXVwiLCBcImV4cGlyZWRcIiwge1xyXG4gICAgICAgIHN0b3JhZ2VLZXk6IGUsXHJcbiAgICAgICAgYWdlTXM6IGwsXHJcbiAgICAgICAgdHRsTXM6IHQsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdFxyXG4gICAgICB9KSwgbigpLCBudWxsO1xyXG4gICAgICByZXR1cm4gYVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIHJldHVybiBuKCksIG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGkoKSB7XHJcbiAgICBsZXQgZSA9IG8oKTtcclxuICAgIHJldHVybiBlICYmIG4oKSwgZVxyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgc2F2ZTogZnVuY3Rpb24odCkge1xyXG4gICAgICBsZXQgciA9IFMoKTtcclxuICAgICAgciAmJiByLnNldEl0ZW0oZSwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHBheWxvYWQ6IHQsXHJcbiAgICAgICAgY3JlYXRlZEF0OiBEYXRlLm5vdygpXHJcbiAgICAgIH0pKVxyXG4gICAgfSxcclxuICAgIHBlZWs6IG8sXHJcbiAgICBjb25zdW1lOiBpLFxyXG4gICAgY2xlYXI6IG5cclxuICB9XHJcbn1cclxubGV0IEMgPSAyNTAsXHJcbiAgQSA9IFwic2lnbnVwX2F1dG9maWxsX2Zsb3dcIixcclxuICBrID0gXCJKT0JSSUdIVF9TSUdOVVBfQVVUT0ZJTExfRkxPV19TRVNTSU9OXCIsXHJcbiAgVCA9IFwiSk9CUklHSFRfU0lHTlVQX0FVVE9GSUxMX0ZMT1dfUEVORElOR19TVUJNSVRcIixcclxuICBGID0gVCxcclxuICBJID0gXCJTSUdOVVBfQVVUT0ZJTExfRkxPV19TVEVQXCIsXHJcbiAgaiA9IFwiSm9icmlnaHRQcmVBdXRvZmlsbEFjY291bnRDcmVkZW50aWFsc0NoYW5nZWRcIixcclxuICBEID0gXCJKb2JyaWdodFByZUF1dG9maWxsQWNjb3VudFRyYW5zaXRpb25DaGFuZ2VkXCIsXHJcbiAgUCA9IDNlNSxcclxuICBfID0gMWU0LFxyXG4gIEwgPSBfLFxyXG4gIFIgPSAxZTMsXHJcbiAgTyA9IHtcclxuICAgIGNsaWNrQXBwbHk6IFwiQ2xpY2sgQXBwbHlcIixcclxuICAgIGNsaWNrQ29udGludWVBcHBsaWNhdGlvbjogXCJDbGljayBDb250aW51ZSBBcHBsaWNhdGlvblwiLFxyXG4gICAgc2VsZWN0ZWRBcHBseU1hbnVhbGx5OiBcIkNob29zZSBBcHBseSBNYW51YWxseVwiLFxyXG4gICAgZW1haWxBZGRyZXNzOiBcIkVudGVyIEVtYWlsIEFkZHJlc3NcIixcclxuICAgIHBhc3N3b3JkOiBcIkVudGVyIFBhc3N3b3JkXCIsXHJcbiAgICBzaWduSW5XaXRoRW1haWw6IFwiU2lnbiBpbiB3aXRoIGVtYWlsXCIsXHJcbiAgICB2ZXJpZnlOZXdQYXNzd29yZDogXCJWZXJpZnkgTmV3IFBhc3N3b3JkXCIsXHJcbiAgICBhZ3JlZVByaXZhY3lOb3RpY2U6IFwiQWdyZWUgdG8gUHJpdmFjeSBOb3RpY2VcIixcclxuICAgIGNsaWNrQ3JlYXRlQWNjb3VudDogXCJDbGljayBDcmVhdGUgQWNjb3VudFwiLFxyXG4gICAgY2xpY2tTaWduSW46IFwiQ2xpY2sgU2lnbiBJblwiLFxyXG4gICAgY2xpY2tSZXNldFBhc3N3b3JkOiBcIkNsaWNrIFJlc2V0IFBhc3N3b3JkXCJcclxuICB9LFxyXG4gIE0gPSBbTy5jbGlja0FwcGx5LCBPLnNlbGVjdGVkQXBwbHlNYW51YWxseV0sXHJcbiAgTiA9IFtPLmVtYWlsQWRkcmVzcywgTy5wYXNzd29yZCwgTy52ZXJpZnlOZXdQYXNzd29yZF0sXHJcbiAgJCA9IFsuLi5NLCAuLi5OXSxcclxuICBCID0gW08uZW1haWxBZGRyZXNzLCBPLnBhc3N3b3JkXSxcclxuICBxID0gWy4uLkJdLFxyXG4gIFUgPSBbTy5wYXNzd29yZCwgTy52ZXJpZnlOZXdQYXNzd29yZF0sXHJcbiAgSCA9IHtcclxuICAgIHJlZ2lzdHJhdGlvbjoge1xyXG4gICAgICBzdGVwczogJCxcclxuICAgICAgcHJvZ3Jlc3NUaXRsZTogXCJDcmVhdGluZyBhY2NvdW50XCIsXHJcbiAgICAgIGN0YVRleHQ6IFwiQWNjb3VudCBDcmVhdGlvbiAmIEF1dG9maWxsXCJcclxuICAgIH0sXHJcbiAgICBzaWduX2luOiB7XHJcbiAgICAgIHN0ZXBzOiBxLFxyXG4gICAgICBwcm9ncmVzc1RpdGxlOiBcIlNpZ25pbmcgaW5cIixcclxuICAgICAgY3RhVGV4dDogXCJTaWduIEluICYgQXV0b2ZpbGxcIlxyXG4gICAgfSxcclxuICAgIGZvcmdvdF9wYXNzd29yZDoge1xyXG4gICAgICBzdGVwczogW08uZW1haWxBZGRyZXNzXSxcclxuICAgICAgcHJvZ3Jlc3NUaXRsZTogXCJBdXRvZmlsbGluZ1wiLFxyXG4gICAgICBjdGFUZXh0OiBcIkF1dG9maWxsXCJcclxuICAgIH0sXHJcbiAgICByZXNldF9wYXNzd29yZDoge1xyXG4gICAgICBzdGVwczogVSxcclxuICAgICAgcHJvZ3Jlc3NUaXRsZTogXCJBdXRvZmlsbGluZ1wiLFxyXG4gICAgICBjdGFUZXh0OiBcIkF1dG9maWxsXCJcclxuICAgIH1cclxuICB9LFxyXG4gIFkgPSBPYmplY3Qua2V5cyhIKSxcclxuICB6ID0gZyh7XHJcbiAgICBzdG9yYWdlS2V5OiBrLFxyXG4gICAgcGFnZUtpbmRzOiBZXHJcbiAgfSk7XHJcblxyXG5mdW5jdGlvbiBWKGUpIHtcclxuICBpZiAoIWUgfHwgXCJvYmplY3RcIiAhPSB0eXBlb2YgZSkgcmV0dXJuICExO1xyXG4gIGxldCB0ID0gZTtcclxuICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC5mbG93SWQgJiYgWS5pbmNsdWRlcyh0LmludGVudCkgJiYgXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC5zb3VyY2VVcmwgJiYgKFxyXG4gICAgICB2b2lkIDAgPT09IHQudGFyZ2V0VXJsIHx8IFwic3RyaW5nXCIgPT0gdHlwZW9mIHQudGFyZ2V0VXJsKSAmJiBcInN0cmluZ1wiID09IHR5cGVvZiB0XHJcbiAgICAuc291cmNlUGFnZUtpbmQgJiYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHQudHJhbnNpdGlvblN0ZXAgfHwgXCJzdHJpbmdcIiA9PSB0eXBlb2YgdC5zdWJtaXRTdGVwKSAmJiAoXHJcbiAgICAgIHZvaWQgMCA9PT0gdC50cmFuc2l0aW9uU3RlcCB8fCBcInN0cmluZ1wiID09IHR5cGVvZiB0LnRyYW5zaXRpb25TdGVwKSAmJiAodm9pZCAwID09PSB0XHJcbiAgICAgIC5zdWJtaXRTdGVwIHx8IFwic3RyaW5nXCIgPT0gdHlwZW9mIHQuc3VibWl0U3RlcCkgJiYgKHZvaWQgMCA9PT0gdC5jb21wbGV0ZWRTdGVwcyB8fCBBcnJheVxyXG4gICAgICAuaXNBcnJheSh0LmNvbXBsZXRlZFN0ZXBzKSAmJiB0LmNvbXBsZXRlZFN0ZXBzLmV2ZXJ5KGUgPT4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkpICYmIChcclxuICAgICAgdm9pZCAwID09PSB0LmN1cnJlbnRTdGVwIHx8IFwic3RyaW5nXCIgPT0gdHlwZW9mIHQuY3VycmVudFN0ZXAgfHwgbnVsbCA9PT0gdC5jdXJyZW50U3RlcClcclxufVxyXG5sZXQgVyA9IHgoe1xyXG4gICAgc3RvcmFnZUtleTogVCxcclxuICAgIHR0bE1zOiBfLFxyXG4gICAgdmFsaWRhdGVQYXlsb2FkOiBWXHJcbiAgfSksXHJcbiAgRyA9IFcsXHJcbiAgSyA9IHcoe1xyXG4gICAgZmlsbGluZ01vZGU6IEEsXHJcbiAgICBwcm9ncmVzc1R5cGU6IEksXHJcbiAgICBnZXRTdGVwczogUSxcclxuICAgIGdldFRpdGxlOiBaLFxyXG4gICAgc2Vzc2lvblN0b3JlOiB6XHJcbiAgfSk7XHJcblxyXG5mdW5jdGlvbiBYKGUpIHtcclxuICByZXR1cm4gSy5idWlsZChlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBKKGUpIHtcclxuICByZXR1cm4gSFtlXS5jdGFUZXh0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFEoZSkge1xyXG4gIHJldHVybiBIW2VdLnN0ZXBzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFooZSwgdCA9IFwicnVubmluZ1wiKSB7XHJcbiAgc3dpdGNoICh0KSB7XHJcbiAgICBjYXNlIFwicnVubmluZ1wiOlxyXG4gICAgICByZXR1cm4gSFtlXS5wcm9ncmVzc1RpdGxlO1xyXG4gICAgY2FzZSBcImNvbXBsZXRlZFwiOlxyXG4gICAgICByZXR1cm4gXCJDb21wbGV0ZWRcIlxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImFjY291bnQtZmxvdy1zdGF0ZS5kMWI5ODFmZi5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);