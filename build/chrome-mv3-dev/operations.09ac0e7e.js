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
})({"sjFQp":[function(require,module,exports) {
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
    "entryFilePath": "C:\\Users\\Administrator\\jobright-fork\\extension\\src\\contents\\sites\\tiktok\\operations.js",
    "bundleId": "a0f801a809ac0e7e",
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
var j = z(require("b496f0c8446176c1"));
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

},{"b496f0c8446176c1":"iZhE1"}],"iZhE1":[function(require,module,exports) {
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

},{}],"drEds":[function(require,module,exports) {
/**
 * Parcel module id: 3hmvY
 * Resolved path: src/contents/sites/tiktok/operations.js
 * Dependencies:
 *   ../../methods/choice-match -> 6mkI4  =>  src/contents/methods/choice-match.js
 *   ./date-utils -> bDh1B  =>  src/contents/sites/tiktok/date-utils.js
 *   ./rules -> 52Ram  =>  src/contents/sites/tiktok/rules.js
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   ~contents/crawler/utils/input -> iPIvT  =>  src/contents/crawler/utils/input.js
 *   ~contents/methods/answer -> 7T5eW  =>  src/contents/methods/answer.js
 *   ~contents/methods/dom -> hA5Qa  =>  src/contents/methods/dom.js
 *   ~contents/methods/observer -> eTzUx  =>  src/contents/methods/observer.js
 *   ~core/xpath -> agE4u  =>  src/core/xpath.js
 *   ~utils/delay -> am614  =>  src/utils/delay.js
 */ var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r), n.export(r, "preFillForm", ()=>h), n.export(r, "clickAddExperienceSection", ()=>g), n.export(r, "clickAddAllFormSections", ()=>b), n.export(r, "countEducationSections", ()=>C), n.export(r, "countEmploymentSections", ()=>A), n.export(r, "addEducationSection", ()=>F), n.export(r, "addEmploymentSection", ()=>I), n.export(r, "fillInputTextField", ()=>B), n.export(r, "fillSelectField", ()=>X), n.export(r, "fillCheckboxField", ()=>J), n.export(r, "fillRadioGroupFiled", ()=>Q), n.export(r, "uploadResume", ()=>Z), n.export(r, "fillOthersConditionalFields", ()=>en), n.export(r, "removeResume", ()=>eo);
var o = e("../../methods/choice-match"), i = e("~contents/crawler/utils/input"), a = e("~contents/methods/answer"), l = e("~contents/methods/dom"), s = e("~contents/methods/observer"), u = e("~core/xpath"), c = e("~utils/delay"), d = e("./date-utils"), f = e("./rules");
let p = [
    "education"
], m = [
    [
        "work",
        "experience"
    ]
];
async function h() {
    await b(), await (0, c.delay)(200);
}
async function g() {
    let e1 = y(), t = e1.find((e1)=>w(e1).includes("work experience"));
    t && await x(t);
}
async function b() {
    let e1 = y();
    if (console.debug(`[tiktok][prefill] discovered ${e1.length} empty section Add button(s)`), 0 !== e1.length) for (let t of e1)E(t) && await x(t);
}
function y() {
    let e1 = [
        ".createFormSection-addBtn",
        '[class*="apply-form-array-card-add"]'
    ], t = e1.flatMap((e1)=>Array.from(document.querySelectorAll(e1)));
    return Array.from(new Set(t)).filter((e1)=>(e1.textContent || "").trim().toLowerCase().includes("add"));
}
function v(e1) {
    return e1.closest('[class*="applyFormModuleWrapper__"]') || e1.closest('[class*="createFormSection__"]');
}
function w(e1) {
    let t = v(e1), r1 = t?.querySelector(".applyFormModuleWrapper-text")?.textContent || t?.querySelector(".applyFormModuleWrapper-title")?.textContent || t?.querySelector(".createFormSection-title")?.textContent || t?.querySelector(".createFormSection-text")?.textContent || "";
    return r1.trim().toLowerCase().replace(/[-_]+/g, " ").replace(/\s+/g, " ");
}
function S(e1) {
    let t = w(e1);
    return !!(t.includes("internship") && t.includes("experience") || t.includes("project") && t.includes("experience") || t.includes("work samples") || t.includes("honors and awards"));
}
_c = S;
function E(e1) {
    let t = w(e1), r1 = [
        "work experience",
        "language skills",
        "self introduction",
        "sns"
    ];
    return !!(r1.some((e1)=>t === e1) || r1.some((e1)=>t.includes(e1))) || (S(e1), !1);
}
_c1 = E;
async function x(e1) {
    let t = v(e1), r1 = w(e1) || "unknown", n = t ? t.querySelectorAll("input, select, textarea").length : null, o = document.querySelectorAll("input, select, textarea").length;
    console.debug(`[tiktok][prefill] expanding "${r1}", section controls before=${n ?? "n/a"}`);
    try {
        e1.scrollIntoView({
            block: "center",
            behavior: "auto"
        });
    } catch  {}
    e1.click();
    let i = await (0, s.waitForCondition)(()=>{
        if (t && null !== n) {
            let e1 = t.querySelectorAll("input, select, textarea").length;
            return e1 > n;
        }
        return document.querySelectorAll("input, select, textarea").length > o;
    }, {
        timeout: 2e3,
        interval: 100,
        observeTarget: t || document.body
    });
    if (i) {
        let e1 = t ? t.querySelectorAll("input, select, textarea").length : document.querySelectorAll("input, select, textarea").length;
        console.debug(`[tiktok][prefill] "${r1}" rendered, controls after=${e1}`);
    } else console.warn(`[tiktok][prefill] "${r1}" did not render fields within 2000ms`);
}
function C() {
    return (0, f.getEducationRules)().length;
}
_c2 = C;
function A() {
    return (0, f.getExperienceRules)().length;
}
_c3 = A;
function k(e1) {
    let t = [
        '[class*="applyFormModuleWrapper__"]',
        '[class*="createFormSection__"]'
    ], r1 = Array.from(new Set(t.flatMap((e1)=>Array.from(document.querySelectorAll(e1)))));
    for (let t of e1){
        let e1 = r1.find((e1)=>{
            let r1 = e1.querySelector(".applyFormModuleWrapper-text")?.textContent || e1.querySelector(".applyFormModuleWrapper-title")?.textContent || e1.querySelector(".createFormSection-text")?.textContent || e1.querySelector(".createFormSection-title")?.textContent || "", n = (r1 || "").trim().toLowerCase();
            return t.every((e1)=>n.includes(e1));
        });
        if (e1) return e1;
    }
    return null;
}
function T(e1) {
    let t = e1.querySelector('[class*="apply-form-array-card-add"]');
    if (t) return t;
    let r1 = e1.querySelector(".formOperate-addBtn");
    if (r1) return r1;
    let n = e1.querySelector(".createFormSection-addBtn");
    if (n) return n;
    let o = Array.from(e1.querySelectorAll("button.ud__button")), i = o.find((e1)=>{
        let t = !!e1.querySelector('[data-icon="AddOutlined"]'), r1 = (e1.textContent || "").trim().toLowerCase();
        return t && "add" === r1;
    });
    return i || null;
}
_c4 = T;
async function F(e1) {
    if (e1 <= 0) return;
    let t = k([
        p
    ]);
    if (t) for(; C() < e1;){
        let e1 = T(t);
        if (!e1) return;
        await x(e1), await (0, c.delay)(200);
    }
}
_c5 = F;
async function I(e1) {
    if (e1 <= 0) return;
    let t = k(m);
    if (t) for(; A() < e1;){
        let e1 = T(t);
        if (!e1) return;
        await x(e1), await (0, c.delay)(200);
    }
}
_c6 = I;
let j = ".atsx-date-picker-period-month-panel", D = ".atsx-date-picker-period-month-panel-list", P = ".atsx-date-picker-period-month-panel-list-item";
function _() {
    let e1 = document.querySelectorAll(j);
    for (let t of e1){
        let e1 = t.getBoundingClientRect();
        if (e1.width > 0 && e1.height > 0) return t;
    }
    return e1[0] ?? null;
}
function L(e1, t) {
    let r1 = e1.querySelector(`${P}[data-cy="${t}"]`);
    if (!r1) return !1;
    r1.scrollIntoView({
        block: "center",
        behavior: "auto"
    });
    let n = e1.closest(".scrollbar-container") ?? e1;
    return n && n !== document.body && (n.scrollTop = Math.max(0, r1.offsetTop - n.clientHeight / 2)), r1.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0
    })), r1.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0,
        cancelable: !0
    })), r1.click(), !0;
}
_c7 = L;
async function R(e1, t) {
    let r1 = e1.closest(".atsx-date-picker-period-month");
    if (!r1) return !1;
    let n = null != t.start && "" !== String(t.start).trim(), o = null != t.end && "" !== String(t.end).trim();
    if (!n && !o) return !1;
    let i = (0, d.ensureTikTokFullMonth)(n ? t.start : null), a = t.end && "present" === String(t.end).trim().toLowerCase() ? "Present" : (0, d.ensureTikTokFullMonth)(o ? t.end ?? null : null), l = (0, d.parseTikTokYearMonthForDisplay)(i), s = o ? String(t.end ?? "").trim() : "", u = /^(?:19|20)\d{2}$/.test(s), f = "Present" === a ? {
        year: "Present",
        month: ""
    } : u ? {
        year: s,
        month: ""
    } : (0, d.parseTikTokYearMonthForDisplay)(a);
    H(r1), await (0, c.delay)(150);
    let p = Array.from(r1.querySelectorAll(".atsx-date-picker-period-month-label"));
    if (p.length < 2) return !1;
    let m = async (e1, t)=>{
        if (!e1) return !1;
        let r1 = _();
        if (!r1) return !1;
        let n = Array.from(r1.querySelectorAll(D));
        if (n.length < 2) return !1;
        let o = n[0], i = n[1];
        return !!L(o, e1) && (await (0, c.delay)(180), (!t || !!L(i, t)) && (await (0, c.delay)(180), !0));
    };
    if (n) {
        p[0].click(), await (0, c.delay)(350);
        let e1 = await m(l.year, l.month);
        if (!e1) return !1;
        await (0, c.delay)(150);
    }
    if (o) {
        if (p[1].click(), await (0, c.delay)(350), "Present" === a) {
            let e1 = _(), t = e1?.querySelector(`${P}[data-cy="present"]`), r1 = t ? null : Array.from(e1?.querySelectorAll(P) ?? []).find((e1)=>"Present" === (e1.textContent || "").trim()), n = t ?? r1;
            if (!n) return !1;
            n.scrollIntoView({
                block: "center",
                behavior: "auto"
            }), n.dispatchEvent(new MouseEvent("mousedown", {
                bubbles: !0,
                cancelable: !0
            })), n.dispatchEvent(new MouseEvent("mouseup", {
                bubbles: !0,
                cancelable: !0
            })), n.click();
        } else {
            let e1 = await m(f.year, f.month);
            if (!e1) return !1;
        }
        await (0, c.delay)(150);
    }
    return await z(), !0;
}
_c8 = R;
async function O(e1, t) {
    let r1 = (0, f.getTikTokUsdsDateRangeInputs)(e1);
    if (r1.length < 2) return !1;
    let [n, o] = r1, a = String(t.start || "").trim(), l = String(t.end || "").trim();
    return (!!a || !!l) && (a && await (0, i.fillDefaultInputField)(n, a), l && await (0, i.fillDefaultInputField)(o, l), await $(l ? o : n), !0);
}
_c9 = O;
function M(e1) {
    e1 && "function" == typeof e1.dispatchEvent && (e1.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: !0
    })), e1.dispatchEvent(new KeyboardEvent("keyup", {
        key: "Escape",
        bubbles: !0
    })));
}
_c10 = M;
function N() {
    let e1 = document.body || document.documentElement;
    e1 && (e1.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0
    })));
}
_c11 = N;
async function $(e1) {
    console.debug("[tiktok][date] closing USDS date picker after range write");
    try {
        e1.blur();
    } catch  {}
    let t = document.activeElement;
    try {
        t?.blur?.();
    } catch  {}
    let r1 = "undefined" == typeof window ? null : window;
    M(e1), M(t), M(document), M(r1), await (0, c.delay)(40), N(), await (0, c.delay)(40), M(document), M(r1), await (0, c.delay)(60), console.debug("[tiktok][date] USDS date picker close sequence completed");
}
async function B(e1, t) {
    if (!e1) return !1;
    if (e1 instanceof HTMLInputElement && "object" == typeof t && null !== t && !Array.isArray(t) && (void 0 !== t.start || void 0 !== t.end) && e1.classList.contains("atsx-date-picker-period-hidden-input")) return R(e1, t);
    if (e1 instanceof HTMLInputElement && "object" == typeof t && null !== t && !Array.isArray(t) && (void 0 !== t.start || void 0 !== t.end)) {
        let r1 = await O(e1, t);
        if (r1) return !0;
    }
    let r1 = "object" == typeof t ? t.start : t;
    return await (0, i.fillDefaultInputField)(e1, r1), await (0, c.delay)(50), !0;
}
_c12 = B;
function q(e1) {
    if (!e1) return !1;
    let t = window.getComputedStyle(e1);
    if ("none" === t.display || "hidden" === t.visibility) return !1;
    let r1 = e1.getBoundingClientRect();
    return r1.width > 0 && r1.height > 0;
}
function U(e1) {
    return (e1 || "").replace(/\s+/g, " ").trim().toLowerCase();
}
_c13 = U;
function H(e1) {
    try {
        e1.scrollIntoView({
            block: "center",
            behavior: "auto"
        });
    } catch  {}
}
_c14 = H;
function Y(e1) {
    H(e1), e1.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0,
        cancelable: !0
    })), e1.click();
}
_c15 = Y;
async function z() {
    document.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: !0
    })), document.dispatchEvent(new KeyboardEvent("keyup", {
        key: "Escape",
        bubbles: !0
    })), await (0, c.delay)(80);
}
function V(e1, t) {
    let r1 = U(t);
    return r1 && (0, o.findExactChoice)(e1, t, (e1)=>e1.textContent) || null;
}
_c16 = V;
async function W(e1) {
    H(e1), e1.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: !0,
        cancelable: !0
    })), e1.dispatchEvent(new MouseEvent("mouseup", {
        bubbles: !0,
        cancelable: !0
    })), e1.click(), await (0, c.delay)(120);
}
_c17 = W;
function G(e1) {
    let t = e1.closest(".ud__select"), r1 = t?.querySelector(".ud__select__dropdown");
    if (r1 && q(r1)) return r1;
    let n = e1.getBoundingClientRect(), o = Array.from(document.querySelectorAll(".ud__select__dropdown")).filter(q), i = null;
    for (let e1 of o){
        let t = e1.querySelectorAll(".ud__select__list__item");
        if (!t || 0 === t.length) continue;
        let r1 = e1.getBoundingClientRect(), o = (r1.left || 0) - (n.left || 0), a = (r1.top || 0) - (n.bottom || 0), l = Math.hypot(o, a), s = n.width > 0 ? Math.abs(r1.width - n.width) / n.width : 0, u = l + 200 * s;
        (!i || u < i.score) && (i = {
            el: e1,
            score: u
        });
    }
    return i?.el || null;
}
_c18 = G;
async function K(e1, t) {
    let r1 = G(e1);
    if (!r1) return !1;
    let n = Array.from(r1.querySelectorAll(".ud__select__list__item")).filter(q);
    if (0 === n.length) return !1;
    let o = V(n, t);
    return !!o && (await W(o), !0);
}
_c19 = K;
async function X(e1, t) {
    let r1 = Array.isArray(t) ? t.map((e1)=>String(e1)) : null == t ? [] : [
        String(t)
    ];
    if (e1.$input && 0 !== r1.length) {
        if (e1.$input instanceof HTMLSelectElement) {
            let t = e1.$input, n = r1[0]?.trim().toLowerCase();
            if (!n) return;
            let i = Array.from(t.options), a = (0, o.findExactChoice)(i, r1[0], (e1)=>e1.textContent, (e1)=>e1.value), l = a ? i.indexOf(a) : -1;
            l >= 0 && (t.focus(), t.selectedIndex = l, t.dispatchEvent(new Event("input", {
                bubbles: !0
            })), t.dispatchEvent(new Event("change", {
                bubbles: !0
            })), t.blur(), await (0, c.delay)(50));
            return;
        }
        if (e1.$input instanceof HTMLElement) {
            let t = e1.$input.closest?.(".ud__select");
            if (t) {
                let t = r1.map((e1)=>String(e1).trim()).filter(Boolean);
                if (0 === t.length) return;
                for (let r1 of (Y(e1.$input), await (0, c.delay)(200), t))await K(e1.$input, r1), await (0, c.delay)(120);
                await z();
                return;
            }
            let n = r1[0]?.trim();
            if (!n) return;
            let o = "combobox" === e1.$input.getAttribute("role") ? e1.$input : e1.$input.querySelector('[role="combobox"]'), i = e1.$input.querySelector("input.atsx-select-search__field") || o?.querySelector("input.atsx-select-search__field");
            o?.click(), await (0, c.delay)(150), i && (i.focus(), i.value = "", i.dispatchEvent(new Event("input", {
                bubbles: !0
            })), await (0, c.delay)(50), i.value = n, i.dispatchEvent(new Event("input", {
                bubbles: !0
            })), i.dispatchEvent(new Event("change", {
                bubbles: !0
            })), await (0, c.delay)(200));
            let a = o?.getAttribute("aria-controls") || "", l = (a ? document.getElementById(a) : null) || document.querySelector('[role="listbox"]');
            if (l) {
                let t = Array.from(l.querySelectorAll('[role="option"], li, div')).filter((e1)=>(e1.textContent || "").trim()), r1 = "phone country code" === U(e1.label), o = r1 ? t.find((e1)=>U(e1.textContent || "") === U(n)) || null : V(t, n) || t[0];
                r1 && console.debug(`[tiktok][phone] ATSX country-code exact match=${!!o} candidates=${t.length}`), o ? await W(o) : r1 && await z();
            }
            return;
        }
    }
}
_c20 = X;
async function J(e1, t) {
    let r1 = Array.isArray(t) ? t.map((e1)=>String(e1)) : null == t ? [] : [
        String(t)
    ];
    if (!e1.$checkboxs || 0 === e1.$checkboxs.length || 0 === r1.length) return;
    let n = r1.map((e1)=>e1.trim().toLowerCase()).filter(Boolean), i = n.some((e1)=>[
            "true",
            "yes",
            "y",
            "1"
        ].includes(e1)), a = n.some((e1)=>[
            "false",
            "no",
            "n",
            "0"
        ].includes(e1)), l = e1.$checkboxs[0];
    if (1 === e1.$checkboxs.length && i && !l.checked || 1 === e1.$checkboxs.length && a && l.checked) {
        l.click(), await (0, c.delay)(50);
        return;
    }
    let s = Array.from(e1.$checkboxs), u = new Set(n.map((e1)=>(0, o.findExactChoice)(s, e1, (e1)=>e1.closest("label")?.textContent || e1.value)).filter(Boolean));
    for (let e1 of s){
        let t = u.has(e1);
        t && !e1.checked && (e1.click(), await (0, c.delay)(50));
    }
}
_c21 = J;
async function Q(e1, t) {
    let r1 = Array.isArray(t) ? t.map((e1)=>String(e1)) : null == t ? [] : [
        String(t)
    ], n = r1[0]?.trim().toLowerCase();
    if (!n) return;
    let i = e1.$radioParent || e1.$label || document.body, a = (0, u.getOrderedNodesSafe)('.//input[@type="radio"]', i);
    for (let e1 of a){
        let t = document.querySelector(`label[for="${e1.id}"]`), r1 = (t?.textContent || e1.value || "").trim().toLowerCase(), i = (0, o.isExactChoiceMatch)(r1, n);
        if (i) {
            e1.checked || (e1.click(), await (0, c.delay)(50));
            return;
        }
    }
}
_c22 = Q;
async function Z(e1, t, r1) {
    let n = (0, u.getFirstOrderedNodeSafe)('.//input[@type="file" and (contains(@accept, "pdf") or contains(@accept, ".pdf") or not(@accept))]') || document.querySelector('input[type="file"]');
    n && await (0, l.uploadFiles)(n, await (0, a.fetchPdfAsBlob)(e1), t, r1, "Resume/CV");
}
_c23 = Z;
let ee = [
    "which social networking platform",
    "where else did you hear"
];
function et(e1) {
    let t = e1.querySelector(".ud-formily-item-label-content") || e1.querySelector(".ud-formily-item-label");
    return (t?.textContent || "").replace(/\*+\s*$/g, "").trim().replace(/\s+/g, " ");
}
function er(e1, t) {
    let r1 = U(t);
    if (r1) {
        for (let [t, n] of Object.entries(e1))if (U(t) === r1 || U(t).includes(r1) || r1.includes(U(t))) return n;
    }
}
async function en(e1) {
    if (!e1 || "object" != typeof e1) return;
    let t = await (0, s.waitForCondition)(()=>{
        let e1 = Array.from(document.querySelectorAll(".ud-formily-item"));
        return e1.some((e1)=>{
            let t = et(e1);
            return ee.some((e1)=>U(t).includes(e1));
        });
    }, {
        timeout: 2500,
        interval: 150,
        observeTarget: document.body
    });
    if (!t) return;
    await (0, c.delay)(200);
    let r1 = Array.from(document.querySelectorAll(".ud-formily-item"));
    for (let t of r1){
        let r1 = et(t), n = ee.some((e1)=>U(r1).includes(e1));
        if (!n) continue;
        let o = er(e1, r1);
        if (null == o) continue;
        let a = t.querySelector(".ud__select .ud__select__selector");
        if (a) {
            let e1 = Array.isArray(o) ? o.map((e1)=>String(e1).trim()).filter(Boolean) : [
                String(o).trim()
            ].filter(Boolean);
            if (0 === e1.length) continue;
            for (let t of (Y(a), await (0, c.delay)(200), e1))await K(a, t), await (0, c.delay)(120);
            await z();
            continue;
        }
        let l = t.querySelector("input.ud__native-input");
        if (l) {
            let e1 = Array.isArray(o) ? o[0] : o;
            if (null == e1 || "" === e1) continue;
            await (0, i.fillDefaultInputField)(l, String(e1)), await (0, c.delay)(80);
        }
    }
}
async function eo() {
    let e1 = Array.from(document.querySelectorAll(".uploadFile-loadedOperates .uploadFile-loadedOperate")).find((e1)=>"delete" === (e1.textContent || "").trim().toLowerCase()) || null;
    e1 && (e1.click(), await (0, c.delay)(200));
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23;
$RefreshReg$(_c, "S");
$RefreshReg$(_c1, "E");
$RefreshReg$(_c2, "C");
$RefreshReg$(_c3, "A");
$RefreshReg$(_c4, "T");
$RefreshReg$(_c5, "F");
$RefreshReg$(_c6, "I");
$RefreshReg$(_c7, "L");
$RefreshReg$(_c8, "R");
$RefreshReg$(_c9, "O");
$RefreshReg$(_c10, "M");
$RefreshReg$(_c11, "N");
$RefreshReg$(_c12, "B");
$RefreshReg$(_c13, "U");
$RefreshReg$(_c14, "H");
$RefreshReg$(_c15, "Y");
$RefreshReg$(_c16, "V");
$RefreshReg$(_c17, "W");
$RefreshReg$(_c18, "G");
$RefreshReg$(_c19, "K");
$RefreshReg$(_c20, "X");
$RefreshReg$(_c21, "J");
$RefreshReg$(_c22, "Q");
$RefreshReg$(_c23, "Z");

},{}]},["sjFQp","drEds"], "drEds", "parcelRequire1d85")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLElBQUUsT0FBTztBQUFPLElBQUksSUFBRSxPQUFPO0FBQWUsSUFBSSxJQUFFLE9BQU87QUFBeUIsSUFBSSxJQUFFLE9BQU87QUFBb0IsSUFBSSxJQUFFLE9BQU8sZ0JBQWUsSUFBRSxPQUFPLFVBQVU7QUFBZSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRTtJQUFLLElBQUcsS0FBRyxPQUFPLEtBQUcsWUFBVSxPQUFPLEtBQUcsWUFBVyxLQUFJLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRSxNQUFJLE1BQUksS0FBRyxFQUFFLEdBQUUsR0FBRTtRQUFDLEtBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBRSxDQUFBLElBQUUsRUFBRSxHQUFFLEVBQUMsS0FBSSxFQUFFO0lBQVU7SUFBRyxPQUFPO0FBQUM7QUFBRSxJQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBSyxDQUFBLElBQUUsS0FBRyxPQUFLLEVBQUUsRUFBRSxNQUFJLENBQUMsR0FBRSxFQUFFLEtBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxhQUFXLEVBQUUsR0FBRSxXQUFVO1FBQUMsT0FBTTtRQUFFLFlBQVcsQ0FBQztJQUFDLEtBQUcsR0FBRSxFQUFDO0FBQUcsSUFBSSxJQUFFLFdBQVcsU0FBUyxRQUFNLEVBQUU7QUFBQyxJQUFJLElBQUUsSUFBSSxXQUFXLFNBQVMsT0FBSyxDQUFDO0FBQUUsSUFBSSxJQUFFLElBQUksSUFBSSxJQUFHLElBQUUsQ0FBQSxJQUFHLEVBQUUsSUFBSSxJQUFHLEtBQUcsRUFBRSxPQUFPLENBQUEsSUFBRyxFQUFFLFdBQVcsU0FBTyxFQUFFLFNBQVMsTUFBTSxJQUFJLENBQUEsSUFBRyxFQUFFLE1BQU0sTUFBTSxPQUFPLENBQUMsR0FBRSxDQUFDLEdBQUUsRUFBRSxHQUFJLENBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFFLENBQUEsR0FBRyxDQUFDO0FBQUcsSUFBSSxLQUFHLEVBQUUsY0FBYSxJQUFFLElBQUksRUFBRSxnQkFBYyxJQUFJLFlBQVUsUUFBTyxLQUFHO0FBQUksSUFBSSxJQUFFLENBQUMsSUFBRSxFQUFFLEVBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxFQUFFLE9BQU8sSUFBRyxRQUFPO0FBQUcsSUFBSSxJQUFFLENBQUMsR0FBRyxJQUFJLFFBQVEsTUFBTSxxQkFBa0IsT0FBTyxJQUFHLFFBQU8sSUFBRyxJQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsd0JBQW9CLElBQUcsSUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLHdCQUFvQixJQUFHLElBQUUsR0FBRSxJQUFFLENBQUMsR0FBRyxJQUFJLE9BQUssRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSTtBQUFHLElBQUksSUFBRTtJQUFDLG1CQUFrQjtJQUFNLGdCQUFlO0lBQU0sV0FBVTtJQUFNLFlBQVc7UUFBQztLQUFlO0lBQUMsUUFBTztJQUFZLFFBQU87SUFBSyxpQkFBZ0I7SUFBa0csWUFBVztJQUFtQixXQUFVO0lBQW1CLFdBQVU7SUFBUSxVQUFTO0lBQU0sY0FBYTtBQUFJO0FBQUUsT0FBTyxPQUFPLGdCQUFjLEVBQUU7QUFBUyxXQUFXLFVBQVE7SUFBQyxNQUFLLEVBQUU7SUFBQyxLQUFJO1FBQUMsU0FBUSxFQUFFO0lBQU87QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE9BQU87QUFBTyxTQUFTLEVBQUUsQ0FBQztJQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsTUFBSTtRQUFDLE1BQUssT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUcsWUFBVztRQUFFO1FBQUUsU0FBUSxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEtBQUs7UUFBRTtJQUFDLEdBQUUsT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFLEdBQUMsS0FBSztBQUFDO0FBQUMsT0FBTyxPQUFPLFNBQU87QUFBRSxPQUFPLE9BQU8sVUFBUSxDQUFDO0FBQUUsSUFBSSxJQUFFLFdBQVcsV0FBUyxXQUFXLFVBQVE7QUFBSyxlQUFlLEVBQUUsSUFBRSxDQUFDLENBQUM7SUFBRSxJQUFHLENBQUEsRUFBRSwyQkFBMEIsRUFBRSxRQUFRLFlBQVk7UUFBQyx3QkFBdUIsQ0FBQztJQUFDLEVBQUMsSUFBRyxXQUFXLFVBQVU7QUFBVTtBQUFDLFNBQVM7SUFBSSxPQUFNLENBQUMsRUFBRSxRQUFNLEVBQUUsU0FBTyxZQUFVLFNBQVMsU0FBUyxRQUFRLFlBQVUsSUFBRSxTQUFTLFdBQVMsY0FBWSxFQUFFO0FBQUk7QUFBQyxTQUFTO0lBQUksT0FBTSxDQUFDLEVBQUUsUUFBTSxFQUFFLFNBQU8sWUFBVSxjQUFZLEVBQUU7QUFBSTtBQUFDLFNBQVM7SUFBSSxPQUFPLEVBQUUsUUFBTSxTQUFTO0FBQUk7QUFBQyxJQUFJLElBQUU7QUFBeUIsSUFBSSxJQUFFO0lBQUMsZUFBYyxDQUFDO0lBQUUsaUJBQWdCLEVBQUU7SUFBQyxnQkFBZSxFQUFFO0FBQUEsR0FBRSxJQUFFO0lBQUssRUFBRSxnQkFBYyxDQUFDLEdBQUUsRUFBRSxrQkFBZ0IsRUFBRSxFQUFDLEVBQUUsaUJBQWUsRUFBRTtBQUFBO0FBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLEVBQUU7SUFBQyxJQUFJLElBQUUsRUFBRSxFQUFDLEdBQUUsR0FBRTtJQUFFLElBQUksS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxBQUFDLENBQUEsTUFBSSxLQUFHLE1BQU0sUUFBUSxNQUFJLENBQUMsQ0FBQyxFQUFFLFNBQU8sRUFBRSxLQUFHLENBQUEsS0FBSSxFQUFFLEtBQUs7UUFBQztRQUFFO0tBQUU7SUFBRSxPQUFPLEVBQUUsVUFBUyxDQUFBLElBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBRSxHQUFFLEdBQUUsSUFBRyxPQUFNLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxPQUFPLE9BQU8sTUFBSyxJQUFHLElBQUUsQ0FBQztJQUFFLE1BQUssRUFBRSxTQUFPLEdBQUc7UUFBQyxJQUFHLENBQUMsR0FBRSxFQUFFLEdBQUMsRUFBRTtRQUFRLElBQUcsRUFBRSxHQUFFLEdBQUUsT0FBTSxJQUFFLENBQUM7YUFBTTtZQUFDLElBQUksSUFBRSxFQUFFLE9BQU8sT0FBTyxNQUFLO1lBQUcsSUFBRyxFQUFFLFdBQVMsR0FBRTtnQkFBQyxJQUFFLENBQUM7Z0JBQUU7WUFBSztZQUFDLEVBQUUsUUFBUTtRQUFFO0lBQUM7SUFBQyxPQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQUUsSUFBRyxFQUFDLFNBQVEsQ0FBQyxFQUFDLEdBQUM7SUFBRSxJQUFHLENBQUMsR0FBRSxPQUFNLENBQUM7SUFBRSxJQUFHLEtBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUMsT0FBTyxFQUFFLFNBQU8sRUFBRSxFQUFFLFFBQU8sR0FBRSxLQUFHLENBQUM7SUFBRSxJQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxPQUFNLENBQUM7SUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEdBQUMsQ0FBQztJQUFFLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUMsT0FBTyxFQUFFLGdCQUFn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LElBQUUsQ0FBQyxHQUFFLElBQUksSUFBSyxDQUFBLEtBQUcsRUFBRSxBQUFDLENBQUEsSUFBRTtZQUFDLFNBQVEsQ0FBQztRQUFDLENBQUEsRUFBRyxTQUFRLElBQUcsRUFBRSxPQUFNLEdBQUcsS0FBRyxDQUFDLEdBQUU7SUFBSyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsR0FBRSxHQUFFO1FBQUMsS0FBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBQztJQUFDO0FBQUUsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUU7SUFBSyxJQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFlBQVcsS0FBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFBQyxZQUFXLENBQUUsQ0FBQSxJQUFFLEdBQUcsR0FBRSxFQUFDLEtBQUksRUFBRTtJQUFVO0lBQUcsT0FBTztBQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFLLENBQUEsRUFBRSxHQUFFLEdBQUUsWUFBVyxLQUFHLEVBQUUsR0FBRSxHQUFFLFVBQVMsR0FBRyxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxJQUFFLEtBQUcsT0FBSyxHQUFHLEdBQUcsTUFBSSxDQUFDLEdBQUUsRUFBRSxLQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsYUFBVyxFQUFFLEdBQUUsV0FBVTtRQUFDLE9BQU07UUFBRSxZQUFXLENBQUM7SUFBQyxLQUFHLEdBQUUsRUFBQyxHQUFHLEtBQUcsQ0FBQSxJQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsY0FBYTtRQUFDLE9BQU0sQ0FBQztJQUFDLElBQUc7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFBO0lBQUk7SUFBYyxDQUFBO1FBQVc7UUFBYSxJQUFJLElBQUUsT0FBTyxJQUFJLHNCQUFxQixJQUFFLE9BQU8sSUFBSSxlQUFjLElBQUUsT0FBTyxXQUFTLGFB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R0FBRSxFQUFFLElBQUksR0FBRSxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLElBQUU7b0JBQVc7Z0JBQU0sS0FBSztvQkFBRSxFQUFFLEVBQUUsTUFBSyxJQUFFO29CQUFTO1lBQUs7UUFBRTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUFFLElBQUksSUFBRSxVQUFVLFNBQU8sS0FBRyxTQUFTLENBQUMsRUFBRSxLQUFHLEtBQUssSUFBRSxTQUFTLENBQUMsRUFBRSxHQUFDLENBQUMsR0FBRSxJQUFFLFVBQVUsU0FBTyxJQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUMsS0FBSztZQUFFLElBQUcsRUFBRSxJQUFJLE1BQUksRUFBRSxJQUFJLEdBQUU7Z0JBQUMsWUFBVztnQkFBRSxRQUFPO2dCQUFFLFNBQVE7Z0JBQUssZ0JBQWUsS0FBRztvQkFBVyxPQUFNLEVBQUU7Z0JBQUE7WUFBQyxJQUFHLE9BQU8sS0FBRyxZQUFVLE1BQUksTUFBSyxPQUFPLEVBQUUsR0FBRTtnQkFBYSxLQUFLO29CQUFFLEVBQUUsRUFBRSxRQUFPLEdBQUUsR0FBRTtvQkFBRztnQkFBTSxLQUFLO29CQUFFLEVBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRTtvQkFBRztZQUFLO1FBQUM7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFHLElBQUksSUFBRSxFQUFFLElBQUk7WUFBRyxNQUFJLEtBQUssS0FBRyxFQUFFO1FBQUc7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEVBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJO1FBQUU7UUFBQyxTQUFTLEdBQUcsQ0FBQztZQUFHLElBQUksSUFBRSxJQUFJO1lBQUksT0FBTyxFQUFFLFFBQVEsU0FBUyxDQUFDO2dCQUFFLElBQUksSUFBRSxFQUFFLElBQUk7Z0JBQUcsSUFBRyxNQUFJLEtBQUssR0FBRSxNQUFNLElBQUksTUFBTTtnQkFB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TyxNQUFJLE1BQU0sQUFBQyxDQUFBLEdBQUUsRUFBRSxLQUFJLEVBQUc7UUFBRztJQUFDO0FBQUM7QUFBQyxlQUFlO0lBQUssSUFBSSxLQUFFLE1BQU0sS0FBSyxTQUFTLGlCQUFpQix5REFBeUQsS0FBSyxDQUFBLEtBQUcsYUFBVyxBQUFDLENBQUEsR0FBRSxlQUFhLEVBQUMsRUFBRyxPQUFPLGtCQUFnQjtJQUFLLE1BQUksQ0FBQSxHQUFFLFNBQVEsTUFBTSxBQUFDLENBQUEsR0FBRSxFQUFFLEtBQUksRUFBRyxJQUFHO0FBQUUiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTUzMjk2NGQzY2UzYTcwYzMuanMiLCJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJzcmMvY29udGVudHMvc2l0ZXMvdGlrdG9rL29wZXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFc9T2JqZWN0LmNyZWF0ZTt2YXIgUD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWD1PYmplY3QuZ2V0UHJvdG90eXBlT2YsSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxPShlLHQsbyxyKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbiBvZiBHKHQpKSFKLmNhbGwoZSxuKSYmbiE9PW8mJlAoZSxuLHtnZXQ6KCk9PnRbbl0sZW51bWVyYWJsZTohKHI9Vih0LG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciB6PShlLHQsbyk9PihvPWUhPW51bGw/VyhYKGUpKTp7fSxxKHR8fCFlfHwhZS5fX2VzTW9kdWxlP1AobyxcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6byxlKSk7dmFyIHk9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgSD0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBLPW5ldyBTZXQoeSksRD1lPT5LLmhhcyhlKSx1ZT15LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIGRlPUQoXCItLWRyeS1ydW5cIiksXz0oKT0+RChcIi0tdmVyYm9zZVwiKXx8SCgpLlZFUkJPU0U9PT1cInRydWVcIixmZT1fKCk7dmFyIHg9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIGs9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxUPSguLi5lKT0+eChcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLEE9KC4uLmUpPT54KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUT0wLHA9KC4uLmUpPT5fKCkmJngoYFxcdXsxRjdFMX0gJHtRKyt9YCwuLi5lKTt2YXIgYz17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJwYWdlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxqb2JyaWdodC1mb3JrXFxcXGV4dGVuc2lvblxcXFxzcmNcXFxcY29udGVudHNcXFxcc2l0ZXNcXFxcdGlrdG9rXFxcXG9wZXJhdGlvbnMuanNcIixcImJ1bmRsZUlkXCI6XCJhMGY4MDFhODA5YWMwZTdlXCIsXCJlbnZIYXNoXCI6XCJlNzkyZmJiZGFhNzhlZTg0XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPWMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpjLnZlcmJvc2V9fTt2YXIgWT1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBaKGUpe1kuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9Wjttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGQ9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDthc3luYyBmdW5jdGlvbiBtKGU9ITEpe2U/KHAoXCJUcmlnZ2VyaW5nIGZ1bGwgcmVsb2FkXCIpLGQucnVudGltZS5zZW5kTWVzc2FnZSh7X19wbGFzbW9fZnVsbF9yZWxvYWRfXzohMH0pKTpnbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpfWZ1bmN0aW9uIHcoKXtyZXR1cm4hYy5ob3N0fHxjLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpjLmhvc3R9ZnVuY3Rpb24gTCgpe3JldHVybiFjLmhvc3R8fGMuaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6Yy5ob3N0fWZ1bmN0aW9uIGYoKXtyZXR1cm4gYy5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBTPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiO3ZhciBpPXtjaGVja2VkQXNzZXRzOnt9LGFzc2V0c1RvRGlzcG9zZTpbXSxhc3NldHNUb0FjY2VwdDpbXX0sQj0oKT0+e2kuY2hlY2tlZEFzc2V0cz17fSxpLmFzc2V0c1RvRGlzcG9zZT1bXSxpLmFzc2V0c1RvQWNjZXB0PVtdfTtmdW5jdGlvbiB1KGUsdCl7bGV0e21vZHVsZXM6b309ZTtpZighbylyZXR1cm5bXTtsZXQgcj1bXSxuLHMsYTtmb3IobiBpbiBvKWZvcihzIGluIG9bbl1bMV0pYT1vW25dWzFdW3NdLChhPT09dHx8QXJyYXkuaXNBcnJheShhKSYmYVthLmxlbmd0aC0xXT09PXQpJiZyLnB1c2goW2Usbl0pO3JldHVybiBlLnBhcmVudCYmKHI9ci5jb25jYXQodShlLnBhcmVudCx0KSkpLHJ9ZnVuY3Rpb24gUihlLHQsbyl7aWYoQyhlLHQsbykpcmV0dXJuITA7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCksbj0hMTtmb3IoO3IubGVuZ3RoPjA7KXtsZXRbcyxhXT1yLnNoaWZ0KCk7aWYoQyhzLGEsbnVsbCkpbj0hMDtlbHNle2xldCBnPXUobW9kdWxlLmJ1bmRsZS5yb290LGEpO2lmKGcubGVuZ3RoPT09MCl7bj0hMTticmVha31yLnB1c2goLi4uZyl9fXJldHVybiBufWZ1bmN0aW9uIEMoZSx0LG8pe2xldHttb2R1bGVzOnJ9PWU7aWYoIXIpcmV0dXJuITE7aWYobyYmIW9bZS5ITVJfQlVORExFX0lEXSlyZXR1cm4gZS5wYXJlbnQ/UihlLnBhcmVudCx0LG8pOiEwO2lmKGkuY2hlY2tlZEFzc2V0c1t0XSlyZXR1cm4hMDtpLmNoZWNrZWRBc3NldHNbdF09ITA7bGV0IG49ZS5jYWNoZVt0XTtyZXR1cm4gaS5hc3NldHNUb0Rpc3Bvc2UucHVzaChbZSx0XSksIW58fG4uaG90JiZuLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aD8oaS5hc3NldHNUb0FjY2VwdC5wdXNoKFtlLHRdKSwhMCk6ITF9ZnVuY3Rpb24gTShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIGVlKGUpe2lmKGUudHlwZT09PVwianNcIiYmdHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBuZXcgUHJvbWlzZSgodCxvKT0+e2xldCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5zcmM9YCR7ZS51cmx9P3Q9JHtEYXRlLm5vdygpfWAsZS5vdXRwdXRGb3JtYXQ9PT1cImVzbW9kdWxlXCImJihyLnR5cGU9XCJtb2R1bGVcIiksci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT50KHIpKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCgpPT5vKG5ldyBFcnJvcihgRmFpbGVkIHRvIGRvd25sb2FkIGFzc2V0OiAke2UuaWR9YCkpKSxkb2N1bWVudC5oZWFkPy5hcHBlbmRDaGlsZChyKX0pfWFzeW5jIGZ1bmN0aW9uIE8oZSl7Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZT1PYmplY3QuY3JlYXRlKG51bGwpLGUuZm9yRWFjaChvPT57by51cmw9ZC5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGAke28udXJsfT90PSR7RGF0ZS5ub3coKX1gKSl9KTtsZXQgdD1hd2FpdCBQcm9taXNlLmFsbChlLm1hcChlZSkpO3RyeXtlLmZvckVhY2goZnVuY3Rpb24obyl7JChtb2R1bGUuYnVuZGxlLnJvb3Qsbyl9KX1maW5hbGx5e2RlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlLHQmJnQuZm9yRWFjaChvPT57byYmZG9jdW1lbnQuaGVhZD8ucmVtb3ZlQ2hpbGQobyl9KX19ZnVuY3Rpb24gdGUoZSl7bGV0IHQ9ZS5jbG9uZU5vZGUoKTt0Lm9ubG9hZD1mdW5jdGlvbigpe2UucGFyZW50Tm9kZSE9PW51bGwmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0sdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnNwbGl0KFwiP1wiKVswXStcIj9cIitEYXRlLm5vdygpKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyl9dmFyIEU9bnVsbDtmdW5jdGlvbiBvZSgpe0V8fChFPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsZXQgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7bGV0IG89ZVt0XS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHI9dygpLG49cj09PVwibG9jYWxob3N0XCI/bmV3IFJlZ0V4cChcIl4oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6XCIrZigpKS50ZXN0KG8pOm8uaW5kZXhPZihyK1wiOlwiK2YoKSk7L15odHRwcz86XFwvXFwvL2kudGVzdChvKSYmby5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikhPT0wJiYhbnx8dGUoZVt0XSl9RT1udWxsfSw0NykpfWZ1bmN0aW9uICQoZSx0KXtsZXR7bW9kdWxlczpvfT1lO2lmKG8pe2lmKHQudHlwZT09PVwiY3NzXCIpb2UoKTtlbHNlIGlmKHQudHlwZT09PVwianNcIil7bGV0IHI9dC5kZXBzQnlCdW5kbGVbZS5ITVJfQlVORExFX0lEXTtpZihyKXtpZihvW3QuaWRdKXtsZXQgcz1vW3QuaWRdWzFdO2ZvcihsZXQgYSBpbiBzKWlmKCFyW2FdfHxyW2FdIT09c1thXSl7bGV0IGw9c1thXTt1KG1vZHVsZS5idW5kbGUucm9vdCxsKS5sZW5ndGg9PT0xJiZiKG1vZHVsZS5idW5kbGUucm9vdCxsKX19bGV0IG49Z2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVt0LmlkXTtvW3QuaWRdPVtuLHJdfWVsc2UgZS5wYXJlbnQmJiQoZS5wYXJlbnQsdCl9fX1mdW5jdGlvbiBiKGUsdCl7bGV0IG89ZS5tb2R1bGVzO2lmKG8paWYob1t0XSl7bGV0IHI9b1t0XVsxXSxuPVtdO2ZvcihsZXQgcyBpbiByKXUobW9kdWxlLmJ1bmRsZS5yb290LHJbc10pLmxlbmd0aD09PTEmJm4ucHVzaChyW3NdKTtkZWxldGUgb1t0XSxkZWxldGUgZS5jYWNoZVt0XSxuLmZvckVhY2gocz0+e2IobW9kdWxlLmJ1bmRsZS5yb290LHMpfSl9ZWxzZSBlLnBhcmVudCYmYihlLnBhcmVudCx0KX1mdW5jdGlvbiB2KGUsdCl7bGV0IG89ZS5jYWNoZVt0XTtlLmhvdERhdGFbdF09e30sbyYmby5ob3QmJihvLmhvdC5kYXRhPWUuaG90RGF0YVt0XSksbyYmby5ob3QmJm8uaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCYmby5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihyKXtyKGUuaG90RGF0YVt0XSl9KSxkZWxldGUgZS5jYWNoZVt0XX1mdW5jdGlvbiBJKGUsdCl7ZSh0KTtsZXQgbz1lLmNhY2hlW3RdO2lmKG8mJm8uaG90JiZvLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCl7bGV0IHI9dShtb2R1bGUuYnVuZGxlLnJvb3QsdCk7by5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2xldCBzPW4oKCk9PnIpO3MmJnMubGVuZ3RoJiYocy5mb3JFYWNoKChbYSxsXSk9Pnt2KGEsbCl9KSxpLmFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoaS5hc3NldHNUb0FjY2VwdCxzKSl9KX19ZnVuY3Rpb24gcmUoZT1mKCkpe2xldCB0PUwoKTtyZXR1cm5gJHtjLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBuZShlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZrKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTihlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQocmUoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgbiBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCBzPW4uY29kZWZyYW1lfHxuLnN0YWNrO0EoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrbi5tZXNzYWdlK2BcbmArcytgXG5cbmArbi5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG5lKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntUKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7Yy5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e0EoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtjLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciBqPXoocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7YXN5bmMgZnVuY3Rpb24gRigpe2ouZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayh3aW5kb3cpLHdpbmRvdy4kUmVmcmVzaFJlZyQ9ZnVuY3Rpb24oKXt9LHdpbmRvdy4kUmVmcmVzaFNpZyQ9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fX12YXIgc2U9YCR7U30ke21vZHVsZS5pZH1fX2AsaCxVPW1vZHVsZS5idW5kbGUucGFyZW50O2lmKCFVfHwhVS5pc1BhcmNlbFJlcXVpcmUpe3RyeXtoPWQ/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpzZX0pLGgub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57bSgpfSksYy5pc1JlYWN0fHxoLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoKT0+e20oKX0pfWNhdGNoKGUpe3AoZSl9Tihhc3luYyBlPT57aWYocChcIlBhZ2UgcnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYy5pc1JlYWN0KXtCKCk7bGV0IHQ9ZS5maWx0ZXIocj0+ci5lbnZIYXNoPT09Yy5lbnZIYXNoKTtpZih0LnNvbWUocj0+ci50eXBlPT09XCJjc3NcInx8ci50eXBlPT09XCJqc1wiJiZSKG1vZHVsZS5idW5kbGUucm9vdCxyLmlkLHIuZGVwc0J5QnVuZGxlKSkpdHJ5e2F3YWl0IE8odCk7bGV0IHI9e307Zm9yKGxldFtzLGFdb2YgaS5hc3NldHNUb0Rpc3Bvc2UpclthXXx8KHYocyxhKSxyW2FdPSEwKTtsZXQgbj17fTtmb3IobGV0IHM9MDtzPGkuYXNzZXRzVG9BY2NlcHQubGVuZ3RoO3MrKyl7bGV0W2EsbF09aS5hc3NldHNUb0FjY2VwdFtzXTtuW2xdfHwoSShhLGwpLG5bbF09ITApfX1jYXRjaChyKXtjLnZlcmJvc2U9PT1cInRydWVcIiYmKGNvbnNvbGUudHJhY2UociksYWxlcnQoSlNPTi5zdHJpbmdpZnkocikpKSxhd2FpdCBtKCEwKX19ZWxzZXtsZXQgdD1lLmZpbHRlcihvPT5vLmVudkhhc2g9PT1jLmVudkhhc2gpLnNvbWUobz0+TShtb2R1bGUuYnVuZGxlLG8uaWQpKTtwKFwiUGFnZSBydW50aW1lIC1cIix7c291cmNlQ2hhbmdlZDp0fSksdCYmaC5wb3N0TWVzc2FnZSh7X19wbGFzbW9fcGFnZV9jaGFuZ2VkX186ITB9KX19KX1jLmlzUmVhY3QmJihwKFwiSW5qZWN0aW5nIHJlYWN0IHJlZnJlc2hcIiksRigpKTtcbiIsInZhciBvZT1PYmplY3QuY3JlYXRlO3ZhciBIPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgYWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgdWU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHNlPU9iamVjdC5nZXRQcm90b3R5cGVPZixsZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB6PShvLGYpPT4oKT0+KGZ8fG8oKGY9e2V4cG9ydHM6e319KS5leHBvcnRzLGYpLGYuZXhwb3J0cyksY2U9KG8sZik9Pntmb3IodmFyIHMgaW4gZilIKG8scyx7Z2V0OmZbc10sZW51bWVyYWJsZTohMH0pfSxEPShvLGYscyx5KT0+e2lmKGYmJnR5cGVvZiBmPT1cIm9iamVjdFwifHx0eXBlb2YgZj09XCJmdW5jdGlvblwiKWZvcihsZXQgbSBvZiB1ZShmKSkhbGUuY2FsbChvLG0pJiZtIT09cyYmSChvLG0se2dldDooKT0+ZlttXSxlbnVtZXJhYmxlOiEoeT1hZShmLG0pKXx8eS5lbnVtZXJhYmxlfSk7cmV0dXJuIG99LFM9KG8sZixzKT0+KEQobyxmLFwiZGVmYXVsdFwiKSxzJiZEKHMsZixcImRlZmF1bHRcIikpLEc9KG8sZixzKT0+KHM9byE9bnVsbD9vZShzZShvKSk6e30sRChmfHwhb3x8IW8uX19lc01vZHVsZT9IKHMsXCJkZWZhdWx0XCIse3ZhbHVlOm8sZW51bWVyYWJsZTohMH0pOnMsbykpLGRlPW89PkQoSCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKTt2YXIgTj16KGg9PntcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxzPXR5cGVvZiBXZWFrTWFwPT1cImZ1bmN0aW9uXCI/V2Vha01hcDpNYXAseT1uZXcgTWFwLG09bmV3IHMsYj1uZXcgcyxqPW5ldyBzLEU9W10sQz1uZXcgTWFwLE89bmV3IE1hcCxwPW5ldyBTZXQsXz1uZXcgU2V0LEY9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9uZXcgV2Vha01hcDpudWxsLFQ9ITE7ZnVuY3Rpb24gQihlKXtpZihlLmZ1bGxLZXkhPT1udWxsKXJldHVybiBlLmZ1bGxLZXk7dmFyIHI9ZS5vd25LZXksbjt0cnl7bj1lLmdldEN1c3RvbUhvb2tzKCl9Y2F0Y2goaSl7cmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyfWZvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgbD1uW3RdO2lmKHR5cGVvZiBsIT1cImZ1bmN0aW9uXCIpcmV0dXJuIGUuZm9yY2VSZXNldD0hMCxlLmZ1bGxLZXk9cixyO3ZhciBkPWIuZ2V0KGwpO2lmKGQhPT12b2lkIDApe3ZhciBhPUIoZCk7ZC5mb3JjZVJlc2V0JiYoZS5mb3JjZVJlc2V0PSEwKSxyKz1cIlxcbi0tLVxcblwiK2F9fXJldHVybiBlLmZ1bGxLZXk9cixyfWZ1bmN0aW9uIHEoZSxyKXt2YXIgbj1iLmdldChlKSx0PWIuZ2V0KHIpO3JldHVybiBuPT09dm9pZCAwJiZ0PT09dm9pZCAwPyEwOiEobj09PXZvaWQgMHx8dD09PXZvaWQgMHx8QihuKSE9PUIodCl8fHQuZm9yY2VSZXNldCl9ZnVuY3Rpb24gJChlKXtyZXR1cm4gZS5wcm90b3R5cGUmJmUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR9ZnVuY3Rpb24gayhlLHIpe3JldHVybiAkKGUpfHwkKHIpPyExOiEhcShlLHIpfWZ1bmN0aW9uIFkoZSl7cmV0dXJuIGouZ2V0KGUpfWZ1bmN0aW9uIFooZSl7dmFyIHI9bmV3IE1hcDtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKG4sdCl7ci5zZXQodCxuKX0pLHJ9ZnVuY3Rpb24gVyhlKXt2YXIgcj1uZXcgU2V0O3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obil7ci5hZGQobil9KSxyfWZ1bmN0aW9uIE0oZSxyKXt0cnl7cmV0dXJuIGVbcl19Y2F0Y2gobil7cmV0dXJufX1mdW5jdGlvbiBKKCl7aWYoRS5sZW5ndGg9PT0wfHxUKXJldHVybiBudWxsO1Q9ITA7dHJ5e3ZhciBlPW5ldyBTZXQscj1uZXcgU2V0LG49RTtFPVtdLG4uZm9yRWFjaChmdW5jdGlvbih1KXt2YXIgYz11WzBdLHY9dVsxXSxSPWMuY3VycmVudDtqLnNldChSLGMpLGouc2V0KHYsYyksYy5jdXJyZW50PXYsayhSLHYpP3IuYWRkKGMpOmUuYWRkKGMpfSk7dmFyIHQ9e3VwZGF0ZWRGYW1pbGllczpyLHN0YWxlRmFtaWxpZXM6ZX07Qy5mb3JFYWNoKGZ1bmN0aW9uKHUpe3Uuc2V0UmVmcmVzaEhhbmRsZXIoWSl9KTt2YXIgbD0hMSxkPW51bGwsYT1XKF8pLGk9VyhwKSxnPVooTyk7aWYoYS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO2lmKF8uaGFzKHUpLEYhPT1udWxsJiZGLmhhcyh1KSl7dmFyIHY9Ri5nZXQodSk7dHJ5e2Muc2NoZWR1bGVSb290KHUsdil9Y2F0Y2goUil7bHx8KGw9ITAsZD1SKX19fSksaS5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPWcuZ2V0KHUpO2lmKGM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guXCIpO3AuaGFzKHUpO3RyeXtjLnNjaGVkdWxlUmVmcmVzaCh1LHQpfWNhdGNoKHYpe2x8fChsPSEwLGQ9dil9fSksbCl0aHJvdyBkO3JldHVybiB0fWZpbmFsbHl7VD0hMX19ZnVuY3Rpb24gUChlLHIpe3tpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmdHlwZW9mIGUhPVwib2JqZWN0XCJ8fG0uaGFzKGUpKXJldHVybjt2YXIgbj15LmdldChyKTtpZihuPT09dm9pZCAwPyhuPXtjdXJyZW50OmV9LHkuc2V0KHIsbikpOkUucHVzaChbbixlXSksbS5zZXQoZSxuKSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86UChlLnJlbmRlcixyK1wiJHJlbmRlclwiKTticmVhaztjYXNlIGY6UChlLnR5cGUscitcIiR0eXBlXCIpO2JyZWFrfX19ZnVuY3Rpb24gSyhlLHIpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTohMSx0PWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwO2lmKGIuaGFzKGUpfHxiLnNldChlLHtmb3JjZVJlc2V0Om4sb3duS2V5OnIsZnVsbEtleTpudWxsLGdldEN1c3RvbUhvb2tzOnR8fGZ1bmN0aW9uKCl7cmV0dXJuW119fSksdHlwZW9mIGU9PVwib2JqZWN0XCImJmUhPT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOksoZS5yZW5kZXIscixuLHQpO2JyZWFrO2Nhc2UgZjpLKGUudHlwZSxyLG4sdCk7YnJlYWt9fWZ1bmN0aW9uIHgoZSl7e3ZhciByPWIuZ2V0KGUpO3IhPT12b2lkIDAmJkIocil9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIHkuZ2V0KGUpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIG0uZ2V0KGUpfWZ1bmN0aW9uIGVlKGUpe3t2YXIgcj1uZXcgU2V0O3JldHVybiBwLmZvckVhY2goZnVuY3Rpb24obil7dmFyIHQ9Ty5nZXQobik7aWYodD09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7dmFyIGw9dC5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gobixlKTtsLmZvckVhY2goZnVuY3Rpb24oZCl7ci5hZGQoZCl9KX0pLHJ9fWZ1bmN0aW9uIHJlKGUpe3t2YXIgcj1lLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihyPT09dm9pZCAwKXt2YXIgbj0wO2UuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fPXI9e3JlbmRlcmVyczpuZXcgTWFwLHN1cHBvcnRzRmliZXI6ITAsaW5qZWN0OmZ1bmN0aW9uKGEpe3JldHVybiBuKyt9LG9uU2NoZWR1bGVGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcpe30sb25Db21taXRGaWJlclJvb3Q6ZnVuY3Rpb24oYSxpLGcsdSl7fSxvbkNvbW1pdEZpYmVyVW5tb3VudDpmdW5jdGlvbigpe319fWlmKHIuaXNEaXNhYmxlZCl7Y29uc29sZS53YXJuKFwiU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLlwiKTtyZXR1cm59dmFyIHQ9ci5pbmplY3Q7ci5pbmplY3Q9ZnVuY3Rpb24oYSl7dmFyIGk9dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHR5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpLGl9LHIucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24oYSxpKXt0eXBlb2YgYS5zY2hlZHVsZVJlZnJlc2g9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIGEuc2V0UmVmcmVzaEhhbmRsZXI9PVwiZnVuY3Rpb25cIiYmQy5zZXQoaSxhKX0pO3ZhciBsPXIub25Db21taXRGaWJlclJvb3QsZD1yLm9uU2NoZWR1bGVGaWJlclJvb3R8fGZ1bmN0aW9uKCl7fTtyLm9uU2NoZWR1bGVGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcpe3JldHVybiBUfHwoXy5kZWxldGUoaSksRiE9PW51bGwmJkYuc2V0KGksZykpLGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxyLm9uQ29tbWl0RmliZXJSb290PWZ1bmN0aW9uKGEsaSxnLHUpe3ZhciBjPUMuZ2V0KGEpO2lmKGMhPT12b2lkIDApe08uc2V0KGksYyk7dmFyIHY9aS5jdXJyZW50LFI9di5hbHRlcm5hdGU7aWYoUiE9PW51bGwpe3ZhciBMPVIubWVtb2l6ZWRTdGF0ZSE9bnVsbCYmUi5tZW1vaXplZFN0YXRlLmVsZW1lbnQhPW51bGwmJnAuaGFzKGkpLEE9di5tZW1vaXplZFN0YXRlIT1udWxsJiZ2Lm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbDshTCYmQT8ocC5hZGQoaSksXy5kZWxldGUoaSkpOkwmJkF8fChMJiYhQT8ocC5kZWxldGUoaSksdT9fLmFkZChpKTpPLmRlbGV0ZShpKSk6IUwmJiFBJiZ1JiZfLmFkZChpKSl9ZWxzZSBwLmFkZChpKX1yZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX1mdW5jdGlvbiBuZSgpe3JldHVybiExfWZ1bmN0aW9uIHRlKCl7cmV0dXJuIHAuc2l6ZX1mdW5jdGlvbiBmZSgpe3t2YXIgZSxyLG49ITE7cmV0dXJuIGZ1bmN0aW9uKHQsbCxkLGEpe2lmKHR5cGVvZiBsPT1cInN0cmluZ1wiKXJldHVybiBlfHwoZT10LHI9dHlwZW9mIGE9PVwiZnVuY3Rpb25cIiksdCE9bnVsbCYmKHR5cGVvZiB0PT1cImZ1bmN0aW9uXCJ8fHR5cGVvZiB0PT1cIm9iamVjdFwiKSYmSyh0LGwsZCxhKSx0OyFuJiZyJiYobj0hMCx4KGUpKX19fWZ1bmN0aW9uIGllKGUpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwiZnVuY3Rpb25cIjp7aWYoZS5wcm90b3R5cGUhPW51bGwpe2lmKGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZS5wcm90b3R5cGUpO2lmKHIubGVuZ3RoPjF8fHJbMF0hPT1cImNvbnN0cnVjdG9yXCJ8fGUucHJvdG90eXBlLl9fcHJvdG9fXyE9PU9iamVjdC5wcm90b3R5cGUpcmV0dXJuITF9dmFyIG49ZS5uYW1lfHxlLmRpc3BsYXlOYW1lO3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcIiYmL15bQS1aXS8udGVzdChuKX1jYXNlXCJvYmplY3RcIjp7aWYoZSE9bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpjYXNlIGY6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1yZXR1cm4hMX1kZWZhdWx0OnJldHVybiExfX1oLl9nZXRNb3VudGVkUm9vdENvdW50PXRlLGguY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlPXgsaC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybT1mZSxoLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM9ZWUsaC5nZXRGYW1pbHlCeUlEPVEsaC5nZXRGYW1pbHlCeVR5cGU9WCxoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnM9bmUsaC5pbmplY3RJbnRvR2xvYmFsSG9vaz1yZSxoLmlzTGlrZWx5Q29tcG9uZW50VHlwZT1pZSxoLnBlcmZvcm1SZWFjdFJlZnJlc2g9SixoLnJlZ2lzdGVyPVAsaC5zZXRTaWduYXR1cmU9S30pKCl9KTt2YXIgST16KChwZSxWKT0+e1widXNlIHN0cmljdFwiO1YuZXhwb3J0cz1OKCl9KTt2YXIgdz17fTtjZSh3LHtkZWZhdWx0OigpPT5oZX0pO21vZHVsZS5leHBvcnRzPWRlKHcpO3ZhciBVPUcoSSgpKTtTKHcsRyhJKCkpLG1vZHVsZS5leHBvcnRzKTt2YXIgaGU9VS5kZWZhdWx0O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxucmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzOlxuICAoKipcbiAgICogQGxpY2Vuc2UgUmVhY3RcbiAgICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gICAqXG4gICAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICAgKlxuICAgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAgICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICAgKilcbiovXG4iLCIvKipcclxuICogUGFyY2VsIG1vZHVsZSBpZDogM2htdllcclxuICogUmVzb2x2ZWQgcGF0aDogc3JjL2NvbnRlbnRzL3NpdGVzL3Rpa3Rvay9vcGVyYXRpb25zLmpzXHJcbiAqIERlcGVuZGVuY2llczpcclxuICogICAuLi8uLi9tZXRob2RzL2Nob2ljZS1tYXRjaCAtPiA2bWtJNCAgPT4gIHNyYy9jb250ZW50cy9tZXRob2RzL2Nob2ljZS1tYXRjaC5qc1xyXG4gKiAgIC4vZGF0ZS11dGlscyAtPiBiRGgxQiAgPT4gIHNyYy9jb250ZW50cy9zaXRlcy90aWt0b2svZGF0ZS11dGlscy5qc1xyXG4gKiAgIC4vcnVsZXMgLT4gNTJSYW0gID0+ICBzcmMvY29udGVudHMvc2l0ZXMvdGlrdG9rL3J1bGVzLmpzXHJcbiAqICAgQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyAtPiBjSFVibCAgPT4gIEBwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanNcclxuICogICB+Y29udGVudHMvY3Jhd2xlci91dGlscy9pbnB1dCAtPiBpUEl2VCAgPT4gIHNyYy9jb250ZW50cy9jcmF3bGVyL3V0aWxzL2lucHV0LmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvYW5zd2VyIC0+IDdUNWVXICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvYW5zd2VyLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvZG9tIC0+IGhBNVFhICA9PiAgc3JjL2NvbnRlbnRzL21ldGhvZHMvZG9tLmpzXHJcbiAqICAgfmNvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXIgLT4gZVR6VXggID0+ICBzcmMvY29udGVudHMvbWV0aG9kcy9vYnNlcnZlci5qc1xyXG4gKiAgIH5jb3JlL3hwYXRoIC0+IGFnRTR1ICA9PiAgc3JjL2NvcmUveHBhdGguanNcclxuICogICB+dXRpbHMvZGVsYXkgLT4gYW02MTQgID0+ICBzcmMvdXRpbHMvZGVsYXkuanNcclxuICovXHJcblxyXG52YXIgbj1lKFwiQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qc1wiKTtuLmRlZmluZUludGVyb3BGbGFnKHIpLG4uZXhwb3J0KHIsXCJwcmVGaWxsRm9ybVwiLCgpPT5oKSxuLmV4cG9ydChyLFwiY2xpY2tBZGRFeHBlcmllbmNlU2VjdGlvblwiLCgpPT5nKSxuLmV4cG9ydChyLFwiY2xpY2tBZGRBbGxGb3JtU2VjdGlvbnNcIiwoKT0+Yiksbi5leHBvcnQocixcImNvdW50RWR1Y2F0aW9uU2VjdGlvbnNcIiwoKT0+Qyksbi5leHBvcnQocixcImNvdW50RW1wbG95bWVudFNlY3Rpb25zXCIsKCk9PkEpLG4uZXhwb3J0KHIsXCJhZGRFZHVjYXRpb25TZWN0aW9uXCIsKCk9PkYpLG4uZXhwb3J0KHIsXCJhZGRFbXBsb3ltZW50U2VjdGlvblwiLCgpPT5JKSxuLmV4cG9ydChyLFwiZmlsbElucHV0VGV4dEZpZWxkXCIsKCk9PkIpLG4uZXhwb3J0KHIsXCJmaWxsU2VsZWN0RmllbGRcIiwoKT0+WCksbi5leHBvcnQocixcImZpbGxDaGVja2JveEZpZWxkXCIsKCk9PkopLG4uZXhwb3J0KHIsXCJmaWxsUmFkaW9Hcm91cEZpbGVkXCIsKCk9PlEpLG4uZXhwb3J0KHIsXCJ1cGxvYWRSZXN1bWVcIiwoKT0+Wiksbi5leHBvcnQocixcImZpbGxPdGhlcnNDb25kaXRpb25hbEZpZWxkc1wiLCgpPT5lbiksbi5leHBvcnQocixcInJlbW92ZVJlc3VtZVwiLCgpPT5lbyk7dmFyIG89ZShcIi4uLy4uL21ldGhvZHMvY2hvaWNlLW1hdGNoXCIpLGk9ZShcIn5jb250ZW50cy9jcmF3bGVyL3V0aWxzL2lucHV0XCIpLGE9ZShcIn5jb250ZW50cy9tZXRob2RzL2Fuc3dlclwiKSxsPWUoXCJ+Y29udGVudHMvbWV0aG9kcy9kb21cIikscz1lKFwifmNvbnRlbnRzL21ldGhvZHMvb2JzZXJ2ZXJcIiksdT1lKFwifmNvcmUveHBhdGhcIiksYz1lKFwifnV0aWxzL2RlbGF5XCIpLGQ9ZShcIi4vZGF0ZS11dGlsc1wiKSxmPWUoXCIuL3J1bGVzXCIpO2xldCBwPVtcImVkdWNhdGlvblwiXSxtPVtbXCJ3b3JrXCIsXCJleHBlcmllbmNlXCJdXTthc3luYyBmdW5jdGlvbiBoKCl7YXdhaXQgYigpLGF3YWl0ICgwLGMuZGVsYXkpKDIwMCl9YXN5bmMgZnVuY3Rpb24gZygpe2xldCBlPXkoKSx0PWUuZmluZChlPT53KGUpLmluY2x1ZGVzKFwid29yayBleHBlcmllbmNlXCIpKTt0JiZhd2FpdCB4KHQpfWFzeW5jIGZ1bmN0aW9uIGIoKXtsZXQgZT15KCk7aWYoY29uc29sZS5kZWJ1ZyhgW3Rpa3Rva11bcHJlZmlsbF0gZGlzY292ZXJlZCAke2UubGVuZ3RofSBlbXB0eSBzZWN0aW9uIEFkZCBidXR0b24ocylgKSwwIT09ZS5sZW5ndGgpZm9yKGxldCB0IG9mIGUpRSh0KSYmYXdhaXQgeCh0KX1mdW5jdGlvbiB5KCl7bGV0IGU9W1wiLmNyZWF0ZUZvcm1TZWN0aW9uLWFkZEJ0blwiLCdbY2xhc3MqPVwiYXBwbHktZm9ybS1hcnJheS1jYXJkLWFkZFwiXSddLHQ9ZS5mbGF0TWFwKGU9PkFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlKSkpO3JldHVybiBBcnJheS5mcm9tKG5ldyBTZXQodCkpLmZpbHRlcihlPT4oZS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJhZGRcIikpfWZ1bmN0aW9uIHYoZSl7cmV0dXJuIGUuY2xvc2VzdCgnW2NsYXNzKj1cImFwcGx5Rm9ybU1vZHVsZVdyYXBwZXJfX1wiXScpfHxlLmNsb3Nlc3QoJ1tjbGFzcyo9XCJjcmVhdGVGb3JtU2VjdGlvbl9fXCJdJyl9ZnVuY3Rpb24gdyhlKXtsZXQgdD12KGUpLHI9dD8ucXVlcnlTZWxlY3RvcihcIi5hcHBseUZvcm1Nb2R1bGVXcmFwcGVyLXRleHRcIik/LnRleHRDb250ZW50fHx0Py5xdWVyeVNlbGVjdG9yKFwiLmFwcGx5Rm9ybU1vZHVsZVdyYXBwZXItdGl0bGVcIik/LnRleHRDb250ZW50fHx0Py5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZUZvcm1TZWN0aW9uLXRpdGxlXCIpPy50ZXh0Q29udGVudHx8dD8ucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVGb3JtU2VjdGlvbi10ZXh0XCIpPy50ZXh0Q29udGVudHx8XCJcIjtyZXR1cm4gci50cmltKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bLV9dKy9nLFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpfWZ1bmN0aW9uIFMoZSl7bGV0IHQ9dyhlKTtyZXR1cm4hISh0LmluY2x1ZGVzKFwiaW50ZXJuc2hpcFwiKSYmdC5pbmNsdWRlcyhcImV4cGVyaWVuY2VcIil8fHQuaW5jbHVkZXMoXCJwcm9qZWN0XCIpJiZ0LmluY2x1ZGVzKFwiZXhwZXJpZW5jZVwiKXx8dC5pbmNsdWRlcyhcIndvcmsgc2FtcGxlc1wiKXx8dC5pbmNsdWRlcyhcImhvbm9ycyBhbmQgYXdhcmRzXCIpKX1mdW5jdGlvbiBFKGUpe2xldCB0PXcoZSkscj1bXCJ3b3JrIGV4cGVyaWVuY2VcIixcImxhbmd1YWdlIHNraWxsc1wiLFwic2VsZiBpbnRyb2R1Y3Rpb25cIixcInNuc1wiXTtyZXR1cm4hIShyLnNvbWUoZT0+dD09PWUpfHxyLnNvbWUoZT0+dC5pbmNsdWRlcyhlKSkpfHwoUyhlKSwhMSl9YXN5bmMgZnVuY3Rpb24geChlKXtsZXQgdD12KGUpLHI9dyhlKXx8XCJ1bmtub3duXCIsbj10P3QucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpLmxlbmd0aDpudWxsLG89ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpLmxlbmd0aDtjb25zb2xlLmRlYnVnKGBbdGlrdG9rXVtwcmVmaWxsXSBleHBhbmRpbmcgXCIke3J9XCIsIHNlY3Rpb24gY29udHJvbHMgYmVmb3JlPSR7bj8/XCJuL2FcIn1gKTt0cnl7ZS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6XCJjZW50ZXJcIixiZWhhdmlvcjpcImF1dG9cIn0pfWNhdGNoe31lLmNsaWNrKCk7bGV0IGk9YXdhaXQgKDAscy53YWl0Rm9yQ29uZGl0aW9uKSgoKT0+e2lmKHQmJm51bGwhPT1uKXtsZXQgZT10LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKS5sZW5ndGg7cmV0dXJuIGU+bn1yZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpLmxlbmd0aD5vfSx7dGltZW91dDoyZTMsaW50ZXJ2YWw6MTAwLG9ic2VydmVUYXJnZXQ6dHx8ZG9jdW1lbnQuYm9keX0pO2lmKGkpe2xldCBlPXQ/dC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIikubGVuZ3RoOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKS5sZW5ndGg7Y29uc29sZS5kZWJ1ZyhgW3Rpa3Rva11bcHJlZmlsbF0gXCIke3J9XCIgcmVuZGVyZWQsIGNvbnRyb2xzIGFmdGVyPSR7ZX1gKX1lbHNlIGNvbnNvbGUud2FybihgW3Rpa3Rva11bcHJlZmlsbF0gXCIke3J9XCIgZGlkIG5vdCByZW5kZXIgZmllbGRzIHdpdGhpbiAyMDAwbXNgKX1mdW5jdGlvbiBDKCl7cmV0dXJuKDAsZi5nZXRFZHVjYXRpb25SdWxlcykoKS5sZW5ndGh9ZnVuY3Rpb24gQSgpe3JldHVybigwLGYuZ2V0RXhwZXJpZW5jZVJ1bGVzKSgpLmxlbmd0aH1mdW5jdGlvbiBrKGUpe2xldCB0PVsnW2NsYXNzKj1cImFwcGx5Rm9ybU1vZHVsZVdyYXBwZXJfX1wiXScsJ1tjbGFzcyo9XCJjcmVhdGVGb3JtU2VjdGlvbl9fXCJdJ10scj1BcnJheS5mcm9tKG5ldyBTZXQodC5mbGF0TWFwKGU9PkFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlKSkpKSk7Zm9yKGxldCB0IG9mIGUpe2xldCBlPXIuZmluZChlPT57bGV0IHI9ZS5xdWVyeVNlbGVjdG9yKFwiLmFwcGx5Rm9ybU1vZHVsZVdyYXBwZXItdGV4dFwiKT8udGV4dENvbnRlbnR8fGUucXVlcnlTZWxlY3RvcihcIi5hcHBseUZvcm1Nb2R1bGVXcmFwcGVyLXRpdGxlXCIpPy50ZXh0Q29udGVudHx8ZS5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZUZvcm1TZWN0aW9uLXRleHRcIik/LnRleHRDb250ZW50fHxlLnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlRm9ybVNlY3Rpb24tdGl0bGVcIik/LnRleHRDb250ZW50fHxcIlwiLG49KHJ8fFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO3JldHVybiB0LmV2ZXJ5KGU9Pm4uaW5jbHVkZXMoZSkpfSk7aWYoZSlyZXR1cm4gZX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBUKGUpe2xldCB0PWUucXVlcnlTZWxlY3RvcignW2NsYXNzKj1cImFwcGx5LWZvcm0tYXJyYXktY2FyZC1hZGRcIl0nKTtpZih0KXJldHVybiB0O2xldCByPWUucXVlcnlTZWxlY3RvcihcIi5mb3JtT3BlcmF0ZS1hZGRCdG5cIik7aWYocilyZXR1cm4gcjtsZXQgbj1lLnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlRm9ybVNlY3Rpb24tYWRkQnRuXCIpO2lmKG4pcmV0dXJuIG47bGV0IG89QXJyYXkuZnJvbShlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b24udWRfX2J1dHRvblwiKSksaT1vLmZpbmQoZT0+e2xldCB0PSEhZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pY29uPVwiQWRkT3V0bGluZWRcIl0nKSxyPShlLnRleHRDb250ZW50fHxcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4gdCYmXCJhZGRcIj09PXJ9KTtyZXR1cm4gaXx8bnVsbH1hc3luYyBmdW5jdGlvbiBGKGUpe2lmKGU8PTApcmV0dXJuO2xldCB0PWsoW3BdKTtpZih0KWZvcig7QygpPGU7KXtsZXQgZT1UKHQpO2lmKCFlKXJldHVybjthd2FpdCB4KGUpLGF3YWl0ICgwLGMuZGVsYXkpKDIwMCl9fWFzeW5jIGZ1bmN0aW9uIEkoZSl7aWYoZTw9MClyZXR1cm47bGV0IHQ9ayhtKTtpZih0KWZvcig7QSgpPGU7KXtsZXQgZT1UKHQpO2lmKCFlKXJldHVybjthd2FpdCB4KGUpLGF3YWl0ICgwLGMuZGVsYXkpKDIwMCl9fWxldCBqPVwiLmF0c3gtZGF0ZS1waWNrZXItcGVyaW9kLW1vbnRoLXBhbmVsXCIsRD1cIi5hdHN4LWRhdGUtcGlja2VyLXBlcmlvZC1tb250aC1wYW5lbC1saXN0XCIsUD1cIi5hdHN4LWRhdGUtcGlja2VyLXBlcmlvZC1tb250aC1wYW5lbC1saXN0LWl0ZW1cIjtmdW5jdGlvbiBfKCl7bGV0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChqKTtmb3IobGV0IHQgb2YgZSl7bGV0IGU9dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtpZihlLndpZHRoPjAmJmUuaGVpZ2h0PjApcmV0dXJuIHR9cmV0dXJuIGVbMF0/P251bGx9ZnVuY3Rpb24gTChlLHQpe2xldCByPWUucXVlcnlTZWxlY3RvcihgJHtQfVtkYXRhLWN5PVwiJHt0fVwiXWApO2lmKCFyKXJldHVybiExO3Iuc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOlwiY2VudGVyXCIsYmVoYXZpb3I6XCJhdXRvXCJ9KTtsZXQgbj1lLmNsb3Nlc3QoXCIuc2Nyb2xsYmFyLWNvbnRhaW5lclwiKT8/ZTtyZXR1cm4gbiYmbiE9PWRvY3VtZW50LmJvZHkmJihuLnNjcm9sbFRvcD1NYXRoLm1heCgwLHIub2Zmc2V0VG9wLW4uY2xpZW50SGVpZ2h0LzIpKSxyLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZWRvd25cIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLHIuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNldXBcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSkpLHIuY2xpY2soKSwhMH1hc3luYyBmdW5jdGlvbiBSKGUsdCl7bGV0IHI9ZS5jbG9zZXN0KFwiLmF0c3gtZGF0ZS1waWNrZXItcGVyaW9kLW1vbnRoXCIpO2lmKCFyKXJldHVybiExO2xldCBuPW51bGwhPXQuc3RhcnQmJlwiXCIhPT1TdHJpbmcodC5zdGFydCkudHJpbSgpLG89bnVsbCE9dC5lbmQmJlwiXCIhPT1TdHJpbmcodC5lbmQpLnRyaW0oKTtpZighbiYmIW8pcmV0dXJuITE7bGV0IGk9KDAsZC5lbnN1cmVUaWtUb2tGdWxsTW9udGgpKG4/dC5zdGFydDpudWxsKSxhPXQuZW5kJiZcInByZXNlbnRcIj09PVN0cmluZyh0LmVuZCkudHJpbSgpLnRvTG93ZXJDYXNlKCk/XCJQcmVzZW50XCI6KDAsZC5lbnN1cmVUaWtUb2tGdWxsTW9udGgpKG8/dC5lbmQ/P251bGw6bnVsbCksbD0oMCxkLnBhcnNlVGlrVG9rWWVhck1vbnRoRm9yRGlzcGxheSkoaSkscz1vP1N0cmluZyh0LmVuZD8/XCJcIikudHJpbSgpOlwiXCIsdT0vXig/OjE5fDIwKVxcZHsyfSQvLnRlc3QocyksZj1cIlByZXNlbnRcIj09PWE/e3llYXI6XCJQcmVzZW50XCIsbW9udGg6XCJcIn06dT97eWVhcjpzLG1vbnRoOlwiXCJ9OigwLGQucGFyc2VUaWtUb2tZZWFyTW9udGhGb3JEaXNwbGF5KShhKTtIKHIpLGF3YWl0ICgwLGMuZGVsYXkpKDE1MCk7bGV0IHA9QXJyYXkuZnJvbShyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXRzeC1kYXRlLXBpY2tlci1wZXJpb2QtbW9udGgtbGFiZWxcIikpO2lmKHAubGVuZ3RoPDIpcmV0dXJuITE7bGV0IG09YXN5bmMoZSx0KT0+e2lmKCFlKXJldHVybiExO2xldCByPV8oKTtpZighcilyZXR1cm4hMTtsZXQgbj1BcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbChEKSk7aWYobi5sZW5ndGg8MilyZXR1cm4hMTtsZXQgbz1uWzBdLGk9blsxXTtyZXR1cm4hIUwobyxlKSYmKGF3YWl0ICgwLGMuZGVsYXkpKDE4MCksKCF0fHwhIUwoaSx0KSkmJihhd2FpdCAoMCxjLmRlbGF5KSgxODApLCEwKSl9O2lmKG4pe3BbMF0uY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgzNTApO2xldCBlPWF3YWl0IG0obC55ZWFyLGwubW9udGgpO2lmKCFlKXJldHVybiExO2F3YWl0ICgwLGMuZGVsYXkpKDE1MCl9aWYobyl7aWYocFsxXS5jbGljaygpLGF3YWl0ICgwLGMuZGVsYXkpKDM1MCksXCJQcmVzZW50XCI9PT1hKXtsZXQgZT1fKCksdD1lPy5xdWVyeVNlbGVjdG9yKGAke1B9W2RhdGEtY3k9XCJwcmVzZW50XCJdYCkscj10P251bGw6QXJyYXkuZnJvbShlPy5xdWVyeVNlbGVjdG9yQWxsKFApPz9bXSkuZmluZChlPT5cIlByZXNlbnRcIj09PShlLnRleHRDb250ZW50fHxcIlwiKS50cmltKCkpLG49dD8/cjtpZighbilyZXR1cm4hMTtuLnNjcm9sbEludG9WaWV3KHtibG9jazpcImNlbnRlclwiLGJlaGF2aW9yOlwiYXV0b1wifSksbi5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2Vkb3duXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxuLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxuLmNsaWNrKCl9ZWxzZXtsZXQgZT1hd2FpdCBtKGYueWVhcixmLm1vbnRoKTtpZighZSlyZXR1cm4hMX1hd2FpdCAoMCxjLmRlbGF5KSgxNTApfXJldHVybiBhd2FpdCB6KCksITB9YXN5bmMgZnVuY3Rpb24gTyhlLHQpe2xldCByPSgwLGYuZ2V0VGlrVG9rVXNkc0RhdGVSYW5nZUlucHV0cykoZSk7aWYoci5sZW5ndGg8MilyZXR1cm4hMTtsZXRbbixvXT1yLGE9U3RyaW5nKHQuc3RhcnR8fFwiXCIpLnRyaW0oKSxsPVN0cmluZyh0LmVuZHx8XCJcIikudHJpbSgpO3JldHVybighIWF8fCEhbCkmJihhJiZhd2FpdCAoMCxpLmZpbGxEZWZhdWx0SW5wdXRGaWVsZCkobixhKSxsJiZhd2FpdCAoMCxpLmZpbGxEZWZhdWx0SW5wdXRGaWVsZCkobyxsKSxhd2FpdCAkKGw/bzpuKSwhMCl9ZnVuY3Rpb24gTShlKXtlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmRpc3BhdGNoRXZlbnQmJihlLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIse2tleTpcIkVzY2FwZVwiLGJ1YmJsZXM6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5dXBcIix7a2V5OlwiRXNjYXBlXCIsYnViYmxlczohMH0pKSl9ZnVuY3Rpb24gTigpe2xldCBlPWRvY3VtZW50LmJvZHl8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtlJiYoZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2Vkb3duXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSkpfWFzeW5jIGZ1bmN0aW9uICQoZSl7Y29uc29sZS5kZWJ1ZyhcIlt0aWt0b2tdW2RhdGVdIGNsb3NpbmcgVVNEUyBkYXRlIHBpY2tlciBhZnRlciByYW5nZSB3cml0ZVwiKTt0cnl7ZS5ibHVyKCl9Y2F0Y2h7fWxldCB0PWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7dHJ5e3Q/LmJsdXI/LigpfWNhdGNoe31sZXQgcj1cInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93P251bGw6d2luZG93O00oZSksTSh0KSxNKGRvY3VtZW50KSxNKHIpLGF3YWl0ICgwLGMuZGVsYXkpKDQwKSxOKCksYXdhaXQgKDAsYy5kZWxheSkoNDApLE0oZG9jdW1lbnQpLE0ociksYXdhaXQgKDAsYy5kZWxheSkoNjApLGNvbnNvbGUuZGVidWcoXCJbdGlrdG9rXVtkYXRlXSBVU0RTIGRhdGUgcGlja2VyIGNsb3NlIHNlcXVlbmNlIGNvbXBsZXRlZFwiKX1hc3luYyBmdW5jdGlvbiBCKGUsdCl7aWYoIWUpcmV0dXJuITE7aWYoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZudWxsIT09dCYmIUFycmF5LmlzQXJyYXkodCkmJih2b2lkIDAhPT10LnN0YXJ0fHx2b2lkIDAhPT10LmVuZCkmJmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXRzeC1kYXRlLXBpY2tlci1wZXJpb2QtaGlkZGVuLWlucHV0XCIpKXJldHVybiBSKGUsdCk7aWYoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZudWxsIT09dCYmIUFycmF5LmlzQXJyYXkodCkmJih2b2lkIDAhPT10LnN0YXJ0fHx2b2lkIDAhPT10LmVuZCkpe2xldCByPWF3YWl0IE8oZSx0KTtpZihyKXJldHVybiEwfWxldCByPVwib2JqZWN0XCI9PXR5cGVvZiB0P3Quc3RhcnQ6dDtyZXR1cm4gYXdhaXQgKDAsaS5maWxsRGVmYXVsdElucHV0RmllbGQpKGUsciksYXdhaXQgKDAsYy5kZWxheSkoNTApLCEwfWZ1bmN0aW9uIHEoZSl7aWYoIWUpcmV0dXJuITE7bGV0IHQ9d2luZG93LmdldENvbXB1dGVkU3R5bGUoZSk7aWYoXCJub25lXCI9PT10LmRpc3BsYXl8fFwiaGlkZGVuXCI9PT10LnZpc2liaWxpdHkpcmV0dXJuITE7bGV0IHI9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm4gci53aWR0aD4wJiZyLmhlaWdodD4wfWZ1bmN0aW9uIFUoZSl7cmV0dXJuKGV8fFwiXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikudHJpbSgpLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gSChlKXt0cnl7ZS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6XCJjZW50ZXJcIixiZWhhdmlvcjpcImF1dG9cIn0pfWNhdGNoe319ZnVuY3Rpb24gWShlKXtIKGUpLGUuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2V1cFwiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSksZS5jbGljaygpfWFzeW5jIGZ1bmN0aW9uIHooKXtkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLHtrZXk6XCJFc2NhcGVcIixidWJibGVzOiEwfSkpLGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoXCJrZXl1cFwiLHtrZXk6XCJFc2NhcGVcIixidWJibGVzOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDgwKX1mdW5jdGlvbiBWKGUsdCl7bGV0IHI9VSh0KTtyZXR1cm4gciYmKDAsby5maW5kRXhhY3RDaG9pY2UpKGUsdCxlPT5lLnRleHRDb250ZW50KXx8bnVsbH1hc3luYyBmdW5jdGlvbiBXKGUpe0goZSksZS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2Vkb3duXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pKSxlLmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoMTIwKX1mdW5jdGlvbiBHKGUpe2xldCB0PWUuY2xvc2VzdChcIi51ZF9fc2VsZWN0XCIpLHI9dD8ucXVlcnlTZWxlY3RvcihcIi51ZF9fc2VsZWN0X19kcm9wZG93blwiKTtpZihyJiZxKHIpKXJldHVybiByO2xldCBuPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbz1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudWRfX3NlbGVjdF9fZHJvcGRvd25cIikpLmZpbHRlcihxKSxpPW51bGw7Zm9yKGxldCBlIG9mIG8pe2xldCB0PWUucXVlcnlTZWxlY3RvckFsbChcIi51ZF9fc2VsZWN0X19saXN0X19pdGVtXCIpO2lmKCF0fHwwPT09dC5sZW5ndGgpY29udGludWU7bGV0IHI9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxvPShyLmxlZnR8fDApLShuLmxlZnR8fDApLGE9KHIudG9wfHwwKS0obi5ib3R0b218fDApLGw9TWF0aC5oeXBvdChvLGEpLHM9bi53aWR0aD4wP01hdGguYWJzKHIud2lkdGgtbi53aWR0aCkvbi53aWR0aDowLHU9bCsyMDAqczsoIWl8fHU8aS5zY29yZSkmJihpPXtlbDplLHNjb3JlOnV9KX1yZXR1cm4gaT8uZWx8fG51bGx9YXN5bmMgZnVuY3Rpb24gSyhlLHQpe2xldCByPUcoZSk7aWYoIXIpcmV0dXJuITE7bGV0IG49QXJyYXkuZnJvbShyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudWRfX3NlbGVjdF9fbGlzdF9faXRlbVwiKSkuZmlsdGVyKHEpO2lmKDA9PT1uLmxlbmd0aClyZXR1cm4hMTtsZXQgbz1WKG4sdCk7cmV0dXJuISFvJiYoYXdhaXQgVyhvKSwhMCl9YXN5bmMgZnVuY3Rpb24gWChlLHQpe2xldCByPUFycmF5LmlzQXJyYXkodCk/dC5tYXAoZT0+U3RyaW5nKGUpKTpudWxsPT10P1tdOltTdHJpbmcodCldO2lmKGUuJGlucHV0JiYwIT09ci5sZW5ndGgpe2lmKGUuJGlucHV0IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpe2xldCB0PWUuJGlucHV0LG49clswXT8udHJpbSgpLnRvTG93ZXJDYXNlKCk7aWYoIW4pcmV0dXJuO2xldCBpPUFycmF5LmZyb20odC5vcHRpb25zKSxhPSgwLG8uZmluZEV4YWN0Q2hvaWNlKShpLHJbMF0sZT0+ZS50ZXh0Q29udGVudCxlPT5lLnZhbHVlKSxsPWE/aS5pbmRleE9mKGEpOi0xO2w+PTAmJih0LmZvY3VzKCksdC5zZWxlY3RlZEluZGV4PWwsdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSksdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLHQuYmx1cigpLGF3YWl0ICgwLGMuZGVsYXkpKDUwKSk7cmV0dXJufWlmKGUuJGlucHV0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe2xldCB0PWUuJGlucHV0LmNsb3Nlc3Q/LihcIi51ZF9fc2VsZWN0XCIpO2lmKHQpe2xldCB0PXIubWFwKGU9PlN0cmluZyhlKS50cmltKCkpLmZpbHRlcihCb29sZWFuKTtpZigwPT09dC5sZW5ndGgpcmV0dXJuO2ZvcihsZXQgciBvZihZKGUuJGlucHV0KSxhd2FpdCAoMCxjLmRlbGF5KSgyMDApLHQpKWF3YWl0IEsoZS4kaW5wdXQsciksYXdhaXQgKDAsYy5kZWxheSkoMTIwKTthd2FpdCB6KCk7cmV0dXJufWxldCBuPXJbMF0/LnRyaW0oKTtpZighbilyZXR1cm47bGV0IG89XCJjb21ib2JveFwiPT09ZS4kaW5wdXQuZ2V0QXR0cmlidXRlKFwicm9sZVwiKT9lLiRpbnB1dDplLiRpbnB1dC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImNvbWJvYm94XCJdJyksaT1lLiRpbnB1dC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQuYXRzeC1zZWxlY3Qtc2VhcmNoX19maWVsZFwiKXx8bz8ucXVlcnlTZWxlY3RvcihcImlucHV0LmF0c3gtc2VsZWN0LXNlYXJjaF9fZmllbGRcIik7bz8uY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgxNTApLGkmJihpLmZvY3VzKCksaS52YWx1ZT1cIlwiLGkuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDUwKSxpLnZhbHVlPW4saS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIse2J1YmJsZXM6ITB9KSksaS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiLHtidWJibGVzOiEwfSkpLGF3YWl0ICgwLGMuZGVsYXkpKDIwMCkpO2xldCBhPW8/LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil8fFwiXCIsbD0oYT9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChhKTpudWxsKXx8ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJsaXN0Ym94XCJdJyk7aWYobCl7bGV0IHQ9QXJyYXkuZnJvbShsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwib3B0aW9uXCJdLCBsaSwgZGl2JykpLmZpbHRlcihlPT4oZS50ZXh0Q29udGVudHx8XCJcIikudHJpbSgpKSxyPVwicGhvbmUgY291bnRyeSBjb2RlXCI9PT1VKGUubGFiZWwpLG89cj90LmZpbmQoZT0+VShlLnRleHRDb250ZW50fHxcIlwiKT09PVUobikpfHxudWxsOlYodCxuKXx8dFswXTtyJiZjb25zb2xlLmRlYnVnKGBbdGlrdG9rXVtwaG9uZV0gQVRTWCBjb3VudHJ5LWNvZGUgZXhhY3QgbWF0Y2g9JHshIW99IGNhbmRpZGF0ZXM9JHt0Lmxlbmd0aH1gKSxvP2F3YWl0IFcobyk6ciYmYXdhaXQgeigpfXJldHVybn19fWFzeW5jIGZ1bmN0aW9uIEooZSx0KXtsZXQgcj1BcnJheS5pc0FycmF5KHQpP3QubWFwKGU9PlN0cmluZyhlKSk6bnVsbD09dD9bXTpbU3RyaW5nKHQpXTtpZighZS4kY2hlY2tib3hzfHwwPT09ZS4kY2hlY2tib3hzLmxlbmd0aHx8MD09PXIubGVuZ3RoKXJldHVybjtsZXQgbj1yLm1hcChlPT5lLnRyaW0oKS50b0xvd2VyQ2FzZSgpKS5maWx0ZXIoQm9vbGVhbiksaT1uLnNvbWUoZT0+W1widHJ1ZVwiLFwieWVzXCIsXCJ5XCIsXCIxXCJdLmluY2x1ZGVzKGUpKSxhPW4uc29tZShlPT5bXCJmYWxzZVwiLFwibm9cIixcIm5cIixcIjBcIl0uaW5jbHVkZXMoZSkpLGw9ZS4kY2hlY2tib3hzWzBdO2lmKDE9PT1lLiRjaGVja2JveHMubGVuZ3RoJiZpJiYhbC5jaGVja2VkfHwxPT09ZS4kY2hlY2tib3hzLmxlbmd0aCYmYSYmbC5jaGVja2VkKXtsLmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoNTApO3JldHVybn1sZXQgcz1BcnJheS5mcm9tKGUuJGNoZWNrYm94cyksdT1uZXcgU2V0KG4ubWFwKGU9PigwLG8uZmluZEV4YWN0Q2hvaWNlKShzLGUsZT0+ZS5jbG9zZXN0KFwibGFiZWxcIik/LnRleHRDb250ZW50fHxlLnZhbHVlKSkuZmlsdGVyKEJvb2xlYW4pKTtmb3IobGV0IGUgb2Ygcyl7bGV0IHQ9dS5oYXMoZSk7dCYmIWUuY2hlY2tlZCYmKGUuY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSg1MCkpfX1hc3luYyBmdW5jdGlvbiBRKGUsdCl7bGV0IHI9QXJyYXkuaXNBcnJheSh0KT90Lm1hcChlPT5TdHJpbmcoZSkpOm51bGw9PXQ/W106W1N0cmluZyh0KV0sbj1yWzBdPy50cmltKCkudG9Mb3dlckNhc2UoKTtpZighbilyZXR1cm47bGV0IGk9ZS4kcmFkaW9QYXJlbnR8fGUuJGxhYmVsfHxkb2N1bWVudC5ib2R5LGE9KDAsdS5nZXRPcmRlcmVkTm9kZXNTYWZlKSgnLi8vaW5wdXRbQHR5cGU9XCJyYWRpb1wiXScsaSk7Zm9yKGxldCBlIG9mIGEpe2xldCB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7ZS5pZH1cIl1gKSxyPSh0Py50ZXh0Q29udGVudHx8ZS52YWx1ZXx8XCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCksaT0oMCxvLmlzRXhhY3RDaG9pY2VNYXRjaCkocixuKTtpZihpKXtlLmNoZWNrZWR8fChlLmNsaWNrKCksYXdhaXQgKDAsYy5kZWxheSkoNTApKTtyZXR1cm59fX1hc3luYyBmdW5jdGlvbiBaKGUsdCxyKXtsZXQgbj0oMCx1LmdldEZpcnN0T3JkZXJlZE5vZGVTYWZlKSgnLi8vaW5wdXRbQHR5cGU9XCJmaWxlXCIgYW5kIChjb250YWlucyhAYWNjZXB0LCBcInBkZlwiKSBvciBjb250YWlucyhAYWNjZXB0LCBcIi5wZGZcIikgb3Igbm90KEBhY2NlcHQpKV0nKXx8ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKTtuJiZhd2FpdCAoMCxsLnVwbG9hZEZpbGVzKShuLGF3YWl0ICgwLGEuZmV0Y2hQZGZBc0Jsb2IpKGUpLHQscixcIlJlc3VtZS9DVlwiKX1sZXQgZWU9W1wid2hpY2ggc29jaWFsIG5ldHdvcmtpbmcgcGxhdGZvcm1cIixcIndoZXJlIGVsc2UgZGlkIHlvdSBoZWFyXCJdO2Z1bmN0aW9uIGV0KGUpe2xldCB0PWUucXVlcnlTZWxlY3RvcihcIi51ZC1mb3JtaWx5LWl0ZW0tbGFiZWwtY29udGVudFwiKXx8ZS5xdWVyeVNlbGVjdG9yKFwiLnVkLWZvcm1pbHktaXRlbS1sYWJlbFwiKTtyZXR1cm4odD8udGV4dENvbnRlbnR8fFwiXCIpLnJlcGxhY2UoL1xcKitcXHMqJC9nLFwiXCIpLnRyaW0oKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpfWZ1bmN0aW9uIGVyKGUsdCl7bGV0IHI9VSh0KTtpZihyKXtmb3IobGV0W3Qsbl1vZiBPYmplY3QuZW50cmllcyhlKSlpZihVKHQpPT09cnx8VSh0KS5pbmNsdWRlcyhyKXx8ci5pbmNsdWRlcyhVKHQpKSlyZXR1cm4gbn19YXN5bmMgZnVuY3Rpb24gZW4oZSl7aWYoIWV8fFwib2JqZWN0XCIhPXR5cGVvZiBlKXJldHVybjtsZXQgdD1hd2FpdCAoMCxzLndhaXRGb3JDb25kaXRpb24pKCgpPT57bGV0IGU9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVkLWZvcm1pbHktaXRlbVwiKSk7cmV0dXJuIGUuc29tZShlPT57bGV0IHQ9ZXQoZSk7cmV0dXJuIGVlLnNvbWUoZT0+VSh0KS5pbmNsdWRlcyhlKSl9KX0se3RpbWVvdXQ6MjUwMCxpbnRlcnZhbDoxNTAsb2JzZXJ2ZVRhcmdldDpkb2N1bWVudC5ib2R5fSk7aWYoIXQpcmV0dXJuO2F3YWl0ICgwLGMuZGVsYXkpKDIwMCk7bGV0IHI9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVkLWZvcm1pbHktaXRlbVwiKSk7Zm9yKGxldCB0IG9mIHIpe2xldCByPWV0KHQpLG49ZWUuc29tZShlPT5VKHIpLmluY2x1ZGVzKGUpKTtpZighbiljb250aW51ZTtsZXQgbz1lcihlLHIpO2lmKG51bGw9PW8pY29udGludWU7bGV0IGE9dC5xdWVyeVNlbGVjdG9yKFwiLnVkX19zZWxlY3QgLnVkX19zZWxlY3RfX3NlbGVjdG9yXCIpO2lmKGEpe2xldCBlPUFycmF5LmlzQXJyYXkobyk/by5tYXAoZT0+U3RyaW5nKGUpLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pOltTdHJpbmcobykudHJpbSgpXS5maWx0ZXIoQm9vbGVhbik7aWYoMD09PWUubGVuZ3RoKWNvbnRpbnVlO2ZvcihsZXQgdCBvZihZKGEpLGF3YWl0ICgwLGMuZGVsYXkpKDIwMCksZSkpYXdhaXQgSyhhLHQpLGF3YWl0ICgwLGMuZGVsYXkpKDEyMCk7YXdhaXQgeigpO2NvbnRpbnVlfWxldCBsPXQucXVlcnlTZWxlY3RvcihcImlucHV0LnVkX19uYXRpdmUtaW5wdXRcIik7aWYobCl7bGV0IGU9QXJyYXkuaXNBcnJheShvKT9vWzBdOm87aWYobnVsbD09ZXx8XCJcIj09PWUpY29udGludWU7YXdhaXQgKDAsaS5maWxsRGVmYXVsdElucHV0RmllbGQpKGwsU3RyaW5nKGUpKSxhd2FpdCAoMCxjLmRlbGF5KSg4MCl9fX1hc3luYyBmdW5jdGlvbiBlbygpe2xldCBlPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51cGxvYWRGaWxlLWxvYWRlZE9wZXJhdGVzIC51cGxvYWRGaWxlLWxvYWRlZE9wZXJhdGVcIikpLmZpbmQoZT0+XCJkZWxldGVcIj09PShlLnRleHRDb250ZW50fHxcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKSl8fG51bGw7ZSYmKGUuY2xpY2soKSxhd2FpdCAoMCxjLmRlbGF5KSgyMDApKX1cclxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6Im9wZXJhdGlvbnMuMDlhYzBlN2UuanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);