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
})({"8c58e":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\google\\rules.js",
    "bundleId": "fe6b23ff001ebb65",
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
var j = z(require("746d0cc7c984e6bf"));
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

},{"746d0cc7c984e6bf":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"5AuXb":[function(require,module,exports) {
/**
 * Parcel module id: WnxUk
 * Resolved path: src/contents/sites/google/rules.js
 * Dependencies:
 *   ./answer -> 7manN  =>  src/contents/sites/google/answer.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 *   ~utils/getTargetOrTimeout -> 1TBhF  =>  src/utils/getTargetOrTimeout.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "LISTBOX_UL_JSNAME", ()=>u), n.export(r, "AUTOCOMPLETE_LISTBOX_JSNAME", ()=>c), n.export(r, "getGoogleVisibleStepState", ()=>y), n.export(r, "waitForGooglePageClean", ()=>S), n.export(r, "GoogleTrackingManager", ()=>E), n.export(r, "isCountryLabel", ()=>A), n.export(r, "isGooglePhoneCountryCodeControl", ()=>k), n.export(r, "isGooglePhoneCountryCodeRule", ()=>F), n.export(r, "isGooglePhoneNumberRule", ()=>I), n.export(r, "stageGooglePhoneCountryCodeRules", ()=>j), n.export(r, "findMainForm", ()=>_), n.export(r, "getCoverLetterStatus", ()=>W), n.export(r, "findHigherEducationSection", ()=>Q), n.export(r, "findWorkExperienceSection", ()=>Z), n.export(r, "getHigherEducationRules", ()=>et), n.export(r, "getWorkExperienceRules", ()=>ei), n.export(r, "extractRules", ()=>el), n.export(r, "isStructuredSectionFilled", ()=>eu), n.export(r, "getStructuredEducationSnapshot", ()=>ec), n.export(r, "getStructuredWorkExperienceSnapshot", ()=>ed), n.export(r, "getFormSnapshot", ()=>ef), n.export(r, "getCurrentStepIndex", ()=>eh), n.export(r, "findStepAdvanceButton", ()=>ek), n.export(r, "isAdvanceButton", ()=>eT), n.export(r, "getGoogleStepIndexFromVisibleContent", ()=>eI), n.export(r, "getCurrentStepFingerprint", ()=>ej), n.export(r, "waitForStepAdvanceButtonEnabled", ()=>eD), n.export(r, "waitForStepTransition", ()=>eP), n.export(r, "isGoogleFormsPage", ()=>e_), n.export(r, "extractGoogleFormsRules", ()=>eL), n.export(r, "getFormsPageFingerprint", ()=>eR), n.export(r, "isFormsAdvanceButton", ()=>eO), n.export(r, "isFormsSubmitButton", ()=>eM), n.export(r, "waitForFormsPageTransition", ()=>eN), n.export(r, "getGoogleFormsSnapshot", ()=>e$);
var o = e("~core/enums"), i = e("~utils/delay"), a = e("~utils/getTargetOrTimeout"), l = n.interopDefault(a), s = e("./answer");
let u = "rymPhb", c = "hsfjDf", d = "jsname", f = "K4r5Ff", p = "xl07Ob";
async function m(e1 = 6e3) {
    let t = Date.now(), r1 = ()=>{
        let { stepper: e1 } = y();
        return !!(e1 || document.querySelector("div.PukFX h2.yEACXb") || document.querySelector('input[jsname="YPqjbf"], textarea[jsname="YPqjbf"]'));
    };
    for(; Date.now() - t < e1;){
        if (r1()) return;
        await (0, i.delay)(200);
    }
}
function h(e1) {
    if (!e1 || !P(e1)) return !1;
    let t = e1;
    for(; t;){
        if (t.hasAttribute("hidden") || t.hasAttribute("inert") || "true" === t.getAttribute("aria-hidden")) return !1;
        let e1 = window.getComputedStyle(t);
        if ("none" === e1.display || "hidden" === e1.visibility) return !1;
        t = t.parentElement;
    }
    return !0;
}
function g(e1, t) {
    if (!e1) return -1;
    let r1 = (e1.getAttribute("aria-label") ?? "").trim(), n = r1.match(/^Step\s*(\d+)\b/i);
    if (n) {
        let e1 = Number(n[1]);
        if (Number.isFinite(e1) && e1 > 0) return e1 - 1;
    }
    return t.indexOf(e1);
}
function b(e1) {
    if (!e1) return "";
    let t = C(e1.getAttribute("aria-label") || "");
    if (t) return t;
    let r1 = C(e1.querySelector("span.JjWAne")?.textContent || "");
    return r1 || C(e1.textContent || "");
}
function y(e1 = document) {
    let t = Array.from(e1.querySelectorAll('div[role="tablist"][aria-label="Application stepper"]')).filter((e1)=>h(e1)), r1 = t.find((e1)=>e1.querySelector('button[role="tab"][aria-selected="true"]')) ?? t[0] ?? null, n = r1 ? Array.from(r1.querySelectorAll('button[role="tab"]')) : [], o = n.find((e1)=>"true" === e1.getAttribute("aria-selected")) ?? null;
    return {
        stepper: r1,
        selectedTab: o,
        tabs: n,
        idx: g(o, n),
        label: b(o)
    };
}
function v(e1 = document) {
    return y(e1).label;
}
function w(e1) {
    let t = v(e1), r1 = C(ej(e1)), n = Array.from(e1.querySelectorAll("div.PukFX h2.yEACXb")).map((e1)=>e1).filter((e1)=>P(e1)).map((e1)=>C(e1.textContent || "")).filter(Boolean), o = Array.from(e1.querySelectorAll('[role="radiogroup"]')).map((e1)=>e1).filter((e1)=>P(e1)).length, i = Array.from(e1.querySelectorAll('[role="combobox"]')).map((e1)=>e1).filter((e1)=>P(e1)).length, a = Array.from(e1.querySelectorAll('input[jsname="YPqjbf"], textarea[jsname="YPqjbf"]')).map((e1)=>e1).filter((e1)=>P(e1)).length, l = Array.from(e1.querySelectorAll('ul[role="listbox"][aria-multiselectable="true"], div[role="group"]')).map((e1)=>e1).filter((e1)=>P(e1)).length, s = o + i + a + l;
    return (r1 || t) && (0 !== s || 0 !== n.length) ? [
        t,
        r1,
        n.join("|"),
        s.toString(),
        o.toString(),
        i.toString(),
        a.toString(),
        l.toString()
    ].join("::") : "";
}
async function S(e1 = 5e3, t = 200) {
    await m(Math.min(e1, 6e3));
    let r1 = Date.now() + e1, n = "", o = 0;
    for(; Date.now() < r1;){
        let e1 = w(document.body);
        if (e1) {
            if (e1 === n ? o += 1 : (n = e1, o = 1), o >= 3) {
                await (0, i.delay)(300);
                return;
            }
        } else n = "", o = 0;
        await (0, i.delay)(t);
    }
    await (0, i.delay)(250);
}
_c = S;
class E {
    startOrResumeRun() {
        this.inProgress || (this.lastAutofillSnapshotByFingerprint = {}, this.lastAutofillStructuredByFingerprint = {}, this.inProgress = !0);
    }
    finishRun(e1) {
        this.inProgress = !e1;
    }
    getFingerprintKey(e1) {
        let t = (e1 || "").trim();
        return t || "default";
    }
    recordAutofillSnapshot(e1, t, r1) {
        let n = this.getFingerprintKey(e1);
        return this.lastAutofillSnapshotByFingerprint[n] = {
            ...t
        }, this.lastAutofillStructuredByFingerprint[n] = r1, n;
    }
    getAutofillSnapshot(e1, t, r1) {
        return this.lastAutofillSnapshotByFingerprint[e1] ?? this.lastAutofillSnapshotByFingerprint[t] ?? r1;
    }
    getAutofillStructured(e1, t, r1) {
        return this.lastAutofillStructuredByFingerprint[e1] ?? this.lastAutofillStructuredByFingerprint[t] ?? r1;
    }
    constructor(){
        this.lastAutofillSnapshotByFingerprint = {}, this.lastAutofillStructuredByFingerprint = {}, this.inProgress = !1;
    }
}
function x() {
    let e1 = document.querySelector("form");
    return e1 || document.body;
}
function C(e1) {
    return (e1 || "").replace(/\s+/g, " ").trim();
}
_c1 = C;
function A(e1) {
    let t = e1.toLowerCase().trim();
    return "country / region" === t || "country" === t || "country/region" === t;
}
_c2 = A;
function k(e1, t) {
    let r1 = 'input[aria-label="Phone number"]', n = e1.closest("fieldset"), o = !!n?.querySelector(r1), i = o, a = e1.closest('[jsname="YzgRqe"]');
    for(; a;){
        if (a.querySelector(r1)) {
            i = !0;
            break;
        }
        let e1 = a.parentElement;
        a = e1 ? e1.closest('[jsname="YzgRqe"]') : null;
    }
    if (!i) return !1;
    let l = C(t).toLowerCase();
    return "country calling code" === l || !l && C(n?.textContent || "").toLowerCase().includes("country calling code");
}
function T(e1) {
    return C(e1).toLowerCase();
}
_c3 = T;
function F(e1) {
    return "country calling code" === T(e1.label);
}
_c4 = F;
function I(e1) {
    let t = T(e1.$input?.getAttribute?.("aria-label") || "");
    return "phone number" === t || [
        "phone",
        "phone number",
        "primary phone",
        "primary phone number",
        "mobile phone number"
    ].includes(T(e1.label));
}
_c5 = I;
function j(e1, t) {
    let r1 = e1.filter(F);
    if (0 === r1.length) return {
        countryCodeRules: r1,
        regularRules: e1,
        phoneRules: [],
        postPhoneRules: e1,
        phoneRulesRebound: !0,
        phoneRulesSkipped: 0
    };
    let n = e1.filter(I), o = t.filter(I), i = n.length === o.length, a = 0, l = 0, s = [];
    for (let t of e1)if (!F(t)) {
        if (!I(t)) {
            s.push(t);
            continue;
        }
        if (!i) {
            l += 1;
            continue;
        }
        s.push(o[a]), a += 1;
    }
    return {
        countryCodeRules: r1,
        regularRules: s,
        phoneRules: s.filter(I),
        postPhoneRules: s.filter((e1)=>!I(e1)),
        phoneRulesRebound: i,
        phoneRulesSkipped: l
    };
}
function D(e1, t, r1) {
    if (!e1.matches('div[role="combobox"][jsname="oYxtQd"]')) return !1;
    if (A(r1)) return !0;
    let n = C(e1.getAttribute("aria-label") || "");
    if (A(n)) return !0;
    let o = C(O(e1));
    if (A(o)) return !0;
    let i = C(t.querySelector('[jsname="V67aGc"]')?.textContent || "");
    return !!A(i);
}
_c6 = D;
function P(e1) {
    if (!e1?.isConnected) return !1;
    let t = window.getComputedStyle(e1);
    if ("none" === t.display || "hidden" === t.visibility) return !1;
    let r1 = e1.getBoundingClientRect();
    return r1.width > 0 && r1.height > 0;
}
_c7 = P;
function _() {
    let e1 = document.querySelector("form");
    return e1;
}
function L(e1) {
    let t = [];
    try {
        e1.querySelectorAll('li[role="option"]').forEach((e1)=>{
            let r1 = e1, n = r1.querySelector(`[${d}="${f}"]`), o = n?.textContent?.trim() ?? "", i = C(r1.textContent ?? ""), a = r1.getAttribute("data-value") ?? "", l = o || i;
            "" === l && ("" === a || "0" === a) ? t.push("") : l ? t.push(l) : a && t.push(a);
        });
    } catch  {}
    return t;
}
_c8 = L;
function R(e1) {
    let t = e1.getAttribute("aria-controls");
    if (!t) return null;
    let r1 = document.getElementById(t);
    if (!r1 || "listbox" !== r1.getAttribute("role")) return null;
    let n = r1, o = "UL" === r1.tagName && r1.querySelector('li[role="option"]');
    return o ? n : null;
}
_c9 = R;
function O(e1) {
    let t = e1.getAttribute("aria-labelledby");
    if (t) {
        let e1 = t.trim().split(/\s+/)[0], r1 = e1 ? document.getElementById(e1) : null;
        if (r1?.textContent) return C(r1.textContent);
    }
    return "";
}
_c10 = O;
function M(e1) {
    let t = e1.closest('[jsname="wSASue"]'), r1 = t?.querySelector('div[jsname="xl07Ob"]'), n = r1?.querySelector('ul[jsname="rymPhb"][role="listbox"][aria-label="State / province"]') ?? e1.closest('div[jsname="rT1Nze"]')?.querySelector('ul[jsname="rymPhb"][role="listbox"][aria-label="State / province"]') ?? document.querySelector('ul[jsname="rymPhb"][role="listbox"][aria-label="State / province"]');
    return n && n.querySelector('li[role="option"]') ? n : null;
}
_c11 = M;
function N(e1) {
    let t = O(e1);
    if (!t) return null;
    let r1 = document.querySelectorAll(`div[jsname="${p}"]`);
    for (let e1 of r1){
        let r1 = e1.querySelector(`ul[jsname="${u}"][role="listbox"]`);
        if (!r1) continue;
        let n = (r1.getAttribute("aria-label") ?? "").trim();
        if (n !== t) continue;
        let o = r1.getBoundingClientRect();
        if (o.height > 0 && o.width > 0) return r1;
    }
    return null;
}
_c12 = N;
async function $(e1, t, r1) {
    let n = [];
    try {
        try {
            e1.scrollIntoView({
                block: "center",
                inline: "nearest"
            });
        } catch  {}
        await (0, i.delay)(50), e1.focus(), e1.click(), await (0, i.delay)(80);
        let o = await (0, l.default)(()=>t(e1) || N(e1), ()=>!1, 30);
        o && (n = r1(o));
    } catch  {}
    try {
        e1.dispatchEvent(new KeyboardEvent("keydown", {
            key: "Escape",
            bubbles: !0
        })), e1.dispatchEvent(new KeyboardEvent("keyup", {
            key: "Escape",
            bubbles: !0
        }));
        let t = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        t && t !== e1 && (t.dispatchEvent(new KeyboardEvent("keydown", {
            key: "Escape",
            bubbles: !0
        })), t.dispatchEvent(new KeyboardEvent("keyup", {
            key: "Escape",
            bubbles: !0
        }))), e1.blur();
    } catch  {}
    if ("true" === e1.getAttribute("aria-expanded")) {
        try {
            let e1 = document.documentElement || document.body;
            e1.dispatchEvent(new MouseEvent("mousedown", {
                bubbles: !0
            })), e1.dispatchEvent(new MouseEvent("mouseup", {
                bubbles: !0
            })), e1.dispatchEvent(new MouseEvent("click", {
                bubbles: !0
            }));
        } catch  {}
        if (await (0, i.delay)(40), "true" === e1.getAttribute("aria-expanded")) {
            try {
                e1.click();
            } catch  {}
            await (0, i.delay)(40);
            try {
                e1.dispatchEvent(new KeyboardEvent("keydown", {
                    key: "Escape",
                    bubbles: !0
                })), e1.dispatchEvent(new KeyboardEvent("keyup", {
                    key: "Escape",
                    bubbles: !0
                })), e1.blur();
            } catch  {}
        }
    }
    return await (0, i.delay)(80), n;
}
function B(e1) {
    let t = e1.getAttribute("aria-label")?.trim();
    if (t) return t;
    if (!e1.id) return "";
    try {
        let t = "undefined" != typeof CSS && CSS.escape ? CSS.escape(e1.id) : e1.id.replace(/["\\]/g, "\\$&"), r1 = document.querySelector(`label[for="${t}"]`);
        return r1?.textContent ? C(r1.textContent) : "";
    } catch  {
        return "";
    }
}
_c13 = B;
function q(e1, t = 5) {
    let r1 = e1.previousElementSibling;
    for(let e1 = 0; e1 < t && r1; e1++){
        let e1 = r1.getAttribute("role"), t = r1.tagName.toLowerCase();
        if ("button" === e1 || "button" === t) {
            r1 = r1.previousElementSibling;
            continue;
        }
        let n = (r1.textContent || "").trim();
        if (n.length < 8 || /^\s*\*?\s*required\s*$/i.test(n)) {
            r1 = r1.previousElementSibling;
            continue;
        }
        let o = C(n).replace(/\s*\*+\s*$/, "").replace(/\s*required\s*$/i, "").trim();
        if (o.length >= 5) return o;
        r1 = r1.previousElementSibling;
    }
    return "";
}
function U(e1) {
    return !!(!e1 || e1.length <= 2 || /^\d+$/.test(e1));
}
_c14 = U;
function H(e1) {
    let t = e1;
    for(; t;){
        let e1 = t.previousElementSibling;
        if (e1?.querySelector('[aria-label="required field"]') || t.querySelector('[aria-label="required field"]')) return !0;
        t = t.parentElement;
    }
    return !1;
}
_c15 = H;
function Y(e1, t) {
    let r1 = e1.getAttribute("aria-labelledby");
    if (r1) for (let e1 of r1.trim().split(/\s+/)){
        let t = document.getElementById(e1);
        if (t?.textContent) {
            let e1 = C(t.textContent);
            if (e1 && "required field" !== e1) return e1;
        }
    }
    let n = t.querySelector('[jsname="V67aGc"]');
    if (n?.textContent) return C(n.textContent);
    let o = t.querySelector('[jsname="Fb0Bif"]');
    return o?.innerText?.trim() || "";
}
_c16 = Y;
function z(e1 = x()) {
    let t = e1.querySelectorAll("div.PukFX");
    for (let e1 of t){
        let t = e1.querySelector("h2.yEACXb"), r1 = C(t?.textContent || "").toLowerCase();
        if (r1.includes("cover letter")) return e1;
    }
    return null;
}
function V(e1 = x()) {
    let t = z(e1);
    return t ? t.querySelector('textarea[jsname="YPqjbf"][aria-label="Cover letter"]') ?? t.querySelector('textarea[jsname="YPqjbf"]') : null;
}
_c17 = V;
function W(e1 = x()) {
    let t = V(e1);
    if (!t || !P(t)) return "";
    let r1 = t.required || "true" === t.getAttribute("aria-required") || H(t);
    return r1 ? "required" : "optional";
}
_c18 = W;
let G = "Higher education", K = "Work experience", X = "work-experience-city-input", J = `ul:has(input[debugid="${X}"])`;
function Q(e1) {
    let t = e1.querySelectorAll("div.PukFX");
    for (let e1 of t){
        let t = e1.querySelector("h2.yEACXb");
        if (t && C(t.textContent || "") === G) return e1;
    }
    return null;
}
_c19 = Q;
function Z(e1) {
    let t = e1.querySelectorAll("div.PukFX");
    for (let e1 of t){
        let t = e1.querySelector("h2.yEACXb");
        if (t && C(t.textContent || "") === K) return e1;
    }
    return null;
}
_c20 = Z;
async function ee(e1, t, r1, n, i = !0) {
    let a = [], l = (e1)=>a.push(e1), s = e1.querySelector('input[aria-label="School name"]');
    if (s && P(s)) {
        let e1 = s.closest('[jsname="vhZMvf"]') || s.closest(".Ufn6O") || s.parentElement;
        l({
            label: "School name",
            required: !0,
            type: o.FIELD_TYPE.TEXT,
            $label: e1 || s,
            $input: s
        });
    }
    let c = (e1)=>{
        let t = r1(e1);
        if (t) return t;
        let n = e1.closest('[jsname="wSASue"]'), o = n?.querySelector(`ul[jsname="${u}"][role="listbox"]`);
        return o || N(e1);
    }, d = e1.querySelector('[jsname="sFKGad"] [jsname="oYxtQd"]');
    if (d && P(d)) {
        let e1 = d.closest('[jsname="wSASue"]') || d.parentElement, t = c(d), r1 = t ? n(t) : [];
        i && 0 === r1.length && (r1 = await $(d, c, n)), l({
            label: "Degree",
            required: !0,
            type: o.FIELD_TYPE.SELECT,
            $label: e1 || d,
            $input: d,
            options: r1
        });
    }
    let f = e1.querySelector('[jsname="LrfOX"] [jsname="oYxtQd"]');
    if (f && P(f)) {
        let e1 = f.closest('[jsname="wSASue"]') || f.parentElement, t = c(f), r1 = t ? n(t) : [];
        i && 0 === r1.length && (r1 = await $(f, c, n)), l({
            label: "Degree Status",
            required: !0,
            type: o.FIELD_TYPE.SELECT,
            $label: e1 || f,
            $input: f,
            options: r1
        });
    }
    let p = e1.querySelector('input[aria-label="Major / area of study"]');
    if (p && P(p)) {
        let e1 = p.closest('[jsname="vhZMvf"]') || p.closest(".Ufn6O") || p.parentElement;
        l({
            label: "Major / area of study",
            required: !0,
            type: o.FIELD_TYPE.TEXT,
            $label: e1 || p,
            $input: p
        });
    }
    let m = Array.from(e1.querySelectorAll('div[role="combobox"][jsname="oYxtQd"]')).find((r1)=>{
        let n = r1.closest('[jsname="wSASue"]') || r1.parentElement || e1, o = C(t(r1, n));
        return D(r1, n, o);
    }) || null, h = m || e1.querySelector('[jsname="HK7Vfc"] [jsname="oYxtQd"]');
    if (h && P(h)) {
        let e1 = h.closest('[jsname="wSASue"]') || h.parentElement;
        l({
            label: "Country / Region",
            required: !1,
            type: o.FIELD_TYPE.SELECT,
            $label: e1 || h,
            $input: h,
            options: []
        });
    }
    return a;
}
async function et(e1 = !0) {
    let t = x(), r1 = Q(t);
    if (!r1) return [];
    let n = Array.from(r1.querySelectorAll("li.VdMCtc")).length ? Array.from(r1.querySelectorAll("li.VdMCtc")) : r1.querySelector('[jsname="ouDqDb"]') ? [
        r1
    ] : [];
    if (0 === n.length) return [];
    let i = [], a = (e1, t)=>Y(e1, t);
    for (let t of n){
        let r1 = await ee(t, a, R, L, e1);
        if (r1.length > 0) {
            let e1 = r1[0];
            i.push({
                type: o.FIELD_TYPE.EDUCATION,
                label: "Education",
                required: !0,
                children: r1,
                $input: e1?.$input
            });
        }
    }
    return i;
}
function er(e1, t, r1, n) {
    let i = [], a = (e1)=>i.push(e1), l = e1.querySelector('input[aria-label="Employer name"]');
    if (l) {
        let e1 = l.closest(".rbgmcb") || l.parentElement;
        a({
            label: "Employer name",
            required: !0,
            type: o.FIELD_TYPE.TEXT,
            $label: e1 || l,
            $input: l
        });
    }
    let s = e1.querySelector('input[aria-label="Job title"]');
    if (s) {
        let e1 = s.closest(".rbgmcb") || s.parentElement;
        a({
            label: "Job title",
            required: !0,
            type: o.FIELD_TYPE.TEXT,
            $label: e1 || s,
            $input: s
        });
    }
    let c = Array.from(e1.querySelectorAll('div[role="combobox"][jsname="oYxtQd"], [role="combobox"]')), d = c.filter((e1)=>{
        let r1 = e1.closest('[jsname="wSASue"]') || e1.parentElement;
        return "Month" === C(t(e1, r1));
    }), f = [
        ...d
    ];
    if (f.length < 2) {
        let t = [], r1 = Array.from(e1.querySelectorAll('[jsname="nXb2Qb"] .VfPpkd-uusGie-fmcmS'));
        for (let e1 of r1){
            let r1 = e1.closest('[role="combobox"]');
            r1 && t.push(r1);
        }
        let n = Array.from(document.querySelectorAll('[aria-label="Month"] [aria-selected="true"] .VfPpkd-StrnGf-rymPhb-b9t22c'));
        for (let r1 of n){
            let n = r1.closest('[role="listbox"]'), o = n?.id?.trim();
            if (o) try {
                let r1 = "undefined" != typeof CSS && CSS.escape ? CSS.escape(o) : o, n = e1.querySelector(`[role="combobox"][aria-controls="${r1}"]`);
                n && t.push(n);
            } catch  {
                let r1 = e1.querySelector(`[role="combobox"][aria-controls="${o}"]`);
                r1 && t.push(r1);
            }
        }
        if (t.length > 0) {
            let e1 = new Set(f);
            for (let r1 of t)e1.add(r1);
            f = Array.from(e1).sort((e1, t)=>{
                let r1 = e1.compareDocumentPosition(t);
                return r1 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r1 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
            });
        }
    }
    let p = Array.from(e1.querySelectorAll(`ul[jsname="${u}"][role="listbox"]`)), m = f[0];
    if (m) {
        let e1 = r1(m) || p[0] || N(m), t = e1 ? n(e1) : [], i = m.closest('[jsname="wSASue"]') || m.parentElement;
        a({
            label: "Start Month",
            required: !0,
            type: o.FIELD_TYPE.SELECT,
            $label: i || m,
            $input: m,
            options: t
        });
    }
    let h = Array.from(e1.querySelectorAll('input[type="number"][aria-label="Year"]')), g = [
        ...h
    ];
    if (g.length < 2) {
        let t = Array.from(e1.querySelectorAll('[jsname="s08b9"] input[jsname="YPqjbf"]'));
        for (let e1 of t){
            if (g.includes(e1)) continue;
            let t = (e1.getAttribute("aria-label") || "").toLowerCase();
            ("number" === e1.type || t.includes("year")) && g.push(e1);
        }
    }
    let b = g[0];
    if (b) {
        let e1 = b.closest(".rbgmcb") || b.closest('[jsname="wSASue"]') || b.parentElement;
        a({
            label: "Start Year",
            required: !0,
            type: o.FIELD_TYPE.TEXT,
            $label: e1 || b,
            $input: b
        });
    }
    let y = e1.querySelector('div[jsname="Q4XxXe"]'), v = y?.querySelector('input[type="checkbox"]') || e1.querySelector('input[type="checkbox"][value="This is your current job"]');
    if (v) {
        let e1 = v.closest("label") || v.parentElement;
        a({
            label: "This is your current job",
            required: !1,
            type: o.FIELD_TYPE.CHECKBOX,
            $label: e1 || v,
            $input: v,
            $checkboxs: [
                v
            ],
            options: [
                "true",
                "false"
            ]
        });
    }
    let w = f[1];
    if (w) {
        let t = r1(w) || p[1] || e1.querySelector('[jsname="QBGAS"] ul[jsname="rymPhb"]') || N(w), i = t ? n(t) : [], l = w.closest('[jsname="wSASue"]') || w.parentElement;
        a({
            label: "End Month",
            required: !1,
            type: o.FIELD_TYPE.SELECT,
            $label: l || w,
            $input: w,
            options: i
        });
    }
    let S = g[1];
    if (S) {
        let e1 = S.closest(".rbgmcb") || S.closest('[jsname="kjzUhc"]') || S.parentElement;
        a({
            label: "End Year",
            required: !1,
            type: o.FIELD_TYPE.TEXT,
            $label: e1 || S,
            $input: S
        });
    }
    let E = c.find((r1)=>{
        let n = r1.closest('[jsname="wSASue"]') || r1.parentElement || e1, o = C(t(r1, n));
        return D(r1, n, o);
    }) || e1.querySelector('[role="combobox"][aria-label="Country / Region"]') || c.find((e1)=>{
        let r1 = e1.closest('[jsname="wSASue"]') || e1.parentElement;
        return "Country / Region" === C(t(e1, r1));
    });
    if (E) {
        let e1 = E.closest('[jsname="wSASue"]') || E.parentElement;
        a({
            label: "Country / Region",
            required: !1,
            type: o.FIELD_TYPE.SELECT,
            $label: e1 || E,
            $input: E,
            options: []
        });
    }
    let x = e1.querySelector('input[aria-label="City"]');
    if (x) {
        let e1 = x.closest(".rbgmcb") || x.parentElement;
        a({
            label: "City",
            required: !1,
            type: o.FIELD_TYPE.TEXT,
            $label: e1 || x,
            $input: x
        });
    }
    let A = e1.querySelector('input[aria-label="State"]'), k = c.find((e1)=>{
        if (e1 === m || e1 === w || e1 === E) return !1;
        let r1 = e1.closest('[jsname="wSASue"]') || e1.parentElement, n = C(t(e1, r1));
        return "State / province" === n || "State" === n;
    });
    if (k && P(k)) {
        let e1 = k.closest('[jsname="wSASue"]') || k.parentElement, t = r1(k) || M(k), i = t ? n(t) : [];
        a({
            label: "State / province",
            required: !1,
            type: o.FIELD_TYPE.SELECT,
            $label: e1 || k,
            $input: k,
            options: i
        });
    } else if (A && P(A)) {
        let e1 = A.closest(".rbgmcb") || A.parentElement;
        a({
            label: "State",
            required: !1,
            type: o.FIELD_TYPE.TEXT,
            $label: e1 || A,
            $input: A
        });
    }
    return i;
}
function en() {
    return [
        {
            label: "Employer name",
            required: !0,
            type: o.FIELD_TYPE.TEXT
        },
        {
            label: "Job title",
            required: !0,
            type: o.FIELD_TYPE.TEXT
        },
        {
            label: "Start Month",
            required: !0,
            type: o.FIELD_TYPE.SELECT,
            options: []
        },
        {
            label: "Start Year",
            required: !0,
            type: o.FIELD_TYPE.TEXT
        },
        {
            label: "This is your current job",
            required: !1,
            type: o.FIELD_TYPE.CHECKBOX,
            options: [
                "true",
                "false"
            ]
        },
        {
            label: "End Month",
            required: !1,
            type: o.FIELD_TYPE.SELECT,
            options: []
        },
        {
            label: "End Year",
            required: !1,
            type: o.FIELD_TYPE.TEXT
        },
        {
            label: "Country / Region",
            required: !1,
            type: o.FIELD_TYPE.SELECT,
            options: []
        },
        {
            label: "City",
            required: !1,
            type: o.FIELD_TYPE.TEXT
        },
        {
            label: "State",
            required: !1,
            type: o.FIELD_TYPE.TEXT
        }
    ];
}
function eo(e1) {
    try {
        let t = e1.querySelector(J);
        if (t) {
            let e1 = Array.from(t.querySelectorAll(":scope > li"));
            if (e1.length > 0) return e1;
        }
    } catch  {}
    let t = Array.from(e1.querySelectorAll("li.SQdjAf"));
    return t.length > 0 ? t : Array.from(e1.querySelectorAll('li[jsname="xb1Cqe"]'));
}
function ei() {
    let e1 = x(), t = Z(e1);
    if (!t) return [];
    let r1 = eo(t);
    if (0 === r1.length) return [];
    let n = [], i = (e1, t)=>Y(e1, t);
    for (let e1 of r1){
        let t = er(e1, i, R, L);
        if (t.length > 0) {
            let e1 = t[0];
            n.push({
                type: o.FIELD_TYPE.EMPLOYMENT,
                label: "Work experience",
                required: !0,
                children: t,
                $input: e1?.$input
            });
        }
    }
    return n;
}
function ea(e1, t) {
    let r1 = B(e1);
    if (!r1) return;
    let n = e1.closest('[jsname="vhZMvf"]') || e1.closest(".Ufn6O") || e1.parentElement, i = e1.hasAttribute("required") || "true" === e1.getAttribute("aria-required"), a = (0, s.getGoogleFieldDescription)(r1);
    t.push({
        label: r1,
        required: !!i,
        type: o.FIELD_TYPE.TEXT,
        $label: n || e1,
        $input: e1,
        ...a ? {
            description: a
        } : {}
    });
}
async function el(e1 = {}) {
    let t = !1 !== e1.eagerSelectOptions, r1 = !0 === e1.silentLog;
    await m();
    let n = x(), a = [], c = Q(n), p = Z(n), h = n.querySelectorAll('[role="radiogroup"]');
    for (let e1 of h){
        let t = e1;
        if (!P(t)) continue;
        let r1 = t.getAttribute("jsdata"), n = t.getAttribute("aria-label") || "", i = C(r1 || n);
        if (!i && t.closest(".c62Bcc")) {
            let e1 = t.previousElementSibling;
            e1?.classList.contains("DXNg3e") && (i = C(e1.textContent || ""));
        }
        if (!i && t.closest('[jsname="GZu8wc"]')) {
            let e1 = t.previousElementSibling;
            e1?.classList.contains("fqPzXd") && (i = C(e1.textContent || ""));
        }
        t.closest('[jsname="okRaaf"]') && (n || "").toLowerCase().includes("alphabet") && (i = "Have you worked at Alphabet before?");
        let l = n.trim().toLowerCase();
        if ("gender radio input" === l ? i = "Gender" : "veteran status radio input" === l ? i = "Veteran status" : "disability radio input" === l && (i = "Disability"), U(i)) {
            let e1 = q(t);
            e1 && (i = e1);
        }
        if (!i) continue;
        let s = t.querySelectorAll('input[type="radio"]');
        if (0 === s.length) continue;
        let u = [], c = [];
        if (s.forEach((e1)=>{
            let t = e1;
            if (!P(t)) return;
            let r1 = t.value?.trim(), n = B(t), o = n || r1 || "";
            o && u.push(o), c.push(t);
        }), 0 === u.length) continue;
        let d = "true" === t.getAttribute("aria-required");
        a.push({
            label: i,
            required: d,
            type: o.FIELD_TYPE.RADIOGROUP,
            $label: t,
            $input: c[0],
            $radioParent: t,
            options: u
        });
    }
    let g = Array.from(n.querySelectorAll('div[role="combobox"][jsname="oYxtQd"], [role="combobox"]'));
    for(let e1 = 0; e1 < g.length; e1++){
        let r1 = g[e1];
        if (!P(r1) || c && c.contains(r1) || p && p.contains(r1)) continue;
        if ("INPUT" === r1.tagName && "list" === r1.getAttribute("aria-autocomplete")) {
            let e1 = (r1.getAttribute("aria-label") ?? "").trim().toLowerCase();
            if ("state / province" !== e1 && "state" !== e1) {
                ea(r1, a);
                continue;
            }
        }
        let n = r1.closest('[jsname="wSASue"]') || r1.parentElement;
        if (!n) continue;
        let d = Y(r1, n);
        r1.closest('[jsname="hcMhFd"]') && (d = "Preferred Location");
        let f = D(r1, n, d);
        if (A(d) || f) {
            let t = "true" === r1.getAttribute("aria-required"), i = {
                label: A(d) ? d : "Country / Region",
                required: !!t,
                type: o.FIELD_TYPE.SELECT,
                $label: n,
                $input: r1,
                options: []
            };
            i.scope = `country:${e1}`, a.push(i);
            continue;
        }
        let m = r1.getAttribute("aria-controls"), h = R(r1), b = h ? L(h) : [];
        if (0 === b.length) {
            let e1 = n.parentElement, t = e1?.querySelector(`ul[jsname="${u}"][role="listbox"]`);
            t && (b = L(t));
        }
        if ((!h || 0 === b.length) && ("State / province" === d || "state / province" === C(d || ""))) {
            let e1 = M(r1);
            e1 && (b = L(h = e1));
        }
        if (t && 0 === b.length && m) {
            try {
                r1.focus(), r1.click();
                let e1 = "State / province" === d || "state / province" === C(d || "");
                (h = await (0, l.default)(()=>R(r1) || (e1 ? M(r1) : null), ()=>!1, 25)) && (b = L(h));
            } catch  {}
            try {
                r1.dispatchEvent(new KeyboardEvent("keydown", {
                    key: "Escape",
                    bubbles: !0
                })), r1.dispatchEvent(new KeyboardEvent("keyup", {
                    key: "Escape",
                    bubbles: !0
                }));
                let e1 = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                e1 && e1 !== r1 && (e1.dispatchEvent(new KeyboardEvent("keydown", {
                    key: "Escape",
                    bubbles: !0
                })), e1.dispatchEvent(new KeyboardEvent("keyup", {
                    key: "Escape",
                    bubbles: !0
                }))), r1.blur();
            } catch  {}
            if ("true" === r1.getAttribute("aria-expanded")) {
                try {
                    let e1 = document.documentElement || document.body;
                    e1.dispatchEvent(new MouseEvent("mousedown", {
                        bubbles: !0
                    })), e1.dispatchEvent(new MouseEvent("mouseup", {
                        bubbles: !0
                    })), e1.dispatchEvent(new MouseEvent("click", {
                        bubbles: !0
                    }));
                } catch  {}
                if (await (0, i.delay)(40), "true" === r1.getAttribute("aria-expanded")) {
                    try {
                        r1.click();
                    } catch  {}
                    await (0, i.delay)(40);
                    try {
                        r1.dispatchEvent(new KeyboardEvent("keydown", {
                            key: "Escape",
                            bubbles: !0
                        })), r1.dispatchEvent(new KeyboardEvent("keyup", {
                            key: "Escape",
                            bubbles: !0
                        })), r1.blur();
                    } catch  {}
                }
            }
            await (0, i.delay)(80);
        }
        let y = "true" === r1.getAttribute("aria-required"), v = (0, s.getGoogleFieldDescription)(d || "Combobox");
        a.push({
            label: d || "Combobox",
            required: !!y,
            type: o.FIELD_TYPE.SELECT,
            $label: n,
            $input: r1,
            options: b,
            ...v ? {
                description: v
            } : {}
        });
    }
    let b = n.querySelectorAll('input[jsname="YPqjbf"]:not([type="radio"]):not([type="checkbox"]), textarea[jsname="YPqjbf"]');
    for (let e1 of b){
        let t = e1;
        if (!P(t) || c && c.contains(t) || p && p.contains(t)) continue;
        let r1 = B(t);
        if (!r1) continue;
        let n = t.closest('[jsname="vhZMvf"]') || t.closest(".Ufn6O") || t.parentElement, i = t.hasAttribute("required") || "true" === t.getAttribute("aria-required"), l = (0, s.getGoogleFieldDescription)(r1);
        a.push({
            label: r1,
            required: !!i,
            type: o.FIELD_TYPE.TEXT,
            $label: n || t,
            $input: t,
            ...l ? {
                description: l
            } : {}
        });
    }
    let y = n.querySelectorAll('input[type="checkbox"][jsname="YPqjbf"]'), v = n.querySelector('ul[jsname="qQ26Uc"][aria-multiselectable="true"]') || document.querySelector('ul[jsname="qQ26Uc"][aria-multiselectable="true"]'), w = n.querySelector('ul[jsname="zjZ4Tc"][aria-multiselectable="true"]') || document.querySelector('ul[jsname="zjZ4Tc"][aria-multiselectable="true"]'), S = new Set, E = new Set, k = new Set, T = new Map;
    for (let e1 of Array.from(y)){
        let t = e1;
        if (!P(t)) continue;
        let r1 = B(t);
        if (!r1 || !r1.includes(" for question:")) continue;
        let n = r1.indexOf(" for question:"), o = r1.slice(0, n).trim(), i = C(r1.slice(n + 14)), a = /\s*required\.?\s*$/i.test(i), l = i.replace(/\s*required\.?\s*$/i, "").trim();
        if (!l || !o) continue;
        let s = T.get(l);
        s ? (s.options.includes(o) || s.options.push(o), s.inputs.push(t), a && (s.requiredFromLabel = !0)) : T.set(l, {
            options: [
                o
            ],
            inputs: [
                t
            ],
            requiredFromLabel: a || void 0
        }), k.add(t);
    }
    for (let [e1, { options: t, inputs: r1, requiredFromLabel: n }] of T){
        if (0 === r1.length) continue;
        let i = r1.some((e1)=>"true" === e1.getAttribute("aria-required")) || !!n || H(r1[0]);
        a.push({
            label: e1,
            required: i,
            type: o.FIELD_TYPE.CHECKBOX,
            $label: r1[0].closest("label") || r1[0].parentElement,
            $input: r1[0],
            $checkboxs: r1,
            options: t
        });
    }
    for (let e1 of y){
        let t = e1;
        if (!P(t) || c && c.contains(t) || p && p.contains(t)) continue;
        if (v?.contains(t)) {
            S.add(t);
            continue;
        }
        if (w?.contains(t)) {
            E.add(t);
            continue;
        }
        if (k.has(t)) continue;
        let r1 = t.closest("div.PukFX");
        if (r1) {
            let e1 = r1.querySelector("h2.yEACXb");
            if (e1 && /r[e\u00e9]sum[e\u00e9]/i.test(C(e1.textContent || ""))) {
                let e1 = (t.value ?? "").trim().toLowerCase(), r1 = (B(t) ?? "").toLowerCase();
                if ("autofill" === e1 || r1.includes("fill out your application") || r1.includes("r\xe9sum\xe9 information")) continue;
            }
        }
        let n = B(t);
        if (!n) continue;
        let i = t.id ? C(document.querySelector(`label[for="${"undefined" != typeof CSS && CSS.escape ? CSS.escape(t.id) : t.id.replace(/["\\]/g, "\\$&")}"]`)?.textContent ?? "") : "", l = (n + " " + i).trim() || n;
        if (t.closest("div.C9KZ4d")) {
            let e1 = l.toLowerCase();
            (e1.includes("privacy") || e1.includes("consent") || e1.includes("applicant and candidate")) && (n = "Privacy policy consent");
        }
        (l || "").toLowerCase().includes("consent") && ((l || "").toLowerCase().includes("self-identification") || (l || "").toLowerCase().includes("voluntary")) && (n = "Consent terms");
        let s = (l || "").toLowerCase(), u = s.includes("privacy") && s.includes("consent") || s.includes("applicant and candidate privacy") || s.includes("hereby certify") && s.includes("true and accurate") || s.includes("consent") && (s.includes("self-identification") || s.includes("voluntary")), d = t.closest("label") || t.parentElement;
        a.push({
            label: n,
            required: u || H(t),
            type: o.FIELD_TYPE.CHECKBOX,
            $label: d || t,
            $input: t,
            $checkboxs: [
                t
            ],
            options: [
                "true",
                "false"
            ]
        });
    }
    if (v && (r1 || 0 === S.size)) {
        let e1 = v.querySelectorAll('input[type="checkbox"][jsname="YPqjbf"]');
        for (let t of e1){
            let e1 = t;
            (r1 || P(e1)) && S.add(e1);
        }
    }
    if (w && 0 === E.size) {
        let e1 = w.querySelectorAll('input[type="checkbox"][jsname="YPqjbf"]');
        for (let t of e1){
            let e1 = t;
            P(e1) && E.add(e1);
        }
    }
    if (v && S.size > 0) {
        let e1 = Array.from(S), t = [];
        for (let r1 of e1){
            let e1 = r1.closest('li[role="option"]'), n = (e1?.getAttribute("data-display-name") || r1.value || "").trim() || (e1?.querySelector(`[${d}="${f}"]`)?.textContent ?? "").trim();
            t.push(n || "Unknown");
        }
        a.push({
            label: "Additional location(s)",
            required: !1,
            type: o.FIELD_TYPE.CHECKBOX,
            $label: v,
            $input: e1[0],
            $checkboxs: e1,
            options: t
        });
    }
    if (w && E.size > 0) {
        let e1 = Array.from(E), t = [];
        for (let r1 of e1){
            let e1 = r1.closest('li[role="option"]'), n = (e1?.querySelector(`[${d}="${f}"]`)?.textContent ?? "").trim() || (e1?.getAttribute("aria-label") || r1.value || "").trim();
            t.push(n || "Unknown");
        }
        a.push({
            label: "Race / ethnic group",
            required: !0,
            type: o.FIELD_TYPE.CHECKBOX,
            $label: w,
            $input: e1[0],
            $checkboxs: e1,
            options: t
        });
    }
    if (c) {
        let e1 = c.querySelector("li.VdMCtc") || c.querySelector('li[jsname="lVns0"]') || (c.querySelector('[jsname="ouDqDb"]') ? c : null);
        if (e1) {
            let r1 = await ee(e1, (e1, t)=>Y(e1, t), R, L, t);
            r1.length > 0 && a.push({
                type: o.FIELD_TYPE.EDUCATION,
                label: "Education",
                required: !0,
                children: r1
            });
        }
    }
    if (p) {
        let e1 = ei(), r1 = en(), n = e1[0]?.children ?? r1, i = new Map;
        r1.forEach((e1)=>i.set(e1.label, {
                ...e1
            })), n.forEach((e1)=>i.set(e1.label, e1)), n = r1.map((e1)=>i.get(e1.label) ?? e1);
        let l = (e1)=>{
            let t = R(e1);
            if (t) return t;
            let r1 = e1.closest('[jsname="wSASue"]'), n = r1?.querySelector(`ul[jsname="${u}"][role="listbox"]`);
            return n || N(e1);
        }, s = n.find((e1)=>"End Month" === e1.label);
        if (s?.$input && (!s.options || 0 === s.options.length)) {
            let e1 = s.$input.closest('[jsname="QBGAS"]'), r1 = e1?.querySelector(`ul[jsname="${u}"][role="listbox"]`);
            if (r1) {
                let e1 = L(r1);
                e1.length && (s.options = e1);
            }
            t && !s.options?.length && (s.options = await $(s.$input, l, L));
        }
        let c = n.find((e1)=>"Start Month" === e1.label);
        t && c?.$input && (!c.options || 0 === c.options.length) && (c.options = await $(c.$input, l, L)), s && (!s.options || 0 === s.options.length) && c?.options?.length && (s.options = [
            ...c.options
        ]);
        let d = n.find((e1)=>"State / province" === e1.label);
        t && d?.$input && (!d.options || 0 === d.options.length) && (d.options = await $(d.$input, l, L)), n.length > 0 && a.push({
            type: o.FIELD_TYPE.EMPLOYMENT,
            label: "Work experience",
            required: !0,
            children: n
        });
    }
    let F = new Set, I = a.filter((e1)=>{
        let t = e1.scope || "", r1 = `${e1.type}:${e1.label.toLowerCase()}:${t}`;
        return !F.has(r1) && (F.add(r1), !0);
    });
    return I;
}
function es(e1) {
    try {
        let t = e1;
        if (e1.type === o.FIELD_TYPE.TEXT && t.$input) {
            let e1 = t.$input;
            return e1?.value ?? "";
        }
        if (e1.type === o.FIELD_TYPE.SELECT && t.$input) {
            let r1 = t.$input, n = r1.closest('[jsname="wSASue"]') || r1.parentElement, o = r1.querySelector('[jsname="Fb0Bif"]') || n?.querySelector('[jsname="Fb0Bif"]'), i = C(o?.textContent ?? ""), a = i.toLowerCase(), l = C(e1.label ?? "").toLowerCase();
            if (!i) return "";
            return a === l ? "" : i;
        }
        if (e1.type === o.FIELD_TYPE.RADIOGROUP && t.$radioParent) {
            let r1 = Array.from(t.$radioParent.querySelectorAll('input[type="radio"]')), n = r1.find((e1)=>e1.checked);
            if (!n) return "";
            let o = e1.options, i = r1.indexOf(n);
            if (o && i >= 0 && i < o.length) return o[i];
            let a = B(n);
            if (a) return a;
            return n.value ?? "";
        }
        if (e1.type === o.FIELD_TYPE.CHECKBOX && t.$checkboxs?.length) {
            let r1 = e1.options;
            if (r1?.length && "true" !== r1[0] && "false" !== r1[0]) {
                let e1 = [];
                return t.$checkboxs.forEach((t, n)=>{
                    let o = t, i = o.closest('li[role="option"]'), a = o.checked || "true" === o.getAttribute("aria-checked") || i?.getAttribute("aria-selected") === "true";
                    a && r1[n] && e1.push(r1[n]);
                }), e1.join(", ");
            }
            return t.$checkboxs[0].checked ? "true" : "false";
        }
    } catch  {}
    return "";
}
function eu(e1, t) {
    if (0 === e1.length || 0 === t.length) return !1;
    let r1 = (e1)=>{
        let t = String(e1 ?? "").trim().toLowerCase();
        return "true" === t || "yes" === t || "1" === t || "y" === t;
    }, n = (e1)=>"" !== String(e1 ?? "").trim();
    for(let o = 0; o < t.length; o++){
        let i = t[o], a = e1[o] ?? {}, l = (i.children ?? []).filter((e1)=>!!e1?.label);
        if (0 === l.length) return !1;
        let s = l.filter((e1)=>!0 === e1.required), u = s.length > 0 ? s : l, c = r1(a["This is your current job"]);
        for (let e1 of u){
            let t = e1.label;
            if (t && (!c || "End Month" !== t && "End Year" !== t)) {
                if ("State" === t || "State / province" === t) {
                    if (n(a.State) || n(a["State / province"])) continue;
                    return !1;
                }
                if (!n(a[t])) return !1;
            }
        }
    }
    return !0;
}
async function ec(e1 = !0) {
    let t = await et(e1);
    return t.length ? t.map((e1)=>{
        let t = {};
        return e1.children?.forEach((e1)=>{
            t[e1.label] = es(e1);
        }), t;
    }) : [];
}
function ed() {
    let e1 = ei();
    return e1.length ? e1.map((e1)=>{
        let t = {};
        return e1.children?.forEach((e1)=>{
            t[e1.label] = es(e1);
        }), t;
    }) : [];
}
async function ef(e1) {
    let t = {};
    for (let r1 of e1)try {
        if (r1.type === o.FIELD_TYPE.EMPLOYMENT || r1.type === o.FIELD_TYPE.EDUCATION) continue;
        t[r1.label] = es(r1);
    } catch (e1) {
        t[r1.label] = "";
    }
    return t;
}
function ep(e1) {
    let t = (e1.textContent || "").trim().toLowerCase(), r1 = (e1.getAttribute("aria-label") || "").toLowerCase();
    return !!(t.includes("next") || r1.includes("next") || t.includes("continue") || r1.includes("continue") || t.includes("submit") || r1.includes("submit"));
}
function em(e1) {
    if ("BUTTON" === e1.tagName) return ep(e1);
    if ("button" === e1.getAttribute("role")) {
        let t = (e1.getAttribute("jsname") || "").toLowerCase();
        if ("ocpkoe" === t || "m2uyvd" === t) return !0;
        let r1 = (e1.textContent || "").trim().toLowerCase(), n = (e1.getAttribute("aria-label") || "").toLowerCase();
        return r1.includes("next") || r1.includes("continue") || n.includes("next") || n.includes("continue") || r1.includes("submit") || n.includes("submit") || "apply" === r1 || "apply" === n;
    }
    return !1;
}
function eh() {
    return y().idx;
}
function eg(e1) {
    let t = e1.querySelector('button[aria-label="Next"]') ?? e1.querySelector('button[jsname="OCpkoe"]') ?? e1.querySelector('div[role="button"][jsname="OCpkoe"]') ?? Array.from(e1.querySelectorAll("button")).find((e1)=>P(e1) && "next" === (e1.textContent || "").trim().toLowerCase()) ?? null;
    if (t && P(t)) return t;
    let r1 = e1.querySelector('button[aria-label*="Submit profile"]') ?? e1.querySelector('div[role="button"][aria-label*="Submit profile"]') ?? null;
    if (r1 && P(r1)) return r1;
    let n = e1.querySelector('button[aria-label="Apply"]') ?? e1.querySelector('div[role="button"][aria-label="Apply"]') ?? null;
    if (n && P(n)) return n;
    let o = e1.querySelector('button[jsname="M2UYVd"]') ?? e1.querySelector('div[role="button"][jsname="M2UYVd"]') ?? Array.from(e1.querySelectorAll("button")).find((e1)=>{
        if (!P(e1) || "gQ2Xie" === e1.getAttribute("jsname")) return !1;
        let t = (e1.textContent || "").toLowerCase(), r1 = (e1.getAttribute("aria-label") || "").toLowerCase();
        return t.includes("submit") || r1.includes("submit") || "apply" === t || "apply" === r1;
    }) ?? null;
    if (o && P(o)) return o;
    let i = e1.querySelector('div[role="button"][aria-label*="Submit"], div[role="button"][aria-label*="submit"]');
    return i && P(i) ? i : null;
}
function eb(e1) {
    let t = e1.getBoundingClientRect();
    return t.top < window.innerHeight && t.bottom > 0;
}
function ey() {
    let e1 = [
        (e1)=>"next" === e1,
        (e1)=>e1.includes("submit profile") || e1.includes("submit profile & continue"),
        (e1)=>"apply" === e1
    ], t = (e1)=>"back" === e1 || "save" === e1 || "cancel" === e1 || e1.includes("cancel editing") || e1.includes("back to careers profile"), r1 = [], n = document.querySelectorAll("button"), o = document.querySelectorAll('div[role="button"]');
    for (let i of [
        ...Array.from(n),
        ...Array.from(o)
    ]){
        if (!P(i)) continue;
        let n = i.getBoundingClientRect();
        if (n.top >= window.innerHeight || n.bottom <= 0) continue;
        let o = (i.getAttribute("aria-label") || "").trim().toLowerCase();
        if (!o || t(o)) continue;
        let a = e1.some((e1)=>e1(o));
        a && r1.push(i);
    }
    if (0 === r1.length) return null;
    r1.sort((e1, t)=>t.getBoundingClientRect().top - e1.getBoundingClientRect().top);
    let i = (e1)=>"next" === e1 || e1.includes("submit profile") || e1.includes("submit profile & continue"), a = r1.filter((e1)=>i((e1.getAttribute("aria-label") || "").trim().toLowerCase()));
    return a.length > 0 ? a[0] : r1[0];
}
function ev() {
    let e1 = [
        ".Rwgx2d",
        ".dWXgBe",
        ".wvIRqb",
        ".fg78g",
        ".ltQAf",
        ".gFnO5d"
    ], t = [];
    for (let r1 of e1)document.querySelectorAll(r1).forEach((e1)=>{
        P(e1) && eb(e1) && t.push(e1);
    });
    return 0 === t.length ? null : (t.sort((e1, t)=>t.getBoundingClientRect().top - e1.getBoundingClientRect().top), t[0]);
}
function ew(e1) {
    let t = e1.querySelector('button[aria-label="Next"]') ?? e1.querySelector('button[jsname="OCpkoe"]') ?? e1.querySelector('div[role="button"][jsname="OCpkoe"]');
    return !!(t && P(t));
}
function eS() {
    let e1 = [
        ".Rwgx2d",
        ".dWXgBe",
        ".wvIRqb",
        ".fg78g",
        ".ltQAf",
        ".gFnO5d"
    ], t = [];
    for (let r1 of e1)document.querySelectorAll(r1).forEach((e1)=>{
        P(e1) && eb(e1) && t.push(e1);
    });
    if (0 === t.length) return null;
    t.sort((e1, t)=>t.getBoundingClientRect().top - e1.getBoundingClientRect().top);
    let r1 = t.find((e1)=>ew(e1));
    return r1 || t[0];
}
function eE(e1) {
    let t = (e1.textContent || "").toLowerCase(), r1 = (e1.getAttribute("aria-label") || "").toLowerCase();
    return !!(t.includes("continue") || r1.includes("continue") || (t.includes("next") || r1.includes("next")) && !t.includes("submit") && !r1.includes("submit") || (t.includes("submit") || r1.includes("submit")) && (t.includes("continue") || r1.includes("continue")));
}
function ex() {
    let e1 = Array.from(document.querySelectorAll("button")).filter((e1)=>P(e1) && ep(e1) && "gQ2Xie" !== e1.getAttribute("jsname")), t = Array.from(document.querySelectorAll('div[role="button"]')).filter((e1)=>P(e1) && em(e1) && "geghkb" !== (e1.getAttribute("jsname") || "").toLowerCase()), r1 = [
        ...e1,
        ...t
    ], n = r1.filter((e1)=>{
        let t = e1.getBoundingClientRect();
        return t.top < window.innerHeight && t.bottom > 0;
    });
    if (0 === n.length) return null;
    n.sort((e1, t)=>t.getBoundingClientRect().top - e1.getBoundingClientRect().top);
    let o = n.filter((e1)=>eE(e1));
    return o.length > 0 ? o[0] : n[0];
}
function eC(e1) {
    let t = e1.toLowerCase();
    return /review\s*&\s*apply|review\s+and\s+apply/.test(t) || t.includes("review") && t.includes("apply");
}
function eA(e1, t) {
    return e1 && (t || "apply" !== (e1.getAttribute("aria-label") || "").trim().toLowerCase()) ? e1 : null;
}
function ek() {
    let e1 = ej(), t = eC(e1), r1 = ey(), n = eA(r1, t);
    if (n) return n;
    let o = t ? ev() : eS();
    if (o) {
        let e1 = eg(o), r1 = eA(e1, t);
        if (r1) return r1;
    }
    let i = ex(), a = eA(i, t);
    if (a) return a;
    let l = e1.toLowerCase();
    if (!l.includes("careers profile")) {
        let e1 = document.querySelectorAll(".Rwgx2d"), r1 = document.querySelectorAll(".dWXgBe");
        for (let n of [
            ...e1,
            ...r1
        ]){
            if (!P(n)) continue;
            let e1 = eg(n), r1 = eA(e1, t);
            if (r1) return r1;
        }
    }
    let s = Array.from(document.querySelectorAll('button[jsname="M2UYVd"]')).concat(Array.from(document.querySelectorAll("button")).filter((e1)=>(e1.getAttribute("aria-label") || "").toLowerCase().includes("submit profile"))), u = s.find((e1)=>P(e1)), c = eA(u ?? null, t);
    if (c) return c;
    let d = document.querySelectorAll(".wvIRqb");
    for (let e1 of d){
        let r1 = e1.querySelector('button[jsname="M2UYVd"]') ?? e1.querySelector('button[aria-label*="Submit profile"]'), n = eA(r1 && P(r1) ? r1 : null, t);
        if (n) return n;
    }
    let f = Array.from(document.querySelectorAll("button")).filter((e1)=>P(e1) && ep(e1) && "gQ2Xie" !== e1.getAttribute("jsname")), p = f.find((e1)=>{
        let t = (e1.textContent || "").toLowerCase(), r1 = (e1.getAttribute("aria-label") || "").toLowerCase();
        return (t.includes("next") || t.includes("continue") || r1.includes("next") || r1.includes("continue")) && !t.includes("submit") && !r1.includes("submit");
    }), m = eA(p ?? null, t);
    if (m) return m;
    let h = f.find((e1)=>(e1.getAttribute("aria-label") || "").toLowerCase().includes("submit") || (e1.textContent || "").toLowerCase().includes("submit")), g = h ?? f[0] ?? null;
    return eA(g, t);
}
function eT(e1) {
    if (!e1 || !(e1 instanceof HTMLElement)) return !1;
    let t = ek();
    if (t && (t === e1 || t.contains(e1))) return !0;
    let r1 = e1.closest?.("button");
    if (r1) return "gQ2Xie" !== r1.getAttribute("jsname") && ep(r1);
    let n = e1.closest?.('div[role="button"]');
    return !!n && n.getAttribute("jsname")?.toLowerCase() !== "geghkb" && em(n);
}
function eF() {
    return y().idx;
}
function eI() {
    return eF();
}
function ej(e1) {
    let t = e1 ?? document.body, r1 = t.querySelectorAll("div.PukFX");
    for (let e1 of r1){
        let t = e1.querySelector("h2.yEACXb");
        if (!t) continue;
        let r1 = window.getComputedStyle(t);
        if ("none" === r1.display || "hidden" === r1.visibility) continue;
        let n = t.getBoundingClientRect();
        if (n.width > 0 && n.height > 0) return (t.textContent ?? "").replace(/\s+/g, " ").trim();
    }
    if (t.querySelector("div.xBCDBe.kAZple") || t.querySelector("div.xBCDBe")) return "EEO";
    let n = t.querySelector("h1") || t.querySelector("h2"), o = (n?.textContent ?? "").toLowerCase();
    if (/voluntary|self-identification/.test(o)) return "EEO";
    if (t.querySelector("div.C9KZ4d")) return "Consent";
    let { selectedTab: i } = y(t);
    if (i) {
        let e1 = (i.getAttribute("aria-label") ?? "").trim(), t = e1.replace(/^Step\s*\d+\s*-\s*/i, "").trim();
        if (t) return t;
        let r1 = i.querySelector("span.JjWAne"), n = (r1?.textContent ?? "").replace(/\s+/g, " ").trim();
        if (n) return n;
    }
    return "";
}
async function eD(e1, t, r1) {
    let n = (e1)=>!e1.disabled && "true" !== e1.getAttribute("aria-disabled");
    if (n(e1)) return e1;
    let o = Date.now() + t;
    for(; Date.now() < o && (await (0, i.delay)(r1), e1.isConnected);)if (n(e1)) return e1;
    return null;
}
async function eP(e1, t, r1) {
    await (0, i.delay)(800);
    let n = Date.now() + t;
    for(; Date.now() < n;){
        let t = ej();
        if ("" !== t && t !== e1) return !0;
        await (0, i.delay)(r1);
    }
    return !1;
}
function e_() {
    return "docs.google.com" === window.location.hostname && window.location.pathname.startsWith("/forms/");
}
async function eL() {
    let e1 = [];
    await (0, i.delay)(500);
    let t = document.querySelectorAll('div[jsname="WsjYwc"], div.geS5n');
    for (let r1 of t){
        let t = r1;
        if (!P(t)) continue;
        let n = t.querySelector("span.M7eMe"), i = C(n?.textContent || "");
        if (!i) continue;
        let a = !!t.querySelector("span.vnumgf") || null !== t.querySelector('[aria-required="true"]'), l = t.querySelector("div.bj084d");
        if (l) continue;
        let s = t.querySelector('[role="radiogroup"]');
        if (s) {
            let r1 = Array.from(s.querySelectorAll('[role="radio"]')), l = [];
            for (let e1 of r1){
                let t = (e1.getAttribute("aria-label") || e1.getAttribute("data-value") || "").trim();
                t && l.push(t);
            }
            e1.push({
                label: i,
                required: a,
                type: o.FIELD_TYPE.RADIOGROUP,
                $label: n || t,
                $input: r1[0] || s,
                $radioParent: s,
                options: l
            });
            continue;
        }
        let u = Array.from(t.querySelectorAll('[role="checkbox"]'));
        if (u.length > 0) {
            let r1 = [];
            for (let e1 of u){
                let t = (e1.getAttribute("aria-label") || e1.getAttribute("data-value") || "").trim();
                t && r1.push(t);
            }
            e1.push({
                label: i,
                required: a,
                type: o.FIELD_TYPE.CHECKBOX,
                $label: n || t,
                $input: u[0],
                $checkboxs: u,
                options: r1
            });
            continue;
        }
        let c = t.querySelector('[role="listbox"]');
        if (c) {
            let r1 = Array.from(c.querySelectorAll('[role="option"], [data-value]')), l = [];
            for (let e1 of r1){
                let t = (e1.getAttribute("data-value") || e1.textContent || "").trim();
                t && l.push(t);
            }
            e1.push({
                label: i,
                required: a,
                type: o.FIELD_TYPE.SELECT,
                $label: n || t,
                $input: c,
                options: l
            });
            continue;
        }
        let d = t.querySelector('input[type="text"], input[type="email"], input[type="url"], input[type="tel"], input[type="number"]'), f = t.querySelector("textarea"), p = d || f;
        if (p) {
            e1.push({
                label: i,
                required: a,
                type: o.FIELD_TYPE.TEXT,
                $label: n || t,
                $input: p
            });
            continue;
        }
    }
    return e1;
}
function eR() {
    let e1 = document.querySelector('input[name="pageHistory"]')?.value || "", t = C(document.querySelector(".HZh16d")?.textContent || "");
    return `${e1}|${t}`;
}
function eO(e1) {
    if (!e1 || !(e1 instanceof HTMLElement)) return !1;
    let t = e1.closest('div[role="button"]');
    if (!t) return !1;
    let r1 = t.getAttribute("jsname") || "";
    if ("OCpkoe" === r1 || "M2UYVd" === r1) return !0;
    let n = (t.textContent || "").trim().toLowerCase();
    return !!(n.includes("next") || n.includes("\u4e0b\u4e00\u9875") || n.includes("submit") || n.includes("\u63d0\u4ea4"));
}
function eM(e1) {
    if (!e1 || !(e1 instanceof HTMLElement)) return !1;
    let t = e1.closest('div[role="button"]');
    if (!t) return !1;
    let r1 = t.getAttribute("jsname") || "";
    if ("M2UYVd" === r1) return !0;
    let n = (t.textContent || "").trim().toLowerCase(), o = (t.getAttribute("aria-label") || "").toLowerCase();
    return n.includes("submit") || n.includes("\u63d0\u4ea4") || o.includes("submit");
}
async function eN(e1, t = 6e3, r1 = 250) {
    await (0, i.delay)(300);
    let n = Date.now() + t;
    for(; Date.now() < n;){
        let t = eR();
        if (t !== e1) return !0;
        await (0, i.delay)(r1);
    }
    return !1;
}
function e$() {
    let e1 = {}, t = document.querySelectorAll('div[jsname="WsjYwc"], div.geS5n');
    for (let r1 of t){
        let t = r1.querySelector("span.M7eMe"), n = C(t?.textContent || "");
        if (!n) continue;
        let o = r1.querySelector('[role="radio"][aria-checked="true"]');
        if (o) {
            e1[n] = (o.getAttribute("aria-label") || o.getAttribute("data-value") || "").trim();
            continue;
        }
        let i = Array.from(r1.querySelectorAll('[role="checkbox"][aria-checked="true"]'));
        if (i.length > 0) {
            e1[n] = i.map((e1)=>(e1.getAttribute("aria-label") || e1.getAttribute("data-value") || "").trim()).join(", ");
            continue;
        }
        let a = r1.querySelector('input[type="text"], input[type="email"], input[type="url"], input[type="tel"], input[type="number"], textarea');
        if (a) {
            e1[n] = (a.value || "").trim();
            continue;
        }
        let l = r1.querySelector('[role="option"][aria-selected="true"]');
        l && (e1[n] = (l.getAttribute("data-value") || l.textContent || "").trim());
    }
    return e1;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20;
$RefreshReg$(_c, "S");
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
$RefreshReg$(_c19, "Q");
$RefreshReg$(_c20, "Z");

},{}]},["8c58e","5AuXb"], "5AuXb", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFnQixLQUFLO1FBQUM7UUFBRTtLQUFFLEdBQUUsQ0FBQyxLQUFHLEVBQUUsT0FBSyxFQUFFLElBQUksaUJBQWlCLFNBQVEsQ0FBQSxFQUFFLGVBQWUsS0FBSztRQUFDO1FBQUU7S0FBRSxHQUFFLENBQUMsQ0FBQSxJQUFHLENBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBQyxTQUFRLENBQUMsRUFBQyxHQUFDO0lBQUUsT0FBTyxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsSUFBRyxFQUFFLFNBQU8sUUFBTSxPQUFPLFdBQVMsS0FBSSxPQUFPLElBQUksUUFBUSxDQUFDLEdBQUU7UUFBSyxJQUFJLElBQUUsU0FBUyxjQUFjO1FBQVUsRUFBRSxNQUFJLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLEtBQUssTUFBTSxDQUFDLEVBQUMsRUFBRSxpQkFBZSxjQUFhLENBQUEsRUFBRSxPQUFLLFFBQU8sR0FBRyxFQUFFLGlCQUFpQixRQUFPLElBQUksRUFBRSxLQUFJLEVBQUUsaUJBQWlCLFNBQVEsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLDBCQUEwQixFQUFFLEVBQUUsR0FBRyxDQUFDLEtBQUksU0FBUyxNQUFNLFlBQVk7SUFBRTtBQUFFO0FBQUMsZUFBZSxFQUFFLENBQUM7SUFBRSxPQUFPLGtCQUFnQixPQUFPLE9BQU8sT0FBTSxFQUFFLFFBQVEsQ0FBQTtRQUFJLEVBQUUsTUFBSSxFQUFFLFFBQVEsT0FBTywrQkFBNkIsbUJBQW1CLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLEtBQUssTUFBTSxDQUFDO0lBQUU7SUFBRyxJQUFJLElBQUUsTUFBTSxRQUFRLElBQUksRUFBRSxJQUFJO0lBQUssSUFBRztRQUFDLEVBQUUsUUFBUSxTQUFTLENBQUM7WUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1FBQUU7SUFBRSxTQUFRO1FBQUMsT0FBTyxPQUFPLGlCQUFnQixLQUFHLEVBQUUsUUFBUSxDQUFBO1lBQUksS0FBRyxTQUFTLE1BQU0sWUFBWTtRQUFFO0lBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUU7SUFBWSxFQUFFLFNBQU87UUFBVyxFQUFFLGVBQWEsUUFBTSxFQUFFLFdBQVcsWUFBWTtJQUFFLEdBQUUsRUFBRSxhQUFhLFFBQU8sRUFBRSxhQUFhLFFBQVEsTUFBTSxJQUFJLENBQUMsRUFBRSxHQUFDLE1BQUksS0FBSyxRQUFPLEVBQUUsV0FBVyxhQUFhLEdBQUUsRUFBRTtBQUFZO0FBQUMsSUFBSSxJQUFFO0FBQUssU0FBUztJQUFLLEtBQUksQ0FBQSxJQUFFLFdBQVc7UUFBVyxJQUFJLElBQUUsU0FBUyxpQkFBaUI7UUFBMEIsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJO1lBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxTQUFRLElBQUUsS0FBSSxJQUFFLE1BQUksY0FBWSxJQUFJLE9BQU8sbURBQWlELEtBQUssS0FBSyxLQUFHLEVBQUUsUUFBUSxJQUFFLE1BQUk7WUFBSyxnQkFBZ0IsS0FBSyxNQUFJLEVBQUUsUUFBUSxTQUFTLFlBQVUsS0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUFDO1FBQUMsSUFBRTtJQUFJLEdBQUUsR0FBRTtBQUFFO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLEdBQUU7UUFBQyxJQUFHLEVBQUUsU0FBTyxPQUFNO2FBQVUsSUFBRyxFQUFFLFNBQU8sTUFBSztZQUFDLElBQUksSUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFLGNBQWM7WUFBQyxJQUFHLEdBQUU7Z0JBQUMsSUFBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUM7b0JBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO29CQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBRyxDQUFDLENBQUMsRUFBRSxFQUFDO3dCQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRTt3QkFBQyxFQUFFLE9BQU8sT0FBTyxNQUFLLEdBQUcsV0FBUyxLQUFHLEVBQUUsT0FBTyxPQUFPLE1BQUs7b0JBQUU7Z0JBQUM7Z0JBQUMsSUFBSSxJQUFFLE9BQU8sZUFBZSxDQUFDLEVBQUUsR0FBRztnQkFBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUM7b0JBQUM7b0JBQUU7aUJBQUU7WUFBQSxPQUFNLEVBQUUsVUFBUSxFQUFFLEVBQUUsUUFBTztRQUFFO0lBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFO0lBQVEsSUFBRztRQUFFLElBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBQztZQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxJQUFFLEVBQUU7WUFBQyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsT0FBTyxPQUFPLE1BQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFTLEtBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsUUFBUSxDQUFBO2dCQUFJLEVBQUUsT0FBTyxPQUFPLE1BQUs7WUFBRTtRQUFFLE9BQU0sRUFBRSxVQUFRLEVBQUUsRUFBRSxRQUFPOztBQUFFO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7SUFBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFFLEtBQUcsRUFBRSxPQUFNLENBQUEsRUFBRSxJQUFJLE9BQUssRUFBRSxPQUFPLENBQUMsRUFBRSxBQUFELEdBQUcsS0FBRyxFQUFFLE9BQUssRUFBRSxJQUFJLGtCQUFrQixVQUFRLEVBQUUsSUFBSSxrQkFBa0IsUUFBUSxTQUFTLENBQUM7UUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7SUFBQyxJQUFHLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsRUFBRTtJQUFHLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsSUFBRyxLQUFHLEVBQUUsT0FBSyxFQUFFLElBQUksaUJBQWlCLFFBQU87UUFBQyxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSztRQUFHLEVBQUUsSUFBSSxpQkFBaUIsUUFBUSxTQUFTLENBQUM7WUFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO1lBQUcsS0FBRyxFQUFFLFVBQVMsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUUsRUFBRTtnQkFBSSxFQUFFLEdBQUU7WUFBRSxJQUFHLEVBQUUsZUFBZSxLQUFLLE1BQU0sRUFBRSxnQkFBZSxFQUFDO1FBQUU7SUFBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLElBQUUsR0FBRztJQUFFLElBQUksSUFBRTtJQUFJLE9BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBUSxTQUFTLGFBQVcsWUFBVSxDQUFDLDhCQUE4QixLQUFLLEtBQUcsUUFBTSxLQUFLLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUFBO0FBQUMsU0FBUyxHQUFHLENBQUM7SUFBRSxPQUFPLEVBQUUsV0FBUyxZQUFVLEVBQUUsOEJBQTRCLEVBQUU7QUFBUTtBQUFDLFNBQVMsRUFBRSxDQUFDO0lBQUUsSUFBRyxPQUFPLFdBQVcsWUFBVSxLQUFJO0lBQU8sSUFBSSxJQUFFLElBQUksVUFBVTtJQUFNLE9BQU8sRUFBRSxpQkFBaUIsV0FBVSxlQUFlLENBQUM7UUFBRSxJQUFJLElBQUUsS0FBSyxNQUFNLEVBQUU7UUFBTSxJQUFHLEVBQUUsU0FBTyxZQUFVLE1BQU0sRUFBRSxFQUFFLFNBQVEsRUFBRSxTQUFPLFNBQVEsS0FBSSxJQUFJLEtBQUssRUFBRSxZQUFZLEtBQUs7WUFBQyxJQUFJLElBQUUsRUFBRSxhQUFXLEVBQUU7WUFBTSxFQUFFLDhCQUE0QixFQUFFLFVBQVEsQ0FBQztBQUNsM0wsQ0FBQyxHQUFDLElBQUUsQ0FBQzs7QUFFTCxDQUFDLEdBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNoQixDQUFDO1FBQUU7SUFBQyxJQUFHLEVBQUUsaUJBQWlCLFNBQVEsS0FBSSxFQUFFLGlCQUFpQixRQUFPO1FBQUssRUFBRSxDQUFDLHFEQUFxRCxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRyxFQUFFLGlCQUFpQixTQUFRO1FBQUssRUFBRSxDQUFDLG9FQUFvRSxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRztBQUFDO0FBQUMsSUFBSSxJQUFFLEVBQUUsUUFBUTtBQUEwQixlQUFlO0lBQUksRUFBRSxRQUFRLHFCQUFxQixTQUFRLE9BQU8sZUFBYSxZQUFXLEdBQUUsT0FBTyxlQUFhO1FBQVcsT0FBTyxTQUFTLENBQUM7WUFBRSxPQUFPO1FBQUM7SUFBQztBQUFDO0FBQUMsSUFBSSxLQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFDLEdBQUUsSUFBRSxPQUFPLE9BQU87QUFBTyxJQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsaUJBQWdCO0lBQUMsSUFBRztRQUFDLElBQUUsR0FBRyxRQUFRLFFBQVE7WUFBQyxNQUFLO1FBQUUsSUFBRyxFQUFFLGFBQWEsWUFBWTtZQUFLO1FBQUcsSUFBRyxFQUFFLFdBQVMsRUFBRSxVQUFVLFlBQVk7WUFBSztRQUFHO0lBQUUsRUFBQyxPQUFNLEdBQUU7UUFBQyxFQUFFO0lBQUU7SUFBQyxFQUFFLE9BQU07UUFBSSxJQUFHLEVBQUUsaUNBQWdDLEVBQUUsU0FBUTtZQUFDO1lBQUksSUFBSSxJQUFFLEVBQUUsT0FBTyxDQUFBLElBQUcsRUFBRSxZQUFVLEVBQUU7WUFBUyxJQUFHLEVBQUUsS0FBSyxDQUFBLElBQUcsRUFBRSxTQUFPLFNBQU8sRUFBRSxTQUFPLFFBQU0sRUFBRSxPQUFPLE9BQU8sTUFBSyxFQUFFLElBQUcsRUFBRSxnQkFBZSxJQUFHO2dCQUFDLE1BQU0sRUFBRTtnQkFBRyxJQUFJLElBQUUsQ0FBQztnQkFBRSxLQUFJLElBQUcsQ0FBQyxHQUFFLEVBQUUsSUFBRyxFQUFFLGdCQUFnQixDQUFDLENBQUMsRUFBRSxJQUFHLENBQUEsRUFBRSxHQUFFLElBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUE7Z0JBQUcsSUFBSSxJQUFFLENBQUM7Z0JBQUUsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsZUFBZSxRQUFPLElBQUk7b0JBQUMsSUFBRyxDQUFDLEdBQUUsRUFBRSxHQUFDLEVBQUUsY0FBYyxDQUFDLEVBQUU7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBRyxDQUFBLEVBQUUsR0FBRSxJQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFBO2dCQUFFO1lBQUMsRUFBQyxPQUFNLEdBQUU7Z0JBQUMsRUFBRSxZQUFVLFVBQVMsQ0FBQSxRQUFRLE1BQU0sSUFBRyxNQUFNLEtBQUssVUFBVSxHQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7WUFBRTtRQUFDLE9BQUs7WUFBQyxJQUFJLElBQUUsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFlBQVUsRUFBRSxTQUFTLEtBQUssQ0FBQSxJQUFHLEVBQUUsT0FBTyxRQUFPLEVBQUU7WUFBSyxFQUFFLGtCQUFpQjtnQkFBQyxlQUFjO1lBQUMsSUFBRyxLQUFHLEVBQUUsWUFBWTtnQkFBQyx5QkFBd0IsQ0FBQztZQUFDO1FBQUU7SUFBQztBQUFFO0FBQUMsRUFBRSxXQUFVLENBQUEsRUFBRSw0QkFBMkIsR0FBRTs7O0FDSjMwQyxJQUFJLEtBQUcsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxLQUFHLE9BQU87QUFBeUIsSUFBSSxLQUFHLE9BQU87QUFBb0IsSUFBSSxLQUFHLE9BQU8sZ0JBQWUsS0FBRyxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QyxFQUFHO1lBQU87UUFBUTtRQUFDLElBQUksSUFBRSxHQUFFLGNBQWM7UUFBeUMsS0FBSSxDQUFBLEVBQUMsQ0FBQyxFQUFFLEdBQUMsQUFBQyxDQUFBLEVBQUUsYUFBYSxpQkFBZSxFQUFFLGVBQWEsRUFBQyxFQUFHLE1BQUs7SUFBRTtJQUFDLE9BQU87QUFBQyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtMDQ0ZDAyMmIyMjk1MzQ0OC5qcyIsIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJlc29sdmVyL2Rpc3QvcG9seWZpbGxzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsInNyYy9jb250ZW50cy9zaXRlcy9nb29nbGUvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcZ29vZ2xlXFxcXHJ1bGVzLmpzXCIsXCJidW5kbGVJZFwiOlwiZmU2YjIzZmYwMDFlYmI2NVwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IFdueFVrXHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9nb29nbGUvcnVsZXMuanNcbiAqIERlcGVuZGVuY2llczpcclxuICogICAuL2Fuc3dlciAtPiA3bWFuTiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9nb29nbGUvYW5zd2VyLmpzXHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+Y29yZS9lbnVtcyAtPiAxTzNuYyAgPT4gIHNyYy9jb3JlL2VudW1zLmpzXHJcbiAqICAgfnV0aWxzL2RlbGF5IC0+IGFtNjE0ICA9PiAgc3JjL3V0aWxzL2RlbGF5LmpzXHJcbiAqICAgfnV0aWxzL2dldFRhcmdldE9yVGltZW91dCAtPiAxVEJoRiAgPT4gIHNyYy91dGlscy9nZXRUYXJnZXRPclRpbWVvdXQuanNcclxuICovXHJcblxyXG52YXIgbj1lKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtuLmRlZmluZUludGVyb3BGbGFnKHIpLG4uZXhwb3J0KHIsXCJMSVNUQk9YX1VMX0pTTkFNRVwiLCgpPT51KSxuLmV4cG9ydChyLFwiQVVUT0NPTVBMRVRFX0xJU1RCT1hfSlNOQU1FXCIsKCk9PmMpLG4uZXhwb3J0KHIsXCJnZXRHb29nbGVWaXNpYmxlU3RlcFN0YXRlXCIsKCk9PnkpLG4uZXhwb3J0KHIsXCJ3YWl0Rm9yR29vZ2xlUGFnZUNsZWFuXCIsKCk9PlMpLG4uZXhwb3J0KHIsXCJHb29nbGVUcmFja2luZ01hbmFnZXJcIiwoKT0+RSksbi5leHBvcnQocixcImlzQ291bnRyeUxhYmVsXCIsKCk9PkEpLG4uZXhwb3J0KHIsXCJpc0dvb2dsZVBob25lQ291bnRyeUNvZGVDb250cm9sXCIsKCk9PmspLG4uZXhwb3J0KHIsXCJpc0dvb2dsZVBob25lQ291bnRyeUNvZGVSdWxlXCIsKCk9PkYpLG4uZXhwb3J0KHIsXCJpc0dvb2dsZVBob25lTnVtYmVyUnVsZVwiLCgpPT5JKSxuLmV4cG9ydChyLFwic3RhZ2VHb29nbGVQaG9uZUNvdW50cnlDb2RlUnVsZXNcIiwoKT0+aiksbi5leHBvcnQocixcImZpbmRNYWluRm9ybVwiLCgpPT5fKSxuLmV4cG9ydChyLFwiZ2V0Q292ZXJMZXR0ZXJTdGF0dXNcIiwoKT0+Vyksbi5leHBvcnQocixcImZpbmRIaWdoZXJFZHVjYXRpb25TZWN0aW9uXCIsKCk9PlEpLG4uZXhwb3J0KHIsXCJmaW5kV29ya0V4cGVyaWVuY2VTZWN0aW9uXCIsKCk9PlopLG4uZXhwb3J0KHIsXCJnZXRIaWdoZXJFZHVjYXRpb25SdWxlc1wiLCgpPT5ldCksbi5leHBvcnQocixcImdldFdvcmtFeHBlcmllbmNlUnVsZXNcIiwoKT0+ZWkpLG4uZXhwb3J0KHIsXCJleHRyYWN0UnVsZXNcIiwoKT0+ZWwpLG4uZXhwb3J0KHIsXCJpc1N0cnVjdHVyZWRTZWN0aW9uRmlsbGVkXCIsKCk9PmV1KSxuLmV4cG9ydChyLFwiZ2V0U3RydWN0dXJlZEVkdWNhdGlvblNuYXBzaG90XCIsKCk9PmVjKSxuLmV4cG9ydChyLFwiZ2V0U3RydWN0dXJlZFdvcmtFeHBlcmllbmNlU25hcHNob3RcIiwoKT0+ZWQpLG4uZXhwb3J0KHIsXCJnZXRGb3JtU25hcHNob3RcIiwoKT0+ZWYpLG4uZXhwb3J0KHIsXCJnZXRDdXJyZW50U3RlcEluZGV4XCIsKCk9PmVoKSxuLmV4cG9ydChyLFwiZmluZFN0ZXBBZHZhbmNlQnV0dG9uXCIsKCk9PmVrKSxuLmV4cG9ydChyLFwiaXNBZHZhbmNlQnV0dG9uXCIsKCk9PmVUKSxuLmV4cG9ydChyLFwiZ2V0R29vZ2xlU3RlcEluZGV4RnJvbVZpc2libGVDb250ZW50XCIsKCk9PmVJKSxuLmV4cG9ydChyLFwiZ2V0Q3VycmVudFN0ZXBGaW5nZXJwcmludFwiLCgpPT5laiksbi5leHBvcnQocixcIndhaXRGb3JTdGVwQWR2YW5jZUJ1dHRvbkVuYWJsZWRcIiwoKT0+ZUQpLG4uZXhwb3J0KHIsXCJ3YWl0Rm9yU3RlcFRyYW5zaXRpb25cIiwoKT0+ZVApLG4uZXhwb3J0KHIsXCJpc0dvb2dsZUZvcm1zUGFnZVwiLCgpPT5lXyksbi5leHBvcnQocixcImV4dHJhY3RHb29nbGVGb3Jtc1J1bGVzXCIsKCk9PmVMKSxuLmV4cG9ydChyLFwiZ2V0Rm9ybXNQYWdlRmluZ2VycHJpbnRcIiwoKT0+ZVIpLG4uZXhwb3J0KHIsXCJpc0Zvcm1zQWR2YW5jZUJ1dHRvblwiLCgpPT5lTyksbi5leHBvcnQocixcImlzRm9ybXNTdWJtaXRCdXR0b25cIiwoKT0+ZU0pLG4uZXhwb3J0KHIsXCJ3YWl0Rm9yRm9ybXNQYWdlVHJhbnNpdGlvblwiLCgpPT5lTiksbi5leHBvcnQocixcImdldEdvb2dsZUZvcm1zU25hcHNob3RcIiwoKT0+ZSQpO3ZhciBvPWUoXCJ+Y29yZS9lbnVtc1wiKSxpPWUoXCJ+dXRpbHMvZGVsYXlcIiksYT1lKFwifnV0aWxzL2dldFRhcmdldE9yVGltZW91dFwiKSxsPW4uaW50ZXJvcERlZmF1bHQoYSkscz1lKFwiLi9hbnN3ZXJcIik7bGV0IHU9XCJyeW1QaGJcIixjPVwiaHNmakRmXCIsZD1cImpzbmFtZVwiLGY9XCJLNHI1RmZcIixwPVwieGwwN09iXCI7YXN5bmMgZnVuY3Rpb24gbShlPTZlMyl7bGV0IHQ9RGF0ZS5ub3coKSxyPSgpPT57bGV0e3N0ZXBwZXI6ZX09eSgpO3JldHVybiEhKGV8fGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuUHVrRlggaDIueUVBQ1hiXCIpfHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtqc25hbWU9XCJZUHFqYmZcIl0sIHRleHRhcmVhW2pzbmFtZT1cIllQcWpiZlwiXScpKX07Zm9yKDtEYXRlLm5vdygpLXQ8ZTspe2lmKHIoKSlyZXR1cm47YXdhaXQgKDAsaS5kZWxheSkoMjAwKX19ZnVuY3Rpb24gaChlKXtpZighZXx8IVAoZSkpcmV0dXJuITE7bGV0IHQ9ZTtmb3IoO3Q7KXtpZih0Lmhhc0F0dHJpYnV0ZShcImhpZGRlblwiKXx8dC5oYXNBdHRyaWJ1dGUoXCJpbmVydFwiKXx8XCJ0cnVlXCI9PT10LmdldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpKXJldHVybiExO2xldCBlPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpO2lmKFwibm9uZVwiPT09ZS5kaXNwbGF5fHxcImhpZGRlblwiPT09ZS52aXNpYmlsaXR5KXJldHVybiExO3Q9dC5wYXJlbnRFbGVtZW50fXJldHVybiEwfWZ1bmN0aW9uIGcoZSx0KXtpZighZSlyZXR1cm4gLTE7bGV0IHI9KGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKT8/XCJcIikudHJpbSgpLG49ci5tYXRjaCgvXlN0ZXBcXHMqKFxcZCspXFxiL2kpO2lmKG4pe2xldCBlPU51bWJlcihuWzFdKTtpZihOdW1iZXIuaXNGaW5pdGUoZSkmJmU+MClyZXR1cm4gZS0xfXJldHVybiB0LmluZGV4T2YoZSl9ZnVuY3Rpb24gYihlKXtpZighZSlyZXR1cm5cIlwiO2xldCB0PUMoZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlwiKTtpZih0KXJldHVybiB0O2xldCByPUMoZS5xdWVyeVNlbGVjdG9yKFwic3Bhbi5KaldBbmVcIik/LnRleHRDb250ZW50fHxcIlwiKTtyZXR1cm4gcnx8QyhlLnRleHRDb250ZW50fHxcIlwiKX1mdW5jdGlvbiB5KGU9ZG9jdW1lbnQpe2xldCB0PUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbcm9sZT1cInRhYmxpc3RcIl1bYXJpYS1sYWJlbD1cIkFwcGxpY2F0aW9uIHN0ZXBwZXJcIl0nKSkuZmlsdGVyKGU9PmgoZSkpLHI9dC5maW5kKGU9PmUucXVlcnlTZWxlY3RvcignYnV0dG9uW3JvbGU9XCJ0YWJcIl1bYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKSk/P3RbMF0/P251bGwsbj1yP0FycmF5LmZyb20oci5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bcm9sZT1cInRhYlwiXScpKTpbXSxvPW4uZmluZChlPT5cInRydWVcIj09PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiKSk/P251bGw7cmV0dXJue3N0ZXBwZXI6cixzZWxlY3RlZFRhYjpvLHRhYnM6bixpZHg6ZyhvLG4pLGxhYmVsOmIobyl9fWZ1bmN0aW9uIHYoZT1kb2N1bWVudCl7cmV0dXJuIHkoZSkubGFiZWx9ZnVuY3Rpb24gdyhlKXtsZXQgdD12KGUpLHI9QyhlaihlKSksbj1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImRpdi5QdWtGWCBoMi55RUFDWGJcIikpLm1hcChlPT5lKS5maWx0ZXIoZT0+UChlKSkubWFwKGU9PkMoZS50ZXh0Q29udGVudHx8XCJcIikpLmZpbHRlcihCb29sZWFuKSxvPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInJhZGlvZ3JvdXBcIl0nKSkubWFwKGU9PmUpLmZpbHRlcihlPT5QKGUpKS5sZW5ndGgsaT1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJjb21ib2JveFwiXScpKS5tYXAoZT0+ZSkuZmlsdGVyKGU9PlAoZSkpLmxlbmd0aCxhPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtqc25hbWU9XCJZUHFqYmZcIl0sIHRleHRhcmVhW2pzbmFtZT1cIllQcWpiZlwiXScpKS5tYXAoZT0+ZSkuZmlsdGVyKGU9PlAoZSkpLmxlbmd0aCxsPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKCd1bFtyb2xlPVwibGlzdGJveFwiXVthcmlhLW11bHRpc2VsZWN0YWJsZT1cInRydWVcIl0sIGRpdltyb2xlPVwiZ3JvdXBcIl0nKSkubWFwKGU9PmUpLmZpbHRlcihlPT5QKGUpKS5sZW5ndGgscz1vK2krYStsO3JldHVybihyfHx0KSYmKDAhPT1zfHwwIT09bi5sZW5ndGgpP1t0LHIsbi5qb2luKFwifFwiKSxzLnRvU3RyaW5nKCksby50b1N0cmluZygpLGkudG9TdHJpbmcoKSxhLnRvU3RyaW5nKCksbC50b1N0cmluZygpXS5qb2luKFwiOjpcIik6XCJcIn1hc3luYyBmdW5jdGlvbiBTKGU9NWUzLHQ9MjAwKXthd2FpdCBtKE1hdGgubWluKGUsNmUzKSk7bGV0IHI9RGF0ZS5ub3coKStlLG49XCJcIixvPTA7Zm9yKDtEYXRlLm5vdygpPHI7KXtsZXQgZT13KGRvY3VtZW50LmJvZHkpO2lmKGUpe2lmKGU9PT1uP28rPTE6KG49ZSxvPTEpLG8+PTMpe2F3YWl0ICgwLGkuZGVsYXkpKDMwMCk7cmV0dXJufX1lbHNlIG49XCJcIixvPTA7YXdhaXQgKDAsaS5kZWxheSkodCl9YXdhaXQgKDAsaS5kZWxheSkoMjUwKX1jbGFzcyBFe3N0YXJ0T3JSZXN1bWVSdW4oKXt0aGlzLmluUHJvZ3Jlc3N8fCh0aGlzLmxhc3RBdXRvZmlsbFNuYXBzaG90QnlGaW5nZXJwcmludD17fSx0aGlzLmxhc3RBdXRvZmlsbFN0cnVjdHVyZWRCeUZpbmdlcnByaW50PXt9LHRoaXMuaW5Qcm9ncmVzcz0hMCl9ZmluaXNoUnVuKGUpe3RoaXMuaW5Qcm9ncmVzcz0hZX1nZXRGaW5nZXJwcmludEtleShlKXtsZXQgdD0oZXx8XCJcIikudHJpbSgpO3JldHVybiB0fHxcImRlZmF1bHRcIn1yZWNvcmRBdXRvZmlsbFNuYXBzaG90KGUsdCxyKXtsZXQgbj10aGlzLmdldEZpbmdlcnByaW50S2V5KGUpO3JldHVybiB0aGlzLmxhc3RBdXRvZmlsbFNuYXBzaG90QnlGaW5nZXJwcmludFtuXT17Li4udH0sdGhpcy5sYXN0QXV0b2ZpbGxTdHJ1Y3R1cmVkQnlGaW5nZXJwcmludFtuXT1yLG59Z2V0QXV0b2ZpbGxTbmFwc2hvdChlLHQscil7cmV0dXJuIHRoaXMubGFzdEF1dG9maWxsU25hcHNob3RCeUZpbmdlcnByaW50W2VdPz90aGlzLmxhc3RBdXRvZmlsbFNuYXBzaG90QnlGaW5nZXJwcmludFt0XT8/cn1nZXRBdXRvZmlsbFN0cnVjdHVyZWQoZSx0LHIpe3JldHVybiB0aGlzLmxhc3RBdXRvZmlsbFN0cnVjdHVyZWRCeUZpbmdlcnByaW50W2VdPz90aGlzLmxhc3RBdXRvZmlsbFN0cnVjdHVyZWRCeUZpbmdlcnByaW50W3RdPz9yfWNvbnN0cnVjdG9yKCl7dGhpcy5sYXN0QXV0b2ZpbGxTbmFwc2hvdEJ5RmluZ2VycHJpbnQ9e30sdGhpcy5sYXN0QXV0b2ZpbGxTdHJ1Y3R1cmVkQnlGaW5nZXJwcmludD17fSx0aGlzLmluUHJvZ3Jlc3M9ITF9fWZ1bmN0aW9uIHgoKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtyZXR1cm4gZXx8ZG9jdW1lbnQuYm9keX1mdW5jdGlvbiBDKGUpe3JldHVybihlfHxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKX1mdW5jdGlvbiBBKGUpe2xldCB0PWUudG9Mb3dlckNhc2UoKS50cmltKCk7cmV0dXJuXCJjb3VudHJ5IC8gcmVnaW9uXCI9PT10fHxcImNvdW50cnlcIj09PXR8fFwiY291bnRyeS9yZWdpb25cIj09PXR9ZnVuY3Rpb24gayhlLHQpe2xldCByPSdpbnB1dFthcmlhLWxhYmVsPVwiUGhvbmUgbnVtYmVyXCJdJyxuPWUuY2xvc2VzdChcImZpZWxkc2V0XCIpLG89ISFuPy5xdWVyeVNlbGVjdG9yKHIpLGk9byxhPWUuY2xvc2VzdCgnW2pzbmFtZT1cIll6Z1JxZVwiXScpO2Zvcig7YTspe2lmKGEucXVlcnlTZWxlY3RvcihyKSl7aT0hMDticmVha31sZXQgZT1hLnBhcmVudEVsZW1lbnQ7YT1lP2UuY2xvc2VzdCgnW2pzbmFtZT1cIll6Z1JxZVwiXScpOm51bGx9aWYoIWkpcmV0dXJuITE7bGV0IGw9Qyh0KS50b0xvd2VyQ2FzZSgpO3JldHVyblwiY291bnRyeSBjYWxsaW5nIGNvZGVcIj09PWx8fCFsJiZDKG4/LnRleHRDb250ZW50fHxcIlwiKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiY291bnRyeSBjYWxsaW5nIGNvZGVcIil9ZnVuY3Rpb24gVChlKXtyZXR1cm4gQyhlKS50b0xvd2VyQ2FzZSgpfWZ1bmN0aW9uIEYoZSl7cmV0dXJuXCJjb3VudHJ5IGNhbGxpbmcgY29kZVwiPT09VChlLmxhYmVsKX1mdW5jdGlvbiBJKGUpe2xldCB0PVQoZS4kaW5wdXQ/LmdldEF0dHJpYnV0ZT8uKFwiYXJpYS1sYWJlbFwiKXx8XCJcIik7cmV0dXJuXCJwaG9uZSBudW1iZXJcIj09PXR8fFtcInBob25lXCIsXCJwaG9uZSBudW1iZXJcIixcInByaW1hcnkgcGhvbmVcIixcInByaW1hcnkgcGhvbmUgbnVtYmVyXCIsXCJtb2JpbGUgcGhvbmUgbnVtYmVyXCJdLmluY2x1ZGVzKFQoZS5sYWJlbCkpfWZ1bmN0aW9uIGooZSx0KXtsZXQgcj1lLmZpbHRlcihGKTtpZigwPT09ci5sZW5ndGgpcmV0dXJue2NvdW50cnlDb2RlUnVsZXM6cixyZWd1bGFyUnVsZXM6ZSxwaG9uZVJ1bGVzOltdLHBvc3RQaG9uZVJ1bGVzOmUscGhvbmVSdWxlc1JlYm91bmQ6ITAscGhvbmVSdWxlc1NraXBwZWQ6MH07bGV0IG49ZS5maWx0ZXIoSSksbz10LmZpbHRlcihJKSxpPW4ubGVuZ3RoPT09by5sZW5ndGgsYT0wLGw9MCxzPVtdO2ZvcihsZXQgdCBvZiBlKWlmKCFGKHQpKXtpZighSSh0KSl7cy5wdXNoKHQpO2NvbnRpbnVlfWlmKCFpKXtsKz0xO2NvbnRpbnVlfXMucHVzaChvW2FdKSxhKz0xfXJldHVybntjb3VudHJ5Q29kZVJ1bGVzOnIscmVndWxhclJ1bGVzOnMscGhvbmVSdWxlczpzLmZpbHRlcihJKSxwb3N0UGhvbmVSdWxlczpzLmZpbHRlcihlPT4hSShlKSkscGhvbmVSdWxlc1JlYm91bmQ6aSxwaG9uZVJ1bGVzU2tpcHBlZDpsfX1mdW5jdGlvbiBEKGUsdCxyKXtpZighZS5tYXRjaGVzKCdkaXZbcm9sZT1cImNvbWJvYm94XCJdW2pzbmFtZT1cIm9ZeHRRZFwiXScpKXJldHVybiExO2lmKEEocikpcmV0dXJuITA7bGV0IG49QyhlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIpO2lmKEEobikpcmV0dXJuITA7bGV0IG89QyhPKGUpKTtpZihBKG8pKXJldHVybiEwO2xldCBpPUModC5xdWVyeVNlbGVjdG9yKCdbanNuYW1lPVwiVjY3YUdjXCJdJyk/LnRleHRDb250ZW50fHxcIlwiKTtyZXR1cm4hIUEoaSl9ZnVuY3Rpb24gUChlKXtpZighZT8uaXNDb25uZWN0ZWQpcmV0dXJuITE7bGV0IHQ9d2luZG93LmdldENvbXB1dGVkU3R5bGUoZSk7aWYoXCJub25lXCI9PT10LmRpc3BsYXl8fFwiaGlkZGVuXCI9PT10LnZpc2liaWxpdHkpcmV0dXJuITE7bGV0IHI9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm4gci53aWR0aD4wJiZyLmhlaWdodD4wfWZ1bmN0aW9uIF8oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtyZXR1cm4gZX1mdW5jdGlvbiBMKGUpe2xldCB0PVtdO3RyeXtlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpW3JvbGU9XCJvcHRpb25cIl0nKS5mb3JFYWNoKGU9PntsZXQgcj1lLG49ci5xdWVyeVNlbGVjdG9yKGBbJHtkfT1cIiR7Zn1cIl1gKSxvPW4/LnRleHRDb250ZW50Py50cmltKCk/P1wiXCIsaT1DKHIudGV4dENvbnRlbnQ/P1wiXCIpLGE9ci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpPz9cIlwiLGw9b3x8aTtcIlwiPT09bCYmKFwiXCI9PT1hfHxcIjBcIj09PWEpP3QucHVzaChcIlwiKTpsP3QucHVzaChsKTphJiZ0LnB1c2goYSl9KX1jYXRjaHt9cmV0dXJuIHR9ZnVuY3Rpb24gUihlKXtsZXQgdD1lLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIik7aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCk7aWYoIXJ8fFwibGlzdGJveFwiIT09ci5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpKXJldHVybiBudWxsO2xldCBuPXIsbz1cIlVMXCI9PT1yLnRhZ05hbWUmJnIucXVlcnlTZWxlY3RvcignbGlbcm9sZT1cIm9wdGlvblwiXScpO3JldHVybiBvP246bnVsbH1mdW5jdGlvbiBPKGUpe2xldCB0PWUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIpO2lmKHQpe2xldCBlPXQudHJpbSgpLnNwbGl0KC9cXHMrLylbMF0scj1lP2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpOm51bGw7aWYocj8udGV4dENvbnRlbnQpcmV0dXJuIEMoci50ZXh0Q29udGVudCl9cmV0dXJuXCJcIn1mdW5jdGlvbiBNKGUpe2xldCB0PWUuY2xvc2VzdCgnW2pzbmFtZT1cIndTQVN1ZVwiXScpLHI9dD8ucXVlcnlTZWxlY3RvcignZGl2W2pzbmFtZT1cInhsMDdPYlwiXScpLG49cj8ucXVlcnlTZWxlY3RvcigndWxbanNuYW1lPVwicnltUGhiXCJdW3JvbGU9XCJsaXN0Ym94XCJdW2FyaWEtbGFiZWw9XCJTdGF0ZSAvIHByb3ZpbmNlXCJdJyk/P2UuY2xvc2VzdCgnZGl2W2pzbmFtZT1cInJUMU56ZVwiXScpPy5xdWVyeVNlbGVjdG9yKCd1bFtqc25hbWU9XCJyeW1QaGJcIl1bcm9sZT1cImxpc3Rib3hcIl1bYXJpYS1sYWJlbD1cIlN0YXRlIC8gcHJvdmluY2VcIl0nKT8/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWxbanNuYW1lPVwicnltUGhiXCJdW3JvbGU9XCJsaXN0Ym94XCJdW2FyaWEtbGFiZWw9XCJTdGF0ZSAvIHByb3ZpbmNlXCJdJyk7cmV0dXJuIG4mJm4ucXVlcnlTZWxlY3RvcignbGlbcm9sZT1cIm9wdGlvblwiXScpP246bnVsbH1mdW5jdGlvbiBOKGUpe2xldCB0PU8oZSk7aWYoIXQpcmV0dXJuIG51bGw7bGV0IHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZGl2W2pzbmFtZT1cIiR7cH1cIl1gKTtmb3IobGV0IGUgb2Ygcil7bGV0IHI9ZS5xdWVyeVNlbGVjdG9yKGB1bFtqc25hbWU9XCIke3V9XCJdW3JvbGU9XCJsaXN0Ym94XCJdYCk7aWYoIXIpY29udGludWU7bGV0IG49KHIuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKT8/XCJcIikudHJpbSgpO2lmKG4hPT10KWNvbnRpbnVlO2xldCBvPXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aWYoby5oZWlnaHQ+MCYmby53aWR0aD4wKXJldHVybiByfXJldHVybiBudWxsfWFzeW5jIGZ1bmN0aW9uICQoZSx0LHIpe2xldCBuPVtdO3RyeXt0cnl7ZS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6XCJjZW50ZXJcIixpbmxpbmU6XCJuZWFyZXN0XCJ9KX1jYXRjaHt9YXdhaXQgKDAsaS5kZWxheSkoNTApLGUuZm9jdXMoKSxlLmNsaWNrKCksYXdhaXQgKDAsaS5kZWxheSkoODApO2xldCBvPWF3YWl0ICgwLGwuZGVmYXVsdCkoKCk9PnQoZSl8fE4oZSksKCk9PiExLDMwKTtvJiYobj1yKG8pKX1jYXRjaHt9dHJ5e2UuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIix7a2V5OlwiRXNjYXBlXCIsYnViYmxlczohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXl1cFwiLHtrZXk6XCJFc2NhcGVcIixidWJibGVzOiEwfSkpO2xldCB0PWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudD9kb2N1bWVudC5hY3RpdmVFbGVtZW50Om51bGw7dCYmdCE9PWUmJih0LmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2tleTpcIkVzY2FwZVwiLGJ1YmJsZXM6ITB9KSksdC5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5dXBcIix7a2V5OlwiRXNjYXBlXCIsYnViYmxlczohMH0pKSksZS5ibHVyKCl9Y2F0Y2h7fWlmKFwidHJ1ZVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpKXt0cnl7bGV0IGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50fHxkb2N1bWVudC5ib2R5O2UuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLHtidWJibGVzOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNldXBcIix7YnViYmxlczohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLHtidWJibGVzOiEwfSkpfWNhdGNoe31pZihhd2FpdCAoMCxpLmRlbGF5KSg0MCksXCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikpe3RyeXtlLmNsaWNrKCl9Y2F0Y2h7fWF3YWl0ICgwLGkuZGVsYXkpKDQwKTt0cnl7ZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLHtrZXk6XCJFc2NhcGVcIixidWJibGVzOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleXVwXCIse2tleTpcIkVzY2FwZVwiLGJ1YmJsZXM6ITB9KSksZS5ibHVyKCl9Y2F0Y2h7fX19cmV0dXJuIGF3YWl0ICgwLGkuZGVsYXkpKDgwKSxufWZ1bmN0aW9uIEIoZSl7bGV0IHQ9ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpPy50cmltKCk7aWYodClyZXR1cm4gdDtpZighZS5pZClyZXR1cm5cIlwiO3RyeXtsZXQgdD1cInVuZGVmaW5lZFwiIT10eXBlb2YgQ1NTJiZDU1MuZXNjYXBlP0NTUy5lc2NhcGUoZS5pZCk6ZS5pZC5yZXBsYWNlKC9bXCJcXFxcXS9nLFwiXFxcXCQmXCIpLHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHt0fVwiXWApO3JldHVybiByPy50ZXh0Q29udGVudD9DKHIudGV4dENvbnRlbnQpOlwiXCJ9Y2F0Y2h7cmV0dXJuXCJcIn19ZnVuY3Rpb24gcShlLHQ9NSl7bGV0IHI9ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2ZvcihsZXQgZT0wO2U8dCYmcjtlKyspe2xldCBlPXIuZ2V0QXR0cmlidXRlKFwicm9sZVwiKSx0PXIudGFnTmFtZS50b0xvd2VyQ2FzZSgpO2lmKFwiYnV0dG9uXCI9PT1lfHxcImJ1dHRvblwiPT09dCl7cj1yLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7Y29udGludWV9bGV0IG49KHIudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKTtpZihuLmxlbmd0aDw4fHwvXlxccypcXCo/XFxzKnJlcXVpcmVkXFxzKiQvaS50ZXN0KG4pKXtyPXIucHJldmlvdXNFbGVtZW50U2libGluZztjb250aW51ZX1sZXQgbz1DKG4pLnJlcGxhY2UoL1xccypcXCorXFxzKiQvLFwiXCIpLnJlcGxhY2UoL1xccypyZXF1aXJlZFxccyokL2ksXCJcIikudHJpbSgpO2lmKG8ubGVuZ3RoPj01KXJldHVybiBvO3I9ci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nfXJldHVyblwiXCJ9ZnVuY3Rpb24gVShlKXtyZXR1cm4hISghZXx8ZS5sZW5ndGg8PTJ8fC9eXFxkKyQvLnRlc3QoZSkpfWZ1bmN0aW9uIEgoZSl7bGV0IHQ9ZTtmb3IoO3Q7KXtsZXQgZT10LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7aWYoZT8ucXVlcnlTZWxlY3RvcignW2FyaWEtbGFiZWw9XCJyZXF1aXJlZCBmaWVsZFwiXScpfHx0LnF1ZXJ5U2VsZWN0b3IoJ1thcmlhLWxhYmVsPVwicmVxdWlyZWQgZmllbGRcIl0nKSlyZXR1cm4hMDt0PXQucGFyZW50RWxlbWVudH1yZXR1cm4hMX1mdW5jdGlvbiBZKGUsdCl7bGV0IHI9ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIik7aWYocilmb3IobGV0IGUgb2Ygci50cmltKCkuc3BsaXQoL1xccysvKSl7bGV0IHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSk7aWYodD8udGV4dENvbnRlbnQpe2xldCBlPUModC50ZXh0Q29udGVudCk7aWYoZSYmXCJyZXF1aXJlZCBmaWVsZFwiIT09ZSlyZXR1cm4gZX19bGV0IG49dC5xdWVyeVNlbGVjdG9yKCdbanNuYW1lPVwiVjY3YUdjXCJdJyk7aWYobj8udGV4dENvbnRlbnQpcmV0dXJuIEMobi50ZXh0Q29udGVudCk7bGV0IG89dC5xdWVyeVNlbGVjdG9yKCdbanNuYW1lPVwiRmIwQmlmXCJdJyk7cmV0dXJuIG8/LmlubmVyVGV4dD8udHJpbSgpfHxcIlwifWZ1bmN0aW9uIHooZT14KCkpe2xldCB0PWUucXVlcnlTZWxlY3RvckFsbChcImRpdi5QdWtGWFwiKTtmb3IobGV0IGUgb2YgdCl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiaDIueUVBQ1hiXCIpLHI9Qyh0Py50ZXh0Q29udGVudHx8XCJcIikudG9Mb3dlckNhc2UoKTtpZihyLmluY2x1ZGVzKFwiY292ZXIgbGV0dGVyXCIpKXJldHVybiBlfXJldHVybiBudWxsfWZ1bmN0aW9uIFYoZT14KCkpe2xldCB0PXooZSk7cmV0dXJuIHQ/dC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtqc25hbWU9XCJZUHFqYmZcIl1bYXJpYS1sYWJlbD1cIkNvdmVyIGxldHRlclwiXScpPz90LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW2pzbmFtZT1cIllQcWpiZlwiXScpOm51bGx9ZnVuY3Rpb24gVyhlPXgoKSl7bGV0IHQ9VihlKTtpZighdHx8IVAodCkpcmV0dXJuXCJcIjtsZXQgcj10LnJlcXVpcmVkfHxcInRydWVcIj09PXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKXx8SCh0KTtyZXR1cm4gcj9cInJlcXVpcmVkXCI6XCJvcHRpb25hbFwifWxldCBHPVwiSGlnaGVyIGVkdWNhdGlvblwiLEs9XCJXb3JrIGV4cGVyaWVuY2VcIixYPVwid29yay1leHBlcmllbmNlLWNpdHktaW5wdXRcIixKPWB1bDpoYXMoaW5wdXRbZGVidWdpZD1cIiR7WH1cIl0pYDtmdW5jdGlvbiBRKGUpe2xldCB0PWUucXVlcnlTZWxlY3RvckFsbChcImRpdi5QdWtGWFwiKTtmb3IobGV0IGUgb2YgdCl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKFwiaDIueUVBQ1hiXCIpO2lmKHQmJkModC50ZXh0Q29udGVudHx8XCJcIik9PT1HKXJldHVybiBlfXJldHVybiBudWxsfWZ1bmN0aW9uIFooZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LlB1a0ZYXCIpO2ZvcihsZXQgZSBvZiB0KXtsZXQgdD1lLnF1ZXJ5U2VsZWN0b3IoXCJoMi55RUFDWGJcIik7aWYodCYmQyh0LnRleHRDb250ZW50fHxcIlwiKT09PUspcmV0dXJuIGV9cmV0dXJuIG51bGx9YXN5bmMgZnVuY3Rpb24gZWUoZSx0LHIsbixpPSEwKXtsZXQgYT1bXSxsPWU9PmEucHVzaChlKSxzPWUucXVlcnlTZWxlY3RvcignaW5wdXRbYXJpYS1sYWJlbD1cIlNjaG9vbCBuYW1lXCJdJyk7aWYocyYmUChzKSl7bGV0IGU9cy5jbG9zZXN0KCdbanNuYW1lPVwidmhaTXZmXCJdJyl8fHMuY2xvc2VzdChcIi5VZm42T1wiKXx8cy5wYXJlbnRFbGVtZW50O2woe2xhYmVsOlwiU2Nob29sIG5hbWVcIixyZXF1aXJlZDohMCx0eXBlOm8uRklFTERfVFlQRS5URVhULCRsYWJlbDplfHxzLCRpbnB1dDpzfSl9bGV0IGM9ZT0+e2xldCB0PXIoZSk7aWYodClyZXR1cm4gdDtsZXQgbj1lLmNsb3Nlc3QoJ1tqc25hbWU9XCJ3U0FTdWVcIl0nKSxvPW4/LnF1ZXJ5U2VsZWN0b3IoYHVsW2pzbmFtZT1cIiR7dX1cIl1bcm9sZT1cImxpc3Rib3hcIl1gKTtyZXR1cm4gb3x8TihlKX0sZD1lLnF1ZXJ5U2VsZWN0b3IoJ1tqc25hbWU9XCJzRktHYWRcIl0gW2pzbmFtZT1cIm9ZeHRRZFwiXScpO2lmKGQmJlAoZCkpe2xldCBlPWQuY2xvc2VzdCgnW2pzbmFtZT1cIndTQVN1ZVwiXScpfHxkLnBhcmVudEVsZW1lbnQsdD1jKGQpLHI9dD9uKHQpOltdO2kmJjA9PT1yLmxlbmd0aCYmKHI9YXdhaXQgJChkLGMsbikpLGwoe2xhYmVsOlwiRGVncmVlXCIscmVxdWlyZWQ6ITAsdHlwZTpvLkZJRUxEX1RZUEUuU0VMRUNULCRsYWJlbDplfHxkLCRpbnB1dDpkLG9wdGlvbnM6cn0pfWxldCBmPWUucXVlcnlTZWxlY3RvcignW2pzbmFtZT1cIkxyZk9YXCJdIFtqc25hbWU9XCJvWXh0UWRcIl0nKTtpZihmJiZQKGYpKXtsZXQgZT1mLmNsb3Nlc3QoJ1tqc25hbWU9XCJ3U0FTdWVcIl0nKXx8Zi5wYXJlbnRFbGVtZW50LHQ9YyhmKSxyPXQ/bih0KTpbXTtpJiYwPT09ci5sZW5ndGgmJihyPWF3YWl0ICQoZixjLG4pKSxsKHtsYWJlbDpcIkRlZ3JlZSBTdGF0dXNcIixyZXF1aXJlZDohMCx0eXBlOm8uRklFTERfVFlQRS5TRUxFQ1QsJGxhYmVsOmV8fGYsJGlucHV0OmYsb3B0aW9uczpyfSl9bGV0IHA9ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFthcmlhLWxhYmVsPVwiTWFqb3IgLyBhcmVhIG9mIHN0dWR5XCJdJyk7aWYocCYmUChwKSl7bGV0IGU9cC5jbG9zZXN0KCdbanNuYW1lPVwidmhaTXZmXCJdJyl8fHAuY2xvc2VzdChcIi5VZm42T1wiKXx8cC5wYXJlbnRFbGVtZW50O2woe2xhYmVsOlwiTWFqb3IgLyBhcmVhIG9mIHN0dWR5XCIscmVxdWlyZWQ6ITAsdHlwZTpvLkZJRUxEX1RZUEUuVEVYVCwkbGFiZWw6ZXx8cCwkaW5wdXQ6cH0pfWxldCBtPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbcm9sZT1cImNvbWJvYm94XCJdW2pzbmFtZT1cIm9ZeHRRZFwiXScpKS5maW5kKHI9PntsZXQgbj1yLmNsb3Nlc3QoJ1tqc25hbWU9XCJ3U0FTdWVcIl0nKXx8ci5wYXJlbnRFbGVtZW50fHxlLG89Qyh0KHIsbikpO3JldHVybiBEKHIsbixvKX0pfHxudWxsLGg9bXx8ZS5xdWVyeVNlbGVjdG9yKCdbanNuYW1lPVwiSEs3VmZjXCJdIFtqc25hbWU9XCJvWXh0UWRcIl0nKTtpZihoJiZQKGgpKXtsZXQgZT1oLmNsb3Nlc3QoJ1tqc25hbWU9XCJ3U0FTdWVcIl0nKXx8aC5wYXJlbnRFbGVtZW50O2woe2xhYmVsOlwiQ291bnRyeSAvIFJlZ2lvblwiLHJlcXVpcmVkOiExLHR5cGU6by5GSUVMRF9UWVBFLlNFTEVDVCwkbGFiZWw6ZXx8aCwkaW5wdXQ6aCxvcHRpb25zOltdfSl9cmV0dXJuIGF9YXN5bmMgZnVuY3Rpb24gZXQoZT0hMCl7bGV0IHQ9eCgpLHI9USh0KTtpZighcilyZXR1cm5bXTtsZXQgbj1BcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbChcImxpLlZkTUN0Y1wiKSkubGVuZ3RoP0FycmF5LmZyb20oci5xdWVyeVNlbGVjdG9yQWxsKFwibGkuVmRNQ3RjXCIpKTpyLnF1ZXJ5U2VsZWN0b3IoJ1tqc25hbWU9XCJvdURxRGJcIl0nKT9bcl06W107aWYoMD09PW4ubGVuZ3RoKXJldHVybltdO2xldCBpPVtdLGE9KGUsdCk9PlkoZSx0KTtmb3IobGV0IHQgb2Ygbil7bGV0IHI9YXdhaXQgZWUodCxhLFIsTCxlKTtpZihyLmxlbmd0aD4wKXtsZXQgZT1yWzBdO2kucHVzaCh7dHlwZTpvLkZJRUxEX1RZUEUuRURVQ0FUSU9OLGxhYmVsOlwiRWR1Y2F0aW9uXCIscmVxdWlyZWQ6ITAsY2hpbGRyZW46ciwkaW5wdXQ6ZT8uJGlucHV0fSl9fXJldHVybiBpfWZ1bmN0aW9uIGVyKGUsdCxyLG4pe2xldCBpPVtdLGE9ZT0+aS5wdXNoKGUpLGw9ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFthcmlhLWxhYmVsPVwiRW1wbG95ZXIgbmFtZVwiXScpO2lmKGwpe2xldCBlPWwuY2xvc2VzdChcIi5yYmdtY2JcIil8fGwucGFyZW50RWxlbWVudDthKHtsYWJlbDpcIkVtcGxveWVyIG5hbWVcIixyZXF1aXJlZDohMCx0eXBlOm8uRklFTERfVFlQRS5URVhULCRsYWJlbDplfHxsLCRpbnB1dDpsfSl9bGV0IHM9ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFthcmlhLWxhYmVsPVwiSm9iIHRpdGxlXCJdJyk7aWYocyl7bGV0IGU9cy5jbG9zZXN0KFwiLnJiZ21jYlwiKXx8cy5wYXJlbnRFbGVtZW50O2Eoe2xhYmVsOlwiSm9iIHRpdGxlXCIscmVxdWlyZWQ6ITAsdHlwZTpvLkZJRUxEX1RZUEUuVEVYVCwkbGFiZWw6ZXx8cywkaW5wdXQ6c30pfWxldCBjPUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbcm9sZT1cImNvbWJvYm94XCJdW2pzbmFtZT1cIm9ZeHRRZFwiXSwgW3JvbGU9XCJjb21ib2JveFwiXScpKSxkPWMuZmlsdGVyKGU9PntsZXQgcj1lLmNsb3Nlc3QoJ1tqc25hbWU9XCJ3U0FTdWVcIl0nKXx8ZS5wYXJlbnRFbGVtZW50O3JldHVyblwiTW9udGhcIj09PUModChlLHIpKX0pLGY9Wy4uLmRdO2lmKGYubGVuZ3RoPDIpe2xldCB0PVtdLHI9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tqc25hbWU9XCJuWGIyUWJcIl0gLlZmUHBrZC11dXNHaWUtZm1jbVMnKSk7Zm9yKGxldCBlIG9mIHIpe2xldCByPWUuY2xvc2VzdCgnW3JvbGU9XCJjb21ib2JveFwiXScpO3ImJnQucHVzaChyKX1sZXQgbj1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1thcmlhLWxhYmVsPVwiTW9udGhcIl0gW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdIC5WZlBwa2QtU3RybkdmLXJ5bVBoYi1iOXQyMmMnKSk7Zm9yKGxldCByIG9mIG4pe2xldCBuPXIuY2xvc2VzdCgnW3JvbGU9XCJsaXN0Ym94XCJdJyksbz1uPy5pZD8udHJpbSgpO2lmKG8pdHJ5e2xldCByPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBDU1MmJkNTUy5lc2NhcGU/Q1NTLmVzY2FwZShvKTpvLG49ZS5xdWVyeVNlbGVjdG9yKGBbcm9sZT1cImNvbWJvYm94XCJdW2FyaWEtY29udHJvbHM9XCIke3J9XCJdYCk7biYmdC5wdXNoKG4pfWNhdGNoe2xldCByPWUucXVlcnlTZWxlY3RvcihgW3JvbGU9XCJjb21ib2JveFwiXVthcmlhLWNvbnRyb2xzPVwiJHtvfVwiXWApO3ImJnQucHVzaChyKX19aWYodC5sZW5ndGg+MCl7bGV0IGU9bmV3IFNldChmKTtmb3IobGV0IHIgb2YgdCllLmFkZChyKTtmPUFycmF5LmZyb20oZSkuc29ydCgoZSx0KT0+e2xldCByPWUuY29tcGFyZURvY3VtZW50UG9zaXRpb24odCk7cmV0dXJuIHImTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkc/LTE6ciZOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElORz8xOjB9KX19bGV0IHA9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoYHVsW2pzbmFtZT1cIiR7dX1cIl1bcm9sZT1cImxpc3Rib3hcIl1gKSksbT1mWzBdO2lmKG0pe2xldCBlPXIobSl8fHBbMF18fE4obSksdD1lP24oZSk6W10saT1tLmNsb3Nlc3QoJ1tqc25hbWU9XCJ3U0FTdWVcIl0nKXx8bS5wYXJlbnRFbGVtZW50O2Eoe2xhYmVsOlwiU3RhcnQgTW9udGhcIixyZXF1aXJlZDohMCx0eXBlOm8uRklFTERfVFlQRS5TRUxFQ1QsJGxhYmVsOml8fG0sJGlucHV0Om0sb3B0aW9uczp0fSl9bGV0IGg9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJudW1iZXJcIl1bYXJpYS1sYWJlbD1cIlllYXJcIl0nKSksZz1bLi4uaF07aWYoZy5sZW5ndGg8Mil7bGV0IHQ9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tqc25hbWU9XCJzMDhiOVwiXSBpbnB1dFtqc25hbWU9XCJZUHFqYmZcIl0nKSk7Zm9yKGxldCBlIG9mIHQpe2lmKGcuaW5jbHVkZXMoZSkpY29udGludWU7bGV0IHQ9KGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJcIikudG9Mb3dlckNhc2UoKTsoXCJudW1iZXJcIj09PWUudHlwZXx8dC5pbmNsdWRlcyhcInllYXJcIikpJiZnLnB1c2goZSl9fWxldCBiPWdbMF07aWYoYil7bGV0IGU9Yi5jbG9zZXN0KFwiLnJiZ21jYlwiKXx8Yi5jbG9zZXN0KCdbanNuYW1lPVwid1NBU3VlXCJdJyl8fGIucGFyZW50RWxlbWVudDthKHtsYWJlbDpcIlN0YXJ0IFllYXJcIixyZXF1aXJlZDohMCx0eXBlOm8uRklFTERfVFlQRS5URVhULCRsYWJlbDplfHxiLCRpbnB1dDpifSl9bGV0IHk9ZS5xdWVyeVNlbGVjdG9yKCdkaXZbanNuYW1lPVwiUTRYeFhlXCJdJyksdj15Py5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKXx8ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1bdmFsdWU9XCJUaGlzIGlzIHlvdXIgY3VycmVudCBqb2JcIl0nKTtpZih2KXtsZXQgZT12LmNsb3Nlc3QoXCJsYWJlbFwiKXx8di5wYXJlbnRFbGVtZW50O2Eoe2xhYmVsOlwiVGhpcyBpcyB5b3VyIGN1cnJlbnQgam9iXCIscmVxdWlyZWQ6ITEsdHlwZTpvLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsJGxhYmVsOmV8fHYsJGlucHV0OnYsJGNoZWNrYm94czpbdl0sb3B0aW9uczpbXCJ0cnVlXCIsXCJmYWxzZVwiXX0pfWxldCB3PWZbMV07aWYodyl7bGV0IHQ9cih3KXx8cFsxXXx8ZS5xdWVyeVNlbGVjdG9yKCdbanNuYW1lPVwiUUJHQVNcIl0gdWxbanNuYW1lPVwicnltUGhiXCJdJyl8fE4odyksaT10P24odCk6W10sbD13LmNsb3Nlc3QoJ1tqc25hbWU9XCJ3U0FTdWVcIl0nKXx8dy5wYXJlbnRFbGVtZW50O2Eoe2xhYmVsOlwiRW5kIE1vbnRoXCIscmVxdWlyZWQ6ITEsdHlwZTpvLkZJRUxEX1RZUEUuU0VMRUNULCRsYWJlbDpsfHx3LCRpbnB1dDp3LG9wdGlvbnM6aX0pfWxldCBTPWdbMV07aWYoUyl7bGV0IGU9Uy5jbG9zZXN0KFwiLnJiZ21jYlwiKXx8Uy5jbG9zZXN0KCdbanNuYW1lPVwia2p6VWhjXCJdJyl8fFMucGFyZW50RWxlbWVudDthKHtsYWJlbDpcIkVuZCBZZWFyXCIscmVxdWlyZWQ6ITEsdHlwZTpvLkZJRUxEX1RZUEUuVEVYVCwkbGFiZWw6ZXx8UywkaW5wdXQ6U30pfWxldCBFPWMuZmluZChyPT57bGV0IG49ci5jbG9zZXN0KCdbanNuYW1lPVwid1NBU3VlXCJdJyl8fHIucGFyZW50RWxlbWVudHx8ZSxvPUModChyLG4pKTtyZXR1cm4gRChyLG4sbyl9KXx8ZS5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImNvbWJvYm94XCJdW2FyaWEtbGFiZWw9XCJDb3VudHJ5IC8gUmVnaW9uXCJdJyl8fGMuZmluZChlPT57bGV0IHI9ZS5jbG9zZXN0KCdbanNuYW1lPVwid1NBU3VlXCJdJyl8fGUucGFyZW50RWxlbWVudDtyZXR1cm5cIkNvdW50cnkgLyBSZWdpb25cIj09PUModChlLHIpKX0pO2lmKEUpe2xldCBlPUUuY2xvc2VzdCgnW2pzbmFtZT1cIndTQVN1ZVwiXScpfHxFLnBhcmVudEVsZW1lbnQ7YSh7bGFiZWw6XCJDb3VudHJ5IC8gUmVnaW9uXCIscmVxdWlyZWQ6ITEsdHlwZTpvLkZJRUxEX1RZUEUuU0VMRUNULCRsYWJlbDplfHxFLCRpbnB1dDpFLG9wdGlvbnM6W119KX1sZXQgeD1lLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2FyaWEtbGFiZWw9XCJDaXR5XCJdJyk7aWYoeCl7bGV0IGU9eC5jbG9zZXN0KFwiLnJiZ21jYlwiKXx8eC5wYXJlbnRFbGVtZW50O2Eoe2xhYmVsOlwiQ2l0eVwiLHJlcXVpcmVkOiExLHR5cGU6by5GSUVMRF9UWVBFLlRFWFQsJGxhYmVsOmV8fHgsJGlucHV0Onh9KX1sZXQgQT1lLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2FyaWEtbGFiZWw9XCJTdGF0ZVwiXScpLGs9Yy5maW5kKGU9PntpZihlPT09bXx8ZT09PXd8fGU9PT1FKXJldHVybiExO2xldCByPWUuY2xvc2VzdCgnW2pzbmFtZT1cIndTQVN1ZVwiXScpfHxlLnBhcmVudEVsZW1lbnQsbj1DKHQoZSxyKSk7cmV0dXJuXCJTdGF0ZSAvIHByb3ZpbmNlXCI9PT1ufHxcIlN0YXRlXCI9PT1ufSk7aWYoayYmUChrKSl7bGV0IGU9ay5jbG9zZXN0KCdbanNuYW1lPVwid1NBU3VlXCJdJyl8fGsucGFyZW50RWxlbWVudCx0PXIoayl8fE0oayksaT10P24odCk6W107YSh7bGFiZWw6XCJTdGF0ZSAvIHByb3ZpbmNlXCIscmVxdWlyZWQ6ITEsdHlwZTpvLkZJRUxEX1RZUEUuU0VMRUNULCRsYWJlbDplfHxrLCRpbnB1dDprLG9wdGlvbnM6aX0pfWVsc2UgaWYoQSYmUChBKSl7bGV0IGU9QS5jbG9zZXN0KFwiLnJiZ21jYlwiKXx8QS5wYXJlbnRFbGVtZW50O2Eoe2xhYmVsOlwiU3RhdGVcIixyZXF1aXJlZDohMSx0eXBlOm8uRklFTERfVFlQRS5URVhULCRsYWJlbDplfHxBLCRpbnB1dDpBfSl9cmV0dXJuIGl9ZnVuY3Rpb24gZW4oKXtyZXR1cm5be2xhYmVsOlwiRW1wbG95ZXIgbmFtZVwiLHJlcXVpcmVkOiEwLHR5cGU6by5GSUVMRF9UWVBFLlRFWFR9LHtsYWJlbDpcIkpvYiB0aXRsZVwiLHJlcXVpcmVkOiEwLHR5cGU6by5GSUVMRF9UWVBFLlRFWFR9LHtsYWJlbDpcIlN0YXJ0IE1vbnRoXCIscmVxdWlyZWQ6ITAsdHlwZTpvLkZJRUxEX1RZUEUuU0VMRUNULG9wdGlvbnM6W119LHtsYWJlbDpcIlN0YXJ0IFllYXJcIixyZXF1aXJlZDohMCx0eXBlOm8uRklFTERfVFlQRS5URVhUfSx7bGFiZWw6XCJUaGlzIGlzIHlvdXIgY3VycmVudCBqb2JcIixyZXF1aXJlZDohMSx0eXBlOm8uRklFTERfVFlQRS5DSEVDS0JPWCxvcHRpb25zOltcInRydWVcIixcImZhbHNlXCJdfSx7bGFiZWw6XCJFbmQgTW9udGhcIixyZXF1aXJlZDohMSx0eXBlOm8uRklFTERfVFlQRS5TRUxFQ1Qsb3B0aW9uczpbXX0se2xhYmVsOlwiRW5kIFllYXJcIixyZXF1aXJlZDohMSx0eXBlOm8uRklFTERfVFlQRS5URVhUfSx7bGFiZWw6XCJDb3VudHJ5IC8gUmVnaW9uXCIscmVxdWlyZWQ6ITEsdHlwZTpvLkZJRUxEX1RZUEUuU0VMRUNULG9wdGlvbnM6W119LHtsYWJlbDpcIkNpdHlcIixyZXF1aXJlZDohMSx0eXBlOm8uRklFTERfVFlQRS5URVhUfSx7bGFiZWw6XCJTdGF0ZVwiLHJlcXVpcmVkOiExLHR5cGU6by5GSUVMRF9UWVBFLlRFWFR9XX1mdW5jdGlvbiBlbyhlKXt0cnl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKEopO2lmKHQpe2xldCBlPUFycmF5LmZyb20odC5xdWVyeVNlbGVjdG9yQWxsKFwiOnNjb3BlID4gbGlcIikpO2lmKGUubGVuZ3RoPjApcmV0dXJuIGV9fWNhdGNoe31sZXQgdD1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImxpLlNRZGpBZlwiKSk7cmV0dXJuIHQubGVuZ3RoPjA/dDpBcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCgnbGlbanNuYW1lPVwieGIxQ3FlXCJdJykpfWZ1bmN0aW9uIGVpKCl7bGV0IGU9eCgpLHQ9WihlKTtpZighdClyZXR1cm5bXTtsZXQgcj1lbyh0KTtpZigwPT09ci5sZW5ndGgpcmV0dXJuW107bGV0IG49W10saT0oZSx0KT0+WShlLHQpO2ZvcihsZXQgZSBvZiByKXtsZXQgdD1lcihlLGksUixMKTtpZih0Lmxlbmd0aD4wKXtsZXQgZT10WzBdO24ucHVzaCh7dHlwZTpvLkZJRUxEX1RZUEUuRU1QTE9ZTUVOVCxsYWJlbDpcIldvcmsgZXhwZXJpZW5jZVwiLHJlcXVpcmVkOiEwLGNoaWxkcmVuOnQsJGlucHV0OmU/LiRpbnB1dH0pfX1yZXR1cm4gbn1mdW5jdGlvbiBlYShlLHQpe2xldCByPUIoZSk7aWYoIXIpcmV0dXJuO2xldCBuPWUuY2xvc2VzdCgnW2pzbmFtZT1cInZoWk12ZlwiXScpfHxlLmNsb3Nlc3QoXCIuVWZuNk9cIil8fGUucGFyZW50RWxlbWVudCxpPWUuaGFzQXR0cmlidXRlKFwicmVxdWlyZWRcIil8fFwidHJ1ZVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLXJlcXVpcmVkXCIpLGE9KDAscy5nZXRHb29nbGVGaWVsZERlc2NyaXB0aW9uKShyKTt0LnB1c2goe2xhYmVsOnIscmVxdWlyZWQ6ISFpLHR5cGU6by5GSUVMRF9UWVBFLlRFWFQsJGxhYmVsOm58fGUsJGlucHV0OmUsLi4uYT97ZGVzY3JpcHRpb246YX06e319KX1hc3luYyBmdW5jdGlvbiBlbChlPXt9KXtsZXQgdD0hMSE9PWUuZWFnZXJTZWxlY3RPcHRpb25zLHI9ITA9PT1lLnNpbGVudExvZzthd2FpdCBtKCk7bGV0IG49eCgpLGE9W10sYz1RKG4pLHA9WihuKSxoPW4ucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJyYWRpb2dyb3VwXCJdJyk7Zm9yKGxldCBlIG9mIGgpe2xldCB0PWU7aWYoIVAodCkpY29udGludWU7bGV0IHI9dC5nZXRBdHRyaWJ1dGUoXCJqc2RhdGFcIiksbj10LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIsaT1DKHJ8fG4pO2lmKCFpJiZ0LmNsb3Nlc3QoXCIuYzYyQmNjXCIpKXtsZXQgZT10LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7ZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiRFhOZzNlXCIpJiYoaT1DKGUudGV4dENvbnRlbnR8fFwiXCIpKX1pZighaSYmdC5jbG9zZXN0KCdbanNuYW1lPVwiR1p1OHdjXCJdJykpe2xldCBlPXQucHJldmlvdXNFbGVtZW50U2libGluZztlPy5jbGFzc0xpc3QuY29udGFpbnMoXCJmcVB6WGRcIikmJihpPUMoZS50ZXh0Q29udGVudHx8XCJcIikpfXQuY2xvc2VzdCgnW2pzbmFtZT1cIm9rUmFhZlwiXScpJiYobnx8XCJcIikudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImFscGhhYmV0XCIpJiYoaT1cIkhhdmUgeW91IHdvcmtlZCBhdCBBbHBoYWJldCBiZWZvcmU/XCIpO2xldCBsPW4udHJpbSgpLnRvTG93ZXJDYXNlKCk7aWYoXCJnZW5kZXIgcmFkaW8gaW5wdXRcIj09PWw/aT1cIkdlbmRlclwiOlwidmV0ZXJhbiBzdGF0dXMgcmFkaW8gaW5wdXRcIj09PWw/aT1cIlZldGVyYW4gc3RhdHVzXCI6XCJkaXNhYmlsaXR5IHJhZGlvIGlucHV0XCI9PT1sJiYoaT1cIkRpc2FiaWxpdHlcIiksVShpKSl7bGV0IGU9cSh0KTtlJiYoaT1lKX1pZighaSljb250aW51ZTtsZXQgcz10LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO2lmKDA9PT1zLmxlbmd0aCljb250aW51ZTtsZXQgdT1bXSxjPVtdO2lmKHMuZm9yRWFjaChlPT57bGV0IHQ9ZTtpZighUCh0KSlyZXR1cm47bGV0IHI9dC52YWx1ZT8udHJpbSgpLG49Qih0KSxvPW58fHJ8fFwiXCI7byYmdS5wdXNoKG8pLGMucHVzaCh0KX0pLDA9PT11Lmxlbmd0aCljb250aW51ZTtsZXQgZD1cInRydWVcIj09PXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiKTthLnB1c2goe2xhYmVsOmkscmVxdWlyZWQ6ZCx0eXBlOm8uRklFTERfVFlQRS5SQURJT0dST1VQLCRsYWJlbDp0LCRpbnB1dDpjWzBdLCRyYWRpb1BhcmVudDp0LG9wdGlvbnM6dX0pfWxldCBnPUFycmF5LmZyb20obi5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbcm9sZT1cImNvbWJvYm94XCJdW2pzbmFtZT1cIm9ZeHRRZFwiXSwgW3JvbGU9XCJjb21ib2JveFwiXScpKTtmb3IobGV0IGU9MDtlPGcubGVuZ3RoO2UrKyl7bGV0IHI9Z1tlXTtpZighUChyKXx8YyYmYy5jb250YWlucyhyKXx8cCYmcC5jb250YWlucyhyKSljb250aW51ZTtpZihcIklOUFVUXCI9PT1yLnRhZ05hbWUmJlwibGlzdFwiPT09ci5nZXRBdHRyaWJ1dGUoXCJhcmlhLWF1dG9jb21wbGV0ZVwiKSl7bGV0IGU9KHIuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKT8/XCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCk7aWYoXCJzdGF0ZSAvIHByb3ZpbmNlXCIhPT1lJiZcInN0YXRlXCIhPT1lKXtlYShyLGEpO2NvbnRpbnVlfX1sZXQgbj1yLmNsb3Nlc3QoJ1tqc25hbWU9XCJ3U0FTdWVcIl0nKXx8ci5wYXJlbnRFbGVtZW50O2lmKCFuKWNvbnRpbnVlO2xldCBkPVkocixuKTtyLmNsb3Nlc3QoJ1tqc25hbWU9XCJoY01oRmRcIl0nKSYmKGQ9XCJQcmVmZXJyZWQgTG9jYXRpb25cIik7bGV0IGY9RChyLG4sZCk7aWYoQShkKXx8Zil7bGV0IHQ9XCJ0cnVlXCI9PT1yLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIiksaT17bGFiZWw6QShkKT9kOlwiQ291bnRyeSAvIFJlZ2lvblwiLHJlcXVpcmVkOiEhdCx0eXBlOm8uRklFTERfVFlQRS5TRUxFQ1QsJGxhYmVsOm4sJGlucHV0OnIsb3B0aW9uczpbXX07aS5zY29wZT1gY291bnRyeToke2V9YCxhLnB1c2goaSk7Y29udGludWV9bGV0IG09ci5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpLGg9UihyKSxiPWg/TChoKTpbXTtpZigwPT09Yi5sZW5ndGgpe2xldCBlPW4ucGFyZW50RWxlbWVudCx0PWU/LnF1ZXJ5U2VsZWN0b3IoYHVsW2pzbmFtZT1cIiR7dX1cIl1bcm9sZT1cImxpc3Rib3hcIl1gKTt0JiYoYj1MKHQpKX1pZigoIWh8fDA9PT1iLmxlbmd0aCkmJihcIlN0YXRlIC8gcHJvdmluY2VcIj09PWR8fFwic3RhdGUgLyBwcm92aW5jZVwiPT09QyhkfHxcIlwiKSkpe2xldCBlPU0ocik7ZSYmKGI9TChoPWUpKX1pZih0JiYwPT09Yi5sZW5ndGgmJm0pe3RyeXtyLmZvY3VzKCksci5jbGljaygpO2xldCBlPVwiU3RhdGUgLyBwcm92aW5jZVwiPT09ZHx8XCJzdGF0ZSAvIHByb3ZpbmNlXCI9PT1DKGR8fFwiXCIpOyhoPWF3YWl0ICgwLGwuZGVmYXVsdCkoKCk9PlIocil8fChlP00ocik6bnVsbCksKCk9PiExLDI1KSkmJihiPUwoaCkpfWNhdGNoe310cnl7ci5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLHtrZXk6XCJFc2NhcGVcIixidWJibGVzOiEwfSkpLHIuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleXVwXCIse2tleTpcIkVzY2FwZVwiLGJ1YmJsZXM6ITB9KSk7bGV0IGU9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50P2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQ6bnVsbDtlJiZlIT09ciYmKGUuZGlzcGF0Y2hFdmVudChuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIix7a2V5OlwiRXNjYXBlXCIsYnViYmxlczohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXl1cFwiLHtrZXk6XCJFc2NhcGVcIixidWJibGVzOiEwfSkpKSxyLmJsdXIoKX1jYXRjaHt9aWYoXCJ0cnVlXCI9PT1yLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikpe3RyeXtsZXQgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnR8fGRvY3VtZW50LmJvZHk7ZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2Vkb3duXCIse2J1YmJsZXM6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2V1cFwiLHtidWJibGVzOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIse2J1YmJsZXM6ITB9KSl9Y2F0Y2h7fWlmKGF3YWl0ICgwLGkuZGVsYXkpKDQwKSxcInRydWVcIj09PXIuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKSl7dHJ5e3IuY2xpY2soKX1jYXRjaHt9YXdhaXQgKDAsaS5kZWxheSkoNDApO3RyeXtyLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2tleTpcIkVzY2FwZVwiLGJ1YmJsZXM6ITB9KSksci5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5dXBcIix7a2V5OlwiRXNjYXBlXCIsYnViYmxlczohMH0pKSxyLmJsdXIoKX1jYXRjaHt9fX1hd2FpdCAoMCxpLmRlbGF5KSg4MCl9bGV0IHk9XCJ0cnVlXCI9PT1yLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIiksdj0oMCxzLmdldEdvb2dsZUZpZWxkRGVzY3JpcHRpb24pKGR8fFwiQ29tYm9ib3hcIik7YS5wdXNoKHtsYWJlbDpkfHxcIkNvbWJvYm94XCIscmVxdWlyZWQ6ISF5LHR5cGU6by5GSUVMRF9UWVBFLlNFTEVDVCwkbGFiZWw6biwkaW5wdXQ6cixvcHRpb25zOmIsLi4udj97ZGVzY3JpcHRpb246dn06e319KX1sZXQgYj1uLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W2pzbmFtZT1cIllQcWpiZlwiXTpub3QoW3R5cGU9XCJyYWRpb1wiXSk6bm90KFt0eXBlPVwiY2hlY2tib3hcIl0pLCB0ZXh0YXJlYVtqc25hbWU9XCJZUHFqYmZcIl0nKTtmb3IobGV0IGUgb2YgYil7bGV0IHQ9ZTtpZighUCh0KXx8YyYmYy5jb250YWlucyh0KXx8cCYmcC5jb250YWlucyh0KSljb250aW51ZTtsZXQgcj1CKHQpO2lmKCFyKWNvbnRpbnVlO2xldCBuPXQuY2xvc2VzdCgnW2pzbmFtZT1cInZoWk12ZlwiXScpfHx0LmNsb3Nlc3QoXCIuVWZuNk9cIil8fHQucGFyZW50RWxlbWVudCxpPXQuaGFzQXR0cmlidXRlKFwicmVxdWlyZWRcIil8fFwidHJ1ZVwiPT09dC5nZXRBdHRyaWJ1dGUoXCJhcmlhLXJlcXVpcmVkXCIpLGw9KDAscy5nZXRHb29nbGVGaWVsZERlc2NyaXB0aW9uKShyKTthLnB1c2goe2xhYmVsOnIscmVxdWlyZWQ6ISFpLHR5cGU6by5GSUVMRF9UWVBFLlRFWFQsJGxhYmVsOm58fHQsJGlucHV0OnQsLi4ubD97ZGVzY3JpcHRpb246bH06e319KX1sZXQgeT1uLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXVtqc25hbWU9XCJZUHFqYmZcIl0nKSx2PW4ucXVlcnlTZWxlY3RvcigndWxbanNuYW1lPVwicVEyNlVjXCJdW2FyaWEtbXVsdGlzZWxlY3RhYmxlPVwidHJ1ZVwiXScpfHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bFtqc25hbWU9XCJxUTI2VWNcIl1bYXJpYS1tdWx0aXNlbGVjdGFibGU9XCJ0cnVlXCJdJyksdz1uLnF1ZXJ5U2VsZWN0b3IoJ3VsW2pzbmFtZT1cInpqWjRUY1wiXVthcmlhLW11bHRpc2VsZWN0YWJsZT1cInRydWVcIl0nKXx8ZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWxbanNuYW1lPVwiempaNFRjXCJdW2FyaWEtbXVsdGlzZWxlY3RhYmxlPVwidHJ1ZVwiXScpLFM9bmV3IFNldCxFPW5ldyBTZXQsaz1uZXcgU2V0LFQ9bmV3IE1hcDtmb3IobGV0IGUgb2YgQXJyYXkuZnJvbSh5KSl7bGV0IHQ9ZTtpZighUCh0KSljb250aW51ZTtsZXQgcj1CKHQpO2lmKCFyfHwhci5pbmNsdWRlcyhcIiBmb3IgcXVlc3Rpb246XCIpKWNvbnRpbnVlO2xldCBuPXIuaW5kZXhPZihcIiBmb3IgcXVlc3Rpb246XCIpLG89ci5zbGljZSgwLG4pLnRyaW0oKSxpPUMoci5zbGljZShuKzE0KSksYT0vXFxzKnJlcXVpcmVkXFwuP1xccyokL2kudGVzdChpKSxsPWkucmVwbGFjZSgvXFxzKnJlcXVpcmVkXFwuP1xccyokL2ksXCJcIikudHJpbSgpO2lmKCFsfHwhbyljb250aW51ZTtsZXQgcz1ULmdldChsKTtzPyhzLm9wdGlvbnMuaW5jbHVkZXMobyl8fHMub3B0aW9ucy5wdXNoKG8pLHMuaW5wdXRzLnB1c2godCksYSYmKHMucmVxdWlyZWRGcm9tTGFiZWw9ITApKTpULnNldChsLHtvcHRpb25zOltvXSxpbnB1dHM6W3RdLHJlcXVpcmVkRnJvbUxhYmVsOmF8fHZvaWQgMH0pLGsuYWRkKHQpfWZvcihsZXRbZSx7b3B0aW9uczp0LGlucHV0czpyLHJlcXVpcmVkRnJvbUxhYmVsOm59XW9mIFQpe2lmKDA9PT1yLmxlbmd0aCljb250aW51ZTtsZXQgaT1yLnNvbWUoZT0+XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIikpfHwhIW58fEgoclswXSk7YS5wdXNoKHtsYWJlbDplLHJlcXVpcmVkOmksdHlwZTpvLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsJGxhYmVsOnJbMF0uY2xvc2VzdChcImxhYmVsXCIpfHxyWzBdLnBhcmVudEVsZW1lbnQsJGlucHV0OnJbMF0sJGNoZWNrYm94czpyLG9wdGlvbnM6dH0pfWZvcihsZXQgZSBvZiB5KXtsZXQgdD1lO2lmKCFQKHQpfHxjJiZjLmNvbnRhaW5zKHQpfHxwJiZwLmNvbnRhaW5zKHQpKWNvbnRpbnVlO2lmKHY/LmNvbnRhaW5zKHQpKXtTLmFkZCh0KTtjb250aW51ZX1pZih3Py5jb250YWlucyh0KSl7RS5hZGQodCk7Y29udGludWV9aWYoay5oYXModCkpY29udGludWU7bGV0IHI9dC5jbG9zZXN0KFwiZGl2LlB1a0ZYXCIpO2lmKHIpe2xldCBlPXIucXVlcnlTZWxlY3RvcihcImgyLnlFQUNYYlwiKTtpZihlJiYvcltlXFx1MDBlOV1zdW1bZVxcdTAwZTldL2kudGVzdChDKGUudGV4dENvbnRlbnR8fFwiXCIpKSl7bGV0IGU9KHQudmFsdWU/P1wiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpLHI9KEIodCk/P1wiXCIpLnRvTG93ZXJDYXNlKCk7aWYoXCJhdXRvZmlsbFwiPT09ZXx8ci5pbmNsdWRlcyhcImZpbGwgb3V0IHlvdXIgYXBwbGljYXRpb25cIil8fHIuaW5jbHVkZXMoXCJyXFx4ZTlzdW1cXHhlOSBpbmZvcm1hdGlvblwiKSljb250aW51ZX19bGV0IG49Qih0KTtpZighbiljb250aW51ZTtsZXQgaT10LmlkP0MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtcInVuZGVmaW5lZFwiIT10eXBlb2YgQ1NTJiZDU1MuZXNjYXBlP0NTUy5lc2NhcGUodC5pZCk6dC5pZC5yZXBsYWNlKC9bXCJcXFxcXS9nLFwiXFxcXCQmXCIpfVwiXWApPy50ZXh0Q29udGVudD8/XCJcIik6XCJcIixsPShuK1wiIFwiK2kpLnRyaW0oKXx8bjtpZih0LmNsb3Nlc3QoXCJkaXYuQzlLWjRkXCIpKXtsZXQgZT1sLnRvTG93ZXJDYXNlKCk7KGUuaW5jbHVkZXMoXCJwcml2YWN5XCIpfHxlLmluY2x1ZGVzKFwiY29uc2VudFwiKXx8ZS5pbmNsdWRlcyhcImFwcGxpY2FudCBhbmQgY2FuZGlkYXRlXCIpKSYmKG49XCJQcml2YWN5IHBvbGljeSBjb25zZW50XCIpfShsfHxcIlwiKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiY29uc2VudFwiKSYmKChsfHxcIlwiKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwic2VsZi1pZGVudGlmaWNhdGlvblwiKXx8KGx8fFwiXCIpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJ2b2x1bnRhcnlcIikpJiYobj1cIkNvbnNlbnQgdGVybXNcIik7bGV0IHM9KGx8fFwiXCIpLnRvTG93ZXJDYXNlKCksdT1zLmluY2x1ZGVzKFwicHJpdmFjeVwiKSYmcy5pbmNsdWRlcyhcImNvbnNlbnRcIil8fHMuaW5jbHVkZXMoXCJhcHBsaWNhbnQgYW5kIGNhbmRpZGF0ZSBwcml2YWN5XCIpfHxzLmluY2x1ZGVzKFwiaGVyZWJ5IGNlcnRpZnlcIikmJnMuaW5jbHVkZXMoXCJ0cnVlIGFuZCBhY2N1cmF0ZVwiKXx8cy5pbmNsdWRlcyhcImNvbnNlbnRcIikmJihzLmluY2x1ZGVzKFwic2VsZi1pZGVudGlmaWNhdGlvblwiKXx8cy5pbmNsdWRlcyhcInZvbHVudGFyeVwiKSksZD10LmNsb3Nlc3QoXCJsYWJlbFwiKXx8dC5wYXJlbnRFbGVtZW50O2EucHVzaCh7bGFiZWw6bixyZXF1aXJlZDp1fHxIKHQpLHR5cGU6by5GSUVMRF9UWVBFLkNIRUNLQk9YLCRsYWJlbDpkfHx0LCRpbnB1dDp0LCRjaGVja2JveHM6W3RdLG9wdGlvbnM6W1widHJ1ZVwiLFwiZmFsc2VcIl19KX1pZih2JiYocnx8MD09PVMuc2l6ZSkpe2xldCBlPXYucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW2pzbmFtZT1cIllQcWpiZlwiXScpO2ZvcihsZXQgdCBvZiBlKXtsZXQgZT10OyhyfHxQKGUpKSYmUy5hZGQoZSl9fWlmKHcmJjA9PT1FLnNpemUpe2xldCBlPXcucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW2pzbmFtZT1cIllQcWpiZlwiXScpO2ZvcihsZXQgdCBvZiBlKXtsZXQgZT10O1AoZSkmJkUuYWRkKGUpfX1pZih2JiZTLnNpemU+MCl7bGV0IGU9QXJyYXkuZnJvbShTKSx0PVtdO2ZvcihsZXQgciBvZiBlKXtsZXQgZT1yLmNsb3Nlc3QoJ2xpW3JvbGU9XCJvcHRpb25cIl0nKSxuPShlPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRpc3BsYXktbmFtZVwiKXx8ci52YWx1ZXx8XCJcIikudHJpbSgpfHwoZT8ucXVlcnlTZWxlY3RvcihgWyR7ZH09XCIke2Z9XCJdYCk/LnRleHRDb250ZW50Pz9cIlwiKS50cmltKCk7dC5wdXNoKG58fFwiVW5rbm93blwiKX1hLnB1c2goe2xhYmVsOlwiQWRkaXRpb25hbCBsb2NhdGlvbihzKVwiLHJlcXVpcmVkOiExLHR5cGU6by5GSUVMRF9UWVBFLkNIRUNLQk9YLCRsYWJlbDp2LCRpbnB1dDplWzBdLCRjaGVja2JveHM6ZSxvcHRpb25zOnR9KX1pZih3JiZFLnNpemU+MCl7bGV0IGU9QXJyYXkuZnJvbShFKSx0PVtdO2ZvcihsZXQgciBvZiBlKXtsZXQgZT1yLmNsb3Nlc3QoJ2xpW3JvbGU9XCJvcHRpb25cIl0nKSxuPShlPy5xdWVyeVNlbGVjdG9yKGBbJHtkfT1cIiR7Zn1cIl1gKT8udGV4dENvbnRlbnQ/P1wiXCIpLnRyaW0oKXx8KGU/LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fHIudmFsdWV8fFwiXCIpLnRyaW0oKTt0LnB1c2gobnx8XCJVbmtub3duXCIpfWEucHVzaCh7bGFiZWw6XCJSYWNlIC8gZXRobmljIGdyb3VwXCIscmVxdWlyZWQ6ITAsdHlwZTpvLkZJRUxEX1RZUEUuQ0hFQ0tCT1gsJGxhYmVsOncsJGlucHV0OmVbMF0sJGNoZWNrYm94czplLG9wdGlvbnM6dH0pfWlmKGMpe2xldCBlPWMucXVlcnlTZWxlY3RvcihcImxpLlZkTUN0Y1wiKXx8Yy5xdWVyeVNlbGVjdG9yKCdsaVtqc25hbWU9XCJsVm5zMFwiXScpfHwoYy5xdWVyeVNlbGVjdG9yKCdbanNuYW1lPVwib3VEcURiXCJdJyk/YzpudWxsKTtpZihlKXtsZXQgcj1hd2FpdCBlZShlLChlLHQpPT5ZKGUsdCksUixMLHQpO3IubGVuZ3RoPjAmJmEucHVzaCh7dHlwZTpvLkZJRUxEX1RZUEUuRURVQ0FUSU9OLGxhYmVsOlwiRWR1Y2F0aW9uXCIscmVxdWlyZWQ6ITAsY2hpbGRyZW46cn0pfX1pZihwKXtsZXQgZT1laSgpLHI9ZW4oKSxuPWVbMF0/LmNoaWxkcmVuPz9yLGk9bmV3IE1hcDtyLmZvckVhY2goZT0+aS5zZXQoZS5sYWJlbCx7Li4uZX0pKSxuLmZvckVhY2goZT0+aS5zZXQoZS5sYWJlbCxlKSksbj1yLm1hcChlPT5pLmdldChlLmxhYmVsKT8/ZSk7bGV0IGw9ZT0+e2xldCB0PVIoZSk7aWYodClyZXR1cm4gdDtsZXQgcj1lLmNsb3Nlc3QoJ1tqc25hbWU9XCJ3U0FTdWVcIl0nKSxuPXI/LnF1ZXJ5U2VsZWN0b3IoYHVsW2pzbmFtZT1cIiR7dX1cIl1bcm9sZT1cImxpc3Rib3hcIl1gKTtyZXR1cm4gbnx8TihlKX0scz1uLmZpbmQoZT0+XCJFbmQgTW9udGhcIj09PWUubGFiZWwpO2lmKHM/LiRpbnB1dCYmKCFzLm9wdGlvbnN8fDA9PT1zLm9wdGlvbnMubGVuZ3RoKSl7bGV0IGU9cy4kaW5wdXQuY2xvc2VzdCgnW2pzbmFtZT1cIlFCR0FTXCJdJykscj1lPy5xdWVyeVNlbGVjdG9yKGB1bFtqc25hbWU9XCIke3V9XCJdW3JvbGU9XCJsaXN0Ym94XCJdYCk7aWYocil7bGV0IGU9TChyKTtlLmxlbmd0aCYmKHMub3B0aW9ucz1lKX10JiYhcy5vcHRpb25zPy5sZW5ndGgmJihzLm9wdGlvbnM9YXdhaXQgJChzLiRpbnB1dCxsLEwpKX1sZXQgYz1uLmZpbmQoZT0+XCJTdGFydCBNb250aFwiPT09ZS5sYWJlbCk7dCYmYz8uJGlucHV0JiYoIWMub3B0aW9uc3x8MD09PWMub3B0aW9ucy5sZW5ndGgpJiYoYy5vcHRpb25zPWF3YWl0ICQoYy4kaW5wdXQsbCxMKSkscyYmKCFzLm9wdGlvbnN8fDA9PT1zLm9wdGlvbnMubGVuZ3RoKSYmYz8ub3B0aW9ucz8ubGVuZ3RoJiYocy5vcHRpb25zPVsuLi5jLm9wdGlvbnNdKTtsZXQgZD1uLmZpbmQoZT0+XCJTdGF0ZSAvIHByb3ZpbmNlXCI9PT1lLmxhYmVsKTt0JiZkPy4kaW5wdXQmJighZC5vcHRpb25zfHwwPT09ZC5vcHRpb25zLmxlbmd0aCkmJihkLm9wdGlvbnM9YXdhaXQgJChkLiRpbnB1dCxsLEwpKSxuLmxlbmd0aD4wJiZhLnB1c2goe3R5cGU6by5GSUVMRF9UWVBFLkVNUExPWU1FTlQsbGFiZWw6XCJXb3JrIGV4cGVyaWVuY2VcIixyZXF1aXJlZDohMCxjaGlsZHJlbjpufSl9bGV0IEY9bmV3IFNldCxJPWEuZmlsdGVyKGU9PntsZXQgdD1lLnNjb3BlfHxcIlwiLHI9YCR7ZS50eXBlfToke2UubGFiZWwudG9Mb3dlckNhc2UoKX06JHt0fWA7cmV0dXJuIUYuaGFzKHIpJiYoRi5hZGQociksITApfSk7cmV0dXJuIEl9ZnVuY3Rpb24gZXMoZSl7dHJ5e2xldCB0PWU7aWYoZS50eXBlPT09by5GSUVMRF9UWVBFLlRFWFQmJnQuJGlucHV0KXtsZXQgZT10LiRpbnB1dDtyZXR1cm4gZT8udmFsdWU/P1wiXCJ9aWYoZS50eXBlPT09by5GSUVMRF9UWVBFLlNFTEVDVCYmdC4kaW5wdXQpe2xldCByPXQuJGlucHV0LG49ci5jbG9zZXN0KCdbanNuYW1lPVwid1NBU3VlXCJdJyl8fHIucGFyZW50RWxlbWVudCxvPXIucXVlcnlTZWxlY3RvcignW2pzbmFtZT1cIkZiMEJpZlwiXScpfHxuPy5xdWVyeVNlbGVjdG9yKCdbanNuYW1lPVwiRmIwQmlmXCJdJyksaT1DKG8/LnRleHRDb250ZW50Pz9cIlwiKSxhPWkudG9Mb3dlckNhc2UoKSxsPUMoZS5sYWJlbD8/XCJcIikudG9Mb3dlckNhc2UoKTtpZighaSlyZXR1cm5cIlwiO3JldHVybiBhPT09bD9cIlwiOml9aWYoZS50eXBlPT09by5GSUVMRF9UWVBFLlJBRElPR1JPVVAmJnQuJHJhZGlvUGFyZW50KXtsZXQgcj1BcnJheS5mcm9tKHQuJHJhZGlvUGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpKSxuPXIuZmluZChlPT5lLmNoZWNrZWQpO2lmKCFuKXJldHVyblwiXCI7bGV0IG89ZS5vcHRpb25zLGk9ci5pbmRleE9mKG4pO2lmKG8mJmk+PTAmJmk8by5sZW5ndGgpcmV0dXJuIG9baV07bGV0IGE9QihuKTtpZihhKXJldHVybiBhO3JldHVybiBuLnZhbHVlPz9cIlwifWlmKGUudHlwZT09PW8uRklFTERfVFlQRS5DSEVDS0JPWCYmdC4kY2hlY2tib3hzPy5sZW5ndGgpe2xldCByPWUub3B0aW9ucztpZihyPy5sZW5ndGgmJlwidHJ1ZVwiIT09clswXSYmXCJmYWxzZVwiIT09clswXSl7bGV0IGU9W107cmV0dXJuIHQuJGNoZWNrYm94cy5mb3JFYWNoKCh0LG4pPT57bGV0IG89dCxpPW8uY2xvc2VzdCgnbGlbcm9sZT1cIm9wdGlvblwiXScpLGE9by5jaGVja2VkfHxcInRydWVcIj09PW8uZ2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIpfHxpPy5nZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIpPT09XCJ0cnVlXCI7YSYmcltuXSYmZS5wdXNoKHJbbl0pfSksZS5qb2luKFwiLCBcIil9cmV0dXJuIHQuJGNoZWNrYm94c1swXS5jaGVja2VkP1widHJ1ZVwiOlwiZmFsc2VcIn19Y2F0Y2h7fXJldHVyblwiXCJ9ZnVuY3Rpb24gZXUoZSx0KXtpZigwPT09ZS5sZW5ndGh8fDA9PT10Lmxlbmd0aClyZXR1cm4hMTtsZXQgcj1lPT57bGV0IHQ9U3RyaW5nKGU/P1wiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO3JldHVyblwidHJ1ZVwiPT09dHx8XCJ5ZXNcIj09PXR8fFwiMVwiPT09dHx8XCJ5XCI9PT10fSxuPWU9PlwiXCIhPT1TdHJpbmcoZT8/XCJcIikudHJpbSgpO2ZvcihsZXQgbz0wO288dC5sZW5ndGg7bysrKXtsZXQgaT10W29dLGE9ZVtvXT8/e30sbD0oaS5jaGlsZHJlbj8/W10pLmZpbHRlcihlPT4hIWU/LmxhYmVsKTtpZigwPT09bC5sZW5ndGgpcmV0dXJuITE7bGV0IHM9bC5maWx0ZXIoZT0+ITA9PT1lLnJlcXVpcmVkKSx1PXMubGVuZ3RoPjA/czpsLGM9cihhW1wiVGhpcyBpcyB5b3VyIGN1cnJlbnQgam9iXCJdKTtmb3IobGV0IGUgb2YgdSl7bGV0IHQ9ZS5sYWJlbDtpZih0JiYoIWN8fFwiRW5kIE1vbnRoXCIhPT10JiZcIkVuZCBZZWFyXCIhPT10KSl7aWYoXCJTdGF0ZVwiPT09dHx8XCJTdGF0ZSAvIHByb3ZpbmNlXCI9PT10KXtpZihuKGEuU3RhdGUpfHxuKGFbXCJTdGF0ZSAvIHByb3ZpbmNlXCJdKSljb250aW51ZTtyZXR1cm4hMX1pZighbihhW3RdKSlyZXR1cm4hMX19fXJldHVybiEwfWFzeW5jIGZ1bmN0aW9uIGVjKGU9ITApe2xldCB0PWF3YWl0IGV0KGUpO3JldHVybiB0Lmxlbmd0aD90Lm1hcChlPT57bGV0IHQ9e307cmV0dXJuIGUuY2hpbGRyZW4/LmZvckVhY2goZT0+e3RbZS5sYWJlbF09ZXMoZSl9KSx0fSk6W119ZnVuY3Rpb24gZWQoKXtsZXQgZT1laSgpO3JldHVybiBlLmxlbmd0aD9lLm1hcChlPT57bGV0IHQ9e307cmV0dXJuIGUuY2hpbGRyZW4/LmZvckVhY2goZT0+e3RbZS5sYWJlbF09ZXMoZSl9KSx0fSk6W119YXN5bmMgZnVuY3Rpb24gZWYoZSl7bGV0IHQ9e307Zm9yKGxldCByIG9mIGUpdHJ5e2lmKHIudHlwZT09PW8uRklFTERfVFlQRS5FTVBMT1lNRU5UfHxyLnR5cGU9PT1vLkZJRUxEX1RZUEUuRURVQ0FUSU9OKWNvbnRpbnVlO3Rbci5sYWJlbF09ZXMocil9Y2F0Y2goZSl7dFtyLmxhYmVsXT1cIlwifXJldHVybiB0fWZ1bmN0aW9uIGVwKGUpe2xldCB0PShlLnRleHRDb250ZW50fHxcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKSxyPShlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIpLnRvTG93ZXJDYXNlKCk7cmV0dXJuISEodC5pbmNsdWRlcyhcIm5leHRcIil8fHIuaW5jbHVkZXMoXCJuZXh0XCIpfHx0LmluY2x1ZGVzKFwiY29udGludWVcIil8fHIuaW5jbHVkZXMoXCJjb250aW51ZVwiKXx8dC5pbmNsdWRlcyhcInN1Ym1pdFwiKXx8ci5pbmNsdWRlcyhcInN1Ym1pdFwiKSl9ZnVuY3Rpb24gZW0oZSl7aWYoXCJCVVRUT05cIj09PWUudGFnTmFtZSlyZXR1cm4gZXAoZSk7aWYoXCJidXR0b25cIj09PWUuZ2V0QXR0cmlidXRlKFwicm9sZVwiKSl7bGV0IHQ9KGUuZ2V0QXR0cmlidXRlKFwianNuYW1lXCIpfHxcIlwiKS50b0xvd2VyQ2FzZSgpO2lmKFwib2Nwa29lXCI9PT10fHxcIm0ydXl2ZFwiPT09dClyZXR1cm4hMDtsZXQgcj0oZS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCksbj0oZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlwiKS50b0xvd2VyQ2FzZSgpO3JldHVybiByLmluY2x1ZGVzKFwibmV4dFwiKXx8ci5pbmNsdWRlcyhcImNvbnRpbnVlXCIpfHxuLmluY2x1ZGVzKFwibmV4dFwiKXx8bi5pbmNsdWRlcyhcImNvbnRpbnVlXCIpfHxyLmluY2x1ZGVzKFwic3VibWl0XCIpfHxuLmluY2x1ZGVzKFwic3VibWl0XCIpfHxcImFwcGx5XCI9PT1yfHxcImFwcGx5XCI9PT1ufXJldHVybiExfWZ1bmN0aW9uIGVoKCl7cmV0dXJuIHkoKS5pZHh9ZnVuY3Rpb24gZWcoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbD1cIk5leHRcIl0nKT8/ZS5xdWVyeVNlbGVjdG9yKCdidXR0b25banNuYW1lPVwiT0Nwa29lXCJdJyk/P2UucXVlcnlTZWxlY3RvcignZGl2W3JvbGU9XCJidXR0b25cIl1banNuYW1lPVwiT0Nwa29lXCJdJyk/P0FycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKS5maW5kKGU9PlAoZSkmJlwibmV4dFwiPT09KGUudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpKT8/bnVsbDtpZih0JiZQKHQpKXJldHVybiB0O2xldCByPWUucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWwqPVwiU3VibWl0IHByb2ZpbGVcIl0nKT8/ZS5xdWVyeVNlbGVjdG9yKCdkaXZbcm9sZT1cImJ1dHRvblwiXVthcmlhLWxhYmVsKj1cIlN1Ym1pdCBwcm9maWxlXCJdJyk/P251bGw7aWYociYmUChyKSlyZXR1cm4gcjtsZXQgbj1lLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblthcmlhLWxhYmVsPVwiQXBwbHlcIl0nKT8/ZS5xdWVyeVNlbGVjdG9yKCdkaXZbcm9sZT1cImJ1dHRvblwiXVthcmlhLWxhYmVsPVwiQXBwbHlcIl0nKT8/bnVsbDtpZihuJiZQKG4pKXJldHVybiBuO2xldCBvPWUucXVlcnlTZWxlY3RvcignYnV0dG9uW2pzbmFtZT1cIk0yVVlWZFwiXScpPz9lLnF1ZXJ5U2VsZWN0b3IoJ2Rpdltyb2xlPVwiYnV0dG9uXCJdW2pzbmFtZT1cIk0yVVlWZFwiXScpPz9BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKSkuZmluZChlPT57aWYoIVAoZSl8fFwiZ1EyWGllXCI9PT1lLmdldEF0dHJpYnV0ZShcImpzbmFtZVwiKSlyZXR1cm4hMTtsZXQgdD0oZS50ZXh0Q29udGVudHx8XCJcIikudG9Mb3dlckNhc2UoKSxyPShlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIpLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHQuaW5jbHVkZXMoXCJzdWJtaXRcIil8fHIuaW5jbHVkZXMoXCJzdWJtaXRcIil8fFwiYXBwbHlcIj09PXR8fFwiYXBwbHlcIj09PXJ9KT8/bnVsbDtpZihvJiZQKG8pKXJldHVybiBvO2xldCBpPWUucXVlcnlTZWxlY3RvcignZGl2W3JvbGU9XCJidXR0b25cIl1bYXJpYS1sYWJlbCo9XCJTdWJtaXRcIl0sIGRpdltyb2xlPVwiYnV0dG9uXCJdW2FyaWEtbGFiZWwqPVwic3VibWl0XCJdJyk7cmV0dXJuIGkmJlAoaSk/aTpudWxsfWZ1bmN0aW9uIGViKGUpe2xldCB0PWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cmV0dXJuIHQudG9wPHdpbmRvdy5pbm5lckhlaWdodCYmdC5ib3R0b20+MH1mdW5jdGlvbiBleSgpe2xldCBlPVtlPT5cIm5leHRcIj09PWUsZT0+ZS5pbmNsdWRlcyhcInN1Ym1pdCBwcm9maWxlXCIpfHxlLmluY2x1ZGVzKFwic3VibWl0IHByb2ZpbGUgJiBjb250aW51ZVwiKSxlPT5cImFwcGx5XCI9PT1lXSx0PWU9PlwiYmFja1wiPT09ZXx8XCJzYXZlXCI9PT1lfHxcImNhbmNlbFwiPT09ZXx8ZS5pbmNsdWRlcyhcImNhbmNlbCBlZGl0aW5nXCIpfHxlLmluY2x1ZGVzKFwiYmFjayB0byBjYXJlZXJzIHByb2ZpbGVcIikscj1bXSxuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIiksbz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbcm9sZT1cImJ1dHRvblwiXScpO2ZvcihsZXQgaSBvZlsuLi5BcnJheS5mcm9tKG4pLC4uLkFycmF5LmZyb20obyldKXtpZighUChpKSljb250aW51ZTtsZXQgbj1pLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2lmKG4udG9wPj13aW5kb3cuaW5uZXJIZWlnaHR8fG4uYm90dG9tPD0wKWNvbnRpbnVlO2xldCBvPShpLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO2lmKCFvfHx0KG8pKWNvbnRpbnVlO2xldCBhPWUuc29tZShlPT5lKG8pKTthJiZyLnB1c2goaSl9aWYoMD09PXIubGVuZ3RoKXJldHVybiBudWxsO3Iuc29ydCgoZSx0KT0+dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO2xldCBpPWU9PlwibmV4dFwiPT09ZXx8ZS5pbmNsdWRlcyhcInN1Ym1pdCBwcm9maWxlXCIpfHxlLmluY2x1ZGVzKFwic3VibWl0IHByb2ZpbGUgJiBjb250aW51ZVwiKSxhPXIuZmlsdGVyKGU9PmkoKGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCkpKTtyZXR1cm4gYS5sZW5ndGg+MD9hWzBdOnJbMF19ZnVuY3Rpb24gZXYoKXtsZXQgZT1bXCIuUndneDJkXCIsXCIuZFdYZ0JlXCIsXCIud3ZJUnFiXCIsXCIuZmc3OGdcIixcIi5sdFFBZlwiLFwiLmdGbk81ZFwiXSx0PVtdO2ZvcihsZXQgciBvZiBlKWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocikuZm9yRWFjaChlPT57UChlKSYmZWIoZSkmJnQucHVzaChlKX0pO3JldHVybiAwPT09dC5sZW5ndGg/bnVsbDoodC5zb3J0KChlLHQpPT50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcC1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCksdFswXSl9ZnVuY3Rpb24gZXcoZSl7bGV0IHQ9ZS5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbD1cIk5leHRcIl0nKT8/ZS5xdWVyeVNlbGVjdG9yKCdidXR0b25banNuYW1lPVwiT0Nwa29lXCJdJyk/P2UucXVlcnlTZWxlY3RvcignZGl2W3JvbGU9XCJidXR0b25cIl1banNuYW1lPVwiT0Nwa29lXCJdJyk7cmV0dXJuISEodCYmUCh0KSl9ZnVuY3Rpb24gZVMoKXtsZXQgZT1bXCIuUndneDJkXCIsXCIuZFdYZ0JlXCIsXCIud3ZJUnFiXCIsXCIuZmc3OGdcIixcIi5sdFFBZlwiLFwiLmdGbk81ZFwiXSx0PVtdO2ZvcihsZXQgciBvZiBlKWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocikuZm9yRWFjaChlPT57UChlKSYmZWIoZSkmJnQucHVzaChlKX0pO2lmKDA9PT10Lmxlbmd0aClyZXR1cm4gbnVsbDt0LnNvcnQoKGUsdCk9PnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtsZXQgcj10LmZpbmQoZT0+ZXcoZSkpO3JldHVybiByfHx0WzBdfWZ1bmN0aW9uIGVFKGUpe2xldCB0PShlLnRleHRDb250ZW50fHxcIlwiKS50b0xvd2VyQ2FzZSgpLHI9KGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJcIikudG9Mb3dlckNhc2UoKTtyZXR1cm4hISh0LmluY2x1ZGVzKFwiY29udGludWVcIil8fHIuaW5jbHVkZXMoXCJjb250aW51ZVwiKXx8KHQuaW5jbHVkZXMoXCJuZXh0XCIpfHxyLmluY2x1ZGVzKFwibmV4dFwiKSkmJiF0LmluY2x1ZGVzKFwic3VibWl0XCIpJiYhci5pbmNsdWRlcyhcInN1Ym1pdFwiKXx8KHQuaW5jbHVkZXMoXCJzdWJtaXRcIil8fHIuaW5jbHVkZXMoXCJzdWJtaXRcIikpJiYodC5pbmNsdWRlcyhcImNvbnRpbnVlXCIpfHxyLmluY2x1ZGVzKFwiY29udGludWVcIikpKX1mdW5jdGlvbiBleCgpe2xldCBlPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKSkuZmlsdGVyKGU9PlAoZSkmJmVwKGUpJiZcImdRMlhpZVwiIT09ZS5nZXRBdHRyaWJ1dGUoXCJqc25hbWVcIikpLHQ9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbcm9sZT1cImJ1dHRvblwiXScpKS5maWx0ZXIoZT0+UChlKSYmZW0oZSkmJlwiZ2VnaGtiXCIhPT0oZS5nZXRBdHRyaWJ1dGUoXCJqc25hbWVcIil8fFwiXCIpLnRvTG93ZXJDYXNlKCkpLHI9Wy4uLmUsLi4udF0sbj1yLmZpbHRlcihlPT57bGV0IHQ9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm4gdC50b3A8d2luZG93LmlubmVySGVpZ2h0JiZ0LmJvdHRvbT4wfSk7aWYoMD09PW4ubGVuZ3RoKXJldHVybiBudWxsO24uc29ydCgoZSx0KT0+dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO2xldCBvPW4uZmlsdGVyKGU9PmVFKGUpKTtyZXR1cm4gby5sZW5ndGg+MD9vWzBdOm5bMF19ZnVuY3Rpb24gZUMoZSl7bGV0IHQ9ZS50b0xvd2VyQ2FzZSgpO3JldHVybi9yZXZpZXdcXHMqJlxccyphcHBseXxyZXZpZXdcXHMrYW5kXFxzK2FwcGx5Ly50ZXN0KHQpfHx0LmluY2x1ZGVzKFwicmV2aWV3XCIpJiZ0LmluY2x1ZGVzKFwiYXBwbHlcIil9ZnVuY3Rpb24gZUEoZSx0KXtyZXR1cm4gZSYmKHR8fFwiYXBwbHlcIiE9PShlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpKT9lOm51bGx9ZnVuY3Rpb24gZWsoKXtsZXQgZT1laigpLHQ9ZUMoZSkscj1leSgpLG49ZUEocix0KTtpZihuKXJldHVybiBuO2xldCBvPXQ/ZXYoKTplUygpO2lmKG8pe2xldCBlPWVnKG8pLHI9ZUEoZSx0KTtpZihyKXJldHVybiByfWxldCBpPWV4KCksYT1lQShpLHQpO2lmKGEpcmV0dXJuIGE7bGV0IGw9ZS50b0xvd2VyQ2FzZSgpO2lmKCFsLmluY2x1ZGVzKFwiY2FyZWVycyBwcm9maWxlXCIpKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlJ3Z3gyZFwiKSxyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZFdYZ0JlXCIpO2ZvcihsZXQgbiBvZlsuLi5lLC4uLnJdKXtpZighUChuKSljb250aW51ZTtsZXQgZT1lZyhuKSxyPWVBKGUsdCk7aWYocilyZXR1cm4gcn19bGV0IHM9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25banNuYW1lPVwiTTJVWVZkXCJdJykpLmNvbmNhdChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpLmZpbHRlcihlPT4oZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlwiKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwic3VibWl0IHByb2ZpbGVcIikpKSx1PXMuZmluZChlPT5QKGUpKSxjPWVBKHU/P251bGwsdCk7aWYoYylyZXR1cm4gYztsZXQgZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnd2SVJxYlwiKTtmb3IobGV0IGUgb2YgZCl7bGV0IHI9ZS5xdWVyeVNlbGVjdG9yKCdidXR0b25banNuYW1lPVwiTTJVWVZkXCJdJyk/P2UucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWwqPVwiU3VibWl0IHByb2ZpbGVcIl0nKSxuPWVBKHImJlAocik/cjpudWxsLHQpO2lmKG4pcmV0dXJuIG59bGV0IGY9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKS5maWx0ZXIoZT0+UChlKSYmZXAoZSkmJlwiZ1EyWGllXCIhPT1lLmdldEF0dHJpYnV0ZShcImpzbmFtZVwiKSkscD1mLmZpbmQoZT0+e2xldCB0PShlLnRleHRDb250ZW50fHxcIlwiKS50b0xvd2VyQ2FzZSgpLHI9KGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJcIikudG9Mb3dlckNhc2UoKTtyZXR1cm4odC5pbmNsdWRlcyhcIm5leHRcIil8fHQuaW5jbHVkZXMoXCJjb250aW51ZVwiKXx8ci5pbmNsdWRlcyhcIm5leHRcIil8fHIuaW5jbHVkZXMoXCJjb250aW51ZVwiKSkmJiF0LmluY2x1ZGVzKFwic3VibWl0XCIpJiYhci5pbmNsdWRlcyhcInN1Ym1pdFwiKX0pLG09ZUEocD8/bnVsbCx0KTtpZihtKXJldHVybiBtO2xldCBoPWYuZmluZChlPT4oZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlwiKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwic3VibWl0XCIpfHwoZS50ZXh0Q29udGVudHx8XCJcIikudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcInN1Ym1pdFwiKSksZz1oPz9mWzBdPz9udWxsO3JldHVybiBlQShnLHQpfWZ1bmN0aW9uIGVUKGUpe2lmKCFlfHwhKGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpcmV0dXJuITE7bGV0IHQ9ZWsoKTtpZih0JiYodD09PWV8fHQuY29udGFpbnMoZSkpKXJldHVybiEwO2xldCByPWUuY2xvc2VzdD8uKFwiYnV0dG9uXCIpO2lmKHIpcmV0dXJuXCJnUTJYaWVcIiE9PXIuZ2V0QXR0cmlidXRlKFwianNuYW1lXCIpJiZlcChyKTtsZXQgbj1lLmNsb3Nlc3Q/LignZGl2W3JvbGU9XCJidXR0b25cIl0nKTtyZXR1cm4hIW4mJm4uZ2V0QXR0cmlidXRlKFwianNuYW1lXCIpPy50b0xvd2VyQ2FzZSgpIT09XCJnZWdoa2JcIiYmZW0obil9ZnVuY3Rpb24gZUYoKXtyZXR1cm4geSgpLmlkeH1mdW5jdGlvbiBlSSgpe3JldHVybiBlRigpfWZ1bmN0aW9uIGVqKGUpe2xldCB0PWU/P2RvY3VtZW50LmJvZHkscj10LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYuUHVrRlhcIik7Zm9yKGxldCBlIG9mIHIpe2xldCB0PWUucXVlcnlTZWxlY3RvcihcImgyLnlFQUNYYlwiKTtpZighdCljb250aW51ZTtsZXQgcj13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KTtpZihcIm5vbmVcIj09PXIuZGlzcGxheXx8XCJoaWRkZW5cIj09PXIudmlzaWJpbGl0eSljb250aW51ZTtsZXQgbj10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2lmKG4ud2lkdGg+MCYmbi5oZWlnaHQ+MClyZXR1cm4odC50ZXh0Q29udGVudD8/XCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl9aWYodC5xdWVyeVNlbGVjdG9yKFwiZGl2LnhCQ0RCZS5rQVpwbGVcIil8fHQucXVlcnlTZWxlY3RvcihcImRpdi54QkNEQmVcIikpcmV0dXJuXCJFRU9cIjtsZXQgbj10LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKXx8dC5xdWVyeVNlbGVjdG9yKFwiaDJcIiksbz0obj8udGV4dENvbnRlbnQ/P1wiXCIpLnRvTG93ZXJDYXNlKCk7aWYoL3ZvbHVudGFyeXxzZWxmLWlkZW50aWZpY2F0aW9uLy50ZXN0KG8pKXJldHVyblwiRUVPXCI7aWYodC5xdWVyeVNlbGVjdG9yKFwiZGl2LkM5S1o0ZFwiKSlyZXR1cm5cIkNvbnNlbnRcIjtsZXR7c2VsZWN0ZWRUYWI6aX09eSh0KTtpZihpKXtsZXQgZT0oaS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpPz9cIlwiKS50cmltKCksdD1lLnJlcGxhY2UoL15TdGVwXFxzKlxcZCtcXHMqLVxccyovaSxcIlwiKS50cmltKCk7aWYodClyZXR1cm4gdDtsZXQgcj1pLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLkpqV0FuZVwiKSxuPShyPy50ZXh0Q29udGVudD8/XCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCk7aWYobilyZXR1cm4gbn1yZXR1cm5cIlwifWFzeW5jIGZ1bmN0aW9uIGVEKGUsdCxyKXtsZXQgbj1lPT4hZS5kaXNhYmxlZCYmXCJ0cnVlXCIhPT1lLmdldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIik7aWYobihlKSlyZXR1cm4gZTtsZXQgbz1EYXRlLm5vdygpK3Q7Zm9yKDtEYXRlLm5vdygpPG8mJihhd2FpdCAoMCxpLmRlbGF5KShyKSxlLmlzQ29ubmVjdGVkKTspaWYobihlKSlyZXR1cm4gZTtyZXR1cm4gbnVsbH1hc3luYyBmdW5jdGlvbiBlUChlLHQscil7YXdhaXQgKDAsaS5kZWxheSkoODAwKTtsZXQgbj1EYXRlLm5vdygpK3Q7Zm9yKDtEYXRlLm5vdygpPG47KXtsZXQgdD1laigpO2lmKFwiXCIhPT10JiZ0IT09ZSlyZXR1cm4hMDthd2FpdCAoMCxpLmRlbGF5KShyKX1yZXR1cm4hMX1mdW5jdGlvbiBlXygpe3JldHVyblwiZG9jcy5nb29nbGUuY29tXCI9PT13aW5kb3cubG9jYXRpb24uaG9zdG5hbWUmJndpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2Zvcm1zL1wiKX1hc3luYyBmdW5jdGlvbiBlTCgpe2xldCBlPVtdO2F3YWl0ICgwLGkuZGVsYXkpKDUwMCk7bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2pzbmFtZT1cIldzall3Y1wiXSwgZGl2LmdlUzVuJyk7Zm9yKGxldCByIG9mIHQpe2xldCB0PXI7aWYoIVAodCkpY29udGludWU7bGV0IG49dC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5NN2VNZVwiKSxpPUMobj8udGV4dENvbnRlbnR8fFwiXCIpO2lmKCFpKWNvbnRpbnVlO2xldCBhPSEhdC5xdWVyeVNlbGVjdG9yKFwic3Bhbi52bnVtZ2ZcIil8fG51bGwhPT10LnF1ZXJ5U2VsZWN0b3IoJ1thcmlhLXJlcXVpcmVkPVwidHJ1ZVwiXScpLGw9dC5xdWVyeVNlbGVjdG9yKFwiZGl2LmJqMDg0ZFwiKTtpZihsKWNvbnRpbnVlO2xldCBzPXQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJyYWRpb2dyb3VwXCJdJyk7aWYocyl7bGV0IHI9QXJyYXkuZnJvbShzLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwicmFkaW9cIl0nKSksbD1bXTtmb3IobGV0IGUgb2Ygcil7bGV0IHQ9KGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpfHxcIlwiKS50cmltKCk7dCYmbC5wdXNoKHQpfWUucHVzaCh7bGFiZWw6aSxyZXF1aXJlZDphLHR5cGU6by5GSUVMRF9UWVBFLlJBRElPR1JPVVAsJGxhYmVsOm58fHQsJGlucHV0OnJbMF18fHMsJHJhZGlvUGFyZW50OnMsb3B0aW9uczpsfSk7Y29udGludWV9bGV0IHU9QXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwiY2hlY2tib3hcIl0nKSk7aWYodS5sZW5ndGg+MCl7bGV0IHI9W107Zm9yKGxldCBlIG9mIHUpe2xldCB0PShlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fGUuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKXx8XCJcIikudHJpbSgpO3QmJnIucHVzaCh0KX1lLnB1c2goe2xhYmVsOmkscmVxdWlyZWQ6YSx0eXBlOm8uRklFTERfVFlQRS5DSEVDS0JPWCwkbGFiZWw6bnx8dCwkaW5wdXQ6dVswXSwkY2hlY2tib3hzOnUsb3B0aW9uczpyfSk7Y29udGludWV9bGV0IGM9dC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImxpc3Rib3hcIl0nKTtpZihjKXtsZXQgcj1BcnJheS5mcm9tKGMucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJvcHRpb25cIl0sIFtkYXRhLXZhbHVlXScpKSxsPVtdO2ZvcihsZXQgZSBvZiByKXtsZXQgdD0oZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpfHxlLnRleHRDb250ZW50fHxcIlwiKS50cmltKCk7dCYmbC5wdXNoKHQpfWUucHVzaCh7bGFiZWw6aSxyZXF1aXJlZDphLHR5cGU6by5GSUVMRF9UWVBFLlNFTEVDVCwkbGFiZWw6bnx8dCwkaW5wdXQ6YyxvcHRpb25zOmx9KTtjb250aW51ZX1sZXQgZD10LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJ1cmxcIl0sIGlucHV0W3R5cGU9XCJ0ZWxcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0nKSxmPXQucXVlcnlTZWxlY3RvcihcInRleHRhcmVhXCIpLHA9ZHx8ZjtpZihwKXtlLnB1c2goe2xhYmVsOmkscmVxdWlyZWQ6YSx0eXBlOm8uRklFTERfVFlQRS5URVhULCRsYWJlbDpufHx0LCRpbnB1dDpwfSk7Y29udGludWV9fXJldHVybiBlfWZ1bmN0aW9uIGVSKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInBhZ2VIaXN0b3J5XCJdJyk/LnZhbHVlfHxcIlwiLHQ9Qyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkhaaDE2ZFwiKT8udGV4dENvbnRlbnR8fFwiXCIpO3JldHVybmAke2V9fCR7dH1gfWZ1bmN0aW9uIGVPKGUpe2lmKCFlfHwhKGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpcmV0dXJuITE7bGV0IHQ9ZS5jbG9zZXN0KCdkaXZbcm9sZT1cImJ1dHRvblwiXScpO2lmKCF0KXJldHVybiExO2xldCByPXQuZ2V0QXR0cmlidXRlKFwianNuYW1lXCIpfHxcIlwiO2lmKFwiT0Nwa29lXCI9PT1yfHxcIk0yVVlWZFwiPT09cilyZXR1cm4hMDtsZXQgbj0odC50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCk7cmV0dXJuISEobi5pbmNsdWRlcyhcIm5leHRcIil8fG4uaW5jbHVkZXMoXCJcXHU0ZTBiXFx1NGUwMFxcdTk4NzVcIil8fG4uaW5jbHVkZXMoXCJzdWJtaXRcIil8fG4uaW5jbHVkZXMoXCJcXHU2M2QwXFx1NGVhNFwiKSl9ZnVuY3Rpb24gZU0oZSl7aWYoIWV8fCEoZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlyZXR1cm4hMTtsZXQgdD1lLmNsb3Nlc3QoJ2Rpdltyb2xlPVwiYnV0dG9uXCJdJyk7aWYoIXQpcmV0dXJuITE7bGV0IHI9dC5nZXRBdHRyaWJ1dGUoXCJqc25hbWVcIil8fFwiXCI7aWYoXCJNMlVZVmRcIj09PXIpcmV0dXJuITA7bGV0IG49KHQudGV4dENvbnRlbnR8fFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpLG89KHQuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8XCJcIikudG9Mb3dlckNhc2UoKTtyZXR1cm4gbi5pbmNsdWRlcyhcInN1Ym1pdFwiKXx8bi5pbmNsdWRlcyhcIlxcdTYzZDBcXHU0ZWE0XCIpfHxvLmluY2x1ZGVzKFwic3VibWl0XCIpfWFzeW5jIGZ1bmN0aW9uIGVOKGUsdD02ZTMscj0yNTApe2F3YWl0ICgwLGkuZGVsYXkpKDMwMCk7bGV0IG49RGF0ZS5ub3coKSt0O2Zvcig7RGF0ZS5ub3coKTxuOyl7bGV0IHQ9ZVIoKTtpZih0IT09ZSlyZXR1cm4hMDthd2FpdCAoMCxpLmRlbGF5KShyKX1yZXR1cm4hMX1mdW5jdGlvbiBlJCgpe2xldCBlPXt9LHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2pzbmFtZT1cIldzall3Y1wiXSwgZGl2LmdlUzVuJyk7Zm9yKGxldCByIG9mIHQpe2xldCB0PXIucXVlcnlTZWxlY3RvcihcInNwYW4uTTdlTWVcIiksbj1DKHQ/LnRleHRDb250ZW50fHxcIlwiKTtpZighbiljb250aW51ZTtsZXQgbz1yLnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwicmFkaW9cIl1bYXJpYS1jaGVja2VkPVwidHJ1ZVwiXScpO2lmKG8pe2Vbbl09KG8uZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKXx8by5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpfHxcIlwiKS50cmltKCk7Y29udGludWV9bGV0IGk9QXJyYXkuZnJvbShyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwiY2hlY2tib3hcIl1bYXJpYS1jaGVja2VkPVwidHJ1ZVwiXScpKTtpZihpLmxlbmd0aD4wKXtlW25dPWkubWFwKGU9PihlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fGUuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKXx8XCJcIikudHJpbSgpKS5qb2luKFwiLCBcIik7Y29udGludWV9bGV0IGE9ci5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cImVtYWlsXCJdLCBpbnB1dFt0eXBlPVwidXJsXCJdLCBpbnB1dFt0eXBlPVwidGVsXCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCB0ZXh0YXJlYScpO2lmKGEpe2Vbbl09KGEudmFsdWV8fFwiXCIpLnRyaW0oKTtjb250aW51ZX1sZXQgbD1yLnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwib3B0aW9uXCJdW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJyk7bCYmKGVbbl09KGwuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKXx8bC50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpKX1yZXR1cm4gZX1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6InJ1bGVzLjAwMWViYjY1LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);