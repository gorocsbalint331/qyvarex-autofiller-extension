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
})({"kInUQ":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\kula\\rules.js",
    "bundleId": "24b830494a3983bf",
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
var j = z(require("335329063560abc7"));
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

},{"335329063560abc7":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"aEcHD":[function(require,module,exports) {
/**
 * Parcel module id: 7iog9
 * Resolved path: src/contents/sites/kula/rules.js
 * Dependencies:
 *   ./phone-country-code -> fRM2B  =>  src/contents/sites/kula/phone-country-code.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~core/enums -> 1O3nc  =>  src/core/enums.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "KULA_MONTH_YEAR_DATE_DESCRIPTION", ()=>d), n.export(r, "getEducationRules", ()=>x), n.export(r, "getExperienceRules", ()=>C), n.export(r, "getRules", ()=>A), n.export(r, "getFormSnapshot", ()=>T);
var o = e("~core/enums"), i = e("~utils/delay"), a = e("./phone-country-code");
function l(e1) {
    return (e1 || "").replace(/\s+/g, " ").trim();
}
function s(e1) {
    let t = l(e1).toLowerCase();
    return !t || /^(yes|no|select|select\.{0,3}|upload file|add|input|choose|option)$/i.test(t);
}
function u(e1) {
    let t = (e1.getAttribute("aria-labelledby") || "").split(/\s+/).filter(Boolean);
    if (0 === t.length) return "";
    let r1 = t.map((e1)=>l(document.getElementById(e1)?.textContent)).filter((e1)=>e1 && !s(e1));
    return l(r1.join(" "));
}
function c(e1) {
    return /^address$/i.test(e1.trim());
}
let d = "Return month and year only in MMM YYYY format, for example: Jul 2026. Do not include a day.";
function f(e1) {
    return e1.classList.contains("kula-date-field-input-trigger") || null !== e1.closest(".kula-date-field-shell") || null !== e1.closest(".react-datepicker-wrapper");
}
function p(e1, t) {
    if (f(t) && /^(start date|end date|graduation date)$/i.test(e1.trim())) return d;
}
function m(e1) {
    if (e1.hasAttribute("required") || "true" === e1.getAttribute("aria-required")) return !0;
    let t = e1.closest(".chakra-form-control, [class*='form-control']");
    if (t) {
        let e1 = t.querySelector("label, p.chakra-text");
        if (e1 && /\*/.test(e1.textContent || "")) return !0;
    }
    let r1 = e1.closest("[data-test-id]");
    if (r1) {
        let e1 = r1.querySelector("p.chakra-text, p");
        if (e1 && /\*/.test(e1.textContent || "")) return !0;
    }
    return !1;
}
function h(e1) {
    return e1.replace(/\s*(No options available|Add and select\s*["'""][^"'"]*["'""]|Add and select\s*"[^"]*"|Type to search\.{0,3})$/i, "").trim();
}
function g(e1, t = "text") {
    let r1 = e1.closest(".chakra-form-control, [class*='form-control']");
    if (!r1) return "";
    let n = r1.querySelector("label, p.chakra-text");
    if (n) {
        let e1 = n.cloneNode(!0);
        e1.querySelectorAll('[aria-hidden="true"]').forEach((e1)=>e1.remove());
        let t = l(e1.textContent).replace(/\*+$/, "").trim();
        if (t && !s(t)) return t;
    }
    let o = l(r1.textContent);
    return o ? (o = h(o), "radio" === t && (o = o.replace(/\*?\s*(yes\s*no)$/i, "")), "select" === t && (o = o.replace(/\s*select\.{0,3}$/i, "")), s(o = l(o).replace(/\*+$/g, "").trim()) ? "" : o) : "";
}
function b(e1) {
    let t = e1.closest("fieldset, section, li, div");
    if (!t) return "";
    let r1 = l(e1.getAttribute("aria-label"));
    if (r1 && !s(r1)) return r1;
    let n = u(e1);
    if (n) return n;
    let o = g(e1);
    if (o) return o;
    let i = t.querySelector("legend");
    if (i) {
        let e1 = l(i.textContent);
        if (!s(e1)) return e1;
    }
    let a = Array.from(t.querySelectorAll("label, h1, h2, h3, h4, h5, h6, p, span, div")).map((e1)=>l(e1.textContent)).find((e1)=>e1.length > 3 && e1.length < 180 && !s(e1));
    return a || "";
}
function y(e1) {
    let t = e1.id;
    if (t) {
        let e1 = document.querySelector(`label[for="${t}"]`), r1 = l(e1?.textContent);
        if (r1 && !s(r1)) return r1;
    }
    let r1 = l(e1.getAttribute("aria-label"));
    if (r1 && !s(r1)) return r1;
    let n = u(e1);
    if (n) return n;
    let o = e1.closest("label"), i = l(o?.textContent);
    if (i && !s(i)) return i;
    let a = e1.closest("div, li, fieldset, section"), c = a?.querySelector("label"), d = l(c?.textContent);
    return d && !s(d) ? d : b(e1);
}
function v(e1) {
    let t = getComputedStyle(e1);
    return "none" === t.display || "hidden" === t.visibility || 0 === e1.getClientRects().length;
}
async function w(e1) {
    e1.focus(), await (0, i.delay)(100), e1.dispatchEvent(new KeyboardEvent("keydown", {
        key: "ArrowDown",
        keyCode: 40,
        bubbles: !0
    })), await (0, i.delay)(300);
    let t = e1.closest('[class*="-container"]'), r1 = t?.querySelector('[class*="-menu"]');
    r1 || (r1 = document.querySelector('[class*="-menu"]'));
    let n = [];
    return r1 && r1.querySelectorAll('[class*="-option"]').forEach((e1)=>{
        let t = l(e1.textContent);
        t && n.push(t);
    }), e1.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Escape",
        keyCode: 27,
        bubbles: !0
    })), await (0, i.delay)(100), n;
}
function S(e1) {
    return !!e1.closest('div[data-test-id="education"], div[data-test-id="experience"]');
}
_c = S;
async function E(e1, t, r1 = !1) {
    let n = t ?? new Set, i = [], d = Array.from(e1.querySelectorAll("input, textarea, select")).filter((e1)=>!("textarea" === e1.tagName.toLowerCase() && "g-recaptcha-response" === e1.getAttribute("name") || "hidden" === e1.type || r1 && S(e1)) && !v(e1));
    for (let e1 of d){
        let t = y(e1), r1 = `${t}::${e1.getAttribute("name") || e1.id || e1.tagName}`;
        if (n.has(r1)) continue;
        let d = m(e1);
        if ("textarea" === e1.tagName.toLowerCase()) {
            i.push({
                type: o.FIELD_TYPE.TEXT,
                label: t.replace(/\*/g, "").trim(),
                required: d,
                $input: e1,
                $label: null
            }), n.add(r1);
            continue;
        }
        if ("select" === e1.tagName.toLowerCase()) {
            let a = Array.from(e1.options).map((e1)=>l(e1.textContent)).filter(Boolean);
            i.push({
                type: o.FIELD_TYPE.SELECT,
                label: t.replace(/\*/g, "").trim(),
                required: d,
                $input: e1,
                $label: null,
                options: a
            }), n.add(r1);
            continue;
        }
        let f = e1, v = (f.type || "text").toLowerCase();
        if ("file" === v) continue;
        let S = (0, a.getKulaPhoneCountryButton)(f);
        if (S) {
            let e1 = `kula-phone-country::${f.id}`;
            n.has(e1) || (i.push({
                type: o.FIELD_TYPE.SELECT,
                label: a.KULA_PHONE_COUNTRY_CODE_LABEL,
                required: d,
                $input: S,
                $label: null,
                options: await (0, a.extractKulaPhoneCountryOptions)(S)
            }), n.add(e1)), i.push({
                type: o.FIELD_TYPE.TEXT,
                label: a.KULA_PHONE_LABEL,
                required: d,
                $input: f,
                $label: null,
                description: a.KULA_LOCAL_PHONE_DESCRIPTION
            }), n.add(r1);
            continue;
        }
        if ("radio" === v) {
            let e1 = f.name;
            if (!e1) continue;
            let r1 = Array.from(document.querySelectorAll(`input[type="radio"][name="${e1}"]`)), a = r1.map((e1)=>l(e1.closest("label")?.textContent || e1.value || "")).filter(Boolean), u = f.closest("fieldset, [role='radiogroup'], div, section"), c = l(u?.querySelector("legend, h1, h2, h3, h4, h5, h6, [data-testid*='question'], [class*='question']")?.textContent), p = g(f, "radio"), m = b(f), h = l(c || p || m || t);
            if (s(h)) {
                let e1 = l(u?.previousElementSibling?.textContent || u?.parentElement?.querySelector("label, p, h3, h4")?.textContent);
                e1 && !s(e1) && (h = e1);
            }
            let y = `radio::${e1}`;
            n.has(y) || (i.push({
                type: o.FIELD_TYPE.RADIOGROUP,
                label: h.replace(/\*/g, "").trim() || e1,
                required: d,
                $input: f,
                $radioParent: u,
                $label: null,
                options: a
            }), n.add(y));
            continue;
        }
        if ("checkbox" === v) {
            let e1 = f.closest("fieldset, div, section"), r1 = Array.from(e1?.querySelectorAll('input[type="checkbox"]') || [
                f
            ]), a = r1.map((e1)=>l(e1.closest("label")?.textContent || e1.getAttribute("aria-label") || "")).filter(Boolean), s = `checkbox::${f.name || t}`;
            n.has(s) || (i.push({
                type: o.FIELD_TYPE.CHECKBOX,
                label: t.replace(/\*/g, "").trim() || "Checkbox",
                required: d,
                $checkboxs: r1,
                $input: r1[0],
                $label: null,
                options: a
            }), n.add(s));
            continue;
        }
        if ("text" === v) {
            let e1 = l(f.getAttribute("placeholder"));
            if (e1 && /search/i.test(e1)) {
                let r1 = t.replace(/\*/g, "").trim() || e1 || f.name || "Search", a = `search::${r1}`;
                n.has(a) || (i.push({
                    type: o.FIELD_TYPE.SEARCH,
                    label: r1,
                    required: d,
                    $input: f,
                    $label: null,
                    ...c(r1) && {
                        description: "Format: City, State/Province, Country (e.g. Angus, Ontario, Canada)"
                    }
                }), n.add(a));
                continue;
            }
        }
        if (f.id.includes("react-select") || "combobox" === f.getAttribute("role")) {
            let e1 = f.closest(".chakra-form-control, [class*='form-control']"), r1 = "", a = f.closest("[data-test-id]");
            if (a) {
                let e1 = a.querySelector("p.chakra-text, p");
                if (e1) {
                    let t = e1.cloneNode(!0);
                    t.querySelectorAll("span, div").forEach((e1)=>e1.remove()), r1 = h(l(t.textContent));
                }
            }
            let d = l(e1?.querySelector("label")?.textContent), p = l(f.getAttribute("aria-label")), y = u(f), v = g(f, "select"), S = "";
            if (r1 && !s(r1) ? S = r1.replace(/\*/g, "").trim() : d && !s(d) ? S = d.replace(/\*/g, "").trim() : p && !s(p) ? S = p.replace(/\*/g, "").trim() : y && !s(y) ? S = y.replace(/\*/g, "").trim() : v && !s(v) ? S = v.replace(/\*/g, "").trim() : t && !s(t) && (S = t.replace(/\*/g, "").trim()), !S) {
                let e1 = h(l(f.closest("div, li, section")?.querySelector("label, p, h3, h4")?.textContent));
                e1 && !s(e1) && (S = e1.replace(/\*/g, "").trim());
            }
            if (!S) {
                let e1 = h(b(f));
                S = e1 && !s(e1) ? e1 : f.name || "Select";
            }
            let E = m(f);
            S && /preferred location/i.test(S) && (E = !0);
            let x = "true" === f.getAttribute("aria-readonly") || "none" === f.inputMode;
            if (x) {
                let e1 = `react-select::${S || f.id.split("-input")[0]}`;
                if (!n.has(e1)) {
                    let t = await w(f);
                    i.push({
                        type: o.FIELD_TYPE.SELECT,
                        label: S,
                        required: E,
                        $input: f,
                        $label: null,
                        options: t
                    }), n.add(e1);
                }
            } else {
                let e1 = `react-search::${S || f.id.split("-input")[0]}`;
                n.has(e1) || (i.push({
                    type: o.FIELD_TYPE.SEARCH,
                    label: S,
                    required: E,
                    $input: f,
                    $label: null,
                    ...c(S) && {
                        description: "Format: City, State/Province, Country (e.g. Angus, Ontario, Canada)"
                    }
                }), n.add(e1));
            }
            continue;
        }
        let E = t.replace(/\*/g, "").trim() || f.name || "Text", x = p(E, f);
        x ? i.push({
            type: o.FIELD_TYPE.DATE,
            label: E,
            required: d,
            $input: f,
            $label: null,
            description: x
        }) : i.push({
            type: o.FIELD_TYPE.TEXT,
            label: E,
            required: d,
            $input: f,
            $label: null
        }), n.add(r1);
    }
    return i;
}
_c1 = E;
async function x() {
    let e1 = Array.from(document.querySelectorAll('div[data-test-id="education"]')), t = [];
    for (let r1 of e1){
        let e1 = await E(r1);
        t.push({
            type: o.FIELD_TYPE.EDUCATION,
            label: "Education",
            required: !1,
            children: e1,
            options: e1.map((e1)=>({
                    label: e1.label,
                    type: e1.type,
                    options: e1.options,
                    ...e1.description ? {
                        description: e1.description
                    } : {}
                }))
        });
    }
    return t;
}
async function C() {
    let e1 = Array.from(document.querySelectorAll('div[data-test-id="experience"]')), t = [];
    for (let r1 of e1){
        let e1 = await E(r1);
        t.push({
            type: o.FIELD_TYPE.EMPLOYMENT,
            label: "Experience",
            required: !1,
            children: e1,
            options: e1.map((e1)=>({
                    label: e1.label,
                    type: e1.type,
                    options: e1.options,
                    ...e1.description ? {
                        description: e1.description
                    } : {}
                }))
        });
    }
    return t;
}
_c2 = C;
async function A() {
    let e1 = new Set, t = await E(document.body, e1, !0), r1 = await x();
    r1.length > 0 && t.push(r1[0]);
    let n = await C();
    return n.length > 0 && t.push(n[0]), t;
}
_c3 = A;
function k(e1, t = !1) {
    let r1 = {}, n = new Set, o = (e1)=>e1.replace(/\*/g, "").trim(), i = Array.from(e1.querySelectorAll("input, textarea, select")).filter((e1)=>!("hidden" === e1.type || t && S(e1)) && !v(e1));
    for (let t of i){
        if ("select" === t.tagName.toLowerCase()) {
            let e1 = t, i = o(y(e1));
            if (!i || n.has(i)) continue;
            n.add(i), r1[i] = e1.options[e1.selectedIndex]?.textContent?.trim() ?? "";
            continue;
        }
        let i = t, l = (i.type || "text").toLowerCase();
        if ("file" === l) continue;
        let s = (0, a.getKulaPhoneContainer)(i);
        if (s) {
            let e1 = (0, a.getKulaPhoneCountryButton)(i);
            e1 && !n.has(a.KULA_PHONE_COUNTRY_CODE_LABEL) && (n.add(a.KULA_PHONE_COUNTRY_CODE_LABEL), r1[a.KULA_PHONE_COUNTRY_CODE_LABEL] = (0, a.getKulaSelectedPhoneCountry)(e1)), n.has(a.KULA_PHONE_LABEL) || (n.add(a.KULA_PHONE_LABEL), r1[a.KULA_PHONE_LABEL] = i.value.trim());
            continue;
        }
        if (i.id.includes("react-select") || "combobox" === i.getAttribute("role")) {
            let e1 = i.closest('[class*="-container"]'), t = e1?.querySelector('[class*="-singleValue"], [class*="singleValue"], [class*="single-value"]'), a = o(y(i));
            if (!a || n.has(a)) continue;
            n.add(a), r1[a] = t?.textContent?.trim() ?? "";
            continue;
        }
        if ("radio" === l) {
            let t = i.name;
            if (!t) continue;
            let a = `radio::${t}`;
            if (n.has(a)) continue;
            n.add(a);
            let l = e1.querySelector(`input[type="radio"][name="${CSS.escape(t)}"]:checked`), s = o(y(i));
            if (!s) continue;
            r1[s] = (l?.closest("label")?.textContent ?? "").replace(/\s+/g, " ").trim();
            continue;
        }
        if ("checkbox" === l) {
            let e1 = o(y(i)), t = `checkbox::${i.name || e1}`;
            if (!e1 || n.has(t)) continue;
            n.add(t);
            let a = i.closest("fieldset, div, section"), l = Array.from(a?.querySelectorAll('input[type="checkbox"]') ?? [
                i
            ]);
            r1[e1] = l.filter((e1)=>e1.checked).map((e1)=>(e1.closest("label")?.textContent || e1.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim());
            continue;
        }
        let u = o(y(i));
        !u || n.has(u) || (n.add(u), r1[u] = i.value.trim());
    }
    return r1;
}
function T() {
    let e1 = k(document.body, !0), t = Array.from(document.querySelectorAll('div[data-test-id="education"]')), r1 = t.map((e1)=>k(e1, !1)), n = Array.from(document.querySelectorAll('div[data-test-id="experience"]')), o = n.map((e1)=>k(e1, !1));
    return {
        url: window.location.href,
        ...e1,
        ...r1.length > 0 ? {
            education: r1
        } : {},
        ...o.length > 0 ? {
            experience: o
        } : {}
    };
}
_c4 = T;
var _c, _c1, _c2, _c3, _c4;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");

},{}]},["kInUQ","aEcHD"], "aEcHD", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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RUFBRSxFQUFFO1FBQUksQ0FBQyxLQUFHLEVBQUUsSUFBSSxNQUFLLENBQUEsRUFBRSxJQUFJLElBQUcsRUFBQyxDQUFDLEVBQUUsR0FBQyxFQUFFLE1BQU0sTUFBSztJQUFFO0lBQUMsT0FBTztBQUFDO0FBQUMsU0FBUztJQUFJLElBQUksS0FBRSxFQUFFLFNBQVMsTUFBSyxDQUFDLElBQUcsSUFBRSxNQUFNLEtBQUssU0FBUyxpQkFBaUIsbUNBQWtDLEtBQUUsRUFBRSxJQUFJLENBQUEsS0FBRyxFQUFFLElBQUUsQ0FBQyxLQUFJLElBQUUsTUFBTSxLQUFLLFNBQVMsaUJBQWlCLG9DQUFtQyxJQUFFLEVBQUUsSUFBSSxDQUFBLEtBQUcsRUFBRSxJQUFFLENBQUM7SUFBSSxPQUFNO1FBQUMsS0FBSSxPQUFPLFNBQVM7UUFBSyxHQUFHLEVBQUM7UUFBQyxHQUFHLEdBQUUsU0FBTyxJQUFFO1lBQUMsV0FBVTtRQUFDLElBQUUsQ0FBQyxDQUFDO1FBQUMsR0FBRyxFQUFFLFNBQU8sSUFBRTtZQUFDLFlBQVc7UUFBQyxJQUFFLENBQUMsQ0FBQztJQUFBO0FBQUM7TUFBN1QiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTZlNGMxOWQ0NGE4MzgyOTQuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMva3VsYS9ydWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxzaXRlc1xcXFxrdWxhXFxcXHJ1bGVzLmpzXCIsXCJidW5kbGVJZFwiOlwiMjRiODMwNDk0YTM5ODNiZlwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1jLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6Yy52ZXJib3NlfX07dmFyIFk9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gWihlKXtZLmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPVo7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBkPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7YXN5bmMgZnVuY3Rpb24gbShlPSExKXtlPyhwKFwiVHJpZ2dlcmluZyBmdWxsIHJlbG9hZFwiKSxkLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe19fcGxhc21vX2Z1bGxfcmVsb2FkX186ITB9KSk6Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKX1mdW5jdGlvbiB3KCl7cmV0dXJuIWMuaG9zdHx8Yy5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIEwoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOmMuaG9zdH1mdW5jdGlvbiBmKCl7cmV0dXJuIGMucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUz1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIjt2YXIgaT17Y2hlY2tlZEFzc2V0czp7fSxhc3NldHNUb0Rpc3Bvc2U6W10sYXNzZXRzVG9BY2NlcHQ6W119LEI9KCk9PntpLmNoZWNrZWRBc3NldHM9e30saS5hc3NldHNUb0Rpc3Bvc2U9W10saS5hc3NldHNUb0FjY2VwdD1bXX07ZnVuY3Rpb24gdShlLHQpe2xldHttb2R1bGVzOm99PWU7aWYoIW8pcmV0dXJuW107bGV0IHI9W10sbixzLGE7Zm9yKG4gaW4gbylmb3IocyBpbiBvW25dWzFdKWE9b1tuXVsxXVtzXSwoYT09PXR8fEFycmF5LmlzQXJyYXkoYSkmJmFbYS5sZW5ndGgtMV09PT10KSYmci5wdXNoKFtlLG5dKTtyZXR1cm4gZS5wYXJlbnQmJihyPXIuY29uY2F0KHUoZS5wYXJlbnQsdCkpKSxyfWZ1bmN0aW9uIFIoZSx0LG8pe2lmKEMoZSx0LG8pKXJldHVybiEwO2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpLG49ITE7Zm9yKDtyLmxlbmd0aD4wOyl7bGV0W3MsYV09ci5zaGlmdCgpO2lmKEMocyxhLG51bGwpKW49ITA7ZWxzZXtsZXQgZz11KG1vZHVsZS5idW5kbGUucm9vdCxhKTtpZihnLmxlbmd0aD09PTApe249ITE7YnJlYWt9ci5wdXNoKC4uLmcpfX1yZXR1cm4gbn1mdW5jdGlvbiBDKGUsdCxvKXtsZXR7bW9kdWxlczpyfT1lO2lmKCFyKXJldHVybiExO2lmKG8mJiFvW2UuSE1SX0JVTkRMRV9JRF0pcmV0dXJuIGUucGFyZW50P1IoZS5wYXJlbnQsdCxvKTohMDtpZihpLmNoZWNrZWRBc3NldHNbdF0pcmV0dXJuITA7aS5jaGVja2VkQXNzZXRzW3RdPSEwO2xldCBuPWUuY2FjaGVbdF07cmV0dXJuIGkuYXNzZXRzVG9EaXNwb3NlLnB1c2goW2UsdF0pLCFufHxuLmhvdCYmbi5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGg/KGkuYXNzZXRzVG9BY2NlcHQucHVzaChbZSx0XSksITApOiExfWZ1bmN0aW9uIE0oZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBlZShlKXtpZihlLnR5cGU9PT1cImpzXCImJnR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gbmV3IFByb21pc2UoKHQsbyk9PntsZXQgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Iuc3JjPWAke2UudXJsfT90PSR7RGF0ZS5ub3coKX1gLGUub3V0cHV0Rm9ybWF0PT09XCJlc21vZHVsZVwiJiYoci50eXBlPVwibW9kdWxlXCIpLHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+dChyKSksci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwoKT0+byhuZXcgRXJyb3IoYEZhaWxlZCB0byBkb3dubG9hZCBhc3NldDogJHtlLmlkfWApKSksZG9jdW1lbnQuaGVhZD8uYXBwZW5kQ2hpbGQocil9KX1hc3luYyBmdW5jdGlvbiBPKGUpe2dsb2JhbC5wYXJjZWxIb3RVcGRhdGU9T2JqZWN0LmNyZWF0ZShudWxsKSxlLmZvckVhY2gobz0+e28udXJsPWQucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiK2VuY29kZVVSSUNvbXBvbmVudChgJHtvLnVybH0/dD0ke0RhdGUubm93KCl9YCkpfSk7bGV0IHQ9YXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZWUpKTt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKG8peyQobW9kdWxlLmJ1bmRsZS5yb290LG8pfSl9ZmluYWxseXtkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSx0JiZ0LmZvckVhY2gobz0+e28mJmRvY3VtZW50LmhlYWQ/LnJlbW92ZUNoaWxkKG8pfSl9fWZ1bmN0aW9uIHRlKGUpe2xldCB0PWUuY2xvbmVOb2RlKCk7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlLnBhcmVudE5vZGUhPT1udWxsJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9LHQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zcGxpdChcIj9cIilbMF0rXCI/XCIrRGF0ZS5ub3coKSksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LGUubmV4dFNpYmxpbmcpfXZhciBFPW51bGw7ZnVuY3Rpb24gb2UoKXtFfHwoRT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe2xldCBvPWVbdF0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxyPXcoKSxuPXI9PT1cImxvY2FsaG9zdFwiP25ldyBSZWdFeHAoXCJeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOlwiK2YoKSkudGVzdChvKTpvLmluZGV4T2YocitcIjpcIitmKCkpOy9eaHR0cHM/OlxcL1xcLy9pLnRlc3QobykmJm8uaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pIT09MCYmIW58fHRlKGVbdF0pfUU9bnVsbH0sNDcpKX1mdW5jdGlvbiAkKGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZihvKXtpZih0LnR5cGU9PT1cImNzc1wiKW9lKCk7ZWxzZSBpZih0LnR5cGU9PT1cImpzXCIpe2xldCByPXQuZGVwc0J5QnVuZGxlW2UuSE1SX0JVTkRMRV9JRF07aWYocil7aWYob1t0LmlkXSl7bGV0IHM9b1t0LmlkXVsxXTtmb3IobGV0IGEgaW4gcylpZighclthXXx8clthXSE9PXNbYV0pe2xldCBsPXNbYV07dShtb2R1bGUuYnVuZGxlLnJvb3QsbCkubGVuZ3RoPT09MSYmYihtb2R1bGUuYnVuZGxlLnJvb3QsbCl9fWxldCBuPWdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbdC5pZF07b1t0LmlkXT1bbixyXX1lbHNlIGUucGFyZW50JiYkKGUucGFyZW50LHQpfX19ZnVuY3Rpb24gYihlLHQpe2xldCBvPWUubW9kdWxlcztpZihvKWlmKG9bdF0pe2xldCByPW9bdF1bMV0sbj1bXTtmb3IobGV0IHMgaW4gcil1KG1vZHVsZS5idW5kbGUucm9vdCxyW3NdKS5sZW5ndGg9PT0xJiZuLnB1c2gocltzXSk7ZGVsZXRlIG9bdF0sZGVsZXRlIGUuY2FjaGVbdF0sbi5mb3JFYWNoKHM9PntiKG1vZHVsZS5idW5kbGUucm9vdCxzKX0pfWVsc2UgZS5wYXJlbnQmJmIoZS5wYXJlbnQsdCl9ZnVuY3Rpb24gdihlLHQpe2xldCBvPWUuY2FjaGVbdF07ZS5ob3REYXRhW3RdPXt9LG8mJm8uaG90JiYoby5ob3QuZGF0YT1lLmhvdERhdGFbdF0pLG8mJm8uaG90JiZvLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24ocil7cihlLmhvdERhdGFbdF0pfSksZGVsZXRlIGUuY2FjaGVbdF19ZnVuY3Rpb24gSShlLHQpe2UodCk7bGV0IG89ZS5jYWNoZVt0XTtpZihvJiZvLmhvdCYmby5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpe2xldCByPXUobW9kdWxlLmJ1bmRsZS5yb290LHQpO28uaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihuKXtsZXQgcz1uKCgpPT5yKTtzJiZzLmxlbmd0aCYmKHMuZm9yRWFjaCgoW2EsbF0pPT57dihhLGwpfSksaS5hc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGkuYXNzZXRzVG9BY2NlcHQscykpfSl9fWZ1bmN0aW9uIHJlKGU9ZigpKXtsZXQgdD1MKCk7cmV0dXJuYCR7Yy5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gbmUoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmayhcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIE4oZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KHJlKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHI9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHIudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUoci5hc3NldHMpLHIudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IG4gb2Ygci5kaWFnbm9zdGljcy5hbnNpKXtsZXQgcz1uLmNvZGVmcmFtZXx8bi5zdGFjaztBKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK24ubWVzc2FnZStgXG5gK3MrYFxuXG5gK24uaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuZSksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57VChgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke2MuZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntBKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgaj16KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO2FzeW5jIGZ1bmN0aW9uIEYoKXtqLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2sod2luZG93KSx3aW5kb3cuJFJlZnJlc2hSZWckPWZ1bmN0aW9uKCl7fSx3aW5kb3cuJFJlZnJlc2hTaWckPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlfX19dmFyIHNlPWAke1N9JHttb2R1bGUuaWR9X19gLGgsVT1tb2R1bGUuYnVuZGxlLnBhcmVudDtpZighVXx8IVUuaXNQYXJjZWxSZXF1aXJlKXt0cnl7aD1kPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6c2V9KSxoLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e20oKX0pLGMuaXNSZWFjdHx8aC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKCk9PnttKCl9KX1jYXRjaChlKXtwKGUpfU4oYXN5bmMgZT0+e2lmKHAoXCJQYWdlIHJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGMuaXNSZWFjdCl7QigpO2xldCB0PWUuZmlsdGVyKHI9PnIuZW52SGFzaD09PWMuZW52SGFzaCk7aWYodC5zb21lKHI9PnIudHlwZT09PVwiY3NzXCJ8fHIudHlwZT09PVwianNcIiYmUihtb2R1bGUuYnVuZGxlLnJvb3Qsci5pZCxyLmRlcHNCeUJ1bmRsZSkpKXRyeXthd2FpdCBPKHQpO2xldCByPXt9O2ZvcihsZXRbcyxhXW9mIGkuYXNzZXRzVG9EaXNwb3NlKXJbYV18fCh2KHMsYSksclthXT0hMCk7bGV0IG49e307Zm9yKGxldCBzPTA7czxpLmFzc2V0c1RvQWNjZXB0Lmxlbmd0aDtzKyspe2xldFthLGxdPWkuYXNzZXRzVG9BY2NlcHRbc107bltsXXx8KEkoYSxsKSxuW2xdPSEwKX19Y2F0Y2gocil7Yy52ZXJib3NlPT09XCJ0cnVlXCImJihjb25zb2xlLnRyYWNlKHIpLGFsZXJ0KEpTT04uc3RyaW5naWZ5KHIpKSksYXdhaXQgbSghMCl9fWVsc2V7bGV0IHQ9ZS5maWx0ZXIobz0+by5lbnZIYXNoPT09Yy5lbnZIYXNoKS5zb21lKG89Pk0obW9kdWxlLmJ1bmRsZSxvLmlkKSk7cChcIlBhZ2UgcnVudGltZSAtXCIse3NvdXJjZUNoYW5nZWQ6dH0pLHQmJmgucG9zdE1lc3NhZ2Uoe19fcGxhc21vX3BhZ2VfY2hhbmdlZF9fOiEwfSl9fSl9Yy5pc1JlYWN0JiYocChcIkluamVjdGluZyByZWFjdCByZWZyZXNoXCIpLEYoKSk7XG4iLCJ2YXIgb2U9T2JqZWN0LmNyZWF0ZTt2YXIgSD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGFlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIHVlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBzZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsbGU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgej0obyxmKT0+KCk9PihmfHxvKChmPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxmKSxmLmV4cG9ydHMpLGNlPShvLGYpPT57Zm9yKHZhciBzIGluIGYpSChvLHMse2dldDpmW3NdLGVudW1lcmFibGU6ITB9KX0sRD0obyxmLHMseSk9PntpZihmJiZ0eXBlb2YgZj09XCJvYmplY3RcInx8dHlwZW9mIGY9PVwiZnVuY3Rpb25cIilmb3IobGV0IG0gb2YgdWUoZikpIWxlLmNhbGwobyxtKSYmbSE9PXMmJkgobyxtLHtnZXQ6KCk9PmZbbV0sZW51bWVyYWJsZTohKHk9YWUoZixtKSl8fHkuZW51bWVyYWJsZX0pO3JldHVybiBvfSxTPShvLGYscyk9PihEKG8sZixcImRlZmF1bHRcIikscyYmRChzLGYsXCJkZWZhdWx0XCIpKSxHPShvLGYscyk9PihzPW8hPW51bGw/b2Uoc2UobykpOnt9LEQoZnx8IW98fCFvLl9fZXNNb2R1bGU/SChzLFwiZGVmYXVsdFwiLHt2YWx1ZTpvLGVudW1lcmFibGU6ITB9KTpzLG8pKSxkZT1vPT5EKEgoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbyk7dmFyIE49eihoPT57XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscz10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP1dlYWtNYXA6TWFwLHk9bmV3IE1hcCxtPW5ldyBzLGI9bmV3IHMsaj1uZXcgcyxFPVtdLEM9bmV3IE1hcCxPPW5ldyBNYXAscD1uZXcgU2V0LF89bmV3IFNldCxGPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/bmV3IFdlYWtNYXA6bnVsbCxUPSExO2Z1bmN0aW9uIEIoZSl7aWYoZS5mdWxsS2V5IT09bnVsbClyZXR1cm4gZS5mdWxsS2V5O3ZhciByPWUub3duS2V5LG47dHJ5e249ZS5nZXRDdXN0b21Ib29rcygpfWNhdGNoKGkpe3JldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscn1mb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyl7dmFyIGw9blt0XTtpZih0eXBlb2YgbCE9XCJmdW5jdGlvblwiKXJldHVybiBlLmZvcmNlUmVzZXQ9ITAsZS5mdWxsS2V5PXIscjt2YXIgZD1iLmdldChsKTtpZihkIT09dm9pZCAwKXt2YXIgYT1CKGQpO2QuZm9yY2VSZXNldCYmKGUuZm9yY2VSZXNldD0hMCkscis9XCJcXG4tLS1cXG5cIithfX1yZXR1cm4gZS5mdWxsS2V5PXIscn1mdW5jdGlvbiBxKGUscil7dmFyIG49Yi5nZXQoZSksdD1iLmdldChyKTtyZXR1cm4gbj09PXZvaWQgMCYmdD09PXZvaWQgMD8hMDohKG49PT12b2lkIDB8fHQ9PT12b2lkIDB8fEIobikhPT1CKHQpfHx0LmZvcmNlUmVzZXQpfWZ1bmN0aW9uICQoZSl7cmV0dXJuIGUucHJvdG90eXBlJiZlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fWZ1bmN0aW9uIGsoZSxyKXtyZXR1cm4gJChlKXx8JChyKT8hMTohIXEoZSxyKX1mdW5jdGlvbiBZKGUpe3JldHVybiBqLmdldChlKX1mdW5jdGlvbiBaKGUpe3ZhciByPW5ldyBNYXA7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuLHQpe3Iuc2V0KHQsbil9KSxyfWZ1bmN0aW9uIFcoZSl7dmFyIHI9bmV3IFNldDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4pe3IuYWRkKG4pfSkscn1mdW5jdGlvbiBNKGUscil7dHJ5e3JldHVybiBlW3JdfWNhdGNoKG4pe3JldHVybn19ZnVuY3Rpb24gSigpe2lmKEUubGVuZ3RoPT09MHx8VClyZXR1cm4gbnVsbDtUPSEwO3RyeXt2YXIgZT1uZXcgU2V0LHI9bmV3IFNldCxuPUU7RT1bXSxuLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9dVswXSx2PXVbMV0sUj1jLmN1cnJlbnQ7ai5zZXQoUixjKSxqLnNldCh2LGMpLGMuY3VycmVudD12LGsoUix2KT9yLmFkZChjKTplLmFkZChjKX0pO3ZhciB0PXt1cGRhdGVkRmFtaWxpZXM6cixzdGFsZUZhbWlsaWVzOmV9O0MuZm9yRWFjaChmdW5jdGlvbih1KXt1LnNldFJlZnJlc2hIYW5kbGVyKFkpfSk7dmFyIGw9ITEsZD1udWxsLGE9VyhfKSxpPVcocCksZz1aKE8pO2lmKGEuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtpZihfLmhhcyh1KSxGIT09bnVsbCYmRi5oYXModSkpe3ZhciB2PUYuZ2V0KHUpO3RyeXtjLnNjaGVkdWxlUm9vdCh1LHYpfWNhdGNoKFIpe2x8fChsPSEwLGQ9Uil9fX0pLGkuZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz1nLmdldCh1KTtpZihjPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTtwLmhhcyh1KTt0cnl7Yy5zY2hlZHVsZVJlZnJlc2godSx0KX1jYXRjaCh2KXtsfHwobD0hMCxkPXYpfX0pLGwpdGhyb3cgZDtyZXR1cm4gdH1maW5hbGx5e1Q9ITF9fWZ1bmN0aW9uIFAoZSxyKXt7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJnR5cGVvZiBlIT1cIm9iamVjdFwifHxtLmhhcyhlKSlyZXR1cm47dmFyIG49eS5nZXQocik7aWYobj09PXZvaWQgMD8obj17Y3VycmVudDplfSx5LnNldChyLG4pKTpFLnB1c2goW24sZV0pLG0uc2V0KGUsbiksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOlAoZS5yZW5kZXIscitcIiRyZW5kZXJcIik7YnJlYWs7Y2FzZSBmOlAoZS50eXBlLHIrXCIkdHlwZVwiKTticmVha319fWZ1bmN0aW9uIEsoZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06ITEsdD1hcmd1bWVudHMubGVuZ3RoPjM/YXJndW1lbnRzWzNdOnZvaWQgMDtpZihiLmhhcyhlKXx8Yi5zZXQoZSx7Zm9yY2VSZXNldDpuLG93bktleTpyLGZ1bGxLZXk6bnVsbCxnZXRDdXN0b21Ib29rczp0fHxmdW5jdGlvbigpe3JldHVybltdfX0pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpLKGUucmVuZGVyLHIsbix0KTticmVhaztjYXNlIGY6SyhlLnR5cGUscixuLHQpO2JyZWFrfX1mdW5jdGlvbiB4KGUpe3t2YXIgcj1iLmdldChlKTtyIT09dm9pZCAwJiZCKHIpfX1mdW5jdGlvbiBRKGUpe3JldHVybiB5LmdldChlKX1mdW5jdGlvbiBYKGUpe3JldHVybiBtLmdldChlKX1mdW5jdGlvbiBlZShlKXt7dmFyIHI9bmV3IFNldDtyZXR1cm4gcC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3ZhciB0PU8uZ2V0KG4pO2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3ZhciBsPXQuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKG4sZSk7bC5mb3JFYWNoKGZ1bmN0aW9uKGQpe3IuYWRkKGQpfSl9KSxyfX1mdW5jdGlvbiByZShlKXt7dmFyIHI9ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYocj09PXZvaWQgMCl7dmFyIG49MDtlLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz1yPXtyZW5kZXJlcnM6bmV3IE1hcCxzdXBwb3J0c0ZpYmVyOiEwLGluamVjdDpmdW5jdGlvbihhKXtyZXR1cm4gbisrfSxvblNjaGVkdWxlRmliZXJSb290OmZ1bmN0aW9uKGEsaSxnKXt9LG9uQ29tbWl0RmliZXJSb290OmZ1bmN0aW9uKGEsaSxnLHUpe30sb25Db21taXRGaWJlclVubW91bnQ6ZnVuY3Rpb24oKXt9fX1pZihyLmlzRGlzYWJsZWQpe2NvbnNvbGUud2FybihcIlNvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuIEZhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC5cIik7cmV0dXJufXZhciB0PXIuaW5qZWN0O3IuaW5qZWN0PWZ1bmN0aW9uKGEpe3ZhciBpPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKSxpfSxyLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uKGEsaSl7dHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSl9KTt2YXIgbD1yLm9uQ29tbWl0RmliZXJSb290LGQ9ci5vblNjaGVkdWxlRmliZXJSb290fHxmdW5jdGlvbigpe307ci5vblNjaGVkdWxlRmliZXJSb290PWZ1bmN0aW9uKGEsaSxnKXtyZXR1cm4gVHx8KF8uZGVsZXRlKGkpLEYhPT1udWxsJiZGLnNldChpLGcpKSxkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sci5vbkNvbW1pdEZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyx1KXt2YXIgYz1DLmdldChhKTtpZihjIT09dm9pZCAwKXtPLnNldChpLGMpO3ZhciB2PWkuY3VycmVudCxSPXYuYWx0ZXJuYXRlO2lmKFIhPT1udWxsKXt2YXIgTD1SLm1lbW9pemVkU3RhdGUhPW51bGwmJlIubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsJiZwLmhhcyhpKSxBPXYubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmdi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGw7IUwmJkE/KHAuYWRkKGkpLF8uZGVsZXRlKGkpKTpMJiZBfHwoTCYmIUE/KHAuZGVsZXRlKGkpLHU/Xy5hZGQoaSk6Ty5kZWxldGUoaSkpOiFMJiYhQSYmdSYmXy5hZGQoaSkpfWVsc2UgcC5hZGQoaSl9cmV0dXJuIGwuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19ZnVuY3Rpb24gbmUoKXtyZXR1cm4hMX1mdW5jdGlvbiB0ZSgpe3JldHVybiBwLnNpemV9ZnVuY3Rpb24gZmUoKXt7dmFyIGUscixuPSExO3JldHVybiBmdW5jdGlvbih0LGwsZCxhKXtpZih0eXBlb2YgbD09XCJzdHJpbmdcIilyZXR1cm4gZXx8KGU9dCxyPXR5cGVvZiBhPT1cImZ1bmN0aW9uXCIpLHQhPW51bGwmJih0eXBlb2YgdD09XCJmdW5jdGlvblwifHx0eXBlb2YgdD09XCJvYmplY3RcIikmJksodCxsLGQsYSksdDshbiYmciYmKG49ITAseChlKSl9fX1mdW5jdGlvbiBpZShlKXtzd2l0Y2godHlwZW9mIGUpe2Nhc2VcImZ1bmN0aW9uXCI6e2lmKGUucHJvdG90eXBlIT1udWxsKXtpZihlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXJldHVybiEwO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUucHJvdG90eXBlKTtpZihyLmxlbmd0aD4xfHxyWzBdIT09XCJjb25zdHJ1Y3RvclwifHxlLnByb3RvdHlwZS5fX3Byb3RvX18hPT1PYmplY3QucHJvdG90eXBlKXJldHVybiExfXZhciBuPWUubmFtZXx8ZS5kaXNwbGF5TmFtZTtyZXR1cm4gdHlwZW9mIG49PVwic3RyaW5nXCImJi9eW0EtWl0vLnRlc3Qobil9Y2FzZVwib2JqZWN0XCI6e2lmKGUhPW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86Y2FzZSBmOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9cmV0dXJuITF9ZGVmYXVsdDpyZXR1cm4hMX19aC5fZ2V0TW91bnRlZFJvb3RDb3VudD10ZSxoLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZT14LGguY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm09ZmUsaC5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzPWVlLGguZ2V0RmFtaWx5QnlJRD1RLGguZ2V0RmFtaWx5QnlUeXBlPVgsaC5oYXNVbnJlY292ZXJhYmxlRXJyb3JzPW5lLGguaW5qZWN0SW50b0dsb2JhbEhvb2s9cmUsaC5pc0xpa2VseUNvbXBvbmVudFR5cGU9aWUsaC5wZXJmb3JtUmVhY3RSZWZyZXNoPUosaC5yZWdpc3Rlcj1QLGguc2V0U2lnbmF0dXJlPUt9KSgpfSk7dmFyIEk9eigocGUsVik9PntcInVzZSBzdHJpY3RcIjtWLmV4cG9ydHM9TigpfSk7dmFyIHc9e307Y2Uodyx7ZGVmYXVsdDooKT0+aGV9KTttb2R1bGUuZXhwb3J0cz1kZSh3KTt2YXIgVT1HKEkoKSk7Uyh3LEcoSSgpKSxtb2R1bGUuZXhwb3J0cyk7dmFyIGhlPVUuZGVmYXVsdDtcbi8qISBCdW5kbGVkIGxpY2Vuc2UgaW5mb3JtYXRpb246XG5cbnJlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qczpcbiAgKCoqXG4gICAqIEBsaWNlbnNlIFJlYWN0XG4gICAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICAgKlxuICAgKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAgICpcbiAgICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gICAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAgICopXG4qL1xuIiwiLyoqXHJcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IDdpb2c5XHJcbiAqIFJlc29sdmVkIHBhdGg6IHNyYy9jb250ZW50cy9zaXRlcy9rdWxhL3J1bGVzLmpzXHJcbiAqIERlcGVuZGVuY2llczpcclxuICogICAuL3Bob25lLWNvdW50cnktY29kZSAtPiBmUk0yQiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy9rdWxhL3Bob25lLWNvdW50cnktY29kZS5qc1xyXG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXHJcbiAqICAgfmNvcmUvZW51bXMgLT4gMU8zbmMgID0+ICBzcmMvY29yZS9lbnVtcy5qc1xyXG4gKiAgIH51dGlscy9kZWxheSAtPiBhbTYxNCAgPT4gIHNyYy91dGlscy9kZWxheS5qc1xyXG4gKi9cclxuXHJcbnZhciBuPWUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpO24uZGVmaW5lSW50ZXJvcEZsYWcociksbi5leHBvcnQocixcIktVTEFfTU9OVEhfWUVBUl9EQVRFX0RFU0NSSVBUSU9OXCIsKCk9PmQpLG4uZXhwb3J0KHIsXCJnZXRFZHVjYXRpb25SdWxlc1wiLCgpPT54KSxuLmV4cG9ydChyLFwiZ2V0RXhwZXJpZW5jZVJ1bGVzXCIsKCk9PkMpLG4uZXhwb3J0KHIsXCJnZXRSdWxlc1wiLCgpPT5BKSxuLmV4cG9ydChyLFwiZ2V0Rm9ybVNuYXBzaG90XCIsKCk9PlQpO3ZhciBvPWUoXCJ+Y29yZS9lbnVtc1wiKSxpPWUoXCJ+dXRpbHMvZGVsYXlcIiksYT1lKFwiLi9waG9uZS1jb3VudHJ5LWNvZGVcIik7ZnVuY3Rpb24gbChlKXtyZXR1cm4oZXx8XCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS50cmltKCl9ZnVuY3Rpb24gcyhlKXtsZXQgdD1sKGUpLnRvTG93ZXJDYXNlKCk7cmV0dXJuIXR8fC9eKHllc3xub3xzZWxlY3R8c2VsZWN0XFwuezAsM318dXBsb2FkIGZpbGV8YWRkfGlucHV0fGNob29zZXxvcHRpb24pJC9pLnRlc3QodCl9ZnVuY3Rpb24gdShlKXtsZXQgdD0oZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIil8fFwiXCIpLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO2lmKDA9PT10Lmxlbmd0aClyZXR1cm5cIlwiO2xldCByPXQubWFwKGU9PmwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSk/LnRleHRDb250ZW50KSkuZmlsdGVyKGU9PmUmJiFzKGUpKTtyZXR1cm4gbChyLmpvaW4oXCIgXCIpKX1mdW5jdGlvbiBjKGUpe3JldHVybi9eYWRkcmVzcyQvaS50ZXN0KGUudHJpbSgpKX1sZXQgZD1cIlJldHVybiBtb250aCBhbmQgeWVhciBvbmx5IGluIE1NTSBZWVlZIGZvcm1hdCwgZm9yIGV4YW1wbGU6IEp1bCAyMDI2LiBEbyBub3QgaW5jbHVkZSBhIGRheS5cIjtmdW5jdGlvbiBmKGUpe3JldHVybiBlLmNsYXNzTGlzdC5jb250YWlucyhcImt1bGEtZGF0ZS1maWVsZC1pbnB1dC10cmlnZ2VyXCIpfHxudWxsIT09ZS5jbG9zZXN0KFwiLmt1bGEtZGF0ZS1maWVsZC1zaGVsbFwiKXx8bnVsbCE9PWUuY2xvc2VzdChcIi5yZWFjdC1kYXRlcGlja2VyLXdyYXBwZXJcIil9ZnVuY3Rpb24gcChlLHQpe2lmKGYodCkmJi9eKHN0YXJ0IGRhdGV8ZW5kIGRhdGV8Z3JhZHVhdGlvbiBkYXRlKSQvaS50ZXN0KGUudHJpbSgpKSlyZXR1cm4gZH1mdW5jdGlvbiBtKGUpe2lmKGUuaGFzQXR0cmlidXRlKFwicmVxdWlyZWRcIil8fFwidHJ1ZVwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLXJlcXVpcmVkXCIpKXJldHVybiEwO2xldCB0PWUuY2xvc2VzdChcIi5jaGFrcmEtZm9ybS1jb250cm9sLCBbY2xhc3MqPSdmb3JtLWNvbnRyb2wnXVwiKTtpZih0KXtsZXQgZT10LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbCwgcC5jaGFrcmEtdGV4dFwiKTtpZihlJiYvXFwqLy50ZXN0KGUudGV4dENvbnRlbnR8fFwiXCIpKXJldHVybiEwfWxldCByPWUuY2xvc2VzdChcIltkYXRhLXRlc3QtaWRdXCIpO2lmKHIpe2xldCBlPXIucXVlcnlTZWxlY3RvcihcInAuY2hha3JhLXRleHQsIHBcIik7aWYoZSYmL1xcKi8udGVzdChlLnRleHRDb250ZW50fHxcIlwiKSlyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBoKGUpe3JldHVybiBlLnJlcGxhY2UoL1xccyooTm8gb3B0aW9ucyBhdmFpbGFibGV8QWRkIGFuZCBzZWxlY3RcXHMqW1wiJ1wiXCJdW15cIidcIl0qW1wiJ1wiXCJdfEFkZCBhbmQgc2VsZWN0XFxzKlwiW15cIl0qXCJ8VHlwZSB0byBzZWFyY2hcXC57MCwzfSkkL2ksXCJcIikudHJpbSgpfWZ1bmN0aW9uIGcoZSx0PVwidGV4dFwiKXtsZXQgcj1lLmNsb3Nlc3QoXCIuY2hha3JhLWZvcm0tY29udHJvbCwgW2NsYXNzKj0nZm9ybS1jb250cm9sJ11cIik7aWYoIXIpcmV0dXJuXCJcIjtsZXQgbj1yLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbCwgcC5jaGFrcmEtdGV4dFwiKTtpZihuKXtsZXQgZT1uLmNsb25lTm9kZSghMCk7ZS5xdWVyeVNlbGVjdG9yQWxsKCdbYXJpYS1oaWRkZW49XCJ0cnVlXCJdJykuZm9yRWFjaChlPT5lLnJlbW92ZSgpKTtsZXQgdD1sKGUudGV4dENvbnRlbnQpLnJlcGxhY2UoL1xcKiskLyxcIlwiKS50cmltKCk7aWYodCYmIXModCkpcmV0dXJuIHR9bGV0IG89bChyLnRleHRDb250ZW50KTtyZXR1cm4gbz8obz1oKG8pLFwicmFkaW9cIj09PXQmJihvPW8ucmVwbGFjZSgvXFwqP1xccyooeWVzXFxzKm5vKSQvaSxcIlwiKSksXCJzZWxlY3RcIj09PXQmJihvPW8ucmVwbGFjZSgvXFxzKnNlbGVjdFxcLnswLDN9JC9pLFwiXCIpKSxzKG89bChvKS5yZXBsYWNlKC9cXCorJC9nLFwiXCIpLnRyaW0oKSk/XCJcIjpvKTpcIlwifWZ1bmN0aW9uIGIoZSl7bGV0IHQ9ZS5jbG9zZXN0KFwiZmllbGRzZXQsIHNlY3Rpb24sIGxpLCBkaXZcIik7aWYoIXQpcmV0dXJuXCJcIjtsZXQgcj1sKGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSk7aWYociYmIXMocikpcmV0dXJuIHI7bGV0IG49dShlKTtpZihuKXJldHVybiBuO2xldCBvPWcoZSk7aWYobylyZXR1cm4gbztsZXQgaT10LnF1ZXJ5U2VsZWN0b3IoXCJsZWdlbmRcIik7aWYoaSl7bGV0IGU9bChpLnRleHRDb250ZW50KTtpZighcyhlKSlyZXR1cm4gZX1sZXQgYT1BcnJheS5mcm9tKHQucXVlcnlTZWxlY3RvckFsbChcImxhYmVsLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBzcGFuLCBkaXZcIikpLm1hcChlPT5sKGUudGV4dENvbnRlbnQpKS5maW5kKGU9PmUubGVuZ3RoPjMmJmUubGVuZ3RoPDE4MCYmIXMoZSkpO3JldHVybiBhfHxcIlwifWZ1bmN0aW9uIHkoZSl7bGV0IHQ9ZS5pZDtpZih0KXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3R9XCJdYCkscj1sKGU/LnRleHRDb250ZW50KTtpZihyJiYhcyhyKSlyZXR1cm4gcn1sZXQgcj1sKGUuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSk7aWYociYmIXMocikpcmV0dXJuIHI7bGV0IG49dShlKTtpZihuKXJldHVybiBuO2xldCBvPWUuY2xvc2VzdChcImxhYmVsXCIpLGk9bChvPy50ZXh0Q29udGVudCk7aWYoaSYmIXMoaSkpcmV0dXJuIGk7bGV0IGE9ZS5jbG9zZXN0KFwiZGl2LCBsaSwgZmllbGRzZXQsIHNlY3Rpb25cIiksYz1hPy5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIiksZD1sKGM/LnRleHRDb250ZW50KTtyZXR1cm4gZCYmIXMoZCk/ZDpiKGUpfWZ1bmN0aW9uIHYoZSl7bGV0IHQ9Z2V0Q29tcHV0ZWRTdHlsZShlKTtyZXR1cm5cIm5vbmVcIj09PXQuZGlzcGxheXx8XCJoaWRkZW5cIj09PXQudmlzaWJpbGl0eXx8MD09PWUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGh9YXN5bmMgZnVuY3Rpb24gdyhlKXtlLmZvY3VzKCksYXdhaXQgKDAsaS5kZWxheSkoMTAwKSxlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2tleTpcIkFycm93RG93blwiLGtleUNvZGU6NDAsYnViYmxlczohMH0pKSxhd2FpdCAoMCxpLmRlbGF5KSgzMDApO2xldCB0PWUuY2xvc2VzdCgnW2NsYXNzKj1cIi1jb250YWluZXJcIl0nKSxyPXQ/LnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcyo9XCItbWVudVwiXScpO3J8fChyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcyo9XCItbWVudVwiXScpKTtsZXQgbj1bXTtyZXR1cm4gciYmci5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwiLW9wdGlvblwiXScpLmZvckVhY2goZT0+e2xldCB0PWwoZS50ZXh0Q29udGVudCk7dCYmbi5wdXNoKHQpfSksZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLHtrZXk6XCJFc2NhcGVcIixrZXlDb2RlOjI3LGJ1YmJsZXM6ITB9KSksYXdhaXQgKDAsaS5kZWxheSkoMTAwKSxufWZ1bmN0aW9uIFMoZSl7cmV0dXJuISFlLmNsb3Nlc3QoJ2RpdltkYXRhLXRlc3QtaWQ9XCJlZHVjYXRpb25cIl0sIGRpdltkYXRhLXRlc3QtaWQ9XCJleHBlcmllbmNlXCJdJyl9YXN5bmMgZnVuY3Rpb24gRShlLHQscj0hMSl7bGV0IG49dD8/bmV3IFNldCxpPVtdLGQ9QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSkuZmlsdGVyKGU9PiEoXCJ0ZXh0YXJlYVwiPT09ZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkmJlwiZy1yZWNhcHRjaGEtcmVzcG9uc2VcIj09PWUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKXx8XCJoaWRkZW5cIj09PWUudHlwZXx8ciYmUyhlKSkmJiF2KGUpKTtmb3IobGV0IGUgb2YgZCl7bGV0IHQ9eShlKSxyPWAke3R9Ojoke2UuZ2V0QXR0cmlidXRlKFwibmFtZVwiKXx8ZS5pZHx8ZS50YWdOYW1lfWA7aWYobi5oYXMocikpY29udGludWU7bGV0IGQ9bShlKTtpZihcInRleHRhcmVhXCI9PT1lLnRhZ05hbWUudG9Mb3dlckNhc2UoKSl7aS5wdXNoKHt0eXBlOm8uRklFTERfVFlQRS5URVhULGxhYmVsOnQucmVwbGFjZSgvXFwqL2csXCJcIikudHJpbSgpLHJlcXVpcmVkOmQsJGlucHV0OmUsJGxhYmVsOm51bGx9KSxuLmFkZChyKTtjb250aW51ZX1pZihcInNlbGVjdFwiPT09ZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpe2xldCBhPUFycmF5LmZyb20oZS5vcHRpb25zKS5tYXAoZT0+bChlLnRleHRDb250ZW50KSkuZmlsdGVyKEJvb2xlYW4pO2kucHVzaCh7dHlwZTpvLkZJRUxEX1RZUEUuU0VMRUNULGxhYmVsOnQucmVwbGFjZSgvXFwqL2csXCJcIikudHJpbSgpLHJlcXVpcmVkOmQsJGlucHV0OmUsJGxhYmVsOm51bGwsb3B0aW9uczphfSksbi5hZGQocik7Y29udGludWV9bGV0IGY9ZSx2PShmLnR5cGV8fFwidGV4dFwiKS50b0xvd2VyQ2FzZSgpO2lmKFwiZmlsZVwiPT09diljb250aW51ZTtsZXQgUz0oMCxhLmdldEt1bGFQaG9uZUNvdW50cnlCdXR0b24pKGYpO2lmKFMpe2xldCBlPWBrdWxhLXBob25lLWNvdW50cnk6OiR7Zi5pZH1gO24uaGFzKGUpfHwoaS5wdXNoKHt0eXBlOm8uRklFTERfVFlQRS5TRUxFQ1QsbGFiZWw6YS5LVUxBX1BIT05FX0NPVU5UUllfQ09ERV9MQUJFTCxyZXF1aXJlZDpkLCRpbnB1dDpTLCRsYWJlbDpudWxsLG9wdGlvbnM6YXdhaXQgKDAsYS5leHRyYWN0S3VsYVBob25lQ291bnRyeU9wdGlvbnMpKFMpfSksbi5hZGQoZSkpLGkucHVzaCh7dHlwZTpvLkZJRUxEX1RZUEUuVEVYVCxsYWJlbDphLktVTEFfUEhPTkVfTEFCRUwscmVxdWlyZWQ6ZCwkaW5wdXQ6ZiwkbGFiZWw6bnVsbCxkZXNjcmlwdGlvbjphLktVTEFfTE9DQUxfUEhPTkVfREVTQ1JJUFRJT059KSxuLmFkZChyKTtjb250aW51ZX1pZihcInJhZGlvXCI9PT12KXtsZXQgZT1mLm5hbWU7aWYoIWUpY29udGludWU7bGV0IHI9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIiR7ZX1cIl1gKSksYT1yLm1hcChlPT5sKGUuY2xvc2VzdChcImxhYmVsXCIpPy50ZXh0Q29udGVudHx8ZS52YWx1ZXx8XCJcIikpLmZpbHRlcihCb29sZWFuKSx1PWYuY2xvc2VzdChcImZpZWxkc2V0LCBbcm9sZT0ncmFkaW9ncm91cCddLCBkaXYsIHNlY3Rpb25cIiksYz1sKHU/LnF1ZXJ5U2VsZWN0b3IoXCJsZWdlbmQsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIFtkYXRhLXRlc3RpZCo9J3F1ZXN0aW9uJ10sIFtjbGFzcyo9J3F1ZXN0aW9uJ11cIik/LnRleHRDb250ZW50KSxwPWcoZixcInJhZGlvXCIpLG09YihmKSxoPWwoY3x8cHx8bXx8dCk7aWYocyhoKSl7bGV0IGU9bCh1Py5wcmV2aW91c0VsZW1lbnRTaWJsaW5nPy50ZXh0Q29udGVudHx8dT8ucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcImxhYmVsLCBwLCBoMywgaDRcIik/LnRleHRDb250ZW50KTtlJiYhcyhlKSYmKGg9ZSl9bGV0IHk9YHJhZGlvOjoke2V9YDtuLmhhcyh5KXx8KGkucHVzaCh7dHlwZTpvLkZJRUxEX1RZUEUuUkFESU9HUk9VUCxsYWJlbDpoLnJlcGxhY2UoL1xcKi9nLFwiXCIpLnRyaW0oKXx8ZSxyZXF1aXJlZDpkLCRpbnB1dDpmLCRyYWRpb1BhcmVudDp1LCRsYWJlbDpudWxsLG9wdGlvbnM6YX0pLG4uYWRkKHkpKTtjb250aW51ZX1pZihcImNoZWNrYm94XCI9PT12KXtsZXQgZT1mLmNsb3Nlc3QoXCJmaWVsZHNldCwgZGl2LCBzZWN0aW9uXCIpLHI9QXJyYXkuZnJvbShlPy5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKXx8W2ZdKSxhPXIubWFwKGU9PmwoZS5jbG9zZXN0KFwibGFiZWxcIik/LnRleHRDb250ZW50fHxlLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIil8fFwiXCIpKS5maWx0ZXIoQm9vbGVhbikscz1gY2hlY2tib3g6OiR7Zi5uYW1lfHx0fWA7bi5oYXMocyl8fChpLnB1c2goe3R5cGU6by5GSUVMRF9UWVBFLkNIRUNLQk9YLGxhYmVsOnQucmVwbGFjZSgvXFwqL2csXCJcIikudHJpbSgpfHxcIkNoZWNrYm94XCIscmVxdWlyZWQ6ZCwkY2hlY2tib3hzOnIsJGlucHV0OnJbMF0sJGxhYmVsOm51bGwsb3B0aW9uczphfSksbi5hZGQocykpO2NvbnRpbnVlfWlmKFwidGV4dFwiPT09dil7bGV0IGU9bChmLmdldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpKTtpZihlJiYvc2VhcmNoL2kudGVzdChlKSl7bGV0IHI9dC5yZXBsYWNlKC9cXCovZyxcIlwiKS50cmltKCl8fGV8fGYubmFtZXx8XCJTZWFyY2hcIixhPWBzZWFyY2g6OiR7cn1gO24uaGFzKGEpfHwoaS5wdXNoKHt0eXBlOm8uRklFTERfVFlQRS5TRUFSQ0gsbGFiZWw6cixyZXF1aXJlZDpkLCRpbnB1dDpmLCRsYWJlbDpudWxsLC4uLmMocikmJntkZXNjcmlwdGlvbjpcIkZvcm1hdDogQ2l0eSwgU3RhdGUvUHJvdmluY2UsIENvdW50cnkgKGUuZy4gQW5ndXMsIE9udGFyaW8sIENhbmFkYSlcIn19KSxuLmFkZChhKSk7Y29udGludWV9fWlmKGYuaWQuaW5jbHVkZXMoXCJyZWFjdC1zZWxlY3RcIil8fFwiY29tYm9ib3hcIj09PWYuZ2V0QXR0cmlidXRlKFwicm9sZVwiKSl7bGV0IGU9Zi5jbG9zZXN0KFwiLmNoYWtyYS1mb3JtLWNvbnRyb2wsIFtjbGFzcyo9J2Zvcm0tY29udHJvbCddXCIpLHI9XCJcIixhPWYuY2xvc2VzdChcIltkYXRhLXRlc3QtaWRdXCIpO2lmKGEpe2xldCBlPWEucXVlcnlTZWxlY3RvcihcInAuY2hha3JhLXRleHQsIHBcIik7aWYoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoITApO3QucXVlcnlTZWxlY3RvckFsbChcInNwYW4sIGRpdlwiKS5mb3JFYWNoKGU9PmUucmVtb3ZlKCkpLHI9aChsKHQudGV4dENvbnRlbnQpKX19bGV0IGQ9bChlPy5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik/LnRleHRDb250ZW50KSxwPWwoZi5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpKSx5PXUoZiksdj1nKGYsXCJzZWxlY3RcIiksUz1cIlwiO2lmKHImJiFzKHIpP1M9ci5yZXBsYWNlKC9cXCovZyxcIlwiKS50cmltKCk6ZCYmIXMoZCk/Uz1kLnJlcGxhY2UoL1xcKi9nLFwiXCIpLnRyaW0oKTpwJiYhcyhwKT9TPXAucmVwbGFjZSgvXFwqL2csXCJcIikudHJpbSgpOnkmJiFzKHkpP1M9eS5yZXBsYWNlKC9cXCovZyxcIlwiKS50cmltKCk6diYmIXModik/Uz12LnJlcGxhY2UoL1xcKi9nLFwiXCIpLnRyaW0oKTp0JiYhcyh0KSYmKFM9dC5yZXBsYWNlKC9cXCovZyxcIlwiKS50cmltKCkpLCFTKXtsZXQgZT1oKGwoZi5jbG9zZXN0KFwiZGl2LCBsaSwgc2VjdGlvblwiKT8ucXVlcnlTZWxlY3RvcihcImxhYmVsLCBwLCBoMywgaDRcIik/LnRleHRDb250ZW50KSk7ZSYmIXMoZSkmJihTPWUucmVwbGFjZSgvXFwqL2csXCJcIikudHJpbSgpKX1pZighUyl7bGV0IGU9aChiKGYpKTtTPWUmJiFzKGUpP2U6Zi5uYW1lfHxcIlNlbGVjdFwifWxldCBFPW0oZik7UyYmL3ByZWZlcnJlZCBsb2NhdGlvbi9pLnRlc3QoUykmJihFPSEwKTtsZXQgeD1cInRydWVcIj09PWYuZ2V0QXR0cmlidXRlKFwiYXJpYS1yZWFkb25seVwiKXx8XCJub25lXCI9PT1mLmlucHV0TW9kZTtpZih4KXtsZXQgZT1gcmVhY3Qtc2VsZWN0Ojoke1N8fGYuaWQuc3BsaXQoXCItaW5wdXRcIilbMF19YDtpZighbi5oYXMoZSkpe2xldCB0PWF3YWl0IHcoZik7aS5wdXNoKHt0eXBlOm8uRklFTERfVFlQRS5TRUxFQ1QsbGFiZWw6UyxyZXF1aXJlZDpFLCRpbnB1dDpmLCRsYWJlbDpudWxsLG9wdGlvbnM6dH0pLG4uYWRkKGUpfX1lbHNle2xldCBlPWByZWFjdC1zZWFyY2g6OiR7U3x8Zi5pZC5zcGxpdChcIi1pbnB1dFwiKVswXX1gO24uaGFzKGUpfHwoaS5wdXNoKHt0eXBlOm8uRklFTERfVFlQRS5TRUFSQ0gsbGFiZWw6UyxyZXF1aXJlZDpFLCRpbnB1dDpmLCRsYWJlbDpudWxsLC4uLmMoUykmJntkZXNjcmlwdGlvbjpcIkZvcm1hdDogQ2l0eSwgU3RhdGUvUHJvdmluY2UsIENvdW50cnkgKGUuZy4gQW5ndXMsIE9udGFyaW8sIENhbmFkYSlcIn19KSxuLmFkZChlKSl9Y29udGludWV9bGV0IEU9dC5yZXBsYWNlKC9cXCovZyxcIlwiKS50cmltKCl8fGYubmFtZXx8XCJUZXh0XCIseD1wKEUsZik7eD9pLnB1c2goe3R5cGU6by5GSUVMRF9UWVBFLkRBVEUsbGFiZWw6RSxyZXF1aXJlZDpkLCRpbnB1dDpmLCRsYWJlbDpudWxsLGRlc2NyaXB0aW9uOnh9KTppLnB1c2goe3R5cGU6by5GSUVMRF9UWVBFLlRFWFQsbGFiZWw6RSxyZXF1aXJlZDpkLCRpbnB1dDpmLCRsYWJlbDpudWxsfSksbi5hZGQocil9cmV0dXJuIGl9YXN5bmMgZnVuY3Rpb24geCgpe2xldCBlPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2RhdGEtdGVzdC1pZD1cImVkdWNhdGlvblwiXScpKSx0PVtdO2ZvcihsZXQgciBvZiBlKXtsZXQgZT1hd2FpdCBFKHIpO3QucHVzaCh7dHlwZTpvLkZJRUxEX1RZUEUuRURVQ0FUSU9OLGxhYmVsOlwiRWR1Y2F0aW9uXCIscmVxdWlyZWQ6ITEsY2hpbGRyZW46ZSxvcHRpb25zOmUubWFwKGU9Pih7bGFiZWw6ZS5sYWJlbCx0eXBlOmUudHlwZSxvcHRpb25zOmUub3B0aW9ucywuLi5lLmRlc2NyaXB0aW9uP3tkZXNjcmlwdGlvbjplLmRlc2NyaXB0aW9ufTp7fX0pKX0pfXJldHVybiB0fWFzeW5jIGZ1bmN0aW9uIEMoKXtsZXQgZT1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLXRlc3QtaWQ9XCJleHBlcmllbmNlXCJdJykpLHQ9W107Zm9yKGxldCByIG9mIGUpe2xldCBlPWF3YWl0IEUocik7dC5wdXNoKHt0eXBlOm8uRklFTERfVFlQRS5FTVBMT1lNRU5ULGxhYmVsOlwiRXhwZXJpZW5jZVwiLHJlcXVpcmVkOiExLGNoaWxkcmVuOmUsb3B0aW9uczplLm1hcChlPT4oe2xhYmVsOmUubGFiZWwsdHlwZTplLnR5cGUsb3B0aW9uczplLm9wdGlvbnMsLi4uZS5kZXNjcmlwdGlvbj97ZGVzY3JpcHRpb246ZS5kZXNjcmlwdGlvbn06e319KSl9KX1yZXR1cm4gdH1hc3luYyBmdW5jdGlvbiBBKCl7bGV0IGU9bmV3IFNldCx0PWF3YWl0IEUoZG9jdW1lbnQuYm9keSxlLCEwKSxyPWF3YWl0IHgoKTtyLmxlbmd0aD4wJiZ0LnB1c2goclswXSk7bGV0IG49YXdhaXQgQygpO3JldHVybiBuLmxlbmd0aD4wJiZ0LnB1c2goblswXSksdH1mdW5jdGlvbiBrKGUsdD0hMSl7bGV0IHI9e30sbj1uZXcgU2V0LG89ZT0+ZS5yZXBsYWNlKC9cXCovZyxcIlwiKS50cmltKCksaT1BcnJheS5mcm9tKGUucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKS5maWx0ZXIoZT0+IShcImhpZGRlblwiPT09ZS50eXBlfHx0JiZTKGUpKSYmIXYoZSkpO2ZvcihsZXQgdCBvZiBpKXtpZihcInNlbGVjdFwiPT09dC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpe2xldCBlPXQsaT1vKHkoZSkpO2lmKCFpfHxuLmhhcyhpKSljb250aW51ZTtuLmFkZChpKSxyW2ldPWUub3B0aW9uc1tlLnNlbGVjdGVkSW5kZXhdPy50ZXh0Q29udGVudD8udHJpbSgpPz9cIlwiO2NvbnRpbnVlfWxldCBpPXQsbD0oaS50eXBlfHxcInRleHRcIikudG9Mb3dlckNhc2UoKTtpZihcImZpbGVcIj09PWwpY29udGludWU7bGV0IHM9KDAsYS5nZXRLdWxhUGhvbmVDb250YWluZXIpKGkpO2lmKHMpe2xldCBlPSgwLGEuZ2V0S3VsYVBob25lQ291bnRyeUJ1dHRvbikoaSk7ZSYmIW4uaGFzKGEuS1VMQV9QSE9ORV9DT1VOVFJZX0NPREVfTEFCRUwpJiYobi5hZGQoYS5LVUxBX1BIT05FX0NPVU5UUllfQ09ERV9MQUJFTCksclthLktVTEFfUEhPTkVfQ09VTlRSWV9DT0RFX0xBQkVMXT0oMCxhLmdldEt1bGFTZWxlY3RlZFBob25lQ291bnRyeSkoZSkpLG4uaGFzKGEuS1VMQV9QSE9ORV9MQUJFTCl8fChuLmFkZChhLktVTEFfUEhPTkVfTEFCRUwpLHJbYS5LVUxBX1BIT05FX0xBQkVMXT1pLnZhbHVlLnRyaW0oKSk7Y29udGludWV9aWYoaS5pZC5pbmNsdWRlcyhcInJlYWN0LXNlbGVjdFwiKXx8XCJjb21ib2JveFwiPT09aS5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpKXtsZXQgZT1pLmNsb3Nlc3QoJ1tjbGFzcyo9XCItY29udGFpbmVyXCJdJyksdD1lPy5xdWVyeVNlbGVjdG9yKCdbY2xhc3MqPVwiLXNpbmdsZVZhbHVlXCJdLCBbY2xhc3MqPVwic2luZ2xlVmFsdWVcIl0sIFtjbGFzcyo9XCJzaW5nbGUtdmFsdWVcIl0nKSxhPW8oeShpKSk7aWYoIWF8fG4uaGFzKGEpKWNvbnRpbnVlO24uYWRkKGEpLHJbYV09dD8udGV4dENvbnRlbnQ/LnRyaW0oKT8/XCJcIjtjb250aW51ZX1pZihcInJhZGlvXCI9PT1sKXtsZXQgdD1pLm5hbWU7aWYoIXQpY29udGludWU7bGV0IGE9YHJhZGlvOjoke3R9YDtpZihuLmhhcyhhKSljb250aW51ZTtuLmFkZChhKTtsZXQgbD1lLnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJHtDU1MuZXNjYXBlKHQpfVwiXTpjaGVja2VkYCkscz1vKHkoaSkpO2lmKCFzKWNvbnRpbnVlO3Jbc109KGw/LmNsb3Nlc3QoXCJsYWJlbFwiKT8udGV4dENvbnRlbnQ/P1wiXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpO2NvbnRpbnVlfWlmKFwiY2hlY2tib3hcIj09PWwpe2xldCBlPW8oeShpKSksdD1gY2hlY2tib3g6OiR7aS5uYW1lfHxlfWA7aWYoIWV8fG4uaGFzKHQpKWNvbnRpbnVlO24uYWRkKHQpO2xldCBhPWkuY2xvc2VzdChcImZpZWxkc2V0LCBkaXYsIHNlY3Rpb25cIiksbD1BcnJheS5mcm9tKGE/LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpPz9baV0pO3JbZV09bC5maWx0ZXIoZT0+ZS5jaGVja2VkKS5tYXAoZT0+KGUuY2xvc2VzdChcImxhYmVsXCIpPy50ZXh0Q29udGVudHx8ZS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpfHxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnRyaW0oKSk7Y29udGludWV9bGV0IHU9byh5KGkpKTshdXx8bi5oYXModSl8fChuLmFkZCh1KSxyW3VdPWkudmFsdWUudHJpbSgpKX1yZXR1cm4gcn1mdW5jdGlvbiBUKCl7bGV0IGU9ayhkb2N1bWVudC5ib2R5LCEwKSx0PUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2RhdGEtdGVzdC1pZD1cImVkdWNhdGlvblwiXScpKSxyPXQubWFwKGU9PmsoZSwhMSkpLG49QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbZGF0YS10ZXN0LWlkPVwiZXhwZXJpZW5jZVwiXScpKSxvPW4ubWFwKGU9PmsoZSwhMSkpO3JldHVybnt1cmw6d2luZG93LmxvY2F0aW9uLmhyZWYsLi4uZSwuLi5yLmxlbmd0aD4wP3tlZHVjYXRpb246cn06e30sLi4uby5sZW5ndGg+MD97ZXhwZXJpZW5jZTpvfTp7fX19XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJydWxlcy40YTM5ODNiZi5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);