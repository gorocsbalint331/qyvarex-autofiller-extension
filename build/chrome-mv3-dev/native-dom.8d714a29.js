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
})({"66Hv8":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\methods\\native-dom.ts",
    "bundleId": "f3b812498d714a29",
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
var j = z(require("df73bafd0fb438db"));
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

},{"df73bafd0fb438db":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"dMvar":[function(require,module,exports) {
/**
 * Shared DOM fill primitives for clean-TS autofill.
 *
 * Lives in the extension (`src/contents/methods`).
 * Parcel reference: engine/helper-app/src/contents/methods/dom.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Dispatch typed DOM events (mousedown/click/focus/input/\u2026) like the oracle. */ parcelHelpers.export(exports, "triggerEvents", ()=>triggerEvents);
parcelHelpers.export(exports, "fillInputTextField", ()=>fillInputTextField);
/**
 * Oracle-shaped checkbox/radio group fill (`field.$checkboxs`, `field.label`).
 * Returns `false` on ambiguous multi-match; otherwise void/undefined like the oracle.
 */ parcelHelpers.export(exports, "fillCheckBoxesField", ()=>fillCheckBoxesField);
/** Simple label-list fill used by BaseFiller / Personio. */ parcelHelpers.export(exports, "fillCheckboxField", ()=>fillCheckboxField);
/**
 * Focus a <select> and pick the first option matching any answer via isMatched.
 * Also accepts a single string (BaseFiller / Personio).
 */ parcelHelpers.export(exports, "fillSelectField", ()=>fillSelectField);
/** Exact option `.text` or `.title` match (no fuzzy). */ parcelHelpers.export(exports, "fillOriginSelectField", ()=>fillOriginSelectField);
parcelHelpers.export(exports, "fillRadioGroupField", ()=>fillRadioGroupField);
parcelHelpers.export(exports, "fillSingleCheckbox", ()=>fillSingleCheckbox);
/**
 * Attach a File / Blob to a file input (clean-TS).
 * Oracle also accepts a prepared `{ files: FileList }` + progress callbacks.
 */ parcelHelpers.export(exports, "uploadFiles", ()=>uploadFiles);
/** Tell the top frame the agent covered letter status changed. */ parcelHelpers.export(exports, "postCoverLetterStatus", ()=>postCoverLetterStatus);
parcelHelpers.export(exports, "fillDefaultInputField", ()=>(0, _input.fillDefaultInputField));
parcelHelpers.export(exports, "fillCheckbox", ()=>(0, _checkbox.fillCheckbox));
parcelHelpers.export(exports, "delay", ()=>(0, _delay.delay));
var _input = require("~contents/crawler/utils/input");
var _checkbox = require("~contents/crawler/utils/checkbox");
var _delay = require("~contents/crawler/utils/delay");
var _choiceMatch = require("~contents/methods/choice-match");
var _checkboxLabel = require("~contents/methods/checkbox-label");
var _nativeAnswer = require("~contents/methods/native-answer");
var _enums = require("~core/enums");
/** Aliases when answers map true/false / job boards to visible labels. */ const ANSWER_ALIAS = {
    true: "yes",
    false: "no",
    linkedin: "linkedin.com",
    indeed: "indeed.com"
};
function triggerEvents(el, eventNames = [
    "input",
    "change",
    "blur"
]) {
    if (!el) return;
    for (const name of eventNames){
        let ev;
        if ((name === "mousedown" || name === "mouseup" || name === "click") && typeof MouseEvent === "function") ev = new MouseEvent(name, {
            bubbles: true,
            cancelable: true
        });
        else if ((name === "focus" || name === "blur") && typeof FocusEvent === "function") ev = new FocusEvent(name, {
            bubbles: true,
            cancelable: true
        });
        else if (name === "input" && typeof InputEvent === "function") {
            const value = "value" in el && typeof el.value === "string" ? el.value : null;
            ev = new InputEvent(name, {
                bubbles: true,
                cancelable: true,
                data: value,
                inputType: "insertText"
            });
        } else ev = new Event(name, {
            bubbles: true,
            cancelable: true
        });
        el.dispatchEvent(ev);
    }
}
async function fillInputTextField(input, value) {
    await (0, _input.fillDefaultInputField)(input, value);
}
function choiceLabelText(inputEl) {
    const fromControl = (0, _checkboxLabel.normalizeRadioCheckText)((0, _checkboxLabel.getRadioCheckText)(inputEl));
    if (fromControl) return fromControl;
    return "";
}
function labelMatchesAnswer(labelText, answer) {
    const normalized = typeof answer === "string" || typeof answer === "number" ? String(answer).toLowerCase().trim() : "";
    return !!normalized && (0, _choiceMatch.isExactChoiceMatch)(labelText, normalized);
}
/**
 * Decide whether a single checkbox should be checked given answer list + field label.
 * Handles yes/no, "have read", and "current" employment heuristics.
 */ async function maybeCheckSingleBox(inputEl, answers, fieldLabel, fillFn = (0, _checkbox.fillCheckbox)) {
    const labelText = choiceLabelText(inputEl);
    if (!labelText) return;
    if (answers.some((a)=>labelMatchesAnswer(labelText, a))) {
        await fillFn(inputEl, true);
        return;
    }
    const first = String(answers[0] ?? "").toLowerCase();
    const label = String(fieldLabel ?? "").toLowerCase();
    const shouldCheck = first === "true" && labelText === "yes" || first === "false" && labelText === "no" || labelText.includes("have read") && first === "true" || (0, _nativeAnswer.isMatched)(labelText, fieldLabel ?? "") && first === "true" || first === "true" && (labelText.includes("current") || label.includes("current")) || label.includes("current") && first === "true";
    if (shouldCheck) await fillFn(inputEl, true);
}
async function fillCheckBoxesField(field, rawAnswers, fillFn = (0, _checkbox.fillCheckbox)) {
    // Back-compat: BaseFiller passes (boxes[], string[])
    if (Array.isArray(field) && !field.$checkboxs) return fillCheckboxField(field, rawAnswers);
    const answers = (Array.isArray(rawAnswers) ? rawAnswers : [
        rawAnswers
    ]).filter((a)=>(0, _choiceMatch.normalizeChoiceText)(a));
    if (!answers.length) return false;
    const boxField = field;
    const inputs = Array.from(boxField.$checkboxs ?? []);
    const isMultiOrRadio = inputs.length > 1 || inputs.some((el)=>el.type === "radio");
    if (isMultiOrRadio) {
        const selected = new Set();
        const allRadios = inputs.every((el)=>el.type === "radio");
        for (const answer of answers){
            const want = (0, _choiceMatch.normalizeChoiceText)(answer);
            if (!want) continue;
            const exactHits = inputs.filter((el)=>(0, _choiceMatch.isExactChoiceMatch)(choiceLabelText(el), want));
            if (exactHits.length > 1) return false;
            let match = (0, _choiceMatch.findExactChoice)(inputs, want, choiceLabelText);
            if (!match) {
                const alias = ANSWER_ALIAS[want];
                if (alias) {
                    const aliasHits = inputs.filter((el)=>(0, _choiceMatch.isExactChoiceMatch)(choiceLabelText(el), alias));
                    if (aliasHits.length > 1) return false;
                    match = (0, _choiceMatch.findExactChoice)(inputs, alias, choiceLabelText);
                }
            }
            if (!match) {
                if (allRadios) continue;
                return false;
            }
            selected.add(match);
            if (allRadios) break;
        }
        if (!selected.size) return false;
        for (const el of selected)await fillFn(el, true);
        return;
    }
    for (const box of inputs)await maybeCheckSingleBox(box, answers, boxField.label, fillFn);
}
async function fillCheckboxField(boxes, values) {
    let filled = 0;
    for (const want of values){
        const match = (0, _choiceMatch.findExactChoice)(boxes, want, choiceLabelText);
        if (match) {
            await (0, _checkbox.fillCheckbox)(match, true);
            filled += 1;
        }
    }
    return filled;
}
async function fillSelectField(select, answers) {
    if (!select) return false;
    const list = (Array.isArray(answers) ? answers : [
        answers
    ]).filter(Boolean);
    if (!list.length) return false;
    const focusEv = new FocusEvent("focus", {
        bubbles: true,
        cancelable: true,
        view: window
    });
    select.dispatchEvent(focusEv);
    select.focus();
    if (select.options?.length) for(let i = 0; i < select.options.length; i++){
        const opt = select.options[i];
        if (opt?.value && opt.text && list.some((a)=>(0, _nativeAnswer.isMatched)(a, opt.text) || (0, _choiceMatch.isExactChoiceMatch)(opt.text, a))) {
            opt.click();
            opt.dispatchEvent(new MouseEvent("mousedown", {
                bubbles: true,
                cancelable: true
            }));
            opt.dispatchEvent(new MouseEvent("mouseup", {
                bubbles: true,
                cancelable: true
            }));
            opt.selected = true;
            select.dispatchEvent(new Event("change", {
                bubbles: true,
                cancelable: true
            }));
            select.blur();
            return true;
        }
    }
    select.blur();
    return false;
}
function fillOriginSelectField(select, values) {
    if (!select?.options) return false;
    const wants = (Array.isArray(values) ? values : [
        values
    ]).map(String);
    for (const want of wants)for(let i = 0; i < select.options.length; i++){
        const opt = select.options[i];
        if (opt.text === want || opt.title === want) {
            opt.selected = true;
            select.dispatchEvent(new Event("change", {
                bubbles: true
            }));
            return true;
        }
    }
    return false;
}
async function fillRadioGroupField(radios, value) {
    const want = Array.isArray(value) ? value[0] : value;
    if (!want) return false;
    const match = (0, _choiceMatch.findExactChoice)(radios, want, choiceLabelText);
    if (!match) return false;
    if (!match.checked) {
        match.click();
        match.checked = true;
        match.dispatchEvent(new Event("change", {
            bubbles: true
        }));
        match.dispatchEvent(new Event("click", {
            bubbles: true
        }));
    }
    return true;
}
async function fillSingleCheckbox(el, checked = true) {
    await (0, _checkbox.fillCheckbox)(el, checked);
}
async function uploadFiles(input, file, fileName) {
    if (!input || input.type !== "file") return false;
    const blob = file instanceof File ? file : new File([
        file
    ], fileName, {
        type: file.type || "application/pdf"
    });
    const dt = new DataTransfer();
    dt.items.add(blob);
    input.files = dt.files;
    input.dispatchEvent(new Event("input", {
        bubbles: true
    }));
    input.dispatchEvent(new Event("change", {
        bubbles: true
    }));
    await (0, _delay.delay)(100);
    return true;
}
function postCoverLetterStatus(status) {
    window.top?.postMessage({
        type: (0, _enums.MESSAGE_EVENTS).agentCheckCoverLetter,
        status
    }, {
        targetOrigin: "*"
    });
}

},{"~contents/crawler/utils/input":"gm6tm","~contents/crawler/utils/checkbox":"1eAtY","~contents/crawler/utils/delay":"1kcE1","~contents/methods/choice-match":"hYmUM","~contents/methods/checkbox-label":"jYmCR","~core/enums":"7a65S","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo","~contents/methods/native-answer":"7WGaQ"}],"gm6tm":[function(require,module,exports) {
/**
 * Native input fill with React-compatible value setter (engine input.js port).
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fillDefaultInputField", ()=>fillDefaultInputField);
async function fillDefaultInputField(el, value) {
    if (!el) {
        console.error("[clean-fill] element is null");
        return;
    }
    el.focus();
    const proto = Object.getPrototypeOf(el);
    const desc = Object.getOwnPropertyDescriptor(proto, "value");
    if (desc?.set) desc.set.call(el, value);
    else el.value = value;
    el.dispatchEvent(new Event("input", {
        bubbles: true,
        cancelable: true
    }));
    el.dispatchEvent(new Event("change", {
        bubbles: true,
        cancelable: true
    }));
    el.dispatchEvent(new Event("blur"));
    el.dispatchEvent(new KeyboardEvent("keydown", {
        bubbles: true,
        cancelable: true,
        key: "Enter",
        keyCode: 13
    }));
    el.dispatchEvent(new KeyboardEvent("keyup", {
        bubbles: true,
        cancelable: true,
        key: "Enter",
        keyCode: 13
    }));
    el.blur();
    el.dispatchEvent(new FocusEvent("focus", {
        bubbles: true,
        cancelable: true
    }));
    el.dispatchEvent(new MouseEvent("click", {
        bubbles: true,
        cancelable: true
    }));
    el.dispatchEvent(new Event("change", {
        bubbles: true,
        cancelable: true
    }));
    el.dispatchEvent(new FocusEvent("blur", {
        bubbles: true,
        cancelable: true
    }));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"boKlo":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1eAtY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fillCheckbox", ()=>fillCheckbox);
parcelHelpers.export(exports, "fillCheckboxesByLabels", ()=>fillCheckboxesByLabels);
parcelHelpers.export(exports, "fillRadioByLabel", ()=>fillRadioByLabel);
var _choiceMatch = require("~contents/methods/choice-match");
var _delay = require("~contents/crawler/utils/delay");
async function fillCheckbox(el, checked = true) {
    if (!el) return;
    el.focus();
    if (el.checked !== checked) {
        el.click();
        await (0, _delay.delay)(30);
    }
    el.checked = checked;
    el.dispatchEvent(new Event("change", {
        bubbles: true
    }));
    const role = el.closest('[role="checkbox"]');
    if (role) role.click();
}
async function fillCheckboxesByLabels(checkboxes, wants) {
    let filled = 0;
    for (const want of wants)for (const box of checkboxes){
        const label = box.id && document.querySelector(`label[for="${CSS.escape(box.id)}"]`)?.textContent || box.closest("label")?.textContent || box.getAttribute("aria-label") || box.value;
        if ((0, _choiceMatch.isExactChoiceMatch)(label, want)) {
            await fillCheckbox(box, true);
            filled += 1;
            break;
        }
    }
    return filled;
}
async function fillRadioByLabel(radios, want) {
    for (const radio of radios){
        const label = radio.id && document.querySelector(`label[for="${CSS.escape(radio.id)}"]`)?.textContent || radio.closest("label")?.textContent || radio.getAttribute("aria-label") || radio.value;
        if ((0, _choiceMatch.isExactChoiceMatch)(label, want)) {
            if (!radio.checked) {
                radio.click();
                radio.checked = true;
                radio.dispatchEvent(new Event("change", {
                    bubbles: true
                }));
                radio.dispatchEvent(new Event("click", {
                    bubbles: true
                }));
            }
            return true;
        }
    }
    return false;
}

},{"~contents/methods/choice-match":"hYmUM","~contents/crawler/utils/delay":"1kcE1","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"hYmUM":[function(require,module,exports) {
/** Exact / normalized choice matching (port of engine choice-match).
 * Oracle: engine/helper-app/src/contents/methods/choice-match.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeChoiceText", ()=>normalizeChoiceText);
parcelHelpers.export(exports, "isExactChoiceMatch", ()=>isExactChoiceMatch);
parcelHelpers.export(exports, "findExactChoice", ()=>findExactChoice);
/** Simple fuzzy score 0\u20131 (token overlap + substring). */ parcelHelpers.export(exports, "fuzzyScore", ()=>fuzzyScore);
parcelHelpers.export(exports, "fuzzyFindBest", ()=>fuzzyFindBest);
function normalizeChoiceText(value) {
    if (typeof value !== "string" && typeof value !== "number") return "";
    return String(value).normalize("NFKC").replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/\s+/g, " ").trim().toLowerCase();
}
function isExactChoiceMatch(optionText, want) {
    const w = normalizeChoiceText(want);
    return !!w && normalizeChoiceText(optionText) === w;
}
function findExactChoice(items, want, getLabel, getSecondary) {
    if (!normalizeChoiceText(want)) return undefined;
    const byLabel = items.filter((item)=>isExactChoiceMatch(getLabel(item), want));
    if (byLabel.length === 1) return byLabel[0];
    if (byLabel.length > 1 || !getSecondary) return undefined;
    const bySec = items.filter((item)=>isExactChoiceMatch(getSecondary(item), want));
    return bySec.length === 1 ? bySec[0] : undefined;
}
function fuzzyScore(a, b) {
    const na = normalizeChoiceText(a);
    const nb = normalizeChoiceText(b);
    if (!na || !nb) return 0;
    if (na === nb) return 1;
    if (nb.includes(na) || na.includes(nb)) return 0.85;
    const at = new Set(na.split(" ").filter(Boolean));
    const bt = nb.split(" ").filter(Boolean);
    if (!bt.length) return 0;
    let hit = 0;
    for (const t of bt)if (at.has(t)) hit += 1;
    return hit / Math.max(at.size, bt.length);
}
function fuzzyFindBest(items, want, getLabel, minScore = 0.45) {
    let best;
    let bestScore = 0;
    for (const item of items){
        const s = fuzzyScore(want, getLabel(item));
        if (s > bestScore) {
            bestScore = s;
            best = item;
        }
    }
    return bestScore >= minScore ? best : undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"1kcE1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "delay", ()=>delay);
parcelHelpers.export(exports, "executeSequentially", ()=>executeSequentially);
function delay(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
async function executeSequentially(steps, defaultDelayMs = 80) {
    for (const step of steps)if (typeof step === "function") {
        await step();
        await delay(defaultDelayMs);
    } else {
        await step.func();
        await delay(step.delay ?? defaultDelayMs);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"jYmCR":[function(require,module,exports) {
/**
 * Checkbox / radio label helpers (clean-TS).
 * Oracle: engine/helper-app/src/contents/methods/checkbox-label.js
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Visible label text for a checkbox/radio. */ parcelHelpers.export(exports, "getRadioCheckText", ()=>getRadioCheckText);
parcelHelpers.export(exports, "normalizeRadioCheckText", ()=>normalizeRadioCheckText);
function textOf(el) {
    return (el?.textContent || "").trim();
}
function labelForInput(input) {
    if (!input.id || typeof document === "undefined") return null;
    try {
        return document.querySelector(`label[for="${CSS.escape(input.id)}"]`);
    } catch  {
        return null;
    }
}
function getRadioCheckText(input) {
    const parent = input.parentElement;
    const grand = parent?.parentElement;
    const candidates = [
        typeof input.closest === "function" ? input.closest("label") : null,
        labelForInput(input),
        parent,
        parent?.nextElementSibling,
        parent?.previousElementSibling,
        grand
    ];
    for (const el of candidates){
        const t = textOf(el);
        if (t) return t;
    }
    return input.getAttribute("aria-label") || input.value || "";
}
function normalizeRadioCheckText(text) {
    return text.toLowerCase().trim().replace("*", "");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"7a65S":[function(require,module,exports) {
/** Core enums ported from Jobright helper `~core/enums`. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RENDER_STEP", ()=>RENDER_STEP);
parcelHelpers.export(exports, "MESSAGE_EVENTS", ()=>MESSAGE_EVENTS);
parcelHelpers.export(exports, "FIELD_TYPE", ()=>FIELD_TYPE);
parcelHelpers.export(exports, "APPLICATION_STATUS", ()=>APPLICATION_STATUS);
parcelHelpers.export(exports, "MIME_TYPE", ()=>MIME_TYPE);
var RENDER_STEP;
(function(RENDER_STEP) {
    RENDER_STEP[RENDER_STEP["INITIAL"] = 0] = "INITIAL";
    RENDER_STEP[RENDER_STEP["FILLING"] = 1] = "FILLING";
    RENDER_STEP[RENDER_STEP["FILLED"] = 2] = "FILLED";
    RENDER_STEP[RENDER_STEP["FAILED"] = 3] = "FAILED";
})(RENDER_STEP || (RENDER_STEP = {}));
var MESSAGE_EVENTS;
(function(MESSAGE_EVENTS) {
    MESSAGE_EVENTS["autoFillResultFromIframe"] = "autoFillResultFromIframe";
    MESSAGE_EVENTS["autoFillCompleteFromIframe"] = "autoFillCompleteFromIframe";
    MESSAGE_EVENTS["autoFillReloadIframe"] = "autoFillReloadIframe";
    MESSAGE_EVENTS["updateResultFromIframe"] = "updateResultFromIframe";
    MESSAGE_EVENTS["sendHttpStatusIframe"] = "sendHttpStatusIframe";
    MESSAGE_EVENTS["complateAgent"] = "complateAgent";
    MESSAGE_EVENTS["agentStartFillingFields"] = "agentStartFillingFields";
    MESSAGE_EVENTS["agentGetResumeInfo"] = "agentGetResumeInfo";
    MESSAGE_EVENTS["agentSubmitClicked"] = "agentSubmitClicked";
    MESSAGE_EVENTS["agentCheckCoverLetter"] = "agentCheckCoverLetter";
})(MESSAGE_EVENTS || (MESSAGE_EVENTS = {}));
var FIELD_TYPE;
(function(FIELD_TYPE) {
    FIELD_TYPE["TEXT"] = "text";
    FIELD_TYPE["NUMBER"] = "number";
    FIELD_TYPE["COVER_LETTER"] = "cover-letter";
    FIELD_TYPE["CHECKBOX"] = "checkbox";
    FIELD_TYPE["SELECT"] = "select";
    FIELD_TYPE["RADIO"] = "radio";
    FIELD_TYPE["SEARCH"] = "search";
    FIELD_TYPE["SELECT_ORIGINAL"] = "select-original";
    FIELD_TYPE["MULTI_SELECT"] = "multi-select";
    FIELD_TYPE["LISTBOX"] = "listbox";
    FIELD_TYPE["EMPLOYMENT"] = "employment";
    FIELD_TYPE["EDUCATION"] = "education";
    FIELD_TYPE["DROPDOWN"] = "dropdown";
    FIELD_TYPE["DATE"] = "date";
    FIELD_TYPE["RADIOGROUP"] = "radio-group";
    FIELD_TYPE["BAMBOOHR_SPECIAL"] = "bamboohr-special";
    FIELD_TYPE["SECTION"] = "section";
    FIELD_TYPE["ASHBY_SEARCH"] = "ashby-search";
})(FIELD_TYPE || (FIELD_TYPE = {}));
var APPLICATION_STATUS;
(function(APPLICATION_STATUS) {
    APPLICATION_STATUS[APPLICATION_STATUS["RUNNING"] = 0] = "RUNNING";
    APPLICATION_STATUS[APPLICATION_STATUS["SUCCESS"] = 1] = "SUCCESS";
    APPLICATION_STATUS[APPLICATION_STATUS["FAILED"] = 2] = "FAILED";
})(APPLICATION_STATUS || (APPLICATION_STATUS = {}));
const MIME_TYPE = {
    pdf: "application/pdf",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"7WGaQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Strip punctuation (keep CJK) \u2014 oracle `removeSpecialCharacters`. */ parcelHelpers.export(exports, "removeSpecialCharacters", ()=>removeSpecialCharacters);
/** Label equality after stripping punctuation / asterisks / whitespace. */ parcelHelpers.export(exports, "isMatched", ()=>isMatched);
parcelHelpers.export(exports, "ensureArray", ()=>ensureArray);
/** Parse `YYYY-MM-DD` (or / .) into year / short month / day. */ parcelHelpers.export(exports, "parseDateParts", ()=>parseDateParts);
/**
 * Ask background getGptResults for answers mapped to discovered labels.
 */ parcelHelpers.export(exports, "fetchFormAnswers", ()=>fetchFormAnswers);
parcelHelpers.export(exports, "fetchResumeFile", ()=>fetchResumeFile);
parcelHelpers.export(exports, "fetchCoverLetterFile", ()=>fetchCoverLetterFile);
parcelHelpers.export(exports, "answerMap", ()=>answerMap);
parcelHelpers.export(exports, "lookupFieldAnswer", ()=>lookupFieldAnswer);
var _messaging = require("@plasmohq/messaging");
/** Loose messaging wrapper \u2014 extension BG handlers are not typed in this package. */ async function sendToBackground(msg) {
    return (0, _messaging.sendToBackground)(msg);
}
const NON_ALNUM_EXCEPT_CJK = /[^a-zA-Z0-9\s\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]/g;
function removeSpecialCharacters(text) {
    return text.replace(NON_ALNUM_EXCEPT_CJK, "");
}
function isMatched(a, b) {
    if (!a || !b || typeof a !== "string" || typeof b !== "string") return false;
    const left = removeSpecialCharacters(a).replace(/\s*\*\s*/g, "").replace(/\s+/g, " ").toLowerCase().trim();
    const right = removeSpecialCharacters(b).replace(/\s*\*\s*/g, "").replace(/\s+/g, " ").toLowerCase().trim();
    return !!left && !!right && left === right;
}
function ensureArray(value) {
    return Array.isArray(value) ? value : [
        value
    ];
}
function parseDateParts(raw) {
    try {
        if (!raw || typeof raw !== "string") return {
            year: "",
            month: "",
            day: ""
        };
        const normalized = raw.replace(/[/.]/g, "-").trim();
        const parts = normalized.split("-");
        if (parts.length < 2) return {
            year: "",
            month: "",
            day: ""
        };
        const [year, monthNum, day] = parts;
        const MONTHS = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        const monthIndex = Number(monthNum) - 1;
        const month = monthIndex >= 0 && monthIndex < 12 ? MONTHS[monthIndex] : "";
        return {
            year: year || "",
            month,
            day: day ? day.replace(/^0/, "") : ""
        };
    } catch  {
        return {
            year: "",
            month: "",
            day: ""
        };
    }
}
async function fetchFormAnswers(fields) {
    const elements = fields.map((f)=>({
            label: f.label,
            type: f.type,
            options: f.options || []
        }));
    const res = await sendToBackground({
        name: "getGptResults",
        body: {
            params: {
                elements,
                parser: "internal",
                source: "cleanTs",
                url: typeof location !== "undefined" ? location.href : ""
            }
        }
    });
    const list = res?.data?.fill_data_list;
    if (!Array.isArray(list)) return [];
    return list.map((row)=>({
            name: String(row?.name || ""),
            value: Array.isArray(row?.value) ? String(row.value[0] ?? "") : String(row?.value ?? "")
        })).filter((r)=>r.name && r.value);
}
async function fetchResumeFile() {
    const res = await sendToBackground({
        name: "getResumeBlob",
        body: {}
    });
    if (!res?.ok || !res.base64URL) return null;
    const file = await dataUrlToFile(res.base64URL, res.fileName || `resume.${res.extension || "pdf"}`, res.mimeType);
    return {
        file,
        fileName: file.name
    };
}
async function fetchCoverLetterFile() {
    const res = await sendToBackground({
        name: "getCoverLetterBlob",
        body: {}
    });
    if (!res?.ok || !res.base64URL) return null;
    const file = await dataUrlToFile(res.base64URL, res.fileName || `cover-letter.${res.extension || "pdf"}`, res.mimeType);
    return {
        file,
        fileName: file.name
    };
}
async function dataUrlToFile(dataUrl, fileName, mimeHint) {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return new File([
        blob
    ], fileName, {
        type: mimeHint || blob.type || "application/pdf"
    });
}
function answerMap(answers) {
    const m = new Map();
    for (const a of answers){
        m.set(a.name.trim().toLowerCase(), a.value);
        m.set(a.name.replace(/\s*\*+\s*/g, " ").trim().toLowerCase(), a.value);
    }
    return m;
}
function lookupFieldAnswer(map, label) {
    const key = label.replace(/\s*\*+\s*/g, " ").trim().toLowerCase();
    return map.get(key) || map.get(label.trim().toLowerCase()) || null;
}

},{"@plasmohq/messaging":"fbyZa","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"fbyZa":[function(require,module,exports) {
/**
 * Parcel module id: 92GyB
 * Resolved path: @plasmohq/messaging.js
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   nanoid -> g2QpR  =>  nanoid.js
 *
 * npm-backed (@plasmohq/messaging). Generated by scripts/replace-remaining-vendors-with-npm.mjs \u2014 do not hand-edit.
 */ var helpers = e("@parcel/transformer-js/src/esmodule-helpers.js");
helpers.defineInteropFlag(r);
var __jrReq = e;
var __mod = function() {
    var __cjsModule = {
        exports: {}
    };
    var module = __cjsModule;
    var exports = __cjsModule.exports;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = (target, all)=>{
        for(var name in all)__defProp(target, name, {
            get: all[name],
            enumerable: true
        });
    };
    var __copyProps = (to, from, except, desc)=>{
        if (from && typeof from === "object" || typeof from === "function") {
            for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                get: ()=>from[key],
                enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
            });
        }
        return to;
    };
    var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
            value: true
        }), mod);
    // scripts/_remaining-vendor-tmp/entry-92GyB.mjs
    var entry_92GyB_exports = {};
    __export(entry_92GyB_exports, {
        default: ()=>entry_92GyB_default,
        relay: ()=>E,
        relayMessage: ()=>M,
        sendToActiveContentScript: ()=>h,
        sendToBackground: ()=>p,
        sendToBackgroundViaRelay: ()=>u,
        sendToContentScript: ()=>x,
        sendViaRelay: ()=>S
    });
    module.exports = __toCommonJS(entry_92GyB_exports);
    // node_modules/@plasmohq/messaging/dist/index.js
    var dist_exports = {};
    __export(dist_exports, {
        relay: ()=>E,
        relayMessage: ()=>M,
        sendToActiveContentScript: ()=>h,
        sendToBackground: ()=>p,
        sendToBackgroundViaRelay: ()=>u,
        sendToContentScript: ()=>x,
        sendViaRelay: ()=>S
    });
    var import_nanoid = __jrReq("nanoid");
    var l = globalThis.browser?.tabs || globalThis.chrome?.tabs;
    var d = ()=>{
        let e1 = globalThis.browser?.runtime || globalThis.chrome?.runtime;
        if (!e1) throw new Error("Extension runtime is not available");
        return e1;
    };
    var i = ()=>{
        if (!l) throw new Error("Extension tabs API is not available");
        return l;
    };
    var m = async ()=>{
        let e1 = i(), [a] = await e1.query({
            active: true,
            currentWindow: true
        });
        return a;
    };
    var g = (e1, a)=>!a.__internal && e1.source === globalThis.window && e1.data.name === a.name && (a.relayId === void 0 || e1.data.relayId === a.relayId);
    var c = (e1, a, n = globalThis.window)=>{
        let r1 = async (s)=>{
            if (g(s, e1) && !s.data.relayed) {
                let o = {
                    name: e1.name,
                    relayId: e1.relayId,
                    body: s.data.body
                }, t = await a?.(o);
                n.postMessage({
                    name: e1.name,
                    relayId: e1.relayId,
                    instanceId: s.data.instanceId,
                    body: t,
                    relayed: true
                }, {
                    targetOrigin: e1.targetOrigin || "/"
                });
            }
        };
        return n.addEventListener("message", r1), ()=>n.removeEventListener("message", r1);
    };
    var y = (e1, a = globalThis.window)=>new Promise((n, r1)=>{
            let s = (0, import_nanoid.nanoid)(), o = new AbortController();
            a.addEventListener("message", (t)=>{
                g(t, e1) && t.data.relayed && t.data.instanceId === s && (n(t.data.body), o.abort());
            }, {
                signal: o.signal
            }), a.postMessage({
                ...e1,
                instanceId: s
            }, {
                targetOrigin: e1.targetOrigin || "/"
            });
        });
    var p = async (e1)=>d().sendMessage(e1.extensionId ?? null, e1);
    var x = async (e1)=>{
        let a = typeof e1.tabId == "number" ? e1.tabId : (await m())?.id;
        if (!a) throw new Error("No active tab found to send message to.");
        return i().sendMessage(a, e1);
    };
    var h = x;
    var M = (e1)=>c(e1, p);
    var E = M;
    var u = y;
    var S = u;
    // scripts/_remaining-vendor-tmp/entry-92GyB.mjs
    var entry_92GyB_default = dist_exports;
    var out = module.exports;
    if (out && typeof out === "object" && out.__esModule && "default" in out) {
        var names = Object.keys(out).filter(function(k) {
            return k !== "default" && k !== "__esModule";
        });
        if (names.length) return out;
        return out.default;
    }
    return out;
}();
if (typeof __mod === "function") {
    helpers.export(r, "default", function() {
        return __mod;
    });
    r.default = __mod;
} else if (__mod && typeof __mod === "object") {
    for(var __k in __mod)if (Object.prototype.hasOwnProperty.call(__mod, __k) && __k !== "__esModule") (function(key) {
        helpers.export(r, key, function() {
            return __mod[key];
        });
        r[key] = __mod[key];
    })(__k);
    r.default = __mod.default !== undefined ? __mod.default : __mod;
    if (__mod.default !== undefined) helpers.export(r, "default", function() {
        return __mod.default;
    });
} else {
    r.default = __mod;
    helpers.export(r, "default", function() {
        return __mod;
    });
}

},{}]},["66Hv8","dMvar"], "dMvar", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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SSxJQUFJO0lBRVIsZ0RBQWdEO0lBQ2hELElBQUksc0JBQW1EO0lBRXJELElBQUksTUFBTSxPQUFPO0lBQ2pCLElBQUksT0FBTyxPQUFPLFFBQVEsWUFBWSxJQUFJLGNBQWMsYUFBYSxLQUFLO1FBQ3hFLElBQUksUUFBUSxPQUFPLEtBQUssS0FBSyxPQUFPLFNBQVUsQ0FBQztZQUM3QyxPQUFPLE1BQU0sYUFBYSxNQUFNO1FBQ2xDO1FBQ0EsSUFBSSxNQUFNLFFBQVEsT0FBTztRQUN6QixPQUFPLElBQUk7SUFDYjtJQUNBLE9BQU87QUFDVDtBQUVBLElBQUksT0FBTyxVQUFVLFlBQVk7SUFDL0IsUUFBUSxPQUFPLEdBQUcsV0FBVztRQUFjLE9BQU87SUFBTTtJQUN4RCxFQUFFLFVBQVU7QUFDZCxPQUFPLElBQUksU0FBUyxPQUFPLFVBQVUsVUFBVTtJQUM3QyxJQUFLLElBQUksT0FBTyxNQUNkLElBQUksT0FBTyxVQUFVLGVBQWUsS0FBSyxPQUFPLFFBQVEsUUFBUSxjQUM3RCxBQUFDLENBQUEsU0FBVSxHQUFHO1FBQ2IsUUFBUSxPQUFPLEdBQUcsS0FBSztZQUFjLE9BQU8sS0FBSyxDQUFDLElBQUk7UUFBQztRQUN2RCxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJO0lBQ3JCLENBQUEsRUFBRztJQUdQLEVBQUUsVUFBVSxNQUFNLFlBQVksWUFBWSxNQUFNLFVBQVU7SUFDMUQsSUFBSSxNQUFNLFlBQVksV0FDcEIsUUFBUSxPQUFPLEdBQUcsV0FBVztRQUFjLE9BQU8sTUFBTTtJQUFRO0FBRXBFLE9BQU87SUFDTCxFQUFFLFVBQVU7SUFDWixRQUFRLE9BQU8sR0FBRyxXQUFXO1FBQWMsT0FBTztJQUFNO0FBQzFEIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS04NmE2MDVkMWQ2YzVmNTM2LmpzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcmVzb2x2ZXIvZGlzdC9wb2x5ZmlsbHMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwic3JjL2NvbnRlbnRzL21ldGhvZHMvbmF0aXZlLWRvbS50cyIsInNyYy9jb250ZW50cy9jcmF3bGVyL3V0aWxzL2lucHV0LnRzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJzcmMvY29udGVudHMvY3Jhd2xlci91dGlscy9jaGVja2JveC50cyIsInNyYy9jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaC50cyIsInNyYy9jb250ZW50cy9jcmF3bGVyL3V0aWxzL2RlbGF5LnRzIiwic3JjL2NvbnRlbnRzL21ldGhvZHMvY2hlY2tib3gtbGFiZWwudHMiLCJzcmMvY29yZS9lbnVtcy50cyIsInNyYy9jb250ZW50cy9tZXRob2RzL25hdGl2ZS1hbnN3ZXIudHMiLCJzcmMvQHBsYXNtb2hxL21lc3NhZ2luZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVz1PYmplY3QuY3JlYXRlO3ZhciBQPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgVj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBYPU9iamVjdC5nZXRQcm90b3R5cGVPZixKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHE9KGUsdCxvLHIpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIEcodCkpIUouY2FsbChlLG4pJiZuIT09byYmUChlLG4se2dldDooKT0+dFtuXSxlbnVtZXJhYmxlOiEocj1WKHQsbikpfHxyLmVudW1lcmFibGV9KTtyZXR1cm4gZX07dmFyIHo9KGUsdCxvKT0+KG89ZSE9bnVsbD9XKFgoZSkpOnt9LHEodHx8IWV8fCFlLl9fZXNNb2R1bGU/UChvLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpvLGUpKTt2YXIgeT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBIPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEs9bmV3IFNldCh5KSxEPWU9PksuaGFzKGUpLHVlPXkuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgZGU9RChcIi0tZHJ5LXJ1blwiKSxfPSgpPT5EKFwiLS12ZXJib3NlXCIpfHxIKCkuVkVSQk9TRT09PVwidHJ1ZVwiLGZlPV8oKTt2YXIgeD0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgaz0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLFQ9KC4uLmUpPT54KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksQT0oLi4uZSk9PngoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxRPTAscD0oLi4uZSk9Pl8oKSYmeChgXFx1ezFGN0UxfSAke1ErK31gLC4uLmUpO3ZhciBjPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInBhZ2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXGpvYnJpZ2h0LWZvcmtcXFxcZXh0ZW5zaW9uXFxcXHNyY1xcXFxjb250ZW50c1xcXFxtZXRob2RzXFxcXG5hdGl2ZS1kb20udHNcIixcImJ1bmRsZUlkXCI6XCJmM2I4MTI0OThkNzE0YTI5XCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogU2hhcmVkIERPTSBmaWxsIHByaW1pdGl2ZXMgZm9yIGNsZWFuLVRTIGF1dG9maWxsLlxyXG4gKlxyXG4gKiBMaXZlcyBpbiB0aGUgZXh0ZW5zaW9uIChgc3JjL2NvbnRlbnRzL21ldGhvZHNgKS5cclxuICogUGFyY2VsIHJlZmVyZW5jZTogZW5naW5lL2hlbHBlci1hcHAvc3JjL2NvbnRlbnRzL21ldGhvZHMvZG9tLmpzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgZmlsbERlZmF1bHRJbnB1dEZpZWxkIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3V0aWxzL2lucHV0XCJcclxuaW1wb3J0IHsgZmlsbENoZWNrYm94IH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3V0aWxzL2NoZWNrYm94XCJcclxuaW1wb3J0IHsgZGVsYXkgfSBmcm9tIFwifmNvbnRlbnRzL2NyYXdsZXIvdXRpbHMvZGVsYXlcIlxyXG5pbXBvcnQge1xyXG4gIGZpbmRFeGFjdENob2ljZSxcclxuICBpc0V4YWN0Q2hvaWNlTWF0Y2gsXHJcbiAgbm9ybWFsaXplQ2hvaWNlVGV4dFxyXG59IGZyb20gXCJ+Y29udGVudHMvbWV0aG9kcy9jaG9pY2UtbWF0Y2hcIlxyXG5pbXBvcnQge1xyXG4gIGdldFJhZGlvQ2hlY2tUZXh0LFxyXG4gIG5vcm1hbGl6ZVJhZGlvQ2hlY2tUZXh0XHJcbn0gZnJvbSBcIn5jb250ZW50cy9tZXRob2RzL2NoZWNrYm94LWxhYmVsXCJcclxuaW1wb3J0IHsgaXNNYXRjaGVkIH0gZnJvbSBcIn5jb250ZW50cy9tZXRob2RzL25hdGl2ZS1hbnN3ZXJcIlxyXG5pbXBvcnQgeyBNRVNTQUdFX0VWRU5UUyB9IGZyb20gXCJ+Y29yZS9lbnVtc1wiXHJcblxyXG4vKiogRmllbGQgc2hhcGUgdXNlZCBieSBvcmFjbGUgc2l0ZSBmaWxsZXJzIChgZmllbGQuJGNoZWNrYm94c2AsIGBmaWVsZC5sYWJlbGApLiAqL1xyXG5leHBvcnQgdHlwZSBDaGVja2JveEZpZWxkID0ge1xyXG4gICRjaGVja2JveHM/OiBJdGVyYWJsZTxIVE1MSW5wdXRFbGVtZW50PiB8IEhUTUxJbnB1dEVsZW1lbnRbXSB8IG51bGxcclxuICBsYWJlbD86IHN0cmluZ1xyXG59XHJcblxyXG4vKiogQWxpYXNlcyB3aGVuIGFuc3dlcnMgbWFwIHRydWUvZmFsc2UgLyBqb2IgYm9hcmRzIHRvIHZpc2libGUgbGFiZWxzLiAqL1xyXG5jb25zdCBBTlNXRVJfQUxJQVM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgdHJ1ZTogXCJ5ZXNcIixcclxuICBmYWxzZTogXCJub1wiLFxyXG4gIGxpbmtlZGluOiBcImxpbmtlZGluLmNvbVwiLFxyXG4gIGluZGVlZDogXCJpbmRlZWQuY29tXCJcclxufVxyXG5cclxudHlwZSBGaWxsQ2hlY2tib3hGbiA9IChcclxuICBlbDogSFRNTElucHV0RWxlbWVudCxcclxuICBjaGVja2VkPzogYm9vbGVhblxyXG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XHJcblxyXG4vKiogRGlzcGF0Y2ggdHlwZWQgRE9NIGV2ZW50cyAobW91c2Vkb3duL2NsaWNrL2ZvY3VzL2lucHV0L+KApikgbGlrZSB0aGUgb3JhY2xlLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlckV2ZW50cyhcclxuICBlbDogRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgZXZlbnROYW1lczogc3RyaW5nW10gPSBbXCJpbnB1dFwiLCBcImNoYW5nZVwiLCBcImJsdXJcIl1cclxuKTogdm9pZCB7XHJcbiAgaWYgKCFlbCkgcmV0dXJuXHJcbiAgZm9yIChjb25zdCBuYW1lIG9mIGV2ZW50TmFtZXMpIHtcclxuICAgIGxldCBldjogRXZlbnRcclxuICAgIGlmIChcclxuICAgICAgKG5hbWUgPT09IFwibW91c2Vkb3duXCIgfHwgbmFtZSA9PT0gXCJtb3VzZXVwXCIgfHwgbmFtZSA9PT0gXCJjbGlja1wiKSAmJlxyXG4gICAgICB0eXBlb2YgTW91c2VFdmVudCA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICApIHtcclxuICAgICAgZXYgPSBuZXcgTW91c2VFdmVudChuYW1lLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSlcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIChuYW1lID09PSBcImZvY3VzXCIgfHwgbmFtZSA9PT0gXCJibHVyXCIpICYmXHJcbiAgICAgIHR5cGVvZiBGb2N1c0V2ZW50ID09PSBcImZ1bmN0aW9uXCJcclxuICAgICkge1xyXG4gICAgICBldiA9IG5ldyBGb2N1c0V2ZW50KG5hbWUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KVxyXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSBcImlucHV0XCIgJiYgdHlwZW9mIElucHV0RXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9XHJcbiAgICAgICAgXCJ2YWx1ZVwiIGluIGVsICYmIHR5cGVvZiAoZWwgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgID8gKGVsIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICAgICAgICA6IG51bGxcclxuICAgICAgZXYgPSBuZXcgSW5wdXRFdmVudChuYW1lLCB7XHJcbiAgICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIGRhdGE6IHZhbHVlLFxyXG4gICAgICAgIGlucHV0VHlwZTogXCJpbnNlcnRUZXh0XCJcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV2ID0gbmV3IEV2ZW50KG5hbWUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KVxyXG4gICAgfVxyXG4gICAgZWwuZGlzcGF0Y2hFdmVudChldilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWxsSW5wdXRUZXh0RmllbGQoXHJcbiAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuICB2YWx1ZTogc3RyaW5nXHJcbik6IFByb21pc2U8dm9pZD4ge1xyXG4gIGF3YWl0IGZpbGxEZWZhdWx0SW5wdXRGaWVsZChpbnB1dCwgdmFsdWUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNob2ljZUxhYmVsVGV4dChpbnB1dEVsOiBIVE1MSW5wdXRFbGVtZW50KTogc3RyaW5nIHtcclxuICBjb25zdCBmcm9tQ29udHJvbCA9IG5vcm1hbGl6ZVJhZGlvQ2hlY2tUZXh0KGdldFJhZGlvQ2hlY2tUZXh0KGlucHV0RWwpKVxyXG4gIGlmIChmcm9tQ29udHJvbCkgcmV0dXJuIGZyb21Db250cm9sXHJcbiAgcmV0dXJuIFwiXCJcclxufVxyXG5cclxuZnVuY3Rpb24gbGFiZWxNYXRjaGVzQW5zd2VyKGxhYmVsVGV4dDogc3RyaW5nLCBhbnN3ZXI6IHVua25vd24pOiBib29sZWFuIHtcclxuICBjb25zdCBub3JtYWxpemVkID1cclxuICAgIHR5cGVvZiBhbnN3ZXIgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGFuc3dlciA9PT0gXCJudW1iZXJcIlxyXG4gICAgICA/IFN0cmluZyhhbnN3ZXIpLnRvTG93ZXJDYXNlKCkudHJpbSgpXHJcbiAgICAgIDogXCJcIlxyXG4gIHJldHVybiAhIW5vcm1hbGl6ZWQgJiYgaXNFeGFjdENob2ljZU1hdGNoKGxhYmVsVGV4dCwgbm9ybWFsaXplZClcclxufVxyXG5cclxuLyoqXHJcbiAqIERlY2lkZSB3aGV0aGVyIGEgc2luZ2xlIGNoZWNrYm94IHNob3VsZCBiZSBjaGVja2VkIGdpdmVuIGFuc3dlciBsaXN0ICsgZmllbGQgbGFiZWwuXHJcbiAqIEhhbmRsZXMgeWVzL25vLCBcImhhdmUgcmVhZFwiLCBhbmQgXCJjdXJyZW50XCIgZW1wbG95bWVudCBoZXVyaXN0aWNzLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbWF5YmVDaGVja1NpbmdsZUJveChcclxuICBpbnB1dEVsOiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIGFuc3dlcnM6IHVua25vd25bXSxcclxuICBmaWVsZExhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgZmlsbEZuOiBGaWxsQ2hlY2tib3hGbiA9IGZpbGxDaGVja2JveFxyXG4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICBjb25zdCBsYWJlbFRleHQgPSBjaG9pY2VMYWJlbFRleHQoaW5wdXRFbClcclxuICBpZiAoIWxhYmVsVGV4dCkgcmV0dXJuXHJcblxyXG4gIGlmIChhbnN3ZXJzLnNvbWUoKGEpID0+IGxhYmVsTWF0Y2hlc0Fuc3dlcihsYWJlbFRleHQsIGEpKSkge1xyXG4gICAgYXdhaXQgZmlsbEZuKGlucHV0RWwsIHRydWUpXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGNvbnN0IGZpcnN0ID0gU3RyaW5nKGFuc3dlcnNbMF0gPz8gXCJcIikudG9Mb3dlckNhc2UoKVxyXG4gIGNvbnN0IGxhYmVsID0gU3RyaW5nKGZpZWxkTGFiZWwgPz8gXCJcIikudG9Mb3dlckNhc2UoKVxyXG4gIGNvbnN0IHNob3VsZENoZWNrID1cclxuICAgIChmaXJzdCA9PT0gXCJ0cnVlXCIgJiYgbGFiZWxUZXh0ID09PSBcInllc1wiKSB8fFxyXG4gICAgKGZpcnN0ID09PSBcImZhbHNlXCIgJiYgbGFiZWxUZXh0ID09PSBcIm5vXCIpIHx8XHJcbiAgICAobGFiZWxUZXh0LmluY2x1ZGVzKFwiaGF2ZSByZWFkXCIpICYmIGZpcnN0ID09PSBcInRydWVcIikgfHxcclxuICAgIChpc01hdGNoZWQobGFiZWxUZXh0LCBmaWVsZExhYmVsID8/IFwiXCIpICYmIGZpcnN0ID09PSBcInRydWVcIikgfHxcclxuICAgIChmaXJzdCA9PT0gXCJ0cnVlXCIgJiZcclxuICAgICAgKGxhYmVsVGV4dC5pbmNsdWRlcyhcImN1cnJlbnRcIikgfHwgbGFiZWwuaW5jbHVkZXMoXCJjdXJyZW50XCIpKSkgfHxcclxuICAgIChsYWJlbC5pbmNsdWRlcyhcImN1cnJlbnRcIikgJiYgZmlyc3QgPT09IFwidHJ1ZVwiKVxyXG5cclxuICBpZiAoc2hvdWxkQ2hlY2spIGF3YWl0IGZpbGxGbihpbnB1dEVsLCB0cnVlKVxyXG59XHJcblxyXG4vKipcclxuICogT3JhY2xlLXNoYXBlZCBjaGVja2JveC9yYWRpbyBncm91cCBmaWxsIChgZmllbGQuJGNoZWNrYm94c2AsIGBmaWVsZC5sYWJlbGApLlxyXG4gKiBSZXR1cm5zIGBmYWxzZWAgb24gYW1iaWd1b3VzIG11bHRpLW1hdGNoOyBvdGhlcndpc2Ugdm9pZC91bmRlZmluZWQgbGlrZSB0aGUgb3JhY2xlLlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGxDaGVja0JveGVzRmllbGQoXHJcbiAgZmllbGQ6IENoZWNrYm94RmllbGQgfCBIVE1MSW5wdXRFbGVtZW50W10sXHJcbiAgcmF3QW5zd2VyczogdW5rbm93bixcclxuICBmaWxsRm46IEZpbGxDaGVja2JveEZuID0gZmlsbENoZWNrYm94XHJcbik6IFByb21pc2U8ZmFsc2UgfCB2b2lkIHwgbnVtYmVyPiB7XHJcbiAgLy8gQmFjay1jb21wYXQ6IEJhc2VGaWxsZXIgcGFzc2VzIChib3hlc1tdLCBzdHJpbmdbXSlcclxuICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZCkgJiYgIShmaWVsZCBhcyBDaGVja2JveEZpZWxkKS4kY2hlY2tib3hzKSB7XHJcbiAgICByZXR1cm4gZmlsbENoZWNrYm94RmllbGQoZmllbGQgYXMgSFRNTElucHV0RWxlbWVudFtdLCByYXdBbnN3ZXJzIGFzIHN0cmluZ1tdKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYW5zd2VycyA9IChcclxuICAgIEFycmF5LmlzQXJyYXkocmF3QW5zd2VycykgPyByYXdBbnN3ZXJzIDogW3Jhd0Fuc3dlcnNdXHJcbiAgKS5maWx0ZXIoKGEpID0+IG5vcm1hbGl6ZUNob2ljZVRleHQoYSkpXHJcbiAgaWYgKCFhbnN3ZXJzLmxlbmd0aCkgcmV0dXJuIGZhbHNlXHJcblxyXG4gIGNvbnN0IGJveEZpZWxkID0gZmllbGQgYXMgQ2hlY2tib3hGaWVsZFxyXG4gIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oYm94RmllbGQuJGNoZWNrYm94cyA/PyBbXSlcclxuICBjb25zdCBpc011bHRpT3JSYWRpbyA9XHJcbiAgICBpbnB1dHMubGVuZ3RoID4gMSB8fCBpbnB1dHMuc29tZSgoZWwpID0+IGVsLnR5cGUgPT09IFwicmFkaW9cIilcclxuXHJcbiAgaWYgKGlzTXVsdGlPclJhZGlvKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IG5ldyBTZXQ8SFRNTElucHV0RWxlbWVudD4oKVxyXG4gICAgY29uc3QgYWxsUmFkaW9zID0gaW5wdXRzLmV2ZXJ5KChlbCkgPT4gZWwudHlwZSA9PT0gXCJyYWRpb1wiKVxyXG5cclxuICAgIGZvciAoY29uc3QgYW5zd2VyIG9mIGFuc3dlcnMpIHtcclxuICAgICAgY29uc3Qgd2FudCA9IG5vcm1hbGl6ZUNob2ljZVRleHQoYW5zd2VyKVxyXG4gICAgICBpZiAoIXdhbnQpIGNvbnRpbnVlXHJcblxyXG4gICAgICBjb25zdCBleGFjdEhpdHMgPSBpbnB1dHMuZmlsdGVyKChlbCkgPT5cclxuICAgICAgICBpc0V4YWN0Q2hvaWNlTWF0Y2goY2hvaWNlTGFiZWxUZXh0KGVsKSwgd2FudClcclxuICAgICAgKVxyXG4gICAgICBpZiAoZXhhY3RIaXRzLmxlbmd0aCA+IDEpIHJldHVybiBmYWxzZVxyXG5cclxuICAgICAgbGV0IG1hdGNoID0gZmluZEV4YWN0Q2hvaWNlKGlucHV0cywgd2FudCwgY2hvaWNlTGFiZWxUZXh0KVxyXG5cclxuICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgIGNvbnN0IGFsaWFzID0gQU5TV0VSX0FMSUFTW3dhbnRdXHJcbiAgICAgICAgaWYgKGFsaWFzKSB7XHJcbiAgICAgICAgICBjb25zdCBhbGlhc0hpdHMgPSBpbnB1dHMuZmlsdGVyKChlbCkgPT5cclxuICAgICAgICAgICAgaXNFeGFjdENob2ljZU1hdGNoKGNob2ljZUxhYmVsVGV4dChlbCksIGFsaWFzKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgaWYgKGFsaWFzSGl0cy5sZW5ndGggPiAxKSByZXR1cm4gZmFsc2VcclxuICAgICAgICAgIG1hdGNoID0gZmluZEV4YWN0Q2hvaWNlKGlucHV0cywgYWxpYXMsIGNob2ljZUxhYmVsVGV4dClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICBpZiAoYWxsUmFkaW9zKSBjb250aW51ZVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxlY3RlZC5hZGQobWF0Y2gpXHJcbiAgICAgIGlmIChhbGxSYWRpb3MpIGJyZWFrXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFzZWxlY3RlZC5zaXplKSByZXR1cm4gZmFsc2VcclxuICAgIGZvciAoY29uc3QgZWwgb2Ygc2VsZWN0ZWQpIGF3YWl0IGZpbGxGbihlbCwgdHJ1ZSlcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCBib3ggb2YgaW5wdXRzKSB7XHJcbiAgICBhd2FpdCBtYXliZUNoZWNrU2luZ2xlQm94KGJveCwgYW5zd2VycywgYm94RmllbGQubGFiZWwsIGZpbGxGbilcclxuICB9XHJcbn1cclxuXHJcbi8qKiBTaW1wbGUgbGFiZWwtbGlzdCBmaWxsIHVzZWQgYnkgQmFzZUZpbGxlciAvIFBlcnNvbmlvLiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmlsbENoZWNrYm94RmllbGQoXHJcbiAgYm94ZXM6IEhUTUxJbnB1dEVsZW1lbnRbXSxcclxuICB2YWx1ZXM6IHN0cmluZ1tdXHJcbik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgbGV0IGZpbGxlZCA9IDBcclxuICBmb3IgKGNvbnN0IHdhbnQgb2YgdmFsdWVzKSB7XHJcbiAgICBjb25zdCBtYXRjaCA9IGZpbmRFeGFjdENob2ljZShib3hlcywgd2FudCwgY2hvaWNlTGFiZWxUZXh0KVxyXG4gICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgIGF3YWl0IGZpbGxDaGVja2JveChtYXRjaCwgdHJ1ZSlcclxuICAgICAgZmlsbGVkICs9IDFcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZpbGxlZFxyXG59XHJcblxyXG4vKipcclxuICogRm9jdXMgYSA8c2VsZWN0PiBhbmQgcGljayB0aGUgZmlyc3Qgb3B0aW9uIG1hdGNoaW5nIGFueSBhbnN3ZXIgdmlhIGlzTWF0Y2hlZC5cclxuICogQWxzbyBhY2NlcHRzIGEgc2luZ2xlIHN0cmluZyAoQmFzZUZpbGxlciAvIFBlcnNvbmlvKS5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWxsU2VsZWN0RmllbGQoXHJcbiAgc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgYW5zd2Vyczogc3RyaW5nIHwgc3RyaW5nW11cclxuKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgaWYgKCFzZWxlY3QpIHJldHVybiBmYWxzZVxyXG4gIGNvbnN0IGxpc3QgPSAoQXJyYXkuaXNBcnJheShhbnN3ZXJzKSA/IGFuc3dlcnMgOiBbYW5zd2Vyc10pLmZpbHRlcihCb29sZWFuKVxyXG4gIGlmICghbGlzdC5sZW5ndGgpIHJldHVybiBmYWxzZVxyXG5cclxuICBjb25zdCBmb2N1c0V2ID0gbmV3IEZvY3VzRXZlbnQoXCJmb2N1c1wiLCB7XHJcbiAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuICAgIHZpZXc6IHdpbmRvd1xyXG4gIH0pXHJcbiAgc2VsZWN0LmRpc3BhdGNoRXZlbnQoZm9jdXNFdilcclxuICBzZWxlY3QuZm9jdXMoKVxyXG5cclxuICBpZiAoc2VsZWN0Lm9wdGlvbnM/Lmxlbmd0aCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBvcHQgPSBzZWxlY3Qub3B0aW9uc1tpXVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgb3B0Py52YWx1ZSAmJlxyXG4gICAgICAgIG9wdC50ZXh0ICYmXHJcbiAgICAgICAgbGlzdC5zb21lKChhKSA9PiBpc01hdGNoZWQoYSwgb3B0LnRleHQpIHx8IGlzRXhhY3RDaG9pY2VNYXRjaChvcHQudGV4dCwgYSkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIG9wdC5jbGljaygpXHJcbiAgICAgICAgb3B0LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgb3B0LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChcIm1vdXNldXBcIiwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIG9wdC5zZWxlY3RlZCA9IHRydWVcclxuICAgICAgICBzZWxlY3QuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgIG5ldyBFdmVudChcImNoYW5nZVwiLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgc2VsZWN0LmJsdXIoKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgc2VsZWN0LmJsdXIoKVxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG4vKiogRXhhY3Qgb3B0aW9uIGAudGV4dGAgb3IgYC50aXRsZWAgbWF0Y2ggKG5vIGZ1enp5KS4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxPcmlnaW5TZWxlY3RGaWVsZChcclxuICBzZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuICB2YWx1ZXM6IHN0cmluZyB8IHN0cmluZ1tdXHJcbik6IGJvb2xlYW4ge1xyXG4gIGlmICghc2VsZWN0Py5vcHRpb25zKSByZXR1cm4gZmFsc2VcclxuICBjb25zdCB3YW50cyA9IChBcnJheS5pc0FycmF5KHZhbHVlcykgPyB2YWx1ZXMgOiBbdmFsdWVzXSkubWFwKFN0cmluZylcclxuICBmb3IgKGNvbnN0IHdhbnQgb2Ygd2FudHMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgb3B0ID0gc2VsZWN0Lm9wdGlvbnNbaV1cclxuICAgICAgaWYgKG9wdC50ZXh0ID09PSB3YW50IHx8IG9wdC50aXRsZSA9PT0gd2FudCkge1xyXG4gICAgICAgIG9wdC5zZWxlY3RlZCA9IHRydWVcclxuICAgICAgICBzZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwgeyBidWJibGVzOiB0cnVlIH0pKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWxsUmFkaW9Hcm91cEZpZWxkKFxyXG4gIHJhZGlvczogSFRNTElucHV0RWxlbWVudFtdLFxyXG4gIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXVxyXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICBjb25zdCB3YW50ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZVswXSA6IHZhbHVlXHJcbiAgaWYgKCF3YW50KSByZXR1cm4gZmFsc2VcclxuICBjb25zdCBtYXRjaCA9IGZpbmRFeGFjdENob2ljZShyYWRpb3MsIHdhbnQsIGNob2ljZUxhYmVsVGV4dClcclxuICBpZiAoIW1hdGNoKSByZXR1cm4gZmFsc2VcclxuICBpZiAoIW1hdGNoLmNoZWNrZWQpIHtcclxuICAgIG1hdGNoLmNsaWNrKClcclxuICAgIG1hdGNoLmNoZWNrZWQgPSB0cnVlXHJcbiAgICBtYXRjaC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLCB7IGJ1YmJsZXM6IHRydWUgfSkpXHJcbiAgICBtYXRjaC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNsaWNrXCIsIHsgYnViYmxlczogdHJ1ZSB9KSlcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGxTaW5nbGVDaGVja2JveChcclxuICBlbDogSFRNTElucHV0RWxlbWVudCxcclxuICBjaGVja2VkID0gdHJ1ZVxyXG4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICBhd2FpdCBmaWxsQ2hlY2tib3goZWwsIGNoZWNrZWQpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBdHRhY2ggYSBGaWxlIC8gQmxvYiB0byBhIGZpbGUgaW5wdXQgKGNsZWFuLVRTKS5cclxuICogT3JhY2xlIGFsc28gYWNjZXB0cyBhIHByZXBhcmVkIGB7IGZpbGVzOiBGaWxlTGlzdCB9YCArIHByb2dyZXNzIGNhbGxiYWNrcy5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRGaWxlcyhcclxuICBpbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgZmlsZTogRmlsZSB8IEJsb2IsXHJcbiAgZmlsZU5hbWU6IHN0cmluZ1xyXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICBpZiAoIWlucHV0IHx8IGlucHV0LnR5cGUgIT09IFwiZmlsZVwiKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgY29uc3QgYmxvYiA9XHJcbiAgICBmaWxlIGluc3RhbmNlb2YgRmlsZVxyXG4gICAgICA/IGZpbGVcclxuICAgICAgOiBuZXcgRmlsZShbZmlsZV0sIGZpbGVOYW1lLCB7XHJcbiAgICAgICAgICB0eXBlOiAoZmlsZSBhcyBCbG9iKS50eXBlIHx8IFwiYXBwbGljYXRpb24vcGRmXCJcclxuICAgICAgICB9KVxyXG5cclxuICBjb25zdCBkdCA9IG5ldyBEYXRhVHJhbnNmZXIoKVxyXG4gIGR0Lml0ZW1zLmFkZChibG9iKVxyXG4gIGlucHV0LmZpbGVzID0gZHQuZmlsZXNcclxuICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHsgYnViYmxlczogdHJ1ZSB9KSlcclxuICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLCB7IGJ1YmJsZXM6IHRydWUgfSkpXHJcbiAgYXdhaXQgZGVsYXkoMTAwKVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbi8qKiBUZWxsIHRoZSB0b3AgZnJhbWUgdGhlIGFnZW50IGNvdmVyZWQgbGV0dGVyIHN0YXR1cyBjaGFuZ2VkLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9zdENvdmVyTGV0dGVyU3RhdHVzKHN0YXR1czogdW5rbm93bik6IHZvaWQge1xyXG4gIHdpbmRvdy50b3A/LnBvc3RNZXNzYWdlKFxyXG4gICAge1xyXG4gICAgICB0eXBlOiBNRVNTQUdFX0VWRU5UUy5hZ2VudENoZWNrQ292ZXJMZXR0ZXIsXHJcbiAgICAgIHN0YXR1c1xyXG4gICAgfSxcclxuICAgIHsgdGFyZ2V0T3JpZ2luOiBcIipcIiB9XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGZpbGxEZWZhdWx0SW5wdXRGaWVsZCxcclxuICBmaWxsQ2hlY2tib3gsXHJcbiAgZGVsYXlcclxufVxyXG4iLCIvKipcclxuICogTmF0aXZlIGlucHV0IGZpbGwgd2l0aCBSZWFjdC1jb21wYXRpYmxlIHZhbHVlIHNldHRlciAoZW5naW5lIGlucHV0LmpzIHBvcnQpLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWxsRGVmYXVsdElucHV0RmllbGQoXHJcbiAgZWw6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuICB2YWx1ZTogc3RyaW5nXHJcbik6IFByb21pc2U8dm9pZD4ge1xyXG4gIGlmICghZWwpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJbY2xlYW4tZmlsbF0gZWxlbWVudCBpcyBudWxsXCIpXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGVsLmZvY3VzKClcclxuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihlbClcclxuICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgXCJ2YWx1ZVwiKVxyXG4gIGlmIChkZXNjPy5zZXQpIHtcclxuICAgIGRlc2Muc2V0LmNhbGwoZWwsIHZhbHVlKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBlbC52YWx1ZSA9IHZhbHVlXHJcbiAgfVxyXG5cclxuICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KSlcclxuICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSkpXHJcbiAgZWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJibHVyXCIpKVxyXG4gIGVsLmRpc3BhdGNoRXZlbnQoXHJcbiAgICBuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIiwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCBrZXk6IFwiRW50ZXJcIiwga2V5Q29kZTogMTMgfSlcclxuICApXHJcbiAgZWwuZGlzcGF0Y2hFdmVudChcclxuICAgIG5ldyBLZXlib2FyZEV2ZW50KFwia2V5dXBcIiwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCBrZXk6IFwiRW50ZXJcIiwga2V5Q29kZTogMTMgfSlcclxuICApXHJcbiAgZWwuYmx1cigpXHJcbiAgZWwuZGlzcGF0Y2hFdmVudChuZXcgRm9jdXNFdmVudChcImZvY3VzXCIsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KSlcclxuICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIiwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pKVxyXG4gIGVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KSlcclxuICBlbC5kaXNwYXRjaEV2ZW50KG5ldyBGb2N1c0V2ZW50KFwiYmx1clwiLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSkpXHJcbn1cclxuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgaXNFeGFjdENob2ljZU1hdGNoIH0gZnJvbSBcIn5jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaFwiXHJcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3V0aWxzL2RlbGF5XCJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWxsQ2hlY2tib3goXHJcbiAgZWw6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkLFxyXG4gIGNoZWNrZWQgPSB0cnVlXHJcbik6IFByb21pc2U8dm9pZD4ge1xyXG4gIGlmICghZWwpIHJldHVyblxyXG4gIGVsLmZvY3VzKClcclxuICBpZiAoZWwuY2hlY2tlZCAhPT0gY2hlY2tlZCkge1xyXG4gICAgZWwuY2xpY2soKVxyXG4gICAgYXdhaXQgZGVsYXkoMzApXHJcbiAgfVxyXG4gIGVsLmNoZWNrZWQgPSBjaGVja2VkXHJcbiAgZWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwgeyBidWJibGVzOiB0cnVlIH0pKVxyXG4gIGNvbnN0IHJvbGUgPSBlbC5jbG9zZXN0KCdbcm9sZT1cImNoZWNrYm94XCJdJykgYXMgSFRNTEVsZW1lbnQgfCBudWxsXHJcbiAgaWYgKHJvbGUpIHJvbGUuY2xpY2soKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmlsbENoZWNrYm94ZXNCeUxhYmVscyhcclxuICBjaGVja2JveGVzOiBIVE1MSW5wdXRFbGVtZW50W10sXHJcbiAgd2FudHM6IHN0cmluZ1tdXHJcbik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgbGV0IGZpbGxlZCA9IDBcclxuICBmb3IgKGNvbnN0IHdhbnQgb2Ygd2FudHMpIHtcclxuICAgIGZvciAoY29uc3QgYm94IG9mIGNoZWNrYm94ZXMpIHtcclxuICAgICAgY29uc3QgbGFiZWwgPVxyXG4gICAgICAgIChib3guaWQgJiZcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7Q1NTLmVzY2FwZShib3guaWQpfVwiXWApXHJcbiAgICAgICAgICAgID8udGV4dENvbnRlbnQpIHx8XHJcbiAgICAgICAgYm94LmNsb3Nlc3QoXCJsYWJlbFwiKT8udGV4dENvbnRlbnQgfHxcclxuICAgICAgICBib3guZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSB8fFxyXG4gICAgICAgIGJveC52YWx1ZVxyXG4gICAgICBpZiAoaXNFeGFjdENob2ljZU1hdGNoKGxhYmVsLCB3YW50KSkge1xyXG4gICAgICAgIGF3YWl0IGZpbGxDaGVja2JveChib3gsIHRydWUpXHJcbiAgICAgICAgZmlsbGVkICs9IDFcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmaWxsZWRcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGxSYWRpb0J5TGFiZWwoXHJcbiAgcmFkaW9zOiBIVE1MSW5wdXRFbGVtZW50W10sXHJcbiAgd2FudDogc3RyaW5nXHJcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIGZvciAoY29uc3QgcmFkaW8gb2YgcmFkaW9zKSB7XHJcbiAgICBjb25zdCBsYWJlbCA9XHJcbiAgICAgIChyYWRpby5pZCAmJlxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7Q1NTLmVzY2FwZShyYWRpby5pZCl9XCJdYClcclxuICAgICAgICAgID8udGV4dENvbnRlbnQpIHx8XHJcbiAgICAgIHJhZGlvLmNsb3Nlc3QoXCJsYWJlbFwiKT8udGV4dENvbnRlbnQgfHxcclxuICAgICAgcmFkaW8uZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSB8fFxyXG4gICAgICByYWRpby52YWx1ZVxyXG4gICAgaWYgKGlzRXhhY3RDaG9pY2VNYXRjaChsYWJlbCwgd2FudCkpIHtcclxuICAgICAgaWYgKCFyYWRpby5jaGVja2VkKSB7XHJcbiAgICAgICAgcmFkaW8uY2xpY2soKVxyXG4gICAgICAgIHJhZGlvLmNoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgcmFkaW8uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwgeyBidWJibGVzOiB0cnVlIH0pKVxyXG4gICAgICAgIHJhZGlvLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2xpY2tcIiwgeyBidWJibGVzOiB0cnVlIH0pKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcbiIsIi8qKiBFeGFjdCAvIG5vcm1hbGl6ZWQgY2hvaWNlIG1hdGNoaW5nIChwb3J0IG9mIGVuZ2luZSBjaG9pY2UtbWF0Y2gpLlxyXG4gKiBPcmFjbGU6IGVuZ2luZS9oZWxwZXItYXBwL3NyYy9jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaC5qc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDaG9pY2VUZXh0KHZhbHVlOiB1bmtub3duKTogc3RyaW5nIHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIikgcmV0dXJuIFwiXCJcclxuICByZXR1cm4gU3RyaW5nKHZhbHVlKVxyXG4gICAgLm5vcm1hbGl6ZShcIk5GS0NcIilcclxuICAgIC5yZXBsYWNlKC9bXFx1MjAxOFxcdTIwMTldL2csIFwiJ1wiKVxyXG4gICAgLnJlcGxhY2UoL1tcXHUyMDFjXFx1MjAxZF0vZywgJ1wiJylcclxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRXhhY3RDaG9pY2VNYXRjaChvcHRpb25UZXh0OiB1bmtub3duLCB3YW50OiB1bmtub3duKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgdyA9IG5vcm1hbGl6ZUNob2ljZVRleHQod2FudClcclxuICByZXR1cm4gISF3ICYmIG5vcm1hbGl6ZUNob2ljZVRleHQob3B0aW9uVGV4dCkgPT09IHdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRFeGFjdENob2ljZTxUPihcclxuICBpdGVtczogVFtdLFxyXG4gIHdhbnQ6IHVua25vd24sXHJcbiAgZ2V0TGFiZWw6IChpdGVtOiBUKSA9PiB1bmtub3duLFxyXG4gIGdldFNlY29uZGFyeT86IChpdGVtOiBUKSA9PiB1bmtub3duXHJcbik6IFQgfCB1bmRlZmluZWQge1xyXG4gIGlmICghbm9ybWFsaXplQ2hvaWNlVGV4dCh3YW50KSkgcmV0dXJuIHVuZGVmaW5lZFxyXG4gIGNvbnN0IGJ5TGFiZWwgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGlzRXhhY3RDaG9pY2VNYXRjaChnZXRMYWJlbChpdGVtKSwgd2FudCkpXHJcbiAgaWYgKGJ5TGFiZWwubGVuZ3RoID09PSAxKSByZXR1cm4gYnlMYWJlbFswXVxyXG4gIGlmIChieUxhYmVsLmxlbmd0aCA+IDEgfHwgIWdldFNlY29uZGFyeSkgcmV0dXJuIHVuZGVmaW5lZFxyXG4gIGNvbnN0IGJ5U2VjID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PlxyXG4gICAgaXNFeGFjdENob2ljZU1hdGNoKGdldFNlY29uZGFyeShpdGVtKSwgd2FudClcclxuICApXHJcbiAgcmV0dXJuIGJ5U2VjLmxlbmd0aCA9PT0gMSA/IGJ5U2VjWzBdIDogdW5kZWZpbmVkXHJcbn1cclxuXHJcbi8qKiBTaW1wbGUgZnV6enkgc2NvcmUgMOKAkzEgKHRva2VuIG92ZXJsYXAgKyBzdWJzdHJpbmcpLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZnV6enlTY29yZShhOiBzdHJpbmcsIGI6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgY29uc3QgbmEgPSBub3JtYWxpemVDaG9pY2VUZXh0KGEpXHJcbiAgY29uc3QgbmIgPSBub3JtYWxpemVDaG9pY2VUZXh0KGIpXHJcbiAgaWYgKCFuYSB8fCAhbmIpIHJldHVybiAwXHJcbiAgaWYgKG5hID09PSBuYikgcmV0dXJuIDFcclxuICBpZiAobmIuaW5jbHVkZXMobmEpIHx8IG5hLmluY2x1ZGVzKG5iKSkgcmV0dXJuIDAuODVcclxuICBjb25zdCBhdCA9IG5ldyBTZXQobmEuc3BsaXQoXCIgXCIpLmZpbHRlcihCb29sZWFuKSlcclxuICBjb25zdCBidCA9IG5iLnNwbGl0KFwiIFwiKS5maWx0ZXIoQm9vbGVhbilcclxuICBpZiAoIWJ0Lmxlbmd0aCkgcmV0dXJuIDBcclxuICBsZXQgaGl0ID0gMFxyXG4gIGZvciAoY29uc3QgdCBvZiBidCkgaWYgKGF0Lmhhcyh0KSkgaGl0ICs9IDFcclxuICByZXR1cm4gaGl0IC8gTWF0aC5tYXgoYXQuc2l6ZSwgYnQubGVuZ3RoKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnV6enlGaW5kQmVzdDxUPihcclxuICBpdGVtczogVFtdLFxyXG4gIHdhbnQ6IHN0cmluZyxcclxuICBnZXRMYWJlbDogKGl0ZW06IFQpID0+IHN0cmluZyxcclxuICBtaW5TY29yZSA9IDAuNDVcclxuKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgbGV0IGJlc3Q6IFQgfCB1bmRlZmluZWRcclxuICBsZXQgYmVzdFNjb3JlID0gMFxyXG4gIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgY29uc3QgcyA9IGZ1enp5U2NvcmUod2FudCwgZ2V0TGFiZWwoaXRlbSkpXHJcbiAgICBpZiAocyA+IGJlc3RTY29yZSkge1xyXG4gICAgICBiZXN0U2NvcmUgPSBzXHJcbiAgICAgIGJlc3QgPSBpdGVtXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBiZXN0U2NvcmUgPj0gbWluU2NvcmUgPyBiZXN0IDogdW5kZWZpbmVkXHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlbGF5KG1zOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVNlcXVlbnRpYWxseShcclxuICBzdGVwczogQXJyYXk8KCgpID0+IFByb21pc2U8dm9pZD4gfCB2b2lkKSB8IHsgZnVuYzogKCkgPT4gUHJvbWlzZTx2b2lkPiB8IHZvaWQ7IGRlbGF5PzogbnVtYmVyIH0+LFxyXG4gIGRlZmF1bHREZWxheU1zID0gODBcclxuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgZm9yIChjb25zdCBzdGVwIG9mIHN0ZXBzKSB7XHJcbiAgICBpZiAodHlwZW9mIHN0ZXAgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICBhd2FpdCBzdGVwKClcclxuICAgICAgYXdhaXQgZGVsYXkoZGVmYXVsdERlbGF5TXMpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCBzdGVwLmZ1bmMoKVxyXG4gICAgICBhd2FpdCBkZWxheShzdGVwLmRlbGF5ID8/IGRlZmF1bHREZWxheU1zKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogQ2hlY2tib3ggLyByYWRpbyBsYWJlbCBoZWxwZXJzIChjbGVhbi1UUykuXHJcbiAqIE9yYWNsZTogZW5naW5lL2hlbHBlci1hcHAvc3JjL2NvbnRlbnRzL21ldGhvZHMvY2hlY2tib3gtbGFiZWwuanNcclxuICovXHJcblxyXG5mdW5jdGlvbiB0ZXh0T2YoZWw6IEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcclxuICByZXR1cm4gKGVsPy50ZXh0Q29udGVudCB8fCBcIlwiKS50cmltKClcclxufVxyXG5cclxuZnVuY3Rpb24gbGFiZWxGb3JJbnB1dChpbnB1dDogSFRNTElucHV0RWxlbWVudCk6IEhUTUxMYWJlbEVsZW1lbnQgfCBudWxsIHtcclxuICBpZiAoIWlucHV0LmlkIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIG51bGxcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7Q1NTLmVzY2FwZShpbnB1dC5pZCl9XCJdYClcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG4vKiogVmlzaWJsZSBsYWJlbCB0ZXh0IGZvciBhIGNoZWNrYm94L3JhZGlvLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFkaW9DaGVja1RleHQoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gIGNvbnN0IHBhcmVudCA9IGlucHV0LnBhcmVudEVsZW1lbnRcclxuICBjb25zdCBncmFuZCA9IHBhcmVudD8ucGFyZW50RWxlbWVudFxyXG4gIGNvbnN0IGNhbmRpZGF0ZXM6IEFycmF5PEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkPiA9IFtcclxuICAgIHR5cGVvZiBpbnB1dC5jbG9zZXN0ID09PSBcImZ1bmN0aW9uXCIgPyBpbnB1dC5jbG9zZXN0KFwibGFiZWxcIikgOiBudWxsLFxyXG4gICAgbGFiZWxGb3JJbnB1dChpbnB1dCksXHJcbiAgICBwYXJlbnQsXHJcbiAgICBwYXJlbnQ/Lm5leHRFbGVtZW50U2libGluZyxcclxuICAgIHBhcmVudD8ucHJldmlvdXNFbGVtZW50U2libGluZyxcclxuICAgIGdyYW5kXHJcbiAgXVxyXG4gIGZvciAoY29uc3QgZWwgb2YgY2FuZGlkYXRlcykge1xyXG4gICAgY29uc3QgdCA9IHRleHRPZihlbClcclxuICAgIGlmICh0KSByZXR1cm4gdFxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgaW5wdXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiKSB8fFxyXG4gICAgaW5wdXQudmFsdWUgfHxcclxuICAgIFwiXCJcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVSYWRpb0NoZWNrVGV4dCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCkudHJpbSgpLnJlcGxhY2UoXCIqXCIsIFwiXCIpXHJcbn1cclxuIiwiLyoqIENvcmUgZW51bXMgcG9ydGVkIGZyb20gSm9icmlnaHQgaGVscGVyIGB+Y29yZS9lbnVtc2AuICovXG5cbmV4cG9ydCBlbnVtIFJFTkRFUl9TVEVQIHtcbiAgSU5JVElBTCA9IDAsXG4gIEZJTExJTkcgPSAxLFxuICBGSUxMRUQgPSAyLFxuICBGQUlMRUQgPSAzXG59XG5cbmV4cG9ydCBlbnVtIE1FU1NBR0VfRVZFTlRTIHtcbiAgYXV0b0ZpbGxSZXN1bHRGcm9tSWZyYW1lID0gXCJhdXRvRmlsbFJlc3VsdEZyb21JZnJhbWVcIixcbiAgYXV0b0ZpbGxDb21wbGV0ZUZyb21JZnJhbWUgPSBcImF1dG9GaWxsQ29tcGxldGVGcm9tSWZyYW1lXCIsXG4gIGF1dG9GaWxsUmVsb2FkSWZyYW1lID0gXCJhdXRvRmlsbFJlbG9hZElmcmFtZVwiLFxuICB1cGRhdGVSZXN1bHRGcm9tSWZyYW1lID0gXCJ1cGRhdGVSZXN1bHRGcm9tSWZyYW1lXCIsXG4gIHNlbmRIdHRwU3RhdHVzSWZyYW1lID0gXCJzZW5kSHR0cFN0YXR1c0lmcmFtZVwiLFxuICBjb21wbGF0ZUFnZW50ID0gXCJjb21wbGF0ZUFnZW50XCIsXG4gIGFnZW50U3RhcnRGaWxsaW5nRmllbGRzID0gXCJhZ2VudFN0YXJ0RmlsbGluZ0ZpZWxkc1wiLFxuICBhZ2VudEdldFJlc3VtZUluZm8gPSBcImFnZW50R2V0UmVzdW1lSW5mb1wiLFxuICBhZ2VudFN1Ym1pdENsaWNrZWQgPSBcImFnZW50U3VibWl0Q2xpY2tlZFwiLFxuICBhZ2VudENoZWNrQ292ZXJMZXR0ZXIgPSBcImFnZW50Q2hlY2tDb3ZlckxldHRlclwiXG59XG5cbmV4cG9ydCBlbnVtIEZJRUxEX1RZUEUge1xuICBURVhUID0gXCJ0ZXh0XCIsXG4gIE5VTUJFUiA9IFwibnVtYmVyXCIsXG4gIENPVkVSX0xFVFRFUiA9IFwiY292ZXItbGV0dGVyXCIsXG4gIENIRUNLQk9YID0gXCJjaGVja2JveFwiLFxuICBTRUxFQ1QgPSBcInNlbGVjdFwiLFxuICBSQURJTyA9IFwicmFkaW9cIixcbiAgU0VBUkNIID0gXCJzZWFyY2hcIixcbiAgU0VMRUNUX09SSUdJTkFMID0gXCJzZWxlY3Qtb3JpZ2luYWxcIixcbiAgTVVMVElfU0VMRUNUID0gXCJtdWx0aS1zZWxlY3RcIixcbiAgTElTVEJPWCA9IFwibGlzdGJveFwiLFxuICBFTVBMT1lNRU5UID0gXCJlbXBsb3ltZW50XCIsXG4gIEVEVUNBVElPTiA9IFwiZWR1Y2F0aW9uXCIsXG4gIERST1BET1dOID0gXCJkcm9wZG93blwiLFxuICBEQVRFID0gXCJkYXRlXCIsXG4gIFJBRElPR1JPVVAgPSBcInJhZGlvLWdyb3VwXCIsXG4gIEJBTUJPT0hSX1NQRUNJQUwgPSBcImJhbWJvb2hyLXNwZWNpYWxcIixcbiAgU0VDVElPTiA9IFwic2VjdGlvblwiLFxuICBBU0hCWV9TRUFSQ0ggPSBcImFzaGJ5LXNlYXJjaFwiXG59XG5cbmV4cG9ydCBlbnVtIEFQUExJQ0FUSU9OX1NUQVRVUyB7XG4gIFJVTk5JTkcgPSAwLFxuICBTVUNDRVNTID0gMSxcbiAgRkFJTEVEID0gMlxufVxuXG5leHBvcnQgY29uc3QgTUlNRV9UWVBFID0ge1xuICBwZGY6IFwiYXBwbGljYXRpb24vcGRmXCIsXG4gIGRvYzogXCJhcHBsaWNhdGlvbi9tc3dvcmRcIixcbiAgZG9jeDogXCJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudFwiXG59IGFzIGNvbnN0XG4iLCJpbXBvcnQgeyBzZW5kVG9CYWNrZ3JvdW5kIGFzIHBsYXNtb2hxU2VuZFRvQmFja2dyb3VuZCB9IGZyb20gXCJAcGxhc21vaHEvbWVzc2FnaW5nXCJcclxuXHJcbmltcG9ydCB0eXBlIHsgRGlzY292ZXJlZEZpZWxkIH0gZnJvbSBcIn5jb250ZW50cy9jcmF3bGVyL3R5cGVzXCJcclxuXHJcbi8qKiBMb29zZSBtZXNzYWdpbmcgd3JhcHBlciDigJQgZXh0ZW5zaW9uIEJHIGhhbmRsZXJzIGFyZSBub3QgdHlwZWQgaW4gdGhpcyBwYWNrYWdlLiAqL1xyXG5hc3luYyBmdW5jdGlvbiBzZW5kVG9CYWNrZ3JvdW5kKG1zZzoge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIGJvZHk/OiB1bmtub3duXHJcbn0pOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiBwbGFzbW9ocVNlbmRUb0JhY2tncm91bmQobXNnIGFzIG5ldmVyKVxyXG59XHJcblxyXG4vKipcclxuICogQ2xlYW4tVFMgYW5zd2VyIGhlbHBlcnMgKGV4dGVuc2lvbi1vd25lZCkuXHJcbiAqIFBhcmNlbCByZWZlcmVuY2U6IGVuZ2luZS9oZWxwZXItYXBwL3NyYy9jb250ZW50cy9tZXRob2RzL2Fuc3dlci5qc1xyXG4gKi9cclxuXHJcbmV4cG9ydCB0eXBlIEZpbGxBbnN3ZXIgPSB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9XHJcblxyXG5jb25zdCBOT05fQUxOVU1fRVhDRVBUX0NKSyA9XHJcbiAgL1teYS16QS1aMC05XFxzXFx1MzA0MC1cXHUzMGZmXFx1MzQwMC1cXHU0ZGJmXFx1NGUwMC1cXHU5ZmZmXFx1ZjkwMC1cXHVmYWZmXFx1YWMwMC1cXHVkN2FmXS9nXHJcblxyXG4vKiogU3RyaXAgcHVuY3R1YXRpb24gKGtlZXAgQ0pLKSDigJQgb3JhY2xlIGByZW1vdmVTcGVjaWFsQ2hhcmFjdGVyc2AuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoTk9OX0FMTlVNX0VYQ0VQVF9DSkssIFwiXCIpXHJcbn1cclxuXHJcbi8qKiBMYWJlbCBlcXVhbGl0eSBhZnRlciBzdHJpcHBpbmcgcHVuY3R1YXRpb24gLyBhc3Rlcmlza3MgLyB3aGl0ZXNwYWNlLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNNYXRjaGVkKGE6IHVua25vd24sIGI6IHVua25vd24pOiBib29sZWFuIHtcclxuICBpZiAoIWEgfHwgIWIgfHwgdHlwZW9mIGEgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGIgIT09IFwic3RyaW5nXCIpIHJldHVybiBmYWxzZVxyXG4gIGNvbnN0IGxlZnQgPSByZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyhhKVxyXG4gICAgLnJlcGxhY2UoL1xccypcXCpcXHMqL2csIFwiXCIpXHJcbiAgICAucmVwbGFjZSgvXFxzKy9nLCBcIiBcIilcclxuICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAudHJpbSgpXHJcbiAgY29uc3QgcmlnaHQgPSByZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyhiKVxyXG4gICAgLnJlcGxhY2UoL1xccypcXCpcXHMqL2csIFwiXCIpXHJcbiAgICAucmVwbGFjZSgvXFxzKy9nLCBcIiBcIilcclxuICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAudHJpbSgpXHJcbiAgcmV0dXJuICEhbGVmdCAmJiAhIXJpZ2h0ICYmIGxlZnQgPT09IHJpZ2h0XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVBcnJheTxUPih2YWx1ZTogVCB8IFRbXSk6IFRbXSB7XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdXHJcbn1cclxuXHJcbi8qKiBQYXJzZSBgWVlZWS1NTS1ERGAgKG9yIC8gLikgaW50byB5ZWFyIC8gc2hvcnQgbW9udGggLyBkYXkuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGVQYXJ0cyhyYXc6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpOiB7XHJcbiAgeWVhcjogc3RyaW5nXHJcbiAgbW9udGg6IHN0cmluZ1xyXG4gIGRheTogc3RyaW5nXHJcbn0ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIXJhdyB8fCB0eXBlb2YgcmF3ICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHJldHVybiB7IHllYXI6IFwiXCIsIG1vbnRoOiBcIlwiLCBkYXk6IFwiXCIgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IHJhdy5yZXBsYWNlKC9bLy5dL2csIFwiLVwiKS50cmltKClcclxuICAgIGNvbnN0IHBhcnRzID0gbm9ybWFsaXplZC5zcGxpdChcIi1cIilcclxuICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSByZXR1cm4geyB5ZWFyOiBcIlwiLCBtb250aDogXCJcIiwgZGF5OiBcIlwiIH1cclxuICAgIGNvbnN0IFt5ZWFyLCBtb250aE51bSwgZGF5XSA9IHBhcnRzXHJcbiAgICBjb25zdCBNT05USFMgPSBbXHJcbiAgICAgIFwiSmFuXCIsXHJcbiAgICAgIFwiRmViXCIsXHJcbiAgICAgIFwiTWFyXCIsXHJcbiAgICAgIFwiQXByXCIsXHJcbiAgICAgIFwiTWF5XCIsXHJcbiAgICAgIFwiSnVuXCIsXHJcbiAgICAgIFwiSnVsXCIsXHJcbiAgICAgIFwiQXVnXCIsXHJcbiAgICAgIFwiU2VwXCIsXHJcbiAgICAgIFwiT2N0XCIsXHJcbiAgICAgIFwiTm92XCIsXHJcbiAgICAgIFwiRGVjXCJcclxuICAgIF1cclxuICAgIGNvbnN0IG1vbnRoSW5kZXggPSBOdW1iZXIobW9udGhOdW0pIC0gMVxyXG4gICAgY29uc3QgbW9udGggPVxyXG4gICAgICBtb250aEluZGV4ID49IDAgJiYgbW9udGhJbmRleCA8IDEyID8gTU9OVEhTW21vbnRoSW5kZXhdIDogXCJcIlxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeWVhcjogeWVhciB8fCBcIlwiLFxyXG4gICAgICBtb250aCxcclxuICAgICAgZGF5OiBkYXkgPyBkYXkucmVwbGFjZSgvXjAvLCBcIlwiKSA6IFwiXCJcclxuICAgIH1cclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiB7IHllYXI6IFwiXCIsIG1vbnRoOiBcIlwiLCBkYXk6IFwiXCIgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFzayBiYWNrZ3JvdW5kIGdldEdwdFJlc3VsdHMgZm9yIGFuc3dlcnMgbWFwcGVkIHRvIGRpc2NvdmVyZWQgbGFiZWxzLlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRm9ybUFuc3dlcnMoXHJcbiAgZmllbGRzOiBEaXNjb3ZlcmVkRmllbGRbXVxyXG4pOiBQcm9taXNlPEZpbGxBbnN3ZXJbXT4ge1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gZmllbGRzLm1hcCgoZikgPT4gKHtcclxuICAgIGxhYmVsOiBmLmxhYmVsLFxyXG4gICAgdHlwZTogZi50eXBlLFxyXG4gICAgb3B0aW9uczogZi5vcHRpb25zIHx8IFtdXHJcbiAgfSkpXHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRUb0JhY2tncm91bmQoe1xyXG4gICAgbmFtZTogXCJnZXRHcHRSZXN1bHRzXCIsXHJcbiAgICBib2R5OiB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGVsZW1lbnRzLFxyXG4gICAgICAgIHBhcnNlcjogXCJpbnRlcm5hbFwiLFxyXG4gICAgICAgIHNvdXJjZTogXCJjbGVhblRzXCIsXHJcbiAgICAgICAgdXJsOiB0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgPyBsb2NhdGlvbi5ocmVmIDogXCJcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgbGlzdCA9IHJlcz8uZGF0YT8uZmlsbF9kYXRhX2xpc3RcclxuICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHJldHVybiBbXVxyXG4gIHJldHVybiBsaXN0XHJcbiAgICAubWFwKChyb3c6IHsgbmFtZT86IHN0cmluZzsgdmFsdWU/OiB1bmtub3duIH0pID0+ICh7XHJcbiAgICAgIG5hbWU6IFN0cmluZyhyb3c/Lm5hbWUgfHwgXCJcIiksXHJcbiAgICAgIHZhbHVlOiBBcnJheS5pc0FycmF5KHJvdz8udmFsdWUpXHJcbiAgICAgICAgPyBTdHJpbmcocm93LnZhbHVlWzBdID8/IFwiXCIpXHJcbiAgICAgICAgOiBTdHJpbmcocm93Py52YWx1ZSA/PyBcIlwiKVxyXG4gICAgfSkpXHJcbiAgICAuZmlsdGVyKChyOiBGaWxsQW5zd2VyKSA9PiByLm5hbWUgJiYgci52YWx1ZSlcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUmVzdW1lRmlsZSgpOiBQcm9taXNlPHtcclxuICBmaWxlOiBGaWxlXHJcbiAgZmlsZU5hbWU6IHN0cmluZ1xyXG59IHwgbnVsbD4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRUb0JhY2tncm91bmQoe1xyXG4gICAgbmFtZTogXCJnZXRSZXN1bWVCbG9iXCIsXHJcbiAgICBib2R5OiB7fVxyXG4gIH0pXHJcbiAgaWYgKCFyZXM/Lm9rIHx8ICFyZXMuYmFzZTY0VVJMKSByZXR1cm4gbnVsbFxyXG4gIGNvbnN0IGZpbGUgPSBhd2FpdCBkYXRhVXJsVG9GaWxlKFxyXG4gICAgcmVzLmJhc2U2NFVSTCxcclxuICAgIHJlcy5maWxlTmFtZSB8fCBgcmVzdW1lLiR7cmVzLmV4dGVuc2lvbiB8fCBcInBkZlwifWAsXHJcbiAgICByZXMubWltZVR5cGVcclxuICApXHJcbiAgcmV0dXJuIHsgZmlsZSwgZmlsZU5hbWU6IGZpbGUubmFtZSB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaENvdmVyTGV0dGVyRmlsZSgpOiBQcm9taXNlPHtcclxuICBmaWxlOiBGaWxlXHJcbiAgZmlsZU5hbWU6IHN0cmluZ1xyXG59IHwgbnVsbD4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRUb0JhY2tncm91bmQoe1xyXG4gICAgbmFtZTogXCJnZXRDb3ZlckxldHRlckJsb2JcIixcclxuICAgIGJvZHk6IHt9XHJcbiAgfSlcclxuICBpZiAoIXJlcz8ub2sgfHwgIXJlcy5iYXNlNjRVUkwpIHJldHVybiBudWxsXHJcbiAgY29uc3QgZmlsZSA9IGF3YWl0IGRhdGFVcmxUb0ZpbGUoXHJcbiAgICByZXMuYmFzZTY0VVJMLFxyXG4gICAgcmVzLmZpbGVOYW1lIHx8IGBjb3Zlci1sZXR0ZXIuJHtyZXMuZXh0ZW5zaW9uIHx8IFwicGRmXCJ9YCxcclxuICAgIHJlcy5taW1lVHlwZVxyXG4gIClcclxuICByZXR1cm4geyBmaWxlLCBmaWxlTmFtZTogZmlsZS5uYW1lIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGF0YVVybFRvRmlsZShcclxuICBkYXRhVXJsOiBzdHJpbmcsXHJcbiAgZmlsZU5hbWU6IHN0cmluZyxcclxuICBtaW1lSGludD86IHN0cmluZ1xyXG4pOiBQcm9taXNlPEZpbGU+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChkYXRhVXJsKVxyXG4gIGNvbnN0IGJsb2IgPSBhd2FpdCByZXMuYmxvYigpXHJcbiAgcmV0dXJuIG5ldyBGaWxlKFtibG9iXSwgZmlsZU5hbWUsIHtcclxuICAgIHR5cGU6IG1pbWVIaW50IHx8IGJsb2IudHlwZSB8fCBcImFwcGxpY2F0aW9uL3BkZlwiXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFuc3dlck1hcChhbnN3ZXJzOiBGaWxsQW5zd2VyW10pOiBNYXA8c3RyaW5nLCBzdHJpbmc+IHtcclxuICBjb25zdCBtID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxyXG4gIGZvciAoY29uc3QgYSBvZiBhbnN3ZXJzKSB7XHJcbiAgICBtLnNldChhLm5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCksIGEudmFsdWUpXHJcbiAgICBtLnNldChhLm5hbWUucmVwbGFjZSgvXFxzKlxcKitcXHMqL2csIFwiIFwiKS50cmltKCkudG9Mb3dlckNhc2UoKSwgYS52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvb2t1cEZpZWxkQW5zd2VyKFxyXG4gIG1hcDogTWFwPHN0cmluZywgc3RyaW5nPixcclxuICBsYWJlbDogc3RyaW5nXHJcbik6IHN0cmluZyB8IG51bGwge1xyXG4gIGNvbnN0IGtleSA9IGxhYmVsLnJlcGxhY2UoL1xccypcXCorXFxzKi9nLCBcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKClcclxuICByZXR1cm4gbWFwLmdldChrZXkpIHx8IG1hcC5nZXQobGFiZWwudHJpbSgpLnRvTG93ZXJDYXNlKCkpIHx8IG51bGxcclxufVxyXG4iLCIvKipcbiAqIFBhcmNlbCBtb2R1bGUgaWQ6IDkyR3lCXG4gKiBSZXNvbHZlZCBwYXRoOiBAcGxhc21vaHEvbWVzc2FnaW5nLmpzXG4gKiBEZXBlbmRlbmNpZXM6XG4gKiAgIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMgLT4gY0hVYmwgID0+ICBAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXG4gKiAgIG5hbm9pZCAtPiBnMlFwUiAgPT4gIG5hbm9pZC5qc1xuICpcbiAqIG5wbS1iYWNrZWQgKEBwbGFzbW9ocS9tZXNzYWdpbmcpLiBHZW5lcmF0ZWQgYnkgc2NyaXB0cy9yZXBsYWNlLXJlbWFpbmluZy12ZW5kb3JzLXdpdGgtbnBtLm1qcyDigJQgZG8gbm90IGhhbmQtZWRpdC5cbiAqL1xuXG52YXIgaGVscGVycyA9IGUoXCJAcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzXCIpXG5oZWxwZXJzLmRlZmluZUludGVyb3BGbGFnKHIpXG5cbnZhciBfX2pyUmVxID0gZVxuXG52YXIgX19tb2QgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgX19janNNb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH1cbiAgdmFyIG1vZHVsZSA9IF9fY2pzTW9kdWxlXG4gIHZhciBleHBvcnRzID0gX19janNNb2R1bGUuZXhwb3J0c1xuO3ZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG5cbi8vIHNjcmlwdHMvX3JlbWFpbmluZy12ZW5kb3ItdG1wL2VudHJ5LTkyR3lCLm1qc1xudmFyIGVudHJ5XzkyR3lCX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KGVudHJ5XzkyR3lCX2V4cG9ydHMsIHtcbiAgZGVmYXVsdDogKCkgPT4gZW50cnlfOTJHeUJfZGVmYXVsdCxcbiAgcmVsYXk6ICgpID0+IEUsXG4gIHJlbGF5TWVzc2FnZTogKCkgPT4gTSxcbiAgc2VuZFRvQWN0aXZlQ29udGVudFNjcmlwdDogKCkgPT4gaCxcbiAgc2VuZFRvQmFja2dyb3VuZDogKCkgPT4gcCxcbiAgc2VuZFRvQmFja2dyb3VuZFZpYVJlbGF5OiAoKSA9PiB1LFxuICBzZW5kVG9Db250ZW50U2NyaXB0OiAoKSA9PiB4LFxuICBzZW5kVmlhUmVsYXk6ICgpID0+IFNcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoZW50cnlfOTJHeUJfZXhwb3J0cyk7XG5cbi8vIG5vZGVfbW9kdWxlcy9AcGxhc21vaHEvbWVzc2FnaW5nL2Rpc3QvaW5kZXguanNcbnZhciBkaXN0X2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KGRpc3RfZXhwb3J0cywge1xuICByZWxheTogKCkgPT4gRSxcbiAgcmVsYXlNZXNzYWdlOiAoKSA9PiBNLFxuICBzZW5kVG9BY3RpdmVDb250ZW50U2NyaXB0OiAoKSA9PiBoLFxuICBzZW5kVG9CYWNrZ3JvdW5kOiAoKSA9PiBwLFxuICBzZW5kVG9CYWNrZ3JvdW5kVmlhUmVsYXk6ICgpID0+IHUsXG4gIHNlbmRUb0NvbnRlbnRTY3JpcHQ6ICgpID0+IHgsXG4gIHNlbmRWaWFSZWxheTogKCkgPT4gU1xufSk7XG52YXIgaW1wb3J0X25hbm9pZCA9IF9fanJSZXEoXCJuYW5vaWRcIik7XG52YXIgbCA9IGdsb2JhbFRoaXMuYnJvd3Nlcj8udGFicyB8fCBnbG9iYWxUaGlzLmNocm9tZT8udGFicztcbnZhciBkID0gKCkgPT4ge1xuICBsZXQgZSA9IGdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZSB8fCBnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZTtcbiAgaWYgKCFlKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHRlbnNpb24gcnVudGltZSBpcyBub3QgYXZhaWxhYmxlXCIpO1xuICByZXR1cm4gZTtcbn07XG52YXIgaSA9ICgpID0+IHtcbiAgaWYgKCFsKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHRlbnNpb24gdGFicyBBUEkgaXMgbm90IGF2YWlsYWJsZVwiKTtcbiAgcmV0dXJuIGw7XG59O1xudmFyIG0gPSBhc3luYyAoKSA9PiB7XG4gIGxldCBlID0gaSgpLCBbYV0gPSBhd2FpdCBlLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xuICByZXR1cm4gYTtcbn07XG52YXIgZyA9IChlLCBhKSA9PiAhYS5fX2ludGVybmFsICYmIGUuc291cmNlID09PSBnbG9iYWxUaGlzLndpbmRvdyAmJiBlLmRhdGEubmFtZSA9PT0gYS5uYW1lICYmIChhLnJlbGF5SWQgPT09IHZvaWQgMCB8fCBlLmRhdGEucmVsYXlJZCA9PT0gYS5yZWxheUlkKTtcbnZhciBjID0gKGUsIGEsIG4gPSBnbG9iYWxUaGlzLndpbmRvdykgPT4ge1xuICBsZXQgciA9IGFzeW5jIChzKSA9PiB7XG4gICAgaWYgKGcocywgZSkgJiYgIXMuZGF0YS5yZWxheWVkKSB7XG4gICAgICBsZXQgbyA9IHsgbmFtZTogZS5uYW1lLCByZWxheUlkOiBlLnJlbGF5SWQsIGJvZHk6IHMuZGF0YS5ib2R5IH0sIHQgPSBhd2FpdCBhPy4obyk7XG4gICAgICBuLnBvc3RNZXNzYWdlKHsgbmFtZTogZS5uYW1lLCByZWxheUlkOiBlLnJlbGF5SWQsIGluc3RhbmNlSWQ6IHMuZGF0YS5pbnN0YW5jZUlkLCBib2R5OiB0LCByZWxheWVkOiB0cnVlIH0sIHsgdGFyZ2V0T3JpZ2luOiBlLnRhcmdldE9yaWdpbiB8fCBcIi9cIiB9KTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBuLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHIpLCAoKSA9PiBuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHIpO1xufTtcbnZhciB5ID0gKGUsIGEgPSBnbG9iYWxUaGlzLndpbmRvdykgPT4gbmV3IFByb21pc2UoKG4sIHIpID0+IHtcbiAgbGV0IHMgPSAoMCwgaW1wb3J0X25hbm9pZC5uYW5vaWQpKCksIG8gPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIGEuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKHQpID0+IHtcbiAgICBnKHQsIGUpICYmIHQuZGF0YS5yZWxheWVkICYmIHQuZGF0YS5pbnN0YW5jZUlkID09PSBzICYmIChuKHQuZGF0YS5ib2R5KSwgby5hYm9ydCgpKTtcbiAgfSwgeyBzaWduYWw6IG8uc2lnbmFsIH0pLCBhLnBvc3RNZXNzYWdlKHsgLi4uZSwgaW5zdGFuY2VJZDogcyB9LCB7IHRhcmdldE9yaWdpbjogZS50YXJnZXRPcmlnaW4gfHwgXCIvXCIgfSk7XG59KTtcbnZhciBwID0gYXN5bmMgKGUpID0+IGQoKS5zZW5kTWVzc2FnZShlLmV4dGVuc2lvbklkID8/IG51bGwsIGUpO1xudmFyIHggPSBhc3luYyAoZSkgPT4ge1xuICBsZXQgYSA9IHR5cGVvZiBlLnRhYklkID09IFwibnVtYmVyXCIgPyBlLnRhYklkIDogKGF3YWl0IG0oKSk/LmlkO1xuICBpZiAoIWEpIHRocm93IG5ldyBFcnJvcihcIk5vIGFjdGl2ZSB0YWIgZm91bmQgdG8gc2VuZCBtZXNzYWdlIHRvLlwiKTtcbiAgcmV0dXJuIGkoKS5zZW5kTWVzc2FnZShhLCBlKTtcbn07XG52YXIgaCA9IHg7XG52YXIgTSA9IChlKSA9PiBjKGUsIHApO1xudmFyIEUgPSBNO1xudmFyIHUgPSB5O1xudmFyIFMgPSB1O1xuXG4vLyBzY3JpcHRzL19yZW1haW5pbmctdmVuZG9yLXRtcC9lbnRyeS05Mkd5Qi5tanNcbnZhciBlbnRyeV85Mkd5Ql9kZWZhdWx0ID0gdm9pZCAwICE9PSB2b2lkIDAgPyB2b2lkIDAgOiBkaXN0X2V4cG9ydHM7XG5cbiAgdmFyIG91dCA9IG1vZHVsZS5leHBvcnRzXG4gIGlmIChvdXQgJiYgdHlwZW9mIG91dCA9PT0gXCJvYmplY3RcIiAmJiBvdXQuX19lc01vZHVsZSAmJiBcImRlZmF1bHRcIiBpbiBvdXQpIHtcbiAgICB2YXIgbmFtZXMgPSBPYmplY3Qua2V5cyhvdXQpLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgICAgcmV0dXJuIGsgIT09IFwiZGVmYXVsdFwiICYmIGsgIT09IFwiX19lc01vZHVsZVwiXG4gICAgfSlcbiAgICBpZiAobmFtZXMubGVuZ3RoKSByZXR1cm4gb3V0XG4gICAgcmV0dXJuIG91dC5kZWZhdWx0XG4gIH1cbiAgcmV0dXJuIG91dFxufSkoKVxuXG5pZiAodHlwZW9mIF9fbW9kID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgaGVscGVycy5leHBvcnQociwgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fbW9kIH0pXG4gIHIuZGVmYXVsdCA9IF9fbW9kXG59IGVsc2UgaWYgKF9fbW9kICYmIHR5cGVvZiBfX21vZCA9PT0gXCJvYmplY3RcIikge1xuICBmb3IgKHZhciBfX2sgaW4gX19tb2QpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fbW9kLCBfX2spICYmIF9fayAhPT0gXCJfX2VzTW9kdWxlXCIpIHtcbiAgICAgIDsoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBoZWxwZXJzLmV4cG9ydChyLCBrZXksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fbW9kW2tleV0gfSlcbiAgICAgICAgcltrZXldID0gX19tb2Rba2V5XVxuICAgICAgfSkoX19rKVxuICAgIH1cbiAgfVxuICByLmRlZmF1bHQgPSBfX21vZC5kZWZhdWx0ICE9PSB1bmRlZmluZWQgPyBfX21vZC5kZWZhdWx0IDogX19tb2RcbiAgaWYgKF9fbW9kLmRlZmF1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIGhlbHBlcnMuZXhwb3J0KHIsIFwiZGVmYXVsdFwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfX21vZC5kZWZhdWx0IH0pXG4gIH1cbn0gZWxzZSB7XG4gIHIuZGVmYXVsdCA9IF9fbW9kXG4gIGhlbHBlcnMuZXhwb3J0KHIsIFwiZGVmYXVsdFwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfX21vZCB9KVxufVxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6Im5hdGl2ZS1kb20uOGQ3MTRhMjkuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);