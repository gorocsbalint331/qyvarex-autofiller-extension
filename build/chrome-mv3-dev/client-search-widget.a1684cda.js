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
})({"fx8yu":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\icims\\client-search-widget.js",
    "bundleId": "830702dea1684cda",
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
var j = z(require("61fb9087371ea8a9"));
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

},{"61fb9087371ea8a9":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"ejSPY":[function(require,module,exports) {
/**
 * Parcel module id: exkSa
 * Resolved path: src/contents/sites/icims/client-search-widget.js
 * Dependencies:
 *   ./utils -> DQtoj  =>  src/contents/sites/icims/utils.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   @plasmohq/messaging -> 92GyB  =>  @plasmohq/messaging.js
 *   ~contents/methods/cancellation -> luJfs  =>  src/contents/methods/cancellation.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "getIcimsSearchDropdownTrigger", ()=>l), n.export(r, "getIcimsSearchDropdownContainer", ()=>s), n.export(r, "discardIcimsSearchGeneration", ()=>C), n.export(r, "getIcimsSearchDropdownOptionItems", ()=>F), n.export(r, "hasIcimsSearchDropdownNoResults", ()=>I), n.export(r, "getIcimsSearchDropdownLoading", ()=>j), n.export(r, "openIcimsSearchDropdown", ()=>P), n.export(r, "getIcimsSearchSelectIdentities", ()=>_), n.export(r, "captureIcimsProfileOptionsCandidates", ()=>z), n.export(r, "captureFreshIcimsSearchCandidates", ()=>V), n.export(r, "commitExactIcimsSearchCandidate", ()=>Z), n.export(r, "commitExactIcimsProfileOptionCandidate", ()=>ee), n.export(r, "clearIcimsSearchSelectAndVerify", ()=>ei);
var o = e("@plasmohq/messaging"), i = e("./utils"), a = e("~contents/methods/cancellation");
function l(e1) {
    let t = e1?.nextElementSibling;
    return t?.id?.trim() ? t : null;
}
function s(e1) {
    let t = e1?.id?.trim();
    if (!t) return null;
    let r1 = e1.ownerDocument ?? ("undefined" == typeof document ? null : document), n = r1?.getElementById(`${t}_ctnr`) ?? e1.nextElementSibling;
    return n;
}
let u = 500, c = 650, d = 5e3, f = 500, p = 20, m = 3, h = 25, g = ':scope > [data-value], [data-selected-value], [aria-selected="true"][data-value], [aria-selected="true"][data-selected-value]', b = new WeakMap, y = new WeakMap;
function v(e1) {
    return (e1 ?? "").replace(/\s+/g, " ").trim();
}
function w(e1) {
    y.get(e1)?.cleanup(), y.delete(e1);
    let t = (b.get(e1) ?? 0) + 1;
    return b.set(e1, t), t;
}
function S(e1, t) {
    return b.get(e1) === t;
}
_c = S;
function E(e1, t) {
    let r1 = y.get(e1);
    r1?.token === t && (r1.cleanup(), y.delete(e1));
}
_c1 = E;
function x(e1, t) {
    let { select: r1, container: n, input: o, token: i } = e1, a = (t)=>{
        t.isTrusted && (e1.invalidated = !0, E(r1, i));
    }, l = [
        r1,
        t,
        n,
        o
    ], s = [
        "keydown",
        "input",
        "change",
        "click",
        "pointerdown",
        "pointerup"
    ];
    for (let e1 of l)for (let t of s)e1.addEventListener(t, a, !0);
    y.set(r1, {
        token: i,
        cleanup: ()=>{
            for (let e1 of l)for (let t of s)e1.removeEventListener(t, a, !0);
        }
    });
}
function C(e1) {
    e1.invalidated = !0, E(e1.select, e1.token);
}
_c2 = C;
function A(e1) {
    y.get(e1)?.cleanup(), y.delete(e1), b.set(e1, (b.get(e1) ?? 0) + 1);
}
_c3 = A;
function k(e1) {
    return Array.from(new Set(e1));
}
function T(e1) {
    return k([
        ...Array.from(e1.querySelectorAll('[aria-live="polite"] ul li')),
        ...Array.from(e1.querySelectorAll("ul > li"))
    ]);
}
_c4 = T;
function F(e1) {
    return T(e1).filter((e1)=>{
        let t = v(e1.textContent);
        return !!t && "no results" !== t.toLowerCase();
    });
}
_c5 = F;
function I(e1) {
    return T(e1).some((e1)=>"no results" === v(e1.textContent).toLowerCase());
}
_c6 = I;
function j(e1) {
    return e1.querySelector('[aria-live="polite"] .dropdown-loading') ?? e1.querySelector(".dropdown-loading");
}
function D(e1) {
    let t = j(e1);
    return !!t && !t.classList.contains("hide");
}
_c7 = D;
async function P(e1) {
    (0, a.checkpoint)();
    let t = l(e1);
    if (!t) return {
        status: "unavailable"
    };
    (0, i.triggerEvents)(t, [
        "mousedown",
        "mouseup",
        "click"
    ]);
    let r1 = Date.now() + u;
    for(; Date.now() <= r1;){
        let e1 = s(t), r1 = e1?.querySelector("input");
        if (e1 && r1) return {
            status: "opened",
            context: {
                $container: e1,
                $input: r1,
                $trigger: t
            }
        };
        await (0, a.cancellableDelay)(p);
    }
    return {
        status: "unavailable"
    };
}
_c8 = P;
function _(e1) {
    return Array.from(new Set([
        e1.getAttribute("data-value"),
        e1.getAttribute("data-selected-value"),
        e1.getAttribute("title"),
        e1.textContent
    ].map((e1)=>v(e1).toLowerCase()).filter(Boolean)));
}
function L(e1) {
    for (let t of [
        "data-value",
        "data-selected-value",
        "dropdown-value",
        "value"
    ]){
        let r1 = v(e1.getAttribute(t));
        if (r1) return r1;
    }
    return "";
}
_c9 = L;
function R(e1) {
    let t = L(e1), r1 = v(e1.textContent);
    return t && r1 && "no results" !== r1.toLowerCase() ? {
        value: t,
        text: r1
    } : null;
}
_c10 = R;
function O(e1) {
    let t = [], r1 = new Set;
    for (let n of F(e1)){
        let e1 = R(n);
        if (!e1) continue;
        let o = JSON.stringify([
            e1.value,
            e1.text
        ]);
        if (!r1.has(o) && (r1.add(o), t.push(e1), t.length >= h)) break;
    }
    return t;
}
_c11 = O;
function M(e1) {
    let t = T(e1), r1 = JSON.stringify({
        noResults: I(e1),
        options: F(e1).map((e1)=>({
                value: L(e1),
                text: v(e1.textContent)
            }))
    });
    return {
        signature: r1,
        nodes: t
    };
}
_c12 = M;
function N(e1, t) {
    return e1.signature !== t.signature || e1.nodes.length !== t.nodes.length || e1.nodes.some((e1, r1)=>e1 !== t.nodes[r1]);
}
_c13 = N;
function $(e1) {
    return M(e1).signature;
}
function B(e1, t) {
    let r1 = Object.getPrototypeOf(e1), n = Object.getOwnPropertyDescriptor(r1, "value");
    n?.set ? n.set.call(e1, t) : e1.value = t;
}
_c14 = B;
function q(e1, t) {
    e1.focus(), B(e1, ""), e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        cancelable: !0
    }));
    let r1 = "";
    for (let n of t)e1.dispatchEvent(new KeyboardEvent("keydown", {
        bubbles: !0,
        cancelable: !0,
        key: n
    })), B(e1, r1 += n), e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new KeyboardEvent("keyup", {
        bubbles: !0,
        cancelable: !0,
        key: n
    }));
    e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !0
    }));
}
async function U(e1) {
    return await (0, o.sendToBackground)({
        name: "searchIcimsProfileOptions",
        body: e1
    });
}
_c15 = U;
async function H(e1) {
    return await (0, o.sendToBackground)({
        name: "selectIcimsProfileOption",
        body: e1
    });
}
_c16 = H;
function Y(e1) {
    if (!Array.isArray(e1) || e1.length > h) return null;
    let t = [], r1 = new Set;
    for (let n of e1){
        if (!n || "object" != typeof n || Array.isArray(n)) return null;
        let e1 = Object.keys(n);
        if (2 !== e1.length || !e1.includes("value") || !e1.includes("text")) return null;
        let o = n.value, i = n.text;
        if ("string" != typeof o || "string" != typeof i) return null;
        let a = v(o), l = v(i);
        if (!a || a.length > 256 || !l || l.length > 512) return null;
        let s = JSON.stringify([
            a,
            l
        ]);
        r1.has(s) || (r1.add(s), t.push({
            value: a,
            text: l
        }));
    }
    return t;
}
_c17 = Y;
async function z(e1, t, r1 = U) {
    let n;
    (0, a.checkpoint)();
    let o = v(t);
    if (!e1?.id || !o) return {
        status: "unavailable"
    };
    let i = w(e1), u = l(e1), c = u ? s(u) : null, d = c?.querySelector("input");
    if (!u || !c || !d) return {
        status: "unavailable"
    };
    let f = {
        token: i,
        select: e1,
        container: c,
        input: d,
        searchInput: o,
        candidates: [],
        invalidated: !1
    };
    x(f, u);
    try {
        n = await r1({
            selectId: e1.id,
            searchInput: o
        });
    } catch  {
        return E(e1, i), console.warn("[IcimsProfileOptions] search failed"), {
            status: "unavailable"
        };
    }
    if ((0, a.checkpoint)(), !S(e1, i) || f.invalidated) return f.invalidated = !0, E(e1, i), {
        status: "invalidated"
    };
    if (n?.status === "failure") return E(e1, i), console.warn("[IcimsProfileOptions] search failed", {
        reason: n.reason
    }), {
        status: "unavailable"
    };
    let p = Y(n?.candidates);
    return !p || n?.status === "ready" && 0 === p.length || n?.status === "no-results" && p.length > 0 ? (E(e1, i), console.warn("[IcimsProfileOptions] invalid candidate response"), {
        status: "unavailable"
    }) : (f.candidates = p, console.info("[IcimsProfileOptions] search completed", {
        fieldType: e1.id.endsWith("CandProfileFields.School") ? "school" : "major",
        candidateCount: p.length
    }), {
        status: n.status,
        generation: f
    });
}
async function V(e1, t) {
    let r1 = v(t);
    if (!e1 || !r1) return {
        status: "unavailable"
    };
    let n = w(e1), o = await P(e1);
    if (!S(e1, n)) return {
        status: "invalidated"
    };
    if ("unavailable" === o.status) return o;
    let { $container: i, $input: l, $trigger: s } = o.context, u = {
        token: n,
        select: e1,
        container: i,
        input: l,
        searchInput: r1,
        candidates: [],
        invalidated: !1
    }, d = M(i), f = !1, h = !1, g = !1, b = D(i), y = ()=>{
        if (!f) return;
        let e1 = D(i);
        e1 && !b && (g = !0), b = e1, N(d, M(i)) && (h = !0);
    };
    x(u, s);
    let C = new MutationObserver(()=>{
        y();
    });
    C.observe(i, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
    });
    let A = !1;
    try {
        f = !0, q(l, r1);
        let t = Date.now() + c, o = "", s = 0;
        for(; Date.now() <= t;){
            if (!S(e1, n) || u.invalidated) return u.invalidated = !0, {
                status: "invalidated"
            };
            y();
            let t = D(i);
            if (!h || t) {
                s = 0, await (0, a.cancellableDelay)(p);
                continue;
            }
            let r1 = I(i), l = F(i);
            if (!r1 && 0 === l.length) {
                s = 0, await (0, a.cancellableDelay)(p);
                continue;
            }
            let c = $(i);
            if (c === o ? s += 1 : (o = c, s = 1), s >= m) return u.candidates = O(i), A = !0, {
                status: r1 && 0 === l.length ? "no-results" : "ready",
                generation: u
            };
            await (0, a.cancellableDelay)(p);
        }
        if (!S(e1, n) || u.invalidated) return {
            status: "invalidated"
        };
        return h || g ? {
            status: "timeout"
        } : {
            status: "stale"
        };
    } finally{
        C.disconnect(), A || E(e1, n);
    }
}
_c18 = V;
function W(e1, t) {
    return e1.value === t.value && e1.text === t.text;
}
_c19 = W;
function G(e1) {
    let t = [
        e1,
        ...Array.from(e1.querySelectorAll(g))
    ];
    return Array.from(new Set(t));
}
_c20 = G;
function K(e1) {
    let t = [], r1 = Array.from(e1.selectedOptions ?? []);
    for (let e1 of r1){
        let r1 = {
            value: v(e1.value),
            text: v(e1.text)
        };
        r1.value && r1.text && t.push(r1);
    }
    let n = e1.id ? document.getElementById(`${e1.id}_fakeSelected_icimsDropdown`) : null, o = e1.nextElementSibling;
    for (let e1 of [
        n,
        o
    ])if (e1) for (let r1 of G(e1)){
        let e1 = R(r1);
        e1 && t.push(e1);
    }
    return t;
}
_c21 = K;
function X(e1, t) {
    let r1 = e1.ownerDocument ?? ("undefined" == typeof document ? null : document), n = e1.id ? r1?.getElementById(`${e1.id}_fakeSelected_icimsDropdown`) : null, o = e1.nextElementSibling;
    return [
        n,
        o
    ].some((e1)=>v(e1?.textContent) === t);
}
_c22 = X;
function J(e1, t) {
    let r1 = Array.from(e1.selectedOptions ?? []);
    return 1 === r1.length && v(r1[0].value) === t.value && v(r1[0].text) === t.text;
}
_c23 = J;
function Q(e1) {
    let t = e1.select.nextElementSibling;
    return t?.id ? document.getElementById(`${t.id}_ctnr`) : null;
}
_c24 = Q;
async function Z(e1, t) {
    try {
        if (e1.invalidated || !S(e1.select, e1.token) || !e1.candidates.some((e1)=>W(e1, t))) return !1;
        let r1 = Q(e1);
        if (!r1 || r1 !== e1.container) return !1;
        let n = F(r1).filter((e1)=>{
            let r1 = R(e1);
            return !!r1 && W(r1, t);
        });
        if (1 !== n.length) return !1;
        (0, i.triggerEvents)(n[0], [
            "focus",
            "mousedown",
            "mouseup",
            "click"
        ]);
        let o = Date.now() + f;
        for(; Date.now() <= o && !e1.invalidated && S(e1.select, e1.token);){
            if (K(e1.select).some((e1)=>W(e1, t))) return !0;
            await (0, a.cancellableDelay)(p);
        }
        return !1;
    } finally{
        E(e1.select, e1.token);
    }
}
_c25 = Z;
async function ee(e1, t, r1 = H) {
    let n = (t, r1 = {})=>{
        console.info(`[IcimsProfileOptions] candidate commit failed ${JSON.stringify({
            fieldType: e1.select.id.endsWith("CandProfileFields.School") ? "school" : "major",
            reason: t,
            ...r1
        })}`);
    };
    try {
        let o;
        let { select: s, input: u } = e1;
        if (e1.invalidated || !S(s, e1.token) || !e1.candidates.some((e1)=>W(e1, t))) return n("invalid-generation-or-candidate"), !1;
        let c = Q(e1);
        if (!c || c !== e1.container) return n("stale-container"), !1;
        let m = l(s);
        if (!m) return n("missing-trigger"), !1;
        (0, i.triggerEvents)(m, [
            "mousedown",
            "mouseup",
            "click"
        ]), q(u, e1.searchInput);
        let h = Date.now() + d, g = null;
        for(; Date.now() <= h;){
            if (e1.invalidated || !S(s, e1.token)) return !1;
            let r1 = F(c).filter((e1)=>v(e1.textContent) === t.text);
            if (r1.length > 1) return n("ambiguous-visible-options", {
                matchingOptionCount: r1.length
            }), !1;
            if (1 === r1.length) {
                g = r1[0];
                break;
            }
            await (0, a.cancellableDelay)(p);
        }
        if (!g) return n("missing-visible-option"), !1;
        try {
            o = await r1({
                selectId: s.id,
                candidate: t
            });
        } catch  {
            o = {
                status: "failure",
                reason: "uncommitted"
            };
        }
        "selected" !== o.status && g.click();
        let b = Date.now() + f;
        for(; Date.now() <= b;){
            if (e1.invalidated || !S(s, e1.token)) return !1;
            if (J(s, t) && X(s, t.text)) return !0;
            await (0, a.cancellableDelay)(p);
        }
        return n("uncommitted-readback", {
            mainWorldStatus: o.status,
            mainWorldReason: "failure" === o.status ? o.reason : void 0,
            nativeSelectionMatched: J(s, t),
            visibleSelectionMatched: X(s, t.text)
        }), !1;
    } finally{
        E(e1.select, e1.token);
    }
}
function et(e1, t) {
    let r1 = v(e1).toLowerCase(), n = v(t);
    return !r1 && !n || /^(?:[-\u2014\u2013]\s*)?(?:make a selection|please select(?: an option)?|select one|choose(?: an option)?)(?:\s*[-\u2014\u2013])?$/.test(r1);
}
function er(e1) {
    return G(e1).some((e1)=>{
        let t = R(e1);
        return !!t && !et(t.text, t.value);
    });
}
function en(e1) {
    if (!e1) return !0;
    if (er(e1)) return !1;
    let t = v(e1.textContent);
    return !t || et(t, "");
}
function eo(e1) {
    let t = Array.from(e1.selectedOptions ?? []);
    if (1 !== t.length || !et(t[0].text, t[0].value)) return !1;
    let r1 = e1.id ? document.getElementById(`${e1.id}_fakeSelected_icimsDropdown`) : null, n = e1.nextElementSibling;
    return en(r1) && en(n);
}
async function ei(e1) {
    if (!e1 || e1.multiple) return !1;
    A(e1);
    let t = Array.from(e1.options ?? []), r1 = t.findIndex((e1)=>et(e1.text, e1.value));
    if (r1 < 0) return !1;
    t.forEach((e1, t)=>{
        e1.selected = t === r1;
    }), e1.selectedIndex = r1, e1.dispatchEvent(new Event("input", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new Event("change", {
        bubbles: !0,
        cancelable: !0
    }));
    let n = Date.now() + f;
    for(; Date.now() <= n;){
        if (eo(e1)) return !0;
        await (0, a.cancellableDelay)(p);
    }
    return !1;
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

},{}]},["fx8yu","ejSPY"], "ejSPY", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFnQixLQUFLO1FBQUM7UUFBRTtLQUFFLEdBQUUsQ0FBQyxLQUFHLEVBQUUsT0FBSyxFQUFFLElBQUksaUJBQWlCLFNBQVEsQ0FBQSxFQUFFLGVBQWUsS0FBSztRQUFDO1FBQUU7S0FBRSxHQUFFLENBQUMsQ0FBQSxJQUFHLENBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBQyxTQUFRLENBQUMsRUFBQyxHQUFDO0lBQUUsT0FBTyxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsSUFBRyxFQUFFLFNBQU8sUUFBTSxPQUFPLFdBQVMsS0FBSSxPQUFPLElBQUksUUFBUSxDQUFDLEdBQUU7UUFBSyxJQUFJLElBQUUsU0FBUyxjQUFjO1FBQVUsRUFBRSxNQUFJLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLEtBQUssTUFBTSxDQUFDLEVBQUMsRUFBRSxpQkFBZSxjQUFhLENBQUEsRUFBRSxPQUFLLFFBQU8sR0FBRyxFQUFFLGlCQUFpQixRQUFPLElBQUksRUFBRSxLQUFJLEVBQUUsaUJBQWlCLFNBQVEsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLDBCQUEwQixFQUFFLEVBQUUsR0FBRyxDQUFDLEtBQUksU0FBUyxNQUFNLFlBQVk7SUFBRTtBQUFFO0FBQUMsZUFBZSxFQUFFLENBQUM7SUFBRSxPQUFPLGtCQUFnQixPQUFPLE9BQU8sT0FBTSxFQUFFLFFBQVEsQ0FBQTtRQUFJLEVBQUUsTUFBSSxFQUFFLFFBQVEsT0FBTywrQkFBNkIsbUJBQW1CLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLEtBQUssTUFBTSxDQUFDO0lBQUU7SUFBRyxJQUFJLElBQUUsTUFBTSxRQUFRLElBQUksRUFBRSxJQUFJO0lBQUssSUFBRztRQUFDLEVBQUUsUUFBUSxTQUFTLENBQUM7WUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1FBQUU7SUFBRSxTQUFRO1FBQUMsT0FBTyxPQUFPLGlCQUFnQixLQUFHLEVBQUUsUUFBUSxDQUFBO1lBQUksS0FBRyxTQUFTLE1BQU0sWUFBWTtRQUFFO0lBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUU7SUFBWSxFQUFFLFNBQU87UUFBVyxFQUFFLGVBQWEsUUFBTSxFQUFFLFdBQVcsWUFBWTtJQUFFLEdBQUUsRUFBRSxhQUFhLFFBQU8sRUFBRSxhQUFhLFFBQVEsTUFBTSxJQUFJLENBQUMsRUFBRSxHQUFDLE1BQUksS0FBSyxRQUFPLEVBQUUsV0FBVyxhQUFhLEdBQUUsRUFBRTtBQUFZO0FBQUMsSUFBSSxJQUFFO0FBQUssU0FBUztJQUFLLEtBQUksQ0FBQSxJQUFFLFdBQVc7UUFBVyxJQUFJLElBQUUsU0FBUyxpQkFBaUI7UUFBMEIsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJO1lBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxTQUFRLElBQUUsS0FBSSxJQUFFLE1BQUksY0FBWSxJQUFJLE9BQU8sbURBQWlELEtBQUssS0FBSyxLQUFHLEVBQUUsUUFBUSxJQUFFLE1BQUk7WUFBSyxnQkFBZ0IsS0FBSyxNQUFJLEVBQUUsUUFBUSxTQUFTLFlBQVUsS0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUFDO1FBQUMsSUFBRTtJQUFJLEdBQUUsR0FBRTtBQUFFO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLEdBQUU7UUFBQyxJQUFHLEVBQUUsU0FBTyxPQUFNO2FBQVUsSUFBRyxFQUFFLFNBQU8sTUFBSztZQUFDLElBQUksSUFBRSxFQUFFLFlBQVksQ0FBQyxFQUFFLGNBQWM7WUFBQyxJQUFHLEdBQUU7Z0JBQUMsSUFBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUM7b0JBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO29CQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBRyxDQUFDLENBQUMsRUFBRSxFQUFDO3dCQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRTt3QkFBQyxFQUFFLE9BQU8sT0FBTyxNQUFLLEdBQUcsV0FBUyxLQUFHLEVBQUUsT0FBTyxPQUFPLE1BQUs7b0JBQUU7Z0JBQUM7Z0JBQUMsSUFBSSxJQUFFLE9BQU8sZUFBZSxDQUFDLEVBQUUsR0FBRztnQkFBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUM7b0JBQUM7b0JBQUU7aUJBQUU7WUFBQSxPQUFNLEVBQUUsVUFBUSxFQUFFLEVBQUUsUUFBTztRQUFFO0lBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFO0lBQVEsSUFBRztRQUFFLElBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBQztZQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxJQUFFLEVBQUU7WUFBQyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsT0FBTyxPQUFPLE1BQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFTLEtBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsUUFBUSxDQUFBO2dCQUFJLEVBQUUsT0FBTyxPQUFPLE1BQUs7WUFBRTtRQUFFLE9BQU0sRUFBRSxVQUFRLEVBQUUsRUFBRSxRQUFPOztBQUFFO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBSSxJQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7SUFBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFFLEtBQUcsRUFBRSxPQUFNLENBQUEsRUFBRSxJQUFJLE9BQUssRUFBRSxPQUFPLENBQUMsRUFBRSxBQUFELEdBQUcsS0FBRyxFQUFFLE9BQUssRUFBRSxJQUFJLGtCQUFrQixVQUFRLEVBQUUsSUFBSSxrQkFBa0IsUUFBUSxTQUFTLENBQUM7UUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7SUFBQyxJQUFHLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtBQUFBO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsRUFBRTtJQUFHLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsSUFBRyxLQUFHLEVBQUUsT0FBSyxFQUFFLElBQUksaUJBQWlCLFFBQU87UUFBQyxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSztRQUFHLEVBQUUsSUFBSSxpQkFBaUIsUUFBUSxTQUFTLENBQUM7WUFBRSxJQUFJLElBQUUsRUFBRSxJQUFJO1lBQUcsS0FBRyxFQUFFLFVBQVMsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUUsRUFBRTtnQkFBSSxFQUFFLEdBQUU7WUFBRSxJQUFHLEVBQUUsZUFBZSxLQUFLLE1BQU0sRUFBRSxnQkFBZSxFQUFDO1FBQUU7SUFBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLElBQUUsR0FBRztJQUFFLElBQUksSUFBRTtJQUFJLE9BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBUSxTQUFTLGFBQVcsWUFBVSxDQUFDLDhCQUE4QixLQUFLLEtBQUcsUUFBTSxLQUFLLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUFBO0FBQUMsU0FBUyxHQUFHLENBQUM7SUFBRSxPQUFPLEVBQUUsV0FBUyxZQUFVLEVBQUUsOEJBQTRCLEVBQUU7QUFBUTtBQUFDLFNBQVMsRUFBRSxDQUFDO0lBQUUsSUFBRyxPQUFPLFdBQVcsWUFBVSxLQUFJO0lBQU8sSUFBSSxJQUFFLElBQUksVUFBVTtJQUFNLE9BQU8sRUFBRSxpQkFBaUIsV0FBVSxlQUFlLENBQUM7UUFBRSxJQUFJLElBQUUsS0FBSyxNQUFNLEVBQUU7UUFBTSxJQUFHLEVBQUUsU0FBTyxZQUFVLE1BQU0sRUFBRSxFQUFFLFNBQVEsRUFBRSxTQUFPLFNBQVEsS0FBSSxJQUFJLEtBQUssRUFBRSxZQUFZLEtBQUs7WUFBQyxJQUFJLElBQUUsRUFBRSxhQUFXLEVBQUU7WUFBTSxFQUFFLDhCQUE0QixFQUFFLFVBQVEsQ0FBQztBQUNoNEwsQ0FBQyxHQUFDLElBQUUsQ0FBQzs7QUFFTCxDQUFDLEdBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNoQixDQUFDO1FBQUU7SUFBQyxJQUFHLEVBQUUsaUJBQWlCLFNBQVEsS0FBSSxFQUFFLGlCQUFpQixRQUFPO1FBQUssRUFBRSxDQUFDLHFEQUFxRCxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRyxFQUFFLGlCQUFpQixTQUFRO1FBQUssRUFBRSxDQUFDLG9FQUFvRSxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRztBQUFDO0FBQUMsSUFBSSxJQUFFLEVBQUUsUUFBUTtBQUEwQixlQUFlO0lBQUksRUFBRSxRQUFRLHFCQUFxQixTQUFRLE9BQU8sZUFBYSxZQUFXLEdBQUUsT0FBTyxlQUFhO1FBQVcsT0FBTyxTQUFTLENBQUM7WUFBRSxPQUFPO1FBQUM7SUFBQztBQUFDO0FBQUMsSUFBSSxLQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFDLEdBQUUsSUFBRSxPQUFPLE9BQU87QUFBTyxJQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsaUJBQWdCO0lBQUMsSUFBRztRQUFDLElBQUUsR0FBRyxRQUFRLFFBQVE7WUFBQyxNQUFLO1FBQUUsSUFBRyxFQUFFLGFBQWEsWUFBWTtZQUFLO1FBQUcsSUFBRyxFQUFFLFdBQVMsRUFBRSxVQUFVLFlBQVk7WUFBSztRQUFHO0lBQUUsRUFBQyxPQUFNLEdBQUU7UUFBQyxFQUFFO0lBQUU7SUFBQyxFQUFFLE9BQU07UUFBSSxJQUFHLEVBQUUsaUNBQWdDLEVBQUUsU0FBUTtZQUFDO1lBQUksSUFBSSxJQUFFLEVBQUUsT0FBTyxDQUFBLElBQUcsRUFBRSxZQUFVLEVBQUU7WUFBUyxJQUFHLEVBQUUsS0FBSyxDQUFBLElBQUcsRUFBRSxTQUFPLFNBQU8sRUFBRSxTQUFPLFFBQU0sRUFBRSxPQUFPLE9BQU8sTUFBSyxFQUFFLElBQUcsRUFBRSxnQkFBZSxJQUFHO2dCQUFDLE1BQU0sRUFBRTtnQkFBRyxJQUFJLElBQUUsQ0FBQztnQkFBRSxLQUFJLElBQUcsQ0FBQyxHQUFFLEVBQUUsSUFBRyxFQUFFLGdCQUFnQixDQUFDLENBQUMsRUFBRSxJQUFHLENBQUEsRUFBRSxHQUFFLElBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUE7Z0JBQUcsSUFBSSxJQUFFLENBQUM7Z0JBQUUsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsZUFBZSxRQUFPLElBQUk7b0JBQUMsSUFBRyxDQUFDLEdBQUUsRUFBRSxHQUFDLEVBQUUsY0FBYyxDQUFDLEVBQUU7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBRyxDQUFBLEVBQUUsR0FBRSxJQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFBO2dCQUFFO1lBQUMsRUFBQyxPQUFNLEdBQUU7Z0JBQUMsRUFBRSxZQUFVLFVBQVMsQ0FBQSxRQUFRLE1BQU0sSUFBRyxNQUFNLEtBQUssVUFBVSxHQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7WUFBRTtRQUFDLE9BQUs7WUFBQyxJQUFJLElBQUUsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFlBQVUsRUFBRSxTQUFTLEtBQUssQ0FBQSxJQUFHLEVBQUUsT0FBTyxRQUFPLEVBQUU7WUFBSyxFQUFFLGtCQUFpQjtnQkFBQyxlQUFjO1lBQUMsSUFBRyxLQUFHLEVBQUUsWUFBWTtnQkFBQyx5QkFBd0IsQ0FBQztZQUFDO1FBQUU7SUFBQztBQUFFO0FBQUMsRUFBRSxXQUFVLENBQUEsRUFBRSw0QkFBMkIsR0FBRTs7O0FDSjMwQyxJQUFJLEtBQUcsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxLQUFHLE9BQU87QUFBeUIsSUFBSSxLQUFHLE9BQU87QUFBb0IsSUFBSSxLQUFHLE9BQU8sZ0JBQWUsS0FBRyxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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QUssVUFBVTtZQUFDO1lBQUU7U0FBRTtRQUFFLEdBQUUsSUFBSSxNQUFLLENBQUEsR0FBRSxJQUFJLElBQUcsRUFBRSxLQUFLO1lBQUMsT0FBTTtZQUFFLE1BQUs7UUFBQyxFQUFDO0lBQUU7SUFBQyxPQUFPO0FBQUM7T0FBNWM7QUFBNmMsZUFBZSxFQUFFLEVBQUMsRUFBQyxDQUFDLEVBQUMsS0FBRSxDQUFDO0lBQUUsSUFBSTtJQUFHLENBQUEsR0FBRSxFQUFFLFVBQVM7SUFBSyxJQUFJLElBQUUsRUFBRTtJQUFHLElBQUcsQ0FBQyxJQUFHLE1BQUksQ0FBQyxHQUFFLE9BQU07UUFBQyxRQUFPO0lBQWE7SUFBRSxJQUFJLElBQUUsRUFBRSxLQUFHLElBQUUsRUFBRSxLQUFHLElBQUUsSUFBRSxFQUFFLEtBQUcsTUFBSyxJQUFFLEdBQUcsY0FBYztJQUFTLElBQUcsQ0FBQyxLQUFHLENBQUMsS0FBRyxDQUFDLEdBQUUsT0FBTTtRQUFDLFFBQU87SUFBYTtJQUFFLElBQUksSUFBRTtRQUFDLE9BQU07UUFBRSxRQUFPO1FBQUUsV0FBVTtRQUFFLE9BQU07UUFBRSxhQUFZO1FBQUUsWUFBVyxFQUFFO1FBQUMsYUFBWSxDQUFDO0lBQUM7SUFBRSxFQUFFLEdBQUU7SUFBRyxJQUFHO1FBQUMsSUFBRSxNQUFNLEdBQUU7WUFBQyxVQUFTLEdBQUU7WUFBRyxhQUFZO1FBQUM7SUFBRSxFQUFDLE9BQUs7UUFBQyxPQUFPLEVBQUUsSUFBRSxJQUFHLFFBQVEsS0FBSyx3Q0FBdUM7WUFBQyxRQUFPO1FBQWE7SUFBQztJQUFDLElBQUcsQUFBQyxDQUFBLEdBQUUsRUFBRSxVQUFTLEtBQUssQ0FBQyxFQUFFLElBQUUsTUFBSSxFQUFFLGFBQVksT0FBTyxFQUFFLGNBQVksQ0FBQyxHQUFFLEVBQUUsSUFBRSxJQUFHO1FBQUMsUUFBTztJQUFhO0lBQUUsSUFBRyxHQUFHLFdBQVMsV0FBVSxPQUFPLEVBQUUsSUFBRSxJQUFHLFFBQVEsS0FBSyx1Q0FBc0M7UUFBQyxRQUFPLEVBQUU7SUFBTSxJQUFHO1FBQUMsUUFBTztJ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RSxFQUFFO0lBQUcsT0FBTSxDQUFDLE1BQUcsQ0FBQyxLQUFHLHFJQUFxSSxLQUFLO0FBQUU7QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLE9BQU8sRUFBRSxJQUFHLEtBQUssQ0FBQTtRQUFJLElBQUksSUFBRSxFQUFFO1FBQUcsT0FBTSxDQUFDLENBQUMsS0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFLLEVBQUU7SUFBTTtBQUFFO0FBQUMsU0FBUyxHQUFHLEVBQUM7SUFBRSxJQUFHLENBQUMsSUFBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEdBQUcsS0FBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxHQUFFO0lBQWEsT0FBTSxDQUFDLEtBQUcsR0FBRyxHQUFFO0FBQUc7QUFBQyxTQUFTLEdBQUcsRUFBQztJQUFFLElBQUksSUFBRSxNQUFNLEtBQUssR0FBRSxtQkFBaUIsRUFBRTtJQUFFLElBQUcsTUFBSSxFQUFFLFVBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQU8sT0FBTSxDQUFDO0lBQUUsSUFBSSxLQUFFLEdBQUUsS0FBRyxTQUFTLGVBQWUsQ0FBQyxFQUFFLEdBQUUsR0FBRywyQkFBMkIsQ0FBQyxJQUFFLE1BQUssSUFBRSxHQUFFO0lBQW1CLE9BQU8sR0FBRyxPQUFJLEdBQUc7QUFBRTtBQUFDLGVBQWUsR0FBRyxFQUFDO0lBQUUsSUFBRyxDQUFDLE1BQUcsR0FBRSxVQUFTLE9BQU0sQ0FBQztJQUFFLEVBQUU7SUFBRyxJQUFJLElBQUUsTUFBTSxLQUFLLEdBQUUsV0FBUyxFQUFFLEdBQUUsS0FBRSxFQUFFLFVBQVUsQ0FBQSxLQUFHLEdBQUcsR0FBRSxNQUFLLEdBQUU7SUFBUSxJQUFHLEtBQUUsR0FBRSxPQUFNLENBQUM7SUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFFO1FBQUssR0FBRSxXQUFTLE1BQUk7SUFBQyxJQUFHLEdBQUUsZ0JBQWMsSUFBRSxHQUFFLGNBQWMsSUFBSSxNQUFNLFNBQVE7UUFBQyxTQUFRLENBQUM7UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFJLEdBQUUsY0FBYyxJQUFJLE1BQU0sVUFBUztRQUFDLFNBQVEsQ0FBQztRQUFFLFlBQVcsQ0FBQztJQUFDO0lBQUksSUFBSSxJQUFFLEtBQUssUUFBTTtJQUFFLE1BQUssS0FBSyxTQUFPLEdBQUc7UUFBQyxJQUFHLEdBQUcsS0FBRyxPQUFNLENBQUM7UUFBRSxNQUFNLEFBQUMsQ0FBQSxHQUFFLEVBQUUsZ0JBQWUsRUFBRztJQUFFO0lBQUMsT0FBTSxDQUFDO0FBQUMiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTA1NDNkYjA0MWU0OWMyOTIuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvaWNpbXMvY2xpZW50LXNlYXJjaC13aWRnZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcaWNpbXNcXFxcY2xpZW50LXNlYXJjaC13aWRnZXQuanNcIixcImJ1bmRsZUlkXCI6XCI4MzA3MDJkZWExNjg0Y2RhXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogZXhrU2FcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL2ljaW1zL2NsaWVudC1zZWFyY2gtd2lkZ2V0LmpzXG4gKiBEZXBlbmRlbmNpZXM6XHJcbiAqICAgLi91dGlscyAtPiBEUXRvaiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9pY2ltcy91dGlscy5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgQHBsYXNtb2hxL21lc3NhZ2luZyAtPiA5Mkd5QiAgPT4gIEBwbGFzbW9ocS9tZXNzYWdpbmcuanNcclxuICogICB+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24gLT4gbHVKZnMgID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb24uanNcclxuICovXHJcblxyXG52YXIgbj1lKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtuLmRlZmluZUludGVyb3BGbGFnKHIpLG4uZXhwb3J0KHIsXCJnZXRJY2ltc1NlYXJjaERyb3Bkb3duVHJpZ2dlclwiLCgpPT5sKSxuLmV4cG9ydChyLFwiZ2V0SWNpbXNTZWFyY2hEcm9wZG93bkNvbnRhaW5lclwiLCgpPT5zKSxuLmV4cG9ydChyLFwiZGlzY2FyZEljaW1zU2VhcmNoR2VuZXJhdGlvblwiLCgpPT5DKSxuLmV4cG9ydChyLFwiZ2V0SWNpbXNTZWFyY2hEcm9wZG93bk9wdGlvbkl0ZW1zXCIsKCk9PkYpLG4uZXhwb3J0KHIsXCJoYXNJY2ltc1NlYXJjaERyb3Bkb3duTm9SZXN1bHRzXCIsKCk9PkkpLG4uZXhwb3J0KHIsXCJnZXRJY2ltc1NlYXJjaERyb3Bkb3duTG9hZGluZ1wiLCgpPT5qKSxuLmV4cG9ydChyLFwib3BlbkljaW1zU2VhcmNoRHJvcGRvd25cIiwoKT0+UCksbi5leHBvcnQocixcImdldEljaW1zU2VhcmNoU2VsZWN0SWRlbnRpdGllc1wiLCgpPT5fKSxuLmV4cG9ydChyLFwiY2FwdHVyZUljaW1zUHJvZmlsZU9wdGlvbnNDYW5kaWRhdGVzXCIsKCk9PnopLG4uZXhwb3J0KHIsXCJjYXB0dXJlRnJlc2hJY2ltc1NlYXJjaENhbmRpZGF0ZXNcIiwoKT0+Viksbi5leHBvcnQocixcImNvbW1pdEV4YWN0SWNpbXNTZWFyY2hDYW5kaWRhdGVcIiwoKT0+Wiksbi5leHBvcnQocixcImNvbW1pdEV4YWN0SWNpbXNQcm9maWxlT3B0aW9uQ2FuZGlkYXRlXCIsKCk9PmVlKSxuLmV4cG9ydChyLFwiY2xlYXJJY2ltc1NlYXJjaFNlbGVjdEFuZFZlcmlmeVwiLCgpPT5laSk7dmFyIG89ZShcIkBwbGFzbW9ocS9tZXNzYWdpbmdcIiksaT1lKFwiLi91dGlsc1wiKSxhPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9jYW5jZWxsYXRpb25cIik7ZnVuY3Rpb24gbChlKXtsZXQgdD1lPy5uZXh0RWxlbWVudFNpYmxpbmc7cmV0dXJuIHQ/LmlkPy50cmltKCk/dDpudWxsfWZ1bmN0aW9uIHMoZSl7bGV0IHQ9ZT8uaWQ/LnRyaW0oKTtpZighdClyZXR1cm4gbnVsbDtsZXQgcj1lLm93bmVyRG9jdW1lbnQ/PyhcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQ/bnVsbDpkb2N1bWVudCksbj1yPy5nZXRFbGVtZW50QnlJZChgJHt0fV9jdG5yYCk/P2UubmV4dEVsZW1lbnRTaWJsaW5nO3JldHVybiBufWxldCB1PTUwMCxjPTY1MCxkPTVlMyxmPTUwMCxwPTIwLG09MyxoPTI1LGc9JzpzY29wZSA+IFtkYXRhLXZhbHVlXSwgW2RhdGEtc2VsZWN0ZWQtdmFsdWVdLCBbYXJpYS1zZWxlY3RlZD1cInRydWVcIl1bZGF0YS12YWx1ZV0sIFthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXVtkYXRhLXNlbGVjdGVkLXZhbHVlXScsYj1uZXcgV2Vha01hcCx5PW5ldyBXZWFrTWFwO2Z1bmN0aW9uIHYoZSl7cmV0dXJuKGU/P1wiXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpfWZ1bmN0aW9uIHcoZSl7eS5nZXQoZSk/LmNsZWFudXAoKSx5LmRlbGV0ZShlKTtsZXQgdD0oYi5nZXQoZSk/PzApKzE7cmV0dXJuIGIuc2V0KGUsdCksdH1mdW5jdGlvbiBTKGUsdCl7cmV0dXJuIGIuZ2V0KGUpPT09dH1mdW5jdGlvbiBFKGUsdCl7bGV0IHI9eS5nZXQoZSk7cj8udG9rZW49PT10JiYoci5jbGVhbnVwKCkseS5kZWxldGUoZSkpfWZ1bmN0aW9uIHgoZSx0KXtsZXR7c2VsZWN0OnIsY29udGFpbmVyOm4saW5wdXQ6byx0b2tlbjppfT1lLGE9dD0+e3QuaXNUcnVzdGVkJiYoZS5pbnZhbGlkYXRlZD0hMCxFKHIsaSkpfSxsPVtyLHQsbixvXSxzPVtcImtleWRvd25cIixcImlucHV0XCIsXCJjaGFuZ2VcIixcImNsaWNrXCIsXCJwb2ludGVyZG93blwiLFwicG9pbnRlcnVwXCJdO2ZvcihsZXQgZSBvZiBsKWZvcihsZXQgdCBvZiBzKWUuYWRkRXZlbnRMaXN0ZW5lcih0LGEsITApO3kuc2V0KHIse3Rva2VuOmksY2xlYW51cDooKT0+e2ZvcihsZXQgZSBvZiBsKWZvcihsZXQgdCBvZiBzKWUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LGEsITApfX0pfWZ1bmN0aW9uIEMoZSl7ZS5pbnZhbGlkYXRlZD0hMCxFKGUuc2VsZWN0LGUudG9rZW4pfWZ1bmN0aW9uIEEoZSl7eS5nZXQoZSk/LmNsZWFudXAoKSx5LmRlbGV0ZShlKSxiLnNldChlLChiLmdldChlKT8/MCkrMSl9ZnVuY3Rpb24gayhlKXtyZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGUpKX1mdW5jdGlvbiBUKGUpe3JldHVybiBrKFsuLi5BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbCgnW2FyaWEtbGl2ZT1cInBvbGl0ZVwiXSB1bCBsaScpKSwuLi5BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcInVsID4gbGlcIikpXSl9ZnVuY3Rpb24gRihlKXtyZXR1cm4gVChlKS5maWx0ZXIoZT0+e2xldCB0PXYoZS50ZXh0Q29udGVudCk7cmV0dXJuISF0JiZcIm5vIHJlc3VsdHNcIiE9PXQudG9Mb3dlckNhc2UoKX0pfWZ1bmN0aW9uIEkoZSl7cmV0dXJuIFQoZSkuc29tZShlPT5cIm5vIHJlc3VsdHNcIj09PXYoZS50ZXh0Q29udGVudCkudG9Mb3dlckNhc2UoKSl9ZnVuY3Rpb24gaihlKXtyZXR1cm4gZS5xdWVyeVNlbGVjdG9yKCdbYXJpYS1saXZlPVwicG9saXRlXCJdIC5kcm9wZG93bi1sb2FkaW5nJyk/P2UucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1sb2FkaW5nXCIpfWZ1bmN0aW9uIEQoZSl7bGV0IHQ9aihlKTtyZXR1cm4hIXQmJiF0LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIil9YXN5bmMgZnVuY3Rpb24gUChlKXsoMCxhLmNoZWNrcG9pbnQpKCk7bGV0IHQ9bChlKTtpZighdClyZXR1cm57c3RhdHVzOlwidW5hdmFpbGFibGVcIn07KDAsaS50cmlnZ2VyRXZlbnRzKSh0LFtcIm1vdXNlZG93blwiLFwibW91c2V1cFwiLFwiY2xpY2tcIl0pO2xldCByPURhdGUubm93KCkrdTtmb3IoO0RhdGUubm93KCk8PXI7KXtsZXQgZT1zKHQpLHI9ZT8ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO2lmKGUmJnIpcmV0dXJue3N0YXR1czpcIm9wZW5lZFwiLGNvbnRleHQ6eyRjb250YWluZXI6ZSwkaW5wdXQ6ciwkdHJpZ2dlcjp0fX07YXdhaXQgKDAsYS5jYW5jZWxsYWJsZURlbGF5KShwKX1yZXR1cm57c3RhdHVzOlwidW5hdmFpbGFibGVcIn19ZnVuY3Rpb24gXyhlKXtyZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KFtlLmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiksZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlbGVjdGVkLXZhbHVlXCIpLGUuZ2V0QXR0cmlidXRlKFwidGl0bGVcIiksZS50ZXh0Q29udGVudF0ubWFwKGU9PnYoZSkudG9Mb3dlckNhc2UoKSkuZmlsdGVyKEJvb2xlYW4pKSl9ZnVuY3Rpb24gTChlKXtmb3IobGV0IHQgb2ZbXCJkYXRhLXZhbHVlXCIsXCJkYXRhLXNlbGVjdGVkLXZhbHVlXCIsXCJkcm9wZG93bi12YWx1ZVwiLFwidmFsdWVcIl0pe2xldCByPXYoZS5nZXRBdHRyaWJ1dGUodCkpO2lmKHIpcmV0dXJuIHJ9cmV0dXJuXCJcIn1mdW5jdGlvbiBSKGUpe2xldCB0PUwoZSkscj12KGUudGV4dENvbnRlbnQpO3JldHVybiB0JiZyJiZcIm5vIHJlc3VsdHNcIiE9PXIudG9Mb3dlckNhc2UoKT97dmFsdWU6dCx0ZXh0OnJ9Om51bGx9ZnVuY3Rpb24gTyhlKXtsZXQgdD1bXSxyPW5ldyBTZXQ7Zm9yKGxldCBuIG9mIEYoZSkpe2xldCBlPVIobik7aWYoIWUpY29udGludWU7bGV0IG89SlNPTi5zdHJpbmdpZnkoW2UudmFsdWUsZS50ZXh0XSk7aWYoIXIuaGFzKG8pJiYoci5hZGQobyksdC5wdXNoKGUpLHQubGVuZ3RoPj1oKSlicmVha31yZXR1cm4gdH1mdW5jdGlvbiBNKGUpe2xldCB0PVQoZSkscj1KU09OLnN0cmluZ2lmeSh7bm9SZXN1bHRzOkkoZSksb3B0aW9uczpGKGUpLm1hcChlPT4oe3ZhbHVlOkwoZSksdGV4dDp2KGUudGV4dENvbnRlbnQpfSkpfSk7cmV0dXJue3NpZ25hdHVyZTpyLG5vZGVzOnR9fWZ1bmN0aW9uIE4oZSx0KXtyZXR1cm4gZS5zaWduYXR1cmUhPT10LnNpZ25hdHVyZXx8ZS5ub2Rlcy5sZW5ndGghPT10Lm5vZGVzLmxlbmd0aHx8ZS5ub2Rlcy5zb21lKChlLHIpPT5lIT09dC5ub2Rlc1tyXSl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gTShlKS5zaWduYXR1cmV9ZnVuY3Rpb24gQihlLHQpe2xldCByPU9iamVjdC5nZXRQcm90b3R5cGVPZihlKSxuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocixcInZhbHVlXCIpO24/LnNldD9uLnNldC5jYWxsKGUsdCk6ZS52YWx1ZT10fWZ1bmN0aW9uIHEoZSx0KXtlLmZvY3VzKCksQihlLFwiXCIpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSk7bGV0IHI9XCJcIjtmb3IobGV0IG4gb2YgdCllLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxrZXk6bn0pKSxCKGUscis9biksZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXl1cFwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsa2V5Om59KSk7ZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSl9YXN5bmMgZnVuY3Rpb24gVShlKXtyZXR1cm4gYXdhaXQgKDAsby5zZW5kVG9CYWNrZ3JvdW5kKSh7bmFtZTpcInNlYXJjaEljaW1zUHJvZmlsZU9wdGlvbnNcIixib2R5OmV9KX1hc3luYyBmdW5jdGlvbiBIKGUpe3JldHVybiBhd2FpdCAoMCxvLnNlbmRUb0JhY2tncm91bmQpKHtuYW1lOlwic2VsZWN0SWNpbXNQcm9maWxlT3B0aW9uXCIsYm9keTplfSl9ZnVuY3Rpb24gWShlKXtpZighQXJyYXkuaXNBcnJheShlKXx8ZS5sZW5ndGg+aClyZXR1cm4gbnVsbDtsZXQgdD1bXSxyPW5ldyBTZXQ7Zm9yKGxldCBuIG9mIGUpe2lmKCFufHxcIm9iamVjdFwiIT10eXBlb2Ygbnx8QXJyYXkuaXNBcnJheShuKSlyZXR1cm4gbnVsbDtsZXQgZT1PYmplY3Qua2V5cyhuKTtpZigyIT09ZS5sZW5ndGh8fCFlLmluY2x1ZGVzKFwidmFsdWVcIil8fCFlLmluY2x1ZGVzKFwidGV4dFwiKSlyZXR1cm4gbnVsbDtsZXQgbz1uLnZhbHVlLGk9bi50ZXh0O2lmKFwic3RyaW5nXCIhPXR5cGVvZiBvfHxcInN0cmluZ1wiIT10eXBlb2YgaSlyZXR1cm4gbnVsbDtsZXQgYT12KG8pLGw9dihpKTtpZighYXx8YS5sZW5ndGg+MjU2fHwhbHx8bC5sZW5ndGg+NTEyKXJldHVybiBudWxsO2xldCBzPUpTT04uc3RyaW5naWZ5KFthLGxdKTtyLmhhcyhzKXx8KHIuYWRkKHMpLHQucHVzaCh7dmFsdWU6YSx0ZXh0Omx9KSl9cmV0dXJuIHR9YXN5bmMgZnVuY3Rpb24geihlLHQscj1VKXtsZXQgbjsoMCxhLmNoZWNrcG9pbnQpKCk7bGV0IG89dih0KTtpZighZT8uaWR8fCFvKXJldHVybntzdGF0dXM6XCJ1bmF2YWlsYWJsZVwifTtsZXQgaT13KGUpLHU9bChlKSxjPXU/cyh1KTpudWxsLGQ9Yz8ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO2lmKCF1fHwhY3x8IWQpcmV0dXJue3N0YXR1czpcInVuYXZhaWxhYmxlXCJ9O2xldCBmPXt0b2tlbjppLHNlbGVjdDplLGNvbnRhaW5lcjpjLGlucHV0OmQsc2VhcmNoSW5wdXQ6byxjYW5kaWRhdGVzOltdLGludmFsaWRhdGVkOiExfTt4KGYsdSk7dHJ5e249YXdhaXQgcih7c2VsZWN0SWQ6ZS5pZCxzZWFyY2hJbnB1dDpvfSl9Y2F0Y2h7cmV0dXJuIEUoZSxpKSxjb25zb2xlLndhcm4oXCJbSWNpbXNQcm9maWxlT3B0aW9uc10gc2VhcmNoIGZhaWxlZFwiKSx7c3RhdHVzOlwidW5hdmFpbGFibGVcIn19aWYoKDAsYS5jaGVja3BvaW50KSgpLCFTKGUsaSl8fGYuaW52YWxpZGF0ZWQpcmV0dXJuIGYuaW52YWxpZGF0ZWQ9ITAsRShlLGkpLHtzdGF0dXM6XCJpbnZhbGlkYXRlZFwifTtpZihuPy5zdGF0dXM9PT1cImZhaWx1cmVcIilyZXR1cm4gRShlLGkpLGNvbnNvbGUud2FybihcIltJY2ltc1Byb2ZpbGVPcHRpb25zXSBzZWFyY2ggZmFpbGVkXCIse3JlYXNvbjpuLnJlYXNvbn0pLHtzdGF0dXM6XCJ1bmF2YWlsYWJsZVwifTtsZXQgcD1ZKG4/LmNhbmRpZGF0ZXMpO3JldHVybiFwfHxuPy5zdGF0dXM9PT1cInJlYWR5XCImJjA9PT1wLmxlbmd0aHx8bj8uc3RhdHVzPT09XCJuby1yZXN1bHRzXCImJnAubGVuZ3RoPjA/KEUoZSxpKSxjb25zb2xlLndhcm4oXCJbSWNpbXNQcm9maWxlT3B0aW9uc10gaW52YWxpZCBjYW5kaWRhdGUgcmVzcG9uc2VcIikse3N0YXR1czpcInVuYXZhaWxhYmxlXCJ9KTooZi5jYW5kaWRhdGVzPXAsY29uc29sZS5pbmZvKFwiW0ljaW1zUHJvZmlsZU9wdGlvbnNdIHNlYXJjaCBjb21wbGV0ZWRcIix7ZmllbGRUeXBlOmUuaWQuZW5kc1dpdGgoXCJDYW5kUHJvZmlsZUZpZWxkcy5TY2hvb2xcIik/XCJzY2hvb2xcIjpcIm1ham9yXCIsY2FuZGlkYXRlQ291bnQ6cC5sZW5ndGh9KSx7c3RhdHVzOm4uc3RhdHVzLGdlbmVyYXRpb246Zn0pfWFzeW5jIGZ1bmN0aW9uIFYoZSx0KXtsZXQgcj12KHQpO2lmKCFlfHwhcilyZXR1cm57c3RhdHVzOlwidW5hdmFpbGFibGVcIn07bGV0IG49dyhlKSxvPWF3YWl0IFAoZSk7aWYoIVMoZSxuKSlyZXR1cm57c3RhdHVzOlwiaW52YWxpZGF0ZWRcIn07aWYoXCJ1bmF2YWlsYWJsZVwiPT09by5zdGF0dXMpcmV0dXJuIG87bGV0eyRjb250YWluZXI6aSwkaW5wdXQ6bCwkdHJpZ2dlcjpzfT1vLmNvbnRleHQsdT17dG9rZW46bixzZWxlY3Q6ZSxjb250YWluZXI6aSxpbnB1dDpsLHNlYXJjaElucHV0OnIsY2FuZGlkYXRlczpbXSxpbnZhbGlkYXRlZDohMX0sZD1NKGkpLGY9ITEsaD0hMSxnPSExLGI9RChpKSx5PSgpPT57aWYoIWYpcmV0dXJuO2xldCBlPUQoaSk7ZSYmIWImJihnPSEwKSxiPWUsTihkLE0oaSkpJiYoaD0hMCl9O3godSxzKTtsZXQgQz1uZXcgTXV0YXRpb25PYnNlcnZlcigoKT0+e3koKX0pO0Mub2JzZXJ2ZShpLHthdHRyaWJ1dGVzOiEwLGNoaWxkTGlzdDohMCxjaGFyYWN0ZXJEYXRhOiEwLHN1YnRyZWU6ITB9KTtsZXQgQT0hMTt0cnl7Zj0hMCxxKGwscik7bGV0IHQ9RGF0ZS5ub3coKStjLG89XCJcIixzPTA7Zm9yKDtEYXRlLm5vdygpPD10Oyl7aWYoIVMoZSxuKXx8dS5pbnZhbGlkYXRlZClyZXR1cm4gdS5pbnZhbGlkYXRlZD0hMCx7c3RhdHVzOlwiaW52YWxpZGF0ZWRcIn07eSgpO2xldCB0PUQoaSk7aWYoIWh8fHQpe3M9MCxhd2FpdCAoMCxhLmNhbmNlbGxhYmxlRGVsYXkpKHApO2NvbnRpbnVlfWxldCByPUkoaSksbD1GKGkpO2lmKCFyJiYwPT09bC5sZW5ndGgpe3M9MCxhd2FpdCAoMCxhLmNhbmNlbGxhYmxlRGVsYXkpKHApO2NvbnRpbnVlfWxldCBjPSQoaSk7aWYoYz09PW8/cys9MToobz1jLHM9MSkscz49bSlyZXR1cm4gdS5jYW5kaWRhdGVzPU8oaSksQT0hMCx7c3RhdHVzOnImJjA9PT1sLmxlbmd0aD9cIm5vLXJlc3VsdHNcIjpcInJlYWR5XCIsZ2VuZXJhdGlvbjp1fTthd2FpdCAoMCxhLmNhbmNlbGxhYmxlRGVsYXkpKHApfWlmKCFTKGUsbil8fHUuaW52YWxpZGF0ZWQpcmV0dXJue3N0YXR1czpcImludmFsaWRhdGVkXCJ9O3JldHVybiBofHxnP3tzdGF0dXM6XCJ0aW1lb3V0XCJ9OntzdGF0dXM6XCJzdGFsZVwifX1maW5hbGx5e0MuZGlzY29ubmVjdCgpLEF8fEUoZSxuKX19ZnVuY3Rpb24gVyhlLHQpe3JldHVybiBlLnZhbHVlPT09dC52YWx1ZSYmZS50ZXh0PT09dC50ZXh0fWZ1bmN0aW9uIEcoZSl7bGV0IHQ9W2UsLi4uQXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoZykpXTtyZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHQpKX1mdW5jdGlvbiBLKGUpe2xldCB0PVtdLHI9QXJyYXkuZnJvbShlLnNlbGVjdGVkT3B0aW9ucz8/W10pO2ZvcihsZXQgZSBvZiByKXtsZXQgcj17dmFsdWU6dihlLnZhbHVlKSx0ZXh0OnYoZS50ZXh0KX07ci52YWx1ZSYmci50ZXh0JiZ0LnB1c2gocil9bGV0IG49ZS5pZD9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtlLmlkfV9mYWtlU2VsZWN0ZWRfaWNpbXNEcm9wZG93bmApOm51bGwsbz1lLm5leHRFbGVtZW50U2libGluZztmb3IobGV0IGUgb2ZbbixvXSlpZihlKWZvcihsZXQgciBvZiBHKGUpKXtsZXQgZT1SKHIpO2UmJnQucHVzaChlKX1yZXR1cm4gdH1mdW5jdGlvbiBYKGUsdCl7bGV0IHI9ZS5vd25lckRvY3VtZW50Pz8oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGRvY3VtZW50P251bGw6ZG9jdW1lbnQpLG49ZS5pZD9yPy5nZXRFbGVtZW50QnlJZChgJHtlLmlkfV9mYWtlU2VsZWN0ZWRfaWNpbXNEcm9wZG93bmApOm51bGwsbz1lLm5leHRFbGVtZW50U2libGluZztyZXR1cm5bbixvXS5zb21lKGU9PnYoZT8udGV4dENvbnRlbnQpPT09dCl9ZnVuY3Rpb24gSihlLHQpe2xldCByPUFycmF5LmZyb20oZS5zZWxlY3RlZE9wdGlvbnM/P1tdKTtyZXR1cm4gMT09PXIubGVuZ3RoJiZ2KHJbMF0udmFsdWUpPT09dC52YWx1ZSYmdihyWzBdLnRleHQpPT09dC50ZXh0fWZ1bmN0aW9uIFEoZSl7bGV0IHQ9ZS5zZWxlY3QubmV4dEVsZW1lbnRTaWJsaW5nO3JldHVybiB0Py5pZD9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0LmlkfV9jdG5yYCk6bnVsbH1hc3luYyBmdW5jdGlvbiBaKGUsdCl7dHJ5e2lmKGUuaW52YWxpZGF0ZWR8fCFTKGUuc2VsZWN0LGUudG9rZW4pfHwhZS5jYW5kaWRhdGVzLnNvbWUoZT0+VyhlLHQpKSlyZXR1cm4hMTtsZXQgcj1RKGUpO2lmKCFyfHxyIT09ZS5jb250YWluZXIpcmV0dXJuITE7bGV0IG49RihyKS5maWx0ZXIoZT0+e2xldCByPVIoZSk7cmV0dXJuISFyJiZXKHIsdCl9KTtpZigxIT09bi5sZW5ndGgpcmV0dXJuITE7KDAsaS50cmlnZ2VyRXZlbnRzKShuWzBdLFtcImZvY3VzXCIsXCJtb3VzZWRvd25cIixcIm1vdXNldXBcIixcImNsaWNrXCJdKTtsZXQgbz1EYXRlLm5vdygpK2Y7Zm9yKDtEYXRlLm5vdygpPD1vJiYhZS5pbnZhbGlkYXRlZCYmUyhlLnNlbGVjdCxlLnRva2VuKTspe2lmKEsoZS5zZWxlY3QpLnNvbWUoZT0+VyhlLHQpKSlyZXR1cm4hMDthd2FpdCAoMCxhLmNhbmNlbGxhYmxlRGVsYXkpKHApfXJldHVybiExfWZpbmFsbHl7RShlLnNlbGVjdCxlLnRva2VuKX19YXN5bmMgZnVuY3Rpb24gZWUoZSx0LHI9SCl7bGV0IG49KHQscj17fSk9Pntjb25zb2xlLmluZm8oYFtJY2ltc1Byb2ZpbGVPcHRpb25zXSBjYW5kaWRhdGUgY29tbWl0IGZhaWxlZCAke0pTT04uc3RyaW5naWZ5KHtmaWVsZFR5cGU6ZS5zZWxlY3QuaWQuZW5kc1dpdGgoXCJDYW5kUHJvZmlsZUZpZWxkcy5TY2hvb2xcIik/XCJzY2hvb2xcIjpcIm1ham9yXCIscmVhc29uOnQsLi4ucn0pfWApfTt0cnl7bGV0IG87bGV0e3NlbGVjdDpzLGlucHV0OnV9PWU7aWYoZS5pbnZhbGlkYXRlZHx8IVMocyxlLnRva2VuKXx8IWUuY2FuZGlkYXRlcy5zb21lKGU9PlcoZSx0KSkpcmV0dXJuIG4oXCJpbnZhbGlkLWdlbmVyYXRpb24tb3ItY2FuZGlkYXRlXCIpLCExO2xldCBjPVEoZSk7aWYoIWN8fGMhPT1lLmNvbnRhaW5lcilyZXR1cm4gbihcInN0YWxlLWNvbnRhaW5lclwiKSwhMTtsZXQgbT1sKHMpO2lmKCFtKXJldHVybiBuKFwibWlzc2luZy10cmlnZ2VyXCIpLCExOygwLGkudHJpZ2dlckV2ZW50cykobSxbXCJtb3VzZWRvd25cIixcIm1vdXNldXBcIixcImNsaWNrXCJdKSxxKHUsZS5zZWFyY2hJbnB1dCk7bGV0IGg9RGF0ZS5ub3coKStkLGc9bnVsbDtmb3IoO0RhdGUubm93KCk8PWg7KXtpZihlLmludmFsaWRhdGVkfHwhUyhzLGUudG9rZW4pKXJldHVybiExO2xldCByPUYoYykuZmlsdGVyKGU9PnYoZS50ZXh0Q29udGVudCk9PT10LnRleHQpO2lmKHIubGVuZ3RoPjEpcmV0dXJuIG4oXCJhbWJpZ3VvdXMtdmlzaWJsZS1vcHRpb25zXCIse21hdGNoaW5nT3B0aW9uQ291bnQ6ci5sZW5ndGh9KSwhMTtpZigxPT09ci5sZW5ndGgpe2c9clswXTticmVha31hd2FpdCAoMCxhLmNhbmNlbGxhYmxlRGVsYXkpKHApfWlmKCFnKXJldHVybiBuKFwibWlzc2luZy12aXNpYmxlLW9wdGlvblwiKSwhMTt0cnl7bz1hd2FpdCByKHtzZWxlY3RJZDpzLmlkLGNhbmRpZGF0ZTp0fSl9Y2F0Y2h7bz17c3RhdHVzOlwiZmFpbHVyZVwiLHJlYXNvbjpcInVuY29tbWl0dGVkXCJ9fVwic2VsZWN0ZWRcIiE9PW8uc3RhdHVzJiZnLmNsaWNrKCk7bGV0IGI9RGF0ZS5ub3coKStmO2Zvcig7RGF0ZS5ub3coKTw9Yjspe2lmKGUuaW52YWxpZGF0ZWR8fCFTKHMsZS50b2tlbikpcmV0dXJuITE7aWYoSihzLHQpJiZYKHMsdC50ZXh0KSlyZXR1cm4hMDthd2FpdCAoMCxhLmNhbmNlbGxhYmxlRGVsYXkpKHApfXJldHVybiBuKFwidW5jb21taXR0ZWQtcmVhZGJhY2tcIix7bWFpbldvcmxkU3RhdHVzOm8uc3RhdHVzLG1haW5Xb3JsZFJlYXNvbjpcImZhaWx1cmVcIj09PW8uc3RhdHVzP28ucmVhc29uOnZvaWQgMCxuYXRpdmVTZWxlY3Rpb25NYXRjaGVkOkoocyx0KSx2aXNpYmxlU2VsZWN0aW9uTWF0Y2hlZDpYKHMsdC50ZXh0KX0pLCExfWZpbmFsbHl7RShlLnNlbGVjdCxlLnRva2VuKX19ZnVuY3Rpb24gZXQoZSx0KXtsZXQgcj12KGUpLnRvTG93ZXJDYXNlKCksbj12KHQpO3JldHVybiFyJiYhbnx8L14oPzpbLVxcdTIwMTRcXHUyMDEzXVxccyopPyg/Om1ha2UgYSBzZWxlY3Rpb258cGxlYXNlIHNlbGVjdCg/OiBhbiBvcHRpb24pP3xzZWxlY3Qgb25lfGNob29zZSg/OiBhbiBvcHRpb24pPykoPzpcXHMqWy1cXHUyMDE0XFx1MjAxM10pPyQvLnRlc3Qocil9ZnVuY3Rpb24gZXIoZSl7cmV0dXJuIEcoZSkuc29tZShlPT57bGV0IHQ9UihlKTtyZXR1cm4hIXQmJiFldCh0LnRleHQsdC52YWx1ZSl9KX1mdW5jdGlvbiBlbihlKXtpZighZSlyZXR1cm4hMDtpZihlcihlKSlyZXR1cm4hMTtsZXQgdD12KGUudGV4dENvbnRlbnQpO3JldHVybiF0fHxldCh0LFwiXCIpfWZ1bmN0aW9uIGVvKGUpe2xldCB0PUFycmF5LmZyb20oZS5zZWxlY3RlZE9wdGlvbnM/P1tdKTtpZigxIT09dC5sZW5ndGh8fCFldCh0WzBdLnRleHQsdFswXS52YWx1ZSkpcmV0dXJuITE7bGV0IHI9ZS5pZD9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtlLmlkfV9mYWtlU2VsZWN0ZWRfaWNpbXNEcm9wZG93bmApOm51bGwsbj1lLm5leHRFbGVtZW50U2libGluZztyZXR1cm4gZW4ocikmJmVuKG4pfWFzeW5jIGZ1bmN0aW9uIGVpKGUpe2lmKCFlfHxlLm11bHRpcGxlKXJldHVybiExO0EoZSk7bGV0IHQ9QXJyYXkuZnJvbShlLm9wdGlvbnM/P1tdKSxyPXQuZmluZEluZGV4KGU9PmV0KGUudGV4dCxlLnZhbHVlKSk7aWYocjwwKXJldHVybiExO3QuZm9yRWFjaCgoZSx0KT0+e2Uuc2VsZWN0ZWQ9dD09PXJ9KSxlLnNlbGVjdGVkSW5kZXg9cixlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpO2xldCBuPURhdGUubm93KCkrZjtmb3IoO0RhdGUubm93KCk8PW47KXtpZihlbyhlKSlyZXR1cm4hMDthd2FpdCAoMCxhLmNhbmNlbGxhYmxlRGVsYXkpKHApfXJldHVybiExfVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXNlYXJjaC13aWRnZXQuYTE2ODRjZGEuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);